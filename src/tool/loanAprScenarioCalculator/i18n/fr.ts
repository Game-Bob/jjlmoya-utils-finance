import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Offre A",
  labelScenarioB: "Offre B",
  labelScenarioName: "Nom de l'offre",
  labelCurrency: "Devise",
  labelApproximateRates:
    "Facteurs indicatifs pour la planification, pas des taux de change en direct.",
  labelPrincipal: "Montant emprunté",
  labelTerm: "Durée de remboursement",
  labelMonths: "mois",
  labelInputBasis: "Quelle donnée connaissez-vous ?",
  labelAnnualRate: "Taux annuel nominal",
  labelMonthlyPayment: "Mensualité connue",
  labelUpfrontFees: "Frais initiaux",
  labelMonthlyFees: "Frais mensuels",
  labelFinalFees: "Frais finaux",
  labelOfferNameA: "Offre A",
  labelOfferNameB: "Offre B",
  labelRateMode: "Je connais le taux",
  labelPaymentMode: "Je connais la mensualité",
  labelPreset: "Commencer une comparaison",
  labelPresetBalanced: "Offres équilibrées",
  labelPresetLowFee: "Taux bas avec frais",
  labelPresetLongTerm: "Durée plus longue",
  labelReset: "Réinitialiser les valeurs",
  labelCopy: "Copier la comparaison",
  labelCopied: "Comparaison copiée",
  labelEffectiveApr: "Coût annuel effectif",
  labelNominalRate: "Taux nominal",
  labelMonthlyPaymentResult: "Mensualité",
  labelTotalPaid: "Total versé",
  labelTotalFees: "Frais du scénario",
  labelFinanceCost: "Coût au-dessus du principal",
  labelNetCashReceived: "Somme reçue après les frais initiaux",
  labelWinner: "Quelle offre coûte le moins ?",
  labelLowerCost: "Coût effectif inférieur",
  labelHigherCost: "Coût effectif supérieur",
  labelTie: "Presque identiques",
  labelNeedValidInputs: "Données valides nécessaires",
  labelInvalidPrincipal:
    "Le montant emprunté doit être supérieur à zéro et aux frais initiaux.",
  labelInvalidTerm: "Utilisez une durée entière de 1 à 600 mois.",
  labelInvalidFees: "Les frais ne peuvent pas être négatifs.",
  labelInvalidPayment:
    "Saisissez une mensualité positive qui rembourse la somme reçue.",
  labelInvalidRate:
    "Utilisez un taux annuel nominal compris entre 0 % et 100 %.",
  labelNoComparison: "Complétez les deux offres pour les comparer.",
  labelTimeline: "Calendrier des paiements",
  labelStart: "Début",
  labelMonthly: "Chaque mois",
  labelEnd: "Dernier mois",
  labelFormula: "Fonctionnement de la comparaison",
  labelFormulaText:
    "Le coût annuel effectif est le taux mensuel annualisé qui égalise la somme reçue et les paiements et frais actualisés.",
  labelApproximation:
    "L'estimation suppose des mensualités égales, aucune période de différé et uniquement les frais saisis. Elle ne remplace pas le TAEG officiel du prêteur.",
  labelScenarioSummary: "Résumé du scénario",
  currencyCode: "EUR",
  currencyLocale: "fr-FR",
};

const faq = [
  {
    question:
      "Quelle est la différence entre le taux d'intérêt et le coût annuel effectif ?",
    answer:
      "Le taux nominal décrit les intérêts appliqués au solde. Le coût annuel effectif tient aussi compte du montant et du moment des frais initiaux, mensuels et finaux saisis.",
  },
  {
    question: "Puis-je saisir une mensualité plutôt qu'un taux d'intérêt ?",
    answer:
      "Oui. Choisissez la mensualité connue pour l'offre. Le calculateur déduit le taux mensuel correspondant à la somme reçue, aux paiements et aux frais du scénario.",
  },
  {
    question: "Quelle offre est la moins chère ?",
    answer:
      "Comparez d'abord le coût annuel effectif, puis le total versé et la somme reçue. Un pourcentage plus bas peut entraîner un coût total plus élevé si le montant ou la durée diffère.",
  },
  {
    question: "Est-ce le TAEG officiel du prêteur ?",
    answer:
      "Non. Il s'agit d'une estimation transparente basée sur vos données. Les prêteurs et les juridictions peuvent traiter différemment les taxes, assurances, dates de paiement et autres frais.",
  },
];

const howTo = [
  {
    name: "Saisir le montant et la durée",
    text: "Ajoutez la somme reçue et le nombre de mensualités pour chaque offre.",
  },
  {
    name: "Choisir la donnée connue",
    text: "Saisissez le taux annuel nominal ou la mensualité selon les informations de l'offre.",
  },
  {
    name: "Ajouter tous les frais",
    text: "Indiquez les frais initiaux, mensuels et finaux afin de représenter le flux complet.",
  },
  {
    name: "Lire la comparaison",
    text: "Utilisez le coût annuel effectif, puis vérifiez le total versé et la somme reçue avant de décider.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculateur de scénarios de TAEG de prêt",
    description:
      "Compare deux scénarios de prêt avec taux, mensualités et frais.",
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
    name: "Comparer deux offres de prêt",
    description:
      "Modélisez les flux de deux prêts et comparez leur coût annuel effectif.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "calculateur-scenarios-taeg-pret",
  title: "Calculateur de scénarios de TAEG de prêt",
  description:
    "Comparez deux offres de prêt avec leurs intérêts, échéances et frais pour estimer le coût annuel effectif.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Comparer les prêts par leur coût annuel effectif",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Un taux publicitaire bas peut cacher des frais de dossier, des frais mensuels ou un coût final. Ce calculateur transforme les informations de deux offres en flux de trésorerie comparables afin d'évaluer le coût de la somme réellement reçue.</p>",
    },
    { type: "title", text: "Ce que comprend l'estimation", level: 3 },
    {
      type: "paragraph",
      html: "<p>Pour chaque offre, saisissez le montant, la durée, le taux nominal ou la mensualité connue et les frais à chaque étape. Le calculateur recherche le taux mensuel qui équilibre la somme reçue avec les paiements et frais actualisés, puis l'annualise.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Le prix du crédit est ainsi plus large que le taux d'intérêt seul. Le résultat reste une estimation, car le TAEG officiel peut suivre des règles nationales et intégrer d'autres hypothèses.</p>",
    },
    { type: "title", text: "Lire le résultat", level: 3 },
    {
      type: "list",
      items: [
        "Comparez le coût annuel effectif lorsque montant et durée sont similaires.",
        "Vérifiez le total versé pour mesurer l'impact en euros.",
        "Regardez la somme reçue après les frais initiaux.",
        "Utilisez le calendrier pour voir quand chaque coût intervient.",
      ],
    },
    {
      type: "tip",
      title: "Le document du prêteur reste la référence",
      html: "<p>Pour un contrat réel, rapprochez le TAEG officiel des mêmes hypothèses. Demandez les informations sur assurances, taxes, taux variables et pénalités de remboursement anticipé.</p>",
    },
    { type: "title", text: "Limites d'un scénario", level: 3 },
    {
      type: "paragraph",
      html: "<p>L'outil suppose des mensualités égales, aucune période de différé et des frais au début, pendant la durée ou au dernier mois. Il ne certifie ni l'accessibilité financière, ni l'accord, ni le TAEG officiel.</p>",
    },
  ],
};
