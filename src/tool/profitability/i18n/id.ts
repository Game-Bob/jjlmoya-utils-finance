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

const slug = 'kalkulator-profitabilitas-investasi-roi-cagr';
const title = 'Kalkulator Profitabilitas: ROI & CAGR';
const description = 'Analisis kinerja investasi Anda. Hitung ROI dan CAGR untuk memahami keuntungan riil Anda.';

const faq = [
  {
    question: 'Berapa CAGR yang baik?',
    answer: 'Secara historis S&P 500 memberikan imbal hasil sekitar 7-10% per tahun.',
  },
  {
    question: 'Mengapa CAGR saya berbeda dari ROI total?',
    answer: 'ROI adalah total pengembalian tanpa memandang waktu. CAGR adalah tingkat tahunan.',
  },
];

const howTo = [
  {
    name: 'Masukkan modal awal',
    text: 'Masukkan jumlah uang yang Anda investasikan semula.',
  },
  {
    name: 'Masukkan nilai akhir',
    text: 'Masukkan nilai pasar saat ini.',
  },
  {
    name: 'Atur durasi waktu',
    text: 'Tentukan berapa lama Anda memegang investasi tersebut.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
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
  faq,
  bibliography: [
    {
      name: 'Definisi ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
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
