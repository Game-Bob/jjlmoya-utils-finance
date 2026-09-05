/* eslint-disable max-lines, max-lines-per-function */
import type {
  WithContext,
  FAQPage,
  HowTo,
  SoftwareApplication,
} from "schema-dts";
import type { ToolLocaleContent } from "../../types";
import { bibliography } from "./bibliography";
import type { SavingsRateUI } from "./ui";

export type SavingsRateLocale =
  | "en"
  | "de"
  | "es"
  | "fr"
  | "id"
  | "it"
  | "ja"
  | "ko"
  | "nl"
  | "pl"
  | "pt"
  | "ru"
  | "sv"
  | "tr"
  | "zh";

type SavingsRatePack = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  method: string;
  limit: string;
  currentDescription: string;
  targetDescription: string;
  scenarioDescription: string;
  points: [
    [string, string, string],
    [string, string, string],
    [string, string, string],
  ];
  faq: [string, string][];
  steps: [string, string][];
  ui: SavingsRateUI;
};

const englishUI: SavingsRateUI = {
  labelMoneyPicture: "Build your money picture",
  labelSavingsSnapshot: "Your savings snapshot",
  labelTrySmallChange: "Try a small change",
  labelPeriod: "Budget period",
  labelMonthly: "Monthly",
  labelYearly: "Yearly",
  labelCurrency: "Currency",
  labelCurrencyUSD: "US dollar",
  labelCurrencyEUR: "euro",
  labelCurrencyGBP: "pound",
  labelCurrencyCAD: "Canadian dollar",
  labelCurrencyAUD: "Australian dollar",
  labelCurrencyJPY: "yen",
  labelIncome: "Income in this period",
  labelIncomeHelp:
    "Use income after tax if you want to measure money available to your household.",
  labelSaved: "Regular savings",
  labelSavedHelp: "The amount you normally set aside during this period.",
  labelExtraContribution: "Extra contribution",
  labelExtraContributionHelp:
    "Add a bonus, transfer, or one time contribution for this period.",
  labelTargetRate: "Target savings rate",
  labelTargetRateHelp: "See how much more you would need to save to reach it.",
  labelIncomeChange: "Scenario income change",
  labelSpendingChange: "Scenario spending change",
  labelScenarioHelp:
    "Try a change without touching your current numbers. Spending is inferred from income minus savings.",
  labelCurrentRate: "Current savings rate",
  labelAnnualSaved: "Annualized savings",
  labelAnnualIncome: "Annualized income",
  labelSpending: "Spending in this period",
  labelTargetGap: "Distance to target",
  labelTargetMet: "Target reached",
  labelMoreNeeded: "more saved to reach target",
  labelScenario: "Scenario",
  labelScenarioRate: "Scenario savings rate",
  labelScenarioChange: "Change versus current",
  labelScenarioSaved: "Scenario savings",
  labelScenarioSpending: "Scenario spending",
  labelScenarioTarget: "Scenario target gap",
  labelScenarioTargetMet: "Target reached in this scenario",
  labelScenarioMoreNeeded: "additional savings needed in this scenario",
  labelReset: "Reset",
  labelCopyResult: "Copy summary",
  labelCopied: "Copied",
  labelInvalidInput:
    "Enter an income above zero and non negative savings amounts.",
  labelRate: "rate",
  labelPercentagePoints: "percentage points",
  labelMoneySuffix: "in this period",
};

