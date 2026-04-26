import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Начальные Инвестиции',
  labelFinalValue: 'Конечная Стоимость / Текущий Баланс',
  labelTimeSelection: 'Срок Инвестирования',
  labelYears: 'Лет',
  labelMonths: 'Месяцев',
  labelDays: 'Дней',
  labelROI: 'Рентабельность Инвестиций (ROI)',
  labelCAGR: 'Среднегодовой Рост (CAGR)',
  labelNetProfit: 'Чистая Прибыль',
  labelLinearGrowth: 'Линейный Рост (Оценка)',
  labelExponentialGrowth: 'Сложный Рост (CAGR)',
  labelPositiveResult: 'Прибыльная Инвестиция',
  labelNegativeResult: 'Убыточная Позиция',
  labelCopyResult: 'Копировать Результаты',
  labelCopied: 'Скопировано!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'kalkulyator-rentabelnosti-investicij-roi-cagr',
  title: 'Калькулятор Рентабельности: ROI и CAGR',
  description: 'Анализируйте эффективность ваших инвестиций. Рассчитайте ROI и CAGR, чтобы понять вашу реальную годовую прибыль.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI против CAGR: Какой показатель лучше?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> показывает общий процент прибыли, но игнорирует время. <strong>CAGR</strong> лучше подходит для долгосрочного анализа.',
    },
  ],
  faq: [
    {
      question: 'Какой CAGR считается хорошим?',
      answer: 'Исторически индекс S&P 500 приносит около 7-10% годовых.',
    },
  ],
  bibliography: [
    {
      name: 'Определение ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Введите начальный капитал',
      text: 'Введите сумму, которую вы инвестировали изначально.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Калькулятор Рентабельности',
      description: 'Рассчитайте ROI и CAGR.',
    },
  ],
};
