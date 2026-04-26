import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Toplam Tasarruf',
  labelExpenses: 'Mevcut Giderler',
  labelMonthly: 'Aylık',
  labelYearly: 'Yıllık',
  labelTimeRemaining: 'Hayatta Kalma Süreniz',
  labelYears: 'Yıl',
  labelMonths: 'Ay',
  labelDays: 'Gün',
  labelYearsShort: 'y',
  labelMonthsShort: 'a',
  labelDaysShort: 'g',
  labelStatus: 'Finansal Güvenlik Durumu',
  labelRedZone: 'Kırmızı Bölge: Yüksek Risk',
  labelYellowZone: 'Sarı Bölge: Stabil',
  labelGreenZone: 'Yeşil Bölge: Finansal Özgürlük',
  labelBurnRateDaily: 'Günlük Harcama Oranı',
  labelBurnRateMonthly: 'Aylık Harcama Oranı',
  labelWhatIf: '%10 Kuralı',
  labelWhatIfDescription: 'Giderlerinizi sadece %10 azaltarak, hayatta kalma sürenizi önemli ölçüde artırabilirsiniz.',
  labelGainTime: 'Ekstra Hayatta Kalma Süresi',
  labelCopyResult: 'Özeti Kopyala',
  labelCopied: 'Kopyalandı!',
};

const slug = 'finansal-ozgurluk-hesaplama-hayatta-kalma-suresi';
const title = 'Finansal Özgürlük ve Hayatta Kalma Süresi Hesaplayıcı';
const description = 'Tasarruflarınızın tam olarak ne kadar süreceğini hesaplayın. Aracımız finansal bağımsızlığınızı görselleştirmenize yardımcı olur.';

const faq = [
  {
    question: 'İyi bir hayatta kalma süresi nedir?',
    answer: 'Uzmanlar en az 3 ila 6 aylık gideri önermektedir. Gerçek özgürlük için 2 yıl veya üzerini hedefleyin.',
  },
  {
    question: 'Bu hesaplayıcı enflasyonu içeriyor mu?',
    answer: 'Bu araç, mevcut giderlere karşı mevcut likit varlıkların anlık hesaplanması için tasarlanmıştır.',
  },
  {
    question: 'Kişisel finansta "Burn Rate" nedir?',
    answer: 'Burn rate (tüketim hızı), yaşam giderlerinizi karşılamak için tasarruflarınızı harcama hızınızdır.',
  },
];

const howTo = [
  {
    name: 'Toplam tasarrufunuzu girin',
    text: 'Sahip olduğunuz toplam nakit veya likit varlıkları girin.',
  },
  {
    name: 'Giderlerinizi belirleyin',
    text: 'Aylık veya yıllık harcamalarınızı girin.',
  },
  {
    name: 'Güvenlik bölgenizi analiz edin',
    text: 'Kırmızı, Sarı veya Yeşil bölgede olup olmadığınızı kontrol edin.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'Finansal Hayatta Kalma Süresi Nedir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Hayatta kalma süresi</strong> (runway), yeni bir gelir olmadan yaşayabileceğiniz süredir. Finansal özgürlüğün temel ölçütüdür.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'FIRE Hareketi Prensipleri',
      url: 'https://en.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
