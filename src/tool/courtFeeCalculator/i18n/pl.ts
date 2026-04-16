import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'kalkulator-oplat-sadowych-hiszpania';
const title = 'Kalkulator Opłat Sądowych Hiszpania';
const description = 'Oblicz dokładną kwotę hiszpańskich opłat sądowych dla firm zgodnie z ustawą 10/2012. Symulator dla Modelu 696 z uwzględnieniem zwolnień.';

const faqData = [
  {
    question: 'Czy osoby prywatne są zwolnione z opłat sądowych?',
    answer: 'Tak, od 2016 roku osoby fizyczne w Hiszpanii są całkowicie zwolnione z uiszczania opłat sądowych we wszystkich rodzajach jurysdykcji.',
  },
  {
    question: 'Jaka jest maksymalna kwota opłaty sądowej?',
    answer: 'Kwota zmienna jest ograniczona do maksymalnie 10 000 euro. Po dodaniu kwoty stałej, łączna kwota maksymalna może być wyższa w zależności od rodzaju postępowania.',
  },
  {
    question: 'Co to jest Model 696?',
    answer: 'Jest to oficjalny formularz urzędu skarbowego (AEAT), używany do samoopodatkowania opłaty za wykonywanie władzy sądowniczej.',
  },
  {
    question: 'Czy wnosi się opłatę w sprawach karnych?',
    answer: 'Nie, w Hiszpanii nie istnieją opłaty sądowe dla postępowań w sprawach karnych.',
  },
  {
    question: 'Jak oblicza się kwotę zmienną?',
    answer: 'Kwota zmienna wynosi 0,5% wartości przedmiotu sporu do kwoty 1 miliona euro. Powyżej tej kwoty wynosi 0,25%. Maksimum to 10 000 euro.',
  },
];

const howToData = [
  {
    name: 'Wybierz podmiot podlegający opłacie',
    text: 'Wskaż, czy jesteś osobą fizyczą (zwolnioną) czy prawną (firmą).',
  },
  {
    name: 'Wybierz jurysdykcję i postępowanie',
    text: 'Wybierz rodzaj sądownictwa (Cywilne, Administracyjne lub Społeczne) oraz rodzaj postępowania.',
  },
  {
    name: 'Wprowadź kwotę sporu',
    text: 'Wpisz całkowitą kwotę dochodzoną w pozwie. W sądownictwie społecznym to pole nie ma zastosowania.',
  },
  {
    name: 'Zobacz rozliczenie',
    text: 'Uzyskaj automatyczne wyliczenie opłaty stałej, zmiennej i całkowitej dla Modelu 696.',
  },
];

const bibliographyData = [
  {
    name: 'Ustawa 10/2012 o Opłatach Sądowych (Hiszpania)',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Wyrok TC 140/2016 w sprawie Opłat Sądowych',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Urząd Skarbowy - Model 696',
    url: 'https://sede.agenciatributaria.gob.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Kalkulator Opłat Sądowych Hiszpania 2026: Pełny Przewodnik',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Kalkulator Opłat Sądowych</strong> to narzędzie techniczne zaprojektowane w celu precyzyjnego określenia kosztów fiskalnych sprawowania władzy sądowniczej w Hiszpanii zgodnie z ustawą 10/2012.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Źródła i odniesienia',
  ui: {
    labelTitle: 'Kalkulator Opłat Sądowych',
    labelDescription: 'Oblicz dokładną kwotę Modelu 696 według jurysdykcji i postępowania. Dla firm i profesjonalistów.',
    labelLegalParameters: 'Parametry Prawne',
    labelEntityType: 'Podmiot Podlegający Opłacie',
    labelJurisdiction: 'Jurysdykcja',
    labelProcedure: 'Rodzaj Postępowania',
    labelClaimAmount: 'Wartość Przedmiotu Sporu',
    labelEstimatedSettlement: 'Szacowane Rozliczenie',
    labelExemptSubject: 'Podmiot Zwolniony',
    labelFixedQuote: 'Kwota Stała (Procesowa)',
    labelVariableQuote: 'Kwota Zmienna (0,5% / 0,25%)',
    labelTaxableBase: 'Podstawa Opodatkowania',
    labelCopySettlement: 'Kopiuj Rozliczenie',
    labelEntityJuridica: 'Osoba Prawna (Sp. z o.o., S.A.)',
    labelEntityFisica: 'Osoba Fizyczna (Zwolniona)',
    labelCivilOrder: 'Postępowanie Cywilne',
    labelAdministrativeOrder: 'Sądownictwo Administracyjne',
    labelSocialOrder: 'Sądownictwo Społeczne',
    labelModel696: 'Model 696 AEAT',
    labelOrdinary: 'Postępowanie Zwyczajne',
    labelVerbal: 'Postępowanie Uproszczone',
    labelExecutive: 'Postępowanie Egzekucyjne',
    labelAppeal: 'Apelacja',
    labelCassation: 'Kasacja',
    labelAbbreviated: 'Postępowanie Skrócone',
    labelSupplication: 'Zalżalenie',
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
