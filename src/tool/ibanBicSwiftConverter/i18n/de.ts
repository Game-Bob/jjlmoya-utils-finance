import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-bic-swift-konverter';
const title = 'IBAN zu BIC SWIFT Konverter und Banksuche';
const description = 'Erhalten Sie sofort den BIC/SWIFT-Code für jede spanische IBAN. Bankkonten-Validierer mit offiziellem Algorithmus für Überweisungen.';

const faqData = [
  {
    question: 'Was ist der BIC- oder SWIFT-Code?',
    answer: 'Es ist die internationale Kennung Ihrer Bank. Er ist notwendig, damit das Geld weiß, an welches Institut es gesendet werden soll, wenn es die SEPA-Zone (Europa) verlässt.',
  },
  {
    question: 'Wie finde ich den BIC meiner Bank heraus?',
    answer: 'Sie können ihn in Ihrem Online-Banking einsehen oder unseren Konverter nutzen. Für spanische Banken extrahieren wir durch Eingabe der IBAN den Institutscode und geben Ihnen den entsprechenden BIC an.',
  },
  {
    question: 'Ist es sicher, meine IBAN hier einzugeben?',
    answer: 'Absolut. Unser Tool validiert den Code lokal in Ihrem Browser. Wir speichern oder senden Ihre Bankdaten an keinen externen Server.',
  },
  {
    question: 'Warum hat die IBAN in Spanien 24 Zeichen?',
    answer: 'Das ist eine Standardnorm. Die ersten 4 Zeichen identifizieren das Land und die Kontrolle, die anderen 20 sind die alte Kontonummer.',
  },
];

const howToData = [
  {
    name: 'IBAN suchen',
    text: 'Sie finden sie auf Ihrer Bankkarte, in Ihrem Sparbuch oder in Ihrem Online-Banking-Profil.',
  },
  {
    name: 'In den Validierer eingeben',
    text: 'Schreiben oder kopieren Sie den vollständigen Code hinein. Unser System formatiert ihn zur besseren Lesbarkeit automatisch.',
  },
  {
    name: 'Konvertierung starten',
    text: 'Das System validiert die Korrektheit der Prüfziffern mithilfe des Modulo-97-Algorithmus.',
  },
  {
    name: 'Ergebnis kopieren',
    text: 'Sie erhalten den BIC/SWIFT-Code und den Namen des Bankinstituts zum Kopieren bereitzustellen.',
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
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData: 'Quellen und Referenzen',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBAN zu BIC/SWIFT Konverter: Alles Wissenswerte über Ihre Bankcodes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der Welt der internationalen Finanzen dominieren zwei Akronyme jede Überweisung: <strong>IBAN</strong> und <strong>BIC</strong> (auch als SWIFT bekannt).',
    },
  ],
  ui: {
    labelTitle: 'IBAN zu BIC / SWIFT Konverter',
    labelDescription: 'Berechnen Sie sofort den BIC-Code jedes spanischen Bankkontos.',
    labelInputIBAN: 'IBAN eingeben',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'BIC-Code abrufen',
    labelBIC: 'BIC / SWIFT Code',
    labelCountry: 'Land / Format',
    labelBank: 'Bankinstitut',
    labelError: 'Die eingegebene IBAN scheint ungültig zu sein. Überprüfen Sie die Ziffern.',
    labelCopyButton: 'Kopieren',
    labelCopied: 'Kopiert',
    labelBankNotIdentified: 'Institut nicht identifiziert',
    labelBankOutsideSpain: 'Bank außerhalb Spaniens (Eingeschränkte Daten)',
    labelInvalidIBAN: 'IBAN ungültig',
    labelFormattingOK: 'Format OK',
  },
};
