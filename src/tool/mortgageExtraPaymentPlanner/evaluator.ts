import type { MortgageExtraPaymentPlannerUI } from './ui';
import type { MortgageInputs, MortgageResult } from './logic';

export interface MortgageEvaluation {
  badge: string;
  message: string;
  tone: 'neutral' | 'positive' | 'warning';
}

export function evaluateMortgage(
  inputs: MortgageInputs,
  result: MortgageResult | null,
  ui: MortgageExtraPaymentPlannerUI,
): MortgageEvaluation {
  if (!result) return { badge: ui.invalidInputMessage, message: ui.emptyMessage, tone: 'warning' };
  if (result.periodsSaved > 0) {
    return {
      badge: `${result.periodsSaved} ${ui.periodsSavedLabel.toLowerCase()}`,
      message: `${ui.planLabel}: ${result.interestSaved.toFixed(2)} ${inputs.currency} ${ui.interestSavedLabel.toLowerCase()}`,
      tone: 'positive',
    };
  }
  return { badge: ui.baselineLabel, message: ui.currencyHelp, tone: 'neutral' };
}
