import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'kalkulator-reguly-4-procent-fire';
const title = 'Kalkulator FIRE: Reguła 4% dla Twojej wolności finansowej';
const description = 'Oblicz swoją magiczną liczbę niezależności finansowej, korzystając z reguły 4%. Zaplanuj wcześniejszą emeryturę i zwizualizuj swoją drogę do wolności ekonomicznej.';

const faqData = [
  {
    question: 'Czym jest reguła 4%?',
    answer: 'Reguła 4% to strategia wypłat oparta na badaniu Trinity Study, która wskazuje, że możesz wypłacać 4% swojego majątku w pierwszym roku emerytury, dostosowując tę kwotę o inflację w kolejnych latach, bez wyczerpania funduszy przez 30 lat.',
  },
  {
    question: 'Co to jest FIRE?',
    answer: 'FIRE to skrót od Financial Independence, Retire Early (Niezależność Finansowa, Wczesna Emerytura). To ruch dążący do osiągnięcia wolności ekonomicznej poprzez agresywne połączenie oszczędzania i inteligentnego inwestowania.',
  },
  {
    question: 'Jaka jest moja magiczna liczba?',
    answer: 'Twoja magiczna liczba to całkowity majątek, który musisz zgromadzić, aby móc żyć z wypracowanych zysków bez konieczności pracy. Oblicza się ją, dzieląc roczne wydatki przez bezpieczną stopę wypłat (zwykle 4%).',
  },
  {
    question: 'Jaka jest różnica między Lean, Barista i Fat FIRE?',
    answer: 'Lean FIRE to życie przy minimalnych wydatkach (70% obecnych wydatków), Barista FIRE to praca na pół etatu, podczas gdy zyski pokrywają resztę (50% wydatków), a Fat FIRE to posiadanie wystawnego stylu życia (150% wydatków).',
  },
  {
    question: 'Czy reguła 4% jest realistyczna?',
    answer: 'Reguła 4% ma historyczne prawdopodobieństwo sukcesu na poziomie 95% w portfelu 50/50 akcje-obligacje przez 30 lat. Nie uwzględnia jednak ryzyka sekwencji stóp zwrotu i opiera się głównie na danych z rynku amerykańskiego.',
  },
];

