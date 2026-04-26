import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'wettelijke-rente-spanje-2026';
const title = 'Wettelijke Rente';
const description = 'Bereken de wettelijke rente die in 2026 van toepassing is in Spanje. Simulator met een tarief van 3,25% volgens de Begrotingswet.';

const faqData = [
  {
    question: 'Wat is de wettelijke rente in 2026?',
    answer: 'De wettelijke rente blijft voor het boekjaar 2026 op 3,25%, vastgesteld door de Spaanse Algemene Begrotingswet.',
  },
  {
    question: 'Hoe wordt de verzuimrente berekend?',
    answer: 'De verzuimrente wordt berekend door het uitstaande kapitaal te vermenigvuldigen met 3,25% en het aantal dagen vertraging, gedeeld door 36.500. Er wordt uitgegaan van 365 dagen per jaar.',
  },
  {
    question: 'Wat is het verschil tussen wettelijke rente en verzuimrente?',
    answer: 'De wettelijke rente is het basisreferentiepercentage. De fiscale verzuimrente (Hacienda) bedraagt 4,0625%. De rente voor commerciële transacties (ca. 10,15%) is de hoogste.',
  },
  {
    question: 'Wordt het automatisch toegepast zonder contractclausule?',
    answer: 'Ja, de wettelijke rente wordt standaard toegepast bij betalingsachterstand wanneer er geen andere rente is overeengekomen.',
  },
  {
    question: 'Wat is procesrente?',
    answer: 'De procesrente bedraagt 5,25% (wettelijke rente plus 2 punten) en wordt toegepast vanaf het moment dat een vonnis tot betaling van geld wordt uitgesproken.',
  },
];

const howToData = [
  {
    name: 'Voer het uitstaande kapitaal in',
    text: 'Voer het geldbedrag in waarover u de rente wilt berekenen (bijv. een onbetaalde factuur).',
  },
  {
    name: 'Geef het aantal dagen vertraging op',
    text: 'Geef aan hoeveel dagen de betalingsachterstand heeft geduurd of zal duren. Basis 365 dagen.',
  },
  {
    name: 'Bekijk het resultaat',
    text: 'Ontvang automatisch het bedrag aan gegenereerde rente en het totaal te betalen bedrag bij 3,25%.',
  },
  {
    name: 'Bekijk andere tarieven',
    text: 'Bekijk referentiepercentages zoals fiscale verzuimrente (4,06%) voor meer context.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Wettelijke Rente 2026 Spanje - Calculator',
  },
  {
    type: 'paragraph',
    html: 'De <strong>wettelijke rente in 2026</strong> bedraagt <strong>3,25%</strong> in Spanje. Dit wordt automatisch toegepast bij betalingsachterstand als er niets anders is overeengekomen.',
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
  ui: {
    labelTitle: 'Wettelijk Rentetarief',
    labelDescription: 'Bereken de rente volgens de Begrotingswet 2026. Simulator met 3,25% voor Spanje.',
    labelBadge: 'Staatsblad (BOE) 2026',
    labelSubtitle: 'De wettelijke rente blijft voor 2026 op 3,25%.',
    labelLegalInterest: 'Wettelijke Rente',
    labelDelayInterest: 'Verzuimrente',
    labelCommercialOperations: 'Handelstransacties',
    labelActive: 'Geldig in 2026',
    labelTributary: 'Fiscaal (Belastingdienst)',
    labelFirstHalf: 'Eerste Helft 2026',
    labelQuickCalculator: 'Snelcalculator Rente (3,25%)',
    labelCapital: 'Uitstaand Kapitaal',
    labelDays: 'Dagen Vertraging',
    labelInterestGenerated: 'Gegenereerde Rente',
    labelTotalToPay: 'Totaal te Betalen',
    labelFormula: 'Deze calculator gebruikt de standaardformule voor enkelvoudige rente:',
    labelBase: 'Berekening op basis van 365 dagen volgens de Spaanse wetgeving.',
    labelOfficialRegulation: 'Officiële Regelgeving',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
