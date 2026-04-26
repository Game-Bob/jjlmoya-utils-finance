import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'bunga-majemuk';
const title = 'Kalkulator Bunga Majemuk: Visualisasikan Kekayaan Masa Depan Anda';
const description =
  'Temukan bagaimana investasi kecil dapat berubah menjadi kekayaan besar. Alat utama untuk merencanakan kebebasan finansial dan masa pensiun Anda.';

const faqData = [
  {
    question: 'Apa itu bunga majemuk?',
    answer:
      'Ini adalah bunga yang dihitung berdasarkan modal awal dan juga akumulasi bunga dari periode sebelumnya. Hal ini menghasilkan pertumbuhan investasi yang eksponensial seiring berjalannya waktu.',
  },
  {
    question: 'Apa perbedaan dengan bunga tunggal?',
    answer:
      'Pada bunga tunggal, bunga hanya dihitung dari modal awal. Pada bunga majemuk, bunga diinvestasikan kembali, yang berarti "bunga Anda menghasilkan lebih banyak bunga".',
  },
  {
    question: 'Apa itu "Aturan 72"?',
    answer:
      'Ini adalah rumus cepat untuk memperkirakan berapa lama waktu yang dibutuhkan agar investasi menjadi dua kali lipat: bagi 72 dengan tingkat pengembalian tahunan. Misalnya, pada bunga 8% per tahun, Anda akan melipatgandakan uang Anda dalam 9 tahun.',
  },
  {
    question: 'Mengapa penting untuk mulai berinvestasi sejak muda?',
    answer:
      'Karena efek eksponensial, faktor yang paling menentukan bukanlah jumlah uang yang ditabung, melainkan waktu. Memulai beberapa tahun lebih awal dapat menghasilkan kekayaan akhir yang jauh lebih besar karena kapitalisasi.',
  },
];