const howToData = [
  {
    name: 'Oblicz swoje miesięczne wydatki',
    text: 'Przeanalizuj, ile naprawdę wydajesz każdego miesiąca, wliczając mieszkanie, jedzenie, usługi i rozrywkę.',
  },
  {
    name: 'Wybierz bezpieczną stopę wypłat',
    text: 'Reguła 4% jest standardem, ale możesz ją dostosować w zakresie od 2,5% (bardziej konserwatywnie) do 6% (bardziej agresywnie) w zależności od tolerancji na ryzyko.',
  },
  {
    name: 'Wprowadź swój obecny majątek',
    text: 'Zsumuj wszystkie swoje inwestycje, oszczędności i aktywa generujące dochód pasywny.',
  },
  {
    name: 'Zwizualizuj swoje postępy',
    text: 'Obserwuj wykres wzrostu i kamienie milowe wolności (Lean, Barista, Fat FIRE), aby zrozumieć, kiedy osiągniesz swój cel.',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Reguła 4%: Święty Graal wczesnej emerytury',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dowiedz się, jak obliczyć majątek potrzebny na życie z renty na zawsze. <strong>Reguła 4%</strong> wywodzi się z badania Trinity Study, przeprowadzonego w 1998 roku przez trzech profesorów finansów. Przeanalizowali oni dane historyczne od 1926 roku, aby określić, jaki procent można wypłacać rocznie bez wyczerpania portfela w ciągu 30 lat.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Historyczny sukces' },
        { value: '50/50', label: 'Mix Akcje/Obligacje' },
        { value: '30', label: 'Lat horyzontu' },
        { value: '4%', label: 'Bezpieczna wypłata' },
      ],
    },
    {
      type: 'title',
      text: 'Czym jest ruch FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE to akronim od Financial Independence, Retire Early (Niezależność Finansowa, Wczesna Emerytura).',
        'Dąży do wolności wyboru tego, co robić ze swoim czasem, bez ograniczeń finansowych.',
        'Opiera się na optymalizacji oszczędności i inteligentnym inwestowaniu.',
        'Celem jest, aby Twoje aktywa generowały wystarczające przepływy pieniężne na pokrycie wydatków.',
      ],
    },
    {
      type: 'title',
      text: 'Rodzaje wolności finansowej',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Minimalistyczny styl życia. Pokrywa tylko podstawowe koszty przetrwania.',
          points: ['Ekstremalne oszczędzanie', 'Bardzo niskie wydatki', 'Skromna wolność'],
        },
        {
          title: 'Barista FIRE',
          description: 'Sytuacja hybrydowa, w której inwestycje pokrywają połowę wydatków.',
          points: ['Praca dla przyjemności', 'Ubezpieczenie społeczne zapewnione', 'Mniejszy stres'],
        },
        {
          title: 'Fat FIRE',
          description: 'Emerytura z dużym budżetem, który pozwala na luksusy i podróże.',
          points: ['Wysoki majątek', 'Zero ograniczeń', 'Dziedzictwo rodzinne'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak korzystać z naszego kalkulatora FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Śledzenie wydatków:</strong> Przeanalizuj swoje rzeczywiste wydatki z ostatnich 12 miesięcy.',
        '<strong>Definicja SWR:</strong> Wybierz bezpieczną stopę wypłat zgodnie ze swoim ryzykiem.',
        '<strong>Obecny majątek:</strong> Wprowadź wartość swoich obecnych inwestycji.',
        '<strong>Zdolność oszczędzczania:</strong> Zaprognozuj, ile czasu zostało Ci do celu.',
        '<strong>Wizualizacja graficzna:</strong> Przeanalizuj wykres wzrostu swojego bogactwa.',
      ],
    },
    {
      type: 'title',
      text: 'Analiza reguły 4%',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Zalety',
          description: 'Dlaczego reguła 4% działa',
          points: [
            'Prostota matematyczna dla szybkiego planowania.',
            'Oparta na danych historycznych z niemal stulecia.',
            'Możliwość dostosowania do każdego poziomu wydatków.',
          ],
        },
        {
          title: 'Ograniczenia',
          description: 'Czego nie obejmuje reguła 4%',
          points: [
            'Nie uwzględnia ryzyka sekwencji stóp zwrotu.',
            'Oparta głównie na rynku amerykańskim.',
            'Ignoruje drastyczne zmiany w lokalnych podatkach.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Krytyczny czynnik: Inflacja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pamiętaj, że 1000 zł dzisiaj nie kupi tego samego w przyszłości. Kluczowe jest stosowanie realnych stóp zwrotu (po odliczeniu inflacji), aby Twoje prognozy zachowały dzisiejszą siłę nabywczą. Reguła 4% zakłada, że co roku dostosowujesz wypłaty o inflację.',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator FIRE: Reguła 4%',
    labelDescription: 'Oblicz swoją magiczną liczbę niezależności finansowej za pomocą reguły 4% i zwizualizuj swoje kamienie milowe do wolności.',
    labelMonthlyExpenses: 'Miesięczne wydatki',
    labelSWR: 'Stopa wypłat (SWR)',
    labelCurrentWorth: 'Obecny majątek',
    labelMonthlySavings: 'Zdolność oszczędzania miesięcznie',
    labelAnnualReturn: 'Szacowany zwrot (netto)',
    labelFreedomMilestones: 'Kamienie milowe wolności',
    labelLeanFIRE: 'Lean FIRE (70% przetrwania)',
    labelBaristaFIRE: 'Barista FIRE (50% dochodów)',
    labelFatFIRE: 'Fat FIRE (150% luksusu)',
    labelMagicNumber: 'Twoja magiczna liczba do bycia wolnym',
    labelMagicNumberDesc: 'Kapitał potrzebny na życie z renty',
    labelTimeRemaining: 'Czas do wolności finansowej',
    labelTimeRemainingFormat: 'Brakuje Ci {years} lat i {months} miesięcy',
    labelAlreadyFI: 'Osiągnąłeś już wolność finansową!',
    labelUnachievable: 'Cel nieosiągalny przy tym oszczędzaniu',
    labelHiddenCostsChecklist: 'Checklista ukrytych kosztów',
    labelHealth: 'Ubezpieczenie zdrowotne (+200 zł)',
    labelTaxes: 'Podatki (+150 zł)',
    labelHome: 'Utrzymanie domu (+100 zł)',
    labelTravel: 'Podróże i rozrywka (+300 zł)',
    labelEmergency: 'Fundusz awaryjny (+100 zł)',
    labelSubscriptions: 'Subskrypcje (+50 zł)',
    labelAdded: 'Dodano:',
    labelSavePlan: 'Zapisz plan',
    labelSWRTooltip: 'Safe Withdrawal Rate: Procent Twoich oszczędności, który możesz wypłacać co roku bez ryzyka wyczerpania pieniędzy.',
    labelReturnTooltip: 'Roczny zwrot z rynku (już po odliczeniu inflacji). Historyczny standard to 7%.',
    currencySymbol: 'zł',
    currencyCode: 'PLN',
    currencyLocale: 'pl-PL',
  },
};
