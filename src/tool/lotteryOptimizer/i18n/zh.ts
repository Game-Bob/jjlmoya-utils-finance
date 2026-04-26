import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'spain-lottery-optimizer';
const title = '彩票优化器及概率计算器';
const description = '分析您在西班牙圣诞彩票、欧洲百万彩 (Euromillions) 和 Bonoloto 中的中奖概率。计算最佳购买张数及投注的预期价值。';

const faqData = [
  {
    question: '什么是彩票中的数学期望？',
    answer: '它是您每投入一欧元预期能赢回的平均金额。在几乎所有彩票中，数学期望都是负数（通常每投入 1 欧元会亏损 0.50 欧元），这意味着从长远来看，庄家总是赢家。',
  },
  {
    question: '是买很多不同的号码好，还是买很多张同一个号码好？',
    answer: '如果您是为了中“点儿什么”，分散号码会增加您获得小奖的概率。如果您是为了头奖，买一个号码和多个号码对头奖的概率是一样的，但如果中了，奖金会更高。',
  },
  {
    question: '玩西班牙圣诞彩票 (El Gordo) 真的划算吗？',
    answer: '从纯数学的角度来看，不划算。只有 70% 的资金被用于派奖。但是，它的头奖中奖概率（1/100,000）比欧洲百万彩（1/1.4 亿）要高得多。',
  },
  {
    question: '我可以通过统计数据来提高中奖机会吗？',
    answer: '不。彩票开奖是独立的随机过程。昨天开出的号码绝对不会影响今天开出的号码。每个号码在每次开奖中的概率都是完全一样的。',
  },
  {
    question: '对比表中的“难度”是什么意思？',
    answer: '它是衡量赢得头奖难易程度的相对指标。容易（小于 20 万分之一）、困难（小于 2000 万分之一）、极难（大于 2000 万分之一）。',
  },
];

const howToData = [
  {
    name: '选择开奖类型',
    text: '在圣诞彩票、Primitiva、欧洲百万彩或 Bonoloto 中选择，以分析其特定规则。',
  },
  {
    name: '定义您的投入',
    text: '输入您计划购买的彩票张数或投注次数。',
  },
  {
    name: '分析关键概率',
    text: '查看赢得头奖与小奖或返还本金的真实概率对比。',
  },
  {
    name: '评估风险/收益',
    text: '查看数学期望，以了解统计学上您每投入一欧元相当于“捐献”了多少钱。',
  },
];

const seoData = [
  {
    type: 'title',
    text: '希望的数学',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '对许多人来说，买彩票是用几欧元购买一个幻想。然而，在彩球旋转的背后，蕴含着数学中最引人入胜的领域之一：极端概率统计学。',
  },
];

const gameTranslations = {
  gordo: {
    name: '圣诞彩票 (El Gordo)',
    description: '全球最大的派彩。中奖概率较高。',
  },
  nino: {
    name: '儿童彩票 (El Niño)',
    description: '返还本金的机会是圣诞彩票的三倍。',
  },
  euromillones: {
    name: '欧洲百万彩 (Euromillions)',
    description: '奖金极高，但概率几乎不可能。',
  },
  primitiva: {
    name: 'La Primitiva',
    description: '西班牙最古老的彩票。较难但价格更便宜。',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: '最经济的彩票。适合预算较少、希望每天参与的玩家。',
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
    labelTitle: '彩票优化器',
    labelDescription: '对比不同彩票，计算您的数学期望，明智地进行投注。',
    labelSelectGame: '选择彩票',
    labelConfigurePlay: '配置您的投注',
    labelAdjustQuantity: '调整购买张数以查看您的真实概率。',
    labelTotalInvestment: '总投资',
    labelTickets: '购买张数 / 投注次数',
    labelUnits: '张/次',
    labelExposureAnalysis: '风险敞口分析',
    labelSelectLottery: '选择彩票以查看风险分析。',
    labelOptimalCutoff: '建议的截断点',
    labelProbabilitySuccess: '成功概率',
    labelExpectedValue: '预期价值 (EV)',
    labelReturnTheoretical: '单次投注的理论回报。',
    labelSocialReturnIndex: '社会回报指数',
    labelLow: '低',
    labelMedium: '中',
    labelHigh: '高',
    labelComparison: '奖金对比',
    labelLottery: '彩票',
    labelCost: '价格',
    labelTypicalPrize: '典型奖金',
    labelDifficulty: '难度',
    labelAccessible: '容易',
    labelDifficult: '困难',
    labelExtreme: '极难',
    labelNote: '注：圣诞彩票和儿童彩票的奖金是按票根 (20€) 计算的。欧洲百万彩等是典型的头奖金额。',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'zh-CN',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
