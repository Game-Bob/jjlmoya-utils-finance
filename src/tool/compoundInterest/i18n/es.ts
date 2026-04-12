import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'interes-compuesto';
const title = 'Calculadora de Interés Compuesto: Visualiza tu Riqueza Futura';
const description =
  'Descubre cómo pequeñas inversiones se convierten en grandes fortunas. La herramienta definitiva para planificar tu libertad financiera y jubilación.';

const faqData = [
  {
    question: '¿Qué es el interés compuesto?',
    answer:
      'Es el interés calculado sobre el capital inicial y también sobre los intereses acumulados de períodos anteriores. Esto genera un crecimiento exponencial de la inversión a lo largo del tiempo.',
  },
  {
    question: '¿Cuál es la diferencia con el interés simple?',
    answer:
      "En el interés simple, los intereses se calculan solo sobre el capital inicial. En el compuesto, los intereses se reinvierten, lo que significa que 'tus intereses generan más intereses'.",
  },
  {
    question: "¿Qué es la 'Regla del 72'?",
    answer:
      'Es una fórmula rápida para estimar cuánto tiempo tardará en duplicarse una inversión: divide 72 entre la tasa de rentabilidad anual. Por ejemplo, al 8% anual, duplicarás tu dinero en 9 años.',
  },
  {
    question: '¿Por qué es importante empezar a invertir joven?',
    answer:
      'Debido al efecto exponencial, el factor más determinante no es la cantidad de dinero ahorrada, sino el tiempo. Empezar unos años antes puede resultar en una riqueza final mucho mayor debido a la capitalización.',
  },
];

const howToData = [
  {
    name: 'Introducir capital inicial',
    text: 'Escribe la cantidad de dinero con la que vas a comenzar tu plan de inversión.',
  },
  {
    name: 'Definir aportaciones periódicas',
    text: 'Indica cuánto dinero ahorrarás e invertirás cada mes o cada año adicionalmente.',
  },
  {
    name: 'Estimar rentabilidad anual',
    text: 'Introduce el porcentaje de beneficio anual que esperas obtener (ej. 7% para el S&P 500 histórico).',
  },
  {
    name: 'Ajustar el horizonte temporal',
    text: 'Elige cuántos años mantendrás la inversión para visualizar el crecimiento exponencial de tu capital.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Khan Academy: Interest and Debt',
      url: 'https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial',
    },
    {
      name: 'Banco de España: Portal del Cliente Bancario',
      url: 'https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Clientesbancarios/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Magia del Interés Compuesto: Construye tu Riqueza Exponencialmente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein la llamó la "octava maravilla del mundo". El <strong>interés compuesto</strong> es el mecanismo más poderoso para generar riqueza a largo plazo. No necesitas ser un experto en finanzas para aprovecharlo: solo necesitas tiempo, paciencia y dinero invertido.',
    },
    {
      type: 'title',
      text: 'Interés Simple vs Compuesto: La Metáfora de la Bola de Nieve',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imagina que tienes una bola de nieve en lo alto de una colina. El <strong>interés simple</strong> es como bajar esa bola y tener que añadirle nieve manualmente cada metro para que crezca. El <strong>interés compuesto</strong> es como dejar que la bola ruede sola: recoge nieve por sí misma, y cuanto más grande se hace, más superficie tiene para recoger <em>aún más</em> nieve en cada giro.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Interés Simple',
          description: 'Los intereses se calculan siempre sobre el capital inicial.',
          points: [
            'Fórmula: Capital × Tasa × Tiempo',
            'Crecimiento lineal y predecible',
            'Utilizado en préstamos a corto plazo',
            'Sin reinversión de beneficios',
          ],
        },
        {
          title: 'Interés Compuesto',
          description: 'Los intereses se suman al capital y generan nuevos intereses.',
          highlight: true,
          points: [
            'Fórmula: Capital × (1 + Tasa)^Tiempo',
            'Crecimiento exponencial acelerado',
            'Base de toda inversión a largo plazo',
            'Tus beneficios generan más beneficios',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Matemáticamente, tus beneficios generan nuevos beneficios. En los primeros años parece lento, pero pasado el "punto de inflexión", la curva se dispara verticalmente. Aquí es donde se crean las verdaderas fortunas.',
    },
    {
      type: 'title',
      text: '¿Por qué el tiempo es tu mayor aliado?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El factor más determinante no es la cantidad de dinero que inviertas, sino <strong>cuántos años dejes que crezca</strong>. Empezar 10 años antes puede resultar en una riqueza final 2 o 3 veces mayor, incluso si inviertes menos dinero total. Este efecto exponencial es la razón por la que los inversores jóvenes tienen una ventaja incomparable.',
    },
    {
      type: 'tip',
      title: 'La Regla del 72',
      html: '<p>Divide 72 entre tu rentabilidad anual para saber cuántos años tardarás en <strong>duplicar tu dinero</strong>.</p><p><em>Ejemplo: Al 8%, duplicas cada 9 años (72/8 = 9).</em></p><p>Esta fórmula mágica funciona para cualquier tasa de rendimiento y te ayuda a estimar rápidamente el crecimiento de tus inversiones.</p>',
    },
    {
      type: 'tip',
      title: 'Consejo 2026',
      html: '<p>La inflación sigue siendo un factor. Asegúrate de que tu rentabilidad neta supere al menos el 2-3% anual para no perder poder adquisitivo. Invierte en activos que crezcan más rápido que la inflación.</p>',
    },
    {
      type: 'title',
      text: 'Frecuencia de Capitalización: ¿Importa?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El interés puede capitalizarse anualmente, semestralmente, trimestralmente, mensualmente o incluso diariamente. Cuanto <strong>más frecuente sea la capitalización</strong>, mayor será el efecto compuesto. Un mismo capital con la misma tasa crecerá más si el interés se compone mensualmente que si se compone anualmente.',
    },
  ],
  ui: {
    labelTitle: 'Simulador de Inversión',
    labelRealtime: 'Tiempo real',
    labelInitial: 'Aportación Inicial',
    labelMonthly: 'Aportación Mensual',
    labelRate: 'R. Anual',
    labelYears: 'Años',
    labelMyMoney: 'Tu Dinero',
    labelProfit: 'Beneficio (Interés)',
    labelTotal: 'Total Acumulado',
    labelYear: 'Año',
    labelPrincipal: 'Tu Dinero (Principal)',
    labelInterest: 'Intereses Generados',
    insightPrefix: '[TIP] En el año ',
    insightSuffix:
      ', tus intereses generados anuales superarán a tus aportaciones. ¡El dinero ya trabaja más que tú!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
  },
};
