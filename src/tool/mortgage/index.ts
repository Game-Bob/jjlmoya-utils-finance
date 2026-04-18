export * from './entry';
export const MORTGAGE_TOOL: ToolDefinition = {
  entry: mortgage,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
