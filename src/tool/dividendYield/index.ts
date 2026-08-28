import { dividendYield } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DIVIDEND_YIELD_TOOL: ToolDefinition = {
  entry: dividendYield,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
