import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
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

const bibliographyData = [
  {
    name: 'Loterías y Apuestas del Estado (SELAE) - Portal de Transparencia',
    url: 'https://www.selae.es/es/web-corporativa/responsabilidad-social/portal-de-transparencia/portal-de-transparencia',
  },
  {
    name: 'Matemática de la Lotería de Navidad - Real Sociedad Matemática Española',
    url: 'https://rsme.es/solucion-al-desafio-matematico-de-la-loteria-de-navidad-en-el-pais/',
  },
  {
    name: 'El Criterio de Kelly y la Gestión de Riesgos - Investopedia',
    url: 'https://www.investopedia.com/terms/k/kellycriterion.asp',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Probabilidades Reales de Ganar en las Loterías Españolas',
  },
  {
    type: 'paragraph',
    html: 'Las loterías españolas tienen <strong>esperanzas matemáticas negativas</strong>, lo que significa que siempre pierdes dinero a largo plazo. La Lotería de Navidad devuelve el 70% de lo recaudado, mientras que Euromillones devuelve solo el 50%.',
  },
  {
    type: 'title',
    text: 'Comparativa de Dificultad y Rentabilidad',
  },
  {
    type: 'paragraph',
    html: '<strong>Lotería de Navidad y Niño</strong>: Probabilidad de premio 1 entre 100.000 (mucho más alta que otras). <strong>Euromillones</strong>: 1 entre 139 millones. <strong>Primitiva y Bonoloto</strong>: 1 entre 13-139 millones según el juego.',
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
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Fuentes y Referencias',
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
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
