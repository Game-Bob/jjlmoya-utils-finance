import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'calculadora-regla-4-por-ciento-fire';
const title = 'Calculadora FIRE: Regla del 4% para tu Libertad Financiera';
const description = 'Calcula tu número mágico de independencia financiera usando la regla del 4%. Planifica tu jubilación anticipada y visualiza tu camino hacia la libertad económica.';

const faqData = [
  {
    question: '¿Qué es la Regla del 4%?',
    answer: 'La Regla del 4% es una estrategia de retiro basada en el Estudio Trinity que indica que puedes retirar el 4% de tu patrimonio el primer año de jubilación, ajustando por inflación en años posteriores, sin agotar tus fondos en 30 años.',
  },
  {
    question: '¿Qué es FIRE?',
    answer: 'FIRE significa Financial Independence, Retire Early (Independencia Financiera, Retiro Temprano). Es un movimiento que busca alcanzar la libertad económica mediante una combinación agresiva de ahorro e inversión inteligente.',
  },
  {
    question: '¿Cuál es mi número mágico?',
    answer: 'Tu número mágico es el patrimonio total que necesitas acumular para poder vivir de los rendimientos sin trabajar. Se calcula dividiendo tus gastos anuales entre la tasa de retiro segura (usualmente 4%).',
  },
  {
    question: '¿Qué diferencia hay entre Lean, Barista y Fat FIRE?',
    answer: 'Lean FIRE es vivir con gastos mínimos (70% de gastos actuales), Barista FIRE es trabajar a tiempo parcial mientras los rendimientos cubren el resto (50% de gastos), y Fat FIRE es tener un estilo de vida holgado (150% de gastos).',
  },
  {
    question: '¿Es realista la Regla del 4%?',
    answer: 'La Regla del 4% tiene un 95% de probabilidad histórica de éxito en un portafolio 50/50 acciones-bonos durante 30 años. Sin embargo, no contempla el riesgo de secuencia de retornos y se basa principalmente en datos del mercado estadounidense.',
  },
];

