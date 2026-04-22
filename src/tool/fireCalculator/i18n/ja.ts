import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'four-percent-rule-fire-calculator';
const title = 'FIRE計算機：財務的自由への4%ルール';
const description = '4%ルールを使用して、財務的自立のために必要な「マジックナンバー」を算出しましょう。早期リタイアを計画し、経済的自由への道のりを可視化します。';

const faqData = [
  {
    question: '4%ルールとは何ですか？',
    answer: '4%ルールは、トリニティ・スタディ（トリニティ大学の調査）に基づく取り崩し戦略です。引退初年度に資産の4%を取り崩し、翌年以降はインフレ率に合わせて調整すれば、30年以上資産を枯渇させずに済むという理論です。',
  },
  {
    question: 'FIREとは何ですか？',
    answer: 'FIREは Financial Independence, Retire Early（経済的自立と早期リタイア）の略です。貯蓄と賢い投資を積極的に組み合わせることで、経済的自由を得ようとするムーブメントです。',
  },
  {
    question: '私のマジックナンバーは何ですか？',
    answer: 'マジックナンバーとは、働かずに運用益だけで生活するために蓄える必要がある総資産額のことです。年間支出を安全な取り崩し率（通常4%）で割ることで算出されます。',
  },
  {
    question: 'Lean、Barista、Fat FIREの違いは何ですか？',
    answer: 'Lean FIREは最小限の支出で生活すること（現在の支出の70%）、Barista FIREは運用益で補いながらパートタイムで働くこと（支出の50%）、Fat FIREはゆとりのある生活を送ること（支出の150%）を指します。',
  },
  {
    question: '4%ルールは現実的ですか？',
    answer: '歴史的に、株式50%・債券50%のポートフォリオにおいて、30年間で95%の成功確率があるとされています。ただし、収益順序のリスクは考慮されておらず、主に米国市場のデータに基づいています。',
  },
];

