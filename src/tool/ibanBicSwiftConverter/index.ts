import type { FinanceToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import IBANBICSwiftComponent from './component.astro';
import IBANBICSwiftSEO from './seo.astro';
import IBANBICSwiftBibliography from './bibliography.astro';
import type { IBANBICSwiftUI } from './ui';

export type IBANBICSwiftLocaleContent = ToolLocaleContent<IBANBICSwiftUI>;

export const ibanBicSwift: FinanceToolEntry<IBANBICSwiftUI> = {
  id: 'conversor-iban-bic-swift',
  icons: {
    bg: 'mdi:bank-outline',
    fg: 'mdi:credit-card-chip-outline',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { IBANBICSwiftComponent, IBANBICSwiftSEO, IBANBICSwiftBibliography };

export const IBAN_BIC_SWIFT_TOOL: ToolDefinition = {
  entry: ibanBicSwift,
  Component: IBANBICSwiftComponent,
  SEOComponent: IBANBICSwiftSEO,
  BibliographyComponent: IBANBICSwiftBibliography,
};
