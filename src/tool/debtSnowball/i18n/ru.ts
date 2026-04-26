import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'metod-snezhnogo-koma-kalkulyator-dolgov';
const title = 'Калькулятор метода "Снежного кома": План погашения долгов 2026';
const description = 'Рассчитайте дату своей финансовой свободы с помощью метода "снежного кома" Дейва Рамзи. Организуйте свои долги и визуализируйте план ежемесячных платежей.';

const faqData = [
  {
    question: 'Что такое метод "снежного кома"?',
    answer: 'Это стратегия погашения долгов, которая заключается в выплате долгов в порядке от самого маленького до самого большого баланса, независимо от процентной ставки. Она фокусируется на психологической победе от быстрого закрытия небольших счетов.',
  },
  {
    question: 'Почему бы не сортировать по процентной ставке (метод "Лавины")?',
    answer: 'Математически, выплата сначала самого высокого процента экономит больше денег. Однако многие люди бросают, потому что не видят мгновенных результатов. "Снежный ком" ставит в приоритет мотивацию.',
  },
  {
    question: 'Нужно ли иметь сбережения перед началом плана?',
    answer: 'Рекомендуется иметь "Начальный чрезвычайный фонд" (около 1000 евро) перед тем, как атаковать долги. Это предотвратит повторное использование кредитной карты в случае непредвиденных обстоятельств.',
  },
  {
    question: 'Какие долги мне следует включить в калькулятор?',
    answer: 'Все потребительские долги: кредитные карты, потребительские кредиты, автокредиты, просроченные счета. Ипотеку обычно оставляют на более поздний этап.',
  },
];

const howToData = [
  {
    name: 'Составьте список долгов',
    text: 'Запишите все свои долги, указав текущий остаток баланса и минимальный ежемесячный платеж.',
  },
  {
    name: 'Определите дополнительный бюджет',
    text: 'Рассчитайте, сколько дополнительных денег вы можете выделять каждый месяц сверх минимальных платежей.',
  },
  {
    name: 'Сортируйте и расставляйте приоритеты',
    text: 'Калькулятор автоматически отсортирует долги от меньшего к большему. Платите минимум по всем, кроме самого маленького.',
  },
  {
    name: 'Запустите "каскад"',
    text: 'Когда вы закроете самый маленький долг, возьмите все деньги, которые вы направляли на него, и добавьте их к платежу по следующему долгу в списке.',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Калькулятор долгов методом "Снежного кома": Руководство 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Жить в долгах тяжело. <strong>Метод "снежного кома"</strong> доказал свою эффективность как одна из лучших стратегий для восстановления финансовой свободы.',
    },
  ],
  ui: {
    labelTitle: 'Полная свобода',
    labelDescription: 'Начните свой путь к финансовой свободе с помощью самого эффективного психологического метода.',
    labelExtraBudget: 'ЕЖЕМЕСЯЧНЫЙ ДОП. БЮДЖЕТ',
    labelExtraBudgetHelp: 'Дополнительные деньги сверх минимальных платежей.',
    labelSnowballMethod: 'СНЕЖНЫЙ КОМ',
    labelAvalancheMethod: 'ЛАВИНА',
    labelAddNewDebt: 'ДОБАВИТЬ НОВЫЙ ДОЛГ',
    labelDebtName: 'Название',
    labelDebtNamePlaceholder: 'Напр: Visa',
    labelDebtBalance: 'СКОЛЬКО ВЫ ДОЛЖНЫ',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'МИН. ПЛАТЕЖ',
    labelInterestRate: 'ПРОЦЕНТНАЯ СТАВКА',
    labelInterestHelp: 'ГОДОВАЯ',
    labelAddButton: 'ДОБАВИТЬ В ПЛАН',
    labelClearData: 'Очистить настройки',
    labelClearDataConfirm: 'Очистить план?',
    labelDeleteDebt: 'Удалить',
    labelDebtInventory: 'Инвентарь долгов',
    labelFreedomDate: 'ДАТА ФИНАНСОВОЙ СВОБОДЫ',
    labelActiveMethod: 'МЕТОД',
    labelMonthsRemaining: 'ОСТАЛОСЬ МЕСЯЦЕВ',
    labelTotalInterest: 'ИТОГО ПРОЦЕНТОВ',
    labelTotalPaid: 'ИТОГО ВЫПЛАЧЕНО',
    labelInterestSaved: 'ЭКОНОМИЯ НА ПРОЦЕНТАХ',
    labelYourStrategy: 'Ваша пошаговая стратегия',
    labelStrategyHelp: 'На каждом шаге отображается общая сумма платежа.',
    labelPriority: 'ВЫСШИЙ ПРИОРИТЕТ',
    labelStep: 'ШАГ',
    labelAfterPaying: 'ПОСЛЕ ПОКАШЕНИЯ ПРЕДЫДУЩЕГО',
    labelMonthlyPayment: 'Ежемесячный платеж',
    labelDetailedAmortization: 'Детализация амортизации',
    labelExportCSV: 'Экспорт в .CSV',
    labelDate: 'Дата',
    labelStartingBalance: 'Начальный баланс',
    labelInterest: 'Проценты',
    labelAmortization: 'Амортизация',
    labelTotalMonth: 'Итого за месяц',
    labelRemaining: 'Остаток',
    labelFree: 'СВОБОДЕН',
    labelDebtInfinite: 'БЕСКОНЕЧНЫЙ ДОЛГ',
    labelInvalidInput: 'Укажите общий баланс и мин. платеж',
    labelEmptyStateTitle: 'Начните свой план',
    labelEmptyStateDescription: 'Ваши долги не навсегда. Добавьте свои долги.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'ru-RU',
  },
};
