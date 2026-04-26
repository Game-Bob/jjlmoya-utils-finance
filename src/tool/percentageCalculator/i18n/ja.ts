import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'percentage-calculator';
const title = '4 in 1 パーセント計算機：割引・値上げ・値下げ';
const description =
  'オンラインで簡単にパーセント計算を無料で行えます。XのY%、パーセントの差、消費税の加算・減算、バーゲンセール、チップ計算など、4つのツールが1つに。';

const faqData = [
  {
    question: 'この計算機はどのように使いますか？',
    answer:
      '問題に対応するユースケースの入力欄に数値を入力するだけです。計算ボタンを押す必要はなく、リアルタイムで数式が処理されます。',
  },
  {
    question: '消費税や税金の計算に使えますか？',
    answer:
      'はい、ブロック4（「値にパーセントを加算または減算する」）は、本体価格に消費税を適用したり、源泉徴収税を計算したりする場合に最適です。',
  },
  {
    question: '小数や負の数は扱えますか？',
    answer:
      'もちろんです。小数は「 . 」（ピリオド）を使って入力できます。また、損失を含む会計収支を分析する場合など、負の値も入力可能です。',
  },
  {
    question: '結果をコピーできますか？',
    answer:
      'はい、各ブロックの結果欄にあるボタンを押すと、数値を即座にクリップボードにコピーできます。他のアプリや書類に簡単に貼り付けられます。',
  },
];

