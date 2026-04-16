import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'takarakuji-saiteika-kakuritsu-keisanki';
const title = '宝くじ最適化・確率計算機';
const description = 'スペインのクリスマス宝くじ、ユーロミリオンズ、ボノロトなどの当選確率を分析します。最適な購入枚数や期待値を計算しましょう。';

const faqData = [
  {
    question: '宝くじにおける期待値（数学的期待値）とは何ですか？',
    answer: '1ユーロを賭けるごとに、平均してどれくらいの払い戻しが期待できるかを示す数値です。ほとんどすべての宝くじにおいて期待値はマイナス（通常、1ユーロにつき0.50ユーロの損失）であり、長期的には運営側が必ず勝つ仕組みになっています。',
  },
  {
    question: '多くの異なる番号を買うのと、同じ番号を大量に買うのとではどちらが良いですか？',
    answer: '「何か」を当てたいのであれば、番号を分散させることで末等の当選確率が上がります。1等（ジャックポット）を狙うのであれば、1つの番号を買い続けても確率は同じですが、当たった時の配当は大きくなります。',
  },
  {
    question: 'スペインのクリスマス宝くじ（El Gordo）は本当に「お得」ですか？',
    answer: '純粋に数学的な観点からは、答えは「いいえ」です。売上の70%しか還元されません。しかし、1等の当選確率（10万分の1）は、ユーロミリオンズ（約1億4千万分の1）などと比較すると格段に高く設定されています。',
  },
  {
    question: '統計を使って当選確率を上げることはできますか？',
    answer: 'いいえ。宝くじの抽選はそれぞれ独立したランダムなプロセスです。昨日ある番号が出たからといって、今日その番号が出やすくなったり出にくくなったりすることは一切ありません。',
  },
  {
    question: '比較表の「難易度」とは何を意味しますか？',
    answer: '1等を引き当てるのがどれだけ難しいかを示す相対的な指標です。狙いやすい（20万分の1未満）、難しい（2000万分の1未満）、極めて困難（2000万分の1以上）。',
  },
];

const howToData = [
  {
    name: '抽選の種類を選択する',
    text: 'クリスマス宝くじ、プリミティバ、ユーロミリオンズ、ボノロトなど、分析したい宝くじを選択します。',
  },
  {
    name: '投資額を決定する',
    text: '購入予定の枚数や口数を入力します。',
  },
  {
    name: '重要な確率を分析する',
    text: '1等の当選確率、小額当選の確率、元本回収（リイントゥエグロ）の確率をリアルに把握します。',
  },
  {
    name: 'リスクとリターンの評価',
    text: '期待値を確認し、投資した1ユーロにつき統計的にいくら「失っている」のかを理解します。',
  },
];

const bibliographyData = [
  {
    name: 'スペイン国立宝くじ・賭博公社 (SELAE) - 透明性ポータル',
    url: 'https://www.selae.es/',
  },
  {
    name: 'クリスマス宝くじの数学 - スペイン王立数学会 (RSME)',
    url: 'https://rsme.es/',
  },
  {
    name: 'ケリー基準とリスク管理 - Investopedia',
    url: 'https://www.investopedia.com/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '「希望」の数学',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '多くの人にとって宝くじを買うことは、わずかな金額で「夢」を買う行為です。しかし、抽選箱やクリスタルボールの裏側には、数学の最も魅力的な分野の一つである「極端な確率の統計学」が潜んでいます。',
  },
];

const gameTranslations = {
  gordo: {
    name: 'クリスマス宝くじ (El Gordo)',
    description: '世界最大の賞金総額を誇る宝くじ。何か当たる確率が高い。',
  },
  nino: {
    name: '子供の宝くじ (El Niño)',
    description: 'クリスマスと比較して、元本回収（リイントゥエグロ）の確率が3倍。',
  },
  euromillones: {
    name: 'ユーロミリオンズ',
    description: '天文学的な賞金額だが、当選確率はほぼ不可能に近い。',
  },
  primitiva: {
    name: 'ラ・プリミティバ',
    description: 'スペイン最古の宝くじ。難しいが一口の価格が安い。',
  },
  bonoloto: {
    name: 'ボノロト',
    description: '最も安価。少額の予算で毎日楽しむのに最適。',
  },
};

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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '情報源とリファレンス',
  ui: {
    gameTranslations,
    labelTitle: '宝くじ最適化ツール',
    labelDescription: '抽選の種類を比較し、期待値を計算して、論理的に宝くじを楽しみましょう。',
    labelSelectGame: '宝くじを選択',
    labelConfigurePlay: 'プレイ設定',
    labelAdjustQuantity: '購入枚数を調整して、リアルな当選確率を確認します。',
    labelTotalInvestment: '投資総額',
    labelTickets: '購入枚数 / 口数',
    labelUnits: '個',
    labelExposureAnalysis: '露出（リスク）分析',
    labelSelectLottery: 'リスク分析を表示するには宝くじを選択してください。',
    labelOptimalCutoff: '推奨されるカットオフポイント',
    labelProbabilitySuccess: '成功確率',
    labelExpectedValue: '期待値 (EV)',
    labelReturnTheoretical: '1プレイあたりの理論上の払い戻し額。',
    labelSocialReturnIndex: '社会的還元指数',
    labelLow: '低',
    labelMedium: '中',
    labelHigh: '高',
    labelComparison: '当選賞金比較',
    labelLottery: '宝くじ',
    labelCost: 'コスト',
    labelTypicalPrize: '一般的な当選金',
    labelDifficulty: '難易度',
    labelAccessible: '狙いやすい',
    labelDifficult: '難しい',
    labelExtreme: '極めて困難',
    labelNote: '注：クリスマス宝くじとエル・ニーニョの賞金は、デシモ（20ユーロ分）あたりの金額です。ユーロミリオンズなどは、1等賞金の一般的な推定額です。',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ja-JP',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
