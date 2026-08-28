export type DividendCadence = 'annual' | 'quarterly';

export interface DividendYieldInput {
  pricePerShare: number;
  dividendPerPayment: number;
  cadence: DividendCadence;
  shares: number;
  withholdingRate: number;
  growthRate: number;
}

export interface DividendYieldResult {
  pricePerShare: number;
  annualDividendPerShare: number;
  grossYieldPercent: number;
  netYieldPercent: number;
  grossAnnualIncome: number;
  netAnnualIncome: number;
  forwardAnnualDividendPerShare: number;
  forwardYieldPercent: number;
  annualizationFactor: number;
}

const round = (value: number): number => Number(value.toFixed(6));

function isValidInput(input: DividendYieldInput): boolean {
  const values = [input.pricePerShare, input.dividendPerPayment, input.shares, input.withholdingRate, input.growthRate];
  return !values.some((value) => !Number.isFinite(value)) && input.pricePerShare > 0 && input.dividendPerPayment >= 0 && input.shares >= 0;
}

export function calculateDividendYield(input: DividendYieldInput): DividendYieldResult | null {
  if (!isValidInput(input)) {
    return null;
  }
  const annualizationFactor = input.cadence === 'quarterly' ? 4 : 1;
  const annualDividendPerShare = input.dividendPerPayment * annualizationFactor;
  const taxFactor = 1 - Math.min(Math.max(input.withholdingRate, 0), 100) / 100;
  const grossYieldPercent = (annualDividendPerShare / input.pricePerShare) * 100;
  const netYieldPercent = grossYieldPercent * taxFactor;
  const grossAnnualIncome = annualDividendPerShare * input.shares;
  const netAnnualIncome = grossAnnualIncome * taxFactor;
  const forwardAnnualDividendPerShare = annualDividendPerShare * (1 + input.growthRate / 100);

  return {
    pricePerShare: round(input.pricePerShare),
    annualDividendPerShare: round(annualDividendPerShare),
    grossYieldPercent: round(grossYieldPercent),
    netYieldPercent: round(netYieldPercent),
    grossAnnualIncome: round(grossAnnualIncome),
    netAnnualIncome: round(netAnnualIncome),
    forwardAnnualDividendPerShare: round(forwardAnnualDividendPerShare),
    forwardYieldPercent: round((forwardAnnualDividendPerShare / input.pricePerShare) * 100),
    annualizationFactor,
  };
}
