import { inflationPurchasingPower } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const INFLATION_PURCHASING_POWER_TOOL: ToolDefinition = {
  entry: inflationPurchasingPower,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
