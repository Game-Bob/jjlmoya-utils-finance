import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: '总储蓄额',
  labelExpenses: '当前支出',
  labelMonthly: '每月',
  labelYearly: '每年',
  labelTimeRemaining: '您的生存跑道',
  labelYears: '年',
  labelMonths: '个月',
  labelDays: '天',
  labelStatus: '财务安全状态',
  labelRedZone: '红区：高风险',
  labelYellowZone: '黄区：稳定',
  labelGreenZone: '绿区：财务自由',
  labelBurnRateDaily: '每日支出率',
  labelBurnRateMonthly: '每月支出率',
  labelWhatIf: '10% 节约法则',
  labelWhatIfDescription: '通过减少仅 10% 的支出，您可以显著延长生存跑道。',
  labelGainTime: '额外生存时间',
  labelCopyResult: '复制摘要',
  labelCopied: '已复制！',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'financial-freedom-calculator',
  title: '财务自由与生存跑道计算器',
  description: '精确计算您的储蓄能维持多久。我们的生存跑道工具可帮助您可视化财务独立。',
  ui,
  seo: [
    {
      type: 'title',
      text: '什么是财务生存跑道？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>生存跑道</strong>（runway）是指在没有新收入的情况下您可以维持生活的时间。它是衡量财务自由的终极指标。',
    },
  ],
  faq: [
    {
      question: '多少生存跑道才算好？',
      answer: '专家通常建议至少预留 3 到 6 个月的支出。为了真正的自由，目标应设定为 2 年或更长。',
    },
  ],
  bibliography: [
    {
      name: 'FIRE 运动原则',
      url: 'https://zh.wikipedia.org/wiki/FIRE_运动',
    },
  ],
  howTo: [
    {
      name: '输入总储蓄额',
      text: '输入您拥有的现金或流动资产总额。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: '财务自由计算器',
      description: '计算储蓄维持时间。',
    },
  ],
};
