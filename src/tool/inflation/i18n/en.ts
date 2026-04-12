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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources & References',
  bibliography: [
    {
      name: 'INE: Spanish Consumer Price Index',
      url: 'https://www.ine.es/',
    },
    {
      name: 'Bank of Spain: Inflation Analysis',
      url: 'https://www.bde.es/',
    },
    {
      name: 'ECB: Historical Eurozone Inflation Data',
      url: 'https://www.ecb.europa.eu/',
    },
    {
      name: 'OECD: Purchasing Power Parity Analysis',
      url: 'https://www.oecd.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Invisible Money: How Inflation Erodes Your Savings',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Inflation</strong> is the sustained increase in the general price level in an economy. Although it seems gradual, its cumulative effect is devastating: the 1,000€ you saved 10 years ago probably buys 30% fewer goods and services today.',
    },
    {
      type: 'tip',
      title: 'The Compounding Effect',
      html: '<p>Inflation works in a <strong>compounded</strong> manner, like interest on your savings but in reverse. Year after year, the percentage applies to what has already been lost.</p>',
    },
    {
      type: 'title',
      text: 'Economic Milestones in Spain',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '1980s: The Inflationary Decade',
          description: 'Double-digit inflation (up to 15%). Prices changed drastically month-to-month.',
          points: [
            'Maximum CPI: 15.6% in 1980',
            'Global economic crisis',
            'Massive unemployment',
            'Austerity policies',
          ],
        },
        {
          title: 'Pandemic Inflation: 2021 to 2023',
          description: 'Sharp inflation surge from energy and food, exceeding 6%.',
          highlight: true,
          points: [
            'Maximum inflation: 6.5% in 2021',
            'European energy crisis',
            'Supply chain disruptions',
            'Gradual recovery in 2024',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Use our calculator to understand the true impact of inflation on your wealth and why investing (rather than saving without returns) is critical to preserving your purchasing power.',
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
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
    labelYearSelect: 'In the year',
    labelIn: 'In',
    labelEquivalentToday: 'is equivalent today to',
    labelInflationAccumulated: 'Accumulated Inflation',
    labelYear: 'Year',
  },
};
