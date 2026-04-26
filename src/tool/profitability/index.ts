import { profitability } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const PROFITABILITY_TOOL: ToolDefinition = {
  entry: profitability,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
