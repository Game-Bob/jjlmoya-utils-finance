import { describe, expect, it } from 'vitest';
import { calculateRenterInsuranceCoverageGap, validateRenterInsuranceInput, type RenterInsuranceInput } from './logic';

const baseInput: RenterInsuranceInput = {
  currency: 'EUR',
  policyLimit: 18000,
  deductible: 250,
  sampleLoss: 5000,
  inventory: [
    { category: 'furniture', value: 7000 },
    { category: 'electronics', value: 6000 },
    { category: 'clothing', value: 2500 },
    { category: 'kitchen', value: 1500 },
    { category: 'personal', value: 1000 },
    { category: 'other', value: 1000 },
  ],
};

describe('calculateRenterInsuranceCoverageGap', () => {
  it('finds the coverage gap and ranks the largest inventory categories', () => {
    const result = calculateRenterInsuranceCoverageGap(baseInput);
    expect(result).toMatchObject({ totalContents: 19000, coverageGap: 1000, coverageRatio: 18000 / 19000, uncoveredPercent: 5.26, status: 'review' });
    expect(result?.largestCategories.map((item) => item.category)).toEqual(['furniture', 'electronics', 'clothing']);
  });

  it('estimates the illustrative payout after proportional cover and deductible', () => {
    const result = calculateRenterInsuranceCoverageGap(baseInput);
    expect(result).toMatchObject({ estimatedPayout: 4486.84, estimatedOutOfPocket: 513.16 });
  });

  it('marks a fully covered inventory as safe', () => {
    const result = calculateRenterInsuranceCoverageGap({ ...baseInput, policyLimit: 25000 });
    expect(result).toMatchObject({ coverageGap: 0, coverageRatio: 1, uncoveredPercent: 0, status: 'safe' });
  });

  it('marks a large gap as exposed', () => {
    const result = calculateRenterInsuranceCoverageGap({ ...baseInput, policyLimit: 10000 });
    expect(result?.status).toBe('exposed');
    expect(result?.coverageGap).toBe(9000);
  });

  it('rejects empty inventories and impossible policy values', () => {
    const invalid = { ...baseInput, policyLimit: 0, sampleLoss: 0, inventory: [] };
    expect(Object.keys(validateRenterInsuranceInput(invalid))).toEqual(['policyLimit', 'sampleLoss', 'inventory']);
    expect(calculateRenterInsuranceCoverageGap(invalid)).toBeNull();
  });

  it('does not let a sample loss exceed the estimated contents', () => {
    const result = calculateRenterInsuranceCoverageGap({ ...baseInput, sampleLoss: 50000, policyLimit: 25000, deductible: 0 });
    expect(result).toMatchObject({ estimatedPayout: 19000, estimatedOutOfPocket: 0 });
  });
});
