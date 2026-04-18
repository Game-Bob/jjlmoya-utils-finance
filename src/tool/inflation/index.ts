export * from './entry';
export const INFLATION_TOOL: ToolDefinition = {
  entry: inflation,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
