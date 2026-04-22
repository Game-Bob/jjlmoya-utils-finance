import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'gerichtskostenrechner-spanien';
const title = 'Gerichtskostenrechner Spanien';
const description = 'Berechnen Sie die exakten spanischen Gerichtskosten für Unternehmen gemäß Gesetz 10/2012. Simulator für Modell 696 mit Befreiungen.';

const faqData = [
  {
    question: 'Sind Privatpersonen von Gerichtskosten befreit?',
    answer: 'Ja, seit 2016 sind natürliche Personen in Spanien in allen Gerichtsbarkeiten vollständig von der Zahlung von Gerichtskosten befreit.',
  },
  {
    question: 'Wie hoch ist der Höchstbetrag der Gerichtsgebühr?',
    answer: 'Die variable Gebühr ist auf maximal 10.000 Euro begrenzt. Zusammen mit der festen Gebühr kann der Gesamtbetrag je nach Verfahrenstyp höher sein.',
  },
  {
    question: 'Was ist das Modell 696?',
    answer: 'Es ist das offizielle Formular der spanischen Steuerbehörde (AEAT) für die Selbstveranlagung der Gerichtsgebühren.',
  },
  {
    question: 'Fallen im Strafrecht Kosten an?',
    answer: 'Nein, in Spanien gibt es keine Gerichtskosten für Verfahren im Strafrecht.',
  },
  {
    question: 'Wie wird die variable Gebühr berechnet?',
    answer: 'Die variable Gebühr beträgt 0,5 % des Streitwerts bis zu 1 Million Euro. Darüber hinaus beträgt sie 0,25 %. Das Maximum beträgt 10.000 Euro.',
  },
];

const howToData = [
  {
    name: 'Steuersubjekt auswählen',
    text: 'Geben Sie an, ob Sie eine natürliche Person (befreit) oder eine juristische Person (Unternehmen) sind.',
  },
  {
    name: 'Gerichtsbarkeit und Verfahren wählen',
    text: 'Wählen Sie die Gerichtsbarkeit (Zivil, Verwaltungsrecht oder Sozial) und die Art des Verfahrens.',
  },
  {
    name: 'Streitwert eingeben',
    text: 'Geben Sie den Gesamtbetrag der Forderung ein. Für die Sozialgerichtsbarkeit gilt dies nicht.',
  },
  {
    name: 'Aufschlüsselung anzeigen',
    text: 'Erhalten Sie die automatische Berechnung mit fester, variabler und gesamter Gebühr für das Modell 696.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Spanien Gerichtskostenrechner 2026: Vollständiger Leitfaden',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Der <strong>Gerichtskostenrechner</strong> ist ein technisches Hilfsmittel zur präzisen Bestimmung der fiskalischen Kosten der rechtsprechenden Gewalt in Spanien gemäß dem Gesetz 10/2012.',
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
  faqTitle: 'Häufig gestellte Fragen': 'Quellen und Referenzen',
  ui: {
    labelTitle: 'Gerichtskostenrechner',
    labelDescription: 'Berechnen Sie den exakten Betrag für Modell 696 nach Gerichtsbarkeit und Verfahren. Für spanische Unternehmen.',
    labelLegalParameters: 'Rechtliche Parameter',
    labelEntityType: 'Steuersubjekt',
    labelJurisdiction: 'Gerichtsbarkeit',
    labelProcedure: 'Verfahrenstyp',
    labelClaimAmount: 'Streitwert',
    labelEstimatedSettlement: 'Geschätzte Abrechnung',
    labelExemptSubject: 'Befreites Subjekt',
    labelFixedQuote: 'Feste Gebühr (Prozessual)',
    labelVariableQuote: 'Variable Gebühr (0,5% / 0,25%)',
    labelTaxableBase: 'Bemessungsgrundlage',
    labelCopySettlement: 'Abrechnung kopieren',
    labelEntityJuridica: 'Juristische Person (GmbH, AG)',
    labelEntityFisica: 'Natürliche Person (Befreit)',
    labelCivilOrder: 'Zivilrecht',
    labelAdministrativeOrder: 'Verwaltungsrecht',
    labelSocialOrder: 'Sozialrecht',
    labelModel696: 'Modell 696 AEAT',
    labelOrdinary: 'Ordentliches Verfahren',
    labelVerbal: 'Mündliches Verfahren',
    labelExecutive: 'Vollstreckung',
    labelAppeal: 'Berufung',
    labelCassation: 'Revision',
    labelAbbreviated: 'Abgekürztes Verfahren',
    labelSupplication: 'Beschwerde',
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
