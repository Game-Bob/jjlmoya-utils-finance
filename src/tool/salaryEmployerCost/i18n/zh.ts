import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = 'spain-gross-net-salary-employer-cost-calculator';
const title = "西班牙税前税后工资与企业雇佣成本计算器 2026";
const description = "根据2026年西班牙最新法规，计算税前年薪对应的税后到手工资、IRPF个人所得税、员工社保扣款及企业总雇佣成本。";

const faq = [
  {
    "question": "在西班牙雇佣一名员工，企业实际需要承担多少成本？",
    "answer": "企业需支付税前薪资加上企业承担的社保费用。以3万欧元年薪的正规办公岗为例，2026年企业总成本约为 39,645 欧元。"
  },
  {
    "question": "在西班牙如何从税前薪资计算税后到手薪资？",
    "answer": "从税前年薪中扣除员工个人社保和IRPF个人所得税预扣款。"
  },
  {
    "question": "选择12薪还是14薪会影响年总薪资吗？",
    "answer": "不会。计算器保持年税前总薪资和企业总成本不变，仅调整单期平均发放金额。"
  },
  {
    "question": "2026年计算中包含了哪些社保费率？",
    "answer": "包含常见疾病、失业、职业培训、MEI跨代公平机制、FOGASA基金及工伤险。"
  },
  {
    "question": "薪资超过最高社保缴费基数会怎样？",
    "answer": "2026年月基数上限为5,101.20欧元，超过部分将按阶梯征收团结累进社保费。"
  },
  {
    "question": "本计算器适用于西班牙以外的国家吗？",
    "answer": "不适用。本计算器专为西班牙2026年通用社保制度设计。"
  },
  {
    "question": "薪资数据会被发送到服务器吗？",
    "answer": "不会。所有计算均在您的浏览器本地进行。"
  }
];

const howTo = [
  {
    "name": "输入税前薪资",
    "text": "选择按年或按月输入，并填写税前金额。"
  },
  {
    "name": "设置西班牙薪水参数",
    "text": "选择12/14薪、合同类型、IRPF个税预扣率及工伤费率。"
  },
  {
    "name": "查看薪资结构拆解",
    "text": "对比税后到手金额、员工扣款及企业社保缴纳部分。"
  },
  {
    "name": "切换结果展示周期",
    "text": "查看按年总额或单期平均发放金额。"
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "zh",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "税前薪资输入",
    "labelGrossSalaryHint": "薪资金额",
    "labelAnnual": "按年",
    "labelMonthly": "按月",
    "labelPaySchedule": "发放薪期",
    "labelTwelvePayments": "每年12薪",
    "labelFourteenPayments": "每年14薪",
    "labelContract": "合同类型",
    "labelPermanent": "无固定期限合同 (正式员工)",
    "labelTemporary": "固定期限合同 (临时/项目)",
    "labelIrpfRate": "IRPF 个人所得税预扣率",
    "labelIrpfHint": "请输入税务局计算器、Offer或工资单上的预扣税率",
    "labelRiskRate": "工伤与职业病保险费率 (AT & EP)",
    "labelRiskHint": "企业根据岗位风险支付的工伤保险费率",
    "labelOfficePreset": "纯办公人员 1.50%",
    "labelTradePreset": "销售/商务人员 2.00%",
    "labelConstructionPreset": "建筑/现场施工 6.70%",
    "labelNetCore": "税后净收入核心",
    "labelEmployeeDeductions": "员工扣款项",
    "labelDeductionsFormula": "IRPF个税 + 员工个人缴纳社保",
    "labelEmployerHalo": "企业缴纳社保光环",
    "labelEmployerCost": "企业总雇佣成本",
    "labelAnnualView": "按年视图",
    "labelPerPaymentView": "单期发放平均值",
    "labelGross": "税前薪资",
    "labelIrpf": "IRPF个税预扣",
    "labelEmployeeSocialSecurity": "员工个人社保",
    "labelContributionBase": "月社保缴水基数",
    "labelCostMultiplier": "相对于税前薪资的成本倍数",
    "labelWorkerKeeps": "到手净薪占企业总成本比例",
    "labelLeanGap": "紧凑成本区间",
    "labelTypicalGap": "标准成本区间",
    "labelWideGap": "扩展成本区间",
    "labelModelScope": "仅适用于西班牙。基于2026年通用社保制度、全职工作及现金薪资。计算结果仅供参考。",
    "labelReset": "重置示例",
    "labelInvalid": "请输入有效的全职年薪，并将税率与工伤费率保持在允许范围内。",
    "labelMinimumSalary": "本模型自2026年西班牙全职最低工资（年薪 17,094 €）起计算。",
    "labelPrivacy": "在您的浏览器中本地计算"
},
  seo: [
    { type: 'title', text: "从税前薪资到西班牙企业的实际雇佣成本", level: 2 },
    { type: 'paragraph', html: "根据2026年西班牙最新法规，计算税前年薪对应的税后到手工资、IRPF个人所得税、员工社保扣款及企业总雇佣成本。" },
    { type: 'title', text: "西班牙企业雇佣成本计算公式", level: 2 },
    { type: 'paragraph', html: "企业需支付税前薪资加上企业承担的社保费用。以3万欧元年薪的正规办公岗为例，2026年企业总成本约为 39,645 欧元。" },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "税后净收入核心"], ['Employer Cost', "企业总雇佣成本"]] },
    { type: 'title', text: "2026年西班牙社会保险费率构成", level: 2 },
    { type: 'paragraph', html: "包含常见疾病、失业、职业培训、MEI跨代公平机制、FOGASA基金及工伤险。" },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["纯办公人员 1.50%", '1.50%'], ["销售/商务人员 2.00%", '2.00%'], ["建筑/现场施工 6.70%", '6.70%']] },
    { type: 'title', text: "缴费基数上限与高薪团结税", level: 2 },
    { type: 'paragraph', html: "2026年月基数上限为5,101.20欧元，超过部分将按阶梯征收团结累进社保费。" },
    { type: 'title', text: "12薪与14薪的区别", level: 2 },
    { type: 'paragraph', html: "不会。计算器保持年税前总薪资和企业总成本不变，仅调整单期平均发放金额。" },
    { type: 'tip', title: "发放薪期", html: "选择12/14薪、合同类型、IRPF个税预扣率及工伤费率。" },
    { type: 'title', text: "本西班牙薪水估算模型的适用边界", level: 2 },
    { type: 'paragraph', html: "仅适用于西班牙。基于2026年通用社保制度、全职工作及现金薪资。计算结果仅供参考。" },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
