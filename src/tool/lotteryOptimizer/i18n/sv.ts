import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'lotteri-optimerare-sannolikhetskalkylator';
const title = 'Lotteri optimerare och sannolikhetskalkylator';
const description = 'Analysera dina chanser i spanska jullotteriet, Euromillions och Bonoloto. Beräkna optimalt antal lotter och det förväntade värdet på din insats.';

const faqData = [
  {
    question: 'Vad är väntevärde i lotteri?',
    answer: 'Det är det genomsnittliga värdet du förväntar dig att vinna för varje satsad euro. I nästan alla lotterier är väntevärdet negativt (du förlorar oftast 0,50€ för varje 1€ du spelar), vilket innebär att huset alltid vinner i det långa loppet.',
  },
  {
    question: 'Är det bättre att spela på många olika nummer eller många lotter med samma nummer?',
    answer: 'Om du vill vinna "något" ökar diversifiering av nummer din sannolikhet att få mindre vinster. Om du siktar på storvinsten ger spel på ett enda nummer samma sannolikhet, men högre vinst om du vinner.',
  },
  {
    question: 'Är det verkligen lönsamt att spela på det spanska jullotteriet (El Gordo)?',
    answer: 'Ur ett rent matematiskt perspektiv, nej. Endast 70 % av intäkterna betalas ut. Men det har en mycket högre sannolikhet för storvinst (1 på 100 000) än Euromillions (1 på 140 miljoner).',
  },
  {
    question: 'Kan jag förbättra mina chanser med statistik?',
    answer: 'Nej. Lotteridragningar är oberoende slumpmässiga processer. Att ett nummer drogs igår påverkar inte alls chansen att det dras idag.',
  },
  {
    question: 'Vad betyder "svårighetsgrad" i jämförelsetabellen?',
    answer: 'Det är ett relativt mått på hur svårt det är att vinna första pris. Tillgänglig (under 200k), Svår (under 20 miljoner), Extrem (över 20 miljoner).',
  },
];

const howToData = [
  {
    name: 'Välj typ av dragning',
    text: 'Välj mellan jullotteriet, Primitiva, Euromillions eller Bonoloto för att analysera deras specifika regler.',
  },
  {
    name: 'Definiera din investering',
    text: 'Ange hur många lotter eller rader du planerar att köpa.',
  },
  {
    name: 'Analysera kritiska sannolikheter',
    text: 'Se de verkliga chanserna att vinna första pris jämfört med mindre vinster eller återbetalning.',
  },
  {
    name: 'Utvärdera risk/nytta',
    text: 'Kontrollera väntevärdet för att förstå hur mycket pengar du statistiskt sett "ger bort" per investerad euro.',
  },
];

const bibliographyData = [
  {
    name: 'Loterías y Apuestas del Estado (SELAE) - Transparensportal',
    url: 'https://www.selae.es/',
  },
  {
    name: 'Jullotteriets matematik - RSME',
    url: 'https://rsme.es/',
  },
  {
    name: 'Kellys kriterium och riskhantering',
    url: 'https://www.investopedia.com/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Hoppets matematik',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Att spela på lotteri är för många köpet av en illusion för några euro. Men bakom dragningarna döljer sig en av matematikens mest fascinerande grenar: statistiken för extrema sannolikheter.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Jullotteriet (El Gordo)',
    description: 'Världens största vinstutdelning. Hög sannolikhet att vinna något.',
  },
  nino: {
    name: 'Barnens lotteri (El Niño)',
    description: 'Tredubblar chanserna till återbetalning jämfört med jullotteriet.',
  },
  euromillones: {
    name: 'Euromillions',
    description: 'Astronomiska vinster, nästan omöjliga sannolikheter.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'Spaniens äldsta lotteri. Svårt men billigare.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'Den mest ekonomiska. Utmärkt för dagligt spel med liten budget.',
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
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Källor och referenser',
  ui: {
    gameTranslations,
    labelTitle: 'Lotteri optimerare',
    labelDescription: 'Jämför dragningar, beräkna ditt väntevärde och spela med förnuft.',
    labelSelectGame: 'Välj ett lotteri',
    labelConfigurePlay: 'Konfigurera ditt spel',
    labelAdjustQuantity: 'Justera antalet lotter för att se din verkliga sannolikhet.',
    labelTotalInvestment: 'Total investering',
    labelTickets: 'Antal lotter / rader',
    labelUnits: 'st',
    labelExposureAnalysis: 'Exponeringsanalys',
    labelSelectLottery: 'Välj ett lotteri för att se riskanalysen.',
    labelOptimalCutoff: 'Föreslagen brytpunkt',
    labelProbabilitySuccess: 'Sannolikhet för framgång',
    labelExpectedValue: 'Väntevärde (EV)',
    labelReturnTheoretical: 'Teoretisk återbetalning per spelas rad.',
    labelSocialReturnIndex: 'Index för social lönsamhet',
    labelLow: 'Låg',
    labelMedium: 'Medel',
    labelHigh: 'Hög',
    labelComparison: 'Jämförelse av vinster',
    labelLottery: 'Lotteri',
    labelCost: 'Kostnad',
    labelTypicalPrize: 'Typisk vinst',
    labelDifficulty: 'Svårighetsgrad',
    labelAccessible: 'Tillgänglig',
    labelDifficult: 'Svår',
    labelExtreme: 'Extrem',
    labelNote: 'Obs: Vinster för jullotteriet och El Niño är per "décimo" (20€). Euromillions etc. är typiska jackpottar.',
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
