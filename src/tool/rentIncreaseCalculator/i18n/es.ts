import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'calculadora-subida-alquiler-ipc';
const title = 'Calculadora de Subida de Alquiler IPC 2026 Límite del 3%';
const description = 'Calcula gratis la actualización de tu renta con el IPC o el límite legal del 3% de la Ley de Vivienda. Guía completa para inquilinos y propietarios.';

const faqData = [
  {
    question: '¿Cuál es la subida máxima de alquiler permitida en 2024 y 2025?',
    answer: 'Según la Ley 12/2023 por el Derecho a la Vivienda, para los años 2024 y 2025, el incremento máximo anual de la renta en contratos de vivienda habitual está limitado legalmente al 3%. Esta medida prevalece sobre el IPC si este último fuera superior.',
  },
  {
    question: '¿Es obligatorio subir el alquiler todos los años con el IPC?',
    answer: 'No es obligatorio por ley. Para que la renta suba, el contrato de arrendamiento debe incluir una cláusula explícita que mencione la actualización anual. Si no existe dicha cláusula, el precio pactado inicialmente debe mantenerse durante toda la vigencia del contrato.',
  },
  {
    question: '¿Con cuánta antelación debe notificar el casero la subida de la renta?',
    answer: 'El arrendador debe comunicar la subida por escrito al inquilino con al menos un mes de antelación (30 días) respecto a la fecha en que deba aplicarse la nueva renta. Si se avisa más tarde, el incremento solo empezará a contar desde el mes siguiente a la notificación.',
  },
  {
    question: '¿Qué ocurre si el IPC es superior al límite legal del 3%?',
    answer: 'Incluso si el IPC real publicado por el INE es del 5% o 6%, el propietario de una vivienda habitual no puede exigir legalmente una subida superior al 3% durante 2024 y 2025. Cualquier intento de cobrar de más es impugnable legalmente.',
  },
  {
    question: '¿A qué tipos de contratos no se aplica el límite del 3%?',
    answer: 'El límite no suele aplicarse a contratos de alquiler de locales comerciales, naves industriales, oficinas o plazas de garaje independientes. Estos se rigen prioritariamente por lo que hayan pactado libremente las partes en el contrato.',
  },
];

const howToData = [
  {
    name: 'Introduce tu alquiler actual',
    text: 'Escribe la mensualidad que pagas actualmente en tu recibo de alquiler.',
  },
  {
    name: 'Elige el modo de cálculo',
    text: 'Selecciona el Tope Legal del 3% (recomendado) o introduce un porcentaje manual si lo prefieres.',
  },
  {
    name: 'Consulta los resultados',
    text: 'Obtendrás la nueva renta estimada, el incremento mensual y el sobrecoste anual de un vistazo.',
  },
  {
    name: 'Copia el resumen',
    text: 'Genera un informe rápido para enviárselo al propietario o guardarlo en tus notas.',
  },
];

const bibliographyData = [
  {
    name: 'Ley 12/2023 por el Derecho a la Vivienda (BOE.es)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203',
  },
  {
    name: 'Calculadora de IPC del Instituto Nacional de Estadística (INE)',
    url: 'https://www.ine.es/varipc/index.do',
  },
  {
    name: 'Ley de Arrendamientos Urbanos - Texto Consolidado',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1994-26017',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Límite Legal del 3% en Alquileres de Vivienda Habitual',
  },
  {
    type: 'paragraph',
    html: 'La Ley 12/2023 por el Derecho a la Vivienda establece un <strong>límite máximo del 3% de incremento anual</strong> para los alquileres de viviendas habituales en 2024 y 2025. Esta medida de protección al inquilino prevalece sobre el Índice de Precios al Consumidor (IPC) cuando este es superior.',
  },
  {
    type: 'title',
    text: 'Diferencia entre IPC Manual y Tope Legal',
  },
  {
    type: 'paragraph',
    html: 'Puedes usar esta calculadora de dos formas: aplicando el <strong>tope legal del 3%</strong> (opción recomendada para viviendas habituales) o introduciendo un <strong>porcentaje manual</strong> si necesitas calcular aumentos de otros tipos de inmuebles o periodos anteriores a 2024.',
  },
  {
    type: 'title',
    text: 'Requisitos para una Subida Válida',
  },
  {
    type: 'paragraph',
    html: '<strong>Para que la subida de alquiler sea legal:</strong> El contrato debe incluir una cláusula de actualización anual. El arrendador debe avisar por escrito al menos 30 días antes. El incremento no puede superar el 3% en viviendas habituales (2024-2025). El inquilino puede reclamar si se incumple cualquiera de estos requisitos.',
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Fuentes y Referencias',
  ui: {
    labelTitle: 'Calculadora de Subida de Alquiler',
    labelDescription: 'Ajusta tu renta conforme al IPC o aplica el límite legal del 3% de forma segura.',
    labelCurrentRent: 'Alquiler Actual',
    labelCurrentRentPlaceholder: 'Ej. 800',
    labelIncrementType: 'Modo Actualización',
    labelLegalLimit: 'Tope Ley Vivienda (3%)',
    labelManualIncrement: 'Incremento Manual (%)',
    labelManualPercentagePlaceholder: 'Ej. 2.5',
    labelNewRentEstimate: 'Nueva Renta Estimada',
    labelMonthlyIncrease: 'Incremento Mensual',
    labelYearlyExtra: 'Sobrecoste Anual',
    labelLegalBadge: 'Limitado al 3% según Ley 12/2023',
    labelCopyButton: 'Copiar para el propietario',
    labelCopySuccess: '¡Copiado!',
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
