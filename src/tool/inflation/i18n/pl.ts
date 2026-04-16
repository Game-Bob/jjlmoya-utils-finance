import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflacja-hiszpania';
const title = 'Kalkulator Inflacji w Hiszpanii: Historyczna Wartość Pieniądza';
const description =
  'Dowiedz się, ile Twoje pesety byłyby warte dzisiaj lub jak bardzo wzrosły koszty życia od 1980 roku. Historyczne dane IPC dla Hiszpanii zaktualizowane do 2026 roku.';

const faqData = [
  {
    question: 'Co to jest IPC i jak się go oblicza?',
    answer:
      'Wskaźnik Cen Konsumpcyjnych (IPC) mierzy zmiany cen koszyka dóbr i usług reprezentatywnego dla konsumpcji w Hiszpanii. Oblicza się go, porównując koszt tego koszyka w różnych okresach.',
  },
  {
    question: 'O ile spadła wartość pieniądza od 1980 roku?',
    answer:
      '1 000 peset z 1980 roku odpowiada sile nabywczej dzisiejszych ok. 60€. Pieniądz stracił ponad 90% swojej wartości w ciągu tych 40+ lat z powodu skumulowanej inflacji.',
  },
  {
    question: 'Dlaczego moje oszczędności tracą na wartości, gdy ich nie ruszam?',
    answer:
      'Jeśli inflacja wynosi 3% rocznie, a Twoje konto daje 0% odsetek, tracisz 3% siły nabywczej każdego roku. Aby utrzymać realną wartość, oszczędności muszą generować co najmniej taką samą stopę zwrotu jak inflacja.',
  },
  {
    question: 'Kiedy w Hiszpanii była najwyższa inflacja?',
    answer:
      'Lata 80. były najbardziej inflacyjnym okresem, ze stopami dwucyfrowymi (nawet 15%). Ceny zmieniały się drastycznie z miesiąca na miesiąc. Od wprowadzenia euro (2002) inflacja była bardziej kontrolowana, z wyjątkiem okresu 2021-2023.',
  },
  {
    question: 'Jak inflacja wpływa na moje oszczędności?',
    answer:
      'Inflacja działa jak „cichy podatek”. Jeśli inflacja wynosi 5%, a Twoje pieniądze leżą w materacu, pod koniec roku będziesz mógł kupić o 5% mniej produktów. Inwestowanie jest kluczowe, aby przeciwdziałać temu efektowi.',
  },
];

