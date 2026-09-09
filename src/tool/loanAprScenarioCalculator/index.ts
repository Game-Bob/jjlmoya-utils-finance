import type { ToolDefinition } from "../../types";
import { loanAprScenarioCalculator } from "./entry";

export * from "./entry";

export const LOAN_APR_SCENARIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: loanAprScenarioCalculator,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
