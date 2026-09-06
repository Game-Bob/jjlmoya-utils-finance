import type { ToolDefinition } from '../../types';
import { rentalDepositReturn } from './entry';

export * from './entry';

export const RENTAL_DEPOSIT_RETURN_TOOL: ToolDefinition = {
  entry: rentalDepositReturn,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
