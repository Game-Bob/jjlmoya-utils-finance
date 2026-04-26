import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'percentage-calculator';
const title = '4 in 1 퍼센트 계산기: 할인, 인상 및 인하';
const description =
  '무료 온라인 퍼센트 계산기로 쉽게 계산해 보세요. Y의 X% 구하기, 퍼센트 차이, 부가세 가산/감산, 바겐세일 및 팁 자동 계산 등 4가지 기능을 하나로 제공합니다.';

const faqData = [
  {
    question: '계산기는 어떻게 사용하나요?',
    answer:
      '문제에 해당하는 유스케이스 상자의 입력란에 값을 입력하기만 하면 됩니다. 계산 버튼을 누를 필요 없이 입력과 동시에 수식이 처리됩니다.',
  },
  {
    question: '부가세나 세금 계산에 적합한가요?',
    answer:
      '네, 4번 블록(\'값에 퍼센트 더하기 또는 빼기\')은 공급가액에 10% 부가세를 적용하거나 원천징수세를 계산하는 경우에 맞게 설계되었습니다.',
  },
  {
    question: '소수점이나 음수도 처리할 수 있나요?',
    answer:
      '당연합니다. 소수점(\'.\' 사용)을 입력할 수 있으며, 손실이 발생한 회계 장부를 분석해야 하는 경우 음수 값으로도 작동합니다.',
  },
  {
    question: '결과를 복사할 수 있나요?',
    answer:
      '네, 각 블록의 결과란에 있는 버튼을 누르면 숫자가 즉시 기기의 클립보드에 복사되어 다른 앱이나 문서에 붙여넣을 수 있습니다.',
  },
];

