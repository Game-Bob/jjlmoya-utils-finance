import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Penawaran A",
  labelScenarioB: "Penawaran B",
  labelScenarioName: "Nama penawaran",
  labelCurrency: "Mata uang",
  labelApproximateRates:
    "Faktor perkiraan untuk perencanaan, bukan nilai tukar langsung.",
  labelPrincipal: "Jumlah pinjaman",
  labelTerm: "Jangka waktu pembayaran",
  labelMonths: "bulan",
  labelInputBasis: "Data apa yang Anda ketahui?",
  labelAnnualRate: "Suku bunga tahunan nominal",
  labelMonthlyPayment: "Cicilan bulanan yang diketahui",
  labelUpfrontFees: "Biaya awal",
  labelMonthlyFees: "Biaya bulanan",
  labelFinalFees: "Biaya akhir",
  labelOfferNameA: "Penawaran A",
  labelOfferNameB: "Penawaran B",
  labelRateMode: "Saya tahu bunganya",
  labelPaymentMode: "Saya tahu cicilannya",
  labelPreset: "Mulai perbandingan",
  labelPresetBalanced: "Penawaran seimbang",
  labelPresetLowFee: "Bunga rendah dengan biaya",
  labelPresetLongTerm: "Jangka waktu lebih panjang",
  labelReset: "Atur ulang nilai",
  labelCopy: "Salin perbandingan",
  labelCopied: "Perbandingan disalin",
  labelEffectiveApr: "Biaya tahunan efektif",
  labelNominalRate: "Suku bunga nominal",
  labelMonthlyPaymentResult: "Cicilan bulanan",
  labelTotalPaid: "Total dibayar",
  labelTotalFees: "Biaya dalam skenario",
  labelFinanceCost: "Biaya di atas pokok",
  labelNetCashReceived: "Dana diterima setelah biaya awal",
  labelWinner: "Penawaran mana yang lebih murah?",
  labelLowerCost: "Biaya efektif lebih rendah",
  labelHigherCost: "Biaya efektif lebih tinggi",
  labelTie: "Hampir sama",
  labelNeedValidInputs: "Perlu data yang valid",
  labelInvalidPrincipal:
    "Jumlah pinjaman harus lebih dari nol dan lebih besar daripada biaya awal.",
  labelInvalidTerm: "Gunakan jangka waktu bulat dari 1 sampai 600 bulan.",
  labelInvalidFees: "Biaya tidak boleh negatif.",
  labelInvalidPayment:
    "Masukkan cicilan bulanan positif yang dapat melunasi dana bersih yang diterima.",
  labelInvalidRate: "Gunakan suku bunga tahunan nominal dari 0% sampai 100%.",
  labelNoComparison: "Lengkapi kedua penawaran untuk membandingkannya.",
  labelTimeline: "Jadwal pembayaran",
  labelStart: "Mulai",
  labelMonthly: "Setiap bulan",
  labelEnd: "Bulan terakhir",
  labelFormula: "Cara kerja perbandingan",
  labelFormulaText:
    "Biaya tahunan efektif adalah suku bunga bulanan yang disetahunkan dan menyamakan dana diterima dengan pembayaran serta biaya yang didiskontokan.",
  labelApproximation:
    "Perkiraan mengasumsikan cicilan bulanan sama, tanpa masa tenggang, dan hanya biaya yang Anda masukkan. Ini bukan pengganti APR resmi pemberi pinjaman.",
  labelScenarioSummary: "Ringkasan skenario",
  currencyCode: "IDR",
  currencyLocale: "id-ID",
};

const faq = [
  {
    question: "Apa perbedaan suku bunga dan biaya tahunan efektif?",
    answer:
      "Suku bunga nominal menjelaskan bunga atas saldo. Biaya tahunan efektif juga memperhitungkan jumlah dan waktu biaya awal, bulanan, serta biaya akhir yang Anda masukkan.",
  },
  {
    question: "Bisakah saya memasukkan cicilan bulanan, bukan suku bunga?",
    answer:
      "Bisa. Pilih cicilan bulanan yang diketahui untuk penawaran tersebut. Kalkulator memperkirakan suku bunga bulanan yang sesuai dengan dana diterima, arus pembayaran, dan biaya skenario.",
  },
  {
    question: "Penawaran mana yang lebih murah?",
    answer:
      "Bandingkan biaya tahunan efektif terlebih dahulu, lalu periksa total pembayaran dan dana bersih yang diterima. Persentase lebih rendah tetap dapat menghasilkan total biaya lebih tinggi jika jangka waktu atau jumlahnya berbeda.",
  },
  {
    question: "Apakah ini APR resmi dari pemberi pinjaman?",
    answer:
      "Bukan. Ini adalah perkiraan transparan berdasarkan masukan Anda. Pemberi pinjaman dan aturan setempat dapat memperlakukan pajak, asuransi, tanggal pembayaran, dan biaya lain secara berbeda.",
  },
];

