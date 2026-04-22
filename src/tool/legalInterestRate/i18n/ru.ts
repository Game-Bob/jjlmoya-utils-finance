import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'zakonnyj-protsent-ispaniya-2026';
const title = 'Законный процент на деньги';
const description = 'Рассчитайте законный процент, применимый в Испании в 2026 году. Симулятор со ставкой 3,25% согласно Закону о бюджете.';

const faqData = [
  {
    question: 'Каков законный процент на деньги в 2026 году?',
    answer: 'Законный процент на деньги в Испании на 2026 год сохраняется на уровне 3,25%, установленном Законом о государственном бюджете.',
  },
  {
    question: 'Как рассчитываются проценты за просрочку?',
    answer: 'Проценты за просрочку рассчитываются путем умножения непогашенной суммы на 3,25%, на количество дней просрочки и деления на 36.500. Используется база 365 дней.',
  },
  {
    question: 'В чем разница между законным процентом и процентом за просрочку?',
    answer: 'Законный процент — это базовая справочная ставка. Налоговый процент за просрочку (Hacienda) составляет 4,0625%. Процент по коммерческим операциям (около 10,15%) является самым высоким.',
  },
  {
    question: 'Применяется ли он автоматически без условий в договоре?',
    answer: 'Да, законный процент применяется по умолчанию при задержке платежа, если не были оговорены другие проценты.',
  },
  {
    question: 'Что такое процессуальный процент?',
    answer: 'Процессуальный процент составляет 5,25% (законный процент плюс 2 пункта) и применяется с момента вынесения судебного решения о выплате денежных средств.',
  },
];

const howToData = [
  {
    name: 'Введите сумму задолженности',
    text: 'Укажите сумму, на которую нужно начислить проценты (например, неоплаченный счет).',
  },
  {
    name: 'Укажите количество дней просрочки',
    text: 'Укажите, сколько дней длилась или будет длиться задержка платежа. База 365 дней.',
  },
  {
    name: 'Посмотрите результат',
    text: 'Автоматически получите сумму начисленных процентов и общую сумму к выплате по ставке 3,25%.',
  },
  {
    name: 'Посмотрите другие ставки',
    text: 'Посмотрите справочные ставки, такие как налоговая просрочка (4,06%), для дополнительного контекста.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Законный процент 2026 Испания - Калькулятор',
  },
  {
    type: 'paragraph',
    html: '<strong>Законный процент в 2026 году</strong> в Испании составляет <strong>3,25%</strong>. Он применяется автоматически при просрочке платежа, если иное не оговорено.',
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

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто залаваемые вопросы': 'Юридические источники',
  ui: {
    labelTitle: 'Ставка законного процента',
    labelDescription: 'Рассчитайте сумму законных процентов согласно Закону о бюджете 2026 года. Симулятор на уровне 3,25% для Испании.',
    labelBadge: 'Официальный государственный бюллетень (BOE) 2026',
    labelSubtitle: 'Законный процент на деньги сохраняется на уровне 3,25% на 2026 год.',
    labelLegalInterest: 'Законный процент',
    labelDelayInterest: 'Процент за просрочку',
    labelCommercialOperations: 'Коммерческие операции',
    labelActive: 'Действует в 2026 году',
    labelTributary: 'Налоговый (Hacienda)',
    labelFirstHalf: 'Первое полугодие 2026 г.',
    labelQuickCalculator: 'Быстрый калькулятор процентов (3,25%)',
    labelCapital: 'Сумма задолженности',
    labelDays: 'Дни просрочки',
    labelInterestGenerated: 'Начисленные проценты',
    labelTotalToPay: 'Итого к выплате',
    labelFormula: 'Этот калькулятор применяет стандартную формулу простых процентов:',
    labelBase: 'Используется база 365 дней для официального расчета в соответствии с испанскими нормами.',
    labelOfficialRegulation: 'Официальное регулирование',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ru-RU',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
