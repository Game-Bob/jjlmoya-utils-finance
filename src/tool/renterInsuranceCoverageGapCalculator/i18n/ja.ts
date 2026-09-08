import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RenterInsuranceCoverageGapCalculatorUI } from '../ui';
export const ui: RenterInsuranceCoverageGapCalculatorUI = {
  labelPolicyLimit: '家財補償限度額', labelDeductible: '免責金額', labelSampleLoss: '例示する損害額', labelCurrency: '通貨', labelApproximateRates: '換算には最新の為替レートではなく、計画用のおおよその係数を使用します。', labelPolicyBoundary: '保険契約の境界', labelSetLimit: '限度額を設定', labelPolicyBoundaryHint: '契約の家財補償額を入力し、想定する損害を試してください。', labelInventory: '買い替え資産一覧', labelInventoryHint: 'すべてを今日買い替える場合の費用を、カテゴリーごとに見積もります。', labelPolicyLimitHelp: '建物の限度額ではなく、契約の家財補償限度額を入力してください。', labelDeductibleHelp: '家財の請求に適用される免責金額を入力してください。', labelSampleLossHelp: '不足額を確認した後、例示的な請求シナリオを表示するためだけに使います。', labelTotalContents: '家財の推定総額', labelCoverageGap: '補償不足の可能性', labelCoverageRatio: '推定補償率', labelEstimatedPayout: '例示的な保険金', labelOutOfPocket: '例示的な自己負担', labelStatus: '補償の判定', labelStatusSafe: '限度額が一覧をカバー', labelStatusReview: '小さな不足を確認', labelStatusExposed: '家財が過少保険', labelStatusSafeText: '入力した家財限度額は、買い替え資産一覧以上です。高額品などの個別限度額は別に確認してください。', labelStatusReviewText: '限度額は一覧に近いものの、少し不足しています。高額品や最近購入した物を見直してください。', labelStatusExposedText: '限度額が一覧の推定額を下回っています。全損を想定する前に契約を確認してください。', labelLargestCategories: '金額の大きいカテゴリー', labelCoverageLine: '保険契約の限度額', labelReplacementValue: '買い替え価額', labelLimitMarker: '限度額マーカー', labelLossScenario: '損害シナリオ', labelIllustrativePayout: '参考値のみ: 比例てん補の条項が契約に適用されるとは限りません。', labelReset: '例をリセット', labelCopy: '概要をコピー', labelCopied: '概要をコピーしました', labelCopyFailed: '結果を手動でコピーしてください', labelInvalidInput: '強調表示された値を確認してください', labelMethodTitle: 'この見積もりの仕組み', labelMethodText: 'カテゴリーごとの見積もりを合計し、家財限度額と比較します。不足額は両者の正の差です。例示的な保険金は補償率を損害額に適用してから免責金額を差し引きます。これは計画用のモデルであり、実際の支払額の予測ではありません。契約には品目別限度額、新価特約、免責事項、第一リスク方式などが適用される場合があります。', labelPrivacyNote: '資産一覧はこのブラウザー内に保存されます。アカウント、アップロード、サーバー計算は不要です。', labelAmountPlaceholder: '0.00', labelCategoryFurniture: '家具・装飾', labelCategoryElectronics: '電子機器', labelCategoryClothing: '衣類・靴', labelCategoryKitchen: 'キッチン・家電', labelCategoryPersonal: '身の回り品', labelCategoryOther: 'その他の家財',
};
const slug = 'renter-insurance-coverage-gap-calculator';
const title = '賃貸保険の家財補償不足額計算機';
const description = '賃貸住宅の家財補償限度額が、持ち物の買い替え価額に届くかを見積もります。資産一覧、契約限度額、免責金額、例示損害をブラウザーで比較できます。';
const faq = [
  { question: 'この賃貸保険計算機は何を測りますか？', answer: '入力した家財の買い替え価額を合計し、保険契約の家財限度額と比較します。差額は限度額を超える可能性がある金額の計画用見積もりです。' },
  { question: '資産一覧にはどの金額を入力しますか？', answer: '家具、電子機器、衣類、家電、身の回り品を現在買い替える現実的な費用を入力します。契約が求める評価基準も確認してください。' },
  { question: '結果だけで過少保険だと証明できますか？', answer: 'いいえ。結果は一覧、契約内容、評価の前提に左右されます。品目別限度額、免責事項、特約、過少保険条項によって保険金は変わります。' },
  { question: 'なぜ例示的な保険金が表示されますか？', answer: '入力した損害額に単純な比例モデルを適用し、免責金額を引いた結果を示します。実際に保険会社が支払う金額を予測するものではありません。' },
  { question: '大家の設備や造作も含めますか？', answer: '契約上、家財補償に含まれる物だけを入力してください。賠償責任、建物、造作、家財は別の補償区分である場合があります。' },
];
const howTo = [
  { name: '買い替え資産一覧を作る', text: '各部屋を確認し、家財を今日買い替える費用を入力します。6つのカテゴリーに分けると、金額の大きい項目が見つかります。' },
  { name: '家財限度額を入力する', text: '保険証券や見積書から家財の保険金額を転記します。建物や賠償責任の限度額は使いません。' },
  { name: '免責金額と損害額を追加する', text: '家財請求の免責金額と例示する損害額を入力し、自己負担の目安を確認します。' },
  { name: '判断の境界を確認する', text: '不足が出たら、高額品、品目別限度額、貴重品、最近の購入品を保険会社や代理店に確認します。' },
];
export const content: ToolLocaleContent<RenterInsuranceCoverageGapCalculatorUI> = { slug, title, description, ui, seo: [
  { type: 'title', text: '限度額と持ち物の価額を比較する', level: 2 },
  { type: 'paragraph', html: '<p>賃貸住宅の家財保険は、部屋ごとの一覧を作らず、切りのよい金額だけで限度額を決めると不足しやすくなります。この計算機は買い替え費用を補償の境界として見える化します。</p>' },
  { type: 'title', text: '計算前に準備するもの', level: 2 },
  { type: 'list', items: ['家具、電子機器、衣類、家電、身の回り品の買い替え見積もり。', '建物や賠償責任とは分けた、契約上の家財限度額。', '家財請求に適用される免責金額。', '例示的な保険金を試す場合は現実的な損害額。'] },
  { type: 'title', text: '補償不足額の読み方', level: 2 },
  { type: 'paragraph', html: '<p>不足額は限度額を超える家財の価額です。ゼロでも、すべての品目が補償されるとは限りません。プラスの場合は、評価方法、品目別限度額、免責事項、過少保険条項を確認してください。</p>' },
  { type: 'table', headers: ['表示', '意味', '次の行動'], rows: [['限度額が一覧をカバー', '入力した限度額が買い替え総額以上です。', '貴重品、品目別限度額、免責事項を確認する。'], ['小さな不足を確認', '限度額は近いものの、購入品や丸めが影響する可能性があります。', '大きなカテゴリーを再確認し、契約を更新する。'], ['家財が過少保険', '限度額が買い替え総額を大きく下回ります。', '見積もりを取り直し、過少保険の扱いを確認する。']] },
  { type: 'title', text: '見積もりの限界', level: 2 },
  { type: 'paragraph', html: '<p>このツールは契約を読み取らず、損害の補償可否や拘束力のある保険金を判断しません。例示シナリオは単純な比例モデルで、免責金額を差し引きます。実際の契約には異なる条項、限度額、評価方法、免責事項があります。</p>' },
  { type: 'tip', title: '証拠を残すヒント', html: '<p>高額な持ち物は領収書、写真、日付入り一覧を保管しましょう。Financial Ombudsman Service は買い替え費用を十分に計算しないことで過少保険が起こる理由を説明しています。スペインの保険契約法は保険金額を最大補償額とし、契約に別の定めがなければ比例ルールを置いています。</p>' },
], faq, bibliography, howTo, schemas: [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' } },
] };
