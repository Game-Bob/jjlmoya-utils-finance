import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Investasi Awal',
  labelFinalValue: 'Nilai Akhir / Saldo Saat Ini',
  labelTimeSelection: 'Durasi Investasi',
  labelYears: 'Tahun',
  labelMonths: 'Bulan',
  labelDays: 'Hari',
  labelROI: 'Laba atas Investasi (ROI)',
  labelCAGR: 'Pertumbuhan Tahunan (CAGR)',
  labelNetProfit: 'Laba Bersih',
  labelLinearGrowth: 'Pertumbuhan Linear (Estimasi)',
  labelExponentialGrowth: 'Pertumbuhan Majemuk (CAGR)',
  labelPositiveResult: 'Investasi Menguntungkan',
  labelNegativeResult: 'Posisi Kerugian',
  labelCopyResult: 'Salin Hasil',
  labelCopied: 'Disalin!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'kalkulator-profitabilitas-investasi-roi-cagr',
  title: 'Kalkulator Profitabilitas: ROI & CAGR',
  description: 'Analisis kinerja investasi Anda. Hitung ROI dan CAGR untuk memahami keuntungan riil Anda.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Metrik mana yang lebih baik?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> menunjukkan total persentase keuntungan, tetapi mengabaikan waktu. <strong>CAGR</strong> lebih baik untuk analisis jangka panjang.',
    },
  ],
  faq: [
    {
      question: 'Berapa CAGR yang baik?',
      answer: 'Secara historis S&P 500 memberikan imbal hasil sekitar 7-10% per tahun.',
    },
  ],
  bibliography: [
    {
      name: 'Definisi ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Masukkan modal awal',
      text: 'Masukkan jumlah uang yang Anda investasikan semula.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Kalkulator Profitabilitas',
      description: 'Hitung ROI dan CAGR.',
    },
  ],
};
