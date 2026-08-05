import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolving-card-calculator';
const title = '循环贷信用卡与高利贷计算器';
const description = '计算信用卡循环贷的还款时间与利息总额，评估利率风险及法律合规界限。';

const faqData = [{ question: '什么是信用卡循环贷？', answer: '循环贷允许持卡人选择按最低还款额还款。' }];
const howToData = [{ name: '选择监管市场', text: '选择国家或自定义红线。' }];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: '信用卡循环贷的工作原理' }, { type: 'paragraph', html: '循环贷允许持卡人选择按最低还款额还款。' }],
  ui: {
    title: '循环贷信用卡与利率合规计算器',
    balanceLabel: '未还欠款',
    creditLimitLabel: '信用额度',
    aprLabel: '年利率 (APR %)',
    paymentTypeLabel: '还款方式',
    paymentTypeFixed: '每月固定金额',
    paymentTypePercentage: '按欠款比例还款',
    paymentValueLabel: '还款数值 (金额或%)',
    minPaymentValueLabel: '最低还款额限制',
    currencyLabel: '货币',
    marketLabel: '监管市场 / 国家',
    marketES: '西班牙 (Banco de España)',
    marketUS: '美国 (CFPB标准)',
    marketUK: '英国 (FCA)',
    marketEU: '欧盟 (ECB)',
    marketJP: '日本 (金融厅)',
    marketKR: '韩国 (金融委员会)',
    marketCN: '中国 (中国人民银行 / 最高法24%红线)',
    marketBR: '巴西 (中央银行)',
    marketMX: '墨西哥 (墨西哥银行)',
    marketPL: '波兰 (KNF)',
    marketID: '印度尼西亚 (OJK)',
    marketTR: '土耳其 (BRSA)',
    marketRU: '俄罗斯 (中央银行)',
    marketSE: '瑞典 (Finansinspektionen)',
    marketAU: '澳大利亚 (ASIC)',
    marketCA: '加拿大 (FCAC)',
    marketCustom: '自定义上限',
    customThresholdLabel: '自定义年利率红线 (APR %)',

    resultsTitle: '还款模拟结果',
    totalInterestLabel: '累计支付利息',
    totalPaidLabel: '累计还款总额',
    monthsToPayLabel: '还清所需月数',
    infiniteDebtWarning: '无限债务警告！每月还款额不足以支付当月利息，债务将永远无法还清。',
    payoffYearsLabel: '还款时间线',

    usuryTitle: '利率与合规诊断',
    usurySafeStatus: '标准合理 (低风险)',
    usuryWarningStatus: '偏高利率 (中风险)',
    usuryUsuriousStatus: '可能构成高利贷/畸高 (高风险)',
    usuryReferenceLabel: '市场平均年利率',
    usuryThresholdLabel: '高利率预警红线',

    tableTitle: '逐月还款明细表',
    tableHeaderMonth: '期数',
    tableHeaderInitial: '期初欠款',
    tableHeaderInterest: '当期利息',
    tableHeaderPrincipal: '偿还本金',
    tableHeaderPayment: '还款金额',
    tableHeaderFinal: '期末欠款',

    copyTooltip: '复制报告',
    copiedLabel: '报告已复制！',
    currencySymbol: '¥',
    percentSymbol: '%',
  },
};
