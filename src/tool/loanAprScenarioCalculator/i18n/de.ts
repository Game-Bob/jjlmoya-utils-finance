import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Angebot A",
  labelScenarioB: "Angebot B",
  labelScenarioName: "Name des Angebots",
  labelCurrency: "Währung",
  labelApproximateRates:
    "Näherungswerte für die Planung, keine Live-Wechselkurse.",
  labelPrincipal: "Geliehener Betrag",
  labelTerm: "Laufzeit",
  labelMonths: "Monate",
  labelInputBasis: "Welche Angabe kennen Sie?",
  labelAnnualRate: "Nominaler Jahreszins",
  labelMonthlyPayment: "Bekannte Monatsrate",
  labelUpfrontFees: "Anfangsgebühren",
  labelMonthlyFees: "Monatliche Gebühren",
  labelFinalFees: "Schlussgebühr",
  labelOfferNameA: "Angebot A",
  labelOfferNameB: "Angebot B",
  labelRateMode: "Ich kenne den Zinssatz",
  labelPaymentMode: "Ich kenne die Monatsrate",
  labelPreset: "Vergleich starten",
  labelPresetBalanced: "Ausgewogene Angebote",
  labelPresetLowFee: "Niedriger Zins mit Gebühren",
  labelPresetLongTerm: "Längere Laufzeit",
  labelReset: "Werte zurücksetzen",
  labelCopy: "Vergleich kopieren",
  labelCopied: "Vergleich kopiert",
  labelEffectiveApr: "Effektive jährliche Kosten",
  labelNominalRate: "Nominalzins",
  labelMonthlyPaymentResult: "Monatsrate",
  labelTotalPaid: "Gesamtzahlung",
  labelTotalFees: "Gebühren im Szenario",
  labelFinanceCost: "Kosten über dem Darlehen",
  labelNetCashReceived: "Auszahlung nach Anfangsgebühren",
  labelWinner: "Welches Angebot kostet weniger?",
  labelLowerCost: "Geringere effektive Kosten",
  labelHigherCost: "Höhere effektive Kosten",
  labelTie: "Fast gleich",
  labelNeedValidInputs: "Gültige Angaben erforderlich",
  labelInvalidPrincipal:
    "Der geliehene Betrag muss größer als null und höher als die Anfangsgebühren sein.",
  labelInvalidTerm: "Verwenden Sie eine ganze Laufzeit von 1 bis 600 Monaten.",
  labelInvalidFees: "Gebühren dürfen nicht negativ sein.",
  labelInvalidPayment:
    "Geben Sie eine positive Monatsrate ein, die die Auszahlung zurückzahlt.",
  labelInvalidRate:
    "Verwenden Sie einen nominalen Jahreszins von 0 % bis 100 %.",
  labelNoComparison: "Vervollständigen Sie beide Angebote für den Vergleich.",
  labelTimeline: "Zahlungsverlauf",
  labelStart: "Start",
  labelMonthly: "Monatlich",
  labelEnd: "Letzter Monat",
  labelFormula: "So funktioniert der Vergleich",
  labelFormulaText:
    "Die effektiven jährlichen Kosten sind der annualisierte Monatszins, bei dem Auszahlung und abgezinste Raten samt Gebühren übereinstimmen.",
  labelApproximation:
    "Die Schätzung setzt gleiche Monatsraten, keine tilgungsfreie Zeit und nur die eingegebenen Gebühren voraus. Sie ersetzt nicht die Angaben des Kreditgebers.",
  labelScenarioSummary: "Szenarioübersicht",
  currencyCode: "EUR",
  currencyLocale: "de-DE",
};

const faq = [
  {
    question:
      "Was ist der Unterschied zwischen Zinssatz und effektiven jährlichen Kosten?",
    answer:
      "Der nominale Zinssatz beschreibt die Zinsen auf den Saldo. Die effektiven jährlichen Kosten berücksichtigen zusätzlich Zeitpunkt und Höhe der eingegebenen Anfangs-, Monats- und Schlussgebühren.",
  },
  {
    question: "Kann ich statt eines Zinssatzes eine Monatsrate eingeben?",
    answer:
      "Ja. Wählen Sie für das Angebot die bekannte Monatsrate. Der Rechner ermittelt den Monatszins, der Auszahlung, Zahlungsstrom und Gebühren dieses Szenarios entspricht.",
  },
  {
    question: "Welches Angebot ist günstiger?",
    answer:
      "Vergleichen Sie zuerst die effektiven jährlichen Kosten und prüfen Sie danach Gesamtzahlung und Auszahlung. Bei unterschiedlicher Laufzeit oder Kredithöhe sollte die Entscheidung alle drei Signale berücksichtigen.",
  },
  {
    question: "Sind das die offiziellen Kreditkosten des Anbieters?",
    answer:
      "Nein. Es ist eine transparente Szenarioschätzung anhand Ihrer Eingaben. Kreditgeber und Länder können Kosten, Zahlungstermine, Steuern und Versicherungen anders berücksichtigen.",
  },
];

