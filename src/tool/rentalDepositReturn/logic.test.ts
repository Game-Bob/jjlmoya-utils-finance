import { describe, expect, it } from 'vitest';
import { CURRENCIES, getDefaultCurrency } from './currency';
import { calculateRentalDepositReturn, type DeductionInput } from './logic';

const deductions: DeductionInput[] = [
  { id: 'bills', description: 'Final bills', amount: 84, status: 'confirmed' },
  { id: 'repair', description: 'Wall repair', amount: 165, status: 'disputed' },
  { id: 'cleaning', description: 'Cleaning', amount: 60, status: 'disputed' },
];

describe('calculateRentalDepositReturn', () => {
  it('supports the shared finance currency set and locale defaults', () => {
    expect(Object.keys(CURRENCIES)).toHaveLength(20);
    expect(getDefaultCurrency('en')).toBe('USD');
    expect(getDefaultCurrency('es')).toBe('EUR');
    expect(getDefaultCurrency('en-GB')).toBe('GBP');
    expect(getDefaultCurrency('ja')).toBe('JPY');
  });

  it('separates the estimated return from the return without disputed deductions', () => {
    const result = calculateRentalDepositReturn({ currency: 'eur', deposit: 1200, deductions });
    expect(result).toMatchObject({
      totalDeductions: 309,
      confirmedDeductions: 84,
      disputedDeductions: 225,
      estimatedReturn: 891,
      undisputedReturn: 1116,
    });
  });

  it('creates a scenario for every disputed deduction', () => {
    const result = calculateRentalDepositReturn({ currency: 'USD', deposit: 1200, deductions });
    expect(result?.scenarios).toEqual([
      { deductionId: 'repair', description: 'Wall repair', returnAmount: 1056, additionalReturn: 165 },
      { deductionId: 'cleaning', description: 'Cleaning', returnAmount: 951, additionalReturn: 60 },
    ]);
  });

  it('does not return a negative balance and flags deductions above the deposit', () => {
    const result = calculateRentalDepositReturn({
      currency: 'GBP',
      deposit: 100,
      deductions: [{ id: 'repair', description: 'Repair', amount: 140, status: 'confirmed' }],
    });
    expect(result).toMatchObject({ estimatedReturn: 0, undisputedReturn: 0, overDeducted: 40 });
  });

  it('rejects invalid currency, deposit and deduction data', () => {
    expect(calculateRentalDepositReturn({ currency: 'EURO', deposit: 100, deductions })).toBeNull();
    expect(calculateRentalDepositReturn({ currency: 'EUR', deposit: -1, deductions })).toBeNull();
    expect(calculateRentalDepositReturn({ currency: 'EUR', deposit: 100, deductions: [{ ...deductions[0]!, amount: -1 }] })).toBeNull();
  });
});
