import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'fu-li-jisuanqi-cai-fu-zeng-zhang';
const title = '复利计算器：可视化您的未来财富';
const description =
  '发现小额投资如何演变成巨额财富。规划财务自由和退休生活的终极工具。';

const faqData = [
  {
    question: '什么是复利？',
    answer:
      '复利是指不仅根据初始本金计算利息，还根据前期累积的利息计算利息。这使得投资随着时间的推移呈指数级增长。',
  },
  {
    question: '复利与单利有什么区别？',
    answer:
      '在单利中，利息仅根据初始本金计算。而在复利中，利息会被重新投资，这意味着“您的利息也能产生利息”。',
  },
  {
    question: '什么是“72法则”？',
    answer:
      '这是一个估算投资翻倍所需时间的快速公式：用 72 除以年收益率。例如，年收益率为 8% 时，您的资金将在 9 年内翻倍。',
  },
  {
    question: '为什么年轻时开始投资很重要？',
    answer:
      '由于指数效应，最决定性的因素不是通过节省下来的金额，而是时间。得益于利滚利的资本化作用，早开始几年可能会导致最终财富规模大得多。',
  },
];

const howToData = [
  {
    name: '输入初始本金',
    text: '输入您开始投资计划时的资金数额。',
  },
  {
    name: '定义定期投入',
    text: '注明您每个月或每年计划额外存入并投资的金额。',
  },
  {
    name: '估算年收益率',
    text: '输入您预期获得的年利润百分比（例如：历史标普 500 指数为 7%）。',
  },
  {
    name: '调整时间跨度',
    text: '选择您将持有投资的年数，以可视化您的资本指数级增长的情况。',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: '复利 - 维基百科',
      url: 'https://zh.wikipedia.org/wiki/复利',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '复利的魔力：指数级构建您的财富',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '阿尔伯特·爱因斯坦将其称为“世界第八大奇迹”。<strong>复利</strong>是长期创造财富的最强大机制。您不需要成为金融专家也能利用它：您只需要时间、耐心和投入的资金。',
    },
    {
      type: 'title',
      text: '单利 vs 复利：雪球隐喻',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '想象一下，您在山顶上有一个雪球。<strong>单利</strong>就像是把那个球滚下去，每隔一米都需要手动往上面加雪才能让它长大。而<strong>复利</strong>就像是让球自己滚动：它会自动收集积雪，而且它长得越大，每一转能收集到<em>更多</em>积雪的表面积就越大。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '单利',
          description: '利息始终仅根据初始本金计算。',
          points: ['公式：本金 × 利率 × 时间', '线性且可预测的增长', '用于短期贷款', '无利润再投资'],
        },
        {
          title: '复利',
          description: '利息被加到本金中并产生新的利息。',
          highlight: true,
          points: [
            '公式：本金 × (1 + 利率)^时间',
            '加速的指数级增长',
            '所有长期投资的基础',
            '您的利润产生更多利润',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: '从数学上讲，您的利润会产生新的利润。在最初的几年里，它看起来很慢，但一旦过了“拐点”，曲线就会垂直上升。这就是真正的财富创造之处。',
    },
    {
      type: 'title',
      text: '为什么时间是您最大的盟友？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最决定性的因素不是您投入的资金量，而是<strong>您让它增长了多少年</strong>。提前 10 年开始可能会导致最终财富增加 2 到 3 倍，即使您投入的总资金更少。这种指数效应就是为什么年轻投资者拥有无与伦比优势的原因。',
    },
    {
      type: 'tip',
      title: '72法则',
      html: '<p>用 72 除以您的年收益率，即可知道<strong>资金翻倍</strong>需要多少年。</p><p><em>例子：年收益率为 8% 时，每 9 年翻一倍 (72/8 = 9)。</em></p><p>这个神奇的公式适用于任何收益率，并帮助您快速估算投资增长。',
    },
    {
      type: 'tip',
      title: '2026年建议',
      html: '<p>通货膨胀仍然是一个因素。请确保您的净收益率每年至少超过 2-3%，以免失去购买力。投资于增长速度快于通货膨胀的资产。',
    },
    {
      type: 'title',
      text: '复利频率：真的很重要吗？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '利息可以按年、半年、季度、月份甚至每天进行复利计算。<strong>复利频率越高</strong>，复利效应就越大。同样的本金和利率，如果利息按月复利计算，其增长程度将高于按年复利计算。',
    },
  ],
  ui: {
    labelTitle: '投资模拟器',
    labelRealtime: '实时显示',
    labelInitial: '初始投入',
    labelMonthly: '每月投入',
    labelRate: '年化利率',
    labelYears: '持有年数',
    labelMyMoney: '您的本金',
    labelProfit: '投资收益 (利息)',
    labelTotal: '累计总额',
    labelYear: '年份',
    labelPrincipal: '本金 (投入金额)',
    labelInterest: '产生的利息',
    insightPrefix: '[小贴士] 在第 ',
    insightSuffix: ' 年，您每年的利息收益将超过您的投入。金钱已经在为您努力工作了！',
    currencySymbol: '¥',
    currencyCode: 'CNY',
    currencyLocale: 'zh-CN',
  },
};
