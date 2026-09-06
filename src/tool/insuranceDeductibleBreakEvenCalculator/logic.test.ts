import { describe, expect, it } from 'vitest';
import { calculateInsuranceDeductibleBreakEven, validateInsuranceInput, type InsuranceDeductibleInput } from './logic';

const baseInput: InsuranceDeductibleInput = { currency: 'USD', damageCost: 2500, deductible: 500, annualPremium: 1200, premiumIncreasePercent: 10, surchargeYears: 3 };

describe('calculateInsuranceDeductibleBreakEven', () => {
  it('compares a claim with paying the full damage cost', () => {
    const result = calculateInsuranceDeductibleBreakEven(baseInput);
    expect(result).toMatchObject({ claimCost: 860, payYourselfCost: 2500, premiumSurcharge: 360, insurerShare: 2000, recommendation: 'claim', breakEvenDamage: 860 });
  });

  it('recommends paying yourself when the damage is below break even', () => {
    const result = calculateInsuranceDeductibleBreakEven({ ...baseInput, damageCost: 700 });
    expect(result?.recommendation).toBe('payYourself');
    expect(result?.claimCost).toBe(860);
  });

  it('recognizes the exact break-even amount', () => {
    const result = calculateInsuranceDeductibleBreakEven({ ...baseInput, damageCost: 860 });
    expect(result?.recommendation).toBe('breakEven');
    expect(result?.difference).toBe(0);
  });

  it('rejects invalid ranges and impossible values', () => {
    const invalid = { ...baseInput, damageCost: 0, premiumIncreasePercent: 101, surchargeYears: 21 };
    expect(Object.keys(validateInsuranceInput(invalid))).toEqual(['damageCost', 'premiumIncreasePercent', 'surchargeYears']);
    expect(calculateInsuranceDeductibleBreakEven(invalid)).toBeNull();
  });

  it('handles a deductible larger than the damage', () => {
    const result = calculateInsuranceDeductibleBreakEven({ ...baseInput, damageCost: 300, deductible: 500, premiumIncreasePercent: 0 });
    expect(result).toMatchObject({ insurerShare: 0, claimCost: 300, recommendation: 'breakEven' });
  });

  it('accepts the documented upper bounds without losing a finite result', () => {
    const result = calculateInsuranceDeductibleBreakEven({ currency: 'USD', damageCost: 1_000_000_000_000, deductible: 1_000_000_000_000, annualPremium: 1_000_000_000_000, premiumIncreasePercent: 100, surchargeYears: 20 });
    expect(result?.claimCost).toBe(21_000_000_000_000);
    expect(result?.payYourselfCost).toBe(1_000_000_000_000);
  });
});
