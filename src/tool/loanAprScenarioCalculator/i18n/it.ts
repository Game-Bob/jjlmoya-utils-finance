import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Offerta A",
  labelScenarioB: "Offerta B",
  labelScenarioName: "Nome dell'offerta",
  labelCurrency: "Valuta",
  labelApproximateRates:
    "Fattori indicativi per la pianificazione, non tassi di cambio in tempo reale.",
  labelPrincipal: "Importo preso in prestito",
  labelTerm: "Durata del rimborso",
  labelMonths: "mesi",
  labelInputBasis: "Quale dato conosci?",
  labelAnnualRate: "Tasso nominale annuo",
  labelMonthlyPayment: "Rata mensile conosciuta",
  labelUpfrontFees: "Costi iniziali",
  labelMonthlyFees: "Costi mensili",
  labelFinalFees: "Costo finale",
  labelOfferNameA: "Offerta A",
  labelOfferNameB: "Offerta B",
  labelRateMode: "Conosco il tasso",
  labelPaymentMode: "Conosco la rata",
  labelPreset: "Inizia un confronto",
  labelPresetBalanced: "Offerte equilibrate",
  labelPresetLowFee: "Tasso basso con costi",
  labelPresetLongTerm: "Durata più lunga",
  labelReset: "Reimposta valori",
  labelCopy: "Copia confronto",
  labelCopied: "Confronto copiato",
  labelEffectiveApr: "Costo annuo effettivo",
  labelNominalRate: "Tasso nominale",
  labelMonthlyPaymentResult: "Rata mensile",
  labelTotalPaid: "Totale pagato",
  labelTotalFees: "Costi dello scenario",
  labelFinanceCost: "Costo oltre il capitale",
  labelNetCashReceived: "Somma ricevuta dopo i costi iniziali",
  labelWinner: "Quale offerta costa meno?",
  labelLowerCost: "Costo effettivo più basso",
  labelHigherCost: "Costo effettivo più alto",
  labelTie: "Quasi uguali",
  labelNeedValidInputs: "Servono dati validi",
  labelInvalidPrincipal:
    "L'importo deve essere positivo e superiore ai costi iniziali.",
  labelInvalidTerm: "Usa una durata intera da 1 a 600 mesi.",
  labelInvalidFees: "I costi non possono essere negativi.",
  labelInvalidPayment:
    "Inserisci una rata mensile positiva che possa rimborsare la somma ricevuta.",
  labelInvalidRate: "Usa un tasso nominale annuo tra 0% e 100%.",
  labelNoComparison: "Completa entrambe le offerte per confrontarle.",
  labelTimeline: "Calendario dei pagamenti",
  labelStart: "Inizio",
  labelMonthly: "Ogni mese",
  labelEnd: "Ultimo mese",
  labelFormula: "Come funziona il confronto",
  labelFormulaText:
    "Il costo annuo effettivo è il tasso mensile annualizzato che rende uguali la somma ricevuta e i pagamenti e costi attualizzati.",
  labelApproximation:
    "La stima presume rate mensili uguali, nessun periodo di sospensione e solo i costi inseriti. Non sostituisce il TAEG ufficiale del finanziatore.",
  labelScenarioSummary: "Riepilogo scenario",
  currencyCode: "EUR",
  currencyLocale: "it-IT",
};

const faq = [
  {
    question:
      "Qual è la differenza tra tasso di interesse e costo annuo effettivo?",
    answer:
      "Il tasso nominale descrive gli interessi sul saldo. Il costo annuo effettivo considera anche importo e momento dei costi iniziali, mensili e finali inseriti.",
  },
  {
    question: "Posso inserire una rata mensile invece del tasso?",
    answer:
      "Sì. Scegli la rata mensile conosciuta per l'offerta. Il calcolatore ricava il tasso mensile coerente con somma ricevuta, pagamenti e costi dello scenario.",
  },
  {
    question: "Quale offerta è più economica?",
    answer:
      "Confronta prima il costo annuo effettivo, poi il totale pagato e la somma ricevuta. Una percentuale più bassa può comunque avere un costo totale maggiore se cambiano durata o importo.",
  },
  {
    question: "È il TAEG ufficiale del finanziatore?",
    answer:
      "No. È una stima trasparente basata sui tuoi dati. Finanziatori e Paesi possono trattare diversamente date di pagamento, tasse, assicurazioni e altri costi.",
  },
];

const howTo = [
  {
    name: "Inserisci importo e durata",
    text: "Aggiungi la somma che riceveresti e il numero di rate mensili per ogni offerta.",
  },
  {
    name: "Scegli il dato noto",
    text: "Inserisci il tasso nominale annuo o la rata mensile, in base a ciò che riporta l'offerta.",
  },
  {
    name: "Aggiungi tutti i costi",
    text: "Indica i costi iniziali, mensili e finali per rappresentare il flusso completo.",
  },
  {
    name: "Leggi il confronto",
    text: "Usa il costo annuo effettivo e controlla totale pagato e somma ricevuta prima di decidere.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calcolatore scenari TAEG prestito",
    description: "Confronta due scenari di prestito con tassi, rate e costi.",
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
    name: "Confrontare due offerte di prestito",
    description:
      "Modella i flussi di due prestiti e confronta il costo annuo effettivo.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "calcolatore-scenari-taeg-prestito",
  title: "Calcolatore scenari TAEG prestito",
  description:
    "Confronta due offerte di prestito con interessi, piano di rimborso e costi per stimare il costo annuo effettivo.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Confronta i prestiti per costo annuo effettivo",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Un tasso pubblicizzato basso può nascondere un costo di apertura, un addebito mensile o un costo finale. Questo calcolatore trasforma i dati di due offerte in flussi di cassa comparabili per mostrare il costo del denaro che ricevi davvero.</p>",
    },
    { type: "title", text: "Cosa comprende la stima", level: 3 },
    {
      type: "paragraph",
      html: "<p>Per ogni offerta inserisci importo, durata, tasso nominale o rata mensile conosciuta e costi applicati nei diversi momenti. Il calcolatore trova il tasso mensile che bilancia la somma ricevuta con pagamenti e costi attualizzati, poi lo annualizza.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Il prezzo del credito è quindi più ampio del solo tasso di interesse. Il risultato è una stima perché il TAEG ufficiale può seguire regole nazionali e includere ipotesi non presenti nello scenario.</p>",
    },
    { type: "title", text: "Come leggere il risultato", level: 3 },
    {
      type: "list",
      items: [
        "Confronta il costo annuo effettivo quando importo e durata sono simili.",
        "Controlla il totale pagato per capire l'impatto assoluto.",
        "Verifica la somma ricevuta dopo i costi iniziali.",
        "Usa il calendario per vedere quando entra ogni costo.",
      ],
    },
    {
      type: "tip",
      title: "Il documento del finanziatore resta il riferimento",
      html: "<p>Per un contratto reale confronta il TAEG ufficiale con le stesse ipotesi. Chiedi di assicurazioni, tasse, tassi variabili, costi di estinzione anticipata e addebiti non inseriti.</p>",
    },
    { type: "title", text: "Limiti di uno scenario", level: 3 },
    {
      type: "paragraph",
      html: "<p>Lo strumento presume rate mensili uguali, nessun periodo di sospensione e costi all'inizio, durante la durata o nell'ultimo mese. Non certifica sostenibilità, approvazione, legalità o TAEG ufficiale.</p>",
    },
  ],
};
