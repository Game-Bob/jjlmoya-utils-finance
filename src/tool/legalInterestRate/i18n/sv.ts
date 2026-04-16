import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'lagstadgad-ranta-spanien-2026';
const title = 'Lagstadgad ränta';
const description = 'Beräkna den lagstadgade räntan tillämplig i Spanien för 2026. Simulator med en ränta på 3,25 % enligt budgetlagen.';

const faqData = [
  {
    question: 'Vad är den lagstadgade räntan 2026?',
    answer: 'Den lagstadgade räntan för pengar ligger kvar på 3,25 % för räkenskapsåret 2026, fastställt i den spanska budgetlagen (LPGE).',
  },
  {
    question: 'Hur beräknas dröjsmålsräntan?',
    answer: 'Dröjsmålsräntan beräknas genom att multiplicera det utestående kapitalet med 3,25 % och med antalet försenade dagar, dividerat med 36 500. En bas på 365 dagar används.',
  },
  {
    question: 'Vad är skillnaden mellan lagstadgad ränta och dröjsmålsränta?',
    answer: 'Den lagstadgade räntan är basreferensräntan. Den skattemässiga dröjsmålsräntan (Hacienda) är 4,0625 %. Räntan för handelstransaktioner (ca 10,15 %) är den högsta.',
  },
  {
    question: 'Tillämpas den automatiskt utan avtalsklausul?',
    answer: 'Ja, den lagstadgade räntan tillämpas som standard vid betalningsdröjsmål när ingen annan ränta har avtalats.',
  },
  {
    question: 'Vad är rättegångsränta?',
    answer: 'Rättegångsräntan är 5,25 % (lagstadgad ränta plus 2 punkter) som tillämpas från det att en dom meddelas som förpliktar till betalning.',
  },
];

const howToData = [
  {
    name: 'Ange utestående kapital',
    text: 'Skriv in det belopp du behöver beräkna ränta på (t.ex. en obetald faktura).',
  },
  {
    name: 'Ange försenade dagar',
    text: 'Ange hur många dagar betalningsdröjsmålet har varat eller kommer att vara. Bas 365 dagar.',
  },
  {
    name: 'Visa resultatet',
    text: 'Få automatiskt det belopp av ränta som genererats och totalt att betala med gällande 3,25 %.',
  },
  {
    name: 'Se andra räntesatser',
    text: 'Se referensräntor som skattemässig dröjsmål (4,06 %) för ytterligare sammanhang.',
  },
];

const bibliographyData = [
  {
    name: 'Spansk budgetlag 2026',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Spanska civillagen - Art. 1108 ff.',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Lag 3/2004 mot sena betalningar',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Lagstadgad ränta 2026 Spanien - Kalkylator',
  },
  {
    type: 'paragraph',
    html: 'Den <strong>lagstadgade räntan 2026</strong> är <strong>3,25 %</strong> i Spanien. Den tillämpas automatiskt vid försening om inget annat har avtalats.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Juridiska källor',
  ui: {
    labelTitle: 'Lagstadgad räntesats',
    labelDescription: 'Beräkna lagstadgad ränta enligt budgetlagen 2026. Simulator med 3,25 % för Spanien.',
    labelBadge: 'Statstidningen (BOE) 2026',
    labelSubtitle: 'Den lagstadgade räntan för pengar ligger kvar på 3,25 % för 2026.',
    labelLegalInterest: 'Lagstadgad ränta',
    labelDelayInterest: 'Dröjsmålsränta',
    labelCommercialOperations: 'Handelstransaktioner',
    labelActive: 'Gäller under 2026',
    labelTributary: 'Skattemässig (Hacienda)',
    labelFirstHalf: 'Första halvåret 2026',
    labelQuickCalculator: 'Snabbkalkylator ränta (3,25 %)',
    labelCapital: 'Utestående kapital',
    labelDays: 'Försenade dagar',
    labelInterestGenerated: 'Genererad ränta',
    labelTotalToPay: 'Totalt att betala',
    labelFormula: 'Denna kalkylator använder standardformeln för enkel ränta:',
    labelBase: 'En bas på 365 dagar används för den officiella beräkningen enligt gällande spansk regelverk.',
    labelOfficialRegulation: 'Officiell reglering',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'sv-SE',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
