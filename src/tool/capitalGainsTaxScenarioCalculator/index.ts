import type { ToolDefinition } from '../../types';
import { capitalGainsTaxScenarioCalculator } from './entry';

export * from './entry';

export const CAPITAL_GAINS_TAX_SCENARIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: capitalGainsTaxScenarioCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
