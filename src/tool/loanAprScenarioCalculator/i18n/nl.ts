import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Aanbod A",
  labelScenarioB: "Aanbod B",
  labelScenarioName: "Naam van aanbod",
  labelCurrency: "Valuta",
  labelApproximateRates:
    "Benaderende planningsfactoren, geen live wisselkoersen.",
  labelPrincipal: "Geleend bedrag",
  labelTerm: "Looptijd",
  labelMonths: "maanden",
  labelInputBasis: "Welke informatie weet je?",
  labelAnnualRate: "Nominale jaarrente",
  labelMonthlyPayment: "Bekende maandtermijn",
  labelUpfrontFees: "Eenmalige kosten",
  labelMonthlyFees: "Maandelijkse kosten",
  labelFinalFees: "Eindkosten",
  labelOfferNameA: "Aanbod A",
  labelOfferNameB: "Aanbod B",
  labelRateMode: "Ik ken de rente",
  labelPaymentMode: "Ik ken de termijn",
  labelPreset: "Begin een vergelijking",
  labelPresetBalanced: "Gebalanceerde aanbiedingen",
  labelPresetLowFee: "Lage rente met kosten",
  labelPresetLongTerm: "Langere looptijd",
  labelReset: "Waarden resetten",
  labelCopy: "Vergelijking kopiëren",
  labelCopied: "Vergelijking gekopieerd",
  labelEffectiveApr: "Effectieve jaarlijkse kosten",
  labelNominalRate: "Nominale rente",
  labelMonthlyPaymentResult: "Maandtermijn",
  labelTotalPaid: "Totaal betaald",
  labelTotalFees: "Kosten in scenario",
  labelFinanceCost: "Kosten boven hoofdsom",
  labelNetCashReceived: "Ontvangen bedrag na eenmalige kosten",
  labelWinner: "Welk aanbod kost minder?",
  labelLowerCost: "Lagere effectieve kosten",
  labelHigherCost: "Hogere effectieve kosten",
  labelTie: "Bijna gelijk",
  labelNeedValidInputs: "Geldige gegevens nodig",
  labelInvalidPrincipal:
    "Het geleende bedrag moet groter zijn dan nul en hoger dan de eenmalige kosten.",
  labelInvalidTerm: "Gebruik een hele looptijd van 1 tot 600 maanden.",
  labelInvalidFees: "Kosten mogen niet negatief zijn.",
  labelInvalidPayment:
    "Voer een positieve maandtermijn in die het ontvangen bedrag kan terugbetalen.",
  labelInvalidRate: "Gebruik een nominale jaarrente van 0% tot 100%.",
  labelNoComparison: "Vul beide aanbiedingen in om ze te vergelijken.",
  labelTimeline: "Betalingsverloop",
  labelStart: "Start",
  labelMonthly: "Elke maand",
  labelEnd: "Laatste maand",
  labelFormula: "Zo werkt de vergelijking",
  labelFormulaText:
    "De effectieve jaarlijkse kosten zijn de geannualiseerde maandrente die het ontvangen bedrag gelijk maakt aan de contant gemaakte betalingen en kosten.",
  labelApproximation:
    "De schatting gaat uit van gelijke maandtermijnen, geen uitstelperiode en alleen de ingevoerde kosten. Ze vervangt niet de officiële APR van de kredietverstrekker.",
  labelScenarioSummary: "Samenvatting scenario",
  currencyCode: "EUR",
  currencyLocale: "nl-NL",
};

