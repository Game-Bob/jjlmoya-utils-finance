import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Ahorros Totales',
  labelExpenses: 'Gastos Actuales',
  labelMonthly: 'Mensuales',
  labelYearly: 'Anuales',
  labelTimeRemaining: 'Tu Pista de Supervivencia',
  labelYears: 'Años',
  labelMonths: 'Meses',
  labelDays: 'Días',
  labelStatus: 'Estado de Seguridad Financiera',
  labelRedZone: 'Zona Roja: Riesgo Alto',
  labelYellowZone: 'Zona Amarilla: Estable',
  labelGreenZone: 'Zona Verde: Libertad Financiera',
  labelBurnRateDaily: 'Gasto Diario (Burn Rate)',
  labelBurnRateMonthly: 'Gasto Mensual',
  labelWhatIf: 'El Movimiento del 10%',
  labelWhatIfDescription: 'Reduciendo tus gastos solo un 10%, podrías extender tu tiempo de supervivencia significativamente.',
  labelGainTime: 'Tiempo Extra Ganado',
  labelCopyResult: 'Copiar Resumen',
  labelCopied: '¡Copiado!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'calculadora-libertad-financiera-pista-aterrizaje',
  title: 'Calculadora de Libertad Financiera y Pista de Aterrizaje',
  description: 'Calcula cuánto tiempo durarán tus ahorros. Nuestra herramienta de pista de supervivencia te ayuda a visualizar tu independencia financiera y planificar tu fondo de emergencia.',
  ui,
  seo: [
    {
      type: 'title',
      text: '¿Qué es la Pista de Supervivencia Financiera?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>pista de supervivencia</strong> (o runway) es el tiempo que puedes vivir sin nuevos ingresos. Es la métrica definitiva de la libertad financiera. A diferencia de un saldo bancario, la pista te indica cuánto "tiempo humano" has comprado con tus ahorros. Conocer tu pista te permite tomar decisiones profesionales valientes o simplemente dormir mejor sabiendo que tienes una red de seguridad.',
    },
    {
      type: 'title',
      text: 'Cómo calcular tu tiempo de supervivencia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para hallar tu pista, dividimos tus ahorros líquidos totales entre tus gastos periódicos. Nuestra calculadora va más allá desglosando este tiempo en años, meses y días, dándote una sensación tangible de tu peso financiero. También calculamos tu <strong>Burn Rate</strong>: la cantidad exacta de dinero que sale de tu bolsillo cada día.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Zona Roja',
          description: '0-6 meses de pista.',
          points: [
            'Fragilidad financiera alta',
            'Prioridad: ahorrar',
            'Evitar nuevas deudas',
            'Modo emergencia',
          ],
        },
        {
          title: 'Zona Amarilla',
          description: '6-24 meses de pista.',
          points: [
            'Tranquilidad mental',
            'Resiste imprevistos',
            'Planificar próximos pasos',
            'Red de seguridad estable',
          ],
        },
        {
          title: 'Zona Verde',
          description: 'Más de 24 meses.',
          highlight: true,
          points: [
            'Libertad financiera',
            'Palanca total',
            'Negocia tu vida',
            'La zona de libertad',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Extiende tu pista: La regla del 10%',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pequeños cambios en el gasto tienen un impacto exponencial. Una reducción del 10% en tus gastos no solo ahorra ese dinero; reduce tu ritmo de gasto diario, haciendo que cada euro que ya tienes dure más tiempo. Este efecto de doble victoria es el secreto para alcanzar la independencia financiera años antes de lo previsto.',
    },
  ],
  faq: [
    {
      question: '¿Qué es una buena pista de supervivencia?',
      answer: 'Los expertos recomiendan un mínimo de 3 a 6 meses de gastos en un fondo de emergencia. Sin embargo, para la libertad financiera real, una pista de 2 años o más se considera la "Zona de Libertad".',
    },
    {
      question: '¿Incluye esta calculadora la inflación?',
      answer: 'Esta herramienta está diseñada para el cálculo inmediato de activos líquidos contra gastos actuales. Para planes de jubilación a décadas vista, consulta una calculadora de interés compuesto.',
    },
    {
      question: '¿Qué es el "Burn Rate" en finanzas personales?',
      answer: 'El burn rate es el ritmo al que consumes tus ahorros para cubrir tus gastos. Conocer tu gasto diario te ayuda a interiorizar el coste de tu estilo de vida.',
    },
  ],
  bibliography: [
    {
      name: 'Principios del Movimiento FIRE',
      url: 'https://es.wikipedia.org/wiki/FIRE_(movimiento_financiero)',
    },
    {
      name: 'Guía del Fondo de Emergencia',
      url: 'https://www.investopedia.com/terms/e/emergency_fund.asp',
    },
  ],
  howTo: [
    {
      name: 'Introduce tus ahorros líquidos',
      text: 'Ingresa el total de efectivo o activos fácilmente accesibles que tienes disponibles.',
    },
    {
      name: 'Configura tus gastos recurrentes',
      text: 'Indica cuánto gastas al mes o al año para cubrir tu estilo de vida.',
    },
    {
      name: 'Analiza tu zona de seguridad',
      text: 'Comprueba si estás en la zona Roja, Amarilla o Verde y revisa tu gasto diario.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calculadora de Libertad Financiera',
      description: 'Una herramienta para calcular cuánto durarán tus ahorros basándose en tu ritmo de gasto.',
    },
  ],
};
