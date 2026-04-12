import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'calculadora-tasas-judiciales';
const title = 'Calculadora de Tasas Judiciales';
const description = 'Calcula el importe exacto de tasas judiciales para empresas según la Ley 10/2012. Simulador para Modelo 696 con exenciones y cálculos automáticos.';

const faqData = [
  {
    question: '¿Están exentos los particulares de pagar tasas judiciales?',
    answer: 'Sí, desde 2016 las personas físicas están totalmente exentas del pago de tasas judiciales en España en todos los órdenes jurisdiccionales.',
  },
  {
    question: '¿Cuál es el importe máximo de la tasa judicial?',
    answer: 'La cuota variable está limitada a un máximo de 10.000 euros. Sumando la cuota fija, el total máximo puede ser superior dependiendo del tipo de procedimiento.',
  },
  {
    question: '¿Qué es el Modelo 696?',
    answer: 'Es el formulario oficial de la Agencia Tributaria que se utiliza para la autoliquidación de la tasa por el ejercicio de la potestad jurisdiccional.',
  },
  {
    question: '¿Se paga tasa en el orden penal?',
    answer: 'No, en España no existen tasas judiciales para los procesos en el orden penal.',
  },
  {
    question: '¿Cómo se calcula la cuota variable?',
    answer: 'La cuota variable es el 0,5% de la cuantía del litigio hasta 1 millón de euros. A partir de ahí, es el 0,25%. El máximo es 10.000 euros.',
  },
];

const howToData = [
  {
    name: 'Selecciona el sujeto pasivo',
    text: 'Indica si eres persona física (exento) o jurídica (empresa). Las personas físicas no pagan tasas.',
  },
  {
    name: 'Elige la jurisdicción y proceso',
    text: 'Selecciona el orden jurisdiccional (Civil, Contencioso-Administrativo o Social) y el tipo de procedimiento.',
  },
  {
    name: 'Introduce la cuantía',
    text: 'Escribe el importe total que se reclama en la demanda. Para orden social, este campo no aplica.',
  },
  {
    name: 'Visualiza el desglose',
    text: 'Obtén el cálculo automático con cuota fija, variable y total para el Modelo 696.',
  },
];

