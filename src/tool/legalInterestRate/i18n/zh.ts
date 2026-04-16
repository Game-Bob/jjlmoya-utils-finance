import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'legal-interest-on-money-spain';
const title = '法定利息';
const description = '计算 2026 年西班牙适用的法定利息。根据预算法案，利率为 3.25% 的模拟器。';

const faqData = [
  {
    question: '2026 年金钱的法定利息是多少？',
    answer: '2026 财年金钱的法定利息维持在 3.25%，由国家一般预算法规定。',
  },
  {
    question: '滞纳金如何计算？',
    answer: '滞纳金的计算方法是：欠款本金乘以 3.25%，再乘以逾期天数，最后除以 36,500。使用 365 天基数。',
  },
  {
    question: '法定利息和滞纳金有什么区别？',
    answer: '法定利息是基本参考利率。税务滞纳金 (Hacienda) 为 4.0625%。商业交易利息（约 10.15%）是最高的。',
  },
  {
    question: '如果没有合同条款，会自动适用吗？',
    answer: '是的，当出现付款延迟且未约定其他利息时，默认会自动适用法定利息。',
  },
  {
    question: '什么是诉讼利息 (Interés Procesal)？',
    answer: '诉讼利息为 5.25%（法定利息加 2 个百分点），从判决支付款项之日起适用。',
  },
];

const howToData = [
  {
    name: '输入欠款本金',
    text: '输入您需要计算利息的金额（例如未付账单）。',
  },
  {
    name: '指定逾期天数',
    text: '输入逾期未付的天数。基数为 365 天。',
  },
  {
    name: '查看结果',
    text: '自动获取按 2026 年现行 3.25% 利率计算产生的利息金额和应付总额。',
  },
  {
    name: '查看其他利率',
    text: '查看税务滞纳金 (4.06%) 等其他参考利率以获取更多背景信息。',
  },
];

const bibliographyData = [
  {
    name: '2026 年西班牙国家一般预算法',
    url: 'https://www.boe.es/',
  },
  {
    name: '西班牙民法典 - 第 1108 条及后续条款',
    url: 'https://www.boe.es/',
  },
  {
    name: '第 3/2004 号打击逾期付款法',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026 年西班牙法定利息 - 计算器',
  },
  {
    type: 'paragraph',
    html: '西班牙 <strong>2026 年的法定利息</strong>为 <strong>3.25%</strong>。除非另有约定，否则在延迟付款时会自动适用。',
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

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  bibliographyTitle: '法律来源',
  ui: {
    labelTitle: '法定利息率',
    labelDescription: '根据 2026 年预算法计算法定利息金额。西班牙 3.25% 利率模拟器。',
    labelBadge: '国家官方公报 (BOE) 2026',
    labelSubtitle: '2026 财年金钱的法定利息维持在 3.25%。',
    labelLegalInterest: '法定利息',
    labelDelayInterest: '滞纳金',
    labelCommercialOperations: '商业交易',
    labelActive: '2026 年现行',
    labelTributary: '税务 (Hacienda)',
    labelFirstHalf: '2026 年上半年',
    labelQuickCalculator: '利息快速计算器 (3.25%)',
    labelCapital: '欠款本金',
    labelDays: '逾期天数',
    labelInterestGenerated: '产生的利息',
    labelTotalToPay: '应付总额',
    labelFormula: '本计算器应用标准单利公式：',
    labelBase: '根据西班牙现行法规，官方计算使用 365 天基数。',
    labelOfficialRegulation: '官方规定',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'zh-CN',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
