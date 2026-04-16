import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'calculadora-juros-mora-espanha';
const title = 'Calculadora de Juros de Mora e Legais Espanha 2026';
const description =
  'Calcule juros de mora tributários (Hacienda) e legais por falta de pagamento em Espanha. Simulador atualizado para 2025 e 2026.';

const faqData = [
  {
    question: 'O que são juros de mora?',
    answer:
      'É o juro cobrado sobre uma quantia não paga no prazo estabelecido. Aplica-se sobre a dívida original e acumula-se até que se realize o pagamento total.',
  },
  {
    question: 'Qual é a diferença entre juro simples e composto?',
    answer:
      'O juro simples calcula-se apenas sobre o capital original todos os dias. O composto calcula-se sobre o capital mais os juros acumulados, gerando um crescimento mais rápido da dívida.',
  },
  {
    question: 'Como se calcula o juro diário?',
    answer:
      'Divide-se a taxa anual por 365 dias e aplica-se ao capital original. Por exemplo, 10% anual = 0,0274% diário.',
  },
  {
    question: 'Que taxa de juro de mora devo aplicar?',
    answer:
      'Depende da legislação local e dos termos do contrato. Em Espanha, a Lei da Morosidade estabelece taxas máximas. Consulte um assessor legal para o seu caso específico.',
  },
  {
    question: 'Posso usar esta calculadora para dívidas legais?',
    answer:
      'Esta é uma ferramenta informativa. Para dívidas reais, verifique os termos contratuais e a legislação local. Consulte um advogado em caso de dúvida.',
  },
];

