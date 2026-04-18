import type { FinanceCategoryEntry } from '../types';
import { compoundInterest } from '../tool/compoundInterest/entry';
import { mortgage } from '../tool/mortgage/entry';
import { inflation } from '../tool/inflation/entry';
import { percentageCalculator } from '../tool/percentageCalculator/entry';
import { lateInterest } from '../tool/lateInterest/entry';
import { ibanBicSwift } from '../tool/ibanBicSwiftConverter/entry';
import { rentIncrease } from '../tool/rentIncreaseCalculator/entry';
import { lotteryOptimizer } from '../tool/lotteryOptimizer/entry';
import { courtFeeCalculator } from '../tool/courtFeeCalculator/entry';
import { legalInterestRate } from '../tool/legalInterestRate/entry';
import { fireCalculator } from '../tool/fireCalculator/entry';
import { debtSnowball } from '../tool/debtSnowball/entry';

export const financeCategory: FinanceCategoryEntry = {
  icon: 'mdi:finance',
  tools: [compoundInterest, mortgage, inflation, percentageCalculator, lateInterest, ibanBicSwift, rentIncrease, lotteryOptimizer, courtFeeCalculator, legalInterestRate, fireCalculator, debtSnowball],
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

