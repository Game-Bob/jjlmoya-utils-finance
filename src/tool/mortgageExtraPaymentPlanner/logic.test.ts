import { describe, expect, it } from 'vitest';
import { calculateMortgage, convertCurrencyAmount, getDefaultCurrency, type MortgageInputs } from './logic';

const baseInputs: MortgageInputs = {
  principal: 100000,
  annualRate: 6,
  termYears: 10,
  frequency: 'monthly',
  recurringExtra: 0,
  oneOffExtra: 0,
  oneOffPeriod: 12,
  startDate: '2026-09-01',
  currency: 'EUR',
};

describe('calculateMortgage', () => {
  it('calculates a fixed monthly payment and a complete baseline schedule', () => {
    const result = calculateMortgage(baseInputs);
    expect(result).not.toBeNull();
    expect(result?.regularPayment).toBeCloseTo(1110.21, 2);
    expect(result?.schedule).toHaveLength(120);
    expect(result?.schedule.at(-1)?.balance).toBe(0);
    expect(result?.totalExtra).toBe(0);
  });

  it('supports a zero interest loan without dividing by zero', () => {
    const result = calculateMortgage({ ...baseInputs, annualRate: 0, termYears: 1 });
    expect(result?.regularPayment).toBeCloseTo(8333.33, 2);
    expect(result?.totalInterest).toBe(0);
    expect(result?.periods).toBe(12);
  });

  it('reduces interest and duration when extras are paid', () => {
    const result = calculateMortgage({ ...baseInputs, recurringExtra: 300, oneOffExtra: 5000, oneOffPeriod: 12 });
    expect(result?.interestSaved).toBeGreaterThan(0);
    expect(result?.periodsSaved).toBeGreaterThan(0);
    expect(result?.totalExtra).toBeGreaterThan(5000);
    expect(result?.schedule.at(-1)?.balance).toBe(0);
  });

  it('uses the requested frequency for period counts and dates', () => {
    const result = calculateMortgage({ ...baseInputs, frequency: 'biweekly', termYears: 1 });
    expect(result?.periods).toBe(26);
    expect(result?.schedule[1]?.date).toBe('2026-09-15');
  });

  it('uses internal currency ratios for a global currency switch', () => {
    expect(convertCurrencyAmount(100, 'EUR', 'EUR')).toBe(100);
    expect(convertCurrencyAmount(100, 'EUR', 'USD')).toBe(117);
    expect(convertCurrencyAmount(117, 'USD', 'EUR')).toBeCloseTo(100, 8);
  });
});

describe('currency preferences', () => {
  it('selects a regional default from the locale', () => {
    expect(getDefaultCurrency('es')).toBe('EUR');
    expect(getDefaultCurrency('en')).toBe('USD');
    expect(getDefaultCurrency('en-GB')).toBe('GBP');
    expect(getDefaultCurrency('ja-JP')).toBe('JPY');
    expect(getDefaultCurrency('pt')).toBe('EUR');
    expect(getDefaultCurrency('tr')).toBe('TRY');
  });

  it('falls back to EUR for an unknown locale', () => {
    expect(getDefaultCurrency('xx')).toBe('EUR');
  });
});
