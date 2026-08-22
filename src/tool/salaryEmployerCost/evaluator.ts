import type { SalaryCostResult } from './logic';

export type CostGapState = 'lean' | 'typical' | 'wide';

export function evaluateCostGap(result: SalaryCostResult): CostGapState {
  if (result.costMultiplier < 1.32) return 'lean';
  if (result.costMultiplier <= 1.38) return 'typical';
  return 'wide';
}
