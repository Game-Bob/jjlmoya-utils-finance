import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Total Savings',
  labelExpenses: 'Current Expenses',
  labelMonthly: 'Monthly',
  labelYearly: 'Yearly',
  labelTimeRemaining: 'Your Survival Runway',
  labelYears: 'Years',
  labelMonths: 'Months',
  labelDays: 'Days',
  labelStatus: 'Financial Security Status',
  labelRedZone: 'Red Zone: High Risk',
  labelYellowZone: 'Yellow Zone: Stable',
  labelGreenZone: 'Green Zone: Financial Freedom',
  labelBurnRateDaily: 'Daily Burn Rate',
  labelBurnRateMonthly: 'Monthly Burn Rate',
  labelWhatIf: 'The 10% Power Move',
  labelWhatIfDescription: 'By reducing your expenses by just 10%, you could extend your runway significantly.',
  labelGainTime: 'Extra Survival Time',
  labelCopyResult: 'Copy Summary',
  labelCopied: 'Copied!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'financial-freedom-calculator',
  title: 'Financial Freedom & Survival Runway Calculator',
  description: 'Calculate exactly how long your savings will last. Our survival runway tool helps you visualize your financial independence and plan your exit strategy or emergency fund.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'What is a Financial Freedom Runway?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>survival runway</strong> is the amount of time you can live without any new income. It is the ultimate metric of financial freedom. Unlike a simple bank balance, the runway tells you how much "human time" you have purchased with your savings. Knowing your runway allows you to make bold career moves, start businesses, or simply sleep better at night knowing your safety net.',
    },
    {
      type: 'title',
      text: 'How to Calculate Your Survival Time',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To find your runway, we divide your total liquid savings by your periodic expenses. Our calculator goes further by breaking this down into years, months, and days, giving you a tangible sense of your financial weight. We also calculate your <strong>Burn Rate</strong>—the precise amount of money that leaves your pocket every single day.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Red Zone',
          description: '0-6 months of runway.',
          points: [
            'High financial fragility',
            'Focus on saving',
            'Avoid new debt',
            'Emergency mode',
          ],
        },
        {
          title: 'Yellow Zone',
          description: '6-24 months of runway.',
          points: [
            'Peace of mind',
            'Weather most storms',
            'Plan next moves',
            'Stable safety net',
          ],
        },
        {
          title: 'Green Zone',
          description: '24+ months of runway.',
          highlight: true,
          points: [
            'Financial independence',
            'Total leverage',
            'Negotiate your life',
            'The Freedom Zone',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Extending Your Runway: The 10% Rule',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Small changes in spending have an exponential impact on your runway. A 10% reduction in expenses doesn\'t just save 10% of your money; it reduces your daily burn rate, making every dollar you already have last longer. This double-win effect is the secret to reaching financial independence years ahead of schedule.',
    },
  ],
  faq: [
    {
      question: 'What is a good survival runway?',
      answer: 'Financial experts generally recommend a minimum of 3 to 6 months of expenses in an emergency fund. However, for true financial independence, a runway of 2 years or more is considered the "Freedom Zone".',
    },
    {
      question: 'Does this calculator include inflation?',
      answer: 'This tool is designed for immediate "physics" calculation of current liquid assets against current spending. For multi-decade retirement planning, you should also consult a compound interest calculator.',
    },
    {
      question: 'What is "Burn Rate" in personal finance?',
      answer: 'Burn rate is the rate at which you spend your savings to cover life expenses. Knowing your daily burn rate helps you internalize the cost of your lifestyle choices.',
    },
  ],
  bibliography: [
    {
      name: 'FIRE Movement Principles',
      url: 'https://en.wikipedia.org/wiki/FIRE_movement',
    },
    {
      name: 'The Emergency Fund Guide',
      url: 'https://www.investopedia.com/terms/e/emergency_fund.asp',
    },
  ],
  howTo: [
    {
      name: 'Enter your total liquid savings',
      text: 'Input the total amount of cash or easily accessible assets you have available.',
    },
    {
      name: 'Set your recurring expenses',
      text: 'Enter how much you spend per month or per year to cover your lifestyle.',
    },
    {
      name: 'Analyze your security zone',
      text: 'Check if you are in the Red, Yellow, or Green zone and see your daily burn rate.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Financial Freedom Calculator',
      description: 'A tool to calculate how long your savings will last based on your burn rate.',
    },
  ],
};
