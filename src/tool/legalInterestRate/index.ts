import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import LegalInterestRateComponent from './component.astro';
import type { LegalInterestRateUI } from './ui';

export type LegalInterestRateLocaleContent = ToolLocaleContent<LegalInterestRateUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const legalInterestRate: FinanceToolEntry<LegalInterestRateUI> = {
  id: 'interes-legal-dinero-2026',
  icons: {
    bg: 'mdi:scale-balance',
    fg: 'mdi:percent',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { LegalInterestRateComponent };

export const LEGAL_INTEREST_RATE_TOOL: ToolDefinition = {
  entry: legalInterestRate,
  Component: LegalInterestRateComponent,
  SEOComponent: null,
  BibliographyComponent: null,
};
