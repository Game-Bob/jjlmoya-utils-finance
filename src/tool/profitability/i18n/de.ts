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

const slug = 'rentabilitatsrechner-investition-roi-cagr';
const title = 'Rentabilitätsrechner: ROI & CAGR';
const description = 'Analysieren Sie Ihre Investitionsleistung. Berechnen Sie ROI und CAGR, um Ihre realen Gewinne zu verstehen.';

const faq = [
  {
    question: 'Was ist eine gute CAGR?',
    answer: 'Historisch gesehen liegt der S&P 500 bei etwa 7-10% pro Jahr. Hochrisikoinvestitionen können 15-20%+ anstreben.',
  },
  {
    question: 'Warum unterscheidet sich mein CAGR von meinem Gesamt-ROI?',
    answer: 'Der ROI ist die Gesamtrendite unabhängig von der Zeit. Die CAGR ist die jährliche Rate, die erforderlich ist, um diese Gesamtrendite zu erreichen.',
  },
  {
    question: 'Kann die CAGR negativ sein?',
    answer: 'Ja. Wenn Ihr Endwert geringer ist als Ihre Anfangsinvestition, ist die CAGR negativ.',
  },
];

const howTo = [
  {
    name: 'Anfangskapital eingeben',
    text: 'Geben Sie den ursprünglich investierten Betrag ein.',
  },
  {
    name: 'Endwert eingeben',
    text: 'Geben Sie den aktuellen Marktwert oder den Verkaufspreis ein.',
  },
  {
    name: 'Zeitdauer festlegen',
    text: 'Geben Sie an, wie lange Sie die Investition gehalten haben.',
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
      text: 'ROI vs. CAGR: Welche Kennzahl ist besser?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>ROI</strong> zeigt den prozentualen Gesamtgewinn, ignoriert aber die Zeit. Die <strong>CAGR</strong> ist besser für langfristige Analysen.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'ROI Definition - Investopedia',
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
