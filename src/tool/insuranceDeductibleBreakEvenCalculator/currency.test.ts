import { describe, expect, it } from 'vitest';
import { convertInsuranceCurrency, currencyOptions } from './currency';

describe('insurance currency display', () => {
  it('offers every base locale currency', () => {
    expect(currencyOptions.map(({ code }) => code)).toEqual(['USD', 'EUR', 'IDR', 'JPY', 'KRW', 'PLN', 'RUB', 'SEK', 'TRY', 'CNY']);
  });

  it('converts an entered amount with an explicitly approximate factor', () => {
    expect(convertInsuranceCurrency(100, 'USD', 'EUR')).toBe(92);
    expect(convertInsuranceCurrency(92, 'EUR', 'USD')).toBe(100);
  });
});
