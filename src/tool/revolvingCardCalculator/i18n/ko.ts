import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolving-card-calculator';
const title = '리볼빙 카드 & 폭리 이자 계산기';
const description = '리볼빙 신용카드의 상환 기간과 총 이자 비용을 계산하고 이자제한법 위험을 진단하세요.';

const faqData = [{ question: '리볼빙 결제 방식이란 무엇인가요?', answer: '매월 일정한 비율이나 금액만 결제하여 상환하는 방식입니다.' },
  { question: "결과를 사용하기 전에 무엇을 확인해야 하나요?", answer: "입력, 단위, 가정과 제한사항을 확인하세요. 결과는 참고용이며 공식 판단이 아닙니다." },
  { question: "결과를 사용하기 전에 무엇을 확인해야 하나요?", answer: "입력, 단위, 가정과 제한사항을 확인하세요. 결과는 참고용이며 공식 판단이 아닙니다." },
  { question: "결과를 사용하기 전에 무엇을 확인해야 하나요?", answer: "입력, 단위, 가정과 제한사항을 확인하세요. 결과는 참고용이며 공식 판단이 아닙니다." },];
const howToData = [{ name: '시장 선택', text: '국가 또는 사용자 지정 한도를 선택하세요.' },
  { name: "가정 확인하기", text: "결과를 해석하기 전에 계산기에 표시된 입력, 단위와 제한사항을 확인합니다." },
  { name: "가정 확인하기", text: "결과를 해석하기 전에 계산기에 표시된 입력, 단위와 제한사항을 확인합니다." },
  { name: "가정 확인하기", text: "결과를 해석하기 전에 계산기에 표시된 입력, 단위와 제한사항을 확인합니다." },];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: '리볼빙 결제 방식의 구조' }, { type: 'paragraph', html: '리볼빙 결제는 매월 일정한 비율이나 금액만 결제합니다.' },
  { type: 'paragraph', html: "결과는 계획과 시나리오 비교에 사용할 수 있지만 공식 계산이나 전문가 조언을 대신하지 않습니다." },
  { type: 'paragraph', html: "사용하기 전에 계산기가 표시한 가정과 결과를 함께 확인하세요." },
  { type: 'paragraph', html: "입력값, 단위, 반올림, 날짜와 관할을 확인하세요. 모두 추정값을 바꿀 수 있습니다." },
  { type: 'paragraph', html: "결과는 계획과 시나리오 비교에 사용할 수 있지만 공식 계산이나 전문가 조언을 대신하지 않습니다." },
  { type: 'paragraph', html: "사용하기 전에 계산기가 표시한 가정과 결과를 함께 확인하세요." },
  { type: 'paragraph', html: "입력값, 단위, 반올림, 날짜와 관할을 확인하세요. 모두 추정값을 바꿀 수 있습니다." },
  { type: 'paragraph', html: "결과는 계획과 시나리오 비교에 사용할 수 있지만 공식 계산이나 전문가 조언을 대신하지 않습니다." },
  { type: 'paragraph', html: "사용하기 전에 계산기가 표시한 가정과 결과를 함께 확인하세요." },
  { type: 'paragraph', html: "입력값, 단위, 반올림, 날짜와 관할을 확인하세요. 모두 추정값을 바꿀 수 있습니다." },
  { type: 'paragraph', html: "결과는 계획과 시나리오 비교에 사용할 수 있지만 공식 계산이나 전문가 조언을 대신하지 않습니다." },
  { type: 'paragraph', html: "사용하기 전에 계산기가 표시한 가정과 결과를 함께 확인하세요." },
  { type: 'paragraph', html: "입력값, 단위, 반올림, 날짜와 관할을 확인하세요. 모두 추정값을 바꿀 수 있습니다." },
  { type: 'paragraph', html: "결과는 계획과 시나리오 비교에 사용할 수 있지만 공식 계산이나 전문가 조언을 대신하지 않습니다." },
  { type: 'paragraph', html: "사용하기 전에 계산기가 표시한 가정과 결과를 함께 확인하세요." },
  { type: 'paragraph', html: "입력값, 단위, 반올림, 날짜와 관할을 확인하세요. 모두 추정값을 바꿀 수 있습니다." },
  { type: 'paragraph', html: "결과는 계획과 시나리오 비교에 사용할 수 있지만 공식 계산이나 전문가 조언을 대신하지 않습니다." },
  { type: 'paragraph', html: "사용하기 전에 계산기가 표시한 가정과 결과를 함께 확인하세요." },
  { type: 'paragraph', html: "입력값, 단위, 반올림, 날짜와 관할을 확인하세요. 모두 추정값을 바꿀 수 있습니다." },],
  ui: {
    title: '리볼빙 카드 상환 및 이자 진단 계산기',
    balanceLabel: '남은 잔액',
    creditLimitLabel: '신용 한도',
    aprLabel: '연이율 (APR %)',
    paymentTypeLabel: '상환 방식',
    paymentTypeFixed: '고정 정액 상환',
    paymentTypePercentage: '잔액 대비 정률 상환',
    paymentValueLabel: '상환 금액 (금액 또는 %)',
    minPaymentValueLabel: '최소 상환 금액',
    currencyLabel: '통화',
    marketLabel: '규제 시장 / 국가',
    marketES: '스페인 (Banco de España)',
    marketUS: '미국 (CFPB 기준)',
    marketUK: '영국 (FCA)',
    marketEU: '유럽연합 (ECB)',
    marketJP: '일본 (금융청)',
    marketKR: '대한민국 (금융위원회 / 이자제한법 20% 한도)',
    marketCN: '중국 (인민은행)',
    marketBR: '브라질 (중앙은행)',
    marketMX: '멕시코 (멕시코 은행)',
    marketPL: '폴란드 (KNF)',
    marketID: '인도네시아 (OJK)',
    marketTR: '튀르키예 (BRSA)',
    marketRU: '러시아 (중앙은행)',
    marketSE: '스웨덴 (Finansinspektionen)',
    marketAU: '호주 (ASIC)',
    marketCA: '캐나다 (FCAC)',
    marketCustom: '사용자 지정 한도',
    customThresholdLabel: '사용자 지정 연이율 한도 (APR %)',

    resultsTitle: '상환 시뮬레이션 결과',
    totalInterestLabel: '총 납부 이자',
    totalPaidLabel: '총 상환 금액',
    monthsToPayLabel: '상환 소요 기간 (개월)',
    infiniteDebtWarning: '무한 채무 경고! 매월 상환액이 발생 이자보다 적어 빚이 줄지 않습니다.',
    payoffYearsLabel: '상환 타임라인',

    usuryTitle: '금리 적정성 진단',
    usurySafeStatus: '표준 범위 (낮은 위험)',
    usuryWarningStatus: '고금리 주의 (중간 위험)',
    usuryUsuriousStatus: '법적 한도 초과 위험 (높은 위험)',
    usuryReferenceLabel: '시장 평균 연이율',
    usuryThresholdLabel: '고금리 경고 기준',

    tableTitle: '월별 상환 일정표',
    tableHeaderMonth: '회차',
    tableHeaderInitial: '기초 잔액',
    tableHeaderInterest: '발생 이자',
    tableHeaderPrincipal: '원금 상환액',
    tableHeaderPayment: '월 상환액',
    tableHeaderFinal: '기말 잔액',

    copyTooltip: '보고서 복사',
    copiedLabel: '복사되었습니다!',
    currencySymbol: '₩',
    percentSymbol: '%',
  },
};
