import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = 'kalkulyator-zarplaty-brutto-netto-rashody-rabotodatelya-ispaniya';
const title = "Калькулятор зарплаты брутто, нетто и расходов работодателя в Испании 2026";
const description = "Рассчитайте чистую зарплату, удержание IRPF, взносы работника и полные расходы работодателя в Испании по правилам 2026 года.";

const faq = [
  {
    "question": "Сколько стоит сотрудник компании в Испании?",
    "answer": "Компания платит зарплату брутто плюс свои взносы в социальное страхование."
  },
  {
    "question": "Как рассчитать чистую зарплату из брутто в Испании?",
    "answer": "Из годового брутто вычитаются взносы работника в соцстрах и налог IRPF."
  },
  {
    "question": "Меняет ли выбор 12 или 14 выплат годовую зарплату?",
    "answer": "Нет. Калькулятор сохраняет ту же годовую сумму брутто."
  },
  {
    "question": "Какие ставки соцстрахования 2026 года включены?",
    "answer": "Включены взносы на больничные, безработицу, обучение, MEI, FOGASA и несчастные случаи."
  },
  {
    "question": "Что происходит при превышении максимальной базы взносов?",
    "answer": "Сверх максимальной базы 2026 года (5 101,20 €/мес) применяется солидарный взнос."
  },
  {
    "question": "Применим ли этот калькулятор за пределами Испании?",
    "answer": "Нет. Он предназначен только для Испании на 2026 год."
  },
  {
    "question": "Отправляются ли данные о зарплате на сервер?",
    "answer": "Нет. Все расчеты выполняются локально в браузере."
  }
];

const howTo = [
  {
    "name": "Введите зарплату брутто",
    "text": "Выберите годовой или месячный ввод и укажите сумму."
  },
  {
    "name": "Укажите параметры испанской зарплаты",
    "text": "Выберите 12/14 выплат, тип контракта, налог IRPF и взнос от несчастных случаев."
  },
  {
    "name": "Изучите структуру зарплаты",
    "text": "Сравните нетто, удержания работника и взносы работодателя."
  },
  {
    "name": "Переключите период отображения",
    "text": "Просматривайте годовые итоги или среднее значение за выплату."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "ru",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Показатель зарплаты брутто",
    "labelGrossSalaryHint": "Сумма зарплаты",
    "labelAnnual": "В год",
    "labelMonthly": "В месяц",
    "labelPaySchedule": "График выплат",
    "labelTwelvePayments": "12 выплат",
    "labelFourteenPayments": "14 выплат",
    "labelContract": "Тип контракта",
    "labelPermanent": "Бессрочный",
    "labelTemporary": "Временный",
    "labelIrpfRate": "Удержание подоходного налога (IRPF)",
    "labelIrpfHint": "Используйте ставку налоговой службы, оффера или расчетного листка",
    "labelRiskRate": "Страховой взнос от несчастных случаев (AT и EP)",
    "labelRiskHint": "Ставка работодателя от несчастных случаев на производстве",
    "labelOfficePreset": "Офис 1,50%",
    "labelTradePreset": "Торговля / Продажи 2,00%",
    "labelConstructionPreset": "Строительство 6,70%",
    "labelNetCore": "Ядро чистой зарплаты (нетто)",
    "labelEmployeeDeductions": "Удержания работника",
    "labelDeductionsFormula": "IRPF плюс социальное страхование работника",
    "labelEmployerHalo": "Взносы работодателя",
    "labelEmployerCost": "Общие расходы работодателя",
    "labelAnnualView": "За год",
    "labelPerPaymentView": "В среднем за выплату",
    "labelGross": "Зарплата брутто",
    "labelIrpf": "Удержание IRPF",
    "labelEmployeeSocialSecurity": "Соцстрахование работника",
    "labelContributionBase": "Ежемесячная база взносов",
    "labelCostMultiplier": "Коэффициент расходов к брутто",
    "labelWorkerKeeps": "Доля нетто от общих расходов",
    "labelLeanGap": "Минимальный уровень расходов",
    "labelTypicalGap": "Стандартный уровень расходов",
    "labelWideGap": "Расширенный уровень расходов",
    "labelModelScope": "Только Испания. Общий режим 2026 года, полная занятость. Расчеты являются ориентировочными.",
    "labelReset": "Сбросить пример",
    "labelInvalid": "Введите корректную годовую зарплату и соблюдайте допустимые диапазоны ставок.",
    "labelMinimumSalary": "Минимальная зарплата 2026 года в Испании составляет 17 094 € в год.",
    "labelPrivacy": "Рассчитывается локально в вашем браузере"
},
  seo: [
    { type: 'title', text: "От зарплаты брутто к реальным расходам компании в Испании", level: 2 },
    { type: 'paragraph', html: "Рассчитайте чистую зарплату, удержание IRPF, взносы работника и полные расходы работодателя в Испании по правилам 2026 года." },
    { type: 'title', text: "Формула расходов работодателя в Испании", level: 2 },
    { type: 'paragraph', html: "Компания платит зарплату брутто плюс свои взносы в социальное страхование." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Ядро чистой зарплаты (нетто)"], ['Employer Cost', "Общие расходы работодателя"]] },
    { type: 'title', text: "Ставки социального страхования в Испании на 2026 год", level: 2 },
    { type: 'paragraph', html: "Включены взносы на больничные, безработицу, обучение, MEI, FOGASA и несчастные случаи." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Офис 1,50%", '1.50%'], ["Торговля / Продажи 2,00%", '2.00%'], ["Строительство 6,70%", '6.70%']] },
    { type: 'title', text: "Лимиты взносов и высокие зарплаты", level: 2 },
    { type: 'paragraph', html: "Сверх максимальной базы 2026 года (5 101,20 €/мес) применяется солидарный взнос." },
    { type: 'title', text: "Разница между 12 и 14 выплатами", level: 2 },
    { type: 'paragraph', html: "Нет. Калькулятор сохраняет ту же годовую сумму брутто." },
    { type: 'tip', title: "График выплат", html: "Выберите 12/14 выплат, тип контракта, налог IRPF и взнос от несчастных случаев." },
    { type: 'title', text: "Ограничения данного расчета зарплаты в Испании", level: 2 },
    { type: 'paragraph', html: "Только Испания. Общий режим 2026 года, полная занятость. Расчеты являются ориентировочными." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
