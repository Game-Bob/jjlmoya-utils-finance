import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'mortgage-calculator';
const title = 'Mortgage Calculator: Full Amortization Table and Payoff Strategy';
const description =
  'Calculate your monthly mortgage payment, discover total interest costs, and visualize your complete French amortization schedule instantly.';

const faqData = [
  {
    question: 'What is the French amortization system?',
    answer:
      'It is the most commonly used system in Europe. Your monthly payment stays the same, but at the beginning you pay almost all interest with very little principal. At the end, it reverses. This is why early mortgage prepayment is most valuable in the first years.',
  },
  {
    question: 'Fixed rate or variable rate in 2026?',
    answer:
      'Fixed rate: you pay more now but sleep soundly for 30 years. Variable rate: might be cheaper today, but if interest rates spike to 4-5%, your payment could skyrocket and strangle your finances. It depends on your risk tolerance.',
  },
  {
    question: 'How much do I save if I prepay $10,000?',
    answer:
      'It depends on timing. If you prepay in year 1 of a $200,000 mortgage at 3%, you could save over $15,000 in interest. If you do it in year 20, you barely save $2,000. Timing is critical.',
  },
  {
    question: 'What percentage of my income should go to mortgage?',
    answer:
      'Financial advisors recommend not exceeding 28-31% of gross monthly income (housing ratio). Some allow up to 43% debt-to-income including all obligations. Exceeding these thresholds increases default risk during emergencies.',
  },
];

const howToData = [
  {
    name: 'Enter the loan amount',
    text: 'Type the total amount you need to borrow from the lender (minus your down payment).',
  },
  {
    name: 'Adjust the interest rate',
    text: 'Input the APR (Annual Percentage Rate) offered by the lender. You can compare fixed or variable options.',
  },
  {
    name: 'Choose your repayment period',
    text: 'Define how many years you want to pay off the loan. More years mean lower monthly payment but higher total interest.',
  },
  {
    name: 'Review the amortization schedule',
    text: 'Examine month-by-month how your debt decreases and what portion of each payment goes to interest vs principal.',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources & References',
  bibliography: [
    {
      name: 'Federal Reserve: Mortgage Basics and Types',
      url: 'https://www.federalreserve.gov/pubs/Mortgage_Basics/',
    },
    {
      name: 'HUD: Understanding Mortgages and Financing',
      url: 'https://www.hud.gov/',
    },
    {
      name: 'Consumer Financial Protection Bureau: Buying a Home Guide',
      url: 'https://www.consumerfinance.gov/',
    },
    {
      name: 'Investopedia: Mortgage Definition and Amortization Schedules',
      url: 'https://www.investopedia.com/terms/m/mortgage.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The "Trap" of Front-Loaded Interest',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most mortgages use a <strong>French amortization system</strong> (also called a standard amortization). The key feature is that your monthly payment stays constant, but the composition changes dramatically over time.',
    },
    {
      type: 'tip',
      title: 'Payment Composition Over Time',
      html: '<p><strong>Early years:</strong> Nearly all your payment goes to INTEREST, with minimal principal reduction.</p><p><strong>Later years:</strong> Almost all goes to PRINCIPAL, with little interest.</p>',
    },
    {
      type: 'paragraph',
      html: 'This is why making extra principal payments in the first years of your mortgage is far more effective than doing so later.',
    },
    {
      type: 'title',
      text: '2026 Interest Rate Environment',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'With interest rates fluctuating, choosing between <strong>Fixed Rate</strong> or <strong>Adjustable Rate</strong> is critical.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fixed Rate',
          description: 'You pay slightly more upfront, but your rate never changes for 30 years.',
          points: [
            'Predictable payment for entire loan term',
            'Protection from rate hikes',
            'Peace of mind in volatile markets',
            'Ideal for budget certainty',
          ],
        },
        {
          title: 'Adjustable Rate',
          description: 'Lower initial rate, but exposes you to future rate increases.',
          highlight: true,
          points: [
            'Lower initial monthly payment',
            'Risk of future rate increases',
            'Payment shock possible after adjustment period',
            'Only for high risk tolerance',
          ],
        },
      ],
    },
  ],
  ui: {
    labelTitle: 'Mortgage Calculator',
    labelLoanAmount: 'Loan Amount',
    labelInterestRate: 'Interest Rate (APR)',
    labelYears: 'Loan Term (Years)',
    labelMonthlyExtra: 'Add Extra Monthly Payment',
    labelMonthlyPayment: 'Monthly Payment',
    labelMonthCount: 'months',
    labelSavingsCard: 'Your Savings Potential',
    labelSavingsInterest: 'Interest',
    labelSavingsTime: 'Time',
    labelTimelineComparison: 'Temporal Comparison',
    labelTimelineOriginal: 'Original Duration',
    labelTimelineOptimized: 'Duration with Extra Payments',
    labelCostBreakdown: 'Total Cost Breakdown',
    labelBorrowed: 'Borrowed',
    labelTotalBorrowed: 'Total Borrowed',
    labelTotalInterest: 'Total Interest',
    labelAmortizationTable: 'Amortization Schedule',
    labelTableHeader: 'View full table',
    labelViewAll: 'View all',
    labelPaid: 'Mortgage Paid Off',
    labelTableMonth: 'Month',
    labelTableInterest: 'Interest',
    labelTablePrincipal: 'Principal',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Balance',
    labelMoreMonths: 'more months',
    labelMonth: 'Month',
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
    monthPlural: 'months',
    yearPlural: 'years',
  },
};
