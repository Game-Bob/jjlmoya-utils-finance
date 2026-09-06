import { describe, expect, it } from 'vitest';
import { calculateCapitalGains, validateCapitalGainsInput, type CapitalGainsInput } from './logic';

const input: CapitalGainsInput = {
  purchasePrice: 100000,
  acquisitionCosts: 5000,
  improvements: 10000,
  salePrice: 180000,
  sellingCosts: 6000,
  taxRate: 20,
  alternativeSalePrice: 190000,
  alternativeSellingCosts: 7000,
};

describe('calculateCapitalGains', () => {
  it('calculates the basis, gain, tax estimate and comparison', () => {
    const result = calculateCapitalGains(input);

    expect(result?.current).toMatchObject({
      acquisitionBasis: 115000,
      netSaleValue: 174000,
      gainOrLoss: 59000,
      taxableGain: 59000,
      estimatedTax: 11800,
      netGainAfterTax: 47200,
      netProceeds: 162200,
      status: 'gain',
    });
    expect(result?.alternative).toMatchObject({ estimatedTax: 13600, netGainAfterTax: 54400 });
    expect(result?.comparison).toEqual({
      netGainDifference: 7200,
      taxDifference: 1800,
      salePriceDifference: 10000,
      betterScenario: 'alternative',
    });
  });

  it('does not estimate tax when the scenario is a loss', () => {
    const result = calculateCapitalGains({ ...input, salePrice: 90000, alternativeSalePrice: 95000 });

    expect(result?.current).toMatchObject({ gainOrLoss: -31000, taxableGain: 0, estimatedTax: 0, status: 'loss' });
  });

  it('accepts a break-even scenario and rounds long decimal results', () => {
    const result = calculateCapitalGains({
      ...input,
      purchasePrice: 0.1,
      acquisitionCosts: 0,
      improvements: 0,
      salePrice: 0.3,
      sellingCosts: 0,
      taxRate: 33.333,
      alternativeSalePrice: 0.1,
      alternativeSellingCosts: 0,
    });

    expect(result?.current).toMatchObject({ gainOrLoss: 0.2, estimatedTax: 0.07, netGainAfterTax: 0.13 });
    expect(result?.alternative.status).toBe('breakEven');
  });

  it('reports invalid, negative, out-of-range and zero inputs', () => {
    const errors = validateCapitalGainsInput({ ...input, purchasePrice: 0, taxRate: 101, sellingCosts: -1 });

    expect(errors).toMatchObject({
      purchasePrice: expect.any(String),
      sellingCosts: expect.any(String),
      taxRate: expect.any(String),
    });
    expect(calculateCapitalGains({ ...input, alternativeSalePrice: Number.NaN })).toBeNull();
  });
});