const howToData = [
  {
    name: 'Escolha o tipo de cálculo',
    text: 'Selecione entre juro simples, composto ou mensal conforme a sua situação.',
  },
  {
    name: 'Introduza os dados',
    text: 'Insira o montante original, a taxa de juro e o período de demora.',
  },
  {
    name: 'Obtenha o resultado',
    text: 'A calculadora mostra o juro diário acumulado, o total gerado, o montante final e a taxa efetiva.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes e Referências',
  bibliography: [
    {
      name: 'Lei 3/2004 de Luta contra a Morosidade (Espanha)',
      url: 'https://www.boe.es/',
    },
    {
      name: 'Banco de España: Taxas de Juro',
      url: 'https://www.bde.es/',
    },
    {
      name: 'Cálculo de Juros Compostos',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Juros de Mora e Legais: Guia Completo Espanha',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No complexo sistema legal e fiscal de Espanha, o decurso do tempo perante uma dívida não é gratuito. O <strong>juro de mora</strong> e o <strong>juro legal do dinheiro</strong> são os mecanismos que a lei utiliza para compensar o prejuízo causado pelo atraso no cumprimento de uma obrigação pecuniária. Seja uma dívida com o fisco (<strong>Hacienda</strong>), um falta de pagamento entre empresas ou uma reclamação judicial, entender como se vencem estes juros é fundamental.',
    },
    {
      type: 'title',
      text: 'O que é o Juro Legal do Dinheiro?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O juro legal do dinheiro é o acréscimo que se aplica a uma dívida quando as partes não pactuaram um juro específico ou quando a lei assim o determina. Para os anos <strong>2024, 2025 e 2026</strong>, este tipo de juro manteve-se estável nos <strong>3,25%</strong>. Esta percentagem serve como base para vários cálculos legais.',
    },
    {
      type: 'title',
      text: 'O Juro de Mora Tributário (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando a dívida é com a Administração Pública, o <strong>juro de mora tributário</strong> é superior ao juro legal para desincentivar o atraso no pagamento de impostos. Para o período <strong>2024-2026</strong>, foi fixado em <strong>4,0625%</strong>. Este é o encargo que o fisco lhe cobrará se apresentar uma autoliquidação fora do prazo.',
    },
    {
      type: 'tip',
      title: 'Caráter Indemnizatório, não Punitivo',
      html: '<p><strong>Dado chave:</strong> Ao contrário das sanções, os juros de mora têm caráter indemnizatório, não punitivo. O fisco não o „castiga” com eles, mas cobra-lhe pelo tempo em que dispôs de dinheiro que deveria estar nos cofres públicos.</p>',
    },
    {
      type: 'title',
      text: 'Como Calcular os Juros Passo a Passo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O cálculo destes juros segue uma fórmula de juro simples, onde o tempo se conta em dias naturais: <strong>Juros = (Capital × Dias × Taxa de Juro) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Principal:</strong> A quantia total da dívida original.',
        '<strong>Dias:</strong> O número de dias decorridos desde o dia seguinte ao vencimento até ao dia do pagamento efetivo.',
        '<strong>Taxa de Juro:</strong> A percentagem anual aplicável (Ex: 3,25 ou 4,0625).',
        '<strong>36.500:</strong> O fator divisor para converter a percentagem anual em diária (365 dias x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Exemplo Prático: Dívida com o Fisco',
      html: '<p>Imagine que deve 5.000 € de uma declaração que venceu há 180 dias:</p><ul><li>Juro aplicável (Mora): 4,0625%</li><li>Cálculo: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Juros resultantes:</strong> 100,17 €</li><li>Total a pagar: 5.100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Diferenças Segundo o Tipo de Dívida',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dívidas Civis:</strong> Entre particulares, aplica-se os 3,25% (legal).',
        '<strong>Dívidas Mercantis:</strong> Regem-se pela Lei de Luta contra a Morosidade, atingindo os 10,15% - 11,15% em 2025-2026.',
        '<strong>Dívidas com a Segurança Social:</strong> Aplicam os 4,0625% mais encargos de 10% a 20%.',
        '<strong>Juros Processuais:</strong> Quando há sentença judicial, os 5,25% desde a data da sentença.',
      ],
    },
    {
      type: 'title',
      text: 'Juros em Operações Comerciais: Cuidado com os 60 Dias!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se é trabalhador por conta própria ou empresa, a Lei espanhola 3/2004 estabelece um prazo máximo de pagamento de 60 dias. Se o seu cliente passar dessa data, pode exigir o juro de mora comercial de forma automática, sem necessidade de aviso, e ainda cobrar uma quantia fixa de 40 € por custos de cobrança.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Juros de Mora',
    labelSimpleTitle: 'Simples',
    labelCompoundTitle: 'Composto',
    labelMonthlyTitle: 'Mensal',
    labelSimpleQuestion: 'Calcular com juro simples',
    labelCompoundQuestion: 'Calcular com juro composto',
    labelMonthlyQuestion: 'Calcular com períodos mensais',
    labelPrincipal: 'Montante Original',
    labelAnnualRate: 'Taxa Anual',
    labelDays: 'Dias de Atraso',
    labelMonths: 'Meses de Atraso',
    labelMonthlyRate: 'Taxa Mensual',
    labelDailyInterest: 'Juro Diário',
    labelTotalInterest: 'Juro Total',
    labelTotalAmount: 'Montante Total a Pagar',
    labelEffectiveRate: 'Taxa Efetiva',
    labelCopyTooltip: 'Copiar resultado',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Fórmula aplicada',
    reportTitle: 'RELATÓRIO DE CÁLCULO DE JUROS',
    reportLabelPrincipal: 'Principal',
    reportLabelType: 'Tipo',
    reportLabelPeriod: 'Período',
    reportLabelDays: 'Dias decorridos',
    reportLabelInterest: 'JUROS VENCIDOS',
    reportLabelTotal: 'TOTAL A LIQUIDAR',
    reportDaysSuffix: 'dias',
    formulaDescription: 'Este cálculo utiliza as taxas vigentes. Se o período abranger anos anteriores com taxas diferentes, o cálculo real deve ser fracionado por períodos.',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
};
