import { describe, expect, it } from 'vitest';
import { calculateDividendYield } from './logic';

describe('calculateDividendYield', () => {
  it('annualises a quarterly dividend and calculates gross income', () => {
    const result = calculateDividendYield({
      pricePerShare: 100,
      dividendPerPayment: 1,
      cadence: 'quarterly',
      shares: 50,
      withholdingRate: 0,
      growthRate: 0,
    });

    expect(result).toMatchObject({
      annualDividendPerShare: 4,
      grossYieldPercent: 4,
      grossAnnualIncome: 200,
      netAnnualIncome: 200,
    });
  });

  it('applies withholding without changing the gross yield', () => {
    const result = calculateDividendYield({
      pricePerShare: 80,
      dividendPerPayment: 2,
      cadence: 'annual',
      shares: 10,
      withholdingRate: 25,
      growthRate: 10,
    });

    expect(result).toMatchObject({
      grossYieldPercent: 2.5,
      netYieldPercent: 1.875,
      grossAnnualIncome: 20,
      netAnnualIncome: 15,
      forwardYieldPercent: 2.75,
    });
  });

  it('clamps withholding to the useful 0 to 100 range', () => {
    const result = calculateDividendYield({
      pricePerShare: 100,
      dividendPerPayment: 4,
      cadence: 'annual',
      shares: 1,
      withholdingRate: 140,
      growthRate: 0,
    });

    expect(result?.netYieldPercent).toBe(0);
  });

  it('rejects a zero price and negative dividend', () => {
    expect(calculateDividendYield({
      pricePerShare: 0,
      dividendPerPayment: 1,
      cadence: 'annual',
      shares: 1,
      withholdingRate: 0,
      growthRate: 0,
    })).toBeNull();
    expect(calculateDividendYield({
      pricePerShare: 100,
      dividendPerPayment: -1,
      cadence: 'annual',
      shares: 1,
      withholdingRate: 0,
      growthRate: 0,
    })).toBeNull();
  });
});
