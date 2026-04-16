import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'sneeuwbalmethode-schuldenrekenmachine';
const title = 'Schulden Sneeuwbal Calculator: Afbetalingsplan 2026';
const description = 'Bereken uw datum voor financiële vrijheid met de sneeuwbalmethode van Dave Ramsey. Organiseer uw schulden en visualiseer uw maandelijks afbetalingsplan.';

const faqData = [
  {
    question: 'Wat is de sneeuwbalmethode?',
    answer: 'Het is een strategie om schulden af te betalen waarbij u schulden afbetaalt in volgorde van kleinste naar grootste saldo, ongeacht de rentevoet. Het richt sich op de psychologische overwinning van het snel elimineren van kleine rekeningen.',
  },
  {
    question: 'Waarom niet sorteren op rentevoet (Lawinemethode)?',
    answer: 'Wiskundig gezien bespaart het eerst afbetalen van de hoogste rente meer geld. Veel mensen haken echter af omdat ze geen onmiddellijk resultaat zien. De Sneeuwbal geeft prioriteit aan motivatie.',
  },
  {
    question: 'Moet ik spaargeld hebben voordat ik met het plan begin?',
    answer: 'Het wordt aanbevolen om een klein noodfonds (ongeveer €1.000) te hebben voordat u de schulden aanpakt. Dit voorkomt dat u bij onvoorziene gebeurtenissen weer de creditcard moet gebruiken.',
  },
  {
    question: 'Welke schulden moet ik opnemen in de calculator?',
    answer: 'Alle consumentenschulden: creditcards, persoonlijke leningen, autoleningen, openstaande rekeningen. De hypotheek wordt meestal voor een latere fase bewaard.',
  },
];

const howToData = [
  {
    name: 'Lijst uw schulden op',
    text: 'Noteer al uw schulden met het huidige openstaande saldo en de minimale maandelijkse betaling.',
  },
  {
    name: 'Bepaal uw extra budget',
    text: 'Bereken hoeveel extra geld u elke maand kunt besteden bovenop de minimale betalingen.',
  },
  {
    name: 'Sorteer en prioriteer',
    text: 'De calculator sorteert automatisch van laagste naar hoogste saldo. Betaal het minimum op alles behalve de kleinste.',
  },
  {
    name: 'Voer de cascade uit',
    text: 'Wanneer u de kleinste schuld heeft afbetaald, neemt u al het geld dat u daarvoor gebruikte en voegt u dit toe aan de betaling van de volgende.',
  },
];

const bibliographyData = [
  {
    name: 'Investopedia — Debt Snowball vs. Debt Avalanche',
    url: 'https://www.investopedia.com/',
  },
  {
    name: 'Harvard Business Review — Research on Debt Payoff Strategies',
    url: 'https://hbr.org/',
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
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Bronnen',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Schulden Sneeuwbal Calculator: Gids 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Leven met schulden is zwaar. De <strong>sneeuwbalmethode</strong> is bewezen als een van de meest effectieve strategieën om uw financiële vrijheid terug te krijgen.',
    },
  ],
  ui: {
    labelTitle: 'Totale vrijheid',
    labelDescription: 'Begin uw pad naar financiële vrijheid met de psychologisch meest effectieve methode.',
    labelExtraBudget: 'MAANDELIJKS EXTRA BUDGET',
    labelExtraBudgetHelp: 'Extra geld bovenop de minimale betalingen.',
    labelSnowballMethod: 'SNEEUWBAL',
    labelAvalancheMethod: 'LAWINEMETHODE',
    labelAddNewDebt: 'NIEUWE SCHULD TOEVOEGEN',
    labelDebtName: 'Naam',
    labelDebtNamePlaceholder: 'Bijv: Visa',
    labelDebtBalance: 'HOEVEEL U VERSCHULDIGD BENT',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'MINIMALE BETALING',
    labelInterestRate: 'RENTEVOET',
    labelInterestHelp: 'JAARLIJKS',
    labelAddButton: 'TOEVOEGEN AAN PLAN',
    labelClearData: 'Instellingen wissen',
    labelClearDataConfirm: 'Plan leegmaken?',
    labelDeleteDebt: 'Verwijderen',
    labelDebtInventory: 'Schuldenoverzicht',
    labelFreedomDate: 'DATUM FINANCIËLE VRIJHEID',
    labelActiveMethod: 'METHODE',
    labelMonthsRemaining: 'RESTERENDE MAANDEN',
    labelTotalInterest: 'TOTALE RENTE',
    labelTotalPaid: 'TOTALE BETALING',
    labelInterestSaved: 'RENTE BESPAARD',
    labelYourStrategy: 'Uw strategie stap voor stap',
    labelStrategyHelp: 'Elke stap toont uw totale betaling.',
    labelPriority: 'HOOGSTE PRIORITEIT',
    labelStep: 'STAP',
    labelAfterPaying: 'NA HET AFBETALEN VAN DE VORIGE',
    labelMonthlyPayment: 'Maandelijkse betaling',
    labelDetailedAmortization: 'Gedetailleerde Amortisatie',
    labelExportCSV: 'Exporteer .CSV',
    labelDate: 'Datum',
    labelStartingBalance: 'Beginsaldo',
    labelInterest: 'Rente',
    labelAmortization: 'Afgerekend',
    labelTotalMonth: 'Totaal Maand',
    labelRemaining: 'Resterend',
    labelFree: 'VRIJ',
    labelDebtInfinite: 'ONEINDIGE SCHULD',
    labelInvalidInput: 'Geef totaalsaldo en minimale betaling op',
    labelEmptyStateTitle: 'Start uw plan',
    labelEmptyStateDescription: 'Uw schulden zijn niet voor altijd. Voeg uw schulden toe.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
};
