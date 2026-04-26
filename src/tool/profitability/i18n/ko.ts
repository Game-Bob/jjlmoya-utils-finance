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

const slug = 'profitability-calculator-roi-cagr';
const title = '투자 수익성 계산기: ROI & CAGR';
const description = '투자 성과를 정확하게 분석하세요. ROI와 CAGR을 계산하여 실제 연환산 수익을 파악하세요.';

const faq = [
  {
    question: '적절한 CAGR은 어느 정도인가요?',
    answer: '역사적으로 S&P 500의 연평균 수익률은 약 7~10%입니다.',
  },
  {
    question: '왜 CAGR이 전체 ROI와 다른가요?',
    answer: 'ROI는 시간에 관계없는 총 수익률입니다. CAGR은 이를 연간 단위로 환산한 것입니다.',
  },
];

const howTo = [
  {
    name: '초기 자본 입력',
    text: '처음에 투자한 금액을 입력하세요.',
  },
  {
    name: '최종 가치 입력',
    text: '현재의 시장 가치를 입력하세요.',
  },
  {
    name: '기간 설정',
    text: '투자를 보유한 기간을 설정하세요.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
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
  faq,
  bibliography: [
    {
      name: 'ROI 정의 - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
