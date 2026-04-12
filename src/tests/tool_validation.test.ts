import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { financeCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 5 tools in ALL_TOOLS (compoundInterest, mortgage, inflation, percentageCalculator, lateInterest)', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('financeCategory should be defined', () => {
      expect(financeCategory).toBeDefined();
      expect(financeCategory.i18n).toBeDefined();
    });
  });
});

