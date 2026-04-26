import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'debt-snowball-calculator';
const title = '債務スノーボール計算機：返済計画 2026';
const description = 'デイブ・ラムジーのスノーボール・メソッドで完済日を計算。負債を整理し、月次の返済スケジュールを可視化します。';

const faqData = [
  {
    question: 'スノーボール・メソッド（雪だるま式返済法）とは？',
    answer: '利率に関係なく、負債残高の少ない順に返済していく戦略です。小さな負債を早く完済することで心理的な達成感を得て、モチベーションを維持することに重点を置いています。',
  },
  {
    question: 'なぜ利率の高い順（アバランチ・メソッド）に並べないのですか？',
    answer: '数学的には高利率の負債から返済する方が利息の節約になりますが、結果が見えるまで時間がかかり、挫折する人が多いためです。スノーボール式は、小さな成功を積み重ねる行動心理学的な側面を優先しています。',
  },
  {
    question: '計画を始める前に貯金は必要ですか？',
    answer: '負債を攻撃し始める前に、小さな「初期緊急資金」（約1,000ユーロ程度）を用意することをお勧めします。これにより、予期せぬ出費で再びクレジットカードに頼ることを防げます。',
  },
  {
    question: 'どのような負債を計算機に含めるべきですか？',
    answer: 'クレジットカード、個人ローン、自動車ローン、未払いの請求書など、すべての消費者負債を含めます。住宅ローンは金額が大きいため、通常は後の段階に残します。',
  },
];

const howToData = [
  {
    name: '負債をリストアップする',
    text: 'すべての負債の残高と、現在支払っている月々の最低支払額を書き出します。',
  },
  {
    name: '追加予算を決める',
    text: '最低支払額に加えて、毎月いくら追加で返済に回せるかを計算します。',
  },
  {
    name: '順序と優先順位',
    text: '計算機は残高の少ない順に自動で並べ替えます。一番小さな負債以外は最低額だけを支払います。',
  },
  {
    name: 'カスケードを実行する',
    text: '一番小さな負債を完済したら、それまで充てていた全額を次の負債の返済に上乗せします。これを繰り返します。',
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
    '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text,
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
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
      text: '債務スノーボール計算機：2026年ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '借金のある生活は重い荷物を背負ってマラソンをするようなものです。<strong>スノーボール・メソッド</strong>は、経済的自由を取り戻すための最も効果的な戦略の一つであることが証明されています。',
    },
  ],
  ui: {
    labelTitle: '完全な自由',
    labelDescription: '心理的に最も効果的な方法で、経済的自由への道を歩み始めましょう。',
    labelExtraBudget: '毎月の追加予算',
    labelExtraBudgetHelp: '最低支払額に上乗せして支払える金額。',
    labelSnowballMethod: 'スノーボール',
    labelAvalancheMethod: 'アバランチ',
    labelAddNewDebt: '新しい負債を追加',
    labelDebtName: '名称',
    labelDebtNamePlaceholder: '例: Visaカード',
    labelDebtBalance: '現在残高',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: '最低支払額',
    labelInterestRate: '利率',
    labelInterestHelp: '年率',
    labelAddButton: 'プランに追加',
    labelClearData: '設定をクリア',
    labelClearDataConfirm: 'プランを空にしますか？',
    labelDeleteDebt: '削除',
    labelDebtInventory: '負債インベントリ',
    labelFreedomDate: '完済予定日',
    labelActiveMethod: 'メソッド',
    labelMonthsRemaining: '残り月数',
    labelTotalInterest: '支払利息合計',
    labelTotalPaid: '最終支払総額',
    labelInterestSaved: '節約できる利息',
    labelYourStrategy: 'ステップバイステップ戦略',
    labelStrategyHelp: '各ステップで支払総額が表示されます。',
    labelPriority: '最優先',
    labelStep: 'ステップ',
    labelAfterPaying: '前の負債を完済後',
    labelMonthlyPayment: '毎月の支払額',
    labelDetailedAmortization: '詳細な返済シミュレーション',
    labelExportCSV: '.CSVで書き出し',
    labelDate: '日付',
    labelStartingBalance: '開始残高',
    labelInterest: '利息',
    labelAmortization: '元金返済額',
    labelTotalMonth: '月間合計',
    labelRemaining: '残高',
    labelFree: '完済',
    labelDebtInfinite: '無限の債務',
    labelInvalidInput: '残高と最低支払額を入力してください',
    labelEmptyStateTitle: 'プランを開始',
    labelEmptyStateDescription: '借金は永遠ではありません。負債を追加して完済までの道筋を確認しましょう。',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ja-JP',
  },
};
