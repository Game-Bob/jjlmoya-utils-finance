import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'debt-snowball-calculator';
const title = '채무 스노볼 계산기: 단계별 부채 상환 계획 2026';
const description = '데이브 램지의 스노볼 공식을 통해 경제적 자유를 얻는 날짜를 계산해 보세요. 부채를 정리하고 월별 상세 상환 계획을 확인할 수 있습니다.';

const faqData = [
  {
    question: '스노볼 메서드(눈덩이 상환법)란 무엇인가요?',
    answer: '이자율에 상관없이 부채 규모가 가장 작은 것부터 순서대로 갚아나가는 전량입니다. 작은 부채를 빨리 없애버림으로써 심리적인 보상과 동기부여를 얻는 데 주안점을 둡니다.',
  },
  {
    question: '왜 이자율이 높은 것(아발란체 방식)부터 갚지 않나요?',
    answer: '수학적으로는 이자율이 가장 높은 것부터 갚는 것이 비용을 가장 많이 아끼는 방법입니다. 하지만 많은 사람이 성과가 눈에 보이지 않아 중도 포기하게 됩니다. 스노볼 방식은 행동 변화와 동기부여를 우선시합니다.',
  },
  {
    question: '계획을 시작하기 전에 저축이 필요할까요?',
    answer: '부채 상환을 시작하기 전에 약 1,000유로 정도의 "기초 비상금"을 마련해 두는 것을 권장합니다. 이는 예상치 못한 지출이 생겼을 때 다시 빚을 지게 되는 것을 방지해 줍니다.',
  },
  {
    question: '계산기에 어떤 부채들을 포함해야 하나요?',
    answer: '모든 소비성 부채를 포함하세요: 신용카드 대금, 마이너스 통장, 개인 대출, 자동차 할부, 연체된 고지서 등입니다. 주택담보대출은 규모가 크기 때문에 보통 나중 단계로 미둡니다.',
  },
];

const howToData = [
  {
    name: '부채 목록 작성',
    text: '모든 부채의 현재 잔액과 매월 지불하고 있는 최소 상환액을 기록합니다.',
  },
  {
    name: '추가 예산 설정',
    text: '최소 상환액 외에 매월 추가로 상환에 투입할 수 있는 금액을 결정합니다.',
  },
  {
    name: '정렬 및 우선순위 지정',
    text: '계산기가 잔액이 적은 순서대로 자동 정렬합니다. 가장 작은 부채를 제외한 나머지는 최소 상환액만 납부합니다.',
  },
  {
    name: '폭포수 상환 실행',
    text: '가장 작은 부채를 완납하면, 그 부채에 썼던 모든 금액(최소 상환액 + 추가 예산)을 다음 순서의 부채 상환에 합칩니다.',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '채무 스노볼 계산기: 2026년 완벽 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '빚이 있는 삶은 무거운 배낭을 메고 마라톤을 뛰는 것과 같습니다. <strong>스노볼 공법</strong>은 경제적 자유를 되찾기 위한 가장 효과적인 전략 중 하나입니다.',
    },
  ],
  ui: {
    labelTitle: '완전한 자유',
    labelDescription: '심리적으로 가장 효과적인 방법으로 경제적 자유를 향한 길을 시작해 보세요.',
    labelExtraBudget: '매월 추가 상환 예산',
    labelExtraBudgetHelp: '최소 상환액 외에 추가로 투입할 수 있는 금액입니다.',
    labelSnowballMethod: '스노볼',
    labelAvalancheMethod: '아발란체',
    labelAddNewDebt: '새 부채 추가',
    labelDebtName: '부채 이름',
    labelDebtNamePlaceholder: '예: 신용카드',
    labelDebtBalance: '현재 부채 잔액',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: '최소 상환액',
    labelInterestRate: '이자율',
    labelInterestHelp: '연이율',
    labelAddButton: '플랜에 추가',
    labelClearData: '설정 초기화',
    labelClearDataConfirm: '플랜을 비울까요?',
    labelDeleteDebt: '삭제',
    labelDebtInventory: '부채 목록',
    labelFreedomDate: '경제적 자유 달성일',
    labelActiveMethod: '방법',
    labelMonthsRemaining: '남은 개월 수',
    labelTotalInterest: '총 이자 비용',
    labelTotalPaid: '최종 총 상환액',
    labelInterestSaved: '절감된 이자액',
    labelYourStrategy: '단계별 전략 확인',
    labelStrategyHelp: '각 단계는 해당 부채 상환 차례의 총 납입액을 보여줍니다.',
    labelPriority: '최우선 순위',
    labelStep: '단계',
    labelAfterPaying: '이전 부채 완납 후',
    labelMonthlyPayment: '월 상환액',
    labelDetailedAmortization: '상세 상환 스케줄',
    labelExportCSV: '.CSV로 내보내기',
    labelDate: '날짜',
    labelStartingBalance: '기초 잔액',
    labelInterest: '이자',
    labelAmortization: '상환 원금',
    labelTotalMonth: '월 합계',
    labelRemaining: '기말 잔액',
    labelFree: '완납',
    labelDebtInfinite: '무한 부채',
    labelInvalidInput: '전체 잔액과 최소 상환액을 입력해 주세요',
    labelEmptyStateTitle: '플랜 시작하기',
    labelEmptyStateDescription: '부채는 영원하지 않습니다. 부채를 추가하여 경제적 자유로 가는 길을 그려보세요.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ko-KR',
  },
};
