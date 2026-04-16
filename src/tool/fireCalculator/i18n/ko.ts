import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'four-percent-rule-fire-calculator';
const title = 'FIRE 계산기: 경제적 자유를 위한 4% 법칙';
const description = '4% 법칙을 사용하여 경제적 자립을 위한 매직 넘버를 계산해 보세요. 조기 은퇴를 계획하고 경제적 자유를 향한 여정을 시각화합니다.';

const faqData = [
  {
    question: '4% 법칙이란 무엇인가요?',
    answer: '4% 법칙은 트리니티 연구에 기반한 인출 전략으로, 은퇴 첫해에 자산의 4%를 인출하고 이후 해마다 인플레이션을 반영해 조정하면 30년 동안 자산이 고갈되지 않는다는 이론입니다.',
  },
  {
    question: 'FIRE란 무엇인가요?',
    answer: 'FIRE는 Financial Independence, Retire Early(경제적 자립, 조기 은퇴)의 약자입니다. 공격적인 저축과 스마트한 투자를 결합하여 경제적 자유를 조기에 달성하려는 운동입니다.',
  },
  {
    question: '나의 매직 넘버는 얼마인가요?',
    answer: '매직 넘버는 일하지 않고 투자 수익만으로 생활하기 위해 모아야 할 총 자산액입니다. 연간 지출을 안전 인출률(보통 4%)로 나누어 계산합니다.',
  },
  {
    question: 'Lean, Barista, Fat FIRE의 차이점은 무엇인가요?',
    answer: 'Lean FIRE는 최소한의 지출로 생활하는 것(현재 지출의 70%), Barista FIRE는 투자 수익으로 절반을 충당하며 파트타임으로 일하는 것(지출의 50%), Fat FIRE는 여유로운 생활을 즐기는 것(지출의 150%)을 의미합니다.',
  },
  {
    question: '4% 법칙은 현실적인가요?',
    answer: '역사적으로 주식 50%, 채권 50% 포트폴리오에서 30년간 성공 확률이 95%에 달합니다. 다만, 수익률 순서 리스크는 고려되지 않았으며 주로 미국 시장 데이터에 기반하고 있습니다.',
  },
];

const howToData = [
  {
    name: '월간 지출 계산하기',
    text: '주거비, 식비, 공과금, 오락비 등 매달 실제로 사용하는 금액을 정확히 분석합니다.',
  },
  {
    name: '안전 인출률 선택하기',
    text: '4% 법칙이 표준이지만, 위험 감수 성향에 따라 2.5%(보수적)에서 6%(공격적) 사이로 조정할 수 있습니다.',
  },
  {
    name: '현재 자산 입력하기',
    text: '투자금, 예적금, 수동적 소득을 창출하는 자산의 총합을 입력합니다.',
  },
  {
    name: '진척도 시각화하기',
    text: '자산 성장 차트와 자유를 향한 이정표(Lean, Barista, Fat FIRE)를 통해 언제 목표에 도달할지 파악합니다.',
  },
];

