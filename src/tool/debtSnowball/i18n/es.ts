import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'bola-nieve-deuda';
const title = 'Calculadora Método Bola de Nieve: Plan de Pago de Deudas 2026';
const description =
  'Calcula tu fecha de libertad financiera con el método bola de nieve de Dave Ramsey. Organiza tus deudas de menor a mayor y visualiza tu plan de pagos mensual gratuito.';

const faqData = [
  {
    question: '¿Qué es el método de la bola de nieve?',
    answer:
      'Es una estrategia de pago de deudas popularizada por Dave Ramsey que consiste en pagar las deudas en orden de menor a mayor saldo, independientemente del tipo de interés. Se centra en la victoria psicológica de eliminar pequeñas cuentas rápido para ganar motivación.',
  },
  {
    question: '¿Por qué no ordenar por el tipo de interés (Avalancha)?',
    answer:
      'Matemáticamente, pagar primero el interés más alto ahorra más dinero. Sin embargo, muchas personas abandonan porque no ven resultados inmediatos. La Bola de Nieve prioriza el comportamiento y la motivación: ver desaparecer una deuda rápido te da la energía para seguir con las grandes.',
  },
  {
    question: '¿Debo tener ahorros antes de empezar el plan?',
    answer:
      'Se recomienda tener un "Fondo de Emergencia Inicial" (unos 1.000€) antes de atacar las deudas. Esto evita que, ante un imprevisto, tengas que volver a usar la tarjeta de crédito y romper tu racha de progreso.',
  },
  {
    question: '¿Qué deudas debo incluir en la calculadora?',
    answer:
      'Todas las deudas de consumo: tarjetas de crédito, préstamos personales, deudas con familiares, préstamos de coche, facturas atrasadas. La hipoteca suele dejarse para una fase posterior debido a su gran volumen.',
  },
  {
    question: '¿Qué pasa si recibo un ingreso extra puntual?',
    answer:
      'Cualquier inyección de capital (bonos, lotería, paga extra) debe ir íntegra a la deuda que estés atacando actualmente. Esto recorta drásticamente el tiempo total de tu plan de libertad financiera.',
  },
];

const howToData = [
  {
    name: 'Lista tus deudas',
    text: 'Apunta todas tus deudas indicando el saldo pendiente total y el pago mínimo mensual que realizas actualmente por cada una. No te preocupes por los intereses por ahora.',
  },
  {
    name: 'Define tu presupuesto extra',
    text: 'Calcula cuánto dinero adicional puedes destinar cada mes encima de los pagos mínimos. Incluso 20€ al mes pueden marcar la diferencia en el efecto bola de nieve.',
  },
  {
    name: 'Ordena y prioriza',
    text: 'La calculadora ordenará automáticamente de menor a mayor saldo. Paga el mínimo en todas excepto en la más pequeña. En esa, pon todo el extra disponible.',
  },
  {
    name: 'Ejecuta la cascada',
    text: 'Cuando liquides la deuda más pequeña, toma todo el dinero que destinabas a ella (su mínimo + el extra) y súmalo al pago de la siguiente deuda en la lista. Repite hasta ser libre.',
  },
];

