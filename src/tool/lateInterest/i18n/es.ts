import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'intereses-demora';
const title = 'Calculadora de Intereses de Demora y Legales España 2026';
const description =
  'Calcula intereses de demora tributarios (Hacienda) y legales por impagos. Simulador actualizado para 2025 y 2026 basado en la Ley de Presupuestos.';

const faqData = [
  {
    question: 'Qué es un interés por demora o moratorio?',
    answer:
      'Es el interés que se cobra sobre una cantidad no pagada en el plazo establecido. Se aplica sobre la deuda original y se acumula hasta que se realice el pago completo.',
  },
  {
    question: 'Cuál es la diferencia entre interés simple y compuesto?',
    answer:
      'El interés simple se calcula solo sobre el capital original cada día. El compuesto se calcula sobre el capital más los intereses acumulados, generando un crecimiento más rápido de la deuda.',
  },
  {
    question: 'Cómo se calcula el interés diario?',
    answer:
      'Se divide la tasa anual entre 365 días y se aplica al capital original. Por ejemplo, 10% anual = 0,0274% diario.',
  },
  {
    question: 'Qué tasa de interés por demora debo aplicar?',
    answer:
      'Depende de la legislación local y los términos del contrato. En España, la Ley de Morosidad establece tasas máximas. Consulta con un asesor legal para tu caso específico.',
  },
  {
    question: 'Puedo usar esta calculadora para deudas legales?',
    answer:
      'Esta es una herramienta informativa. Para deudas reales, verifica los términos contractuales y la legislación local. Consulta con un abogado si tienes dudas.',
  },
];

