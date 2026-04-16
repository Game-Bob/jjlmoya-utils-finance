import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'mortgage-calculator';
const title = '房贷计算器与等额本息还款表';
const description =
  '计算您的每月房贷还款额，了解您将支付多少利息，并立即可视化查看完整的还款计划。';

const faqData = [
  {
    question: '什么是等额本息还款法？',
    answer:
      '这是最常用的还款系统。每月还款金额固定，但初期还款额中绝大部分是利息，本金还款极少。到后期，情况则相反。因此，在还款初期进行提前还贷最为划算。',
  },
  {
    question: '2026 年应该选固定利率还是浮动利率？',
    answer:
      '固定利率：现在支付的可能稍多，但 30 年内都能安稳入睡。浮动利率（如 LPR）：今天可能更便宜，但如果利率上升，您的月供可能会飙升，从而给经济带来压力。这取决于您的风险厌恶程度。',
  },
  {
    question: '如果我提前还款 10 万元，能省多少钱？',
    answer:
      '这取决于还款时机。如果在 3% 利率、200 万元贷款的第一年提前还款，您可以节省超过 15 万元的利息。如果是第 20 年还款，节省的利息可能不到 2 万元。时机至关重要。',
  },
  {
    question: '我应该将薪水的百分之多少用于支付房贷？',
    answer:
      '一般建议不要超过每月净收入的 30-35%（包括其他债务）。超过这一阈值会显著增加在遇到突发情况时发生违约的风险。',
  },
];

const howToData = [
  {
    name: '输入贷款金额',
    text: '输入您需要向银行申请的总金额（减去您已支付的首付款）。',
  },
  {
    name: '调整利率',
    text: '输入银行提供的年利率。您可以对比固定利率和浮动利率的不同情况。',
  },
  {
    name: '选择还款期限',
    text: '确定您希望用多少年偿还贷款。期限越长，月供越低，但支付的总利息会更多。',
  },
  {
    name: '分析还款计划表',
    text: '逐月查看您的债务演变情况，以及月供中利息与本金的分配比例。',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考',
  bibliography: [
    {
      name: '中国人民银行：个人住房贷款政策',
      url: 'http://www.pbc.gov.cn/',
    },
    {
      name: '房贷利率查询与建议',
      url: 'https://zh.wikipedia.org/wiki/抵押贷款',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '房贷完全指南：等额本息系统与提前还贷',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '房贷可能是您一生中承担的最大一笔债务。了解等额本息还款系统的工作原理对于做出明智的决定至关重要，这些决定可以为您节省数万元甚至更多的利息。',
    },
    {
      type: 'title',
      text: '等额本息系统的“陷阱”：了解月供的构成',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大多数房贷使用的是<strong>等额本息还款法</strong>。其主要特点是每月还款额固定（在利率不变的情况下），但其构成本金和利息的比例随时间发生戏剧性的变化。',
    },
    {
      type: 'tip',
      title: '月供的演变',
      html: '<p><strong>初期（第 1-10 年）：</strong> 您支付的大部分是利息，归还的本金非常少。在利率为 3% 的 250 万元贷款中，您的第一笔还款可能包含 80% 的利息。</p><p><strong>中期（第 11-25 年）：</strong> 比例逐渐趋于平衡。</p><p><strong>后期（第 26-30 年）：</strong> 您支付的几乎全是本金，利息非常少。</p>',
    },
    {
      type: 'paragraph',
      html: '因此，如果您打算<strong>提前还房贷</strong>，在贷款初期进行还款要划算得多。在第 1 年提前还款 10 万元节省的未来利息，远多于在第 20 年进行同样的提前还款。',
    },
    {
      type: 'title',
      text: '我应该把多少钱投入到房贷中？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '专家建议房贷月供<strong>不应超过每月净收入的 30-35%</strong>。如果您超过这个阈值，在遇到意外情况（失业、疾病等）时，违约风险会显著增加。',
    },
    {
      type: 'title',
      text: '2026 年背景：固定利率 vs 浮动利率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在利率波动的背景下，选择<strong>固定利率</strong>还是<strong>浮动利率</strong>是一项重要的战略决策，每年可能会导致数千元的支出差异。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '固定利率',
          description: '虽然现在支付稍多，但因为月供永远不会增加，您可以安稳入睡。',
          points: [
            '整个还款期内月供可预测',
            '防范利率上升风险',
            '在经济不确定时获得心理安宁',
            '非常适合预算紧凑的家庭',
          ],
        },
        {
          title: '浮动利率',
          description: '今天可能更便宜，但会让您的经济暴露在波动风险之下。',
          highlight: true,
          points: [
            '初始月供较低',
            '面临 LPR 上调风险',
            '对家庭预算可能有严重影响',
            '仅适合能承受较高风险的用户',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: '选择固定还是浮动取决于您的个人情况',
      html: '<p><strong>选择固定利率，如果：</strong> 您的预算紧凑，追求确定性，且无法接受每月出现的意外支出。</p><p><strong>选择浮动利率，如果：</strong> 您有财务缓冲，认为利率会下降，或者贷款金额较小、期限较短。</p>',
    },
  ],
  ui: {
    labelTitle: '房贷计算器',
    labelLoanAmount: '贷款金额',
    labelInterestRate: '利率 (%)',
    labelYears: '期限 (年)',
    labelMonthlyExtra: '每月额外还款',
    labelMonthlyPayment: '每月月供',
    labelMonthCount: '个月',
    labelSavingsCard: '您的潜在节省额',
    labelSavingsInterest: '利息节省',
    labelSavingsTime: '时间缩短',
    labelTimelineComparison: '还款跨度对比',
    labelTimelineOriginal: '原定还款期',
    labelTimelineOptimized: '提前还款后期期限',
    labelCostBreakdown: '总成本明细',
    labelBorrowed: '贷款额',
    labelTotalBorrowed: '借款总本金',
    labelTotalInterest: '累计总利息',
    labelAmortizationTable: '还款表',
    labelTableHeader: '查看完整计划表',
    labelViewAll: '查看全部',
    labelPaid: '房贷已结清',
    labelTableMonth: '月份',
    labelTableInterest: '利息',
    labelTablePrincipal: '本金',
    labelTableExtra: '额外',
    labelTableBalance: '余额',
    labelMoreMonths: '更多月份',
    labelMonth: '月',
    currencySymbol: '¥',
    currencyCode: 'CNY',
    currencyLocale: 'zh-CN',
    monthPlural: '个月',
    yearPlural: '年',
  },
};
