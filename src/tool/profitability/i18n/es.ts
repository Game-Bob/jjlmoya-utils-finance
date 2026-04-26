import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Inversión Inicial',
  labelFinalValue: 'Valor Final / Saldo Actual',
  labelTimeSelection: 'Duración de la Inversión',
  labelYears: 'Años',
  labelMonths: 'Meses',
  labelDays: 'Días',
  labelROI: 'Retorno de la Inversión (ROI)',
  labelCAGR: 'Crecimiento Anualizado (CAGR)',
  labelNetProfit: 'Beneficio Neto',
  labelLinearGrowth: 'Crecimiento Lineal (Estimado)',
  labelExponentialGrowth: 'Crecimiento Compuesto (CAGR)',
  labelPositiveResult: 'Inversión Rentable',
  labelNegativeResult: 'Posición en Pérdidas',
  labelCopyResult: 'Copiar Resultados',
  labelCopied: '¡Copiado!',
};

const slug = 'calculadora-rentabilidad-inversion-roi-cagr';
const title = 'Calculadora de Rentabilidad: ROI y CAGR';
const description = 'Analiza el rendimiento de tus inversiones con precisión. Calcula el Retorno de la Inversión (ROI) total y la Tasa de Crecimiento Anual Compuesto (CAGR) para entender tus ganancias reales.';

const faq = [
  {
    question: '¿Qué es un buen CAGR?',
    answer: 'Un "buen" CAGR depende del tipo de activo. Históricamente, el S&P 500 ha retornado en torno al 7-10% anual. Inversiones de alto riesgo pueden aspirar al 15-20%+, mientras que las cuentas de ahorro suelen ofrecer mucho menos.',
  },
  {
    question: '¿Por qué mi CAGR es distinto de mi ROI total?',
    answer: 'El ROI es el retorno total sin importar el tiempo. El CAGR es la tasa anual necesaria para alcanzar ese retorno total. Si tu inversión duró más de un año, el CAGR será normalmente un número menor que el ROI.',
  },
  {
    question: '¿Puede el CAGR ser negativo?',
    answer: 'Sí. Si el valor final es inferior a tu inversión inicial, el CAGR será negativo, representando la tasa de pérdida anualizada.',
  },
];

const howTo = [
  {
    name: 'Introduce tu capital inicial',
    text: 'Ingresa la cantidad de dinero que invertiste originalmente.',
  },
  {
    name: 'Introduce el valor final o actual',
    text: 'Ingresa el valor de mercado actual de tu inversión o el precio al que la vendiste.',
  },
  {
    name: 'Establece la duración',
    text: 'Especifica cuánto tiempo mantuviste la inversión para calcular el retorno anualizado (CAGR).',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs. CAGR: ¿Qué métrica es mejor?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al evaluar una inversión, el <strong>ROI (Return on Investment)</strong> te indica el porcentaje total de ganancia o pérdida de principio a fin. Sin embargo, ignora el factor tiempo. El <strong>CAGR (Compound Annual Growth Rate)</strong> es superior para análisis a largo plazo porque "anualiza" tus retornos, permitiéndote comparar una inversión en bolsa a 5 años con una operación en cripto de 1 año en igualdad de condiciones.',
    },
    {
      type: 'title',
      text: 'Cómo usar la calculadora de rentabilidad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para obtener resultados precisos, introduce tu capital inicial y el valor actual (o precio de venta final) de tu activo. Selecciona la duración de la inversión en días, meses o años. Nuestra herramienta calcula automáticamente el beneficio absoluto, el ROI total y la media geométrica de tu crecimiento anual (CAGR).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ROI Total',
          description: 'Medida de retorno absoluto.',
          points: [
            'Ignora la duración',
            'Cálculo simple',
            'Ideal para trades rápidos',
            'Muestra ganancia total',
          ],
        },
        {
          title: 'CAGR Anualizado',
          description: 'Medida de rendimiento anual.',
          highlight: true,
          points: [
            'Incluye el factor tiempo',
            'Estandariza resultados',
            'Permite comparaciones',
            'Muestra crecimiento geométrico',
          ],
        },
      ],
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Investopedia: Definición de ROI',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
