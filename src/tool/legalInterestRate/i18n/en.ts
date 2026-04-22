import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'legal-interest-on-money-spain';
const title = 'Spain Legal Interest Rate 2026';
const description = 'Calculate the legal interest rate applicable in Spain for 2026. Automatic calculator with 3.25% rate according to the budget law. Includes delay interest and mora calculations.';

const faqData = [
  {
    question: 'What is the legal interest rate in Spain for 2026?',
    answer: 'The legal interest rate on money is fixed at 3.25% for the 2026 fiscal year in Spain, established by the State Budget Law.',
  },
  {
    question: 'How is the delay interest calculated?',
    answer: 'Delay interest is calculated by multiplying the outstanding capital by 3.25% and the number of days of delay, divided by 36,500. A base of 365 days is used.',
  },
  {
    question: 'What is the difference between legal interest and delay interest?',
    answer: 'Legal interest is the basic reference rate. Delay interest is typically 4.06% for tax authorities (with a surcharge). Commercial operations use 10.15%, the highest rate.',
  },
  {
    question: 'Does legal interest apply automatically?',
    answer: 'Yes, legal interest applies automatically when there is a payment delay and no other rate has been agreed. If a contract exists, its terms prevail within the limits of usury laws.',
  },
  {
    question: 'What is procedural interest?',
    answer: 'Procedural interest is 5.25% (legal rate plus 2 points) applied from the judgment date condemning payment, to discourage delays and unnecessary protraction of cases.',
  },
];

const howToData = [
  {
    name: 'Enter the outstanding capital',
    text: 'Write the amount for which you need to calculate interest. It can be a debt, unpaid invoice, or any outstanding amount.',
  },
  {
    name: 'Specify the days of delay',
    text: 'Indicate how many days the non-payment has lasted or will last. The calculation uses a base of 365 days according to Spanish regulations.',
  },
  {
    name: 'View the result',
    text: 'Automatically get the amount of interest generated and total to pay by applying the current 3.25% rate for 2026.',
  },
  {
    name: 'Check other rates',
    text: 'Observe other reference rates: tax delay interest (4.06%) and commercial operations (10.15%) for additional context.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Spain Legal Interest Rate 2026 - Calculator',
  },
  {
    type: 'paragraph',
    html: 'The <strong>legal interest rate in Spain for 2026</strong> is <strong>3.25%</strong>. It applies automatically when there is a payment delay and no other rate has been agreed. Use our calculator to determine the exact amount of interest based on days of delay.',
  },
  {
    type: 'title',
    text: 'Complementary Reference Rates',
  },
  {
    type: 'paragraph',
    html: 'In addition to the base legal interest rate (3.25%), there are other rates: <strong>tax delay interest 4.06%</strong> (Tax Authority), <strong>procedural interest 5.25%</strong> (judgments) and <strong>commercial operations interest 10.15%</strong> (B2B).',
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions': 'Legal Sources',
  ui: {
    labelTitle: 'Legal Interest Rate on Money',
    labelDescription: 'Calculate the exact amount of legal interest according to Spain\'s Budget Law 2026. Automatic calculator with 3.25% rate.',
    labelBadge: 'Spanish Official Gazette 2026',
    labelSubtitle: 'The legal interest rate remains fixed at 3.25% for 2026, established by the State Budget Law.',
    labelLegalInterest: 'Legal Interest',
    labelDelayInterest: 'Delay Interest',
    labelCommercialOperations: 'Commercial Operations',
    labelActive: 'Active 2026',
    labelTributary: 'Tax Authority',
    labelFirstHalf: 'First Semester 2026',
    labelQuickCalculator: 'Quick Interest Calculator (3.25%)',
    labelCapital: 'Outstanding Capital',
    labelDays: 'Days of Delay',
    labelInterestGenerated: 'Interest Generated',
    labelTotalToPay: 'Total to Pay',
    labelFormula: 'This calculator applies the standard simple interest formula:',
    labelBase: 'A base of 365 days is used for official calculations according to current Spanish regulations in 2026.',
    labelOfficialRegulation: 'Official Regulation',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'en-US',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
