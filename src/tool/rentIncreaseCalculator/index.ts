import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import RentIncreaseComponent from './component.astro';
import type { RentIncreaseUI } from './ui';

export type RentIncreaseLocaleContent = ToolLocaleContent<RentIncreaseUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const rentIncrease: FinanceToolEntry<RentIncreaseUI> = {
  id: 'calculadora-subida-alquiler-ipc',
  icons: {
    bg: 'mdi:home-outline',
    fg: 'mdi:percent',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { RentIncreaseComponent };

export const RENT_INCREASE_TOOL: ToolDefinition = {
  entry: rentIncrease,
  Component: RentIncreaseComponent,
  SEOComponent: null,
  BibliographyComponent: null,
};
