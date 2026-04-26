import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'rent-increase-calculator';
const title = 'Spain Rent Increase Calculator IPC 2026 with 3% Legal Cap';
const description = 'Calculate your rent increase based on IPC or the legal 3% limit from Spain\'s Housing Law. Free tool for Spanish tenants and landlords.';

const faqData = [
  {
    question: 'What is the maximum rent increase allowed in 2024 and 2025?',
    answer: 'According to Spain\'s Law 12/2023 on the Right to Housing, the maximum annual rent increase for primary residences in 2024 and 2025 is limited to 3% by law. This limit applies even if the IPC (Consumer Price Index) is higher.',
  },
  {
    question: 'Is it mandatory to raise the rent every year based on IPC?',
    answer: 'No, it is not mandatory by law. For the rent to increase, the lease must include an explicit clause mentioning annual adjustments. If no such clause exists, the initial agreed price remains in effect for the duration of the contract.',
  },
  {
    question: 'How much notice must a landlord give for a rent increase?',
    answer: 'The landlord must notify the tenant in writing at least one month (30 days) before the new rent takes effect. If notice is given later, the increase only starts counting from the following month after notification.',
  },
  {
    question: 'What happens if the IPC exceeds the 3% legal limit?',
    answer: 'Even if the IPC published by Spain\'s INE (National Statistics Institute) is 5% or 6%, a landlord cannot legally demand more than a 3% increase for primary residences in 2026. Any attempt to charge more is legally challengeable.',
  },
  {
    question: 'What types of contracts are not subject to the 3% limit?',
    answer: 'The limit typically does not apply to commercial spaces, industrial warehouses, offices, or independent garage spaces. These are governed by what the parties freely agree upon in the contract.',
  },
];

const howToData = [
  {
    name: 'Enter your current rent',
    text: 'Type the monthly amount you currently pay as shown on your rent receipt.',
  },
  {
    name: 'Choose your calculation method',
    text: 'Select the 3% Legal Cap (recommended for primary residences) or enter a custom percentage.',
  },
  {
    name: 'View the results',
    text: 'Get the estimated new rent, monthly increase, and annual extra cost at a glance.',
  },
  {
    name: 'Copy the summary',
    text: 'Generate a quick report to send to your landlord or save for your records.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Understanding the 3% Legal Cap on Rent Increases',
  },
  {
    type: 'paragraph',
    html: 'Spain\'s Law 12/2023 on the Right to Housing establishes a <strong>maximum 3% annual increase limit</strong> for primary residence rentals in 2024 and 2025. This tenant protection measure takes precedence over the Consumer Price Index (IPC) when it exceeds 3%.',
  },
  {
    type: 'title',
    text: 'When to Use Manual vs Legal Cap Calculation',
  },
  {
    type: 'paragraph',
    html: 'Use this calculator in two ways: apply the <strong>3% legal cap</strong> (recommended for primary residences) or enter a <strong>custom percentage</strong> if calculating increases for commercial properties or periods before 2024.',
  },
  {
    type: 'title',
    text: 'What Makes a Rent Increase Legal',
  },
  {
    type: 'paragraph',
    html: '<strong>For a rent increase to be valid:</strong> The lease must include an annual adjustment clause. The landlord must give written notice at least 30 days in advance. The increase cannot exceed 3% for primary residences (2026). Tenants can challenge non-compliance with these requirements.',
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
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Rent Increase Calculator',
    labelDescription: 'Adjust your rent based on IPC or apply the legal 3% cap safely and quickly.',
    labelCurrentRent: 'Current Rent',
    labelCurrentRentPlaceholder: 'E.g. 800',
    labelIncrementType: 'Calculation Method',
    labelLegalLimit: 'Housing Law Cap (3%)',
    labelManualIncrement: 'Manual Percentage (%)',
    labelManualPercentagePlaceholder: 'E.g. 2.5',
    labelNewRentEstimate: 'Estimated New Rent',
    labelMonthlyIncrease: 'Monthly Increase',
    labelYearlyExtra: 'Annual Extra Cost',
    labelLegalBadge: 'Limited to 3% per Law 12/2023',
    labelCopyButton: 'Copy for landlord',
    labelCopySuccess: 'Copied!',
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
