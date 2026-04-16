import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'baifenbi-jisuanqi';
const title = '四合一百分比计算器：折扣、涨幅与降幅';
const description =
  '在线轻松免费计算百分比。四合一工具，包含计算 Y 的 X%、百分比差异、增减增值税、打折和自动小费计算。';

const faqData = [
  {
    question: '这个计算器是如何工作的？',
    answer:
      '只需在符合您问题的用例框中输入数值，我们的计算器就会自动处理公式，无需点击任何“计算”按钮。',
  },
  {
    question: '它可以用来计算增值税或税费吗？',
    answer:
      '是的，第 4 块（“增加或减少百分比”）专门为在基础价格上应用 13% 或 9% 的增值税，或者计算个人所得税扣除等情况而设计。',
  },
  {
    question: '它可以处理小数和负数吗？',
    answer:
      '当然可以。您可以输入小数（使用点号），如果您需要分析亏损状态的会计账单，它也支持负值。',
  },
  {
    question: '我可以复制结果吗？',
    answer:
      '可以，每个板块的结果框中都有一个按钮，点击可立即将数字复制到设备的剪贴板，以便粘贴到其他应用或文档中。',
  },
];

const howToData = [
  {
    name: '明确您的数学问题',
    text: '阅读 4 个板块的标题并选择与您想知道的内容匹配的一个（例如：50 的 20% 是多少？-> 板块 1）。',
  },
  {
    name: '输入数值',
    text: '填写“X”和“Y”字段。不用担心顺序，每个板块的描述语句会视觉化地引导您。',
  },
  {
    name: '复制即时结果',
    text: '数值会在您输入的同时在下方实时显示。如果您想将其带到别处，请点击复制图标。',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源与参考',
  bibliography: [
    {
      name: '百分比计算 - 维基百科',
      url: 'https://zh.wikipedia.org/wiki/百分比',
    },
    {
      name: '基础数学概念 - 可汗学院',
      url: 'https://zh.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '四合一百分比计算器：掌握快速计算',
      level: 2,
    },
    {
      type: 'title',
      text: '多功能百分比计算器有什么用？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '计算百分比是日常生活中最常见的数学运算之一。从商场打折时计算折扣、在餐厅确定合适的小费金额，到确定企业的利润率或贷款利息。尽管是日常操作，但并非总能轻松地进行心算或记住准确的公式。',
    },
    {
      type: 'paragraph',
      html: '我们的四合一百分比计算器汇总了需求量最大的场景。您不再需要去 Google 搜索“如何算百分之二十”或“百分比计算公式”。您在一个地方就可以完成四项基本运算，交互式且结果即时。',
    },
    {
      type: 'title',
      text: '解析 4 个最常用的用例',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '为了方便您的使用，我们将工具分为四个清晰的视觉板块，解决我们每天面临的实际问题：',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Y 的 X% 是多少？',
      html: '<p><strong>最经典的案例。</strong> 常用于计算折扣或小费。如果您想知道 120 元的 15% 是多少，这个工具就是为您准备的。其背后的公式只是将百分比除以 100 并乘以总值。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. X 是 Y 的百分之几？',
      html: '<p><strong>非常适合比例计算。</strong> 如果您在 60 分的考试中得了 45 分，换算成 100 分制是多少？此功能将部分除以整体并乘以一百，为您提供准确的相对权重。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. 百分比增长或减少',
      html: '<p><strong>非常适合财务和数据分析。</strong> 租金比去年涨了多少？如果您以前付 8000 元，现在付 8400 元，这个功能会告诉您增长了 5%。它测量两个数字之间的增长或缩减。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. 在某个值上增加或减少百分比',
      html: '<p><strong>对增值税计算超级有用。</strong> 如果您有一个基础价格（例如 100 元）并需要增加 13% 的加价，此计算器将直接为您得出 113 元的结果，而无需进行中间运算。同样，它也适用于应用直接折扣（例如减去 20%）。</p>',
    },
    {
      type: 'title',
      text: '关于百分比计算的常见误区',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '看到大百分比或小数时，我们经常会卡壳，但有一些数学“小技巧”可以让您的生活更轻松。最著名的一个就是<strong>百分比的可逆性</strong>。',
    },
    {
      type: 'tip',
      title: '可逆性技巧',
      html: '<p>您知道吗，Y 的 X% 与 X 的 Y% 完全相等。例如，如果您被要求在心算中计算 50 的 18%，听起来可能很复杂。但如果您反过来想，“18 的 50%”，就非常简单了：是 9！这适用于绝对任何数字，是日常生活中惊人的提速秘诀。</p>',
    },
    {
      type: 'title',
      text: '为什么我们在计算增长时会犯错',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最常见的错误之一发生在案例 3：百分比的增加或减少。假设一支股票价格为 100 元，下跌了 50%，第二天上涨了 50%。直觉告诉我们它会回到 100 元，但这是错误的。',
    },
    {
      type: 'paragraph',
      html: '如果从 100 元下跌 50%，其新价格为 50 元。如果从这 50 元上涨 50%，涨幅是 50 的一半（25 元）。因此，最终价格将是 75 元。这是一个经典的例子，说明了为什么百分比的涨跌不是对称的，以及为什么像这样的动态计算器可以防止严重的财务错误。',
    },
    {
      type: 'title',
      text: '专业与学术用途',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '我们的界面简洁无干扰，专为<strong>高效工作</strong>而设计。您可以将其固定在浏览器标签页中，在各个字段之间灵活切换，并借助结果旁边的复制按钮，将准确的数据传输到 Excel 或 Google 表格中，无惧录入错误。',
    },
    {
      type: 'list',
      items: [
        '电商与实体店：应用利润率并加上税费，快速计算销售价。',
        '人力资源管理：确定薪资差距、所得税代扣代缴以及参考 CPI 进行调薪计算。',
        '大学教育：教师进行成绩加权平滑或科学领域的学生分析实验偏差。',
        '数字营销：衡量电商中的 CTR（点击率）、ROAS（广告支出回报率）或转化率。',
      ],
    },
  ],
  ui: {
    labelTitle: '百分比计算器',
    labelCase1Title: '用例 1',
    labelCase1Question: 'Y 的 X% 是多少？',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: '公式: (X / 100) × Y',
    labelCase2Title: '用例 2',
    labelCase2Question: 'X 是 Y 的百分之几？',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: '公式: (X / Y) × 100',
    labelCase3Title: '用例 3',
    labelCase3Question: '两个数值之间的百分比差异',
    labelCase3Placeholder1: '数值 1',
    labelCase3Placeholder2: '数值 2',
    labelCase3Formula: '公式: ((数值 2 - 数值 1) / |数值 1|) × 100',
    labelCase4Title: '用例 4',
    labelCase4Question: '在某个值上增加或减少百分比',
    labelCase4Placeholder1: '数值',
    labelCase4Placeholder2: '%',
    labelCase4Formula: '公式: 数值 ± (数值 × (% / 100))',
    labelCase4AddLabel: '相加 (值 + %)',
    labelCase4SubtractLabel: '相减 (值 - %)',
    labelResult: '结果',
    labelDifference: '差异',
    labelCopyTooltip: '复制结果',
    labelFormula: '公式',
    percentSymbol: '%',
  },
};
