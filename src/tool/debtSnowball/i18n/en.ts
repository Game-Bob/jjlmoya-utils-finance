import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'debt-snowball-calculator';
const title = 'Debt Snowball Calculator: Debt Payment Plan 2026';
const description =
  'Calculate your financial freedom date using the debt snowball method by Dave Ramsey. Organize your debts from smallest to largest and visualize your monthly payment plan for free.';

const faqData = [
  {
    question: 'What is the debt snowball method?',
    answer:
      'It is a debt payment strategy popularized by Dave Ramsey that consists of paying debts in order from smallest to largest balance, regardless of interest rates. It focuses on the psychological victory of eliminating small accounts quickly to gain motivation.',
  },
  {
    question: 'Why not order by interest rate (Avalanche)?',
    answer:
      'Mathematically, paying the highest interest first saves more money. However, many people give up because they don\'t see immediate results. The Snowball prioritizes behavior and motivation: seeing a debt disappear quickly gives you the energy to tackle the big ones.',
  },
  {
    question: 'Should I have savings before starting the plan?',
    answer:
      'It\'s recommended to have an "Initial Emergency Fund" (around €1,000) before tackling debts. This prevents having to resort to credit cards again if an unexpected expense comes up, breaking your progress streak.',
  },
  {
    question: 'Which debts should I include in the calculator?',
    answer:
      'All consumer debts: credit cards, personal loans, debts to family, car loans, overdue invoices. Mortgages are usually left for a later phase due to their large volume.',
  },
  {
    question: 'What if I receive an unexpected extra income?',
    answer:
      'Any capital injection (bonuses, lottery, extra salary) should go entirely to the debt you\'re currently attacking. This drastically reduces the total time of your financial freedom plan.',
  },
];

const howToData = [
  {
    name: 'List your debts',
    text: 'Write down all your debts indicating the total pending balance and the minimum monthly payment you currently make for each one. Don\'t worry about interest for now.',
  },
  {
    name: 'Define your extra budget',
    text: 'Calculate how much additional money you can allocate each month on top of minimum payments. Even €20 per month can make a difference in the snowball effect.',
  },
  {
    name: 'Order and prioritize',
    text: 'The calculator will automatically order from smallest to largest balance. Pay the minimum on all except the smallest. Put all your extra money on that one.',
  },
  {
    name: 'Execute the cascade',
    text: 'When you pay off the smallest debt, take all the money you were allocating to it (its minimum + the extra) and add it to the next debt in the list. Repeat until you\'re free.',
  },
];

const bibliographyData = [
  {
    name: 'Investopedia — Debt Snowball vs. Debt Avalanche',
    url: 'https://www.investopedia.com/articles/personal-finance/080716/debt-avalanche-vs-debt-snowball-which-best-you.asp',
  },
  {
    name: 'Harvard Business Review — Research on Debt Payoff Strategies',
    url: 'https://hbr.org/2016/12/research-the-best-strategy-for-paying-off-credit-card-debt',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
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
      text: 'Debt Calculator with the Snowball Method: Guide 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Living with debt is like trying to run a marathon with a backpack full of stones. The <strong>snowball method</strong>, popularized by personal finance experts, has proven to be one of the most effective strategies for regaining financial freedom. It is not based on mathematical efficiency, but on the powerful <strong>psychological basis of human behavior</strong>.',
    },
    {
      type: 'title',
      text: 'What is the Debt Snowball Method?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The debt snowball method is a debt reduction strategy where you pay your obligations in order from <strong>smallest to largest balance</strong>, regardless of their interest rates. While you make minimum payments on all your debts, you allocate every extra euro you can save to the smallest balance.',
    },
    {
      type: 'paragraph',
      html: 'Once that first debt disappears, all the money you allocated to it goes toward the next smallest debt. This effect creates momentum similar to a small snowball rolling down a hill, becoming bigger and faster with each turn.',
    },
    {
      type: 'title',
      text: 'Psychology vs. Mathematics: Why Does It Work?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'If you talk to a pure financier, they\'ll tell you that the <strong>Avalanche Method</strong> is superior because you save more money in interest. And technically, they\'re right. However, debt is not a math problem; it\'s a problem of <strong>habits and behavior</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Quick wins:</strong> By eliminating the smallest debt in just a couple of months, you get a dopamine hit that motivates you to continue.',
        '<strong>Mental simplification:</strong> Going from having 7 monthly bills to 6 reduces the stress and complexity of your financial life.',
        '<strong>Sustained motivation:</strong> Early success gives you the energy needed to tackle the larger debts that will come later.',
      ],
    },
    {
      type: 'title',
      text: 'Snowball vs. Avalanche: Key Differences',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Our tool lets you compare both scenarios in real time so you can decide which plan fits best with your profile:',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Avalanche Method',
          description: 'Prioritizes the highest interest rate.',
          points: [
            'You save the maximum amount of money on bank interest',
            'It may take a long time to feel progress',
            'If the most expensive debt is very large, discouragement comes sooner',
            'Mathematically optimal',
          ],
        },
        {
          title: 'Snowball Method',
          description: 'Prioritizes the smallest balance.',
          points: [
            'You eliminate accounts from your list as soon as possible',
            'Generates immediate positive reinforcement',
            'Higher rate of plan completion',
            'Psychologically rewarding',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'How to Use the Debt Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To get an accurate payment plan, follow these structured steps within the tool:',
    },
    {
      type: 'list',
      items: [
        '<strong>Debt mapping:</strong> Enter the name, current outstanding balance, and minimum monthly payment for each loan or card.',
        '<strong>Budget adjustment:</strong> Define your "Extra Budget". It\'s the monthly amount you can save on top of minimum payments.',
        '<strong>Capital simulation:</strong> Use the capital injection option to see how unexpected income (like a bonus) shortens your timeline.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Amortization formula:</strong> Final Balance = Starting Balance + Monthly Interest - (Minimum Payment + Extra Budget)',
    },
    {
      type: 'title',
      text: 'Tips to Accelerate Your Financial Freedom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The calculator shows you an estimated date based on your current data, but that date is not set in stone:',
    },
    {
      type: 'list',
      items: [
        '<strong>Review your subscriptions:</strong> Often, that extra €50 you need is hidden in services you don\'t use.',
        '<strong>Freeze your cards:</strong> You can\'t get out of a hole if you keep digging. While on the plan, avoid taking on new debt.',
        '<strong>Emergency fund:</strong> Have at least €1,000 saved before starting. This prevents an unexpected expense from breaking your payment plan.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Remember:</strong> Financial freedom is 20% knowledge and 80% behavior. The day you see "0" on your final balance will be the day you regain complete control of your time and money.',
    },
    {
      type: 'title',
      text: 'Conclusion and Next Steps',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>debt snowball method calculator</strong> is a fundamental planning tool. The real work happens in your daily life, in the decisions you make at every purchase. We recommend downloading your plan in CSV format and posting it somewhere visible to keep focused on your ultimate goal: being debt-free.',
    },
  ],
  ui: {
    labelTitle: 'Total Freedom',
    labelDescription: 'Enter financial freedom mode. Use the psychologically most effective method to eliminate your debts.',
    labelExtraBudget: 'EXTRA MONTHLY BUDGET',
    labelExtraBudgetHelp: 'Additional money on top of minimum payments.',
    labelSnowballMethod: 'SNOWBALL',
    labelAvalancheMethod: 'AVALANCHE',
    labelAddNewDebt: 'ADD NEW DEBT',
    labelDebtName: 'Name',
    labelDebtNamePlaceholder: 'Ex: Visa',
    labelDebtBalance: 'HOW MUCH YOU OWE',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'MINIMUM PAYMENT',
    labelInterestRate: 'INTEREST RATE',
    labelInterestHelp: 'ANNUAL',
    labelAddButton: 'ADD TO PLAN',
    labelClearData: 'Clear configuration',
    labelClearDataConfirm: 'Clear plan?',
    labelDeleteDebt: 'Delete',
    labelDebtInventory: 'Debt Inventory',
    labelFreedomDate: 'FINANCIAL FREEDOM DATE',
    labelActiveMethod: 'METHOD',
    labelMonthsRemaining: 'MONTHS REMAINING',
    labelTotalInterest: 'TOTAL INTEREST',
    labelTotalPaid: 'FINAL TOTAL PAYMENT',
    labelInterestSaved: 'INTEREST SAVED',
    labelYourStrategy: 'Your Step-by-Step Strategy',
    labelStrategyHelp: 'Each step shows your total payment when it\'s its turn',
    labelPriority: 'MAXIMUM PRIORITY',
    labelStep: 'STEP',
    labelAfterPaying: 'AFTER PAYING PREVIOUS',
    labelMonthlyPayment: 'Monthly payment',
    labelDetailedAmortization: 'Detailed Amortization',
    labelExportCSV: 'Export .CSV',
    labelDate: 'Date',
    labelStartingBalance: 'Starting Balance',
    labelInterest: 'Interest',
    labelAmortization: 'Amortized',
    labelTotalMonth: 'Total Month',
    labelRemaining: 'Remaining',
    labelFree: 'FREE',
    labelDebtInfinite: 'INFINITE DEBT',
    labelInvalidInput: 'Indicate total balance and minimum payment',
    labelEmptyStateTitle: 'Start your plan',
    labelEmptyStateDescription: 'Your debts won\'t last forever. Add your debts to visualize your path to financial freedom.',
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
  },
};
