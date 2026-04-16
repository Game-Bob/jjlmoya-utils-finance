import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'supein-beob-weon-su-su-ryo-gye-san-gi';
const title = '스페인 법원 수수료 계산기';
const description = '스페인 법률 10/2012에 따른 기업용 법원 수수료를 정확하게 계산합니다. 면제 규정을 반영한 모델 696 시뮬레이터.';

const faqData = [
  {
    question: '개인은 법원 수수료가 면제되나요?',
    answer: '네, 2016년부터 스페인의 모든 사법 관할 구역에서 개인(자연인)은 법원 수수료 납부가 완전히 면제되었습니다.',
  },
  {
    question: '법원 수수료의 최대 금액은 얼마인가요?',
    answer: '가변 수수료(종가 수수료)는 최대 10,000유로로 제한됩니다. 고정 수수료를 합산하면 절차 유형에 따라 총액이 그 이상이 될 수 있습니다.',
  },
  {
    question: '모델 696이란 무엇인가요?',
    answer: '사법권 행사에 따른 수수료 자진 신고 및 납부에 사용되는 스페인 세무국(AEAT)의 공식 양식입니다.',
  },
  {
    question: '형사 사건에서도 수수료를 내야 하나요?',
    answer: '아니요, 스페인에서는 형사 사건 절차에 대한 법원 수수료가 존재하지 않습니다.',
  },
  {
    question: '가변 수수료는 어떻게 계산되나요?',
    answer: '소송 가액 중 100만 유로까지는 0.5%, 그 초과분에 대해서는 0.25%가 적용됩니다. 최대 상한선은 10,000유로입니다.',
  },
];

const howToData = [
  {
    name: '납세 의무자 선택',
    text: '개인(면제) 또는 법인(기업) 여부를 선택합니다.',
  },
  {
    name: '관할 및 절차 선택',
    text: '사법 관할(민사, 행정 또는 사회·노동)과 절차 유형을 선택합니다.',
  },
  {
    name: '소송 가액 입력',
    text: '소장에 기재된 총 청구 금액을 입력합니다. 사회·노동 관할의 경우 이 항목은 해당하지 않습니다.',
  },
  {
    name: '상세 내역 확인',
    text: '모델 696을 위한 고정, 가변 및 총 수수료 자동 계산 결과를 확인합니다.',
  },
];

const bibliographyData = [
  {
    name: '스페인 법원 수수료법 10/2012',
    url: 'https://www.boe.es/',
  },
  {
    name: '법원 수수료에 관한 헌법재판소 판결 140/2016',
    url: 'https://www.boe.es/',
  },
  {
    name: '스페인 세무국 - 모델 696',
    url: 'https://sede.agenciatributaria.gob.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026 스페인 법원 수수료 계산기: 완전 가이드',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>법원 수수료 계산기</strong>는 법률 10/2012에 따라 스페인 사법권 행사의 조세 비용을 정확하게 결정하기 위해 설계된 기술적 도구입니다.',
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
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '출처 및 참고 자료',
  ui: {
    labelTitle: '법원 수수료 계산기',
    labelDescription: '관할, 절차 및 가액에 따른 모델 696의 정확한 금액을 계산합니다. 스페인 기업 및 전문가용.',
    labelLegalParameters: '법적 파라미터',
    labelEntityType: '납세 의무자',
    labelJurisdiction: '관할',
    labelProcedure: '절차 유형',
    labelClaimAmount: '소송 가액',
    labelEstimatedSettlement: '예상 정산액',
    labelExemptSubject: '면제 대상',
    labelFixedQuote: '고정 수수료 (절차)',
    labelVariableQuote: '가변 수수료 (0.5% / 0.25%)',
    labelTaxableBase: '과세 표준',
    labelCopySettlement: '계산 결과 복사',
    labelEntityJuridica: '법인 (S.L., S.A. 등)',
    labelEntityFisica: '개인 (면제)',
    labelCivilOrder: '민사 관할',
    labelAdministrativeOrder: '행정 관할',
    labelSocialOrder: '사회·노동 관할',
    labelModel696: 'AEAT 모델 696',
    labelOrdinary: '통상 소송',
    labelVerbal: '구두 소송 / 독촉 절차',
    labelExecutive: '강제 집행',
    labelAppeal: '항소',
    labelCassation: '상고',
    labelAbbreviated: '약식 절차',
    labelSupplication: '항고',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ko-KR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
