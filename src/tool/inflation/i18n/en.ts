import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflation-calculator-spain';
const title = 'Inflation Calculator Spain: Historical Money Value';
const description =
  'Discover what your pesetas are worth today or how much cost of living has increased since 1980. Updated Spanish CPI historical data through 2026.';

const faqData = [
  {
    question: 'What is CPI and how is it calculated?',
    answer:
      'The Consumer Price Index (CPI) measures the evolution of prices for a basket of goods and services representative of Spanish consumption. It is calculated by comparing the cost of this basket across different time periods.',
  },
  {
    question: 'How much has money lost value since 1980?',
    answer:
      '1,000 pesetas from 1980 are equivalent to approximately 60€ in today\'s purchasing power. Money has lost over 90% of its value in these 40+ years due to accumulated inflation.',
  },
  {
    question: 'Why do my savings lose value if I don\'t move them?',
    answer:
      'If inflation is 3% annually and your account earns 0% interest, you lose 3% of purchasing power each year. To maintain real value, your savings must generate at least the inflation rate.',
  },
  {
    question: 'What was Spain\'s highest inflation period?',
    answer:
      'The 1980s saw the most inflation, with double-digit rates (up to 15%). Prices changed drastically month-to-month. Since the euro (2002), inflation has been more controlled, except during 2021-2023.',
  },
  {
    question: 'How does inflation affect my savings?',
    answer:
      'Inflation acts as a "silent tax". If inflation is 5% and your money is under your mattress, at year\'s end you can buy 5% fewer products. It\'s critical to invest to counteract this effect.',
  },
];

const howToData = [
  {
    name: 'Select the starting year',
    text: 'Choose from which date you want to calculate money\'s value (available from 1980 to 2026).',
  },
  {
    name: 'Enter the amount',
    text: 'Type the amount in pesetas (for old dates) or euros you want to compare.',
  },
  {
    name: 'Choose the final year',
    text: 'Define when you want to see the purchasing power evolution.',
  },
  {
    name: 'Analyze the real result',
    text: 'View the purchasing power equivalence and accumulated inflation percentage for that period.',
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

export const content: ToolLocaleContent<InflationUI> = {
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
      text: 'Historical Inflation Calculator: Understand the Real Value of Your Money',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflation is the "silent tax" that devours your savings year after year. Do you know how much your money has lost in value since 1980? How much does that coffee really cost today that you paid 300 pesetas for 20 years ago?',
    },
    {
      type: 'title',
      text: 'Inflation: The Silent Tax on Your Wealth',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Inflation</strong> is the sustained and general increase in prices. Although it seems like a technical phenomenon, its impact on the real economy is direct: it reduces the amount of goods you can buy with the same money, eroding a lifetime of savings if protective measures are not taken.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Historical Record 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Price Peak 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Stability Target',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Essential Financial Terms',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'CPI',
          definition: 'An indicator that summarizes the variation in prices of a basic consumption basket.',
        },
        {
          term: 'Purchasing Power',
          definition: 'The real buying capacity of money at a given time.',
        },
        {
          term: 'Deflation',
          definition: 'General decline in prices that can paralyze investment.',
        },
        {
          term: 'Stagflation',
          definition: 'Scenario of high inflation combined with economic stagnation.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Economic Milestones and Comparison',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '1980s Crisis',
          description: 'Period marked by double-digit inflation and major labor instability.',
          points: [
            'Extremely high interest rates',
            'Rapid loss of peseta value',
            'Wages devoured by rising prices',
          ],
        },
        {
          title: 'Pandemic Inflation: 2021 to 2023',
          description: 'Sharp price increase due to energy costs and supply chain issues.',
          highlight: true,
          points: [
            'Direct impact on cost of living',
            'ECB rate hikes to slow consumption',
            'Slow recovery of purchasing power',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Item or Indicator', 'Value in 1980 (Estimated)', 'Value in 2026 (Projected)', 'Variation'],
      rows: [
        ['Loaf of Bread', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Coffee at Café', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Movie Ticket', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Monthly Minimum Wage', '154€ (25,615 pts)', '1,140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'The Danger of Cash',
      html: 'Keeping money under the mattress or in non-yielding savings accounts is a guaranteed loss of capital. Average inflation of 3% cuts the value of your savings in half in less than 25 years.',
    },
    {
      type: 'title',
      text: 'Tips to Protect Your Savings',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Investment Strategies',
      items: [
        {
          pro: 'Real Assets: Real estate usually appreciates with inflation.',
          con: 'Low liquidity and high entry costs.',
        },
        {
          pro: 'Stock Market & Funds: Returns that usually exceed CPI over the long term.',
          con: 'Volatility and short-term market risk.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Healthy Financial Habits',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Periodically review your expenses to detect hidden increases.',
        'Diversify savings across different types of assets.',
        'Consider inflation-linked government bonds.',
        'Use calculation tools to contextualize offers and salaries.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Warning: Negative Compound Interest',
      html: 'Inflation acts as reverse compound interest. Each year, the percentage loss applies to an already diminished value, accelerating wealth loss if you don\'t intervene.',
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      items: [
        'CPI is just an average; your personal inflation depends on your habits.',
        'Investing is not optional if you want to preserve the real value of your work.',
        'Inflation calculators are vital to understanding long-term contracts.',
      ],
    },
    {
      type: 'message',
      title: 'Take Control of Your Economy',
      html: 'Our calculator uses official INE data to give you the most accurate view of Spain\'s past and present economic landscape.',
    },
  ],
  ui: {
    labelTitle: 'Inflation Calculator Spain',
    labelInitialAmount: 'Initial Money',
    labelInitialYear: 'In the year',
    labelFinalAmount: 'Equivalent Today',
    labelFinalYear: 'Year 2026',
    labelInflationRate: 'Accumulated Inflation',
    labelCalculatedOn: 'Calculation made using official INE data through 2025 and estimated projections for the end of 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
    labelYearSelect: 'In the year',
    labelIn: 'In',
    labelEquivalentToday: 'is equivalent today to',
    labelInflationAccumulated: 'Accumulated Inflation',
    labelYear: 'Year',
  },
};
