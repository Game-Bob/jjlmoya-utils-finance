import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Oferta A",
  labelScenarioB: "Oferta B",
  labelScenarioName: "Nazwa oferty",
  labelCurrency: "Waluta",
  labelApproximateRates:
    "Przybliżone współczynniki planistyczne, nie kursy na żywo.",
  labelPrincipal: "Pożyczona kwota",
  labelTerm: "Okres spłaty",
  labelMonths: "miesięcy",
  labelInputBasis: "Jaką informację znasz?",
  labelAnnualRate: "Nominalna stopa roczna",
  labelMonthlyPayment: "Znana rata miesięczna",
  labelUpfrontFees: "Opłaty początkowe",
  labelMonthlyFees: "Opłaty miesięczne",
  labelFinalFees: "Opłata końcowa",
  labelOfferNameA: "Oferta A",
  labelOfferNameB: "Oferta B",
  labelRateMode: "Znam oprocentowanie",
  labelPaymentMode: "Znam ratę",
  labelPreset: "Rozpocznij porównanie",
  labelPresetBalanced: "Zrównoważone oferty",
  labelPresetLowFee: "Niska stopa z opłatami",
  labelPresetLongTerm: "Dłuższy okres",
  labelReset: "Zresetuj wartości",
  labelCopy: "Kopiuj porównanie",
  labelCopied: "Porównanie skopiowane",
  labelEffectiveApr: "Efektywny koszt roczny",
  labelNominalRate: "Stopa nominalna",
  labelMonthlyPaymentResult: "Rata miesięczna",
  labelTotalPaid: "Łącznie zapłacone",
  labelTotalFees: "Opłaty w scenariuszu",
  labelFinanceCost: "Koszt ponad kapitał",
  labelNetCashReceived: "Otrzymana kwota po opłatach początkowych",
  labelWinner: "Która oferta kosztuje mniej?",
  labelLowerCost: "Niższy koszt efektywny",
  labelHigherCost: "Wyższy koszt efektywny",
  labelTie: "Prawie równo",
  labelNeedValidInputs: "Potrzebne są prawidłowe dane",
  labelInvalidPrincipal:
    "Pożyczona kwota musi być większa od zera i od opłat początkowych.",
  labelInvalidTerm: "Użyj całkowitego okresu od 1 do 600 miesięcy.",
  labelInvalidFees: "Opłaty nie mogą być ujemne.",
  labelInvalidPayment:
    "Wpisz dodatnią ratę, która spłaci otrzymaną kwotę netto.",
  labelInvalidRate: "Użyj nominalnej stopy rocznej od 0% do 100%.",
  labelNoComparison: "Uzupełnij obie oferty, aby je porównać.",
  labelTimeline: "Harmonogram płatności",
  labelStart: "Początek",
  labelMonthly: "Co miesiąc",
  labelEnd: "Ostatni miesiąc",
  labelFormula: "Jak działa porównanie",
  labelFormulaText:
    "Efektywny koszt roczny to zannualizowana stopa miesięczna, która zrównuje otrzymaną kwotę ze zdyskontowanymi płatnościami i opłatami.",
  labelApproximation:
    "Szacunek zakłada równe raty miesięczne, brak karencji i tylko wpisane opłaty. Nie zastępuje oficjalnego APR kredytodawcy.",
  labelScenarioSummary: "Podsumowanie scenariusza",
  currencyCode: "PLN",
  currencyLocale: "pl-PL",
};

const faq = [
  {
    question:
      "Jaka jest różnica między stopą procentową a efektywnym kosztem rocznym?",
    answer:
      "Nominalna stopa opisuje odsetki od salda. Efektywny koszt roczny uwzględnia także kwotę i moment pobrania opłat początkowych, miesięcznych i końcowych.",
  },
  {
    question: "Czy mogę podać ratę miesięczną zamiast stopy?",
    answer:
      "Tak. Wybierz znaną ratę miesięczną dla danej oferty. Kalkulator wyznaczy stopę miesięczną zgodną z otrzymaną kwotą, płatnościami i opłatami.",
  },
  {
    question: "Która oferta jest tańsza?",
    answer:
      "Najpierw porównaj efektywny koszt roczny, a potem łączną kwotę zapłaconą i otrzymaną kwotę. Niższy procent może dać wyższy koszt całkowity przy innej kwocie lub długości spłaty.",
  },
  {
    question: "Czy to oficjalny APR kredytodawcy?",
    answer:
      "Nie. To przejrzysty szacunek oparty na Twoich danych. Kredytodawcy i przepisy mogą inaczej uwzględniać podatki, ubezpieczenia, terminy płatności i koszty.",
  },
];

