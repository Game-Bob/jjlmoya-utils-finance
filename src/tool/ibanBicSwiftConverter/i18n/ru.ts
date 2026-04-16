import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'konverter-iban-v-bic-swift';
const title = 'Конвертер IBAN в BIC SWIFT и поиск банков';
const description = 'Мгновенно получите код BIC/SWIFT любого испанского IBAN. Валидатор банковских счетов с официальным алгоритмом для переводов.';

const faqData = [
  {
    question: 'Что такое код BIC или SWIFT?',
    answer: 'Это международный идентификатор вашего банка. Он необходим для того, чтобы деньги знали, в какую организацию они должны быть направлены при путешествии за пределы зоны SEPA (Европа).',
  },
  {
    question: 'Как узнать BIC моего банка?',
    answer: 'Вы можете посмотреть его в своем онлайн-банке или воспользоваться нашим конвертером. Для испанских банков, просто введя IBAN, мы извлекаем код организации и выдаем вам соответствующий BIC.',
  },
  {
    question: 'Безопасно ли вводить здесь мой IBAN?',
    answer: 'Абсолютно. Наш инструмент проверяет код локально в вашем браузере. Мы не сохраняем и не отправляем ваши банковские данные на какой-либо внешний сервер.',
  },
  {
    question: 'Почему в Испании IBAN состоит из 24 символов?',
    answer: 'Это стандартная норма. Первые 4 символа идентифицируют страну и контрольное число, а остальные 20 — это старый номер счета.',
  },
];

const howToData = [
  {
    name: 'Найдите свой IBAN',
    text: 'Вы найдете его на своей банковской карте, в сберегательной книжке или в профиле вашего онлайн-банка.',
  },
  {
    name: 'Введите его в валидатор',
    text: 'Напишите или вставьте полный код. Наша система автоматически отформатирует его для удобства чтения.',
  },
  {
    name: 'Нажмите кнопку конвертации',
    text: 'Система проверит правильность контрольных цифр с помощью алгоритма Modulo 97.',
  },
  {
    name: 'Скопируйте результат',
    text: 'Вы получите код BIC/SWIFT и название банковской организации, готовые к копированию и использованию.',
  },
];

const bibliographyData = [
  {
    name: 'ISO 13616: Международный стандарт IBAN',
    url: 'https://www.iso.org/',
  },
  {
    name: 'SWIFT: Глобальный реестр BIC',
    url: 'https://www.theswiftcodes.com/',
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

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Источники и ссылки',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Конвертер IBAN в BIC/SWIFT: Все, что вам нужно знать о ваших банковских кодах',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'В сложном мире международных финансов две аббревиатуры доминируют в любой операции перевода: <strong>IBAN</strong> и <strong>BIC</strong> (также известный как SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'Конвертер IBAN в BIC / SWIFT',
    labelDescription: 'Мгновенно рассчитайте BIC-код любого испанского банковского счета.',
    labelInputIBAN: 'Введите ваш IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Получить код BIC',
    labelBIC: 'Код BIC / SWIFT',
    labelCountry: 'Страна / Формат',
    labelBank: 'Банковская организация',
    labelError: 'Введенный IBAN кажется недействительным. Проверьте цифры.',
    labelCopyButton: 'Копировать',
    labelCopied: 'Скопировано',
    labelBankNotIdentified: 'Организация не идентифицирована',
    labelBankOutsideSpain: 'Банк за пределами Испании (Ограниченные данные)',
    labelInvalidIBAN: 'IBAN недействителен',
    labelFormattingOK: 'Формат в норме',
  },
};