const packs: Record<SavingsRateLocale, SavingsRatePack> = {
  en: {
    slug: "savings-rate-calculator",
    title: "Savings Rate Calculator",
    description:
      "Measure how much of your income you save, annualize the result, and test income or spending changes against a target savings rate.",
    intro:
      "A savings rate turns a budget into a simple share: the part of your income that stays available for future goals. Enter income and savings for one consistent period to see the current rate, the annual picture, and the amount needed for your own target.",
    method:
      "The current rate is regular savings plus extra contributions divided by income for the selected period. Monthly figures are multiplied by 12 for the annualized view. Spending is inferred as income minus savings, so the scenario is a planning comparison rather than a forecast.",
    limit:
      "Use figures from the same period and choose the income base that matches your savings amount. This tool does not import bank data, estimate investment returns, calculate taxes, or decide whether a target is right for you.",
    currentDescription: "The share of this period's income saved.",
    targetDescription: "The extra amount needed to reach your chosen rate.",
    scenarioDescription: "A quick comparison for income or spending changes.",
    points: [
      [
        "Regular savings plus extra contribution",
        "Spending inferred from your inputs",
        "Annualized view for monthly budgets",
      ],
      [
        "Shows percentage point distance",
        "Keeps the target user defined",
        "Does not assume a universal ideal",
      ],
      [
        "Tests one scenario locally",
        "Shows the new rate and savings",
        "Makes trade offs visible",
      ],
    ],
    faq: [
      [
        "How is a savings rate calculated?",
        "The savings rate is the money saved during the selected period divided by income for that period, expressed as a percentage. This calculator adds regular savings and any extra contribution you enter.",
      ],
      [
        "Should I use gross income or income after tax?",
        "Use the income base that matches your savings amount. Income after tax is usually the clearest choice for a household budget because it compares money you can spend with money you set aside.",
      ],
      [
        "What does the scenario compare?",
        "The scenario applies your income and spending percentage changes to the current period. Spending is inferred as income minus savings, and the result is a planning estimate rather than a forecast.",
      ],
      [
        "Does this calculator include investment returns or taxes?",
        "No. It measures savings behavior from the amounts you enter. It does not forecast investment growth, calculate taxes, or say whether a target is appropriate for your situation.",
      ],
    ],
    steps: [
      [
        "Choose a period",
        "Select monthly or yearly so your income and savings use the same time basis.",
      ],
      [
        "Enter income and savings",
        "Enter regular savings and any extra contribution you want included for that period.",
      ],
      [
        "Set a target and test changes",
        "Review the current rate, the amount needed to reach your target, and the scenario for income or spending changes.",
      ],
    ],
    ui: englishUI,
  },
  de: {
    slug: "sparquote-rechner",
    title: "Sparquoten Rechner",
    description:
      "Berechne, wie viel deines Einkommens du sparst, rechne den Wert auf ein Jahr hoch und teste Änderungen bei Einkommen oder Ausgaben.",
    intro:
      "Die Sparquote macht aus einem Budget einen leicht verständlichen Anteil: den Teil deines Einkommens, der für spätere Ziele verfügbar bleibt. Gib Einkommen und Sparbeträge für denselben Zeitraum ein und sieh deine Quote, die Jahresansicht und den Weg zu deinem Ziel.",
    method:
      "Die aktuelle Quote ist reguläres Sparen plus zusätzliche Beiträge geteilt durch das Einkommen des gewählten Zeitraums. Monatswerte werden für die Jahresansicht mit 12 multipliziert. Ausgaben werden als Einkommen minus Sparbetrag abgeleitet.",
    limit:
      "Verwende Werte aus demselben Zeitraum und eine Einkommensbasis, die zu deinem Sparbetrag passt. Das Tool ruft keine Kontodaten ab, schätzt keine Renditen und berechnet keine Steuern.",
    currentDescription:
      "Der Anteil deines Einkommens, den du in diesem Zeitraum sparst.",
    targetDescription: "Der zusätzliche Betrag bis zu deiner gewählten Quote.",
    scenarioDescription:
      "Ein schneller Vergleich für Änderungen bei Einkommen oder Ausgaben.",
    points: [
      [
        "Reguläres Sparen plus Zusatzbetrag",
        "Ausgaben aus deinen Angaben abgeleitet",
        "Jahresansicht für Monatsbudgets",
      ],
      [
        "Abstand in Prozentpunkten",
        "Ziel bleibt deine eigene Vorgabe",
        "Kein allgemeines Ideal wird angenommen",
      ],
      [
        "Ein Szenario lokal testen",
        "Neue Quote und Sparbetrag sehen",
        "Auswirkungen leichter vergleichen",
      ],
    ],
    faq: [
      [
        "Wie wird eine Sparquote berechnet?",
        "Die Sparquote ist der gesparte Betrag im gewählten Zeitraum geteilt durch das Einkommen dieses Zeitraums, ausgedrückt als Prozentwert. Reguläres Sparen und Zusatzbeträge werden addiert.",
      ],
      [
        "Soll ich Bruttoeinkommen oder Einkommen nach Steuern verwenden?",
        "Verwende die Einkommensbasis, die zu deinem Sparbetrag passt. Einkommen nach Steuern ist für ein Haushaltsbudget oft am klarsten, weil es verfügbares Geld mit dem Sparbetrag vergleicht.",
      ],
      [
        "Was vergleicht das Szenario?",
        "Das Szenario wendet deine prozentualen Änderungen bei Einkommen und Ausgaben auf den aktuellen Zeitraum an. Ausgaben werden aus Einkommen minus Sparbetrag abgeleitet.",
      ],
      [
        "Enthält der Rechner Renditen oder Steuern?",
        "Nein. Er misst das Sparverhalten anhand deiner Angaben. Er prognostiziert kein Anlagewachstum und berechnet keine Steuern.",
      ],
    ],
    steps: [
      [
        "Zeitraum wählen",
        "Wähle monatlich oder jährlich und verwende dieselbe Basis für Einkommen und Sparen.",
      ],
      [
        "Einkommen und Sparen eingeben",
        "Trage reguläres Sparen und zusätzliche Beiträge für den Zeitraum ein.",
      ],
      [
        "Ziel setzen und Änderungen testen",
        "Prüfe die aktuelle Quote, den Zielabstand und dein Szenario.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Dein Geldbild aufbauen",
      labelSavingsSnapshot: "Deine Sparübersicht",
      labelTrySmallChange: "Kleine Änderung testen",
      labelPeriod: "Budgetzeitraum",
      labelMonthly: "Monatlich",
      labelYearly: "Jährlich",
      labelCurrency: "Währung",
      labelCurrencyUSD: "US Dollar",
      labelCurrencyEUR: "Euro",
      labelCurrencyGBP: "Pfund",
      labelCurrencyCAD: "Kanadischer Dollar",
      labelCurrencyAUD: "Australischer Dollar",
      labelCurrencyJPY: "Yen",
      labelIncome: "Einkommen in diesem Zeitraum",
      labelIncomeHelp:
        "Verwende Einkommen nach Steuern, wenn du verfügbares Haushaltsgeld messen möchtest.",
      labelSaved: "Reguläres Sparen",
      labelSavedHelp:
        "Der Betrag, den du in diesem Zeitraum normalerweise zurücklegst.",
      labelExtraContribution: "Zusätzlicher Beitrag",
      labelExtraContributionHelp:
        "Füge Bonus, Überweisung oder einmaligen Beitrag für diesen Zeitraum hinzu.",
      labelTargetRate: "Ziel Sparquote",
      labelTargetRateHelp:
        "Sieh, wie viel du zusätzlich sparen müsstest, um das Ziel zu erreichen.",
      labelIncomeChange: "Einkommensänderung im Szenario",
      labelSpendingChange: "Ausgabenänderung im Szenario",
      labelScenarioHelp:
        "Teste eine Änderung, ohne deine aktuellen Werte anzutasten. Ausgaben werden aus Einkommen minus Sparen abgeleitet.",
      labelCurrentRate: "Aktuelle Sparquote",
      labelAnnualSaved: "Sparen pro Jahr",
      labelAnnualIncome: "Einkommen pro Jahr",
      labelSpending: "Ausgaben in diesem Zeitraum",
      labelTargetGap: "Abstand zum Ziel",
      labelTargetMet: "Ziel erreicht",
      labelMoreNeeded: "zusätzlich zum Ziel sparen",
      labelScenario: "Szenario",
      labelScenarioRate: "Sparquote im Szenario",
      labelScenarioChange: "Änderung zur aktuellen Quote",
      labelScenarioSaved: "Sparen im Szenario",
      labelScenarioSpending: "Ausgaben im Szenario",
      labelScenarioTarget: "Zielabstand im Szenario",
      labelScenarioTargetMet: "Ziel in diesem Szenario erreicht",
      labelScenarioMoreNeeded: "zusätzliches Sparen im Szenario nötig",
      labelReset: "Zurücksetzen",
      labelCopyResult: "Zusammenfassung kopieren",
      labelCopied: "Kopiert",
      labelInvalidInput:
        "Gib ein Einkommen über null und nicht negative Sparbeträge ein.",
      labelRate: "Quote",
      labelPercentagePoints: "Prozentpunkte",
      labelMoneySuffix: "in diesem Zeitraum",
    },
  },
  es: {
    slug: "calculadora-tasa-ahorro",
    title: "Calculadora de tasa de ahorro",
    description:
      "Mide qué parte de tus ingresos ahorras, anualiza el resultado y prueba cambios de ingresos o gastos frente a un objetivo.",
    intro:
      "La tasa de ahorro convierte un presupuesto en una proporción sencilla: la parte de tus ingresos que queda disponible para tus objetivos futuros. Introduce ingresos y ahorro del mismo periodo para ver tu tasa, la visión anual y lo que te falta para tu objetivo.",
    method:
      "La tasa actual es el ahorro habitual más las aportaciones extra dividido entre los ingresos del periodo elegido. Las cifras mensuales se multiplican por 12 para mostrar el equivalente anual. Los gastos se estiman como ingresos menos ahorro.",
    limit:
      "Usa cifras del mismo periodo y una base de ingresos coherente con el ahorro indicado. La herramienta no consulta cuentas, no calcula rentabilidades ni impuestos y no decide qué objetivo es adecuado para ti.",
    currentDescription: "La parte de los ingresos de este periodo que ahorras.",
    targetDescription:
      "La cantidad adicional que necesitas para llegar a tu tasa elegida.",
    scenarioDescription:
      "Una comparación rápida para cambios de ingresos o gastos.",
    points: [
      [
        "Ahorro habitual más aportación extra",
        "Gastos estimados con tus datos",
        "Vista anual para presupuestos mensuales",
      ],
      [
        "Muestra la distancia en puntos porcentuales",
        "El objetivo lo eliges tú",
        "No presupone una tasa ideal",
      ],
      [
        "Prueba un escenario en el navegador",
        "Muestra la nueva tasa y el ahorro",
        "Hace visibles los cambios",
      ],
    ],
    faq: [
      [
        "¿Cómo se calcula la tasa de ahorro?",
        "Es el dinero ahorrado durante el periodo elegido dividido entre los ingresos de ese periodo, expresado en porcentaje. La calculadora suma el ahorro habitual y cualquier aportación extra.",
      ],
      [
        "¿Debo usar ingresos brutos o netos?",
        "Usa la base de ingresos que corresponda a tu cifra de ahorro. Los ingresos netos suelen ser más claros para un presupuesto doméstico porque comparan el dinero disponible con el dinero que apartas.",
      ],
      [
        "¿Qué compara el escenario?",
        "El escenario aplica tus cambios porcentuales de ingresos y gastos al periodo actual. Los gastos se estiman como ingresos menos ahorro, por lo que es una comparación orientativa.",
      ],
      [
        "¿Incluye rentabilidad de inversiones o impuestos?",
        "No. Mide el comportamiento de ahorro a partir de tus cantidades. No pronostica inversiones, calcula impuestos ni determina si tu objetivo es adecuado.",
      ],
    ],
    steps: [
      [
        "Elige un periodo",
        "Selecciona mensual o anual y usa la misma base para ingresos y ahorro.",
      ],
      [
        "Introduce ingresos y ahorro",
        "Añade el ahorro habitual y cualquier aportación extra del periodo.",
      ],
      [
        "Fija un objetivo y prueba cambios",
        "Consulta tu tasa, la cantidad que falta y el escenario de ingresos o gastos.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Construye tu foto financiera",
      labelSavingsSnapshot: "Tu resumen de ahorro",
      labelTrySmallChange: "Prueba un pequeño cambio",
      labelPeriod: "Periodo del presupuesto",
      labelMonthly: "Mensual",
      labelYearly: "Anual",
      labelCurrency: "Moneda",
      labelCurrencyUSD: "dólar estadounidense",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "libra",
      labelCurrencyCAD: "dólar canadiense",
      labelCurrencyAUD: "dólar australiano",
      labelCurrencyJPY: "yen",
      labelIncome: "Ingresos en este periodo",
      labelIncomeHelp:
        "Usa ingresos después de impuestos si quieres medir el dinero disponible para tu hogar.",
      labelSaved: "Ahorro habitual",
      labelSavedHelp:
        "La cantidad que normalmente apartas durante este periodo.",
      labelExtraContribution: "Aportación extra",
      labelExtraContributionHelp:
        "Añade un bonus, transferencia o aportación puntual de este periodo.",
      labelTargetRate: "Tasa de ahorro objetivo",
      labelTargetRateHelp:
        "Mira cuánto más tendrías que ahorrar para alcanzarla.",
      labelIncomeChange: "Cambio de ingresos en el escenario",
      labelSpendingChange: "Cambio de gastos en el escenario",
      labelScenarioHelp:
        "Prueba un cambio sin tocar tus cifras actuales. Los gastos se estiman como ingresos menos ahorro.",
      labelCurrentRate: "Tasa de ahorro actual",
      labelAnnualSaved: "Ahorro anualizado",
      labelAnnualIncome: "Ingresos anualizados",
      labelSpending: "Gastos en este periodo",
      labelTargetGap: "Distancia al objetivo",
      labelTargetMet: "Objetivo alcanzado",
      labelMoreNeeded: "más ahorrados para alcanzar el objetivo",
      labelScenario: "Escenario",
      labelScenarioRate: "Tasa de ahorro del escenario",
      labelScenarioChange: "Cambio frente a la actual",
      labelScenarioSaved: "Ahorro del escenario",
      labelScenarioSpending: "Gastos del escenario",
      labelScenarioTarget: "Distancia del escenario al objetivo",
      labelScenarioTargetMet: "Objetivo alcanzado en este escenario",
      labelScenarioMoreNeeded: "ahorro adicional necesario en este escenario",
      labelReset: "Restablecer",
      labelCopyResult: "Copiar resumen",
      labelCopied: "Copiado",
      labelInvalidInput:
        "Introduce unos ingresos superiores a cero y cantidades de ahorro no negativas.",
      labelRate: "tasa",
      labelPercentagePoints: "puntos porcentuales",
      labelMoneySuffix: "en este periodo",
    },
  },
  fr: {
    slug: "calculateur-taux-epargne",
    title: "Calculateur de taux d'épargne",
    description:
      "Mesurez la part de vos revenus que vous épargnez, annualisez le résultat et testez des changements de revenus ou de dépenses.",
    intro:
      "Le taux d'épargne transforme un budget en une part simple : la portion de vos revenus qui reste disponible pour vos projets futurs. Saisissez vos revenus et votre épargne sur la même période pour voir votre taux et votre progression vers un objectif.",
    method:
      "Le taux actuel correspond à l'épargne habituelle plus les versements supplémentaires, divisés par les revenus de la période choisie. Les valeurs mensuelles sont multipliées par 12 pour la vue annuelle. Les dépenses sont déduites des revenus moins l'épargne.",
    limit:
      "Utilisez des montants issus de la même période et une base de revenus cohérente avec votre épargne. L'outil ne consulte pas vos comptes, ne prévoit pas de rendement et ne calcule pas les impôts.",
    currentDescription:
      "La part des revenus de cette période que vous épargnez.",
    targetDescription:
      "Le montant supplémentaire nécessaire pour atteindre votre taux.",
    scenarioDescription:
      "Une comparaison rapide pour modifier revenus ou dépenses.",
    points: [
      [
        "Épargne habituelle et versement supplémentaire",
        "Dépenses déduites de vos saisies",
        "Vue annuelle pour un budget mensuel",
      ],
      [
        "Distance en points de pourcentage",
        "Objectif choisi par vous",
        "Aucun idéal universel supposé",
      ],
      [
        "Test d'un scénario dans le navigateur",
        "Nouveau taux et nouvelle épargne",
        "Arbitrages plus visibles",
      ],
    ],
    faq: [
      [
        "Comment calculer un taux d'épargne ?",
        "Le taux d'épargne est l'argent épargné pendant la période choisie divisé par les revenus de cette période, exprimé en pourcentage. Le calcul additionne l'épargne habituelle et les versements supplémentaires.",
      ],
      [
        "Faut-il utiliser le revenu brut ou net ?",
        "Utilisez la base de revenus qui correspond à votre montant épargné. Le revenu après impôts est souvent le plus clair pour un budget du foyer.",
      ],
      [
        "Que compare le scénario ?",
        "Le scénario applique les variations en pourcentage de revenus et de dépenses à la période actuelle. Les dépenses sont déduites des revenus moins l'épargne.",
      ],
      [
        "Le calculateur inclut-il les placements ou les impôts ?",
        "Non. Il mesure votre comportement d'épargne à partir des montants saisis. Il ne prévoit pas la croissance d'un placement et ne calcule pas les impôts.",
      ],
    ],
    steps: [
      [
        "Choisissez une période",
        "Sélectionnez mensuel ou annuel et utilisez la même base pour revenus et épargne.",
      ],
      [
        "Saisissez revenus et épargne",
        "Ajoutez l'épargne habituelle et tout versement supplémentaire de la période.",
      ],
      [
        "Fixez un objectif et testez",
        "Consultez le taux actuel, l'écart à l'objectif et le scénario choisi.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Construisez votre portrait financier",
      labelSavingsSnapshot: "Votre résumé d'épargne",
      labelTrySmallChange: "Testez un petit changement",
      labelPeriod: "Période du budget",
      labelMonthly: "Mensuel",
      labelYearly: "Annuel",
      labelCurrency: "Devise",
      labelCurrencyUSD: "dollar américain",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "livre sterling",
      labelCurrencyCAD: "dollar canadien",
      labelCurrencyAUD: "dollar australien",
      labelCurrencyJPY: "yen",
      labelIncome: "Revenus sur cette période",
      labelIncomeHelp:
        "Utilisez vos revenus après impôts pour mesurer l'argent disponible dans votre foyer.",
      labelSaved: "Épargne habituelle",
      labelSavedHelp:
        "Le montant que vous mettez normalement de côté pendant cette période.",
      labelExtraContribution: "Versement supplémentaire",
      labelExtraContributionHelp:
        "Ajoutez une prime, un virement ou un versement ponctuel pour cette période.",
      labelTargetRate: "Taux d'épargne cible",
      labelTargetRateHelp:
        "Voyez combien il faudrait épargner en plus pour l'atteindre.",
      labelIncomeChange: "Variation des revenus",
      labelSpendingChange: "Variation des dépenses",
      labelScenarioHelp:
        "Testez une évolution sans modifier vos chiffres actuels. Les dépenses sont déduites des revenus moins l'épargne.",
      labelCurrentRate: "Taux d'épargne actuel",
      labelAnnualSaved: "Épargne annualisée",
      labelAnnualIncome: "Revenus annualisés",
      labelSpending: "Dépenses sur cette période",
      labelTargetGap: "Écart à l'objectif",
      labelTargetMet: "Objectif atteint",
      labelMoreNeeded: "de plus pour atteindre l'objectif",
      labelScenario: "Scénario",
      labelScenarioRate: "Taux d'épargne du scénario",
      labelScenarioChange: "Variation par rapport à l'actuel",
      labelScenarioSaved: "Épargne du scénario",
      labelScenarioSpending: "Dépenses du scénario",
      labelScenarioTarget: "Écart du scénario",
      labelScenarioTargetMet: "Objectif atteint dans ce scénario",
      labelScenarioMoreNeeded:
        "d'épargne supplémentaire nécessaire dans ce scénario",
      labelReset: "Réinitialiser",
      labelCopyResult: "Copier le résumé",
      labelCopied: "Copié",
      labelInvalidInput:
        "Saisissez des revenus supérieurs à zéro et des montants d'épargne positifs ou nuls.",
      labelRate: "taux",
      labelPercentagePoints: "points de pourcentage",
      labelMoneySuffix: "sur cette période",
    },
  },
  it: {
    slug: "calcolatore-tasso-risparmio",
    title: "Calcolatore del tasso di risparmio",
    description:
      "Misura quale parte del tuo reddito risparmi, annualizza il risultato e prova variazioni di reddito o spesa.",
    intro:
      "Il tasso di risparmio trasforma il budget in una quota semplice: la parte del reddito che rimane disponibile per gli obiettivi futuri. Inserisci reddito e risparmio dello stesso periodo per vedere il tasso attuale e il percorso verso il tuo obiettivo.",
    method:
      "Il tasso attuale è il risparmio abituale più i contributi extra, diviso per il reddito del periodo scelto. I valori mensili vengono moltiplicati per 12 nella vista annuale. Le spese sono stimate come reddito meno risparmio.",
    limit:
      "Usa valori dello stesso periodo e una base di reddito coerente con il risparmio. Lo strumento non accede ai conti, non prevede rendimenti e non calcola le imposte.",
    currentDescription:
      "La quota del reddito di questo periodo che metti da parte.",
    targetDescription:
      "L'importo aggiuntivo necessario per raggiungere il tasso scelto.",
    scenarioDescription:
      "Un confronto rapido per variazioni di reddito o spesa.",
    points: [
      [
        "Risparmio abituale più contributo extra",
        "Spese stimate dai tuoi dati",
        "Vista annuale per budget mensili",
      ],
      [
        "Distanza in punti percentuali",
        "Obiettivo scelto da te",
        "Nessun ideale universale",
      ],
      [
        "Prova uno scenario nel browser",
        "Nuovo tasso e nuovo risparmio",
        "Rende visibili i compromessi",
      ],
    ],
    faq: [
      [
        "Come si calcola il tasso di risparmio?",
        "È il denaro risparmiato nel periodo scelto diviso per il reddito dello stesso periodo, espresso in percentuale. Il calcolo somma il risparmio abituale e i contributi extra.",
      ],
      [
        "Devo usare il reddito lordo o netto?",
        "Usa la base di reddito che corrisponde al tuo risparmio. Il reddito dopo le imposte è spesso più chiaro per un budget familiare.",
      ],
      [
        "Che cosa confronta lo scenario?",
        "Lo scenario applica le variazioni percentuali di reddito e spesa al periodo attuale. Le spese sono stimate come reddito meno risparmio.",
      ],
      [
        "Il calcolatore include rendimenti o imposte?",
        "No. Misura il comportamento di risparmio dai valori inseriti. Non prevede la crescita degli investimenti e non calcola le imposte.",
      ],
    ],
    steps: [
      [
        "Scegli un periodo",
        "Seleziona mensile o annuale e usa la stessa base per reddito e risparmio.",
      ],
      [
        "Inserisci reddito e risparmio",
        "Aggiungi il risparmio abituale e ogni contributo extra del periodo.",
      ],
      [
        "Imposta un obiettivo e prova",
        "Controlla il tasso attuale, la distanza e lo scenario.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Costruisci il tuo quadro finanziario",
      labelSavingsSnapshot: "Il tuo riepilogo del risparmio",
      labelTrySmallChange: "Prova una piccola modifica",
      labelPeriod: "Periodo del budget",
      labelMonthly: "Mensile",
      labelYearly: "Annuale",
      labelCurrency: "Valuta",
      labelCurrencyUSD: "dollaro statunitense",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "sterlina",
      labelCurrencyCAD: "dollaro canadese",
      labelCurrencyAUD: "dollaro australiano",
      labelCurrencyJPY: "yen",
      labelIncome: "Reddito del periodo",
      labelIncomeHelp:
        "Usa il reddito dopo le imposte per misurare il denaro disponibile in famiglia.",
      labelSaved: "Risparmio abituale",
      labelSavedHelp:
        "L'importo che normalmente metti da parte in questo periodo.",
      labelExtraContribution: "Contributo extra",
      labelExtraContributionHelp:
        "Aggiungi un bonus, un trasferimento o un contributo una tantum per questo periodo.",
      labelTargetRate: "Tasso di risparmio obiettivo",
      labelTargetRateHelp:
        "Scopri quanto dovresti risparmiare in più per raggiungerlo.",
      labelIncomeChange: "Variazione del reddito nello scenario",
      labelSpendingChange: "Variazione della spesa nello scenario",
      labelScenarioHelp:
        "Prova una modifica senza toccare i valori attuali. Le spese sono stimate come reddito meno risparmio.",
      labelCurrentRate: "Tasso di risparmio attuale",
      labelAnnualSaved: "Risparmio annualizzato",
      labelAnnualIncome: "Reddito annualizzato",
      labelSpending: "Spesa del periodo",
      labelTargetGap: "Distanza dall'obiettivo",
      labelTargetMet: "Obiettivo raggiunto",
      labelMoreNeeded: "in più per raggiungere l'obiettivo",
      labelScenario: "Scenario",
      labelScenarioRate: "Tasso dello scenario",
      labelScenarioChange: "Variazione rispetto all'attuale",
      labelScenarioSaved: "Risparmio dello scenario",
      labelScenarioSpending: "Spesa dello scenario",
      labelScenarioTarget: "Distanza dello scenario",
      labelScenarioTargetMet: "Obiettivo raggiunto nello scenario",
      labelScenarioMoreNeeded: "risparmio aggiuntivo necessario nello scenario",
      labelReset: "Reimposta",
      labelCopyResult: "Copia riepilogo",
      labelCopied: "Copiato",
      labelInvalidInput:
        "Inserisci un reddito maggiore di zero e importi di risparmio non negativi.",
      labelRate: "tasso",
      labelPercentagePoints: "punti percentuali",
      labelMoneySuffix: "nel periodo",
    },
  },
  pt: {
    slug: "calculadora-taxa-poupanca",
    title: "Calculadora da taxa de poupança",
    description:
      "Mede que parte do seu rendimento poupa, anualiza o resultado e testa alterações de rendimento ou despesas.",
    intro:
      "A taxa de poupança transforma o orçamento numa proporção simples: a parte do rendimento que fica disponível para objetivos futuros. Introduza rendimento e poupança do mesmo período para ver a taxa atual e o caminho até ao seu objetivo.",
    method:
      "A taxa atual é a poupança habitual mais os contributos extra, divididos pelo rendimento do período escolhido. Os valores mensais são multiplicados por 12 na vista anual. As despesas são estimadas como rendimento menos poupança.",
    limit:
      "Use valores do mesmo período e uma base de rendimento coerente com a poupança. A ferramenta não consulta contas, não prevê rendimentos de investimento e não calcula impostos.",
    currentDescription:
      "A parte do rendimento deste período que consegue poupar.",
    targetDescription:
      "O valor adicional necessário para atingir a taxa escolhida.",
    scenarioDescription:
      "Uma comparação rápida para alterações de rendimento ou despesas.",
    points: [
      [
        "Poupança habitual e contributo extra",
        "Despesas estimadas pelos seus dados",
        "Vista anual para orçamentos mensais",
      ],
      [
        "Distância em pontos percentuais",
        "Objetivo definido por si",
        "Sem ideal universal assumido",
      ],
      [
        "Teste um cenário no navegador",
        "Veja a nova taxa e poupança",
        "Torne as escolhas mais visíveis",
      ],
    ],
    faq: [
      [
        "Como se calcula a taxa de poupança?",
        "É o dinheiro poupado no período escolhido dividido pelo rendimento desse período, expresso em percentagem. A calculadora soma a poupança habitual e qualquer contributo extra.",
      ],
      [
        "Devo usar rendimento bruto ou líquido?",
        "Use a base de rendimento que corresponde ao valor poupado. O rendimento depois de impostos é geralmente mais claro para um orçamento familiar.",
      ],
      [
        "O que compara o cenário?",
        "O cenário aplica as alterações percentuais de rendimento e despesas ao período atual. As despesas são estimadas como rendimento menos poupança.",
      ],
      [
        "A calculadora inclui investimentos ou impostos?",
        "Não. Mede o comportamento de poupança a partir dos valores introduzidos. Não prevê o crescimento de investimentos nem calcula impostos.",
      ],
    ],
    steps: [
      [
        "Escolha um período",
        "Selecione mensal ou anual e use a mesma base para rendimento e poupança.",
      ],
      [
        "Introduza rendimento e poupança",
        "Adicione a poupança habitual e qualquer contributo extra do período.",
      ],
      [
        "Defina um objetivo e teste",
        "Consulte a taxa atual, a distância e o cenário.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Construa a sua imagem financeira",
      labelSavingsSnapshot: "O seu resumo de poupança",
      labelTrySmallChange: "Teste uma pequena mudança",
      labelPeriod: "Período do orçamento",
      labelMonthly: "Mensal",
      labelYearly: "Anual",
      labelCurrency: "Moeda",
      labelCurrencyUSD: "dólar americano",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "libra",
      labelCurrencyCAD: "dólar canadiano",
      labelCurrencyAUD: "dólar australiano",
      labelCurrencyJPY: "iene",
      labelIncome: "Rendimento neste período",
      labelIncomeHelp:
        "Use o rendimento depois de impostos para medir o dinheiro disponível em casa.",
      labelSaved: "Poupança habitual",
      labelSavedHelp: "O valor que normalmente coloca de lado neste período.",
      labelExtraContribution: "Contributo extra",
      labelExtraContributionHelp:
        "Adicione um bónus, transferência ou contributo pontual deste período.",
      labelTargetRate: "Taxa de poupança objetivo",
      labelTargetRateHelp: "Veja quanto mais teria de poupar para a atingir.",
      labelIncomeChange: "Alteração de rendimento no cenário",
      labelSpendingChange: "Alteração de despesas no cenário",
      labelScenarioHelp:
        "Teste uma mudança sem mexer nos valores atuais. As despesas são estimadas como rendimento menos poupança.",
      labelCurrentRate: "Taxa de poupança atual",
      labelAnnualSaved: "Poupança anualizada",
      labelAnnualIncome: "Rendimento anualizado",
      labelSpending: "Despesas neste período",
      labelTargetGap: "Distância ao objetivo",
      labelTargetMet: "Objetivo atingido",
      labelMoreNeeded: "adicionais para atingir o objetivo",
      labelScenario: "Cenário",
      labelScenarioRate: "Taxa de poupança do cenário",
      labelScenarioChange: "Alteração face à atual",
      labelScenarioSaved: "Poupança do cenário",
      labelScenarioSpending: "Despesas do cenário",
      labelScenarioTarget: "Distância do cenário ao objetivo",
      labelScenarioTargetMet: "Objetivo atingido neste cenário",
      labelScenarioMoreNeeded: "de poupança adicional necessária neste cenário",
      labelReset: "Repor",
      labelCopyResult: "Copiar resumo",
      labelCopied: "Copiado",
      labelInvalidInput:
        "Introduza um rendimento superior a zero e valores de poupança não negativos.",
      labelRate: "taxa",
      labelPercentagePoints: "pontos percentuais",
      labelMoneySuffix: "neste período",
    },
  },
  nl: {
    slug: "spaarquote-calculator",
    title: "Spaarquote calculator",
    description:
      "Meet welk deel van je inkomen je spaart, reken het resultaat om naar een jaarbedrag en test veranderingen in inkomen of uitgaven.",
    intro:
      "Een spaarquote maakt van een budget een eenvoudig aandeel: het deel van je inkomen dat beschikbaar blijft voor toekomstige doelen. Vul inkomen en spaargeld uit dezelfde periode in om je huidige quote en je doelafstand te zien.",
    method:
      "De huidige quote is regelmatig sparen plus extra bijdragen gedeeld door het inkomen van de gekozen periode. Maandbedragen worden voor het jaaroverzicht met 12 vermenigvuldigd. Uitgaven worden afgeleid als inkomen min sparen.",
    limit:
      "Gebruik bedragen uit dezelfde periode en een inkomensbasis die past bij je spaarbedrag. Deze tool leest geen bankgegevens, voorspelt geen rendement en berekent geen belasting.",
    currentDescription:
      "Het deel van je inkomen in deze periode dat je spaart.",
    targetDescription: "Het extra bedrag dat nodig is voor je gekozen quote.",
    scenarioDescription:
      "Een snelle vergelijking voor veranderingen in inkomen of uitgaven.",
    points: [
      [
        "Normaal sparen plus extra bijdrage",
        "Uitgaven afgeleid uit je invoer",
        "Jaaroverzicht voor maandbudgetten",
      ],
      [
        "Afstand in procentpunten",
        "Je kiest zelf het doel",
        "Geen universeel ideaal",
      ],
      [
        "Test één scenario in de browser",
        "Bekijk de nieuwe quote en besparing",
        "Maak effecten zichtbaar",
      ],
    ],
    faq: [
      [
        "Hoe wordt een spaarquote berekend?",
        "De spaarquote is het bedrag dat je in de gekozen periode spaart gedeeld door je inkomen in die periode, uitgedrukt als percentage. Normaal sparen en extra bijdragen worden opgeteld.",
      ],
      [
        "Moet ik bruto of netto inkomen gebruiken?",
        "Gebruik de inkomensbasis die bij je spaarbedrag hoort. Netto inkomen is vaak het duidelijkst voor een huishoudbudget.",
      ],
      [
        "Wat vergelijkt het scenario?",
        "Het scenario past je procentuele veranderingen in inkomen en uitgaven toe op de huidige periode. Uitgaven worden afgeleid als inkomen min sparen.",
      ],
      [
        "Bevat de calculator beleggingsrendement of belasting?",
        "Nee. De tool meet je spaargedrag met de bedragen die je invoert. Hij voorspelt geen beleggingsgroei en berekent geen belasting.",
      ],
    ],
    steps: [
      [
        "Kies een periode",
        "Selecteer maandelijks of jaarlijks en gebruik dezelfde basis voor inkomen en sparen.",
      ],
      [
        "Vul inkomen en sparen in",
        "Voer normaal sparen en een eventuele extra bijdrage voor de periode in.",
      ],
      [
        "Stel een doel in en test",
        "Bekijk je huidige quote, de afstand en het scenario.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Maak je geldplaatje",
      labelSavingsSnapshot: "Je spaaroverzicht",
      labelTrySmallChange: "Test een kleine verandering",
      labelPeriod: "Budgetperiode",
      labelMonthly: "Maandelijks",
      labelYearly: "Jaarlijks",
      labelCurrency: "Valuta",
      labelCurrencyUSD: "Amerikaanse dollar",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "pond",
      labelCurrencyCAD: "Canadese dollar",
      labelCurrencyAUD: "Australische dollar",
      labelCurrencyJPY: "yen",
      labelIncome: "Inkomen in deze periode",
      labelIncomeHelp:
        "Gebruik inkomen na belasting als je het beschikbare huishoudgeld wilt meten.",
      labelSaved: "Normaal sparen",
      labelSavedHelp: "Het bedrag dat je in deze periode normaal opzijzet.",
      labelExtraContribution: "Extra bijdrage",
      labelExtraContributionHelp:
        "Voeg een bonus, overschrijving of eenmalige bijdrage voor deze periode toe.",
      labelTargetRate: "Doel voor spaarquote",
      labelTargetRateHelp:
        "Zie hoeveel je extra moet sparen om dit doel te bereiken.",
      labelIncomeChange: "Inkomensverandering in scenario",
      labelSpendingChange: "Verandering in uitgaven",
      labelScenarioHelp:
        "Probeer een verandering zonder je huidige cijfers aan te passen. Uitgaven zijn inkomen min sparen.",
      labelCurrentRate: "Huidige spaarquote",
      labelAnnualSaved: "Sparen per jaar",
      labelAnnualIncome: "Inkomen per jaar",
      labelSpending: "Uitgaven in deze periode",
      labelTargetGap: "Afstand tot doel",
      labelTargetMet: "Doel bereikt",
      labelMoreNeeded: "extra sparen om het doel te bereiken",
      labelScenario: "Scenario",
      labelScenarioRate: "Spaarquote in scenario",
      labelScenarioChange: "Verandering ten opzichte van nu",
      labelScenarioSaved: "Sparen in scenario",
      labelScenarioSpending: "Uitgaven in scenario",
      labelScenarioTarget: "Afstand tot doel in scenario",
      labelScenarioTargetMet: "Doel bereikt in dit scenario",
      labelScenarioMoreNeeded: "extra sparen nodig in dit scenario",
      labelReset: "Herstellen",
      labelCopyResult: "Samenvatting kopiëren",
      labelCopied: "Gekopieerd",
      labelInvalidInput:
        "Voer een inkomen boven nul en niet negatieve spaarbedragen in.",
      labelRate: "quote",
      labelPercentagePoints: "procentpunten",
      labelMoneySuffix: "in deze periode",
    },
  },
  sv: {
    slug: "spargrad-kalkylator",
    title: "Kalkylator för sparkvot",
    description:
      "Mät hur stor del av inkomsten du sparar, räkna om resultatet till årsbasis och testa ändringar i inkomst eller utgifter.",
    intro:
      "En sparkvot gör budgeten enkel att jämföra: den visar hur stor del av inkomsten som finns kvar för framtida mål. Ange inkomst och sparande från samma period för att se aktuell kvot och vägen till ditt mål.",
    method:
      "Den aktuella kvoten är vanligt sparande plus extra bidrag delat med inkomsten för den valda perioden. Månadsbelopp multipliceras med 12 i årsöversikten. Utgifter beräknas som inkomst minus sparande.",
    limit:
      "Använd belopp från samma period och en inkomstbas som passar sparandet. Verktyget hämtar inga bankuppgifter, prognostiserar ingen avkastning och räknar inte skatt.",
    currentDescription: "Den del av periodens inkomst som du sparar.",
    targetDescription: "Det extra belopp som behövs för att nå din kvot.",
    scenarioDescription:
      "En snabb jämförelse av ändrad inkomst eller utgifter.",
    points: [
      [
        "Vanligt sparande plus extra bidrag",
        "Utgifter beräknade från dina uppgifter",
        "Årsöversikt för månadsbudgetar",
      ],
      [
        "Avstånd i procentenheter",
        "Du väljer själv målet",
        "Inget universellt ideal antas",
      ],
      [
        "Testa ett scenario i webbläsaren",
        "Se ny kvot och nytt sparande",
        "Gör effekterna tydliga",
      ],
    ],
    faq: [
      [
        "Hur beräknas sparkvoten?",
        "Sparkvoten är sparandet under den valda perioden delat med inkomsten under samma period, uttryckt i procent. Vanligt sparande och extra bidrag räknas ihop.",
      ],
      [
        "Ska jag använda brutto eller nettoinkomst?",
        "Använd den inkomstbas som stämmer med ditt sparande. Nettoinkomst är ofta tydligast i en hushållsbudget.",
      ],
      [
        "Vad jämför scenariot?",
        "Scenariot använder dina procentuella ändringar av inkomst och utgifter på den aktuella perioden. Utgifter beräknas som inkomst minus sparande.",
      ],
      [
        "Tar kalkylatorn med investeringar eller skatt?",
        "Nej. Den mäter sparbeteendet utifrån dina belopp. Den prognostiserar inte investeringstillväxt och räknar inte skatt.",
      ],
    ],
    steps: [
      [
        "Välj period",
        "Välj månadsvis eller årsvis och använd samma tidsbas för inkomst och sparande.",
      ],
      [
        "Ange inkomst och sparande",
        "Fyll i vanligt sparande och eventuella extra bidrag.",
      ],
      [
        "Sätt mål och testa",
        "Se aktuell kvot, avståndet till målet och scenariot.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Bygg din ekonomiska bild",
      labelSavingsSnapshot: "Din sparöversikt",
      labelTrySmallChange: "Testa en liten förändring",
      labelPeriod: "Budgetperiod",
      labelMonthly: "Månadsvis",
      labelYearly: "Årsvis",
      labelCurrency: "Valuta",
      labelCurrencyUSD: "amerikansk dollar",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "pund",
      labelCurrencyCAD: "kanadensisk dollar",
      labelCurrencyAUD: "australisk dollar",
      labelCurrencyJPY: "yen",
      labelIncome: "Inkomst under perioden",
      labelIncomeHelp:
        "Använd inkomst efter skatt om du vill mäta hushållets tillgängliga pengar.",
      labelSaved: "Vanligt sparande",
      labelSavedHelp: "Beloppet du normalt lägger undan under perioden.",
      labelExtraContribution: "Extra bidrag",
      labelExtraContributionHelp:
        "Lägg till bonus, överföring eller engångsbidrag för perioden.",
      labelTargetRate: "Mål för sparkvot",
      labelTargetRateHelp:
        "Se hur mycket mer du behöver spara för att nå målet.",
      labelIncomeChange: "Inkomständring i scenario",
      labelSpendingChange: "Utgiftsändring i scenario",
      labelScenarioHelp:
        "Testa en ändring utan att röra dina nuvarande siffror. Utgifter beräknas som inkomst minus sparande.",
      labelCurrentRate: "Aktuell sparkvot",
      labelAnnualSaved: "Sparande per år",
      labelAnnualIncome: "Inkomst per år",
      labelSpending: "Utgifter under perioden",
      labelTargetGap: "Avstånd till mål",
      labelTargetMet: "Målet är nått",
      labelMoreNeeded: "mer sparande för att nå målet",
      labelScenario: "Scenario",
      labelScenarioRate: "Sparkvot i scenario",
      labelScenarioChange: "Ändring mot aktuellt",
      labelScenarioSaved: "Sparande i scenario",
      labelScenarioSpending: "Utgifter i scenario",
      labelScenarioTarget: "Avstånd till mål i scenario",
      labelScenarioTargetMet: "Målet är nått i detta scenario",
      labelScenarioMoreNeeded: "extra sparande behövs i detta scenario",
      labelReset: "Återställ",
      labelCopyResult: "Kopiera sammanfattning",
      labelCopied: "Kopierat",
      labelInvalidInput:
        "Ange en inkomst över noll och icke negativa sparbelopp.",
      labelRate: "kvot",
      labelPercentagePoints: "procentenheter",
      labelMoneySuffix: "under perioden",
    },
  },
  pl: {
    slug: "kalkulator-stopy-oszczedzania",
    title: "Kalkulator stopy oszczędzania",
    description:
      "Sprawdź, jaką część dochodu oszczędzasz, przelicz wynik na rok i przetestuj zmiany dochodów lub wydatków.",
    intro:
      "Stopa oszczędzania zamienia budżet w prosty udział: część dochodu, która zostaje na przyszłe cele. Wpisz dochody i oszczędności z tego samego okresu, aby zobaczyć bieżący wynik i drogę do własnego celu.",
    method:
      "Bieżąca stopa to regularne oszczędności plus dodatkowe wpłaty podzielone przez dochód z wybranego okresu. Kwoty miesięczne są mnożone przez 12 w widoku rocznym. Wydatki są szacowane jako dochód pomniejszony o oszczędności.",
    limit:
      "Używaj kwot z tego samego okresu i podstawy dochodu zgodnej z oszczędnościami. Narzędzie nie pobiera danych bankowych, nie prognozuje zysków i nie oblicza podatków.",
    currentDescription: "Część dochodu z tego okresu, którą oszczędzasz.",
    targetDescription:
      "Dodatkowa kwota potrzebna do osiągnięcia wybranej stopy.",
    scenarioDescription: "Szybkie porównanie zmian dochodu lub wydatków.",
    points: [
      [
        "Regularne oszczędności i dodatkowa wpłata",
        "Wydatki wynikają z podanych kwot",
        "Widok roczny dla budżetów miesięcznych",
      ],
      [
        "Odległość w punktach procentowych",
        "Cel ustalasz samodzielnie",
        "Brak uniwersalnej normy",
      ],
      [
        "Test jednego scenariusza lokalnie",
        "Nowa stopa i oszczędności",
        "Widoczne skutki zmian",
      ],
    ],
    faq: [
      [
        "Jak obliczana jest stopa oszczędzania?",
        "To oszczędności z wybranego okresu podzielone przez dochód z tego okresu, wyrażone procentowo. Kalkulator dodaje regularne oszczędności i dodatkowe wpłaty.",
      ],
      [
        "Czy użyć dochodu brutto czy netto?",
        "Użyj podstawy dochodu zgodnej z kwotą oszczędności. Dochód po podatku jest zwykle najczytelniejszy dla budżetu domowego.",
      ],
      [
        "Co porównuje scenariusz?",
        "Scenariusz stosuje procentowe zmiany dochodu i wydatków do bieżącego okresu. Wydatki są szacowane jako dochód minus oszczędności.",
      ],
      [
        "Czy kalkulator uwzględnia inwestycje lub podatki?",
        "Nie. Mierzy zachowanie dotyczące oszczędzania na podstawie podanych kwot. Nie prognozuje wzrostu inwestycji ani podatków.",
      ],
    ],
    steps: [
      [
        "Wybierz okres",
        "Wybierz miesiąc lub rok i użyj tej samej podstawy dla dochodu i oszczędności.",
      ],
      [
        "Wpisz dochód i oszczędności",
        "Dodaj regularne oszczędności oraz dodatkową wpłatę.",
      ],
      [
        "Ustal cel i testuj",
        "Sprawdź bieżącą stopę, dystans do celu i scenariusz.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Zbuduj obraz swoich finansów",
      labelSavingsSnapshot: "Podsumowanie oszczędności",
      labelTrySmallChange: "Przetestuj małą zmianę",
      labelPeriod: "Okres budżetu",
      labelMonthly: "Miesięcznie",
      labelYearly: "Rocznie",
      labelCurrency: "Waluta",
      labelCurrencyUSD: "dolar amerykański",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "funt",
      labelCurrencyCAD: "dolar kanadyjski",
      labelCurrencyAUD: "dolar australijski",
      labelCurrencyJPY: "jen",
      labelIncome: "Dochód w tym okresie",
      labelIncomeHelp:
        "Użyj dochodu po podatku, jeśli chcesz zmierzyć środki dostępne dla gospodarstwa domowego.",
      labelSaved: "Regularne oszczędności",
      labelSavedHelp: "Kwota, którą zwykle odkładasz w tym okresie.",
      labelExtraContribution: "Dodatkowa wpłata",
      labelExtraContributionHelp:
        "Dodaj premię, przelew lub jednorazową wpłatę dla tego okresu.",
      labelTargetRate: "Docelowa stopa oszczędzania",
      labelTargetRateHelp:
        "Sprawdź, ile więcej trzeba oszczędzać, aby ją osiągnąć.",
      labelIncomeChange: "Zmiana dochodu w scenariuszu",
      labelSpendingChange: "Zmiana wydatków w scenariuszu",
      labelScenarioHelp:
        "Przetestuj zmianę bez dotykania obecnych liczb. Wydatki to dochód pomniejszony o oszczędności.",
      labelCurrentRate: "Bieżąca stopa oszczędzania",
      labelAnnualSaved: "Oszczędności roczne",
      labelAnnualIncome: "Dochód roczny",
      labelSpending: "Wydatki w tym okresie",
      labelTargetGap: "Dystans do celu",
      labelTargetMet: "Cel osiągnięty",
      labelMoreNeeded: "więcej oszczędności do celu",
      labelScenario: "Scenariusz",
      labelScenarioRate: "Stopa oszczędzania w scenariuszu",
      labelScenarioChange: "Zmiana względem bieżącej",
      labelScenarioSaved: "Oszczędności w scenariuszu",
      labelScenarioSpending: "Wydatki w scenariuszu",
      labelScenarioTarget: "Dystans do celu w scenariuszu",
      labelScenarioTargetMet: "Cel osiągnięty w tym scenariuszu",
      labelScenarioMoreNeeded: "dodatkowe oszczędności potrzebne w scenariuszu",
      labelReset: "Resetuj",
      labelCopyResult: "Kopiuj podsumowanie",
      labelCopied: "Skopiowano",
      labelInvalidInput:
        "Wpisz dochód większy od zera i nieujemne kwoty oszczędności.",
      labelRate: "stopa",
      labelPercentagePoints: "punktów procentowych",
      labelMoneySuffix: "w tym okresie",
    },
  },
  id: {
    slug: "kalkulator-tingkat-tabungan",
    title: "Kalkulator tingkat tabungan",
    description:
      "Ukur bagian pendapatan yang Anda tabung, ubah hasilnya menjadi nilai tahunan, dan uji perubahan pendapatan atau pengeluaran.",
    intro:
      "Tingkat tabungan mengubah anggaran menjadi bagian yang mudah dipahami: porsi pendapatan yang tetap tersedia untuk tujuan masa depan. Masukkan pendapatan dan tabungan dari periode yang sama untuk melihat tingkat saat ini dan jaraknya dari target.",
    method:
      "Tingkat saat ini adalah tabungan rutin ditambah kontribusi tambahan, dibagi pendapatan pada periode yang dipilih. Nilai bulanan dikalikan 12 untuk tampilan tahunan. Pengeluaran diperkirakan sebagai pendapatan dikurangi tabungan.",
    limit:
      "Gunakan angka dari periode yang sama dan dasar pendapatan yang sesuai dengan tabungan. Alat ini tidak mengambil data bank, tidak memprediksi hasil investasi, dan tidak menghitung pajak.",
    currentDescription: "Bagian pendapatan periode ini yang Anda tabung.",
    targetDescription:
      "Jumlah tambahan yang dibutuhkan untuk mencapai tingkat pilihan Anda.",
    scenarioDescription:
      "Perbandingan cepat untuk perubahan pendapatan atau pengeluaran.",
    points: [
      [
        "Tabungan rutin dan kontribusi tambahan",
        "Pengeluaran dihitung dari masukan Anda",
        "Tampilan tahunan untuk anggaran bulanan",
      ],
      [
        "Jarak dalam poin persentase",
        "Target ditentukan oleh Anda",
        "Tidak menganggap ada angka ideal",
      ],
      [
        "Uji satu skenario di browser",
        "Lihat tingkat dan tabungan baru",
        "Buat dampak perubahan lebih jelas",
      ],
    ],
    faq: [
      [
        "Bagaimana tingkat tabungan dihitung?",
        "Tingkat tabungan adalah uang yang ditabung selama periode yang dipilih dibagi pendapatan periode tersebut, dinyatakan sebagai persentase. Kalkulator menjumlahkan tabungan rutin dan kontribusi tambahan.",
      ],
      [
        "Haruskah saya memakai pendapatan kotor atau setelah pajak?",
        "Gunakan dasar pendapatan yang sesuai dengan jumlah tabungan. Pendapatan setelah pajak biasanya paling jelas untuk anggaran rumah tangga.",
      ],
      [
        "Apa yang dibandingkan oleh skenario?",
        "Skenario menerapkan perubahan persentase pendapatan dan pengeluaran pada periode saat ini. Pengeluaran dihitung sebagai pendapatan dikurangi tabungan.",
      ],
      [
        "Apakah kalkulator mencakup hasil investasi atau pajak?",
        "Tidak. Alat ini mengukur kebiasaan menabung dari angka yang Anda masukkan. Alat ini tidak memprediksi pertumbuhan investasi atau menghitung pajak.",
      ],
    ],
    steps: [
      [
        "Pilih periode",
        "Pilih bulanan atau tahunan dan gunakan dasar waktu yang sama untuk pendapatan dan tabungan.",
      ],
      [
        "Masukkan pendapatan dan tabungan",
        "Masukkan tabungan rutin serta kontribusi tambahan untuk periode tersebut.",
      ],
      [
        "Tetapkan target dan uji",
        "Lihat tingkat saat ini, jarak ke target, dan skenario perubahan.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Bangun gambaran keuangan Anda",
      labelSavingsSnapshot: "Ringkasan tabungan Anda",
      labelTrySmallChange: "Coba perubahan kecil",
      labelPeriod: "Periode anggaran",
      labelMonthly: "Bulanan",
      labelYearly: "Tahunan",
      labelCurrency: "Mata uang",
      labelCurrencyUSD: "dolar AS",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "pound",
      labelCurrencyCAD: "dolar Kanada",
      labelCurrencyAUD: "dolar Australia",
      labelCurrencyJPY: "yen",
      labelIncome: "Pendapatan pada periode ini",
      labelIncomeHelp:
        "Gunakan pendapatan setelah pajak untuk mengukur uang yang tersedia bagi rumah tangga Anda.",
      labelSaved: "Tabungan rutin",
      labelSavedHelp: "Jumlah yang biasanya Anda sisihkan selama periode ini.",
      labelExtraContribution: "Kontribusi tambahan",
      labelExtraContributionHelp:
        "Tambahkan bonus, transfer, atau kontribusi satu kali untuk periode ini.",
      labelTargetRate: "Target tingkat tabungan",
      labelTargetRateHelp:
        "Lihat berapa banyak tambahan yang perlu ditabung untuk mencapainya.",
      labelIncomeChange: "Perubahan pendapatan dalam skenario",
      labelSpendingChange: "Perubahan pengeluaran dalam skenario",
      labelScenarioHelp:
        "Uji perubahan tanpa mengubah angka saat ini. Pengeluaran dihitung dari pendapatan dikurangi tabungan.",
      labelCurrentRate: "Tingkat tabungan saat ini",
      labelAnnualSaved: "Tabungan tahunan",
      labelAnnualIncome: "Pendapatan tahunan",
      labelSpending: "Pengeluaran pada periode ini",
      labelTargetGap: "Jarak ke target",
      labelTargetMet: "Target tercapai",
      labelMoreNeeded: "tabungan tambahan untuk mencapai target",
      labelScenario: "Skenario",
      labelScenarioRate: "Tingkat tabungan skenario",
      labelScenarioChange: "Perubahan dibandingkan saat ini",
      labelScenarioSaved: "Tabungan skenario",
      labelScenarioSpending: "Pengeluaran skenario",
      labelScenarioTarget: "Jarak skenario ke target",
      labelScenarioTargetMet: "Target tercapai dalam skenario ini",
      labelScenarioMoreNeeded:
        "tabungan tambahan dibutuhkan dalam skenario ini",
      labelReset: "Atur ulang",
      labelCopyResult: "Salin ringkasan",
      labelCopied: "Tersalin",
      labelInvalidInput:
        "Masukkan pendapatan di atas nol dan jumlah tabungan yang tidak negatif.",
      labelRate: "tingkat",
      labelPercentagePoints: "poin persentase",
      labelMoneySuffix: "pada periode ini",
    },
  },
  tr: {
    slug: "tasarruf-orani-hesaplama",
    title: "Tasarruf oranı hesaplama",
    description:
      "Gelirinizin ne kadarını biriktirdiğinizi ölçün, sonucu yıllıklaştırın ve gelir veya harcama değişikliklerini test edin.",
    intro:
      "Tasarruf oranı bütçeyi basit bir paya dönüştürür: gelecekteki hedefler için kullanılabilir kalan gelir bölümü. Mevcut oranı ve hedefe uzaklığı görmek için aynı döneme ait gelir ve tasarruf değerlerini girin.",
    method:
      "Mevcut oran, seçilen dönemdeki düzenli tasarruf ve ek katkıların gelire bölünmesiyle bulunur. Aylık değerler yıllık görünüm için 12 ile çarpılır. Harcama, gelir eksi tasarruf olarak tahmin edilir.",
    limit:
      "Aynı döneme ait değerleri ve tasarruf tutarınızla uyumlu gelir temelini kullanın. Araç banka verisi almaz, yatırım getirisi öngörmez ve vergi hesaplamaz.",
    currentDescription: "Bu dönemde gelirinizin tasarruf ettiğiniz bölümü.",
    targetDescription: "Seçtiğiniz orana ulaşmak için gereken ek miktar.",
    scenarioDescription:
      "Gelir veya harcama değişiklikleri için hızlı karşılaştırma.",
    points: [
      [
        "Düzenli tasarruf ve ek katkı",
        "Harcamalar girdilerinizden çıkarılır",
        "Aylık bütçeler için yıllık görünüm",
      ],
      [
        "Yüzde puan cinsinden uzaklık",
        "Hedefi siz belirlersiniz",
        "Evrensel bir ideal varsayılmaz",
      ],
      [
        "Tarayıcıda bir senaryoyu test edin",
        "Yeni oranı ve tasarrufu görün",
        "Değiş tokuşları görünür kılın",
      ],
    ],
    faq: [
      [
        "Tasarruf oranı nasıl hesaplanır?",
        "Tasarruf oranı, seçilen dönemde tasarruf edilen paranın aynı dönemdeki gelire bölünmesiyle bulunur ve yüzde olarak ifade edilir. Düzenli tasarruf ve ek katkılar toplanır.",
      ],
      [
        "Brüt geliri mi yoksa vergi sonrası geliri mi kullanmalıyım?",
        "Tasarruf tutarınızla eşleşen gelir temelini kullanın. Vergi sonrası gelir, hane bütçesi için genellikle daha nettir.",
      ],
      [
        "Senaryo neyi karşılaştırır?",
        "Senaryo, gelir ve harcamadaki yüzde değişikliklerini mevcut döneme uygular. Harcamalar gelir eksi tasarruf olarak tahmin edilir.",
      ],
      [
        "Hesaplama yatırım getirilerini veya vergileri içerir mi?",
        "Hayır. Girdiğiniz tutarlara göre tasarruf davranışını ölçer. Yatırım büyümesini tahmin etmez ve vergi hesaplamaz.",
      ],
    ],
    steps: [
      [
        "Bir dönem seçin",
        "Aylık veya yıllık seçin ve gelir ile tasarruf için aynı zaman temelini kullanın.",
      ],
      [
        "Gelir ve tasarrufu girin",
        "Düzenli tasarrufu ve dönem için ek katkıyı yazın.",
      ],
      [
        "Hedef belirleyip test edin",
        "Mevcut oranı, hedef uzaklığını ve senaryoyu inceleyin.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Para görünümünüzü oluşturun",
      labelSavingsSnapshot: "Tasarruf özetiniz",
      labelTrySmallChange: "Küçük bir değişikliği test edin",
      labelPeriod: "Bütçe dönemi",
      labelMonthly: "Aylık",
      labelYearly: "Yıllık",
      labelCurrency: "Para birimi",
      labelCurrencyUSD: "ABD doları",
      labelCurrencyEUR: "euro",
      labelCurrencyGBP: "sterlin",
      labelCurrencyCAD: "Kanada doları",
      labelCurrencyAUD: "Avustralya doları",
      labelCurrencyJPY: "yen",
      labelIncome: "Bu dönemdeki gelir",
      labelIncomeHelp:
        "Haneye kalan parayı ölçmek için vergi sonrası geliri kullanın.",
      labelSaved: "Düzenli tasarruf",
      labelSavedHelp: "Bu dönemde genellikle ayırdığınız tutar.",
      labelExtraContribution: "Ek katkı",
      labelExtraContributionHelp:
        "Bu dönem için bonus, transfer veya tek seferlik katkı ekleyin.",
      labelTargetRate: "Hedef tasarruf oranı",
      labelTargetRateHelp:
        "Hedefe ulaşmak için ne kadar daha tasarruf etmeniz gerektiğini görün.",
      labelIncomeChange: "Senaryoda gelir değişikliği",
      labelSpendingChange: "Senaryoda harcama değişikliği",
      labelScenarioHelp:
        "Mevcut değerlerinize dokunmadan bir değişiklik deneyin. Harcamalar gelir eksi tasarruf olarak tahmin edilir.",
      labelCurrentRate: "Mevcut tasarruf oranı",
      labelAnnualSaved: "Yıllık tasarruf",
      labelAnnualIncome: "Yıllık gelir",
      labelSpending: "Bu dönemdeki harcama",
      labelTargetGap: "Hedefe uzaklık",
      labelTargetMet: "Hedefe ulaşıldı",
      labelMoreNeeded: "hedefe ulaşmak için ek tasarruf",
      labelScenario: "Senaryo",
      labelScenarioRate: "Senaryo tasarruf oranı",
      labelScenarioChange: "Mevcut duruma göre değişim",
      labelScenarioSaved: "Senaryo tasarrufu",
      labelScenarioSpending: "Senaryo harcaması",
      labelScenarioTarget: "Senaryonun hedefe uzaklığı",
      labelScenarioTargetMet: "Bu senaryoda hedefe ulaşıldı",
      labelScenarioMoreNeeded: "bu senaryoda gereken ek tasarruf",
      labelReset: "Sıfırla",
      labelCopyResult: "Özeti kopyala",
      labelCopied: "Kopyalandı",
      labelInvalidInput:
        "Sıfırdan büyük bir gelir ve negatif olmayan tasarruf tutarları girin.",
      labelRate: "oran",
      labelPercentagePoints: "yüzde puan",
      labelMoneySuffix: "bu dönemde",
    },
  },
  ru: {
    slug: "kalkulyator-normy-sberezheniy",
    title: "Калькулятор нормы сбережений",
    description:
      "Узнайте, какую часть дохода вы откладываете, переведите результат в годовой формат и проверьте изменения доходов или расходов.",
    intro:
      "Норма сбережений превращает бюджет в понятную долю: часть дохода, которая остается для будущих целей. Введите доход и сбережения за один период, чтобы увидеть текущий результат и расстояние до цели.",
    method:
      "Текущая норма равна обычным сбережениям плюс дополнительным взносам, деленным на доход за выбранный период. Месячные значения умножаются на 12 в годовом представлении. Расходы оцениваются как доход минус сбережения.",
    limit:
      "Используйте суммы за один период и подходящую основу дохода. Инструмент не получает банковские данные, не прогнозирует доходность инвестиций и не рассчитывает налоги.",
    currentDescription: "Доля дохода за этот период, которую вы откладываете.",
    targetDescription: "Дополнительная сумма, необходимая для выбранной нормы.",
    scenarioDescription: "Быстрое сравнение изменений доходов или расходов.",
    points: [
      [
        "Обычные сбережения и дополнительный взнос",
        "Расходы выводятся из ваших данных",
        "Годовой вид для месячного бюджета",
      ],
      [
        "Расстояние в процентных пунктах",
        "Цель задаете вы",
        "Универсальная норма не предполагается",
      ],
      [
        "Проверка одного сценария в браузере",
        "Новая норма и сбережения",
        "Последствия изменений заметнее",
      ],
    ],
    faq: [
      [
        "Как рассчитывается норма сбережений?",
        "Это сумма, отложенная за выбранный период, деленная на доход за этот период и выраженная в процентах. Калькулятор складывает обычные сбережения и дополнительные взносы.",
      ],
      [
        "Использовать доход до или после налогов?",
        "Используйте основу дохода, которая соответствует вашим сбережениям. Доход после налогов обычно понятнее для бюджета семьи.",
      ],
      [
        "Что сравнивает сценарий?",
        "Сценарий применяет процентные изменения доходов и расходов к текущему периоду. Расходы оцениваются как доход минус сбережения.",
      ],
      [
        "Учитывает ли калькулятор инвестиции или налоги?",
        "Нет. Он измеряет сбережения по введенным суммам. Он не прогнозирует рост инвестиций и не рассчитывает налоги.",
      ],
    ],
    steps: [
      [
        "Выберите период",
        "Выберите месяц или год и используйте одну основу для дохода и сбережений.",
      ],
      [
        "Введите доход и сбережения",
        "Укажите обычные сбережения и дополнительный взнос за период.",
      ],
      [
        "Задайте цель и проверьте",
        "Посмотрите текущую норму, расстояние до цели и сценарий.",
      ],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "Соберите картину финансов",
      labelSavingsSnapshot: "Ваши сбережения",
      labelTrySmallChange: "Проверьте небольшое изменение",
      labelPeriod: "Период бюджета",
      labelMonthly: "Ежемесячно",
      labelYearly: "Ежегодно",
      labelCurrency: "Валюта",
      labelCurrencyUSD: "доллар США",
      labelCurrencyEUR: "евро",
      labelCurrencyGBP: "фунт",
      labelCurrencyCAD: "канадский доллар",
      labelCurrencyAUD: "австралийский доллар",
      labelCurrencyJPY: "иена",
      labelIncome: "Доход за этот период",
      labelIncomeHelp:
        "Используйте доход после налогов, чтобы измерить деньги, доступные вашей семье.",
      labelSaved: "Обычные сбережения",
      labelSavedHelp: "Сумма, которую вы обычно откладываете за этот период.",
      labelExtraContribution: "Дополнительный взнос",
      labelExtraContributionHelp:
        "Добавьте премию, перевод или разовый взнос за этот период.",
      labelTargetRate: "Целевая норма сбережений",
      labelTargetRateHelp:
        "Узнайте, сколько нужно откладывать дополнительно для достижения цели.",
      labelIncomeChange: "Изменение дохода в сценарии",
      labelSpendingChange: "Изменение расходов в сценарии",
      labelScenarioHelp:
        "Проверьте изменение, не меняя текущие цифры. Расходы оцениваются как доход минус сбережения.",
      labelCurrentRate: "Текущая норма сбережений",
      labelAnnualSaved: "Сбережения за год",
      labelAnnualIncome: "Доход за год",
      labelSpending: "Расходы за этот период",
      labelTargetGap: "Расстояние до цели",
      labelTargetMet: "Цель достигнута",
      labelMoreNeeded: "дополнительно для достижения цели",
      labelScenario: "Сценарий",
      labelScenarioRate: "Норма сбережений в сценарии",
      labelScenarioChange: "Изменение по сравнению с текущим",
      labelScenarioSaved: "Сбережения в сценарии",
      labelScenarioSpending: "Расходы в сценарии",
      labelScenarioTarget: "Расстояние сценария до цели",
      labelScenarioTargetMet: "Цель достигнута в этом сценарии",
      labelScenarioMoreNeeded: "дополнительные сбережения нужны в сценарии",
      labelReset: "Сбросить",
      labelCopyResult: "Копировать сводку",
      labelCopied: "Скопировано",
      labelInvalidInput:
        "Введите доход больше нуля и неотрицательные суммы сбережений.",
      labelRate: "норма",
      labelPercentagePoints: "процентных пунктов",
      labelMoneySuffix: "за этот период",
    },
  },
  ja: {
    slug: "savings-rate-calculator",
    title: "貯蓄率計算機",
    description:
      "収入のうちどれだけ貯蓄しているかを計算し、年間の金額に換算して、収入や支出の変化を試します。",
    intro:
      "貯蓄率は、予算をわかりやすい割合に変えます。将来の目標に向けて残る収入の割合です。同じ期間の収入と貯蓄を入力して、現在の貯蓄率と目標までの差を確認しましょう。",
    method:
      "現在の貯蓄率は、通常の貯蓄と追加分を選択した期間の収入で割って求めます。月間の金額は年間表示で12倍します。支出は収入から貯蓄を引いた金額として推定します。",
    limit:
      "同じ期間の金額を使い、貯蓄額と一致する収入基準を選んでください。このツールは銀行データを取得せず、投資収益や税金を予測しません。",
    currentDescription: "この期間の収入のうち、貯蓄している割合です。",
    targetDescription: "設定した貯蓄率に達するために必要な追加額です。",
    scenarioDescription: "収入や支出の変化を簡単に比較します。",
    points: [
      ["通常の貯蓄と追加分", "入力から支出を推定", "月間予算の年間表示"],
      [
        "目標との差をポイントで表示",
        "目標は自分で設定",
        "共通の理想値を仮定しない",
      ],
      [
        "ブラウザ上でシナリオを試す",
        "新しい率と貯蓄額を表示",
        "変化の影響を見える化",
      ],
    ],
    faq: [
      [
        "貯蓄率はどう計算しますか？",
        "選択した期間に貯蓄した金額を、その期間の収入で割り、パーセントで表示します。通常の貯蓄と追加分を合計します。",
      ],
      [
        "税引前と税引後のどちらの収入を使いますか？",
        "貯蓄額に合う収入基準を使ってください。家計では、使えるお金と貯蓄を比較できる税引後収入がわかりやすいことが多いです。",
      ],
      [
        "シナリオでは何を比較しますか？",
        "現在の期間に収入と支出の変化率を適用します。支出は収入から貯蓄を引いて推定します。",
      ],
      [
        "投資収益や税金は含まれますか？",
        "いいえ。入力した金額から貯蓄行動を測定します。投資の成長や税金は計算しません。",
      ],
    ],
    steps: [
      ["期間を選ぶ", "月間または年間を選び、収入と貯蓄に同じ期間を使います。"],
      ["収入と貯蓄を入力する", "通常の貯蓄と期間中の追加分を入力します。"],
      ["目標を設定して試す", "現在の率、目標との差、シナリオを確認します。"],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "お金の全体像を作る",
      labelSavingsSnapshot: "貯蓄のスナップショット",
      labelTrySmallChange: "小さな変化を試す",
      labelPeriod: "予算の期間",
      labelMonthly: "月間",
      labelYearly: "年間",
      labelCurrency: "通貨",
      labelCurrencyUSD: "米ドル",
      labelCurrencyEUR: "ユーロ",
      labelCurrencyGBP: "ポンド",
      labelCurrencyCAD: "カナダドル",
      labelCurrencyAUD: "豪ドル",
      labelCurrencyJPY: "円",
      labelIncome: "この期間の収入",
      labelIncomeHelp: "家計で使えるお金を測る場合は、税引後の収入を使います。",
      labelSaved: "通常の貯蓄",
      labelSavedHelp: "この期間に通常取り分ける金額です。",
      labelExtraContribution: "追加の貯蓄",
      labelExtraContributionHelp:
        "ボーナス、振込、または一度だけの追加分を入力します。",
      labelTargetRate: "目標貯蓄率",
      labelTargetRateHelp: "目標に達するために必要な追加貯蓄を確認します。",
      labelIncomeChange: "シナリオの収入変化",
      labelSpendingChange: "シナリオの支出変化",
      labelScenarioHelp:
        "現在の数字を変えずに変化を試します。支出は収入から貯蓄を引いて推定します。",
      labelCurrentRate: "現在の貯蓄率",
      labelAnnualSaved: "年間貯蓄額",
      labelAnnualIncome: "年間収入",
      labelSpending: "この期間の支出",
      labelTargetGap: "目標との差",
      labelTargetMet: "目標達成",
      labelMoreNeeded: "目標達成に必要な追加貯蓄",
      labelScenario: "シナリオ",
      labelScenarioRate: "シナリオの貯蓄率",
      labelScenarioChange: "現在との差",
      labelScenarioSaved: "シナリオの貯蓄",
      labelScenarioSpending: "シナリオの支出",
      labelScenarioTarget: "シナリオの目標との差",
      labelScenarioTargetMet: "このシナリオで目標達成",
      labelScenarioMoreNeeded: "このシナリオで必要な追加貯蓄",
      labelReset: "リセット",
      labelCopyResult: "概要をコピー",
      labelCopied: "コピーしました",
      labelInvalidInput: "0より大きい収入と、0以上の貯蓄額を入力してください。",
      labelRate: "率",
      labelPercentagePoints: "パーセントポイント",
      labelMoneySuffix: "この期間",
    },
  },
  ko: {
    slug: "savings-rate-calculator",
    title: "저축률 계산기",
    description:
      "소득 중 얼마를 저축하는지 계산하고 연간 금액으로 환산한 뒤 소득과 지출 변화를 시험해 보세요.",
    intro:
      "저축률은 예산을 이해하기 쉬운 비율로 바꿉니다. 미래의 목표를 위해 남는 소득의 비중입니다. 같은 기간의 소득과 저축을 입력해 현재 저축률과 목표까지의 차이를 확인하세요.",
    method:
      "현재 저축률은 선택한 기간의 정기 저축과 추가 납입액을 해당 기간의 소득으로 나눈 값입니다. 월간 금액은 연간 보기에서 12를 곱합니다. 지출은 소득에서 저축을 뺀 값으로 추정합니다.",
    limit:
      "같은 기간의 금액을 사용하고 저축액과 맞는 소득 기준을 선택하세요. 이 도구는 은행 데이터를 가져오지 않으며 투자 수익이나 세금을 예측하지 않습니다.",
    currentDescription: "이 기간 소득 중 저축하는 비율입니다.",
    targetDescription: "선택한 목표에 도달하기 위해 필요한 추가 금액입니다.",
    scenarioDescription: "소득이나 지출 변화에 대한 빠른 비교입니다.",
    points: [
      [
        "정기 저축과 추가 납입",
        "입력값으로 지출 추정",
        "월간 예산의 연간 보기",
      ],
      [
        "퍼센트 포인트 차이 표시",
        "목표는 직접 설정",
        "보편적인 이상치를 가정하지 않음",
      ],
      [
        "브라우저에서 시나리오 시험",
        "새 저축률과 저축액 표시",
        "변화의 영향을 쉽게 비교",
      ],
    ],
    faq: [
      [
        "저축률은 어떻게 계산하나요?",
        "선택한 기간에 저축한 금액을 같은 기간의 소득으로 나누어 백분율로 표시합니다. 정기 저축과 추가 납입액을 합산합니다.",
      ],
      [
        "세전 소득과 세후 소득 중 무엇을 사용하나요?",
        "저축액과 일치하는 소득 기준을 사용하세요. 가계 예산에는 세후 소득이 보통 더 이해하기 쉽습니다.",
      ],
      [
        "시나리오에서는 무엇을 비교하나요?",
        "현재 기간에 소득과 지출의 백분율 변화를 적용합니다. 지출은 소득에서 저축을 뺀 값으로 추정합니다.",
      ],
      [
        "투자 수익이나 세금이 포함되나요?",
        "아니요. 입력한 금액을 기준으로 저축 행동만 측정합니다. 투자 성장이나 세금은 계산하지 않습니다.",
      ],
    ],
    steps: [
      [
        "기간 선택",
        "월간 또는 연간을 선택하고 소득과 저축에 같은 기간을 사용하세요.",
      ],
      ["소득과 저축 입력", "정기 저축과 해당 기간의 추가 납입액을 입력하세요."],
      ["목표 설정 및 시험", "현재 저축률, 목표 차이, 시나리오를 확인하세요."],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "나의 돈 흐름 만들기",
      labelSavingsSnapshot: "저축 요약",
      labelTrySmallChange: "작은 변화 시험하기",
      labelPeriod: "예산 기간",
      labelMonthly: "월간",
      labelYearly: "연간",
      labelCurrency: "통화",
      labelCurrencyUSD: "미국 달러",
      labelCurrencyEUR: "유로",
      labelCurrencyGBP: "파운드",
      labelCurrencyCAD: "캐나다 달러",
      labelCurrencyAUD: "호주 달러",
      labelCurrencyJPY: "엔",
      labelIncome: "이 기간의 소득",
      labelIncomeHelp:
        "가계에서 사용할 수 있는 돈을 측정하려면 세후 소득을 사용하세요.",
      labelSaved: "정기 저축",
      labelSavedHelp: "이 기간에 보통 따로 모으는 금액입니다.",
      labelExtraContribution: "추가 납입",
      labelExtraContributionHelp:
        "이 기간의 보너스, 이체 또는 일회성 납입액을 더하세요.",
      labelTargetRate: "목표 저축률",
      labelTargetRateHelp:
        "목표에 도달하려면 얼마나 더 저축해야 하는지 확인하세요.",
      labelIncomeChange: "시나리오 소득 변화",
      labelSpendingChange: "시나리오 지출 변화",
      labelScenarioHelp:
        "현재 숫자를 바꾸지 않고 변화를 시험하세요. 지출은 소득에서 저축을 뺀 값으로 추정합니다.",
      labelCurrentRate: "현재 저축률",
      labelAnnualSaved: "연간 저축액",
      labelAnnualIncome: "연간 소득",
      labelSpending: "이 기간의 지출",
      labelTargetGap: "목표까지의 차이",
      labelTargetMet: "목표 달성",
      labelMoreNeeded: "목표 달성을 위해 필요한 추가 저축",
      labelScenario: "시나리오",
      labelScenarioRate: "시나리오 저축률",
      labelScenarioChange: "현재와의 변화",
      labelScenarioSaved: "시나리오 저축액",
      labelScenarioSpending: "시나리오 지출",
      labelScenarioTarget: "시나리오 목표 차이",
      labelScenarioTargetMet: "이 시나리오에서 목표 달성",
      labelScenarioMoreNeeded: "이 시나리오에서 필요한 추가 저축",
      labelReset: "초기화",
      labelCopyResult: "요약 복사",
      labelCopied: "복사됨",
      labelInvalidInput: "0보다 큰 소득과 음수가 아닌 저축액을 입력하세요.",
      labelRate: "저축률",
      labelPercentagePoints: "퍼센트 포인트",
      labelMoneySuffix: "이 기간",
    },
  },
  zh: {
    slug: "savings-rate-calculator",
    title: "储蓄率计算器",
    description:
      "计算收入中用于储蓄的比例，将结果换算为年度金额，并测试收入或支出的变化。",
    intro:
      "储蓄率把预算变成一个直观的比例：收入中为未来目标保留下来的部分。输入同一时期的收入和储蓄，查看当前储蓄率以及距离目标还有多少。",
    method:
      "当前储蓄率等于所选时期的常规储蓄加额外存入，再除以该时期的收入。月度金额在年度视图中乘以 12。支出按收入减去储蓄估算。",
    limit:
      "请使用同一时期的金额，并选择与储蓄金额相匹配的收入口径。本工具不会读取银行数据，也不会预测投资收益或计算税费。",
    currentDescription: "本期收入中用于储蓄的比例。",
    targetDescription: "达到所选目标还需要增加的金额。",
    scenarioDescription: "快速比较收入或支出的变化。",
    points: [
      ["常规储蓄加额外存入", "根据输入估算支出", "月度预算的年度视图"],
      ["显示百分点评距离", "目标由你自己设定", "不假定统一的理想值"],
      ["在浏览器中测试一个情景", "显示新的比例和储蓄额", "让变化的影响更清楚"],
    ],
    faq: [
      [
        "储蓄率如何计算？",
        "储蓄率是所选时期的储蓄金额除以该时期收入，并以百分比表示。计算器会加上常规储蓄和额外存入。",
      ],
      [
        "应该使用税前收入还是税后收入？",
        "请选择与储蓄金额一致的收入口径。对于家庭预算，税后收入通常更容易比较可用资金和储蓄金额。",
      ],
      [
        "情景比较什么？",
        "情景会把收入和支出的百分比变化应用到当前时期。支出按收入减去储蓄估算。",
      ],
      [
        "计算器包含投资收益或税费吗？",
        "不包含。它根据输入金额衡量储蓄行为，不预测投资增长，也不计算税费。",
      ],
    ],
    steps: [
      ["选择时期", "选择月度或年度，并让收入和储蓄使用相同的时间范围。"],
      ["输入收入和储蓄", "输入常规储蓄以及本期的额外存入。"],
      ["设置目标并测试变化", "查看当前比例、目标差距和情景结果。"],
    ],
    ui: {
      ...englishUI,
      labelMoneyPicture: "看清你的资金安排",
      labelSavingsSnapshot: "储蓄概览",
      labelTrySmallChange: "试试小变化",
      labelPeriod: "预算周期",
      labelMonthly: "每月",
      labelYearly: "每年",
      labelCurrency: "货币",
      labelCurrencyUSD: "美元",
      labelCurrencyEUR: "欧元",
      labelCurrencyGBP: "英镑",
      labelCurrencyCAD: "加元",
      labelCurrencyAUD: "澳元",
      labelCurrencyJPY: "日元",
      labelIncome: "本期收入",
      labelIncomeHelp: "如果要衡量家庭可用资金，请使用税后收入。",
      labelSaved: "常规储蓄",
      labelSavedHelp: "你在本期通常存下的金额。",
      labelExtraContribution: "额外存入",
      labelExtraContributionHelp: "加入本期的奖金、转账或一次性存入。",
      labelTargetRate: "目标储蓄率",
      labelTargetRateHelp: "查看达到目标还需要多存多少。",
      labelIncomeChange: "情景收入变化",
      labelSpendingChange: "情景支出变化",
      labelScenarioHelp:
        "不改变当前数字，试试一个变化。支出按收入减去储蓄估算。",
      labelCurrentRate: "当前储蓄率",
      labelAnnualSaved: "年度储蓄",
      labelAnnualIncome: "年度收入",
      labelSpending: "本期支出",
      labelTargetGap: "距离目标",
      labelTargetMet: "已达到目标",
      labelMoreNeeded: "达到目标还需增加储蓄",
      labelScenario: "情景",
      labelScenarioRate: "情景储蓄率",
      labelScenarioChange: "相对当前的变化",
      labelScenarioSaved: "情景储蓄",
      labelScenarioSpending: "情景支出",
      labelScenarioTarget: "情景目标差距",
      labelScenarioTargetMet: "此情景已达到目标",
      labelScenarioMoreNeeded: "此情景还需增加储蓄",
      labelReset: "重置",
      labelCopyResult: "复制摘要",
      labelCopied: "已复制",
      labelInvalidInput: "请输入大于零的收入和不为负数的储蓄金额。",
      labelRate: "比例",
      labelPercentagePoints: "个百分点",
      labelMoneySuffix: "本期",
    },
  },
};

export function createSavingsRateContent(
  locale: SavingsRateLocale,
): ToolLocaleContent<SavingsRateUI> {
  const pack = packs[locale];
  const faq = pack.faq.map(([question, answer]) => ({ question, answer }));
  const howTo = pack.steps.map(([name, text]) => ({ name, text }));
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: pack.title,
    description: pack.description,
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: pack.title,
    description: pack.description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    inLanguage: locale,
  };
  return {
    slug: pack.slug,
    title: pack.title,
    description: pack.description,
    ui: pack.ui,
    faq,
    bibliography,
    howTo,
    schemas: [faqSchema, howToSchema, appSchema],
    seo: [
      { type: "title", text: pack.title, level: 2 },
      { type: "paragraph", html: `<p>${pack.intro}</p>` },
      { type: "title", text: pack.ui.labelCurrentRate, level: 3 },
      {
        type: "comparative",
        columns: 3,
        items: [
          {
            title: pack.ui.labelCurrentRate,
            description: pack.currentDescription,
            points: pack.points[0],
          },
          {
            title: pack.ui.labelTargetGap,
            description: pack.targetDescription,
            points: pack.points[1],
          },
          {
            title: pack.ui.labelScenario,
            description: pack.scenarioDescription,
            points: pack.points[2],
            highlight: true,
          },
        ],
      },
      { type: "title", text: pack.ui.labelTargetRateHelp, level: 3 },
      { type: "paragraph", html: `<p>${pack.method}</p><p>${pack.limit}</p>` },
    ],
  };
}

export const content = createSavingsRateContent("en");
