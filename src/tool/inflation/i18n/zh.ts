import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflation-calculator-spain';
const title = '西班牙通货膨胀计算器：货币历史价值';
const description =
  '发现您当年的比塞塔在今天价值几何，或者自 1980 年以来生活成本上升了多少。基于更新至 2026 年的西班牙历史 IPC（消费者物价指数）数据。';

const faqData = [
  {
    question: '什么是 IPC，它是如何计算的？',
    answer:
      '消费者物价指数（IPC）衡量代表西班牙消费的一篮子商品和服务价格的演变。它是通过比较不同时期这一篮子商品的成本来计算的。',
  },
  {
    question: '自 1980 年以来货币贬值了多少？',
    answer:
      '就购买力而言，1980 年的 1,000 比塞塔大约相当于今天的 60 欧元。由于累积通货膨胀，在过去的 40 多年里，货币价值已损失超过 90%。',
  },
  {
    question: '如果不动用我的存款，为什么它们会贬值？',
    answer:
      '如果年通货膨胀率为 3%，而您的账户利率为 0%，那么您每年将损失 3% 的购买力。为了保持实际价值，您的存款收益必须至少等同于通货膨胀率。',
  },
  {
    question: '西班牙通货膨胀最严重的时期是什么时候？',
    answer:
      '80 年代是通货膨胀最严重的时期，增长率达到两位数（高达 15%）。价格逐月发生剧烈变化。自使用欧元（2002 年）以来，通货膨胀得到了更好的控制，除了 2021-2023 年期间。',
  },
  {
    question: '通货膨胀如何影响我的存款？',
    answer:
      '通货膨胀就像一种“隐形税收”。如果通货膨胀率为 5%，而您把钱放在枕头下，那么到年底您能购买的商品将减少 5%。投资是抵消这种影响的关键。',
  },
];

const howToData = [
  {
    name: '选择起始年份',
    text: '选择您想要计算货币价值的日期（可选择 1980 年至 2026 年）。',
  },
  {
    name: '输入金额',
    text: '输入您想要比较的比塞塔金额（针对旧日期）或欧元金额。',
  },
  {
    name: '选择结束年份',
    text: '确定您想要查看购买力演变到的时间点。',
  },
  {
    name: '分析实际结果',
    text: '观察该时期的购买力等值和累积通货膨胀百分比。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<InflationUI> = {
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
      text: '历史通货膨胀计算器：了解您金钱的真实价值',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '通货膨胀是年复一年吞噬您存款的“隐形税收”。您知道自 1980 年以来您的钱贬值了多少吗？20 年前您花 300 比塞塔买的那杯咖啡，现在实际价值是多少？',
    },
    {
      type: 'title',
      text: '通货膨胀：您财富上的隐形税收',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>通货膨胀</strong>是物价持续且普遍的增长。虽然它看起来像是一个技术性的现象，但它对实体经济的影响是直接的：它减少了您用同样金额的钱能购买到的商品数量，如果不采取保护措施，会侵蚀一辈子的积蓄。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: '1980 年历史记录',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: '2022 年价格高峰',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: '稳定性目标',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: '基本金融术语',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IPC',
          definition: '汇总基本消费篮子价格变化的指标。',
        },
        {
          term: '购买力',
          definition: '一种货币在特定时刻的实际购买能力。',
        },
        {
          term: '通货紧缩',
          definition: '价格普遍下降，可能使投资瘫痪。',
        },
        {
          term: '滞胀',
          definition: '高通货膨胀与经济停滞相结合的情景。',
        },
      ],
    },
    {
      type: 'title',
      text: '经济里程碑与对比',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '80 年代危机',
          description: '这一时期的特点是两位数的通货膨胀和巨大的就业不稳定性。',
          points: [
            '极高的利率',
            '比塞塔价值迅速流失',
            '工资被物价上涨吞噬',
          ],
        },
        {
          title: '大流行引发的通胀：2021 年至 2023 年',
          description: '由于能源成本和供应链问题导致的急剧上升。',
          highlight: true,
          points: [
            '对购物篮的直接影响',
            '欧洲央行提高利率以抑制消费',
            '购买力恢复缓慢',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['产品或指标', '1980 年价值（预估）', '2026 年价值（预测）', '变化'],
      rows: [
        ['长棍面包', '0.15€ (25 pts)', '1.40€', '833%'],
        ['咖啡馆咖啡', '0.30€ (50 pts)', '1.65€', '450%'],
        ['电影票', '1.20€ (200 pts)', '9.80€', '716%'],
        ['月最低工资', '154€ (25,615 pts)', '1,140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: '现金的风险',
      html: '将钱放在枕头下或没有收益的活期账户中是保证资本损失的行为。平均 3% 的通货膨胀率会在不到 25 年的时间里让您的存款价值减半。',
    },
    {
      type: 'title',
      text: '保护您存款的建议',
      level: 2,
    },
    {
      type: 'proscons',
      title: '投资策略',
      items: [
        {
          pro: '实物资产：房产价值通常会随通货膨胀而升值。',
          con: '流动性低且进入成本高。',
        },
        {
          pro: '股市与基金：长期回报通常能超过 IPC。',
          con: '短期内的波动和市场风险。',
        },
      ],
    },
    {
      type: 'title',
      text: '健康的财务习惯',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '定期检查您的支出以发现隐形涨价。',
        '将存款分散到不同类型的资产中。',
        '考虑与通货膨胀挂钩的国债。',
        '使用计算工具来对比报价和工资。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '针对负复利的警告',
      html: '通货膨胀的作用类似于反向复利。每年，损失百分比都应用于已经减少的价值上，如果不采取行动，财富损失会加速。',
    },
    {
      type: 'summary',
      title: '核心结论',
      items: [
        'IPC 只是一个平均值；您的个人通胀取决于您的习惯。',
        '如果想保持劳动的实际价值，投资不是可选项，而是必须项。',
        '通货膨胀计算器对于理解长期合同至关重要。',
      ],
    },
    {
      type: 'message',
      title: '掌控您的经济',
      html: '我们的计算器使用西班牙统计局 (INE) 的官方数据，为您提供关于西班牙经济过去和现在最精确的视图。',
    },
  ],
  ui: {
    labelTitle: '西班牙通货膨胀计算器',
    labelInitialAmount: '初始资金',
    labelInitialYear: '在年份',
    labelFinalAmount: '今日等值',
    labelFinalYear: '2026 年',
    labelInflationRate: '累积通货膨胀',
    labelCalculatedOn: '计算使用的官方数据截至 2025 年，并结合了 2026 年底的预估预测。',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'zh-CN',
    labelYearSelect: '在年份',
    labelIn: '在',
    labelEquivalentToday: '今日等值于',
    labelInflationAccumulated: '累积通货膨胀',
    labelYear: '年份',
  },
};
