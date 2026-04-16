import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'compound-interest-calculator';
const title = '複利計算機：将来の資産を可視化する';
const description =
  '小さな投資がどのように大きな資産に変わるかを発見しましょう。財務的自由と引退計画を立てるための究極のツールです。';

const faqData = [
  {
    question: '複利とは何ですか？',
    answer:
      '元本だけでなく、それ以前の期間に発生した利息に対しても計算される利息のことです。これにより、時間の経過とともに投資が指数関数的に成長します。',
  },
  {
    question: '単利との違いは何ですか？',
    answer:
      '単利では、利息は当初の元本に対してのみ計算されます。複利では利息が再投資されるため、「利息がさらなる利息を生む」ことになります。',
  },
  {
    question: '「72の法則」とは何ですか？',
    answer:
      '投資が2倍になるまでにかかる時間を推定するための簡単な公式です。72を年利回りで割ります。例えば年利8%の場合、9年で資金が2倍になります。',
  },
  {
    question: 'なぜ若いうちに投資を始めることが重要なのですか？',
    answer:
      '指数関数的な効果があるため、決定的な要因は貯蓄額ではなく「時間」です。数年早く始めるだけで、複利効果により最終的な資産額が大幅に大きくなる可能性があります。',
  },
];

const howToData = [
  {
    name: '初期投資額を入力する',
    text: '投資計画を開始する際の金額を入力します。',
  },
  {
    name: '定期的な積立額を設定する',
    text: '毎月または毎年、追加で貯蓄・投資する金額を指定します。',
  },
  {
    name: '想定年利を入力する',
    text: '期待する年間の収益率を入力します（例：歴史的なS&P 500の場合は7%）。',
  },
  {
    name: '投資期間を調整する',
    text: '指数関数的な資産の成長を可視化するために、投資を維持する年数を選択します。',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '情報源とリファレンス',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: '複利の計算 - Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/複利',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '複利の魔術：資産を指数関数的に築く',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'アルベルト・アインシュタインは複利を「世界最高の発明」と呼びました。<strong>複利</strong>は、長期的に富を築くための最も強力なメカニズムです。金融の専門家である必要はありません。必要なのは時間、忍耐、そして投資された資金だけです。',
    },
    {
      type: 'title',
      text: '単利 vs 複利：雪だるまの比喩',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '丘の上で雪だるまを作っていると想像してください。<strong>単利</strong>は、その雪玉を転がしながら、大きくなるように1メートルごとに手作業で雪を追加していくようなものです。<strong>複利</strong>は、雪玉を自分から転がすようなものです。転がるうちに勝手に雪を拾い、大きくなればなるほど、一回転で<em>さらに多くの</em>雪を拾う面積が増えていきます。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '単利',
          description: '利息は常に当初の元本に対してのみ計算されます。',
          points: [
            '公式：元本 × 利率 × 期間',
            '線形で予測可能な成長',
            '短期ローンなどで使用',
            '利益の再投資なし',
          ],
        },
        {
          title: '複利',
          description: '利息が元本に加算され、新しい利息を生みます。',
          highlight: true,
          points: [
            '公式：元本 × (1 + 利率)^期間',
            '加速的な指数関数的成長',
            'あらゆる長期投資の基礎',
            '利益がさらなる利益を生む',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: '数学的に、あなたの利益が新しい利益を生み出します。最初の数年間はゆっくりに見えますが、「ティッピングポイント（転換点）」を過ぎると、曲線は垂直に上昇します。ここで真の資産が形成されます。',
    },
    {
      type: 'title',
      text: 'なぜ時間は最大の味方なのか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '最も決定的な要因は、投資する金額ではなく、<strong>何年間成長させ続けるか</strong>です。10年早く始めるだけで、合計の投資額が少なくても、最終的な資産が2倍、3倍になることがあります。この指数関数的な効果こそが、若い投資家が比類なき優位性を持つ理由です。',
    },
    {
      type: 'tip',
      title: '72の法則',
      html: '<p>72を年利回りで割ると、<strong>資金が2倍になる</strong>までにかかる年数がわかります。</p><p><em>例：年利8%の場合、9年ごとに倍になります（72 / 8 = 9）。</em></p><p>この魔法の公式はどんな収益率にも当てはまり、投資の成長を素早く推定するのに役立ちます。</p>',
    },
    {
      type: 'tip',
      title: '2026年のアドバイス',
      html: '<p>インフレは依然として考慮すべき要因です。購買力を失わないために、実質利回りが少なくとも年間2〜3%を超えるようにしましょう。インフレよりも速く成長する資産に投資してください。</p>',
    },
    {
      type: 'title',
      text: '利息の計算頻度：重要ですか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '利息は、年、半年、四半期、月、あるいは毎日といった頻度で再投資（複利計算）されます。<strong>複利計算の頻度が高いほど</strong>、複利効果は大きくなります。同じ元本と同じ利率でも、年複利よりも月複利の方が資産はより大きく成長します。',
    },
  ],
  ui: {
    labelTitle: '投資シミュレーター',
    labelRealtime: 'リアルタイム',
    labelInitial: '初期投資額',
    labelMonthly: '毎月の積立額',
    labelRate: '年利回り',
    labelYears: '投資期間（年）',
    labelMyMoney: '元本合計',
    labelProfit: '投資収益（利息）',
    labelTotal: '資産総額',
    labelYear: '経過年数',
    labelPrincipal: '元本',
    labelInterest: '累積利息',
    insightPrefix: '[TIP] ',
    insightSuffix: '年目に、発生した年間利息が積立額を上回ります。あなたよりもお金が働いている状態です！',
    currencySymbol: '¥',
    currencyCode: 'JPY',
    currencyLocale: 'ja-JP',
  },
};
