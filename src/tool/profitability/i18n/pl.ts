import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Inwestycja Początkowa',
  labelFinalValue: 'Wartość Końcowa / Aktualny Stan',
  labelTimeSelection: 'Czas Trwania Inwestycji',
  labelYears: 'Lat',
  labelMonths: 'Miesięcy',
  labelDays: 'Dni',
  labelROI: 'Zwrot z Inwestycji (ROI)',
  labelCAGR: 'Zannualizowany Wzrost (CAGR)',
  labelNetProfit: 'Zysk Netto',
  labelLinearGrowth: 'Wzrost Liniowy (Szacowany)',
  labelExponentialGrowth: 'Wzrost Składany (CAGR)',
  labelPositiveResult: 'Inwestycja Rentowna',
  labelNegativeResult: 'Pozycja Stratna',
  labelCopyResult: 'Kopiuj Wyniki',
  labelCopied: 'Skopiowano!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'kalkulator-rentownosci-inwestycji-roi-cagr',
  title: 'Kalkulator Rentowności: ROI & CAGR',
  description: 'Analizuj wydajność swoich inwestycji. Oblicz ROI i CAGR, aby zrozumieć swoje realne zyski.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Który wskaźnik jest lepszy?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> wskazuje całkowity procentowy zysk, ale ignoruje czas. <strong>CAGR</strong> jest lepszy do analizy długoterminowej.',
    },
  ],
  faq: [
    {
      question: 'Jaki CAGR jest dobry?',
      answer: 'Historycznie S&P 500 zwraca około 7-10% rocznie.',
    },
  ],
  bibliography: [
    {
      name: 'Definicja ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Wprowadź kapitał początkowy',
      text: 'Wpisz kwotę, którą pierwotnie zainwestowałeś.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Kalkulator Rentowności',
      description: 'Oblicz ROI i CAGR.',
    },
  ],
};
