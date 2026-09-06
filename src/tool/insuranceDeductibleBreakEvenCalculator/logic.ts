import { isInsuranceCurrencyCode, type InsuranceCurrencyCode } from './currency';

export interface InsuranceDeductibleInput {
  currency: string;
  damageCost: number;
  deductible: number;
  annualPremium: number;
  premiumIncreasePercent: number;
  surchargeYears: number;
}

export type InsuranceRecommendation = 'claim' | 'payYourself' | 'breakEven';

export interface InsuranceValidationErrors {
  currency?: string;
  damageCost?: string;
  deductible?: string;
  annualPremium?: string;
  premiumIncreasePercent?: string;
  surchargeYears?: string;
}

export interface InsuranceDeductibleResult {
  currency: InsuranceCurrencyCode;
  damageCost: number;
  deductible: number;
  annualPremium: number;
  premiumIncreasePercent: number;
  surchargeYears: number;
  premiumSurcharge: number;
  insurerShare: number;
  claimCost: number;
  payYourselfCost: number;
  difference: number;
  breakEvenDamage: number;
  recommendation: InsuranceRecommendation;
}

const roundMoney = (value: number): number => Number(value.toFixed(2));
const isMoney = (value: number): boolean => Number.isFinite(value) && value >= 0 && value <= 1_000_000_000_000;

export function validateInsuranceInput(input: InsuranceDeductibleInput): InsuranceValidationErrors {
  const errors: InsuranceValidationErrors = {};
  const currency = input.currency.trim().toUpperCase();
  const addError = (key: keyof InsuranceValidationErrors, invalid: boolean): void => { if (invalid) errors[key] = key; };
  addError('currency', !isInsuranceCurrencyCode(currency));
  addError('damageCost', !Number.isFinite(input.damageCost) || input.damageCost <= 0 || input.damageCost > 1_000_000_000_000);
  addError('deductible', !isMoney(input.deductible));
  addError('annualPremium', !isMoney(input.annualPremium));
  addError('premiumIncreasePercent', !Number.isFinite(input.premiumIncreasePercent) || input.premiumIncreasePercent < 0 || input.premiumIncreasePercent > 100);
  addError('surchargeYears', !Number.isFinite(input.surchargeYears) || input.surchargeYears <= 0 || input.surchargeYears > 20);
  return errors;
}

const recommendationFor = (difference: number): InsuranceRecommendation => {
  if (difference > 0.005) return 'claim';
  if (difference < -0.005) return 'payYourself';
  return 'breakEven';
};

export function calculateInsuranceDeductibleBreakEven(input: InsuranceDeductibleInput): InsuranceDeductibleResult | null {
  const errors = validateInsuranceInput(input);
  if (Object.keys(errors).length > 0) return null;
  const currency = input.currency.trim().toUpperCase() as InsuranceCurrencyCode;
  const premiumSurcharge = roundMoney(input.annualPremium * input.premiumIncreasePercent / 100 * input.surchargeYears);
  const insurerShare = roundMoney(Math.max(0, input.damageCost - input.deductible));
  const claimCost = roundMoney(Math.min(input.damageCost, input.deductible) + premiumSurcharge);
  const payYourselfCost = roundMoney(input.damageCost);
  const difference = roundMoney(payYourselfCost - claimCost);
  const breakEvenDamage = roundMoney(input.deductible + premiumSurcharge);
  return { currency, damageCost: payYourselfCost, deductible: roundMoney(input.deductible), annualPremium: roundMoney(input.annualPremium), premiumIncreasePercent: input.premiumIncreasePercent, surchargeYears: input.surchargeYears, premiumSurcharge, insurerShare, claimCost, payYourselfCost, difference, breakEvenDamage, recommendation: recommendationFor(difference) };
}
