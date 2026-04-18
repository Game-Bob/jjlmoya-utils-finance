export * from './entry';
export const DEBT_SNOWBALL_TOOL: ToolDefinition = {
  entry: debtSnowball,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

export const DebtSnowballLogicExport = DebtSnowballLogic;
