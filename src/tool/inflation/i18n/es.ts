import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflacion';
const title = 'Calculadora de Inflación en España: Valor del Dinero Histórico';
const description =
  'Descubre cuánto valdrían tus pesetas hoy o cuánto ha subido el coste de vida desde 1980. Datos IPC históricos de España actualizados a 2026.';

const faqData = [
  {
    question: '¿Qué es el IPC y cómo se calcula?',
    answer:
      'El Índice de Precios de Consumo (IPC) mide la evolución de los precios de una cesta de bienes y servicios representativa del consumo español. Se calcula comparando el coste de esta cesta en diferentes períodos de tiempo para determinar el porcentaje de variación.',
  },
  {
    question: '¿Cuánto ha perdido valor el dinero desde 1980?',
    answer:
      '1.000 pesetas de 1980 equivalen aproximadamente a 60 euros hoy en poder adquisitivo. Debido a la inflación acumulada, el dinero ha perdido más del 90% de su valor real en las últimas cuatro décadas.',
  },
  {
    question: '¿Por qué mis ahorros pierden valor si no los muevo?',
    answer:
      'Si la inflación es positiva y tu capital no genera intereses, su valor real decrece. Para mantener la capacidad de compra, tus ahorros deben generar una rentabilidad neta al menos igual a la tasa de inflación anual.',
  },
  {
    question: '¿Cuál fue el período de mayor inflación en España?',
    answer:
      'Los años 80 destacaron por tener inflaciones de doble dígito, llegando al 15.6% en 1980. Fue una época de gran inestabilidad de precios antes de la convergencia europea y la llegada del euro.',
  },
  {
    question: '¿Qué es la inflación subyacente?',
    answer:
      'Es un indicador que excluye del cálculo los alimentos no elaborados y los productos energéticos. Se utiliza para conocer la tendencia de los precios a largo plazo sin el ruido de los elementos más volátiles.',
  },
  {
    question: '¿Cómo afecta el Banco Central Europeo a la inflación?',
    answer:
      'El BCE tiene como mandato principal mantener la estabilidad de precios, fijando un objetivo de inflación del 2% a medio plazo para toda la eurozona a través de la política monetaria y los tipos de interés.',
  },
];

