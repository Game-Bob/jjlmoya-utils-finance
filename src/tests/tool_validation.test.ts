import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { financeCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 8 tools in ALL_TOOLS (compoundInterest, mortgage, inflation, percentageCalculator, lateInterest, ibanBicSwift, rentIncrease, lotteryOptimizer)', () => {
      expect(ALL_TOOLS.length).toBe(8);
    });

    it('financeCategory should be defined', () => {
      expect(financeCategory).toBeDefined();
      expect(financeCategory.i18n).toBeDefined();
    });
  });
});

