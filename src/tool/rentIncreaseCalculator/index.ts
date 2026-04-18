import { rentIncrease } from './entry';
export * from './entry';
export const RENT_INCREASE_TOOL: ToolDefinition = {
  entry: rentIncrease,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
