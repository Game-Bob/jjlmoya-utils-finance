export * from './entry';
export const COURT_FEE_CALCULATOR_TOOL: ToolDefinition = {
  entry: courtFeeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
