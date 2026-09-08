import { describe, expect, it } from 'vitest';
import { convertRenterInsuranceCurrency, currencyOptions, defaultCurrencyByLocale } from './currency';

describe('renter insurance currency support', () => {
  it('offers the international currency set used by insurance tools', () => {
    expect(currencyOptions.map(({ code }) => code)).toEqual(['AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'NOK', 'PLN', 'RUB', 'SEK', 'TRY', 'USD']);
  });

  it('selects a useful default for each supported locale family', () => {
    expect(defaultCurrencyByLocale).toMatchObject({ en: 'USD', es: 'EUR', ja: 'JPY', zh: 'CNY' });
  });

  it('converts monetary inputs with reversible planning factors', () => {
    expect(convertRenterInsuranceCurrency(100, 'EUR', 'USD')).toBe(108.7);
    expect(convertRenterInsuranceCurrency(108.7, 'USD', 'EUR')).toBe(100);
  });
});
