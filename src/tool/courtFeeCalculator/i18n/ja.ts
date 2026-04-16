import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'supein-saiban-tesuryo-keisanki';
const title = 'スペイン裁判手数料計算機';
const description = 'スペインの法律10/2012に基づく、企業向けの正確な裁判手数料を計算します。免除規定に対応したモデル696シミュレーター。';

const faqData = [
  {
    question: '個人は裁判手数料の支払いを免除されますか？',
    answer: 'はい、2016年以降、スペインではすべての裁判管轄において、個人（自然人）は裁判手数料の支払いが完全に免除されています。',
  },
  {
    question: '裁判手数料の最大額はいくらですか？',
    answer: '従価手数料（変動額）の上限は10,000ユーロに制限されています。固定手数料を加算した場合、手続きの種類によっては合計額がさらに高くなる場合があります。',
  },
  {
    question: 'モデル696とは何ですか？',
    answer: 'スペイン税務局（AEAT）の公式様式で、裁判権行使に伴う手数料の自己申告・納税に使用されます。',
  },
  {
    question: '刑事事件でも手数料がかかりますか？',
    answer: 'いいえ、スペインでは刑事事件の手続きに関する裁判手数料は存在しません。',
  },
  {
    question: '従価手数料（変動額）はどのように計算されますか？',
    answer: '訴額のうち100万ユーロまでは0.5%、それを超える部分については0.25%が適用されます。上限は10,000ユーロです。',
  },
];

const howToData = [
  {
    name: '納税主体を選択する',
    text: '個人（免除）か法人（企業）かを選択します。',
  },
  {
    name: '管轄と手続きを選択する',
    text: '裁判管轄（民事、行政、社会・労働）と手続きの種類を選択します。',
  },
  {
    name: '訴額を入力する',
    text: '請求する合計金額を入力します。社会・労働管轄の場合は入力不要です。',
  },
  {
    name: '内訳を確認する',
    text: 'モデル696に必要な固定手数料、変動手数料、および合計額が自動計算されます。',
  },
];

const bibliographyData = [
  {
    name: 'スペイン裁判手数料法 10/2012',
    url: 'https://www.boe.es/',
  },
  {
    name: '裁判手数料に関する憲法裁判所判決 140/2016',
    url: 'https://www.boe.es/',
  },
  {
    name: 'スペイン税務局 - モデル 696',
    url: 'https://sede.agenciatributaria.gob.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026年 スペイン裁判所手数料計算機: 完全ガイド',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>裁判手数料計算機</strong>は、スペインの法律10/2012に基づき、裁判権行使に伴う税負担額を正確に算出するために設計された技術ツールです。',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '情報源とリファレンス',
  ui: {
    labelTitle: '裁判手数料計算機',
    labelDescription: '管轄、手続き、訴額に基づいてモデル696の正確な金額を計算します。スペインの企業および専門家向け。',
    labelLegalParameters: '法的パラメータ',
    labelEntityType: '納税主体',
    labelJurisdiction: '裁判管轄',
    labelProcedure: '手続きの種類',
    labelClaimAmount: '裁判訴額',
    labelEstimatedSettlement: '推定計算額',
    labelExemptSubject: '免除対象',
    labelFixedQuote: '固定手数料',
    labelVariableQuote: '変動手数料 (0.5% / 0.25%)',
    labelTaxableBase: '課税標準額',
    labelCopySettlement: '計算結果をコピー',
    labelEntityJuridica: '法人 (S.L., S.A. 等)',
    labelEntityFisica: '個人 (免除対象)',
    labelCivilOrder: '民事管轄',
    labelAdministrativeOrder: '行政管轄',
    labelSocialOrder: '社会・労働管轄',
    labelModel696: 'AEAT モデル 696',
    labelOrdinary: '通常訴訟',
    labelVerbal: '口頭訴訟 / 督促手続',
    labelExecutive: '強制執行',
    labelAppeal: '控訴',
    labelCassation: '上告',
    labelAbbreviated: '略式手続き',
    labelSupplication: '不服申立て',
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
