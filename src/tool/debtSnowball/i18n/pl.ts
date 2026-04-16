import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'metoda-kuli-snieznej-kalkulator-dlugow';
const title = 'Kalkulator Metody Kuli Śnieżnej: Plan Spłaty Zadłużenia 2026';
const description = 'Oblicz datę swojej wolności finansowej za pomocą metody kuli śnieżnej Dave’a Ramseya. Uporządkuj swoje długi i zwizualizuj miesięczny plan spłat.';

const faqData = [
  {
    question: 'Co to jest metoda kuli śnieżnej?',
    answer: 'Jest to strategia spłaty zadłużenia polegająca na spłacaniu długów w kolejności od najmniejszego do największego salda, niezależnie od stopy procentowej. Koncentruje się na psychologicznym zwycięstwie płynącym z szybkiego pozbywania się małych zobowiązań.',
  },
  {
    question: 'Dlaczego nie sortować według stopy procentowej (Metoda Lawiny)?',
    answer: 'Matematycznie spłacanie najpierw najwyższych odsetek pozwala zaoszczędzić więcej pieniędzy. Jednak wiele osób poddaje się, bo nie widzi natychmiastowych efektów. Kula Śnieżna priorytetyzuje motywację.',
  },
  {
    question: 'Czy powinienem mieć oszczędności przed rozpoczęciem planu?',
    answer: 'Zaleca się posiadanie "Początkowego Funduszu Awaryjnego" (około 1000 €) przed atakiem na długi. Zapobiega to konieczności ponownego użycia karty kredytowej w razie nieprzewidzianych wydatków.',
  },
  {
    question: 'Jakie długi powinienem uwzględnić w kalkulatorze?',
    answer: 'Wszystkie długi konsumenckie: karty kredytowe, pożyczki gotówkowe, kredyty samochodowe, zaległe rachunki. Hipotekę zazwyczaj zostawia się na późniejszy etap ze względu na jej dużą wartość.',
  },
];

const howToData = [
  {
    name: 'Wypisz swoje długi',
    text: 'Zapisz wszystkie swoje długi, podając aktualne saldo pozostałe do spłaty oraz minimalną miesięczną ratę.',
  },
  {
    name: 'Zdefiniuj dodatkowy budżet',
    text: 'Oblicz, ile dodatkowych pieniędzy możesz przeznaczyć każdego miesiąca ponad minimalne wpłaty.',
  },
  {
    name: 'Uporządkuj i ustal priorytety',
    text: 'Kalkulator automatycznie posortuje długi od najmniejszego do największego salda. Płać minimum we wszystkich prócz najmniejszego.',
  },
  {
    name: 'Uruchom kaskadę',
    text: 'Gdy spłacisz najmniejszy dług, weź wszystkie pieniądze, które na niego przeznaczałeś i dodaj je do spłaty kolejnego długu na liście.',
  },
];

const bibliographyData = [
  {
    name: 'Investopedia — Debt Snowball vs. Debt Avalanche',
    url: 'https://www.investopedia.com/',
  },
  {
    name: 'Harvard Business Review — Research on Debt Payoff Strategies',
    url: 'https://hbr.org/',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i źródła',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Długów Metodą Kuli Śnieżnej: Przewodnik 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Życie z długami jest trudne. <strong>Metoda kuli śnieżnej</strong> udowodniła, że jest jedną z najskuteczniejszych strategii odzyskiwania wolności finansowej.',
    },
  ],
  ui: {
    labelTitle: 'Całkowita wolność',
    labelDescription: 'Rozpocznij swoją drogę do wolności finansowej z psychologicznie najskuteczniejszą metodą.',
    labelExtraBudget: 'DODATKOWY BUDŻET MIESIĘCZNY',
    labelExtraBudgetHelp: 'Dodatkowe pieniądze ponad minimalne wpłaty.',
    labelSnowballMethod: 'KULA ŚNIEŻNA',
    labelAvalancheMethod: 'LAWINA',
    labelAddNewDebt: 'DODAJ NOWY DŁUG',
    labelDebtName: 'Nazwa',
    labelDebtNamePlaceholder: 'Np: Visa',
    labelDebtBalance: 'ILE JESTEŚ WINIEN',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'WPŁATA MINIMALNA',
    labelInterestRate: 'STOPA PROCENTOWA',
    labelInterestHelp: 'ROCZNIE',
    labelAddButton: 'DODAJ DO PLANU',
    labelClearData: 'Wyczyść ustawienia',
    labelClearDataConfirm: 'Opróżnić plan?',
    labelDeleteDebt: 'Usuń',
    labelDebtInventory: 'Inwentarz Długów',
    labelFreedomDate: 'DATA WOLNOŚCI FINANSOWEJ',
    labelActiveMethod: 'METODA',
    labelMonthsRemaining: 'POZOSTAŁE MIESIĄCE',
    labelTotalInterest: 'SUMA ODSETEK',
    labelTotalPaid: 'SUMA WPŁAT KOŃCOWYCH',
    labelInterestSaved: 'ZAOSZCZĘDZONE ODSETKI',
    labelYourStrategy: 'Twoja strategia krok po kroku',
    labelStrategyHelp: 'Każdy krok pokazuje Twoją całkowitą wpłatę.',
    labelPriority: 'NAJWYŻSZY PRIORYTET',
    labelStep: 'KROK',
    labelAfterPaying: 'PO SPŁACIE POPRZEDNIEGO',
    labelMonthlyPayment: 'Miesięczna wpłata',
    labelDetailedAmortization: 'Szczegółowa Amortyzacja',
    labelExportCSV: 'Eksportuj .CSV',
    labelDate: 'Data',
    labelStartingBalance: 'Saldo Początkowe',
    labelInterest: 'Odsetki',
    labelAmortization: 'Amortyzacja',
    labelTotalMonth: 'Suma Miesiąca',
    labelRemaining: 'Pozostało',
    labelFree: 'WOLNY',
    labelDebtInfinite: 'DŁUG NIESKOŃCZONY',
    labelInvalidInput: 'Podaj saldo całkowite i wpłatę minimalną',
    labelEmptyStateTitle: 'Rozpocznij swój plan',
    labelEmptyStateDescription: 'Twoje długi nie trwają wiecznie. Dodaj swoje zobowiązania.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pl-PL',
  },
};
