export type SubscriptionFrequency = 'weekly' | 'monthly' | 'quarterly' | 'annual';

export interface SubscriptionInput {
  id: string;
  name: string;
  amount: number;
  frequency: SubscriptionFrequency;
  renewalDate?: string;
}

export interface SubscriptionCalculatorInput {
  currency: string;
  subscriptions: SubscriptionInput[];
  today?: string;
}

export interface SubscriptionLineResult extends SubscriptionInput {
  monthlyCost: number;
  annualCost: number;
  nextRenewal: string | null;
}

export interface RenewalItem {
  id: string;
  name: string;
  date: string;
  amount: number;
}

export interface SubscriptionScenario {
  removedId: string;
  monthlyTotal: number;
  annualTotal: number;
  savedMonthly: number;
  savedAnnual: number;
}

export interface SubscriptionCalculatorResult {
  currency: string;
  items: SubscriptionLineResult[];
  monthlyTotal: number;
  annualTotal: number;
  averageDailyCost: number;
  renewals: RenewalItem[];
  scenarios: SubscriptionScenario[];
}

const FREQUENCY_MULTIPLIERS: Record<SubscriptionFrequency, number> = {
  weekly: 52,
  monthly: 12,
  quarterly: 4,
  annual: 1,
};

const round = (value: number): number => Number(value.toFixed(2));

function isFrequency(value: string): value is SubscriptionFrequency {
  return value in FREQUENCY_MULTIPLIERS;
}

function parseDate(value: string | undefined): Date | null {
  if (!value) return null;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function nextRenewalDate(value: string | undefined, today: Date): string | null {
  const date = parseDate(value);
  if (!date) return null;
  const candidate = new Date(today.getFullYear(), date.getMonth(), date.getDate());
  if (candidate < today) candidate.setFullYear(candidate.getFullYear() + 1);
  return formatDate(candidate);
}

function isValidSubscription(item: SubscriptionInput): boolean {
  return item.id.trim().length > 0
    && item.name.trim().length > 0
    && Number.isFinite(item.amount)
    && item.amount > 0
    && isFrequency(item.frequency)
    && (!item.renewalDate || parseDate(item.renewalDate) !== null);
}

function getToday(value?: string): Date {
  return parseDate(value) ?? new Date();
}

export function calculateSubscriptionCosts(input: SubscriptionCalculatorInput): SubscriptionCalculatorResult | null {
  const currency = input.currency.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(currency) || input.subscriptions.length === 0 || input.subscriptions.some((item) => !isValidSubscription(item))) return null;

  const today = getToday(input.today);
  const items = input.subscriptions.map((item) => {
    const annualCost = round(item.amount * FREQUENCY_MULTIPLIERS[item.frequency]);
    return { ...item, monthlyCost: round(annualCost / 12), annualCost, nextRenewal: nextRenewalDate(item.renewalDate, today) };
  });
  const monthlyTotal = round(items.reduce((total, item) => total + item.monthlyCost, 0));
  const annualTotal = round(items.reduce((total, item) => total + item.annualCost, 0));
  const renewals = items
    .filter((item): item is SubscriptionLineResult & { nextRenewal: string } => item.nextRenewal !== null)
    .map((item) => ({ id: item.id, name: item.name, date: item.nextRenewal, amount: item.amount }))
    .sort((a, b) => a.date.localeCompare(b.date));
  const scenarios = items.map((item) => ({
    removedId: item.id,
    monthlyTotal: round(monthlyTotal - item.monthlyCost),
    annualTotal: round(annualTotal - item.annualCost),
    savedMonthly: item.monthlyCost,
    savedAnnual: item.annualCost,
  }));

  return { currency, items, monthlyTotal, annualTotal, averageDailyCost: round(annualTotal / 365), renewals, scenarios };
}

export function getFrequencyLabel(frequency: SubscriptionFrequency): string {
  return frequency;
}
