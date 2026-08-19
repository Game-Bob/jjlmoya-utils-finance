import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'pesetas-to-euros-with-inflation-calculator';
const title = '西班牙比塞塔欧元换算器 2026 年价值';
const description = '按每欧元166.386比塞塔的固定汇率将西班牙比塞塔换算为欧元，并使用西班牙CPI估算截至2026年的购买力。';
const faq = [
  { question: '1,000比塞塔是多少欧元？', answer: '按固定换算汇率，1,000比塞塔等于6.01欧元。工具还会单独估算这笔钱在所选年份的购买力。' },
  { question: '100万比塞塔是多少欧元？', answer: '按固定汇率，100万比塞塔等于6,010.12欧元。2026年的购买力估算取决于这笔钱使用的年份。' },
  { question: '如何把比塞塔换算成欧元？', answer: '将比塞塔金额除以166.386。例如100比塞塔等于0.60欧元，10,000比塞塔等于60.10欧元。' },
  { question: '旧比塞塔在2026年值多少钱？', answer: '有两个答案。固定换算给出官方欧元金额，CPI调整结果估算在2026年获得相似平均购买力所需的欧元金额。' },
  { question: '工具会计算旧硬币或纸币的收藏价值吗？', answer: '不会。工具计算货币换算和平均购买力。稀有硬币或收藏纸币的市场价值还取决于品相、稀有程度和需求。' },
  { question: '比塞塔换算器支持哪些年份？', answer: '可以选择1980年至2026年的起始年份。2026年的参考值使用最新公布的CPI数据，目前还不是完整的年度平均值。' },
  { question: '购买力估算是准确的价格吗？', answer: '不是。这是基于CPI的平均比较，不是住房、工资、食品、能源或某次具体购买的准确价格。' },
];
const howTo = [
  { name: '输入比塞塔金额', text: '输入收据、纸币、硬币或历史文件上的金额。' },
  { name: '选择年份', text: '先选择年代，再选择金额使用的年份。' },
  { name: '查看固定换算', text: '查看将比塞塔除以166.386后得到的名义欧元金额。' },
  { name: '比较购买力', text: '将固定换算与2026年的平均购买力估算进行比较。' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: '历史金额', labelAmountHint: '选择起点', labelOriginYear: '起始年份', labelOriginYearHint: '有数据时使用年度CPI平均值', labelReferenceYear: '截至目前的2026年参考值', labelNominalEuros: '固定换算', labelTodayValue: '预计购买力', labelPurchasingPowerChange: '购买力变化', labelNominalDifference: '与换算值的差额', labelConversionRate: '每欧元比塞塔数', labelCpiMethod: 'CPI倍数', labelPreset100: '100比塞塔', labelPreset1000: '1,000比塞塔', labelPreset10000: '10,000比塞塔', labelPreset100000: '100,000比塞塔', labelPesetas: '比塞塔', labelEuro: '欧元', labelFrom: '起始', labelTo: '结束', labelOpenYears: '打开起始年份', labelCloseYears: '关闭起始年份', labelDecade: '选择年代', labelCoin: '硬币', labelBanknote: '纸币', labelCashPieces: '货币', labelState: '价值变化', labelStatePositive: '上升', labelStateNeutral: '不变', labelStateNegative: '下降', labelReset: '重置示例', currencyLocale: 'zh-CN' },
  seo: [
    { type: 'title', text: '比塞塔换算欧元的两个答案', level: 2 },
    { type: 'paragraph', html: '如果你手里有用西班牙比塞塔表示的旧价格、工资、收据、硬币或纸币，这个换算器会给出两个答案。它先显示固定汇率对应的欧元金额，再根据西班牙价格变化估算这笔钱在2026年的购买力。' },
    { type: 'title', text: '常见比塞塔欧元换算', level: 2 },
    { type: 'paragraph', html: '固定汇率始终是1欧元等于166.386比塞塔。年份不会改变名义换算结果。' },
    { type: 'table', headers: ['旧金额', '固定换算'], rows: [['1比塞塔', '0.01欧元'], ['25比塞塔', '0.15欧元'], ['50比塞塔', '0.30欧元'], ['100比塞塔', '0.60欧元'], ['500比塞塔', '3.01欧元'], ['1,000比塞塔', '6.01欧元'], ['2,000比塞塔', '12.02欧元'], ['5,000比塞塔', '30.05欧元'], ['10,000比塞塔', '60.10欧元'], ['100万比塞塔', '6,010.12欧元']] },
    { type: 'title', text: '比塞塔在2026年值多少钱', level: 2 },
    { type: 'paragraph', html: 'CPI调整结果回答的是与欧元换算不同的问题。它估算在2026年购买与所选金额在起始年份能够购买的平均商品和服务相近的消费篮子需要多少欧元。2026年参考值使用截至目前的最新数据，还不是完整年度平均值。' },
    { type: 'table', headers: ['结果', '含义'], rows: [['固定换算', '按官方汇率得到的准确名义欧元金额。'], ['CPI调整值', '2026年相当平均购买力的估算值。'], ['差额', '固定换算与CPI估算之间的差距。']] },
    { type: 'title', text: '如何计算旧比塞塔金额', level: 2 },
    { type: 'list', items: ['输入收据、纸币、硬币或文件上的金额。', '选择金额使用或收到的年份。', '需要直接欧元等值时使用固定换算。', '需要了解历史购买力时使用CPI值。', '将差额看作通胀背景，不要当作个人价格预测。'] },
    { type: 'title', text: '硬币和纸币不会自动拥有这个收藏价值', level: 2 },
    { type: 'paragraph', html: '这个工具计算货币和通胀，不提供钱币鉴定。稀有硬币或旧纸币的市场价值会因年份、品相、稀有程度和需求而不同。' },
    { type: 'tip', title: '年份改变购买力，而不是汇率', html: '官方汇率仍然是每欧元166.386比塞塔。只有起始年份对应的CPI比较会变化，而且它描述的是平均消费篮子。' },
  ],
  faq, bibliography, howTo, schemas,
};
