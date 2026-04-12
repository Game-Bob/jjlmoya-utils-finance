import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'calculadora-porcentajes';
const title = 'Calculadora de Porcentajes: 4 en 1 para Descuentos, IVA y Rebajas';
const description =
  'Calcula fácilmente porcentajes online gratis. 4 herramientas en 1 para sacar el X% de Y, diferencia porcentual, sumar o restar IVA, rebajas y propinas automáticas.';

const faqData = [
  {
    question: '¿Cómo funciona la calculadora?',
    answer:
      'Simplemente escribe los valores en los cuadros del caso de uso correspondiente a tu problema y nuestra calculadora procesa la fórmula sin necesidad de apretar ningún botón de calcular.',
  },
  {
    question: '¿Es válida para calcular el IVA o impuestos?',
    answer:
      'Sí, el bloque 4 (Sumar o restar porcentaje) está diseñado precisamente para casos como aplicar un IVA del 21% a un precio base o calcular un IRPF negativo.',
  },
  {
    question: '¿Maneja números decimales y negativos?',
    answer:
      'Por supuesto. Puedes introducir números decimales (utilizando punto) y también funcionará con valores negativos si necesitas analizar balances contables en pérdidas.',
  },
  {
    question: '¿Puedo copiar los resultados?',
    answer:
      'Sí, cada bloque cuenta con un botón en el recuadro del resultado que copia instantáneamente la cifra al portapapeles de tu dispositivo para poder pegarla en otra app o documento.',
  },
];

const howToData = [
  {
    name: 'Identifica tu problema matemático',
    text: 'Lee los títulos de los 4 bloques y elige el que coincida con lo que quieres saber (Ej. ¿Cuánto es el 20% de 50? → Bloque 1).',
  },
  {
    name: 'Introduce las cifras',
    text: 'Rellena los campos X e Y. No te preocupes por el orden, la frase de cada bloque te guía visualmente.',
  },
  {
    name: 'Copia el resultado instantáneo',
    text: 'La cifra aparecerá en tiempo real abajo a medida que escribes. Pulsa el icono de copiar si deseas llevártelo a otra parte.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias',
  bibliography: [
    {
      name: 'Cálculo de Porcentajes: Wikipedia',
      url: 'https://es.wikipedia.org/wiki/Porcentaje',
    },
    {
      name: 'Conceptos Matemáticos Básicos: Khan Academy',
      url: 'https://es.khanacademy.org/math/pre-algebra',
    },
    {
      name: 'Guía de la AEAT para tipos impositivos en España',
      url: 'https://sede.agenciatributaria.gob.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Las 4 Fórmulas Clave de Porcentajes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los porcentajes aparecen en casi todo: compras con descuento, impuestos, cambios de precio, y análisis de datos. Aprende las 4 fórmulas esenciales que necesitas.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Caso 1 y 2: Relación Base',
          description: 'Encontrar una parte de un todo, o saber qué proporción es una cantidad.',
          points: [
            'X% de Y: aplicar un porcentaje a una cantidad',
            'X es qué % de Y: encontrar el porcentaje relativo',
            'Usados en: descuentos, propinas, análisis',
            'Fórmulas simples de tres',
          ],
        },
        {
          title: 'Caso 3 y 4: Cambios y Variaciones',
          description: 'Medir cambios entre valores o ajustar un valor por un porcentaje.',
          highlight: true,
          points: [
            'Diferencia porcentual: comparar valor inicial y final',
            'Sumar/restar %: aplicar IVA, descuentos, impuestos',
            'Usados en: informes financieros, presupuestos',
            'Críticos para contabilidad y estadística',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Domina estas fórmulas y resolverás el 95% de problemas porcentuales en tu vida cotidiana: desde saber si una rebaja es buena, hasta calcular tu salario neto con impuestos.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Porcentajes',
    labelCase1Title: 'Caso 1',
    labelCase1Question: 'Cuánto es el X% de Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Fórmula: (X / 100) × Y',
    labelCase2Title: 'Caso 2',
    labelCase2Question: 'Qué porcentaje es X de Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Fórmula: (X / Y) × 100',
    labelCase3Title: 'Caso 3',
    labelCase3Question: 'Diferencia porcentual entre dos valores',
    labelCase3Placeholder1: 'Valor 1',
    labelCase3Placeholder2: 'Valor 2',
    labelCase3Formula: 'Fórmula: ((Valor 2 - Valor 1) / |Valor 1|) × 100',
    labelCase4Title: 'Caso 4',
    labelCase4Question: 'Sumar o restar porcentaje a un valor',
    labelCase4Placeholder1: 'Valor',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Fórmula: Valor ± (Valor × (% / 100))',
    labelCase4AddLabel: 'Suma (Valor + %)',
    labelCase4SubtractLabel: 'Resta (Valor - %)',
    labelResult: 'Resultado',
    labelDifference: 'Diferencia',
    labelCopyTooltip: 'Copiar resultado',
    labelFormula: 'Fórmula',
    percentSymbol: '%',
  },
};
