import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import MortgageComponent from './component.astro';
import MortgageSEO from './seo.astro';
import MortgageBibliography from './bibliography.astro';

import type { MortgageUI } from './ui';

export type MortgageLocaleContent = ToolLocaleContent<MortgageUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const mortgage: FinanceToolEntry<MortgageUI> = {
  id: 'hipoteca',
  icons: {
    bg: 'mdi:home-percent',
    fg: 'mdi:percent',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { MortgageComponent, MortgageSEO, MortgageBibliography };

export const MORTGAGE_TOOL: ToolDefinition = {
  entry: mortgage,
  Component: MortgageComponent,
  SEOComponent: MortgageSEO,
  BibliographyComponent: MortgageBibliography,
};
