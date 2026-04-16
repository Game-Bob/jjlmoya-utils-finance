import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'gesetzlicher-zinssatz-spanien-2026';
const title = 'Gesetzlicher Zinssatz Spanien';
const description = 'Berechnen Sie den in Spanien für 2026 geltenden gesetzlichen Zinssatz. Simulator mit einem Satz von 3,25 % gemäß Haushaltsgesetz.';

const faqData = [
  {
    question: 'Wie hoch ist der gesetzliche Zinssatz im Jahr 2026?',
    answer: 'Der gesetzliche Zinssatz bleibt für das Geschäftsjahr 2026 bei 3,25 %, festgelegt durch das staatliche Haushaltsgesetz.',
  },
  {
    question: 'Wie wird der Verzugszins berechnet?',
    answer: 'Der Verzugszins wird berechnet, indem das ausstehende Kapital mit 3,25 % und der Anzahl der Verzugstage multipliziert und durch 36.500 geteilt wird. Es wird eine Basis von 365 Tagen verwendet.',
  },
  {
    question: 'Was ist der Unterschied zwischen gesetzlichem Zins und Verzugszins?',
    answer: 'Der gesetzliche Zins ist der Basis-Referenzzinssatz. Der steuerliche Verzugszins (Hacienda) liegt bei 4,0625 %. Der Zinssatz für Handelsgeschäfte (ca. 10,15 %) ist der höchste.',
  },
  {
    question: 'Wird er automatisch ohne Vertragsklausel angewendet?',
    answer: 'Ja, der gesetzliche Zins findet standardmäßig Anwendung, wenn ein Zahlungsverzug vorliegt und kein anderer Zins vereinbart wurde.',
  },
  {
    question: 'Was ist der Prozesszins?',
    answer: 'Der Prozesszins beträgt 5,25 % (gesetzlicher Zins plus 2 Punkte) und wird ab dem Zeitpunkt eines Gerichtsurteils zur Zahlung von Geld angewendet.',
  },
];

const howToData = [
  {
    name: 'Ausstehendes Kapital eingeben',
    text: 'Geben Sie den Geldbetrag ein, für den Sie die Zinsen berechnen müssen (z. B. eine offene Rechnung).',
  },
  {
    name: 'Verzugstage angeben',
    text: 'Geben Sie an, wie viele Tage der Zahlungsverzug gedauert hat oder dauern wird. Basis sind 365 Tage.',
  },
  {
    name: 'Ergebnis anzeigen',
    text: 'Erhalten Sie automatisch den Betrag der generierten Zinsen und den Gesamtbetrag bei 3,25 %.',
  },
  {
    name: 'Andere Sätze prüfen',
    text: 'Sehen Sie sich Referenzsätze wie steuerlichen Verzug (4,06 %) für weiteren Kontext an.',
  },
];

const bibliographyData = [
  {
    name: 'Staatliches Haushaltsgesetz Spanien 2026',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Spanisches Zivilgesetzbuch - Art. 1108 ff.',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Gesetz 3/2004 gegen Zahlungsverzug',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Gesetzlicher Zinssatz 2026 Spanien: Rechner',
  },
  {
    type: 'paragraph',
    html: 'Der <strong>gesetzliche Zinssatz 2026</strong> beträgt in Spanien <strong>3,25 %</strong>. Er wird automatisch bei Zahlungsverzug angewendet, sofern nichts anderes vereinbart wurde.',
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
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Rechtliche Quellen',
  ui: {
    labelTitle: 'Gesetzlicher Zinssatz',
    labelDescription: 'Berechnen Sie die Zinsen gemäß dem Haushaltsgesetz 2026. Simulator mit 3,25 % für Spanien.',
    labelBadge: 'Staatsanzeiger (BOE) 2026',
    labelSubtitle: 'Der gesetzliche Zinssatz bleibt für 2026 bei 3,25 %.',
    labelLegalInterest: 'Gesetzlicher Zins',
    labelDelayInterest: 'Verzugszins',
    labelCommercialOperations: 'Handelsgeschäfte',
    labelActive: 'Gültig in 2026',
    labelTributary: 'Steuerlich (Finanzamt)',
    labelFirstHalf: 'Erstes Halbjahr 2026',
    labelQuickCalculator: 'Schnellrechner Zins (3,25 %)',
    labelCapital: 'Ausstehendes Kapital',
    labelDays: 'Verzugstage',
    labelInterestGenerated: 'Generierte Zinsen',
    labelTotalToPay: 'Gesamtbetrag',
    labelFormula: 'Dieser Rechner nutzt die Standardformel für einfache Zinsen:',
    labelBase: 'Berechnung auf Basis von 365 Tagen gemäß spanischer Gesetzgebung.',
    labelOfficialRegulation: 'Offizielle Regelung',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
