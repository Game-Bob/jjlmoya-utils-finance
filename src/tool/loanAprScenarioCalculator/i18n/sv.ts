import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Erbjudande A",
  labelScenarioB: "Erbjudande B",
  labelScenarioName: "Erbjudandets namn",
  labelCurrency: "Valuta",
  labelApproximateRates:
    "Ungefärliga planeringsfaktorer, inte aktuella växelkurser.",
  labelPrincipal: "Lånebelopp",
  labelTerm: "Återbetalningstid",
  labelMonths: "månader",
  labelInputBasis: "Vilken uppgift känner du till?",
  labelAnnualRate: "Nominell årsränta",
  labelMonthlyPayment: "Känd månadsbetalning",
  labelUpfrontFees: "Startavgifter",
  labelMonthlyFees: "Månadsavgifter",
  labelFinalFees: "Slutavgift",
  labelOfferNameA: "Erbjudande A",
  labelOfferNameB: "Erbjudande B",
  labelRateMode: "Jag känner till räntan",
  labelPaymentMode: "Jag känner till betalningen",
  labelPreset: "Börja jämföra",
  labelPresetBalanced: "Balanserade erbjudanden",
  labelPresetLowFee: "Låg ränta med avgifter",
  labelPresetLongTerm: "Längre löptid",
  labelReset: "Återställ värden",
  labelCopy: "Kopiera jämförelse",
  labelCopied: "Jämförelsen kopierades",
  labelEffectiveApr: "Effektiv årskostnad",
  labelNominalRate: "Nominell ränta",
  labelMonthlyPaymentResult: "Månadsbetalning",
  labelTotalPaid: "Totalt betalt",
  labelTotalFees: "Avgifter i scenariot",
  labelFinanceCost: "Kostnad över kapitalet",
  labelNetCashReceived: "Mottaget efter startavgifter",
  labelWinner: "Vilket erbjudande kostar minst?",
  labelLowerCost: "Lägre effektiv kostnad",
  labelHigherCost: "Högre effektiv kostnad",
  labelTie: "Nästan lika",
  labelNeedValidInputs: "Giltiga uppgifter krävs",
  labelInvalidPrincipal:
    "Lånebeloppet måste vara större än noll och högre än startavgifterna.",
  labelInvalidTerm: "Använd en hel löptid från 1 till 600 månader.",
  labelInvalidFees: "Avgifter får inte vara negativa.",
  labelInvalidPayment:
    "Ange en positiv månadsbetalning som kan återbetala det mottagna nettobeloppet.",
  labelInvalidRate: "Använd en nominell årsränta från 0% till 100%.",
  labelNoComparison: "Fyll i båda erbjudandena för att jämföra dem.",
  labelTimeline: "Betalningsplan",
  labelStart: "Start",
  labelMonthly: "Varje månad",
  labelEnd: "Sista månaden",
  labelFormula: "Så fungerar jämförelsen",
  labelFormulaText:
    "Den effektiva årskostnaden är den annualiserade månadsränta som gör mottaget belopp lika med diskonterade betalningar och avgifter.",
  labelApproximation:
    "Uppskattningen antar lika månadsbetalningar, ingen amorteringsfri period och endast de avgifter du anger. Den ersätter inte långivarens officiella APR.",
  labelScenarioSummary: "Scenariesammanfattning",
  currencyCode: "SEK",
  currencyLocale: "sv-SE",
};

