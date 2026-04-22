import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'calcolatore-tasse-giudiziarie-spagna';
const title = 'Calcolatore di Tasse Giudiziarie Spagna';
const description = 'Calcola l’importo esatto delle tasse giudiziarie spagnole per le imprese secondo la Legge 10/2012. Simulatore per il Modello 696.';

const faqData = [
  {
    question: 'I privati sono esenti dal pagamento delle tasse giudiziarie?',
    answer: 'Sì, dal 2016 le persone fisiche sono totalmente esenti dal pagamento delle tasse giudiziarie in Spagna in tutti gli ordini giurisdizionali.',
  },
  {
    question: 'Qual è l’importo massimo della tassa giudiziaria?',
    answer: 'La quota variabile è limitata a un massimo di 10.000 euro. Sommando la quota fissa, il totale massimo può essere superiore a seconda del tipo di procedimento.',
  },
  {
    question: 'Cos’è il Modello 696?',
    answer: 'È il modulo ufficiale dell’Agenzia delle Entrate spagnola (AEAT) utilizzato per l’autoliquidazione della tassa giudiziaria.',
  },
  {
    question: 'Si paga la tassa nell’ordine penale?',
    answer: 'No, in Spagna non esistono tasse giudiziarie per i processi nell’ordine penale.',
  },
  {
    question: 'Come si calcola la quota variabile?',
    answer: 'La quota variabile è lo 0,5% del valore della lite fino a 1 milione di euro. Oltre tale cifra, è lo 0,25%. Il massimo è 10.000 euro.',
  },
];

const howToData = [
  {
    name: 'Seleziona il soggetto passivo',
    text: 'Indica se sei una persona fisica (esente) o giuridica (impresa).',
  },
  {
    name: 'Scegli la giurisdizione e il processo',
    text: 'Seleziona l’ordine giurisdizionale (Civile, Amministrativo o Sociale) e il tipo di procedimento.',
  },
  {
    name: 'Inserisci l’importo della lite',
    text: 'Scrivi l’importo totale richiesto nella domanda. Per l’ordine sociale, questo campo non si applica.',
  },
  {
    name: 'Visualizza il dettaglio',
    text: 'Ottieni il calcolo automatico con quota fissa, variabile e totale per il Modello 696.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Calcolatore Tasse Giudiziarie Spagna 2026: Guida Completa',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>Calcolatore di Tasse Giudiziarie</strong> è uno strumento tecnico progettato per determinare con precisione il costo fiscale della potestà giurisdizionale in Spagna secondo la Legge 10/2012.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti': 'Fonti e Riferimenti',
  ui: {
    labelTitle: 'Calcolatore di Tasse Giudiziarie',
    labelDescription: 'Calcola l’importo esatto del Modello 696 per giurisdizione e procedimento. Per imprese e professionisti.',
    labelLegalParameters: 'Parametri Legali',
    labelEntityType: 'Soggetto Passivo',
    labelJurisdiction: 'Giurisdizione',
    labelProcedure: 'Tipo di Processo',
    labelClaimAmount: 'Valore della Lite',
    labelEstimatedSettlement: 'Liquidazione Stimata',
    labelExemptSubject: 'Soggetto Esente',
    labelFixedQuote: 'Quota Fissa (Processuale)',
    labelVariableQuote: 'Quota Variabile (0,5% / 0,25%)',
    labelTaxableBase: 'Base Imponibile',
    labelCopySettlement: 'Copia Liquidazione',
    labelEntityJuridica: 'Persona Giuridica (S.r.l., S.p.A.)',
    labelEntityFisica: 'Persona Fisica (Esento)',
    labelCivilOrder: 'Ordine Civile',
    labelAdministrativeOrder: 'Contenzioso-Amministrativo',
    labelSocialOrder: 'Ordine Sociale',
    labelModel696: 'Modello 696 AEAT',
    labelOrdinary: 'Giudizio Ordinario',
    labelVerbal: 'Giudizio Verbale',
    labelExecutive: 'Esecutivo',
    labelAppeal: 'Appello',
    labelCassation: 'Cassazione',
    labelAbbreviated: 'Abbreviato',
    labelSupplication: 'Supplica',
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
