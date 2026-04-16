import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-pengadilan-spanyol';
const title = 'Kalkulator Biaya Pengadilan Spanyol';
const description = 'Hitung jumlah persis biaya pengadilan Spanyol untuk perusahaan sesuai dengan Undang-Undang 10/2012. Simulator untuk Formulir 696.';

const faqData = [
  {
    question: 'Apakah perorangan dibebaskan dari biaya pengadilan?',
    answer: 'Ya, sejak 2016 orang pribadi sepenuhnya dibebaskan dari pembayaran biaya pengadilan di Spanyol di semua tingkat yurisdiksi.',
  },
  {
    question: 'Berapa jumlah maksimum biaya pengadilan?',
    answer: 'Biaya variabel dibatasi maksimal 10.000 euro. Ditambah biaya tetap, total maksimum bisa lebih tinggi tergantung pada jenis prosedur.',
  },
  {
    question: 'Apa itu Formulir 696?',
    answer: 'Ini adalah formulir resmi dari otoritas pajak Spanyol (AEAT) yang digunakan untuk penilaian mandiri biaya pengadilan.',
  },
  {
    question: 'Apakah ada biaya untuk kasus pidana?',
    answer: 'Tidak, di Spanyol tidak ada biaya pengadilan untuk kasus dalam ranah hukum pidana.',
  },
  {
    question: 'Bagaimana biaya variabel dihitung?',
    answer: 'Biaya variabel adalah 0,5% dari nilai sengketa hingga 1 juta euro. Di atas itu, biayanya adalah 0,25%. Maksimumnya adalah 10.000 euro.',
  },
];

const howToData = [
  {
    name: 'Pilih subjek pajak',
    text: 'Tentukan apakah Anda orang pribadi (bebas biaya) atau badan hukum (perusahaan).',
  },
  {
    name: 'Pilih yurisdiksi dan proses',
    text: 'Pilih jenis pengadilan (Perdata, Tata Usaha Negara, atau Sosial) dan jenis prosedurnya.',
  },
  {
    name: 'Masukkan nilai tuntutan',
    text: 'Tuliskan total jumlah yang dituntut dalam gugatan. Untuk kasus ketenagakerjaan (sosial), kolom ini tidak berlaku.',
  },
  {
    name: 'Lihat rincian',
    text: 'Dapatkan perhitungan otomatis biaya tetap, variabel, dan total untuk Formulir 696.',
  },
];

const bibliographyData = [
  {
    name: 'Undang-Undang 10/2012 tentang Biaya Pengadilan (Spanyol)',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Putusan Mahkamah Konstitusi 140/2016 tentang Biaya Pengadilan',
    url: 'https://www.boe.es/',
  },
  {
    name: 'Otoritas Pajak - Formulir 696',
    url: 'https://sede.agenciatributaria.gob.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Kalkulator Biaya Pengadilan 2026 Spanyol: Panduan Lengkap',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>Kalkulator Biaya Pengadilan</strong> adalah alat teknis yang dirancang untuk menentukan secara akurat biaya fiskal dari kekuasaan kehakiman di Spanyol sesuai dengan Undang-Undang 10/2012.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  bibliographyTitle: 'Sumber dan Referensi',
  ui: {
    labelTitle: 'Kalkulator Biaya Pengadilan',
    labelDescription: 'Hitung jumlah persis Formulir 696 berdasarkan yurisdiksi dan prosedur. Untuk perusahaan dan profesional.',
    labelLegalParameters: 'Parameter Hukum',
    labelEntityType: 'Subjek Pajak',
    labelJurisdiction: 'Yurisdiksi',
    labelProcedure: 'Jenis Proses',
    labelClaimAmount: 'Nilai Sengketa',
    labelEstimatedSettlement: 'Estimasi Penyelesaian',
    labelExemptSubject: 'Subjek Bebas Pajak',
    labelFixedQuote: 'Biaya Tetap (Prosedural)',
    labelVariableQuote: 'Biaya Variabel (0,5% / 0,25%)',
    labelTaxableBase: 'Dasar Pengenaan Pajak',
    labelCopySettlement: 'Salin Perhitungan',
    labelEntityJuridica: 'Badan Hukum (PT, CV)',
    labelEntityFisica: 'Orang Pribadi (Bebas Biaya)',
    labelCivilOrder: 'Hukum Perdata',
    labelAdministrativeOrder: 'Tata Usaha Negara',
    labelSocialOrder: 'Hukum Sosial/Ketenagakerjaan',
    labelModel696: 'Formulir 696 AEAT',
    labelOrdinary: 'Sidang Biasa',
    labelVerbal: 'Sidang Singkat',
    labelExecutive: 'Eksekutif',
    labelAppeal: 'Banding',
    labelCassation: 'Kasasi',
    labelAbbreviated: 'Prosedur Singkat',
    labelSupplication: 'Permohonan',
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
