import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'kalkulator-kenaikan-sewa-spanyol-ipc';
const title = 'Kalkulator Kenaikan Sewa Spanyol IPC: Batas 3%';
const description = 'Hitung pembaruan biaya sewa Anda dengan IPC atau batas hukum 3% sesuai dengan Undang-Undang Perumahan Spanyol.';

const faqData = [
  {
    question: 'Berapa kenaikan sewa maksimum yang diizinkan pada tahun 2024 dan 2025?',
    answer: 'Menurut Undang-Undang Spanyol 12/2023 tentang Hak atas Perumahan, untuk tahun 2024 dan 2025, kenaikan tahunan maksimum biaya sewa untuk tempat tinggal utama secara hukum dibatasi sebesar 3%.',
  },
  {
    question: 'Apakah wajib menaikkan sewa setiap tahun dengan IPC?',
    answer: 'Tidak wajib menurut hukum. Agar biaya sewa dapat naik, kontrak sewa harus menyertakan klausul eksplisit yang menyebutkan pembaruan tahunan.',
  },
  {
    question: 'Berapa lama sebelumnya pemilik harus memberitahukan kenaikan sewa?',
    answer: 'Pemilik harus memberitahukan kenaikan tersebut secara tertulis kepada penyewa setidaknya satu bulan (30 hari) sebelumnya.',
  },
  {
    question: 'Apa yang terjadi jika IPC lebih tinggi dari batas hukum 3%?',
    answer: 'Meskipun IPC riil lebih tinggi, pemilik tempat tinggal utama secara hukum tidak dapat menuntut kenaikan lebih dari 3% selama tahun 2024 dan 2025.',
  },
];

const howToData = [
  {
    name: 'Masukkan sewa Anda saat ini',
    text: 'Tuliskan biaya bulanan yang Anda bayar saat ini.',
  },
  {
    name: 'Pilih mode perhitungan',
    text: 'Pilih Batas Hukum 3% (disarankan) atau masukkan persentase manual.',
  },
  {
    name: 'Lihat hasil',
    text: 'Anda akan mendapatkan estimasi sewa baru, kenaikan bulanan, dan biaya tambahan tahunan.',
  },
  {
    name: 'Salin ringkasan',
    text: 'Buat laporan singkat untuk dikirim ke pemilik atau simpan dalam catatan Anda.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Kalkulator Kenaikan Sewa 2026 Spanyol: Batas 3%',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Di Spanyol, <strong>Indeks Harga Konsumen (IPC)</strong> secara tradisional digunakan sebagai tolok ukur untuk menyesuaikan harga sewa. Namun, Undang-Undang Perumahan baru telah memperkenalkan batasan penting.',
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
  faqTitle: 'Pertanyaan Umum': 'Sumber dan Referensi',
  ui: {
    labelTitle: 'Kalkulator Kenaikan Sewa',
    labelDescription: 'Sesuaikan biaya sewa Anda sesuai dengan IPC atau terapkan batas hukum 3% dengan aman.',
    labelCurrentRent: 'Sewa Saat Ini',
    labelCurrentRentPlaceholder: 'Misal 800',
    labelIncrementType: 'Mode Pembaruan',
    labelLegalLimit: 'Batas UU Perumahan (3%)',
    labelManualIncrement: 'Kenaikan Manual (%)',
    labelManualPercentagePlaceholder: 'Misal 2.5',
    labelNewRentEstimate: 'Estimasi Sewa Baru',
    labelMonthlyIncrease: 'Kenaikan Bulanan',
    labelYearlyExtra: 'Biaya Tambahan Tahunan',
    labelLegalBadge: 'Dibatasi hingga 3% sesuai UU 12/2023',
    labelCopyButton: 'Salin untuk pemilik',
    labelCopySuccess: 'Tersalin!',
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
