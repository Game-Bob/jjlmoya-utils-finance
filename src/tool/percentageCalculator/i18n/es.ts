import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'calculadora-porcentajes';
const title = 'Calculadora de Porcentajes 4 en 1: Descuentos, Subidas y Rebajas';
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
      'Sí, el bloque 4 (\'Sumar o restar porcentaje\') está diseñado precisamente para casos como aplicar un IVA del 21% a un precio base o calcular un IRPF negativo.',
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
    text: 'Lee los títulos de los 4 bloques y elige el que coincida con lo que quieres saber (Ej. ¿Cuánto es el 20% de 50? -> Bloque 1).',
  },
  {
    name: 'Introduce las cifras',
    text: 'Rellena los campos \'X\' e \'Y\'. No te preocupes por el orden, la frase de cada bloque te guía visualmente.',
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
      name: 'Cálculo de Porcentajes - Wikipedia',
      url: 'https://es.wikipedia.org/wiki/Porcentaje',
    },
    {
      name: 'Conceptos Matemáticos Básicos - Khan Academy',
      url: 'https://es.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
    {
      name: 'Guía de la AEAT para tipos impositivos en España (IVA)',
      url: 'https://sede.agenciatributaria.gob.es/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Porcentajes 4 en 1: Domina los Cálculos Rápidos',
      level: 2,
    },
    {
      type: 'title',
      text: '¿Para qué sirve una calculadora de porcentajes múltiple?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Calcular porcentajes es una de las operaciones matemáticas más comunes en nuestro día a día. Desde calcular el descuento en unas rebajas, conocer la propina adecuada en un restaurante, hasta determinar el margen de beneficio en un negocio o el interés de un préstamo. A pesar de ser operaciones cotidianas, no siempre es fácil realizarlas mentalmente o recordar la fórmula exacta.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora de porcentajes 4 en 1 agrupa los escenarios más demandados. Ya no necesitas buscar en Google "cómo sacar el 20 por ciento" o "fórmula para cálculo de porcentaje". Tienes las cuatro operaciones esenciales en un solo lugar, de forma interactiva y con resultados instantáneos.',
    },
    {
      type: 'title',
      text: 'Revisando los 4 casos de uso más habituales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para facilitarte la vida, hemos separado la herramienta en cuatro bloques visuales claros que resuelven los problemas reales a los que nos enfrentamos a diario:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. ¿Cuánto es el X% de Y?',
      html: '<p><strong>El caso clásico.</strong> Útil para calcular descuentos o propinas. Si quieres saber cuánto es el 15% de 120€, esta es tu herramienta. La fórmula subyacente simplemente divide el porcentaje entre 100 y lo multiplica por el valor total.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. ¿Qué porcentaje es X de Y?',
      html: '<p><strong>Ideal para proporciones.</strong> Si has sacado 45 puntos en un examen de 60, ¿qué nota tienes sobre 100? Esta función divide la parte entre el total y lo multiplica por cien, dándote el peso relativo exacto.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Aumento o Disminución Porcentual',
      html: '<p><strong>Perfecto para finanzas y analítica.</strong> ¿Cuánto ha subido el alquiler desde el año pasado? Si antes pagabas 800€ y ahora 840€, esta función te dirá que has sufrido un aumento del 5%. Mide el crecimiento o decrecimiento entre dos cifras.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Sumar o Restar porcentaje a un valor',
      html: '<p><strong>Súper útil para el IVA.</strong> Si tienes un precio base (ej. 100€) y necesitas añadirle el 21% de IVA, esta calculadora te dará directamente los 121€ finales sin tener que hacer operaciones intermedias. De igual forma, sirve para aplicar un descuento directo (ej. restar un 20%).</p>',
    },
    {
      type: 'title',
      text: 'Mitos comunes sobre el cálculo de porcentajes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A menudo nos bloqueamos al ver porcentajes grandes o decimales, pero hay algunos "trucos" matemáticos que pueden hacerte la vida más fácil. El más famoso es la <strong>reversibilidad de los porcentajes</strong>.',
    },
    {
      type: 'tip',
      title: 'El truco de la reversibilidad',
      html: '<p>¿Sabías que el X% de Y es exactamente igual al Y% de X? Por ejemplo, si te piden calcular el 18% de 50 mentalmente, puede sonar complicado. Pero si lo inviertes, el 50% de 18 es muy fácil: ¡es 9! Esto aplica para absolutamente cualquier número y es un salvavidas asombroso en el día a día.</p>',
    },
    {
      type: 'title',
      text: 'Por qué fallamos al calcular crecimientos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uno de los errores más comunes ocurre en el caso 3: el aumento o disminución porcentual. Imaginemos que una acción en bolsa cuesta 100€, baja un 50% y al día siguiente sube un 50%. La intuición nos dice que vuelve a valer 100€, pero es incorrecto.',
    },
    {
      type: 'paragraph',
      html: 'Si baja un 50% desde 100€, su nuevo valor es 50€. Si desde esos 50€ sube un 50%, el incremento es la mitad de 50 (25€). Por tanto, el precio final sería 75€. Este es un ejemplo clásico de por qué las subidas y bajadas porcentuales no son asimétricas y por qué calculadoras dinámicas como esta previenen errores financieros graves.',
    },
    {
      type: 'title',
      text: 'Uso profesional y académico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nuestra interfaz está libre de distracciones y diseñada para <strong>trabajar rápido</strong>. Puedes tenerla en una pestaña fijada del navegador, tabular ágilmente entre los distintos campos y, gracias al botón de copiar junto al resultado, trasladar el dato exacto a tu Excel o Google Sheets sin riesgo de errores de tipografía.',
    },
    {
      type: 'list',
      items: [
        'Comercio web y tiendas físicas: Cálculo rápido de PVP aplicando márgenes comerciales y sumando el IVA.',
        'Gestión de recursos humanos: Determinación de la brecha salarial, retenciones de IRPF y subidas de sueldo referenciadas al IPC.',
        'Educación universitaria: Profesores que nivelan calificaciones o estudiantes de ramas científicas analizando la desviación de sus experimentos.',
        'Marketing digital: Medición del CTR (Click Through Rate), ROAS (Retorno del Gasto Publicitario) o Conversion Rate en eCommerce.',
      ],
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
