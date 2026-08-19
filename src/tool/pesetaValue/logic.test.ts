import { describe, expect, it } from 'vitest';
import {
  CPI_BY_YEAR,
  PESETA_PER_EURO,
  REFERENCE_YEAR,
  calculatePesetaValue,
  decomposePesetas,
  getCashDisplay,
  getSupportedYears,
  isSupportedYear,
} from './logic';

describe('peseta value calculator', () => {
  it('uses the irrevocable peseta to euro conversion rate', () => {
    const result = calculatePesetaValue({ pesetas: PESETA_PER_EURO, originYear: REFERENCE_YEAR });
    expect(result?.nominalEuros).toBe(1);
    expect(result?.adjustedEuros).toBe(1);
  });

  it('updates historical purchasing power from CPI indices', () => {
    const result = calculatePesetaValue({ pesetas: 1000, originYear: 1980 });
    expect(result?.adjustedEuros).toBeGreaterThan(result?.nominalEuros ?? 0);
    expect(result?.purchasingPowerChange).toBeGreaterThan(500);
  });

  it('supports a custom reference year', () => {
    const result = calculatePesetaValue({ pesetas: 1000, originYear: 2000, referenceYear: 2010 });
    expect(result?.referenceYear).toBe(2010);
    expect(result?.cpiMultiplier).toBeCloseTo(CPI_BY_YEAR[2010]! / CPI_BY_YEAR[2000]!, 4);
  });

  it('rejects invalid amounts and years', () => {
    expect(calculatePesetaValue({ pesetas: 0, originYear: 2000 })).toBeNull();
    expect(calculatePesetaValue({ pesetas: 1000, originYear: 1979 })).toBeNull();
    expect(calculatePesetaValue({ pesetas: 1000, originYear: 2000, referenceYear: 2027 })).toBeNull();
    expect(isSupportedYear(1980)).toBe(true);
    expect(isSupportedYear(1980.5)).toBe(false);
  });

  it('returns descending years from the reference year', () => {
    const years = getSupportedYears();
    expect(years[0]).toBe(REFERENCE_YEAR);
    expect(years.at(-1)).toBe(1980);
    expect(years).toHaveLength(47);
  });

  it('decomposes amounts into representative notes and coins', () => {
    expect(decomposePesetas(1234)).toEqual([
      { value: 1000, count: 1, kind: 'banknote' },
      { value: 200, count: 1, kind: 'coin' },
      { value: 25, count: 1, kind: 'coin' },
      { value: 5, count: 1, kind: 'coin' },
      { value: 1, count: 4, kind: 'coin' },
    ]);
  });

  it('keeps every historical denomination in the visual cash display', () => {
    const display = getCashDisplay(1234);
    expect(display).toHaveLength(12);
    expect(display.find((piece) => piece.value === 25)?.count).toBe(1);
    expect(display.find((piece) => piece.value === 2000)?.count).toBe(0);
  });
});
