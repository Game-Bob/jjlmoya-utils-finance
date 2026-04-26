import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'kalkulyator-sudebnykh-poshlin-ispaniya';
const title = 'Калькулятор судебных пошлин Испания';
const description = 'Рассчитайте точную сумму испанских судебных пошлин для компаний согласно Закону 10/2012. Симулятор для формы 696.';

const faqData = [
  {
    question: 'Освобождены ли физические лица от уплаты судебных пошлин?',
    answer: 'Да, с 2016 года физические лица в Испании полностью освобождены от уплаты судебных пошлин во всех юрисдикциях.',
  },
  {
    question: 'Каков максимальный размер судебной пошлины?',
    answer: 'Переменная часть ограничена максимум 10 000 евро. С учетом фиксированной части общая сумма может быть выше в зависимости от типа процедуры.',
  },
  {
    question: 'Что такое форма 696?',
    answer: 'Это официальная форма Налогового агентства Испании (AEAT), используемая для самостоятельного расчета и уплаты пошлины за осуществление юрисдикционных полномочий.',
  },
  {
    question: 'Нужно ли платить пошлину в уголовном процессе?',
    answer: 'Нет, в Испании не существует судебных пошлин для процессов в уголовной юрисдикции.',
  },
  {
    question: 'Как рассчитывается переменная часть пошлины?',
    answer: 'Переменная часть составляет 0,5% от суммы иска до 1 миллиона евро. Сверх этой суммы — 0,25%. Максимум — 10 000 евро.',
  },
];

const howToData = [
  {
    name: 'Выберите плательщика',
    text: 'Укажите, являетесь ли вы физическим лицом (освобождены) или юридическим лицом (компания).',
  },
  {
    name: 'Выберите юрисдикцию и процесс',
    text: 'Выберите тип юрисдикции (гражданская, административная или социальная) и тип процедуры.',
  },
  {
    name: 'Введите сумму иска',
    text: 'Укажите общую сумму требований в иске. Для социальной юрисдикции это поле не применяется.',
  },
  {
    name: 'Посмотрите расчет',
    text: 'Получите автоматический расчет фиксированной, переменной и общей суммы для формы 696.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Калькулятор судебных пошлин Испании 2026: Полное руководство',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Калькулятор судебных пошлин</strong> — это технический инструмент, предназначенный для точного определения налоговых расходов на правосудие в Испании согласно Закону 10/2012.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Калькулятор судебных пошлин',
    labelDescription: 'Рассчитайте точную сумму формы 696 по юрисдикции и процедуре. Для компаний и профессионалов.',
    labelLegalParameters: 'Юридические параметры',
    labelEntityType: 'Плательщик',
    labelJurisdiction: 'Юрисдикция',
    labelProcedure: 'Тип процесса',
    labelClaimAmount: 'Сумма иска',
    labelEstimatedSettlement: 'Расчетная сумма',
    labelExemptSubject: 'Освобожденное лицо',
    labelFixedQuote: 'Фиксированная часть (процессуальная)',
    labelVariableQuote: 'Переменная часть (0,5% / 0,25%)',
    labelTaxableBase: 'Налогооблагаемая база',
    labelCopySettlement: 'Копировать расчет',
    labelEntityJuridica: 'Юридическое лицо (ООО, АО)',
    labelEntityFisica: 'Физическое лицо (освобождено)',
    labelCivilOrder: 'Гражданская юрисдикция',
    labelAdministrativeOrder: 'Административная юрисдикция',
    labelSocialOrder: 'Социальная юрисдикция',
    labelModel696: 'Форма 696 AEAT',
    labelOrdinary: 'Обычный процесс',
    labelVerbal: 'Устный процесс',
    labelExecutive: 'Исполнительное производство',
    labelAppeal: 'Апелляция',
    labelCassation: 'Кассация',
    labelAbbreviated: 'Упрощенный процесс',
    labelSupplication: 'Жалоба',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ru-RU',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
