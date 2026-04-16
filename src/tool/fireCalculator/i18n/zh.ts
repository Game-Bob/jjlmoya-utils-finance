import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'fire-jisuanqi-si-baifenzhi-rule';
const title = 'FIRE 计算器：实现财务自由的 4% 法则';
const description = '使用 4% 法则计算实现财务独立所需积累的“魔法数字”。规划您的提前退休生活，并可视化通往经济自由的道路。';

const faqData = [
  {
    question: '什么是 4% 法则？',
    answer: '4% 法则是基于“三一研究”（Trinity Study）的一种提款策略。它指出，如果您在退休的第一年提取资产的 4%，并在随后的几年中根据通货膨胀进行调整，您可以在 30 年内不耗尽资金。',
  },
  {
    question: '什么是 FIRE？',
    answer: 'FIRE 代表 Financial Independence, Retire Early（财务独立，提前退休）。这是一个旨在通过积极储蓄和聪明投资的结合来实现经济自由的运动。',
  },
  {
    question: '我的魔法数字是多少？',
    answer: '您的魔法数字是您需要积累的总资产，以便在不工作的情况下仅靠投资收益生活。它的计算方法是将您的年度支出除以安全提款率（通常为 4%）。',
  },
  {
    question: 'Lean、Barista 和 Fat FIRE 有什么区别？',
    answer: 'Lean FIRE 是以最低支出生活（当前支出的 70%），Barista FIRE 是在投资收益覆盖一半支出的同时兼职工作（支出的 50%），而 Fat FIRE 则拥有优渥的生活方式（支出的 150%）。',
  },
  {
    question: '4% 法则现实吗？',
    answer: '从历史数据来看，在 50/50 的股票/债券投资组合中，4% 法则在 30 年内的成功概率为 95%。但是，它未考虑序列收益风险，且主要基于美国市场数据。',
  },
];

const howToData = [
  {
    name: '计算您的每月支出',
    text: '分析您每个月的实际花费，包括住房、食物、服务和娱乐。',
  },
  {
    name: '选择您的安全提款率',
    text: '4% 法则是标准，但您可以根据风险承受能力在 2.5%（较保守）到 6%（较激进）之间进行调整。',
  },
  {
    name: '输入您当前的资产',
    text: '加总您的投资、储蓄以及能产生被动收入的情况。',
  },
  {
    name: '可视化进度',
    text: '观察增长图表和自由里程碑（Lean, Barista, Fat FIRE），了解您何时能达成目标。',
  },
];

const bibliographyData = [
  {
    name: 'The Trinity Study: Portfolio Survivability',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Early Retirement Forum - 4% Rule Discussion',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Shiller CAPE Index - Market Valuations',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Bogleheads - 投资指南',
    url: 'https://bogleheads.es/',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '关于 FIRE 的常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4% 法则：提前退休的圣杯',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '探索如何计算实现永续投资收益生活所需的资产规模。<strong>4% 法则</strong>源于 1998 年由三位财务教授进行的“三一研究”。他们分析了自 1926 年以来的历史数据，以确定每年可以提取多大比例的资金而不会在 30 年内耗尽投资组合。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: '历史成功率' },
        { value: '50/50', label: '股债比例' },
        { value: '30年', label: '规划周期' },
        { value: '4%', label: '安全取款' },
      ],
    },
    {
      type: 'title',
      text: '什么是 FIRE 运动？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE 是 Financial Independence, Retire Early（财务独立，提前退休）的首字母缩写。',
        '追求在金钱不再是限制因素的情况下，选择如何支配时间的自由。',
        '基于储蓄的最优化和聪明投资。',
        '目标是让您的资产产生足够的现金流来覆盖支出。',
      ],
    },
    {
      type: 'title',
      text: '财务自由的类型',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: '极简生活方式。仅覆盖基本的生存开支。',
          points: ['极端储蓄', '极低支出', '节俭的自由'],
        },
        {
          title: 'Barista FIRE',
          description: '一种混合型状态，投资收益覆盖一半支出，另一半通过兼职工作赚取。',
          points: ['为兴趣工作', '社保覆盖', '较低压力'],
        },
        {
          title: 'Fat FIRE',
          description: '拥有充裕预算的退休生活，允许奢侈享受和旅行。',
          points: ['高净值资产', '零限制', '家族传承'],
        },
      ],
    },
    {
      type: 'title',
      text: '如何使用我们的 FIRE 计算器？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>支出追踪：</strong>分析您过去 12 个月的实际开支。',
        '<strong>定义 SWR：</strong>根据您的风险承受能力选择安全提款率。',
        '<strong>当前资产：</strong>输入您当前的投资价值。',
        '<strong>储蓄能力：</strong>预测距离目标还需要多长时间。',
        '<strong>可视化分析：</strong>分析您的财富增长图表。',
      ],
    },
    {
      type: 'title',
      text: '4% 法则分析',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '优点',
          description: '为什么 4% 法则有效',
          points: [
            '数学简单，便于快速规划。',
            '基于近一个世纪的历史数据。',
            '可适应任何支出水平。',
          ],
        },
        {
          title: '局限性',
          description: '4% 法则未涵盖的内容',
          points: [
            '未考虑序列收益风险（退休初期的市场暴跌）。',
            '主要基于美国市场。',
            '忽略了当地税制的巨大变动。',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '关键因素：通货膨胀',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '请记住，今天的 1,000 元在未来购买力将大不如前。使用实际收益率（剔除通胀后）对于保持预测的购买力至关重要。4% 法则假设您每年根据通胀调整提款金额。',
    },
  ],
  ui: {
    labelTitle: 'FIRE 计算器：4% 法则',
    labelDescription: '使用 4% 法则计算实现财务独立所需积累的魔法数字，并可视化通往自由的里程碑。',
    labelMonthlyExpenses: '每月支出',
    labelSWR: '提取率 (SWR)',
    labelCurrentWorth: '当前资产',
    labelMonthlySavings: '每月储蓄能力',
    labelAnnualReturn: '预估收益率 (税后)',
    labelFreedomMilestones: '自由里程碑',
    labelLeanFIRE: 'Lean FIRE (70% 存活率)',
    labelBaristaFIRE: 'Barista FIRE (50% 收入)',
    labelFatFIRE: 'Fat FIRE (150% 豪华)',
    labelMagicNumber: '您的自由魔法数字',
    labelMagicNumberDesc: '靠投资收益生活所需的资本',
    labelTimeRemaining: '距离财务自由的时间',
    labelTimeRemainingFormat: '还差 {years} 年 {months} 个月',
    labelAlreadyFI: '您已实现财务自由！',
    labelUnachievable: '以目前的储蓄无法达成目标',
    labelHiddenCostsChecklist: '隐藏支出清单',
    labelHealth: '医疗保险 (+2000元)',
    labelTaxes: '税收 (+1500元)',
    labelHome: '房屋维护 (+1000元)',
    labelTravel: '旅行与休闲 (+3000元)',
    labelEmergency: '应急基金 (+1000元)',
    labelSubscriptions: '订阅服务 (+500元)',
    labelAdded: '已添加：',
    labelSavePlan: '保存计划',
    labelSWRTooltip: '安全提取率 (Safe Withdrawal Rate)：每年可以提取的资产百分比，且不会耗尽资金。',
    labelReturnTooltip: '年化市场回报率（已扣除通胀）。历史标准为 7%。',
    currencySymbol: '¥',
    currencyCode: 'CNY',
    currencyLocale: 'zh-CN',
  },
};
