import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'kalkulator-persentase';
const title = 'Kalkulator Persentase 4 in 1: Diskon, Kenaikan, dan Penurunan';
const description =
  'Hitung persentase dengan mudah secara online gratis. 4 alat dalam 1 untuk mencari X% dari Y, selisih persentase, tambah atau kurang PPN, diskon, dan tip otomatis.';

const faqData = [
  {
    question: 'Bagaimana cara kerja kalkulator ini?',
    answer:
      'Cukup masukkan nilai ke dalam kotak kasus penggunaan yang sesuai dengan masalah Anda dan kalkulator kami akan memproses formulanya tanpa perlu menekan tombol hitung apa pun.',
  },
  {
    question: 'Apakah ini berlaku untuk menghitung PPN atau pajak?',
    answer:
      'Ya, blok 4 ("Tambah atau kurang persentase") dirancang tepat untuk kasus-kasus seperti menerapkan PPN 11% pada harga dasar atau menghitung potongan pajak penghasilan.',
  },
  {
    question: 'Apakah bisa menangani angka desimal dan negatif?',
    answer:
      'Tentu saja. Anda dapat memasukkan angka desimal (menggunakan titik) dan ini juga akan berfungsi dengan nilai negatif jika Anda perlu menganalisis neraca akuntansi yang merugi.',
  },
  {
    question: 'Bisakah saya menyalin hasilnya?',
    answer:
      'Ya, setiap blok memiliki tombol di kotak hasil yang menyalin angka tersebut secara instan ke papan klip perangkat Anda sehingga dapat ditempelkan di aplikasi atau dokumen lain.',
  },
];

