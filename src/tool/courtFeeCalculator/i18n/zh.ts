import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'xibanya-fa-yuan-shui-ji-suan-qi';
const title = '西班牙法院税计算器';
const description = '根据第 10/2012 号法律，计算西班牙企业的准确法院税金额。适用于 Model 696 的模拟器，包含豁免和自动计算功能。';

const faqData = [
  {
    question: '个人是否豁免缴纳法院税？',
    answer: '是。自 2016 年起，西班牙的自然人在所有法律领域内都完全豁免缴纳法院税。',
  },
  {
    question: '法院税的最大金额是多少？',
    answer: '可变费用上限为 10,000 欧元。加上固定费用，最高总额可能会更高，具体取决于程序类型。',
  },
  {
    question: '什么是 Model 696？',
    answer: '这是西班牙税务局 (AEAT) 的官方表格，用于自缴诉讼权行使税。',
  },
  {
    question: '刑事案件需要缴纳法院税吗？',
    answer: '不需要。在西班牙，刑事案件的手续不需要缴纳法院税。',
  },
  {
    question: '可变费用是如何计算的？',
    answer: '诉讼金额 100 万欧元以内，可变费用为 0.5%。超过 100 万的部分为 0.25%。上限为 10,000 欧元。',
  },
];

const howToData = [
  {
    name: '选择缴税主体',
    text: '指示您是个人（豁免）还是法人（公司）。个人不支付费用。',
  },
  {
    name: '选择管辖与程序',
    text: '选择法律领域（民事、行政争议或社会/劳动）和程序类型。',
  },
  {
    name: '输入诉讼金额',
    text: '输入诉讼请求的总金额。对于社会/劳动领域，此项不适用。',
  },
  {
    name: '查看明细',
    text: '自动获取 Model 696 的固定费用、可变费用和总额计算结果。',
  },
];

const bibliographyData = [
  {
    name: '第 10/2012 号法院税法 (BOE)',
    url: 'https://www.boe.es/',
  },
  {
    name: '关于法院税的 TC 140/2016 判决',
    url: 'https://www.boe.es/',
  },
  {
    name: '税务局 - Model 696',
    url: 'https://sede.agenciatributaria.gob.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '西班牙法院税计算器 2026：完整指南',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>法院税计算器</strong>是一款专为准确确定西班牙诉讼权财政成本而设计的技术工具，符合第 10/2012 号法律的规定。',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  bibliographyTitle: '来源与参考资料',
  ui: {
    labelTitle: '法院税计算器',
    labelDescription: '根据管辖、程序和金额计算 Model 696 的准确金额。适用于西班牙公司和专业人士。',
    labelLegalParameters: '法律参数',
    labelEntityType: '缴税主体',
    labelJurisdiction: '管辖',
    labelProcedure: '程序类型',
    labelClaimAmount: '诉讼金额',
    labelEstimatedSettlement: '预计结算',
    labelExemptSubject: '豁免主体',
    labelFixedQuote: '固定费用（程序）',
    labelVariableQuote: '可变费用 (0.5% / 0.25%)',
    labelTaxableBase: '计税基础',
    labelCopySettlement: '复制结算结果',
    labelEntityJuridica: '法人（有限公司、股份公司）',
    labelEntityFisica: '个人（豁免）',
    labelCivilOrder: '民事领域',
    labelAdministrativeOrder: '行政争议',
    labelSocialOrder: '社会/劳动领域',
    labelModel696: 'AEAT Model 696',
    labelOrdinary: '普通审判',
    labelVerbal: '口头审判 / 督促程序',
    labelExecutive: '执行程序',
    labelAppeal: '上诉',
    labelCassation: '终审上诉',
    labelAbbreviated: '简易程序',
    labelSupplication: '复议请求',
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
