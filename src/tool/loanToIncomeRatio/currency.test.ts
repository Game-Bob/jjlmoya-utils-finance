import { describe, expect, it } from 'vitest';
import { CURRENCIES, convertCurrencyAmount } from './currency';

describe('convertCurrencyAmount', () => {
  it('applies the reference factor instead of relabelling the amount', () => {
    expect(convertCurrencyAmount(300, 'EUR', 'RUB')).toBeCloseTo(30170.79, 2);
  });

  it('keeps an amount unchanged when the display currency is unchanged', () => {
    expect(convertCurrencyAmount(300, 'EUR', 'EUR')).toBe(300);
  });

  it('round-trips between currencies within floating point tolerance', () => {
    const rubles = convertCurrencyAmount(5000, 'EUR', 'RUB');
    expect(convertCurrencyAmount(rubles, 'RUB', 'EUR')).toBeCloseTo(5000, 8);
  });

  it('includes a currency option for each supported locale family', () => {
    expect(Object.keys(CURRENCIES)).toEqual(['EUR', 'USD', 'GBP', 'RUB']);
  });
});
