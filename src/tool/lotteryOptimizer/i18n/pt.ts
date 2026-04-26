import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'otimizador-loterias-calculadora-probabilidades';
const title = 'Otimizador de Loterias e Calculadora de Probabilidades';
const description = 'Analise as suas probabilidades na Lotaria de Natal, Euromilhões e Bonoloto. Calcule o número ideal de décimos e o valor esperado da sua aposta.';

const faqData = [
  {
    question: 'O que é a esperança matemática na lotaria?',
    answer: 'É o valor médio que espera ganhar por cada euro apostado. Em quase todas as lotarias, a esperança matemática é negativa (normalmente perde 0,50€ por cada 1€ jogado), o que significa que, a longo prazo, o sistema ganha sempre.',
  },
  {
    question: 'É melhor jogar muitos números ou muitos décimos do mesmo?',
    answer: 'Se procura ganhar "algo", diversificar números aumenta a sua probabilidade de obter prémios menores. Se procura o prémio gordo, jogar um só número dá-lhe a mesma probabilidade, mas maior prémio se ganhar.',
  },
  {
    question: 'Vale mesmo a pena jogar na Lotaria de Natal espanhola?',
    answer: 'De um ponto de vista puramente matemático, não. É devolvido apenas 70% do arrecadado. No entanto, tem uma probabilidade de prémio gordo (1 em 100.000) muito mais alta do que o Euromilhões (1 em 140 milhões).',
  },
  {
    question: 'Posso melhorar as minhas chances com estatísticas?',
    answer: 'Não. Os sorteios de lotaria são processos aleatórios independentes. O facto de um número ter saído ontem não influencia em nada a sua saída hoje.',
  },
  {
    question: 'O que significa a "dificuldade" na tabela comparativa?',
    answer: 'É uma medida relativa de quão difícil é ganhar o primeiro prémio. Acessível (menos de 200k), Difícil (menos de 20M), Extrema (mais de 20M).',
  },
];

const howToData = [
  {
    name: 'Selecionar o tipo de sorteio',
    text: 'Escolha entre a Lotaria de Natal, Primitiva, Euromilhões ou Bonoloto para analisar as suas regras específicas.',
  },
  {
    name: 'Definir o seu investimento',
    text: 'Indique quantos décimos ou apostas planeia comprar para este sorteo.',
  },
  {
    name: 'Analisar probabilidades críticas',
    text: 'Observe as possibilidades reais de ganhar o primeiro prémio frente a prémios menores ou o reembolso.',
  },
  {
    name: 'Avaliar o risco/benefício',
    text: 'Reveja a esperança matemática para entender quanto dinheiro está estatisticamente a "dar" por cada euro investido.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'A Matemática da Esperança',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Jogar na lotaria é, para muitos, a compra de uma ilusão por alguns euros. No entanto, por trás dos sorteios reside uma das áreas mais fascinantes da matemática: a estatística de probabilidades extremas.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Lotaria de Natal (El Gordo)',
    description: 'A maior distribuição de prémios do mundo. Probabilidade alta de ganhar algo.',
  },
  nino: {
    name: 'Lotaria do Menino (El Niño)',
    description: 'Triplica as possibilidades de reembolso em relação ao Natal.',
  },
  euromillones: {
    name: 'Euromilhões',
    description: 'Prémios astronómicos, probabilidades quase impossíveis.',
  },
  primitiva: {
    name: 'A Primitiva',
    description: 'A lotaria mais antiga de Espanha. Difícil mas mais barata.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'A mais económica. Ideal para jogar diariamente com pouco orçamento.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    gameTranslations,
    labelTitle: 'Otimizador de Loterias',
    labelDescription: 'Compare sorteios, calcule a sua esperança matemática e jogue com cabeça.',
    labelSelectGame: 'Selecione uma lotaria',
    labelConfigurePlay: 'Configure a sua jogada',
    labelAdjustQuantity: 'Ajuste a quantidade de participações para ver a sua probabilidade real.',
    labelTotalInvestment: 'Investimento Total',
    labelTickets: 'Quantidade de Décimos / Apostas',
    labelUnits: 'unidades',
    labelExposureAnalysis: 'Análise de Exposição',
    labelSelectLottery: 'Selecione uma lotaria para ver a análise de risco.',
    labelOptimalCutoff: 'Ponto de Corte Sugerido',
    labelProbabilitySuccess: 'Probabilidade de Sucesso',
    labelExpectedValue: 'Valor Esperado (EV)',
    labelReturnTheoretical: 'Retorno teórico por cada jogada realizada.',
    labelSocialReturnIndex: 'Índice de Rentabilidade Social',
    labelLow: 'Baixa',
    labelMedium: 'Média',
    labelHigh: 'Alta',
    labelComparison: 'Comparação de Prémios',
    labelLottery: 'Lotaria',
    labelCost: 'Custo',
    labelTypicalPrize: 'Prémio Típico',
    labelDifficulty: 'Dificuldade',
    labelAccessible: 'Acessível',
    labelDifficult: 'Difícil',
    labelExtreme: 'Extrema',
    labelNote: 'Nota: Os prémios de Natal e El Niño são por décimo (20€). Euromilhões, etc. são jackpots típicos.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
