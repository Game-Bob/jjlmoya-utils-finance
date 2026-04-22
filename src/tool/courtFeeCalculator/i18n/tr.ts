import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'mahkeme-harclari-hesaplayici-ispanya';
const title = 'Mahkeme Harçları Hesaplayıcı İspanya';
const description = '10/2012 Sayılı Kanun uyarınca şirketler için İspanyol mahkeme harçlarının tam tutarını hesaplayın. Muafiyetli Model 696 simülatörü.';

const faqData = [
  {
    question: 'Şahıslar mahkeme harcı ödemekten muaf mıdır?',
    answer: 'Evet, 2016 yılından bu yana İspanya’da gerçek kişiler tüm yargı kollarında mahkeme harcı ödemekten tamamen muaftır.',
  },
  {
    question: 'Mahkeme harcının maksimum tutarı nedir?',
    answer: 'Değişken miktar maksimum 10.000 euro ile sınırlıdır. Sabit miktar eklendiğinde, prosedür türüne bağlı olarak toplam maksimum tutar daha yüksek olabilir.',
  },
  {
    question: 'Model 696 nedir?',
    answer: 'İspanya Vergi Dairesi’nin (AEAT) yargı yetkisinin kullanılmasına ilişkin harcın beyanı ve ödenmesi için kullanılan resmi formdur.',
  },
  {
    question: 'Ceza davalarında harç ödenir mi?',
    answer: 'Hayır, İspanya’da ceza hukuku kapsamındaki davalar için mahkeme harcı yoktur.',
  },
  {
    question: 'Değişken miktar nasıl hesaplanır?',
    answer: 'Değişken miktar, 1 milyon euroya kadar olan dava değerinin %0,5’idir. Bu tutarın üzerindeki kısım için %0,25 uygulanır. Maksimum tutar 10.000 eurodur.',
  },
];

const howToData = [
  {
    name: 'Yükümlü kişiyi seçin',
    text: 'Gerçek kişi (muaf) mi yoksa tüzel kişi (şirket) mi olduğunuzu belirtin.',
  },
  {
    name: 'Yargı kolunu ve prosedürü seçin',
    text: 'Yargı kolunu (Hukuk, İdari veya Sosyal) ve prosedür türünü seçin.',
  },
  {
    name: 'Dava değerini girin',
    text: 'Dava dilekçesinde talep edilen toplam tutarı yazın. Sosyal yargı kolunda bu alan geçerli değildir.',
  },
  {
    name: 'Dökümü görüntüleyin',
    text: 'Model 696 için sabit, değişken ve toplam harç tutarının otomatik hesaplamasını alın.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'İspanya Mahkeme Harçları Hesaplama 2026: Tam Kılavuz',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Mahkeme Harçları Hesaplayıcı</strong>, 10/2012 Sayılı Kanun uyarınca İspanya’daki yargı yetkisi kullanmanın mali maliyetini hassas bir şekilde belirlemek için tasarlanmış teknik bir araçtır.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular': 'Kaynaklar ve Referanslar',
  ui: {
    labelTitle: 'Mahkeme Harçları Hesaplayıcı',
    labelDescription: 'Yargı koluna ve prosedüre göre Model 696’nın tam tutarını hesaplayın. Şirketler ve profesyoneller için.',
    labelLegalParameters: 'Yasal Parametreler',
    labelEntityType: 'Yükümlü Kişi',
    labelJurisdiction: 'Yargı Kolu',
    labelProcedure: 'Süreç Türü',
    labelClaimAmount: 'Dava Değeri',
    labelEstimatedSettlement: 'Tahmini Hesaplama',
    labelExemptSubject: 'Muaf Kişi',
    labelFixedQuote: 'Sabit Harç (Usul)',
    labelVariableQuote: 'Değişken Harç (%0,5 / %0,25)',
    labelTaxableBase: 'Vergi Matrahı',
    labelCopySettlement: 'Hesaplamayı Kopyala',
    labelEntityJuridica: 'Tüzel Kişi (Limited, Anonim Şirket)',
    labelEntityFisica: 'Gerçek Kişi (Muaf)',
    labelCivilOrder: 'Hukuk Yolu',
    labelAdministrativeOrder: 'İdari Yargı',
    labelSocialOrder: 'Sosyal Yargı (İş Hukuku)',
    labelModel696: 'AEAT Model 696',
    labelOrdinary: 'Olağan Yargılama',
    labelVerbal: 'Sözlü Yargılama / İlamsız Takip',
    labelExecutive: 'İcra Takibi',
    labelAppeal: 'İstinaf',
    labelCassation: 'Temyiz',
    labelAbbreviated: 'Hızlandırılmış Süreç',
    labelSupplication: 'İtiraz',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'tr-TR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
