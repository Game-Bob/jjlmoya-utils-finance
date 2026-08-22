import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "calculadora-salario-bruto-liquido-custo-empresa-espanha";
const title = "Calculadora de Salário Bruto, Líquido e Custo Empresa em Espanha 2026";
const description = "Calcule o salário líquido, retenção de IRPF, contribuições do trabalhador e o custo total da empresa em Espanha sob as regras de 2026.";

const faq = [
  {
    "question": "Quanto custa um trabalhador a uma empresa em Espanha?",
    "answer": "A empresa paga o salário bruto mais as suas contribuições para a Segurança Social."
  },
  {
    "question": "Como calcular o salário bruto para líquido em Espanha?",
    "answer": "Subtraia ao bruto anual a Segurança Social do trabalhador e a retenção de IRPF."
  },
  {
    "question": "Escolher 12 ou 14 pagamentos altera o salário anual?",
    "answer": "Não. A calculadora mantém o mesmo valor bruto anual."
  },
  {
    "question": "Que taxas da Segurança Social para 2026 estão incluídas?",
    "answer": "Inclui contingências comuns, desemprego, formação, MEI, FOGASA e acidentes de trabalho."
  },
  {
    "question": "O que acontece acima da base máxima de contribuição?",
    "answer": "Acima do limite máximo mensal de 2026 (5.101,20 €) aplica-se a contribuição de solidariedade."
  },
  {
    "question": "Esta calculadora é válida fora de Espanha?",
    "answer": "Não. Está limitada ao sistema espanhol de 2026."
  },
  {
    "question": "Os dados salariais são enviados para algum servidor?",
    "answer": "Não. Todos os cálculos são feitos localmente no navegador."
  }
];

const howTo = [
  {
    "name": "Insira o salário bruto",
    "text": "Escolha a opção anual ou mensal e introduza o valor bruto."
  },
  {
    "name": "Configure as condições espanholas",
    "text": "Selecione 12/14 pagamentos, tipo de contrato, IRPF e prémio de acidentes."
  },
  {
    "name": "Consulte a estrutura do salário",
    "text": "Compare o salário líquido, deduções do trabalhador e contribuição patronal."
  },
  {
    "name": "Altere o período de exibição",
    "text": "Visualize os totais anuais ou a média por pagamento."
  }
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
  inLanguage: "pt",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Sinal de salário bruto",
    "labelGrossSalaryHint": "Valor do salário",
    "labelAnnual": "Anual",
    "labelMonthly": "Mensal",
    "labelPaySchedule": "Calendário de pagamentos",
    "labelTwelvePayments": "12 pagamentos",
    "labelFourteenPayments": "14 pagamentos",
    "labelContract": "Tipo de contrato",
    "labelPermanent": "Sem termo (Indefinido)",
    "labelTemporary": "A termo (Temporário)",
    "labelIrpfRate": "Retenção de IRPF",
    "labelIrpfHint": "Use a taxa da Autoridade Tributária, oferta ou recibo de vencimento",
    "labelRiskRate": "Prémio de acidentes de trabalho (AT e EP)",
    "labelRiskHint": "Taxa patronal para acidentes de trabalho e doenças profissionais",
    "labelOfficePreset": "Escritório 1,50%",
    "labelTradePreset": "Comercial / Vendas 2,00%",
    "labelConstructionPreset": "Construção 6,70%",
    "labelNetCore": "Núcleo do salário líquido",
    "labelEmployeeDeductions": "Deduções do trabalhador",
    "labelDeductionsFormula": "IRPF mais Segurança Social do trabalhador",
    "labelEmployerHalo": "Halo de contribuição patronal",
    "labelEmployerCost": "Custo total da empresa",
    "labelAnnualView": "Vista anual",
    "labelPerPaymentView": "Média por pagamento",
    "labelGross": "Salário bruto",
    "labelIrpf": "Retenção IRPF",
    "labelEmployeeSocialSecurity": "Segurança Social do trabalhador",
    "labelContributionBase": "Base mensal de tributação",
    "labelCostMultiplier": "Multiplicador de custo face ao bruto",
    "labelWorkerKeeps": "Percentagem líquida do custo total",
    "labelLeanGap": "Halo de custo reduzido",
    "labelTypicalGap": "Halo de custo habitual",
    "labelWideGap": "Halo de custo alargado",
    "labelModelScope": "Apenas Espanha. Regime Geral 2026, tempo inteiro e salário em dinheiro. Os resultados são estimativas.",
    "labelReset": "Restabelecer exemplo",
    "labelInvalid": "Insira um salário bruto anual válido e mantenha as taxas dentro dos limites.",
    "labelMinimumSalary": "O modelo parte do salário mínimo interprofissional espanhol de 2026 (17.094 €/ano).",
    "labelPrivacy": "Calculado localmente no seu navegador"
},
  seo: [
    { type: 'title', text: "Do salário bruto ao custo real da empresa em Espanha", level: 2 },
    { type: 'paragraph', html: "Calcule o salário líquido, retenção de IRPF, contribuições do trabalhador e o custo total da empresa em Espanha sob as regras de 2026." },
    { type: 'title', text: "Fórmula do custo patronal em Espanha", level: 2 },
    { type: 'paragraph', html: "A empresa paga o salário bruto mais as suas contribuições para a Segurança Social." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Núcleo do salário líquido"], ['Employer Cost', "Custo total da empresa"]] },
    { type: 'title', text: "Taxas da Segurança Social espanhola para 2026", level: 2 },
    { type: 'paragraph', html: "Inclui contingências comuns, desemprego, formação, MEI, FOGASA e acidentes de trabalho." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Escritório 1,50%", '1.50%'], ["Comercial / Vendas 2,00%", '2.00%'], ["Construção 6,70%", '6.70%']] },
    { type: 'title', text: "Tectos de contribuição e salários elevados", level: 2 },
    { type: 'paragraph', html: "Acima do limite máximo mensal de 2026 (5.101,20 €) aplica-se a contribuição de solidariedade." },
    { type: 'title', text: "Diferença entre 12 e 14 pagamentos", level: 2 },
    { type: 'paragraph', html: "Não. A calculadora mantém o mesmo valor bruto anual." },
    { type: 'tip', title: "Calendário de pagamentos", html: "Selecione 12/14 pagamentos, tipo de contrato, IRPF e prémio de acidentes." },
    { type: 'title', text: "Limites desta estimativa salarial espanhola", level: 2 },
    { type: 'paragraph', html: "Apenas Espanha. Regime Geral 2026, tempo inteiro e salário em dinheiro. Os resultados são estimativas." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
