import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationPurchasingPowerUI } from '../ui';

const title = '인플레이션과 구매력 추이 계산기';
const description = '연간 인플레이션 가정에 따라 구매력을 유지하는 데 필요한 금액과 현금의 실질 가치가 시간에 따라 어떻게 달라지는지 확인합니다.';
const ui: InflationPurchasingPowerUI = {
  amountLabel: '시작 금액', amountHelp: '계산 전체에서 같은 통화를 사용하세요', inflationLabel: '연간 인플레이션율 (%)', inflationHelp: '예측이 아닌 시나리오 가정입니다', yearsLabel: '기간 (년)', yearsHelp: '1년에서 80년까지 선택', cashFlowLabel: '연간 현금 흐름', cashFlowHelp: '매년 잔액에 더하거나 잔액에서 뺍니다', cashFlowModeLabel: '현금 흐름 시나리오', noCashFlowOption: '반복 흐름 없음', contributionOption: '매년 추가', withdrawalOption: '매년 인출', costEquivalentLabel: '종료 시 비용 환산액', realValueLabel: '오늘의 돈으로 본 종료 가치', nominalBalanceLabel: '종료 명목 잔액', purchasingPowerLossLabel: '잃은 구매력', todayLabel: '오늘', endLabel: '기간 종료', costLineLabel: '같은 장바구니를 위한 비용', realLineLabel: '변하지 않은 현금의 구매력', balanceLineLabel: '오늘의 돈으로 본 시나리오 잔액', chartDescription: '상승하는 비용, 하락하는 구매력, 시나리오 잔액을 보여 주는 인플레이션 추이', chartNote: '모든 선은 시작 금액과 비교합니다', milestoneTitle: '같은 통화의 주요 시점', yearHeader: '연도', costHeader: '비용 환산액', realHeader: '변하지 않은 현금', balanceHeader: '실질 잔액', methodTitle: '추이 계산 방법', methodText: '비용 환산액은 시작 금액에 (1 + 연간 인플레이션율)을 연수만큼 거듭제곱해 곱한 값입니다. 변하지 않은 현금의 가치는 시작 금액을 같은 계수로 나눈 값입니다. 추가 금액은 매년 말에 더하고 인출 금액은 빼며 잔액은 0 아래로 내려가지 않습니다.', limitationText: '이 도구는 투명한 시나리오 모델이며 과거 CPI 조회, 투자 수익 예측 또는 개인 금융 자문이 아닙니다. 가정의 장바구니는 발표된 소비자물가지수와 다를 수 있고 실제 인플레이션은 해마다 달라질 수 있습니다.', emptyMessage: '양수 금액, -100%보다 큰 비율, 1에서 80 사이의 정수 연도, 음수가 아닌 현금 흐름을 입력하세요.', contributionSummary: '점선은 투자 수익을 포함하지 않고 반복 추가 후 잔액을 오늘의 돈으로 환산한 값입니다.', withdrawalSummary: '점선은 투자 수익을 포함하지 않고 반복 인출 후 잔액을 오늘의 돈으로 환산한 값입니다.', noCashFlowSummary: '실선은 인플레이션만 보여 줍니다. 하나는 같은 장바구니의 미래 비용을, 다른 하나는 변하지 않은 현금으로 살 수 있는 양을 나타냅니다.', depletionWarning: '인출 시나리오는 {year}년에 0이 되며 이후 연도도 0으로 유지됩니다.', scenarioNote: '시나리오만', currencyHint: '시작 금액과 같은 통화', yearsSuffix: '년', amountSuffix: '시작 금액과 같은 통화',
};
const faq = [
  { question: '인플레이션은 구매력을 어떻게 낮추나요?', answer: '일반 물가 수준이 오르면 같은 금액으로 살 수 있는 상품과 서비스가 줄어듭니다. 계산기는 변하지 않은 현금을 복리 인플레이션 계수로 나누어 이 효과를 보여 줍니다.' },
  { question: '비용 환산액과 실질 가치의 차이는 무엇인가요?', answer: '비용 환산액은 시작 금액이 오늘 살 수 있는 같은 장바구니를 미래에 사는 데 필요한 금액입니다. 실질 가치는 변하지 않은 현금이 기간 말에 살 수 있는 양을 오늘의 돈으로 표현합니다.' },
  { question: '추가와 인출 시나리오에는 무엇이 포함되나요?', answer: '매년 말 현금 흐름을 더하거나 뺍니다. 투자 수익, 세금, 수수료, 이자는 포함하지 않으며 인출 잔액은 0 아래로 내려가지 않습니다.' },
  { question: '인플레이션율은 예측인가요?', answer: '아닙니다. 민감도를 살펴보기 위한 가정입니다. 실제 인플레이션은 달라질 수 있고 발표된 물가지수가 가정의 지출 패턴과 맞지 않을 수 있습니다.' },
];
const howTo = [
  { name: '시작 금액 입력', text: '미래 구매력을 살펴볼 금액을 입력하고 한 가지 통화를 유지하세요.' },
  { name: '인플레이션 시나리오 설정', text: '연간 비율과 정수 기간을 입력하세요. 여러 비율을 비교해 민감도를 확인하세요.' },
  { name: '선택적 현금 흐름 추가', text: '매년 추가 또는 매년 인출을 선택하고 금액을 입력하세요. 인플레이션만 보려면 반복 흐름 없음을 선택하세요.' },
  { name: '곡선과 주요 시점 읽기', text: '종료 비용과 오늘의 돈으로 본 종료 가치를 비교하고 주요 시점 표를 확인하세요.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'ko' };
const seo = [
  { type: 'title' as const, text: '인플레이션 추이로 구매력을 계획하세요', level: 2 },
  { type: 'paragraph' as const, html: '<p>인플레이션은 물가 수준을 바꾸므로 그대로인 금액은 미래에 더 적은 것을 살 수 있습니다. 이 계산기는 같은 장바구니에 필요한 금액과 변하지 않은 현금이 보존하는 구매력을 나누어 보여 줍니다.</p>' },
  { type: 'paragraph' as const, html: '<p>시작 금액, 연간 인플레이션 가정, 기간을 입력하세요. 매년 비율을 복리로 적용해 상승하는 비용 환산액과 하락하는 현금 구매력을 표시합니다.</p>' },
  { type: 'title' as const, text: '두 가지 핵심 읽기', level: 3 },
  { type: 'table' as const, headers: ['항목', '공식', '답하는 질문'], rows: [['비용 환산액', '시작 금액 x (1 + 인플레이션)^연수', '같은 장바구니에 미래 얼마가 필요한가요?'], ['변하지 않은 현금의 구매력', '시작 금액 / (1 + 인플레이션)^연수', '오늘의 돈으로 무엇을 살 수 있나요?'], ['잃은 구매력', '(1 - 1 / 물가 계수) x 100', '처음 구매력 중 얼마가 사라졌나요?']] },
  { type: 'paragraph' as const, html: '<p>연 3% 인플레이션이면 1,000은 10년 뒤 약 1,344의 비용 환산액이 됩니다. 1,000을 현금으로 그대로 두면 구매력은 오늘의 돈으로 약 744입니다.</p>' },
  { type: 'title' as const, text: '복리가 중요한 이유', level: 3 },
  { type: 'paragraph' as const, html: '<p>매년의 물가가 다음 해의 기준이 되므로 연간 비율은 누적됩니다. 3%가 10년 이어지는 것은 단순한 30%가 아니라 1.03의 10제곱, 약 1.344입니다.</p>' },
  { type: 'list' as const, items: ['낮은 비율, 중간 비율, 높은 비율을 시험하세요.', '주요 시점 표로 크게 비싸지는 지출을 찾으세요.', '비용 환산액을 저축 목표, 소득 또는 연금과 비교하세요.', '가정과 날짜를 기록하고 정보가 바뀌면 업데이트하세요.'] },
  { type: 'title' as const, text: '추가와 인출 넣기', level: 3 },
  { type: 'paragraph' as const, html: '<p>현금 흐름 시나리오는 인플레이션 효과를 숨기지 않고 저축이나 지출 계획을 살펴보게 합니다. 추가는 매년 말 명목 잔액에 더하고 인출은 빼며, 잔액이 소진되면 0에서 멈춥니다.</p>' },
  { type: 'paragraph' as const, html: '<p>점선 잔액은 같은 인플레이션 계수로 오늘의 돈으로 환산합니다. 투자 전망이 아니므로 이자, 시장 수익, 세금, 수수료, 추가 금액의 성장은 포함하지 않습니다.</p>' },
  { type: 'tip' as const, title: '약속이 아니라 범위로 보세요', html: '<p>물가지수는 평균 장바구니를 나타내지만 주거비, 에너지, 식비, 의료비는 가정마다 다르게 움직일 수 있습니다. 여러 비율을 시험하세요.</p>' },
  { type: 'title' as const, text: '추이가 알려 주지 않는 것', level: 3 },
  { type: 'paragraph' as const, html: '<p>이 도구는 과거 CPI 데이터를 가져오거나 인플레이션을 예측하거나 투자를 추천하지 않습니다. 해마다 달라지는 비율, 자산 수익, 부채 이자, 불규칙한 현금 흐름도 계산하지 않습니다.</p>' },
  { type: 'paragraph' as const, html: '<p>중요한 결정이라면 적절한 물가지수, 실제 지출 기록, 이용하려는 상품이나 소득의 조건과 결과를 비교하세요. 수학적으로 일관된 결과도 가정의 현실을 정확히 설명하지 않을 수 있습니다.</p>' },
];
export const content: ToolLocaleContent<InflationPurchasingPowerUI> = { slug: 'inflation-purchasing-power-timeline-calculator', title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo };
