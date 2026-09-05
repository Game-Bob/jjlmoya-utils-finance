export type IncomeBasis = 'gross' | 'net';

export interface LoanToIncomeRatioInput {
  income: number;
  incomeBasis: IncomeBasis;
  existingMonthlyPayments: number;
  newMonthlyPayment: number;
  newLoanTermMonths: number;
  threshold: number;
}

export interface LoanToIncomeScenario {
  monthlyDebt: number;
  ratio: number;
  remainingIncome: number;
  thresholdMargin: number;
  withinThreshold: boolean;
}

export interface LoanToIncomeRatioResult {
  current: LoanToIncomeScenario;
  projected: LoanToIncomeScenario;
  ratioChange: number;
  newLoanTotal: number;
  incomeBasis: IncomeBasis;
  threshold: number;
}

const MAX_AMOUNT = 1_000_000_000;
const MAX_TERM_MONTHS = 600;

const isFiniteNumber = (value: number): boolean => Number.isFinite(value);

const isValidAmount = (value: number): boolean =>
  isFiniteNumber(value) && value >= 0 && value <= MAX_AMOUNT;

const isValidTerm = (value: number): boolean =>
  Number.isInteger(value) && value >= 0 && value <= MAX_TERM_MONTHS;

const isValidThreshold = (value: number): boolean =>
  isFiniteNumber(value) && value > 0 && value <= 100;

const round = (value: number, digits = 2): number => {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
};

const isValidInput = (input: LoanToIncomeRatioInput): boolean => [
  isFiniteNumber(input.income) && input.income > 0 && input.income <= MAX_AMOUNT,
  input.incomeBasis === 'gross' || input.incomeBasis === 'net',
  isValidAmount(input.existingMonthlyPayments),
  isValidAmount(input.newMonthlyPayment),
  isValidTerm(input.newLoanTermMonths),
  input.newMonthlyPayment === 0 || input.newLoanTermMonths > 0,
  isValidThreshold(input.threshold),
].every(Boolean);

const scenario = (monthlyDebt: number, input: LoanToIncomeRatioInput): LoanToIncomeScenario => {
  const ratio = (monthlyDebt / input.income) * 100;
  const thresholdCapacity = input.income * (input.threshold / 100);

  return {
    monthlyDebt: round(monthlyDebt),
    ratio: round(ratio),
    remainingIncome: round(input.income - monthlyDebt),
    thresholdMargin: round(thresholdCapacity - monthlyDebt),
    withinThreshold: monthlyDebt <= thresholdCapacity,
  };
};

export function calculateLoanToIncomeRatio(
  input: LoanToIncomeRatioInput,
): LoanToIncomeRatioResult | null {
  if (!isValidInput(input)) return null;

  const currentDebt = input.existingMonthlyPayments;
  const projectedDebt = currentDebt + input.newMonthlyPayment;

  return {
    current: scenario(currentDebt, input),
    projected: scenario(projectedDebt, input),
    ratioChange: round((input.newMonthlyPayment / input.income) * 100),
    newLoanTotal: round(input.newMonthlyPayment * input.newLoanTermMonths),
    incomeBasis: input.incomeBasis,
    threshold: input.threshold,
  };
}

export const loanToIncomeLimits = {
  maxAmount: MAX_AMOUNT,
  maxTermMonths: MAX_TERM_MONTHS,
} as const;
