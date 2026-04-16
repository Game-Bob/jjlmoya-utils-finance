import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'mortgage-calculator';
const title = '주택담보대출 계산기 및 원리금 균등 상환표';
const description =
  '매월 납부할 대출 상환액을 계산하고, 총 이자 비용을 확인해 보세요. 전체 상환 일정을 즉시 시각화하여 보여드립니다.';

const faqData = [
  {
    question: '원리금 균등 상환 방식이란 무엇인가요?',
    answer:
      '가장 일반적으로 사용되는 상환 방식입니다. 매달 내는 원금과 이자의 합계가 일정하지만, 초기에는 이자 비중이 높고 후기로 갈수록 원금 비중이 높아집니다. 따라서 중도 상환은 대출 초기일수록 이자 절감 효과가 큽니다.',
  },
  {
    question: '2026년, 고정금리와 변동금리 중 무엇이 유리할까요?',
    answer:
      '고정금리: 당장은 금리가 높을 수 있지만 30년 동안 금리 상승 걱정 없이 안심할 수 있습니다. 변동금리: 현재 금리는 낮을 수 있지만 추후 금리가 오를 경우 상환액이 늘어날 위험이 있습니다. 개인의 리스크 감수 성향에 따라 달라집니다.',
  },
  {
    question: '1,000만 원 중도 상환 시 얼마나 아낄 수 있나요?',
    answer:
      '시점에 따라 다릅니다. 2억 원 대출(금리 3%) 1년 차에 1,000만 원을 상환하면 1,500만 원 이상의 이자를 절약할 수 있지만, 20년 차에 상환하면 절약액은 200만 원 수준에 불과합니다. 타이밍이 가장 중요합니다.',
  },
  {
    question: '소득의 어느 정도를 대출 상환에 써야 하나요?',
    answer:
      '일반적으로 월 순소득의 30~35%를 넘지 않는 것을 권장합니다 (기타 부채 포함). 이 범위를 넘어서면 예상치 못한 상황 발생 시 채무 불이행 위험이 커집니다.',
  },
];

