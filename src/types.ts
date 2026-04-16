import type { SEOSection } from '@jjlmoya/utils-shared';
import type { WithContext, Thing } from 'schema-dts';

export type { SEOSection };

export type KnownLocale =
  | 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi'
  | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nb' | 'nl'
  | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BibliographyEntry {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ToolLocaleContent<TUI = Record<string, unknown>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
  seo: SEOSection[];
  faqTitle?: string;
  faq: FAQItem[];
  bibliographyTitle?: string;
  bibliography: BibliographyEntry[];
  howTo: HowToStep[];
  schemas: WithContext<Thing>[];
  gameTranslations?: Record<string, { name: string; description: string }>;
}

export interface CategoryLocaleContent {
  slug: string;
  title: string;
  description: string;
  seo: SEOSection[];
}

export type LocaleLoader<T> = () => Promise<T>;

export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface FinanceToolEntry<TUI extends Record<string, unknown> = Record<string, unknown>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface FinanceCategoryEntry {
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tools: Array<FinanceToolEntry<any>>;
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: FinanceToolEntry;
  Component: unknown;
  SEOComponent: unknown;
  BibliographyComponent: unknown;
}

