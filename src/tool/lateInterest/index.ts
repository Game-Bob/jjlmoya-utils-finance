import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import LateInterestComponent from './component.astro';
import LateInterestSEO from './seo.astro';
import LateInterestBibliography from './bibliography.astro';

import type { LateInterestUI } from './ui';

export type LateInterestLocaleContent = ToolLocaleContent<LateInterestUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const lateInterest: FinanceToolEntry<LateInterestUI> = {
  id: 'intereses-demora',
  icons: {
    bg: 'mdi:calendar-alert',
    fg: 'mdi:percent',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { LateInterestComponent, LateInterestSEO, LateInterestBibliography };

export const LATE_INTEREST_TOOL: ToolDefinition = {
  entry: lateInterest,
  Component: LateInterestComponent,
  SEOComponent: LateInterestSEO,
  BibliographyComponent: LateInterestBibliography,
};
