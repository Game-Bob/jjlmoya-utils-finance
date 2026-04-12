import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import IBANBICSwiftComponent from './component.astro';
import IBANBICSwiftSEO from './seo.astro';
import IBANBICSwiftBibliography from './bibliography.astro';
import type { IBANBICSwiftUI } from './ui';

export type IBANBICSwiftLocaleContent = ToolLocaleContent<IBANBICSwiftUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const ibanBicSwift: FinanceToolEntry<IBANBICSwiftUI> = {
  id: 'conversor-iban-bic-swift',
  icons: {
    bg: 'mdi:bank-outline',
    fg: 'mdi:credit-card-chip-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { IBANBICSwiftComponent, IBANBICSwiftSEO, IBANBICSwiftBibliography };

export const IBAN_BIC_SWIFT_TOOL: ToolDefinition = {
  entry: ibanBicSwift,
  Component: IBANBICSwiftComponent,
  SEOComponent: IBANBICSwiftSEO,
  BibliographyComponent: IBANBICSwiftBibliography,
};
