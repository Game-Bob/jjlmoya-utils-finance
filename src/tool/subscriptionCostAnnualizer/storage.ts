import type { SubscriptionCalculatorInput } from './logic';

const STORAGE_KEY = 'jjlmoya-finance-subscription-cost-annualizer';

function isStoredState(value: unknown): value is SubscriptionCalculatorInput {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as SubscriptionCalculatorInput;
  return typeof candidate.currency === 'string' && Array.isArray(candidate.subscriptions) && candidate.subscriptions.length > 0;
}

export function loadSubscriptionState(fallback: SubscriptionCalculatorInput): SubscriptionCalculatorInput {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed: unknown = JSON.parse(stored);
    return isStoredState(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export function saveSubscriptionState(state: SubscriptionCalculatorInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}
