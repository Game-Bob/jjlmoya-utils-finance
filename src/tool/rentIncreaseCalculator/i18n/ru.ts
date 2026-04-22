import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'kalkulyator-povysheniya-arendy-ispaniya-ipc';
const title = 'Калькулятор повышения арендной платы Испания: IPC и лимит 3%';
const description = ' Рассчитайте обновление арендной платы с учетом IPC или установленного законом лимита в 3% в соответствии с Законом Испании о жилье.';

const faqData = [
  {
    question: 'Каково максимально допустимое повышение арендной платы в 2024 и 2025 годах?',
    answer: 'Согласно Закону Испании 12/2023 о праве на жилье, в 2024 и 2025 годах ежегодный рост арендной платы за основное жилье по закону ограничен 3%.',
  },
  {
    question: 'Обязательно ли повышать арендную плату каждый год в соответствии с IPC?',
    answer: 'Это не является обязательным по закону. Чтобы арендная плата выросла, договор аренды должен содержать четкий пункт о ежегодном обновлении.',
  },
  {
    question: 'За какой срок арендодатель должен уведомить о повышении арендной платы?',
    answer: 'Арендодатель должен письменно уведомить арендатора о повышении как минимум за один месяц (30 дней).',
  },
  {
    question: 'Что произойдет, если IPC будет выше установленного законом лимита в 3%?',
    answer: 'Даже если реальный IPC выше, владелец основного жилья по закону не может требовать повышения более чем на 3% в течение 2024 и 2025 годов.',
  },
];

const howToData = [
  {
    name: 'Введите текущую арендную плату',
    text: 'Укажите сумму ежемесячного платежа, который вы платите сейчас.',
  },
  {
    name: 'Выберите режим расчета',
    text: 'Выберите законный лимит 3% (рекомендуется) или введите процент вручную.',
  },
  {
    name: 'Посмотрите результаты',
    text: 'Вы сразу увидите новую расчетную сумму аренды, ежемесячную надбавку и годовые дополнительные расходы.',
  },
  {
    name: 'Скопируйте отчет',
    text: 'Создайте краткий отчет для отправки владельцу или для сохранения в своих заметках.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Калькулятор повышения арендной платы 2026 Испания: лимит 3%',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'В Испании <strong>Индекс потребительских цен (IPC)</strong> традиционно использовался как ориентир для корректировки цен на аренду. Однако новый Закон о жилье ввел важные ограничения.',
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы': 'Источники и ссылки',
  ui: {
    labelTitle: 'Калькулятор повышения аренды',
    labelDescription: 'Безопасно корректируйте аренду в соответствии с IPC или применяйте законный лимит 3%.',
    labelCurrentRent: 'Текущая аренда',
    labelCurrentRentPlaceholder: 'Напр. 800',
    labelIncrementType: 'Режим обновления',
    labelLegalLimit: 'Лимит Закона о жилье (3%)',
    labelManualIncrement: 'Ручное повышение (%)',
    labelManualPercentagePlaceholder: 'Напр. 2.5',
    labelNewRentEstimate: 'Новая расчетная аренда',
    labelMonthlyIncrease: 'Ежемесячная надбавка',
    labelYearlyExtra: 'Годовые дополнительные расходы',
    labelLegalBadge: 'Ограничено до 3% согласно Закону 12/2023',
    labelCopyButton: 'Копировать для владельца',
    labelCopySuccess: 'Скопировано!',
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
