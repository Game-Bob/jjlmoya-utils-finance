import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'late-interest-calculator';
const title = '스페인 지연 이자 및 법정 이자 계산기 2026';
const description =
  '스페인 내 세금(Hacienda) 체납에 따른 지연 이자 및 미납에 대한 법정 이자를 계산해 보세요. 2025년 및 2026년 예산안 기준 업데이트 완료.';

const faqData = [
  {
    question: '지연 이자(연체료)란 무엇인가요?',
    answer:
      '정해진 기한 내에 지불되지 않은 금액에 대해 부과되는 이자입니다. 원래의 채무액에 적용되며 전체 금액을 납부할 때까지 누적됩니다.',
  },
  {
    question: '단리 계산과 복리 계산의 차이점은 무엇인가요?',
    answer:
      '단리는 매일 원래의 원금에 대해서만 이자를 계산합니다. 복리는 원금에 누적된 이자를 더한 금액에 대해 이자를 계산하므로 부채가 더 빠르게 증가합니다.',
  },
  {
    question: '일별 이자는 어떻게 계산되나요?',
    answer:
      '연이율을 365일로 나눈 뒤 원래의 원금에 적용합니다. 예를 들어 연 10% = 일 0.0274%입니다.',
  },
  {
    question: '어떤 지연 이자율을 적용해야 하나요?',
    answer:
      '현지 법률 및 계약 조건에 따라 다릅니다. 스페인의 경우, 지불 지연 방지법에 따라 최고 금리가 설정되어 있습니다. 구체적인 사례는 법률 전문가와 상담하세요.',
  },
  {
    question: '이 계산기를 법적 채무 계산에 사용할 수 있나요?',
    answer:
      '이 도구는 정보 제공을 목적으로 합니다. 실제 채무에 대해서는 계약 조건과 현지 법률을 확인하세요. 궁금한 점이 있으면 변호사와 상담하시기 바랍니다.',
  },
];

