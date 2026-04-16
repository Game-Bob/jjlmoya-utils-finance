import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'supein-im-dae-ryo-in-sang-gye-san-gi-ipc';
const title = '스페인 월세 인상 계산기 IPC 3% 한도';
const description = '스페인 주택법에 따라 소비자물가지수(IPC) 또는 3%의 법적 상한선을 기준으로 임대료 업데이트 금액을 계산해 보세요.';

const faqData = [
  {
    question: '2024년과 2025년 허용되는 최대 임대료 인상폭은 얼마인가요?',
    answer: '주택 권리법(Ley 12/2023)에 따라 2024년과 2025년 동안 거주용 주택의 연간 임대료 인상폭은 법적으로 최대 3%로 제한됩니다.',
  },
  {
    question: '매년 반드시 IPC에 맞춰 임대료를 올려야 하나요?',
    answer: '법적 의무 사항은 아닙니다. 임대료가 인상되려면 임대차 계약서에 연차별 업데이트에 관한 명시적인 조항이 포함되어 있어야 합니다.',
  },
  {
    question: '집주인은 인상 통보를 언제까지 해야 하나요?',
    answer: '임대인은 새로운 임대료를 적용하기 최소 한 달 전(30일 전)에 임차인에게 서면으로 인상 사실을 통지해야 합니다.',
  },
  {
    question: '실제 IPC가 법적 상한선인 3%보다 높으면 어떻게 되나요?',
    answer: '실제 IPC가 더 높더라도 거주용 주택 소유자는 2024년과 2025년 기간 동안 법적으로 3% 이상의 인상을 요구할 수 없습니다.',
  },
];

const howToData = [
  {
    name: '현재 임대료 입력',
    text: '현재 지불하고 있는 월세 금액을 입력합니다.',
  },
  {
    name: '계산 모드 선택',
    text: '3% 법적 상한선(권장)을 선택하거나 직접 퍼센트를 입력합니다.',
  },
  {
    name: '결과 확인',
    text: '새로운 예상 임대료, 월별 인상액 및 연간 추가 비용을 한눈에 확인할 수 있습니다.',
  },
  {
    name: '요약 복사',
    text: '집주인에게 보내거나 메모로 보관할 수 있는 빠른 보고서를 생성합니다.',
  },
];

const bibliographyData = [
  {
    name: '스페인 주택 권리를 위한 법률 12/2023',
    url: 'https://www.boe.es/',
  },
  {
    name: '스페인 국립 통계청 (INE) IPC 계산기',
    url: 'https://www.ine.es/',
  },
  {
    name: '도시 임대차법 (LAU)',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026년 스페인 월세 인상 계산기 3% 한도 가이드',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '스페인에서는 전통적으로 <strong>소비자물가지수(IPC)</strong>를 기준으로 임대료를 조정해 왔습니다. 하지만 새로운 주택법 도입으로 중요한 제한 사항이 생겼습니다.',
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
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '출처 및 참고 자료',
  ui: {
    labelTitle: '임대료 인상 계산기',
    labelDescription: 'IPC에 맞춰 임대료를 조정하거나 3% 법적 상한선을 안전하게 적용해 보세요.',
    labelCurrentRent: '현재 임대료',
    labelCurrentRentPlaceholder: '예: 800',
    labelIncrementType: '업데이트 모드',
    labelLegalLimit: '주택법 상한선 (3%)',
    labelManualIncrement: '수동 인상 (%)',
    labelManualPercentagePlaceholder: '예: 2.5',
    labelNewRentEstimate: '새로운 예상 임대료',
    labelMonthlyIncrease: '월별 인상액',
    labelYearlyExtra: '연간 추가 비용',
    labelLegalBadge: '법률 12/2023에 따라 3%로 제한됨',
    labelCopyButton: '임대인용 복사',
    labelCopySuccess: '복사됨!',
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
