import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'kalkulator-aturan-4-persen-fire';
const title = 'Kalkulator FIRE: Aturan 4% untuk Kebebasan Finansial Anda';
const description = 'Hitung angka ajaib Anda untuk kemandirian finansial menggunakan aturan 4%. Rencanakan pensiun dini Anda dan visualisasikan jalan Anda menuju kebebasan ekonomi.';

const faqData = [
  {
    question: 'Apa itu Aturan 4%?',
    answer: 'Aturan 4% adalah strategi penarikan berdasarkan Studi Trinity yang menunjukkan bahwa Anda dapat menarik 4% dari kekayaan Anda pada tahun pertama pensiun, disesuaikan dengan inflasi pada tahun-tahun berikutnya, tanpa menghabiskan dana Anda dalam 30 tahun.',
  },
  {
    question: 'Apa itu FIRE?',
    answer: 'FIRE singkatan dari Financial Independence, Retire Early (Kemandirian Finansial, Pensiun Dini). Ini adalah gerakan yang mencari kebebasan ekonomi melalui kombinasi agresif dari tabungan dan investasi cerdas.',
  },
  {
    question: 'Berapa angka ajaib saya?',
    answer: 'Angka ajaib Anda adalah total kekayaan yang perlu Anda kumpulkan untuk bisa hidup dari imbal hasil tanpa bekerja. Ini dihitung dengan membagi pengeluaran tahunan Anda dengan tingkat penarikan aman (biasanya 4%).',
  },
  {
    question: 'Apa perbedaan antara Lean, Barista, dan Fat FIRE?',
    answer: 'Lean FIRE adalah hidup dengan pengeluaran minimal (70% dari pengeluaran saat ini), Barista FIRE adalah bekerja paruh waktu sementara imbal hasil menutup sisanya (50% dari pengeluaran), dan Fat FIRE adalah memiliki gaya hidup mewah (150% dari pengeluaran).',
  },
  {
    question: 'Apakah Aturan 4% realistis?',
    answer: 'Aturan 4% memiliki probabilitas keberhasilan historis sebesar 95% dalam portofolio 50/50 saham-obligasi selama 30 tahun. Namun, ini tidak mempertimbangkan risiko urutan imbal hasil dan terutama didasarkan pada data pasar AS.',
  },
];

const howToData = [
  {
    name: 'Hitung pengeluaran bulanan Anda',
    text: 'Analisis berapa banyak yang benar-benar Anda habiskan setiap bulan termasuk tempat tinggal, makanan, layanan, dan hiburan.',
  },
  {
    name: 'Pilih tingkat penarikan aman Anda',
    text: 'Aturan 4% adalah standar, tetapi Anda dapat menyesuaikan antara 2,5% (lebih konservatif) dan 6% (lebih agresif) sesuai toleransi risiko Anda.',
  },
  {
    name: 'Masukkan kekayaan Anda saat ini',
    text: 'Jumlahkan total investasi, tabungan, dan aset Anda yang menghasilkan pendapatan pasif.',
  },
  {
    name: 'Visualisasikan kemajuan Anda',
    text: 'Amati grafik pertumbuhan dan pencapaian kebebasan (Lean, Barista, Fat FIRE) untuk memahami kapan Anda akan mencapai tujuan Anda.',
  },
];

