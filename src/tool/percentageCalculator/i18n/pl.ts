import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'kalkulator-procentowy';
const title = 'Kalkulator Procentowy 4 w 1: Rabaty, Podwyżki i Obniżki';
const description =
  'Łatwo obliczaj procenty online za darmo. 4 narzędzia w 1: obliczanie X% z Y, różnica procentowa, dodawanie lub odejmowanie VAT, rabaty i automatyczne napiwki.';

const faqData = [
  {
    question: 'Jak działa kalkulator?',
    answer:
      'Po prostu wpisz wartości w pola odpowiedniego przypadku użycia dla Twojego problemu, a nasz kalkulator przetworzy formułę bez konieczności naciskania jakiegokolwiek przycisku obliczania.',
  },
  {
    question: 'Czy nadaje się do obliczania VAT lub podatków?',
    answer:
      'Tak, blok 4 („Dodaj lub odejmij procent”) jest zaprojektowany właśnie dla takich przypadków, jak naliczenie 23% VAT do ceny netto lub obliczenie potrącenia zaliczki na podatek dochodowy.',
  },
  {
    question: 'Czy obsługuje liczby dziesiętne i ujemne?',
    answer:
      'Oczywiście. Możesz wpisywać liczby dziesiętne (używając kropki), a kalkulator zadziała również z wartościami ujemnymi, jeśli potrzebujesz przeanalizować bilanse księgowe ze stratą.',
  },
  {
    question: 'Czy mogę kopiować wyniki?',
    answer:
      'Tak, każdy blok posiada przycisk w polu wyniku, który natychmiast kopiuje liczbę do schowka Twojego urządzenia, aby móc ją wkleić do innej aplikacji lub dokumentu.',
  },
];

