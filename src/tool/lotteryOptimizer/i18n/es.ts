import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'optimizador-loterias';
const title = 'Optimizador de Loterías y Calculadora de Probabilidades';
const description = 'Analiza tus probabilidades en la Lotería de Navidad, Euromillones y Bonoloto. Calcula el número óptimo de décimos y el valor esperado de tu apuesta.';

const faqData = [
  {
    question: '¿Qué es la esperanza matemática en la lotería?',
    answer: 'Es el valor medio que esperas ganar por cada euro apostado. En casi todas las loterías, la esperanza matemática es negativa (normalmente pierdes 0,50€ por cada 1€ jugado), lo que significa que a largo plazo, la casa siempre gana.',
  },
  {
    question: '¿Es mejor jugar muchos números o muchos décimos del mismo?',
    answer: 'Si buscas ganar "algo", diversificar números aumenta tu probabilidad de obtener premios menores. Si buscas el premio gordo, jugar un solo número te da la misma probabilidad, pero mayor premio si toca.',
  },
  {
    question: '¿Realmente renta jugar a la Lotería de Navidad?',
    answer: 'Desde un punto de vista puramente matemático, no. Se devuelve solo el 70% de lo recaudado. Sin embargo, tiene una probabilidad de premio mayor (1 entre 100.000) mucho más alta que el Euromillones (1 entre 140 millones).',
  },
  {
    question: '¿Puedo mejorar mis posibilidades con estadísticas?',
    answer: 'No. Los sorteos de lotería son procesos aleatorios independientes. Que un número haya salido ayer no influye en absoluto en que salga hoy. Todos los números tienen exactamente la misma probabilidad en cada sorteo.',
  },
  {
    question: '¿Qué significa la "dificultad" en la tabla comparativa?',
    answer: 'Es una medida relativa de lo difícil que es ganar el primer premio. Accesible (menos de 200k): probabilidades más realistas. Difícil (menos de 20M): probabilidades remotas. Extrema (más de 20M): prácticamente imposible.',
  },
];

const howToData = [
  {
    name: 'Seleccionar el tipo de sorteo',
    text: 'Elige entre la Lotería de Navidad, Primitiva, Euromillones o Bonoloto para analizar sus reglas específicas.',
  },
  {
    name: 'Definir tu inversión',
    text: 'Indica cuántos décimos o apuestas planeas comprar para este sorteo en particular.',
  },
  {
    name: 'Analizar probabilidades críticas',
    text: 'Observa las posibilidades reales de ganar el primer premio frente a premios menores o el reintegro.',
  },
  {
    name: 'Evaluar el riesgo/beneficio',
    text: 'Revisa la esperanza matemática para entender cuánto dinero estás "regalando" estadísticamente por cada euro invertido.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'La Matemáticas de la Esperanza',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Jugar a la lotería es, para muchos, la compra de una ilusión por unos pocos euros. Sin embargo, detrás de los bombos y las bolas de cristal reside una de las ramas más fascinantes de las matemáticas: la estadística de probabilidades extremas.',
  },
  {
    type: 'card',
    icon: 'mdi:finance',
    title: 'Concepto Clave: Valor Esperado',
    html: '<p>El Valor Esperado (EV) es lo que ganarías en promedio si jugaras infinitas veces. En casi todas las loterías, este valor es negativo.</p>',
  },
  {
    type: 'title',
    text: 'Probabilidad vs Realidad',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Para entender la magnitud de las probabilidades en juegos como el Euromillón (1 entre 139 millones), imagina que llenas un estadio de fútbol con granos de arena. Solo uno de esos granos es el premio. Tus posibilidades de encontrarlo son similares a las de ser alcanzado por un rayo mientras te muerde un tiburón en una piscina.',
  },
  {
    type: 'paragraph',
    html: 'Sin embargo, no todas las loterías son iguales. La Lotería de Navidad y la del Niño en España tienen una estructura de premios que devuelve cerca del 70% de lo recaudado, comparado con el 50% de los sorteos diarios. Esto las convierte en sorteos "más sociales" y estadísticamente "menos dañinos" para el bolsillo a largo plazo.',
  },
  {
    type: 'title',
    text: 'Diferencias Críticas',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Sorteos de Bombo Único:</strong> Como la Navidad. Todos los números están en un bombo. Sabes exactamente tu probabilidad: 1/100,000.',
      '<strong>Sorteos Combinatorios:</strong> Como la Primitiva o Bonoloto. Debes acertar N números de un conjunto. La probabilidad cae exponencialmente.',
    ],
  },
  {
    type: 'title',
    text: 'La Estrategia del Jugador Inteligente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Aunque la suerte no se puede forzar, la gestión del presupuesto sí se puede optimizar.',
  },
  {
    type: 'card',
    icon: 'mdi:account-group-outline',
    title: 'Peñas y Grupos',
    html: '<p>Jugar en grupo aumenta las probabilidades al comprar más números, aunque el premio se diluya. Matemáticamente, es la forma más eficiente de jugar.</p>',
  },
  {
    type: 'card',
    icon: 'mdi:calendar-check',
    title: 'Recurrencia vs Impulso',
    html: '<p>Es preferible jugar una apuesta pequeña semanal que gastar 200€ en un bote gigante una vez al año. Mantienes viva la probabilidad sin comprometer tus finanzas.</p>',
  },
  {
    type: 'card',
    icon: 'mdi:shield-check-outline',
    title: 'Límite de Pérdida',
    html: '<p>Asume que el dinero de la lotería es un gasto de ocio, no una inversión. Nunca juegues lo que necesitas para cubrir necesidades básicas.</p>',
  },
  {
    type: 'title',
    text: '¿Qué es la "Rentabilidad Social"?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'En España, las loterías estatales (SELAE) no son solo un juego. Una parte significativa del margen de beneficio va destinado a proyectos sociales y a las arcas públicas. Por eso, en nuestro optimizador incluimos el índice de <strong>Rentabilidad Social</strong>.',
  },
  {
    type: 'paragraph',
    html: 'Este índice mide qué porcentaje del dinero vendido vuelve a la sociedad, ya sea en forma de premios o en inversión pública. Loterías con un alto índice de premios (como la Navidad) tienen una rentabilidad social más alta porque el capital circula más entre los ciudadanos en lugar de quedar retenido en el acumulado del jackpot.',
  },
  {
    type: 'card',
    icon: 'mdi:format-quote-open',
    title: 'Reflexión',
    html: '<p><em>"La lotería es un impuesto para los que no saben matemáticas, pero un juego para los que entienden el riesgo."</em></p>',
  },
  {
    type: 'title',
    text: 'El Factor Humano',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ninguna calculadora puede predecir el impacto emocional de un premio. Nuestra recomendación de "Décimos Óptimos" se basa en la teoría del <strong>Criterio de Kelly</strong> adaptada: buscar la máxima probabilidad de retorno con el mínimo riesgo de ruina. Para loterías de tipo décimo, sugerimos diversificar terminaciones para maximizar la probabilidad de reintegro y "salvar" parte de la inversión inicial.',
  },
  {
    type: 'comparative',
    columns: 2,
    items: [
      {
        title: 'Mito común',
        description: '"Este número ha salido menos, por tanto le toca salir ahora". Esto es la Falacia del Apostador. Cada sorteo es un evento independiente.',
      },
      {
        title: 'Verdad científica',
        description: 'Todos los números tienen exactamente la misma probabilidad en cada sorteo, independientemente de su historial previo.',
      },
    ],
  },
];