const howToData = [
  {
    name: 'Calcula tus gastos mensuales',
    text: 'Analiza cuánto gastas realmente cada mes incluyendo vivienda, alimentos, servicios y entretenimiento.',
  },
  {
    name: 'Elige tu tasa de retiro segura',
    text: 'La Regla del 4% es estándar, pero puedes ajustar entre 2.5% (más conservador) y 6% (más agresivo) según tu tolerancia al riesgo.',
  },
  {
    name: 'Introduce tu patrimonio actual',
    text: 'Suma el total de tus inversiones, ahorros y activos que generan ingresos pasivos.',
  },
  {
    name: 'Visualiza tu progreso',
    text: 'Observa el gráfico de crecimiento y los hitos de libertad (Lean, Barista, Fat FIRE) para entender cuándo alcanzarás tu meta.',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regla del 4%: El Santo Grial de la Jubilación Anticipada',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Descubre cómo calcular tu patrimonio necesario para vivir de las rentas para siempre. La <strong>Regla del 4%</strong> surgió del Estudio Trinity, realizado en 1998 por tres profesores de finanzas. Analizaron datos históricos desde 1926 para determinar qué porcentaje se podía retirar anualmente sin agotar la cartera en 30 años.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Éxito Histórico' },
        { value: '50/50', label: 'Mix Acciones/Bonos' },
        { value: '30', label: 'Años de Horizon' },
        { value: '4%', label: 'Retiro Seguro' },
      ],
    },
    {
      type: 'title',
      text: '¿Qué es el Movimiento FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE es el acrónimo de Financial Independence, Retire Early (Independencia Financiera, Retiro Temprano).',
        'Busca la libertad de elegir qué hacer con tu tiempo sin que el dinero sea un condicionante.',
        'Se basa en la optimización del ahorro y la inversión inteligente.',
        'El objetivo es que tus activos generen suficiente flujo de caja para cubrir tus gastos.',
      ],
    },
    {
      type: 'title',
      text: 'Tipos de Libertad Financiera',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Estilo de vida minimalista. Cubre solo los gastos básicos de supervivencia.',
          points: ['Ahorro extremo', 'Gasto muy bajo', 'Libertad frugal'],
        },
        {
          title: 'Barista FIRE',
          description: 'Situación híbrida donde tus inversiones cubren la mitad de tus gastos.',
          points: ['Trabajo por placer', 'Seguro social cubierto', 'Menor estrés'],
        },
        {
          title: 'Fat FIRE',
          description: 'Jubilación con un presupuesto holgado que permite lujos y viajes.',
          points: ['Alto patrimonio', 'Cero restricciones', 'Legado familiar'],
        },
      ],
    },
    {
      type: 'title',
      text: '¿Cómo usar nuestra Calculadora FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Trackeo de Gastos:</strong> Analiza tus gastos reales de los últimos 12 meses.',
        '<strong>Definición de SWR:</strong> Elige tu tasa de retirada segura según tu riesgo.',
        '<strong>Patrimonio Actual:</strong> Introduce el valor de tus inversiones actuales.',
        '<strong>Capacidad de Ahorro:</strong> Proyecta cuánto tiempo te queda para la meta.',
        '<strong>Visualización Visual:</strong> Analiza el gráfico de crecimiento de tu riqueza.',
      ],
    },
    {
      type: 'title',
      text: 'Análisis de la Regla del 4%',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ventajas',
          description: 'Por qué funciona la regla del 4%',
          points: [
            'Simplicidad matemática para planificación rápida.',
            'Basada en datos históricos de casi un siglo.',
            'Adaptable a cualquier nivel de gasto.',
          ],
        },
        {
          title: 'Limitaciones',
          description: 'Qué no cubre la regla del 4%',
          points: [
            'No contempla el riesgo de secuencia de retornos.',
            'Basada principalmente en el mercado estadounidense.',
            'Ignora cambios drásticos en fiscalidad local.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Factor Crítico: La Inflación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Recuerda que 1.000€ hoy no comprarán lo mismo en el futuro. Es vital usar rentabilidades reales (descontada la inflación) para que tus proyecciones mantengan el poder adquisitivo actual. La Regla del 4% asume que ajustas tus retiros anualmente por inflación.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora FIRE: Regla del 4%',
    labelDescription: 'Calcula tu número mágico para la independencia financiera usando la regla del 4% y visualiza tus hitos hacia la libertad económica.',
    labelMonthlyExpenses: 'Gastos Mensuales',
    labelSWR: 'Tasa de Retirada (SWR)',
    labelCurrentWorth: 'Patrimonio Actual',
    labelMonthlySavings: 'Capacidad de Ahorro Mensual',
    labelAnnualReturn: 'Rentabilidad Estimada (Neto)',
    labelFreedomMilestones: 'Hitos de Libertad',
    labelLeanFIRE: 'Lean FIRE (70% supervivencia)',
    labelBaristaFIRE: 'Barista FIRE (50% ingresos)',
    labelFatFIRE: 'Fat FIRE (150% lujo)',
    labelMagicNumber: 'Tu Número Mágico para ser Libre',
    labelMagicNumberDesc: 'Capital necesario para vivir de las rentas',
    labelTimeRemaining: 'Tiempo hasta la libertad financiera',
    labelTimeRemainingFormat: 'Te faltan {years} años y {months} meses',
    labelAlreadyFI: '¡Ya has alcanzado la libertad financiera!',
    labelUnachievable: 'Meta inalcanzable con este ahorro',
    labelHiddenCostsChecklist: 'Checklist de Gastos Ocultos',
    labelHealth: 'Seguros Salud (+200€)',
    labelTaxes: 'Impuestos (+150€)',
    labelHome: 'Mantenimiento Hogar (+100€)',
    labelTravel: 'Viajes y Ocio (+300€)',
    labelEmergency: 'Fondo Emergencias (+100€)',
    labelSubscriptions: 'Suscripciones (+50€)',
    labelAdded: 'Añadido:',
    labelSavePlan: 'Guardar Plan',
    labelSWRTooltip: 'Safe Withdrawal Rate: Porcentaje de tus ahorros que puedes retirar cada año sin quedarte sin dinero.',
    labelReturnTooltip: 'Rendimiento anual del mercado (ya descontada la inflación). El estándar histórico es el 7%.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
  },
};
