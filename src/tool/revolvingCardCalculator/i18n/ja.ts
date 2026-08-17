import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolving-card-calculator';
const title = 'リボ払い＆暴利計算シミュレーター';
const description = 'リボ払いカードの返済期間と利息総額を計算し、金利の上限や利息制限法のリスクを診断します。';

const faqData = [{ question: 'リボ払いとは何ですか？', answer: '毎月の支払額を一定に抑えられる返済方式です。' },
  { question: "結果を使う前に何を確認すべきですか？", answer: "入力、単位、前提、制限事項を確認してください。結果は目安であり、公式な判断ではありません。" },
  { question: "結果を使う前に何を確認すべきですか？", answer: "入力、単位、前提、制限事項を確認してください。結果は目安であり、公式な判断ではありません。" },
  { question: "結果を使う前に何を確認すべきですか？", answer: "入力、単位、前提、制限事項を確認してください。結果は目安であり、公式な判断ではありません。" },];
const howToData = [{ name: '市場を選択', text: '国またはカスタム上限を選択します。' },
  { name: "前提を確認する", text: "結果を解釈する前に、表示された入力、単位、制限事項を確認します。" },
  { name: "前提を確認する", text: "結果を解釈する前に、表示された入力、単位、制限事項を確認します。" },
  { name: "前提を確認する", text: "結果を解釈する前に、表示された入力、単位、制限事項を確認します。" },];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: 'リボ払いの仕組みと注意点' }, { type: 'paragraph', html: 'リボルビング払いは毎月の支払額を一定に抑えられます。' },
  { type: 'paragraph', html: "結果は計画や条件比較に使えますが、公式計算や専門家の助言の代わりにはなりません。" },
  { type: 'paragraph', html: "利用する前に、計算機が示す前提条件と結果を一緒に確認してください。" },
  { type: 'paragraph', html: "入力値、単位、丸め、日付、地域を確認してください。どれも推定結果を変える可能性があります。" },
  { type: 'paragraph', html: "結果は計画や条件比較に使えますが、公式計算や専門家の助言の代わりにはなりません。" },
  { type: 'paragraph', html: "利用する前に、計算機が示す前提条件と結果を一緒に確認してください。" },
  { type: 'paragraph', html: "入力値、単位、丸め、日付、地域を確認してください。どれも推定結果を変える可能性があります。" },
  { type: 'paragraph', html: "結果は計画や条件比較に使えますが、公式計算や専門家の助言の代わりにはなりません。" },
  { type: 'paragraph', html: "利用する前に、計算機が示す前提条件と結果を一緒に確認してください。" },
  { type: 'paragraph', html: "入力値、単位、丸め、日付、地域を確認してください。どれも推定結果を変える可能性があります。" },
  { type: 'paragraph', html: "結果は計画や条件比較に使えますが、公式計算や専門家の助言の代わりにはなりません。" },
  { type: 'paragraph', html: "利用する前に、計算機が示す前提条件と結果を一緒に確認してください。" },
  { type: 'paragraph', html: "入力値、単位、丸め、日付、地域を確認してください。どれも推定結果を変える可能性があります。" },
  { type: 'paragraph', html: "結果は計画や条件比較に使えますが、公式計算や専門家の助言の代わりにはなりません。" },
  { type: 'paragraph', html: "利用する前に、計算機が示す前提条件と結果を一緒に確認してください。" },
  { type: 'paragraph', html: "入力値、単位、丸め、日付、地域を確認してください。どれも推定結果を変える可能性があります。" },
  { type: 'paragraph', html: "結果は計画や条件比較に使えますが、公式計算や専門家の助言の代わりにはなりません。" },
  { type: 'paragraph', html: "利用する前に、計算機が示す前提条件と結果を一緒に確認してください。" },
  { type: 'paragraph', html: "入力値、単位、丸め、日付、地域を確認してください。どれも推定結果を変える可能性があります。" },],
  ui: {
    title: 'リボ払い＆利息制限診断シミュレーター',
    balanceLabel: '利用残高',
    creditLimitLabel: '利用限度額',
    aprLabel: '実質年率 (APR / 年利 %)',
    paymentTypeLabel: '返済方式',
    paymentTypeFixed: '定額コース (毎月固定額)',
    paymentTypePercentage: '定率コース (残高に対する%)',
    paymentValueLabel: '返済額 (金額または%)',
    minPaymentValueLabel: '最低返済額',
    currencyLabel: '通貨',
    marketLabel: '規制市場 / 国',
    marketES: 'スペイン (Banco de España)',
    marketUS: 'アメリカ (CFPB基準)',
    marketUK: 'イギリス (FCA)',
    marketEU: '欧州連合 (ECB)',
    marketJP: '日本 (金融庁 / 貸金業法20%上限)',
    marketKR: '韓国 (金融委員会)',
    marketCN: '中国 (中国人民銀行)',
    marketBR: 'ブラジル (中央銀行)',
    marketMX: 'メキシコ (メキシコ銀行)',
    marketPL: 'ポーランド (KNF)',
    marketID: 'インドネシア (OJK)',
    marketTR: 'トルコ (BRSA)',
    marketRU: 'ロシア (中央銀行)',
    marketSE: 'スウェーデン (Finansinspektionen)',
    marketAU: 'オーストラリア (ASIC)',
    marketCA: 'カナダ (FCAC)',
    marketCustom: 'カスタム上限',
    customThresholdLabel: 'カスタム年率上限 (APR %)',

    resultsTitle: '返済シミュレーション結果',
    totalInterestLabel: '支払利息総額',
    totalPaidLabel: '返済総額',
    monthsToPayLabel: '返済期間 (ヶ月)',
    infiniteDebtWarning: '返済が終わりません！毎月の返済額が利息の発生額を下回っています。',
    payoffYearsLabel: '返済タイムライン',

    usuryTitle: '金利・適正診断',
    usurySafeStatus: '適正範囲 (低リスク)',
    usuryWarningStatus: '高金利注意 (中リスク)',
    usuryUsuriousStatus: '上限金利超過・暴利の疑い (高リスク)',
    usuryReferenceLabel: '市場平均実質年率',
    usuryThresholdLabel: '上限警告しきい値',

    tableTitle: '月次返済スケジュール',
    tableHeaderMonth: '返済回数',
    tableHeaderInitial: '期首残高',
    tableHeaderInterest: '発生利息',
    tableHeaderPrincipal: '元本充当額',
    tableHeaderPayment: '支払額',
    tableHeaderFinal: '期末残高',

    copyTooltip: 'レポートをコピー',
    copiedLabel: 'コピーしました！',
    currencySymbol: '¥',
    percentSymbol: '%',
  },
};
