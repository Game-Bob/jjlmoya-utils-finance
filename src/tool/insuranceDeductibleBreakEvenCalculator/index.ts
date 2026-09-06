import type { ToolDefinition } from '../../types';
import { insuranceDeductibleBreakEvenCalculator } from './entry';

export * from './entry';

export const INSURANCE_DEDUCTIBLE_BREAK_EVEN_CALCULATOR_TOOL: ToolDefinition = {
  entry: insuranceDeductibleBreakEvenCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
