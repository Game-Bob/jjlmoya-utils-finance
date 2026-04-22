import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'loterij-optimizer-kansberekenaar';
const title = 'Loterij Optimizer en Kansberekenaar';
const description = 'Analyseer uw kansen in de Kerstloterij, EuroMillions en meer. Bereken het optimale aantal loten en de verwachte waarde van uw inzet.';

const faqData = [
  {
    question: 'Wat is de wiskundige verwachting bij de loterij?',
    answer: 'Het is de gemiddelde waarde die u verwacht te winnen voor elke ingezette euro. Bij bijna alle loterijen is de wiskundige verwachting negatief (u verliest meestal €0,50 per elke ingezette €1), wat betekent dat op de lange termijn het huis altijd wint.',
  },
  {
    question: 'Is het beter om veel verschillende nummers te spelen of veel loten van hetzelfde nummer?',
    answer: 'Als u "iets" wilt winnen, verhoogt het diversifiëren van nummers uw kans op kleinere prijzen. Als u voor de jackpot gaat, geeft het spelen van één enkel nummer u dezelfde kans, maar een grotere prijs als u wint.',
  },
  {
    question: 'Is het echt de moeite waard om mee te doen aan de Spaanse Kerstloterij?',
    answer: 'Vanuit een puur wiskundig oogpunt, nee. Er wordt slechts 70% van de inleg uitgekeerd. Het heeft echter een veel hogere kans op de hoofdprijs (1 op 100.000) dan EuroMillions (1 op 140 miljoen).',
  },
  {
    question: 'Kan ik mijn kansen verbeteren met statistieken?',
    answer: 'Nee. Loterijtrekkingen zijn onafhankelijke willekeurige processen. Dat een nummer gisteren is gevallen, heeft geen enkele invloed op de trekking van vandaag.',
  },
  {
    question: 'Wat betekent "moeilijkheidsgraad" in de vergelijkingstabel?',
    answer: 'Het is een relatieve maatstaf voor hoe moeilijk het is om de hoofdprijs te winnen. Toegankelijk (minder dan 200k), Moeilijk (minder dan 20M), Extreem (meer dan 20M).',
  },
];

const howToData = [
  {
    name: 'Selecteer het type trekking',
    text: 'Kies tussen de Kerstloterij, Primitiva, EuroMillions of Bonoloto om de specifieke regels te analyseren.',
  },
  {
    name: 'Bepaal uw investering',
    text: 'Geef aan hoeveel loten of weddenschappen u van plan bent te kopen.',
  },
  {
    name: 'Analyseer kritieke kansen',
    text: 'Bekijk de reële kansen op het winnen van de hoofdprijs versus kleinere prijzen of de inlegteruggaaf.',
  },
  {
    name: 'Evalueer risico/opbrengst',
    text: 'Controleer de wiskundige verwachting om te begrijpen hoeveel geld u statistisch gezien "weggeeft" per geïnvesteerde euro.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'De Wiskunde van de Hoop',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Loten kopen is voor velen het kopen van een illusie voor een paar euro. Achter de schermen schuilt echter een van de meest fascinerende takken van de wiskunde: de statistiek van extreme kansen.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Kerstloterij (El Gordo)',
    description: 'De grootste prijzenpot ter wereld. Hoge kans om iets te winnen.',
  },
  nino: {
    name: 'Loterij van het Kind (El Niño)',
    description: 'Drie keer meer kans op inlegteruggaaf vergeleken met de Kerstloterij.',
  },
  euromillones: {
    name: 'EuroMillions',
    description: 'Astronomische prijzen, bijna onmogelijke kansen.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'De oudste loterij van Spanje. Moeilijk maar goedkoper.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'De meest voordelige. Ideaal om dagelijks te spelen met een klein budget.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen': 'Bronnen en Referenties',
  ui: {
    gameTranslations,
    labelTitle: 'Loterij Optimizer',
    labelDescription: 'Vergelijk trekkingen, bereken uw wiskundige verwachting en speel met verstand.',
    labelSelectGame: 'Selecteer een loterij',
    labelConfigurePlay: 'Stel uw inzet samen',
    labelAdjustQuantity: 'Pas het aantal loten aan om uw reële kans te zien.',
    labelTotalInvestment: 'Totale Investering',
    labelTickets: 'Aantal Loten / Weddenschappen',
    labelUnits: 'stuks',
    labelExposureAnalysis: 'Blootstellingsanalyse',
    labelSelectLottery: 'Selecteer een loterij om de risicoanalyse te zien.',
    labelOptimalCutoff: 'Aanbevolen Grenswaarde',
    labelProbabilitySuccess: 'Slagingskans',
    labelExpectedValue: 'Verwachte Waarde (EV)',
    labelReturnTheoretical: 'Theoretische terugbetaling per gespeelde inzet.',
    labelSocialReturnIndex: 'Sociale Rendementsindex',
    labelLow: 'Laag',
    labelMedium: 'Gemiddeld',
    labelHigh: 'Hoog',
    labelComparison: 'Prijsvergelijking',
    labelLottery: 'Loterij',
    labelCost: 'Kosten',
    labelTypicalPrize: 'Typische Prijs',
    labelDifficulty: 'Moeilijkheidsgraad',
    labelAccessible: 'Toegankelijk',
    labelDifficult: 'Moeilijk',
    labelExtreme: 'Extreem',
    labelNote: 'Opmerking: De prijzen van Kerst en El Niño zijn per lot (20€). EuroMillions enz. zijn typische jackpots.',
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
