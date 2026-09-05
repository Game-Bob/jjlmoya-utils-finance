import { savingsRate } from "./entry";
import type { ToolDefinition } from "../../types";

export * from "./entry";

export const SAVINGS_RATE_TOOL: ToolDefinition = {
  entry: savingsRate,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
