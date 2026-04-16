import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'kira-artisi-hesaplama-ispanya-ipc';
const title = 'İspanya Kira Artış Hesaplama IPC 3% Sınır';
const description = 'Kiranızı IPC’ye veya İspanya Konut Yasası’na göre %3’lük yasal sınıra göre güncellemeyi ücretsiz hesaplayın.';

const faqData = [
  {
    question: '2024 ve 2025 yıllarında izin verilen maksimum kira artışı nedir?',
    answer: 'Konut Hakkı Yasası 12/2023 uyarınca, 2024 ve 2025 yılları için daimi konut kiralarındaki yıllık maksimum kira artışı yasal olarak %3 ile sınırlandırılmıştır.',
  },
  {
    question: 'Kiranın her yıl IPC ile artırılması zorunlu mudur?',
    answer: 'Yasaya göre zorunlu değildir. Kiranın artabilmesi için kira sözleşmesinde yıllık güncellemeden bahseden açık bir madde bulunmalıdır.',
  },
  {
    question: 'Ev sahibi artışı ne kadar önceden bildirmelidir?',
    answer: 'Ev sahibi, yeni kiranın uygulanacağı tarihten en az bir ay (30 gün) önce kiracıya artışı yazılı olarak bildirmelidir.',
  },
  {
    question: 'IPC yasal sınır olan %3’ten yüksekse ne olur?',
    answer: 'Gerçek IPC daha yüksek olsa bile, bir daimi konutun sahibi 2024 ve 2025 yılları boyunca yasal olarak %3’ten fazla bir artış talep edemez.',
  },
];

const howToData = [
  {
    name: 'Mevcut kiranızı girin',
    text: 'Şu anda ödediğiniz aylık kira miktarını yazın.',
  },
  {
    name: 'Hesaplama modunu seçin',
    text: '%3 Yasal Sınırı (önerilen) seçin veya manuel bir yüzde girin.',
  },
  {
    name: 'Sonuçları görüntüleyin',
    text: 'Yeni tahmini kiranızı, aylık artışı ve yıllık ek maliyeti anında göreceksiniz.',
  },
  {
    name: 'Özeti kopyalayın',
    text: 'Ev sahibine göndermek veya notlarınıza kaydetmek için hızlı bir rapor oluşturun.',
  },
];

const bibliographyData = [
  {
    name: 'Konut Hakkı Yasası 12/2023 (İspanya)',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Ulusal İstatistik Enstitüsü (INE) IPC Hesaplayıcı',
    url: 'https://www.ine.es/',
  },
  {
    name: 'Kentsel Kira Yasası (LAU)',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: '2026 İspanya Kira Artış Hesaplama 3% Sınır',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'İspanya’da <strong>Tüketici Fiyat Endeksi (IPC)</strong> geleneksel olarak kira fiyatlarını ayarlamak için kullanılan bir ölçüttür. Ancak yeni Konut Yasası ile önemli sınırlamalar getirilmiştir.',
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
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  ui: {
    labelTitle: 'Kira Artışı Hesaplayıcı',
    labelDescription: 'Kiranızı IPC’ye göre ayarlayın veya %3’lük yasal sınırı güvenle uygulayın.',
    labelCurrentRent: 'Mevcut Kira',
    labelCurrentRentPlaceholder: 'Örn. 800',
    labelIncrementType: 'Güncelleme Modu',
    labelLegalLimit: 'Konut Yasası Sınırı (%3)',
    labelManualIncrement: 'Manuel Artış (%)',
    labelManualPercentagePlaceholder: 'Örn. 2.5',
    labelNewRentEstimate: 'Yeni Tahmini Kira',
    labelMonthlyIncrease: 'Aylık Artış',
    labelYearlyExtra: 'Yıllık Ek Maliyet',
    labelLegalBadge: '12/2023 sayılı yasaya göre %3 ile sınırlıdır',
    labelCopyButton: 'Ev sahibi için kopyala',
    labelCopySuccess: 'Kopyalandı!',
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
