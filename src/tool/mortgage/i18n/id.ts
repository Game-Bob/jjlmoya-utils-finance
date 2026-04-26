import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'kalkulator-hipotek';
const title = 'Simulator Hipotek dan Tabel Amortisasi Prancis';
const description =
  'Hitung angsuran hipotek bulanan Anda, cari tahu berapa besar bunga yang akan Anda bayar, dan visualisasikan jadwal amortisasi lengkap Anda secara instan.';

const faqData = [
  {
    question: 'Apa itu sistem amortisasi Prancis?',
    answer:
      'Ini adalah sistem yang paling banyak digunakan. Angsuran bulanan selalu sama, tetapi pada awalnya Anda membayar hampir seluruhnya untuk bunga dan sangat sedikit pokok. Pada akhirnya, yang terjadi adalah sebaliknya. Itulah mengapa melakukan pelunasan dipercepat lebih menguntungkan di tahun-tahun awal.',
  },
  {
    question: 'Bunga tetap atau mengambang di tahun 2026?',
    answer:
      'Bunga tetap: Anda membayar lebih banyak sekarang tetapi tidur nyenyak selama 30 tahun. Bunga mengambang: bisa lebih murah hari ini, tetapi jika suku bunga naik, angsuran Anda dapat melonjak drastis. Ini tergantung pada toleransi risiko Anda.',
  },
  {
    question: 'Berapa banyak yang saya hemat jika saya melunasi 10 juta rupiah dipercepat?',
    answer:
      'Tergantung pada waktunya. Jika dilakukan pada tahun ke-1 dari hipotek 200 juta rupiah dengan bunga 3%, Anda bisa menghemat lebih dari 15 juta rupiah bunga. Jika dilakukan pada tahun ke-20, penghematannya hanya sekitar 2 juta rupiah. Pengaturan waktu sangat penting.',
  },
  {
    question: 'Berapa persentase gaji saya yang harus dialokasikan untuk hipotek?',
    answer:
      'Rekomendasi umumnya adalah tidak melebihi 30-35% dari pendapatan bersih bulanan Anda (termasuk hutang lainnya). Melampaui ambang batas ini secara signifikan meningkatkan risiko gagal bayar jika terjadi hal yang tidak terduga.',
  },
];

