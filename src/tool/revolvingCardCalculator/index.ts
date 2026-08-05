import { revolvingCardCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const REVOLVING_CARD_CALCULATOR_TOOL: ToolDefinition = {
  entry: revolvingCardCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
