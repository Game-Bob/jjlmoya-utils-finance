import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'pengoptimal-lotre-kalkulator-peluang';
const title = 'Pengoptimal Lotre dan Kalkulator Peluang';
const description = 'Analisis peluang Anda dalam Lotre Natal Spanyol, Euromillions, dan Bonoloto. Hitung jumlah tiket optimal dan nilai gairah dari taruhan Anda.';

const faqData = [
  {
    question: 'Apa itu ekspektasi matematika dalam lotre?',
    answer: 'Ini adalah nilai rata-rata yang Anda harapkan untuk menang untuk setiap euro yang dipertaruhkan. Di hampir semua lotre, ekspektasi matematikanya negatif (biasanya Anda kehilangan 0,50€ untuk setiap 1€ yang dimainkan), yang berarti dalam jangka panjang, bandar selalu menang.',
  },
  {
    question: 'Mana yang lebih baik, memainkan banyak nomor berbeda atau banyak tiket dengan nomor yang sama?',
    answer: 'Jika Anda ingin memenangkan "sesuatu", diversifikasi nomor meningkatkan peluang Anda untuk mendapatkan hadiah kecil. Jika Anda mengincar hadiah utama, memainkan satu nomor memberikan peluang yang sama untuk jackpot, tetapi hadiahnya lebih besar jika kena.',
  },
  {
    question: 'Apakah benar-benar menguntungkan bermain Lotre Natal Spanyol (El Gordo)?',
    answer: 'Dari sudut pandang matematika murni, tidak. Hanya 70% dari hasil penjualan yang dikembalikan sebagai hadiah. Namun, peluang hadiah utamanya (1 berbanding 100.000) jauh lebih tinggi daripada Euromillions (1 berbanding 140 juta).',
  },
  {
    question: 'Dapatkah saya meningkatkan peluang saya dengan statistik?',
    answer: 'Tidak. Pengundian lotre adalah proses acak yang independen. Fakta bahwa sebuah nomor keluar kemarin sama sekali tidak mempengaruhi peluangnya untuk keluar hari ini.',
  },
  {
    question: 'Apa arti "kesulitan" dalam tabel perbandingan?',
    answer: 'Ini adalah ukuran relatif seberapa sulit untuk memenangkan hadiah pertama. Terjangkau (kurang dari 200rb), Sulit (kurang dari 20jt), Ekstrem (lebih dari 20jt).',
  },
];

const howToData = [
  {
    name: 'Pilih jenis undian',
    text: 'Pilih antara Lotre Natal, Primitiva, Euromillions, atau Bonoloto untuk menganalisis aturan spesifiknya.',
  },
  {
    name: 'Tentukan investasi Anda',
    text: 'Tentukan berapa banyak tiket atau taruhan yang Anda rencanakan untuk dibeli.',
  },
  {
    name: 'Analisis peluang kritis',
    text: 'Lihat peluang nyata untuk memenangkan hadiah utama dibandingkan dengan hadiah kecil atau pengembalian modal.',
  },
  {
    name: 'Evaluasi risiko/manfaat',
    text: 'Tinjau ekspektasi matematika untuk memahami berapa banyak uang yang secara statistik Anda "berikan" untuk setiap euro yang diinvestasikan.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Matematika dari Sebuah Harapan',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Bermain lotre bagi banyak orang adalah membeli sebuah ilusi dengan harga beberapa euro. Namun, di balik itu semua terdapat salah satu cabang matematika yang paling menarik: statistik peluang ekstrem.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Lotre Natal (El Gordo)',
    description: 'Pembagian hadiah terbesar di dunia. Peluang tinggi untuk memenangkan sesuatu.',
  },
  nino: {
    name: 'Lotre Anak (El Niño)',
    description: 'Peluang pengembalian modal tiga kali lipat dibandingkan Lotre Natal.',
  },
  euromillones: {
    name: 'Euromillions',
    description: 'Hadiah astronomis, peluang yang hampir mustahil.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'Lotre tertua di Spanyol. Sulit tetapi lebih murah.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'Yang paling ekonomis. Ideal untuk bermain harian dengan anggaran kecil.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum': 'Sumber dan Referensi',
  ui: {
    gameTranslations,
    labelTitle: 'Pengoptimal Lotre',
    labelDescription: 'Bandingkan undian, hitung ekspektasi matematika Anda, dan bermainlah dengan cerdas.',
    labelSelectGame: 'Pilih lotre',
    labelConfigurePlay: 'Konfigurasi Permainan',
    labelAdjustQuantity: 'Sesuaikan jumlah tiket untuk melihat peluang nyata Anda.',
    labelTotalInvestment: 'Total Investasi',
    labelTickets: 'Jumlah Tiket / Taruhan',
    labelUnits: 'unit',
    labelExposureAnalysis: 'Analisis Eksposur',
    labelSelectLottery: 'Pilih lotre untuk melihat analisis risiko.',
    labelOptimalCutoff: 'Titik Potong yang Disarankan',
    labelProbabilitySuccess: 'Peluang Berhasil',
    labelExpectedValue: 'Nilai Ekspektasi (EV)',
    labelReturnTheoretical: 'Pengembalian teoritis untuk setiap permainan yang dilakukan.',
    labelSocialReturnIndex: 'Indeks Keuntungan Sosial',
    labelLow: 'Rendah',
    labelMedium: 'Sedang',
    labelHigh: 'Tinggi',
    labelComparison: 'Perbandingan Hadiah',
    labelLottery: 'Lotre',
    labelCost: 'Biaya',
    labelTypicalPrize: 'Hadiah Tipikal',
    labelDifficulty: 'Kesulitan',
    labelAccessible: 'Terjangkau',
    labelDifficult: 'Sulit',
    labelExtreme: 'Ekstrem',
    labelNote: 'Catatan: Hadiah Natal dan El Niño adalah per tiket (20€). Euromillions, dll. adalah jackpot tipikal.',
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
