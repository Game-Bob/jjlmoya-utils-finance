import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: '총 저축액',
  labelExpenses: '현재 지출',
  labelMonthly: '월별',
  labelYearly: '연별',
  labelTimeRemaining: '생존 가능 기간(런웨이)',
  labelYears: '년',
  labelMonths: '개월',
  labelDays: '일',
  labelStatus: '재무적 안전 상태',
  labelRedZone: '레드 존: 고위험',
  labelYellowZone: '옐로우 존: 안정적',
  labelGreenZone: '그린 존: 재무적 자유',
  labelBurnRateDaily: '일일 지출률',
  labelBurnRateMonthly: '월간 지출률',
  labelWhatIf: '10% 절약의 힘',
  labelWhatIfDescription: '지출을 10%만 줄여도 생존 기간을 크게 늘릴 수 있습니다.',
  labelGainTime: '추가 확보 기간',
  labelCopyResult: '요약 복사',
  labelCopied: '복사 완료!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'financial-freedom-calculator',
  title: '재무적 자유 및 생존 기간(런웨이) 계산기',
  description: '저축액이 얼마나 지속될지 정확하게 계산하세요. 이 도구는 재무적 자립을 시각화하고 비상금 계획을 돕습니다.',
  ui,
  seo: [
    {
      type: 'title',
      text: '재무적 런웨이란 무엇인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>생존 기간(런웨이)</strong>은 새로운 수입 없이 살 수 있는 기간입니다. 이는 재무적 자유의 궁극적인 척도입니다.',
    },
  ],
  faq: [
    {
      question: '적절한 생존 기간은 어느 정도인가요?',
      answer: '전문가들은 일반적으로 최소 3~6개월분의 지출액을 권장합니다. 진정한 자유를 위해 2년 이상을 목표로 하세요.',
    },
  ],
  bibliography: [
    {
      name: 'FIRE 운동의 원칙',
      url: 'https://ko.wikipedia.org/wiki/FIRE_운동',
    },
  ],
  howTo: [
    {
      name: '총 저축액 입력',
      text: '현재 사용 가능한 현금 또는 유동 자산의 총액을 입력하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: '재무적 자유 계산기',
      description: '저축액 지속 기간을 계산합니다.',
    },
  ],
};
