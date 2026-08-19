import type { PesetaValueResult } from './logic';

export type ValueState = 'positive' | 'neutral' | 'negative';

export interface ValueEvaluation {
  state: ValueState;
  ratioLabel: string;
}

export function evaluatePesetaValue(result: PesetaValueResult): ValueEvaluation {
  if (result.purchasingPowerChange > 0.5) {
    return { state: 'positive', ratioLabel: 'expanded' };
  }
  if (result.purchasingPowerChange < -0.5) {
    return { state: 'negative', ratioLabel: 'contracted' };
  }
  return { state: 'neutral', ratioLabel: 'unchanged' };
}
