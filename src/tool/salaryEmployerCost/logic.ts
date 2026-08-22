export type SalaryAmountMode = 'annual' | 'monthly';
export type ContractType = 'permanent' | 'temporary';
export type PayPeriods = 12 | 14;

export interface SalaryCostInput {
  amount: number;
  amountMode: SalaryAmountMode;
  payPeriods: PayPeriods;
  contractType: ContractType;
  irpfRate: number;
  riskRate: number;
}

export interface SalaryCostResult {
  annualGross: number;
  annualNet: number;
  annualIrpf: number;
  annualEmployeeSocialSecurity: number;
  annualEmployerSocialSecurity: number;
  annualEmployerCost: number;
  monthlyContributionBase: number;
  grossPerPayment: number;
  netPerPayment: number;
  employerCostPerPayment: number;
  costMultiplier: number;
  workerKeepsPercent: number;
}

interface ContributionTier {
  lower: number;
  upper: number;
  employeeRate: number;
  employerRate: number;
}

export const MINIMUM_ANNUAL_GROSS = 17_094;
export const MINIMUM_MONTHLY_BASE = 1_424.4;
export const MAXIMUM_MONTHLY_BASE = 5_101.2;

export const DEFAULT_SALARY_INPUT: SalaryCostInput = {
  amount: 30_000,
  amountMode: 'annual',
  payPeriods: 14,
  contractType: 'permanent',
  irpfRate: 15,
  riskRate: 1.5,
};

const SOLIDARITY_TIERS: ContributionTier[] = [
  { lower: 5_101.2, upper: 5_611.32, employeeRate: 0.19, employerRate: 0.96 },
  { lower: 5_611.32, upper: 7_651.8, employeeRate: 0.21, employerRate: 1.04 },
  { lower: 7_651.8, upper: Number.POSITIVE_INFINITY, employeeRate: 0.24, employerRate: 1.22 },
];

const roundMoney = (value: number): number => Math.round((value + Number.EPSILON) * 100) / 100;

const clamp = (value: number, minimum: number, maximum: number): number =>
  Math.min(Math.max(value, minimum), maximum);

export function annualizeSalary(input: SalaryCostInput): number {
  if (input.amountMode === 'annual') return input.amount;
  return input.amount * input.payPeriods;
}

export function isSalaryInputValid(input: SalaryCostInput): boolean {
  const annualGross = annualizeSalary(input);
  const validNumbers = [input.amount, input.irpfRate, input.riskRate].every(Number.isFinite);
  return validNumbers
    && annualGross >= MINIMUM_ANNUAL_GROSS
    && input.irpfRate >= 0
    && input.irpfRate <= 47
    && input.riskRate >= 0.9
    && input.riskRate <= 7.15;
}

function tierAmount(monthlyGross: number, tier: ContributionTier): number {
  return Math.max(0, Math.min(monthlyGross, tier.upper) - tier.lower);
}

function solidarityContribution(monthlyGross: number, side: 'employee' | 'employer'): number {
  const rateKey = side === 'employee' ? 'employeeRate' : 'employerRate';
  const monthly = SOLIDARITY_TIERS.reduce(
    (total, tier) => total + tierAmount(monthlyGross, tier) * tier[rateKey] / 100,
    0,
  );
  return monthly * 12;
}

function employeeRate(contractType: ContractType): number {
  const unemployment = contractType === 'temporary' ? 1.6 : 1.55;
  return 4.7 + unemployment + 0.1 + 0.15;
}

function employerRate(input: SalaryCostInput): number {
  const unemployment = input.contractType === 'temporary' ? 6.7 : 5.5;
  return 23.6 + unemployment + 0.6 + 0.2 + 0.75 + input.riskRate;
}

function socialSecurity(input: SalaryCostInput, annualGross: number) {
  const monthlyGross = annualGross / 12;
  const monthlyBase = clamp(monthlyGross, MINIMUM_MONTHLY_BASE, MAXIMUM_MONTHLY_BASE);
  const standardBase = monthlyBase * 12;
  return {
    monthlyBase,
    employee: standardBase * employeeRate(input.contractType) / 100
      + solidarityContribution(monthlyGross, 'employee'),
    employer: standardBase * employerRate(input) / 100
      + solidarityContribution(monthlyGross, 'employer'),
  };
}

export function calculateSalaryCost(input: SalaryCostInput): SalaryCostResult | null {
  if (!isSalaryInputValid(input)) return null;
  const annualGross = annualizeSalary(input);
  const social = socialSecurity(input, annualGross);
  const annualIrpf = annualGross * input.irpfRate / 100;
  const annualNet = annualGross - social.employee - annualIrpf;
  const annualEmployerCost = annualGross + social.employer;
  return {
    annualGross: roundMoney(annualGross),
    annualNet: roundMoney(annualNet),
    annualIrpf: roundMoney(annualIrpf),
    annualEmployeeSocialSecurity: roundMoney(social.employee),
    annualEmployerSocialSecurity: roundMoney(social.employer),
    annualEmployerCost: roundMoney(annualEmployerCost),
    monthlyContributionBase: roundMoney(social.monthlyBase),
    grossPerPayment: roundMoney(annualGross / input.payPeriods),
    netPerPayment: roundMoney(annualNet / input.payPeriods),
    employerCostPerPayment: roundMoney(annualEmployerCost / input.payPeriods),
    costMultiplier: Math.round(annualEmployerCost / annualGross * 1000) / 1000,
    workerKeepsPercent: Math.round(annualNet / annualEmployerCost * 1000) / 10,
  };
}
