import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflazione-spagna';
const title = 'Calcolatore d’Inflazione in Spagna: Valore Storico del Denaro';
const description =
  'Scopri quanto varrebbero oggi le tue pesetas o quanto è aumentato il costo della vita dal 1980. Dati storici IPC della Spagna aggiornati al 2026.';

const faqData = [
  {
    question: 'Cos’è l’IPC e come si calcola?',
    answer:
      'L’Indice dei Prezzi al Consumo (IPC) misura l’evoluzione dei prezzi di un paniere di beni e servizi rappresentativo del consumo spagnolo. Si calcola confrontando il costo di questo paniere in diversi periodi di tempo.',
  },
  {
    question: 'Quanto ha perso valore il denaro dal 1980?',
    answer:
      '1.000 pesetas del 1980 equivalgono a circa 60€ di oggi in potere d’acquisto. Il denaro ha perso oltre il 90% del suo valore in questi 40+ anni a causa dell’inflazione accumulata.',
  },
  {
    question: 'Perché i miei risparmi perdono valore se non li muovo?',
    answer:
      'Se l’inflazione è del 3% annuo e il tuo conto dà lo 0% di interesse, perdi il 3% di potere d’acquisto ogni anno. Per mantenere il valore reale, i tuoi risparmi devono generare almeno il tasso d’inflazione.',
  },
  {
    question: 'Qual è stato il periodo di maggiore inflazione in Spagna?',
    answer:
      'Gli anni ’80 sono stati i più inflazionistici, con tassi a due cifre (fino al 15%). I prezzi cambiavano drasticamente mese dopo mese. Dall’euro (2002), l’inflazione è stata più controllata, eccetto nel 2021-2023.',
  },
  {
    question: 'Come influisce l’inflazione sui miei risparmi?',
    answer:
      'L’inflazione agisce come una „tassa silenziosa”. Se l’inflazione è del 5% e i tuoi soldi sono sotto il materasso, alla fine dell’anno potrai comprare il 5% in meno di prodotti. È fondamentale investire per contrastare questo effetto.',
  },
];

