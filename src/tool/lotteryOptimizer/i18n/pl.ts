import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'optymalizator-loterii-kalkulator-prawdopodobienstwa';
const title = 'Optymalizator Loterii i Kalkulator Prawdopodobieństwa';
const description = 'Przeanalizuj swoje szanse w hiszpańskiej Loterii Bożonarodzeniowej, Euromillions i Bonoloto. Oblicz optymalną liczbę kuponów i wartość oczekiwaną zakładu.';

const faqData = [
  {
    question: 'Co to jest nadzieja matematyczna w loterii?',
    answer: 'Jest to średnia wartość, jaką spodziewasz się wygrać za każde postawione euro. W prawie wszystkich loteriach nadzieja matematyczna jest ujemna (zazwyczaj tracisz 0,50€ na każde postawione 1€), co oznacza, że w dłuższej perspektywie kasyno zawsze wygrywa.',
  },
  {
    question: 'Czy lepiej grać wiele różnych numerów, czy wiele kuponów z tym samym numerem?',
    answer: 'Jeśli chcesz wygrać "cokolwiek", dywersyfikacja numerów zwiększa Twoje prawdopodobieństwo uzyskania mniejszych nagród. Jeśli celujesz w główną wygraną, granie jednym numerem daje takie samo prawdopodobieństwo, ale wyższą wygraną, jeśli trafisz.',
  },
  {
    question: 'Czy naprawdę opłaca się grać w hiszpańską Loterię Bożonarodzeniową (El Gordo)?',
    answer: 'Z czysto matematycznego punktu widzenia – nie. Zwracane jest tylko 70% zebranych środków. Ma ona jednak znacznie wyższe prawdopodobieństwo wygrania nagrody głównej (1 na 100 000) niż Euromillions (1 na 140 milionów).',
  },
  {
    question: 'Czy mogę poprawić swoje szanse za pomocą statystyk?',
    answer: 'Nie. Losowania loterii to niezależne procesy losowe. To, że dany numer wypadł wczoraj, nie ma absolutnie żadnego wpływu na to, że wypadnie dzisiaj.',
  },
  {
    question: 'Co oznacza "trudność" w tabeli porównawczej?',
    answer: 'Jest to miara tego, jak trudno jest wygrać pierwszą nagrodę. Dostępna (poniżej 200 tys.), Trudna (poniżej 20 mln), Ekstremalna (powyżej 20 mln).',
  },
];

const howToData = [
  {
    name: 'Wybierz rodzaj losowania',
    text: 'Wybierz spośród Loterii Bożonarodzeniowej, Primitiva, Euromillions lub Bonoloto.',
  },
  {
    name: 'Zdefiniuj swoją inwestycję',
    text: 'Wskaż, ile kuponów lub zakładów planujesz kupić na to losowanie.',
  },
  {
    name: 'Przeanalizuj krytyczne prawdopodobieństwa',
    text: 'Zobacz realne szanse na wygranie nagrody głównej w porównaniu z mniejszymi nagrodami.',
  },
  {
    name: 'Oceń ryzyko/zysk',
    text: 'Sprawdź nadzieję matematyczną, aby zrozumieć, ile pieniędzy statystycznie "oddajesz" za każde zainwestowane euro.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Matematyka Nadziei',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Granie w loterię to dla wielu zakup iluzji za kilka euro. Jednak za kulisami kryje się jedna z najbardziej fascynujących dziedzin matematyki: statystyka ekstremalnych prawdopodobieństw.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Loteria Bożonarodzeniowa (El Gordo)',
    description: 'Największa pula nagród na świecie. Wysokie prawdopodobieństwo wygrania czegokolwiek.',
  },
  nino: {
    name: 'Loteria Dziecięca (El Niño)',
    description: 'Trzykrotnie wyższe szanse na zwrot stawki w porównaniu z Loterią Bożonarodzeniową.',
  },
  euromillones: {
    name: 'Euromillions',
    description: 'Astronomiczne wygrane, prawie niemożliwe prawdopodobieństwo.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'Najstarsza loteria w Hiszpanii. Trudna, ale tańsza.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'Najbardziej ekonomiczna. Idealna do codziennej gry przy małym budżecie.',
  },
};

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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania': 'Źródła i odniesienia',
  ui: {
    gameTranslations,
    labelTitle: 'Optymalizator Loterii',
    labelDescription: 'Porównuj losowania, obliczaj nadzieję matematyczną i graj z głową.',
    labelSelectGame: 'Wybierz loterię',
    labelConfigurePlay: 'Skonfiguruj swoje zagranie',
    labelAdjustQuantity: 'Dostosuj liczbę kuponów, aby zobaczyć swoje realne prawdopodobieństwo.',
    labelTotalInvestment: 'Całkowita Inwestycja',
    labelTickets: 'Liczba Kuponów / Zakładów',
    labelUnits: 'szt.',
    labelExposureAnalysis: 'Analiza Ekspozycji',
    labelSelectLottery: 'Wybierz loterię, aby zobaczyć analizę ryzyka.',
    labelOptimalCutoff: 'Sugerowany Punkt Odcięcia',
    labelProbabilitySuccess: 'Prawdopodobieństwo Sukcesu',
    labelExpectedValue: 'Wartość Oczekiwana (EV)',
    labelReturnTheoretical: 'Teoretyczny zwrot za każde wykonane zagranie.',
    labelSocialReturnIndex: 'Indeks Rentowności Społecznej',
    labelLow: 'Niska',
    labelMedium: 'Średnia',
    labelHigh: 'Wysoka',
    labelComparison: 'Porównanie Nagród',
    labelLottery: 'Loteria',
    labelCost: 'Koszt',
    labelTypicalPrize: 'Typowa Nagroda',
    labelDifficulty: 'Trudność',
    labelAccessible: 'Dostępna',
    labelDifficult: 'Trudna',
    labelExtreme: 'Ekstremalna',
    labelNote: 'Uwaga: Nagrody w loteriach Navidad i El Niño są podawane za kupon (20€). Euromillions itp. to typowe kumulacje.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pl-PL',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
