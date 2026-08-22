import { DEFAULT_SALARY_INPUT, type SalaryCostInput } from './logic';

const STORAGE_KEY = 'salary-employer-cost-spain-2026';

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object';
}

function isStoredInput(value: unknown): value is SalaryCostInput {
  if (!isRecord(value)) return false;
  const input = value as Partial<SalaryCostInput>;
  const numbers = [input.amount, input.irpfRate, input.riskRate];
  const validMode = ['annual', 'monthly'].includes(input.amountMode ?? '');
  const validPayments = [12, 14].includes(input.payPeriods ?? 0);
  const validContract = ['permanent', 'temporary'].includes(input.contractType ?? '');
  return numbers.every((item) => typeof item === 'number')
    && validMode
    && validPayments
    && validContract;
}

export function loadSalaryInput(): SalaryCostInput {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
    return isStoredInput(parsed) ? parsed : { ...DEFAULT_SALARY_INPUT };
  } catch {
    return { ...DEFAULT_SALARY_INPUT };
  }
}

export function saveSalaryInput(input: SalaryCostInput): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
