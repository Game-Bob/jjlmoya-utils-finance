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
];

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
    {
      type: 'title',
      text: 'Kalkylator Skulder Snöbollsmetoden: Guide 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att leva med skulder är tungt. <strong>Snöbollsmetoden</strong> har visat sig vara en av de mest effektiva strategierna för att återfå ekonomisk frihet.',
    },
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
