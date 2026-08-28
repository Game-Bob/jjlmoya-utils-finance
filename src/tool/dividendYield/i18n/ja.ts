import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DividendYieldUI } from '../ui';
import { bibliography } from '../bibliography';

const title = '株式配当利回り計算機';
const description = '株式のデータから、税引前と源泉徴収後の配当利回り、年間収入、成長シナリオを計算します。';
const faq = [
  { question: '配当利回りはどのように計算しますか？', answer: '1回あたりの配当金に年間の支払回数を掛け、株価で割って100を掛けます。四半期払いの場合は、先に4倍して年間配当にします。' },
  { question: '年間配当と四半期配当のどちらを入力しますか？', answer: '入力する金額に合う頻度を選びます。計算機は四半期払いを自動的に年間ベースへ換算します。' },
  { question: '税引前と税引後の配当収入の違いは何ですか？', answer: '税引前収入は入力した源泉徴収率を差し引く前の年間配当です。税引後収入はその率を使った簡易的な試算で、実際の税額とは異なる場合があります。' },
  { question: '配当利回りが高い株は良い株ですか？', answer: '必ずしもそうではありません。株価の下落で利回りが高く見えることがあり、企業は配当を減額または停止することもあります。企業とリスクを別に確認してください。' },
];
const howTo = [{ name: '株価を入力', text: '基準として使う1株あたりの価格を入力します。' }, { name: '配当金を入力', text: '1株あたりの配当金と、年間または四半期の支払頻度を選びます。' }, { name: '結果を確認', text: '税引前利回り、源泉徴収後の利回り、年間収入を確認します。成長率は別のシナリオとして使います。' }];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ja' };

const ui: DividendYieldUI = {
  priceLabel: '株価', priceHelp: '通貨をそろえて金額を入力', dividendLabel: '1回あたりの配当', dividendHelp: '同じ通貨で1株あたりの金額を入力', cadenceLabel: '支払頻度', annualOption: '年1回', quarterlyOption: '四半期', sharesLabel: '保有株数', sharesHelp: '年間収入の計算に任意で入力', withholdingLabel: '源泉徴収率 (%)', withholdingHelp: '税引後収入の簡易試算に使用', growthLabel: '想定成長率 (%)', growthHelp: '将来シナリオ用の任意入力', grossYieldLabel: '税引前配当利回り', netYieldLabel: '源泉徴収後', grossIncomeLabel: '税引前年間収入', netIncomeLabel: '税引後年間収入', annualDividendLabel: '年間配当', priceShareLabel: '株価', couponNote: 'この帯は年間配当を入力した株価との割合で示します。', forwardTitle: '成長率を使った将来シナリオ', forwardYieldLabel: '入力した成長率で配当が増えた場合の利回り', forwardDividendLabel: '将来の1株あたり配当', growthNote: 'これは予測ではなくシナリオです。', formulaTitle: '計算方法', formulaText: '年間の1株あたり配当は、1回の配当金に年間の支払回数を掛けたものです。税引前利回りは年間配当を株価で割り、100を掛けます。税引後収入には入力した源泉徴収率を適用します。成長率は将来シナリオだけを変えます。', riskNote: '配当利回りは入力値から計算した比率です。株価変動、手数料、減配、インフレ、企業による配当変更のリスクは含みません。', emptyMessage: '正の株価と0以上の配当金を入力すると結果が表示されます。', annualSuffix: '年あたり', perShareSuffix: '1株あたり', percentageSuffix: '%',
};

