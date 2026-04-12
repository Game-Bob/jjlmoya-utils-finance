import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CompoundInterestComponent from './component.astro';
import CompoundInterestSEO from './seo.astro';
import CompoundInterestBibliography from './bibliography.astro';

import type { CompoundInterestUI } from './ui';

export type CompoundInterestLocaleContent = ToolLocaleContent<CompoundInterestUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const compoundInterest: FinanceToolEntry<CompoundInterestUI> = {
  id: 'interes-compuesto',
  icons: {
    bg: 'mdi:chart-line',
    fg: 'mdi:trending-up',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CompoundInterestComponent, CompoundInterestSEO, CompoundInterestBibliography };

export const COMPOUND_INTEREST_TOOL: ToolDefinition = {
  entry: compoundInterest,
  Component: CompoundInterestComponent,
  SEOComponent: CompoundInterestSEO,
  BibliographyComponent: CompoundInterestBibliography,
};
