import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolving-card-calculator';
const title = 'Revolving Card and Usury Simulator: Calculate Payoff and Legality';
const description =
  'Simulate how revolving credit cards compound interest, calculate payoff timelines, and compare interest rates against usury thresholds in Spain, UK, US, and custom markets.';

const faqData = [
  {
    question: 'What is a revolving credit card?',
    answer: 'A revolving credit card is a type of credit where you can borrow up to a certain credit limit, make purchases, and pay back a portion of the balance monthly. The remaining balance rolls over (revolves) to the next month, incurring high compound interest.',
  },
  {
    question: 'How does the revolving effect make debt endless?',
    answer: 'Because monthly payments are often set as a very low percentage of the outstanding balance (e.g., 2% or 3%), most of the payment goes toward paying off the monthly interest rather than the principal. This leads to extremely slow amortization, meaning the debt can take decades to clear.',
  },
  {
    question: 'What is considered usury for revolving cards?',
    answer: 'In Spain, the Supreme Court rules that a revolving card rate is usurious if its APR (TAE) is 6 percentage points or more above the average revolving credit rate published by the Banco de España at the time of contract. In other countries, usury thresholds vary or are regulated by state caps.',
  },
  {
    question: 'Can I claim refund for a revolving card with usurious interest?',
    answer: 'Yes, if a court declares the revolving contract null due to usury, the lender is typically required to return all amount paid in excess of the original principal borrowed. Check local legal guidelines or consult a consumer rights lawyer.',
  },
];

