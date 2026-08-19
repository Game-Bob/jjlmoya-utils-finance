import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'pesetas-to-euros-with-inflation-calculator';
const title = 'ペセタをユーロに換算 2026年の価値';
const description = 'スペインのペセタを1ユーロ166.386ペセタの固定レートでユーロに換算し、スペインのCPIで2026年までの購買力を推定します。';
const faq = [
  { question: '1,000ペセタは何ユーロですか？', answer: '固定換算レートでは1,000ペセタは6.01ユーロです。選択した年にその金額が持っていた購買力も別に推定します。' },
  { question: '100万ペセタは何ユーロですか？', answer: '固定レートでは100万ペセタは6,010.12ユーロです。2026年の購買力の推定値は、その金額が使われた年によって変わります。' },
  { question: 'ペセタをユーロに換算する方法は？', answer: 'ペセタの金額を166.386で割ります。例えば100ペセタは0.60ユーロ、10,000ペセタは60.10ユーロです。' },
  { question: '昔のペセタは2026年にいくらの価値がありますか？', answer: '答えは2つあります。固定換算は公式のユーロ金額を示し、CPI調整値は同程度の平均的な購買力に必要な2026年のユーロを推定します。' },
  { question: '古い硬貨や紙幣のコレクション価値も計算しますか？', answer: 'いいえ。通貨換算と平均的な購買力を計算します。希少な硬貨や紙幣の市場価値は、状態、希少性、需要によって別に決まります。' },
  { question: '何年のペセタを計算できますか？', answer: '1980年から2026年までの開始年を選べます。2026年の基準は最新公開CPIデータを使っており、確定した年間平均ではありません。' },
  { question: '購買力の推定値は正確な価格ですか？', answer: 'いいえ。CPIに基づく平均的な比較であり、住宅、賃金、食品、エネルギー、特定の商品価格を正確に示すものではありません。' },
];
const howTo = [
  { name: 'ペセタの金額を入力', text: 'レシート、紙幣、硬貨、歴史資料などに書かれた金額を入力します。' },
  { name: '年を選択', text: '年代を選び、その金額が使われた年を選択します。' },
  { name: '固定換算を確認', text: 'ペセタを166.386で割った名目ユーロ金額を確認します。' },
  { name: '購買力を比較', text: '固定換算と2026年の平均的な購買力の推定値を比較します。' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ja' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: '歴史的な金額', labelAmountHint: '開始点を選択', labelOriginYear: '起点の年', labelOriginYearHint: '利用可能な場合の年間CPI平均', labelReferenceYear: '2026年の現在までの基準', labelNominalEuros: '固定換算', labelTodayValue: '推定購買力', labelPurchasingPowerChange: '購買力の変化', labelNominalDifference: '換算との差額', labelConversionRate: '1ユーロあたりのペセタ', labelCpiMethod: 'CPI倍率', labelPreset100: '100ペセタ', labelPreset1000: '1,000ペセタ', labelPreset10000: '10,000ペセタ', labelPreset100000: '100,000ペセタ', labelPesetas: 'ペセタ', labelEuro: 'ユーロ', labelFrom: '開始', labelTo: '終了', labelOpenYears: '起点の年を開く', labelCloseYears: '起点の年を閉じる', labelDecade: '年代を選択', labelCoin: '硬貨', labelBanknote: '紙幣', labelCashPieces: '貨幣', labelState: '価値の変化', labelStatePositive: '上昇', labelStateNeutral: '変化なし', labelStateNegative: '低下', labelReset: '例をリセット', currencyLocale: 'ja-JP' },
  seo: [
    { type: 'title', text: 'ペセタをユーロに換算する2つの答え', level: 2 },
    { type: 'paragraph', html: '昔の価格、給料、レシート、硬貨、紙幣をスペインのペセタで持っている場合、この換算ツールは2つの答えを示します。固定レートによるユーロ換算と、スペインの物価変化に基づく2026年の購買力の推定です。' },
    { type: 'title', text: 'ペセタとユーロのよくある換算', level: 2 },
    { type: 'paragraph', html: '固定レートは1ユーロにつき166.386ペセタです。年によって名目換算は変わりません。' },
    { type: 'table', headers: ['昔の金額', '固定換算'], rows: [['1ペセタ', '0.01ユーロ'], ['25ペセタ', '0.15ユーロ'], ['50ペセタ', '0.30ユーロ'], ['100ペセタ', '0.60ユーロ'], ['500ペセタ', '3.01ユーロ'], ['1,000ペセタ', '6.01ユーロ'], ['2,000ペセタ', '12.02ユーロ'], ['5,000ペセタ', '30.05ユーロ'], ['10,000ペセタ', '60.10ユーロ'], ['100万ペセタ', '6,010.12ユーロ']] },
    { type: 'title', text: 'ペセタは2026年にいくらの価値ですか', level: 2 },
    { type: 'paragraph', html: 'CPI調整値はユーロ換算とは異なる質問に答えます。選択した金額が起点の年に購入できた平均的な商品やサービスと同程度のものを、2026年に購入するためのユーロを推定します。2026年の基準は現在までの最新データで、確定した年間平均ではありません。' },
    { type: 'table', headers: ['結果', '意味'], rows: [['固定換算', '公式レートによる正確な名目ユーロ金額。'], ['CPI調整値', '2026年の同程度の平均購買力の推定値。'], ['差額', '固定換算とCPI推定値の差。']] },
    { type: 'title', text: '昔のペセタ金額を計算する方法', level: 2 },
    { type: 'list', items: ['レシート、紙幣、硬貨、資料の金額を入力します。', '金額が使われた年を選択します。', '直接のユーロ換算には固定換算を使います。', '歴史的な購買力の比較にはCPI調整値を使います。', '差額はインフレの説明として読み、個別商品の価格予測とは考えないでください。'] },
    { type: 'title', text: '硬貨や紙幣のコレクション価格を自動的に示すものではありません', level: 2 },
    { type: 'paragraph', html: 'このツールは通貨換算とインフレを計算するもので、貨幣の鑑定ではありません。希少な硬貨や古い紙幣の市場価値は、年、状態、希少性、需要によって異なります。' },
    { type: 'tip', title: '年で変わるのは購買力で、換算レートではありません', html: '公式レートは1ユーロ166.386ペセタのままです。起点の年によって変わるのはCPIの比較だけで、平均的な消費かごを表します。' },
  ],
  faq, bibliography, howTo, schemas,
};
