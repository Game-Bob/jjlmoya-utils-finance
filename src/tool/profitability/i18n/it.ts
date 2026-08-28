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

  { question: "Cosa devo verificare prima di usare il risultato?", answer: "Controlla dati, unità, ipotesi e limiti; è un'indicazione, non una decisione ufficiale." },];

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
      html: 'Il <strong>ROI</strong> indica il guadagno percentuale totale, ma ignora il tempo. Il <strong>CAGR</strong> è più utile per le analisi a lungo termine perché converte il risultato in un tasso annuo composto e permette di confrontare investimenti con durate diverse.',
    },
    {
      type: 'title',
      text: 'Come usare il calcolatore di redditività',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inserisci il capitale iniziale, il valore attuale o il prezzo di vendita e la durata in giorni, mesi o anni. Lo strumento calcola utile o perdita, ROI totale e crescita annuale geometrica. Per confrontare due investimenti usa la stessa unità di tempo e verifica se commissioni, versamenti, prelievi e dividendi sono inclusi.',
    },
    {
      type: 'title',
      text: 'ROI totale o rendimento annualizzato?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il ROI risponde alla domanda "quanto ho guadagnato in totale?". Il CAGR risponde a "quale tasso annuo composto avrebbe prodotto questo risultato?". Un +20% in un anno non equivale a un +20% in cinque anni. Il grafico rende visibile la differenza tra crescita lineare e composta.',
    },
    {
      type: 'paragraph',
      html: 'Il CAGR è una media teorica e nasconde la volatilità e il percorso reale del prezzo. Controlla dati, unità, date, arrotondamenti e ipotesi prima di usare il risultato. È uno strumento di orientamento e non sostituisce una consulenza finanziaria personalizzata.',
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
