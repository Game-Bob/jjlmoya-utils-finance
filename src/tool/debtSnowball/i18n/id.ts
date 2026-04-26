import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'kalkulator-metode-bola-salju-utang';
const title = 'Kalkulator Metode Bola Salju Utang: Rencana Pelunasan 2026';
const description = 'Hitung tanggal kebebasan finansial Anda dengan metode bola salju Dave Ramsey. Atur utang Anda dan visualisasikan rencana pelunasan bulanan gratis.';

const faqData = [
  {
    question: 'Apa itu metode bola salju utang?',
    answer: 'Ini adalah strategi pelunasan utang yang memprioritaskan pembayaran utang dari saldo terkecil hingga terbesar, tanpa mempedulikan suku bunga. Metode ini fokus pada kemenangan psikologis dari melunasi akun kecil dengan cepat.',
  },
  {
    question: 'Mengapa tidak mengurutkan berdasarkan suku bunga (Metode Longsor)?',
    answer: 'Secara matematis, melunasi bunga tertinggi terlebih dahulu menghemat lebih banyak uang. Namun, banyak orang menyerah karena tidak melihat hasil segera. Bola Salju memprioritaskan motivasi.',
  },
  {
    question: 'Haruskah saya memiliki tabungan sebelum memulai rencana ini?',
    answer: 'Disarankan untuk memiliki "Dana Darurat Awal" (sekitar 1.000€) sebelum menyerang utang. Ini mencegah Anda menggunakan kartu kredit lagi saat ada keadaan darurat.',
  },
  {
    question: 'Utang apa saja yang harus saya masukkan ke dalam kalkulator?',
    answer: 'Semua utang konsumsi: kartu kredit, pinjaman pribadi, kredit kendaraan, tagihan tertunggak. KPR biasanya ditinggalkan untuk tahap selanjutnya karena jumlahnya yang besar.',
  },
];

const howToData = [
  {
    name: 'Daftarkan utang Anda',
    text: 'Catat semua utang Anda dengan mencantumkan saldo sisa dan pembayaran bulanan minimum.',
  },
  {
    name: 'Tentukan anggaran ekstra',
    text: 'Hitung berapa banyak uang tambahan yang dapat Anda alokasikan setiap bulan di atas pembayaran minimum.',
  },
  {
    name: 'Urutkan dan prioritaskan',
    text: 'Kalkulator akan mengurutkan secara otomatis dari saldo terkecil hingga terbesar. Bayar minimum untuk semua kecuali yang terkecil.',
  },
  {
    name: 'Jalankan kaskade',
    text: 'Setelah utang terkecil lunas, ambil semua uang yang Anda alokasikan untuk itu dan tambahkan ke pembayaran utang berikutnya.',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
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
      text: 'Kalkulator Utang Metode Bola Salju: Panduan 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hidup dengan utang itu berat. <strong>Metode bola salju</strong> telah terbukti sebagai salah satu strategi paling efektif untuk mendapatkan kembali kebebasan finansial.',
    },
  ],
  ui: {
    labelTitle: 'Kebebasan total',
    labelDescription: 'Mulai perjalanan Anda menuju kebebasan finansial dengan metode yang paling efektif secara psikologis.',
    labelExtraBudget: 'ANGGARAN EKSTRA BULANAN',
    labelExtraBudgetHelp: 'Uang tambahan di atas pembayaran minimum.',
    labelSnowballMethod: 'BOLA SALJU',
    labelAvalancheMethod: 'METODE LONGSOR',
    labelAddNewDebt: 'TAMBAH UTANG BARU',
    labelDebtName: 'Nama',
    labelDebtNamePlaceholder: 'Misal: Visa',
    labelDebtBalance: 'JUMLAH UTANG',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'PEMBAYARAN MINIMUM',
    labelInterestRate: 'SUKU BUNGA',
    labelInterestHelp: 'TAHUNAN',
    labelAddButton: 'TAMBAH KE RENCANA',
    labelClearData: 'Hapus pengaturan',
    labelClearDataConfirm: 'Kosongkan rencana?',
    labelDeleteDebt: 'Hapus',
    labelDebtInventory: 'Daftar Utang',
    labelFreedomDate: 'TANGGAL KEBEBASAN FINANSIAL',
    labelActiveMethod: 'METODE',
    labelMonthsRemaining: 'SISA BULAN',
    labelTotalInterest: 'TOTAL BUNGA',
    labelTotalPaid: 'TOTAL PEMBAYARAN AKHIR',
    labelInterestSaved: 'BUNGA YANG DIHEMAT',
    labelYourStrategy: 'Strategi Anda Langkah demi Langkah',
    labelStrategyHelp: 'Setiap langkah menunjukkan total pembayaran Anda.',
    labelPriority: 'PRIORITAS UTAMA',
    labelStep: 'LANGKAH',
    labelAfterPaying: 'SETELAH MELUNASI SEBELUMNYA',
    labelMonthlyPayment: 'Pembayaran bulanan',
    labelDetailedAmortization: 'Amortisasi Terperinci',
    labelExportCSV: 'Ekspor .CSV',
    labelDate: 'Tanggal',
    labelStartingBalance: 'Saldo Awal',
    labelInterest: 'Bunga',
    labelAmortization: 'Amortisasi',
    labelTotalMonth: 'Total Bulan',
    labelRemaining: 'Sisa',
    labelFree: 'LUNAS',
    labelDebtInfinite: 'UTANG TAK TERHINGGA',
    labelInvalidInput: 'Tentukan saldo total dan pembayaran minimum',
    labelEmptyStateTitle: 'Mulai rencana Anda',
    labelEmptyStateDescription: 'Utang Anda tidak selamanya. Tambahkan utang Anda.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'id-ID',
  },
};
