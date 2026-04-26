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

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'calcolatore-redditivita-investimento-roi-cagr',
  title: 'Calcolatore Redditività: ROI & CAGR',
  description: 'Analizza il rendimento dei tuoi investimenti. Calcola ROI e CAGR per capire i tuoi guadagni reali.',
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
  faq: [
    {
      question: 'Cos\'è un buon CAGR?',
      answer: 'Storicamente l\'S&P 500 rende circa il 7-10% all\'anno.',
    },
  ],
  bibliography: [
    {
      name: 'Definizione di ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Inserisci il capitale iniziale',
      text: 'Inserisci l\'importo investito originariamente.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calcolatore Redditività',
      description: 'Calcola ROI e CAGR.',
    },
  ],
};
