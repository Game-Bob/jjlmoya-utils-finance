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
  labelYearsShort: 'th',
  labelMonthsShort: 'bl',
  labelDaysShort: 'hr',
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

const slug = 'kalkulator-kebebasan-finansial-runway-bertahan-hidup';
const title = 'Kalkulator Kebebasan Finansial & Survival Runway';
const description = 'Hitung tepat berapa lama tabungan Anda akan bertahan. Alat runway kami membantu Anda memvisualisasikan kemandirian finansial Anda.';

const faq = [
  {
    question: 'Berapa runway yang baik?',
    answer: 'Pakar merekomendasikan minimal 3 hingga 6 bulan. Untuk kebebasan sejati, targetkan 2 tahun atau lebih.',
  },
  {
    question: 'Apakah kalkulator ini termasuk inflasi?',
    answer: 'Alat ini dirancang untuk perhitungan segera aset likuid terhadap pengeluaran saat ini.',
  },
  {
    question: 'Apa itu "Burn Rate" dalam keuangan pribadi?',
    answer: 'Burn rate adalah tingkat di mana Anda menghabiskan tabungan Anda untuk menutupi biaya hidup.',
  },
];

const howTo = [
  {
    name: 'Masukkan total tabungan',
    text: 'Masukkan total uang tunai atau aset likuid yang Anda miliki.',
  },
  {
    name: 'Atur pengeluaran rutin',
    text: 'Masukkan berapa banyak yang Anda habiskan per bulan atau tahun.',
  },
  {
    name: 'Analisis zona keamanan',
    text: 'Periksa apakah Anda berada di zona Merah, Kuning, atau Hijau.',
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
      text: 'Apa itu Survival Runway Finansial?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Survival runway</strong> adalah jumlah waktu Anda dapat bertahan hidup tanpa pendapatan baru. Ini adalah metrik utama kebebasan finansial.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Prinsip Gerakan FIRE',
      url: 'https://id.wikipedia.org/wiki/FIRE_movement',
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
