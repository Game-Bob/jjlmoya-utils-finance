import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'juro-legal-dinheiro-espanha-2026';
const title = 'Juro Legal do Dinheiro';
const description = 'Calcule o juro legal aplicável em Espanha para 2026. Simulador com taxa de 3,25% conforme a Lei de Orçamento.';

const faqData = [
  {
    question: 'Qual é o juro legal do dinheiro em 2026?',
    answer: 'O juro legal do dinheiro mantém se nos 3,25% para o exercício de 2026, fixado pela Lei de Orçamento Geral do Estado espanhol.',
  },
  {
    question: 'Como se calcula o juro de mora?',
    answer: 'O juro de mora calcula-se multiplicando o capital em dívida pelos 3,25% e pelo número de dias de atraso, dividindo por 36.500. Utiliza-se a base de 365 dias.',
  },
  {
    question: 'Qual é a diferença entre juro legal e juro de mora?',
    answer: 'O juro legal é a taxa base de referência. O juro de mora tributário (Hacienda) é de 4,0625%. O juro para operações comerciais (aprox. 10,15%) é o mais alto.',
  },
  {
    question: 'Aplica-se automaticamente sem cláusula contratual?',
    answer: 'Sim, o juro legal aplica-se por defeito quando há atraso no pagamento e não foi pactuado outro juro.',
  },
  {
    question: 'O que é o juro processual?',
    answer: 'O juro processual é de 5,25% (juro legal mais 2 pontos) aplicado desde que é proferida uma sentença de condenação ao pagamento de quantia em dinheiro.',
  },
];

const howToData = [
  {
    name: 'Introduza o capital em dívida',
    text: 'Escreva a quantia sobre a qual precisa de calcular os juros (ex: uma fatura por pagar).',
  },
  {
    name: 'Especifique os dias de atraso',
    text: 'Indique quantos dias durou ou durará a falta de pagamento. Base de 365 dias.',
  },
  {
    name: 'Visualize o resultado',
    text: 'Obtenha automaticamente o montante de juros gerados e o total a pagar aos 3,25%.',
  },
  {
    name: 'Consulte outras taxas',
    text: 'Observe as taxas de referência como a mora tributária (4,06%) para contexto adicional.',
  },
];

const bibliographyData = [
  {
    name: 'Lei de Orçamento Geral do Estado (Espanha) 2026',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Código Civil Espanhol - Art. 1108 e seguintes',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Lei 3/2004 de Luta contra a Morosidade',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Juro Legal 2026 Espanha - Calculadora',
  },
  {
    type: 'paragraph',
    html: 'O <strong>juro legal 2026</strong> é de <strong>3,25%</strong> em Espanha. Aplica-se automaticamente em caso de atraso no pagamento se não houver outro acordo.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Fontes Legais',
  ui: {
    labelTitle: 'Taxa de Juro Legal',
    labelDescription: 'Calcule o montante dos juros legais conforme a Lei de Orçamento 2026. Simulador a 3,25% para Espanha.',
    labelBadge: 'Boletim Oficial do Estado 2026',
    labelSubtitle: 'O juro legal do dinheiro mantém se em 3,25% para 2026.',
    labelLegalInterest: 'Juro Legal',
    labelDelayInterest: 'Juro de Mora',
    labelCommercialOperations: 'Operações Comerciais',
    labelActive: 'Vigente em 2026',
    labelTributary: 'Tributário (Hacienda)',
    labelFirstHalf: 'Primeiro Semestre 2026',
    labelQuickCalculator: 'Calculadora Rápida de Juros (3,25%)',
    labelCapital: 'Capital em Dívida',
    labelDays: 'Dias de Atraso',
    labelInterestGenerated: 'Juros Gerados',
    labelTotalToPay: 'Total a Pagar',
    labelFormula: 'Esta calculadora aplica a fórmula padrão de juro simples:',
    labelBase: 'Utiliza-se uma base de 365 dias para o cálculo oficial segundo a norma espanhola.',
    labelOfficialRegulation: 'Regulação Oficial',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
