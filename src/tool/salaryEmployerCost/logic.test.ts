import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SALARY_INPUT,
  MINIMUM_ANNUAL_GROSS,
  annualizeSalary,
  calculateSalaryCost,
  isSalaryInputValid,
  type SalaryCostInput,
} from './logic';
import { evaluateCostGap } from './evaluator';

const withInput = (changes: Partial<SalaryCostInput>): SalaryCostInput => ({
  ...DEFAULT_SALARY_INPUT,
  ...changes,
});

describe('annualizeSalary', () => {
  it('keeps an annual amount unchanged', () => {
    expect(annualizeSalary(DEFAULT_SALARY_INPUT)).toBe(30_000);
  });

  it('turns a monthly amount into the selected pay schedule', () => {
    expect(annualizeSalary(withInput({ amount: 2_000, amountMode: 'monthly' }))).toBe(28_000);
  });
});

describe('isSalaryInputValid', () => {
  it('accepts the full-time minimum and legal slider bounds', () => {
    expect(isSalaryInputValid(withInput({ amount: MINIMUM_ANNUAL_GROSS, irpfRate: 0, riskRate: 0.9 }))).toBe(true);
    expect(isSalaryInputValid(withInput({ amount: 200_000, irpfRate: 47, riskRate: 7.15 }))).toBe(true);
  });

  it('rejects unsupported and non-finite inputs', () => {
    expect(isSalaryInputValid(withInput({ amount: MINIMUM_ANNUAL_GROSS - 1 }))).toBe(false);
    expect(isSalaryInputValid(withInput({ irpfRate: 48 }))).toBe(false);
    expect(isSalaryInputValid(withInput({ riskRate: 0.8 }))).toBe(false);
    expect(isSalaryInputValid(withInput({ amount: Number.NaN }))).toBe(false);
  });
});

describe('calculateSalaryCost', () => {
  it('calculates the documented permanent office example', () => {
    const result = calculateSalaryCost(DEFAULT_SALARY_INPUT);
    expect(result).toMatchObject({
      annualGross: 30_000,
      annualNet: 23_550,
      annualIrpf: 4_500,
      annualEmployeeSocialSecurity: 1_950,
      annualEmployerSocialSecurity: 9_645,
      annualEmployerCost: 39_645,
      monthlyContributionBase: 2_500,
      grossPerPayment: 2_142.86,
      netPerPayment: 1_682.14,
      employerCostPerPayment: 2_831.79,
      costMultiplier: 1.322,
      workerKeepsPercent: 59.4,
    });
  });

  it('uses temporary unemployment rates', () => {
    const result = calculateSalaryCost(withInput({ contractType: 'temporary' }));
    expect(result?.annualEmployeeSocialSecurity).toBe(1_965);
    expect(result?.annualEmployerSocialSecurity).toBe(10_005);
  });

  it('caps the standard base and adds every solidarity tier', () => {
    const result = calculateSalaryCost(withInput({ amount: 120_000, irpfRate: 20 }));
    expect(result?.monthlyContributionBase).toBe(5_101.2);
    expect(result?.annualEmployeeSocialSecurity).toBe(4_109.61);
    expect(result?.annualEmployerSocialSecurity).toBe(20_337.62);
  });

  it('returns null for an invalid salary', () => {
    expect(calculateSalaryCost(withInput({ amount: 10_000 }))).toBeNull();
  });
});

describe('evaluateCostGap', () => {
  it('classifies lean, typical and wide employer contribution halos', () => {
    const lean = calculateSalaryCost(withInput({ riskRate: 0.9 }));
    const typical = calculateSalaryCost(DEFAULT_SALARY_INPUT);
    const wide = calculateSalaryCost(withInput({ contractType: 'temporary', riskRate: 7.15 }));
    if (!lean || !typical || !wide) throw new Error('Expected valid salary examples');
    expect(evaluateCostGap(lean)).toBe('lean');
    expect(evaluateCostGap(typical)).toBe('typical');
    expect(evaluateCostGap(wide)).toBe('wide');
  });
});
