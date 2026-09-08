import type { CoverageStatus, RenterInsuranceResult } from './logic';
import type { RenterInsuranceCoverageGapCalculatorUI } from './ui';

export interface CoverageEvaluation {
  status: CoverageStatus;
  label: string;
  text: string;
}

export function evaluateCoverage(result: RenterInsuranceResult, ui: RenterInsuranceCoverageGapCalculatorUI): CoverageEvaluation {
  const content: Record<CoverageStatus, { label: string; text: string }> = {
    safe: { label: ui.labelStatusSafe, text: ui.labelStatusSafeText },
    review: { label: ui.labelStatusReview, text: ui.labelStatusReviewText },
    exposed: { label: ui.labelStatusExposed, text: ui.labelStatusExposedText },
  };
  return { status: result.status, ...content[result.status] };
}
