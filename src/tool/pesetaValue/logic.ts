export const PESETA_PER_EURO = 166.386;
export const FIRST_YEAR = 1980;
export const REFERENCE_YEAR = 2026;

const CPI_RATES: Record<number, number> = {
  1980: 15.591667,
  1981: 14.55,
  1982: 14.425,
  1983: 12.183333,
  1984: 11.308333,
  1985: 8.833333,
  1986: 8.8,
  1987: 5.266667,
  1988: 4.85,
  1989: 6.791667,
  1990: 6.733333,
  1991: 5.941667,
  1992: 5.941667,
  1993: 4.566667,
  1994: 4.725,
  1995: 4.675,
  1996: 3.566667,
  1997: 1.975,
  1998: 1.841667,
  1999: 2.291667,
  2000: 3.441667,
  2001: 3.6,
  2002: 3.608333,
};

const CPI_INDEX: Record<number, number> = {
  2002: 60.03625,
  2003: 61.860833,
  2004: 63.741083,
  2005: 65.888083,
  2006: 68.204583,
  2007: 70.105167,
  2008: 72.962417,
  2009: 72.752333,
  2010: 74.06175,
  2011: 76.428833,
  2012: 78.29825,
  2013: 79.40125,
  2014: 79.281417,
  2015: 78.88475,
  2016: 78.724833,
  2017: 80.2645,
  2018: 81.60925,
  2019: 82.179917,
  2020: 81.914833,
  2021: 84.4485,
  2022: 91.534083,
  2023: 94.7675,
  2024: 97.396417,
  2025: 100.000083,
  2026: 102.552571,
};

function buildCpiIndex(): Record<number, number> {
  const index = { ...CPI_INDEX };
  for (let year = 2001; year >= FIRST_YEAR; year -= 1) {
    index[year] = index[year + 1]! / (1 + CPI_RATES[year + 1]! / 100);
  }
  return index;
}

export const CPI_BY_YEAR = buildCpiIndex();

export type CashKind = 'coin' | 'banknote';

export interface CashPiece {
  value: number;
  count: number;
  kind: CashKind;
}

export const CASH_DENOMINATIONS: Array<{ value: number; kind: CashKind }> = [
  { value: 10000, kind: 'banknote' },
  { value: 5000, kind: 'banknote' },
  { value: 2000, kind: 'banknote' },
  { value: 1000, kind: 'banknote' },
  { value: 500, kind: 'coin' },
  { value: 200, kind: 'coin' },
  { value: 100, kind: 'coin' },
  { value: 50, kind: 'coin' },
  { value: 25, kind: 'coin' },
  { value: 10, kind: 'coin' },
  { value: 5, kind: 'coin' },
  { value: 1, kind: 'coin' },
];

export function decomposePesetas(amount: number): CashPiece[] {
  let remaining = Math.max(0, Math.floor(amount));
  return CASH_DENOMINATIONS.reduce<CashPiece[]>((pieces, denomination) => {
    const count = Math.floor(remaining / denomination.value);
    if (count > 0) {
      pieces.push({ ...denomination, count });
      remaining -= count * denomination.value;
    }
    return pieces;
  }, []);
}

export function getCashDisplay(amount: number): CashPiece[] {
  const usedPieces = new Map(decomposePesetas(amount).map((piece) => [piece.value, piece.count]));
  return CASH_DENOMINATIONS.map((denomination) => ({
    ...denomination,
    count: usedPieces.get(denomination.value) ?? 0,
  }));
}

export interface PesetaValueInput {
  pesetas: number;
  originYear: number;
  referenceYear?: number;
}

export interface PesetaValueResult {
  pesetas: number;
  originYear: number;
  referenceYear: number;
  nominalEuros: number;
  adjustedEuros: number;
  nominalDifference: number;
  purchasingPowerChange: number;
  cpiMultiplier: number;
}

export function isSupportedYear(year: number): boolean {
  return Number.isInteger(year) && year >= FIRST_YEAR && year <= REFERENCE_YEAR;
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function calculatePesetaValue(input: PesetaValueInput): PesetaValueResult | null {
  const referenceYear = input.referenceYear ?? REFERENCE_YEAR;
  if (!Number.isFinite(input.pesetas) || input.pesetas <= 0 || !isSupportedYear(input.originYear) || !isSupportedYear(referenceYear)) {
    return null;
  }

  const nominalEuros = input.pesetas / PESETA_PER_EURO;
  const cpiMultiplier = CPI_BY_YEAR[referenceYear]! / CPI_BY_YEAR[input.originYear]!;
  const adjustedEuros = nominalEuros * cpiMultiplier;

  return {
    pesetas: input.pesetas,
    originYear: input.originYear,
    referenceYear,
    nominalEuros: round(nominalEuros, 2),
    adjustedEuros: round(adjustedEuros, 2),
    nominalDifference: round(adjustedEuros - nominalEuros, 2),
    purchasingPowerChange: round((cpiMultiplier - 1) * 100, 1),
    cpiMultiplier: round(cpiMultiplier, 4),
  };
}

export function getSupportedYears(): number[] {
  return Array.from({ length: REFERENCE_YEAR - FIRST_YEAR + 1 }, (_, index) => REFERENCE_YEAR - index);
}
