import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'kalkulator-bunga-keterlambatan-spanyol';
const title = 'Kalkulator Bunga Keterlambatan dan Hukum Spanyol 2026';
const description =
  'Hitung bunga keterlambatan pajak (Hacienda) dan bunga hukum untuk keterlambatan pembayaran di Spanyol. Simulator diperbarui untuk 2025 dan 2026.';

const faqData = [
  {
    question: 'Apa itu bunga keterlambatan atau bunga moratori?',
    answer:
      'Ini adalah bunga yang dikenakan atas jumlah yang tidak dibayar dalam jangka waktu yang ditetapkan. Ini diterapkan pada utang asli dan terakumulasi sampai pembayaran penuh dilakukan.',
  },
  {
    question: 'Apa perbedaan antara bunga sederhana dan bunga majemuk?',
    answer:
      'Bunga sederhana dihitung hanya pada modal asli setiap hari. Bunga majemuk dihitung pada modal ditambah akumulasi bunga, menghasilkan pertumbuhan utang yang lebih cepat.',
  },
  {
    question: 'Bagaimana cara menghitung bunga harian?',
    answer:
      'Tingkat tahunan dibagi dengan 365 hari dan diterapkan pada modal asli. Misalnya, 10% per tahun = 0,0274% per hari.',
  },
  {
    question: 'Tingkat bunga keterlambatan mana yang harus saya terapkan?',
    answer:
      'Itu tergantung pada undang-undang setempat dan persyaratan kontrak. Di Spanyol, Undang-Undang tentang Keterlambatan Pembayaran menetapkan tingkat maksimum. Konsultasikan dengan penasihat hukum untuk kasus spesifik Anda.',
  },
  {
    question: 'Dapatkah saya menggunakan kalkulator ini untuk utang hukum?',
    answer:
      'Ini adalah alat informatif. Untuk utang nyata, verifikasi persyaratan kontrak dan undang-undang setempat. Konsultasikan dengan pengacara jika Anda memiliki keraguan.',
  },
];