const howToData = [
  {
    name: 'Masukkan modal awal',
    text: 'Tuliskan jumlah uang yang akan Anda gunakan untuk memulai rencana investasi Anda.',
  },
  {
    name: 'Tentukan kontribusi berkala',
    text: 'Tunjukkan berapa banyak uang yang akan Anda tabung dan investasikan setiap bulan atau setiap tahun sebagai tambahan.',
  },
  {
    name: 'Perkirakan imbal hasil tahunan',
    text: 'Masukkan persentase keuntungan tahunan yang Anda harapkan (misal: 7% untuk historis S&P 500).',
  },
  {
    name: 'Sesuaikan cakrawala waktu',
    text: 'Pilih berapa tahun Anda akan mempertahankan investasi untuk memvisualisasikan pertumbuhan eksponensial modal Anda.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
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
      text: 'Keajaiban Bunga Majemuk: Bangun Kekayaan Anda Secara Eksponensial',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein menyebutnya sebagai "keajaiban dunia kedelapan". <strong>Bunga majemuk</strong> adalah mekanisme paling kuat untuk menghasilkan kekayaan jangka panjang. Anda tidak perlu menjadi ahli keuangan untuk memanfaatkannya: Anda hanya butuh waktu, kesabaran, dan uang yang diinvestasikan.',
    },
    {
      type: 'title',
      text: 'Bunga Tunggal vs Majemuk: Metafora Bola Salju',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bayangkan Anda memiliki bola salju di atas bukit. <strong>Bunga tunggal</strong> seperti mendorong bola itu ke bawah dan harus menambahkan salju secara manual setiap meternya agar besar. <strong>Bunga majemuk</strong> seperti membiarkan bola itu menggelinding sendiri: ia mengumpulkan salju dengan sendirinya, dan semakin besar ia tumbuh, semakin banyak permukaan yang dimilikinya untuk mengumpulkan <em>bahkan lebih banyak</em> salju di setiap putaran.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bunga Tunggal',
          description: 'Bunga selalu dihitung berdasarkan modal awal saja.',
          points: [
            'Rumus: Modal × Tingkat × Waktu',
            'Pertumbuhan linier dan terprediksi',
            'Digunakan dalam pinjaman jangka pendek',
            'Tanpa reinvestasi keuntungan',
          ],
        },
        {
          title: 'Bunga Majemuk',
          description: 'Bunga ditambahkan ke modal dan menghasilkan bunga baru.',
          highlight: true,
          points: [
            'Rumus: Modal × (1 + Tingkat)^Waktu',
            'Pertumbuhan eksponensial yang dipercepat',
            'Dasar dari semua investasi jangka panjang',
            'Keuntungan Anda menghasilkan lebih banyak keuntungan',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Secara matematis, keuntungan Anda menghasilkan keuntungan baru. Di tahun-tahun awal tampaknya lambat, tetapi setelah melewati "titik balik", kurva akan melonjak secara vertikal. Di sinilah kekayaan sejati tercipta.',
    },
    {
      type: 'title',
      text: 'Mengapa waktu adalah sekutu terbesar Anda?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Faktor yang paling menentukan bukanlah jumlah uang yang Anda investasikan, melainkan <strong>berapa tahun Anda membiarkannya tumbuh</strong>. Memulai 10 tahun lebih awal dapat menghasilkan kekayaan akhir 2 atau 3 kali lipat lebih besar, bahkan jika Anda menginvestasikan total uang yang lebih sedikit. Efek eksponensial ini adalah alasan mengapa investor muda memiliki keuntungan yang tidak tertandingi.',
    },
    {
      type: 'tip',
      title: 'Aturan 72',
      html: '<p>Bagi 72 dengan imbal hasil tahunan Anda untuk mengetahui berapa tahun yang dibutuhkan untuk <strong>melipatgandakan uang Anda</strong>.</p><p><em>Contoh: Pada bunga 8%, Anda melipatgandakannya setiap 9 tahun (72/8 = 9).</em></p><p>Rumus ajaib ini berlaku untuk tingkat pengembalian berapa pun dan membantu Anda memperkirakan pertumbuhan investasi Anda dengan cepat.</p>',
    },
    {
      type: 'tip',
      title: 'Saran 2026',
      html: '<p>Inflasi tetap menjadi faktor. Pastikan imbal hasil bersih Anda melebihi setidaknya 2-3% per tahun agar tidak kehilangan daya beli. Investasikan pada aset yang tumbuh lebih cepat daripada inflasi.</p>',
    },
    {
      type: 'title',
      text: 'Frekuensi Kapitalisasi: Apakah Berpengaruh?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bunga dapat dikapitalisasi secara tahunan, semesteran, triwulanan, bulanan, atau bahkan harian. Semakin <strong>sering kapitalisasi dilakukan</strong>, semakin besar efek majemuknya. Modal yang sama dengan tingkat yang sama akan tumbuh lebih besar jika bunga dimajemukkan secara bulanan dibandingkan secara tahunan.',
    },
  ],
  ui: {
    labelTitle: 'Simulator Investasi',
    labelRealtime: 'Waktu nyata',
    labelInitial: 'Kontribusi Awal',
    labelMonthly: 'Kontribusi Bulanan',
    labelRate: 'Hasil Tahunan',
    labelYears: 'Tahun',
    labelMyMoney: 'Uang Anda',
    labelProfit: 'Keuntungan (Bunga)',
    labelTotal: 'Total Terakumulasi',
    labelYear: 'Tahun',
    labelPrincipal: 'Uang Anda (Pokok)',
    labelInterest: 'Bunga yang Dihasilkan',
    insightPrefix: '[TIPS] Di tahun ke-',
    insightSuffix:
      ', bunga tahunan yang Anda hasilkan akan melampaui kontribusi Anda. Uang sudah bekerja lebih keras daripada Anda!',
    currencySymbol: 'Rp',
    currencyCode: 'IDR',
    currencyLocale: 'id-ID',
  },
};