const howToData = [
  {
    name: 'Wybierz rok bazowy',
    text: 'Wybierz datę, od której chcesz obliczyć wartość pieniądza (dostępne od 1980 do 2026 roku).',
  },
  {
    name: 'Wprowadź kwotę',
    text: 'Wpisz kwotę w pesetach (dla dawnych dat) lub w euro, którą chcesz porównać.',
  },
  {
    name: 'Wybierz rok końcowy',
    text: 'Zdefiniuj do którego momentu chcesz zobaczyć ewolucję siły nabywczej.',
  },
  {
    name: 'Przeanalizuj wynik realny',
    text: 'Sprawdź ekwiwalent siły nabywczej i procent skumulowanej inflacji w danym okresie.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania o inflację',
  faq: faqData,
  bibliographyTitle: 'Oficjalne źródła i odniesienia',
  bibliography: [
    {
      name: 'INE: Wskaźnik Cen Konsumpcyjnych (Hiszpania)',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'Banco de España: Analiza inflacji',
      url: 'https://www.bde.es/',
    },
    {
      name: 'EBC: Polityka pieniężna i ceny',
      url: 'https://www.ecb.europa.eu/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Historyczny Kalkulator Inflacji: Zrozum realną wartość swoich pieniędzy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflacja to „cichy podatek”, który zżera Twoje oszczędności rok po roku. Czy wiesz, ile Twoje pieniądze straciły na wartości od 1980 roku? Ile naprawdę kosztuje kawa, za którą 20 lat temu płaciłeś 300 peset?',
    },
    {
      type: 'title',
      text: 'Inflacja: Cichy podatek od Twojego majątku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Inflacja</strong> to trwały i powszechny wzrost cen. Choć wydaje się zjawiskiem technicznym, jego wpływ na realną gospodarkę jest bezpośredni: zmniejsza ilość dóbr, które możesz kupić za te same pieniądze, niszcząc oszczędności całego życia, jeśli nie zostaną podjęte środki ochrony.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Rekord historyczny 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Szczyt cen 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Cel stabilności',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Podstawowe pojęcia finansowe',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IPC',
          definition: 'Wskaźnik podsumowujący zmiany cen podstawowego koszyka konsumpcyjnego.',
        },
        {
          term: 'Siła nabywcza',
          definition: 'Realna zdolność nabywcza waluty w danym momencie.',
        },
        {
          term: 'Deflacja',
          definition: 'Powszechny spadek cen, który może paraliżować inwestycje.',
        },
        {
          term: 'Stagflacja',
          definition: 'Scenariusz wysokiej inflacji połączony ze stagnacją gospodarczą.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kluczowe momenty gospodarcze i porównanie',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kryzys lat 80.',
          description: 'Okres charakteryzujący się inflacją dwucyfrową i dużą niestabilnością pracy.',
          points: [
            'Ekstremalnie wysokie stopy procentowe',
            'Szybka utrata wartości pesety',
            'Pensje pożerane przez ceny',
          ],
        },
        {
          title: 'Inflacja pandemii: 2021 do 2023',
          description: 'Nagły wzrost spowodowany kosztami energii i problemami w łańcuchu dostaw.',
          highlight: true,
          points: [
            'Bezpośredni wpływ na koszyk zakupowy',
            'Podwyżka stóp EBC w celu zahamowania konsumpcji',
            'Powolne odzyskiwanie siły nabywczej',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Produkt lub wskaźnik', 'Wartość w 1980 (Szacowana)', 'Wartość w 2026 (Prognozowana)', 'Zmiana'],
      rows: [
        ['Bochenek chleba', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Kawa w lokalu', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Bilet do kina', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Miesięczna płaca minimalna', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Niebezpieczeństwo trzymania gotówki',
      html: 'Trzymanie pieniędzy w materacu lub na nieoprocentowanych kontach to gwarantowana strata kapitału. Średnia inflacja 3% zmniejsza wartość Twoich oszczędności o połowę w mniej niż 25 lat.',
    },
    {
      type: 'title',
      text: 'Porady, jak chronić swoje oszczędności',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Strategie inwestycyjne',
      items: [
        {
          pro: 'Aktywa realne: Nieruchomości zazwyczaj zyskują na wartości wraz z inflacją.',
          con: 'Niska płynność i wysokie koszty wejścia.',
        },
        {
          pro: 'Giełda i fundusze: Stopy zwrotu, które w długim terminie zazwyczaj przewyższają IPC.',
          con: 'Woatylność i ryzyko rynkowe w krótkim terminie.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Zdrowe nawyki finansowe',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Okresowo sprawdzaj swoje wydatki, aby wykryć ukryte podwyżki.',
        'Dywersyfikuj oszczędności w różne rodzaje aktywów.',
        'Rozważ obligacje skarbowe powiązane z inflacją.',
        'Używaj narzędzi obliczeniowych, aby umieścić oferty i pensje w odpowiednim kontekście.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ostrzeżenie przed ujemnym procentem składanym',
      html: 'Inflacja działa jak odwrotny procent składany. Każdego roku procent straty jest stosowany do już obniżonej wartości, co przyspiesza utratę bogactwa, jeśli nie podejmiesz działań.',
    },
    {
      type: 'summary',
      title: 'Kluczowe wnioski',
      items: [
        'IPC to tylko średnia; Twoja osobista inflacja zależy od Twoich nawyków.',
        'Inwestowanie nie jest opcjonalne, jeśli chcesz zachować realną wartość swojej pracy.',
        'Kalkulatory inflacji są niezbędne do zrozumienia długoterminowych umów.',
      ],
    },
    {
      type: 'message',
      title: 'Przejmij kontrolę nad swoją ekonomią',
      html: 'Nasz kalkulator korzysta z oficjalnych danych INE, aby zaoferować Ci najbardziej precyzyjny obraz ekonomicznej przeszłości i teraźniejszości Hiszpanii.',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Inflacji Hiszpania',
    labelInitialAmount: 'Pieniądze początkowe',
    labelInitialYear: 'W roku',
    labelFinalAmount: 'Ekwiwalent dzisiaj',
    labelFinalYear: 'Rok 2026',
    labelInflationRate: 'Inflacja skumulowana',
    labelCalculatedOn: 'Obliczenia wykonane przy użyciu oficjalnych danych INE do 2025 roku i prognoz na koniec 2026 roku.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pl-PL',
    labelYearSelect: 'W roku',
    labelIn: 'W',
    labelEquivalentToday: 'odpowiada dzisiaj kwocie',
    labelInflationAccumulated: 'Inflacja skumulowana',
    labelYear: 'Rok',
  },
};
