import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = 'calculadora-salario-bruto-neto-coste-empresa-espana';
const title = 'Calculadora de Salario Bruto, Neto y Coste Empresa en España 2026';
const description = 'Calcula el sueldo neto, la retención de IRPF, la cotización del trabajador y el coste total que paga la empresa en España según la normativa de 2026.';

const faq = [
  {
    question: '¿Cuánto le cuesta un trabajador a una empresa en España?',
    answer: 'La empresa paga el salario bruto más sus cotizaciones a la Seguridad Social. Para un puesto de oficina indefinido con un sueldo bruto anual de 30.000 €, un tipo de accidentes del 1,50 % y los tipos de 2026, el coste total estimado para la empresa es de 39.645 € anuales, antes de incluir bonificaciones, beneficios sociales o provisiones por despido.',
  },
  {
    question: '¿Cómo se calcula el paso de salario bruto a neto en España?',
    answer: 'Se parte del salario bruto anual, se restan las cotizaciones a la Seguridad Social a cargo del trabajador y se descuenta la retención del IRPF. Introduce el porcentaje de IRPF obtenido en la calculadora de la Agencia Tributaria, una oferta o una nómina reciente, ya que las circunstancias personales y familiares modifican dicho tipo.',
  },
  {
    question: '¿Cambia el salario anual al elegir 12 o 14 pagas?',
    answer: 'No. La calculadora mantiene exactamente el mismo importe bruto anual y divide las estimaciones anuales entre 12 o 14. La cifra por paga es un promedio orientativo, ya que en una nómina real con 14 pagas las deducciones pueden distribuirse de forma distinta entre mensualidades ordinarias y extraordinarias.',
  },
  {
    question: '¿Qué tipos de la Seguridad Social se incluyen para 2026?',
    answer: 'La estimación incluye contingencias comunes, desempleo, formación profesional, el Mecanismo de Equidad Intergeneracional (MEI) y FOGASA según corresponda. También suma la prima de accidentes de trabajo y enfermedades profesionales (AT y EP) seleccionada.',
  },
  {
    question: '¿Qué ocurre si el salario supera la base máxima de cotización?',
    answer: 'Las cotizaciones ordinarias se topan en la base máxima mensual de 2026, fijada en 5.101,20 €. A partir de esa cantidad, la calculadora aplica la cotización progresiva de solidaridad sobre la retribución que excede dicha base.',
  },
  {
    question: '¿Es válida esta calculadora fuera de España?',
    answer: 'No. Está deliberadamente limitada a España y al Régimen General de la Seguridad Social para 2026 en contratos a jornada completa con salario ordinario en dinero. No mezcla tipos ni sistemas fiscales de otros países.',
  },
  {
    question: '¿Se envían los datos salariales a algún servidor?',
    answer: 'No. Todos los cálculos se realizan localmente en tu navegador. Tus últimos datos pueden guardarse de forma local en el mismo dispositivo para que puedas retomar la comparación más adelante.',
  },
];

