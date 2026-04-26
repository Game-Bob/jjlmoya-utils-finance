import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-bic-swift-konverterare';
const title = 'IBAN till BIC SWIFT Konverterare och Banksökning';
const description = 'Få BIC/SWIFT-koden för valfritt spanskt IBAN direkt. Bankkontovalidator med officiell algoritm för överföringar.';

const faqData = [
  {
    question: 'Vad är BIC- eller SWIFT-kod?',
    answer: 'Det är din banks internationella identifierare. Den behövs för att pengarna ska veta till vilken instans de ska skickas när de färdas utanför SEPA-zonen (Europa).',
  },
  {
    question: 'Hur vet jag vad min banks BIC är?',
    answer: 'Du kan se den i din internetbank eller använda vår konverterare. För spanska banker extraherar vi koden för banken och ger dig motsvarande BIC genom att du bara anger IBAN.',
  },
  {
    question: 'Är det säkert att ange mitt IBAN här?',
    answer: 'Helt säkert. Vårt verktyg validerar koden lokalt i din webbläsare. Vi sparar eller skickar inte dina bankuppgifter till någon extern server.',
  },
  {
    question: 'Varför har IBAN 24 tecken i Spanien?',
    answer: 'Det är en standardnorm. De första 4 tecknen identifierar land och kontroll, och de övriga 20 är det gamla kontonumret.',
  },
];

const howToData = [
  {
    name: 'Sök efter ditt IBAN',
    text: 'Du hittar det på ditt bankkort, i din bankbok eller i din internetbanksprofil.',
  },
  {
    name: 'Ange det i validatorn',
    text: 'Skriv eller klistra in hela koden. Vårt system formaterar den automatiskt för att göra den lättare att läsa.',
  },
  {
    name: 'Tryck på konverteringsknappen',
    text: 'Systemet validerar att kontrollsiffrorna är korrekta med hjälp av Modulo 97-algoritmen.',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Du får BIC/SWIFT-koden och namnet på banken, redo att kopieras och användas.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBAN till BIC/SWIFT Konverterare: Allt du behöver veta om dina bankkoder',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I den komplexa världen av internationell ekonomi dominerar två akronymer varje överföring: <strong>IBAN</strong> och <strong>BIC</strong> (även känd som SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'IBAN till BIC / SWIFT Konverterare',
    labelDescription: 'Beräkna BIC-koden för valfritt spanskt bankkonto omedelbart.',
    labelInputIBAN: 'Ange ditt IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Hämta BIC-kod',
    labelBIC: 'BIC / SWIFT-kod',
    labelCountry: 'Land / Format',
    labelBank: 'Bank',
    labelError: 'Det angivna IBAN verkar inte vara giltigt. Kontrollera siffrorna.',
    labelCopyButton: 'Kopiera',
    labelCopied: 'Kopierad',
    labelBankNotIdentified: 'Banken kunde inte identifieras',
    labelBankOutsideSpain: 'Bank utanför Spanien (Begränsad data)',
    labelInvalidIBAN: 'Ogiltigt IBAN',
    labelFormattingOK: 'Format OK',
  },
};
