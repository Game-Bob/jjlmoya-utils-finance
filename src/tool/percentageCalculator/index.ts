import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PercentageCalculatorComponent from './component.astro';
import PercentageCalculatorSEO from './seo.astro';
import PercentageCalculatorBibliography from './bibliography.astro';

import type { PercentageCalculatorUI } from './ui';

export type PercentageCalculatorLocaleContent = ToolLocaleContent<PercentageCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const percentageCalculator: FinanceToolEntry<PercentageCalculatorUI> = {
  id: 'calculadora-porcentajes',
  icons: {
    bg: 'mdi:percent',
    fg: 'mdi:calculator',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { PercentageCalculatorComponent, PercentageCalculatorSEO, PercentageCalculatorBibliography };

export const PERCENTAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: percentageCalculator,
  Component: PercentageCalculatorComponent,
  SEOComponent: PercentageCalculatorSEO,
  BibliographyComponent: PercentageCalculatorBibliography,
};
