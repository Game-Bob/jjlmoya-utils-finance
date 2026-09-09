import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "상품 A",
  labelScenarioB: "상품 B",
  labelScenarioName: "상품 이름",
  labelCurrency: "통화",
  labelApproximateRates: "계획용 근사 계수이며 실시간 환율이 아닙니다.",
  labelPrincipal: "대출 금액",
  labelTerm: "상환 기간",
  labelMonths: "개월",
  labelInputBasis: "어떤 정보를 알고 있나요?",
  labelAnnualRate: "명목 연이율",
  labelMonthlyPayment: "알고 있는 월 상환액",
  labelUpfrontFees: "초기 수수료",
  labelMonthlyFees: "월 수수료",
  labelFinalFees: "최종 수수료",
  labelOfferNameA: "상품 A",
  labelOfferNameB: "상품 B",
  labelRateMode: "금리를 알고 있어요",
  labelPaymentMode: "상환액을 알고 있어요",
  labelPreset: "비교 시작",
  labelPresetBalanced: "균형 잡힌 상품",
  labelPresetLowFee: "낮은 금리와 수수료",
  labelPresetLongTerm: "긴 상환 기간",
  labelReset: "값 초기화",
  labelCopy: "비교 복사",
  labelCopied: "비교를 복사했습니다",
  labelEffectiveApr: "실질 연간 비용",
  labelNominalRate: "명목 금리",
  labelMonthlyPaymentResult: "월 상환액",
  labelTotalPaid: "총 납부액",
  labelTotalFees: "시나리오 수수료",
  labelFinanceCost: "원금 초과 비용",
  labelNetCashReceived: "초기 수수료 후 수령액",
  labelWinner: "어느 상품이 더 저렴한가요?",
  labelLowerCost: "실질 비용이 낮음",
  labelHigherCost: "실질 비용이 높음",
  labelTie: "거의 같음",
  labelNeedValidInputs: "유효한 값이 필요합니다",
  labelInvalidPrincipal: "대출 금액은 0보다 크고 초기 수수료보다 커야 합니다.",
  labelInvalidTerm: "1개월에서 600개월 사이의 정수를 입력하세요.",
  labelInvalidFees: "수수료는 음수가 될 수 없습니다.",
  labelInvalidPayment:
    "수령한 순액을 상환할 수 있는 양의 월 상환액을 입력하세요.",
  labelInvalidRate: "명목 연이율은 0%에서 100% 사이여야 합니다.",
  labelNoComparison: "두 상품을 모두 입력해야 비교할 수 있습니다.",
  labelTimeline: "상환 일정",
  labelStart: "시작",
  labelMonthly: "매월",
  labelEnd: "마지막 달",
  labelFormula: "비교 방식",
  labelFormulaText:
    "실질 연간 비용은 수령액과 할인된 상환액 및 수수료가 같아지도록 하는 월 이율을 연율로 환산한 값입니다.",
  labelApproximation:
    "동일한 월 상환액, 거치 기간 없음, 입력한 수수료만을 가정한 추정치입니다. 대출기관의 공식 APR을 대신하지 않습니다.",
  labelScenarioSummary: "시나리오 요약",
  currencyCode: "KRW",
  currencyLocale: "ko-KR",
};

const faq = [
  {
    question: "이자율과 실질 연간 비용의 차이는 무엇인가요?",
    answer:
      "명목 금리는 잔액에 부과되는 이자를 나타냅니다. 실질 연간 비용은 입력한 초기, 월, 최종 수수료의 금액과 시점도 반영합니다.",
  },
  {
    question: "이자율 대신 월 상환액을 입력할 수 있나요?",
    answer:
      "네. 해당 상품에서 알고 있는 월 상환액을 선택하세요. 수령액, 상환 흐름, 수수료에 맞는 월 이율을 계산합니다.",
  },
  {
    question: "어느 상품이 더 저렴한가요?",
    answer:
      "먼저 실질 연간 비용을 비교한 뒤 총 납부액과 수령액을 확인하세요. 기간이나 금액이 다르면 비율이 낮아도 총비용은 높을 수 있습니다.",
  },
  {
    question: "대출기관의 공식 APR인가요?",
    answer:
      "아닙니다. 입력값에 기반한 투명한 시나리오 추정치입니다. 세금, 보험, 납부일과 기타 비용은 대출기관과 지역에 따라 다르게 계산될 수 있습니다.",
  },
];

