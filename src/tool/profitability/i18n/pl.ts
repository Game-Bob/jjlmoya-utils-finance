import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Inwestycja Początkowa',
  labelFinalValue: 'Wartość Końcowa / Aktualne Saldo',
  labelTimeSelection: 'Czas Trwania Inwestycji',
  labelYears: 'Lat',
  labelMonths: 'Miesięcy',
  labelDays: 'Dni',
  labelROI: 'Zwrot z Inwestycji (ROI)',
  labelCAGR: 'Roczna Stopa Wzrostu (CAGR)',
  labelNetProfit: 'Zysk Netto',
  labelLinearGrowth: 'Wzrost Liniowy (Szacowany)',
  labelExponentialGrowth: 'Wzrost Składany (CAGR)',
  labelPositiveResult: 'Inwestycja Zyskowna',
  labelNegativeResult: 'Pozycja Stratna',
  labelCopyResult: 'Kopiuj Wyniki',
  labelCopied: 'Skopiowano!',
};

const slug = 'kalkulator-rentownosci-inwestycji-roi-cagr';
const title = 'Kalkulator Rentowności: ROI & CAGR';
const description = 'Analizuj wydajność swoich inwestycji. Oblicz ROI i CAGR, aby zrozumieć swoje rzeczywiste zyski.';

const faq = [
  {
    question: 'Jaki CAGR jest dobry?',
    answer: 'Historycznie S&P 500 przynosi około 7-10% rocznie.',
  },
  {
    question: 'Dlaczego mój CAGR różni się od całkowitego ROI?',
    answer: 'ROI to całkowity zwrot bez względu na czas. CAGR to stopa roczna.',
  },
];

const howTo = [
  {
    name: 'Wprowadź kapitał początkowy',
    text: 'Wpisz kwotę, którą zainwestowałeś pierwotnie.',
  },
  {
    name: 'Wprowadź wartość końcową',
    text: 'Wpisz aktualną wartość rynkową.',
  },
  {
    name: 'Ustal czas trwania',
    text: 'Określ, jak długo utrzymywałeś inwestycję.',
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
      text: 'ROI vs. CAGR: Który wskaźnik jest lepszy?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> pokazuje całkowity zysk procentowy, ale ignoruje czas. <strong>CAGR</strong> jest lepszy do analizy długoterminowej.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Definicja ROI - Investopedia',
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
