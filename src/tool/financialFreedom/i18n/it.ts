import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Risparmi Totali',
  labelExpenses: 'Spese Attuali',
  labelMonthly: 'Mensili',
  labelYearly: 'Annuali',
  labelTimeRemaining: 'Tua Autonomia Finanziaria',
  labelYears: 'Anni',
  labelMonths: 'Mesi',
  labelDays: 'Giorni',
  labelYearsShort: 'a',
  labelMonthsShort: 'm',
  labelDaysShort: 'g',
  labelStatus: 'Stato di Sicurezza Finanziaria',
  labelRedZone: 'Zona Rossa: Rischio Alto',
  labelYellowZone: 'Zona Gialla: Stabile',
  labelGreenZone: 'Zona Verde: Libertà Finanziaria',
  labelBurnRateDaily: 'Tasso di Spesa Giornaliero',
  labelBurnRateMonthly: 'Tasso di Spesa Mensile',
  labelWhatIf: 'La Regola del 10%',
  labelWhatIfDescription: 'Riducendo le tue spese del solo 10%, potresti estendere la tua autonomia in modo significativo.',
  labelGainTime: 'Tempo Extra Guadagnato',
  labelCopyResult: 'Copia Riepilogo',
  labelCopied: 'Copiato!',
};

const slug = 'calcolatore-liberta-finanziaria-autonomia';
const title = 'Calcolatore Libertà Finanziaria e Autonomia';
const description = 'Calcola quanto dureranno i tuoi risparmi. Il nostro strumento di autonomia finanziaria ti aiuta a visualizzare la tua indipendenza.';

const faq = [
  {
    question: 'Qual è una buona autonomia?',
    answer: 'Gli esperti consigliano da 3 a 6 mesi. Per la libertà reale, punta a 2 anni o più.',
  },
  {
    question: 'Questo calcolatore include l\'inflazione?',
    answer: 'Questo strumento è progettato per il calcolo immediato dei beni liquidi rispetto alle spese attuali.',
  },
  {
    question: 'Cos\'è il "Burn Rate" nella finanza personale?',
    answer: 'Il burn rate è il ritmo con cui spendi i tuoi risparmi per coprire le spese di vita.',
  },
];

const howTo = [
  {
    name: 'Inserisci i tuoi risparmi',
    text: 'Inserisci il totale dei contanti o delle attività liquide.',
  },
  {
    name: 'Definisci le tue spese',
    text: 'Indica quanto spendi al mese o all\'anno.',
  },
  {
    name: 'Analizza la tua zona di sicurezza',
    text: 'Controlla se sei in zona Rossa, Gialla o Verde.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'Cos\'è l\'autonomia finanziaria?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>autonomia finanziaria</strong> (runway) è il tempo che puoi vivere senza nuove entrate. È la metrica definitiva della libertà finanziaria.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Principi del Movimento FIRE',
      url: 'https://it.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
