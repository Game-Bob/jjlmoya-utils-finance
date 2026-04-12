import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DebtSnowballComponent from './component.astro';
import DebtSnowballSEO from './seo.astro';
import type { DebtSnowballUI } from './ui';
import { DebtSnowballLogic, type Debt, type SimulationResult, type ProjectionMonth } from './logic';

export type DebtSnowballLocaleContent = ToolLocaleContent<DebtSnowballUI>;
export type { Debt, SimulationResult, ProjectionMonth };

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const debtSnowball: FinanceToolEntry<DebtSnowballUI> = {
  id: 'bola-nieve-deuda',
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

export { DebtSnowballComponent, DebtSnowballSEO };

export const DEBT_SNOWBALL_TOOL: ToolDefinition = {
  entry: debtSnowball,
  Component: DebtSnowballComponent,
  SEOComponent: DebtSnowballSEO,
  BibliographyComponent: null,
};

export const DebtSnowballLogicExport = DebtSnowballLogic;
