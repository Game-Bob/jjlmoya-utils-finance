import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: '総貯蓄額',
  labelExpenses: '現在の支出',
  labelMonthly: '月次',
  labelYearly: '年次',
  labelTimeRemaining: '生存可能期間（ランウェイ）',
  labelYears: '年',
  labelMonths: 'ヶ月',
  labelDays: '日',
  labelYearsShort: '年',
  labelMonthsShort: '月',
  labelDaysShort: '日',
  labelStatus: '財務的安全ステータス',
  labelRedZone: 'レッドゾーン：高リスク',
  labelYellowZone: 'イエローゾーン：安定',
  labelGreenZone: 'グリーンゾーン：財務的自由',
  labelBurnRateDaily: '1日あたりの支出額',
  labelBurnRateMonthly: '1ヶ月あたりの支出額',
  labelWhatIf: '10%の節約効果',
  labelWhatIfDescription: '支出をわずか10%削減するだけで、生存可能期間を大幅に延ばすことができます。',
  labelGainTime: '延長される生存期間',
  labelCopyResult: '概要をコピー',
  labelCopied: 'コピーしました！',
};

const slug = 'financial-freedom-calculator';
const title = '財務的自由＆生存期間（ランウェイ）計算機';
const description = '貯蓄がいつまで持つかを正確に計算します。このツールは、あなたの経済的自立を視覚化し、緊急資金の計画を支援します。';

const faq = [
  {
    question: '理想的な生存期間はどのくらいですか？',
    answer: '専門家は一般的に、最低3〜6ヶ月分の支出を推奨しています。真の自由のためには、2年以上のランウェイを目指しましょう。',
  },
  {
    question: 'この計算機はインフレを考慮していますか？',
    answer: 'このツールは、現在の支出に対する流動資産の即時計算用に設計されています。',
  },
  {
    question: '個人の財務における「バーンレート」とは何ですか？',
    answer: 'バーンレートとは、生活費を賄うために貯蓄を消費する速度のことです。',
  },
];

const howTo = [
  {
    name: '総貯蓄額を入力',
    text: '現在利用可能な現金または流動資産の合計を入力してください。',
  },
  {
    name: '定期的な支出を設定',
    text: '1ヶ月または1年あたりの支出額を入力してください。',
  },
  {
    name: '安全ゾーンを分析',
    text: 'レッド、イエロー、グリーンのどのゾーンにいるかを確認してください。',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: '財務的ランウェイとは？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>生存期間（ランウェイ）</strong>とは、新たな収入がなくても生活できる期間のことです。これは財務的自由の究極の指標です。',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'FIREムーブメントの原則',
      url: 'https://ja.wikipedia.org/wiki/FIRE_ムーブメント',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