const howTo = [
  { name: 'Introduce el salario bruto', text: 'Selecciona la modalidad anual o mensual e introduce la retribución bruta ofertada o presupuestada.' },
  { name: 'Configura las condiciones de la nómina', text: 'Elige 12 o 14 pagas, tipo de contrato (indefinido o temporal), el porcentaje de retención de IRPF y la tarifa de accidentes aplicable.' },
  { name: 'Consulta la órbita salarial', text: 'Compara el núcleo neto, las deducciones del trabajador y el halo de aportaciones empresariales.' },
  { name: 'Cambia el periodo de visualización', text: 'Revisa los totales anuales o el promedio por paga sin alterar el salario bruto anual.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    labelGrossSalary: 'Señal de salario bruto',
    labelGrossSalaryHint: 'Importe del salario',
    labelAnnual: 'Anual',
    labelMonthly: 'Mensual',
    labelPaySchedule: 'Calendario de pagos',
    labelTwelvePayments: '12 pagas',
    labelFourteenPayments: '14 pagas',
    labelContract: 'Tipo de contrato',
    labelPermanent: 'Indefinido',
    labelTemporary: 'Temporal',
    labelIrpfRate: 'Retención de IRPF',
    labelIrpfHint: 'Usa el tipo de la Agencia Tributaria, oferta o nómina',
    labelRiskRate: 'Prima de accidentes (AT y EP)',
    labelRiskHint: 'Tarifa de AT y EP del puesto para la empresa',
    labelOfficePreset: 'Oficina 1,50 %',
    labelTradePreset: 'Comercial 2,00 %',
    labelConstructionPreset: 'Construcción 6,70 %',
    labelNetCore: 'Núcleo de salario neto',
    labelEmployeeDeductions: 'Deducciones del trabajador',
    labelDeductionsFormula: 'IRPF más Seguridad Social del empleado',
    labelEmployerHalo: 'Halo de cotización empresarial',
    labelEmployerCost: 'Coste total para la empresa',
    labelAnnualView: 'Vista anual',
    labelPerPaymentView: 'Promedio por paga',
    labelGross: 'Salario bruto',
    labelIrpf: 'Retención de IRPF',
    labelEmployeeSocialSecurity: 'Seguridad Social del trabajador',
    labelContributionBase: 'Base de cotización mensual',
    labelCostMultiplier: 'Multiplicador de coste frente al bruto',
    labelWorkerKeeps: 'Porcentaje neto sobre el coste total',
    labelLeanGap: 'Halo de coste ajustado',
    labelTypicalGap: 'Halo de coste habitual',
    labelWideGap: 'Halo de coste amplio',
    labelModelScope: 'Solo España. Régimen General 2026, jornada completa y salario ordinario en dinero. Los resultados son estimaciones orientativas y no constituyen asesoramiento laboral o fiscal.',
    labelReset: 'Restablecer ejemplo',
    labelInvalid: 'Introduce un salario anual a jornada completa válido y mantén los tipos de IRPF y accidentes dentro de los rangos permitidos.',
    labelMinimumSalary: 'El modelo parte del salario mínimo interprofesional a jornada completa de 2026 (17.094 €/año).',
    labelPrivacy: 'Calculado de forma local en tu navegador',
    currencyLocale: 'es-ES',
  },
  seo: [
    { type: 'title', text: 'Del salario bruto al coste real para la empresa en España', level: 2 },
    { type: 'paragraph', html: 'Una oferta salarial tiene tres dimensiones: la cifra bruta fijada en el contrato, el importe neto que percibe el trabajador y el coste total que asume la empresa. Esta calculadora unifica esas capas: a partir del salario bruto estimamos la retención de IRPF, la Seguridad Social del trabajador, las cotizaciones patronales y el coste laboral completo bajo el Régimen General de 2026.' },
    { type: 'title', text: 'Fórmula del coste de empresa', level: 2 },
    { type: 'paragraph', html: 'El coste total para la empresa equivale al salario bruto anual más las cotizaciones patronales a la Seguridad Social. El salario neto estimado se obtiene restando al bruto la Seguridad Social a cargo del empleado y el porcentaje de IRPF. El control del IRPF es manualmente ajustable porque la retención depende de la situación personal y familiar de cada contribuyente.' },
    { type: 'table', headers: ['Capa', 'Cálculo'], rows: [['Salario neto', 'Salario bruto menos Seguridad Social del trabajador menos retención de IRPF'], ['Deducciones del trabajador', 'Seguridad Social del trabajador más retención de IRPF'], ['Cotizaciones patronales', 'Tipos de la Seguridad Social a cargo de la empresa más la tarifa de accidentes seleccionada'], ['Coste total empresa', 'Salario bruto más cotizaciones patronales']] },
    { type: 'title', text: 'Tipos de la Seguridad Social en España para 2026', level: 2 },
    { type: 'paragraph', html: 'En un contrato indefinido, el modelo aplica un 4,70 % al trabajador y un 23,60 % a la empresa por contingencias comunes; un 1,55 % al trabajador y un 5,50 % a la empresa por desempleo; un 0,10 % al trabajador y un 0,60 % a la empresa por formación profesional; un 0,15 % al trabajador y un 0,75 % a la empresa por el MEI; y un 0,20 % a cargo de la empresa para FOGASA. En contratos temporales la cotización de desempleo sube al 1,60 % (trabajador) y 6,70 % (empresa).' },
    { type: 'table', headers: ['Tarifa de accidentes', 'Tipo empresarial'], rows: [['Trabajo exclusivo de oficina', '1,50 %'], ['Agente comercial o ventas', '2,00 %'], ['Trabajos de construcción', '6,70 %']] },
    { type: 'title', text: 'Topes de cotización y cuota de solidaridad en sueldos altos', level: 2 },
    { type: 'paragraph', html: 'La base de cotización máxima en 2026 se sitúa en 5.101,20 € mensuales. Por encima de dicho límite, la calculadora aplica la cotización progresiva de solidaridad en sus tres tramos sobre el exceso de retribución mensual, evitando aplicar el tipo ordinario sobre la totalidad del bruto en salarios elevados.' },
    { type: 'title', text: 'Diferencia entre 12 y 14 pagas', level: 2 },
    { type: 'paragraph', html: 'Modificar el número de pagas no altera el salario bruto anual ni el coste total de la empresa. Únicamente adapta la media mostrada por paga. Dado que las nóminas reales con 14 pagas suelen concentrar la cotización a la Seguridad Social en las 12 mensualidades ordinarias, el promedio que muestra esta herramienta es ideal para comparar ofertas y presupuestos.' },
    { type: 'tip', title: 'Compara ofertas manteniendo los mismos parámetros', html: 'Mantén constantes el tipo de IRPF, la modalidad contractual, el número de pagas y la tarifa de accidentes. Así aislarás el efecto del salario bruto y podrás comparar dos ofertas de empleo o presupuestos de contratación en igualdad de condiciones.' },
    { type: 'title', text: 'Límites del cálculo salarial', level: 2 },
    { type: 'paragraph', html: 'La herramienta está orientada al trabajo a tiempo completo en España dentro del Régimen General para 2026. No contempla bases mínimas por jornada parcial, regímenes forales o especiales, retribución en especie, conceptos exentos, bonificaciones empresariales, trabajo autónomo ni regularizaciones de nómina. Para casos específicos, recurra a un profesional o a su software de nóminas.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