const howToData = [
  {
    name: 'Selezionare l’anno di origine',
    text: 'Scegli la data da cui vuoi calcolare il valore del denaro (disponibile dal 1980 al 2026).',
  },
  {
    name: 'Inserire la quantità',
    text: 'Scrivi l’importo in pesetas (per date antiche) o in euro che vuoi confrontare.',
  },
  {
    name: 'Scegliere l’anno finale',
    text: 'Definisci fino a quale momento vuoi vedere l’evoluzione del potere d’acquisto.',
  },
  {
    name: 'Analizzare il risultato reale',
    text: 'Osserva l’equivalenza del potere d’acquisto e la percentuale di inflazione accumulata in tale periodo.',
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti sull’Inflazione',
  faq: faqData,
  bibliographyTitle: 'Fonti e Riferimenti Ufficiali',
  bibliography: [
    {
      name: 'INE: Indice dei Prezzi al Consumo (Spagna)',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'Banco de España: Analisi dell’Inflazione',
      url: 'https://www.bde.es/',
    },
    {
      name: 'BCE: Politica Monetaria e Prezzi',
      url: 'https://www.ecb.europa.eu/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatore di Inflazione Storica: Capisci il Valore Reale dei tuoi Soldi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L’inflazione è la „tassa silenziosa” che divora i tuoi risparmi anno dopo anno. Sai quanto ha perso valore il tuo denaro dal 1980? Quanto costa realmente quel caffè che pagavi 300 pesetas 20 anni fa?',
    },
    {
      type: 'title',
      text: 'Inflazione: La Tassa Silenziosa sul tuo Patrimonio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L’<strong>inflazione</strong> è l’incremento sostenuto e generalizzato dei prezzi. Anche se sembra un fenomeno tecnico, il suo impatto sull’economia reale è diretto: riduce la quantità di beni che puoi comprare con lo stesso denaro, erodendo il risparmio di tutta una vita se non si prendono misure protettive.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Record Storico 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Picco dei Prezzi 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Obiettivo di Stabilità',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Termini Finanziari Essenziali',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IPC',
          definition: 'Indicatore che riassume la variazione dei prezzi di un paniere base di consumo.',
        },
        {
          term: 'Potere d’Acquisto',
          definition: 'Capacità di spesa reale di una valuta in un momento determinato.',
        },
        {
          term: 'Deflazione',
          definition: 'Discesa generalizzata dei prezzi che può paralizzare l’investimento.',
        },
        {
          term: 'Stagflazione',
          definition: 'Scenario di alta inflazione combinato con ristagno economico.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Punti Cardine Economici e Comparativa',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crisi degli anni ’80',
          description: 'Periodo segnato da inflazioni a due cifre e grande instabilità lavorativa.',
          points: [
            'Tassi di interesse estremamente alti',
            'Perdita rapida di valore della peseta',
            'Stipendi divorati dai prezzi',
          ],
        },
        {
          title: 'Inflazione della Pandemia: 2021-2023',
          description: 'Salita brusca per costi energetici e problemi nella catena di fornitura.',
          highlight: true,
          points: [
            'Impatto diretto sul paniere della spesa',
            'Rialzo dei tassi della BCE per frenare il consumo',
            'Recupero lento del potere d’acquisto',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Prodotto o Indicatore', 'Valore nel 1980 (Stimato)', 'Valore nel 2026 (Proiettato)', 'Variazione'],
      rows: [
        ['Filoncino di pane', '0,15€ (25 pts)', '1,40€', '833%'],
        ['Caffè al bar', '0,30€ (50 pts)', '1,65€', '450%'],
        ['Biglietto del cinema', '1,20€ (200 pts)', '9,80€', '716%'],
        ['Salario Minimo Mensile', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Il Pericolo del Contante',
      html: 'Tenere soldi sotto il materasso o in conti correnti senza rendimento è una perdita di capitale garantita. Un’inflazione media del 3% riduce a metà il valore dei tuoi risparmi in meno di 25 anni.',
    },
    {
      type: 'title',
      text: 'Consigli per Proteggere i tuoi Risparmi',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Strategie di Investimento',
      items: [
        {
          pro: 'Attivi Reali: Gli immobili tendono a rivalutarsi con l’inflazione.',
          con: 'Bassa liquidità e alti costi di ingresso.',
        },
        {
          pro: 'Borsa e Fondi: Rendimenti che solitamente superano l’IPC a lungo termine.',
          con: 'Volatilità e rischio di mercato a breve termine.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Abitudini Finanziarie Sane',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Revisionare periodicamente le tue spese per individuare rincari nascosti.',
        'Diversificare i risparmi in differenti tipi di attivi.',
        'Considerare titoli di stato legati all’inflazione.',
        'Utilizzare calcolatori per contestualizzare offerte e salari.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avvertenza sull’Interesse Composto Negativo',
      html: 'L’inflazione agisce come un interesse composto inverso. Ogni anno, la percentuale di perdita si applica su un valore già diminuito, accelerando la perdita di ricchezza se non si interviene.',
    },
    {
      type: 'summary',
      title: 'Conclusioni Chiave',
      items: [
        'L’IPC è solo una media; la tua inflazione personale dipende dalle tue abitudini.',
        'Investire non è opzionale se si vuole preservare il valore reale del lavoro.',
        'I calcolatori d’inflazione sono vitali per capire contratti a lungo termine.',
      ],
    },
    {
      type: 'message',
      title: 'Prendi il Controllo della tua Economia',
      html: 'Il nostro calcolatore utilizza dati ufficiali dell’INE per offrirti la visione più precisa del passato e presente economico della Spagna.',
    },
  ],
  ui: {
    labelTitle: 'Calcolatore d’Inflazione Spagna',
    labelInitialAmount: 'Denaro Iniziale',
    labelInitialYear: 'Nell’anno',
    labelFinalAmount: 'Equivalenza Oggi',
    labelFinalYear: 'Anno 2026',
    labelInflationRate: 'Inflazione Accumulata',
    labelCalculatedOn: 'Calcolo realizzato utilizzando dati ufficiali dell’INE fino al 2025 e proiezioni stimate per la fine del 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
    labelYearSelect: 'Nell’anno',
    labelIn: 'In',
    labelEquivalentToday: 'equivale oggi a',
    labelInflationAccumulated: 'Inflazione Accumulata',
    labelYear: 'Anno',
  },
};
