export const INVENTORY_CATEGORIES = ['furniture', 'electronics', 'clothing', 'kitchen', 'personal', 'other'] as const;

export type InventoryCategory = (typeof INVENTORY_CATEGORIES)[number];

export interface InventoryItem {
  category: InventoryCategory;
  value: number;
}

export interface RenterInsuranceInput {
  currency: string;
  policyLimit: number;
  deductible: number;
  sampleLoss: number;
  inventory: InventoryItem[];
}

export type CoverageStatus = 'safe' | 'review' | 'exposed';

export interface RenterInsuranceValidationErrors {
  currency?: string;
  policyLimit?: string;
  deductible?: string;
  sampleLoss?: string;
  inventory?: string;
}

export interface CoverageCategoryResult {
  category: InventoryCategory;
  value: number;
  share: number;
}

export interface RenterInsuranceResult {
  currency: string;
  policyLimit: number;
  deductible: number;
  sampleLoss: number;
  totalContents: number;
  coverageGap: number;
  coverageRatio: number;
  uncoveredPercent: number;
  estimatedPayout: number;
  estimatedOutOfPocket: number;
  largestCategories: CoverageCategoryResult[];
  status: CoverageStatus;
}

const MAX_AMOUNT = 1_000_000_000;

const roundMoney = (value: number): number => Number(value.toFixed(2));
const isAmount = (value: number): boolean => Number.isFinite(value) && value >= 0 && value <= MAX_AMOUNT;
const isPositiveAmount = (value: number): boolean => isAmount(value) && value > 0;
const isCurrency = (value: string): boolean => /^[A-Z]{3}$/.test(value.trim().toUpperCase());
const isValidInventory = (inventory: unknown): inventory is InventoryItem[] => {
  if (!Array.isArray(inventory) || inventory.length !== INVENTORY_CATEGORIES.length) return false;
  return inventory.every((item) => INVENTORY_CATEGORIES.includes(item.category) && isAmount(item.value));
};
const getInventoryTotal = (inventory: InventoryItem[]): number => inventory.reduce((sum, item) => sum + item.value, 0);

export function validateRenterInsuranceInput(input: RenterInsuranceInput): RenterInsuranceValidationErrors {
  const errors: RenterInsuranceValidationErrors = {};
  if (!isCurrency(input.currency)) errors.currency = 'currency';
  if (!isPositiveAmount(input.policyLimit)) errors.policyLimit = 'policyLimit';
  if (!isAmount(input.deductible)) errors.deductible = 'deductible';
  if (!isPositiveAmount(input.sampleLoss)) errors.sampleLoss = 'sampleLoss';
  if (!isValidInventory(input.inventory)) errors.inventory = 'inventory';
  if (isValidInventory(input.inventory)) {
    const total = getInventoryTotal(input.inventory);
    if (!isPositiveAmount(total)) errors.inventory = 'inventory';
  }
  return errors;
}

const getStatus = (coverageGap: number, totalContents: number): CoverageStatus => {
  if (coverageGap <= 0) return 'safe';
  return coverageGap / totalContents <= 0.1 ? 'review' : 'exposed';
};

const sortCategories = (inventory: InventoryItem[], totalContents: number): CoverageCategoryResult[] => inventory
  .map((item) => ({ category: item.category, value: roundMoney(item.value), share: item.value / totalContents }))
  .sort((left, right) => right.value - left.value)
  .slice(0, 3);

export function calculateRenterInsuranceCoverageGap(input: RenterInsuranceInput): RenterInsuranceResult | null {
  if (Object.keys(validateRenterInsuranceInput(input)).length > 0) return null;
  const currency = input.currency.trim().toUpperCase();
  const totalContents = roundMoney(getInventoryTotal(input.inventory));
  const coverageRatio = Math.min(input.policyLimit / totalContents, 1);
  const coverageGap = roundMoney(Math.max(0, totalContents - input.policyLimit));
  const loss = Math.min(input.sampleLoss, totalContents);
  const estimatedPayout = roundMoney(Math.max(0, loss * coverageRatio - input.deductible));
  const estimatedOutOfPocket = roundMoney(Math.max(0, loss - estimatedPayout));
  return {
    currency,
    policyLimit: roundMoney(input.policyLimit),
    deductible: roundMoney(input.deductible),
    sampleLoss: roundMoney(input.sampleLoss),
    totalContents,
    coverageGap,
    coverageRatio,
    uncoveredPercent: roundMoney(Math.max(0, 1 - coverageRatio) * 100),
    estimatedPayout,
    estimatedOutOfPocket,
    largestCategories: sortCategories(input.inventory, totalContents),
    status: getStatus(coverageGap, totalContents),
  };
}
