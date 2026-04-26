import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: '初始投资',
  labelFinalValue: '最终价值 / 当前余额',
  labelTimeSelection: '投资期限',
  labelYears: '年',
  labelMonths: '个月',
  labelDays: '天',
  labelROI: '投资回报率 (ROI)',
  labelCAGR: '年化增长率 (CAGR)',
  labelNetProfit: '净利润',
  labelLinearGrowth: '线性增长（估计）',
  labelExponentialGrowth: '复利增长 (CAGR)',
  labelPositiveResult: '盈利投资',
  labelNegativeResult: '亏损状态',
  labelCopyResult: '复制结果',
  labelCopied: '已复制！',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'profitability-calculator-roi-cagr',
  title: '投资盈利计算器：ROI & CAGR',
  description: '精确分析您的投资绩效。计算 ROI 和 CAGR 以了解您的真实年化收益。',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI 与 CAGR：哪个指标更好？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> 显示总收益百分比，但忽略了时间。<strong>CAGR</strong> 对于长期分析更具优势，因为它将回报“年化”。',
    },
  ],
  faq: [
    {
      question: '多少 CAGR 才算好？',
      answer: '从历史来看，标普 500 指数的年化回报率约为 7-10%。',
    },
  ],
  bibliography: [
    {
      name: 'ROI 定义 - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: '输入初始资本',
      text: '输入您最初投资的金额。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: '投资盈利计算器',
      description: '计算投资的 ROI 和 CAGR。',
    },
  ],
};
