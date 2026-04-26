import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'rent-increase-calculator';
const title = '西班牙租金上涨计算器 IPC 3% 上限';
const description = '根据西班牙《住房法》，使用消费者物价指数 (IPC) 或 3% 的法定上限计算您的租金更新。';

const faqData = [
  {
    question: '2024 年和 2025 年允许的最大租金涨幅是多少？',
    answer: '根据第 12/2023 号《住房权法》，在 2024 年和 2025 年期间，常住住房租赁合同的租金每年最高涨幅被法律限制为 3%。',
  },
  {
    question: '每年必须根据 IPC 涨房租吗？',
    answer: '并非法律强制。房租如果要涨，租赁合同中必须包含明确提到年度更新的条款。如果合同中没有该条款，则在合同有效期内必须维持最初约定的价格。',
  },
  {
    question: '房东必须提前多久通知房租上涨？',
    answer: '房东必须至少提前一个月（30 天）以书面形式通知租客，告知新租金开始适用的日期。',
  },
  {
    question: '如果 IPC 高于 3% 的法定上限会怎样？',
    answer: '即使国家统计局公布的实际 IPC 为 5% 或 6%，在 2024 年和 2025 年期间，常住住房的房东依法也不得要求超过 3% 的涨幅。',
  },
];

const howToData = [
  {
    name: '输入您当前的租金',
    text: '输入您目前每月实际支付的租金金额。',
  },
  {
    name: '选择计算模式',
    text: '选择 3% 的法定上限（推荐）或根据需要手动输入百分比。',
  },
  {
    name: '查看结果',
    text: '您将立即获得预计的新租金、每月增加额以及每年的额外支出。',
  },
  {
    name: '复制摘要',
    text: '生成一份快速报告，发送给房东或保存在您的笔记中。',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026 年西班牙租金上涨计算器 3% 上限指南',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '在西班牙，<strong>消费者物价指数 (IPC)</strong> 传统上是用于调整房租价格的指标。然而，随着第 <strong>12/2023 号《住房权法》</strong>的实施，引入了每个租客和房东都必须了解的限制。',
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: '租金上涨计算器',
    labelDescription: '根据 IPC 调整您的租金，或安全地应用 3% 的法定上限。',
    labelCurrentRent: '当前租金',
    labelCurrentRentPlaceholder: '例如 800',
    labelIncrementType: '更新模式',
    labelLegalLimit: '住房法上限 (3%)',
    labelManualIncrement: '手动增加 (%)',
    labelManualPercentagePlaceholder: '例如 2.5',
    labelNewRentEstimate: '预计薪租金',
    labelMonthlyIncrease: '每月增加额',
    labelYearlyExtra: '每年额外支出',
    labelLegalBadge: '根据 12/2023 号法律限制为 3%',
    labelCopyButton: '复制发送给房东',
    labelCopySuccess: '已复制！',
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
