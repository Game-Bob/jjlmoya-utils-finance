import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'calcolatore-aumento-affitto-spagna-ipc';
const title = 'Calcolatore Aumento Affitto Spagna IPC: Limite 3%';
const description = 'Calcola l’aggiornamento del tuo affitto con l’IPC o il limite legale del 3% secondo la Legge spagnola sulla Casa.';

const faqData = [
  {
    question: 'Qual è l’aumento massimo dell’affitto consentito nel 2024 e 2025?',
    answer: 'Secondo la Legge 12/2023 per il Diritto alla Casa, per gli anni 2024 e 2025, l’incremento massimo annuale del canone negli affitti abitativi è limitato per legge al 3%.',
  },
  {
    question: 'È obbligatorio aumentare l’affitto ogni anno con l’IPC?',
    answer: 'Non è obbligatorio per legge. Perché l’affitto aumenti, il contratto deve includere una clausola esplicita che menzioni l’aggiornamento annuale.',
  },
  {
    question: 'Con quanto anticipo deve notificare il proprietario l’aumento?',
    answer: 'Il proprietario deve comunicare l’aumento per iscritto all’inquilino con almeno un mese di anticipo (30 giorni).',
  },
  {
    question: 'Cosa succede se l’IPC è superiore al limite legale del 3%?',
    answer: 'Anche se l’IPC reale è superiore, il proprietario di un’abitazione principale non può richiedere legalmente un aumento superiore al 3% durante il 2024 e il 2025.',
  },
];

const howToData = [
  {
    name: 'Inserisci l’affitto attuale',
    text: 'Scrivi il canone mensile che paghi attualmente.',
  },
  {
    name: 'Scegli la modalità di calcolo',
    text: 'Seleziona il Limite Legale del 3% (raccomandato) o inserisci una percentuale manuale.',
  },
  {
    name: 'Consulta i risultati',
    text: 'Otterrai il nuovo affitto stimato, l’incremento mensile e il costo extra annuale.',
  },
  {
    name: 'Copia il riepilogo',
    text: 'Genera un report rapido da inviare al proprietario o da conservare tra i tuoi appunti.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Calcolatore Aumento Affitto 2026 Spagna: Limite 3%',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In Spagna, l’<strong>Indice dei Prezzi al Consumo (IPC)</strong> è tradizionalmente lo strumento utilizzato per adeguare il prezzo dell’affitto. Tuttavia, la nuova Legge sulla Casa ha introdotto limiti importanti.',
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti': 'Fonti e Riferimenti',
  ui: {
    labelTitle: 'Calcolatore Aumento Affitto',
    labelDescription: 'Aggiorna il tuo canone in base all’IPC o applica il limite legale del 3% in modo sicuro.',
    labelCurrentRent: 'Affitto Attuale',
    labelCurrentRentPlaceholder: 'Es. 800',
    labelIncrementType: 'Modalità Aggiornamento',
    labelLegalLimit: 'Limite Legge Casa (3%)',
    labelManualIncrement: 'Incremento Manuale (%)',
    labelManualPercentagePlaceholder: 'Es. 2.5',
    labelNewRentEstimate: 'Nuovo Affitto Stimato',
    labelMonthlyIncrease: 'Incremento Mensual',
    labelYearlyExtra: 'Costo Extra Annuale',
    labelLegalBadge: 'Limitato al 3% secondo la Legge 12/2023',
    labelCopyButton: 'Copia per il proprietario',
    labelCopySuccess: 'Copiato!',
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
