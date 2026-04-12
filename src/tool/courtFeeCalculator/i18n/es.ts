import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
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
    text: 'Cálculo de Tasas Judiciales Españolas - Modelo 696',
  },
  {
    type: 'paragraph',
    html: 'Las <strong>tasas judiciales</strong> en España se rigen por la <strong>Ley 10/2012</strong> y afectan a empresas y profesionales. El cálculo se realiza automáticamente considerando la cuota fija según el tipo de procedimiento y la cuota variable del 0,5% de la cuantía del litigio.',
  },
  {
    type: 'title',
    text: 'Exenciones y Casos Especiales',
  },
  {
    type: 'paragraph',
    html: 'Las <strong>personas físicas están totalmente exentas</strong> de tasas judiciales desde 2016. En el orden penal tampoco existen tasas. El orden social tiene especificidades en su cálculo de cuotas.',
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
