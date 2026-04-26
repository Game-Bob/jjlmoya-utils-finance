import { financialFreedom } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const FINANCIAL_FREEDOM_TOOL: ToolDefinition = {
  entry: financialFreedom,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
