import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Oferta A",
  labelScenarioB: "Oferta B",
  labelScenarioName: "Nombre de la oferta",
  labelCurrency: "Moneda",
  labelApproximateRates:
    "Factores aproximados para planificar, no tipos de cambio en tiempo real.",
  labelPrincipal: "Importe prestado",
  labelTerm: "Plazo de devolución",
  labelMonths: "meses",
  labelInputBasis: "¿Qué dato conoces?",
  labelAnnualRate: "Tipo nominal anual",
  labelMonthlyPayment: "Cuota mensual conocida",
  labelUpfrontFees: "Comisiones iniciales",
  labelMonthlyFees: "Comisiones mensuales",
  labelFinalFees: "Comisión final",
  labelOfferNameA: "Oferta A",
  labelOfferNameB: "Oferta B",
  labelRateMode: "Conozco el tipo",
  labelPaymentMode: "Conozco la cuota",
  labelPreset: "Empieza una comparativa",
  labelPresetBalanced: "Ofertas equilibradas",
  labelPresetLowFee: "Tipo bajo con comisiones",
  labelPresetLongTerm: "Plazo más largo",
  labelReset: "Restablecer valores",
  labelCopy: "Copiar comparativa",
  labelCopied: "Comparativa copiada",
  labelEffectiveApr: "Coste anual efectivo",
  labelNominalRate: "Tipo nominal",
  labelMonthlyPaymentResult: "Cuota mensual",
  labelTotalPaid: "Total pagado",
  labelTotalFees: "Comisiones del escenario",
  labelFinanceCost: "Coste sobre el principal",
  labelNetCashReceived: "Efectivo recibido tras comisiones iniciales",
  labelWinner: "¿Qué oferta cuesta menos?",
  labelLowerCost: "Menor coste efectivo",
  labelHigherCost: "Mayor coste efectivo",
  labelTie: "Casi iguales",
  labelNeedValidInputs: "Necesita datos válidos",
  labelInvalidPrincipal:
    "El importe prestado debe ser mayor que cero y superar las comisiones iniciales.",
  labelInvalidTerm: "Usa un plazo entero de 1 a 600 meses.",
  labelInvalidFees: "Las comisiones no pueden ser negativas.",
  labelInvalidPayment:
    "Introduce una cuota mensual positiva que pueda devolver el efectivo recibido.",
  labelInvalidRate: "Usa un tipo nominal anual entre el 0 % y el 100 %.",
  labelNoComparison: "Completa las dos ofertas para compararlas.",
  labelTimeline: "Calendario de pagos",
  labelStart: "Inicio",
  labelMonthly: "Cada mes",
  labelEnd: "Último mes",
  labelFormula: "Cómo funciona la comparativa",
  labelFormulaText:
    "El coste anual efectivo es el tipo mensual anualizado que iguala el efectivo recibido con los pagos y las comisiones descontados.",
  labelApproximation:
    "La estimación supone cuotas mensuales iguales, sin carencia y solo las comisiones que introduzcas. No sustituye al TAE oficial del prestamista.",
  labelScenarioSummary: "Resumen del escenario",
  currencyCode: "EUR",
  currencyLocale: "es-ES",
};

const faq = [
  {
    question:
      "¿Cuál es la diferencia entre el tipo de interés y el coste anual efectivo?",
    answer:
      "El tipo nominal describe el interés aplicado al saldo. El coste anual efectivo también refleja el momento y el importe de las comisiones iniciales, mensuales y finales que introduzcas.",
  },
  {
    question:
      "¿Puedo introducir una cuota mensual en vez de un tipo de interés?",
    answer:
      "Sí. Elige la opción de cuota mensual conocida para esa oferta. La calculadora deduce el tipo mensual que encaja con el efectivo recibido, los pagos y las comisiones del escenario.",
  },
  {
    question: "¿Qué oferta es más barata?",
    answer:
      "Compara primero el coste anual efectivo y revisa después el total pagado y el efectivo recibido. Un porcentaje menor puede tener un coste total mayor si cambia el plazo o el importe.",
  },
  {
    question: "¿Es el TAE oficial del prestamista?",
    answer:
      "No. Es una estimación transparente basada en tus datos. Cada entidad y jurisdicción puede incluir costes, fechas de pago, impuestos, seguros o supuestos distintos.",
  },
];

const howTo = [
  {
    name: "Introduce importe y plazo",
    text: "Añade el dinero que recibirías y el número de cuotas mensuales de cada oferta.",
  },
  {
    name: "Elige el dato conocido",
    text: "Introduce el tipo nominal anual o la cuota mensual, según lo que indique la oferta.",
  },
  {
    name: "Añade todas las comisiones",
    text: "Incluye las comisiones iniciales, mensuales y finales para representar el flujo de dinero completo.",
  },
  {
    name: "Lee la comparativa",
    text: "Usa el coste anual efectivo y comprueba después el total pagado y el efectivo recibido antes de decidir.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculadora de escenarios TAE de préstamos",
    description:
      "Compara dos escenarios de préstamo con tipos, cuotas y comisiones.",
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
    name: "Comparar dos ofertas de préstamo",
    description:
      "Modela los flujos de dos préstamos y compara su coste anual efectivo.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "calculadora-escenarios-tae-prestamo",
  title: "Calculadora de escenarios TAE de préstamos",
  description:
    "Compara dos ofertas de préstamo con sus intereses, cuotas y comisiones para estimar el coste anual efectivo antes de decidir.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Compara préstamos por su coste anual efectivo",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Un tipo de interés publicitado bajo puede ocultar una comisión de apertura, un cargo mensual o un coste final. Esta calculadora convierte los datos de dos ofertas en flujos de caja comparables para mostrar cuánto cuesta realmente el dinero que recibes.</p>",
    },
    { type: "title", text: "Qué incluye la estimación", level: 3 },
    {
      type: "paragraph",
      html: "<p>Para cada oferta introduce el importe, el plazo, el tipo nominal o la cuota mensual conocida y las comisiones cobradas en cada momento. La calculadora encuentra el tipo mensual que equilibra el efectivo recibido con los pagos y comisiones descontados, y después lo anualiza.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Así la comparación considera más que el tipo de interés. El resultado se presenta como una estimación porque el TAE oficial puede seguir reglas del país e incluir costes que no estén en tu escenario.</p>",
    },
    { type: "title", text: "Cómo interpretar el resultado", level: 3 },
    {
      type: "list",
      items: [
        "Compara el coste anual efectivo cuando importe y plazo sean parecidos.",
        "Revisa el total pagado para entender el impacto en euros.",
        "Comprueba el efectivo recibido después de las comisiones iniciales.",
        "Usa el calendario para ver cuándo entra cada coste.",
      ],
    },
    {
      type: "tip",
      title: "Usa el contrato del prestamista como referencia final",
      html: "<p>Si comparas un contrato real, contrasta su TAE con los mismos supuestos. Pregunta por seguros, impuestos, tipos variables, penalizaciones por amortización anticipada y cargos que no hayas podido introducir.</p>",
    },
    { type: "title", text: "Límites de una estimación de escenario", level: 3 },
    {
      type: "paragraph",
      html: "<p>La herramienta supone cuotas mensuales iguales, sin periodo de carencia y comisiones al inicio, durante el plazo o en el último mes. No certifica la asequibilidad, la aprobación, la legalidad ni el TAE oficial de un producto.</p>",
    },
  ],
};
