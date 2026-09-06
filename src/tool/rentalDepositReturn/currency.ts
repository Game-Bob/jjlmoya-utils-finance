export type CurrencyCode =
  | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'CZK' | 'DKK'
  | 'EUR' | 'GBP' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'NOK'
  | 'PLN' | 'RUB' | 'SEK' | 'TRY' | 'USD';

export interface CurrencyDefinition {
  code: CurrencyCode;
  symbol: string;
}

export const CURRENCIES = {
  AUD: { code: 'AUD', symbol: 'A$' },
  BRL: { code: 'BRL', symbol: 'R$' },
  CAD: { code: 'CAD', symbol: 'C$' },
  CHF: { code: 'CHF', symbol: 'CHF' },
  CNY: { code: 'CNY', symbol: '¥' },
  CZK: { code: 'CZK', symbol: 'Kč' },
  DKK: { code: 'DKK', symbol: 'kr' },
  EUR: { code: 'EUR', symbol: '€' },
  GBP: { code: 'GBP', symbol: '£' },
  IDR: { code: 'IDR', symbol: 'Rp' },
  INR: { code: 'INR', symbol: '₹' },
  JPY: { code: 'JPY', symbol: '¥' },
  KRW: { code: 'KRW', symbol: '₩' },
  MXN: { code: 'MXN', symbol: 'MX$' },
  NOK: { code: 'NOK', symbol: 'kr' },
  PLN: { code: 'PLN', symbol: 'zł' },
  RUB: { code: 'RUB', symbol: '₽' },
  SEK: { code: 'SEK', symbol: 'kr' },
  TRY: { code: 'TRY', symbol: '₺' },
  USD: { code: 'USD', symbol: '$' },
} as const satisfies Record<CurrencyCode, CurrencyDefinition>;

const DEFAULT_CURRENCY_BY_LOCALE: Record<string, CurrencyCode> = {
  'en-au': 'AUD',
  'en-ca': 'CAD',
  'en-gb': 'GBP',
  'en-in': 'INR',
  'fr-ca': 'CAD',
  'pt-br': 'BRL',
  de: 'EUR',
  en: 'USD',
  es: 'EUR',
  fr: 'EUR',
  id: 'IDR',
  it: 'EUR',
  ja: 'JPY',
  ko: 'KRW',
  nl: 'EUR',
  pl: 'PLN',
  pt: 'EUR',
  ru: 'RUB',
  sv: 'SEK',
  tr: 'TRY',
  zh: 'CNY',
};

export function getDefaultCurrency(locale: string): CurrencyCode {
  const normalizedLocale = locale.toLowerCase().replace('_', '-');
  return DEFAULT_CURRENCY_BY_LOCALE[normalizedLocale]
    ?? DEFAULT_CURRENCY_BY_LOCALE[normalizedLocale.split('-')[0] ?? '']
    ?? 'EUR';
}

export function isCurrencyCode(value: string): value is CurrencyCode {
  return Object.prototype.hasOwnProperty.call(CURRENCIES, value);
}