export const content: ToolLocaleContent<DividendYieldUI> = {
  slug: 'dividend-yield-calculator', title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '株式の配当利回りを理解して計算する', level: 2 },
    { type: 'paragraph', html: '<p>配当利回りは、株式が1年間に支払う現金配当を基準となる株価と比較する指標です。この計算機は1回の配当を年間額に換算し、株価で割ってパーセント表示します。保有株数に応じた年間収入と、源泉徴収後の簡易シナリオも確認できます。</p>' },
    { type: 'paragraph', html: '<p>結果は比率であり、利益の保証ではありません。株価の変化、手数料、為替、特別配当、減配や無配の可能性は含まれません。数字を比較の出発点として使い、その後に企業と銘柄を調べてください。</p>' },
    { type: 'title', text: '配当利回りの計算式', level: 3 },
    { type: 'paragraph', html: '<p>基本式は<strong>配当利回り = 年間の1株あたり配当 / 株価 x 100</strong>です。四半期払いの場合は、計算前に金額を4倍します。年1回払いの場合は入力した金額をそのまま使います。</p>' },
    { type: 'table', headers: ['数値', '計算', '意味'], rows: [['年間の1株あたり配当', '1回の配当 x 年間支払回数', '年間払いと四半期払いを同じ基準にする'], ['税引前配当利回り', '年間配当 / 株価 x 100', '基準株価に対する配当の割合を示す'], ['税引前年間収入', '年間配当 x 保有株数', '入力した源泉徴収前の収入を試算する'], ['税引後年間収入', '税引前収入 x (1 - 源泉徴収率 / 100)', '入力率を使った簡易試算を示す']] },
    { type: 'title', text: '年1回払いと四半期払いの例', level: 3 },
    { type: 'paragraph', html: '<p>株価が100で、四半期ごとに1の配当を支払う場合、年間配当は1 x 4 = 4です。税引前配当利回りは4 / 100 x 100 = 4%になります。50株なら源泉徴収前の年間収入は200です。</p>' },
    { type: 'paragraph', html: '<p>同じ株が年1回4を支払う場合も利回りは4%です。支払頻度は年間換算の方法だけを変えます。頻度を間違えると結果を大きく誤る可能性があります。</p>' },
    { type: 'title', text: '株価が利回りを変える理由', level: 3 },
    { type: 'paragraph', html: '<p>企業が同じ配当を維持していても、利回りは変わります。年間配当が4なら、株価100では4%、株価80では5%です。高い数字は企業の収益力が高まったことを意味せず、単に市場価格が下がった結果かもしれません。</p>' },
    { type: 'paragraph', html: '<p>複数の銘柄を比較するときは、現在の株価、特定日の終値、自分の購入価格など、同じ基準を使います。株価の日付と配当の対象期間も記録すると比較の意味が明確になります。</p>' },
    { type: 'title', text: '利回り、源泉徴収、収入を区別する', level: 3 },
    { type: 'comparative', columns: 3, items: [{ title: '税引前利回り', description: '年間の1株あたり配当を基準株価と比較した値です。', points: ['配当と価格を比較できる', '源泉徴収を差し引かない', '株価の損益を含まない'] }, { title: '源泉徴収後の利回り', description: '入力した率で税引前利回りを減らした値です。', points: ['計画用の簡易シナリオ', '実際の税務とは異なる場合がある', '確定申告の結果ではない'], highlight: true }, { title: '年間収入', description: '年間配当と保有株数から得られる現金額です。', points: ['税引前は源泉徴収前', '税引後は入力率を使う', '保有株数に左右される'] }] },
    { type: 'paragraph', html: '<p>源泉徴収率は最終的な税負担と同じとは限りません。居住地、企業の国、口座、租税条約、還付手続きなどが関係する場合があります。計算機は入力率を機械的に適用するだけで、適用税率を判断しません。</p>' },
    { type: 'title', text: '計算機を上手に使う方法', level: 3 },
    { type: 'list', items: ['株価と配当を同じ通貨、比較できる同じ期間で入力する。', '入力した金額に合わせて年1回または四半期を選ぶ。', '1株あたりではなく合計収入が必要なら保有株数を追加する。', '源泉徴収は明確な仮定として使い、税務ルールは別に確認する。', '成長率はシナリオの検証に使い、将来配当の予測とは考えない。', '比較結果を保存するときは株価の日付と配当期間を記録する。'] },
    { type: 'title', text: '高い配当利回りから分かることと分からないこと', level: 3 },
    { type: 'paragraph', html: '<p>高い利回りは大きな配当を示す場合もありますが、株価下落の結果でもあります。単独の買いシグナルではなく、調査を始めるきっかけとして扱いましょう。キャッシュフロー、利益、負債、配当履歴、方針、最新発表を確認してください。</p>' },
    { type: 'tip', title: '成長率はシナリオとして扱う', html: '<p>将来表示は、入力した成長率を現在の配当に適用するだけです。再投資、株価、配当性向、利益成長、企業の将来判断はモデル化しません。結果は仮定として表示・利用してください。</p>' },
    { type: 'title', text: 'この配当利回り計算機の限界', level: 3 },
    { type: 'paragraph', html: '<p>このツールは、通常の1株あたり配当、年1回または四半期の頻度、任意の保有株数、入力した源泉徴収率、1段階の成長シナリオを扱います。総合的な株主リターン、配当の安全性、特別配当、通貨換算、地域の税計算は扱いません。</p>' },
  ],
};
