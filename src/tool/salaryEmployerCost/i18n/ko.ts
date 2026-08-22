import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = 'spain-gross-net-salary-employer-cost-calculator';
const title = "스페인 세전 세후 급여 및 기업 부담금 계산기 2026";
const description = "2026년 스페인 법규 기준 연봉 세전 금액으로 실수령액, 소득세(IRPF), 근로자 사회보험료, 기업 총 고용 비용을 산출합니다.";

const faq = [
  {
    "question": "스페인에서 직원 1명 채용 시 기업 부담 비용은 얼마인가요?",
    "answer": "기업은 세전 급여와 기업 부담 사회보험료를 지불합니다. 연봉 3만 유로 사무직 기준 2026년 총 기업 비용은 약 39,645유로입니다."
  },
  {
    "question": "스페인 세전 급여에서 실수령액을 계산하는 방법은?",
    "answer": "연 세전 급여에서 근로자 사회보험료와 IRPF 소득세를 차감합니다."
  },
  {
    "question": "12회 지급과 14회 지급 선택 시 연봉이 변하나요?",
    "answer": "아니오. 연간 총 세전 급여와 기업 비용은 동일하며 지급 회수로 나눈 평균이 표시됩니다."
  },
  {
    "question": "2026년 포함된 사회보험료율은 무엇인가요?",
    "answer": "일반질병, 실업, 직업훈련, MEI, FOGASA 및 산재보험료가 포함됩니다."
  },
  {
    "question": "상한선을 초과하는 고액 연봉의 경우는?",
    "answer": "2026년 상한액 월 5,101.20유로 초과분에 대해 연대 연금 기여금이 누진 적용됩니다."
  },
  {
    "question": "스페인 외 국가에서도 사용 가능한가요?",
    "answer": "아니오. 스페인 2026년 제도 전용입니다."
  },
  {
    "question": "급여 정보가 서버로 전송되나요?",
    "answer": "아니오. 모든 계산은 브라우저 내에서 처리됩니다."
  }
];

const howTo = [
  {
    "name": "세전 급여 입력",
    "text": "연봉 또는 월급을 선택하고 금액을 입력합니다."
  },
  {
    "name": "스페인 급여 조건 설정",
    "text": "지급 회수, 계약 형태, IRPF 세율 및 산재보험료율을 설정합니다."
  },
  {
    "name": "급여 구조 확인",
    "text": "실수령액, 근로자 공제, 기업 부담금을 비교합니다."
  },
  {
    "name": "표기 단위 전환",
    "text": "연간 총액과 1회 지급 평균액을 전환하여 확인합니다."
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
  inLanguage: "ko",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "세전 급여 입력",
    "labelGrossSalaryHint": "급여 금액",
    "labelAnnual": "연봉",
    "labelMonthly": "월급",
    "labelPaySchedule": "지급 방식",
    "labelTwelvePayments": "연 12회 지급",
    "labelFourteenPayments": "연 14회 지급",
    "labelContract": "계약 유형",
    "labelPermanent": "정규직 (무기계약)",
    "labelTemporary": "비정규직 (계약직)",
    "labelIrpfRate": "IRPF 소득세 원천징수율",
    "labelIrpfHint": "국세청 계산기, 제안서, 급여명세서 세율 입력",
    "labelRiskRate": "산재보험료율 (AT 및 EP)",
    "labelRiskHint": "직무별 기업 부담 산재 및 직업병 보험료율",
    "labelOfficePreset": "사무직 1.50%",
    "labelTradePreset": "영업/판매직 2.00%",
    "labelConstructionPreset": "건설/현장직 6.70%",
    "labelNetCore": "세후 실수령액",
    "labelEmployeeDeductions": "근로자 공제액",
    "labelDeductionsFormula": "IRPF 소득세 + 근로자 사회보험료",
    "labelEmployerHalo": "기업 부담 사회보험료",
    "labelEmployerCost": "기업 총 고용 비용",
    "labelAnnualView": "연간 기준",
    "labelPerPaymentView": "1회 지급 평균",
    "labelGross": "세전 급여",
    "labelIrpf": "IRPF 원천징수",
    "labelEmployeeSocialSecurity": "근로자 사회보험료",
    "labelContributionBase": "월 사회보험 보수월액",
    "labelCostMultiplier": "세전 대비 고용비용 배율",
    "labelWorkerKeeps": "총 비용 대비 실수령 비율",
    "labelLeanGap": "최소 비용 구간",
    "labelTypicalGap": "표준 비용 구간",
    "labelWideGap": "확장 비용 구간",
    "labelModelScope": "스페인 전용. 2026 일반제도, 풀타임, 현금 급여 대상. 본 결과는 추정치입니다.",
    "labelReset": "예시 초기화",
    "labelInvalid": "올바른 풀타임 연봉 금액을 입력하고 세율 범위를 확인하세요.",
    "labelMinimumSalary": "본 모델은 2026년 스페인 최저임금(연 17,094€)부터 적용됩니다.",
    "labelPrivacy": "브라우저에서 로컬로 계산됩니다"
},
  seo: [
    { type: 'title', text: "스페인 세전 연봉부터 기업 실질 고용 비용까지", level: 2 },
    { type: 'paragraph', html: "2026년 스페인 법규 기준 연봉 세전 금액으로 실수령액, 소득세(IRPF), 근로자 사회보험료, 기업 총 고용 비용을 산출합니다." },
    { type: 'title', text: "기업 고용 비용 산출 공식", level: 2 },
    { type: 'paragraph', html: "기업은 세전 급여와 기업 부담 사회보험료를 지불합니다. 연봉 3만 유로 사무직 기준 2026년 총 기업 비용은 약 39,645유로입니다." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "세후 실수령액"], ['Employer Cost', "기업 총 고용 비용"]] },
    { type: 'title', text: "2026년 스페인 사회보험료율 구성", level: 2 },
    { type: 'paragraph', html: "일반질병, 실업, 직업훈련, MEI, FOGASA 및 산재보험료가 포함됩니다." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["사무직 1.50%", '1.50%'], ["영업/판매직 2.00%", '2.00%'], ["건설/현장직 6.70%", '6.70%']] },
    { type: 'title', text: "보수월액 상한선과 고액 연봉 연대 기여금", level: 2 },
    { type: 'paragraph', html: "2026년 상한액 월 5,101.20유로 초과분에 대해 연대 연금 기여금이 누진 적용됩니다." },
    { type: 'title', text: "12회 지급과 14회 지급의 차이", level: 2 },
    { type: 'paragraph', html: "아니오. 연간 총 세전 급여와 기업 비용은 동일하며 지급 회수로 나눈 평균이 표시됩니다." },
    { type: 'tip', title: "지급 방식", html: "지급 회수, 계약 형태, IRPF 세율 및 산재보험료율을 설정합니다." },
    { type: 'title', text: "스페인 급여 추정 모델의 한계", level: 2 },
    { type: 'paragraph', html: "스페인 전용. 2026 일반제도, 풀타임, 현금 급여 대상. 본 결과는 추정치입니다." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
