import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'supein-chien-risoku-keisanki';
const title = 'スペイン遅延利息・法定利息計算機 2026年版';
const description =
  'スペインにおける税金（税務署）の延滞金や、支払遅延に伴う法定利息を計算できます。2025年・2026年の予算案に基づいた最新のシミュレーターです。';

const faqData = [
  {
    question: '遅延利息（延滞金）とは何ですか？',
    answer:
      '定められた期限までに支払われなかった金額に対して課される利息です。元の債務額に対して適用され、完済されるまで累積されます。',
  },
  {
    question: '単利と複利の違いは何ですか？',
    answer:
      '単利は、毎日元の元本に対してのみ計算されます。複利は、元本に累積された利息を加えた額に対して計算されるため、負債の増加スピードが速くなります。',
  },
  {
    question: '1日あたりの利息はどのように計算されますか？',
    answer:
      '年利を365日で割り、元の元本に適用します。例えば、年利10%の場合、1日あたり0.0274%となります。',
  },
  {
    question: 'どの遅延利息率を適用すべきですか？',
    answer:
      '現地の法律や契約条件によります。スペインでは、支払遅延防止法によって上限金利が定められています。個別のケースについては法律専門家に相談してください。',
  },
  {
    question: 'この計算機を法的債務に使用できますか？',
    answer:
      'これは情報提供を目的としたツールです。実際の債務については、契約条件や現地の法律を確認してください。疑問がある場合は弁護士に相談してください。',
  },
];

const howToData = [
  {
    name: '計算方法を選択する',
    text: '状況に応じて、単利、複利、または月次を選択します。',
  },
  {
    name: 'データを入力する',
    text: '元の金額、利率、および遅延期間を入力します。',
  },
  {
    name: '結果を表示する',
    text: '累積された1日あたりの利息、発生した利息の総額、最終金額、および実効利率が表示されます。',
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

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '情報源とリファレンス',
  bibliography: [
    {
      name: 'スペイン支払遅延防止法 (Ley 3/2004)',
      url: 'https://www.boe.es/',
    },
    {
      name: 'スペイン銀行 (Banco de España): 利率推移',
      url: 'https://www.bde.es/',
    },
    {
      name: '複利の計算方法について',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '遅延利息・法定利息計算機：スペインの完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペインの複雑な法的・税務的枠組みにおいて、債務の支払いが遅れることは「無料」ではありません。<strong>遅延利息</strong>および<strong>法定利息</strong>は、金銭債務の履行遅滞によって生じた損害を補償するために法律が定めるメカニズムです。税務署（<strong>Hacienda</strong>）への未払い、企業間の支払遅延、あるいは裁判上の請求であっても、これらの利息がどのように発生するかを理解することは極めて重要です。',
    },
    {
      type: 'title',
      text: '法定利息（Interés Legal del Dinero）とは？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '法定利息とは、当事者間で特定の利率が合意されていない場合、あるいは法律で定められている場合に負債に課される割増金です。<strong>2024年、2025年、2026年</strong>の法定利息は<strong>3.25%</strong>で安定しています。この数値は、多くの法的計算の基準となります。',
    },
    {
      type: 'title',
      text: '税務上の遅延利息（Interés de Demora Tributario）',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '公的な債務（税金など）の場合、納税の遅れを防ぐために、遅延利息は法定利息よりも高く設定されます。<strong>2024年〜2026年</strong>の期間は<strong>4.0625%</strong>に設定されています。これは、期限後に納税申告を行った場合に税務署（Hacienda）から請求される割増金です。',
    },
    {
      type: 'tip',
      title: '制裁ではなく補償としての性質',
      html: '<p><strong>重要ポイント：</strong> 罰金とは異なり、遅延利息は制裁ではなく損害補償としての性質を持ちます。税務署があなたを「罰している」のではなく、本来公庫にあるべきお金を個人が保持していた期間に対する使用料を請求している、という考え方です。</p>',
    },
    {
      type: 'title',
      text: '利息計算のステップ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'これらの利息計算は通常、単利の公式に従い、期間は暦日で数えます。 <strong>利息 = (元本 × 日数 × 利率) / 36,500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>元本（Principal）:</strong> 元の負債の総額。',
        '<strong>日数（Days）:</strong> 支払期限の翌日から実際の支払日までの経過日数。',
        '<strong>利率（Rate）:</strong> 適用される年利率（例：3.25 または 4.0625）。',
        '<strong>36,500:</strong> 年利率を1日あたりのパーセンテージに変換するための定数 (365日 × 100)。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '具体的な計算例：税務署への未払い',
      html: '<p>所得税（IRPF）の期限から180日が経過した5,000ユーロの未払いがある場合：</p><ul><li>適用金利（遅延）: 4.0625%</li><li>計算式: (5,000 × 180 × 4.0625) / 36,500</li><li><strong>発生する利息:</strong> 100.17 ユーロ</li><li>支払合計額: 5,100.17 ユーロ</li></ul>',
    },
    {
      type: 'title',
      text: '債務の種類による違い',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>一般民事債務:</strong> 個人間などは 3.25%（法定利息）。',
        '<strong>商取引債務:</strong> 支払遅延防止法が適用され、2025-2026年は約 10.15% - 11.15% に達します。',
        '<strong>社会保障債務:</strong> 4.0625% に加えて、10%〜20%の追徴金が課されます。',
        '<strong>裁判上の利息:</strong> 判決確定後は 5.25%（判決日から）。',
      ],
    },
    {
      type: 'title',
      text: '商取引における利息：60日の壁に注意！',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '自営業者や企業の場合、スペインの法律（Ley 3/2004）により支払期限は最大60日と定められています。顧客がこの期限を過ぎた場合、催促を行わなくても自動的に商事遅延利息を請求でき、さらに回収費用として一律40ユーロを請求する権利があります。',
    },
  ],
  ui: {
    labelTitle: '遅延利息計算機',
    labelSimpleTitle: '単利',
    labelCompoundTitle: '複利',
    labelMonthlyTitle: '月次',
    labelSimpleQuestion: '単利で計算する',
    labelCompoundQuestion: '複利で計算する',
    labelMonthlyQuestion: '月単位の期間で計算する',
    labelPrincipal: '元の金額',
    labelAnnualRate: '年利率',
    labelDays: '遅延日数',
    labelMonths: '遅延月数',
    labelMonthlyRate: '月利率',
    labelDailyInterest: '1日あたりの利息',
    labelTotalInterest: '利息総額',
    labelTotalAmount: '支払合計額',
    labelEffectiveRate: '実効利率',
    labelCopyTooltip: '結果をコピー',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: '適用された計算式',
    reportTitle: '利息計算レポート',
    reportLabelPrincipal: '元本',
    reportLabelType: 'タイプ',
    reportLabelPeriod: '期間',
    reportLabelDays: '経過日数',
    reportLabelInterest: '発生した利息',
    reportLabelTotal: '精算合計額',
    reportDaysSuffix: '日',
    formulaDescription: 'この計算は現行の利率を使用しています。期間が異なる利率の過去の年度にわたる場合、本来は期間ごとに分けて計算する必要があります。',
    currencyCode: 'EUR',
    currencyLocale: 'ja-JP',
  },
};
