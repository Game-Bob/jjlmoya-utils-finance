import type { ToolDefinition } from '../../types';
import { salaryEmployerCost } from './entry';

export * from './entry';

export const SALARY_EMPLOYER_COST_TOOL: ToolDefinition = {
  entry: salaryEmployerCost,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
