import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'suku-bunga-hukum-spanyol-2026';
const title = 'Suku Bunga Hukum';
const description = 'Hitung bunga hukum yang berlaku di Spanyol untuk tahun 2026. Simulator dengan tingkat bunga 3,25% menurut Undang-Undang Anggaran.';

const faqData = [
  {
    question: 'Berapa suku bunga hukum uang pada tahun 2026?',
    answer: 'Suku bunga hukum uang tetap sebesar 3,25% untuk tahun anggaran 2026, yang ditetapkan oleh Undang-Undang Anggaran Umum Negara Spanyol.',
  },
  {
    question: 'Bagaimana cara menghitung bunga keterlambatan?',
    answer: 'Bunga keterlambatan dihitung dengan mengalikan modal yang belum dibayar dengan 3,25% dan dengan jumlah hari keterlambatan, dibagi 36.500. Menggunakan basis 365 hari.',
  },
  {
    question: 'Apa perbedaan antara bunga hukum dan bunga keterlambatan?',
    answer: 'Bunga hukum adalah tingkat referensi dasar. Bunga keterlambatan pajak (Hacienda) adalah 4,0625%. Bunga untuk operasi komersial (sekitar 10,15%) adalah yang tertinggi.',
  },
  {
    question: 'Apakah ini diterapkan secara otomatis tanpa klausul kontrak?',
    answer: 'Ya, bunga hukum diterapkan secara default ketika terjadi keterlambatan pembayaran dan tidak ada bunga lain yang disepakati.',
  },
  {
    question: 'Apa itu bunga prosedural?',
    answer: 'Bunga prosedural adalah 5,25% (bunga hukum ditambah 2 poin) yang diterapkan sejak keputusan pengadilan yang mengharuskan pembayaran uang dijatuhkan.',
  },
];

const howToData = [
  {
    name: 'Masukkan modal yang belum dibayar',
    text: 'Tuliskan jumlah uang yang perlu Anda hitung bunganya (misalnya faktur yang belum dibayar).',
  },
  {
    name: 'Tentukan hari keterlambatan',
    text: 'Tentukan berapa hari keterlambatan pembayaran telah berlangsung atau akan berlangsung. Basis 365 hari.',
  },
  {
    name: 'Lihat hasil',
    text: 'Dapatkan jumlah bunga yang dihasilkan secara otomatis dan total yang harus dibayar pada tingkat 3,25%.',
  },
  {
    name: 'Lihat tingkat bunga lainnya',
    text: 'Lihat tingkat referensi lain seperti keterlambatan pajak (4,06%) untuk konteks tambahan.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Suku Bunga Hukum 2026 Spanyol - Kalkulator',
  },
  {
    type: 'paragraph',
    html: '<strong>Suku bunga hukum 2026</strong> adalah <strong>3,25%</strong> di Spanyol. Ini diterapkan secara otomatis jika terjadi keterlambatan pembayaran kecuali disepakati lain.',
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
  faqTitle: 'Pertanyaan Umum': 'Sumber Hukum',
  ui: {
    labelTitle: 'Tingkat Suku Bunga Hukum',
    labelDescription: 'Hitung jumlah bunga hukum menurut Undang-Undang Anggaran 2026. Simulator pada tingkat 3,25% untuk Spanyol.',
    labelBadge: 'Lembaran Negara (BOE) 2026',
    labelSubtitle: 'Suku bunga hukum uang tetap sebesar 3,25% untuk tahun 2026.',
    labelLegalInterest: 'Bunga Hukum',
    labelDelayInterest: 'Bunga Keterlambatan',
    labelCommercialOperations: 'Operasi Komersial',
    labelActive: 'Berlaku tahun 2026',
    labelTributary: 'Pajak (Hacienda)',
    labelFirstHalf: 'Semester Pertama 2026',
    labelQuickCalculator: 'Kalkulator Cepat Bunga (3,25%)',
    labelCapital: 'Modal Belum Dibayar',
    labelDays: 'Hari Keterlambatan',
    labelInterestGenerated: 'Bunga yang Dihasilkan',
    labelTotalToPay: 'Total Harus Dibayar',
    labelFormula: 'Kalkulator ini menerapkan rumus standar bunga sederhana:',
    labelBase: 'Menggunakan basis 365 hari untuk perhitungan resmi sesuai peraturan Spanyol.',
    labelOfficialRegulation: 'Regulasi Resmi',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'id-ID',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
