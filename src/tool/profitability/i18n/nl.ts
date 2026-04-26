import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Initiële Investering',
  labelFinalValue: 'Eindwaarde / Huidig Saldo',
  labelTimeSelection: 'Investeringsduur',
  labelYears: 'Jaar',
  labelMonths: 'Maanden',
  labelDays: 'Dagen',
  labelROI: 'Rendement op Investering (ROI)',
  labelCAGR: 'Geannualiseerde Groei (CAGR)',
  labelNetProfit: 'Nettowinst',
  labelLinearGrowth: 'Lineaire Groei (Geschat)',
  labelExponentialGrowth: 'Samengestelde Groei (CAGR)',
  labelPositiveResult: 'Winstgevende Investering',
  labelNegativeResult: 'Verliespositie',
  labelCopyResult: 'Resultaten Kopiëren',
  labelCopied: 'Gekopieerd!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'rendement-calculator-investering-roi-cagr',
  title: 'Rendement Calculator: ROI & CAGR',
  description: 'Analyseer je beleggingsprestaties. Bereken ROI en CAGR om je werkelijke winsten te begrijpen.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs. CAGR: Welke maatstaf is beter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> geeft het totale groeipercentage aan, maar negeert de tijd. <strong>CAGR</strong> is beter voor langetermijnanalyse.',
    },
  ],
  faq: [
    {
      question: 'Wat is een goede CAGR?',
      answer: 'Historisch gezien levert de S&P 500 ongeveer 7-10% per jaar op.',
    },
  ],
  bibliography: [
    {
      name: 'ROI Definitie - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Voer je beginkapitaal in',
      text: 'Voer het bedrag in dat je oorspronkelijk hebt geïnvesteerd.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Rendement Calculator',
      description: 'Bereken ROI en CAGR.',
    },
  ],
};
