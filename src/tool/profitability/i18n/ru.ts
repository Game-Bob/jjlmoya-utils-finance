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

const slug = 'kalkulyator-rentabelnosti-investicij-roi-cagr';
const title = 'Калькулятор Рентабельности: ROI и CAGR';
const description = 'Анализируйте эффективность ваших инвестиций. Рассчитайте ROI и CAGR, чтобы понять вашу реальную годовую прибыль.';

const faq = [
  {
    question: 'Какой CAGR считается хорошим?',
    answer: 'Исторически индекс S&P 500 приносит около 7-10% годовых.',
  },
  {
    question: 'Почему CAGR отличается от общего ROI?',
    answer: 'ROI — это общая прибыль без учета времени. CAGR — это среднегодовой темп роста.',
  },
];

const howTo = [
  {
    name: 'Введите начальный капитал',
    text: 'Введите сумму, которую вы инвестировали изначально.',
  },
  {
    name: 'Введите конечную стоимость',
    text: 'Введите текущую рыночную стоимость или цену продажи.',
  },
  {
    name: 'Установите срок',
    text: 'Укажите, как долго вы удерживали инвестицию.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
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
  faq,
  bibliography: [
    {
      name: 'Определение ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
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