const howToData = [
  {
    name: 'Seleccionar el año base',
    text: 'Ajusta el selector de fecha para indicar desde cuándo quieres analizar la evolución de los precios.',
  },
  {
    name: 'Introducir el importe original',
    text: 'Escribe la cantidad de dinero en pesetas o euros que tenías en esa fecha específica.',
  },
  {
    name: 'Definir el año de comparación',
    text: 'Elige el año final para ver cómo ha cambiado el valor del dinero hasta ese momento.',
  },
  {
    name: 'Analizar equivalencias y porcentajes',
    text: 'Consulta el resultado final detallado, incluyendo la inflación acumulada y la equivalencia de poder adquisitivo real.',
  },
  {
    name: 'Revisar datos históricos',
    text: 'Compara el resultado con los hitos históricos proporcionados en la sección de contexto para entender mejor el entorno económico.',
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

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes sobre Inflación',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias Oficiales',
  bibliography: [
    {
      name: 'INE: Índice de Precios de Consumo',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'Banco de España: Análisis de la Inflación',
      url: 'https://www.bde.es/',
    },
    {
      name: 'BCE: Política Monetaria y Precios',
      url: 'https://www.ecb.europa.eu/',
    },
    {
      name: 'OCU: Guía para entender el IPC',
      url: 'https://www.ocu.org/dinero/ahorros/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Inflación: El Impuesto Silencioso sobre tu Patrimonio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>inflación</strong> es el incremento sostenido y generalizado de los precios. Aunque parezca un fenómeno técnico, su impacto en la economía real es directo: reduce la cantidad de bienes que puedes comprar con el mismo dinero, erosionando el ahorro de toda una vida si no se toman medidas protectoras.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Récord Histórico 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Pico de Precios 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Objetivo de Estabilidad',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Términos Financieros Esenciales',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IPC',
          definition: 'Indicador que resume la variación de precios de una cesta básica de consumo.',
        },
        {
          term: 'Poder Adquisitivo',
          definition: 'Capacidad de compra real de una moneda en un momento determinado.',
        },
        {
          term: 'Deflación',
          definition: 'Descenso generalizado de los precios que puede paralizar la inversión.',
        },
        {
          term: 'Estanflación',
          definition: 'Escenario de alta inflación combinado con estancamiento económico.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hitos Económicos y Comparativa',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crisis de los años 80',
          description: 'Periodo marcado por inflaciones de doble dígito y gran inestabilidad laboral.',
          points: [
            'Tipos de interés extremadamente altos',
            'Pérdida rápida de valor de la peseta',
            'Sueldos devorados por los precios',
          ],
        },
        {
          title: 'Inflación de la Pandemia: 2021 a 2023',
          description: 'Subida brusca por costes energéticos y problemas en la cadena de suministro.',
          highlight: true,
          points: [
            'Impacto directo en cesta de la compra',
            'Subida de tipos del BCE para frenar el consumo',
            'Recuperación lenta del poder de compra',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Producto o Indicador', 'Valor en 1980 (Estimado)', 'Valor en 2026 (Proyectado)', 'Variación'],
      rows: [
        ['Barra de Pan', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Café en Establecimiento', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Entrada de Cine', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Salario Mínimo Mensual', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'El Peligro del Efectivo',
      html: 'Guardar dinero bajo el colchón o en cuentas corriente sin rentabilidad es una pérdida de capital garantizada. Una inflación media del 3% reduce a la mitad el valor de tus ahorros en menos de 25 años.',
    },
    {
      type: 'title',
      text: 'Consejos para Proteger tus Ahorros',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Estrategias de Inversión',
      items: [
        {
          pro: 'Activos Reales: Los inmuebles suelen revalorizarse con la inflación.',
          con: 'Baja liquidez y altos costes de entrada.',
        },
        {
          pro: 'Bolsa y Fondos: Rentabilidades que suelen superar al IPC a largo plazo.',
          con: 'Volatilidad y riesgo de mercado a corto plazo.',
        },
      ],
    },
    {
      type: 'list',
      title: 'Hábitos Financieros Saludables',
      items: [
        'Revisar periódicamente tus gastos para detectar subidas ocultas.',
        'Diversificar ahorros en diferentes tipos de activos.',
        'Considerar bonos del estado vinculados a la inflación.',
        'Utilizar herramientas de cálculo para contextualizar ofertas y salarios.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Advertencia sobre el Interés Compuesto Negativo',
      html: 'La inflación actúa como un interés compuesto inverso. Cada año, el porcentaje de pérdida se aplica sobre un valor ya disminuido, acelerando la pérdida de riqueza si no se interviene.',
    },
    {
      type: 'summary',
      title: 'Conclusiones Clave',
      items: [
        'El IPC es solo un promedio; tu inflación personal depende de tus hábitos.',
        'Invertir no es opcional si se quiere preservar el valor real del trabajo.',
        'Las calculadoras de inflación son vitales para entender contratos de largo plazo.',
      ],
    },
    {
      type: 'message',
      title: 'Toma el Control de tu Economía',
      html: 'Nuestra calculadora utiliza datos oficiales del INE para ofrecerte la visión más precisa del pasado y presente económico de España.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Inflación España',
    labelInitialAmount: 'Dinero Inicial',
    labelInitialYear: 'En el año',
    labelFinalAmount: 'Equivalencia Hoy',
    labelFinalYear: 'Año 2026',
    labelInflationRate: 'Inflación Acumulada',
    labelCalculatedOn: 'Cálculo realizado utilizando datos oficiales del INE hasta 2025 y proyecciones estimadas para el cierre de 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
    labelYearSelect: 'En el año',
    labelIn: 'En',
    labelEquivalentToday: 'equivale hoy a',
    labelInflationAccumulated: 'Inflación Acumulada',
    labelYear: 'Año',
  },
};
