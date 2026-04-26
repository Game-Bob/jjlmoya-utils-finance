import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflasi-spanyol';
const title = 'Kalkulator Inflasi Spanyol: Nilai Uang Historis';
const description =
  'Temukan berapa nilai peseta Anda hari ini atau seberapa besar biaya hidup telah naik sejak 1980. Data CPI historis Spanyol yang diperbarui hingga 2026.';

const faqData = [
  {
    question: 'Apa itu CPI dan bagaimana cara menghitungnya?',
    answer:
      'Consumer Price Index (CPI) mengukur evolusi harga dari sekeranjang barang dan jasa yang mewakili konsumsi Spanyol. Ini dihitung dengan membandingkan biaya keranjang ini dalam periode waktu yang berbeda.',
  },
  {
    question: 'Berapa banyak uang yang telah kehilangan nilai sejak 1980?',
    answer:
      '1.000 peseta tahun 1980 setara dengan sekitar 60€ hari ini dalam daya beli. Uang telah kehilangan lebih dari 90% nilainya dalam 40+ tahun ini karena akumulasi inflasi.',
  },
  {
    question: 'Mengapa tabungan saya kehilangan nilai jika tidak diputar?',
    answer:
      'Jika inflasi 3% per tahun dan akun Anda memberikan bunga 0%, Anda kehilangan 3% daya beli setiap tahun. Untuk mempertahankan nilai riil, tabungan Anda harus menghasilkan setidaknya setara tingkat inflasi.',
  },
  {
    question: 'Kapan periode inflasi tertinggi di Spanyol?',
    answer:
      'Tahun 80-an adalah periode paling inflasioner, dengan tingkat dua digit (hingga 15%). Harga berubah drastis dari bulan ke bulan. Sejak euro (2002), inflasi lebih terkendali, kecuali pada 2021-2023.',
  },
  {
    question: 'Bagaimana inflasi memengaruhi tabungan saya?',
    answer:
      'Inflasi bertindak seperti "pajak diam-diam". Jika inflasi 5% dan uang Anda di bawah kasur, pada akhir tahun Anda dapat membeli produk 5% lebih sedikit. Sangat penting untuk berinvestasi guna menangkal efek ini.',
  },
];

