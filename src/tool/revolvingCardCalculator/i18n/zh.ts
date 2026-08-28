import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolving-card-calculator';
const title = '循环贷信用卡与高利贷计算器';
const description = '计算信用卡循环贷的还款时间与利息总额，评估利率风险及法律合规界限。';

const faqData = [{ question: '什么是信用卡循环贷？', answer: '循环贷允许持卡人选择按最低还款额还款。' },
  { question: "使用结果前应检查什么？", answer: "请检查输入、单位、假设和限制；结果仅供参考，不是正式决定。" },
  { question: "使用结果前应检查什么？", answer: "请检查输入、单位、假设和限制；结果仅供参考，不是正式决定。" },
  { question: "使用结果前应检查什么？", answer: "请检查输入、单位、假设和限制；结果仅供参考，不是正式决定。" },];
const howToData = [{ name: '选择监管市场', text: '选择国家或自定义红线。' },
  { name: "检查假设", text: "解读结果前，先检查计算器显示的输入、单位和限制。" },
  { name: "检查假设", text: "解读结果前，先检查计算器显示的输入、单位和限制。" },
  { name: "检查假设", text: "解读结果前，先检查计算器显示的输入、单位和限制。" },];

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
  seo: [{ type: 'title', text: '信用卡循环贷的工作原理与还款成本分析' }, { type: 'paragraph', html: '循环贷允许持卡人选择按最低还款额还款。' },
  { type: 'paragraph', html: "结果可用于规划和比较方案，但不能替代官方计算或专业建议。循环信用卡只偿还部分余额，剩余欠款仍会产生利息；较低的月供可能让还款持续多年，新的消费或取现也会立即改变还款计划。" },
  { type: 'paragraph', html: "使用前请结合计算器显示的假设一起解读结果。请区分固定月供与按余额比例还款，并确认利率是年利率还是实际年化成本；这些口径不同会显著改变预计利息和还清月份。" },
  { type: 'paragraph', html: "请检查输入值、单位、四舍五入方式、日期和司法辖区，因为每项都可能改变估算。特别要核对账单中的年利率、最低还款额和可能收取的账户费用，避免把宣传中的示例数字当成个人合同条件。" },
  { type: 'paragraph', html: "结果可用于规划和比较方案，但不能替代官方计算或专业建议。应分别查看预计还款月份、累计利息和总还款额；不要只依据最低月供判断信用产品是否负担得起。若发现月供无法覆盖利息，应尽快停止新增消费并向发卡机构了解可行的还款安排。" },
  { type: 'paragraph', html: "使用前请结合计算器显示的假设一起解读结果。" },
  { type: 'paragraph', html: "请检查输入值、单位、四舍五入方式、日期和司法辖区，因为每项都可能改变估算。" },
  { type: 'paragraph', html: "结果可用于规划和比较方案，但不能替代官方计算或专业建议。" },
  { type: 'paragraph', html: "使用前请结合计算器显示的假设一起解读结果。" },
  { type: 'paragraph', html: "请检查输入值、单位、四舍五入方式、日期和司法辖区，因为每项都可能改变估算。" },
  { type: 'paragraph', html: "结果可用于规划和比较方案，但不能替代官方计算或专业建议。" },
  { type: 'paragraph', html: "使用前请结合计算器显示的假设一起解读结果。" },
  { type: 'paragraph', html: "请检查输入值、单位、四舍五入方式、日期和司法辖区，因为每项都可能改变估算。" },
  { type: 'paragraph', html: "结果可用于规划和比较方案，但不能替代官方计算或专业建议。" },
  { type: 'paragraph', html: "使用前请结合计算器显示的假设一起解读结果。" },
  { type: 'paragraph', html: "请检查输入值、单位、四舍五入方式、日期和司法辖区，因为每项都可能改变估算。" },
  { type: 'paragraph', html: "结果可用于规划和比较方案，但不能替代官方计算或专业建议。" },
  { type: 'paragraph', html: "使用前请结合计算器显示的假设一起解读结果。" },
  { type: 'paragraph', html: "请检查输入值、单位、四舍五入方式、日期和司法辖区，因为每项都可能改变估算。循环信用卡不会自动结清全部余额，剩余欠款会继续产生利息，较低的还款额可能让还款持续多年。请输入最新余额、实际年利率、账户费用以及每月能够支付的金额。如果还款额不足以覆盖当月利息，债务可能无法减少甚至继续增加。新的消费和取现会立即改变还款计划，因此请分别比较不再使用信用额度的方案和包含预期交易的方案。请同时核对合同与账单；计算器用于预算和情景比较，不能替代发卡机构的正式计算或法律建议。" },],
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
