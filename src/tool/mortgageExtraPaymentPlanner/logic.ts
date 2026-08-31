import { DEFAULT_CURRENCY_BY_LOCALE } from './currency-defaults';

export type MortgageFrequency = 'monthly' | 'biweekly' | 'weekly';

export type CurrencyCode =
  | 'AUD' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'CZK' | 'DKK'
  | 'EUR' | 'GBP' | 'IDR' | 'INR' | 'JPY' | 'KRW' | 'MXN' | 'NOK'
  | 'PLN' | 'RUB' | 'SEK' | 'TRY' | 'USD';

export interface MortgageInputs {
  principal: number;
  annualRate: number;
  termYears: number;
  frequency: MortgageFrequency;
  recurringExtra: number;
  oneOffExtra: number;
  oneOffPeriod: number;
  startDate: string;
  currency: CurrencyCode;
}

export interface PaymentRow {
  period: number;
  date: string;
  payment: number;
  interest: number;
  scheduledPrincipal: number;
  extra: number;
  balance: number;
}

export interface AnnualSummary {
  year: number;
  payment: number;
  interest: number;
  principal: number;
  extra: number;
  balance: number;
}

export interface MortgageResult {
  regularPayment: number;
  totalPaid: number;
  totalInterest: number;
  totalExtra: number;
  payoffDate: string;
  periods: number;
  baselinePayment: number;
  baselineInterest: number;
  baselinePeriods: number;
  interestSaved: number;
  periodsSaved: number;
  schedule: PaymentRow[];
  baselineSchedule: PaymentRow[];
  annualSummary: AnnualSummary[];
}

export const FREQUENCY_PERIODS: Record<MortgageFrequency, number> = {
  monthly: 12,
  biweekly: 26,
  weekly: 52,
};

const INTERNAL_CURRENCY_UNITS_PER_EUR: Record<CurrencyCode, number> = {
  AUD: 1.78,
  BRL: 6.1,
  CAD: 1.55,
  CHF: 0.95,
  CNY: 7.85,
  CZK: 24.9,
  DKK: 7.46,
  EUR: 1,
  GBP: 0.86,
  IDR: 19200,
  INR: 95,
  JPY: 172,
  KRW: 1600,
  MXN: 21.8,
  NOK: 11.8,
  PLN: 4.28,
  RUB: 95,
  SEK: 11.1,
  TRY: 50,
  USD: 1.17,
};

const MAX_PERIODS = 5200;

export function getPeriodsPerYear(frequency: MortgageFrequency): number {
  return FREQUENCY_PERIODS[frequency];
}

export function getDefaultCurrency(locale: string): CurrencyCode {
  const normalizedLocale = locale.toLowerCase().replace('_', '-');
  const regionalCurrency = DEFAULT_CURRENCY_BY_LOCALE[normalizedLocale];
  if (regionalCurrency) return regionalCurrency;
  const language = normalizedLocale.split('-')[0];
  return DEFAULT_CURRENCY_BY_LOCALE[language] ?? 'EUR';
}

function paymentForLoan(principal: number, rate: number, periods: number): number {
  if (rate === 0) return principal / periods;
  const factor = (1 + rate) ** periods;
  return principal * ((rate * factor) / (factor - 1));
}

