import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'zhai-wu-xue-qiu-fa-ji-suan-qi';
const title = '债务雪球法计算器：2026 年还款计划';
const description = '使用 Dave Ramsey 的雪球法计算您的财务自由日期。整理您的债务并查看详细的每月还款计划。';

const faqData = [
  {
    question: '什么是债务雪球法？',
    answer: '这是一种债务偿还策略，要求按照债务余额从小到大的顺序偿还债务，而不考虑利率。它的核心在于通过快速消除小额账户来获得心理上的成就感和动力。',
  },
  {
    question: '为什么不按照利率排序（雪崩法）？',
    answer: '从数学上讲，先偿还高利率债务可以节省更多利息。然而，许多人因为看不到即时结果而中途放弃。雪球法优先考虑动机：看到债务迅速消失能给您应对大额债务的能量。',
  },
  {
    question: '在开始计划之前我需要有储蓄吗？',
    answer: '建议在攻击债务之前先建立一个“初始紧急基金”（约 1,000 欧元）。这可以防止在遇到突发情况时不得不再次使用信用卡而破坏您的进度。',
  },
  {
    question: '我应该在计算器中包含哪些债务？',
    answer: '所有的消费债务：信用卡、个人贷款、汽车贷款、逾期账单。房贷通常因为金额巨大而被留到后期。',
  },
];

const howToData = [
  {
    name: '列出您的债务',
    text: '写下您所有的债务，注明当前的剩余余额和您每月支付的最低还款额。',
  },
  {
    name: '确定额外预算',
    text: '计算您每个月在最低还款额之外还能投入多少额外资金用于还债。',
  },
  {
    name: '排序并确定优先级',
    text: '计算器将自动按余额从小到大排序。对除最小债务外的所有债务支付最低额，将所有额外资金投入最小的债务。',
  },
  {
    name: '执行级联还款',
    text: '当清完最小的一笔债务后，将原来用于该债务的所有资金（最低还款额 + 额外资金）全部转入下一笔债务。',
  },
];

const bibliographyData = [
  {
    name: 'Investopedia — Debt Snowball vs. Debt Avalanche',
    url: 'https://www.investopedia.com/',
  },
  {
    name: 'Harvard Business Review — Research on Debt Payoff Strategies',
    url: 'https://hbr.org/',
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
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考资料',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '债务雪球法计算器：2026 年完整指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '带着债务生活就像背着重负跑马拉松。<strong>债务雪球法</strong>已被证明是重获财务自由最有效的策略之一。',
    },
  ],
  ui: {
    labelTitle: '彻底自由',
    labelDescription: '用心理上最有效的方法开始您的财务自由之路。',
    labelExtraBudget: '每月额外预算',
    labelExtraBudgetHelp: '在最低还款额之外的资金。',
    labelSnowballMethod: '雪球法',
    labelAvalancheMethod: '雪崩法',
    labelAddNewDebt: '添加新债务',
    labelDebtName: '名称',
    labelDebtNamePlaceholder: '例如：Visa 卡',
    labelDebtBalance: '欠款金额',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: '最低还款额',
    labelInterestRate: '年利率',
    labelInterestHelp: '年化',
    labelAddButton: '添加到计划',
    labelClearData: '清除设置',
    labelClearDataConfirm: '清空计划？',
    labelDeleteDebt: '删除',
    labelDebtInventory: '债务清单',
    labelFreedomDate: '财务自由日期',
    labelActiveMethod: '方法',
    labelMonthsRemaining: '剩余月数',
    labelTotalInterest: '总利息',
    labelTotalPaid: '最终总还款',
    labelInterestSaved: '节省的利息',
    labelYourStrategy: '您的分步策略',
    labelStrategyHelp: '每一步都显示您的总还款额。',
    labelPriority: '最高优先级',
    labelStep: '步骤',
    labelAfterPaying: '在结清上一笔后',
    labelMonthlyPayment: '每月还款',
    labelDetailedAmortization: '详细摊销计划',
    labelExportCSV: '导出 .CSV',
    labelDate: '日期',
    labelStartingBalance: '起始余额',
    labelInterest: '利息',
    labelAmortization: '已偿还本金',
    labelTotalMonth: '月计',
    labelRemaining: '剩余',
    labelFree: '自由',
    labelDebtInfinite: '债务无限',
    labelInvalidInput: '请输入总余额和最低还款额',
    labelEmptyStateTitle: '开始您的计划',
    labelEmptyStateDescription: '债务不是永久的。添加您的债务以查看自由之路。',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'zh-CN',
  },
};
