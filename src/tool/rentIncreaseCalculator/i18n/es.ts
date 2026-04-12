import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
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
    text: 'Calculadora de Subida de Alquiler con IPC: Guía Completa y Límite del 3%',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La actualización de la renta es uno de los momentos más críticos en la relación entre arrendador y arrendatario. En España, el <strong>Índice de Precios de Consumo (IPC)</strong> ha sido tradicionalmente el termómetro utilizado para ajustar el precio del alquiler. Sin embargo, con la <strong>Ley 12/2023 por el Derecho a la Vivienda</strong>, se han introducido límites que todo inquilino y propietario debe conocer.',
  },
  {
    type: 'title',
    text: '¿Qué es el IPC y cómo afecta al alquiler?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El IPC es un indicador que mide la variación de los precios de una cesta de bienes y servicios representativa del consumo de los hogares. Cuando un contrato de alquiler incluye una cláusula de actualización, el precio suele revisarse anualmente tomando como referencia la variación porcentual de este índice.',
  },
  {
    type: 'paragraph',
    html: '<strong>Es importante destacar que la subida no es automática</strong>. Para que la renta suba, el contrato debe especificar explícitamente que se actualizará conforme al IPC. Si no incluye esta cláusula, el precio debe permanecer invariable durante toda la vigencia del mismo.',
  },
  {
    type: 'title',
    text: 'El Límite del 3% en 2024 y 2025',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Debido a los altos niveles de inflación, el Gobierno introdujo medidas extraordinarias. Para los años <strong>2024 y 2025</strong>, el límite máximo permitido se ha fijado en el <strong>3%</strong>. Este límite legal prevalece sobre lo que diga el contrato.',
  },
  {
    type: 'list',
    items: [
      '<strong>Grandes Tenedores:</strong> No pueden subir más del 3% bajo ninguna circunstancia.',
      '<strong>Pequeños Tenedores:</strong> El incremento debe ser pactado. Si no hay acuerdo, no podrá superar el 3%.',
      '<strong>Locales u Oficinas:</strong> No suelen estar sujetos a este límite, rigiéndose por lo pactado libremente.',
    ],
  },
  {
    type: 'title',
    text: 'Cómo Calcular la Subida Paso a Paso',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>Nueva Renta = Mensualidad × (1 + Porcentaje / 100)</strong><br/><strong>Incremento = Mensualidad × (Porcentaje / 100)</strong>',
  },
  {
    type: 'card',
    icon: 'mdi:calculator',
    title: 'Ejemplo Práctico',
    html: '<p>Alquiler de 950€ actualizado al 3%:</p><ul><li>Cálculo: 950 × 0,03 = 28,50€</li><li>Nueva Renta: 978,50€</li><li>Coste Anual: 342€</li></ul>',
  },
  {
    type: 'title',
    text: 'Requisitos para una Subida Válida',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Anualidad Cumplida:</strong> Solo cuando se cumpla cada año. No a mitad de año.',
      '<strong>Notificación Escrita:</strong> Con al menos 30 días de antelación (burofax o email certificado).',
      '<strong>Certificación INE:</strong> Adjuntar datos oficiales del IPC.',
    ],
  },
  {
    type: 'tip',
    title: 'Si el IPC es Negativo',
    html: '<p>Si el IPC es negativo (deflación), el inquilino tiene derecho a una <strong>bajada de la renta</strong>, siempre que el contrato no lo prohíba explícitamente.</p>',
  },
  {
    type: 'title',
    text: 'Vivienda Habitual vs. Local Comercial',
    level: 3,
  },
  {
    type: 'list',
    items: [
      '<strong>Vivienda Habitual:</strong> Sujeta al límite del 3%.',
      '<strong>Temporal/Habitaciones:</strong> Regulación más ambigua, por lo pactado.',
      '<strong>Locales/Naves:</strong> Libertad de pactos. Sin límites legales.',
    ],
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
