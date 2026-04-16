import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'supein-beob-jeong-i-ja-yul-2026';
const title = '법정 이자';
const description = '2026년 스페인에서 적용되는 법정 이자를 계산해 보세요. 예산법에 따른 이율 3.25% 시뮬레이터입니다.';

const faqData = [
  {
    question: '2026년 법정 이자율은 얼마인가요?',
    answer: '2026년 법정 이자율은 국가 일반 예산법에 의해 3.25%로 고정되었습니다.',
  },
  {
    question: '지연 이자는 어떻게 계산되나요?',
    answer: '지연 이자는 미납 원금에 3.25%를 곱하고 지연 일수를 곱한 뒤 36,500으로 나누어 계산합니다. 365일 기준을 사용합니다.',
  },
  {
    question: '법정 이자와 지연 이자의 차이점은 무엇인가요?',
    answer: '법정 이자는 기본 기준 금리입니다. 세무 지연 이자(Hacienda)는 4.0625%입니다. 상거래 이자(약 10.15%)가 가장 높습니다.',
  },
  {
    question: '계약 조항이 없어도 자동으로 적용되나요?',
    answer: '네, 지불 지연이 발생하고 별도의 이자 합의가 없는 경우 법정 이자가 기본적으로 자동 적용됩니다.',
  },
  {
    question: '소송 이자(Interés Procesal)란 무엇인가요?',
    answer: '소송 이자는 법정 이자에 2%를 더한 5.25%이며, 금전 지급을 명하는 판결이 내려진 시점부터 적용됩니다.',
  },
];

const howToData = [
  {
    name: '미납 원금 입력',
    text: '이자를 계산해야 하는 금액(예: 미납된 청구서)을 입력합니다.',
  },
  {
    name: '지연 일수 지정',
    text: '지불 지연이 며칠 동안 지속되었는지 또는 지속될 예정인지 입력합니다. 365일 기준입니다.',
  },
  {
    name: '결과 확인',
    text: '2026년에 유효한 3.25%를 적용한 발생 이자액과 총 납부액이 자동으로 표시됩니다.',
  },
  {
    name: '기타 이율 확인',
    text: '세무 지연 이자(4.06%) 등과 같은 다른 기준 이율도 참고해 보세요.',
  },
];

const bibliographyData = [
  {
    name: '2026년 스페인 국가 일반 예산법',
    url: 'https://www.boe.es/',
  },
  {
    name: '스페인 민법 - 제1108조 이하',
    url: 'https://www.boe.es/',
  },
  {
    name: '지불 지연 방지법 (Ley 3/2004)',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '법정 이자 2026 스페인 - 계산기',
  },
  {
    type: 'paragraph',
    html: '스페인의 <strong>2026년 법정 이자</strong>는 <strong>3.25%</strong>입니다. 별도의 합의가 없는 한 지불 지연 시 자동으로 적용됩니다.',
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
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '법적 출처',
  ui: {
    labelTitle: '법정 이자율',
    labelDescription: '2026년 예산법에 따른 법정 이자액을 계산합니다. 스페인용 3.25% 시뮬레이터입니다.',
    labelBadge: '국가 관보 (BOE) 2026',
    labelSubtitle: '2026년 법정 이자율은 3.25%로 유지됩니다.',
    labelLegalInterest: '법정 이자',
    labelDelayInterest: '지연 이자',
    labelCommercialOperations: '상거래',
    labelActive: '2026년 유효',
    labelTributary: '세무 (Hacienda)',
    labelFirstHalf: '2026년 상반기',
    labelQuickCalculator: '간편 이자 계산기 (3.25%)',
    labelCapital: '미납 원금',
    labelDays: '지연 일수',
    labelInterestGenerated: '발생 이자',
    labelTotalToPay: '총 납부액',
    labelFormula: '이 계산기는 표준 단리 공식을 적용합니다.',
    labelBase: '스페인 현행 규정에 따라 공식 계산에는 365일 기준을 사용합니다.',
    labelOfficialRegulation: '공식 규정',
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
