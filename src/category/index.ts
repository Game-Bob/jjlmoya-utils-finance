import type { FinanceCategoryEntry } from '../types';
import { compoundInterest } from '../tool/compoundInterest';
import { mortgage } from '../tool/mortgage';
import { inflation } from '../tool/inflation';
import { percentageCalculator } from '../tool/percentageCalculator';
import { lateInterest } from '../tool/lateInterest';
import { ibanBicSwift } from '../tool/ibanBicSwiftConverter';
import { rentIncrease } from '../tool/rentIncreaseCalculator';
import { lotteryOptimizer } from '../tool/lotteryOptimizer';

export const financeCategory: FinanceCategoryEntry = {
  icon: 'mdi:finance',
  tools: [compoundInterest, mortgage, inflation, percentageCalculator, lateInterest, ibanBicSwift, rentIncrease, lotteryOptimizer],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

