import type { ToolDefinition } from '../../types';
import { loanToIncomeRatio } from './entry';

export * from './entry';

export const LOAN_TO_INCOME_RATIO_TOOL: ToolDefinition = {
  entry: loanToIncomeRatio,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
