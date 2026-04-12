import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
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
      'Depende del momento. Si amortizan en el año 1 de una hipoteca de 200.000€ al 3%, puedes ahorrarte más de 15.000€ en intereses. Si lo haces en el año 20, apenas ahorras 2.000€. El timing es crucial.',
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
      text: 'Guía Completa de Hipotecas: Sistema Francés y Amortización',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La hipoteca es probablemente la deuda más grande que contraerás en tu vida. Entender cómo funciona el sistema de amortización español (francés) es crucial para tomar decisiones inteligentes que pueden ahorrarte decenas de miles de euros.',
    },
    {
      type: 'title',
      text: 'El "Trampa" del Sistema Francés: Entendiendo la Composición de tu Cuota',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En España, la mayoría de hipotecas usan el <strong>Sistema de Amortización Francés</strong>. Su característica principal es que la cuota mensual siempre es la misma (si el interés es fijo), pero la composición cambia radicalmente a lo largo del tiempo.',
    },
    {
      type: 'tip',
      title: 'Cómo Evoluciona tu Cuota',
      html: '<p><strong>Al principio (Años 1-10):</strong> Pagas casi todo INTERESES y devuelves muy poco dinero prestado. En una hipoteca de 250.000€ al 3%, tu primer pago puede ser 80% intereses.</p><p><strong>En el medio (Años 11-25):</strong> La proporción se equilibra gradualmente.</p><p><strong>Al final (Años 26-30):</strong> Pagas casi todo CAPITAL y muy pocos intereses.</p>',
    },
    {
      type: 'paragraph',
      html: 'Por eso, si vas a <strong>amortizar hipoteca</strong> (adelantar dinero), es muchísimo más rentable hacerlo en los primeros años del préstamo. Amortizar 10.000€ en el año 1 puede ahorrarte más de 15.000€ en intereses. El mismo adelanto en el año 20 apenas te ahorra 2.000€.',
    },
    {
      type: 'title',
      text: '¿Cuánto Dinero Debo Destinar a la Hipoteca?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El Banco de España recomienda que tu hipoteca <strong>no supere el 30-35% de tus ingresos netos mensuales</strong>. Si superas este umbral, aumentas significativamente el riesgo de impago ante imprevistos (pérdida de trabajo, enfermedad, etc.).',
    },
    {
      type: 'title',
      text: 'Contexto 2026: Tipo Fijo vs Variable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Con un Euribor fluctuante, elegir entre <strong>Tipo Fijo</strong> o <strong>Tipo Variable</strong> es una decisión estratégica que puede costar miles de euros anuales.',
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
            'Ideal para presupuestos ajustados',
          ],
        },
        {
          title: 'Tipo Variable',
          description: 'Puede ser más barato hoy, pero expone tu economía a volatilidad.',
          highlight: true,
          points: [
            'Cuota inicial más baja',
            'Riesgo de subidas del Euribor (4-5% es posible)',
            'Impacto potencial grave en presupuesto',
            'Solo para quien tolera riesgo alto',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'La Decisión Fijo vs Variable Depende de Tu Perfil',
      html: '<p><strong>Elige Tipo Fijo si:</strong> Tu presupuesto es ajustado, buscas certeza, no toleras sorpresas mensuales desagradables.</p><p><strong>Elige Tipo Variable si:</strong> Tienes colchón financiero, crees que el Euribor bajará, tu hipoteca es pequeña o corto plazo.</p>',
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
