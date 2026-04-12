import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'compound-interest-calculator';
const title = 'Compound Interest Calculator: Visualize Your Future Wealth';
const description =
  'Discover how small investments become large fortunes. The definitive tool for planning your financial freedom and retirement.';

const faqData = [
  {
    question: 'What is compound interest?',
    answer:
      'It is interest calculated on the initial principal and also on the accumulated interest from previous periods. This generates exponential growth of the investment over time.',
  },
  {
    question: 'What is the difference from simple interest?',
    answer:
      "With simple interest, interest is calculated only on the initial principal. With compound interest, the interest is reinvested, meaning 'your interest earns more interest'.",
  },
  {
    question: "What is the 'Rule of 72'?",
    answer:
      'It is a quick formula to estimate how long it will take for an investment to double: divide 72 by the annual rate of return. For example, at 8% per year, your money doubles in 9 years.',
  },
  {
    question: 'Why is it important to start investing young?',
    answer:
      'Due to the exponential effect, the most decisive factor is not the amount of money saved, but time. Starting a few years earlier can result in much greater final wealth due to compounding.',
  },
];

const howToData = [
  {
    name: 'Enter initial capital',
    text: 'Type the amount of money you will start your investment plan with.',
  },
  {
    name: 'Define periodic contributions',
    text: 'Indicate how much money you will save and invest each month additionally.',
  },
  {
    name: 'Estimate annual return',
    text: 'Enter the annual profit percentage you expect to obtain (e.g. 7% for the historical S&P 500).',
  },
  {
    name: 'Adjust the time horizon',
    text: 'Choose how many years you will maintain the investment to visualize the exponential growth of your capital.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources & References',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Khan Academy: Interest and Debt',
      url: 'https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial',
    },
    {
      name: 'Investopedia: Time Value of Money',
      url: 'https://www.investopedia.com/terms/t/timevalueofmoney.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Simple vs. Compound Interest: The Snowball Metaphor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Imagine you have a snowball at the top of a hill. <strong>Simple interest</strong> is like rolling that ball down and having to manually add snow every meter to make it grow. <strong>Compound interest</strong> is like letting the ball roll on its own: it picks up snow by itself, and the bigger it gets, the more surface area it has to pick up <em>even more</em> snow with each turn.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Simple Interest',
          description: 'Interest is always calculated on the initial principal.',
          points: [
            'Formula: Principal × Rate × Time',
            'Linear and predictable growth',
            'Used in short-term loans',
            'No reinvestment of returns',
          ],
        },
        {
          title: 'Compound Interest',
          description: 'Interest is added to the principal and generates new interest.',
          highlight: true,
          points: [
            'Formula: Principal × (1 + Rate)^Time',
            'Accelerated exponential growth',
            'Foundation of all long-term investing',
            'Your returns generate more returns',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Mathematically, your returns generate new returns. In the early years it seems slow, but once past the "inflection point", the curve shoots up vertically. This is where true fortunes are built.',
    },
    {
      type: 'tip',
      title: 'The Rule of 72',
      html: '<p>Divide 72 by your annual return rate to know how many years it will take to <strong>double your money</strong>.</p><p><em>Example: At 8%, you double every 9 years (72 ÷ 8 = 9).</em></p>',
    },
    {
      type: 'tip',
      title: '2026 Tip',
      html: '<p>Inflation is still a factor. Make sure your net return exceeds at least 2-3% per year to avoid losing purchasing power.</p>',
    },
  ],
  ui: {
    labelTitle: 'Investment Simulator',
    labelRealtime: 'Real time',
    labelInitial: 'Initial Deposit',
    labelMonthly: 'Monthly Contribution',
    labelRate: 'Annual Return',
    labelYears: 'Years',
    labelMyMoney: 'Your Money',
    labelProfit: 'Profit (Interest)',
    labelTotal: 'Total Accumulated',
    labelYear: 'Year',
    labelPrincipal: 'Your Money (Principal)',
    labelInterest: 'Generated Interest',
    insightPrefix: '[TIP] In year ',
    insightSuffix:
      ', your annual generated interest will exceed your contributions. Your money is working harder than you!',
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
  },
};
