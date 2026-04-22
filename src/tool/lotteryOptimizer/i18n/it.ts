import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'ottimizzatore-lotterie-calcolatore-probabilita';
const title = 'Ottimizzatore di Lotterie e Calcolatore di Probabilità';
const description = 'Analizza le tue probabilità nella Lotteria di Natale, EuroMillions e Bonoloto. Calcola il numero ottimale di biglietti e il valore atteso della tua scommessa.';

const faqData = [
  {
    question: 'Cos’è la speranza matematica nella lotteria?',
    answer: 'È il valore medio che ti aspetti di vincere per ogni euro scommesso. In quasi tutte le lotterie, la speranza matematica è negativa (solitamente perdi 0,50€ per ogni 1€ giocato), il che significa che a lungo termine il banco vince sempre.',
  },
  {
    question: 'È meglio giocare molti numeri o molti biglietti dello stesso numero?',
    answer: 'Se cerchi di vincere "qualcosa", diversificare i numeri aumenta la tua probabilità di ottenere premi minori. Se cerchi il primo premio, giocare un solo numero ti dà la stessa probabilità, ma un premio maggiore se indovini.',
  },
  {
    question: 'Conviene davvero giocare alla Lotteria di Natale spagnola?',
    answer: 'Da un punto di vista puramente matematico, no. Viene restituito solo il 70% della raccolta. Tuttavia, ha una probabilità di vincere il primo premio (1 su 100.000) molto più alta rispetto all’EuroMillions (1 su 140 milioni).',
  },
  {
    question: 'Posso migliorare le mie possibilità con le statistiche?',
    answer: 'No. Le estrazioni della lotteria sono processi casuali indipendenti. Il fatto che un numero sia uscito ieri non influisce affatto sull’estrazione di oggi.',
  },
  {
    question: 'Cosa significa la "difficoltà" nella tabella comparativa?',
    answer: 'È una misura relativa di quanto sia difficile vincere il primo premio. Accessibile (meno di 200k), Difficile (meno di 20M), Estrema (oltre 20M).',
  },
];

const howToData = [
  {
    name: 'Selezionare il tipo di estrazione',
    text: 'Scegli tra Lotteria di Natale, Primitiva, EuroMillions o Bonoloto per analizzare le regole specifiche.',
  },
  {
    name: 'Definire l’investimento',
    text: 'Indica quanti biglietti o scommesse intendi acquistare per questa estrazione.',
  },
  {
    name: 'Analizzare le probabilità critiche',
    text: 'Osserva le possibilità reali di vincere il primo premio rispetto a premi minori o al rimborso.',
  },
  {
    name: 'Valutare il rischio/beneficio',
    text: 'Controlla la speranza matematica per capire quanto denaro stai "regalando" statisticamente per ogni euro investito.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'La Matematica della Speranza',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Giocare alla lotteria è, per molti, l’acquisto di un’illusione per pochi euro. Tuttavia, dietro le estrazioni risiede una delle branche più affascinanti della matematica: la statistica delle probabilità estreme.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Lotteria di Natale (El Gordo)',
    description: 'La più grande distribuzione di premi al mondo. Alta probabilità di vincere qualcosa.',
  },
  nino: {
    name: 'Lotteria del Bambino (El Niño)',
    description: 'Triplica le possibilità di rimborso rispetto al Natale.',
  },
  euromillones: {
    name: 'EuroMillions',
    description: 'Premi astronomici, probabilità quasi impossibili.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'La lotteria più antica di Spagna. Difficile ma più economica.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'La più economica. Ideale per giocare quotidianamente con un budget ridotto.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti': 'Fonti e Riferimenti',
  ui: {
    gameTranslations,
    labelTitle: 'Ottimizzatore di Lotterie',
    labelDescription: 'Confronta le estrazioni, calcola la tua speranza matematica e gioca con intelligenza.',
    labelSelectGame: 'Seleziona una lotteria',
    labelConfigurePlay: 'Configura la tua giocata',
    labelAdjustQuantity: 'Regola la quantità di giocate per vedere la tua probabilità reale.',
    labelTotalInvestment: 'Investimento Totale',
    labelTickets: 'Quantità di Biglietti / Scommesse',
    labelUnits: 'unità',
    labelExposureAnalysis: 'Analisi dell’Esposizione',
    labelSelectLottery: 'Seleziona una lotteria per vedere l’analisi del rischio.',
    labelOptimalCutoff: 'Punto di Interruzione Suggerito',
    labelProbabilitySuccess: 'Probabilità di Successo',
    labelExpectedValue: 'Valore Atteso (EV)',
    labelReturnTheoretical: 'Ritorno teorico per ogni giocata effettuata.',
    labelSocialReturnIndex: 'Indice di Redditività Sociale',
    labelLow: 'Bassa',
    labelMedium: 'Media',
    labelHigh: 'Alta',
    labelComparison: 'Confronto Premi',
    labelLottery: 'Lotteria',
    labelCost: 'Costo',
    labelTypicalPrize: 'Premio Tipico',
    labelDifficulty: 'Difficoltà',
    labelAccessible: 'Accessibile',
    labelDifficult: 'Difficile',
    labelExtreme: 'Estrema',
    labelNote: 'Nota: I premi di Natale ed El Niño sono per "décimo" (20€). Euromillions, ecc. sono jackpot tipici.',
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
