import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'intereses-demora';
const title = 'Calculadora de Intereses por Demora: Calcula Moratorios';
const description =
  'Calcula los intereses por demora en pagos. Herramienta para calcular moratorios con interés simple, compuesto o mensual. Útil para facturas vencidas y deudas.';

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

const howToSchema: WithContext<HowToThing> = {
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
      text: 'Cómo Calcular Intereses de Demora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los <strong>intereses por demora</strong> o <strong>moratorios</strong> son las penalizaciones financieras que se aplican cuando un pago no se realiza en el plazo acordado. Su cálculo es fundamental en relaciones comerciales y legales.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Interés Simple',
          description: 'Se calcula solo sobre el capital original cada período.',
          points: [
            'Crecimiento lineal y predecible',
            'Menos perjudicial que compuesto',
            'Común en contratos simples',
            'Fórmula: Capital × Tasa × Período',
          ],
        },
        {
          title: 'Interés Compuesto',
          description: 'Se recalcula sobre el capital más intereses acumulados.',
          highlight: true,
          points: [
            'Crecimiento exponencial',
            'Más costoso para el deudor',
            'Usado en finanzas complejas',
            'Los intereses generan más intereses',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'El cálculo exacto de moratorios depende de la legislación local. En España, la Ley 3/2004 sobre morosidad establece límites máximos. Siempre verifica los términos contractuales y consulta con un experto legal.',
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
