import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Investimento Iniziale',
  labelFinalValue: 'Valore Finale / Saldo Attuale',
  labelTimeSelection: 'Durata dell\'Investimento',
  labelYears: 'Anni',
  labelMonths: 'Mesi',
  labelDays: 'Giorni',
  labelROI: 'Rendimento dell\'Investimento (ROI)',
  labelCAGR: 'Crescita Annualizzata (CAGR)',
  labelNetProfit: 'Utile Netto',
  labelLinearGrowth: 'Crescita Lineare (Stimata)',
  labelExponentialGrowth: 'Crescita Composta (CAGR)',
  labelPositiveResult: 'Investimento Redditizio',
  labelNegativeResult: 'Posizione in Perdita',
  labelCopyResult: 'Copia Risultati',
  labelCopied: 'Copiato!',
};

const slug = 'calcolatore-redditivita-investimento-roi-cagr';
const title = 'Calcolatore Redditività: ROI & CAGR';
const description = 'Analizza il rendimento dei tuoi investimenti. Calcola ROI e CAGR per capire i tuoi guadagni reali.';

const faq = [
  {
    question: 'Cos\'è un buon CAGR?',
    answer: 'Storicamente l\'S&P 500 rende circa il 7-10% all\'anno.',
  },
  {
    question: 'Perché il mio CAGR è diverso dal ROI totale?',
    answer: 'Il ROI è il rendimento totale indipendentemente dal tempo. Il CAGR è il tasso annuale necessario per raggiungere tale rendimento.',
  },
];

const howTo = [
  {
    name: 'Inserisci il capitale iniziale',
    text: 'Inserisci l\'importo investito originariamente.',
  },
  {
    name: 'Inserisci il valore finale',
    text: 'Inserisci il valore di mercato attuale.',
  },
  {
    name: 'Imposta la durata',
    text: 'Specifica per quanto tempo hai mantenuto l\'investimento.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Quale metrica è migliore?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>ROI</strong> indica il guadagno percentuale totale, ma ignora il tempo. Il <strong>CAGR</strong> è migliore per le analisi a lungo termine.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Definizione di ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
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
