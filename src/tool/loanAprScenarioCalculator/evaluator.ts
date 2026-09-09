import type { ComparisonResult, LoanScenarioResult } from "./logic";

export type ScenarioBadge = "lower" | "higher" | "neutral" | "invalid";

export function getScenarioBadge(
  side: "a" | "b",
  result: LoanScenarioResult,
  comparison: ComparisonResult,
): ScenarioBadge {
  if (!result.valid || comparison.message === "invalid") return "invalid";
  if (comparison.winner === "tie") return "neutral";
  return comparison.winner === side ? "lower" : "higher";
}

export function getDifferenceLabel(comparison: ComparisonResult): string {
  if (comparison.message === "invalid")
    return "Enter valid values to compare both offers.";
  if (comparison.message === "tie")
    return "The two scenarios produce nearly the same effective annual cost.";
  return `${comparison.difference.toFixed(2)} percentage points separate the effective annual costs.`;
}