const howToData = [
  {
    name: '계산 유형 선택',
    text: '상황에 따라 단리, 복리 또는 월별 계산 방식 중 하나를 선택합니다.',
  },
  {
    name: '데이터 입력',
    text: '원래의 금액, 이자율 및 지연된 기간을 입력합니다.',
  },
  {
    name: '결과 확인',
    text: '계산기에서 누적된 일별 이자, 총 이자 발생액, 최종 납부액 및 실효 이율을 보여줍니다.',
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

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처 및 참고 자료',
  bibliography: [
    {
      name: '스페인 지불 지연 방지법 (Ley 3/2004)',
      url: 'https://www.boe.es/',
    },
    {
      name: '스페인 은행 (Banco de España): 이자율 정보',
      url: 'https://www.bde.es/',
    },
    {
      name: '복리 계산 방법 안내',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '지연 이자 및 법정 이자 계산기: 스페인 완전 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페인의 복잡한 법적 및 조세 체계 내에서 채무 이행을 지체하는 시간은 공짜가 아닙니다. <strong>지연 이자</strong>와 <strong>화폐의 법정 이자</strong>는 금전적 의무 이행 지체로 인해 발생한 피해를 보상하기 위해 법이 사용하는 메커니즘입니다. 세무 당국(<strong>Hacienda</strong>)에 대한 부채, 기업 간 미납 또는 사법적 청구 등 이 이자들이 어떻게 발생하는지 이해하는 것은 매우 중요합니다.',
    },
    {
      type: 'title',
      text: '화폐의 법정 이자(Interés Legal del Dinero)란 무엇인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '화폐의 법정 이자는 당사자 간에 특정 이자를 합의하지 않았거나 법이 정한 경우 부채에 적용되는 할증료입니다. <strong>2024년, 2025년 및 2026년</strong>의 경우 이 이율은 <strong>3.25%</strong>로 안정적으로 유지되고 있습니다. 이 수치는 수많은 법적 계산의 기초가 됩니다.',
    },
    {
      type: 'title',
      text: '조세 지연 이자(Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '부채가 공공 행정 기관에 대한 것일 때, <strong>조세 지연 이자</strong>는 세금 납부 지연을 방지하기 위해 법정 이자보다 높게 책정됩니다. <strong>2024~2026년</strong> 기간 동안 이 이율은 <strong>4.0625%</strong>로 고정되었습니다. 이는 납세자가 자진 신고 기간을 넘겼을 때 세무 당국이 부과하는 할증료입니다.',
    },
    {
      type: 'tip',
      title: '징벌적 성격이 아닌 보상적 성격',
      html: '<p><strong>핵심 정보:</strong> 제재와 달리 지연 이자는 징벌적 성격이 아닌 보상적 성격을 가집니다. 세무 당국이 당신을 "처벌"하는 것이 아니라, 공적 자금으로 있어야 할 돈을 개인이 보유했던 시간에 대한 비용을 청구하는 것입니다.</p>',
    },
    {
      type: 'title',
      text: '이자를 계산하는 단계별 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '대부분의 이자 계산은 단리 공식을 따르며 기간은 달력상의 일수로 계산합니다: <strong>이자액 = (원금 × 일수 × 이자율) / 36,500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>원금:</strong> 원래의 채무 총액.',
        '<strong>일수:</strong> 만기 다음 날부터 실제 지불일까지 경과한 날짜 수.',
        '<strong>이자율:</strong> 적용 가능한 연이율 (예: 3.25 또는 4.0625).',
        '<strong>36,500:</strong> 연이율을 일일 백분율로 나누기 위한 정수 (365일 x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '실제 사례: 세무 당국(Hacienda) 부채',
      html: '<p>만기된 지 180일이 지난 소득세(IRPF) 5,000유로가 있다고 가정해 봅시다:</p><ul><li>적용 이율 (지연): 4.0625%</li><li>계산식: (5,000 × 180 × 4.0625) / 36,500</li><li><strong>발생 이자액:</strong> 100.17 유로</li><li>최종 지불액: 5,100.17 유로</li></ul>',
    },
    {
      type: 'title',
      text: '부채 유형에 따른 차이점',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>민사 채무:</strong> 개인 간 거래 등에는 3.25%(법정)가 적용됩니다.',
        '<strong>상사 채무:</strong> 지불 지연 방지법의 지배를 받으며, 2025-2026년에는 약 10.15% - 11.15%에 달합니다.',
        '<strong>사회보장 채무:</strong> 4.0625%에 10%~20%의 할증료가 추가 적용됩니다.',
        '<strong>판결 법정 이자:</strong> 법원 판결이 있는 경우 판결일로부터 5.25%가 적용됩니다.',
      ],
    },
    {
      type: 'title',
      text: '상거래 시 이자: 60일을 주의하세요!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '자영업자나 기업인 경우, 스페인 법률 3/2004는 최대 지불 기한을 60일로 정하고 있습니다. 고객이 이 기간을 넘기면 독촉 없이도 자동으로 상사 지연 이자를 청구할 수 있으며, 추가로 회수 비용으로 40유로의 고정 금액을 청구할 권리가 생깁니다.',
    },
  ],
  ui: {
    labelTitle: '지연 이자 계산기',
    labelSimpleTitle: '단리',
    labelCompoundTitle: '복리',
    labelMonthlyTitle: '월별',
    labelSimpleQuestion: '단리 방식으로 계산',
    labelCompoundQuestion: '복리 방식으로 계산',
    labelMonthlyQuestion: '월별 기간으로 계산',
    labelPrincipal: '원래 금액',
    labelAnnualRate: '연이율',
    labelDays: '지연 일수',
    labelMonths: '지연 월수',
    labelMonthlyRate: '월이율',
    labelDailyInterest: '일일 이자',
    labelTotalInterest: '총 이자액',
    labelTotalAmount: '총 납부할 금액',
    labelEffectiveRate: '실효 이율',
    labelCopyTooltip: '결과 복사하기',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: '적용된 공식',
    reportTitle: '이자 계산서',
    reportLabelPrincipal: '원금',
    reportLabelType: '유형',
    reportLabelPeriod: '기간',
    reportLabelDays: '경과 일수',
    reportLabelInterest: '발생한 이자 총액',
    reportLabelTotal: '최종 결제 금액',
    reportDaysSuffix: '일',
    formulaDescription: '이 계산은 현재 유효한 이율을 사용합니다. 기간이 다른 이율이 적용되던 이전 연도를 포함하는 경우, 실제로는 기간별로 나누어 계산해야 합니다.',
    currencyCode: 'EUR',
    currencyLocale: 'ko-KR',
  },
};
