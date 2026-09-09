import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "方案 A",
  labelScenarioB: "方案 B",
  labelScenarioName: "方案名称",
  labelCurrency: "货币",
  labelApproximateRates: "用于规划的近似换算系数，不是实时汇率。",
  labelPrincipal: "借款金额",
  labelTerm: "还款期限",
  labelMonths: "个月",
  labelInputBasis: "你知道哪些数据？",
  labelAnnualRate: "名义年利率",
  labelMonthlyPayment: "已知月供",
  labelUpfrontFees: "前期费用",
  labelMonthlyFees: "月度费用",
  labelFinalFees: "最后费用",
  labelOfferNameA: "方案 A",
  labelOfferNameB: "方案 B",
  labelRateMode: "我知道利率",
  labelPaymentMode: "我知道月供",
  labelPreset: "开始比较",
  labelPresetBalanced: "均衡方案",
  labelPresetLowFee: "低利率加费用",
  labelPresetLongTerm: "更长期限",
  labelReset: "重置数值",
  labelCopy: "复制比较结果",
  labelCopied: "已复制比较结果",
  labelEffectiveApr: "有效年度成本",
  labelNominalRate: "名义利率",
  labelMonthlyPaymentResult: "月供",
  labelTotalPaid: "总支付",
  labelTotalFees: "场景费用",
  labelFinanceCost: "超过本金的成本",
  labelNetCashReceived: "扣除前期费用后的到账金额",
  labelWinner: "哪个方案成本更低？",
  labelLowerCost: "有效成本更低",
  labelHigherCost: "有效成本更高",
  labelTie: "几乎相同",
  labelNeedValidInputs: "需要有效数据",
  labelInvalidPrincipal: "借款金额必须大于零，并且高于前期费用。",
  labelInvalidTerm: "请输入1到600个月之间的整数期限。",
  labelInvalidFees: "费用不能为负数。",
  labelInvalidPayment: "请输入能够偿还到账净额的正数月供。",
  labelInvalidRate: "请输入0%到100%之间的名义年利率。",
  labelNoComparison: "请填写两个方案后再比较。",
  labelTimeline: "付款时间线",
  labelStart: "开始",
  labelMonthly: "每月",
  labelEnd: "最后一个月",
  labelFormula: "比较方式",
  labelFormulaText:
    "有效年度成本是将月利率年化后的结果，它使到账金额等于折现后的付款和费用。",
  labelApproximation:
    "估算假设月供相同、没有宽限期，并且只包含你输入的费用。它不能替代贷款机构提供的正式 APR。",
  labelScenarioSummary: "场景摘要",
  currencyCode: "CNY",
  currencyLocale: "zh-CN",
};

const faq = [
  {
    question: "利率和有效年度成本有什么区别？",
    answer:
      "名义利率描述余额产生的利息。有效年度成本还会反映你输入的前期、月度和最后费用的金额与发生时间。",
  },
  {
    question: "可以输入月供而不是利率吗？",
    answer:
      "可以。请为该方案选择已知月供，计算器会根据到账金额、付款流和费用推算相应的月利率。",
  },
  {
    question: "哪个方案更便宜？",
    answer:
      "先比较有效年度成本，再查看总支付和到账金额。如果期限或金额不同，百分比较低的方案仍可能有更高的总成本。",
  },
  {
    question: "这是贷款机构的正式 APR 吗？",
    answer:
      "不是。这是根据输入数据得出的透明场景估算。不同贷款机构和地区可能以不同方式计算税费、保险、付款日期和其他成本。",
  },
];

const howTo = [
  {
    name: "输入金额和期限",
    text: "为每个方案输入预计到账金额和月度还款次数。",
  },
  { name: "选择已知数据", text: "根据方案资料输入名义年利率或月供。" },
  {
    name: "加入所有费用",
    text: "输入开始时、每月和最后产生的费用，以反映完整现金流。",
  },
  {
    name: "阅读比较结果",
    text: "使用有效年度成本比较，并在决定前查看总支付和到账金额。",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "贷款 APR 场景计算器",
    description: "比较包含利率、月供和费用的两个贷款场景。",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "比较两个贷款方案",
    description: "建立两个贷款的现金流并比较有效年度成本。",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "loan-apr-scenario-calculator",
  title: "贷款 APR 场景计算器",
  description:
    "比较两个贷款方案的利率、还款安排和费用，在决定前估算有效年度成本。",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    { type: "title", text: "按有效年度成本比较贷款", level: 2 },
    {
      type: "paragraph",
      html: "<p>较低的广告利率可能隐藏手续费、月度服务费或最后费用。这个计算器会把两个方案的细节转换为可比较的现金流，让你看到实际到账资金的成本。</p>",
    },
    { type: "title", text: "估算包含哪些内容", level: 3 },
    {
      type: "paragraph",
      html: "<p>为每个方案输入借款金额、期限、名义年利率或已知月供，以及不同时间产生的费用。计算器会找到使到账净额与折现后的付款和费用相平衡的月利率，然后将其年化。</p>",
    },
    {
      type: "paragraph",
      html: "<p>这样比较的不只是利率本身。正式 APR 可能遵循地区规则并包含你没有输入的假设，因此这里的结果明确属于估算。</p>",
    },
    { type: "title", text: "如何阅读结果", level: 3 },
    {
      type: "list",
      items: [
        "当金额和期限接近时，比较有效年度成本。",
        "查看总支付，了解实际现金影响。",
        "查看扣除前期费用后的到账金额。",
        "使用付款时间线了解每项费用何时发生。",
      ],
    },
    {
      type: "tip",
      title: "最终请以贷款文件为准",
      html: "<p>比较真实合同时，请用相同假设核对贷款机构的 APR。确认保险、税费、浮动利率、提前还款费用以及未输入的收费。</p>",
    },
    { type: "title", text: "场景估算的限制", level: 3 },
    {
      type: "paragraph",
      html: "<p>工具假设月供相同、没有宽限期，并只处理开始时、期限中或最后一个月的费用。它不能证明负担能力、审批结果、合法性或产品的正式 APR。</p>",
    },
  ],
};