const howToData = [
  {
    name: 'Pilih tahun asal',
    text: 'Pilih dari tanggal berapa Anda ingin menghitung nilai uang (tersedia dari 1980 hingga 2026).',
  },
  {
    name: 'Masukkan jumlah',
    text: 'Tuliskan jumlah dalam peseta (untuk tanggal lama) atau dalam euro yang ingin Anda bandingkan.',
  },
  {
    name: 'Pilih tahun akhir',
    text: 'Tentukan hingga kapan Anda ingin melihat evolusi daya beli.',
  },
  {
    name: 'Analisis hasil riil',
    text: 'Lihat kesetaraan daya beli dan persentase akumulasi inflasi pada periode tersebut.',
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

export const content: ToolLocaleContent<InflationUI> = {
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
      text: 'Kalkulator Inflasi Historis: Pahami Nilai Riil Uang Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflasi adalah "pajak diam-diam" yang melahap tabungan Anda tahun demi tahun. Tahukah Anda berapa banyak nilai uang Anda yang hilang sejak 1980? Berapa biaya sebenarnya dari kopi yang Anda bayar seharga 300 peseta 20 tahun yang lalu?',
    },
    {
      type: 'title',
      text: 'Inflasi: Pajak Diam-diam atas Kekayaan Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Inflasi</strong> adalah peningkatan harga yang berkelanjutan dan meluas. Meskipun terlihat seperti fenomena teknis, dampaknya terhadap ekonomi riil bersifat langsung: inflasi mengurangi jumlah barang yang dapat Anda beli dengan jumlah uang yang sama, mengikis tabungan seumur hidup jika tidak ada tindakan perlindungan yang diambil.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Rekor Historis 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Puncak Harga 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Target Stabilitas',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Istilah Keuangan Penting',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'CPI',
          definition: 'Indikator yang merangkum variasi harga dari sekeranjang konsumsi dasar.',
        },
        {
          term: 'Daya Beli',
          definition: 'Kapasitas pembelian riil suatu mata uang pada waktu tertentu.',
        },
        {
          term: 'Deflasi',
          definition: 'Penurunan harga secara umum yang dapat melumpuhkan investasi.',
        },
        {
          term: 'Stagflasi',
          definition: 'Skenario inflasi tinggi dikombinasikan dengan stagnasi ekonomi.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tonggak Ekonomi dan Komparatif',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Krisis Tahun 80 an',
          description: 'Periode yang ditandai oleh inflasi dua digit dan ketidakstabilan tenaga kerja yang besar.',
          points: [
            'Suku bunga yang sangat tinggi',
            'Kehilangan nilai peseta yang cepat',
            'Gaji yang ditelan oleh harga',
          ],
        },
        {
          title: 'Inflasi Pandemi: 2021 hingga 2023',
          description: 'Kenaikan tajam karena biaya energi dan masalah dalam rantai pasokan.',
          highlight: true,
          points: [
            'Dampak langsung pada keranjang belanja',
            'Kenaikan suku bunga ECB untuk mengerem konsumsi',
            'Pemulihan daya beli yang lambat',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Produk atau Indikator', 'Nilai tahun 1980 (Estimasi)', 'Nilai tahun 2026 (Proyeksi)', 'Variasi'],
      rows: [
        ['Roti', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Kopi di Kafe', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Tiket Bioskop', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Gaji Minimum Bulanan', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Bahaya Uang Tunai',
      html: 'Menyimpan uang di bawah kasur atau di rekening tanpa bunga adalah jaminan kehilangan modal. Inflasi rata-rata 3% mengurangi nilai tabungan Anda menjadi setengahnya dalam kurun waktu kurang dari 25 tahun.',
    },
    {
      type: 'title',
      text: 'Saran untuk Melindungi Tabungan Anda',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Strategi Investasi',
      items: [
        {
          pro: 'Aset Riil: Properti biasanya nilainya naik mengikuti inflasi.',
          con: 'Likuiditas rendah dan biaya masuk yang tinggi.',
        },
        {
          pro: 'Saham dan Reksa Dana: Imbal hasil yang biasanya melebihi CPI dalam jangka panjang.',
          con: 'Volatilitas dan risiko pasar dalam jangka pendek.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kebiasaan Keuangan Sehat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tinjau pengeluaran Anda secara berkala untuk mendeteksi kenaikan tersembunyi.',
        'Diversifikasikan tabungan ke berbagai jenis aset.',
        'Pertimbangkan obligasi negara yang terkait dengan inflasi.',
        'Gunakan alat bantu perhitungan untuk melihat konteks penawaran dan gaji.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Peringatan tentang Bunga Majemuk Negatif',
      html: 'Inflasi bertindak seperti bunga majemuk terbalik. Setiap tahun, persentase kerugian diterapkan pada nilai yang sudah berkurang, mempercepat hilangnya kekayaan jika tidak ada intervensi.',
    },
    {
      type: 'summary',
      title: 'Kesimpulan Penting',
      items: [
        'CPI hanyalah rata-rata; inflasi pribadi Anda tergantung pada kebiasaan Anda.',
        'Investasi bukan pilihan jika ingin mempertahankan nilai riil dari hasil kerja.',
        'Kalkulator inflasi sangat penting untuk memahami kontrak jangka panjang.',
      ],
    },
    {
      type: 'message',
      title: 'Ambil Kendali atas Ekonomi Anda',
      html: 'Kalkulator kami menggunakan data resmi dari INE untuk memberikan Anda pandangan paling akurat tentang masa lalu dan masa kini ekonomi Spanyol.',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Inflasi Spanyol',
    labelInitialAmount: 'Uang Awal',
    labelInitialYear: 'Pada tahun',
    labelFinalAmount: 'Kesetaraan Hari Ini',
    labelFinalYear: 'Tahun 2026',
    labelInflationRate: 'Akumulasi Inflasi',
    labelCalculatedOn: 'Perhitungan dilakukan menggunakan data resmi INE hingga 2025 dan estimasi proyeksi untuk akhir 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'id-ID',
    labelYearSelect: 'Pada tahun',
    labelIn: 'Di',
    labelEquivalentToday: 'setara hari ini dengan',
    labelInflationAccumulated: 'Akumulasi Inflasi',
    labelYear: 'Tahun',
  },
};
