import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'interesse-legale-denaro-spagna-2026';
const title = 'Interesse Legale del Denaro';
const description = 'Calcola l’interesse legale applicabile in Spagna per il 2026. Simulatore con tasso al 3,25% secondo la Legge di Bilancio.';

const faqData = [
  {
    question: 'Qual è l’interesse legale del denaro nel 2026?',
    answer: 'L’interesse legale del denaro si mantiene al 3,25% per l’esercizio 2026, fissato dalla Legge di Bilancio dello Stato spagnolo.',
  },
  {
    question: 'Come si calcola l’interesse di mora?',
    answer: 'L’interesse di mora si calcola moltiplicando il capitale residuo per il 3,25% e per il numero di giorni di ritardo, dividendo per 36.500. Si utilizza una base di 365 giorni.',
  },
  {
    question: 'Qual è la differenza tra interesse legale e interesse di mora?',
    answer: 'L’interesse legale è il tasso base di riferimento. L’interesse di mora tributario (Hacienda) è del 4,0625%. Quello per operazioni commerciali (circa 10,15%) è il più alto.',
  },
  {
    question: 'Si applica automaticamente senza clausola contrattuale?',
    answer: 'Sì, l’interesse legale si applica di default quando c’è un ritardo nel pagamento e non è stato pattuito un altro interesse.',
  },
  {
    question: 'Cos’è l’interesse processuale?',
    answer: 'L’interesse processuale è il 5,25% (interesse legale più 2 punti) applicato dal momento in cui viene emessa una sentenza di condanna al pagamento.',
  },
];

const howToData = [
  {
    name: 'Inserisci il capitale residuo',
    text: 'Scrivi l’importo su cui devi calcolare gli interessi (es. una fattura non pagata).',
  },
  {
    name: 'Specifica i giorni di ritardo',
    text: 'Indica quanti giorni è durato o durerà il mancato pagamento. Base 365 giorni.',
  },
  {
    name: 'Visualizza il risultato',
    text: 'Ottieni automaticamente l’importo degli interessi generati e il totale da pagare al 3,25%.',
  },
  {
    name: 'Consulta altri tassi',
    text: 'Osserva i tassi di riferimento come la mora tributaria (4,06%) per ulteriore contesto.',
  },
];

const bibliographyData = [
  {
    name: 'Legge di Bilancio dello Stato (Spagna) 2026',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Codice Civile Spagnolo - Art. 1108 e segg.',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Legge 3/2004 contro la Morosità',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Interesse Legale 2026 Spagna - Calcolatore',
  },
  {
    type: 'paragraph',
    html: 'L’<strong>interesse legale 2026</strong> è del <strong>3,25%</strong> in Spagna. Si applica automaticamente in caso di ritardato pagamento se non diversamente pattuito.',
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
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Fonti Legali',
  ui: {
    labelTitle: 'Tasso di Interesse Legale',
    labelDescription: 'Calcola l’importo degli interessi legali secondo la Legge di Bilancio 2026. Simulatore al 3,25% per la Spagna.',
    labelBadge: 'Bollettino Ufficiale dello Stato 2026',
    labelSubtitle: 'L’interesse legale si mantiene al 3,25% per il 2026.',
    labelLegalInterest: 'Interesse Legale',
    labelDelayInterest: 'Interesse di Mora',
    labelCommercialOperations: 'Operazioni Commerciali',
    labelActive: 'Vigente nel 2026',
    labelTributary: 'Tributario (Hacienda)',
    labelFirstHalf: 'Primo Semestre 2026',
    labelQuickCalculator: 'Calcolatore Rapido Interessi (3,25%)',
    labelCapital: 'Capitale Residuo',
    labelDays: 'Giorni di Ritardo',
    labelInterestGenerated: 'Interessi Generati',
    labelTotalToPay: 'Totale da Pagare',
    labelFormula: 'Questa calcolatrice applica la formula standard dell’interesse semplice:',
    labelBase: 'Si utilizza una base di 365 giorni per il calcolo ufficiale secondo la normativa spagnola.',
    labelOfficialRegulation: 'Regolamentazione Ufficiale',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
