import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationPurchasingPowerUI } from '../ui';

const title = '通货膨胀与购买力变化计算器';
const description = '查看年度通胀假设如何改变保持购买力所需的金额，以及现金随时间变化的实际价值。';
const ui: InflationPurchasingPowerUI = {
  amountLabel: '起始金额', amountHelp: '整个计算过程使用同一种货币', inflationLabel: '年度通胀率 (%)', inflationHelp: '这是情景假设，不是预测', yearsLabel: '时间范围（年）', yearsHelp: '选择1到80年', cashFlowLabel: '年度现金流', cashFlowHelp: '每年加入余额或从余额中扣除', cashFlowModeLabel: '现金流情景', noCashFlowOption: '没有周期性现金流', contributionOption: '每年增加', withdrawalOption: '每年取出', costEquivalentLabel: '期末等价成本', realValueLabel: '按今天货币计算的期末价值', nominalBalanceLabel: '期末名义余额', purchasingPowerLossLabel: '损失的购买力', todayLabel: '今天', endLabel: '时间范围结束', costLineLabel: '购买同样商品篮子的成本', realLineLabel: '未变化现金的购买力', balanceLineLabel: '按今天货币计算的情景余额', chartDescription: '通胀变化图，展示成本上升、购买力下降和情景余额', chartNote: '每条线都与起始金额比较', milestoneTitle: '同一货币中的关键节点', yearHeader: '年份', costHeader: '等价成本', realHeader: '未变化现金', balanceHeader: '实际余额', methodTitle: '变化图的计算方法', methodText: '等价成本等于起始金额乘以 (1 + 年度通胀率) 的年数次方。未变化现金的价值等于起始金额除以同一个系数。增加金额在每年年底加入，取出金额在每年年底扣除，余额不会低于零。', limitationText: '这是透明的情景模型，不是历史消费者价格指数查询、投资回报预测或个人财务建议。你的家庭商品篮子可能不同于公布的消费价格指数，实际通胀也可能逐年变化。', emptyMessage: '请输入正数金额、超过 -100% 的比率、1到80之间的整数年数，以及非负现金流。', contributionSummary: '虚线表示加入周期性金额后余额按今天货币计算的价值，不包含投资回报。', withdrawalSummary: '虚线表示取出周期性金额后余额按今天货币计算的价值，不包含投资回报。', noCashFlowSummary: '实线只展示通胀影响：一条表示同一商品篮子的未来成本，另一条表示未变化现金可以买到的数量。', depletionWarning: '取出情景在第 {year} 年达到零，之后各年仍为零。', scenarioNote: '仅情景', currencyHint: '与起始金额相同的货币', yearsSuffix: '年', amountSuffix: '使用与起始金额相同的货币',
};
const faq = [
  { question: '通货膨胀如何降低购买力？', answer: '当整体价格水平上升时，同样的金额可以买到更少的商品和服务。计算器通过用复合通胀系数除以未变化现金来展示这种影响。' },
  { question: '等价成本和实际价值有什么区别？', answer: '等价成本是未来购买今天同样商品篮子所需的金额。实际价值则用今天的货币表示未变化现金在时间范围结束时能买到什么。' },
  { question: '增加和取出情景包括什么？', answer: '现金流在每年年底加入或扣除。不包括投资回报、税费、手续费和利息，取出情景的余额不会低于零。' },
  { question: '通胀率是预测吗？', answer: '不是。这是用于探索敏感性的假设。实际通胀可能不同，公布的价格指数也可能不符合你家庭的消费结构。' },
];
const howTo = [
  { name: '输入起始金额', text: '输入你想检查未来购买力的金额，并在整个计算中使用同一种货币。' },
  { name: '设置通胀情景', text: '输入年度比率和整数年数。通过比较多个比率来观察敏感性。' },
  { name: '加入可选现金流', text: '选择每年增加或每年取出，然后输入金额。若只想观察通胀，请选择没有周期性现金流。' },
  { name: '阅读曲线和关键节点', text: '比较期末等价成本与按今天货币计算的期末价值，再查看关键节点表。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'zh' };
const seo = [
  { type: 'title' as const, text: '用通胀变化图规划未来购买力', level: 2 },
  { type: 'paragraph' as const, html: '<p>通货膨胀会改变价格水平，因此不变的金额在未来可能买到更少的东西。本计算器把购买同样商品篮子所需的金额，与未变化现金保留的购买力分开显示。</p>' },
  { type: 'paragraph' as const, html: '<p>输入起始金额、年度通胀假设和时间范围。计算器每年复合计算比率，并显示上升的等价成本以及下降的现金购买力。</p>' },
  { type: 'title' as const, text: '两个核心读数', level: 3 },
  { type: 'table' as const, headers: ['读数', '公式', '回答的问题'], rows: [['等价成本', '起始金额 x (1 + 通胀率)^年数', '期末购买同样商品篮子需要多少？'], ['未变化现金的购买力', '起始金额 / (1 + 通胀率)^年数', '按今天货币计算，期末可以买什么？'], ['损失的购买力', '(1 - 1 / 价格系数) x 100', '起始购买力中有多少已经失去？']] },
  { type: 'paragraph' as const, html: '<p>如果年度通胀率为3%，1,000在十年后对应的成本约为1,344。如果1,000保持现金形式不变，其购买力约等于今天货币的744。</p>' },
  { type: 'title' as const, text: '为什么复合计算很重要', level: 3 },
  { type: 'paragraph' as const, html: '<p>每年的价格会成为下一年的基础，所以年度通胀率会累积。3%持续十年并不是简单增加30%，而是1.03的十次方，约为1.344。</p>' },
  { type: 'list' as const, items: ['测试低、中、高三种比率。', '用关键节点表找出明显变贵的支出。', '把等价成本与储蓄目标、收入或养老金比较。', '记录使用的假设和日期，资料变化后及时更新。'] },
  { type: 'title' as const, text: '加入增加额或取出额', level: 3 },
  { type: 'paragraph' as const, html: '<p>现金流情景可以用于查看储蓄或支出计划，同时保留通胀影响。增加额在年末加入名义余额，取出额在年末扣除，余额耗尽后停留在零。</p>' },
  { type: 'paragraph' as const, html: '<p>虚线余额使用同一个通胀系数换算为今天的货币。它不是投资预测，不包含利息、市场回报、税费、手续费或增加额的增长。</p>' },
  { type: 'tip' as const, title: '使用范围，不要把它当承诺', html: '<p>价格指数描述的是平均商品篮子，而你的住房、能源、食品和医疗支出可能有不同变化。请测试多个比率。</p>' },
  { type: 'title' as const, text: '变化图无法告诉你的内容', level: 3 },
  { type: 'paragraph' as const, html: '<p>本工具不会读取历史消费者价格指数，不会预测通胀，也不会推荐投资。逐年变化的比率、资产回报、债务利息和不规则现金流也没有建模。</p>' },
  { type: 'paragraph' as const, html: '<p>面对重要决定时，请把结果与合适的价格指数、真实支出记录以及相关产品或收入的条款进行比较。数学上自洽的结果仍可能无法准确描述你的家庭。</p>' },
];
export const content: ToolLocaleContent<InflationPurchasingPowerUI> = { slug: 'inflation-purchasing-power-timeline-calculator', title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo };
