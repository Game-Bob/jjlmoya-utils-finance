import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationPurchasingPowerUI } from '../ui';

const title = 'インフレと購買力の推移計算機';
const description = '年間インフレ率の想定によって、購買力を保つために必要な金額と現金の実質価値が時間とともにどう変わるかを確認できます。';
const ui: InflationPurchasingPowerUI = {
  amountLabel: '開始金額', amountHelp: '計算中は同じ通貨を使います', inflationLabel: '年間インフレ率 (%)', inflationHelp: '予測ではなくシナリオの想定です', yearsLabel: '期間（年）', yearsHelp: '1年から80年で選択', cashFlowLabel: '年間キャッシュフロー', cashFlowHelp: '毎年、残高に追加または残高から差し引きます', cashFlowModeLabel: 'キャッシュフローのシナリオ', noCashFlowOption: '継続的な入出金なし', contributionOption: '毎年追加', withdrawalOption: '毎年引き出し', costEquivalentLabel: '終了時の必要額', realValueLabel: '現在の金額に換算した終了時価値', nominalBalanceLabel: '終了時の名目残高', purchasingPowerLossLabel: '失われた購買力', todayLabel: '現在', endLabel: '期間の終了', costLineLabel: '同じ買い物かごに必要な費用', realLineLabel: '変わらない現金の購買力', balanceLineLabel: '現在の金額で見たシナリオ残高', chartDescription: '上昇する必要額、低下する購買力、シナリオ残高を示すインフレの推移', chartNote: 'すべての線を開始金額と比較します', milestoneTitle: '同じ通貨で見る節目', yearHeader: '年', costHeader: '必要額', realHeader: '変わらない現金', balanceHeader: '実質残高', methodTitle: '推移の計算方法', methodText: '必要額は、開始金額に (1 + 年間インフレ率) を年数乗じたものです。変わらない現金の価値は、開始金額を同じ係数で割って求めます。追加額は各年の終わりに加え、引き出し額は差し引きます。残高はゼロ未満になりません。', limitationText: 'これは透明性のあるシナリオモデルであり、過去の消費者物価指数の検索、投資収益の予測、個別の金融助言ではありません。家庭の買い物かごは公表された消費者物価指数と異なる場合があり、実際のインフレ率は年ごとに変化します。', emptyMessage: '正の金額、-100%を超える率、1年から80年までの整数、0以上のキャッシュフローを入力してください。', contributionSummary: '破線は、投資収益を含めず、継続的な追加後の残高を現在の金額に換算して示します。', withdrawalSummary: '破線は、投資収益を含めず、継続的な引き出し後の残高を現在の金額に換算して示します。', noCashFlowSummary: '実線はインフレだけを示します。一方は同じ買い物かごの将来費用、もう一方は変わらない現金で買える量です。', depletionWarning: '引き出しシナリオは {year} 年目にゼロになります。その後もゼロのままです。', scenarioNote: 'シナリオのみ', currencyHint: '開始金額と同じ通貨', yearsSuffix: '年', amountSuffix: '開始金額と同じ通貨',
};
const faq = [
  { question: 'インフレはどのように購買力を下げますか？', answer: '物価全体が上がると、同じ金額で買える商品やサービスが少なくなります。この計算機は、変わらない現金を複利のインフレ係数で割ってその影響を示します。' },
  { question: '必要額と実質価値の違いは何ですか？', answer: '必要額は、開始金額が現在買えるものを将来も買うための金額です。実質価値は、変わらない開始金額で期間の最後に買える量を現在の金額で表します。' },
  { question: '追加と引き出しのシナリオには何が含まれますか？', answer: '各年の終わりにキャッシュフローを追加または差し引きます。投資収益、税金、手数料、利息は含まず、引き出し残高はゼロ未満になりません。' },
  { question: 'インフレ率は予測ですか？', answer: 'いいえ。感度を調べるための想定です。実際のインフレは変動し、公表された物価指数が家庭の支出パターンと一致するとは限りません。' },
];
const howTo = [
  { name: '開始金額を入力する', text: '将来の購買力を調べたい金額を入力し、計算全体で一つの通貨を使います。' },
  { name: 'インフレシナリオを設定する', text: '年間率と整数の期間を入力します。一つの想定に頼らず、複数の率を比較します。' },
  { name: '任意のキャッシュフローを追加する', text: '毎年追加または毎年引き出しを選び、金額を入力します。インフレだけを見るなら継続的な入出金なしを選びます。' },
  { name: '曲線と節目を読む', text: '終了時の必要額と現在の金額での価値を比べ、節目の表で差が広がる時期を確認します。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ja' };
const seo = [
  { type: 'title' as const, text: 'インフレの推移で将来の購買力を考える', level: 2 },
  { type: 'paragraph' as const, html: '<p>インフレで物価水準が変わると、同じ金額でも将来は買えるものが少なくなります。この計算機は、同じ買い物かごに必要な金額と、変わらない現金が保つ購買力を分けて表示します。</p>' },
  { type: 'paragraph' as const, html: '<p>開始金額、年間インフレ率、期間を入力してください。率を毎年複利で計算し、上昇する必要額と低下する現金の購買力を同じ通貨で示します。</p>' },
  { type: 'title' as const, text: '二つの基本的な見方', level: 3 },
  { type: 'table' as const, headers: ['項目', '式', '答える質問'], rows: [['必要額', '開始金額 x (1 + インフレ率)^年数', '同じ買い物かごに将来いくら必要ですか？'], ['変わらない現金の購買力', '開始金額 / (1 + インフレ率)^年数', '現在の金額で何が買えますか？'], ['失われた購買力', '(1 - 1 / 物価係数) x 100', '開始時の購買力の何割が失われますか？']] },
  { type: 'paragraph' as const, html: '<p>年間3%のインフレでは、1,000は10年後に約1,344の必要額になります。1,000を現金のまま保つと、購買力は現在の金額で約744です。</p>' },
  { type: 'title' as const, text: '複利が重要な理由', level: 3 },
  { type: 'paragraph' as const, html: '<p>毎年の物価が次の年の基準になるため、インフレ率は積み重なります。3%が10年続く場合は単純な30%ではなく、1.03の10乗で約1.344です。</p>' },
  { type: 'list' as const, items: ['低い率、中間の率、高い率を試す。', '節目の表で大きくなる支出を見つける。', '必要額を貯蓄目標、収入、年金と比べる。', '使った想定と日付を記録し、情報が変わったら更新する。'] },
  { type: 'title' as const, text: '追加と引き出しを入れる', level: 3 },
  { type: 'paragraph' as const, html: '<p>キャッシュフローシナリオを使うと、インフレを隠さずに貯蓄や支出の計画を確認できます。追加は各年末に名目残高へ加え、引き出しは差し引き、残高が尽きるとゼロで止まります。</p>' },
  { type: 'paragraph' as const, html: '<p>破線の残高は同じインフレ係数で現在の金額に戻します。これは投資予測ではなく、利息、運用収益、税金、手数料、追加額の成長は含みません。</p>' },
  { type: 'tip' as const, title: '一つの約束ではなく幅で見る', html: '<p>物価指数は平均的な買い物かごを表します。住居費、エネルギー、食費、医療費は家庭によって異なる動きをします。複数の率を試してください。</p>' },
  { type: 'title' as const, text: 'この推移から分からないこと', level: 3 },
  { type: 'paragraph' as const, html: '<p>このツールは過去のCPIを取得せず、インフレを予測せず、投資を推奨しません。年ごとに変わる率、資産収益、借入金利、変則的な入出金も扱いません。</p>' },
  { type: 'paragraph' as const, html: '<p>重要な判断では、適切な物価指数、実際の支出記録、対象となる商品や収入の条件と結果を比較してください。数学的に整合していても、家庭の実態を正確に表すとは限りません。</p>' },
];
export const content: ToolLocaleContent<InflationPurchasingPowerUI> = { slug: 'inflation-purchasing-power-timeline-calculator', title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo };
