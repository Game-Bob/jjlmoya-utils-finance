import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'percentage-calculator';
const title = 'Percentage Calculator: 4 in 1 for Discounts, Tax and Markups';
const description =
  'Calculate percentages online for free. 4 tools in 1 to find X% of Y, percentage difference, add or subtract VAT, discounts and tip calculations automatically.';

const faqData = [
  {
    question: 'How does the calculator work?',
    answer:
      'Simply type the values in the fields of the use case that matches your problem and our calculator processes the formula without needing to press a calculate button.',
  },
  {
    question: 'Is it valid for calculating VAT or taxes?',
    answer:
      'Yes, Case 4 (Add or subtract percentage) is designed precisely for cases like applying a 21% VAT to a base price or calculating negative income tax.',
  },
  {
    question: 'Does it handle decimals and negative numbers?',
    answer:
      'Of course. You can enter decimal numbers (using a period) and it will also work with negative values if you need to analyze accounting balances in losses.',
  },
  {
    question: 'Can I copy the results?',
    answer:
      'Yes, each case has a button in the result box that instantly copies the number to your device\'s clipboard so you can paste it in another app or document.',
  },
];

const howToData = [
  {
    name: 'Identify your math problem',
    text: 'Read the titles of the 4 cases and choose the one that matches what you want to know (Ex. What is 20% of 50? → Case 1).',
  },
  {
    name: 'Enter the numbers',
    text: 'Fill in the X and Y fields. Do not worry about the order, the text of each case guides you visually.',
  },
  {
    name: 'Copy the instant result',
    text: 'The number will appear in real time below as you type. Click the copy icon if you want to take it elsewhere.',
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

const howToSchema: WithContext<HowToThing> = {
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources & References',
  bibliography: [
    {
      name: 'Percentage Calculation: Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Percentage',
    },
    {
      name: 'Basic Math Concepts: Khan Academy',
      url: 'https://www.khanacademy.org/math/pre-algebra',
    },
    {
      name: 'IRS: Tax Guide and Calculation Methods',
      url: 'https://www.irs.gov/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The 4 Essential Percentage Formulas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Percentages appear in almost everything: shopping discounts, taxes, price changes, and data analysis. Learn the 4 essential formulas you need.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cases 1 and 2: Base Relationships',
          description: 'Finding a part of a whole, or knowing what proportion a quantity is.',
          points: [
            'X% of Y: apply a percentage to a quantity',
            'X is what % of Y: find the relative percentage',
            'Used in: discounts, tips, analysis',
            'Simple rule of three formulas',
          ],
        },
        {
          title: 'Cases 3 and 4: Changes and Adjustments',
          description: 'Measuring changes between values or adjusting a value by a percentage.',
          highlight: true,
          points: [
            'Percentage difference: compare initial and final value',
            'Add/subtract %: apply VAT, discounts, taxes',
            'Used in: financial reports, budgets',
            'Critical for accounting and statistics',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Master these formulas and you will solve 95% of percentage problems in your daily life: from knowing if a discount is good, to calculating your net salary with taxes.',
    },
  ],
  ui: {
    labelTitle: 'Percentage Calculator',
    labelCase1Title: 'Case 1',
    labelCase1Question: 'What is X% of Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formula: (X / 100) × Y',
    labelCase2Title: 'Case 2',
    labelCase2Question: 'What percentage is X of Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formula: (X / Y) × 100',
    labelCase3Title: 'Case 3',
    labelCase3Question: 'Percentage difference between two values',
    labelCase3Placeholder1: 'Value 1',
    labelCase3Placeholder2: 'Value 2',
    labelCase3Formula: 'Formula: ((Value 2 - Value 1) / |Value 1|) × 100',
    labelCase4Title: 'Case 4',
    labelCase4Question: 'Add or subtract a percentage to a value',
    labelCase4Placeholder1: 'Value',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formula: Value ± (Value × (% / 100))',
    labelCase4AddLabel: 'Add (Value + %)',
    labelCase4SubtractLabel: 'Subtract (Value - %)',
    labelResult: 'Result',
    labelDifference: 'Difference',
    labelCopyTooltip: 'Copy result',
    labelFormula: 'Formula',
    percentSymbol: '%',
  },
};
