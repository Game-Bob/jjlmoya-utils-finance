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

const slug = 'rendement-calculator-investering-roi-cagr';
const title = 'Rendement Calculator: ROI & CAGR';
const description = 'Analyseer je beleggingsprestaties. Bereken ROI en CAGR om je werkelijke winsten te begrijpen.';

const faq = [
  {
    question: 'Wat is een goede CAGR?',
    answer: 'Historisch gezien levert de S&P 500 ongeveer 7-10% per jaar op.',
  },
  {
    question: 'Waarom verschilt mijn CAGR van mijn totale ROI?',
    answer: 'ROI is het totale rendement ongeacht de tijd. CAGR is het jaarlijkse percentage.',
  },
];

const howTo = [
  {
    name: 'Voer je beginkapitaal in',
    text: 'Voer het bedrag in dat je oorspronkelijk hebt geïnvesteerd.',
  },
  {
    name: 'Voer de eindwaarde in',
    text: 'Voer de huidige marktwaarde in.',
  },
  {
    name: 'Stel de tijdsduur in',
    text: 'Geef aan hoe lang je de investering hebt aangehouden.',
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
      text: 'ROI vs. CAGR: Welke maatstaf is beter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> geeft het totale groeipercentage aan, maar negeert de tijd. <strong>CAGR</strong> is beter voor langetermijnanalyse.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'ROI Definitie - Investopedia',
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