const howToData = [
  {
    name: '数学的な問題を特定する',
    text: '4つのブロックのタイトルを確認し、知りたいことに一致するものを選択します（例：50の20%はいくら？ → ブロック1）。',
  },
  {
    name: '数値を入力する',
    text: '「X」と「Y」の欄を埋めます。順序を気にする必要はありません。各ブロックの説明が視覚的にガイドします。',
  },
  {
    name: '即座に表示される結果をコピーする',
    text: '入力するのと同時に、リアルタイムで結果が表示されます。コピーアイコンを押して、数値を活用しましょう。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4 in 1 パーセント計算機：素早い計算をマスターする',
      level: 2,
    },
    {
      type: 'title',
      text: '複合パーセント計算機は何に役立ちますか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'パーセント計算は、私たちの日常生活で最も一般的な数学的操作の1つです。セールの割引額の計算、レストランでの適切なチップの把握から、ビジネスでの利益率やローンの利息の決定まで。日常的な操作であるにもかかわらず、暗算したり正確な数式を思い出したりするのは必ずしも簡単ではありません。',
    },
    {
      type: 'paragraph',
      html: '当社の4-in-1パーセント計算機は、最も需要の高いシナリオをグループ化しています。もはやGoogleで「20パーセントの出し方」や「パーセント計算の公式」を検索する必要はありません。4つの必須操作が1か所にまとまっており、インタラクティブで即座に結果が得られます。',
    },
    {
      type: 'title',
      text: '4つの最も一般的なユースケースの確認',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '利便性を高めるために、ツールを4つの明確な視覚的ブロックに分割し、毎日直面する現実の問題を解決できるようにしました。',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. YのX%はいくらですか？',
      html: '<p><strong>最も標準的なケースです。</strong> 割引やチップの計算に便利です。12,000円の15%を知りたい場合はこのツールを使います。数式は単純にパーセンテージを100で割り、合計値に掛けます。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. XはYの何パーセントですか？',
      html: '<p><strong>割合を知りたい場合に最適です。</strong> 60点満点の試験で45点取った場合、100点満点では何点になりますか？この機能は部分を全体で割り、100を掛けることで正確な相対的比率を算出します。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. パーセンテージの増加または減少',
      html: '<p><strong>財務や分析に最適です。</strong> 昨年から家賃はどれくらい上がりましたか？以前は80,000円で現在は84,000円だった場合、この機能は5%増加したことを教えてくれます。2つの数値間の成長または減少を測定します。</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. 値にパーセントを加算または減算する',
      html: '<p><strong>消費税計算に非常に便利です。</strong> 本体価格（例：10,000円）に10%の消費税を加える必要がある場合、この計算機は中間的な操作をすることなく直接最終価格の11,000円を表示します。同様に、直接的な割引（例：20%を引く）を適用する際にも使えます。</p>',
    },
    {
      type: 'title',
      text: 'パーセント計算に関する一般的な誤解',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大きなパーセンテージや小数を見ると戸惑うことがよくありますが、生活を楽にしてくれるいくつかの数学的な「コツ」があります。最も有名なのは、<strong>パーセントの可逆性</strong>です。',
    },
    {
      type: 'tip',
      title: '可逆性のコツ',
      html: '<p>「YのX%」は「XのY%」と全く同じであることを知っていましたか？例えば、50の18%を暗算で出そうとすると難しく感じるかもしれません。しかし、逆にしてみると「18の50%」となり、とても簡単に「9」だとわかります！これは絶対にどんな数字にも当てはまり、日常生活において驚くほど役立つライフハックです。</p>',
    },
    {
      type: 'title',
      text: '成長率の計算で間違いやすい理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最も多い間違いの1つはケース3、つまりパーセンテージの増加または減少で起こります。株価が10,000円で、50%下落し、翌日に50%上昇したと想像してみてください。直感的には10,000円に戻る気がしますが、それは間違いです。',
    },
    {
      type: 'paragraph',
      html: '10,000円から50%下がると、新しい価格は5,000円になります。その5,000円から50%上がると、上昇分は5,000円の半分（2,500円）です。したがって、最終的な価格は7,500円になります。パーセントの上昇と下落は非対称であり、このような動的な計算機が重大な財務的エラーを防ぐ古典的な例です。',
    },
    {
      type: 'title',
      text: '業務および学術用途',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当社のインターフェースは余計なものを削ぎ落とし、<strong>素早い作業</strong>ができるよう設計されています。ブラウザのタブにピン留めしておけば、各入力欄をスムーズに移動でき、結果の横にあるコピーボタンのおかげで、入力ミスのリスクなくExcelやGoogleスプレッドシートに正確なデータを転送できます。',
    },
    {
      type: 'list',
      items: [
        'ECサイトや実店舗：販売利益率を適用し、消費税を加算した販売価格の迅速な計算。',
        '人事管理：賃金格差の決定、源泉徴収税、CPI（消費者物価指数）に紐づいた昇給の算出。',
        '大学教育：点数の傾斜配分を行う教員や、実験データの偏差を分析する理系学生。',
        'デジタルマーケティング：ECサイトにおけるCTR（クリック率）、ROAS（広告費回収率）、またはコンバージョン率の測定。',
      ],
    },
  ],
  ui: {
    labelTitle: 'パーセント計算機',
    labelCase1Title: 'ケース 1',
    labelCase1Question: 'YのX%はいくらですか？',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: '公式: (X / 100) × Y',
    labelCase2Title: 'ケース 2',
    labelCase2Question: 'XはYの何パーセントですか？',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: '公式: (X / Y) × 100',
    labelCase3Title: 'ケース 3',
    labelCase3Question: '2つの値のパーセント差',
    labelCase3Placeholder1: '値 1',
    labelCase3Placeholder2: '値 2',
    labelCase3Formula: '公式: ((値 2 - 値 1) / |値 1|) × 100',
    labelCase4Title: 'ケース 4',
    labelCase4Question: '値にパーセントを加算または減算する',
    labelCase4Placeholder1: '値',
    labelCase4Placeholder2: '%',
    labelCase4Formula: '公式: 値 ± (値 × (% / 100))',
    labelCase4AddLabel: '加算 (値 + %)',
    labelCase4SubtractLabel: '減算 (値 - %)',
    labelResult: '結果',
    labelDifference: '差',
    labelCopyTooltip: '結果をコピー',
    labelFormula: '公式',
    percentSymbol: '%',
  },
};
