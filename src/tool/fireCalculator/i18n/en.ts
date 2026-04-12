import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'four-percent-rule-fire-calculator-spain';
const title = 'FIRE Calculator Spain: 4% Rule';
const description = 'Calculate your financial independence number in Spain using the 4% rule. Plan your early retirement and visualize your path to financial freedom.';

const faqData = [
  {
    question: 'What is the 4% Rule?',
    answer: 'The 4% Rule is a retirement strategy based on the Trinity Study indicating you can withdraw 4% of your portfolio the first year, adjusted for inflation thereafter, without depleting funds over 30 years.',
  },
  {
    question: 'What is FIRE?',
    answer: 'FIRE stands for Financial Independence, Retire Early. It\'s a movement seeking financial freedom through aggressive saving and intelligent investing to retire before traditional retirement age.',
  },
  {
    question: 'What is my magic number?',
    answer: 'Your magic number is the total wealth needed to live off investment returns without working. It\'s calculated by dividing your annual expenses by the safe withdrawal rate (typically 4%).',
  },
  {
    question: 'What\'s the difference between Lean, Barista, and Fat FIRE?',
    answer: 'Lean FIRE means living with minimal expenses (70% of current spending), Barista FIRE is working part-time with investments covering the rest (50%), and Fat FIRE is comfortable living (150% of expenses).',
  },
  {
    question: 'Is the 4% Rule realistic?',
    answer: 'The 4% Rule has a 95% historical success rate in a 50/50 stock-bond portfolio over 30 years. However, it doesn\'t account for sequence-of-returns risk and is primarily based on US market data.',
  },
];

const howToData = [
  {
    name: 'Calculate your monthly expenses',
    text: 'Analyze what you really spend each month including housing, food, services, and entertainment.',
  },
  {
    name: 'Choose your safe withdrawal rate',
    text: 'The 4% Rule is standard, but adjust between 2.5% (conservative) and 6% (aggressive) based on your risk tolerance.',
  },
  {
    name: 'Enter your current net worth',
    text: 'Sum your investments, savings, and income-generating assets.',
  },
  {
    name: 'Visualize your progress',
    text: 'See the wealth growth chart and freedom milestones (Lean, Barista, Fat FIRE) to understand when you\'ll reach your goal.',
  },
];

const bibliographyData = [
  {
    name: 'Trinity Study: Portfolio Survivability',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Early Retirement Forum Discussion',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Shiller CAPE Index',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Bank of Spain - Financial Guidance',
    url: 'https://www.bde.es/bde/en/',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources and References',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4% Rule: The Holy Grail of Early Retirement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Discover how to calculate the wealth needed to live off investment returns forever. The <strong>4% Rule</strong> emerged from the Trinity Study, conducted in 1998 by three finance professors. They analyzed market data since 1926 to determine what percentage could be withdrawn annually without depleting the portfolio in 30 years.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Historical Success' },
        { value: '50/50', label: 'Stock/Bond Mix' },
        { value: '30', label: 'Year Horizon' },
        { value: '4%', label: 'Safe Withdrawal' },
      ],
    },
    {
      type: 'title',
      text: 'What is the FIRE Movement?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE stands for Financial Independence, Retire Early.',
        'Seeks the freedom to choose how to spend your time without financial constraints.',
        'Based on optimizing savings and intelligent investment strategies.',
        'Aims for your assets to generate sufficient cash flow to cover living expenses.',
      ],
    },
    {
      type: 'title',
      text: 'Types of Financial Freedom',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Minimalist lifestyle covering only basic survival expenses.',
          points: ['Extreme saving', 'Very low spending', 'Frugal freedom'],
        },
        {
          title: 'Barista FIRE',
          description: 'Hybrid situation where investments cover half your expenses.',
          points: ['Work by choice', 'Social coverage secured', 'Less stress'],
        },
        {
          title: 'Fat FIRE',
          description: 'Comfortable retirement with budget for luxuries and travel.',
          points: ['High net worth', 'No restrictions', 'Family legacy'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How to Use Our FIRE Calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Expense Tracking:</strong> Analyze your actual monthly spending.',
        '<strong>Safe Withdrawal Rate:</strong> Choose your retirement withdrawal percentage.',
        '<strong>Current Net Worth:</strong> Enter your investment and asset values.',
        '<strong>Savings Capacity:</strong> Calculate how long until you reach your goal.',
        '<strong>Visual Analysis:</strong> See your wealth growth trajectory and milestones.',
      ],
    },
    {
      type: 'title',
      text: 'Analyzing the 4% Rule',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Advantages',
          description: 'Why the 4% rule works',
          points: [
            'Simple mathematics for quick planning.',
            'Based on nearly a century of historical data.',
            'Adaptable to any spending level.',
          ],
        },
        {
          title: 'Limitations',
          description: 'What the 4% rule doesn\'t cover',
          points: [
            'Doesn\'t account for sequence-of-returns risk.',
            'Primarily based on US market data.',
            'Ignores major tax law changes.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Critical Factor: Inflation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Remember that €1,000 today won\'t buy the same amount in the future. It\'s vital to use real returns (adjusted for inflation) so your projections maintain current purchasing power. The 4% Rule assumes you adjust withdrawals annually for inflation.',
    },
  ],
  ui: {
    labelTitle: 'FIRE Calculator: 4% Rule',
    labelDescription: 'Calculate your magic number for financial independence and visualize your path to financial freedom.',
    labelMonthlyExpenses: 'Monthly Expenses',
    labelSWR: 'Safe Withdrawal Rate (SWR)',
    labelCurrentWorth: 'Current Net Worth',
    labelMonthlySavings: 'Monthly Savings Capacity',
    labelAnnualReturn: 'Estimated Annual Return (Net)',
    labelFreedomMilestones: 'Freedom Milestones',
    labelLeanFIRE: 'Lean FIRE (70% survival)',
    labelBaristaFIRE: 'Barista FIRE (50% income)',
    labelFatFIRE: 'Fat FIRE (150% luxury)',
    labelMagicNumber: 'Your Magic Number for Freedom',
    labelMagicNumberDesc: 'Capital needed to live off returns',
    labelTimeRemaining: 'Time to financial freedom',
    labelTimeRemainingFormat: 'You have {years} years and {months} months left',
    labelAlreadyFI: 'You\'ve already achieved financial freedom!',
    labelUnachievable: 'Goal unachievable with this savings rate',
    labelHiddenCostsChecklist: 'Hidden Costs Checklist',
    labelHealth: 'Health Insurance (+€200)',
    labelTaxes: 'Taxes (+€150)',
    labelHome: 'Home Maintenance (+€100)',
    labelTravel: 'Travel and Leisure (+€300)',
    labelEmergency: 'Emergency Fund (+€100)',
    labelSubscriptions: 'Subscriptions (+€50)',
    labelAdded: 'Added:',
    labelSavePlan: 'Save Plan',
    labelSWRTooltip: 'Safe Withdrawal Rate: The percentage of your savings you can withdraw each year without running out of money.',
    labelReturnTooltip: 'Annual market return (adjusted for inflation). The historical standard is 7%.',
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
  },
};
