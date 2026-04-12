import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources & References',
  bibliography: [
    {
      name: 'Federal Reserve: Interest Rates',
      url: 'https://www.federalreserve.gov/',
    },
    {
      name: 'Investopedia: Compound Interest',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'SEC: Understanding Interest Calculations',
      url: 'https://www.sec.gov/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'How to Calculate Late Payment Interest',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Late payment interest</strong> or <strong>penalty interest</strong> is the financial penalty applied when a payment is not made within the agreed timeframe. Calculating this accurately is essential in commercial and legal contexts.',
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
  },
};
