import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'snobollsmetoden-skuld-kalkylator';
const title = 'Kalkylator Snöbollsmetoden: Plan för Skuldbetalning 2026';
const description = 'Beräkna ditt datum för ekonomisk frihet med Dave Ramseys snöbollsmetod. Organisera dina skulder och visualisera din månatliga betalningsplan.';

const faqData = [
  {
    question: 'Vad är snöbollsmetoden?',
    answer: 'Det är en strategi för skuldbetalning som går ut på att betala av skulder i ordning efter minsta till största saldo, oavsett ränta. Den fokuserar på den psykologiska vinsten i att snabbt eliminera små konton.',
  },
  {
    question: 'Varför inte sortera efter ränta (Lavinmetoden)?',
    answer: 'Matematiskt sparar det mer pengar att betala av den högsta räntan först. Men många ger upp för att de inte ser omedelbara resultat. Snöbollen prioriterar motivation.',
  },
  {
    question: 'Bör jag ha sparkapital innan jag startar planen?',
    answer: 'Det rekommenderas att ha en "Initial nödfond" (ca 1 000 €) innan man attackerar skulderna. Detta förhindrar att man behöver använda kreditkortet igen vid oförutsedda händelser.',
  },
  {
    question: 'Vilka skulder ska jag inkludera i kalkylatorn?',
    answer: 'Alla konsumtionsskulder: kreditkort, privatlån, billån, förfallna räkningar. Bolånet brukar lämnas till en senare fas på grund av sin stora volym.',
  },

  { question: "Vad bör jag kontrollera innan resultatet används?", answer: "Kontrollera indata, enheter, antaganden och begränsningar; resultatet är vägledning, inte ett officiellt beslut." },];

