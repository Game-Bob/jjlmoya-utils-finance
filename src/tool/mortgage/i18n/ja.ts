import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'mortgage-calculator';
const title = '住宅ローンシミュレーションと元利均等返済表';
const description =
  '毎月の住宅ローン返済額を計算し、支払う利息の総額を確認できます。完全な返済スケジュールを即座に表示します。';

const faqData = [
  {
    question: '元利均等返済とは何ですか？',
    answer:
      '最も一般的な返済方法です。毎月の返済額は一定ですが、初期の頃は支払額のほとんどが利息に充てられ、元金の返済はごくわずかです。後半になるとその比率が逆転します。そのため、繰り上げ返済は初期に行うほど効果的です。',
  },
  {
    question: '2026年は固定金利と変動金利のどちらが良いですか？',
    answer:
      '固定金利：現在は変動より高めですが、30年間安心して過ごせます。変動金利：現在は低金利で有利ですが、将来金利が上昇すると返済額が急増するリスクがあります。自身のリスク許容度に合わせて選ぶ必要があります。',
  },
  {
    question: '100万円を繰り上げ返済すると、どれくらい節約できますか？',
    answer:
      '返済のタイミングによります。3,000万円のローン（金利1%）の1年目に100万円を繰り上げ返済すると、将来の利息を大幅に削減できます。返済期間が残り少なくなってから行うよりも、初期に行う方が節約効果は極めて高いです。',
  },
  {
    question: '年収の何パーセントをローン返済に充てるべきですか？',
    answer:
      '一般的には、年間の返済額が手取り年収の25〜30%を超えないようにすることが推奨されます。この基準を超えると、急な支出や収入減の際に対応できなくなるリスクが高まります。',
  },
];

const howToData = [
  {
    name: '借入金額を入力する',
    text: '銀行から借りたい合計金額を入力します（自己資金を除いた額）。',
  },
  {
    name: '金利を設定する',
    text: '銀行から提示された年利を入力します。固定か変動か、複数のパターンで比較することをお勧めします。',
  },
  {
    name: '返済期間（年）を選択する',
    text: 'ローンを何年で返済するかを決めます。期間が長いほど月々の負担は減りますが、支払う利息の総額は増えます。',
  },
  {
    name: '返済計画表を確認する',
    text: '月ごとの残高の推移や、支払額のうちいくらが利息でいくらが元金に充てられているかを確認します。',
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

export const content: ToolLocaleContent<MortgageUI> = {
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
      text: '住宅ローン完全ガイド：返済の仕組みと繰り上げ返済の効果',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '住宅ローンは一生で最大の借金となる可能性が高いです。元利均等返済の仕組みを理解することは、将来的に数百万円単位の節約につながる賢い決断を下すために極めて重要です。',
    },
    {
      type: 'title',
      text: '返済の内訳：毎月の支払額の中で何が起きているか',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '日本の多くの住宅ローンでは<strong>元利均等返済</strong>が採用されています。最大の特徴は（固定金利の場合）毎月の支払額が一定であることですが、その中身（元金と利息の割合）は時間とともに大きく変化します。',
    },
    {
      type: 'tip',
      title: '返済額の推移',
      html: '<p><strong>初期（1〜10年目）：</strong>支払額の多くが「利息」に充てられ、借りたお金（元金）はなかなか減りません。借入額が多く金利が高い場合、初期の支払いの大部分が利息になることもあります。</p><p><strong>中期（11〜25年目）：</strong>徐々に元金部分の返済割合が増えていきます。</p><p><strong>終盤（26〜35年目）：</strong>支払額のほとんどが「元金」の返済に充てられ、利息はわずかになります。</p>',
    },
    {
      type: 'paragraph',
      html: 'したがって、もし<strong>繰り上げ返済</strong>を計画しているのであれば、ローンの初期段階で行うのが圧倒的に有利です。1年目に100万円を返済することで削減できる将来の利息は、20年目に行う場合よりもはるかに大きくなります。',
    },
    {
      type: 'title',
      text: '無理のない返済計画を立てるために',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '専門家は、住宅ローンの年間返済額が<strong>現在の可処分所得（手取り年収）の25〜30%を超えないこと</strong>を推奨しています。これを超えると、教育費や老後資金の積み立てが困難になったり、不測の事態に対応できなくなったりするリスクが高まります。',
    },
    {
      type: 'title',
      text: '固定金利 vs 変動金利',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '金利の動向を見据えながら、<strong>固定金利</strong>か<strong>変動金利</strong>かを選択することは、生涯の住居費を左右する重要な戦略的判断です。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '固定金利',
          description: '返済額が最後まで変わらず、将来の金利上昇リスクを完全に避けられます。',
          points: [
            '35年先まで返済額が確定',
            '教育費などの資金計画が立てやすい',
            '金利上昇の不安がない「安心料」',
            '家計管理をシンプルにしたい方向け',
          ],
        },
        {
          title: '変動金利',
          description: '現在は非常に低い金利が適用されますが、将来の金利上昇により返済額が増えるリスクがあります。',
          highlight: true,
          points: [
            '現在の返済負担を最小限に抑えられる',
            '金利が上がった際の「5年ルール・125%ルール」がある場合も',
            '金利上昇に対処できる貯蓄がある方向け',
            'リスクを取ってでも総返済額を抑えたい方向け',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: '選択のポイント',
      html: '<p><strong>固定金利が向いている人：</strong>家計に余裕が少ない、将来の不確実性を避けたい、金利のニュースを気にしたくない。</p><p><strong>変動金利が向いている人：</strong>将来の収入増が見込める、繰り上げ返済用の予備資金がある、ローン残高がそれほど多くない。</p>',
    },
  ],
  ui: {
    labelTitle: '住宅ローン計算機',
    labelLoanAmount: '借入金額',
    labelInterestRate: '年利 (年率)',
    labelYears: '返済期間 (年)',
    labelMonthlyExtra: '毎月の追加返済額',
    labelMonthlyPayment: '毎月の返済額',
    labelMonthCount: 'ヶ月',
    labelSavingsCard: '削減できる利息の概算',
    labelSavingsInterest: '利息削減',
    labelSavingsTime: '期間短縮',
    labelTimelineComparison: '返済期間の比較',
    labelTimelineOriginal: '当初の返済期間',
    labelTimelineOptimized: '追加返済後の期間',
    labelCostBreakdown: '支払い総額の内訳',
    labelBorrowed: '元金',
    labelTotalBorrowed: '借入合計',
    labelTotalInterest: '利息合計',
    labelAmortizationTable: '返済スケジュール表',
    labelTableHeader: '詳細な返済表を表示',
    labelViewAll: 'すべて表示',
    labelPaid: 'ローン完済',
    labelTableMonth: '回目',
    labelTableInterest: '利息分',
    labelTablePrincipal: '元金分',
    labelTableExtra: '繰上',
    labelTableBalance: '残り残高',
    labelMoreMonths: 'ヶ月以降',
    labelMonth: '月',
    currencySymbol: '¥',
    currencyCode: 'JPY',
    currencyLocale: 'ja-JP',
    monthPlural: 'ヶ月',
    yearPlural: '年',
  },
};
