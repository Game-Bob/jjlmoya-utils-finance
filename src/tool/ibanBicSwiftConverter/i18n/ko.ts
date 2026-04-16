import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-bic-swift-byeon-hwan-gi';
const title = 'IBAN을 BIC SWIFT로 변환 및 은행 검색';
const description = '스페인 IBAN의 BIC/SWIFT 코드를 즉시 확인하세요. 해외 송금을 위한 공식 알고리즘 기반 은행 계좌 유효성 검사 도구입니다.';

const faqData = [
  {
    question: 'BIC 또는 SWIFT 코드란 무엇인가요?',
    answer: '거래 은행의 국제 식별 코드입니다. SEPA(유럽) 지역 외로 송금할 때 자금이 어떤 금융기관으로 가야 하는지 식별하기 위해 반드시 필요합니다.',
  },
  {
    question: '내 은행의 BIC를 어떻게 알 수 있나요?',
    answer: '온라인 뱅킹에서 확인하거나 당사 변환기를 사용하세요. 스페인 은행의 경우 IBAN만 입력하면 은행 코드를 추출하여 해당 BIC를 제공합니다.',
  },
  {
    question: '여기에 IBAN을 입력해도 안전한가요?',
    answer: '완전 안전합니다. 당사 도구는 브라우저 내에서 로컬로 코드를 검증합니다. 고객의 은행 데이터를 외부 서버에 저장하거나 전송하지 않습니다.',
  },
  {
    question: '스페인의 IBAN은 왜 24자리인가요?',
    answer: '국제 표준 규격입니다. 처음 4자리는 국가와 검증 번호를 나타내고, 나머지 20자리는 기존의 은행 계좌 번호 체계입니다.',
  },
];

const howToData = [
  {
    name: 'IBAN 확인',
    text: '은행 카드, 통장 또는 온라인 뱅킹 프로필 화면에서 확인할 수 있습니다.',
  },
  {
    name: '검증기에 입력',
    text: '전체 코드를 입력하거나 붙여넣으세요. 읽기 편하도록 시스템이 자동으로 형식을 맞춤화합니다.',
  },
  {
    name: '변환 버튼 클릭',
    text: '시스템이 Modulo 97 알고리즘을 사용하여 검증 번호가 올바른지 확인합니다.',
  },
  {
    name: '결과 복사',
    text: 'BIC/SWIFT 코드와 은행명이 표시됩니다. 바로 복사하여 해외 송금에 사용하세요.',
  },
];

const bibliographyData = [
  {
    name: 'ISO 13616: IBAN 국제 표준',
    url: 'https://www.iso.org/',
  },
  {
    name: 'SWIFT: 글로벌 BIC 레지스트리',
    url: 'https://www.theswiftcodes.com/',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 출처',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBAN을 BIC/SWIFT로 변환: 은행 코드에 대해 알아야 할 모든 것',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '국제 금융의 복잡한 세계에서 해외 송금 시 <strong>IBAN</strong>과 <strong>BIC</strong>(SWIFT라고도 함)는 매우 중요한 역할을 합니다.',
    },
  ],
  ui: {
    labelTitle: 'IBAN을 BIC / SWIFT로 변환',
    labelDescription: '스페인 은행 계좌의 BIC 코드를 즉시 계산합니다.',
    labelInputIBAN: 'IBAN 입력',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'BIC 코드 확인',
    labelBIC: 'BIC / SWIFT 코드',
    labelCountry: '국가 / 형식',
    labelBank: '거래 은행',
    labelError: '입력한 IBAN이 유효하지 않은 것 같습니다. 숫자를 다시 확인해 주세요.',
    labelCopyButton: '복사',
    labelCopied: '복사됨',
    labelBankNotIdentified: '미식별 은행',
    labelBankOutsideSpain: '스페인 외 지역 은행 (데이터 제한적)',
    labelInvalidIBAN: '유효하지 않은 IBAN',
    labelFormattingOK: '형식 확인 완료',
  },
};
