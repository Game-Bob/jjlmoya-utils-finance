import { describe, expect, it } from 'vitest';
import { calculateInflationTimeline, getMilestoneYears } from './logic';

describe('calculateInflationTimeline', () => {
  it('compounds the cost equivalent and discounts unchanged cash', () => {
    const result = calculateInflationTimeline({ startingAmount: 1000, annualInflationRate: 5, years: 10, annualCashFlow: 0, cashFlowMode: 'none' });
    expect(result?.priceFactor).toBe(1.63);
    expect(result?.points.at(-1)?.costEquivalent).toBe(1628.89);
    expect(result?.points.at(-1)?.unchangedRealValue).toBe(613.91);
    expect(result?.purchasingPowerLossPercent).toBe(38.61);
  });

  it('adds annual contributions to the nominal balance and discounts the result', () => {
    const result = calculateInflationTimeline({ startingAmount: 1000, annualInflationRate: 2, years: 5, annualCashFlow: 200, cashFlowMode: 'contribution' });
    expect(result?.points.at(-1)?.nominalBalance).toBe(2000);
    expect(result?.points.at(-1)?.realBalance).toBe(1811.46);
  });

  it('stops a withdrawal scenario at zero and reports depletion', () => {
    const result = calculateInflationTimeline({ startingAmount: 500, annualInflationRate: 2, years: 5, annualCashFlow: 200, cashFlowMode: 'withdrawal' });
    expect(result?.points.at(-1)?.nominalBalance).toBe(0);
    expect(result?.depletionYear).toBe(3);
  });

  it('deduplicates milestone years for short timelines', () => {
    expect(getMilestoneYears(1)).toEqual([0, 1]);
    expect(getMilestoneYears(4)).toEqual([0, 1, 2, 3, 4]);
  });

  it('rejects invalid rates, periods and amounts', () => {
    expect(calculateInflationTimeline({ startingAmount: 0, annualInflationRate: 2, years: 5, annualCashFlow: 0, cashFlowMode: 'none' })).toBeNull();
    expect(calculateInflationTimeline({ startingAmount: 1000, annualInflationRate: -100, years: 5, annualCashFlow: 0, cashFlowMode: 'none' })).toBeNull();
    expect(calculateInflationTimeline({ startingAmount: 1000, annualInflationRate: 2, years: 5.5, annualCashFlow: 0, cashFlowMode: 'none' })).toBeNull();
  });
});