const bibliographyData = [
  {
    name: 'Investopedia — Debt Snowball vs. Debt Avalanche',
    url: 'https://www.investopedia.com/articles/personal-finance/080716/debt-avalanche-vs-debt-snowball-which-best-you.asp',
  },
  {
    name: 'Harvard Business Review — Research on Debt Payoff Strategies',
    url: 'https://hbr.org/2016/12/research-the-best-strategy-for-paying-off-credit-card-debt',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Fuentes',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Deuda con el Método Bola de Nieve: Guía 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vivir con deudas es como intentar correr un maratón con una mochila llena de piedras. El <strong>método de la bola de nieve</strong>, popularizado por expertos en finanzas personales, ha demostrado ser una de las estrategias más efectivas para recuperar la libertad financiera. No se basa en la eficiencia matemática, sino en la poderosa <strong>base psicológica del comportamiento humano</strong>.',
    },
    {
      type: 'title',
      text: '¿Qué es el Método de la Bola de Nieve?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El método de la bola de nieve es una estrategia de reducción de deudas en la que pagas tus obligaciones en orden de <strong>menor a mayor saldo</strong>, sin importar el tipo de interés que tengan. Mientras realizas los pagos mínimos en todas tus deudas, destinas cada euro extra que puedas ahorrar al saldo más pequeño.',
    },
    {
      type: 'paragraph',
      html: 'Una vez que esa primera deuda desaparece, todo el dinero que destinabas a ella se desvía hacia la siguiente deuda más pequeña. Este efecto crea un impulso (momentum) similar al de una pequeña bola de nieve que rueda por una colina, volviéndose más grande y rápida a cada paso.',
    },
    {
      type: 'title',
      text: 'Psicología vs. Matemáticas: ¿Por qué funciona?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si hablas con un financiero puro, te dirá que el <strong>Método de la Avalancha</strong> es superior porque ahorras más dinero en intereses. Y técnicamente, tienen razón. Sin embargo, el problema de la deuda no es un problema de matemáticas; es un problema de <strong>hábitos y comportamiento</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Victorias rápidas:</strong> Al eliminar la deuda más pequeña en apenas un par de meses, recibes un chute de dopamina que te motiva a seguir.',
        '<strong>Simplificación mental:</strong> Pasar de tener 7 facturas mensuales a 6 reduce el estrés y la complejidad de tu vida financiera.',
        '<strong>Motivación sostenida:</strong> El éxito temprano te da la energía necesaria para enfrentar las deudas más grandes que vendrán después.',
      ],
    },
    {
      type: 'title',
      text: 'Bola de Nieve vs. Avalancha: Diferencias clave',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta te permite comparar ambos escenarios en tiempo real para que decidas qué plan encaja mejor con tu perfil:',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Método Avalancha',
          description: 'Se prioriza el tipo de interés más alto.',
          points: [
            'Ahorras el máximo dinero posible en intereses bancarios',
            'Puedes tardar mucho en sentir que avanzas',
            'Si la deuda más cara es muy grande, la desmotivación llega antes',
            'Matemáticamente óptimo',
          ],
        },
        {
          title: 'Método Bola de Nieve',
          description: 'Se prioriza el saldo más bajo.',
          points: [
            'Eliminas cuentas de tu lista lo antes posible',
            'Genera un refuerzo positivo inmediato',
            'Mayor tasa de cumplimiento del plan',
            'Psicológicamente ganador',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo usar la Calculadora de Deuda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para obtener un plan de pagos preciso, sigue estos pasos estructurados dentro de la herramienta:',
    },
    {
      type: 'list',
      items: [
        '<strong>Mapeo de deudas:</strong> Introduce el nombre, el saldo pendiente actual y el pago mínimo mensual de cada préstamo o tarjeta.',
        '<strong>Ajuste de presupuesto:</strong> Define el "Presupuesto Extra". Es la cantidad mensual que puedes ahorrar sobre los pagos mínimos.',
        '<strong>Simulación de capital:</strong> Usa la opción de inyección de capital para ver cómo un ingreso puntual (como una paga extra) recorta tu calendario.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Fórmula de amortización:</strong> Saldo Final = Saldo Inicial + Intereses Mensuales - (Pago Mínimo + Presupuesto Extra)',
    },
    {
      type: 'title',
      text: 'Consejos para acelerar tu Libertad Financiera',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calculadora te muestra una fecha estimada basada en tus datos actuales, pero esa fecha no es inamovible:',
    },
    {
      type: 'list',
      items: [
        '<strong>Revisa tus suscripciones:</strong> A menudo, esos 50€ extra que necesitas están escondidos en servicios que no usas.',
        '<strong>Congela tus tarjetas:</strong> No puedes salir de un agujero si sigues cavando. Mientras estés en el plan, evita contraer nueva deuda.',
        '<strong>Fondo de emergencia:</strong> Ten al menos 1.000€ ahorrados antes de empezar. Esto evita que un imprevisto rompa tu plan de pagos.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Recuerda:</strong> La libertad financiera es un 20% conocimiento y un 80% comportamiento. El día que veas el "0" en tu saldo final será el día que recuperes el control total de tu tiempo y tu dinero.',
    },
    {
      type: 'title',
      text: 'Conclusión y Próximos Pasos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>calculadora de método bola de nieve</strong> es una herramienta de planificación fundamental. El verdadero trabajo ocurre en tu día a día, en las decisiones que tomas en cada ticket de compra. Te recomendamos descargar tu plan en formato CSV y pegarlo en un lugar visible para mantener el foco en tu objetivo final: ser libre de deudas.',
    },
  ],
  ui: {
    labelTitle: 'Libertad total',
    labelDescription: 'Entra en modo libertad financiera. Usa el método psicológicamente más efectivo para eliminar tus deudas.',
    labelExtraBudget: 'PRESUPUESTO EXTRA MENSUAL',
    labelExtraBudgetHelp: 'Dinero adicional sobre los pagos mínimos.',
    labelSnowballMethod: 'BOLA DE NIEVE',
    labelAvalancheMethod: 'AVALANCHA',
    labelAddNewDebt: 'AÑADIR NUEVA DEUDA',
    labelDebtName: 'Nombre',
    labelDebtNamePlaceholder: 'Ej: Visa',
    labelDebtBalance: 'CUÁNTO DEBES',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'PAGO MÍNIMO',
    labelInterestRate: 'TIPO DE INTERÉS',
    labelInterestHelp: 'ANUAL',
    labelAddButton: 'AÑADIR AL PLAN',
    labelClearData: 'Borrar configuración',
    labelClearDataConfirm: '¿Vaciar plan?',
    labelDeleteDebt: 'Eliminar',
    labelDebtInventory: 'Inventario de Deudas',
    labelFreedomDate: 'FECHA DE LIBERTAD FINANCIERA',
    labelActiveMethod: 'MÉTODO',
    labelMonthsRemaining: 'MESES RESTANTES',
    labelTotalInterest: 'INTERESES TOTALES',
    labelTotalPaid: 'PAGO TOTAL FINAL',
    labelInterestSaved: 'AHORRO INTERESES',
    labelYourStrategy: 'Tu Estrategia Paso a Paso',
    labelStrategyHelp: 'Cada paso muestra tu pago total cuando llegue su turno',
    labelPriority: 'PRIORIDAD MÁXIMA',
    labelStep: 'PASO',
    labelAfterPaying: 'TRAS LIQUIDAR ANTERIOR',
    labelMonthlyPayment: 'Pago mensual',
    labelDetailedAmortization: 'Amortización Detallada',
    labelExportCSV: 'Exportar .CSV',
    labelDate: 'Fecha',
    labelStartingBalance: 'Saldo Inicial',
    labelInterest: 'Interés',
    labelAmortization: 'Amortizado',
    labelTotalMonth: 'Total Mes',
    labelRemaining: 'Restante',
    labelFree: 'LIBRE',
    labelDebtInfinite: 'DEUDA INFINITA',
    labelInvalidInput: 'Indica saldo total y pago mínimo',
    labelEmptyStateTitle: 'Comienza tu plan',
    labelEmptyStateDescription: 'Tus deudas no son para siempre. Añade tus deudas para visualizar el camino a la libertad financiera.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
  },
};
