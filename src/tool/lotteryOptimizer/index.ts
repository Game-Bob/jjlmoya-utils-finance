import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import LotteryOptimizerComponent from './component.astro';
import type { LotteryOptimizerUI } from './ui';

export type LotteryOptimizerLocaleContent = ToolLocaleContent<LotteryOptimizerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const lotteryOptimizer: FinanceToolEntry<LotteryOptimizerUI> = {
  id: 'optimizador-loterias',
  icons: {
    bg: 'mdi:dice-multiple',
    fg: 'mdi:star',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { LotteryOptimizerComponent };

export const LOTTERY_OPTIMIZER_TOOL: ToolDefinition = {
  entry: lotteryOptimizer,
  Component: LotteryOptimizerComponent,
  SEOComponent: null,
  BibliographyComponent: null,
};
