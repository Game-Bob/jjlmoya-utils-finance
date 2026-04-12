import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'simulador-hipoteca';
const title = 'Simulador de Hipoteca y Tabla de Amortización Francesa';
const description =
  'Calcula tu cuota hipotecaria mensual, descubre cuánto pagarás en intereses y visualiza tu cuadro de amortización completo al instante.';

const faqData = [
  {
    question: '¿Qué es el sistema de amortización francés?',
    answer:
      'Es el sistema más usado en España. La cuota mensual es siempre la misma, pero al principio pagas casi todo en intereses y muy poco capital. Al final, es al revés. Por eso amortizar anticipadamente es más rentable en los primeros años.',
  },
  {
    question: '¿Tipo fijo o variable en 2026?',
    answer:
      'Tipo fijo: pagas más ahora pero duermes tranquilo 30 años. Tipo variable: puede ser más barato hoy, pero si el Euribor sube al 4-5%, tu cuota puede dispararse y asfixiar tu economía. Depende de tu aversión al riesgo.',
  },
  {
    question: '¿Cuánto me ahorro si amortizo 10.000€ anticipadamente?',
    answer:
      'Depende del momento. Si amortizas en el año 1 de una hipoteca de 200.000€ al 3%, puedes ahorrarte más de 15.000€ en intereses. Si lo haces en el año 20, apenas ahorras 2.000€. El timing es crucial.',
  },
  {
    question: '¿Qué porcentaje de mi sueldo debería destinar a la hipoteca?',
    answer:
      'La recomendación del Banco de España es no superar el 30-35% de tus ingresos netos mensuales (incluyendo otras deudas). Superar este umbral aumenta significativamente el riesgo de impago ante imprevistos.',
  },
];

const howToData = [
  {
    name: 'Introducir el importe del préstamo',
    text: 'Escribe la cantidad total que necesitas solicitar al banco (restando tus ahorros aportados como entrada).',
  },
  {
    name: 'Ajustar el tipo de interés',
    text: 'Introduce el TIN (Tipo de Interés Nominal) ofrecido por la entidad. Puedes comparar entre tipo fijo o variable.',
  },
  {
    name: 'Elegir el plazo de amortización',
    text: 'Define en cuántos años quieres devolver el préstamo. A más años, cuota más baja pero pagarás más intereses totales.',
  },
  {
    name: 'Analizar el cuadro de amortización',
    text: 'Revisa mes a mes cómo evoluciona tu deuda y qué parte de tu cuota se destina a intereses vs capital.',
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias',
  bibliography: [
    {
      name: 'Banco de España: Portal del Cliente Bancario',
      url: 'https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Clientesbancarios/',
    },
    {
      name: 'Banco de España: Información sobre hipotecas',
      url: 'https://www.bde.es/bde/es/secciones/servicios/Particulares_y_e/Clientesbancarios/Productos_y_s/Hipotecas/',
    },
    {
      name: 'AEPD: Guía de protección de datos en operaciones de crédito',
      url: 'https://www.aepd.es/',
    },
    {
      name: 'OCU: Calculadora hipotecaria y guía de compra',
      url: 'https://www.ocu.org/dinero/hipotecas/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'El "Trampa" del Sistema Francés',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En España, la mayoría de hipotecas usan el <strong>Sistema de Amortización Francés</strong>. Su característica principal es que la cuota mensual siempre es la misma (si el interés es fijo), pero la composición cambia.',
    },
    {
      type: 'tip',
      title: 'Composición de la Cuota',
      html: '<p><strong>Al principio:</strong> Pagas casi todo INTERESES y devuelves muy poco dinero prestado.</p><p><strong>Al final:</strong> Pagas casi todo CAPITAL y muy pocos intereses.</p>',
    },
    {
      type: 'paragraph',
      html: 'Por eso, si vas a amortizar hipoteca (adelantar dinero), es muchísimo más rentable hacerlo en los primeros años del préstamo.',
    },
    {
      type: 'title',
      text: 'Contexto 2026: Tipos de Interés',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Con un Euribor fluctuante, elegir entre <strong>Tipo Fijo</strong> o <strong>Tipo Variable</strong> es clave.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tipo Fijo',
          description: 'Pagas un poco más ahora, pero duermes tranquilo sabiendo que tu cuota nunca subirá.',
          points: [
            'Cuota predecible durante 30 años',
            'Protección contra subidas de interés',
            'Paz mental en economía incierta',
            'Ideal para presupuestos limitados',
          ],
        },
        {
          title: 'Tipo Variable',
          description: 'Puede ser más barato hoy, pero expone tu economía a volatilidad.',
          highlight: true,
          points: [
            'Cuota inicial más baja',
            'Riesgo de subidas del Euribor',
            'Impacto potencial en presupuesto',
            'Solo para tolerancia al riesgo alta',
          ],
        },
      ],
    },
  ],
  ui: {
    labelTitle: 'Calculadora Hipotecaria',
    labelLoanAmount: 'Importe Préstamo',
    labelInterestRate: 'Interés (TIN)',
    labelYears: 'Plazo (Años)',
    labelMonthlyExtra: 'Añadir Ahorro Mensual',
    labelMonthlyPayment: 'Cuota Mensual',
    labelMonthCount: 'meses',
    labelSavingsCard: 'Tu Ahorro Potencial',
    labelSavingsInterest: 'Intereses',
    labelSavingsTime: 'Tiempo',
    labelTimelineComparison: 'Comparativa Temporal',
    labelTimelineOriginal: 'Duración Original',
    labelTimelineOptimized: 'Duración con Amortización',
    labelCostBreakdown: 'Desglose de Costes Totales',
    labelBorrowed: 'Prestado',
    labelTotalBorrowed: 'Total Prestado',
    labelTotalInterest: 'Total Intereses',
    labelAmortizationTable: 'Tabla de Amortización',
    labelTableHeader: 'Ver tabla completa',
    labelViewAll: 'Ver todo',
    labelPaid: 'Hipoteca Pagada',
    labelTableMonth: 'Mes',
    labelTableInterest: 'Interés',
    labelTablePrincipal: 'Capital',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Pendiente',
    labelMoreMonths: 'más meses',
    labelMonth: 'Mes',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'es-ES',
    monthPlural: 'meses',
    yearPlural: 'años',
  },
};
