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

const bibliographyData = [
  {
    name: 'Law 10/2012 on Judicial Fees (Spanish Official Gazette)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-14301',
  },
  {
    name: 'Constitutional Court Ruling 140/2016 on Judicial Fees',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2016-7905',
  },
  {
    name: 'Spanish Tax Authority - Form 696',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GC07.shtml',
  },
  {
    name: 'General Council of the Judiciary - Fee Information',
    url: 'https://www.cgpj.es/es/Inicio',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Spanish Judicial Fees Calculator - Form 696',
  },
  {
    type: 'paragraph',
    html: 'Spanish <strong>judicial fees</strong> are governed by <strong>Law 10/2012</strong> and affect companies and professionals. The calculation is done automatically considering the fixed fee based on the procedure type and the variable fee of 0.5% of the claim amount.',
  },
  {
    type: 'title',
    text: 'Exemptions and Special Cases',
  },
  {
    type: 'paragraph',
    html: '<strong>Individuals are completely exempt</strong> from judicial fees since 2016. In criminal proceedings, there are also no fees. The social order has specific rules for fee calculations.',
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
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Sources and References',
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
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