const howTo = [
  {
    name: "Masukkan jumlah dan jangka waktu",
    text: "Tambahkan dana yang akan diterima dan jumlah cicilan bulanan untuk setiap penawaran.",
  },
  {
    name: "Pilih data yang diketahui",
    text: "Masukkan suku bunga tahunan nominal atau cicilan bulanan sesuai informasi penawaran.",
  },
  {
    name: "Tambahkan semua biaya",
    text: "Masukkan biaya awal, bulanan, dan akhir agar arus kas yang diuji lengkap.",
  },
  {
    name: "Baca perbandingan",
    text: "Gunakan biaya tahunan efektif, lalu periksa total pembayaran dan dana bersih sebelum memutuskan.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kalkulator skenario APR pinjaman",
    description:
      "Bandingkan dua skenario pinjaman dengan bunga, cicilan, dan biaya.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Membandingkan dua penawaran pinjaman",
    description:
      "Modelkan arus kas dua pinjaman dan bandingkan biaya tahunan efektifnya.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "kalkulator-skenario-apr-pinjaman",
  title: "Kalkulator skenario APR pinjaman",
  description:
    "Bandingkan dua penawaran pinjaman dengan bunga, jadwal pembayaran, dan biaya untuk memperkirakan biaya tahunan efektif.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Bandingkan pinjaman berdasarkan biaya tahunan efektif",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Suku bunga iklan yang rendah dapat menyembunyikan biaya administrasi, biaya layanan bulanan, atau biaya akhir. Kalkulator ini mengubah detail dua penawaran menjadi skenario arus kas yang sebanding agar Anda dapat melihat biaya dana yang benar-benar diterima.</p>",
    },
    { type: "title", text: "Isi perkiraan", level: 3 },
    {
      type: "paragraph",
      html: "<p>Untuk setiap penawaran, masukkan jumlah pinjaman, jangka waktu, suku bunga nominal atau cicilan bulanan, serta biaya pada waktu yang berbeda. Kalkulator mencari suku bunga bulanan yang menyeimbangkan dana bersih dengan pembayaran dan biaya yang didiskontokan, lalu menyetahunkannya.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Dengan begitu, harga kredit tidak hanya dilihat dari bunganya. Hasilnya tetap merupakan perkiraan karena APR resmi dapat mengikuti aturan wilayah dan memasukkan asumsi yang tidak ada dalam skenario Anda.</p>",
    },
    { type: "title", text: "Cara membaca hasil", level: 3 },
    {
      type: "list",
      items: [
        "Bandingkan biaya tahunan efektif saat jumlah dan jangka waktu serupa.",
        "Periksa total pembayaran untuk memahami dampak uang sebenarnya.",
        "Perhatikan dana yang diterima setelah biaya awal.",
        "Gunakan jadwal untuk melihat kapan setiap biaya masuk.",
      ],
    },
    {
      type: "tip",
      title: "Gunakan dokumen pemberi pinjaman sebagai acuan akhir",
      html: "<p>Untuk kontrak nyata, cocokkan APR resmi dengan asumsi yang sama. Tanyakan tentang asuransi, pajak, bunga variabel, biaya pelunasan lebih awal, dan biaya yang tidak tercakup.</p>",
    },
    { type: "title", text: "Batasan perkiraan skenario", level: 3 },
    {
      type: "paragraph",
      html: "<p>Tool ini mengasumsikan cicilan bulanan sama, tanpa masa tenggang, dan biaya pada awal, selama jangka waktu, atau bulan terakhir. Tool ini tidak memastikan kemampuan membayar, persetujuan, legalitas, atau APR resmi.</p>",
    },
  ],
};
