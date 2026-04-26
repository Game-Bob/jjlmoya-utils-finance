import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'yasal-faiz-orani-ispanya-2026';
const title = 'Yasal Faiz';
const description = 'İspanya’da 2026 yılı için geçerli olan yasal faizi hesaplayın. Bütçe Kanunu’na göre %3,25 oranında simülatör.';

const faqData = [
  {
    question: '2026 yılında yasal faiz oranı kaçtır?',
    answer: 'İspanya’da 2026 mali yılı için paranın yasal faizi, Devlet Genel Bütçe Kanunu tarafından %3,25 olarak belirlenmiştir.',
  },
  {
    question: 'Gecikme faizi nasıl hesaplanır?',
    answer: 'Gecikme faizi, ödenmemiş ana paranın %3,25 ile çarpılması ve gecikme gün sayısı ile çarpılıp 36.500’e bölünmesiyle hesaplanır. 365 gün esası kullanılır.',
  },
  {
    question: 'Yasal faiz ile gecikme faizi arasındaki fark nedir?',
    answer: 'Yasal faiz temel referans oranıdır. Vergi gecikme faizi (Hacienda) %4,0625’tir. Ticari işlemler faizi (yaklaşık %10,15) en yükseğidir.',
  },
  {
    question: 'Sözleşme maddesi olmasa bile otomatik olarak uygulanır mı?',
    answer: 'Evet, ödemede gecikme olduğunda ve başka bir faiz kararlaştırılmadığında yasal faiz varsayılan olarak otomatik uygulanır.',
  },
  {
    question: 'Yasal işlem faizi (Interés Procesal) nedir?',
    answer: 'Yasal işlem faizi %5,25’tir (yasal faiz artı 2 puan) ve para ödenmesine hükmeden bir mahkeme kararı verildiği andan itibaren uygulanır.',
  },
];

const howToData = [
  {
    name: 'Ödenmemiş ana parayı girin',
    text: 'Üzerinden faiz hesaplamanız gereken para miktarını girin (örneğin ödenmemiş bir fatura).',
  },
  {
    name: 'Gecikme gün sayısını belirtin',
    text: 'Ödeme gecikmesinin kaç gün sürdüğünü veya süreceğini belirtin. 365 gün esası.',
  },
  {
    name: 'Sonucu görüntüleyin',
    text: '2026’da geçerli olan %3,25 oranını uygulayarak oluşan faiz miktarını ve ödenecek toplamı otomatik olarak alın.',
  },
  {
    name: 'Diğer oranlara göz atın',
    text: 'Ek bağlam için vergi gecikmesi (%4,06) gibi diğer referans oranlarını inceleyin.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Yasal Faiz Oranı 2026 İspanya - Hesaplayıcı',
  },
  {
    type: 'paragraph',
    html: 'İspanya’da <strong>2026 yasal faiz oranı</strong> %<strong>3,25</strong>’tir. Aksi kararlaştırılmadıkça gecikme durumunda otomatik olarak uygulanır.',
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

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Yasal Faiz Oranı',
    labelDescription: '2026 Bütçe Kanunu’na göre yasal faiz miktarını hesaplayın. İspanya için %3,25 oranında simülatör.',
    labelBadge: 'Resmi Gazete (BOE) 2026',
    labelSubtitle: 'Paranın yasal faiz oranı 2026 yılı için %3,25 seviyesinde korunmuştur.',
    labelLegalInterest: 'Yasal Faiz',
    labelDelayInterest: 'Gecikme Faizi',
    labelCommercialOperations: 'Ticari İşlemler',
    labelActive: '2026 Yılında Geçerli',
    labelTributary: 'Vergi (Hacienda)',
    labelFirstHalf: '2026 İlk Yarıyı',
    labelQuickCalculator: 'Hızlı Faiz Hesaplayıcı (%3,25)',
    labelCapital: 'Ödenmemiş Ana Para',
    labelDays: 'Gecikme Günü',
    labelInterestGenerated: 'Oluşan Faizler',
    labelTotalToPay: 'Ödenecek Toplam',
    labelFormula: 'Bu hesaplayıcı standart basit faiz formülünü uygular:',
    labelBase: 'Yürürlükteki İspanyol mevzuatına göre resmi hesaplama için 365 gün esası kullanılır.',
    labelOfficialRegulation: 'Resmi Düzenleme',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'tr-TR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