const howToData = [
  {
    name: 'Select your country or regulatory market',
    text: 'Choose Spain, United States, United Kingdom, or Custom to apply specific usury threshold checks.',
  },
  {
    name: 'Input your card parameters',
    text: 'Enter your outstanding balance, credit limit, and APR (TAE).',
  },
  {
    name: 'Define your payment strategy',
    text: 'Select between a fixed monthly payment or a percentage of the outstanding balance with an absolute minimum fee.',
  },
  {
    name: 'Analyze your payoff timeline and legality',
    text: 'Examine the simulated monthly amortization table, look at the visual payoff timeline, and read the usury compliance status.',
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

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
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
      text: 'Revolving Credit Cards: The Anatomy of Compound Interest Debt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>revolving credit card</strong> is one of the most common yet financially dangerous consumer debt vehicles in existence. Unlike a standard installment loan where you pay a fixed amount to extinguish the debt over a fixed timeframe, revolving lines of credit allow you to continuously borrow up to a predefined limit. While this offers high flexibility, it introduces a severe financial trap when users opt to pay only the minimum monthly amount requested by the bank.',
    },
    {
      type: 'paragraph',
      html: 'When a credit card statement balance is carried over to the next billing cycle, the interest rate is applied not to the original purchase, but to the remaining unpaid balance. Over time, interest charges themselves are capitalized, generating <strong>interest on top of interest</strong>. This phenomenon, known as compound interest, works in reverse for consumers, multiplying their liabilities instead of their assets.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Revolving Line of Credit',
          definition: 'An open-ended credit facility that allows borrowers to draw down, repay, and redraw funds up to a set limit as long as payments are kept current.',
        },
        {
          term: 'Negative Amortization',
          definition: 'A situation where the monthly payment is smaller than the interest accrued during the same period, causing the total outstanding debt to grow rather than decrease.',
        },
        {
          term: 'TAE (Tasa Anual Equivalente)',
          definition: 'The Spanish equivalent of APR, representing the total cost of credit including interest, fees, commissions, and annual charges expressed as an annual percentage.',
        },
        {
          term: 'Usury / Predatory Lending',
          definition: 'The practice of lending money at unreasonably high rates of interest, often exceeding legal caps set by regional regulators or court precedents.',
        },
      ],
    },
    {
      type: 'list',
      items: [
        '<strong>The minimum payment trap:</strong> Banks typically require a minimum payment of 2% to 5% of the total balance. If your balance is $5,000 and the APR is 25%, the first month interest alone is over $100. A minimum payment of $120 means only $20 goes to reducing the principal.',
        '<strong>Continuous capitalization:</strong> Unpaid interest gets added to the principal balance at the end of every statement cycle. The next month, interest is calculated on this new, larger sum.',
        '<strong>Unregulated rates:</strong> In many international jurisdictions, credit card interest rates are exempted from state usury caps, leading to APRs that exceed 30% or 40% for subprime borrowers.',
      ],
    },
    {
      type: 'title',
      text: 'The Revolving Effect: Why Debt Feels Never-Ending',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To visualize the revolving card effect, consider how credit card debt amortizes. Because the minimum payment is set as a percentage of the outstanding balance, the absolute amount you pay drops every month as the balance gets smaller. While this might seem convenient, it slows down the payoff speed dramatically. In fact, if you only pay the minimum percentage, the payoff curve looks like an asymptotic line that never quite reaches zero.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '22.4%',
          label: 'Average US Credit Card APR',
        },
        {
          value: '24.0%',
          label: 'Spanish Supreme Court Usury Threshold',
        },
        {
          value: '30+ Years',
          label: 'Payoff Time with Minimum Payments',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Breaking the Revolving Loop',
      html: '<p>The most effective strategy to escape revolving debt is to switch from a percentage-based minimum payment to a <strong>fixed monthly payment</strong> that is significantly higher than the minimum interest charge. For example, paying a flat $150/month instead of a shifting 2.5% minimum can reduce your payoff time from 28 years to under 4 years, saving thousands in interest charges.</p>',
    },
    {
      type: 'card',
      title: 'Case Study: The Math of a $3,000 Card Balance',
      html: '<p>Let us analyze what happens to a $3,000 card balance with a 24% APR if you pay a minimum of 2.5% of the balance (minimum $30):</p><ul><li><strong>Initial Interest Charge:</strong> $60 in the first month.</li><li><strong>Total Interest Paid:</strong> Over $4,200 by the time the card is paid off.</li><li><strong>Total Time:</strong> 184 months (more than 15 years) of continuous monthly bills.</li><li><strong>Total Paid:</strong> $7,200 to clear a $3,000 purchase.</li></ul>',
    },
    {
      type: 'title',
      text: 'Usury Regulations and Interest Caps: Spain, US, UK, and Beyond',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lending limits vary extensively by country. Understanding your regional rights is crucial to determining if you have been subjected to predatory lending or usurious conditions. Below is a comparative overview of how different jurisdictions regulate credit card APRs.',
    },
    {
      type: 'table',
      headers: ['Country/Market', 'Regulatory Body', 'Average Credit Card Rate', 'Usury Threshold Rule'],
      rows: [
        ['Spain', 'Banco de España', '18.0% - 19.5%', 'Usurious if APR exceeds the average rate by > 6 percentage points.'],
        ['United States', 'CFPB / State Regulators', '21.0% - 22.5%', 'No federal cap. State caps apply, but national banks export deregulation rules.'],
        ['United Kingdom', 'FCA (Financial Conduct Authority)', '21.5% - 23.0%', 'No hard cap on credit card APRs, but subject to strict affordability tests.'],
        ['General Global', 'Central Banks', 'Varies by currency', 'Generally unregulated for credit cards, leaving users exposed to high rates.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Spanish Usury Criterium',
          description: 'Established by the Supreme Court (Sentencia 258/2023).',
          points: [
            'Based on the official Banco de España statistical average table.',
            'A contract is null if interest is 6% above the average revolving rate.',
            'If null, the borrower only pays back the net principal borrowed.',
            'High level of consumer protection and legal recourse.',
          ],
        },
        {
          title: 'US/UK Deregulated Markets',
          description: 'Regulated primarily by disclosures and competition.',
          points: [
            'Very high rates permitted (often 29.99% or higher).',
            'No absolute legal cap based on market averages.',
            'Focuses on transparent disclosure of terms (Schumer Box).',
            'Relies on refinancing or consumer bankruptcy for relief.',
          ],
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Is Your Credit Card Potentially Usurious?',
      html: '<p>If your card APR (TAE) is <strong>24% or higher</strong> in Spain, there is a very high probability that the contract is null due to usury. In such cases, you can initiate a legal claim against the financial institution to demand a refund of all commissions, interest, and insurance fees paid throughout the life of the card.</p>',
    },
    {
      type: 'title',
      text: 'Pros and Cons of Revolving Credit Options',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'While revolving credit is generally expensive, it can serve a purpose if managed with discipline. Understanding its pros and cons allows consumers to make better financing decisions.',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'High liquidity and instant access to emergency funds without applying for separate loans.',
          con: 'Extremely high interest rates compared to personal loans or mortgages.',
        },
        {
          pro: 'Helps build credit score if statements are paid in full every single month.',
          con: 'Encourages overspending due to low friction of transaction and small minimum payments.',
        },
        {
          pro: 'Rewards programs, cash back, and purchase protection benefits.',
          con: 'Risk of getting stuck in a cycle of debt that consumes monthly disposable income.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Key Takeaways for Managing Card Debt',
      items: [
        'Always check the APR/TAE of any card before signing the agreement.',
        'Never pay only the minimum percentage. Set a fixed, aggressive monthly repayment.',
        'If your card interest rate is abnormally high, check if it violates usury guidelines or seek legal advice to claim a refund.',
        'Consider consolidating credit card debt into a lower-interest personal loan.',
      ],
    },
    {
      type: 'message',
      title: 'Important Financial Notice',
      html: '<p>This simulator is for educational and informational purposes only. It does not constitute formal legal or financial advice. If you suspect your credit agreement contains abusive clauses or usurious rates, we recommend consulting a legal professional specializing in consumer protection laws in your jurisdiction.</p>',
    },
  ],
  ui: {
    title: 'Revolving Card & Usury Calculator',
    balanceLabel: 'Outstanding Balance',
    creditLimitLabel: 'Credit Limit',
    aprLabel: 'Interest Rate (APR / TAE)',
    paymentTypeLabel: 'Payment Method',
    paymentTypeFixed: 'Fixed Monthly Payment',
    paymentTypePercentage: 'Percentage of Balance',
    paymentValueLabel: 'Payment Value (Amount or %)',
    minPaymentValueLabel: 'Minimum Monthly Payment',
    currencyLabel: 'Currency',
    marketLabel: 'Country / Regulatory Market',
    marketES: 'Spain (Banco de España + 6% Rule)',
    marketUS: 'United States (CFPB Reference)',
    marketUK: 'United Kingdom (FCA)',
    marketEU: 'European Union (ECB Reference)',
    marketJP: 'Japan (FSA / Money Lending Act)',
    marketKR: 'South Korea (FSC / Interest Limitation Act)',
    marketCN: "China (People's Bank of China)",
    marketBR: 'Brazil (Banco Central + Law 14.905/2024)',
    marketMX: 'Mexico (Banco de México)',
    marketPL: 'Poland (KNF / Civil Code)',
    marketID: 'Indonesia (OJK)',
    marketTR: 'Turkey (BRSA / BDDK)',
    marketRU: 'Russia (Bank of Russia / FZ-353)',
    marketSE: 'Sweden (Finansinspektionen)',
    marketAU: 'Australia (ASIC / NCCP)',
    marketCA: 'Canada (FCAC / Criminal Code)',
    marketCustom: 'Custom Usury Limit',
    customThresholdLabel: 'Custom Usury Limit (APR %)',

    resultsTitle: 'Payoff Simulation Results',
    totalInterestLabel: 'Total Interest Paid',
    totalPaidLabel: 'Total Repayment',
    monthsToPayLabel: 'Time to Pay Off',
    infiniteDebtWarning: 'Debt is infinite! Payments are too low to cover monthly interest. You will never pay off this balance.',
    payoffYearsLabel: 'Payoff Timeline',

    usuryTitle: 'Usury & Compliance Analysis',
    usurySafeStatus: 'Legally Standard (Low Risk)',
    usuryWarningStatus: 'High Rate Warning (Medium Risk)',
    usuryUsuriousStatus: 'Potentially Usurious (High Risk)',
    usuryReferenceLabel: 'Market Average APR',
    usuryThresholdLabel: 'Usury Warning Threshold',

    tableTitle: 'Monthly Amortization Schedule',
    tableHeaderMonth: 'Month',
    tableHeaderInitial: 'Starting Balance',
    tableHeaderInterest: 'Interest Charged',
    tableHeaderPrincipal: 'Principal Repaid',
    tableHeaderPayment: 'Payment Made',
    tableHeaderFinal: 'Ending Balance',

    copyTooltip: 'Copy Report to Clipboard',
    copiedLabel: 'Report Copied!',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
