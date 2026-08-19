import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'pesetas-to-euros-with-inflation-calculator';
const title = '페세타 유로 환산기: 2026년 가치';
const description = '스페인 페세타를 1유로당 166.386페세타의 고정 환율로 유로로 환산하고 스페인 CPI로 2026년까지의 구매력을 추정합니다.';
const faq = [
  { question: '1,000페세타는 몇 유로인가요?', answer: '고정 환율로 1,000페세타는 6.01유로입니다. 선택한 연도에 해당 금액이 가진 구매력도 별도로 추정합니다.' },
  { question: '100만 페세타는 몇 유로인가요?', answer: '고정 환율로 100만 페세타는 6,010.12유로입니다. 2026년 구매력 추정치는 그 금액이 사용된 연도에 따라 달라집니다.' },
  { question: '페세타를 유로로 환산하는 방법은 무엇인가요?', answer: '페세타 금액을 166.386으로 나누면 됩니다. 예를 들어 100페세타는 0.60유로이고 10,000페세타는 60.10유로입니다.' },
  { question: '옛 페세타는 2026년에 얼마의 가치가 있나요?', answer: '두 가지 답이 있습니다. 고정 환산은 공식 유로 금액을 보여 주고 CPI 조정 결과는 비슷한 평균 구매력을 위해 2026년에 필요한 유로를 추정합니다.' },
  { question: '오래된 동전이나 지폐의 수집 가치를 계산하나요?', answer: '아니요. 통화 환산과 평균 구매력을 계산합니다. 희귀 동전이나 수집용 지폐는 상태, 희소성, 수요에 따라 다른 시장 가치를 가질 수 있습니다.' },
  { question: '페세타 계산기는 어떤 연도를 지원하나요?', answer: '1980년부터 2026년까지의 시작 연도를 선택할 수 있습니다. 2026년 기준은 최신 공개 CPI 자료를 사용하며 아직 완료된 연평균은 아닙니다.' },
  { question: '구매력 추정치는 정확한 가격인가요?', answer: '아니요. CPI에 따른 평균 비교이며 주거비, 임금, 식품, 에너지 또는 특정 구매의 정확한 가격을 뜻하지 않습니다.' },
];
const howTo = [
  { name: '페세타 금액 입력', text: '영수증, 지폐, 동전 또는 역사 문서에 적힌 금액을 입력합니다.' },
  { name: '연도 선택', text: '먼저 시대를 선택한 뒤 금액이 사용된 연도를 고릅니다.' },
  { name: '고정 환산 확인', text: '페세타를 166.386으로 나눈 명목 유로 금액을 확인합니다.' },
  { name: '구매력 비교', text: '고정 환산과 2026년 평균 구매력 추정치를 비교합니다.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ko' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: '역사적 금액', labelAmountHint: '시작점 선택', labelOriginYear: '기준 연도', labelOriginYearHint: '자료가 있는 경우 연간 CPI 평균', labelReferenceYear: '2026년 현재까지의 기준', labelNominalEuros: '고정 환산', labelTodayValue: '추정 구매력', labelPurchasingPowerChange: '구매력 변화', labelNominalDifference: '환산 차이', labelConversionRate: '유로당 페세타', labelCpiMethod: 'CPI 배수', labelPreset100: '100페세타', labelPreset1000: '1,000페세타', labelPreset10000: '10,000페세타', labelPreset100000: '100,000페세타', labelPesetas: '페세타', labelEuro: '유로', labelFrom: '시작', labelTo: '끝', labelOpenYears: '기준 연도 열기', labelCloseYears: '기준 연도 닫기', labelDecade: '시대 선택', labelCoin: '동전', labelBanknote: '지폐', labelCashPieces: '화폐', labelState: '가치 변화', labelStatePositive: '상승', labelStateNeutral: '변화 없음', labelStateNegative: '하락', labelReset: '예시 초기화', currencyLocale: 'ko-KR' },
  seo: [
    { type: 'title', text: '페세타를 유로로 환산하는 두 가지 답', level: 2 },
    { type: 'paragraph', html: '스페인 페세타로 표시된 옛 가격, 급여, 영수증, 동전 또는 지폐가 있다면 이 환산기는 두 가지 답을 제공합니다. 고정 환율에 따른 유로 환산과 스페인의 물가 변화를 반영한 2026년 구매력 추정치입니다.' },
    { type: 'title', text: '자주 찾는 페세타 유로 환산', level: 2 },
    { type: 'paragraph', html: '고정 환율은 항상 1유로당 166.386페세타입니다. 연도에 따라 명목 환산액은 달라지지 않습니다.' },
    { type: 'table', headers: ['옛 금액', '고정 환산'], rows: [['1페세타', '0.01유로'], ['25페세타', '0.15유로'], ['50페세타', '0.30유로'], ['100페세타', '0.60유로'], ['500페세타', '3.01유로'], ['1,000페세타', '6.01유로'], ['2,000페세타', '12.02유로'], ['5,000페세타', '30.05유로'], ['10,000페세타', '60.10유로'], ['100만 페세타', '6,010.12유로']] },
    { type: 'title', text: '페세타는 2026년에 얼마의 가치가 있나요', level: 2 },
    { type: 'paragraph', html: 'CPI 조정 결과는 유로 환산과 다른 질문에 답합니다. 선택한 금액이 기준 연도에 살 수 있었던 평균 상품과 서비스를 2026년에 구매하려면 필요한 유로를 추정합니다. 2026년 기준은 현재까지의 최신 자료를 사용하며 완료된 연평균은 아닙니다.' },
    { type: 'table', headers: ['결과', '의미'], rows: [['고정 환산', '공식 환율에 따른 정확한 명목 유로 금액.'], ['CPI 조정 가치', '2026년의 비슷한 평균 구매력에 대한 추정치.'], ['차이', '고정 환산과 CPI 추정치 사이의 간격.']] },
    { type: 'title', text: '옛 페세타 금액을 계산하는 방법', level: 2 },
    { type: 'list', items: ['영수증, 지폐, 동전 또는 문서의 금액을 입력합니다.', '금액이 사용되거나 지급된 연도를 선택합니다.', '직접적인 유로 환산에는 고정 환산을 사용합니다.', '역사적 구매력 맥락에는 CPI 값을 사용합니다.', '차이는 인플레이션의 맥락으로 보고 개인 가격 예측으로 사용하지 않습니다.'] },
    { type: 'title', text: '동전과 지폐의 수집 가치는 자동으로 계산되지 않습니다', level: 2 },
    { type: 'paragraph', html: '이 도구는 통화와 인플레이션을 계산하며 화폐 감정은 하지 않습니다. 희귀 동전이나 오래된 지폐의 시장 가치는 연도, 상태, 희소성, 수요에 따라 달라질 수 있습니다.' },
    { type: 'tip', title: '연도는 구매력을 바꾸지만 환율은 바꾸지 않습니다', html: '공식 환율은 1유로당 166.386페세타로 유지됩니다. 기준 연도에 따라 달라지는 것은 CPI 비교이며 평균 소비 바구니를 설명합니다.' },
  ],
  faq, bibliography, howTo, schemas,
};
