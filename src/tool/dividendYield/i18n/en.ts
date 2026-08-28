import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DividendYieldUI } from '../ui';

const slug = 'dividend-yield-calculator';
const title = 'Dividend Yield Calculator for Stocks';
const description = 'Calculate gross and after withholding dividend yield, annual income and a declared growth scenario from your own stock figures.';

const ui: DividendYieldUI = {
  priceLabel: 'Share price',
  priceHelp: 'Enter an amount in your currency',
  dividendLabel: 'Dividend per payment',
  dividendHelp: 'Cash amount for one share in the same currency',
  cadenceLabel: 'Payment cadence',
  annualOption: 'Annual',
  quarterlyOption: 'Quarterly',
  sharesLabel: 'Shares held',
  sharesHelp: 'Optional, for income totals',
  withholdingLabel: 'Withholding rate (%)',
  withholdingHelp: 'Used for a simple net-income estimate',
  growthLabel: 'Declared growth scenario (%)',
  growthHelp: 'Optional input for the forward scenario',
  grossYieldLabel: 'Gross dividend yield',
  netYieldLabel: 'After withholding',
  grossIncomeLabel: 'Gross annual income',
  netIncomeLabel: 'Net annual income',
  annualDividendLabel: 'Annual dividend',
  priceShareLabel: 'Share price',
  couponNote: 'The strip turns the annual dividend into a proportion of the entered share price.',
  forwardTitle: 'Forward view using your growth assumption',
  forwardYieldLabel: 'Yield if the dividend grows as entered',
  forwardDividendLabel: 'Forward dividend per share',
  growthNote: 'This is a scenario, not a forecast.',
  formulaTitle: 'How the calculation works',
  formulaText: 'Annual dividend per share equals the payment amount multiplied by the number of payments. Gross yield equals annual dividend per share divided by share price, multiplied by 100. Net income applies the withholding rate to gross income. A growth value changes only the forward scenario.',
  riskNote: 'Dividend yield is a ratio based on the figures you enter. It does not include price gains or losses, fees, dividend cuts, inflation or the risk that a company changes its distribution.',
  emptyMessage: 'Enter a positive share price and non-negative dividend values to see the result.',
  annualSuffix: 'per year',
  perShareSuffix: 'per share',
  percentageSuffix: '%',
};

const faq = [
  {
    question: 'How do I calculate dividend yield?',
    answer: 'Annualise the dividend paid for one share, divide it by the share price, and multiply by 100. For a quarterly dividend, multiply the payment by four before dividing.',
  },
  {
    question: 'Should I enter an annual or quarterly dividend?',
    answer: 'Choose the cadence that matches the amount you entered. The calculator annualises quarterly payments automatically, while an annual amount is used as entered.',
  },
  {
    question: 'What is the difference between gross and net dividend income?',
    answer: 'Gross income is the annual dividend before the withholding rate you enter. Net income subtracts that rate as a simple scenario; your actual tax treatment may differ by country, account and security.',
  },
  {
    question: 'Does a high dividend yield mean a stock is better?',
    answer: 'No. Yield can rise because a share price fell, and a company can reduce or stop its dividend. Review the company, its distribution history and your own risk before making an investment decision.',
  },
];

