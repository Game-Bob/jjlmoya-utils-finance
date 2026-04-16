import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'supein-yachin-neage-keisanki-ipc';
const title = 'スペイン家賃値上げ計算機 IPC 3%上限';
const description = 'スペインの住宅法に基づき、消費者物価指数（IPC）または3%の法定上限による家賃の更新額を計算します。';

const faqData = [
  {
    question: '2024年と2025年の最大家賃値上げ率は？',
    answer: 'スペイン住宅法（Ley 12/2023）に基づき、2024年と2025年の居住用賃貸契約における年間家賃値上げ率は、法律により最大3%に制限されています。',
  },
  {
    question: '毎年必ずIPCに合わせて家賃を上げる必要がありますか？',
    answer: '法律上の義務ではありません。家賃を上げるには、賃貸契約書に年次更新に関する明示的な条項が含まれている必要があります。',
  },
  {
    question: '家主はいつまでに値上げを通知しなければなりませんか？',
    answer: '家主は、新しい家賃が適用される日の少なくとも1ヶ月前（30日前）までに、借主に対して書面で通知する必要があります。',
  },
  {
    question: 'IPCが法定上限の3%を超えた場合はどうなりますか？',
    answer: '実際のIPCがどれほど高くても、居住用賃貸住宅の所有者は、2024年と2025年の間、3%を超える値上げを法的に要求することはできません。',
  },
];

const howToData = [
  {
    name: '現在の家賃を入力する',
    text: '現在支払っている月額家賃を入力します。',
  },
  {
    name: '計算モードを選択する',
    text: '3%の法定上限（推奨）を選択するか、手動でパーセンテージを入力します。',
  },
  {
    name: '結果を確認する',
    text: '新しい推定家賃、月額の値上げ額、および年間で増えるコストがすぐに表示されます。',
  },
  {
    name: '概要をコピーする',
    text: '家主に送信したり、メモとして保存したりするためのクイックレポートを生成します。',
  },
];

const bibliographyData = [
  {
    name: '住宅（スペイン）に関する権利のための法律 12/2023',
    url: 'https://www.boe.es/',
  },
  {
    name: 'スペイン国立統計局 (INE) IPC計算機',
    url: 'https://www.ine.es/',
  },
  {
    name: '都市賃貸借法 (LAU)',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026年 スペイン家賃値上げ計算機 3%上限ガイド',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'スペインでは、伝統的に<strong>消費者物価指数 (IPC)</strong>が家賃価格の調整に使用されてきました。しかし、新しい住宅法により重要な制限が導入されています。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '情報源とリファレンス',
  ui: {
    labelTitle: '家賃値上げ計算機',
    labelDescription: 'IPCに合わせて家賃を調整するか、3%の法定上限を安全に適用します。',
    labelCurrentRent: '現在の家賃',
    labelCurrentRentPlaceholder: '例: 800',
    labelIncrementType: '更新モード',
    labelLegalLimit: '住宅法上限 (3%)',
    labelManualIncrement: '手動値上げ (%)',
    labelManualPercentagePlaceholder: '例: 2.5',
    labelNewRentEstimate: '新しい推定家賃',
    labelMonthlyIncrease: '月間値上げ額',
    labelYearlyExtra: '年間追加コスト',
    labelLegalBadge: '法律12/2023に基づき3%に制限',
    labelCopyButton: '家主用にコピー',
    labelCopySuccess: 'コピーしました！',
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
