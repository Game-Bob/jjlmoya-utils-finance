export interface CapitalGainsScenarioInput {
  salePrice: number;
  sellingCosts: number;
}

export interface CapitalGainsInput extends CapitalGainsScenarioInput {
  purchasePrice: number;
  acquisitionCosts: number;
  improvements: number;
  taxRate: number;
  alternativeSalePrice: number;
  alternativeSellingCosts: number;
}

export interface CapitalGainsScenarioResult {
  acquisitionBasis: number;
  netSaleValue: number;
  gainOrLoss: number;
  taxableGain: number;
  estimatedTax: number;
  netGainAfterTax: number;
  netProceeds: number;
  status: 'gain' | 'loss' | 'breakEven';
}

export interface CapitalGainsComparison {
  netGainDifference: number;
  taxDifference: number;
  salePriceDifference: number;
  betterScenario: 'current' | 'alternative' | 'same';
}

export interface CapitalGainsResult {
  current: CapitalGainsScenarioResult;
  alternative: CapitalGainsScenarioResult;
  comparison: CapitalGainsComparison;
}

export type CapitalGainsField = keyof CapitalGainsInput;
export type CapitalGainsValidationErrors = Partial<Record<CapitalGainsField, string>>;

const MAX_AMOUNT = 1_000_000_000_000_000;
const MONEY_FIELDS: CapitalGainsField[] = [
  'purchasePrice',
  'salePrice',
  'acquisitionCosts',
  'sellingCosts',
  'improvements',
  'alternativeSalePrice',
  'alternativeSellingCosts',
];

const round = (value: number): number => {
  const rounded = Number(value.toFixed(2));
  return Object.is(rounded, -0) ? 0 : rounded;
};

function getStatus(gainOrLoss: number): CapitalGainsScenarioResult['status'] {
  if (gainOrLoss > 0) return 'gain';
  if (gainOrLoss < 0) return 'loss';
  return 'breakEven';
}

function getBetterScenario(netGainDifference: number): CapitalGainsComparison['betterScenario'] {
  if (netGainDifference > 0) return 'alternative';
  if (netGainDifference < 0) return 'current';
  return 'same';
}

export function validateCapitalGainsInput(input: CapitalGainsInput): CapitalGainsValidationErrors {
  const errors: CapitalGainsValidationErrors = {};

  MONEY_FIELDS.forEach((field) => {
    const value = input[field];
    if (!Number.isFinite(value)) errors[field] = 'Enter a valid number.';
    else if (value < 0) errors[field] = 'Use zero or a positive amount.';
    else if (value > MAX_AMOUNT) errors[field] = 'Use an amount below 1 quadrillion.';
  });

  if (input.purchasePrice === 0) errors.purchasePrice = 'Enter the amount you paid for the asset.';
  if (input.salePrice === 0) errors.salePrice = 'Enter a sale price above zero.';
  if (input.alternativeSalePrice === 0) errors.alternativeSalePrice = 'Enter an alternative sale price above zero.';

  if (!Number.isFinite(input.taxRate)) errors.taxRate = 'Enter a valid tax rate.';
  else if (input.taxRate < 0 || input.taxRate > 100) errors.taxRate = 'Use a rate from 0% to 100%.';

  return errors;
}

function calculateScenario(
  input: Pick<CapitalGainsInput, 'purchasePrice' | 'acquisitionCosts' | 'improvements' | 'taxRate'> & CapitalGainsScenarioInput,
): CapitalGainsScenarioResult {
  const acquisitionBasis = input.purchasePrice + input.acquisitionCosts + input.improvements;
  const netSaleValue = input.salePrice - input.sellingCosts;
  const gainOrLoss = netSaleValue - acquisitionBasis;
  const taxableGain = Math.max(gainOrLoss, 0);
  const estimatedTax = taxableGain * (input.taxRate / 100);
  const netGainAfterTax = gainOrLoss - estimatedTax;
  const netProceeds = netSaleValue - estimatedTax;

  return {
    acquisitionBasis: round(acquisitionBasis),
    netSaleValue: round(netSaleValue),
    gainOrLoss: round(gainOrLoss),
    taxableGain: round(taxableGain),
    estimatedTax: round(estimatedTax),
    netGainAfterTax: round(netGainAfterTax),
    netProceeds: round(netProceeds),
    status: getStatus(gainOrLoss),
  };
}

export function calculateCapitalGains(input: CapitalGainsInput): CapitalGainsResult | null {
  if (Object.keys(validateCapitalGainsInput(input)).length > 0) return null;

  const current = calculateScenario(input);
  const alternative = calculateScenario({
    purchasePrice: input.purchasePrice,
    acquisitionCosts: input.acquisitionCosts,
    improvements: input.improvements,
    taxRate: input.taxRate,
    salePrice: input.alternativeSalePrice,
    sellingCosts: input.alternativeSellingCosts,
  });
  const netGainDifference = round(alternative.netGainAfterTax - current.netGainAfterTax);

  return {
    current,
    alternative,
    comparison: {
      netGainDifference,
      taxDifference: round(alternative.estimatedTax - current.estimatedTax),
      salePriceDifference: round(input.alternativeSalePrice - input.salePrice),
      betterScenario: getBetterScenario(netGainDifference),
    },
  };
}