const howTo = [
  { name: 'Enter the share price', text: 'Type the price per share you want to use as the denominator.' },
  { name: 'Add the dividend payment', text: 'Enter the dividend for one share and select whether that amount is annual or quarterly.' },
  { name: 'Review the yield and income', text: 'Read the gross yield, after-withholding yield and annual income. Add a declared growth assumption only to inspect a separate forward scenario.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<DividendYieldUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dividend yield explained: calculate the percentage and income from a stock', level: 2 },
    { type: 'paragraph', html: '<p>Dividend yield is a quick way to compare the annual cash distribution from a share with the price used to buy it. This calculator turns a per-payment dividend into an annual amount, divides that amount by the share price and shows the result as a percentage. It also estimates annual income for the number of shares you enter and separates gross results from a simple after-withholding scenario.</p>' },
    { type: 'paragraph', html: '<p>The result is a ratio, not a promise of return. It does not include a change in the share price, fees, currency movements, taxes beyond the rate entered, special dividends, or the possibility that a company reduces, suspends or cancels a distribution. Use it as a starting point for comparing figures, then investigate the company and the security behind them.</p>' },
    { type: 'title', text: 'The dividend yield formula', level: 3 },
    { type: 'paragraph', html: '<p>The core calculation is simple: <strong>dividend yield = annual dividend per share / share price x 100</strong>. If the dividend is paid quarterly, the calculator multiplies the payment by four before calculating the yield. If it is paid annually, the entered amount is already the annual dividend per share.</p>' },
    { type: 'table', headers: ['Figure', 'Calculation', 'Why it matters'], rows: [['Annual dividend per share', 'Payment amount x payments per year', 'Puts annual and quarterly payments on the same basis'], ['Gross dividend yield', 'Annual dividend per share / share price x 100', 'Shows the dividend as a percentage of the reference price'], ['Gross annual income', 'Annual dividend per share x shares held', 'Estimates cash income before the entered withholding rate'], ['Net annual income', 'Gross annual income x (1 - withholding rate / 100)', 'Provides a simple planning estimate after the entered rate']] },
    { type: 'title', text: 'Worked example: annual and quarterly payments', level: 3 },
    { type: 'paragraph', html: '<p>Imagine a share price of 100 in your chosen currency and a dividend of 1 paid every quarter. The annual dividend per share is 1 x 4 = 4, so the gross dividend yield is 4 / 100 x 100 = 4%. Holding 50 shares would produce estimated gross annual income of 200 before withholding.</p>' },
    { type: 'paragraph', html: '<p>If the same share paid 4 once a year, the result would still be a 4% gross yield. The payment cadence changes the annualisation step, not the underlying annual amount. Selecting the wrong cadence is therefore one of the easiest ways to produce a misleading result.</p>' },
    { type: 'title', text: 'Why the share price changes the yield', level: 3 },
    { type: 'paragraph', html: '<p>A dividend yield can change even when the company leaves its dividend unchanged. With an annual dividend of 4, a price of 100 produces a 4% yield, while a price of 80 produces a 5% yield. The higher percentage does not automatically mean that the business became more profitable; it may simply reflect a lower market price.</p>' },
    { type: 'paragraph', html: '<p>For a useful comparison, use the same price convention for every company: for example, the current market price, the closing price on a chosen date, or the price you actually paid. Do not compare one company using today\'s price with another using an old purchase price unless you clearly label the difference. The reference date and the dividend period both affect what the percentage means.</p>' },
    { type: 'title', text: 'Gross yield, withholding and income are different figures', level: 3 },
    { type: 'comparative', columns: 3, items: [
      { title: 'Gross yield', description: 'The annual dividend per share compared with the reference share price.', points: ['Useful for comparing the cash distribution with the price', 'Does not subtract withholding', 'Does not include price gains or losses'] },
      { title: 'Yield after withholding', description: 'The gross yield reduced by the withholding percentage entered in the calculator.', points: ['A simple scenario for planning', 'Actual tax treatment can differ', 'Do not treat it as a tax filing result'], highlight: true },
      { title: 'Annual income', description: 'The cash amount implied by the annual dividend and the shares held.', points: ['Gross income is before withholding', 'Net income uses the entered rate', 'It depends on the number of shares'] },
    ] },
    { type: 'paragraph', html: '<p>Withholding is not the same as your final tax liability. Rules can depend on your country of residence, the company\'s country, account type, treaty relief, reclaim procedures and other income. The calculator applies the percentage you enter mechanically so that you can test a planning assumption; it does not identify the rate that applies to you.</p>' },
    { type: 'title', text: 'How to use the calculator well', level: 3 },
    { type: 'list', items: [
      'Enter the share price and dividend amount in the same currency and on a comparable basis.',
      'Choose Annual or Quarterly to match the frequency of the dividend amount you entered.',
      'Add shares held when you want an income estimate rather than a per-share yield only.',
      'Use withholding only as an explicit planning assumption and check the applicable rules separately.',
      'Use the growth field to test a scenario, not to predict a company\'s future distribution.',
      'Record the price date and dividend period when you save or compare a result.',
    ] },
    { type: 'title', text: 'What a high dividend yield can and cannot tell you', level: 3 },
    { type: 'paragraph', html: '<p>A high yield may reflect a large distribution, but it can also be the result of a falling share price. It can therefore be a useful prompt for further research rather than a standalone buy signal. Look at the company\'s cash generation, earnings, debt, distribution history, stated policy and any recent announcement that could affect the payment.</p>' },
    { type: 'tip', title: 'Treat the growth field as a scenario', html: '<p>The forward view applies only the growth percentage you type to the dividend in the current calculation. It does not model reinvestment, changes in the share price, payout ratios, earnings growth or future dividend decisions. Keep the result labelled as an assumption when you use it in a plan.</p>' },
    { type: 'title', text: 'Limits of this dividend yield calculator', level: 3 },
    { type: 'paragraph', html: '<p>This tool models a regular per-share payment, a selected annual or quarterly cadence, an optional share count, an entered withholding rate and an optional one-step growth scenario. It does not forecast total shareholder return, estimate dividend safety, model irregular or special dividends, convert currencies, calculate local tax, account for fees, or value a company. For an investment decision, combine the ratio with primary company information and your own risk assessment.</p>' },
  ],
};
