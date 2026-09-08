import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RenterInsuranceCoverageGapCalculatorUI } from '../ui';
export const ui: RenterInsuranceCoverageGapCalculatorUI = {
  labelPolicyLimit: '家庭财产保险限额', labelDeductible: '免赔额', labelSampleLoss: '示例损失', labelCurrency: '货币', labelApproximateRates: '换算使用规划用的近似系数，不是实时汇率。', labelPolicyBoundary: '保单边界', labelSetLimit: '设置限额', labelPolicyBoundaryHint: '使用保单中的家庭财产金额，然后测试一次可能的损失。', labelInventory: '重置成本清单', labelInventoryHint: '按类别估算今天重新购置全部物品需要的费用。', labelPolicyLimitHelp: '使用保单中的家庭财产限额，不要使用建筑物限额。', labelDeductibleHelp: '输入家庭财产理赔适用的免赔额。', labelSampleLossHelp: '仅用于在发现缺口后展示示例理赔情景。', labelTotalContents: '估计财产价值', labelCoverageGap: '潜在保障缺口', labelCoverageRatio: '估计保障比例', labelEstimatedPayout: '示例赔付', labelOutOfPocket: '示例自付金额', labelStatus: '保障评估', labelStatusSafe: '限额覆盖清单', labelStatusReview: '检查小额缺口', labelStatusExposed: '财产保障不足', labelStatusSafeText: '输入的财产限额至少达到清单中的重置成本。高价值物品的单项限额仍需单独检查。', labelStatusReviewText: '限额接近清单总额，但仍有小额缺口。请重新检查贵重物品和最近购买的物品。', labelStatusExposedText: '限额低于清单估值。在依靠保单应对全损之前，请先查看具体条款。', labelLargestCategories: '清单中金额最大的类别', labelCoverageLine: '保单限额', labelReplacementValue: '重置价值', labelLimitMarker: '限额标记', labelLossScenario: '损失情景', labelIllustrativePayout: '仅供参考：比例赔付条款不一定适用于您的保单。', labelReset: '重置示例', labelCopy: '复制摘要', labelCopied: '摘要已复制', labelCopyFailed: '请手动复制结果', labelInvalidInput: '检查突出显示的数值', labelMethodTitle: '估算方式', labelMethodText: '工具会汇总各类别估值，并与家庭财产限额比较。缺口是两者之间的正差值。示例赔付将保障比例应用于损失情景，再扣除免赔额。这是规划模型，不是实际理赔金额预测。保单可能包含单项限额、新价值规则、除外责任、第一风险保障或其他不足额保险处理方式。', labelPrivacyNote: '您的清单保留在此浏览器中。不需要账户、上传或服务器计算。', labelAmountPlaceholder: '0.00', labelCategoryFurniture: '家具和装饰', labelCategoryElectronics: '电子产品', labelCategoryClothing: '衣物和鞋类', labelCategoryKitchen: '厨房和家电', labelCategoryPersonal: '个人物品', labelCategoryOther: '其他财产',
};
const slug = 'renter-insurance-coverage-gap-calculator';
const title = '租房者家庭财产保险保障缺口计算器';
const description = '估算租房者家庭财产保险限额是否达到物品的重置价值。在浏览器中比较清单、保单限额、免赔额和示例损失。';
const faq = [
  { question: '这个租房保险计算器衡量什么？', answer: '它会汇总您输入的家庭财产重置价值，并与保单限额比较。差额是可能超出保障限额金额的规划估算。' },
  { question: '清单应使用什么价值？', answer: '请使用家具、电子产品、衣物、家电和个人物品当前合理的重置成本，并确认保单要求的新价值或其他估值方式。' },
  { question: '结果能证明保障不足吗？', answer: '不能。结果取决于清单、保单文字和估值假设。单项限额、除外责任、特别约定和不足额保险条款都可能改变理赔结果。' },
  { question: '为什么显示示例赔付？', answer: '它展示简单比例模型对输入损失额计算的结果，并扣除免赔额。这个数字用于理解缺口，不代表保险公司的实际赔付预测。' },
  { question: '需要计入房东的固定设施吗？', answer: '只计入按保单属于您家庭财产保障的物品。责任、建筑物、固定设施和家庭财产可能属于不同保障部分。' },
];
const howTo = [
  { name: '建立重置成本清单', text: '逐个房间查看物品，输入今天重新购置家庭财产的成本。分成六类后，最大金额来源会更清楚。' },
  { name: '输入家庭财产限额', text: '从保单明细或报价单中抄录家庭财产保险金额，不要使用建筑物或责任限额。' },
  { name: '加入免赔额和损失', text: '输入家庭财产理赔的免赔额和示例损失金额，查看示例自付情景。' },
  { name: '检查决策边界', text: '如果出现缺口，请与保险公司或经纪人核对贵重物品、单项限额、价值物品和最近购买的物品。' },
];
export const content: ToolLocaleContent<RenterInsuranceCoverageGapCalculatorUI> = { slug, title, description, ui, seo: [
  { type: 'title', text: '将保险限额与物品价值比较', level: 2 },
  { type: 'paragraph', html: '<p>租房者家庭财产保险在只选一个整数限额、没有按房间建立清单时容易不足。这款计算器将您自己的重置成本估算变成可见的保障边界，帮助您在需要理赔前发现缺口。</p>' },
  { type: 'title', text: '计算前准备什么', level: 2 },
  { type: 'list', items: ['家具、电子产品、衣物、家电和个人物品的重置成本估算。', '保单中的家庭财产限额，并与建筑物和责任保障分开。', '家庭财产理赔适用的免赔额。', '用于探索示例赔付的现实损失金额。'] },
  { type: 'title', text: '如何理解保障缺口', level: 2 },
  { type: 'paragraph', html: '<p>缺口是超过限额的家庭财产价值。缺口为零表示按您的假设两个总额相符，但不能确认每件物品都受保障。正数缺口提示您检查估值方式、高价物品单项限额、除外责任和不足额保险条款。</p>' },
  { type: 'table', headers: ['提示', '含义', '下一步'], rows: [['限额覆盖清单', '输入的限额至少达到重置成本总额。', '检查价值物品、单项限额和除外责任。'], ['检查小额缺口', '限额接近总额，但新购买或四舍五入可能有影响。', '重新查看最大类别并更新保单。'], ['财产保障不足', '输入限额明显低于重置成本总额。', '索取新报价或确认不足额保险的处理方式。']] },
  { type: 'title', text: '估算的局限', level: 2 },
  { type: 'paragraph', html: '<p>此工具不会读取保单，不判断损失是否承保，也不会计算有约束力的理赔金额。示例情景使用简单比例模型并扣除免赔额。真实保单可能包含不同的条款、限额、估值规则、除外责任或第一风险保障。</p>' },
  { type: 'tip', title: '留存证据的建议', html: '<p>为高价值物品保存收据、照片和带日期的清单。Financial Ombudsman Service 解释了没有计算完整重置成本为何会造成保障不足；西班牙保险合同法将保险金额视为最高赔偿额，除非保单另有约定，还规定了比例规则。</p>' },
], faq, bibliography, howTo, schemas: [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' } },
] };