const howToData = [
  {
    name: '대출 금액 입력하기',
    text: '은행에서 빌리고자 하는 총 금액을 입력합니다 (본인 부담금을 제외한 순수 대출금).',
  },
  {
    name: '금리 설정하기',
    text: '은행에서 제시한 연이율(TIN)을 입력합니다. 고정금리와 변동금리를 비교해 보세요.',
  },
  {
    name: '상환 기간 선택하기',
    text: '대출금을 갚을 기간(년)을 정합니다. 기간이 길수록 월 납부액은 줄어들지만 총 이자액은 늘어납니다.',
  },
  {
    name: '상환표 분석하기',
    text: '매달 대출 잔액이 어떻게 줄어드는지, 매월 납부액 중 이자와 원금 비중이 어떻게 변하는지 확인합니다.',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 참고 자료',
  bibliography: [
    {
      name: '금융감독원: 주택담보대출 안내',
      url: 'https://www.fss.or.kr/',
    },
    {
      name: '한국주택금융공사: 대출 상품 정보',
      url: 'https://www.hf.go.kr/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '주택담보대출 완벽 가이드: 원리금 균등 방식과 중도 상환',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '주택담보대출은 일생에서 가장 큰 규모의 부채가 될 가능성이 높습니다. 상환 방식의 원리를 이해하는 것은 수천만 원의 이자를 아낄 수 있는 현명한 결정을 내리는 데 필수적입니다.',
    },
    {
      type: 'title',
      text: '원리금 균등 방식의 특징: 월 납부액의 구성 변화 이해하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '국내 대부분의 대출은 <strong>원리금 균등 상환 방식</strong>을 사용합니다. 특징은 매달 내는 금액이 일정하지만(고정금리 시), 시간이 지남에 따라 그 안의 원금과 이자 비중이 급격히 변한다는 점입니다.',
    },
    {
      type: 'tip',
      title: '상환액 비중의 변화',
      html: '<p><strong>초기 (1~10년 차):</strong> 납부액의 대부분이 이자이며 원금은 거의 줄어들지 않습니다. 예를 들어 초기에는 납부액의 80%가 이자일 수도 있습니다.</p><p><strong>중기 (11~25년 차):</strong> 원금과 이자 비중이 서서히 균형을 이룹니다.</p><p><strong>후기 (26~30년 차):</strong> 거의 모든 금액이 원금 상환에 쓰이며 이자는 매우 적어집니다.</p>',
    },
    {
      type: 'paragraph',
      html: '따라서 <strong>중도 상환</strong>(미리 갚기)을 계획하고 있다면, 대출 초기 단계에 실행하는 것이 이자 절감 측면에서 압도적으로 유리합니다. 대출 초기에 1,000만 원을 갚는 것이 대출 후기에 갚는 것보다 훨씬 많은 이자를 아껴줍니다.',
    },
    {
      type: 'title',
      text: '소득 대비 대출 비중은 어느 정도가 적당한가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '일반적으로 <strong>월 총소득의 30-35%를 넘기지 않는 것</strong>이 권장됩니다. 이 선을 넘기면 실직, 질병 등 예상치 못한 변수 발생 시 대출금을 갚지 못하게 될 위험이 커지기 때문입니다.',
    },
    {
      type: 'title',
      text: '2026년 금리 전망: 고정금리 vs 변동금리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '금리 변동성이 큰 시기에 <strong>고정금리</strong>와 <strong>변동금리</strong> 사이의 선택은 연간 수백만 원의 차이를 만들 수 있는 전략적 결정입니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '고정금리',
          description: '당장 부담은 조금 더 클 수 있지만, 금리 상승 걱정 없이 계획적인 가계 운영이 가능합니다.',
          points: [
            '30년 동안 예측 가능한 상환액',
            '금리 상승기 리스크 방어',
            '불확실한 경제 상황에서의 안정성',
            '예산이 빠듯한 가구에 적합',
          ],
        },
        {
          title: '변동금리',
          description: '초기 금리는 낮을 수 있지만, 금리 변동 리스크에 직접적으로 노출됩니다.',
          highlight: true,
          points: [
            '초기 상환 부담 감소',
            '금리 상승 시 상환액 급증 위험',
            '가계 예산에 심각한 타격 가능성',
            '높은 위험을 감수할 수 있는 경우',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: '본인의 성향에 따른 선택',
      html: '<p><strong>고정금리 추천:</strong> 정해진 수입 내에서 계획적으로 살고 싶고, 예상치 못한 지출 증가는 피하고 싶은 경우.</p><p><strong>변동금리 추천:</strong> 여유 자금이 충분하여 금리 상승 시 대응이 가능하거나, 대출 기간이 짧고 금액이 작은 경우.</p>',
    },
  ],
  ui: {
    labelTitle: '대출 계산기',
    labelLoanAmount: '대출 금액',
    labelInterestRate: '금리 (연이율)',
    labelYears: '기간 (년)',
    labelMonthlyExtra: '월 추가 상환액',
    labelMonthlyPayment: '월 상환액',
    labelMonthCount: '개월',
    labelSavingsCard: '이자 절감 예상액',
    labelSavingsInterest: '이자 절감',
    labelSavingsTime: '기간 단축',
    labelTimelineComparison: '상환 기간 비교',
    labelTimelineOriginal: '기존 기간',
    labelTimelineOptimized: '단축된 기간',
    labelCostBreakdown: '총 비용 상세',
    labelBorrowed: '원금',
    labelTotalBorrowed: '총 대출 원금',
    labelTotalInterest: '총 이자 비용',
    labelAmortizationTable: '상환 스케줄표',
    labelTableHeader: '전체 상환표 보기',
    labelViewAll: '모두 보기',
    labelPaid: '대출 상환 완료',
    labelTableMonth: '회차',
    labelTableInterest: '이자',
    labelTablePrincipal: '원금',
    labelTableExtra: '추가',
    labelTableBalance: '대출 잔액',
    labelMoreMonths: '개월 더 보기',
    labelMonth: '개월',
    currencySymbol: '₩',
    currencyCode: 'KRW',
    currencyLocale: 'ko-KR',
    monthPlural: '개월',
    yearPlural: '년',
  },
};
