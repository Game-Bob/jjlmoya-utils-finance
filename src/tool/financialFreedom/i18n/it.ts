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

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'calcolatore-liberta-finanziaria-autonomia',
  title: 'Calcolatore Libertà Finanziaria e Autonomia',
  description: 'Calcola quanto dureranno i tuoi risparmi. Il nostro strumento di autonomia finanziaria ti aiuta a visualizzare la tua indipendenza.',
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
  faq: [
    {
      question: 'Qual è una buona autonomia?',
      answer: 'Gli esperti consigliano da 3 a 6 mesi. Per la libertà reale, punta a 2 anni o più.',
    },
  ],
  bibliography: [
    {
      name: 'Principi del Movimento FIRE',
      url: 'https://it.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Inserisci i tuoi risparmi',
      text: 'Inserisci il totale dei contanti o delle attività liquide.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calcolatore Libertà Finanziaria',
      description: 'Calcola la durata dei tuoi risparmi.',
    },
  ],
};