const howToData = [
  {
    name: 'Lista dina skulder',
    text: 'Skriv ner alla dina skulder med aktuellt kvarvarande saldo och den månatliga minimibetalningen.',
  },
  {
    name: 'Definiera din extrabudget',
    text: 'Beräkna hur mycket extra pengar du kan avsätta varje månad utöver minimibetalningarna.',
  },
  {
    name: 'Sortera och prioritera',
    text: 'Kalkylatorn sorterar automatiskt från minsta till största saldo. Betala minimum på alla utom den minsta.',
  },
  {
    name: 'Utför kaskaden',
    text: 'När du har betalat av den minsta skulden, ta alla pengar du använde till den och lägg till på nästa skuld i listan.',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Skuldsnöbollskalkylator: planera dina återbetalningar', level: 2 },
    { type: 'paragraph', html: 'Att leva med skulder är tungt. <strong>Snöbollsmetoden</strong> börjar med den minsta skulden, oavsett räntesats, så att du snabbt kan avsluta ett konto och få ett tydligt framsteg. Den psykologiska belöningen kan göra det lättare att hålla fast vid planen när återbetalningen annars känns långsam.' },
    { type: 'paragraph', html: 'Lägg in varje skuld separat med namn, aktuellt saldo, minsta månadsbetalning och årlig ränta. Använd saldot från den senaste fakturan och kontrollera om räntan anges som effektiv eller nominell. Små fel i startvärdena kan ändra både sluttid och total kostnad, särskilt för kreditkort med hög ränta.' },
    { type: 'title', text: 'Så fungerar snöbollseffekten', level: 2 },
    { type: 'paragraph', html: 'När alla minimibelopp är betalda går hela den valda extrabudgeten till den minsta återstående skulden. När den är borta flyttas den frigjorda betalningen till nästa skuld. Beloppet som angriper skulderna växer därför steg för steg, som en snöboll som rullar nedför en backe.' },
    { type: 'paragraph', html: 'Kalkylatorn visar en månad-för-månad-plan med betalning, ränta, amortering och återstående saldo. Använd tidslinjen för att se när en skuld försvinner och hur mycket pengar som sedan kan riktas mot nästa konto. Resultatet är en planeringsmodell, inte ett löfte från en långivare.' },
    { type: 'title', text: 'Snöboll eller lavin?', level: 2 },
    { type: 'paragraph', html: 'Snöbollen prioriterar motivation och snabba delmål. Lavinmetoden prioriterar i stället den högsta räntan och kan ofta ge lägre räntekostnad när alla andra antaganden är lika. Välj den metod som du faktiskt kan följa, och jämför båda scenarierna med samma saldon, räntor och extrabudget.' },
    { type: 'paragraph', html: 'En större extrabetalning förkortar normalt planen, men lägg inte in pengar som behövs för hyra, mat, skatt eller en rimlig buffert. Om inkomsten varierar kan du använda en försiktig fast budget och lägga oväntade inkomster som extra betalning först när de verkligen finns.' },
    { type: 'title', text: 'Kontrollera planen varje månad', level: 2 },
    { type: 'paragraph', html: 'Uppdatera saldon, räntor, avgifter och minimibelopp efter varje kontoutdrag. Nya köp, förseningsavgifter eller ändrade villkor kan göra den gamla prognosen fel. Om en skuld inte längre minskar med den planerade betalningen bör du kontakta långivaren och kontrollera villkoren.' },
    { type: 'paragraph', html: 'Resultatet kan användas för budgetering och jämförelse av scenarier, men ersätter inte rådgivning eller en officiell betalningsplan. Kontrollera alltid valuta, avrundning, datum och lokala regler innan du fattar ett ekonomiskt beslut. Om du får problem att betala minimibeloppen bör du kontakta långivaren tidigt och undersöka möjliga lättnader innan skulden växer.' },
    { type: 'title', text: 'Så använder du kalkylatorn', level: 3 },
    { type: 'paragraph', html: 'Börja med att kartlägga varje skuld: namn, saldo, ränta och minsta betalning. Ange sedan den extra månadsbudget som verkligen finns kvar efter nödvändiga utgifter.' },
    { type: 'list', items: ['Betala alltid minst varje minimibelopp.', 'Lägg extrabudgeten på den prioriterade skulden.', 'Flytta den frigjorda betalningen när kontot är avslutat.'] },
    { type: 'title', text: 'Antaganden och begränsningar', level: 3 },
    { type: 'paragraph', html: 'Modellen förutsätter regelbundna betalningar och att inga nya köp eller oväntade avgifter tillkommer. Kontrollera den faktiska planen mot dina kontoutdrag.' },
    { type: 'title', text: 'När du behöver stöd', level: 3 },
    { type: 'paragraph', html: 'Om du inte kan betala minimibeloppen bör du söka hjälp tidigt hos långivaren eller en oberoende skuldrådgivare.' },
    { type: 'title', text: 'Jämför planen med din verkliga ekonomi', level: 3 },
    { type: 'paragraph', html: 'Använd den föreslagna tidslinjen tillsammans med dina kontoutdrag och justera budgeten när räntor eller inkomster ändras.' },
  ],
  ui: {
    labelTitle: 'Total frihet',
    labelDescription: 'Börja din väg mot ekonomisk frihet med den psykologiskt mest effektiva metoden.',
    labelExtraBudget: 'MÅNATLIG EXTRABUDGET',
    labelExtraBudgetHelp: 'Extra pengar utöver minimibetalningarna.',
    labelSnowballMethod: 'SNÖBOLL',
    labelAvalancheMethod: 'LAVIN',
    labelAddNewDebt: 'LÄGG TILL NY SKULD',
    labelDebtName: 'Namn',
    labelDebtNamePlaceholder: 'T.ex: Visa',
    labelDebtBalance: 'HUR MYCKET DU ÄR SKYLDIG',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'MINIMIBETALNING',
    labelInterestRate: 'RÄNTESATS',
    labelInterestHelp: 'ÅRLIG',
    labelAddButton: 'LÄGG TILL I PLANEN',
    labelClearData: 'Rensa inställningar',
    labelClearDataConfirm: 'Tömma planen?',
    labelDeleteDebt: 'Ta bort',
    labelDebtInventory: 'Skuldinventering',
    labelFreedomDate: 'DATUM FÖR EKONOMISK FRIHET',
    labelActiveMethod: 'METOD',
    labelMonthsRemaining: 'ÅTERSTÅENDE MÅNADER',
    labelTotalInterest: 'TOTAL RÄNTA',
    labelTotalPaid: 'SLUTLIG TOTALBETALNING',
    labelInterestSaved: 'SPARAD RÄNTA',
    labelYourStrategy: 'Din strategi steg för steg',
    labelStrategyHelp: 'Varje steg visar din totala betalning.',
    labelPriority: 'HÖGSTA PRIORITET',
    labelStep: 'STEG',
    labelAfterPaying: 'EFTER ATT HA BETALAT FÖREGÅENDE',
    labelMonthlyPayment: 'Månatlig betalning',
    labelDetailedAmortization: 'Detaljerad Amortering',
    labelExportCSV: 'Exportera .CSV',
    labelDate: 'Datum',
    labelStartingBalance: 'Ingående balans',
    labelInterest: 'Ränta',
    labelAmortization: 'Amorterat',
    labelTotalMonth: 'Total månad',
    labelRemaining: 'Återstående',
    labelFree: 'FRI',
    labelDebtInfinite: 'OÄNDLIG SKULD',
    labelInvalidInput: 'Ange totalsaldo och minimibetalning',
    labelEmptyStateTitle: 'Starta din plan',
    labelEmptyStateDescription: 'Dina skulder är inte för evigt. Lägg till dina skulder.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'sv-SE',
  },
};
