export type LoanMode = "rate" | "payment";

export interface LoanScenarioInput {
  name: string;
  principal: number;
  termMonths: number;
  mode: LoanMode;
  annualRate: number;
  monthlyPayment: number;
  upfrontFees: number;
  monthlyFees: number;
  finalFees: number;
}

export interface LoanScenarioResult {
  valid: boolean;
  name: string;
  principal: number;
  termMonths: number;
  annualRate: number;
  monthlyPayment: number;
  upfrontFees: number;
  monthlyFees: number;
  finalFees: number;
  totalPaid: number;
  totalFees: number;
  financeCost: number;
  netCashReceived: number;
  effectiveApr: number;
  monthlyEffectiveRate: number;
  error?: string;
}

export interface ComparisonResult {
  winner: "a" | "b" | "tie" | "none";
  difference: number;
  message: "lower" | "tie" | "invalid";
}

function isFiniteNonNegative(value: number): boolean {
  return Number.isFinite(value) && value >= 0;
}

function invalidResult(
  input: LoanScenarioInput,
  error: string,
): LoanScenarioResult {
  return {
    valid: false,
    name: input.name,
    principal: input.principal,
    termMonths: input.termMonths,
    annualRate: input.annualRate,
    monthlyPayment: input.monthlyPayment,
    upfrontFees: input.upfrontFees,
    monthlyFees: input.monthlyFees,
    finalFees: input.finalFees,
    totalPaid: 0,
    totalFees: 0,
    financeCost: 0,
    netCashReceived: 0,
    effectiveApr: 0,
    monthlyEffectiveRate: 0,
    error,
  };
}

export function monthlyPaymentFromRate(
  principal: number,
  annualRate: number,
  termMonths: number,
): number {
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / termMonths;
  const growth = (1 + monthlyRate) ** termMonths;
  return (principal * (monthlyRate * growth)) / (growth - 1);
}

function presentValue(
  monthlyOutflow: number,
  finalFee: number,
  termMonths: number,
  monthlyRate: number,
): number {
  let value = 0;
  for (let month = 1; month <= termMonths; month += 1) {
    value += monthlyOutflow / (1 + monthlyRate) ** month;
  }
  return value + finalFee / (1 + monthlyRate) ** termMonths;
}

function findRateUpperBound(input: {
  netCashReceived: number;
  monthlyOutflow: number;
  finalFee: number;
  termMonths: number;
}): number | null {
  let high = 1;
  while (
    presentValue(input.monthlyOutflow, input.finalFee, input.termMonths, high) >
      input.netCashReceived &&
    high < 128
  )
    high *= 2;
  return high >= 128 &&
    presentValue(input.monthlyOutflow, input.finalFee, input.termMonths, high) >
      input.netCashReceived
    ? null
    : high;
}

function refineMonthlyRate(input: {
  netCashReceived: number;
  monthlyOutflow: number;
  finalFee: number;
  termMonths: number;
  high: number;
}): number {
  let low = -0.99;
  let high = input.high;
  for (let iteration = 0; iteration < 80; iteration += 1) {
    const middle = (low + high) / 2;
    if (
      presentValue(
        input.monthlyOutflow,
        input.finalFee,
        input.termMonths,
        middle,
      ) > input.netCashReceived
    )
      low = middle;
    else high = middle;
  }
  return (low + high) / 2;
}

function solveMonthlyRate(
  netCashReceived: number,
  monthlyOutflow: number,
  finalFee: number,
  termMonths: number,
): number | null {
  const input = { netCashReceived, monthlyOutflow, finalFee, termMonths };
  if (
    presentValue(monthlyOutflow, finalFee, termMonths, -0.99) < netCashReceived
  )
    return null;
  const high = findRateUpperBound(input);
  return high === null ? null : refineMonthlyRate({ ...input, high });
}

function validateBasics(input: LoanScenarioInput): string | undefined {
  if (!Number.isFinite(input.principal) || input.principal <= 0)
    return "principal";
  if (
    !Number.isInteger(input.termMonths) ||
    input.termMonths <= 0 ||
    input.termMonths > 600
  )
    return "term";
  return undefined;
}

function validateFees(input: LoanScenarioInput): string | undefined {
  if (
    !isFiniteNonNegative(input.upfrontFees) ||
    !isFiniteNonNegative(input.monthlyFees) ||
    !isFiniteNonNegative(input.finalFees)
  )
    return "fees";
  return undefined;
}

function validateMode(input: LoanScenarioInput): string | undefined {
  if (
    input.mode === "rate" &&
    (!isFiniteNonNegative(input.annualRate) || input.annualRate > 100)
  )
    return "rate";
  if (
    input.mode === "payment" &&
    (!isFiniteNonNegative(input.monthlyPayment) || input.monthlyPayment === 0)
  )
    return "payment";
  return undefined;
}

function validateScenario(input: LoanScenarioInput): string | undefined {
  return validateBasics(input) ?? validateFees(input) ?? validateMode(input);
}

function buildResult(
  input: LoanScenarioInput,
  payment: number,
  netCashReceived: number,
  monthlyEffectiveRate: number,
): LoanScenarioResult {
  const totalFees =
    input.upfrontFees + input.monthlyFees * input.termMonths + input.finalFees;
  const totalPaid =
    payment * input.termMonths +
    input.monthlyFees * input.termMonths +
    input.finalFees;
  return {
    valid: true,
    name: input.name,
    principal: input.principal,
    termMonths: input.termMonths,
    annualRate: input.mode === "rate" ? input.annualRate : 0,
    monthlyPayment: payment,
    upfrontFees: input.upfrontFees,
    monthlyFees: input.monthlyFees,
    finalFees: input.finalFees,
    totalPaid,
    totalFees,
    financeCost: totalPaid - input.principal,
    netCashReceived,
    effectiveApr: ((1 + monthlyEffectiveRate) ** 12 - 1) * 100,
    monthlyEffectiveRate,
  };
}

export function calculateScenario(
  input: LoanScenarioInput,
): LoanScenarioResult {
  const validationError = validateScenario(input);
  if (validationError) return invalidResult(input, validationError);
  const payment =
    input.mode === "rate"
      ? monthlyPaymentFromRate(
          input.principal,
          input.annualRate,
          input.termMonths,
        )
      : input.monthlyPayment;
  const netCashReceived = input.principal - input.upfrontFees;
  if (netCashReceived <= 0) return invalidResult(input, "principal");
  const monthlyEffectiveRate = solveMonthlyRate(
    netCashReceived,
    payment + input.monthlyFees,
    input.finalFees,
    input.termMonths,
  );
  if (monthlyEffectiveRate === null) return invalidResult(input, "payment");
  return buildResult(input, payment, netCashReceived, monthlyEffectiveRate);
}

export function compareScenarios(
  first: LoanScenarioResult,
  second: LoanScenarioResult,
): ComparisonResult {
  if (!first.valid || !second.valid)
    return { winner: "none", difference: 0, message: "invalid" };
  const difference = Math.abs(first.effectiveApr - second.effectiveApr);
  if (difference < 0.005) return { winner: "tie", difference, message: "tie" };
  return first.effectiveApr < second.effectiveApr
    ? { winner: "a", difference, message: "lower" }
    : { winner: "b", difference, message: "lower" };
}
