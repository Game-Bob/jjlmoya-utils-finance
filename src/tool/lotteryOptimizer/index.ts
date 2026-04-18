import { lotteryOptimizer } from './entry';
export * from './entry';
export const LOTTERY_OPTIMIZER_TOOL: ToolDefinition = {
  entry: lotteryOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
