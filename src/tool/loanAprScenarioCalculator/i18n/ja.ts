import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "オファーA",
  labelScenarioB: "オファーB",
  labelScenarioName: "オファー名",
  labelCurrency: "通貨",
  labelApproximateRates:
    "計画用の概算係数です。リアルタイムの為替レートではありません。",
  labelPrincipal: "借入額",
  labelTerm: "返済期間",
  labelMonths: "か月",
  labelInputBasis: "何が分かっていますか？",
  labelAnnualRate: "名目年利",
  labelMonthlyPayment: "分かっている月々の支払額",
  labelUpfrontFees: "初期手数料",
  labelMonthlyFees: "月額手数料",
  labelFinalFees: "最終手数料",
  labelOfferNameA: "オファーA",
  labelOfferNameB: "オファーB",
  labelRateMode: "金利が分かる",
  labelPaymentMode: "支払額が分かる",
  labelPreset: "比較を始める",
  labelPresetBalanced: "バランス型",
  labelPresetLowFee: "低金利と手数料",
  labelPresetLongTerm: "長期返済",
  labelReset: "値をリセット",
  labelCopy: "比較をコピー",
  labelCopied: "比較をコピーしました",
  labelEffectiveApr: "実質年コスト",
  labelNominalRate: "名目金利",
  labelMonthlyPaymentResult: "月々の支払額",
  labelTotalPaid: "支払総額",
  labelTotalFees: "シナリオの手数料",
  labelFinanceCost: "元金を超えるコスト",
  labelNetCashReceived: "初期手数料後の受取額",
  labelWinner: "どちらのオファーが安いですか？",
  labelLowerCost: "実質コストが低い",
  labelHigherCost: "実質コストが高い",
  labelTie: "ほぼ同じ",
  labelNeedValidInputs: "有効な値が必要です",
  labelInvalidPrincipal:
    "借入額は0より大きく、初期手数料を上回る必要があります。",
  labelInvalidTerm: "1か月から600か月までの整数を入力してください。",
  labelInvalidFees: "手数料に負の値は使えません。",
  labelInvalidPayment: "受取額を返済できる正の月々の支払額を入力してください。",
  labelInvalidRate: "名目年利は0%から100%の範囲で入力してください。",
  labelNoComparison: "比較するには両方のオファーを入力してください。",
  labelTimeline: "支払いの流れ",
  labelStart: "開始時",
  labelMonthly: "毎月",
  labelEnd: "最終月",
  labelFormula: "比較の仕組み",
  labelFormulaText:
    "実質年コストは、受取額と割引後の支払いおよび手数料を一致させる月利を年率に換算したものです。",
  labelApproximation:
    "同じ月額支払い、据置期間なし、入力した手数料だけを前提にした概算です。貸し手の公式APRや実質年率の代わりにはなりません。",
  labelScenarioSummary: "シナリオの概要",
  currencyCode: "JPY",
  currencyLocale: "ja-JP",
};

const faq = [
  {
    question: "金利と実質年コストの違いは何ですか？",
    answer:
      "名目金利は残高にかかる利息を表します。実質年コストは、入力した初期、月額、最終手数料の金額と発生時期も反映します。",
  },
  {
    question: "金利の代わりに月々の支払額を入力できますか？",
    answer:
      "はい。そのオファーで分かっている月々の支払額を選択してください。受取額、支払いの流れ、手数料に合う月利を推定します。",
  },
  {
    question: "どちらのオファーが安いですか？",
    answer:
      "まず実質年コストを比べ、その後に支払総額と受取額を確認してください。期間や金額が違う場合、割合が低くても総額が高くなることがあります。",
  },
  {
    question: "これは貸し手の公式APRですか？",
    answer:
      "いいえ。入力内容に基づく透明なシナリオ推定です。税金、保険、支払日、その他の費用は貸し手や地域によって扱いが異なります。",
  },
];

const howTo = [
  {
    name: "金額と期間を入力",
    text: "各オファーについて受け取る金額と月々の返済回数を入力します。",
  },
  {
    name: "分かっている項目を選択",
    text: "オファーに記載された名目年利または月々の支払額を入力します。",
  },
  {
    name: "すべての手数料を追加",
    text: "開始時、毎月、終了時に発生する手数料を入力して資金の流れを整えます。",
  },
  {
    name: "比較結果を読む",
    text: "実質年コストを使い、決める前に支払総額と受取額も確認します。",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ローンAPRシナリオ計算機",
    description: "金利、支払額、手数料を含む2つのローンシナリオを比較します。",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "2つのローンオファーを比較する",
    description: "2つの資金の流れをモデル化して実質年コストを比較します。",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "loan-apr-scenario-calculator",
  title: "ローンAPRシナリオ計算機",
  description:
    "2つのローンオファーについて金利、返済予定、手数料を比較し、決める前に実質年コストを推定します。",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    { type: "title", text: "実質年コストでローンを比較する", level: 2 },
    {
      type: "paragraph",
      html: "<p>広告された金利が低くても、事務手数料、月額サービス料、最後の費用が含まれていないことがあります。この計算機は2つのオファーを比較できる資金の流れに変換し、実際に受け取るお金のコストを見えるようにします。</p>",
    },
    { type: "title", text: "推定に含まれるもの", level: 3 },
    {
      type: "paragraph",
      html: "<p>各オファーの借入額、期間、名目年利または月々の支払額、各時点の手数料を入力します。受取額と割引後の支払いおよび手数料が釣り合う月利を求め、年率に換算します。</p>",
    },
    {
      type: "paragraph",
      html: "<p>そのため、信用の価格を金利だけで判断しません。公式のAPRには地域ごとの規則や、ここで入力していない条件が含まれる可能性があるため、結果は推定値です。</p>",
    },
    { type: "title", text: "結果の読み方", level: 3 },
    {
      type: "list",
      items: [
        "金額と期間が近い場合は実質年コストを比べる。",
        "支払総額で実際の負担額を確認する。",
        "初期手数料後の受取額を確認する。",
        "支払いの流れで各費用の発生時期を見る。",
      ],
    },
    {
      type: "tip",
      title: "最後は貸し手の説明書類を確認する",
      html: "<p>実際の契約では、同じ条件で貸し手のAPRまたは実質年率と比較してください。保険、税金、変動金利、繰上返済手数料、未入力の費用を確認しましょう。</p>",
    },
    { type: "title", text: "シナリオ推定の限界", level: 3 },
    {
      type: "paragraph",
      html: "<p>同じ月々の支払い、据置期間なし、開始時または期間中または最終月の手数料を前提にします。返済能力、審査、適法性、商品の公式APRを保証するものではありません。</p>",
    },
  ],
};
