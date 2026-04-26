import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflation-calculator-spain';
const title = '스페인 인플레이션 계산기: 화폐 가치 히스토리';
const description =
  '1980년 이후의 페세타가 오늘날 얼마의 가치가 있는지, 또는 생활비가 얼마나 올랐는지 확인해 보세요. 2026년까지 업데이트된 스페인 소비자 물가 지수(CPI) 데이터를 기반으로 합니다.';

const faqData = [
  {
    question: 'CPI란 무엇이며 어떻게 계산되나요?',
    answer:
      '소비자 물가 지수(CPI)는 스페인 가계가 소비하는 대표적인 상품 및 서비스 바구니의 가격 변동을 측정하는 지표입니다. 서로 다른 시점의 이 바구니 비용을 비교하여 계산합니다.',
  },
  {
    question: '1980년 이후 화폐 가치는 얼마나 떨어졌나요?',
    answer:
      '1980년의 1,000페세타는 구매력 면에서 오늘날 약 60유로에 해당합니다. 누적된 인플레이션으로 인해 지난 40여 년 동안 화폐 가치의 90% 이상이 손실되었습니다.',
  },
  {
    question: '돈을 쓰지 않고 가만히 두면 왜 가치가 떨어지나요?',
    answer:
      '인플레이션이 연 3%인데 계좌 이자가 0%라면, 매년 구매력이 3%씩 상실됩니다. 실질 가치를 유지하려면 저축액이 최소한 인플레이션율 이상의 수익을 내야 합니다.',
  },
  {
    question: '스페인에서 인플레이션이 가장 심했던 시기는 언제인가요?',
    answer:
      '1980년대가 가장 심했으며, 두 자릿수 물가 상승률(최대 15%)을 기록했습니다. 가격은 매달 급격하게 변했습니다. 2002년 유로 도입 이후 안정세를 보였으나, 2021~2023년에 다시 급등했습니다.',
  },
  {
    question: '인플레이션은 저축에 어떤 영향을 미치나요?',
    answer:
      '인플레이션은 "조용한 세금"처럼 작용합니다. 인플레이션이 5%인데 돈을 장롱 속에 보관한다면, 연말에는 이전보다 5% 적은 물건을 살 수 있게 됩니다. 이 효과에 맞서기 위해 투자는 필수적입니다.',
  },
];