const faq = [
  {
    question: "Vad är skillnaden mellan räntan och den effektiva årskostnaden?",
    answer:
      "Den nominella räntan beskriver räntan på skulden. Den effektiva årskostnaden tar också hänsyn till belopp och tidpunkt för start-, månads- och slutavgifter.",
  },
  {
    question: "Kan jag ange månadsbetalningen i stället för räntan?",
    answer:
      "Ja. Välj känd månadsbetalning för erbjudandet. Kalkylatorn räknar fram den månadsränta som stämmer med mottaget belopp, betalningar och avgifter.",
  },
  {
    question: "Vilket erbjudande är billigast?",
    answer:
      "Jämför först den effektiva årskostnaden och kontrollera sedan totalt betalt och mottaget belopp. En lägre procentsats kan ändå ge högre total kostnad om belopp eller löptid skiljer sig.",
  },
  {
    question: "Är detta långivarens officiella APR?",
    answer:
      "Nej. Det är en transparent scenarieuppskattning utifrån dina uppgifter. Långivare och länder kan hantera skatt, försäkring, betalningsdatum och andra kostnader på olika sätt.",
  },
];

const howTo = [
  {
    name: "Ange belopp och löptid",
    text: "Skriv in beloppet du skulle få och antalet månadsbetalningar för varje erbjudande.",
  },
  {
    name: "Välj känd uppgift",
    text: "Ange nominell årsränta eller månadsbetalning beroende på erbjudandets information.",
  },
  {
    name: "Lägg till alla avgifter",
    text: "Ta med start-, månads- och slutavgifter så att hela kassaflödet visas.",
  },
  {
    name: "Läs jämförelsen",
    text: "Använd effektiv årskostnad och kontrollera totalt betalt och mottaget belopp innan du bestämmer dig.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kalkylator för låne-APR-scenarier",
    description:
      "Jämför två lånescenarier med räntor, betalningar och avgifter.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "SEK" },
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
    name: "Jämför två låneerbjudanden",
    description:
      "Modellera två låneflöden och jämför deras effektiva årskostnad.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "lan-apr-scenariokalkylator",
  title: "Kalkylator för scenarier med låne APR",
  description:
    "Jämför två låneerbjudanden med ränta, betalningsplan och avgifter för att uppskatta den effektiva årskostnaden.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    { type: "title", text: "Jämför lån efter effektiv årskostnad", level: 2 },
    {
      type: "paragraph",
      html: "<p>En låg annonserad ränta kan dölja uppläggningsavgift, månadsavgift eller en slutkostnad. Den här kalkylatorn gör två erbjudanden till jämförbara kassaflöden så att kostnaden för pengarna du faktiskt får blir tydlig.</p>",
    },
    { type: "title", text: "Vad uppskattningen innehåller", level: 3 },
    {
      type: "paragraph",
      html: "<p>För varje erbjudande anger du belopp, löptid, nominell ränta eller känd månadsbetalning samt avgifter vid olika tidpunkter. Kalkylatorn hittar månadsräntan som balanserar mottaget belopp mot diskonterade betalningar och avgifter och räknar om den till årsränta.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Kreditkostnaden blir därmed bredare än bara räntan. Resultatet är en uppskattning eftersom officiell APR kan följa nationella regler och innehålla andra antaganden.</p>",
    },
    { type: "title", text: "Så läser du resultatet", level: 3 },
    {
      type: "list",
      items: [
        "Jämför effektiv årskostnad när belopp och löptid liknar varandra.",
        "Kontrollera totalt betalt för den faktiska pengapåverkan.",
        "Kontrollera mottaget belopp efter startavgifter.",
        "Använd betalningsplanen för att se när varje kostnad uppstår.",
      ],
    },
    {
      type: "tip",
      title: "Långivarens dokument är den slutliga referensen",
      html: "<p>Vid ett riktigt avtal ska du jämföra långivarens officiella APR med samma antaganden. Fråga om försäkring, skatt, rörlig ränta, kostnad för förtida återbetalning och avgifter som saknas.</p>",
    },
    { type: "title", text: "Begränsningar för ett scenario", level: 3 },
    {
      type: "paragraph",
      html: "<p>Verktyget antar lika månadsbetalningar, ingen amorteringsfri period och avgifter i början, under löptiden eller den sista månaden. Det intygar inte betalningsförmåga, godkännande, laglighet eller officiell APR.</p>",
    },
  ],
};
