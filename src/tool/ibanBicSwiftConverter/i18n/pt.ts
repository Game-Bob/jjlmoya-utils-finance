import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'conversor-iban-para-bic-swift';
const title = 'Conversor de IBAN para BIC SWIFT e Localizador de Bancos';
const description = 'Obtenha o código BIC/SWIFT de qualquer IBAN espanhol instantaneamente. Validador de contas bancárias com algoritmo oficial para transferências.';

const faqData = [
  {
    question: 'O que é o código BIC ou SWIFT?',
    answer: 'É o identificador internacional do seu banco. É necessário para que o dinheiro saiba para que entidade deve dirigir-se quando viaja para fora do espaço SEPA (Europa).',
  },
  {
    question: 'Como sei qual é o BIC do meu banco?',
    answer: 'Pode consultá-lo no seu homebanking ou usar o nosso conversor. Para bancos espanhóis, basta introduzir o IBAN e nós extraímos o código da entidade e damos-lhe o BIC correspondente.',
  },
  {
    question: 'É seguro introduzir o meu IBAN aqui?',
    answer: 'Totalmente. A nossa ferramenta valida o código localmente no seu navegador. Não guardamos nem enviamos os seus dados bancários para nenhum servidor externo.',
  },
  {
    question: 'Porque é que o IBAN tem 24 caracteres em Espanha?',
    answer: 'É uma norma padrão. Os primeiros 4 identificam o país e o controlo, e os outros 20 são o antigo número de conta.',
  },
];

const howToData = [
  {
    name: 'Procure o seu IBAN',
    text: 'Encontrá-lo-á no seu cartão, caderneta ou no perfil do seu online banking.',
  },
  {
    name: 'Introduza-o no validador',
    text: 'Escreva ou cole o código completo. O nosso sistema irá formatá-lo automaticamente para facilitar a leitura.',
  },
  {
    name: 'Clique no botão de conversão',
    text: 'O sistema validará se os dígitos de controlo estão corretos através do algoritmo Módulo 97.',
  },
  {
    name: 'Copie o resultado',
    text: 'Obterá o código BIC/SWIFT e o nome da entidade bancária prontos para copiar e usar.',
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
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Conversor de IBAN para BIC/SWIFT: Tudo o que precisa de saber sobre os seus códigos bancários',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No complexo mundo das finanças internacionais, dois acrónimos dominam qualquer operação de transferência: <strong>IBAN</strong> e <strong>BIC</strong> (também conhecido como SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'Conversor IBAN para BIC / SWIFT',
    labelDescription: 'Calcule o código BIC de qualquer conta bancária espanhola instantaneamente.',
    labelInputIBAN: 'Introduza o seu IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Obter Código BIC',
    labelBIC: 'Código BIC / SWIFT',
    labelCountry: 'País / Formato',
    labelBank: 'Entidade Bancária',
    labelError: 'O IBAN introduzido não parece ser válido. Reveja os dígitos.',
    labelCopyButton: 'Copiar',
    labelCopied: 'Copiado',
    labelBankNotIdentified: 'Entidade não identificada',
    labelBankOutsideSpain: 'Banco fora de Espanha (Dados limitados)',
    labelInvalidIBAN: 'IBAN Não Válido',
    labelFormattingOK: 'Formato OK',
  },
};
