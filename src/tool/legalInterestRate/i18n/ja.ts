import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'legal-interest-on-money-spain';
const title = '法定利息';
const description = '2026年にスペインで適用される法定利息を計算します。予算案に基づいた利率3.25%のシミュレーターです。';

const faqData = [
  {
    question: '2026年の法定利息はいくらですか？',
    answer: '2026年度の法定利息は、国家一般予算案（LPGE）により3.25%に設定されています。',
  },
  {
    question: '遅延利息はどのように計算されますか？',
    answer: '遅延利息は、未払いの元本に3.25%を掛け、遅延日数を掛け、36,500で割ることで計算されます。365日ベースを使用します。',
  },
  {
    question: '法定利息と遅延利息の違いは何ですか？',
    answer: '法定利息は基本となる基準金利です。税務上の遅延利息（Hacienda）は4.0625%です。商取引上の利息（約10.15%）が最も高くなります。',
  },
  {
    question: '契約条項がなくても自動的に適用されますか？',
    answer: 'はい、支払遅延が発生し、他の利息の合意がない場合は、原則として法定利息が自動的に適用されます。',
  },
  {
    question: '裁判上の利息（Interés Procesal）とは何ですか？',
    answer: '裁判上の利息は5.25%（法定利息＋2ポイント）で、金銭の支払いを命じる判決が出された時点から適用されます。',
  },
];

const howToData = [
  {
    name: '未払い元本を入力する',
    text: '利息を計算する必要がある金額（例：未払いの請求書）を入力します。',
  },
  {
    name: '遅延日数を指定する',
    text: '支払遅延が何日間続いたか、あるいは続く予定かを入力します。365日ベースです。',
  },
  {
    name: '結果を表示する',
    text: '2026年に有効な3.25%を適用した、発生利息額と支払合計額が自動的に表示されます。',
  },
  {
    name: '他の利率を確認する',
    text: '税務上の遅延利息（4.06%）など、他の基準金利も参考にしてください。',
  },
];

const bibliographyData = [
  {
    name: '2026年スペイン国家一般予算案',
    url: 'https://www.boe.es/',
  },
  {
    name: 'スペイン民法 - 第1108条以降',
    url: 'https://www.boe.es/',
  },
  {
    name: '支払遅延防止法 (Ley 3/2004)',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '法定利息 2026年 スペイン - 計算機',
  },
  {
    type: 'paragraph',
    html: 'スペインの<strong>2026年の法定利息</strong>は<strong>3.25%</strong>です。他の合意がない限り、支払遅延に対して自動的に適用されます。',
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

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '法的情報源',
  ui: {
    labelTitle: '法定利息率',
    labelDescription: '2026年予算案に基づく法定利息額を計算します。スペイン向けの3.25%シミュレーターです。',
    labelBadge: '国家官報 (BOE) 2026',
    labelSubtitle: '2026年度の法定利息は3.25%に維持されています。',
    labelLegalInterest: '法定利息',
    labelDelayInterest: '遅延利息',
    labelCommercialOperations: '商取引',
    labelActive: '2026年有効',
    labelTributary: '税務上の (Hacienda)',
    labelFirstHalf: '2026年上半期',
    labelQuickCalculator: '簡易利息計算機 (3.25%)',
    labelCapital: '未払い元本',
    labelDays: '遅延日数',
    labelInterestGenerated: '発生利息',
    labelTotalToPay: '支払合計額',
    labelFormula: 'この計算機は標準的な単利の公式を適用しています。',
    labelBase: 'スペインの現行規制に従い、公式な計算には365日ベースを使用します。',
    labelOfficialRegulation: '公式規制',
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
