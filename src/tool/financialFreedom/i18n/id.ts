import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Total Tabungan',
  labelExpenses: 'Pengeluaran Saat Ini',
  labelMonthly: 'Bulanan',
  labelYearly: 'Tahunan',
  labelTimeRemaining: 'Runway Bertahan Hidup Anda',
  labelYears: 'Tahun',
  labelMonths: 'Bulan',
  labelDays: 'Hari',
  labelStatus: 'Status Keamanan Finansial',
  labelRedZone: 'Zona Merah: Risiko Tinggi',
  labelYellowZone: 'Zona Kuning: Stabil',
  labelGreenZone: 'Zona Hijau: Kebebasan Finansial',
  labelBurnRateDaily: 'Tingkat Pengeluaran Harian',
  labelBurnRateMonthly: 'Tingkat Pengeluaran Bulanan',
  labelWhatIf: 'Strategi 10%',
  labelWhatIfDescription: 'Dengan mengurangi pengeluaran sebesar 10%, Anda dapat memperpanjang runway Anda secara signifikan.',
  labelGainTime: 'Ekstra Waktu Bertahan',
  labelCopyResult: 'Salin Ringkasan',
  labelCopied: 'Disalin!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'kalkulator-kebebasan-finansial-runway-bertahan-hidup',
  title: 'Kalkulator Kebebasan Finansial & Survival Runway',
  description: 'Hitung tepat berapa lama tabungan Anda akan bertahan. Alat runway kami membantu Anda memvisualisasikan kemandirian finansial Anda.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'Apa itu Survival Runway Finansial?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Survival runway</strong> adalah jumlah waktu Anda dapat bertahan hidup tanpa pendapatan baru. Ini adalah metrik utama kebebasan finansial.',
    },
  ],
  faq: [
    {
      question: 'Berapa runway yang baik?',
      answer: 'Pakar merekomendasikan minimal 3 hingga 6 bulan. Untuk kebebasan sejati, targetkan 2 tahun atau lebih.',
    },
  ],
  bibliography: [
    {
      name: 'Prinsip Gerakan FIRE',
      url: 'https://id.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Masukkan total tabungan',
      text: 'Masukkan total uang tunai atau aset likuid yang Anda miliki.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Kalkulator Kebebasan Finansial',
      description: 'Hitung berapa lama tabungan Anda akan bertahan.',
    },
  ],
};
