export * from './entry';
export const IBAN_BIC_SWIFT_TOOL: ToolDefinition = {
  entry: ibanBicSwift,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
