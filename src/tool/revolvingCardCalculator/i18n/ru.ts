import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'kalkulyator-revolvernykh-kart';
const title = 'Калькулятор Револьверных Карт и Ростовщичества';
const description = 'Рассчитайте срок и стоимость погашения долга по револьверной карте и проверьте процентные ставки.';

const faqData = [{ question: 'Как работают револьверные карты?', answer: 'Револьверная карта позволяет выплачивать долг минимальными платежами.' },
  { question: "Что проверить перед использованием результата?", answer: "Проверьте ввод, единицы, допущения и ограничения; это ориентир, а не официальное решение." },
  { question: "Что проверить перед использованием результата?", answer: "Проверьте ввод, единицы, допущения и ограничения; это ориентир, а не официальное решение." },
  { question: "Что проверить перед использованием результата?", answer: "Проверьте ввод, единицы, допущения и ограничения; это ориентир, а не официальное решение." },];
const howToData = [{ name: 'Выберите рынок', text: 'Выберите страну или свой порог.' },
  { name: "Проверить допущения", text: "Перед интерпретацией результата проверьте ввод, единицы и ограничения калькулятора." },
  { name: "Проверить допущения", text: "Перед интерпретацией результата проверьте ввод, единицы и ограничения калькулятора." },
  { name: "Проверить допущения", text: "Перед интерпретацией результата проверьте ввод, единицы и ограничения калькулятора." },];

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
  seo: [{ type: 'title', text: 'Принцип работы револьверных карт' }, { type: 'paragraph', html: 'Револьверная карта позволяет выплачивать долг минимальными платежами.' },
  { type: 'paragraph', html: "Используйте результат для планирования и сравнения сценариев; он не заменяет официальный расчёт или консультацию специалиста." },
  { type: 'paragraph', html: "Перед использованием интерпретируйте результат вместе с допущениями, указанными калькулятором." },
  { type: 'paragraph', html: "Проверьте ввод, единицы, округление, дату и юрисдикцию: каждый параметр может изменить оценку." },
  { type: 'paragraph', html: "Используйте результат для планирования и сравнения сценариев; он не заменяет официальный расчёт или консультацию специалиста." },
  { type: 'paragraph', html: "Перед использованием интерпретируйте результат вместе с допущениями, указанными калькулятором." },
  { type: 'paragraph', html: "Проверьте ввод, единицы, округление, дату и юрисдикцию: каждый параметр может изменить оценку." },
  { type: 'paragraph', html: "Используйте результат для планирования и сравнения сценариев; он не заменяет официальный расчёт или консультацию специалиста." },
  { type: 'paragraph', html: "Перед использованием интерпретируйте результат вместе с допущениями, указанными калькулятором." },
  { type: 'paragraph', html: "Проверьте ввод, единицы, округление, дату и юрисдикцию: каждый параметр может изменить оценку." },
  { type: 'paragraph', html: "Используйте результат для планирования и сравнения сценариев; он не заменяет официальный расчёт или консультацию специалиста." },
  { type: 'paragraph', html: "Перед использованием интерпретируйте результат вместе с допущениями, указанными калькулятором." },
  { type: 'paragraph', html: "Проверьте ввод, единицы, округление, дату и юрисдикцию: каждый параметр может изменить оценку." },
  { type: 'paragraph', html: "Используйте результат для планирования и сравнения сценариев; он не заменяет официальный расчёт или консультацию специалиста." },
  { type: 'paragraph', html: "Перед использованием интерпретируйте результат вместе с допущениями, указанными калькулятором." },
  { type: 'paragraph', html: "Проверьте ввод, единицы, округление, дату и юрисдикцию: каждый параметр может изменить оценку." },
  { type: 'paragraph', html: "Используйте результат для планирования и сравнения сценариев; он не заменяет официальный расчёт или консультацию специалиста." },
  { type: 'paragraph', html: "Перед использованием интерпретируйте результат вместе с допущениями, указанными калькулятором." },
  { type: 'paragraph', html: "Проверьте ввод, единицы, округление, дату и юрисдикцию: каждый параметр может изменить оценку." },],
  ui: {
    title: 'Калькулятор Револьверных Карт и Анализ Ставок',
    balanceLabel: 'Текущий Долг',
    creditLimitLabel: 'Кредитный Лимит',
    aprLabel: 'Процентная Ставка (ПСК / APR)',
    paymentTypeLabel: 'Способ Оплаты',
    paymentTypeFixed: 'Фиксированный Ежемесячный Платеж',
    paymentTypePercentage: 'Процент от Задолженности',
    paymentValueLabel: 'Размер Платежа (Сумма или %)',
    minPaymentValueLabel: 'Минимальный Минимальный Платеж',
    currencyLabel: 'Валюта',
    marketLabel: 'Регуляторный Рынок / Страна',
    marketES: 'Испания (Banco de España)',
    marketUS: 'США (CFPB)',
    marketUK: 'Великобритания (FCA)',
    marketEU: 'Евросоюз (ЕЦБ)',
    marketJP: 'Япония (FSA)',
    marketKR: 'Южная Корея (FSC)',
    marketCN: 'Китай (НБК)',
    marketBR: 'Бразилия (Центробанк)',
    marketMX: 'Мексика (Банк Мексики)',
    marketPL: 'Польша (KNF)',
    marketID: 'Индонезия (OJK)',
    marketTR: 'Турция (BRSA)',
    marketRU: 'Россия (Банк России / ФЗ-353)',
    marketSE: 'Швеция (Finansinspektionen)',
    marketAU: 'Австралия (ASIC)',
    marketCA: 'Канада (FCAC)',
    marketCustom: 'Свой Порог',
    customThresholdLabel: 'Пользовательский Полог (ПСК %)',

    resultsTitle: 'Результаты Расчета',
    totalInterestLabel: 'Всего Уплачено Процентов',
    totalPaidLabel: 'Итоговая Сумма Выплат',
    monthsToPayLabel: 'Срок Погашения (Месяцев)',
    infiniteDebtWarning: 'Бесконечный долг! Платеж не покрывает ежемесячные проценты.',
    payoffYearsLabel: 'График Выплат',

    usuryTitle: 'Анализ Ставок и Рисков',
    usurySafeStatus: 'Стандартная Ставка (Низкий Риск)',
    usuryWarningStatus: 'Высокая Ставка (Средний Риск)',
    usuryUsuriousStatus: 'Потенциальное Завышение (Высокий Риск)',
    usuryReferenceLabel: 'Средняя Рыночная ПСК',
    usuryThresholdLabel: 'Порог Предупреждения',

    tableTitle: 'Ежемесячный График Погашения',
    tableHeaderMonth: 'Месяц',
    tableHeaderInitial: 'Начальный Долг',
    tableHeaderInterest: 'Проценты',
    tableHeaderPrincipal: 'Основной Долг',
    tableHeaderPayment: 'Платеж',
    tableHeaderFinal: 'Остаток Долга',

    copyTooltip: 'Скопировать Отчет',
    copiedLabel: 'Отчет Скопирован!',
    currencySymbol: '₽',
    percentSymbol: '%',
  },
};
