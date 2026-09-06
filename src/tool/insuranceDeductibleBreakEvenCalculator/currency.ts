export const currencyOptions = [
  { code: 'USD', symbol: '$', name: 'US dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'IDR', symbol: 'Rp', name: 'Indonesian rupiah' },
  { code: 'JPY', symbol: '¥', name: 'Japanese yen' },
  { code: 'KRW', symbol: '₩', name: 'South Korean won' },
  { code: 'PLN', symbol: 'zł', name: 'Polish złoty' },
  { code: 'RUB', symbol: '₽', name: 'Russian ruble' },
  { code: 'SEK', symbol: 'kr', name: 'Swedish krona' },
  { code: 'TRY', symbol: '₺', name: 'Turkish lira' },
  { code: 'CNY', symbol: '¥', name: 'Chinese yuan' },
] as const;

export type InsuranceCurrencyCode = (typeof currencyOptions)[number]['code'];

export const defaultCurrencyByLocale: Record<string, InsuranceCurrencyCode> = {
  de: 'EUR', en: 'USD', es: 'EUR', fr: 'EUR', id: 'IDR', it: 'EUR', ja: 'JPY', ko: 'KRW', nl: 'EUR', pl: 'PLN', pt: 'EUR', ru: 'RUB', sv: 'SEK', tr: 'TRY', zh: 'CNY',
};

const approximateUsdFactors: Record<InsuranceCurrencyCode, number> = {
  USD: 1, EUR: 0.92, IDR: 16000, JPY: 150, KRW: 1380, PLN: 3.95, RUB: 90, SEK: 10.5, TRY: 34, CNY: 7.2,
};

export const isInsuranceCurrencyCode = (value: string): value is InsuranceCurrencyCode => currencyOptions.some(({ code }) => code === value);

export const convertInsuranceCurrency = (amount: number, from: InsuranceCurrencyCode, to: InsuranceCurrencyCode): number => Number((amount * approximateUsdFactors[to] / approximateUsdFactors[from]).toFixed(2));
