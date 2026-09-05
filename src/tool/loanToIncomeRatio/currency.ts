export type CurrencyCode = 'EUR' | 'USD' | 'GBP' | 'RUB';

export interface CurrencyDefinition {
  code: CurrencyCode;
  symbol: string;
  locale: string;
  unitsPerEuro: number;
}

export const CURRENCIES = {
  EUR: { code: 'EUR', symbol: '€', locale: 'en-IE', unitsPerEuro: 1 },
  USD: { code: 'USD', symbol: '$', locale: 'en-US', unitsPerEuro: 1.1622 },
  GBP: { code: 'GBP', symbol: '£', locale: 'en-GB', unitsPerEuro: 0.85898 },
  RUB: { code: 'RUB', symbol: '₽', locale: 'ru-RU', unitsPerEuro: 100.5693 },
} as const satisfies Record<CurrencyCode, CurrencyDefinition>;

export function convertCurrencyAmount(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  return amount * (CURRENCIES[to].unitsPerEuro / CURRENCIES[from].unitsPerEuro);
}
