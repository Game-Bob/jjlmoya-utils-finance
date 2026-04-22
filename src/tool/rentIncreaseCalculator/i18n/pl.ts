import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'kalkulator-podwyzki-czynszu-hiszpania-ipc';
const title = 'Kalkulator Podwyżki Czynszu Hiszpania IPC: 3% Limit';
const description = 'Oblicz aktualizację swojego czynszu w oparciu o IPC lub ustawowy limit 3% zgodnie z hiszpańską ustawą o mieszkalnictwie.';

const faqData = [
  {
    question: 'Jaka jest maksymalna dozwolona podwyżka czynszu w 2024 i 2025 roku?',
    answer: 'Zgodnie z ustawą 12/2023 o prawie do mieszkania, w latach 2024 i 2025 maksymalny roczny wzrost czynszu w umowach o najem lokalu mieszkalnego jest prawnie ograniczony do 3%.',
  },
  {
    question: 'Czy obowiązkowe jest podnoszenie czynszu co roku o wskaźnik IPC?',
    answer: 'Nie jest to obowiązkowe z mocy prawa. Aby czynsz mógł wzrosnąć, umowa najmu musi zawierać wyraźną klauzulę wspominającą o corocznej waloryzacji.',
  },
  {
    question: 'Z jakim wyprzedzeniem wynajmujący musi powiadomić o podwyżce czynszu?',
    answer: 'Wynajmujący musi powiadomić najemcę o podwyżce na piśmie z co najmniej miesięcznym wyprzedzeniem (30 dni).',
  },
  {
    question: 'Co się stanie, jeśli wskaźnik IPC będzie wyższy niż ustawowy limit 3%?',
    answer: 'Nawet jeśli rzeczywisty wskaźnik IPC będzie wyższy, właściciel lokalu mieszkalnego nie może prawnie żądać podwyżki większej niż 3% w latach 2024 i 2025.',
  },
];

const howToData = [
  {
    name: 'Wprowadź obecny czynsz',
    text: 'Wpisz miesięczną kwotę, którą obecnie płacisz za wynajem.',
  },
  {
    name: 'Wybierz tryb obliczeń',
    text: 'Wybierz Ustawowy Limit 3% (zalecane) lub wprowadź ręcznie wartość procentową.',
  },
  {
    name: 'Sprawdź wyniki',
    text: 'Otrzymasz szacunkowy nowy czynsz, miesięczny wzrost i roczny koszt dodatkowy.',
  },
  {
    name: 'Skopiuj podsumowanie',
    text: 'Wygeneruj szybki raport, aby wysłać go właścicielowi lub zachować w notatkach.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Kalkulator Podwyżki Czynszu 2026 Hiszpania: 3% Limit',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'W Hiszpanii <strong>Wskaźnik Cen Towarów i Usług Konsumpcyjnych (IPC)</strong> był tradycyjnie miarą używaną do dostosowywania cen wynajmu. Jednak nowa Ustawa o Mieszkalnictwie wprowadziła istotne ograniczenia.',
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania': 'Źródła i odniesienia',
  ui: {
    labelTitle: 'Kalkulator Podwyżki Czynszu',
    labelDescription: 'Zaktualizuj swój czynsz zgodnie z IPC lub bezpiecznie zastosuj ustawowy limit 3%.',
    labelCurrentRent: 'Obecny Czynsz',
    labelCurrentRentPlaceholder: 'Np. 800',
    labelIncrementType: 'Tryb Aktualizacji',
    labelLegalLimit: 'Limit Ustawowy (3%)',
    labelManualIncrement: 'Wzrost Ręczny (%)',
    labelManualPercentagePlaceholder: 'Np. 2.5',
    labelNewRentEstimate: 'Szacowany Nowy Czynsz',
    labelMonthlyIncrease: 'Wzrost Miesięczny',
    labelYearlyExtra: 'Roczny Koszt Dodatkowy',
    labelLegalBadge: 'Ograniczony do 3% zgodnie z ustawą 12/2023',
    labelCopyButton: 'Kopiuj dla właściciela',
    labelCopySuccess: 'Skopiowano!',
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