const bibliographyData = [
  {
    name: 'Ley 10/2012 de Tasas Judiciales (BOE)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-14301',
  },
  {
    name: 'Sentencia TC 140/2016 sobre Tasas Judiciales',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2016-7905',
  },
  {
    name: 'Agencia Tributaria - Modelo 696',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GC07.shtml',
  },
  {
    name: 'Consejo General del Poder Judicial - Información de Tasas',
    url: 'https://www.cgpj.es/es/Inicio',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Calculadora de Tasas Judiciales en España: Guía Completa',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La <strong>Calculadora de Tasas Judiciales</strong> es una herramienta técnica diseñada para determinar con precisión el coste fiscal de la potestad jurisdiccional en España. Desde la reforma de la Ley 10/2012, el cálculo de estas tasas se ha vuelto una tarea crítica para la planificación procesal de empresas y profesionales del derecho.',
  },
  {
    type: 'card',
    title: 'Aspectos Clave de la Tasa Judicial',
    html: '<ul><li>Obligatoria solo para <strong>personas jurídicas</strong> (empresas).</li><li>Sujeta al <strong>Modelo 696</strong> de la Agencia Tributaria.</li><li>Compuesta por una <strong>cuota fija</strong> y una <strong>cuota variable</strong>.</li><li>Límite máximo de la cuota variable fijado en <strong>10.000 €</strong>.</li></ul>',
  },
  {
    type: 'card',
    html: '<p>Esta utilidad simula la autoliquidación del tributo, desglosando los importes según el orden (Civil, Contencioso o Social) y la cuantía reclamada, permitiendo prever el impacto financiero antes de iniciar el litigio.</p>',
  },
  {
    type: 'title',
    text: '¿Quién debe pagar Tasas Judiciales en 2026?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La normativa actual, tras la histórica <strong>Sentencia del Tribunal Constitucional 140/2016</strong>, establece un marco claro de exenciones que protegen el acceso a la justicia de los ciudadanos individuales.',
  },
  {
    type: 'list',
    items: [
      '<strong>Personas Físicas:</strong> Disfrutan de una exención absoluta en todos los órdenes.',
      '<strong>Personas Jurídicas:</strong> Son los sujetos pasivos principales del tributo.',
      '<strong>Sujetos Especiales:</strong> Entidades de utilidad pública y administraciones están exentas.',
    ],
  },
  {
    type: 'title',
    text: 'Estructura Técnica de la Tasa',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El cálculo matemático que realiza nuestra herramienta se divide en dos componentes obligatorios que se suman para obtener el total del Modelo 696.',
  },
  {
    type: 'title',
    text: '1. Cuota Fija por Procedimiento',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Se determina por el tipo de acción judicial interpuesta. Un juicio ordinario civil conlleva una tasa de 300 €, mientras que un recurso de casación ante el Tribunal Supremo asciende a 1.200 €.',
  },
  {
    type: 'title',
    text: '2. Cuota Variable por Cuantía',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Se aplica sobre la base imponible del pleito. Para las sociedades, los tipos de gravamen se aplican de forma escalonada.',
  },
  {
    type: 'table',
    headers: ['Tramo de Cuantía', 'Tipo Aplicable'],
    rows: [
      ['Hasta 1.000.000 €', '<strong>0,50%</strong>'],
      ['Exceso de 1.000.000 €', '<strong>0,25%</strong>'],
      ['Límite Máximo Variable', '<strong>10.000 €</strong>'],
    ],
  },
  {
    type: 'title',
    text: 'Tasas en Órdenes Jurisdiccionales Específicos',
    level: 2,
  },
  {
    type: 'title',
    text: 'Jurisdicción Civil',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Es el ámbito con mayor volumen de liquidaciones. Abarca procesos monitorios, verbales, ordinarios y ejecuciones. Nuestra calculadora ajusta automáticamente la tasa fija según la complejidad del proceso elegido.',
  },
  {
    type: 'title',
    text: 'Orden Contencioso-Administrativo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Aplica en litigios contra la Administración. Los importes varían si se trata de un procedimiento abreviado (200 €) o un ordinario (350 €), además de los tramos variables correspondientes.',
  },
  {
    type: 'tip',
    title: 'Referencia Legal',
    html: '<p>Consulte siempre la Ley 10/2012 para casos especiales de exención parcial o bonificaciones por uso de medios telemáticos.</p>',
  },
  {
    type: 'title',
    text: 'Consecuencias de la Omisión del Pago',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La presentación de una demanda por un sujeto obligado sin el correspondiente justificante de pago conlleva un requerimiento de subsanación. El incumplimiento de este plazo de 10 días resulta en el archivo definitivo de las actuaciones.',
  },
  {
    type: 'card',
    title: 'Ventajas de la Simulación Previa',
    html: '<ul><li>Precisión total en la cuantificación de gastos procesales.</li><li>Evita retrasos por errores en la autoliquidación del Modelo 696.</li><li>Optimiza la toma de decisiones financieras en la estrategia legal.</li></ul>',
  },
  {
    type: 'paragraph',
    html: 'Nuestra <strong>Calculadora de Tasas Judiciales</strong> garantiza que profesionales y empresas operen con datos actualizados a 2026, cumpliendo con el rigor técnico que exige la práctica jurídica moderna.',
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Fuentes y Referencias',
  ui: {
    labelTitle: 'Calculadora de Tasas Judiciales',
    labelDescription: 'Calcula el importe exacto del Modelo 696 según jurisdicción, procedimiento y cuantía. Para empresas y profesionales españoles.',
    labelLegalParameters: 'Parámetros Legales',
    labelEntityType: 'Sujeto Pasivo',
    labelJurisdiction: 'Jurisdicción',
    labelProcedure: 'Tipo de Proceso',
    labelClaimAmount: 'Cuantía del Litigio',
    labelEstimatedSettlement: 'Liquidación Estimada',
    labelExemptSubject: 'Sujeto Exento',
    labelFixedQuote: 'Cuota Fija (Procesal)',
    labelVariableQuote: 'Cuota Variable (0,5% / 0,25%)',
    labelTaxableBase: 'Base Imponible',
    labelCopySettlement: 'Copiar Liquidación',
    labelEntityJuridica: 'Persona Jurídica (S.L., S.A.)',
    labelEntityFisica: 'Persona Física (Exento)',
    labelCivilOrder: 'Orden Civil',
    labelAdministrativeOrder: 'Contencioso-Administrativo',
    labelSocialOrder: 'Orden Social',
    labelModel696: 'Modelo 696 AEAT',
    labelOrdinary: 'Juicio Ordinario',
    labelVerbal: 'Juicio Verbal / Monitorio',
    labelExecutive: 'Ejecutivo',
    labelAppeal: 'Apelación',
    labelCassation: 'Casación',
    labelAbbreviated: 'Abreviado',
    labelSupplication: 'Suplicación',
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
