import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calculadora-tarjeta-revolving';
const title = 'Calculadora de Tarjetas Revolving y Comprobador de Usura';
const description =
  'Simula el tiempo y coste real de saldar tu deuda de tarjeta revolving. Analiza la TAE aplicada frente a los criterios jurisprudenciales sobre intereses usurarios.';

const faqData = [
  {
    question: '¿Qué es una tarjeta revolving?',
    answer: 'Una tarjeta revolving es un crédito de pago aplazado en el que el cliente elige abonar una cuota mensual reducida. Los intereses devengados se capitalizan mes a mes.',
  },
  {
    question: '¿Por qué la deuda de una revolving se vuelve infinita?',
    answer: 'Al fijar cuotas mínimas muy bajas (ej. 2% del saldo), la mayor parte del pago cubre solo intereses y no amortiza capital.',
  },
  {
    question: '¿Cuándo se considera usura una tarjeta revolving en España?',
    answer: 'Según el Tribunal Supremo (STS 258/2023), es usuraria si la TAE supera el tipo medio de las tarjetas de crédito publicado por el Banco de España en más de 6 puntos porcentuales (~24%).',
  },

  { question: "¿Qué debo comprobar antes de utilizar el resultado?", answer: "Revisa los datos, las unidades, los supuestos y las limitaciones; es una orientación, no una decisión oficial." },];

const howToData = [
  {
    name: 'Selecciona tu mercado o país',
    text: 'Elige España, EE.UU., Reino Unido o Límite Personalizado.',
  },
  {
    name: 'Introduce los datos de tu tarjeta',
    text: 'Ingresa la deuda pendiente, el límite de crédito y la TAE.',
  },

  { name: "Revisa los supuestos", text: "Comprueba los datos, las unidades y los límites de la calculadora antes de interpretar el resultado." },
  { name: "Revisa los supuestos", text: "Comprueba los datos, las unidades y los límites de la calculadora antes de interpretar el resultado." },];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((item, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: item.name,
    text: item.text,
  })),
};

const softwareSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [
    {
      type: 'title',
      text: '¿Cómo funciona la trampa de las tarjetas revolving?',
    },
    {
      type: 'paragraph',
      html: 'Una tarjeta revolving es un crédito de pago aplazado en el que el cliente elige abonar una cuota mensual reducida (fija o porcentual). A diferencia de una tarjeta de crédito convencional, los intereses devengados se recapitalizan mes a mes.',
    },

  { type: 'paragraph', html: "Una <strong>tarjeta revolving</strong> permite pagar a plazos, pero una TAE alta puede convertir una deuda flexible en una obligación muy larga. El saldo pendiente pasa al siguiente periodo de facturación y sigue generando intereses." },
  { type: 'paragraph', html: "A diferencia de un préstamo con plazo definido, la duración depende mucho de la cuota elegida. Una mensualidad pequeña puede mantener la deuda durante años aunque parezca cómoda." },
  { type: 'paragraph', html: "La TAE es más informativa que la cuota anunciada: revisa también comisiones, seguros y condiciones antes de comparar tarjetas." },
  { type: 'paragraph', html: "Cuando el pago es un porcentaje del saldo, el importe de la cuota también suele bajar cada mes. Esto puede hacer que cada vez se amortice menos capital." },
  { type: 'paragraph', html: "Primero se cubren los intereses del periodo y solo el resto reduce la deuda. Si la cuota queda por debajo de los intereses, el saldo crece y el simulador puede mostrar una deuda perpetua." },
  { type: 'paragraph', html: "La tabla de amortización separa intereses, capital y saldo final para que veas si tu pago está reduciendo realmente la deuda." },
  { type: 'paragraph', html: "Selecciona España, Estados Unidos, Reino Unido o un límite personalizado. Después introduce la deuda pendiente, el límite de crédito y la TAE." },
  { type: 'paragraph', html: "Compara una cuota fija con un porcentaje sobre el saldo. En la opción porcentual, el pago mínimo absoluto evita que la cuota se vuelva demasiado pequeña cuando baja la deuda." },
  { type: 'paragraph', html: "Lee juntos los intereses totales, el importe total a devolver y los meses necesarios. La cuota más baja no suele ser la opción más barata." },
  { type: 'paragraph', html: "El comprobador compara el tipo introducido con el umbral del mercado seleccionado. Es una señal informativa y no una valoración legal definitiva del contrato." },
  { type: 'paragraph', html: "En España, la posible usura puede depender de comparar la TAE con el tipo medio de las tarjetas revolving vigente cuando se firmó el contrato. En otros países cambian los límites y las reglas." },
  { type: 'paragraph', html: "Un aviso no demuestra por sí solo una infracción, y un resultado normal no impide que existan otras cláusulas problemáticas. Para un contrato concreto, consulta asesoramiento local." },
  { type: 'paragraph', html: "La simulación usa el saldo, la TAE y los pagos periódicos que introduces. Supone que no hay nuevas compras, comisiones por demora ni cambios del tipo de interés." },
  { type: 'paragraph', html: "Los extractos reales pueden calcular intereses por día, aplicar comisiones o distribuir los pagos de otra forma. Esas diferencias pueden cambiar la duración y el coste final." },
  { type: 'paragraph', html: "Usa el resultado para preparar preguntas al banco y comparar escenarios; no sustituye el extracto, el contrato ni una revisión profesional." },
  { type: 'paragraph', html: "Antes de decidir, compara la TAE, las comisiones, la duración y el importe total a devolver, no solo la cuota mensual." },
  { type: 'paragraph', html: "Revisa el saldo, la cuota mínima, los intereses y las comisiones de tu último extracto antes de confiar en una previsión. Si la cuota no cubre los intereses, busca una alternativa con el emisor." },
  { type: 'paragraph', html: "La simulación es orientativa: cualquier compra nueva, cambio de tipo o retraso en el pago modifica el calendario y el coste final." },
  ],
  ui: {
    title: 'Simulador Revolving y Comprobador de Usura',
    balanceLabel: 'Deuda Pendiente',
    creditLimitLabel: 'Límite de Crédito',
    aprLabel: 'Tipo de Interés (TIN / TAE)',
    paymentTypeLabel: 'Modalidad de Pago',
    paymentTypeFixed: 'Cuota Fija Mensual',
    paymentTypePercentage: 'Porcentaje sobre Saldo',
    paymentValueLabel: 'Valor del Pago (Importe o %)',
    minPaymentValueLabel: 'Pago Mínimo Permitido',
    currencyLabel: 'Moneda',
    marketLabel: 'Mercado Regulatorio / País',
    marketES: 'España (Banco de España + Regla del 6%)',
    marketUS: 'Estados Unidos (Referencia CFPB)',
    marketUK: 'Reino Unido (FCA)',
    marketEU: 'Unión Europea (Referencia BCE)',
    marketJP: 'Japón (FSA / Ley de Préstamos)',
    marketKR: 'Corea del Sur (FSC / Limitación de Interés)',
    marketCN: 'China (Banco Popular de China)',
    marketBR: 'Brasil (Banco Central + Ley 14.905/2024)',
    marketMX: 'México (Banco de México)',
    marketPL: 'Polonia (KNF / Código Civil)',
    marketID: 'Indonesia (OJK)',
    marketTR: 'Turquía (BRSA / BDDK)',
    marketRU: 'Rusia (Banco de Rusia / FZ-353)',
    marketSE: 'Suecia (Finansinspektionen)',
    marketAU: 'Australia (ASIC / NCCP)',
    marketCA: 'Canadá (FCAC / Código Penal)',
    marketCustom: 'Límite Personalizado',
    customThresholdLabel: 'Límite de Usura Personalizado (TAE %)',

    resultsTitle: 'Resultados de Amortización',
    totalInterestLabel: 'Intereses Totales Pagados',
    totalPaidLabel: 'Total a Reembolsar',
    monthsToPayLabel: 'Plazo para Saldar',
    infiniteDebtWarning: '¡Deuda perpetua! El pago no cubre los intereses mensuales. No saldarás esta deuda jamás con esta cuota.',
    payoffYearsLabel: 'Línea Temporal de Pago',

    usuryTitle: 'Análisis de Usura y Legalidad',
    usurySafeStatus: 'Rango Estándar (Riesgo Bajo)',
    usuryWarningStatus: 'Interés Elevado (Riesgo Medio)',
    usuryUsuriousStatus: 'Potencialmente Usurario (Riesgo Alto)',
    usuryReferenceLabel: 'TAE Media del Mercado',
    usuryThresholdLabel: 'Umbral Alerta de Usura',

    tableTitle: 'Tabla de Amortización Mensual',
    tableHeaderMonth: 'Mes',
    tableHeaderInitial: 'Saldo Inicial',
    tableHeaderInterest: 'Intereses',
    tableHeaderPrincipal: 'Capital Amortizado',
    tableHeaderPayment: 'Cuota Pagada',
    tableHeaderFinal: 'Saldo Final',

    copyTooltip: 'Copiar Informe al Portapapeles',
    copiedLabel: '¡Informe Copiado!',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
