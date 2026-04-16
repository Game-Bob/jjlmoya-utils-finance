import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'procent-skladany';
const title = 'Kalkulator Procentu Składanego: Wizualizuj swoje przyszłe bogactwo';
const description =
  'Odkryj, jak małe inwestycje zamieniają się w wielkie fortuny. Najlepsze narzędzie do planowania wolności finansowej i emerytury.';

const faqData = [
  {
    question: 'Co to jest procent składany?',
    answer:
      'To odsetki naliczane od kapitału początkowego oraz od zgromadzonych odsetek z poprzednich okresów. Powoduje to wykładniczy wzrost inwestycji w czasie.',
  },
  {
    question: 'Jaka jest różnica między procentem prostym a składanym?',
    answer:
      'W procencie prostym odsetki naliczane są tylko od kapitału początkowego. W składanym odsetki są reinwestowane, co oznacza, że „Twoje odsetki zarabiają kolejne odsetki”.',
  },
  {
    question: 'Co to jest „Reguła 72”?',
    answer:
      'To szybki wzór pozwalający oszacować, po jakim czasie inwestycja podwoi swoją wartość: podziel 72 przez roczną stopę zwrotu. Na przykład przy 8% rocznie podwoisz swoje pieniądze w 9 lat.',
  },
  {
    question: 'Dlaczego ważne jest, aby zacząć inwestować wcześnie?',
    answer:
      'Ze względu na efekt wykładniczy, najważniejszym czynnikiem nie jest kwota oszczędności, ale czas. Rozpoczęcie inwestowania kilka lat wcześniej może przynieść znacznie większy majątek końcowy dzięki mechanizmowi kapitalizacji.',
  },
];

const howToData = [
  {
    name: 'Wprowadź kapitał początkowy',
    text: 'Wpisz kwotę, od której zaczniesz swój plan inwestycyjny.',
  },
  {
    name: 'Określ regularne wpłaty',
    text: 'Wskaż, ile pieniędzy będziesz dodatkowo oszczędzać i inwestować co miesiąc lub co rok.',
  },
  {
    name: 'Oszacuj roczną stopę zwrotu',
    text: 'Wprowadź procentowy roczny zysk, jakiego się spodziewasz (np. 7% dla historycznego indeksu S&P 500).',
  },
  {
    name: 'Dostosuj horyzont czasowy',
    text: 'Wybierz, przez ile lat będziesz utrzymywać inwestycję, aby zobaczyć wykładniczy wzrost Twojego kapitału.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i referencje',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Procent składany - Wikipedia',
      url: 'https://pl.wikipedia.org/wiki/Procent_składany',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Magia procentu składanego: Buduj swój majątek wykładniczo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein nazwał go "ósmym cudem świata". <strong>Procent składany</strong> to najpotężniejszy mechanizm generowania bogactwa w dłuższym terminie. Nie musisz być ekspertem finansowym, aby z niego korzystać: potrzebujesz tylko czasu, cierpliwości i zainwestowanych pieniędzy.',
    },
    {
      type: 'title',
      text: 'Procent prosty vs Składany: Metafora kuli śnieżnej',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wyobraź sobie, że masz kulę śnieżną na szczycie góry. <strong>Procent prosty</strong> jest jak spuszczanie tej kuli i ręczne dokładanie do niej śniegu co metr, aby rosła. <strong>Procent składany</strong> jest jak pozwolenie kuli, by toczyła się sama: sama zbiera śnieg, a im większa się staje, tym większą ma powierzchnię, by zbierać <em>jeszcze więcej</em> śniegu przy każdym obrocie.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Procent prosty',
          description: 'Odsetki naliczane są zawsze tylko od kapitału początkowego.',
          points: [
            'Wzór: Kapitał × Stopa × Czas',
            'Wzrost liniowy i przewidywalny',
            'Stosowany w pożyczkach krótkoterminowych',
            'Brak reinwestycji zysków',
          ],
        },
        {
          title: 'Procent składany',
          description: 'Odsetki są dodawane do kapitału i generują nowe odsetki.',
          highlight: true,
          points: [
            'Wzór: Kapitał × (1 + Stopa)^Czas',
            'Przyspieszony wzrost wykładniczy',
            'Podstawa każdej inwestycji długoterminowej',
            'Twoje zyski generują kolejne zyski',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Matematycznie Twoje zyski generują nowe zyski. W pierwszych latach proces wydaje się powolny, ale po przekroczeniu "punktu zwrotnego" krzywa gwałtownie rośnie w górę. To właśnie wtedy powstają prawdziwe fortuny.',
    },
    {
      type: 'title',
      text: 'Dlaczego czas jest Twoim największym sprzymierzeńcem?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decydującym czynnikiem nie jest kwota, którą inwestujesz, ale <strong>liczba lat, przez które pozwalasz jej rosnąć</strong>. Rozpoczęcie inwestowania 10 lat wcześniej może przynieść majątek końcowy 2 lub 3 razy większy, nawet jeśli łączna kwota wpłat będzie mniejsza. Ten efekt wykładniczy jest powodem, dla którego młodzi inwestorzy mają bezkonkurencyjną przewagę.',
    },
    {
      type: 'tip',
      title: 'Reguła 72',
      html: '<p>Podziel 72 przez swoją roczną stopę zwrotu, aby dowiedzieć się, po ilu latach <strong>podwoisz swoje pieniądze</strong>.</p><p><em>Przykład: Przy 8% podwajasz co 9 lat (72/8 = 9).</em></p><p>Ten magiczny wzór działa dla każdej stopy zwrotu i pomaga szybko oszacować wzrost Twoich inwestycji.',
    },
    {
      type: 'tip',
      title: 'Rada na rok 2026',
      html: '<p>Inflacja pozostaje istotnym czynnikiem. Upewnij się, że Twoja stopa zwrotu netto wynosi co najmniej 2-3% rocznie, aby nie tracić siły nabywczej. Inwestuj w aktywa, które rosną szybciej niż inflacja.',
    },
    {
      type: 'title',
      text: 'Częstotliwość kapitalizacji: Czy ma znaczenie?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Odsetki mogą być kapitalizowane rocznie, półrocznie, kwartalnie, miesięcznie lub nawet codziennie. Im <strong>częstsza kapitalizacja</strong>, tym większy efekt procentu składanego. Ten sam kapitał przy tej samej stopie wzrośnie bardziej, jeśli odsetki będą dopisywane co miesiąc niż raz w roku.',
    },
  ],
  ui: {
    labelTitle: 'Symulator Inwestycji',
    labelRealtime: 'Czas rzeczywisty',
    labelInitial: 'Wpłata początkowa',
    labelMonthly: 'Wpłata miesięczna',
    labelRate: 'Stopa roczna',
    labelYears: 'Lata',
    labelMyMoney: 'Twoje pieniądze',
    labelProfit: 'Zysk (Odsetki)',
    labelTotal: 'Suma zgromadzona',
    labelYear: 'Rok',
    labelPrincipal: 'Twoje pieniądze (Kapitał)',
    labelInterest: 'Wygenerowane odsetki',
    insightPrefix: '[TIP] W roku ',
    insightSuffix:
      ', Twoje roczne wygenerowane odsetki przewyższą Twoje wpłaty. Pieniądze pracują już ciężej niż Ty!',
    currencySymbol: 'zł',
    currencyCode: 'PLN',
    currencyLocale: 'pl-PL',
  },
};
