import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'odsetki-ustawowe-hiszpania-2026';
const title = 'Odsetki Ustawowe';
const description = 'Oblicz odsetki ustawowe obowiązujące w Hiszpanii w 2026 roku. Symulator ze stawką 3,25% zgodnie z ustawą budżetową.';

const faqData = [
  {
    question: 'Ile wynoszą odsetki ustawowe w 2026 roku?',
    answer: 'Odsetki ustawowe w Hiszpanii na rok 2026 utrzymują się na poziomie 3,25%, ustalonym przez ustawę o budżecie państwa.',
  },
  {
    question: 'Jak obliczyć odsetki za opóźnienie?',
    answer: 'Odsetki za opóźnienie oblicza się mnożąc zaległy kapitał przez 3,25%, liczbę dni zwłoki i dzieląc przez 36.500. Stosuje się bazę 365 dni.',
  },
  {
    question: 'Jaka jest różnica między odsetkami ustawowymi a odsetkami za opóźnienie?',
    answer: 'Odsetki ustawowe to podstawowa stopa referencyjna. Podatkowe odsetki za opóźnienie (Hacienda) wynoszą 4,0625%. Odsetki w transakcjach handlowych (ok. 10,15%) są najwyższe.',
  },
  {
    question: 'Czy stosuje się je automatycznie bez zapisu w umowie?',
    answer: 'Tak, odsetki ustawowe stosuje się domyślnie w przypadku opóźnienia w płatności, jeśli nie uzgodniono innych odsetek.',
  },
  {
    question: 'Co to są odsetki procesowe?',
    answer: 'Odsetki procesowe wynoszą 5,25% (odsetki ustawowe plus 2 punkty) i są stosowane od momentu wydania wyroku nakazującego zapłatę pieniędzy.',
  },
];

const howToData = [
  {
    name: 'Wprowadź zaległy kapitał',
    text: 'Wpisz kwotę, od której musisz obliczyć odsetki (np. niezapłaconą fakturę).',
  },
  {
    name: 'Określ dni zwłoki',
    text: 'Wskaż, ile dni trwało lub będzie trwać opóźnienie w płatności. Baza 365 dni.',
  },
  {
    name: 'Zobacz wynik',
    text: 'Otrzymaj automatycznie kwotę wygenerowanych odsetek i sumę do zapłaty przy stawce 3,25%.',
  },
  {
    name: 'Sprawdź inne stawki',
    text: 'Zobacz stopy referencyjne, takie jak odsetki podatkowe (4,06%), dla dodatkowego kontekstu.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Odsetki Ustawowe 2026 Hiszpania - Kalkulator',
  },
  {
    type: 'paragraph',
    html: '<strong>Odsetki ustawowe w 2026 roku</strong> wynoszą <strong>3,25%</strong> w Hiszpanii. Stosuje się je automatycznie w przypadku opóźnienia, jeśli nie uzgodniono inaczej.',
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

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Stopa Odsetek Ustawowych',
    labelDescription: 'Oblicz kwotę odsetek ustawowych zgodnie z ustawą budżetową 2026. Symulator ze stawką 3,25% dla Hiszpanii.',
    labelBadge: 'Dziennik Urzędowy (BOE) 2026',
    labelSubtitle: 'Odsetki ustawowe na rok 2026 utrzymują się na poziomie 3,25%.',
    labelLegalInterest: 'Odsetki Ustawowe',
    labelDelayInterest: 'Odsetki za Opóźnienie',
    labelCommercialOperations: 'Transakcje Handlowe',
    labelActive: 'Obowiązuje w 2026',
    labelTributary: 'Podatkowe (Hacienda)',
    labelFirstHalf: 'Pierwsze półrocze 2026',
    labelQuickCalculator: 'Szybki Kalkulator Odsetek (3,25%)',
    labelCapital: 'Zaległy Kapitał',
    labelDays: 'Dni Zwłoki',
    labelInterestGenerated: 'Wygenerowane Odsetki',
    labelTotalToPay: 'Suma do Zapłaty',
    labelFormula: 'Kalkulator stosuje standardowy wzór na odsetki proste:',
    labelBase: 'Do oficjalnych obliczeń stosuje się bazę 365 dni zgodnie z hiszpańskimi przepisami.',
    labelOfficialRegulation: 'Regulacje Oficjalne',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pl-PL',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
