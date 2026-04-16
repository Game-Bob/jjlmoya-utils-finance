import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'kalkylator-domstolsavgifter-spanien';
const title = 'Kalkylator Domstolsavgifter Spanien';
const description = 'Beräkna det exakta beloppet för spanska domstolsavgifter för företag enligt lag 10/2012. Simulator för modell 696 med undantag.';

const faqData = [
  {
    question: 'Är privatpersoner befriade från domstolsavgifter?',
    answer: 'Ja, sedan 2016 är fysiska personer i Spanien helt befriade från att betala domstolsavgifter i alla domstolsinstanser.',
  },
  {
    question: 'Vilket är det högsta beloppet för domstolsavgiften?',
    answer: 'Den variabla delen är begränsad till maximalt 10 000 euro. Tillsammans med den fasta delen kan det totala beloppet bli högre beroende på typ av förfarande.',
  },
  {
    question: 'Vad är modell 696?',
    answer: 'Det är den officiella blanketten från den spanska skattemyndigheten (AEAT) som används för självdeklaration av domstolsavgiften.',
  },
  {
    question: 'Betalas avgift i brottmål?',
    answer: 'Nej, i Spanien finns inga domstolsavgifter för förfaranden i brottmål.',
  },
  {
    question: 'Hur beräknas den variabla delen?',
    answer: 'Den variabla delen är 0,5 % av tvistebeloppet upp till 1 miljon euro. Därutöver är den 0,25 %. Maxbeloppet är 10 000 euro.',
  },
];

const howToData = [
  {
    name: 'Välj skattesubjekt',
    text: 'Ange om du är en fysisk person (befriad) eller en juridisk person (företag).',
  },
  {
    name: 'Välj jurisdiktion och förfarande',
    text: 'Välj domstolsinstans (Civil, Förvaltningsrättslig eller Social) och typ av förfarande.',
  },
  {
    name: 'Ange tvistebelopp',
    text: 'Skriv in det totala beloppet som yrkas i stämningsansökan. För socialmål gäller inte detta fält.',
  },
  {
    name: 'Visa sammanställning',
    text: 'Få den automatiska beräkningen med fast, variabel och total avgift för modell 696.',
  },
];

const bibliographyData = [
  {
    name: 'Lag 10/2012 om domstolsavgifter (Spanien)',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Dom TC 140/2016 om domstolsavgifter',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Skattemyndigheten - Modell 696',
    url: 'https://sede.agenciatributaria.gob.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Kalkylator Domstolsavgifter Spanien 2026: Fullständig guide',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Kalkylatorn för domstolsavgifter</strong> är ett tekniskt verktyg utformat för att exakt fastställa de skattemässiga kostnaderna för domstolsförfaranden i Spanien enligt lag 10/2012.',
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
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Källor och referenser',
  ui: {
    labelTitle: 'Kalkylator för domstolsavgifter',
    labelDescription: 'Beräkna det exakta beloppet för modell 696 baserat på jurisdiktion och förfarande. För företag och yrkesverksamma.',
    labelLegalParameters: 'Juridiska parametrar',
    labelEntityType: 'Skattesubjekt',
    labelJurisdiction: 'Jurisdiktion',
    labelProcedure: 'Typ av förfarande',
    labelClaimAmount: 'Tvistebelopp',
    labelEstimatedSettlement: 'Beräknad avräkning',
    labelExemptSubject: 'Befriat subjekt',
    labelFixedQuote: 'Fast avgift (Processuell)',
    labelVariableQuote: 'Variabel avgift (0,5% / 0,25%)',
    labelTaxableBase: 'Beskattningsunderlag',
    labelCopySettlement: 'Kopiera avräkning',
    labelEntityJuridica: 'Juridisk person (AB)',
    labelEntityFisica: 'Fysisk person (Befriad)',
    labelCivilOrder: 'Civilmål',
    labelAdministrativeOrder: 'Förvaltningsrättsligt mål',
    labelSocialOrder: 'Socialmål (Arbetsrätt)',
    labelModel696: 'Modell 696 AEAT',
    labelOrdinary: 'Ordinarie rättegång',
    labelVerbal: 'Förenklat förfarande',
    labelExecutive: 'Verkställighet',
    labelAppeal: 'Överklagande',
    labelCassation: 'Kassation',
    labelAbbreviated: 'Snabbförfarande',
    labelSupplication: 'Besvär',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'sv-SE',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
