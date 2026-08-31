import type { InflationPurchasingPowerInput } from './logic';

const STORAGE_KEY = 'jjlmoya-finance-inflation-purchasing-power';

function isStoredState(value: Partial<InflationPurchasingPowerInput>): boolean {
  return typeof value.startingAmount === 'number'
    && typeof value.annualInflationRate === 'number'
    && typeof value.years === 'number'
    && typeof value.annualCashFlow === 'number';
}

export function loadInflationPurchasingPowerState(fallback: InflationPurchasingPowerInput): InflationPurchasingPowerInput {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored) as Partial<InflationPurchasingPowerInput>;
    if (!isStoredState(parsed)) return fallback;
    const cashFlowMode = parsed.cashFlowMode === 'contribution' || parsed.cashFlowMode === 'withdrawal' ? parsed.cashFlowMode : 'none';
    return { ...fallback, ...parsed, cashFlowMode };
  } catch {
    return fallback;
  }
}

export function saveInflationPurchasingPowerState(state: InflationPurchasingPowerInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