const howTo = [
  {
    name: "Podaj kwotę i okres",
    text: "Wpisz kwotę, którą otrzymasz, oraz liczbę rat miesięcznych dla każdej oferty.",
  },
  {
    name: "Wybierz znaną informację",
    text: "Podaj nominalną stopę roczną albo ratę miesięczną, zależnie od danych oferty.",
  },
  {
    name: "Dodaj wszystkie opłaty",
    text: "Uwzględnij opłaty początkowe, miesięczne i końcowe, aby odwzorować pełny przepływ pieniędzy.",
  },
  {
    name: "Odczytaj porównanie",
    text: "Użyj efektywnego kosztu rocznego, a potem sprawdź sumę zapłaconą i otrzymaną przed decyzją.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kalkulator scenariuszy APR pożyczki",
    description:
      "Porównuje dwa scenariusze pożyczki z oprocentowaniem, ratami i opłatami.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "PLN" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Porównanie dwóch ofert pożyczki",
    description:
      "Modeluj przepływy dwóch pożyczek i porównuj ich efektywny koszt roczny.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "kalkulator-scenariuszy-apr-pozyczki",
  title: "Kalkulator scenariuszy APR pożyczki",
  description:
    "Porównaj dwie oferty pożyczki z oprocentowaniem, harmonogramem rat i opłatami, aby oszacować efektywny koszt roczny.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Porównaj pożyczki według efektywnego kosztu rocznego",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Niska reklamowana stopa może ukrywać opłatę przygotowawczą, miesięczną opłatę serwisową albo koszt końcowy. Ten kalkulator zamienia szczegóły dwóch ofert w porównywalne scenariusze przepływów pieniężnych.</p>",
    },
    { type: "title", text: "Co obejmuje szacunek", level: 3 },
    {
      type: "paragraph",
      html: "<p>Dla każdej oferty podaj kwotę, okres spłaty, nominalną stopę lub znaną ratę oraz opłaty pobierane w różnych momentach. Kalkulator znajduje stopę miesięczną równoważącą otrzymaną kwotę ze zdyskontowanymi płatnościami i opłatami, a następnie ją annualizuje.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Cena kredytu jest więc szersza niż sama stopa procentowa. Wynik jest szacunkiem, ponieważ oficjalny APR może zależeć od lokalnych zasad i dodatkowych założeń.</p>",
    },
    { type: "title", text: "Jak czytać wynik", level: 3 },
    {
      type: "list",
      items: [
        "Porównuj efektywny koszt roczny przy podobnej kwocie i okresie.",
        "Sprawdź łączną kwotę zapłaconą, aby ocenić wpływ gotówkowy.",
        "Zobacz kwotę otrzymaną po opłatach początkowych.",
        "Użyj harmonogramu, aby zobaczyć moment każdego kosztu.",
      ],
    },
    {
      type: "tip",
      title: "Dokument kredytodawcy jest ostatecznym punktem odniesienia",
      html: "<p>Przy prawdziwej umowie porównaj oficjalny APR przy tych samych założeniach. Zapytaj o ubezpieczenia, podatki, zmienne stopy, koszty wcześniejszej spłaty i nieujęte opłaty.</p>",
    },
    { type: "title", text: "Ograniczenia scenariusza", level: 3 },
    {
      type: "paragraph",
      html: "<p>Narzędzie zakłada równe raty miesięczne, brak karencji oraz opłaty na początku, w trakcie okresu lub w ostatnim miesiącu. Nie potwierdza zdolności, zgody, legalności ani oficjalnego APR.</p>",
    },
  ],
};
