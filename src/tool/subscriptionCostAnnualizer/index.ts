import { subscriptionCostAnnualizer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export * from './logic';

export const SUBSCRIPTION_COST_ANNUALIZER_TOOL: ToolDefinition = {
  entry: subscriptionCostAnnualizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
