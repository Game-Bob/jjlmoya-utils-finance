import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import FIRECalculatorComponent from './component.astro';
import FIRECalculatorSEO from './seo.astro';
import FIRECalculatorBibliography from './bibliography.astro';
import type { FIRECalculatorUI } from './ui';

export type FIRECalculatorLocaleContent = ToolLocaleContent<FIRECalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const fireCalculator: FinanceToolEntry<FIRECalculatorUI> = {
  id: 'calculadora-regla-4-por-ciento-fire',
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

export { FIRECalculatorComponent, FIRECalculatorSEO, FIRECalculatorBibliography };

export const FIRE_CALCULATOR_TOOL: ToolDefinition = {
  entry: fireCalculator,
  Component: FIRECalculatorComponent,
  SEOComponent: FIRECalculatorSEO,
  BibliographyComponent: FIRECalculatorBibliography,
};
