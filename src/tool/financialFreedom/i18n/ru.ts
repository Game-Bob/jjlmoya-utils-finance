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

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'kalkulyator-finansovoj-svobody-zapas-vyzhivaniya',
  title: 'Калькулятор Финансовой Свободы и Запаса Выживания',
  description: 'Рассчитайте точно, на сколько хватит ваших сбережений. Наш инструмент поможет визуализировать вашу финансовую независимость.',
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
  faq: [
    {
      question: 'Какой запас выживания считается хорошим?',
      answer: 'Эксперты рекомендуют минимум от 3 до 6 месяцев. Для реальной свободы стремитесь к 2 годам и более.',
    },
  ],
  bibliography: [
    {
      name: 'Принципы движения FIRE',
      url: 'https://ru.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Введите общие сбережения',
      text: 'Введите общую сумму наличных или ликвидных активов.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Калькулятор Финансовой Свободы',
      description: 'Рассчитайте длительность ваших сбережений.',
    },
  ],
};
