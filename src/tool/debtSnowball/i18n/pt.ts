import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'metodo-bola-de-neve-calculadora-dividas';
const title = 'Calculadora Método Bola de Neve: Plano de Pagamento de Dívidas 2026';
const description = 'Calcule a sua data de liberdade financeira com o método bola de neve. Organize as suas dívidas e visualize o seu plano de pagamentos mensal gratuito.';

const faqData = [
  {
    question: 'O que é o método da bola de neve?',
    answer: 'É uma estratégia de pagamento de dívidas que consiste em pagar as dívidas por ordem do menor para o maior saldo, independentemente da taxa de juro. Foca-se na vitória psicológica de eliminar pequenas contas rapidamente.',
  },
  {
    question: 'Porquê não ordenar pela taxa de juro (Avalanche)?',
    answer: 'Matematicamente, pagar primeiro o juro mais alto poupa mais dinheiro. No entanto, muitas pessoas desistem porque não veem resultados imediatos. A Bola de Neve prioriza a motivação.',
  },
  {
    question: 'Devo ter poupanças antes de começar o plano?',
    answer: 'Recomenda-se ter um "Fundo de Emergência Inicial" (cerca de 1.000€) antes de atacar as dívidas. Isto evita que tenha de voltar a usar o cartão de crédito em caso de imprevistos.',
  },
  {
    question: 'Que dívidas devo incluir na calculadora?',
    answer: 'Todas as dívidas de consumo: cartões de crédito, empréstimos pessoais, créditos automóveis, faturas em atraso. A hipoteca costuma ser deixada para uma fase posterior.',
  },
];

const howToData = [
  {
    name: 'Liste as suas dívidas',
    text: 'Aponte todas as suas dívidas indicando o saldo em dívida e o pagamento mínimo mensal.',
  },
  {
    name: 'Defina o seu orçamento extra',
    text: 'Calcule quanto dinheiro adicional pode destinar cada mês além dos pagamentos mínimos.',
  },
  {
    name: 'Ordene e priorize',
    text: 'A calculadora ordenará automaticamente do menor para o maior saldo. Pague o mínimo em todas exceto na mais pequena.',
  },
  {
    name: 'Execute a cascata',
    text: 'Quando liquidar a dívida mais pequena, pegue em todo o dinheiro que destinava a ela e some-o ao pagamento da dívida seguinte.',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Dívida Método Bola de Neve: Guia 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viver com dívidas é difícil. O <strong>método da bola de neve</strong> tem demonstrado ser uma das estratégias mais eficazes para recuperar a liberdade financeira.',
    },
  ],
  ui: {
    labelTitle: 'Liberdade total',
    labelDescription: 'Inicie o seu caminho para a liberdade financeira com o método psicologicamente mais eficaz.',
    labelExtraBudget: 'ORÇAMENTO EXTRA MENSAL',
    labelExtraBudgetHelp: 'Dinheiro adicional além dos pagamentos mínimos.',
    labelSnowballMethod: 'BOLA DE NEVE',
    labelAvalancheMethod: 'AVALANCHE',
    labelAddNewDebt: 'ADICIONAR NOVA DÍVIDA',
    labelDebtName: 'Nome',
    labelDebtNamePlaceholder: 'Ex: Visa',
    labelDebtBalance: 'QUANTO DEVE',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'PAGAMENTO MÍNIMO',
    labelInterestRate: 'TAXA DE JURO',
    labelInterestHelp: 'ANUAL',
    labelAddButton: 'ADICIONAR AO PLANO',
    labelClearData: 'Limpar definições',
    labelClearDataConfirm: 'Esvaziar plano?',
    labelDeleteDebt: 'Eliminar',
    labelDebtInventory: 'Inventário de Dívidas',
    labelFreedomDate: 'DATA DE LIBERDADE FINANCEIRA',
    labelActiveMethod: 'MÉTODO',
    labelMonthsRemaining: 'MESES RESTANTES',
    labelTotalInterest: 'JUROS TOTAIS',
    labelTotalPaid: 'PAGAMENTO TOTAL FINAL',
    labelInterestSaved: 'JUROS POUPADOS',
    labelYourStrategy: 'A sua estratégia passo a passo',
    labelStrategyHelp: 'Cada passo mostra o seu pagamento total.',
    labelPriority: 'PRIORIDADE MÁXIMA',
    labelStep: 'PASSO',
    labelAfterPaying: 'APÓS LIQUIDAR ANTERIOR',
    labelMonthlyPayment: 'Pagamento mensal',
    labelDetailedAmortization: 'Amortização Detalhada',
    labelExportCSV: 'Exportar .CSV',
    labelDate: 'Data',
    labelStartingBalance: 'Saldo Inicial',
    labelInterest: 'Juro',
    labelAmortization: 'Amortizado',
    labelTotalMonth: 'Total Mês',
    labelRemaining: 'Restante',
    labelFree: 'LIVRE',
    labelDebtInfinite: 'DÍVIDA INFINITA',
    labelInvalidInput: 'Indique saldo total e pagamento mínimo',
    labelEmptyStateTitle: 'Comece o seu plano',
    labelEmptyStateDescription: 'As suas dívidas não são para sempre. Adicione as suas dívidas.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
};
