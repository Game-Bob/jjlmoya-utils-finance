import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-to-bic-swift-converter';
const title = 'IBAN 转 BIC SWIFT 转换器与银行查询';
const description = '立即获取任何西班牙 IBAN 的 BIC/SWIFT 代码。使用官方算法的银行账户验证器，适用于转账业务。';

const faqData = [
  {
    question: '什么是 BIC 或 SWIFT 代码？',
    answer: '这是您银行的国际识别代码。当资金流向 SEPA 区（欧洲）以外时，需要该代码以便资金知道应去向哪家机构。',
  },
  {
    question: '我如何知道我银行的 BIC？',
    answer: '您可以在网上银行查询，或使用我们的转换器。对于西班牙银行，只需输入 IBAN，我们即可提取机构代码并为您提供相应的 BIC。',
  },
  {
    question: '在这里输入我的 IBAN 安全吗？',
    answer: '绝对安全。我们的工具在您的浏览器本地进行验证。我们不会保存您的银行数据，也不会将其发送到任何外部服务器。',
  },
  {
    question: '为什么西班牙的 IBAN 有 24 个字符？',
    answer: '这是一个标准规范。前 4 位识别国家和校验位，其余 20 位是旧的银行账号。',
  },
];

const howToData = [
  {
    name: '查找您的 IBAN',
    text: '您可以在您的银行卡、存折或网上银行个人资料中找到它。',
  },
  {
    name: '输入到验证器中',
    text: '输入或粘贴完整的代码。我们的系统会自动格式化，以便于阅读。',
  },
  {
    name: '点击转换按钮',
    text: '系统将通过 Modulo 97 算法验证校验位是否正确。',
  },
  {
    name: '复制结果',
    text: '您将获得 BIC/SWIFT 代码和银行机构名称，即可直接复制使用。',
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
  faqTitle: '常见问题',
  faq: faqData: '来源与参考资料',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBAN 转 BIC/SWIFT 转换器：关于银行代码您需要了解的一切',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在复杂的国际金融世界中，两个缩写统治着每笔转账操作：<strong>IBAN</strong> 和 <strong>BIC</strong>（也称为 SWIFT）。',
    },
  ],
  ui: {
    labelTitle: 'IBAN 转 BIC / SWIFT 转换器',
    labelDescription: '立即计算任何西班牙银行账户的 BIC 代码。',
    labelInputIBAN: '输入您的 IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: '获取 BIC 代码',
    labelBIC: 'BIC / SWIFT 代码',
    labelCountry: '国家 / 格式接口',
    labelBank: '银行机构',
    labelError: '输入的 IBAN 似乎无效。请检查数字。',
    labelCopyButton: '复制',
    labelCopied: '已复制',
    labelBankNotIdentified: '机构未识别',
    labelBankOutsideSpain: '西班牙境外的银行（数据有限）',
    labelInvalidIBAN: '无效 IBAN',
    labelFormattingOK: '格式 OK',
  },
};
