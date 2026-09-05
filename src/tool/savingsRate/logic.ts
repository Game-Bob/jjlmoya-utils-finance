export type SavingsPeriod = "monthly" | "yearly";

export interface SavingsRateInput {
  income: number;
  saved: number;
  extraContribution: number;
  targetRate: number;
  incomeChange: number;
  spendingChange: number;
  period: SavingsPeriod;
}

export interface SavingsRateScenario {
  income: number;
  spending: number;
  saved: number;
  rate: number;
  changeFromBase: number;
  targetGap: number;
  additionalToTarget: number;
}

export interface SavingsRateResult {
  period: SavingsPeriod;
  income: number;
  spending: number;
  saved: number;
  rate: number;
  annualIncome: number;
  annualSaved: number;
  targetRate: number;
  targetGap: number;
  additionalToTarget: number;
  scenario: SavingsRateScenario;
}

const round = (value: number, decimals = 2): number => {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
};

const safeRate = (saved: number, income: number): number => {
  if (income <= 0) return 0;
  return round((saved / income) * 100);
};

const annualize = (value: number, period: SavingsPeriod): number =>
  period === "monthly" ? value * 12 : value;

const isValidInput = (input: SavingsRateInput): boolean => {
  const values = [
    input.income,
    input.saved,
    input.extraContribution,
    input.targetRate,
    input.incomeChange,
    input.spendingChange,
  ];
  return (
    !values.some((value) => !Number.isFinite(value)) &&
    input.income > 0 &&
    input.saved >= 0 &&
    input.extraContribution >= 0 &&
    input.targetRate >= 0 &&
    input.targetRate <= 100 &&
    ["monthly", "yearly"].includes(input.period) &&
    input.saved + input.extraContribution <= input.income
  );
};

const buildScenario = (
  input: SavingsRateInput,
  spending: number,
  baseRate: number,
): SavingsRateScenario => {
  const scenarioIncome = input.income * (1 + input.incomeChange / 100);
  const scenarioSpending = Math.max(
    0,
    spending * (1 + input.spendingChange / 100),
  );
  const scenarioSaved = scenarioIncome - scenarioSpending;
  const scenarioRate = safeRate(scenarioSaved, scenarioIncome);
  return {
    income: round(scenarioIncome),
    spending: round(scenarioSpending),
    saved: round(scenarioSaved),
    rate: scenarioRate,
    changeFromBase: round(scenarioRate - baseRate),
    targetGap: round(input.targetRate - scenarioRate),
    additionalToTarget: round(
      Math.max(0, (input.targetRate / 100) * scenarioIncome - scenarioSaved),
    ),
  };
};

export function calculateSavingsRate(
  input: SavingsRateInput,
): SavingsRateResult | null {
  if (!isValidInput(input)) return null;
  const saved = input.saved + input.extraContribution;
  const spending = input.income - saved;
  const rate = safeRate(saved, input.income);
  const additionalToTarget = Math.max(
    0,
    (input.targetRate / 100) * input.income - saved,
  );

  return {
    period: input.period,
    income: round(input.income),
    spending: round(spending),
    saved: round(saved),
    rate,
    annualIncome: round(annualize(input.income, input.period)),
    annualSaved: round(annualize(saved, input.period)),
    targetRate: round(input.targetRate),
    targetGap: round(input.targetRate - rate),
    additionalToTarget: round(additionalToTarget),
    scenario: buildScenario(input, spending, rate),
  };
}
