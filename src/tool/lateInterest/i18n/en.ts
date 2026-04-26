import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'late-interest-calculator';
const title = 'Late Interest Calculator: Calculate Penalty Interest';
const description =
  'Calculate late payment interest and penalty charges. Tools for simple, compound, and monthly interest calculations. Perfect for overdue invoices and debt calculations.';

const faqData = [
  {
    question: 'What is late payment interest or penalty interest?',
    answer:
      'It is the interest charged on an amount not paid within the agreed deadline. It is calculated on the original debt and accumulates until full payment is made.',
  },
  {
    question: 'What is the difference between simple and compound interest?',
    answer:
      'Simple interest is calculated only on the original capital each day. Compound interest is calculated on the capital plus accumulated interest, causing debt to grow faster.',
  },
  {
    question: 'How is daily interest calculated?',
    answer:
      'Divide the annual rate by 365 days and apply it to the original capital. For example, 10% annual = 0.0274% daily.',
  },
  {
    question: 'What late interest rate should I apply?',
    answer:
      'It depends on local legislation and contract terms. Different countries have different limits on penalty rates. Consult with a legal advisor for your specific case.',
  },
  {
    question: 'Can I use this calculator for legal debts?',
    answer:
      'This is an informational tool. For real debts, verify contract terms and local legislation. Consult a lawyer if you have doubts about rate calculations.',
  },
];

const howToData = [
  {
    name: 'Choose calculation type',
    text: 'Select between simple interest, compound, or monthly based on your situation.',
  },
  {
    name: 'Enter the data',
    text: 'Input the original amount, interest rate, and delay period.',
  },
  {
    name: 'Get your result',
    text: 'The calculator shows daily accumulated interest, total interest, final amount, and effective rate.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Late Interest and Legal Interest Calculator: Complete Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In Spain\'s complex legal and fiscal framework, time does not pass freely on a debt. <strong>Late interest</strong> and <strong>legal interest on money</strong> are the mechanisms the law uses to compensate for damage caused by failure to meet a financial obligation within the deadline. Whether it is a debt with the tax authority, non-payment between businesses, or a legal claim, understanding how these interests accrue is essential.',
    },
    {
      type: 'title',
      text: 'What is Legal Interest on Money?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Legal interest on money is the surcharge applied to a debt when the parties have not agreed on a specific interest rate or when the law determines it. For the years <strong>2024, 2025, and 2026</strong>, this rate has remained stable at <strong>3.25%</strong>. This percentage serves as the basis for numerous legal calculations.',
    },
    {
      type: 'title',
      text: 'Tax Late Interest (Revenue Authority)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When the debt is with the Government, <strong>tax late interest</strong> is higher than legal interest to discourage delays in tax payments. For the period <strong>2024-2026</strong>, it has been set at <strong>4.0625%</strong>. This is the surcharge that the tax authority will charge you if you file a self-assessment outside the deadline.',
    },
    {
      type: 'tip',
      title: 'Compensatory Nature, Not Punitive',
      html: '<p><strong>Key point:</strong> Unlike fines, late interest has a compensatory nature, not punitive. The tax authority does not "punish" you with them, but charges you for the time you have had money that should have been in public coffers.</p>',
    },
    {
      type: 'title',
      text: 'How to Calculate Interest Step by Step',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The calculation of these interests follows a simple interest formula, where time is counted in calendar days: <strong>Interest = (Principal × Days × Interest Rate) / 36,500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Principal:</strong> The total amount of the original debt.',
        '<strong>Days:</strong> The number of days elapsed from the day after the due date until the day of actual payment.',
        '<strong>Interest Rate:</strong> The applicable annual percentage (e.g., 3.25 or 4.0625).',
        '<strong>36,500:</strong> The divisor factor to convert the annual percentage to daily (365 days x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Practical Example: Tax Authority Debt',
      html: '<p>Imagine you owe €5,000 from an income tax return that was due 180 days ago:</p><ul><li>Interest applicable (Late): 4.0625%</li><li>Calculation: (5,000 × 180 × 4.0625) / 36,500</li><li><strong>Resulting interest:</strong> €100.17</li><li>Total to pay: €5,100.17</li></ul>',
    },
    {
      type: 'title',
      text: 'Differences According to Debt Type',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Civil Debts:</strong> Between individuals, 3.25% (legal) applies.',
        '<strong>Commercial Debts:</strong> Governed by the Late Payment Law, reaching 10.15% - 11.15% in 2025-2026.',
        '<strong>Social Security Debts:</strong> Apply 4.0625% plus surcharges of 10% to 20%.',
        '<strong>Court Interest:</strong> When there is a court judgment, 5.25% from the judgment date.',
      ],
    },
    {
      type: 'title',
      text: 'Interest in Commercial Operations: Beware the 60-Day Deadline!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If you are self-employed or a company, the Late Payment Law establishes a maximum payment period of 60 days. If your customer exceeds that date, you can demand commercial late interest automatically, without needing a reminder, and also collect a fixed amount of €40 for collection costs.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Simple Interest',
          description: 'Calculated only on the original principal each period.',
          points: [
            'Linear and predictable growth',
            'Less harmful than compound interest',
            'Common in simple contracts',
            'Formula: Principal × Rate × Time',
          ],
        },
        {
          title: 'Compound Interest',
          description: 'Recalculated on principal plus accumulated interest.',
          highlight: true,
          points: [
            'Exponential growth',
            'More costly for the debtor',
            'Used in complex finance',
            'Interest generates more interest',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'The exact calculation of penalty interest depends on local laws and contract terms. Different jurisdictions have maximum rate limits. Always verify your contract and consult a legal expert.',
    },
  ],
  ui: {
    labelTitle: 'Late Interest Calculator',
    labelSimpleTitle: 'Simple',
    labelCompoundTitle: 'Compound',
    labelMonthlyTitle: 'Monthly',
    labelSimpleQuestion: 'Calculate with simple interest',
    labelCompoundQuestion: 'Calculate with compound interest',
    labelMonthlyQuestion: 'Calculate with monthly periods',
    labelPrincipal: 'Original Amount',
    labelAnnualRate: 'Annual Rate',
    labelDays: 'Days Overdue',
    labelMonths: 'Months Overdue',
    labelMonthlyRate: 'Monthly Rate',
    labelDailyInterest: 'Daily Interest',
    labelTotalInterest: 'Total Interest',
    labelTotalAmount: 'Total Amount Due',
    labelEffectiveRate: 'Effective Rate',
    labelCopyTooltip: 'Copy result',
    currencySymbol: '$',
    percentSymbol: '%',
    labelFormula: 'Formula applied',
    reportTitle: 'LATE INTEREST CALCULATION REPORT',
    reportLabelPrincipal: 'Principal',
    reportLabelType: 'Type',
    reportLabelPeriod: 'Period',
    reportLabelDays: 'Days elapsed',
    reportLabelInterest: 'ACCRUED INTEREST',
    reportLabelTotal: 'TOTAL DUE',
    reportDaysSuffix: 'days',
    formulaDescription: 'This calculation uses current rates. If the period spans previous years with different rates, the actual calculation should be divided by periods.',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
  },
};
