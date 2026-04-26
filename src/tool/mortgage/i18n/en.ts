import { bibliography } from '../bibliography'
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
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Complete Mortgage Guide: How the Amortization System Works',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A mortgage is likely the largest debt you will ever take. Understanding how the amortization system works is crucial for making smart financial decisions that could save you tens of thousands of dollars.',
    },
    {
      type: 'title',
      text: 'The "Trap" of Front-Loaded Interest: Understanding Your Payment Breakdown',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In most countries, mortgages use the <strong>standard amortization system</strong>. Its characteristic is that your monthly payment remains the same (if fixed rate), but the composition changes dramatically over time.',
    },
    {
      type: 'tip',
      title: 'How Your Payment Evolves',
      html: '<p><strong>Early Years (Years 1-10):</strong> You pay almost entirely INTEREST and very little principal. On a $250,000 mortgage at 3%, your first payment could be 80% interest.</p><p><strong>Middle Years (Years 11-25):</strong> The proportion gradually balances.</p><p><strong>Final Years (Years 26-30):</strong> You pay almost entirely PRINCIPAL with very little interest.</p>',
    },
    {
      type: 'paragraph',
      html: 'This is why <strong>making extra mortgage payments</strong> (paying down principal early) is far more profitable in the first years. Paying an extra $10,000 in year 1 can save you over $15,000 in interest. The same extra payment in year 20 saves you barely $2,000.',
    },
    {
      type: 'title',
      text: 'How Much Should You Spend on Your Mortgage?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Financial experts recommend your mortgage <strong>should not exceed 28-35% of your gross monthly income</strong>. If you exceed this threshold, you significantly increase the risk of default when unexpected expenses arise (job loss, medical emergency, etc.).',
    },
    {
      type: 'title',
      text: '2026 Context: Fixed vs. Variable Rate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'With fluctuating interest rates, choosing between <strong>Fixed Rate</strong> or <strong>Variable Rate</strong> is a strategic decision that can cost thousands annually.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fixed Rate',
          description: 'You pay slightly more now, but sleep soundly knowing your payment will never change.',
          points: [
            'Predictable payment for 30 years',
            'Protection against rate increases',
            'Peace of mind in uncertain economy',
            'Ideal for tight budgets',
          ],
        },
        {
          title: 'Variable Rate',
          description: 'It may be cheaper today, but exposes your finances to volatility.',
          highlight: true,
          points: [
            'Lower initial payment',
            'Risk of rate increases (4-5% possible)',
            'Potentially severe budget impact',
            'Only for those who tolerate high risk',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Fixed vs. Variable: It Depends on Your Profile',
      html: '<p><strong>Choose Fixed Rate if:</strong> Your budget is tight, you seek certainty, you cannot tolerate payment surprises.</p><p><strong>Choose Variable Rate if:</strong> You have a financial cushion, believe rates will fall, your mortgage is small or short-term.</p>',
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
