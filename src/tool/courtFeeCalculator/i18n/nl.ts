import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'gerechtskosten-calculator-spanje';
const title = 'Gerechtskosten Calculator Spanje';
const description = 'Bereken de exacte Spaanse gerechtskosten voor bedrijven volgens Wet 10/2012. Simulator voor Model 696 met vrijstellingen.';

const faqData = [
  {
    question: 'Zijn particulieren vrijgesteld van gerechtskosten?',
    answer: 'Ja, sinds 2016 zijn natuurlijke personen in Spanje in alle rechtsgebieden volledig vrijgesteld van de betaling van gerechtskosten.',
  },
  {
    question: 'Wat is het maximumbedrag van de gerechtskosten?',
    answer: 'De variabele bijdrage is beperkt tot een maximum van 10.000 euro. Samen met de vaste bijdrage kan het totaal hoger zijn, afhankelijk van het type procedure.',
  },
  {
    question: 'Wat is Model 696?',
    answer: 'Dit is het officiële formulier van de Spaanse belastingdienst (AEAT) dat wordt gebruikt voor de zelfevaluatie van de gerechtskosten.',
  },
  {
    question: 'Worden er kosten betaald in strafzaken?',
    answer: 'Nee, in Spanje zijn er geen gerechtskosten voor procedures in het strafrecht.',
  },
  {
    question: 'Hoe wordt de variabele bijdrage berekend?',
    answer: 'De variabele bijdrage bedraagt 0,5% van het bedrag van de vordering tot 1 miljoen euro. Daarboven is het 0,25%. Het maximum is 10.000 euro.',
  },
];

const howToData = [
  {
    name: 'Selecteer de belastingplichtige',
    text: 'Geef aan of u een natuurlijk persoon (vrijgesteld) of een rechtspersoon (bedrijf) bent.',
  },
  {
    name: 'Kies de jurisdictie en procedure',
    text: 'Selecteer het rechtsgebied (Civiel, Administratief of Sociaal) und het type procedure.',
  },
  {
    name: 'Voer het bedrag van de vordering in',
    text: 'Vul het totale bedrag van de vordering in. Voor de sociale jurisdictie is dit niet van toepassing.',
  },
  {
    name: 'Bekijk de uitsplitsing',
    text: 'Ontvang de automatische berekening met vaste, variabele en totale bijdrage voor Model 696.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Spaanse Rechtbankkosten Calculator 2026: Volledige Gids',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'De <strong>Gerechtskosten Calculator</strong> is een technisch hulpmiddel dat is ontworpen om nauwkeurig de fiscale kosten van de rechtsmacht in Spanje te bepalen volgens Wet 10/2012.',
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
  faqTitle: 'Veelgestelde Vragen': 'Bronnen en Referenties',
  ui: {
    labelTitle: 'Gerechtskosten Calculator',
    labelDescription: 'Bereken het exacte bedrag voor Model 696 per jurisdictie en procedure. Voor bedrijven en professionals.',
    labelLegalParameters: 'Juridische Parameters',
    labelEntityType: 'Belastingplichtige',
    labelJurisdiction: 'Jurisdictie',
    labelProcedure: 'Type Procedure',
    labelClaimAmount: 'Bedrag van de vordering',
    labelEstimatedSettlement: 'Geschatte Afrekening',
    labelExemptSubject: 'Vrijgesteld Subject',
    labelFixedQuote: 'Vaste Bijdrage (Procedureel)',
    labelVariableQuote: 'Variabele Bijdrage (0,5% / 0,25%)',
    labelTaxableBase: 'Belastbare Grondslag',
    labelCopySettlement: 'Afrekening kopiëren',
    labelEntityJuridica: 'Rechtspersoon (B.V., N.V.)',
    labelEntityFisica: 'Natuurlijk Persoon (Vrijgesteld)',
    labelCivilOrder: 'Civiele Orde',
    labelAdministrativeOrder: 'Bestuursrechtelijk',
    labelSocialOrder: 'Sociale Orde',
    labelModel696: 'Model 696 AEAT',
    labelOrdinary: 'Gewone Procedure',
    labelVerbal: 'Mondelinge Procedure',
    labelExecutive: 'Executief',
    labelAppeal: 'Hoger Beroep',
    labelCassation: 'Cassatie',
    labelAbbreviated: 'Verkorte Procedure',
    labelSupplication: 'Smeekschrift',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
