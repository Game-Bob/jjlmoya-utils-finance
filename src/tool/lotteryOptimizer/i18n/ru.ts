import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'optimizator-loterei-kalkulyator-veroyatnosti';
const title = 'Оптимизатор лотерей и калькулятор вероятности';
const description = 'Проанализируйте свои шансы в рождественской лотерее Испании, Euromillions и Bonoloto. Рассчитайте оптимальное количество билетов и ожидаемую стоимость ставки.';

const faqData = [
  {
    question: 'Что такое математическое ожидание в лотерее?',
    answer: 'Это среднее значение, которое вы ожидаете выиграть на каждый поставленный евро. Почти во всех лотереях математическое ожидание отрицательное (обычно вы теряете 0,50€ на каждый 1€), что означает, что в долгосрочной перспективе заведение всегда выигрывает.',
  },
  {
    question: 'Что лучше: играть на много разных номеров или купить много билетов с одним и тем же номером?',
    answer: 'Если вы хотите выиграть "хоть что-то", диверсификация номеров увеличивает вероятность получения мелких призов. Если вы нацелены на джекпот, игра на один номер дает ту же вероятность, но больший выигрыш в случае успеха.',
  },
  {
    question: 'Действительно ли стоит играть в рождественскую лотерею Испании (El Gordo)?',
    answer: 'С чисто математической точки зрения — нет. Возвращается только 70% от собранных средств. Тем не Aires, вероятность выигрыша главного приза (1 к 100 000) намного выше, чем в Euromillions (1 к 140 миллионам).',
  },
  {
    question: 'Могу ли я улучшить свои шансы с помощью статистики?',
    answer: 'Нет. Розыгрыши лотереи — это независимые случайные процессы. То, что номер выпал вчера, абсолютно никак не влияет на то, выпадет ли он сегодня.',
  },
  {
    question: 'Что означает "сложность" в сравнительной таблице?',
    answer: 'Это относительная мера того, насколько трудно выиграть первый приз. Доступно (менее 200 тыс.), Трудно (менее 20 млн), Экстремально (более 20 млн).',
  },
];

const howToData = [
  {
    name: 'Выберите тип розыгрыша',
    text: 'Выберите рождественскую лотерею, Primitiva, Euromillions или Bonoloto.',
  },
  {
    name: 'Определите сумму инвестиций',
    text: 'Укажите, сколько билетов или ставок вы планируете купить для этого розыгрыша.',
  },
  {
    name: 'Проанализируйте критические вероятности',
    text: 'Посмотрите реальные шансы на выигрыш первого приза по сравнению с мелкими призами или возвратом ставки.',
  },
  {
    name: 'Оцените риск/выгоду',
    text: 'Проверьте математическое ожидание, чтобы понять, сколько денег вы статистически "дарите" за каждый вложенный евро.',
  },
];

const bibliographyData = [
  {
    name: 'Loterías y Apuestas del Estado (SELAE) - Портал прозрачности',
    url: 'https://www.selae.es/',
  },
  {
    name: 'Математика рождественской лотереи - RSME',
    url: 'https://rsme.es/',
  },
  {
    name: 'Критерий Келли и управление рисками',
    url: 'https://www.investopedia.com/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Математика надежды',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Игра в лотерею для многих — это покупка иллюзии за несколько евро. Однако за кулисами скрывается одна из самых увлекательных областей математики: статистика экстремальных вероятностей.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Рождественская лотерея (El Gordo)',
    description: 'Самое крупное распределение призов в мире. Высокая вероятность выиграть что-то.',
  },
  nino: {
    name: 'Лотерея Младенца (El Niño)',
    description: 'В три раза больше шансов на возврат ставки по сравнению с Рождеством.',
  },
  euromillones: {
    name: 'Euromillions',
    description: 'Астрономические призы, почти невозможные вероятности.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'Старейшая лотерея в Испании. Трудно, но дешевле.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'Самая экономичная. Идеально подходит для ежедневной игры с небольшим бюджетом.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  bibliographyTitle: 'Источники и ссылки',
  ui: {
    gameTranslations,
    labelTitle: 'Оптимизатор лотерей',
    labelDescription: 'Сравнивайте розыгрыши, рассчитывайте математическое ожидание и играйте с умом.',
    labelSelectGame: 'Выберите лотерею',
    labelConfigurePlay: 'Настройте свою игру',
    labelAdjustQuantity: 'Отрегулируйте количество билетов, чтобы увидеть свою реальную вероятность.',
    labelTotalInvestment: 'Общие инвестиции',
    labelTickets: 'Количество билетов / ставок',
    labelUnits: 'шт.',
    labelExposureAnalysis: 'Анализ рисков',
    labelSelectLottery: 'Выберите лотерею, чтобы увидеть анализ рисков.',
    labelOptimalCutoff: 'Рекомендуемая точка отсечки',
    labelProbabilitySuccess: 'Вероятность успеха',
    labelExpectedValue: 'Ожидаемая стоимость (EV)',
    labelReturnTheoretical: 'Теоретический возврат за каждую сделанную ставку.',
    labelSocialReturnIndex: 'Индекс социальной рентабельности',
    labelLow: 'Низкий',
    labelMedium: 'Средний',
    labelHigh: 'Высокий',
    labelComparison: 'Сравнение призов',
    labelLottery: 'Лотерея',
    labelCost: 'Стоимость',
    labelTypicalPrize: 'Типичный приз',
    labelDifficulty: 'Сложность',
    labelAccessible: 'Доступно',
    labelDifficult: 'Трудно',
    labelExtreme: 'Экстремально',
    labelNote: 'Примечание: Призы Navidad и El Niño указаны за "десимо" (20€). Euromillions и др. — типичные джекпоты.',
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