const howToData = [
  {
    name: '수학적 문제 식별하기',
    text: '4개 블록의 제목을 읽고 알고 싶은 내용과 일치하는 블록을 선택합니다 (예: 50의 20%는 얼마인가요? -> 1번 블록).',
  },
  {
    name: '숫자 입력하기',
    text: "'X'와 'Y' 칸을 채웁니다. 순서는 상관없으며 각 블록의 설명 문구가 시각적으로 가이드를 제공합니다.",
  },
  {
    name: '즉시 표시되는 결과 복사하기',
    text: '입력하는 동안 실시간으로 결과가 아래에 표시됩니다. 다른 곳에 사용하려면 복사 아이콘을 누르세요.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
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
      text: '4 in 1 퍼센트 계산기: 빠른 계산 마스터하기',
      level: 2,
    },
    {
      type: 'title',
      text: '다기능 퍼센트 계산기는 왜 필요한가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '퍼센트 계산은 일상생활에서 가장 흔하게 수행하는 수학 연산 중 하나입니다. 세일 기간의 할인액 계산, 식당에서의 적절한 팁 파악부터 비즈니스에서의 수익률 결정이나 대출 이자 확인까지 다양합니다. 일상적인 작업임에도 불구하고 암산으로 처리하거나 정확한 공식을 기억해내기란 쉽지 않습니다.',
    },
    {
      type: 'paragraph',
      html: '당사의 4 in 1 퍼센트 계산기는 가장 수요가 많은 시나리오를 그룹화했습니다. 이제 구글에서 "20퍼센트 구하는 법"이나 "퍼센트 계산 공식"을 검색할 필요가 없습니다. 네 가지 필수 연산이 한곳에 모여 있으며, 인터랙티브하고 즉각적인 결과를 제공합니다.',
    },
    {
      type: 'title',
      text: '가장 흔한 4가지 유스케이스 살펴보기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '사용자의 편의를 위해 일상에서 매일 마주하는 실제 문제들을 해결하도록 툴을 네 가지 시각적 블록으로 나누었습니다.',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Y의 X%는 얼마인가요?',
      html: '<p><strong>가장 고전적인 사례입니다.</strong> 할인액이나 팁을 계산할 때 유용합니다. 12만원의 15%가 얼마인지 알고 싶다면 이 툴을 사용하세요. 내부 수식은 단순히 퍼센트를 100으로 나누고 전체 값에 곱합니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. X는 Y의 몇 퍼센트인가요?',
      html: '<p><strong>비율을 알기에 이상적입니다.</strong> 60점 만점 시험에서 45점을 받았다면, 100점 만점으로 환산하면 몇 점일까요? 이 기능은 부분을 전체로 나누고 100을 곱하여 정확한 상대적 비중을 알려줍니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. 퍼센트 증가 또는 감소',
      html: '<p><strong>금융 및 분석에 완벽합니다.</strong> 작년보다 월세가 얼마나 올랐나요? 이전에 80만원을 냈는데 지금 84만원을 낸다면, 이 기능은 5% 인상되었음을 알려줍니다. 두 수치 사이의 증가 또는 감소를 측정합니다.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. 값에 퍼센트 더하기 또는 빼기',
      html: '<p><strong>부가세 계산에 매우 유용합니다.</strong> 공급가액(예: 10만원)에 10% 부가세를 더해야 하는 경우, 이 계산기는 중간 단계 없이 즉시 최종 금액인 11만원을 보여줍니다. 마찬가지로 직접적인 할인(예: 20% 빼기)을 적용할 때도 사용됩니다.</p>',
    },
    {
      type: 'title',
      text: '퍼센트 계산에 대한 일반적인 오해',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '큰 퍼센트나 소수점을 보면 당황하기 쉽지만, 생활을 편하게 해주는 수학적 "함정"들이 있습니다. 가장 유명한 것은 <strong>퍼센트의 가역성</strong>입니다.',
    },
    {
      type: 'tip',
      title: '가역성의 함정',
      html: '<p>「Y의 X%」는 「X의 Y%」와 정확히 같다는 사실을 알고 계셨나요? 예를 들어, 50의 18%를 암산으로 계산하라고 하면 복잡하게 들릴 수 있습니다. 하지만 반대로 뒤집으면 "18의 50%"가 되어 "9"라는 것을 아주 쉽게 알 수 있습니다! 이는 어떤 숫자에도 적용되는 놀라운 생활 지혜입니다.</p>',
    },
    {
      type: 'title',
      text: '증가율 계산에서 자칫 실수하기 쉬운 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가장 흔한 실수 중 하나는 케이스 3, 즉 퍼센트의 증가 또는 감소에서 발생합니다. 주식 가격이 10만원이었는데 50% 하락했다가 다음 날 50% 올랐다고 가정해봅시다. 직관적으로는 다시 10만원이 될 것 같지만 이는 틀린 생각입니다.',
    },
    {
      type: 'paragraph',
      html: '10만원에서 50% 떨어지면 새로운 가격은 5만원이 됩니다. 그 5만원에서 50%가 오르면, 상승분은 5만원의 절반(2.5만원)입니다. 따라서 최종 가격은 7.5만원이 됩니다. 퍼센트의 상승과 하락은 비대칭적이며, 이와 같은 동적인 계산기가 중대한 금융 오류를 방지하는 고전적인 예시입니다.',
    },
    {
      type: 'title',
      text: '비즈니스 및 학술적 활용',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '당사의 인터페이스는 군더더기 없이 <strong>빠른 작업</strong>이 가능하도록 설계되었습니다. 브라우저 탭에 고정해두고 각 필드 사이를 신속하게 이동하며, 결과 옆에 있는 복사 버튼 덕분에 오타 위험 없이 정확한 데이터를 엑셀이나 구글 스프레드시트로 옮길 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '이커머스 및 오프라인 매장: 마진율 적용 및 부가세를 포함한 판매가 산정 시 빠른 계산.',
        '인사 관리: 임금 격차 확인, 원천세 계산 및 소비자물가지수에 따른 연봉 인상분 산출.',
        '대학 교육: 성적 분포를 조정하는 교수님이나 과학 분야 실험의 편차를 분석하는 학생.',
        '디지털 마케팅: 이커머스에서의 CTR(클릭률), ROAS(광고비 대비 매출액) 또는 전환율 측정.',
      ],
    },
  ],
  ui: {
    labelTitle: '퍼센트 계산기',
    labelCase1Title: '케이스 1',
    labelCase1Question: 'Y의 X%는 얼마인가요?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: '공식: (X / 100) × Y',
    labelCase2Title: '케이스 2',
    labelCase2Question: 'X는 Y의 몇 퍼센트인가요?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: '공식: (X / Y) × 100',
    labelCase3Title: '케이스 3',
    labelCase3Question: '두 값의 퍼센트 차이',
    labelCase3Placeholder1: '값 1',
    labelCase3Placeholder2: '값 2',
    labelCase3Formula: '공식: ((값 2 - 값 1) / |값 1|) × 100',
    labelCase4Title: '케이스 4',
    labelCase4Question: '값에 퍼센트 더하기 또는 빼기',
    labelCase4Placeholder1: '값',
    labelCase4Placeholder2: '%',
    labelCase4Formula: '공식: 값 ± (값 × (% / 100))',
    labelCase4AddLabel: '더하기 (값 + %)',
    labelCase4SubtractLabel: '빼기 (값 - %)',
    labelResult: '결과',
    labelDifference: '차이',
    labelCopyTooltip: '결과 복사하기',
    labelFormula: '공식',
    percentSymbol: '%',
  },
};
