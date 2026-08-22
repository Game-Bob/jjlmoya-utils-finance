import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "kalkulator-wynagrodzenia-brutto-netto-koszt-pracodawcy-hiszpania";
const title = "Kalkulator Wynagrodzenia Brutto, Netto i Kosztu Pracodawcy w Hiszpanii 2026";
const description = "Oblicz wynagrodzenie netto, zaliczkę IRPF, składki pracownika i całkowity koszt pracodawcy w Hiszpanii według zasad na 2026 rok.";

const faq = [
  {
    "question": "Ile kosztuje pracownik firmę w Hiszpanii?",
    "answer": "Firma płaci wynagrodzenie brutto plus składki na ubezpieczenie społeczne pracodawcy."
  },
  {
    "question": "Jak obliczyć wynagrodzenie brutto na netto w Hiszpanii?",
    "answer": "Od brutto odejmij składki ZUS pracownika i zaliczkę IRPF."
  },
  {
    "question": "Czy wybór 12 lub 14 wypłat zmienia roczne wynagrodzenie?",
    "answer": "Nie. Kalkulator zachowuje tę samą roczną kwotę brutto."
  },
  {
    "question": "Jakie składki ZUS na 2026 rok są uwzględnione?",
    "answer": "Obejmuje ubezpieczenie chorobowe, bezrobocie, szkolenia, MEI, FOGASA i wypadkowe."
  },
  {
    "question": "Co dzieje się po przekroczeniu maksymalnej podstawy składek?",
    "answer": "Powyżej maksymalnej bazy miesięcznej w 2026 r. (5 101,20 €) obowiązuje składka solidarnościowa."
  },
  {
    "question": "Czy kalkulator działa poza Hiszpanią?",
    "answer": "Nie. Dotyczy wyłącznie przepisów hiszpańskich na 2026 r."
  },
  {
    "question": "Czy dane o wynagrodzeniu są przesyłane na serwer?",
    "answer": "Nie. Wszystkie obliczenia odbywają się w przeglądarce."
  }
];

const howTo = [
  {
    "name": "Wprowadź wynagrodzenie brutto",
    "text": "Wybierz tryb roczny lub miesięczny i wpisz kwotę."
  },
  {
    "name": "Skonfiguruj warunki hiszpańskie",
    "text": "Wybierz 12/14 wypłat, rodzaj umowy, IRPF i składkę wypadkową."
  },
  {
    "name": "Sprawdź podział wynagrodzenia",
    "text": "Porównaj netto, potrącenia pracownika i składki pracodawcy."
  },
  {
    "name": "Zmień okres wyników",
    "text": "Przełączaj między sumami rocznymi a średnią na wypłatę."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "pl",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Sygnał wynagrodzenia brutto",
    "labelGrossSalaryHint": "Kwota wynagrodzenia",
    "labelAnnual": "Rocznie",
    "labelMonthly": "Miesięcznie",
    "labelPaySchedule": "Harmonogram wypłat",
    "labelTwelvePayments": "12 wypłat",
    "labelFourteenPayments": "14 wypłat",
    "labelContract": "Rodzaj umowy",
    "labelPermanent": "Na czas nieokreślony",
    "labelTemporary": "Na czas określony",
    "labelIrpfRate": "Zaliczka na podatek IRPF",
    "labelIrpfHint": "Użyj stawki z urzędu skarbowego, oferty lub paska wypłaty",
    "labelRiskRate": "Składka na wypadki przy pracy (AT i EP)",
    "labelRiskHint": "Stawka wypadkowa pracodawcy dla danego stanowiska",
    "labelOfficePreset": "Biuro 1,50%",
    "labelTradePreset": "Handel / Sprzedaż 2,00%",
    "labelConstructionPreset": "Budownictwo 6,70%",
    "labelNetCore": "Rdzeń wynagrodzenia netto",
    "labelEmployeeDeductions": "Potrącenia pracownika",
    "labelDeductionsFormula": "IRPF plus ubezpieczenie społeczne pracownika",
    "labelEmployerHalo": "Aura składek pracodawcy",
    "labelEmployerCost": "Całkowity koszt pracodawcy",
    "labelAnnualView": "Widok roczny",
    "labelPerPaymentView": "Średnia na wypłatę",
    "labelGross": "Wynagrodzenie brutto",
    "labelIrpf": "Zaliczka IRPF",
    "labelEmployeeSocialSecurity": "Ubezpieczenie społeczne pracownika",
    "labelContributionBase": "Miesięczna podstawa wymiaru składek",
    "labelCostMultiplier": "Mnożnik kosztów w stosunku do brutto",
    "labelWorkerKeeps": "Udział netto w całkowitym koszcie",
    "labelLeanGap": "Kompaktowa aura kosztowa",
    "labelTypicalGap": "Standardowa aura kosztowa",
    "labelWideGap": "Rozszerzona aura kosztowa",
    "labelModelScope": "Tylko Hiszpania. System Ogólny 2026, pełny wymiar czasu pracy. Wyniki są szacunkowe.",
    "labelReset": "Zresetuj przykład",
    "labelInvalid": "Wprowadź prawidłowe wynagrodzenie roczne i zachowaj stawki w dozwolonym zakresie.",
    "labelMinimumSalary": "Model rozpoczyna się od płacy minimalnej w Hiszpanii w 2026 r. (17 094 €/rok).",
    "labelPrivacy": "Obliczenia wykonywane lokalnie w przeglądarce"
},
  seo: [
    { type: 'title', text: "Od brutto do rzeczywistego kosztu firmy w Hiszpanii", level: 2 },
    { type: 'paragraph', html: "Oblicz wynagrodzenie netto, zaliczkę IRPF, składki pracownika i całkowity koszt pracodawcy w Hiszpanii według zasad na 2026 rok." },
    { type: 'title', text: "Wzór na koszt pracodawcy w Hiszpanii", level: 2 },
    { type: 'paragraph', html: "Firma płaci wynagrodzenie brutto plus składki na ubezpieczenie społeczne pracodawcy." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Rdzeń wynagrodzenia netto"], ['Employer Cost', "Całkowity koszt pracodawcy"]] },
    { type: 'title', text: "Stawki hiszpańskiego ZUS na 2026 rok", level: 2 },
    { type: 'paragraph', html: "Obejmuje ubezpieczenie chorobowe, bezrobocie, szkolenia, MEI, FOGASA i wypadkowe." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Biuro 1,50%", '1.50%'], ["Handel / Sprzedaż 2,00%", '2.00%'], ["Budownictwo 6,70%", '6.70%']] },
    { type: 'title', text: "Maksymalne podstawy i wysokie zarobki", level: 2 },
    { type: 'paragraph', html: "Powyżej maksymalnej bazy miesięcznej w 2026 r. (5 101,20 €) obowiązuje składka solidarnościowa." },
    { type: 'title', text: "Różnica między 12 a 14 wypłatami", level: 2 },
    { type: 'paragraph', html: "Nie. Kalkulator zachowuje tę samą roczną kwotę brutto." },
    { type: 'tip', title: "Harmonogram wypłat", html: "Wybierz 12/14 wypłat, rodzaj umowy, IRPF i składkę wypadkową." },
    { type: 'title', text: "Ograniczenia hiszpańskiego kalkulatora płac", level: 2 },
    { type: 'paragraph', html: "Tylko Hiszpania. System Ogólny 2026, pełny wymiar czasu pracy. Wyniki są szacunkowe." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