const howToData = [
  {
    name: '기준 연도 선택',
    text: '화폐 가치를 계산하고자 하는 시작 날짜를 선택합니다 (1980년부터 2026년까지 선택 가능).',
  },
  {
    name: '금액 입력',
    text: '비교하고자 하는 페세타(과거) 또는 유로 금액을 입력합니다.',
  },
  {
    name: '최종 연도 선택',
    text: '구매력 변화를 확인하고자 하는 시점을 정의합니다.',
  },
  {
    name: '실질 결과 분석',
    text: '해당 기간의 구매력 등가물과 누적 인플레이션율을 확인합니다.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<InflationUI> = {
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
      text: '역사적 인플레이션 계산기: 돈의 진정한 가치 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '인플레이션은 매년 당신의 저축을 갉아먹는 "조용한 세금"입니다. 1980년 이후 당신의 돈이 얼마나 가치를 잃었는지 알고 계신가요? 20년 전 300페세타에 마셨던 커피는 오늘날 실질적으로 얼마일까요?',
    },
    {
      type: 'title',
      text: '인플레이션: 자산에 대한 조용한 세금',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>인플레이션</strong>은 물가가 지속적이고 전반적으로 상승하는 현상입니다. 전문적인 용어처럼 들릴 수 있지만 실물 경제에 미치는 영향은 직접적입니다. 같은 금액으로 살 수 있는 상품의 양이 줄어들며, 보호 조치를 취하지 않으면 평생의 저축이 훼손될 수 있습니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: '1980년 역사적 기록',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: '2022년 물가 정점',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: '안정 목표치',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: '필수 금융 용어',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'CPI',
          definition: '기본 소비 바구니의 가격 변동을 요약한 지표.',
        },
        {
          term: '구매력',
          definition: '특정 시점에서 통화의 실제 구매 능력.',
        },
        {
          term: '디플레이션',
          definition: '물가가 전반적으로 하락하는 현상으로 투자를 마비시킬 수 있습니다.',
        },
        {
          term: '스태그플레이션',
          definition: '높은 인플레이션과 경제 침체가 결합된 시나리오.',
        },
      ],
    },
    {
      type: 'title',
      text: '경제적 이정표 및 비교',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '80년대 위기',
          description: '두 자릿수 인플레이션과 심각한 고용 불안정이 특징이었던 시기.',
          points: [
            '극도로 높은 금리',
            '페세타 가치의 급격한 하락',
            '물가 상승에 먹혀버린 임금',
          ],
        },
        {
          title: '팬데믹 인플레이션: 2021~2023년',
          description: '에너지 비용 및 공급망 문제로 인한 급격한 상승.',
          highlight: true,
          points: [
            '장바구니 물가에 직접적인 타격',
            '소비 억제를 위한 ECB의 금리 인상',
            '구매력의 느린 회복',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['품목 또는 지표', '1980년 가치 (추정)', '2026년 가치 (예상)', '변동'],
      rows: [
        ['빵 한 덩이', '0.15€ (25 pts)', '1.40€', '833%'],
        ['카페 커피', '0.30€ (50 pts)', '1.65€', '450%'],
        ['영화 티켓', '1.20€ (200 pts)', '9.80€', '716%'],
        ['월 최저 임금', '154€ (25,615 pts)', '1,140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: '현금 보유의 위험성',
      html: '장롱 속에 돈을 은닉하거나 이자가 없는 일반 계좌에 돈을 두는 것은 자본 손실을 보장하는 것과 같습니다. 평균 3%의 인플레이션은 25년 안에 저축액의 가치를 절반으로 줄입니다.',
    },
    {
      type: 'title',
      text: '저축을 보호하기 위한 조언',
      level: 2,
    },
    {
      type: 'proscons',
      title: '투자 전략',
      items: [
        {
          pro: '실물 자산: 부동산 등은 보통 인플레이션과 함께 가치가 오릅니다.',
          con: '낮은 유동성과 높은 진입 비용.',
        },
        {
          pro: '주식 및 펀드: 장기적으로 CPI를 상회하는 수익률을 보이는 경우가 많음.',
          con: '단기적인 변동성 및 시장 리스크.',
        },
      ],
    },
    {
      type: 'title',
      text: '건강한 금융 습관',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '숨겨진 가격 인상을 감지하기 위해 정기적으로 지출을 확인하세요.',
        '저축을 다양한 유형의 자산에 분산하세요.',
        '인플레이션 연동 국채를 고려해 보세요.',
        '계산 도구를 사용하여 오퍼나 급여의 실질 가치를 파악하세요.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '역복리에 대한 경고',
      html: '인플레이션은 역복리처럼 작용합니다. 매년 손실 비율이 이미 줄어든 가치에 적용되어, 조치를 취하지 않으면 자산 손실이 가속화됩니다.',
    },
    {
      type: 'summary',
      title: '핵심 요약',
      items: [
        'CPI는 평균일 뿐이며, 개인의 인플레이션은 소비 습관에 달려 있습니다.',
        '노동의 실질 가치를 보존하고 싶다면 투자는 선택이 아닌 필수입니다.',
        '장기 계약을 이해하는 데 인플레이션 계산기는 필수적입니다.',
      ],
    },
    {
      type: 'message',
      title: '당신의 경제를 통제하세요',
      html: '저희 계산기는 스페인 통계청(INE)의 공식 데이터를 사용하여 스페인의 경제적 과거와 현재를 가장 정확하게 보여줍니다.',
    },
  ],
  ui: {
    labelTitle: '스페인 인플레이션 계산기',
    labelInitialAmount: '초기 금액',
    labelInitialYear: '연도',
    labelFinalAmount: '현재 가치',
    labelFinalYear: '2026년',
    labelInflationRate: '누적 인플레이션',
    labelCalculatedOn: '2025년까지의 INE 공식 데이터와 2026년 말까지의 예상을 바탕으로 계산되었습니다.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ko-KR',
    labelYearSelect: '연도',
    labelIn: '시작 연도',
    labelEquivalentToday: '의 현재 가치는',
    labelInflationAccumulated: '누적 인플레이션',
    labelYear: '연도',
  },
};