const howTo = [
  {
    name: "금액과 기간 입력",
    text: "각 상품에서 받을 금액과 월 상환 횟수를 입력합니다.",
  },
  {
    name: "알고 있는 정보 선택",
    text: "상품에 표시된 명목 연이율 또는 월 상환액을 입력합니다.",
  },
  {
    name: "모든 수수료 추가",
    text: "초기, 매월, 최종 수수료를 입력해 전체 현금 흐름을 반영합니다.",
  },
  {
    name: "비교 결과 읽기",
    text: "실질 연간 비용을 사용하고 결정하기 전에 총 납부액과 수령액도 확인합니다.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "대출 APR 시나리오 계산기",
    description: "금리, 상환액, 수수료가 있는 두 대출 시나리오를 비교합니다.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
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
    name: "두 대출 상품 비교하기",
    description:
      "두 대출의 현금 흐름을 모델링하고 실질 연간 비용을 비교합니다.",
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
  title: "대출 APR 시나리오 계산기",
  description:
    "두 대출 상품의 금리, 상환 일정, 수수료를 비교해 결정 전에 실질 연간 비용을 추정합니다.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    { type: "title", text: "실질 연간 비용으로 대출 비교하기", level: 2 },
    {
      type: "paragraph",
      html: "<p>광고된 금리가 낮아도 취급 수수료, 월 서비스 비용, 최종 비용이 숨어 있을 수 있습니다. 이 계산기는 두 상품의 세부 정보를 비교 가능한 현금 흐름으로 바꿔 실제로 받는 돈의 비용을 보여 줍니다.</p>",
    },
    { type: "title", text: "추정에 포함되는 내용", level: 3 },
    {
      type: "paragraph",
      html: "<p>각 상품에 대출 금액, 기간, 명목 연이율 또는 알고 있는 월 상환액과 각 시점의 수수료를 입력합니다. 수령한 순액과 할인된 상환액 및 수수료가 균형을 이루는 월 이율을 찾은 뒤 연율로 환산합니다.</p>",
    },
    {
      type: "paragraph",
      html: "<p>따라서 신용 비용을 이자율만으로 보지 않습니다. 공식 APR에는 지역별 규칙과 입력하지 않은 조건이 포함될 수 있으므로 결과는 추정치입니다.</p>",
    },
    { type: "title", text: "결과 읽는 방법", level: 3 },
    {
      type: "list",
      items: [
        "금액과 기간이 비슷할 때 실질 연간 비용을 비교하세요.",
        "총 납부액으로 실제 현금 부담을 확인하세요.",
        "초기 수수료 후 받는 금액을 확인하세요.",
        "일정에서 각 비용이 언제 발생하는지 보세요.",
      ],
    },
    {
      type: "tip",
      title: "최종 기준은 대출기관의 설명서입니다",
      html: "<p>실제 계약을 비교할 때는 같은 조건으로 대출기관의 APR을 확인하세요. 보험, 세금, 변동 금리, 중도상환 비용과 입력하지 못한 수수료를 물어보세요.</p>",
    },
    { type: "title", text: "시나리오 추정의 한계", level: 3 },
    {
      type: "paragraph",
      html: "<p>이 도구는 동일한 월 상환액, 거치 기간 없음, 시작 시점이나 기간 중 또는 마지막 달의 수수료를 가정합니다. 상환 능력, 승인, 적법성 또는 상품의 공식 APR을 보장하지 않습니다.</p>",
    },
  ],
};
