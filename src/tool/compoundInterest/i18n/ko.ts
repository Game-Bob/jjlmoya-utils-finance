import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'compound-interest-calculator';
const title = '복리 계산기: 미래의 자산을 시각화하세요';
const description =
  '작은 투자가 어떻게 거대한 자산으로 변하는지 확인해 보세요. 재무적 자유와 은퇴 계획을 위한 궁극의 도구입니다.';

const faqData = [
  {
    question: '복리란 무엇인가요?',
    answer:
      '원금뿐만 아니라 이전 기간까지 발생한 이자에 대해서도 계산되는 이자를 의미합니다. 이는 시간이 지남에 따라 투자가 지수 함수적으로 성장하게 만듭니다.',
  },
  {
    question: '단리와의 차이점은 무엇인가요?',
    answer:
      "단리는 오직 원금에 대해서만 이자가 계산됩니다. 복리는 이자가 재투자되어 '이자가 또 다른 이자를 낳는' 구조를 가집니다.",
  },
  {
    question: "'72의 법칙'이란 무엇인가요?",
    answer:
      '투자가 두 배로 늘어나는 데 걸리는 시간을 추정하는 간편한 공식입니다. 72를 연수익률로 나눕니다. 예를 들어 연 8% 수익률이라면 9년 뒤에 원금이 두 배가 됩니다.',
  },
  {
    question: '왜 어릴 때부터 투자를 시작하는 것이 중요한가요?',
    answer:
      '지수 함수적 효과로 인해 가장 결정적인 요인은 저축액이 아닌 시간입니다. 몇 년 먼저 시작하는 것만으로도 복리 효과를 통해 최종 자산이 훨씬 더 커질 수 있습니다.',
  },
];

const howToData = [
  {
    name: '초기 자본 입력하기',
    text: '투자 계획을 시작할 때의 원금을 입력합니다.',
  },
  {
    name: '정기 적립액 설정하기',
    text: '매월 또는 매년 추가로 저축하고 투자할 금액을 입력합니다.',
  },
  {
    name: '예상 연수익률 추정하기',
    text: '기대하는 연간 수익률을 입력합니다 (예: 역사적인 S&P 500의 경우 7%).',
  },
  {
    name: '투자 기간 조정하기',
    text: '자산의 지수 함수적 성장을 확인하기 위해 투자를 유지할 기간(년)을 선택합니다.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
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
      text: '복리의 마법: 자산을 지수 함수적으로 쌓아가는 법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '알베르트 아인슈타인은 복리를 "세계 8대 불가사의"라고 불렀습니다. <strong>복리</strong>는 장기적으로 자산을 증식시키는 가장 강력한 메커니즘입니다. 금융 전문가가 될 필요는 없습니다. 오직 시간과 인내심, 그리고 투자된 자금만 있으면 됩니다.',
    },
    {
      type: 'title',
      text: '단리 vs 복리: 눈덩이 비유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '언덕 꼭대기에서 눈덩이를 굴리고 있다고 상상해 보세요. <strong>단리</strong>는 눈덩이를 굴리면서 매 미터마다 수동으로 눈을 덧붙여 키우는 것과 같습니다. 반면 <strong>복리</strong>는 눈덩이가 스스로 구르게 두는 것과 같습니다. 스스로 눈을 뭉치며 커지고, 커질수록 매 회전마다 <em>더 많은</em> 눈을 뭉칠 수 있는 면적이 넓어집니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '단리',
          description: '이자는 항상 처음 초기 원금에 대해서만 계산됩니다.',
          points: [
            '공식: 원금 × 이율 × 기간',
            '선형적이고 예측 가능한 성장',
            '단기 대출 등에 흔히 사용',
            '수익의 재투자 없음',
          ],
        },
        {
          title: '복리',
          description: '이자가 원금에 합산되어 새로운 이자를 창출합니다.',
          highlight: true,
          points: [
            '공식: 원금 × (1 + 이율)^기간',
            '가속화되는 지수 함수적 성장',
            '모든 장기 투자의 기초',
            '수익이 또 다른 수익을 창출',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: '수학적으로 수익이 새로운 수익을 낳습니다. 초기 몇 년은 느려 보일 수 있지만, "임계점"을 지나는 순간 곡선은 가파르게 상승합니다. 진정한 부는 바로 여기서 탄생합니다.',
    },
    {
      type: 'title',
      text: '왜 시간이 최고의 아군인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가장 결정적인 요인은 투자하는 금액이 아니라 <strong>얼마나 오랫동안 성장하게 두느냐</strong>입니다. 10년 일찍 시작하는 것만으로도 전체 투자 금액이 적더라도 최종 자산이 2~3배 더 커질 수 있습니다. 이러한 지수 함수적 효과가 젊은 투자자들이 압도적인 우위를 점하는 이유입니다.',
    },
    {
      type: 'tip',
      title: '72의 법칙',
      html: '<p>72를 연수익률로 나누면 <strong>원금이 두 배가 되는 데</strong> 걸리는 시간을 알 수 있습니다.</p><p><em>예: 수익률 8%일 때, 9년마다 원금이 두 배가 됩니다 (72/8 = 9).</em></p><p>이 마법의 공식은 어떤 수익률에도 적용되며 투자의 성장을 빠르게 추정하는 데 도움을 줍니다.',
    },
    {
      type: 'tip',
      title: '2026년 조언',
      html: '<p>인플레이션은 여전히 중요한 요소입니다. 구매력을 잃지 않으려면 실질 수익률이 최소 연 2~3%를 넘도록 하세요. 인플레이션보다 빠르게 성장하는 자산에 투자하십시오.</p>',
    },
    {
      type: 'title',
      text: '복리 빈도: 정말 중요한가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이자는 연간, 반기별, 분기별, 월간 또는 매일 복리로 계산될 수 있습니다. <strong>복리 빈도가 높을수록</strong> 복리 효과는 커집니다. 동일한 원금과 수익률이라도 연 복리보다 월 복리로 계산될 때 자산은 더 크게 성장합니다.',
    },
  ],
  ui: {
    labelTitle: '투자 시뮬레이터',
    labelRealtime: '실시간',
    labelInitial: '초기 적립액',
    labelMonthly: '월 적립액',
    labelRate: '연수익률',
    labelYears: '투자 기간 (년)',
    labelMyMoney: '내 원금',
    labelProfit: '투자 수익 (이자)',
    labelTotal: '최종 자산 총액',
    labelYear: '연차',
    labelPrincipal: '내 원금 (원금)',
    labelInterest: '발생 이자',
    insightPrefix: '[TIP] ',
    insightSuffix: '년째 되는 해에, 연간 발생 이자가 적립액을 넘어섭니다. 돈이 당신보다 더 열심히 일하고 있어요!',
    currencySymbol: '₩',
    currencyCode: 'KRW',
    currencyLocale: 'ko-KR',
  },
};
