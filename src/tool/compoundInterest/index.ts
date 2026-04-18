export * from './entry';
export const COMPOUND_INTEREST_TOOL: ToolDefinition = {
  entry: compoundInterest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
