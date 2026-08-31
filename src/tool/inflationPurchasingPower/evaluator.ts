import type { InflationPurchasingPowerResult } from './logic';
import type { InflationPurchasingPowerUI } from './ui';

export type TimelineTone = 'neutral' | 'warning';

export interface TimelineEvaluation {
  tone: TimelineTone;
  message: string;
}

export function evaluateInflationTimeline(result: InflationPurchasingPowerResult, ui: InflationPurchasingPowerUI): TimelineEvaluation {
  if (result.depletionYear !== null) {
    return { tone: 'warning', message: ui.depletionWarning.replace('{year}', String(result.depletionYear)) };
  }
  if (result.input.cashFlowMode === 'contribution') return { tone: 'neutral', message: ui.contributionSummary };
  if (result.input.cashFlowMode === 'withdrawal') return { tone: 'warning', message: ui.withdrawalSummary };
  return { tone: 'neutral', message: ui.noCashFlowSummary };
}
