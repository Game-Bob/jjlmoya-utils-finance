import type { ToolDefinition } from '../../types';
import { renterInsuranceCoverageGapCalculator } from './entry';

export * from './entry';

export const RENTER_INSURANCE_COVERAGE_GAP_CALCULATOR_TOOL: ToolDefinition = {
  entry: renterInsuranceCoverageGapCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