const faq = [
  {
    question:
      "Wat is het verschil tussen rente en effectieve jaarlijkse kosten?",
    answer:
      "De nominale rente beschrijft de rente op het saldo. De effectieve jaarlijkse kosten houden ook rekening met bedrag en timing van de ingevoerde eenmalige, maandelijkse en eindkosten.",
  },
  {
    question: "Kan ik een maandtermijn invoeren in plaats van een rente?",
    answer:
      "Ja. Kies de bekende maandtermijn voor dat aanbod. De calculator leidt de maandrente af die past bij het ontvangen bedrag, de betalingen en de kosten.",
  },
  {
    question: "Welk aanbod is goedkoper?",
    answer:
      "Vergelijk eerst de effectieve jaarlijkse kosten en bekijk daarna het totaal betaald en het ontvangen bedrag. Een lager percentage kan door een andere looptijd of hoofdsom toch tot hogere totale kosten leiden.",
  },
  {
    question: "Is dit de officiële APR van een kredietverstrekker?",
    answer:
      "Nee. Het is een transparante schatting op basis van jouw gegevens. Kredietverstrekkers en landen kunnen belastingen, verzekeringen, betaaldatums en kosten anders verwerken.",
  },
];

const howTo = [
  {
    name: "Vul bedrag en looptijd in",
    text: "Voer voor elk aanbod het bedrag dat je ontvangt en het aantal maandtermijnen in.",
  },
  {
    name: "Kies de bekende informatie",
    text: "Vul de nominale jaarrente of de maandtermijn in, afhankelijk van het aanbod.",
  },
  {
    name: "Voeg alle kosten toe",
    text: "Neem eenmalige, maandelijkse en eindkosten op voor een volledig betalingsverloop.",
  },
  {
    name: "Lees de vergelijking",
    text: "Gebruik de effectieve jaarlijkse kosten en controleer daarna totaal betaald en ontvangen bedrag.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "APR scenariocalculator voor leningen",
    description:
      "Vergelijk twee leningsscenario's met rente, termijnen en kosten.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Twee leningaanbiedingen vergelijken",
    description:
      "Modelleer twee betalingsverlopen en vergelijk hun effectieve jaarlijkse kosten.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "lening-apr-scenario-calculator",
  title: "APR scenariocalculator voor leningen",
  description:
    "Vergelijk twee leningaanbiedingen met rente, betalingsschema en kosten om de effectieve jaarlijkse kosten te schatten.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Vergelijk leningen op effectieve jaarlijkse kosten",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Een lage geadverteerde rente kan administratiekosten, maandelijkse servicekosten of een eindbedrag verbergen. Deze calculator maakt van twee aanbiedingen vergelijkbare betalingsscenario's zodat je de kosten van het werkelijk ontvangen geld ziet.</p>",
    },
    { type: "title", text: "Wat de schatting bevat", level: 3 },
    {
      type: "paragraph",
      html: "<p>Voer per aanbod het bedrag, de looptijd, de nominale rente of bekende maandtermijn en de kosten op verschillende momenten in. De calculator zoekt de maandrente die het ontvangen bedrag gelijk maakt aan de contant gemaakte betalingen en kosten, en annualiseert die.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Zo is de kredietprijs breder dan alleen de rente. Het resultaat blijft een schatting omdat officiële APR-regels en aanvullende aannames per land kunnen verschillen.</p>",
    },
    { type: "title", text: "Het resultaat lezen", level: 3 },
    {
      type: "list",
      items: [
        "Vergelijk de effectieve kosten als bedrag en looptijd vergelijkbaar zijn.",
        "Bekijk het totaal betaald voor de totale geldimpact.",
        "Controleer het ontvangen bedrag na eenmalige kosten.",
        "Gebruik het betalingsverloop om de timing van kosten te zien.",
      ],
    },
    {
      type: "tip",
      title: "Gebruik de offerte als laatste referentie",
      html: "<p>Vergelijk bij een echt contract de officiële APR met dezelfde aannames. Vraag naar verzekeringen, belastingen, variabele rente, kosten voor vervroegd aflossen en niet ingevoerde kosten.</p>",
    },
    { type: "title", text: "Grenzen van een scenario", level: 3 },
    {
      type: "paragraph",
      html: "<p>De tool gaat uit van gelijke maandtermijnen, geen uitstelperiode en kosten aan het begin, tijdens de looptijd of in de laatste maand. De tool bevestigt geen betaalbaarheid, goedkeuring, legaliteit of officiële APR.</p>",
    },
  ],
};
