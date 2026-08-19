import type { ToolDefinition } from '../../types';
import { pesetaValue } from './entry';

export * from './entry';

export const PESETA_VALUE_TOOL: ToolDefinition = {
  entry: pesetaValue,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
