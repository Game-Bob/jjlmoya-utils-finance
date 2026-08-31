import type { CurrencyCode, MortgageFrequency, MortgageInputs } from './logic';

const STORAGE_PREFIX = 'jjlmoya:mortgage-extra-payment-planner:v2';
const LEGACY_STORAGE_KEY = 'jjlmoya:mortgage-extra-payment-planner:v1';

export function readMortgageState(locale = 'en'): Partial<MortgageInputs> {
  try {
    const raw = window.localStorage.getItem(storageKey(locale)) ?? legacyState(locale);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    return parseStoredState(parsed as Record<string, unknown>);
  } catch {
    return {};
  }
}

function parseStoredState(value: Record<string, unknown>): Partial<MortgageInputs> {
  const currency = storedCurrency(value);
  if (!currency) return {};
  return {
    currency,
    principal: numberOrUndefined(value.principal),
    annualRate: numberOrUndefined(value.annualRate),
    termYears: numberOrUndefined(value.termYears),
    recurringExtra: numberOrUndefined(value.recurringExtra),
    oneOffExtra: numberOrUndefined(value.oneOffExtra),
    oneOffPeriod: numberOrUndefined(value.oneOffPeriod),
    startDate: typeof value.startDate === 'string' ? value.startDate : undefined,
    frequency: isFrequency(value.frequency) ? value.frequency : undefined,
  };
}

function storedCurrency(value: Record<string, unknown>): CurrencyCode | undefined {
  if (isCurrency(value.currency)) return value.currency;
  if (isCurrency(value.loanCurrency)) return value.loanCurrency;
  return undefined;
}

function numberOrUndefined(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function isCurrency(value: unknown): value is CurrencyCode {
  return typeof value === 'string' && ['AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'NOK', 'PLN', 'RUB', 'SEK', 'TRY', 'USD'].includes(value);
}

function isFrequency(value: unknown): value is MortgageFrequency {
  return value === 'monthly' || value === 'biweekly' || value === 'weekly';
}

function storageKey(locale: string): string {
  return `${STORAGE_PREFIX}:${locale.toLowerCase()}`;
}

function legacyState(locale: string): string | null {
  return locale.toLowerCase() === 'en' ? window.localStorage.getItem(LEGACY_STORAGE_KEY) : null;
}

export function writeMortgageState(state: MortgageInputs, locale = 'en'): void {
  try {
    window.localStorage.setItem(storageKey(locale), JSON.stringify(state));
  } catch {
  }
}