const howToData = [
  {
    name: 'Pilih jenis perhitungan',
    text: 'Pilih antara bunga sederhana, majemuk, atau bulanan sesuai dengan situasi Anda.',
  },
  {
    name: 'Masukkan data',
    text: 'Masukkan jumlah asli, tingkat bunga, dan periode keterlambatan.',
  },
  {
    name: 'Dapatkan hasil',
    text: 'Kalkulator menunjukkan akumulasi bunga harian, total yang dihasilkan, jumlah akhir, dan tingkat efektif.',
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Bunga Keterlambatan Spanyol: Panduan Lengkap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam kerangka hukum dan fiskal yang kompleks di Spanyol, berlalunya waktu atas suatu utang tidaklah gratis. <strong>Bunga keterlambatan</strong> dan <strong>bunga hukum uang</strong> adalah mekanisme yang digunakan hukum untuk mengkompensasi kerugian yang disebabkan oleh penundaan dalam pemenuhan kewajiban moneter. Baik itu utang dengan kantor pajak (<strong>Hacienda</strong>), tunggakan pembayaran antar perusahaan, atau klaim hukum, memahami bagaimana bunga-bunga ini timbul adalah hal yang fundamental.',
    },
    {
      type: 'title',
      text: 'Apa itu Bunga Hukum Uang?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bunga hukum uang adalah biaya tambahan yang diterapkan pada utang ketika para pihak tidak menyepakati bunga tertentu atau ketika undang-undang menetapkannya. Untuk tahun <strong>2024, 2025, dan 2026</strong>, tingkat ini tetap stabil di angka <strong>3,25%</strong>. Persentase ini berfungsi sebagai dasar bagi banyak perhitungan hukum.',
    },
    {
      type: 'title',
      text: 'Bunga Keterlambatan Pajak (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ketika utang kepada Administrasi Publik, <strong>bunga keterlambatan pajak</strong> lebih tinggi daripada bunga hukum untuk mencegah penundaan dalam pembayaran pajak. Untuk periode <strong>2024-2026</strong>, telah ditetapkan sebesar <strong>4,0625%</strong>. Ini adalah biaya tambahan yang akan dibebankan oleh Kantor Pajak jika Anda mengajukan pengembalian pajak setelah batas waktu.',
    },
    {
      type: 'tip',
      title: 'Bersifat Ganti Rugi, Bukan Hukuman',
      html: '<p><strong>Data kunci:</strong> Berbeda dengan sanksi, bunga keterlambatan bersifat ganti rugi, bukan hukuman. Kantor Pajak tidak "menghukum" Anda, tetapi membebankan biaya untuk waktu selama Anda memiliki uang yang seharusnya ada di kas publik.</p>',
    },
    {
      type: 'title',
      text: 'Cara Menghitung Bunga Langkah demi Langkah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perhitungan bunga ini mengikuti rumus bunga sederhana, di mana waktu dihitung berdasarkan hari kalender: <strong>Bunga = (Pokok × Hari × Tingkat Bunga) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Pokok:</strong> Jumlah total utang asli.',
        '<strong>Hari:</strong> Jumlah hari yang telah berlalu sejak hari setelah tanggal jatuh tempo hingga hari pembayaran efektif.',
        '<strong>Tingkat Bunga:</strong> Persentase tahunan yang berlaku (Misal: 3,25 atau 4,0625).',
        '<strong>36.500:</strong> Faktor pembagi untuk mengubah persentase tahunan menjadi harian (365 hari x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Contoh Praktis: Utang dengan Kantor Pajak',
      html: '<p>Bayangkan Anda berutang 5.000 € dari SPT pajak yang jatuh tempo 180 hari yang lalu:</p><ul><li>Bunga yang berlaku (Keterlambatan): 4,0625%</li><li>Perhitungan: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Bunga yang dihasilkan:</strong> 100,17 €</li><li>Total yang harus dibayar: 5.100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Perbedaan Berdasarkan Jenis Utang',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Utang Sipil:</strong> Antar individu, berlaku 3,25% (hukum).',
        '<strong>Utang Komersial:</strong> Diatur oleh Undang-Undang tentang Keterlambatan Pembayaran, mencapai 10,15% - 11,15% pada 2025-2026.',
        '<strong>Utang dengan Jaminan Sosial:</strong> Berlaku 4,0625% ditambah biaya tambahan 10% hingga 20%.',
        '<strong>Bunga Prosedural:</strong> Jika ada keputusan pengadilan, 5,25% sejak tanggal keputusan.',
      ],
    },
    {
      type: 'title',
      text: 'Bunga dalam Operasi Komersial: Waspadai 60 Hari!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda adalah pekerja mandiri atau perusahaan, Undang-Undang Spanyol 3/2004 menetapkan batas waktu pembayaran maksimum 60 hari. Jika klien Anda melewati tanggal tersebut, Anda dapat menuntut bunga keterlambatan komersial secara otomatis, tanpa memerlukan pengingat, dan juga membebankan jumlah tetap 40 € untuk biaya penagihan.',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Bunga Keterlambatan',
    labelSimpleTitle: 'Sederhana',
    labelCompoundTitle: 'Majemuk',
    labelMonthlyTitle: 'Bulanan',
    labelSimpleQuestion: 'Hitung dengan bunga sederhana',
    labelCompoundQuestion: 'Hitung dengan bunga majemuk',
    labelMonthlyQuestion: 'Hitung dengan periode bulanan',
    labelPrincipal: 'Jumlah Asli',
    labelAnnualRate: 'Tingkat Tahunan',
    labelDays: 'Hari Keterlambatan',
    labelMonths: 'Bulan Keterlambatan',
    labelMonthlyRate: 'Tingkat Bulanan',
    labelDailyInterest: 'Bunga Harian',
    labelTotalInterest: 'Total Bunga',
    labelTotalAmount: 'Total Jumlah Harus Dibayar',
    labelEffectiveRate: 'Tingkat Efektif',
    labelCopyTooltip: 'Salin hasil',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Rumus yang diterapkan',
    reportTitle: 'LAPORAN PERHITUNGAN BUNGA',
    reportLabelPrincipal: 'Pokok',
    reportLabelType: 'Tipe',
    reportLabelPeriod: 'Periode',
    reportLabelDays: 'Hari berlalu',
    reportLabelInterest: 'BUNGA YANG TIMBUL',
    reportLabelTotal: 'TOTAL YANG HARUS DILUNASI',
    reportDaysSuffix: 'hari',
    formulaDescription: 'Perhitungan ini menggunakan tingkat suku bunga saat ini. Jika periode mencakup tahun-tahun sebelumnya dengan tingkat suku bunga yang berbeda, perhitungan sebenarnya harus dipilah berdasarkan periode.',
    currencyCode: 'EUR',
    currencyLocale: 'id-ID',
  },
};
