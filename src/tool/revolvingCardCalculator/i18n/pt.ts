import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calculadora-cartao-revolving';
const title = 'Calculadora de Cartão Revolving e Usura';
const description = 'Simule o tempo e o custo de amortização do seu cartão revolving e analise o risco de juros usurários.';

const faqData = [{ question: 'O que é um cartão revolving?', answer: 'Permite liquidar a dívida em prestações flexíveis.' }];
const howToData = [{ name: 'Selecionar mercado', text: 'Escolha o país ou limite personalizado.' }];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: 'O perigo do crédito revolving' }, { type: 'paragraph', html: 'O cartão de crédito revolving permite liquidar a dívida em prestações.' }],
  ui: {
    title: 'Simulador de Cartão Revolving e Teste de Usura',
    balanceLabel: 'Saldo Devedor',
    creditLimitLabel: 'Limite de Crédito',
    aprLabel: 'Taxa de Juros (TAEG / APR)',
    paymentTypeLabel: 'Modalidade de Pagamento',
    paymentTypeFixed: 'Prestação Fixa Mensal',
    paymentTypePercentage: 'Percentagem sobre o Saldo',
    paymentValueLabel: 'Valor do Pagamento (Montante ou %)',
    minPaymentValueLabel: 'Pagamento Mínimo Exigido',
    currencyLabel: 'Moeda',
    marketLabel: 'Mercado Regulatório / País',
    marketES: 'Espanha (Banco de España)',
    marketUS: 'Estados Unidos (CFPB)',
    marketUK: 'Reino Unido (FCA)',
    marketEU: 'União Europeia (BCE)',
    marketJP: 'Japão (FSA)',
    marketKR: 'Coreia do Sul (FSC)',
    marketCN: 'China (PBOC)',
    marketBR: 'Brasil (Banco Central)',
    marketMX: 'México (Banco de México)',
    marketPL: 'Polónia (KNF)',
    marketID: 'Indonésia (OJK)',
    marketTR: 'Turquia (BRSA)',
    marketRU: 'Rússia (Banco Central)',
    marketSE: 'Suécia (Finansinspektionen)',
    marketAU: 'Austrália (ASIC)',
    marketCA: 'Canadá (FCAC)',
    marketCustom: 'Limite Personalizado',
    customThresholdLabel: 'Limite de Usura Personalizado (TAEG %)',

    resultsTitle: 'Resultados da Amortização',
    totalInterestLabel: 'Total de Juros Pagos',
    totalPaidLabel: 'Total Reembolsado',
    monthsToPayLabel: 'Prazo para Liquidar',
    infiniteDebtWarning: 'Dívida perpétua! O pagamento mensal não cobre os juros.',
    payoffYearsLabel: 'Cronograma de Pagamento',

    usuryTitle: 'Análise de Usura e Conformidade',
    usurySafeStatus: 'Padrão de Mercado (Risco Baixo)',
    usuryWarningStatus: 'Juros Elevados (Risco Médio)',
    usuryUsuriousStatus: 'Potencialmente Usurário (Risco Alto)',
    usuryReferenceLabel: 'TAEG Média do Mercado',
    usuryThresholdLabel: 'Limite Alerta de Usura',

    tableTitle: 'Tabela de Amortização Mensal',
    tableHeaderMonth: 'Mês',
    tableHeaderInitial: 'Saldo Inicial',
    tableHeaderInterest: 'Juros',
    tableHeaderPrincipal: 'Capital Amortizado',
    tableHeaderPayment: 'Prestação',
    tableHeaderFinal: 'Saldo Final',

    copyTooltip: 'Copiar Relatório',
    copiedLabel: 'Relatório Copiado!',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
