import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { financeCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 14 tools in ALL_TOOLS (compoundInterest, financialFreedom, profitability, mortgage, inflation, percentageCalculator, lateInterest, ibanBicSwift, rentIncrease, lotteryOptimizer, courtFeeCalculator, legalInterestRate, fireCalculator, debtSnowball)', () => {
      expect(ALL_TOOLS.length).toBe(14);
    });

    it('financeCategory should be defined', () => {
      expect(financeCategory).toBeDefined();
      expect(financeCategory.i18n).toBeDefined();
    });
  });
});

