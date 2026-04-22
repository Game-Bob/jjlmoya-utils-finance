import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'konwerter-iban-na-bic-swift';
const title = 'Konwerter IBAN na BIC SWIFT i wyszukiwarka banków';
const description = 'Uzyskaj natychmiast kod BIC/SWIFT dowolnego hiszpańskiego numeru IBAN. Walidator kont bankowych z oficjalnym algorytmem dla przelewów.';

const faqData = [
  {
    question: 'Co to jest kod BIC lub SWIFT?',
    answer: 'Jest to międzynarodowy identyfikator Twojego banku. Jest niezbędny, aby pieniądze wiedziały, do której instytucji mają trafić podczas podróży poza strefę SEPA (Europa).',
  },
  {
    question: 'Jak dowiedzieć się, jaki jest BIC mojego banku?',
    answer: 'Możesz to sprawdzić w swojej bankowości online lub skorzystać z naszego konwertera. W przypadku banków hiszpańskich, po wpisaniu samego numeru IBAN, wyodrębniamy kod instytucji i podajemy odpowiedni BIC.',
  },
  {
    question: 'Czy wpisywanie tutaj mojego numeru IBAN jest bezpieczne?',
    answer: 'Całkowicie. Nasze narzędzie waliduje kod lokalnie w Twojej przeglądarce. Nie przechowujemy ani nie wysyłamy Twoich danych bankowych do żadnego zewnętrznego serwera.',
  },
  {
    question: 'Dlaczego IBAN w Hiszpanii ma 24 znaki?',
    answer: 'Jest to standardowa norma. Pierwsze 4 znaki identyfikują kraj i kontrolę, a pozostałe 20 to dawny numer rachunku klienta.',
  },
];

const howToData = [
  {
    name: 'Znajdź swój numer IBAN',
    text: 'Znajdziesz go na swojej karcie debetowej, w książeczce oszczędnościowej lub w profilu bankowości online.',
  },
  {
    name: 'Wprowadź go do walidatora',
    text: 'Wpisz lub wklej pełny kod. Nasz system automatycznie go sformatuje, aby ułatwić odczyt.',
  },
  {
    name: 'Naciśnij przycisk konwersji',
    text: 'System zweryfikuje poprawność cyfr kontrolnych za pomocą algorytmu Modulo 97.',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Otrzymasz kod BIC/SWIFT oraz nazwę instytucji bankowej, gotowe do skopiowania i użycia.',
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

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData: 'Źródła i odniesienia',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Konwerter IBAN na BIC/SWIFT: Wszystko, co musisz wiedzieć o swoich kodach bankowych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W złożonym świecie międzynarodowych finansów dwa akronimy dominują w każdej operacji transferu: <strong>IBAN</strong> oraz <strong>BIC</strong> (znany również jako SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'Konwerter IBAN na BIC / SWIFT',
    labelDescription: 'Błyskawicznie oblicz kod BIC dowolnego hiszpańskiego konta bankowego.',
    labelInputIBAN: 'Wprowadź swój IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Pobierz kod BIC',
    labelBIC: 'Kod BIC / SWIFT',
    labelCountry: 'Kraj / Format',
    labelBank: 'Instytucja bankowa',
    labelError: 'Wprowadzony numer IBAN wydaje się nieprawidłowy. Sprawdź cyfry.',
    labelCopyButton: 'Kopiuj',
    labelCopied: 'Skopiowano',
    labelBankNotIdentified: 'Instytucja niezidentyfikowana',
    labelBankOutsideSpain: 'Bank poza Hiszpanią (Dane ograniczone)',
    labelInvalidIBAN: 'Nieprawidłowy IBAN',
    labelFormattingOK: 'Format poprawny',
  },
};