const bibliographyData = [
  {
    name: 'The Trinity Study: Portfolio Survivability',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Early Retirement Forum - 4% Rule Discussion',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Shiller CAPE Index - Market Valuations',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Bogleheads - Panduan Investasi',
    url: 'https://bogleheads.es/',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum tentang FIRE',
  faq: faqData,
  bibliographyTitle: 'Sumber dan Referensi',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Aturan 4%: Cahawan Suci Pensiun Dini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Temukan cara menghitung kekayaan yang Anda butuhkan untuk hidup dari imbal hasil selamanya. <strong>Aturan 4%</strong> muncul dari Studi Trinity, yang dilakukan pada tahun 1998 oleh tiga profesor keuangan. Mereka menganalisis data historis sejak 1926 untuk menentukan persentase berapa yang bisa ditarik setiap tahun tanpa menghabiskan portofolio dalam 30 tahun.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Keberhasilan Historis' },
        { value: '50/50', label: 'Campuran Saham/Obligasi' },
        { value: '30', label: 'Tahun Horizon' },
        { value: '4%', label: 'Penarikan Aman' },
      ],
    },
    {
      type: 'title',
      text: 'Apa itu Gerakan FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE adalah akronim dari Financial Independence, Retire Early (Kemandirian Finansial, Pensiun Dini).',
        'Mencari kebebasan untuk memilih apa yang harus dilakukan dengan waktu Anda tanpa uang menjadi kendala.',
        'Didasarkan pada optimalisasi tabungan dan investasi cerdas.',
        'Tujuannya adalah agar aset Anda menghasilkan arus kas yang cukup untuk menutup pengeluaran Anda.',
      ],
    },
    {
      type: 'title',
      text: 'Jenis-jenis Kebebasan Finansial',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Gaya hidup minimalis. Hanya mencakup pengeluaran dasar untuk bertahan hidup.',
          points: ['Tabungan ekstrim', 'Pengeluaran sangat rendah', 'Kebebasan hemat'],
        },
        {
          title: 'Barista FIRE',
          description: 'Situasi hibrida di mana investasi Anda menutup setengah dari pengeluaran Anda.',
          points: ['Bekerja demi kesenangan', 'Asuransi sosial tertutup', 'Stres lebih rendah'],
        },
        {
          title: 'Fat FIRE',
          description: 'Pensiun dengan anggaran besar yang memungkinkan kemewahan dan perjalanan.',
          points: ['Kekayaan tinggi', 'Tanpa batasan', 'Warisan keluarga'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bagaimana cara menggunakan Kalkulator FIRE kami?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pelacakan Pengeluaran:</strong> Analisis pengeluaran riil Anda selama 12 bulan terakhir.',
        '<strong>Definisi SWR:</strong> Pilih tingkat penarikan aman Anda sesuai risiko Anda.',
        '<strong>Kekayaan Saat Ini:</strong> Masukkan nilai investasi Anda saat ini.',
        '<strong>Kapasitas Tabungan:</strong> Proyeksikan berapa lama waktu yang tersisa untuk mencapai target.',
        '<strong>Visualisasi Visual:</strong> Analisis grafik pertumbuhan kekayaan Anda.',
      ],
    },
    {
      type: 'title',
      text: 'Analisis Aturan 4%',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Keuntungan',
          description: 'Mengapa aturan 4% berhasil',
          points: [
            'Kesederhanaan matematis untuk perencanaan cepat.',
            'Berdasarkan data historis selama hampir satu abad.',
            'Dapat disesuaikan dengan tingkat pengeluaran apa pun.',
          ],
        },
        {
          title: 'Batasan',
          description: 'Apa yang tidak dicakup oleh aturan 4%',
          points: [
            'Tidak mempertimbangkan risiko urutan imbal hasil.',
            'Terutama didasarkan pada pasar AS.',
            'Mengabaikan perubahan drastis dalam perpajakan lokal.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Faktor Kritis: Inflasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ingatlah bahwa Rp1.000.000 hari ini tidak akan membeli hal yang sama di masa depan. Sangat penting menggunakan imbal hasil riil (setelah inflasi) agar proyeksi Anda mempertahankan daya beli saat ini. Aturan 4% mengasumsikan bahwa Anda menyesuaikan penarikan Anda setiap tahun berdasarkan inflasi.',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator FIRE: Aturan 4%',
    labelDescription: 'Hitung angka ajaib Anda untuk kemandirian finansial menggunakan aturan 4% dan visualisasikan pencapaian Anda menuju kebebasan.',
    labelMonthlyExpenses: 'Pengeluaran Bulanan',
    labelSWR: 'Tingkat Penarikan (SWR)',
    labelCurrentWorth: 'Kekayaan Saat Ini',
    labelMonthlySavings: 'Kapasitas Tabungan Bulanan',
    labelAnnualReturn: 'Estimasi Imbal Hasil (Neto)',
    labelFreedomMilestones: 'Pencapaian Kebebasan',
    labelLeanFIRE: 'Lean FIRE (70% kelangsungan hidup)',
    labelBaristaFIRE: 'Barista FIRE (50% pendapatan)',
    labelFatFIRE: 'Fat FIRE (150% kemewahan)',
    labelMagicNumber: 'Angka Ajaib Anda untuk Menjadi Bebas',
    labelMagicNumberDesc: 'Modal yang dibutuhkan untuk hidup dari imbal hasil',
    labelTimeRemaining: 'Waktu hingga kebebasan finansial',
    labelTimeRemainingFormat: 'Kurang {years} tahun dan {months} bulan lagi',
    labelAlreadyFI: 'Anda telah mencapai kebebasan finansial!',
    labelUnachievable: 'Target tidak terjangkau dengan tabungan ini',
    labelHiddenCostsChecklist: 'Checklist Pengeluaran Tersembunyi',
    labelHealth: 'Asuransi Kesehatan (+200rb)',
    labelTaxes: 'Pajak (+150rb)',
    labelHome: 'Pemeliharaan Rumah (+100rb)',
    labelTravel: 'Perjalanan dan Hiburan (+300rb)',
    labelEmergency: 'Dana Darurat (+100rb)',
    labelSubscriptions: 'Langganan (+50rb)',
    labelAdded: 'Ditambahkan:',
    labelSavePlan: 'Simpan Rencana',
    labelSWRTooltip: 'Safe Withdrawal Rate: Persentase tabungan Anda yang dapat Anda tarik setiap tahun tanpa kehabisan uang.',
    labelReturnTooltip: 'Imbal hasil pasar tahunan (sudah dikurangi inflasi). Standar historis adalah 7%.',
    currencySymbol: 'Rp',
    currencyCode: 'IDR',
    currencyLocale: 'id-ID',
  },
};
