import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = 'spain-gross-net-salary-employer-cost-calculator';
const title = "スペイン額面・手取り給与＆企業負担額計算ツール 2026";
const description = "2026年のスペイン規制に基づき、年収額面から手取り額、所得税（IRPF）、社会保険料、および企業の総雇用コストを試算します。";

const faq = [
  {
    "question": "スペインで従業員1人を雇用する企業コストはいくらですか？",
    "answer": "企業は額面給与と企業負担分社会保険料を支払います。年収3万ユーロの正社員事務職の場合、2026年基準の年間総雇用コストは約39,645ユーロと試算されます。"
  },
  {
    "question": "スペインの額面給与から手取り給与を計算する方法は？",
    "answer": "年額面から労働者負担社会保険料とIRPF源泉徴収税を差し引きます。"
  },
  {
    "question": "年12回支給と14回支給で年収は変わりますか？",
    "answer": "いいえ。年間額面給与および年間企業コストは同額で、支給回数で割った平均額が表示されます。"
  },
  {
    "question": "2026年適用される社会保険料率は何ですか？",
    "answer": "一般傷病、失業、職業訓練、MEI（世代間連帯メカニズム）、FOGASA（賃金保証基金）、労災保険料が含まれます。"
  },
  {
    "question": "標準報酬上限額を超えた場合はどうなりますか？",
    "answer": "2026年の月額標準報酬上限5,101.20ユーロを超える部分には段階的な連帯拠出金が適用されます。"
  },
  {
    "question": "スペイン国外の給与計算にも使えますか？",
    "answer": "いいえ。スペインの2026年一般制度専用です。"
  },
  {
    "question": "給与データが外部サーバーに送信されますか？",
    "answer": "いいえ。すべての計算はブラウザ内でローカル実行されます。"
  }
];

const howTo = [
  {
    "name": "額面給与を入力",
    "text": "年額または月額を選択し、提示給与額を入力します。"
  },
  {
    "name": "給与条件を設定",
    "text": "支給回数、契約形態、IRPF税率、労災保険料率を選択します。"
  },
  {
    "name": "給与の内訳を確認",
    "text": "手取り額、労働者控除、企業負担保険料を比較します。"
  },
  {
    "name": "表示期間を切り替え",
    "text": "年間合計と支給1回あたりの平均額を切り替えます。"
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "ja",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "額面給与シグナル",
    "labelGrossSalaryHint": "給与額",
    "labelAnnual": "年額",
    "labelMonthly": "月額",
    "labelPaySchedule": "支給回数",
    "labelTwelvePayments": "年12回支給",
    "labelFourteenPayments": "年14回支給",
    "labelContract": "契約形態",
    "labelPermanent": "無期雇用（正社員）",
    "labelTemporary": "有期雇用（契約社員）",
    "labelIrpfRate": "IRPF所得税源泉徴収率",
    "labelIrpfHint": "国税庁の計算結果、提示条件、給与明細の税率を入力",
    "labelRiskRate": "労働災害保険料率（AT/EP）",
    "labelRiskHint": "職種ごとの企業負担労災保険料率",
    "labelOfficePreset": "オフィス事務 1.50%",
    "labelTradePreset": "営業・販売職 2.00%",
    "labelConstructionPreset": "建設・現場作業 6.70%",
    "labelNetCore": "手取り給与コア",
    "labelEmployeeDeductions": "労働者控除額",
    "labelDeductionsFormula": "IRPF所得税＋労働者負担社会保険料",
    "labelEmployerHalo": "企業負担社会保険料ヘイロー",
    "labelEmployerCost": "企業総雇用コスト",
    "labelAnnualView": "年間表示",
    "labelPerPaymentView": "1回あたり平均支給額",
    "labelGross": "額面給与",
    "labelIrpf": "IRPF源泉徴収",
    "labelEmployeeSocialSecurity": "労働者社会保険料",
    "labelContributionBase": "月額標準報酬標準ベース",
    "labelCostMultiplier": "額面対比コスト倍率",
    "labelWorkerKeeps": "総コストに対する手取り割合",
    "labelLeanGap": "コンパクトコスト枠",
    "labelTypicalGap": "標準コスト枠",
    "labelWideGap": "拡張コスト枠",
    "labelModelScope": "スペイン専用。2026年一般制度、フルタイム勤務、現金給与対象。試算結果であり税務・労務助言ではありません。",
    "labelReset": "サンプルをリセット",
    "labelInvalid": "有効なフルタイム年収額を入力し、税率と労災率を規定範囲内に設定してください。",
    "labelMinimumSalary": "本モデルは2026年フルタイム最低賃金（年額17,094€）から対応しています。",
    "labelPrivacy": "ブラウザ内でローカル計算されます"
},
  seo: [
    { type: 'title', text: "スペインにおける額面給与から企業の実質雇用コストまで", level: 2 },
    { type: 'paragraph', html: "2026年のスペイン規制に基づき、年収額面から手取り額、所得税（IRPF）、社会保険料、および企業の総雇用コストを試算します。" },
    { type: 'title', text: "企業雇用コストの計算式", level: 2 },
    { type: 'paragraph', html: "企業は額面給与と企業負担分社会保険料を支払います。年収3万ユーロの正社員事務職の場合、2026年基準の年間総雇用コストは約39,645ユーロと試算されます。" },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "手取り給与コア"], ['Employer Cost', "企業総雇用コスト"]] },
    { type: 'title', text: "2026年スペイン社会保険料率の内訳", level: 2 },
    { type: 'paragraph', html: "一般傷病、失業、職業訓練、MEI（世代間連帯メカニズム）、FOGASA（賃金保証基金）、労災保険料が含まれます。" },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["オフィス事務 1.50%", '1.50%'], ["営業・販売職 2.00%", '2.00%'], ["建設・現場作業 6.70%", '6.70%']] },
    { type: 'title', text: "標準報酬上限と高額所得の連帯拠出", level: 2 },
    { type: 'paragraph', html: "2026年の月額標準報酬上限5,101.20ユーロを超える部分には段階的な連帯拠出金が適用されます。" },
    { type: 'title', text: "12回支給と14回支給の違い", level: 2 },
    { type: 'paragraph', html: "いいえ。年間額面給与および年間企業コストは同額で、支給回数で割った平均額が表示されます。" },
    { type: 'tip', title: "支給回数", html: "支給回数、契約形態、IRPF税率、労災保険料率を選択します。" },
    { type: 'title', text: "本給与試算ツールの適用範囲と限界", level: 2 },
    { type: 'paragraph', html: "スペイン専用。2026年一般制度、フルタイム勤務、現金給与対象。試算結果であり税務・労務助言ではありません。実際の給与計算では、家族状況、地域税制、福利厚生、賞与、契約条件によって手取りと会社負担が変わります。入力したIRPF、契約形態、支給回数、労災保険料率の前提を確認して比較してください。12回払いと14回払いは年間総額を変えず、表示される1回あたりの平均だけを変えます。高額給与では上限額と連帯拠出も結果に影響します。給与明細や専門家の計算と比較し、重要な判断では公式情報を確認してください。会社の採用予算を比較するときは、同じ前提条件を使うことが大切です。" },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
