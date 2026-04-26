import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'late-interest-calculator';
const title = '西班牙滞纳金及法定利息计算器 2026';
const description =
  '计算西班牙税务（Hacienda）滞纳金及欠款法定利息。根据预算法案更新至 2025 年和 2026 年的模拟器。';

const faqData = [
  {
    question: '什么是滞纳金或逾期利息？',
    answer:
      '这是对未在规定期限内支付的款项收取的利息。它适用于原始债务，并一直累积到全额支付为止。',
  },
  {
    question: '单利和复利有什么区别？',
    answer:
      '单利每天仅根据原始本金计算。复利根据本金加上已产生的利息计算，导致债务增长更快。',
  },
  {
    question: '每日利息如何计算？',
    answer:
      '将年利率除以 365 天并应用于原始本金。例如：年利率 10% = 每日 0.0274%。',
  },
  {
    question: '我应该应用哪种滞纳金率？',
    answer:
      '这取决于当地法律和合同条款。在西班牙，《逾期付款法》规定了最高限额。请针对您的具体案例咨询法律顾问。',
  },
  {
    question: '我可以将此计算器用于法律债务吗？',
    answer:
      '这是一个提供信息参考的工具。对于真实债务，请核实合同条款和当地法律。如有疑问，请咨询律师。',
  },
];

const howToData = [
  {
    name: '选择计算类型',
    text: '根据您的情况，选择单利、复利或按月。',
  },
  {
    name: '输入数据',
    text: '输入原始金额、利率和逾期天数。',
  },
  {
    name: '获取结果',
    text: '计算器显示累计的每日利息、产生的总利息、最终金额和有效利率。',
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

export const content: ToolLocaleContent<LateInterestUI> = {
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
      text: '滞纳金及法定利息计算器：西班牙完全指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在西班牙复杂的法律和税务体系中，债务的拖延并非免费。<strong>滞纳金</strong>和<strong>法定利息</strong>是法律用来补偿因延迟履行金钱义务而造成的损失的机制。无论是税务局（<strong>Hacienda</strong>）的欠款、企业间的欠款还是法律索赔，了解这些利息是如何产生的至关重要。',
    },
    {
      type: 'title',
      text: '什么是货币法定利息 (Interés Legal del Dinero)？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '货币法定利息是在当事人未约定特定利息或法律有规定时，适用于债务的附加费用。对于 <strong>2024、2025 和 2026</strong> 年，该利率稳定维持在 <strong>3.25%</strong>。这一百分比是许多法律计算的基础。',
    },
    {
      type: 'title',
      text: '税务滞纳金 (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当债务对象是公共行政部门时，<strong>税务滞纳金</strong>高于法定利息，以阻止逾期缴纳税款。对于 <strong>2024-2026</strong> 年期间，该利率定为 <strong>4.0625%</strong>。如果您在期限后提交自纳税申报表，税务局将向您收取此项费用。',
    },
    {
      type: 'tip',
      title: '补偿性而非惩罚性',
      html: '<p><strong>关键数据：</strong> 与罚款不同，滞纳金具有补偿性而非惩罚性。税务局并不是用这些钱来“惩罚”您，而是针对您持有本应在国库中的钱的时间段进行收费。</p>',
    },
    {
      type: 'title',
      text: '如何逐步计算利息',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '这些利息的计算遵循单利公式，时间按自然日计算：<strong>利息 = (本金 × 天数 × 利率) / 36,500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>本金：</strong> 原始债务的总额。',
        '<strong>天数：</strong> 自过期次日起至实际支付日止的天数。',
        '<strong>利率：</strong> 适用的年利率（例：3.25 或 4.0625）。',
        '<strong>36,500：</strong> 将年百分比转换为每日百分比的除数因子 (365 天 x 100)。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '实际案例：西班牙税务局欠款',
      html: '<p>假设您欠缴已过期 180 天的 5,000 欧元个税：</p><ul><li>适用利率（滞纳）：4.0625%</li><li>计算：(5,000 × 180 × 4.0625) / 36,500</li><li><strong>产生的利息：</strong> 100.17 欧元</li><li>应付总额：5,100.17 欧元</li></ul>',
    },
    {
      type: 'title',
      text: '根据债务类型的区别',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>民事债务：</strong> 个人之间，适用 3.25%（法定）。',
        '<strong>商业债务：</strong> 受《逾期付款法》管辖，2025-2026 年达到 10.15% - 11.15%。',
        '<strong>社会保障债务：</strong> 适用 4.0625% 加上 10% 到 20% 的附加费。',
        '<strong>诉讼利息：</strong> 有法院判决时，从判决之日起适用 5.25%。',
      ],
    },
    {
      type: 'title',
      text: '商业交易中的利息：注意 60 天期限！',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果您是自由职业者或公司，西班牙第 3/2004 号法律规定了 60 天的最长付款期限。如果您的客户超过该日期，您可以自动要求商业滞纳金而无需提醒，并额外收取 40 欧元的固定追收费用。',
    },
  ],
  ui: {
    labelTitle: '滞纳金计算器',
    labelSimpleTitle: '单利',
    labelCompoundTitle: '复利',
    labelMonthlyTitle: '按月',
    labelSimpleQuestion: '使用单利计算',
    labelCompoundQuestion: '使用复利计算',
    labelMonthlyQuestion: '使用按月周期计算',
    labelPrincipal: '原始金额',
    labelAnnualRate: '年利率',
    labelDays: '逾期天数',
    labelMonths: '逾期月数',
    labelMonthlyRate: '月利率',
    labelDailyInterest: '每日利息',
    labelTotalInterest: '总利息',
    labelTotalAmount: '应付总金额',
    labelEffectiveRate: '有效利率',
    labelCopyTooltip: '复制结果',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: '应用公式',
    reportTitle: '利息计算报告',
    reportLabelPrincipal: '本金',
    reportLabelType: '类型',
    reportLabelPeriod: '期间',
    reportLabelDays: '经过天数',
    reportLabelInterest: '产生利息',
    reportLabelTotal: '结算总额',
    reportDaysSuffix: '天',
    formulaDescription: '此计算使用现行利率。如果期间涵盖具有不同利率的往年，则实际计算应按期间划分。',
    currencyCode: 'EUR',
    currencyLocale: 'zh-CN',
  },
};
