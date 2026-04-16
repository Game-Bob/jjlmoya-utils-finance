import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'kalkulator-hipoteczny';
const title = 'Symulator Kredytu Hipotecznego i Francuski Harmonogram Spłat';
const description =
  'Oblicz swoją miesięczną ratę kredytu, sprawdź ile zapłacisz odsetek i natychmiast wygeneruj pełny harmonogram spłat.';

const faqData = [
  {
    question: 'Co to jest francuski system amortyzacji?',
    answer:
      'To najczęściej stosowany system (raty równe). Miesięczna rata jest stała, ale na początku spłacasz głównie odsetki, а kapitał w niewielkim stopniu. Pod koniec okresu sytuacja się odwraca. Dlatego nadpłacanie kredytu jest najbardziej opłacalne w pierwszych latach.',
  },
  {
    question: 'Stałe czy zmienne oprocentowanie w 2026 roku?',
    answer:
      'Stałe oprocentowanie: płacisz teraz nieco więcej, ale śpisz spokojnie przez 30 lat. Zmienne oprocentowanie: dziś może być tańsze, ale jeśli stopy procentowe wzrosną, rata może gwałtownie skoczyć. Wszystko zależy od Twojej tolerancji ryzyka.',
  },
  {
    question: 'Ile zaoszczędzę, nadpłacając 10 000 zł?',
    answer:
      'To zależy od momentu. Jeśli nadpłacisz w 1. roku kredytu na 200 000 zł przy 3%, możesz zaoszczędzić ponad 15 000 zł na samych odsetkach. Jeśli zrobisz to w 20. roku, zaoszczędzisz ledwie 2 000 zł. Wyczucie czasu jest kluczowe.',
  },
  {
    question: 'Jaki procent pensji powinna wynosić rata kredytu?',
    answer:
      'Zaleca się, aby rata kredytu nie przekraczała 30-35% miesięcznych dochodów netto (wliczając inne zobowiązania). Przekroczenie tego progu znacznie zwiększa ryzyko niewypłacalności w razie nieprzewidzianych zdarzeń.',
  },
];

