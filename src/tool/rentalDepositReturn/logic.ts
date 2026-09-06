import { isCurrencyCode, type CurrencyCode } from './currency';

export type DeductionStatus = 'confirmed' | 'disputed';

export interface DeductionInput {
  id: string;
  description: string;
  amount: number;
  status: DeductionStatus;
}

export interface RentalDepositInput {
  currency: string;
  deposit: number;
  deductions: DeductionInput[];
}

export interface DeductionResult extends DeductionInput {
  shareOfDeposit: number;
}

export interface DisputedScenario {
  deductionId: string;
  description: string;
  returnAmount: number;
  additionalReturn: number;
}

export interface RentalDepositResult {
  currency: CurrencyCode;
  deposit: number;
  deductions: DeductionResult[];
  totalDeductions: number;
  confirmedDeductions: number;
  disputedDeductions: number;
  estimatedReturn: number;
  undisputedReturn: number;
  overDeducted: number;
  scenarios: DisputedScenario[];
}

const roundMoney = (value: number): number => Number(value.toFixed(2));

const clampReturn = (deposit: number, deductions: number): number =>
  roundMoney(Math.max(0, deposit - deductions));

const isStatus = (value: string): value is DeductionStatus =>
  value === 'confirmed' || value === 'disputed';

const isValidDeduction = (deduction: DeductionInput): boolean =>
  deduction.id.trim().length > 0
  && deduction.description.trim().length > 0
  && Number.isFinite(deduction.amount)
  && deduction.amount >= 0
  && isStatus(deduction.status);

function summarizeDeductions(input: RentalDepositInput): { total: number; confirmed: number; disputed: number } {
  const total = roundMoney(input.deductions.reduce((sum, deduction) => sum + deduction.amount, 0));
  const confirmed = roundMoney(input.deductions
    .filter((deduction) => deduction.status === 'confirmed')
    .reduce((sum, deduction) => sum + deduction.amount, 0));
  return { total, confirmed, disputed: roundMoney(total - confirmed) };
}

function addShares(input: RentalDepositInput): DeductionResult[] {
  return input.deductions.map((deduction) => ({
    ...deduction,
    shareOfDeposit: input.deposit > 0 ? roundMoney((deduction.amount / input.deposit) * 100) : 0,
  }));
}

function buildScenarios(input: RentalDepositInput, totalDeductions: number, estimatedReturn: number): DisputedScenario[] {
  return input.deductions
    .filter((deduction) => deduction.status === 'disputed')
    .map((deduction) => {
      const returnAmount = clampReturn(input.deposit, totalDeductions - deduction.amount);
      return {
        deductionId: deduction.id,
        description: deduction.description,
        returnAmount,
        additionalReturn: roundMoney(returnAmount - estimatedReturn),
      };
    });
}

export function calculateRentalDepositReturn(input: RentalDepositInput): RentalDepositResult | null {
  const currency = input.currency.trim().toUpperCase();
  if (!isCurrencyCode(currency) || !Number.isFinite(input.deposit) || input.deposit < 0) return null;
  if (input.deductions.some((deduction) => !isValidDeduction(deduction))) return null;
  const { total: totalDeductions, confirmed: confirmedDeductions, disputed: disputedDeductions } = summarizeDeductions(input);
  const estimatedReturn = clampReturn(input.deposit, totalDeductions);
  const undisputedReturn = clampReturn(input.deposit, confirmedDeductions);
  const deductions = addShares(input);
  const scenarios = buildScenarios(input, totalDeductions, estimatedReturn);

  return {
    currency,
    deposit: roundMoney(input.deposit),
    deductions,
    totalDeductions,
    confirmedDeductions,
    disputedDeductions,
    estimatedReturn,
    undisputedReturn,
    overDeducted: roundMoney(Math.max(0, totalDeductions - input.deposit)),
    scenarios,
  };
}