const bibliographyData = [
  {
    name: 'The Trinity Study: Portfolio Survivability',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Early Retirement Forum - 4% Rule Discussion',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Shiller CAPE Index - Market Valuations',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Bogleheads - 투자 가이드',
    url: 'https://bogleheads.es/',
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'FIRE에 대해 자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 참고 자료',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4% 법칙: 조기 은퇴의 성배',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '투자 수익만으로 영원히 살기 위해 필요한 자산을 계산하는 방법을 알아보세요. <strong>4% 법칙</strong>은 1998년 세 명의 재무학 교수가 수행한 "트리니티 연구"에서 시작되었습니다. 1926년 이후의 역사적 데이터를 분석하여 30년 동안 자산을 유지하면서 매년 인출 가능한 비율을 산출했습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: '역사적 성공률' },
        { value: '50/50', label: '주식/채권 비중' },
        { value: '30년', label: '운용 기간' },
        { value: '4%', label: '안전 인출률' },
      ],
    },
    {
      type: 'title',
      text: 'FIRE 운동이란 무엇인가요?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE는 Financial Independence, Retire Early(경제적 자립, 조기 은퇴)의 머리글자입니다.',
        '돈에 얽매이지 않고 자신의 시간을 어떻게 쓸지 선택할 수 있는 자유를 추구합니다.',
        '저축의 최적화와 현명한 투자에 기반합니다.',
        '지출을 충당하기에 충분한 현금 흐름을 자산에서 창출하는 것이 목표입니다.',
      ],
    },
    {
      type: 'title',
      text: '경제적 자유의 유형',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: '미니멀한 생활 스타일. 생존에 필요한 기본 지출만 충당합니다.',
          points: ['극한의 절약', '매우 낮은 지출', '검소한 자유'],
        },
        {
          title: 'Barista FIRE',
          description: '투자 수익으로 지출의 절반을 충당하고 나머지는 파트타임으로 버는 하이브리드형.',
          points: ['즐거움을 위한 일', '사회보장 유지', '낮은 스트레스'],
        },
        {
          title: 'Fat FIRE',
          description: '여유로운 예산으로 여행과 사치도 가능한 은퇴 생활.',
          points: ['고액 자산', '제한 없음', '가족 유산'],
        },
      ],
    },
    {
      type: 'title',
      text: 'FIRE 계산기 사용법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>지출 추적:</strong> 지난 12개월간의 실제 지출을 분석합니다.',
        '<strong>SWR 설정:</strong> 리스크 성향에 따라 안전 인출률을 선택합니다.',
        '<strong>현재 자산:</strong> 현재 투자 자산의 가치를 입력합니다.',
        '<strong>저축 능력:</strong> 목표 달성까지 남은 시간을 예측합니다.',
        '<strong>시각화:</strong> 자산 성장 차트를 분석합니다.',
      ],
    },
    {
      type: 'title',
      text: '4% 법칙 분석',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '장점',
          description: '4% 법칙이 작동하는 이유',
          points: [
            '빠른 계획 수립을 위한 수학적 간결함.',
            '거의 한 세기에 걸친 역사적 데이터에 기반함.',
            '모든 지출 수준에 적용 가능.',
          ],
        },
        {
          title: '한계',
          description: '4% 법칙이 고려하지 않는 것',
          points: [
            '수익률 순서 리스크(은퇴 직후 하락)를 고려하지 않음.',
            '주로 미국 시장 데이터에 기반함.',
            '지역 세제의 급격한 변화는 무시됨.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '핵심 요소: 인플레이션',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '현재의 100만원이 미래에도 같은 가치가 아님을 기억하세요. 예측을 현실적으로 유지하려면 인플레이션을 제외한 실질 수익률을 사용하는 것이 필수적입니다. 4% 법칙은 매년 은퇴 자금 인출액을 인플레이션에 맞춰 조정하는 것을 전제로 합니다.',
    },
  ],
  ui: {
    labelTitle: 'FIRE 계산기: 4% 법칙',
    labelDescription: '4% 법칙을 사용하여 경제적 자립을 위한 매직 넘버를 계산하고 자유를 향한 이정표를 시각화하세요.',
    labelMonthlyExpenses: '월간 지출',
    labelSWR: '인출률 (SWR)',
    labelCurrentWorth: '현재 순자산',
    labelMonthlySavings: '월 저축액',
    labelAnnualReturn: '예상 수익률 (세후)',
    labelFreedomMilestones: '자유를 향한 이정표',
    labelLeanFIRE: 'Lean FIRE (생존비 70%)',
    labelBaristaFIRE: 'Barista FIRE (소득 50%)',
    labelFatFIRE: 'Fat FIRE (여유 생활 150%)',
    labelMagicNumber: '자유를 얻기 위한 매직 넘버',
    labelMagicNumberDesc: '투자 수익으로 생활하기 위해 필요한 자본',
    labelTimeRemaining: '경제적 자유까지 남은 시간',
    labelTimeRemainingFormat: '앞으로 {years}년 {months}개월 남았습니다',
    labelAlreadyFI: '축하합니다! 이미 경제적 자유를 달성하셨습니다.',
    labelUnachievable: '현재 저축 속도로는 목표 달성이 어렵습니다',
    labelHiddenCostsChecklist: '숨은 지출 체크리스트',
    labelHealth: '의료 보험 (+200,000원)',
    labelTaxes: '세금 (+150,000원)',
    labelHome: '주택 유지비 (+100,000원)',
    labelTravel: '여행 및 레저 (+300,000원)',
    labelEmergency: '비상금 (+100,000원)',
    labelSubscriptions: '구독 서비스 (+50,000원)',
    labelAdded: '추가됨:',
    labelSavePlan: '플랜 저장',
    labelSWRTooltip: 'Safe Withdrawal Rate: 자산 고갈 위험 없이 매년 인출할 수 있는 자산 비율.',
    labelReturnTooltip: '연간 시장 수익률 (인플레이션 반영 후). 역사적 표준은 7%입니다.',
    currencySymbol: '₩',
    currencyCode: 'KRW',
    currencyLocale: 'ko-KR',
  },
};
