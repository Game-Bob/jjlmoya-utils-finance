import type { DividendYieldInput } from './logic';

const STORAGE_KEY = 'jjlmoya-dividend-yield-state';

export function loadDividendYieldState(fallback: DividendYieldInput): DividendYieldInput {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const stored = JSON.parse(raw) as Partial<DividendYieldInput>;
    return {
      ...fallback,
      ...stored,
      cadence: stored.cadence === 'quarterly' ? 'quarterly' : 'annual',
    };
  } catch {
    return fallback;
  }
}

export function saveDividendYieldState(state: DividendYieldInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
