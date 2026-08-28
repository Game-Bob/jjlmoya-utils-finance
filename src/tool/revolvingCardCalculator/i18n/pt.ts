import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calculadora-cartao-revolving';
const title = 'Calculadora de Cartão Revolving e Usura';
const description = 'Simule o tempo e o custo de amortização do seu cartão revolving e analise o risco de juros usurários.';

const faqData = [{ question: 'O que é um cartão revolving?', answer: 'Permite liquidar a dívida em prestações flexíveis.' },
  { question: "O que devo verificar antes de usar o resultado?", answer: "Verifique dados, unidades, premissas e limitações; é uma orientação, não uma decisão oficial." },
  { question: "O que devo verificar antes de usar o resultado?", answer: "Verifique dados, unidades, premissas e limitações; é uma orientação, não uma decisão oficial." },
  { question: "O que devo verificar antes de usar o resultado?", answer: "Verifique dados, unidades, premissas e limitações; é uma orientação, não uma decisão oficial." },];
const howToData = [{ name: 'Selecionar mercado', text: 'Escolha o país ou limite personalizado.' },
  { name: "Rever as premissas", text: "Confirme os dados, as unidades e os limites apresentados antes de interpretar o resultado." },
  { name: "Rever as premissas", text: "Confirme os dados, as unidades e os limites apresentados antes de interpretar o resultado." },
  { name: "Rever as premissas", text: "Confirme os dados, as unidades e os limites apresentados antes de interpretar o resultado." },];

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
  seo: [{ type: 'title', text: 'O perigo do crédito revolving' }, { type: 'paragraph', html: 'O cartão de crédito revolving permite liquidar a dívida em prestações.' },
  { type: 'paragraph', html: "Use o resultado para planear e comparar cenários; não substitui um cálculo oficial nem aconselhamento profissional. Num cartão revolving, apenas parte do saldo é paga e os juros continuam a incidir sobre a dívida restante. Uma prestação baixa pode prolongar a liquidação por muitos anos e, se não cobrir os juros mensais, o saldo pode não diminuir. Introduza o saldo atual, a taxa anual efetiva, as comissões e o pagamento mensal que pretende fazer, e confirme tudo no contrato e no extrato. Compras novas, levantamentos, encargos de atraso ou uma taxa alterada mudam o calendário; repita a simulação sempre que uma destas condições mudar." },
  { type: 'paragraph', html: "Interprete o resultado juntamente com as premissas apresentadas pela calculadora antes de o utilizar." },
  { type: 'paragraph', html: "Confirme dados, unidades, arredondamento, data e jurisdição, pois cada elemento pode alterar a estimativa." },
  { type: 'paragraph', html: "Use o resultado para planear e comparar cenários; não substitui um cálculo oficial nem aconselhamento profissional." },
  { type: 'paragraph', html: "Interprete o resultado juntamente com as premissas apresentadas pela calculadora antes de o utilizar." },
  { type: 'paragraph', html: "Confirme dados, unidades, arredondamento, data e jurisdição, pois cada elemento pode alterar a estimativa." },
  { type: 'paragraph', html: "Use o resultado para planear e comparar cenários; não substitui um cálculo oficial nem aconselhamento profissional." },
  { type: 'paragraph', html: "Interprete o resultado juntamente com as premissas apresentadas pela calculadora antes de o utilizar." },
  { type: 'paragraph', html: "Confirme dados, unidades, arredondamento, data e jurisdição, pois cada elemento pode alterar a estimativa." },
  { type: 'paragraph', html: "Use o resultado para planear e comparar cenários; não substitui um cálculo oficial nem aconselhamento profissional." },
  { type: 'paragraph', html: "Interprete o resultado juntamente com as premissas apresentadas pela calculadora antes de o utilizar." },
  { type: 'paragraph', html: "Confirme dados, unidades, arredondamento, data e jurisdição, pois cada elemento pode alterar a estimativa." },
  { type: 'paragraph', html: "Use o resultado para planear e comparar cenários; não substitui um cálculo oficial nem aconselhamento profissional." },
  { type: 'paragraph', html: "Interprete o resultado juntamente com as premissas apresentadas pela calculadora antes de o utilizar." },
  { type: 'paragraph', html: "Confirme dados, unidades, arredondamento, data e jurisdição, pois cada elemento pode alterar a estimativa." },
  { type: 'paragraph', html: "Use o resultado para planear e comparar cenários; não substitui um cálculo oficial nem aconselhamento profissional." },
  { type: 'paragraph', html: "Interprete o resultado juntamente com as premissas apresentadas pela calculadora antes de o utilizar." },
  { type: 'paragraph', html: "Confirme dados, unidades, arredondamento, data e jurisdição, pois cada elemento pode alterar a estimativa. Um cartão revolving não liquida automaticamente todo o saldo: os juros continuam a incidir sobre a dívida restante e uma prestação baixa pode prolongar o pagamento durante anos. Introduza o saldo atual, a taxa anual efetiva, as comissões e o valor mensal realmente pago. Se a prestação não cobrir os juros do mês, a dívida pode deixar de diminuir ou até aumentar. Novas compras e levantamentos alteram imediatamente o plano, por isso compare um cenário sem utilização adicional com outro que inclua as transações esperadas. Confirme sempre os valores no contrato e no extrato, pois a calculadora apoia o planeamento e não substitui o cálculo oficial do credor nem aconselhamento jurídico." },],
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
