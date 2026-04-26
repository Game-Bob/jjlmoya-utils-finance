import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflation-calculator-spain';
const title = 'スペイン・インフレ計算機：貨幣価値の歴史';
const description =
  '1980年以降のペセタが今日いくらになるか、また生活費がどれほど上昇したかを確認できます。2026年までのスペインの歴史的消費者物価指数（CPI）データに基づいています。';

const faqData = [
  {
    question: '消費者物価指数（CPI）とは何ですか？どのように計算されますか？',
    answer:
      '消費者物価指数（CPI）は、スペインの消費者の代表的な家計が購入する商品やサービスの価格の変動を測定する指標です。異なる期間の「バスケット（品目セット）」の費用を比較することで計算されます。',
  },
  {
    question: '1980年以降、通貨価値はどのくらい低下しましたか？',
    answer:
      '1980年の1,000ペセタは、購買力で見ると現在の約60ユーロに相当します。累積されたインフレにより、この40年以上の間に通貨価値は90%以上失われました。',
  },
  {
    question: '貯金を使わずに置いておくと価値が下がるのはなぜですか？',
    answer:
      'インフレ率が年3%で、銀行口座の利子が0%の場合、毎年購買力が3%失われることになります。実質価値を維持するためには、貯蓄が少なくともインフレ率以上の収益を生む必要があります。',
  },
  {
    question: 'スペインで最もインフレが激しかった時期はいつですか？',
    answer:
      '1980年代が最もインフレが高く、2桁のインフレ率（最大15%）を記録しました。価格は月ごとに大幅に変動していました。2002年のユーロ導入以降は比較的落ち着いていましたが、2021〜2023年に再び急騰しました。',
  },
  {
    question: 'インフレは貯蓄にどのような影響を与えますか？',
    answer:
      'インフレは「音なき税金」のように作用します。インフレ率が5%で、お金をタンス預金にしている場合、年末には購入できる商品の量が5%減ることになります。この影響に対抗するためには投資が不可欠です。',
  },
];

const howToData = [
  {
    name: '基準年を選択する',
    text: '貨幣価値を計算したい開始日を選択します（1980年から2026年まで利用可能）。',
  },
  {
    name: '金額を入力する',
    text: '比較したいペセタ（古い日付の場合）またはユーロの金額を入力します。',
  },
  {
    name: '終了年を選択する',
    text: '購買力の推移を確認したい時点を定義します。',
  },
  {
    name: '実際の結果を分析する',
    text: 'その期間における購買力の等価値と累計インフレ率を確認します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<InflationUI> = {
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
      text: '歴史的インフレ計算機：お金の真の価値を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'インフレは、年々あなたの貯蓄を蝕んでいく「音なき税金」です。1980年以降、あなたのお金の価値がどれほど失われたか知っていますか？20年前に300ペセタで買えたコーヒーは、現在では実質いくらなのでしょうか？',
    },
    {
      type: 'title',
      text: 'インフレ：資産に対する音なき税金',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>インフレ</strong>とは、物価が継続的かつ全般的に上昇することです。専門的な現象のように聞こえるかもしれませんが、実体経済への影響は直接的です。同じ金額で購入できる商品の量が減り、対策を講じなければ一生の貯蓄が損なわれてしまいます。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: '1980年の歴史的記録',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: '2022年の物価ピーク',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: '安定目標',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: '必須金融用語',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'CPI',
          definition: '基本消費バスケットの価格変動を要約した指標。',
        },
        {
          term: '購買力',
          definition: '特定の時点における通貨の実際の購入能力。',
        },
        {
          term: 'デフレ',
          definition: '物価の全般的な下落。投資を停滞させる可能性があります。',
        },
        {
          term: 'スタグフレーション',
          definition: '高いインフレと景気停滞が組み合わさったシナリオ。',
        },
      ],
    },
    {
      type: 'title',
      text: '経済の節目と比較',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '1980年代の危機',
          description: '2桁のインフレと激しい雇用不安定が特徴的な時期。',
          points: [
            '極めて高い金利',
            'ペセタ価値の急速な低下',
            '物価上昇により実質賃金が目減り',
          ],
        },
        {
          title: 'パンデミック下のインフレ：2021〜2023年',
          description: 'エネルギーコストと供給網の問題による急激な上昇。',
          highlight: true,
          points: [
            '食料品などの家計への直接的な打撃',
            '消費抑制のためのECBによる利上げ',
            '購買力の緩慢な回復',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['品目・指標', '1980年の価値（推定）', '2026年の価値（予測）', '変動率'],
      rows: [
        ['一本のパン', '0.15€ (25 pts)', '1.40€', '833%'],
        ['カフェのコーヒー', '0.30€ (50 pts)', '1.65€', '450%'],
        ['映画のチケット', '1.20€ (200 pts)', '9.80€', '716%'],
        ['月間最低賃金', '154€ (25,615 pts)', '1,140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: '現金の危険性',
      html: 'お金をタンス預金したり、利息のつかない普通預金に置いておくことは、確実な資本の損失を意味します。平均3%のインフレは、25年足らずで貯蓄の価値を半分にしてしまいます。',
    },
    {
      type: 'title',
      text: '資産を守るためのアドバイス',
      level: 2,
    },
    {
      type: 'proscons',
      title: '投資戦略',
      items: [
        {
          pro: '現物資産：不動産などは通常、インフレに伴って価値が上がります。',
          con: '流動性が低く、初期費用が高い。',
        },
        {
          pro: '株式とファンド：長期的には CPI を上回る収益が期待できます。',
          con: '短期的にはボラティリティと市場リスクがある。',
        },
      ],
    },
    {
      type: 'title',
      text: '健全な家計習慣',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '定期的に支出を見直し、隠れた価格上昇を察知する。',
        '貯蓄を異なる種類の資産に分散させる。',
        'インフレ連動債を検討する。',
        '計算ツールを使用して、価格提示や給与の背景（実質価値）を把握する。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '負の複利に関する警告',
      html: 'インフレはいわば「逆の複利」として働きます。毎年、すでに減少した価値に対して損失率が適用されるため、対策を講じなければ資産の目減りが加速します。',
    },
    {
      type: 'summary',
      title: '重要事項のまとめ',
      items: [
        'CPI はあくまで平均です。個人のインフレ率は生活習慣によって異なります。',
        '労働の実質価値を維持したいのであれば、投資は「選択肢」ではなく「必須」です。',
        '長期契約の内容を理解するために、インフレ計算ツールは不可欠です。',
      ],
    },
    {
      type: 'message',
      title: '自分自身の経済をコントロールする',
      html: '当計算機はスペイン統計局 (INE) の公式データを使用しており、スペインの経済的過去と現在を最も正確に把握することができます。',
    },
  ],
  ui: {
    labelTitle: 'スペイン・インフレ計算機',
    labelInitialAmount: '初期金額',
    labelInitialYear: '対象年',
    labelFinalAmount: '現在の等価値',
    labelFinalYear: '2026年',
    labelInflationRate: '累積インフレ率',
    labelCalculatedOn: 'この計算は、2025年までのINE公式データと2026年末までの予測値を使用しています。',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ja-JP',
    labelYearSelect: '対象年',
    labelIn: '基準年',
    labelEquivalentToday: 'の価値は現在、以下に相当します',
    labelInflationAccumulated: '累積インフレ率',
    labelYear: '年',
  },
};