const howToData = [
  {
    name: 'Wprowadź kwotę kredytu',
    text: 'Wpisz całkowitą kwotę, o którą wnioskujesz do banku (pomniejszoną o wkład własny).',
  },
  {
    name: 'Ustaw stopę oprocentowania',
    text: 'Wpisz RRSO lub stopę procentową oferowaną przez bank. Możesz porównać opcję ze stałym i zmiennym oprocentowaniem.',
  },
  {
    name: 'Wybierz okres spłaty',
    text: 'Określ na ile lat bierzesz kredyt. Dłuższy okres to niższa rata, ale wyższy całkowity koszt odsetek.',
  },
  {
    name: 'Przeanalizuj harmonogram spłat',
    text: 'Sprawdź miesiąc po miesiącu, jak zmienia się Twoje zadłużenie i jaka część raty idzie na odsetki, a jaka na kapitał.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i Odniesienia',
  bibliography: [
    {
      name: 'Komisja Nadzoru Finansowego (KNF): Kredyty hipoteczne',
      url: 'https://www.knf.gov.pl/',
    },
    {
      name: 'Narodowy Bank Polski: Informacje o stopach procentowych',
      url: 'https://www.nbp.pl/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kompletny Przewodnik po Kredytach: System Francuski i Nadpłata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kredyt hipoteczny to prawdopodobnie największe zobowiązanie w Twoim życiu. Zrozumienie, jak działa francuski system spłat (raty równe), jest kluczowe dla podejmowania mądrych decyzji, które mogą zaoszczędzić Ci dziesiątki tysięcy złotych.',
    },
    {
      type: 'title',
      text: '„Pułapka” Systemu Francuskiego: Z czego składa się Twoja rata?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Większość kredytów w Polsce korzysta z <strong>Francuskiego Systemu Amortyzacji</strong> (rat równej wysokości). Główną cechą jest to, że rata co miesiąc jest taka sama (przy stałym oprocentowaniu), ale jej skład drastycznie zmienia się w czasie.',
    },
    {
      type: 'tip',
      title: 'Jak zmienia się Twoja rata',
      html: '<p><strong>Na początku (Lata 1-10):</strong> Płacisz prawie same ODSETKI, a kapitał spłacasz bardzo powoli. Przy kredycie na 250 000 zł, pierwsza rata może składać się w 80% z odsetek.</p><p><strong>W połowie (Lata 11-25):</strong> Proporcje zaczynają się wyrównywać.</p><p><strong>Pod koniec (Lata 26-30):</strong> Płacisz prawie sam KAPITAŁ, a odsetki są minimalne.</p>',
    },
    {
      type: 'paragraph',
      html: 'Dlatego, jeśli planujesz <strong>nadpłacić kredyt</strong>, o wiele bardziej opłacalne jest zrobienie tego w pierwszych latach trwania umowy. Nadpłata 10 000 zł w pierwszym roku może przynieść ponad 15 000 zł oszczędności na odsetkach. Ta sama nadpłata w 20. roku oszczędzi Ci zaledwie 2 000 zł.',
    },
    {
      type: 'title',
      text: 'Ile pieniędzy powinienem przeznaczać na kredyt?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'KNF i doradcy finansowi zalecają, aby rata kredytu <strong>nie przekraczała 30-35% Twoich dochodów netto</strong>. Przekroczenie tego progu znacząco zwiększa ryzyko problemów ze spłatą w razie np. utraty pracy czy choroby.',
    },
    {
      type: 'title',
      text: 'Kontekst 2026: Oprocentowanie Stałe vs Zmienne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Przy wahaniach stóp procentowych, wybór między <strong>Stałą Stopą</strong> a <strong>Zmienną Stopą</strong> to strategiczna decyzja, która może kosztować tysiące złotych rocznie.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Stałe Oprocentowanie',
          description: 'Płacisz dziś nieco więcej, ale masz gwarancję, że Twoja rata nie wzrośnie przez lata.',
          points: [
            'Przewidywalna rata przez długi okres',
            'Ochrona przed wzrostem stóp procentowych',
            'Spokój ducha w niepewnych czasach',
            'Idealne przy sztywnym budżecie',
          ],
        },
        {
          title: 'Zmienne Oprocentowanie',
          description: 'Dziś może być tańsze, ale naraża Twój budżet na dużą zmienność.',
          highlight: true,
          points: [
            'Niższa rata początkowa',
            'Ryzyko wzrostu stawek WIBOR/WIRON',
            'Możliwy poważny wpływ na budżet domowy',
            'Tylko dla osób o dużej odporności na ryzyko',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Wybór zależy od Twojego profilu',
      html: '<p><strong>Wybierz Stałe jeśli:</strong> Twój budżet jest napięty, cenisz pewność i nie lubisz niemiłych niespodzianek co miesiąc.</p><p><strong>Wybierz Zmienne jeśli:</strong> Masz poduszkę finansową, wierzysz, że stopy spadną lub kredyt jest na niską kwotę/krótki czas.</p>',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Kredytowy',
    labelLoanAmount: 'Kwota Kredytu',
    labelInterestRate: 'Oprocentowanie (%)',
    labelYears: 'Okres (Lata)',
    labelMonthlyExtra: 'Nadpłata Miesięczna',
    labelMonthlyPayment: 'Rata Miesięczna',
    labelMonthCount: 'miesięcy',
    labelSavingsCard: 'Twoja Potencjalna Oszczędność',
    labelSavingsInterest: 'Odsetki',
    labelSavingsTime: 'Czas',
    labelTimelineComparison: 'Porównanie Czasu Spłaty',
    labelTimelineOriginal: 'Pierwotny Okres',
    labelTimelineOptimized: 'Okres przy Nadpłatach',
    labelCostBreakdown: 'Podsumowanie Kosztów',
    labelBorrowed: 'Pożyczone',
    labelTotalBorrowed: 'Suma Kapitału',
    labelTotalInterest: 'Suma Odsetek',
    labelAmortizationTable: 'Harmonogram Spłat',
    labelTableHeader: 'Zobacz pełną tabelę',
    labelViewAll: 'Zobacz wszystko',
    labelPaid: 'Kredyt Spłacony',
    labelTableMonth: 'Miesiąc',
    labelTableInterest: 'Odsetki',
    labelTablePrincipal: 'Kapitał',
    labelTableExtra: 'Nadpłata',
    labelTableBalance: 'Pozostało',
    labelMoreMonths: 'kolejnych miesięcy',
    labelMonth: 'Miesiąc',
    currencySymbol: 'zł',
    currencyCode: 'PLN',
    currencyLocale: 'pl-PL',
    monthPlural: 'miesięcy',
    yearPlural: 'lat',
  },
};