function parseIsoDate(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

function isValidIsoDate(value: string): boolean {
  const parts = value.split('-').map(Number);
  const date = parseIsoDate(value);
  return parts.length === 3
    && parts.every(Number.isInteger)
    && date.getUTCFullYear() === parts[0]
    && date.getUTCMonth() + 1 === parts[1]
    && date.getUTCDate() === parts[2];
}

function addPeriod(date: Date, frequency: MortgageFrequency): Date {
  const next = new Date(date.getTime());
  if (frequency === 'monthly') next.setUTCMonth(next.getUTCMonth() + 1);
  if (frequency === 'biweekly') next.setUTCDate(next.getUTCDate() + 14);
  if (frequency === 'weekly') next.setUTCDate(next.getUTCDate() + 7);
  return next;
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function createSchedule(inputs: MortgageInputs, withExtras: boolean): PaymentRow[] {
  const periodsPerYear = getPeriodsPerYear(inputs.frequency);
  const periods = Math.max(1, Math.round(inputs.termYears * periodsPerYear));
  const periodicRate = inputs.annualRate / 100 / periodsPerYear;
  const regularPayment = paymentForLoan(inputs.principal, periodicRate, periods);
  const rows: PaymentRow[] = [];
  let balance = inputs.principal;
  let date = parseIsoDate(inputs.startDate);

  for (let period = 1; period <= Math.min(periods, MAX_PERIODS) && balance > 0.005; period += 1) {
    const interest = balance * periodicRate;
    const scheduledPrincipal = Math.min(balance, Math.max(0, regularPayment - interest));
    const extra = calculateExtra(inputs, period, balance - scheduledPrincipal, withExtras);
    const principalPaid = Math.min(balance, scheduledPrincipal + extra);
    balance = Math.max(0, balance - principalPaid);
    rows.push({
      period,
      date: isoDate(date),
      payment: interest + principalPaid,
      interest,
      scheduledPrincipal,
      extra,
      balance,
    });
    date = addPeriod(date, inputs.frequency);
  }
  return rows;
}

function calculateExtra(inputs: MortgageInputs, period: number, remaining: number, withExtras: boolean): number {
  if (!withExtras) return 0;
  const recurring = Math.min(Math.max(0, remaining), Math.max(0, inputs.recurringExtra));
  const oneOffRemaining = Math.max(0, remaining - recurring);
  const oneOff = period === Math.round(inputs.oneOffPeriod) ? Math.min(oneOffRemaining, Math.max(0, inputs.oneOffExtra)) : 0;
  return recurring + oneOff;
}

function summarizeAnnual(rows: PaymentRow[], periodsPerYear: number): AnnualSummary[] {
  const years = new Map<number, AnnualSummary>();
  rows.forEach((row) => {
    const year = Math.ceil(row.period / periodsPerYear);
    const existing = years.get(year) ?? { year, payment: 0, interest: 0, principal: 0, extra: 0, balance: 0 };
    existing.payment += row.payment;
    existing.interest += row.interest;
    existing.principal += row.scheduledPrincipal;
    existing.extra += row.extra;
    existing.balance = row.balance;
    years.set(year, existing);
  });
  return [...years.values()];
}

export function validateMortgageInputs(inputs: MortgageInputs): string[] {
  const checks: Array<[string, boolean]> = [
    ['principal', isPositive(inputs.principal)],
    ['annualRate', isAnnualRate(inputs.annualRate)],
    ['termYears', isTerm(inputs.termYears)],
    ['recurringExtra', isNonNegative(inputs.recurringExtra)],
    ['oneOffExtra', isNonNegative(inputs.oneOffExtra)],
    ['oneOffPeriod', isPeriod(inputs.oneOffPeriod)],
    ['startDate', isValidStartDate(inputs.startDate)],
    ['currency', isValidCurrency(inputs.currency)],
  ];
  return checks.filter(([, valid]) => !valid).map(([name]) => name);
}

function isPositive(value: number): boolean {
  return Number.isFinite(value) && value > 0;
}

function isNonNegative(value: number): boolean {
  return Number.isFinite(value) && value >= 0;
}

function isAnnualRate(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 100;
}

function isTerm(value: number): boolean {
  return Number.isFinite(value) && value > 0 && value <= 100;
}

function isPeriod(value: number): boolean {
  return Number.isFinite(value) && value >= 1;
}

function isValidStartDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && isValidIsoDate(value);
}

function isValidCurrency(value: unknown): value is CurrencyCode {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(INTERNAL_CURRENCY_UNITS_PER_EUR, value);
}

function sum(rows: PaymentRow[], key: keyof Pick<PaymentRow, 'payment' | 'interest' | 'extra'>): number {
  return rows.reduce((total, row) => total + row[key], 0);
}

export function calculateMortgage(inputs: MortgageInputs): MortgageResult | null {
  if (validateMortgageInputs(inputs).length > 0) return null;
  const periodsPerYear = getPeriodsPerYear(inputs.frequency);
  const baselineSchedule = createSchedule(inputs, false);
  const schedule = createSchedule(inputs, true);
  const periodicRate = inputs.annualRate / 100 / periodsPerYear;
  const periods = Math.max(1, Math.round(inputs.termYears * periodsPerYear));
  const regularPayment = paymentForLoan(inputs.principal, periodicRate, periods);
  const baselineInterest = sum(baselineSchedule, 'interest');
  const totalInterest = sum(schedule, 'interest');
  const totalPaid = sum(schedule, 'payment');
  const totalExtra = sum(schedule, 'extra');
  return {
    regularPayment,
    totalPaid,
    totalInterest,
    totalExtra,
    payoffDate: schedule.at(-1)?.date ?? inputs.startDate,
    periods: schedule.length,
    baselinePayment: regularPayment,
    baselineInterest,
    baselinePeriods: baselineSchedule.length,
    interestSaved: Math.max(0, baselineInterest - totalInterest),
    periodsSaved: Math.max(0, baselineSchedule.length - schedule.length),
    schedule,
    baselineSchedule,
    annualSummary: summarizeAnnual(schedule, periodsPerYear),
  };
}

export function convertCurrencyAmount(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  return amount * (INTERNAL_CURRENCY_UNITS_PER_EUR[to] / INTERNAL_CURRENCY_UNITS_PER_EUR[from]);
}
