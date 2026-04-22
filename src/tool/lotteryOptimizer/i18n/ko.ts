import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'spain-lottery-optimizer';
const title = '복권 최적화 및 확률 계산기';
const description = '스페인 크리스마스 복권, 유로밀리언즈, 보놀로토의 당첨 확률을 분석합니다. 최적의 구매 수량과 베팅의 기대 가치를 계산해 보세요.';

const faqData = [
  {
    question: '복권에서 말하는 수학적 기대치란 무엇인가요?',
    answer: '베팅한 1유로당 평균적으로 돌려받을 것으로 예상되는 금액입니다. 거의 모든 복권에서 수학적 기대치는 음수(보통 1유로당 0.50유로 손실)이며, 이는 장기적으로 운영 주체가 항상 승리함을 의미합니다.',
  },
  {
    question: '여러 번호를 사는 것과 같은 번호의 복권을 여러 장 사는 것 중 무엇이 더 좋나요?',
    answer: '「무엇이든」 당첨되기를 원한다면 번호를 다양화하는 것이 소액 당첨 확률을 높입니다. 1등 당첨(잭팟)을 목표로 한다면 한 번호만 사는 것과 확률은 같지만, 당첨 시 수령액은 더 커집니다.',
  },
  {
    question: '스페인 크리스마스 복권(El Gordo)은 정말 할 만한가요?',
    answer: '순수하게 수학적인 관점에서는 아닙니다. 총 수입의 70%만 당첨금으로 환원됩니다. 하지만 1등 당첨 확률(10만분의 1)은 유로밀리언즈(1억 4천만분의 1)보다 훨씬 높습니다.',
  },
  {
    question: '통계를 통해 당첨 확률을 높일 수 있나요?',
    answer: '아니요. 복권 추첨은 각각 독립적인 무작위 프로세스입니다. 어제 특정 번호가 나왔다고 해서 오늘 그 번호가 나올 확률에 조금이라도 영향을 주지 않습니다.',
  },
  {
    question: '비교표의 「난이도」는 무엇을 의미하나요?',
    answer: '1등 당첨이 얼마나 어려운지를 보여주는 상대적 척도입니다. 접근 가능(20만분의 1 미만), 어려움(2000만분의 1 미만), 매우 어려움(2000만분의 1 이상).',
  },
];

const howToData = [
  {
    name: '추첨 유형 선택',
    text: '크리스마스 복권, 프리미티바, 유로밀리언즈 또는 보놀로토 중 분석할 복권을 선택합니다.',
  },
  {
    name: '투자금 정의',
    text: '구매하려는 복권 수량이나 베팅 횟수를 입력합니다.',
  },
  {
    name: '핵심 확률 분석',
    text: '1등 당첨 확률을 소액 당첨 또는 원금 회수 확률과 비교하여 확인합니다.',
  },
  {
    name: '위험/수익 평가',
    text: '수학적 기대치를 검토하여 투자한 1유로당 통계적으로 얼마를 「기부」하고 있는지 이해합니다.',
  },
];

const seoData = [
  {
    type: 'title',
    text: '희망의 수학',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '많은 사람에게 복권을 사는 것은 몇 유로로 「희망」을 사는 행위입니다. 하지만 추첨기와 크리스털 공 뒤에는 수학의 가장 매혹적인 분야 중 하나인 「극단적 확률의 통계학」이 자리 잡고 있습니다.',
  },
];

const gameTranslations = {
  gordo: {
    name: '크리스마스 복권 (El Gordo)',
    description: '세계 최대 규모의 상금 분배. 무언가 당첨될 확률이 높음.',
  },
  nino: {
    name: '어린이 복권 (El Niño)',
    description: '크리스마스 복권 대비 원금 회수 확률이 3배 높음.',
  },
  euromillones: {
    name: '유로밀리언즈',
    description: '천문학적인 상금이지만 당첨 확률은 거의 불가능에 가까움.',
  },
  primitiva: {
    name: '라 프리미티바',
    description: '스페인에서 가장 오래된 복권. 어렵지만 가격이 저렴함.',
  },
  bonoloto: {
    name: '보놀로토',
    description: '가장 경제적인 복권. 소액 예산으로 매일 즐기기에 적합함.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문': '출처 및 참고 자료',
  ui: {
    gameTranslations,
    labelTitle: '복권 최적화 도구',
    labelDescription: '추첨 유형을 비교하고 수학적 기대치를 계산하여 논리적으로 복권을 즐기세요.',
    labelSelectGame: '복권 선택',
    labelConfigurePlay: '게임 설정',
    labelAdjustQuantity: '구매 수량을 조정하여 실제 당첨 확률을 확인하세요.',
    labelTotalInvestment: '총 투자금',
    labelTickets: '복권 수량 / 베팅 횟수',
    labelUnits: '개',
    labelExposureAnalysis: '리스크 분석',
    labelSelectLottery: '리스크 분석을 보려면 복권을 선택하세요.',
    labelOptimalCutoff: '추천 컷오프 지점',
    labelProbabilitySuccess: '성공 확률',
    labelExpectedValue: '기대 가치 (EV)',
    labelReturnTheoretical: '베팅 1회당 이론적 환급액.',
    labelSocialReturnIndex: '사회적 환원 지수',
    labelLow: '낮음',
    labelMedium: '보통',
    labelHigh: '높음',
    labelComparison: '당첨금 비교',
    labelLottery: '복권',
    labelCost: '비용',
    labelTypicalPrize: '일반적 당첨금',
    labelDifficulty: '난이도',
    labelAccessible: '접근 가능',
    labelDifficult: '어려움',
    labelExtreme: '매우 어려움',
    labelNote: '참고: 크리스마스 복권 및 엘 니뇨 상금은 1장(20유로) 기준입니다. 유로밀리언즈 등은 일반적인 잭팟 금액입니다.',
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
