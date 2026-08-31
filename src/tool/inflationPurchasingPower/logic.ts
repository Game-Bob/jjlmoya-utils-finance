export type CashFlowMode = 'none' | 'contribution' | 'withdrawal';

export interface InflationPurchasingPowerInput {
  startingAmount: number;
  annualInflationRate: number;
  years: number;
  annualCashFlow: number;
  cashFlowMode: CashFlowMode;
}

export interface InflationTimelinePoint {
  year: number;
  costEquivalent: number;
  unchangedRealValue: number;
  nominalBalance: number;
  realBalance: number;
}

export interface InflationPurchasingPowerResult {
  input: InflationPurchasingPowerInput;
  priceFactor: number;
  purchasingPowerLossPercent: number;
  points: InflationTimelinePoint[];
  milestones: InflationTimelinePoint[];
  depletionYear: number | null;
}

const round = (value: number): number => Number(value.toFixed(2));

function hasFiniteValues(input: InflationPurchasingPowerInput): boolean {
  return [input.startingAmount, input.annualInflationRate, input.years, input.annualCashFlow].every(Number.isFinite);
}

function hasValidRanges(input: InflationPurchasingPowerInput): boolean {
  return input.startingAmount > 0
    && input.annualInflationRate > -100
    && input.annualInflationRate <= 100
    && Number.isInteger(input.years)
    && input.years >= 1
    && input.years <= 80
    && input.annualCashFlow >= 0;
}

function hasValidCashFlowMode(input: InflationPurchasingPowerInput): boolean {
  return ['none', 'contribution', 'withdrawal'].includes(input.cashFlowMode);
}

function isValidInput(input: InflationPurchasingPowerInput): boolean {
  return hasFiniteValues(input) && hasValidRanges(input) && hasValidCashFlowMode(input);
}

function getNominalBalance(input: InflationPurchasingPowerInput, year: number): number {
  const flow = input.cashFlowMode === 'contribution' ? input.annualCashFlow : -input.annualCashFlow;
  if (input.cashFlowMode === 'none') return input.startingAmount;
  return Math.max(0, input.startingAmount + flow * year);
}

function createPoint(input: InflationPurchasingPowerInput, year: number): InflationTimelinePoint {
  const priceFactor = (1 + input.annualInflationRate / 100) ** year;
  const nominalBalance = getNominalBalance(input, year);
  return {
    year,
    costEquivalent: round(input.startingAmount * priceFactor),
    unchangedRealValue: round(input.startingAmount / priceFactor),
    nominalBalance: round(nominalBalance),
    realBalance: round(nominalBalance / priceFactor),
  };
}

export function getMilestoneYears(years: number): number[] {
  return [...new Set([0, Math.round(years * 0.25), Math.round(years * 0.5), Math.round(years * 0.75), years])];
}

export function calculateInflationTimeline(input: InflationPurchasingPowerInput): InflationPurchasingPowerResult | null {
  if (!isValidInput(input)) return null;
  const points = Array.from({ length: input.years + 1 }, (_, year) => createPoint(input, year));
  const milestones = getMilestoneYears(input.years)
    .map((year) => points[year])
    .filter((point): point is InflationTimelinePoint => point !== undefined);
  const depletionYear = input.cashFlowMode === 'withdrawal' && input.annualCashFlow > 0
    ? points.find((point) => point.nominalBalance === 0 && point.year > 0)?.year ?? null
    : null;
  const priceFactor = (1 + input.annualInflationRate / 100) ** input.years;
  return {
    input,
    priceFactor: round(priceFactor),
    purchasingPowerLossPercent: round((1 - 1 / priceFactor) * 100),
    points,
    milestones,
    depletionYear,
  };
}
