import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-bic-swift-converter';
const title = 'IBAN naar BIC SWIFT Converter en Bankzoeker';
const description = 'Verkrijg direct de BIC/SWIFT-code van elke Spaanse IBAN. Bankrekening validator met officieel algoritme voor overschrijvingen.';

const faqData = [
  {
    question: 'Wat is de BIC- of SWIFT-code?',
    answer: 'Het is de internationale identificatiecode van uw bank. Het is nodig zodat het geld weet naar welke entiteit het moet gaan wanneer het buiten de SEPA-zone (Europa) reist.',
  },
  {
    question: 'Hoe weet ik wat de BIC van mijn bank is?',
    answer: 'U kunt dit raadplegen in uw online bankieren of onze converter gebruiken. Voor Spaanse banken extraheren wij, door alleen het IBAN in te voeren, de entiteitscode en geven we u de bijbehorende BIC.',
  },
  {
    question: 'Is het veilig om mijn IBAN hier in te voeren?',
    answer: 'Absoluut. Onze tool valideert de code lokaal in uw browser. Wij bewaren of verzenden uw bankgegevens naar geen enkele externe server.',
  },
  {
    question: 'Waarom heeft het IBAN in Spanje 24 tekens?',
    answer: 'Het is een standaardnorm. De eerste 4 identificeren het land en de controle, en de andere 20 zijn het oude rekeningnummer.',
  },
];

const howToData = [
  {
    name: 'Zoek uw IBAN',
    text: 'U vindt dit op uw bankpas, in uw bankboekje of in het profiel van uw online bankieren.',
  },
  {
    name: 'Voer het in de validator in',
    text: 'Schrijf of plak de volledige code. Ons systeem formatteert deze automatisch voor een betere leesbaarheid.',
  },
  {
    name: 'Druk op de converteerknop',
    text: 'Het systeem valideert dat de controlegetallen correct zijn via het Modulo 97-algoritme.',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'U ontvangt de BIC/SWIFT-code en de naam van de bankinstantie, klaar om te kopiëren en te gebruiken.',
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
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData: 'Bronnen en Referenties',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBAN naar BIC/SWIFT Converter: Alles wat u moet weten over uw bankcodes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In de complexe wereld van de internationale financiën domineren twee acroniemen elke overschrijving: <strong>IBAN</strong> en <strong>BIC</strong> (ook bekend als SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'IBAN naar BIC / SWIFT Converter',
    labelDescription: 'Bereken direct de BIC-code van elke Spaanse bankrekening.',
    labelInputIBAN: 'Voer uw IBAN in',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'BIC-code ophalen',
    labelBIC: 'BIC / SWIFT Code',
    labelCountry: 'Land / Formaat',
    labelBank: 'Bankinstelling',
    labelError: 'Het ingevoerde IBAN lijkt niet geldig te zijn. Controleer de cijfers.',
    labelCopyButton: 'Kopiëren',
    labelCopied: 'Gekopieerd',
    labelBankNotIdentified: 'Instelling niet geïdentificeerd',
    labelBankOutsideSpain: 'Bank buiten Spanje (Beperkte gegevens)',
    labelInvalidIBAN: 'IBAN niet geldig',
    labelFormattingOK: 'Formaat OK',
  },
};
