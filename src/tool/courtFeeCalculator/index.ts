import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CourtFeeCalculatorComponent from './component.astro';
import CourtFeeCalculatorSEO from './seo.astro';
import CourtFeeCalculatorBibliography from './bibliography.astro';
import type { CourtFeeCalculatorUI } from './ui';

export type CourtFeeCalculatorLocaleContent = ToolLocaleContent<CourtFeeCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const courtFeeCalculator: FinanceToolEntry<CourtFeeCalculatorUI> = {
  id: 'calculadora-tasas-judiciales',
  icons: {
    bg: 'mdi:gavel',
    fg: 'mdi:percent',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CourtFeeCalculatorComponent, CourtFeeCalculatorSEO, CourtFeeCalculatorBibliography };

export const COURT_FEE_CALCULATOR_TOOL: ToolDefinition = {
  entry: courtFeeCalculator,
  Component: CourtFeeCalculatorComponent,
  SEOComponent: CourtFeeCalculatorSEO,
  BibliographyComponent: CourtFeeCalculatorBibliography,
};