const howToData = [
  {
    name: 'Zidentyfikuj swój problem matematyczny',
    text: 'Przeczytaj tytuły 4 bloków i wybierz ten, który odpowiada Twojemu zapytaniu (Np. Ile to jest 20% z 50? -> Blok 1).',
  },
  {
    name: 'Wprowadź liczby',
    text: 'Wypełnij pola „X” i „Y”. Nie martw się o kolejność, opisy w każdym bloku poprowadzą Cię wizualnie.',
  },
  {
    name: 'Skopiuj natychmiastowy wynik',
    text: 'Wynik pojawi się w czasie rzeczywistym na dole w trakcie wpisywania. Kliknij ikonę kopiowania, jeśli chcesz go przenieść gdzie indziej.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i Referencje',
  bibliography: [
    {
      name: 'Obliczanie Procentów - Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Procent',
    },
    {
      name: 'Podstawowe Pojęcia Matematyczne - Khan Academy',
      url: 'https://pl.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Procentowy 4 w 1: Opanuj Szybkie Obliczenia',
      level: 2,
    },
    {
      type: 'title',
      text: 'Do czego służy wielofunkcyjny kalkulator procentowy?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Obliczanie procentów to jedna z najczęstszych operacji matematycznych w naszym codziennym życiu. Od obliczania rabatu na wyprzedaży, przez ustalanie odpowiedniego napiwku w restauracji, aż po określanie marży zysku w biznesie czy odsetek od kredytu. Mimo że są to codzienne czynności, nie zawsze łatwo jest wykonać je w pamięci lub zapamiętać dokładny wzór.',
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator procentowy 4 w 1 grupuje najczęściej poszukiwane scenariusze. Nie musisz już szukać w Google „jak obliczyć 20 procent” czy „wzór na obliczanie procentu”. Masz cztery kluczowe operacje w jednym miejscu, w interaktywnej formie i z natychmiastowymi wynikami.',
    },
    {
      type: 'title',
      text: 'Przegląd 4 najczęstszych przypadków użycia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aby ułatwić Ci życie, podzieliliśmy narzędzie na cztery wyraźne bloki wizualne, które rozwiązują realne problemy, z jakimi borykamy się na co dzień:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Ile to jest X% z Y?',
      html: '<p><strong>Klasyczny przypadek.</strong> Przydatny do obliczania rabatów lub napiwków. Jeśli chcesz wiedzieć, ile to jest 15% z 120 zł, to narzędzie jest dla Ciebie. Formuła po prostu dzieli procent przez 100 i mnoży go przez całkowitą wartość.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Jakim procentem X jest Y?',
      html: '<p><strong>Idealny do proporcji.</strong> Jeśli zdobyłeś 45 punktów na 60 w egzaminie, jaką ocenę masz w skali 100? Ta funkcja dzieli część przez całość i mnoży przez sto, dając Ci dokładną wagę względną.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Wzrost lub Spadek Procentowy',
      html: '<p><strong>Idealny dla finansów i analityki.</strong> O ile wzrósł czynsz w porównaniu z zeszłym rokiem? Jeśli wcześniej płaciłeś 800 zł, a teraz 840 zł, ta funkcja powie Ci, że nastąpił wzrost o 5%. Mierzy wzrost lub spadek między dwiema liczbami.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Dodaj lub odejmij procent od wartości',
      html: '<p><strong>Super przydatny przy VAT.</strong> Jeśli masz cenę netto (np. 100 zł) i musisz dodać 23% VAT, ten kalkulator poda Ci bezpośrednio kwotę brutto 123 zł bez konieczności wykonywania operacji pośrednich. Analogicznie służy do naliczania bezpośredniego rabatu (np. odjęcie 20%).</p>',
    },
    {
      type: 'title',
      text: 'Powszechne mity na temat obliczania procentów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Często blokujemy się widząc duże procenty lub ułamki dziesiętne, ale istnieje kilka matematycznych „sztuczek”, które mogą ułatwić życie. Najsłynniejszą z nich jest <strong>odwracalność procentów</strong>.',
    },
    {
      type: 'tip',
      title: 'Sztuczka z odwracalnością',
      html: '<p>Czy wiedziałeś, że X% z Y to dokładnie to samo, co Y% z X? Na przykład, jeśli ktoś poprosi Cię o obliczenie 18% z 50 w pamięci, może to brzmieć skomplikowanie. Ale jeśli to odwrócisz, to 50% z 18 jest bardzo proste: to 9! Dotyczy to absolutnie każdej liczby i jest niesamowitym ułatwieniem w codziennym życiu.</p>',
    },
    {
      type: 'title',
      text: 'Dlaczego mylimy się przy obliczaniu wzrostów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeden z najczęstszych błędów zdarza się w przypadku 3: wzrost lub spadek procentowy. Wyobraźmy sobie, że akcja na giełdzie kosztuje 100 zł, spada o 50%, a następnego dnia rośnie o 50%. Intuicja mówi nam, że wraca do wartości 100 zł, ale to błędne przekonanie.',
    },
    {
      type: 'paragraph',
      html: 'Jeśli spadnie o 50% ze 100 zł, jej nowa wartość to 50 zł. Jeśli z poziomu tych 50 zł wzrośnie o 50%, wzrost wynosi połowę z 50 (25 zł). Zatem cena końcowa wyniesie 75 zł. To klasyczny przykład na to, dlaczego wzrosty i spadki procentowe nie są asymetryczne i dlaczego dynamiczne kalkulatory, takie jak ten, zapobiegają poważnym błędom finansowym.',
    },
    {
      type: 'title',
      text: 'Zastosowanie profesjonalne i akademickie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nasz interfejs jest wolny od rozpraszaczy i zaprojektowany do <strong>szybkiej pracy</strong>. Możesz mieć go w przypiętej karcie przeglądarki, sprawnie przełączać się między polami i, dzięki przyciskowi kopiowania obok wyniku, przenosić dokładne dane do Excela lub Google Sheets bez ryzyka błędów przy wpisywaniu.',
    },
    {
      type: 'list',
      items: [
        'E-commerce i sklepy stacjonarne: szybkie obliczanie ceny sprzedaży poprzez stosowanie marż handlowych i doliczanie VAT.',
        'Zarządzanie zasobami ludzkimi: ustalanie luki płacowej, potrąceń podatkowych i podwyżek wynagrodzeń w odniesieniu do wskaźnika inflacji.',
        'Edukacja akademicka: wykładowcy wyrównujący oceny lub studenci kierunków ścisłych analizujący odchylenia w swoich eksperymentach.',
        'Marketing cyfrowy: pomiar CTR (Click Through Rate), ROAS (Return on Ad Spend) lub współczynnika konwersji w eCommerce.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Procentowy',
    labelCase1Title: 'Przypadek 1',
    labelCase1Question: 'Ile to jest X% z Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Wzór: (X / 100) × Y',
    labelCase2Title: 'Przypadek 2',
    labelCase2Question: 'Jakim procentem X jest Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Wzór: (X / Y) × 100',
    labelCase3Title: 'Przypadek 3',
    labelCase3Question: 'Różnica procentowa między dwiema wartościami',
    labelCase3Placeholder1: 'Wartość 1',
    labelCase3Placeholder2: 'Wartość 2',
    labelCase3Formula: 'Wzór: ((Wartość 2 - Wartość 1) / |Wartość 1|) × 100',
    labelCase4Title: 'Przypadek 4',
    labelCase4Question: 'Dodaj lub odejmij procent od wartości',
    labelCase4Placeholder1: 'Wartość',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Wzór: Wartość ± (Wartość × (% / 100))',
    labelCase4AddLabel: 'Suma (Wartość + %)',
    labelCase4SubtractLabel: 'Różnica (Wartość - %)',
    labelResult: 'Wynik',
    labelDifference: 'Różnica',
    labelCopyTooltip: 'Kopiuj wynik',
    labelFormula: 'Wzór',
    percentSymbol: '%',
  },
};
