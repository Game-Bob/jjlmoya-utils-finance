import type { ToolDefinition } from '../../types';
import { legalInterestRate } from './entry';
export * from './entry';
export const LEGAL_INTEREST_RATE_TOOL: ToolDefinition = {
  entry: legalInterestRate,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
