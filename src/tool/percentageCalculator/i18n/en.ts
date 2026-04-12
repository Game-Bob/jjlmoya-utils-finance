import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
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
      text: '4-in-1 Percentage Calculator: Master Quick Calculations',
      level: 2,
    },
    {
      type: 'title',
      text: 'Why You Need a Multi-Purpose Percentage Calculator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Calculating percentages is one of the most common mathematical operations in our daily lives. From figuring out discounts during a sale, to calculating the right tip at a restaurant, determining profit margins in business, or understanding loan interest. Despite being everyday operations, it\'s not always easy to do them mentally or remember the exact formula.',
    },
    {
      type: 'paragraph',
      html: 'Our 4-in-1 percentage calculator bundles the most common scenarios you\'ll face. No more searching Google for "how to calculate 20 percent" or "percentage formula." You have all four essential operations in one place, interactive and with instant results.',
    },
    {
      type: 'title',
      text: 'Exploring the 4 Most Common Use Cases',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To make your life easier, we\'ve separated the tool into four clear visual blocks that solve real-world problems you encounter daily:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. What is X% of Y?',
      html: '<p><strong>The classic case.</strong> Perfect for calculating discounts or tips. If you want to know what 15% of $120 is, this is your tool. The underlying formula simply divides the percentage by 100 and multiplies it by the total value.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. What Percentage is X of Y?',
      html: '<p><strong>Ideal for proportions.</strong> If you scored 45 points on a 60-point exam, what\'s your percentage score? This function divides the part by the total and multiplies by 100, giving you the exact relative weight.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Percentage Increase or Decrease',
      html: '<p><strong>Perfect for finance and analytics.</strong> How much has your rent increased since last year? If you paid $800 before and $840 now, this function tells you it\'s a 5% increase. It measures growth or decline between two numbers.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Add or Subtract Percentage from a Value',
      html: '<p><strong>Super useful for sales tax.</strong> If you have a base price (e.g., $100) and need to add 8.5% sales tax, this calculator gives you the $108.50 final total instantly without intermediate steps. Similarly, it works for applying discounts directly (e.g., subtract 20%).</p>',
    },
    {
      type: 'title',
      text: 'Common Myths About Percentage Calculations',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'We often get stuck when we see large percentages or decimals, but there are some math "tricks" that can make your life easier. The most famous is <strong>percentage reversibility</strong>.',
    },
    {
      type: 'tip',
      title: 'The Reversibility Trick',
      html: '<p>Did you know that X% of Y equals Y% of X exactly? For example, if you\'re asked to calculate 18% of 50 in your head, it sounds complicated. But flip it around—50% of 18 is easy: it\'s 9! This works for absolutely any numbers and is an amazing lifesaver in daily calculations.</p>',
    },
    {
      type: 'title',
      text: 'Why We Fail at Calculating Growth',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'One of the most common mistakes happens in Case 3: percentage increase or decrease. Imagine a stock costs $100, drops 50%, and then rises 50% the next day. Your intuition says it\'s back to $100, but it\'s not.',
    },
    {
      type: 'paragraph',
      html: 'If it drops 50% from $100, the new value is $50. If it then rises 50% from that $50, the gain is half of $50 (which is $25). So the final price is $75. This classic example shows why percentage increases and decreases aren\'t symmetrical, and why dynamic calculators like this prevent serious financial mistakes.',
    },
    {
      type: 'title',
      text: 'Professional and Academic Use',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Our interface is distraction-free and designed to <strong>work fast</strong>. Pin it as a browser tab, quickly tab between fields, and use the copy button next to results to transfer exact figures to Excel or Google Sheets without typo risk.',
    },
    {
      type: 'list',
      items: [
        'E-commerce and retail stores: Quick calculation of retail prices by applying profit margins and sales tax.',
        'Human resources: Determining wage gaps, tax withholdings, and salary increases tied to inflation.',
        'Higher education: Teachers grading curves or STEM students analyzing experimental deviation.',
        'Digital marketing: Measuring CTR (Click Through Rate), ROAS (Return on Ad Spend), or eCommerce conversion rates.',
      ],
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
