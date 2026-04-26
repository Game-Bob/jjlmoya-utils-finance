import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'spanish-court-fees-calculator';
const title = 'Spanish Court Fees Calculator';
const description = 'Calculate exact judicial fees for Spanish companies under Law 10/2012. Automatic Form 696 calculator with exemptions and calculations.';

const faqData = [
  {
    question: 'Are individuals exempt from paying judicial fees in Spain?',
    answer: 'Yes, since 2016 individuals are completely exempt from paying judicial fees in Spain across all jurisdictional orders.',
  },
  {
    question: 'What is the maximum court fee amount?',
    answer: 'The variable fee is capped at 10,000 euros. Combined with the fixed fee, the total maximum varies depending on the type of procedure.',
  },
  {
    question: 'What is Form 696?',
    answer: 'It is the official Tax Authority form used for self-assessment of the fee for the exercise of jurisdictional authority in Spain.',
  },
  {
    question: 'Are there judicial fees in criminal proceedings?',
    answer: 'No, there are no judicial fees for criminal proceedings in Spain.',
  },
  {
    question: 'How is the variable fee calculated?',
    answer: 'The variable fee is 0.5% of the claim amount up to 1 million euros. Above that, it is 0.25%. The maximum is 10,000 euros.',
  },
];

const howToData = [
  {
    name: 'Select the taxpayer type',
    text: 'Indicate whether you are an individual (exempt) or a legal entity (company). Individuals do not pay fees.',
  },
  {
    name: 'Choose jurisdiction and procedure',
    text: 'Select the jurisdictional order (Civil, Administrative or Social) and the type of procedure.',
  },
  {
    name: 'Enter the claim amount',
    text: 'Write the total amount claimed in the lawsuit. For social order, this field does not apply.',
  },
  {
    name: 'View the breakdown',
    text: 'Get automatic calculation with fixed fee, variable fee and total for Form 696.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Spanish Court Fees Calculator: Complete Guide',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'The <strong>Spanish Court Fees Calculator</strong> is a technical tool designed to precisely determine the fiscal cost of jurisdictional authority in Spain. Since the reform of Law 10/2012, calculating these fees has become a critical task for the procedural planning of companies and legal professionals.',
  },
  {
    type: 'card',
    title: 'Key Aspects of Court Fees',
    html: '<ul><li>Mandatory only for <strong>legal entities</strong> (companies).</li><li>Subject to <strong>Form 696</strong> from the Tax Authority.</li><li>Composed of a <strong>fixed fee</strong> and a <strong>variable fee</strong>.</li><li>Variable fee cap set at <strong>€10,000</strong>.</li></ul>',
  },
  {
    type: 'card',
    html: '<p>This utility simulates tax self-assessment, breaking down amounts according to the jurisdictional order (Civil, Administrative, or Social) and the claim amount, allowing you to predict the financial impact before initiating litigation.</p>',
  },
  {
    type: 'title',
    text: 'Who Must Pay Court Fees in 2026?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Current law, following the historic <strong>Constitutional Court Ruling 140/2016</strong>, establishes a clear exemption framework that protects individual citizens\' access to justice.',
  },
  {
    type: 'list',
    items: [
      '<strong>Individuals:</strong> Enjoy absolute exemption in all jurisdictional orders.',
      '<strong>Legal Entities:</strong> Are the primary taxpayers liable for the fee.',
      '<strong>Special Entities:</strong> Public benefit organizations and government agencies are exempt.',
    ],
  },
  {
    type: 'title',
    text: 'Technical Fee Structure',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The mathematical calculation our tool performs divides into two mandatory components that are added to obtain the total for Form 696.',
  },
  {
    type: 'title',
    text: '1. Fixed Fee by Procedure',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Determined by the type of legal action filed. An ordinary civil judgment carries a fee of €300, while a cassation appeal to the Supreme Court reaches €1,200.',
  },
  {
    type: 'title',
    text: '2. Variable Fee by Claim Amount',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Applied to the taxable base of the lawsuit. For companies, tax rates are applied in scaled brackets.',
  },
  {
    type: 'table',
    headers: ['Claim Amount Range', 'Applicable Rate'],
    rows: [
      ['Up to €1,000,000', '<strong>0.50%</strong>'],
      ['Exceeding €1,000,000', '<strong>0.25%</strong>'],
      ['Variable Maximum Limit', '<strong>€10,000</strong>'],
    ],
  },
  {
    type: 'title',
    text: 'Fees in Specific Jurisdictional Orders',
    level: 2,
  },
  {
    type: 'title',
    text: 'Civil Jurisdiction',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The area with the highest volume of assessments. Covers monitoring, verbal, ordinary proceedings and executions. Our calculator automatically adjusts the fixed fee based on the complexity of the selected procedure.',
  },
  {
    type: 'title',
    text: 'Administrative Litigation Order',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Applies in disputes against the Administration. Amounts vary depending on whether it is an abbreviated procedure (€200) or an ordinary one (€350), plus the corresponding variable brackets.',
  },
  {
    type: 'tip',
    title: 'Legal Reference',
    html: '<p>Always consult Law 10/2012 for special cases of partial exemption or discounts for use of electronic means.</p>',
  },
  {
    type: 'title',
    text: 'Consequences of Non-Payment',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Filing a lawsuit by an obligated party without the corresponding payment receipt results in a correction request. Failure to meet this 10-day deadline results in definitive dismissal of the proceedings.',
  },
  {
    type: 'card',
    title: 'Advantages of Prior Simulation',
    html: '<ul><li>Absolute precision in quantifying procedural expenses.</li><li>Avoids delays from errors in Form 696 self-assessment.</li><li>Optimizes financial decision-making in legal strategy.</li></ul>',
  },
  {
    type: 'paragraph',
    html: 'Our <strong>Spanish Court Fees Calculator</strong> ensures that professionals and companies operate with data updated to 2026, meeting the technical rigor required by modern legal practice.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Spanish Court Fees Calculator',
    labelDescription: 'Calculate the exact Form 696 amount based on jurisdiction, procedure and claim amount. For Spanish companies and professionals.',
    labelLegalParameters: 'Legal Parameters',
    labelEntityType: 'Taxpayer Type',
    labelJurisdiction: 'Jurisdiction',
    labelProcedure: 'Procedure Type',
    labelClaimAmount: 'Claim Amount',
    labelEstimatedSettlement: 'Estimated Settlement',
    labelExemptSubject: 'Exempt Subject',
    labelFixedQuote: 'Fixed Fee (Procedural)',
    labelVariableQuote: 'Variable Fee (0.5% / 0.25%)',
    labelTaxableBase: 'Taxable Base',
    labelCopySettlement: 'Copy Settlement',
    labelEntityJuridica: 'Legal Entity (LLC, Corp)',
    labelEntityFisica: 'Individual (Exempt)',
    labelCivilOrder: 'Civil Order',
    labelAdministrativeOrder: 'Administrative',
    labelSocialOrder: 'Social Order',
    labelModel696: 'Form 696',
    labelOrdinary: 'Ordinary Judgment',
    labelVerbal: 'Verbal / Monitoring Judgment',
    labelExecutive: 'Executive',
    labelAppeal: 'Appeal',
    labelCassation: 'Cassation',
    labelAbbreviated: 'Abbreviated',
    labelSupplication: 'Supplication',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'en-US',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
