import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'calculadora-taxas-judiciais-espanha';
const title = 'Calculadora de Taxas Judiciais Espanha';
const description = 'Calcule o valor exato das taxas judiciais espanholas para empresas segundo a Lei 10/2012. Simulador para o Modelo 696.';

const faqData = [
  {
    question: 'Os particulares estão isentos de pagar taxas judiciais?',
    answer: 'Sim, desde 2016 as pessoas físicas estão totalmente isentas do pagamento de taxas judiciais em Espanha em todas as instâncias jurisdicionais.',
  },
  {
    question: 'Qual é o valor máximo da taxa judicial?',
    answer: 'A quota variável está limitada a um máximo de 10.000 euros. Somando a quota fixa, o total máximo pode ser superior dependendo do tipo de procedimento.',
  },
  {
    question: 'O que é o Modelo 696?',
    answer: 'É o formulário oficial da Agência Tributária espanhola (AEAT) utilizado para a autoliquidação da taxa pela atividade jurisdicional.',
  },
  {
    question: 'Paga-se taxa na esfera penal?',
    answer: 'Não, em Espanha não existem taxas judiciais para os processos na esfera penal.',
  },
  {
    question: 'Como se calcula a quota variável?',
    answer: 'A quota variável é 0,5% do valor do litígio até 1 milhão de euros. A partir daí, é 0,25%. O máximo é 10.000 euros.',
  },
];

const howToData = [
  {
    name: 'Selecione o sujeito passivo',
    text: 'Indique se é pessoa física (isento) o jurídica (empresa).',
  },
  {
    name: 'Escolha a jurisdição e o processo',
    text: 'Selecione a ordem jurisdicional (Civil, Contencioso-Administrativa ou Social) e o tipo de procedimento.',
  },
  {
    name: 'Introduza o valor do litígio',
    text: 'Escreva o valor total reclamado na petição. Para a esfera social, este campo não se aplica.',
  },
  {
    name: 'Visualize o detalhamento',
    text: 'Obtenha o cálculo automático com quota fixa, variável e total para o Modelo 696.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Calculadora de Taxas Judiciais Espanha 2026: Guia Completo',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'A <strong>Calculadora de Taxas Judiciais</strong> é uma ferramenta técnica concebida para determinar com precisão o custo fiscal da atividade jurisdicional em Espanha segundo a Lei 10/2012.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes': 'Fontes e Referências',
  ui: {
    labelTitle: 'Calculadora de Taxas Judiciais',
    labelDescription: 'Calcule o valor exato do Modelo 696 por jurisdição e procedimento. Para empresas e profissionais.',
    labelLegalParameters: 'Parâmetros Legais',
    labelEntityType: 'Sujeito Passivo',
    labelJurisdiction: 'Jurisdição',
    labelProcedure: 'Tipo de Processo',
    labelClaimAmount: 'Valor do Litígio',
    labelEstimatedSettlement: 'Liquidação Estimada',
    labelExemptSubject: 'Sujeito Isento',
    labelFixedQuote: 'Quota Fixa (Processual)',
    labelVariableQuote: 'Quota Variável (0,5% / 0,25%)',
    labelTaxableBase: 'Base Tributável',
    labelCopySettlement: 'Copiar Liquidação',
    labelEntityJuridica: 'Pessoa Jurídica (Lda, S.A.)',
    labelEntityFisica: 'Pessoa Física (Isento)',
    labelCivilOrder: 'Ordem Civil',
    labelAdministrativeOrder: 'Contencioso-Administrativa',
    labelSocialOrder: 'Ordem Social',
    labelModel696: 'Modelo 696 AEAT',
    labelOrdinary: 'Processo Ordinário',
    labelVerbal: 'Processo Verbal',
    labelExecutive: 'Executivo',
    labelAppeal: 'Apelação',
    labelCassation: 'Cassação',
    labelAbbreviated: 'Abreviado',
    labelSupplication: 'Súplica',
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
