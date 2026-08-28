import type { DividendYieldResult } from './logic';

export type YieldReading = 'quiet' | 'visible' | 'strong';

export function evaluateYield(result: DividendYieldResult): YieldReading {
  if (result.grossYieldPercent < 2) return 'quiet';
  if (result.grossYieldPercent < 6) return 'visible';
  return 'strong';
}

export function getYieldMessage(result: DividendYieldResult): string {
  const reading = evaluateYield(result);
  if (reading === 'quiet') return 'The annual dividend is a small share of the entered share price.';
  if (reading === 'visible') return 'The annual dividend represents a visible share of the entered share price.';
  return 'The ratio is high enough to inspect the dividend history, payout policy and share price before drawing conclusions.';
}
