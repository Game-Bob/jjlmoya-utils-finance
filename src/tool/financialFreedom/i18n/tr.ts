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

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'finansal-ozgurluk-hesaplama-hayatta-kalma-suresi',
  title: 'Finansal Özgürlük ve Hayatta Kalma Süresi Hesaplayıcı',
  description: 'Tasarruflarınızın tam olarak ne kadar süreceğini hesaplayın. Aracımız finansal bağımsızlığınızı görselleştirmenize yardımcı olur.',
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
  faq: [
    {
      question: 'İyi bir hayatta kalma süresi nedir?',
      answer: 'Uzmanlar en az 3 ila 6 aylık gideri önermektedir. Gerçek özgürlük için 2 yıl veya üzerini hedefleyin.',
    },
  ],
  bibliography: [
    {
      name: 'FIRE Hareketi Prensipleri',
      url: 'https://en.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Toplam tasarrufunuzu girin',
      text: 'Sahip olduğunuz toplam nakit veya likit varlıkları girin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Finansal Özgürlük Hesaplayıcı',
      description: 'Tasarruflarınızın ne kadar süreceğini hesaplayın.',
    },
  ],
};