const howToData = [
  {
    name: '月間の支出を計算する',
    text: '住居費、食費、光熱費、娯楽費など、毎月実際にいくら使っているかを正確に分析します。',
  },
  {
    name: '安全な取り崩し率を選択する',
    text: '4%ルールが標準ですが、リスク許容度に応じて2.5%（保守的）から6%（積極的）の間で調整できます。',
  },
  {
    name: '現在の資産額を入力する',
    text: '投資額、預貯金、不労所得を生み出す資産の合計を入力します。',
  },
  {
    name: '進捗を可視化する',
    text: '資産成長チャートと自由へのマイルストーン（Lean, Barista, Fat FIRE）を確認し、いつ目標を達成できるかを把握します。',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'FIREに関するよくある質問',
  faq: faqData: '情報源とリファレンス',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4%ルール：早期リタイアの聖杯',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '不労所得だけで永遠に暮らすための必要資産額を計算する方法を紹介します。<strong>4%ルール</strong>は、1998年に3人の財務教授によって行われた「トリニティ・スタディ」から生まれました。1926年以降の歴史データを分析し、資産を30年間維持しながら毎年取り崩せる割合を算出しました。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: '歴史的成功率' },
        { value: '50/50', label: '株/債券比率' },
        { value: '30年', label: '運用期間' },
        { value: '4%', label: '安全取り崩し率' },
      ],
    },
    {
      type: 'title',
      text: 'FIREムーブメントとは？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIREは Financial Independence, Retire Early（経済的自立と早期リタイア）の頭文字です。',
        'お金に縛られず、自分の時間をどのように使うかを選択できる自由を追求します。',
        '貯蓄の最適化と賢い投資に基づいています。',
        '支出をカバーするのに十分なキャッシュフローを資産から生み出すことが目標です。',
      ],
    },
    {
      type: 'title',
      text: '財務的自由のタイプ',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'ミニマムな生活スタイル。生存に必要な基本支出のみをカバーします。',
          points: ['究極の節約', '極めて低い支出', '質素な自由'],
        },
        {
          title: 'Barista FIRE',
          description: '資産所得で支出の半分を補い、残りをパートタイム仕事で稼ぐハイブリッド型。',
          points: ['楽しみのための仕事', '社会保障の維持', '低ストレス'],
        },
        {
          title: 'Fat FIRE',
          description: '贅沢や旅行も可能な、ゆとりのある予算でのリタイア。',
          points: ['高額資産', '制限なし', '家族への遺産'],
        },
      ],
    },
    {
      type: 'title',
      text: 'FIRE計算機の使い方',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>支出の追跡:</strong> 過去12ヶ月の実際の支出を分析します。',
        '<strong>SWRの設定:</strong> リスクに応じて安全な取り崩し率を選択します。',
        '<strong>現在の資産:</strong> 現在の投資資産の評価額を入力します。',
        '<strong>貯蓄力:</strong> 目標達成までの残り時間を予測します。',
        '<strong>可視化:</strong> 資産の成長チャートを分析します。',
      ],
    },
    {
      type: 'title',
      text: '4%ルールの分析',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'メリット',
          description: 'なぜ4%ルールが機能するのか',
          points: [
            '迅速な計画のための数学的な簡潔さ。',
            '約1世紀にわたる歴史データに基づいている。',
            'あらゆる支出レベルに適応可能。',
          ],
        },
        {
          title: '限界',
          description: '4%ルールがカバーしていないこと',
          points: [
            '収益順序のリスク（引退直後の下落）を考慮していない。',
            '主に米国市場のデータに基づいている。',
            '地域の税制の大幅な変更は無視されている。',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '重要な要因：インフレ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '現在の100万円は将来同じ価値ではないことを忘れないでください。予測を現実的に保つためには、インフレを差し引いた実質利回りを使用することが不可欠です。4%ルールは、取り崩し額を毎年インフレに合わせて調整することを前提としています。',
    },
  ],
  ui: {
    labelTitle: 'FIRE計算機：4%ルール',
    labelDescription: '4%ルールを使って経済的自立のためのマジックナンバーを算出し、自由への道のりを可視化しましょう。',
    labelMonthlyExpenses: '月間支出',
    labelSWR: '取り崩し率 (SWR)',
    labelCurrentWorth: '現在の純資産',
    labelMonthlySavings: '毎月の貯蓄額',
    labelAnnualReturn: '推定利回り (手取り)',
    labelFreedomMilestones: '自由へのマイルストーン',
    labelLeanFIRE: 'Lean FIRE (生存費70%)',
    labelBaristaFIRE: 'Barista FIRE (収入50%)',
    labelFatFIRE: 'Fat FIRE (豪華生活150%)',
    labelMagicNumber: '自由になるためのマジックナンバー',
    labelMagicNumberDesc: '不労所得で暮らすために必要な資本',
    labelTimeRemaining: '財務的自由までの時間',
    labelTimeRemainingFormat: '残り {years} 年と {months} ヶ月です',
    labelAlreadyFI: 'おめでとうございます！既に財務的自由を達成しています。',
    labelUnachievable: '現在の貯蓄ペースでは目標達成が困難です',
    labelHiddenCostsChecklist: '隠れた支出チェックリスト',
    labelHealth: '医療保険 (+30,000円)',
    labelTaxes: '税金 (+20,000円)',
    labelHome: '住宅維持費 (+10,000円)',
    labelTravel: '旅行・レジャー (+50,000円)',
    labelEmergency: '緊急予備資金 (+10,000円)',
    labelSubscriptions: 'サブスクリプション (+5,000円)',
    labelAdded: '追加済み:',
    labelSavePlan: 'プランを保存',
    labelSWRTooltip: 'Safe Withdrawal Rate: 資産が枯渇するリスクを抑えつつ、毎年取り崩せる資産の割合。',
    labelReturnTooltip: '年間市場利回り（インフレ調整後）。歴史的な標準は7%です。',
    currencySymbol: '¥',
    currencyCode: 'JPY',
    currencyLocale: 'ja-JP',
  },
};
