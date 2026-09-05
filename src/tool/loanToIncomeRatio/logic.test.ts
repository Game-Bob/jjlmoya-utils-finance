import { describe, expect, it } from 'vitest';
import { calculateLoanToIncomeRatio } from './logic';

const baseInput = {
  income: 5000,
  incomeBasis: 'gross' as const,
  existingMonthlyPayments: 1200,
  newMonthlyPayment: 500,
  newLoanTermMonths: 60,
  threshold: 36,
};

describe('calculateLoanToIncomeRatio', () => {
  it('calculates current and projected debt ratios for a reference case', () => {
    const result = calculateLoanToIncomeRatio(baseInput);

    expect(result).toMatchObject({
      current: { ratio: 24, remainingIncome: 3800, thresholdMargin: 600, withinThreshold: true },
      projected: { ratio: 34, remainingIncome: 3300, thresholdMargin: 100, withinThreshold: true },
      ratioChange: 10,
      newLoanTotal: 30000,
    });
  });

  it('flags a projected payment that exceeds the configured threshold', () => {
    const result = calculateLoanToIncomeRatio({ ...baseInput, threshold: 30 });

    expect(result?.projected.withinThreshold).toBe(false);
    expect(result?.projected.thresholdMargin).toBe(-200);
  });

  it('supports a zero-payment scenario without requiring a loan term', () => {
    const result = calculateLoanToIncomeRatio({ ...baseInput, newMonthlyPayment: 0, newLoanTermMonths: 0 });

    expect(result?.current).toEqual(result?.projected);
    expect(result?.newLoanTotal).toBe(0);
    expect(result?.ratioChange).toBe(0);
  });

  it('increases the ratio monotonically when the new payment increases', () => {
    const lower = calculateLoanToIncomeRatio({ ...baseInput, newMonthlyPayment: 200 });
    const higher = calculateLoanToIncomeRatio({ ...baseInput, newMonthlyPayment: 800 });

    expect(higher!.projected.ratio).toBeGreaterThan(lower!.projected.ratio);
    expect(higher!.projected.remainingIncome).toBeLessThan(lower!.projected.remainingIncome);
  });

  it('rejects incomplete, impossible and non-finite inputs', () => {
    expect(calculateLoanToIncomeRatio({ ...baseInput, income: 0 })).toBeNull();
    expect(calculateLoanToIncomeRatio({ ...baseInput, existingMonthlyPayments: -1 })).toBeNull();
    expect(calculateLoanToIncomeRatio({ ...baseInput, newMonthlyPayment: Number.POSITIVE_INFINITY })).toBeNull();
    expect(calculateLoanToIncomeRatio({ ...baseInput, newMonthlyPayment: 200, newLoanTermMonths: 0 })).toBeNull();
    expect(calculateLoanToIncomeRatio({ ...baseInput, threshold: 101 })).toBeNull();
  });
});
