import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RenterInsuranceCoverageGapCalculatorUI } from '../ui';
export const ui: RenterInsuranceCoverageGapCalculatorUI = {
  labelPolicyLimit: '가재도구 보장 한도', labelDeductible: '자기부담금', labelSampleLoss: '예시 손해액', labelCurrency: '통화', labelApproximateRates: '환산에는 실시간 환율이 아니라 계획용 대략적인 계수를 사용합니다.', labelPolicyBoundary: '보험 한도', labelSetLimit: '한도 설정', labelPolicyBoundaryHint: '보험증권의 가재도구 금액을 사용한 뒤 가능한 손해를 시험해 보세요.', labelInventory: '교체 비용 목록', labelInventoryHint: '오늘 전부 교체하는 데 드는 비용을 카테고리별로 추정하세요.', labelPolicyLimitHelp: '건물 한도가 아니라 보험증권의 가재도구 한도를 입력하세요.', labelDeductibleHelp: '가재도구 보험금 청구에 적용되는 자기부담금을 입력하세요.', labelSampleLossHelp: '차이를 확인한 뒤 예시 청구 상황을 보여 주는 용도로만 사용됩니다.', labelTotalContents: '추정 가재도구 가치', labelCoverageGap: '잠재적 보장 부족액', labelCoverageRatio: '추정 보장 비율', labelEstimatedPayout: '예시 보험금', labelOutOfPocket: '예시 본인 부담액', labelStatus: '보장 상태', labelStatusSafe: '한도가 목록을 충족함', labelStatusReview: '작은 차이 검토', labelStatusExposed: '가재도구가 과소보험 상태', labelStatusSafeText: '입력한 가재도구 한도가 교체 비용 목록 이상입니다. 고가품의 개별 한도는 별도로 확인하세요.', labelStatusReviewText: '한도가 목록에 가깝지만 작은 차이가 남아 있습니다. 비싼 물품과 최근 구매품을 다시 확인하세요.', labelStatusExposedText: '한도가 목록의 추정액보다 낮습니다. 전손을 가정하기 전에 보험증권을 검토하세요.', labelLargestCategories: '금액이 큰 목록 카테고리', labelCoverageLine: '보험 한도', labelReplacementValue: '교체 가치', labelLimitMarker: '한도 표시', labelLossScenario: '손해 상황', labelIllustrativePayout: '참고용일 뿐입니다. 비례보상 조항이 보험증권에 적용되지 않을 수 있습니다.', labelReset: '예시 초기화', labelCopy: '요약 복사', labelCopied: '요약을 복사했습니다', labelCopyFailed: '결과를 직접 복사하세요', labelInvalidInput: '강조된 값을 확인하세요', labelMethodTitle: '이 추정의 계산 방식', labelMethodText: '도구는 카테고리별 추정액을 합산해 가재도구 한도와 비교합니다. 부족액은 두 값의 양의 차이입니다. 예시 보험금은 보장 비율을 손해 상황에 적용한 뒤 자기부담금을 뺍니다. 이는 계획용 모델이며 실제 청구 합의액의 예측이 아닙니다. 보험증권에는 품목별 한도, 신가 보상 규칙, 면책, 제1위험 보장 또는 과소보험에 대한 다른 처리가 있을 수 있습니다.', labelPrivacyNote: '목록은 이 브라우저에 남습니다. 계정, 업로드, 서버 계산이 필요하지 않습니다.', labelAmountPlaceholder: '0.00', labelCategoryFurniture: '가구 및 장식', labelCategoryElectronics: '전자제품', labelCategoryClothing: '의류 및 신발', labelCategoryKitchen: '주방 및 가전', labelCategoryPersonal: '개인 물품', labelCategoryOther: '기타 가재도구',
};
const slug = 'renter-insurance-coverage-gap-calculator';
const title = '임차인 보험 가재도구 보장 부족액 계산기';
const description = '임차인 보험의 가재도구 한도가 소지품의 교체 비용을 충족하는지 추정하세요. 목록, 보험 한도, 자기부담금, 예시 손해액을 브라우저에서 비교합니다.';
const faq = [
  { question: '이 임차인 보험 계산기는 무엇을 측정하나요?', answer: '입력한 가재도구의 교체 비용을 합산해 보험증권의 한도와 비교합니다. 차이는 한도를 초과할 수 있는 금액의 계획용 추정치입니다.' },
  { question: '목록에는 어떤 금액을 입력해야 하나요?', answer: '가구, 전자제품, 의류, 가전, 개인 물품을 현재 교체하는 현실적인 비용을 사용하세요. 보험증권이 요구하는 평가 기준도 확인하세요.' },
  { question: '결과만으로 과소보험을 증명할 수 있나요?', answer: '아니요. 결과는 목록, 보험 조건, 가치 평가 가정에 따라 달라집니다. 품목별 한도, 면책, 특약, 과소보험 조항이 청구 결과를 바꿀 수 있습니다.' },
  { question: '왜 예시 보험금을 표시하나요?', answer: '입력한 손해액에 간단한 비례 모델을 적용하고 자기부담금을 뺀 결과를 보여 줍니다. 실제 보험사가 지급할 금액을 예측하지는 않습니다.' },
  { question: '임대인의 시설도 포함해야 하나요?', answer: '보험증권에서 가재도구 보장에 해당하는 물품만 포함하세요. 배상책임, 건물, 시설, 가재도구는 서로 다른 보장 영역일 수 있습니다.' },
];
const howTo = [
  { name: '교체 비용 목록 만들기', text: '각 방을 살펴보고 오늘 가재도구를 교체하는 비용을 입력하세요. 여섯 카테고리로 묶으면 가장 큰 가치가 보입니다.' },
  { name: '가재도구 한도 입력하기', text: '보험증권이나 견적서에서 가재도구 가입 금액을 옮겨 적으세요. 건물이나 배상책임 한도는 사용하지 마세요.' },
  { name: '자기부담금과 손해액 추가하기', text: '가재도구 청구의 자기부담금과 예시 손해액을 입력해 본인 부담 상황을 확인하세요.' },
  { name: '판단 기준 검토하기', text: '부족액이 나타나면 고가품, 품목별 한도, 귀중품, 최근 구매품을 보험사나 중개인과 확인하세요.' },
];
export const content: ToolLocaleContent<RenterInsuranceCoverageGapCalculatorUI> = { slug, title, description, ui, seo: [
  { type: 'title', text: '한도와 소지품 가치를 비교하세요', level: 2 },
  { type: 'paragraph', html: '<p>임차인 가재도구 보험은 방별 목록이 아니라 대략적인 둥근 금액으로 한도를 정할 때 부족해지기 쉽습니다. 이 계산기는 직접 추정한 교체 비용을 보장 경계로 보여 줍니다.</p>' },
  { type: 'title', text: '계산 전에 준비할 것', level: 2 },
  { type: 'list', items: ['가구, 전자제품, 의류, 가전, 개인 물품의 교체 비용 추정치.', '건물 및 배상책임과 구분된 보험증권의 가재도구 한도.', '가재도구 청구에 적용되는 자기부담금.', '예시 보험금을 확인할 때 사용할 현실적인 손해액.'] },
  { type: 'title', text: '보장 부족액 읽는 방법', level: 2 },
  { type: 'paragraph', html: '<p>부족액은 한도를 초과하는 가재도구 가치입니다. 0은 가정한 조건에서 두 합계가 만난다는 뜻이지 모든 물품이 보장된다는 의미는 아닙니다. 양수라면 평가 기준, 고가품 한도, 면책, 과소보험 조항을 확인하세요.</p>' },
  { type: 'table', headers: ['표시', '의미', '다음 행동'], rows: [['한도가 목록을 충족함', '입력한 한도가 교체 비용 합계 이상입니다.', '귀중품, 품목별 한도, 면책을 확인하세요.'], ['작은 차이 검토', '한도는 가깝지만 최근 구매나 반올림이 영향을 줄 수 있습니다.', '큰 카테고리를 다시 계산하고 보험을 갱신하세요.'], ['가재도구가 과소보험 상태', '한도가 교체 비용 합계보다 크게 낮습니다.', '새 견적을 받거나 과소보험 처리 방식을 확인하세요.']] },
  { type: 'title', text: '추정의 한계', level: 2 },
  { type: 'paragraph', html: '<p>이 도구는 보험증권을 읽거나 손해의 보장 여부를 결정하거나 구속력 있는 보험금을 계산하지 않습니다. 예시 상황은 간단한 비례 모델을 사용하고 자기부담금을 뺍니다. 실제 보험에는 다른 조항, 한도, 평가 규칙, 면책이 적용될 수 있습니다.</p>' },
  { type: 'tip', title: '증빙 팁', html: '<p>고가품의 영수증, 사진, 날짜가 있는 목록을 보관하세요. Financial Ombudsman Service는 전체 교체 비용을 계산하지 않을 때 과소보험이 생기는 이유를 설명하며, 스페인 보험계약법은 보험가입금액을 최대 보상액으로 보고 별도 약정이 없으면 비례 규칙을 둡니다.</p>' },
], faq, bibliography, howTo, schemas: [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' } },
] };