const gameTranslations = {
  gordo: {
    name: 'Lotería de Navidad',
    description: 'El mayor reparto de premios del mundo. Probabilidad alta de ganar algo.',
  },
  nino: {
    name: 'Lotería del Niño',
    description: 'Triplica las posibilidades de reintegro respecto a Navidad.',
  },
  euromillones: {
    name: 'Euromillones',
    description: 'Premios astronómicos, probabilidades casi imposibles.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'La lotería más antigua de España. Difícil pero más barata.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'La más económica. Ideal para jugar a diario con poco presupuesto.',
  },
};

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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    gameTranslations,
    labelTitle: 'Optimizador de Loterías',
    labelDescription: 'Compara sorteos, calcula tu esperanza matemática y descubre el número óptimo de décimos para jugar con cabeza.',
    labelSelectGame: 'Selecciona una lotería',
    labelConfigurePlay: 'Configura tu Jugada',
    labelAdjustQuantity: 'Ajusta la cantidad de participaciones para ver tu probabilidad real.',
    labelTotalInvestment: 'Inversión Total',
    labelTickets: 'Cantidad de Décimos / Apuestas',
    labelUnits: 'unidades',
    labelExposureAnalysis: 'Análisis de Exposición',
    labelSelectLottery: 'Selecciona una lotería para ver el análisis de riesgo.',
    labelOptimalCutoff: 'Punto de Corte Sugerido',
    labelProbabilitySuccess: 'Probabilidad de Éxito',
    labelExpectedValue: 'Valor Esperado (EV)',
    labelReturnTheoretical: 'Retorno teórico por cada jugada realizada.',
    labelSocialReturnIndex: 'Índice de Rentabilidad Social',
    labelLow: 'Baja',
    labelMedium: 'Media',
    labelHigh: 'Alta',
    labelComparison: 'Comparativa de Premios',
    labelLottery: 'Lotería',
    labelCost: 'Coste',
    labelTypicalPrize: 'Premio Típico',
    labelDifficulty: 'Dificultad',
    labelAccessible: 'Accesible',
    labelDifficult: 'Difícil',
    labelExtreme: 'Extrema',
    labelNote: 'Nota: Los premios de Navidad y El Niño son por décimo (20€). Los de Euromillones, Primitiva y Bonoloto son botes típicos para el primer premio.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