const howToData = [
  {
    name: 'Elige el tipo de cálculo',
    text: 'Selecciona entre interés simple, compuesto o mensual según tu situación.',
  },
  {
    name: 'Introduce los datos',
    text: 'Ingresa el monto original, la tasa de interés y el período de demora.',
  },
  {
    name: 'Obtén el resultado',
    text: 'La calculadora muestra el interés diario acumulado, total generado, monto final y tasa efectiva.',
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias',
  bibliography: [
    {
      name: 'Ley 3/2004 de Lucha contra la Morosidad',
      url: 'https://www.boe.es/',
    },
    {
      name: 'Banco de España: Tipos de Interés',
      url: 'https://www.bde.es/',
    },
    {
      name: 'Cálculo de Intereses Compuestos',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Intereses de Demora y Legales: Guía Completa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el complejo entramado legal y fiscal de España, el transcurso del tiempo ante una deuda no es gratuito. El <strong>interés de demora</strong> y el <strong>interés legal del dinero</strong> son los mecanismos que la ley utiliza para compensar el perjuicio causado por el retraso en el cumplimiento de una obligación dineraria. Ya sea una deuda con <strong>Hacienda</strong>, un impago entre empresas o una reclamación judicial, entender cómo se devengan estos intereses es fundamental.',
    },
    {
      type: 'title',
      text: '¿Qué es el Interés Legal del Dinero?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El interés legal del dinero es el recargo que se aplica a una deuda cuando las partes no han pactado un interés específico o cuando la ley así lo determina. Para los años <strong>2024, 2025 y 2026</strong>, este tipo se ha mantenido estable en el <strong>3,25%</strong>. Este porcentaje sirve como base para multitud de cálculos legales.',
    },
    {
      type: 'title',
      text: 'El Interés de Demora Tributario (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando la deuda es con la Administración Pública, el <strong>interés de demora tributario</strong> es superior al interés legal para desincentivar el retraso en el pago de impuestos. Para el periodo <strong>2024-2026</strong>, se ha fijado en el <strong>4,0625%</strong>. Este es el recargo que Hacienda te cobrará si presentas una autoliquidación fuera de plazo.',
    },
    {
      type: 'tip',
      title: 'Carácter Indemnizatorio, no Punitivo',
      html: '<p><strong>Dato clave:</strong> A diferencia de las sanciones, los intereses de demora tienen carácter indemnizatorio, no punitivo. Hacienda no te "castiga" con ellos, sino que te cobra por el tiempo que has dispuesto de un dinero que debería estar en las arcas públicas.</p>',
    },
    {
      type: 'title',
      text: 'Cómo Calcular los Intereses Paso a Paso',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El cálculo de estos intereses sigue una fórmula de interés simple, donde el tiempo se cuenta por días naturales: <strong>Intereses = (Principal × Días × Tipo de Interés) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Principal:</strong> La cantidad total de la deuda original.',
        '<strong>Días:</strong> El número de días transcurridos desde el día siguiente al vencimiento hasta el día del pago efectivo.',
        '<strong>Tipo de Interés:</strong> El porcentaje anual aplicable (Ej: 3,25 o 4,0625).',
        '<strong>36.500:</strong> El factor divisor para convertir el porcentaje anual en diario (365 días x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Ejemplo Práctico: Deuda con Hacienda',
      html: '<p>Imagina que debes 5.000 € de una declaración de IRPF que venció hace 180 días:</p><ul><li>Interés aplicable (Demora): 4,0625%</li><li>Cálculo: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Intereses resultantes:</strong> 100,17 €</li><li>Total a pagar: 5.100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Diferencias Según el Tipo de Deuda',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Deudas Civiles:</strong> Entre particulares, se aplica el 3,25% (legal).',
        '<strong>Deudas Mercantiles:</strong> Se rigen por la Ley de Lucha contra la Morosidad, alcanzando el 10,15% - 11,15% en 2025-2026.',
        '<strong>Deudas con la Seguridad Social:</strong> Aplican el 4,0625% más recargos del 10% al 20%.',
        '<strong>Intereses Procesales:</strong> Cuando hay sentencia judicial, el 5,25% desde la fecha de sentencia.',
      ],
    },
    {
      type: 'title',
      text: 'Intereses en Operaciones Comerciales: ¡Cuidado con los 60 Días!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si eres autónomo o empresa, la Ley 3/2004 establece un plazo máximo de pago de 60 días. Si tu cliente se pasa de esa fecha, puedes exigir el interés de demora comercial de forma automática, sin necesidad de recordatorio, y además cobrar una cantidad fija de 40 € por costes de cobro.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Intereses de Demora',
    labelSimpleTitle: 'Simple',
    labelCompoundTitle: 'Compuesto',
    labelMonthlyTitle: 'Mensual',
    labelSimpleQuestion: 'Calcular con interés simple',
    labelCompoundQuestion: 'Calcular con interés compuesto',
    labelMonthlyQuestion: 'Calcular con períodos mensuales',
    labelPrincipal: 'Monto Original',
    labelAnnualRate: 'Tasa Anual',
    labelDays: 'Días de Retraso',
    labelMonths: 'Meses de Retraso',
    labelMonthlyRate: 'Tasa Mensual',
    labelDailyInterest: 'Interés Diario',
    labelTotalInterest: 'Interés Total',
    labelTotalAmount: 'Monto Total a Pagar',
    labelEffectiveRate: 'Tasa Efectiva',
    labelCopyTooltip: 'Copiar resultado',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Fórmula aplicada',
    reportTitle: 'INFORME DE CÁLCULO DE INTERESES',
    reportLabelPrincipal: 'Principal',
    reportLabelType: 'Tipo',
    reportLabelPeriod: 'Período',
    reportLabelDays: 'Días transcurridos',
    reportLabelInterest: 'INTERESES DEVENGADOS',
    reportLabelTotal: 'TOTAL A LIQUIDAR',
    reportDaysSuffix: 'días',
    formulaDescription: 'Este cálculo utiliza los tipos vigentes. Si el periodo abarca años anteriores con diferentes tipos, el cálculo real debería ser fraccionado por periodos.',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
  },
};
