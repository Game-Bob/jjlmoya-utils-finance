import { percentageCalculator } from './entry';
export * from './entry';
export const PERCENTAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: percentageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
