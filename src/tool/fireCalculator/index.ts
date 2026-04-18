import { fireCalculator } from './entry';
export * from './entry';
export const FIRE_CALCULATOR_TOOL: ToolDefinition = {
  entry: fireCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
