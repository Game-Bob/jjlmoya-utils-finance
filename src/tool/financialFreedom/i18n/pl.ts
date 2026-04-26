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
  labelYearsShort: 'l',
  labelMonthsShort: 'm',
  labelDaysShort: 'd',
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

const slug = 'kalkulator-wolnosci-finansowej-czas-przetrwania';
const title = 'Kalkulator Wolności Finansowej i Czasu Przetrwania';
const description = 'Oblicz dokładnie, na jak długo starczą Twoje oszczędności. Nasze narzędzie pomaga zwizualizować niezależność finansową.';

const faq = [
  {
    question: 'Jaki czas przetrwania jest dobry?',
    answer: 'Eksperci zalecają minimum 3 do 6 miesięcy. Dla prawdziwej wolności celuj w 2 lata lub więcej.',
  },
  {
    question: 'Czy ten kalkulator uwzględnia inflację?',
    answer: 'To narzędzie jest przeznaczone do natychmiastowego obliczania aktywów płynnych w stosunku do bieżących wydatków.',
  },
  {
    question: 'Co to jest "Burn Rate" w finansach osobistych?',
    answer: 'Burn rate to tempo, w jakim zużywasz swoje oszczędności na pokrycie kosztów życia.',
  },
];

const howTo = [
  {
    name: 'Wprowadź swoje oszczędności',
    text: 'Wpisz całkowitą kwotę dostępnej gotówki lub aktywów płynnych.',
  },
  {
    name: 'Ustal wydatki',
    text: 'Wprowadź, ile wydajesz miesięcznie lub rocznie.',
  },
  {
    name: 'Analizuj strefę bezpieczeństwa',
    text: 'Sprawdź, czy jesteś w strefie Czerwonej, Żółtej czy Zielonej.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
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
  faq,
  bibliography: [
    {
      name: 'Zasady ruchu FIRE',
      url: 'https://pl.wikipedia.org/wiki/FIRE_movement',
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