const howToData = [
  {
    name: 'Masukkan jumlah pinjaman',
    text: 'Tuliskan jumlah total yang perlu Anda ajukan ke bank (setelah dikurangi uang muka Anda).',
  },
  {
    name: 'Sesuaikan suku bunga',
    text: 'Masukkan bunga tahunan yang ditawarkan oleh bank. Anda dapat membandingkan antara bunga tetap atau mengambang.',
  },
  {
    name: 'Pilih jangka waktu amortisasi',
    text: 'Tentukan berapa tahun Anda ingin melunasi pinjaman. Semakin lama jangka waktunya, angsuran semakin rendah tetapi Anda akan membayar total bunga yang lebih besar.',
  },
  {
    name: 'Analisis tabel amortisasi',
    text: 'Tinjau bulan demi bulan bagaimana perkembangan utang Anda dan bagian mana dari angsuran Anda yang digunakan untuk bunga vs pokok.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MortgageUI> = {
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
      text: 'Panduan Lengkap Hipotek: Sistem Prancis dan Amortisasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hipotek kemungkinan besar merupakan utang terbesar yang akan Anda ambil dalam hidup Anda. Memahami cara kerja sistem amortisasi Prancis sangat penting untuk mengambil keputusan cerdas yang dapat menghemat puluhan juta rupiah bagi Anda.',
    },
    {
      type: 'title',
      text: '„Jebakan” Sistem Prancis: Memahami Komposisi Angsuran Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar hipotek menggunakan <strong>Sistem Amortisasi Prancis</strong>. Ciri utamanya adalah angsuran bulanan selalu sama (jika bunga tetap), tetapi komposisinya berubah drastis seiring waktu.',
    },
    {
      type: 'tip',
      title: 'Bagaimana Angsuran Anda Berkembang',
      html: '<p><strong>Pada awal (Tahun 1-10):</strong> Anda membayar hampir semuanya UNTUK BUNGA dan sangat sedikit mengembalikan uang yang dipinjam. Pada hipotek 250 juta rupiah dengan bunga 3%, pembayaran pertama Anda bisa terdiri dari 80% bunga.</p><p><strong>Di tengah (Tahun 11-25):</strong> Proporsinya berangsur-angsur seimbang.</p><p><strong>Di akhir (Tahun 26-30):</strong> Anda membayar hampir seluruhnya UNTUK POKOK dan sangat sedikit bunga.</p>',
    },
    {
      type: 'paragraph',
      html: 'Oleh karena itu, jika Anda akan melakukan <strong>amortisasi hipotek</strong> (pembayaran dipercepat), jauh lebih menguntungkan untuk melakukannya di tahun-tahun awal pinjaman. Melunasi 10 juta rupiah di tahun ke-1 dapat menghemat lebih dari 15 juta rupiah bunga. Pembayaran dipercepat yang sama di tahun ke-20 hampir tidak menghemat Anda 2 juta rupiah.',
    },
    {
      type: 'title',
      text: 'Berapa Banyak Uang yang Harus Saya Alokasikan untuk Hipotek?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rekomendasi umum adalah agar hipotek Anda <strong>tidak melebihi 30-35% dari pendapatan bersih bulanan Anda</strong>. Jika Anda melampaui ambang batas ini, Anda secara signifikan meningkatkan risiko gagal bayar jika terjadi hal yang tidak terduga (kehilangan pekerjaan, sakit, dll.).',
    },
    {
      type: 'title',
      text: 'Konteks 2026: Bunga Tetap vs Mengambang',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dengan suku bunga yang fluktuatif, memilih antara <strong>Bunga Tetap</strong> atau <strong>Bunga Mengambang</strong> adalah keputusan strategis yang dapat menghabiskan jutaan rupiah per tahun.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bunga Tetap',
          description: 'Anda membayar sedikit lebih banyak sekarang, tetapi tidur tenang mengetahui angsuran Anda tidak akan pernah naik.',
          points: [
            'Angsuran terprediksi selama 30 tahun',
            'Perlindungan terhadap kenaikan suku bunga',
            'Ketenangan pikiran dalam ekonomi yang tidak pasti',
            'Ideal untuk anggaran ketat',
          ],
        },
        {
          title: 'Bunga Mengambang',
          description: 'Bisa lebih murah hari ini, tetapi mengekspos ekonomi Anda pada volatilitas.',
          highlight: true,
          points: [
            'Angsuran awal lebih rendah',
            'Risiko kenaikan suku bunga pasar',
            'Potensi dampak serius pada anggaran',
            'Hanya untuk mereka yang mentoleransi risiko tinggi',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Keputusan Tetap vs Mengambang Tergantung pada Profil Anda',
      html: '<p><strong>Pilih Bunga Tetap jika:</strong> Anggaran Anda ketat, Anda mencari kepastian, dan tidak mentoleransi kejutan bulanan yang tidak menyenangkan.</p><p><strong>Pilih Bunga Mengambang jika:</strong> Anda memiliki penyangga finansial, Anda yakin suku bunga akan turun, atau hipotek Anda berjumlah kecil atau jangka pendek.</p>',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Hipotek',
    labelLoanAmount: 'Jumlah Pinjaman',
    labelInterestRate: 'Bunga Tahunan',
    labelYears: 'Jangka Waktu (Tahun)',
    labelMonthlyExtra: 'Tambah Tabungan Bulanan',
    labelMonthlyPayment: 'Angsuran Bulanan',
    labelMonthCount: 'bulan',
    labelSavingsCard: 'Potensi Penghematan Anda',
    labelSavingsInterest: 'Bunga',
    labelSavingsTime: 'Waktu',
    labelTimelineComparison: 'Perbandingan Waktu',
    labelTimelineOriginal: 'Durasi Asli',
    labelTimelineOptimized: 'Durasi dengan Amortisasi',
    labelCostBreakdown: 'Rincian Biaya Total',
    labelBorrowed: 'Dipinjam',
    labelTotalBorrowed: 'Total Pinjaman',
    labelTotalInterest: 'Total Bunga',
    labelAmortizationTable: 'Tabel Amortisasi',
    labelTableHeader: 'Lihat tabel lengkap',
    labelViewAll: 'Lihat semua',
    labelPaid: 'Hipotek Lunas',
    labelTableMonth: 'Bulan',
    labelTableInterest: 'Bunga',
    labelTablePrincipal: 'Pokok',
    labelTableExtra: 'Ekstra',
    labelTableBalance: 'Sisa Utang',
    labelMoreMonths: 'bulan lagi',
    labelMonth: 'Bulan',
    currencySymbol: 'Rp',
    currencyCode: 'IDR',
    currencyLocale: 'id-ID',
    monthPlural: 'bulan',
    yearPlural: 'tahun',
  },
};
