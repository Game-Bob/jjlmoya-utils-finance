import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import InflationComponent from './component.astro';
import InflationSEO from './seo.astro';
import InflationBibliography from './bibliography.astro';

import type { InflationUI } from './ui';

export type InflationLocaleContent = ToolLocaleContent<InflationUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const inflation: FinanceToolEntry<InflationUI> = {
  id: 'inflacion',
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

export { InflationComponent, InflationSEO, InflationBibliography };

export const INFLATION_TOOL: ToolDefinition = {
  entry: inflation,
  Component: InflationComponent,
  SEOComponent: InflationSEO,
  BibliographyComponent: InflationBibliography,
};
