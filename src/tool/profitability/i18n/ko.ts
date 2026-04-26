import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: '초기 투자금',
  labelFinalValue: '최종 가치 / 현재 잔액',
  labelTimeSelection: '투자 기간',
  labelYears: '년',
  labelMonths: '개월',
  labelDays: '일',
  labelROI: '투자 수익률 (ROI)',
  labelCAGR: '연평균 성장률 (CAGR)',
  labelNetProfit: '순이익',
  labelLinearGrowth: '선형 성장 (추정)',
  labelExponentialGrowth: '복리 성장 (CAGR)',
  labelPositiveResult: '수익 중인 투자',
  labelNegativeResult: '손실 상태',
  labelCopyResult: '결과 복사',
  labelCopied: '복사 완료!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'profitability-calculator-roi-cagr',
  title: '투자 수익성 계산기: ROI & CAGR',
  description: '투자 성과를 정확하게 분석하세요. ROI와 CAGR을 계산하여 실제 연환산 수익을 파악하세요.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: 어떤 지표가 더 좋나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong>는 전체 수익률을 나타내지만 기간을 고려하지 않습니다. <strong>CAGR</strong>은 기간을 "연환산"하므로 장기 분석에 우수합니다.',
    },
  ],
  faq: [
    {
      question: '적절한 CAGR은 어느 정도인가요?',
      answer: '역사적으로 S&P 500의 연평균 수익률은 약 7~10%입니다.',
    },
  ],
  bibliography: [
    {
      name: 'ROI 정의 - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: '초기 자본 입력',
      text: '처음에 투자한 금액을 입력하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: '투자 수익성 계산기',
      description: 'ROI와 CAGR을 계산합니다.',
    },
  ],
};