const howToData = [
  {
    name: 'Identifikasi masalah matematika Anda',
    text: 'Baca judul dari 4 blok dan pilih yang sesuai dengan apa yang ingin Anda ketahui (Misal: Berapa 20% dari 50? -> Blok 1).',
  },
  {
    name: 'Masukkan angka-angkanya',
    text: 'Isi kolom "X" dan "Y". Jangan khawatir tentang urutannya, kalimat di setiap blok akan memandu Anda secara visual.',
  },
  {
    name: 'Salin hasil instannya',
    text: 'Angka tersebut akan muncul secara real-time di bawah saat Anda mengetik. Tekan ikon salin jika ingin membawanya ke tempat lain.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
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
      text: 'Kalkulator Persentase 4-in-1: Kuasai Penghitungan Cepat',
      level: 2,
    },
    {
      type: 'title',
      text: 'Apa guna kalkulator persentase ganda?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Menghitung persentase adalah salah satu operasi matematika paling umum dalam kehidupan kita sehari-hari. Mulai dari menghitung diskon saat obral, mengetahui jumlah tip yang tepat di restoran, hingga menentukan margin keuntungan dalam bisnis atau bunga pinjaman. Meskipun ini adalah operasi sehari-hari, tidak selalu mudah untuk melakukannya di luar kepala atau mengingat formula tepatnya.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator persentase 4-in-1 kami mengelompokkan skenario yang paling banyak diminta. Anda tidak perlu lagi mencari di Google "cara menghitung 20 persen" atau "rumus hitung persentase". Anda memiliki empat operasi penting di satu tempat, secara interaktif dan dengan hasil instan.',
    },
    {
      type: 'title',
      text: 'Meninjau 4 kasus penggunaan paling umum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk memudahkan hidup Anda, kami telah memisahkan alat ini menjadi empat blok visual yang jelas yang menyelesaikan masalah nyata yang kita hadapi setiap hari:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Berapa X% dari Y?',
      html: '<p><strong>Kasus klasik.</strong> Berguna untuk menghitung diskon atau tip. Jika Anda ingin tahu berapa 15% dari Rp120.000, ini adalah alat Anda. Rumus yang mendasarinya hanya membagi persentase dengan 100 dan mengalikannya dengan nilai total.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Berapa persentase X dari Y?',
      html: '<p><strong>Ideal untuk proporsi.</strong> Jika Anda mendapat 45 poin dalam ujian dari 60, berapa nilai Anda dalam skala 100? Fungsi ini membagi bagian dengan total dan mengalikannya dengan seratus, memberikan bobot relatif yang tepat bagi Anda.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Kenaikan atau Penurunan Persentase',
      html: '<p><strong>Sangat cocok untuk keuangan dan analitik.</strong> Seberapa besar kenaikan sewa sejak tahun lalu? Jika sebelumnya Anda membayar Rp800.000 dan sekarang Rp840.000, fungsi ini akan memberi tahu Anda bahwa Anda mengalami kenaikan sebesar 5%. Ini mengukur pertumbuhan atau penurunan antara dua angka.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Tambah atau kurang persentase ke nilai',
      html: '<p><strong>Sangat berguna untuk PPN.</strong> Jika Anda memiliki harga dasar (misal Rp100.000) dan perlu menambahkan PPN 11%, kalkulator ini akan langsung memberi Anda hasil akhir Rp111.000 tanpa harus melakukan operasi perantara. Demikian pula, ini berfungsi untuk menerapkan diskon langsung (misal dikurangi 20%).</p>',
    },
    {
      type: 'title',
      text: 'Mitos umum tentang penghitungan persentase',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seringkali kita bingung saat melihat persentase besar atau desimal, tetapi ada beberapa "trik" matematika yang dapat membuat hidup Anda lebih mudah. Yang paling terkenal adalah <strong>reversibilitas persentase</strong>.',
    },
    {
      type: 'tip',
      title: 'Trik reversibilitas',
      html: '<p>Tahukah Anda bahwa X% dari Y sama persis dengan Y% dari X? Misalnya, jika Anda diminta menghitung 18% dari 50 di luar kepala, mungkin terdengar rumit. Tetapi jika Anda membaliknya, 50% dari 18 sangat mudah: hasilnya adalah 9! Ini berlaku untuk angka apa pun dan merupakan penyelamat yang luar biasa dalam kehidupan sehari-hari.</p>',
    },
    {
      type: 'title',
      text: 'Mengapa kita gagal saat menghitung pertumbuhan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Salah satu kesalahan paling umum terjadi pada kasus 3: kenaikan atau penurunan persentase. Bayangkan sebuah saham di bursa seharga Rp100.000, turun 50% dan keesokan harinya naik 50%. Intuisi mengatakan bahwa nilainya kembali menjadi Rp100.000, tetapi itu salah.',
    },
    {
      type: 'paragraph',
      html: 'Jika turun 50% dari Rp100.000, nilai barunya adalah Rp50.000. Jika dari Rp50.000 tersebut naik 50%, kenaikannya adalah setengah dari 50.000 (Rp25.000). Oleh karena itu, harga akhirnya akan menjadi Rp75.000. Ini adalah contoh klasik mengapa kenaikan dan penurunan persentase tidak simetris dan mengapa kalkulator dinamis seperti ini mencegah kesalahan finansial yang serius.',
    },
    {
      type: 'title',
      text: 'Penggunaan profesional dan akademis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antarmuka kami bebas dari gangguan dan dirancang untuk <strong>bekerja cepat</strong>. Anda dapat menyematkannya di tab browser, beralih antar kolom dengan cepat, dan berkat tombol salin di samping hasil, memindahkan data yang tepat ke Excel atau Google Sheets Anda tanpa risiko kesalahan pengetikan.',
    },
    {
      type: 'list',
      items: [
        'E-commerce dan toko fisik: Penghitungan cepat harga jual dengan menerapkan margin komersial dan menambahkan PPN.',
        'Manajemen sumber daya manusia: Penentuan kesenjangan upah, potongan pajak penghasilan, dan kenaikan gaji yang mengacu pada indeks harga konsumen.',
        'Pendidikan universitas: Dosen yang menyetarakan nilai atau mahasiswa di bidang sains yang menganalisis deviasi dari eksperimen mereka.',
        'Pemasaran digital: Pengukuran CTR (Click Through Rate), ROAS (Return on Ad Spend), atau Conversion Rate di eCommerce.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Persentase',
    labelCase1Title: 'Kasus 1',
    labelCase1Question: 'Berapa X% dari Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Rumus: (X / 100) × Y',
    labelCase2Title: 'Kasus 2',
    labelCase2Question: 'Berapa persentase X dari Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Rumus: (X / Y) × 100',
    labelCase3Title: 'Kasus 3',
    labelCase3Question: 'Selisih persentase antara dua nilai',
    labelCase3Placeholder1: 'Nilai 1',
    labelCase3Placeholder2: 'Nilai 2',
    labelCase3Formula: 'Rumus: ((Nilai 2 - Nilai 1) / |Nilai 1|) × 100',
    labelCase4Title: 'Kasus 4',
    labelCase4Question: 'Tambah atau kurang persentase ke nilai',
    labelCase4Placeholder1: 'Nilai',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Rumus: Nilai ± (Nilai × (% / 100))',
    labelCase4AddLabel: 'Tambah (Nilai + %)',
    labelCase4SubtractLabel: 'Kurang (Nilai - %)',
    labelResult: 'Hasil',
    labelDifference: 'Selisih',
    labelCopyTooltip: 'Salin hasil',
    labelFormula: 'Rumus',
    percentSymbol: '%',
  },
};
