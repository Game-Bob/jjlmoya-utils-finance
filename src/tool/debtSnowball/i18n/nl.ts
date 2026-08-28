import { bibliography } from '../bibliography';
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

  { question: "Wat moet ik controleren voordat ik het resultaat gebruik?", answer: "Controleer invoer, eenheden, aannames en beperkingen; het resultaat is een richtlijn, geen officiële beslissing." },];

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
      text: 'Schulden Sneeuwbal Calculator: Gids 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Leven met schulden is zwaar. De <strong>sneeuwbalmethode</strong> is bewezen als een van de meest effectieve strategieën om uw financiële vrijheid terug te krijgen.',
    },

  { type: 'paragraph', html: "Schulden kunnen zwaar voelen. De <strong>sneeuwbalmethode</strong> rangschikt verplichtingen op het kleinste saldo, zodat je snel een volledige aflossing en een zichtbaar succesmoment bereikt." },
  { type: 'paragraph', html: "Vul per schuld de naam, het huidige saldo, de minimale betaling en de jaarlijkse rente in. De calculator sorteert de rekeningen van klein naar groot en gebruikt je extra budget voor de eerste schuld." },
  { type: 'paragraph', html: "Zodra een schuld is afgelost, voeg je de vrijgekomen betaling toe aan het extra budget voor de volgende rekening. Zo groeit het bedrag dat je elke maand aflost zonder nieuw inkomen." },
  { type: 'paragraph', html: "Het plan toont de geschatte datum van financiële vrijheid, rente, totaal betaald en het resterende saldo per stap. Zo zie je het hele traject en niet alleen een einddatum." },
  { type: 'paragraph', html: "De <strong>sneeuwbalmethode</strong> richt zich op motivatie en snelle resultaten. De lawinemethode begint bij de hoogste rente en bespaart vaak meer rente; vergelijk beide opties voordat je kiest." },
  { type: 'paragraph', html: "Beide methoden vereisen dat je alle minimumbetalingen doet en geen nieuwe schulden opbouwt. Houd een kleine reserve aan zodat een onverwachte rekening het plan niet meteen onderbreekt." },
  { type: 'paragraph', html: "Kies een extra maandbudget dat je echt kunt volhouden. Een te optimistische waarde geeft een mooie datum op het scherm, maar werkt niet wanneer je hem maandelijks niet kunt betalen." },
  { type: 'paragraph', html: "Als een schuld als oneindig wordt gemarkeerd, dekt de geplande betaling de maandelijkse rente niet. Controleer saldo, rente en betaling en verhoog het bedrag alleen binnen je werkelijke budget." },
  { type: 'paragraph', html: "De simulatie gebruikt je invoer, maandelijkse rente en periodieke betalingen. Kosten, nieuwe aankopen, renteveranderingen en extra aflossingen kunnen de werkelijke looptijd wijzigen." },
  { type: 'paragraph', html: "Een snelle eerste overwinning helpt bij volhouden, maar de sneeuwbal minimaliseert niet altijd de totale kosten. Als een dure schuld als laatste komt, betaal je mogelijk meer rente dan met de lawinemethode." },
  { type: 'paragraph', html: "Download het plan als CSV en werk de betalingen bij wanneer inkomen, rente of minimumbedragen veranderen. Een actueel plan is bruikbaarder dan een oude einddatum." },
  { type: 'paragraph', html: "Dit is een planningshulpmiddel en geen vervanging voor financieel, juridisch of schuldadvies. Zoek bij betalingsproblemen vroegtijdig onafhankelijke hulp." },
  { type: 'paragraph', html: "Een goede volgorde lost de schuld niet vanzelf op: regelmatige betalingen, een realistisch budget en geen nieuwe saldi blijven belangrijk. Het plan maakt deze aannames zichtbaar." },
  { type: 'paragraph', html: "Lees rente en totaal betaald samen met de datum van financiële vrijheid. Een kortere looptijd is niet beter als de betaling niet duurzaam is." },
  { type: 'paragraph', html: "Gebruik het resultaat om sneeuwbal- en lawinescenario's te vergelijken. Controleer saldo, rente, minimumbetalingen, afronding en periode voordat je beslist." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat om sneeuwbal- en lawinescenario's te vergelijken en controleer de aannames voordat je een beslissing neemt." },],
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
