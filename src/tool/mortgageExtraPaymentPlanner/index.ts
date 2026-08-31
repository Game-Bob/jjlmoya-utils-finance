import type { ToolDefinition } from '../../types';
import { mortgageExtraPaymentPlanner } from './entry';

export * from './entry';

export const MORTGAGE_EXTRA_PAYMENT_PLANNER_TOOL: ToolDefinition = {
  entry: mortgageExtraPaymentPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
