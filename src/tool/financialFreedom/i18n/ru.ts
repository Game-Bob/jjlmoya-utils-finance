import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Общие Сбережения',
  labelExpenses: 'Текущие Расходы',
  labelMonthly: 'В месяц',
  labelYearly: 'В год',
  labelTimeRemaining: 'Ваш Запас Выживания',
  labelYears: 'Лет',
  labelMonths: 'Месяцев',
  labelDays: 'Дней',
  labelYearsShort: 'г',
  labelMonthsShort: 'м',
  labelDaysShort: 'д',
  labelStatus: 'Статус Финансовой Безопасности',
  labelRedZone: 'Красная Зона: Высокий Риск',
  labelYellowZone: 'Желтая Зона: Стабильно',
  labelGreenZone: 'Зеленая Зона: Финансовая Свобода',
  labelBurnRateDaily: 'Ежедневные Траты',
  labelBurnRateMonthly: 'Ежемесячные Траты',
  labelWhatIf: 'Правило 10%',
  labelWhatIfDescription: 'Сократив расходы всего на 10%, вы сможете значительно продлить свой запас выживания.',
  labelGainTime: 'Дополнительное Время',
  labelCopyResult: 'Копировать Сводку',
  labelCopied: 'Скопировано!',
};

const slug = 'kalkulyator-finansovoj-svobody-zapas-vyzhivaniya';
const title = 'Калькулятор Финансовой Свободы и Запаса Выживания';
const description = 'Рассчитайте точно, на сколько хватит ваших сбережений. Наш инструмент поможет визуализировать вашу финансовую независимость.';

const faq = [
  {
    question: 'Какой запас выживания считается хорошим?',
    answer: 'Эксперты рекомендуют минимум от 3 до 6 месяцев. Для реальной свободы стремитесь к 2 годам и более.',
  },
  {
    question: 'Учитывает ли этот калькулятор инфляцию?',
    answer: 'Этот инструмент предназначен для немедленного расчета ликвидных активов относительно текущих расходов.',
  },
  {
    question: 'Что такое "Burn Rate" в личных финансах?',
    answer: 'Burn rate (скорость сжигания) — это темп, с которым вы тратите свои сбережения на покрытие расходов.',
  },
];

const howTo = [
  {
    name: 'Введите общие сбережения',
    text: 'Введите общую сумму наличных или ликвидных активов.',
  },
  {
    name: 'Установите расходы',
    text: 'Укажите, сколько вы тратите в месяц или год.',
  },
  {
    name: 'Анализируйте зону безопасности',
    text: 'Проверьте, находитесь ли вы в красной, желтой или зеленой зоне.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'Что такое финансовый запас выживания?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Запас выживания</strong> (runway) — это время, которое вы можете прожить без новых доходов. Это главный показатель финансовой свободы.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Принципы движения FIRE',
      url: 'https://ru.wikipedia.org/wiki/FIRE_movement',
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
