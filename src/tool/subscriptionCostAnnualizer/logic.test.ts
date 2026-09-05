import { describe, expect, it } from 'vitest';
import { calculateSubscriptionCosts, type SubscriptionInput } from './logic';

const subscriptions: SubscriptionInput[] = [
  { id: 'music', name: 'Music', amount: 10, frequency: 'monthly' as const },
  { id: 'paper', name: 'Paper', amount: 24, frequency: 'quarterly' as const },
  { id: 'cloud', name: 'Cloud', amount: 12, frequency: 'annual' as const },
];

describe('calculateSubscriptionCosts', () => {
  it('normalizes recurring frequencies into monthly and annual totals', () => {
    const result = calculateSubscriptionCosts({ currency: 'eur', subscriptions });
    expect(result?.annualTotal).toBe(228);
    expect(result?.monthlyTotal).toBe(19);
    expect(result?.averageDailyCost).toBe(0.62);
  });

  it('creates a saving scenario for each subscription', () => {
    const result = calculateSubscriptionCosts({ currency: 'USD', subscriptions });
    expect(result?.scenarios.find((scenario) => scenario.removedId === 'paper')).toMatchObject({ annualTotal: 132, savedAnnual: 96 });
  });

  it('sorts renewal dates from the selected reference day', () => {
    const datedSubscriptions: SubscriptionInput[] = [
      { id: 'music', name: 'Music', amount: 10, frequency: 'monthly', renewalDate: '2026-12-20' },
      { id: 'paper', name: 'Paper', amount: 24, frequency: 'quarterly', renewalDate: '2026-08-20' },
    ];
    const result = calculateSubscriptionCosts({ currency: 'USD', today: '2026-09-05', subscriptions: datedSubscriptions });
    expect(result?.renewals.map((item) => item.date)).toEqual(['2026-12-20', '2027-08-20']);
  });

  it('rejects empty, invalid and non-positive input', () => {
    expect(calculateSubscriptionCosts({ currency: 'EURO', subscriptions })).toBeNull();
    expect(calculateSubscriptionCosts({ currency: 'USD', subscriptions: [] })).toBeNull();
    expect(calculateSubscriptionCosts({ currency: 'USD', subscriptions: [{ id: 'music', name: 'Music', amount: 0, frequency: 'monthly' }] })).toBeNull();
  });
});
