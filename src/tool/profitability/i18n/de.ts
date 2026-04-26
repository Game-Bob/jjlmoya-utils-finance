import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Anfangsinvestition',
  labelFinalValue: 'Endwert / Aktueller Kontostand',
  labelTimeSelection: 'Investitionsdauer',
  labelYears: 'Jahre',
  labelMonths: 'Monate',
  labelDays: 'Tage',
  labelROI: 'Rentabilität (ROI)',
  labelCAGR: 'Jährliche Wachstumsrate (CAGR)',
  labelNetProfit: 'Nettogewinn',
  labelLinearGrowth: 'Lineares Wachstum (Geschätzt)',
  labelExponentialGrowth: 'Zinseszins-Wachstum (CAGR)',
  labelPositiveResult: 'Rentable Investition',
  labelNegativeResult: 'Verlustposition',
  labelCopyResult: 'Ergebnisse kopieren',
  labelCopied: 'Kopiert!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'rentabilitatsrechner-investition-roi-cagr',
  title: 'Rentabilitätsrechner: ROI & CAGR',
  description: 'Analysieren Sie Ihre Investitionsleistung. Berechnen Sie ROI und CAGR, um Ihre realen Gewinne zu verstehen.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs. CAGR: Welche Kennzahl ist besser?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>ROI</strong> zeigt den prozentualen Gesamtgewinn, ignoriert aber die Zeit. Die <strong>CAGR</strong> ist besser für langfristige Analysen.',
    },
  ],
  faq: [
    {
      question: 'Was ist eine gute CAGR?',
      answer: 'Historisch gesehen liegt der S&P 500 bei etwa 7-10% pro Jahr.',
    },
  ],
  bibliography: [
    {
      name: 'ROI Definition - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Anfangskapital eingeben',
      text: 'Geben Sie den ursprünglich investierten Betrag ein.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Rentabilitätsrechner',
      description: 'Berechnen Sie ROI und CAGR.',
    },
  ],
};
