import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Initial Investment',
  labelFinalValue: 'Final Value / Current Balance',
  labelTimeSelection: 'Investment Duration',
  labelYears: 'Years',
  labelMonths: 'Months',
  labelDays: 'Days',
  labelROI: 'Return on Investment (ROI)',
  labelCAGR: 'Annualized Growth (CAGR)',
  labelNetProfit: 'Net Profit',
  labelLinearGrowth: 'Linear Growth (Estimated)',
  labelExponentialGrowth: 'Compound Growth (CAGR)',
  labelPositiveResult: 'Profitable Investment',
  labelNegativeResult: 'Loss Position',
  labelCopyResult: 'Copy Results',
  labelCopied: 'Copied!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'profitability-calculator-roi-cagr',
  title: 'Investment Profitability Calculator: ROI & CAGR',
  description: 'Analyze your investment performance with precision. Calculate total Return on Investment (ROI) and Compound Annual Growth Rate (CAGR) to understand your true annualized gains.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs. CAGR: Which Metric is Better?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When evaluating an investment, <strong>ROI (Return on Investment)</strong> tells you the total percentage gain or loss from start to finish. However, it ignores the element of time. <strong>CAGR (Compound Annual Growth Rate)</strong> is superior for long-term analysis because it "annualizes" your returns, allowing you to compare a 5-year stock investment against a 1-year crypto trade or a savings account on equal terms.',
    },
    {
      type: 'title',
      text: 'How to Use the Profitability Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To get accurate results, enter your initial capital and the current value (or final sale price) of your asset. Select the duration of the investment in days, months, or years. Our tool automatically calculates the absolute profit, the total ROI, and the geometric mean of your annual growth (CAGR).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Total ROI',
          description: 'Measure of absolute return.',
          points: [
            'Ignores duration',
            'Simple calculation',
            'Best for quick trades',
            'Shows total gain/loss',
          ],
        },
        {
          title: 'Annualized CAGR',
          description: 'Measure of annual performance.',
          highlight: true,
          points: [
            'Includes time factor',
            'Standardizes results',
            'Allows comparisons',
            'Shows geometric growth',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'The Power of Compound Growth Visualization',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Our interactive chart compares linear growth (where you assume the gain is spread evenly) against exponential growth (CAGR). This visualization is crucial for understanding how compound interest works over time. Real investments rarely grow in a straight line; understanding the CAGR curve helps you set realistic expectations for future wealth building.',
    },
  ],
  faq: [
    {
      question: 'What is a good CAGR?',
      answer: 'A "good" CAGR depends on the asset class. Historically, the S&P 500 has returned around 7-10% annually. High-risk investments might target 15-20%+, while savings accounts usually offer much less.',
    },
    {
      question: 'Why is my CAGR different from my total ROI?',
      answer: 'ROI is the total return regardless of time. CAGR is the annual rate required to reach that total return. If your investment lasted more than a year, the CAGR will usually be a smaller number than the ROI.',
    },
    {
      question: 'Can CAGR be negative?',
      answer: 'Yes. If your final value is less than your initial investment, the CAGR will be negative, representing the annualized rate of loss.',
    },
  ],
  bibliography: [
    {
      name: 'Investopedia: ROI Definition',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
    {
      name: 'Investopedia: CAGR Explained',
      url: 'https://www.investopedia.com/terms/c/cagr.asp',
    },
  ],
  howTo: [
    {
      name: 'Enter your initial capital',
      text: 'Input the amount of money you originally invested.',
    },
    {
      name: 'Enter the final or current value',
      text: 'Input the current market value of your investment or the price at which you sold it.',
    },
    {
      name: 'Set the time duration',
      text: 'Specify how long you held the investment to calculate the annualized return (CAGR).',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Investment Profitability Calculator',
      description: 'Calculates ROI and CAGR for any financial investment.',
    },
  ],
};
