import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Całkowite Oszczędności',
  labelExpenses: 'Aktualne Wydatki',
  labelMonthly: 'Miesięcznie',
  labelYearly: 'Rocznie',
  labelTimeRemaining: 'Twoja Droga do Przetrwania',
  labelYears: 'Lat',
  labelMonths: 'Miesięcy',
  labelDays: 'Dni',
  labelStatus: 'Status Bezpieczeństwa Finansowego',
  labelRedZone: 'Strefa Czerwona: Wysokie Ryzyko',
  labelYellowZone: 'Strefa Żółta: Stabilnie',
  labelGreenZone: 'Strefa Zielona: Wolność Finansowa',
  labelBurnRateDaily: 'Dzienne Tempo Wydatków',
  labelBurnRateMonthly: 'Miesięczne Tempo Wydatków',
  labelWhatIf: 'Reguła 10%',
  labelWhatIfDescription: 'Zmniejszając wydatki o zaledwie 10%, możesz znacznie wydłużyć swój czas przetrwania.',
  labelGainTime: 'Dodatkowy Czas Przetrwania',
  labelCopyResult: 'Kopiuj Podsumowanie',
  labelCopied: 'Skopiowano!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'kalkulator-wolnosci-finansowej-czas-przetrwania',
  title: 'Kalkulator Wolności Finansowej i Czasu Przetrwania',
  description: 'Oblicz dokładnie, na jak długo starczą Twoje oszczędności. Nasze narzędzie pomaga zwizualizować niezależność finansową.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'Czym jest finansowy czas przetrwania?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Czas przetrwania</strong> (runway) to okres, w którym możesz żyć bez nowych dochodów. To ostateczna miara wolności finansowej.',
    },
  ],
  faq: [
    {
      question: 'Jaki czas przetrwania jest dobry?',
      answer: 'Eksperci zalecają minimum 3 do 6 miesięcy. Dla prawdziwej wolności celuj w 2 lata lub więcej.',
    },
  ],
  bibliography: [
    {
      name: 'Zasady ruchu FIRE',
      url: 'https://pl.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Wprowadź swoje oszczędności',
      text: 'Wpisz całkowitą kwotę dostępnej gotówki.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Kalkulator Wolności Finansowej',
      description: 'Oblicz, na jak długo starczą Twoje oszczędności.',
    },
  ],
};
