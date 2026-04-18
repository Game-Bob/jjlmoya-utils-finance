export * from './entry';
export const LATE_INTEREST_TOOL: ToolDefinition = {
  entry: lateInterest,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
