import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'mieterhoehungsrechner-spanien-ipc';
const title = 'Mietenerhöhungsrechner Spanien IPC 3% Limit';
const description = 'Berechnen Sie die Aktualisierung Ihrer Miete mit dem IPC oder dem gesetzlichen Limit von 3 % gemäß dem spanischen Wohnungsgesetz.';

const faqData = [
  {
    question: 'Was ist die maximal zulässige Mieterhöhung in den Jahren 2024 und 2025?',
    answer: 'Gemäß dem Gesetz 12/2023 über das Recht auf Wohnraum ist die jährliche Mieterhöhung für Hauptwohnsitze in den Jahren 2024 und 2025 gesetzlich auf 3 % begrenzt.',
  },
  {
    question: 'Ist es obligatorisch, die Miete jedes Jahr mit dem IPC zu erhöhen?',
    answer: 'Nein. Damit die Miete steigen kann, muss der Mietvertrag eine explizite Klausel zur jährlichen Aktualisierung enthalten.',
  },
  {
    question: 'Wie weit im Voraus muss der Vermieter die Erhöhung ankündigen?',
    answer: 'Der Vermieter muss die Erhöhung dem Mieter mindestens einen Monat (30 Tage) im Voraus schriftlich mitteilen.',
  },
  {
    question: 'Was passiert, wenn der IPC höher als das gesetzliche Limit von 3 % ist?',
    answer: 'Auch wenn der reale IPC höher ist, darf der Eigentümer eines Hauptwohnsitzes in den Jahren 2024 und 2025 rechtlich keine Erhöhung über 3 % fordern.',
  },
];

const howToData = [
  {
    name: 'Aktuelle Miete eingeben',
    text: 'Geben Sie die monatliche Kaltmiete ein, die Sie derzeit bezahlen.',
  },
  {
    name: 'Berechnungsmodus wählen',
    text: 'Wählen Sie das gesetzliche Limit von 3 % (empfohlen) oder geben Sie manuell einen Prozentsatz ein.',
  },
  {
    name: 'Ergebnisse prüfen',
    text: 'Sie erhalten die neue geschätzte Miete, die monatliche Erhöhung und die jährlichen Mehrkosten auf einen Blick.',
  },
  {
    name: 'Zusammenfassung kopieren',
    text: 'Erstellen Sie einen schnellen Bericht für den Vermieter oder für Ihre Unterlagen.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Mietenerhöhungsrechner 2026 Spanien 3% Limit',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In Spanien wird der <strong>Verbraucherpreisindex (IPC)</strong> traditionell zur Anpassung der Miete verwendet. Durch das neue Wohnungsgesetz wurden jedoch wichtige Limits eingeführt.',
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
  ui: {
    labelTitle: 'Mietenerhöhungsrechner',
    labelDescription: 'Passen Sie Ihre Miete sicher an den IPC oder das gesetzliche 3 % Limit an.',
    labelCurrentRent: 'Aktuelle Miete',
    labelCurrentRentPlaceholder: 'z.B. 800',
    labelIncrementType: 'Update-Modus',
    labelLegalLimit: 'Limit Wohnungsgesetz (3%)',
    labelManualIncrement: 'Manuelle Erhöhung (%)',
    labelManualPercentagePlaceholder: 'z.B. 2.5',
    labelNewRentEstimate: 'Neue geschätzte Miete',
    labelMonthlyIncrease: 'Monatliche Erhöhung',
    labelYearlyExtra: 'Jährliche Mehrkosten',
    labelLegalBadge: 'Limitiert auf 3 % gemäß Gesetz 12/2023',
    labelCopyButton: 'Für den Vermieter kopieren',
    labelCopySuccess: 'Kopiert!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
