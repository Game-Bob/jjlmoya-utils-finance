import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'interes-legal-dinero-2026';
const title = 'Interés Legal del Dinero';
const description = 'Calcula el interés legal aplicable en España para 2026. Simulador con tasa al 3,25% según Ley de Presupuestos. Incluye cálculos de demora e interés de mora.';

const faqData = [
  {
    question: '¿Cuál es el interés legal del dinero en 2026?',
    answer: 'El interés legal del dinero se mantiene en el 3,25% para el ejercicio 2026, fijado por la Ley de Presupuestos Generales del Estado.',
  },
  {
    question: '¿Cómo se calcula el interés de demora?',
    answer: 'El interés de demora se calcula multiplicando el capital pendiente por el 3,25% y por el número de días de retraso, dividiendo entre 36.500. Se utiliza base de 365 días.',
  },
  {
    question: '¿Cuál es la diferencia entre interés legal e interés de demora?',
    answer: 'El interés legal es el tipo base de referencia. El interés de demora tributario es el aplicado por la Administración (4,06%), que incluye un recargo. El de operaciones comerciales (10,15%) es el más alto.',
  },
  {
    question: '¿Se aplica automáticamente sin necesidad de cláusula contractual?',
    answer: 'Sí, el interés legal se aplica por defecto cuando hay retraso en el pago y no se ha pactado otro interés. Si existe contrato, prevalecerá lo pactado dentro de los límites de la Ley de Usura.',
  },
  {
    question: '¿Qué es el interés procesal?',
    answer: 'El interés procesal es el 5,25% (interés legal más 2 puntos) que se aplica desde que se dicta una sentencia que condena al pago de dinero, para desincentivar dilaciones.',
  },
];

const howToData = [
  {
    name: 'Introduce el capital pendiente',
    text: 'Escribe la cantidad de dinero sobre la que necesitas calcular los intereses. Puede ser una deuda, factura sin pagar o cantidad adeudada.',
  },
  {
    name: 'Especifica los días de retraso',
    text: 'Indica cuántos días ha durado o durará el impago. El cálculo utiliza base de 365 días según la normativa española.',
  },
  {
    name: 'Visualiza el resultado',
    text: 'Obtén automáticamente el importe de intereses generados y el total a pagar aplicando el 3,25% vigente en 2026.',
  },
  {
    name: 'Consulta otras tasas',
    text: 'Observa las otras tasas de referencia: demora tributaria (4,06%) y operaciones comerciales (10,15%) para contexto adicional.',
  },
];

const bibliographyData = [
  {
    name: 'Ley de Presupuestos Generales del Estado 2026',
    url: 'https://www.boe.es/buscar/act.php',
  },
  {
    name: 'Código Civil Español - Artículos 1108 y siguientes',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763',
  },
  {
    name: 'Ley 3/1991 de Competencia Desleal',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1991-8915',
  },
  {
    name: 'Ley 3/2004 de Lucha contra la Morosidad',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-20236',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Interés Legal del Dinero 2026 España - Calculadora',
  },
  {
    type: 'paragraph',
    html: 'El <strong>interés legal del dinero en 2026</strong> es del <strong>3,25%</strong> en España. Se aplica automáticamente cuando hay retraso en el pago y no se ha pactado otro interés. Utiliza nuestra calculadora para determinar el importe exacto de intereses según días de demora.',
  },
  {
    type: 'title',
    text: 'Tasas de Referencia Complementarias',
  },
  {
    type: 'paragraph',
    html: 'Además del interés legal básico (3,25%), existen otras tasas: <strong>demora tributaria 4,06%</strong> (Hacienda), <strong>interés procesal 5,25%</strong> (sentencias) e <strong>interés de operaciones comerciales 10,15%</strong> (B2B).',
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Fuentes Legales',
  ui: {
    labelTitle: 'Tipo de Interés Legal del Dinero',
    labelDescription: 'Calcula el importe exacto de intereses legales según la Ley de Presupuestos 2026. Simulador con tasa al 3,25% para España.',
    labelBadge: 'Boletín Oficial del Estado 2026',
    labelSubtitle: 'El tipo de interés legal del dinero se mantiene en el 3,25% para el ejercicio 2026, fijado por la Ley de Presupuestos Generales del Estado.',
    labelLegalInterest: 'Interés Legal',
    labelDelayInterest: 'Interés de Demora',
    labelCommercialOperations: 'Operaciones Comerciales',
    labelActive: 'Vigente en 2026',
    labelTributary: 'Tributario (Hacienda)',
    labelFirstHalf: 'Primer Semestre 2026',
    labelQuickCalculator: 'Calculadora Rápida de Interés (3,25%)',
    labelCapital: 'Capital Pendiente',
    labelDays: 'Días de Demora',
    labelInterestGenerated: 'Intereses Generados',
    labelTotalToPay: 'Total a Pagar',
    labelFormula: 'Esta calculadora aplica la fórmula estándar de interés simple:',
    labelBase: 'Se utiliza una base de 365 días para el cálculo oficial según la normativa española vigente en 2026.',
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