const howTo = [
  {
    name: "Betrag und Laufzeit eingeben",
    text: "Geben Sie für jedes Angebot den ausgezahlten Betrag und die Zahl der Monatsraten ein.",
  },
  {
    name: "Bekannte Angabe auswählen",
    text: "Geben Sie je nach Angebot den nominalen Jahreszins oder die bekannte Monatsrate ein.",
  },
  {
    name: "Gebühren ergänzen",
    text: "Tragen Sie Gebühren zu Beginn, pro Monat und am Ende ein, damit der Zahlungsstrom vollständig ist.",
  },
  {
    name: "Vergleich lesen",
    text: "Nutzen Sie die effektiven jährlichen Kosten und prüfen Sie anschließend Gesamtzahlung und Auszahlung.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kredit APR Szenario Rechner",
    description:
      "Vergleicht zwei Kreditszenarien mit Zinsen, Raten und Gebühren.",
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
    name: "Zwei Kreditangebote vergleichen",
    description: "Vergleicht Zahlungsströme und effektive jährliche Kosten.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "kredit-apr-szenario-rechner",
  title: "Kredit APR Szenario Rechner",
  description:
    "Vergleichen Sie zwei Kreditangebote mit Zinsen, Zahlungsplan und Gebühren und schätzen Sie die effektiven jährlichen Kosten.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Kreditangebote nach effektiven Kosten vergleichen",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Ein niedriger Werbezins kann eine Bearbeitungsgebühr, eine monatliche Servicegebühr oder eine Schlusszahlung verbergen. Dieser Rechner macht daraus zwei vergleichbare Zahlungsströme und zeigt die Kosten des tatsächlich ausgezahlten Geldes.</p>",
    },
    { type: "title", text: "Was die Schätzung enthält", level: 3 },
    {
      type: "paragraph",
      html: "<p>Geben Sie Betrag, Laufzeit, Zinssatz oder Monatsrate sowie Gebühren zu verschiedenen Zeitpunkten ein. Der Rechner findet den Monatszins, der Auszahlung und abgezinste Zahlungen samt Gebühren ausgleicht, und annualisiert ihn.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Damit wird der Preis eines Kredits breiter betrachtet als nur der Nominalzins. Das Ergebnis bleibt eine Schätzung, weil offizielle Angaben je nach Land weitere Kosten und Annahmen enthalten können.</p>",
    },
    { type: "title", text: "Ergebnis richtig lesen", level: 3 },
    {
      type: "list",
      items: [
        "Vergleichen Sie die effektiven Kosten bei gleicher Kredithöhe und Laufzeit.",
        "Prüfen Sie die Gesamtzahlung für die absolute Belastung.",
        "Beachten Sie die Auszahlung nach Anfangsgebühren.",
        "Nutzen Sie den Zahlungsverlauf, um den Zeitpunkt jeder Kostenart zu sehen.",
      ],
    },
    {
      type: "tip",
      title: "Kreditunterlagen bleiben die Referenz",
      html: "<p>Vergleichen Sie bei einem echten Vertrag die offiziellen Angaben des Kreditgebers mit denselben Annahmen. Fragen Sie nach Versicherungen, Steuern, variablen Zinsen und vorzeitigen Rückzahlungskosten.</p>",
    },
    { type: "title", text: "Grenzen der Szenarioschätzung", level: 3 },
    {
      type: "paragraph",
      html: "<p>Das Tool setzt gleiche Monatsraten, keine tilgungsfreie Zeit und Gebühren zu Beginn, während der Laufzeit oder im letzten Monat voraus. Es bestätigt weder Leistbarkeit noch Genehmigung oder den offiziellen APR eines Produkts.</p>",
    },
  ],
};
