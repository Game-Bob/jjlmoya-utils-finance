import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-bic-swift-donusturucu';
const title = 'IBAN’dan BIC SWIFT’e Dönüştürücü ve Banka Arama';
const description = 'Herhangi bir İspanyol IBAN’ının BIC/SWIFT kodunu anında alın. Transferler için resmi algoritmalı banka hesabı doğrulayıcı.';

const faqData = [
  {
    question: 'BIC veya SWIFT kodu nedir?',
    answer: 'Bankanızın uluslararası tanımlayıcısıdır. Paranın SEPA bölgesi (Avrupa) dışına çıktığında hangi kuruma gitmesi gerektiğini bilmesi için gereklidir.',
  },
  {
    question: 'Bankamın BIC kodunu nasıl öğrenebilirim?',
    answer: 'İnternet bankacılığınızdan kontrol edebilir veya dönüştürücümüzü kullanabilirsiniz. İspanyol bankaları için sadece IBAN girerek kurum kodunu çıkarır ve size ilgili BIC kodunu veririz.',
  },
  {
    question: 'IBAN numaramı buraya girmek güvenli mi?',
    answer: 'Tamamen güvenli. Aracımız kodu yerel olarak tarayıcınızda doğrular. Banka verilerinizi kaydetmiyoruz veya harici bir sunucuya göndermiyoruz.',
  },
  {
    question: 'İspanya’da IBAN neden 24 karakterden oluşur?',
    answer: 'Bu standart bir normdur. İlk 4 karakter ülkeyi ve kontrolü tanımlar, diğer 20 karakter ise eski banka hesap numarasıdır.',
  },
];

const howToData = [
  {
    name: 'IBAN numaranızı bulun',
    text: 'Bunu banka kartınızda, hesap cüzdanınızda veya internet bankacılığı profilinizde bulabilirsiniz.',
  },
  {
    name: 'Doğrulayıcıya girin',
    text: 'Kodun tamamını yazın veya yapıştırın. Sistemimiz okumayı kolaylaştırmak için otomatik olarak formatlayacaktır.',
  },
  {
    name: 'Dönüştür düğmesine basın',
    text: 'Sistem, Modulo 97 algoritması aracılığıyla kontrol basamaklarının doğru olup olmadığını doğrulayacaktır.',
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Kopyalamaya ve kullanmaya hazır BIC/SWIFT kodunu ve banka adını alacaksınız.',
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
      text: 'IBAN’dan BIC/SWIFT’e Dönüştürücü: Banka kodlarınız hakkında bilmeniz gereken her şey',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uluslararası finansın karmaşık dünyasında, her transfer işlemine iki kısaltma hakimdir: <strong>IBAN</strong> ve <strong>BIC</strong> (SWIFT olarak da bilinir).',
    },
  ],
  ui: {
    labelTitle: 'IBAN’dan BIC / SWIFT’e Dönüştürücü',
    labelDescription: 'Herhangi bir İspanyol banka hesabının BIC kodunu anında hesaplayın.',
    labelInputIBAN: 'IBAN numaranızı girin',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'BIC Kodunu Al',
    labelBIC: 'BIC / SWIFT Kodu',
    labelCountry: 'Ülke / Format',
    labelBank: 'Banka Kurumu',
    labelError: 'Girilen IBAN geçersiz görünüyor. Basamakları kontrol edin.',
    labelCopyButton: 'Kopyala',
    labelCopied: 'Kopyalandı',
    labelBankNotIdentified: 'Kurum tanımlanamadı',
    labelBankOutsideSpain: 'İspanya dışındaki banka (Sınırlı veri)',
    labelInvalidIBAN: 'Geçersiz IBAN',
    labelFormattingOK: 'Format Uygun',
  },
};
