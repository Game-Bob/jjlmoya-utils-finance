import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'kalkulator-kartu-revolving';
const title = 'Kalkulator Kartu Revolving & Riba';
const description = 'Simulasikan waktu dan biaya pelunasan utang kartu kredit revolving Anda serta cek batas suku bunga tinggi.';

const faqData = [{ question: 'Bagaimana kartu revolving bekerja?', answer: 'Kartu kredit revolving memungkinkan pembayaran secara mencicil.' },
  { question: "Apa yang harus diperiksa sebelum memakai hasil?", answer: "Periksa input, satuan, asumsi, dan batasan; hasil ini adalah panduan, bukan keputusan resmi." },
  { question: "Apa yang harus diperiksa sebelum memakai hasil?", answer: "Periksa input, satuan, asumsi, dan batasan; hasil ini adalah panduan, bukan keputusan resmi." },
  { question: "Apa yang harus diperiksa sebelum memakai hasil?", answer: "Periksa input, satuan, asumsi, dan batasan; hasil ini adalah panduan, bukan keputusan resmi." },];
const howToData = [{ name: 'Pilih pasar', text: 'Pilih negara atau batas kustom.' },
  { name: "Periksa asumsi", text: "Periksa input, satuan, dan batasan yang ditampilkan sebelum menafsirkan hasil." },
  { name: "Periksa asumsi", text: "Periksa input, satuan, dan batasan yang ditampilkan sebelum menafsirkan hasil." },
  { name: "Periksa asumsi", text: "Periksa input, satuan, dan batasan yang ditampilkan sebelum menafsirkan hasil." },];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: 'Bagaimana Kartu Revolving Bekerja?' }, { type: 'paragraph', html: 'Kartu kredit revolving memungkinkan pembayaran secara mencicil.' },
  { type: 'paragraph', html: "Kartu <strong>revolving</strong> memungkinkan pembayaran cicilan, tetapi bunga tahunan yang tinggi dapat mengubah utang fleksibel menjadi kewajiban jangka panjang. Saldo yang tersisa dibawa ke periode berikutnya dan terus dikenai bunga." },
  { type: 'paragraph', html: "Berbeda dari pinjaman dengan jangka waktu tetap, durasinya sangat bergantung pada cicilan yang dipilih. Cicilan kecil dapat membuat utang bertahan bertahun-tahun." },
  { type: 'paragraph', html: "APR lebih informatif daripada cicilan yang terlihat murah. Periksa juga biaya, asuransi, dan ketentuan kartu sebelum membandingkan produk." },
  { type: 'paragraph', html: "Jika pembayaran ditetapkan sebagai persentase saldo, jumlah cicilan biasanya ikut turun ketika saldo berkurang. Akibatnya, bagian yang mengurangi pokok menjadi semakin kecil." },
  { type: 'paragraph', html: "Bunga bulanan dibayar terlebih dahulu, dan hanya sisanya mengurangi pokok. Jika pembayaran lebih kecil dari bunga, saldo bertambah dan kalkulator dapat menandai utang yang tidak berujung." },
  { type: 'paragraph', html: "Tabel amortisasi memisahkan bunga, pokok, dan saldo akhir agar Anda dapat melihat apakah pembayaran benar-benar mengurangi utang." },
  { type: 'paragraph', html: "Pilih Spanyol, Amerika Serikat, Inggris, atau ambang batas khusus, lalu masukkan saldo terutang, batas kredit, dan APR." },
  { type: 'paragraph', html: "Bandingkan cicilan tetap dengan persentase saldo. Pada pilihan persentase, jumlah minimum absolut mencegah cicilan menjadi terlalu kecil ketika saldo turun." },
  { type: 'paragraph', html: "Baca total bunga, total pembayaran, dan jumlah bulan secara bersamaan. Cicilan paling rendah biasanya bukan pilihan yang paling murah." },
  { type: 'paragraph', html: "Pemeriksa riba membandingkan suku bunga yang dimasukkan dengan ambang pasar yang dipilih. Ini merupakan petunjuk perhitungan, bukan penilaian hukum yang pasti." },
  { type: 'paragraph', html: "Di Spanyol, penilaian kartu revolving dapat bergantung pada perbandingan APR dengan rata-rata pasar ketika kontrak ditandatangani. Negara lain memiliki aturan yang berbeda." },
  { type: 'paragraph', html: "Peringatan tidak membuktikan pelanggaran, dan status normal tidak menutup kemungkinan adanya klausul bermasalah. Untuk kontrak tertentu, mintalah nasihat setempat." },
  { type: 'paragraph', html: "Simulasi menggunakan saldo, APR, dan pembayaran berkala yang dimasukkan. Simulasi mengasumsikan tidak ada pembelian baru, biaya keterlambatan, atau perubahan bunga." },
  { type: 'paragraph', html: "Tagihan nyata dapat menghitung bunga harian, menerapkan biaya, atau membagi pembayaran secara berbeda. Perbedaan ini dapat mengubah jangka waktu dan biaya akhir." },
  { type: 'paragraph', html: "Gunakan hasilnya untuk menyiapkan pertanyaan kepada bank dan membandingkan skenario. Hasil ini tidak menggantikan tagihan, kontrak, atau pemeriksaan profesional." },
  { type: 'paragraph', html: "Untuk keluar dari siklus utang, cicilan tetap yang jelas lebih besar daripada bunga bulanan biasanya lebih mudah direncanakan daripada persentase yang sangat rendah. Hindari menambah saldo selama pembayaran jika memungkinkan." },
  { type: 'paragraph', html: "Sebelum melakukan konsolidasi atau mengganti produk, bandingkan APR, biaya, jangka waktu, dan total pembayaran, bukan hanya cicilan bulanan." },
  { type: 'paragraph', html: "Perbarui kalkulator ketika saldo, cicilan, atau suku bunga berubah dan simpan rencana sebagai acuan kemajuan." },],
  ui: {
    title: 'Kalkulator Kartu Revolving & Tes Riba',
    balanceLabel: 'Sisa Utang',
    creditLimitLabel: 'Batas Kredit',
    aprLabel: 'Suku Bunga Tahunan (APR %)',
    paymentTypeLabel: 'Metode Pembayaran',
    paymentTypeFixed: 'Cicilan Tetap Bulanan',
    paymentTypePercentage: 'Persentase dari Saldo',
    paymentValueLabel: 'Nilai Pembayaran (Jumlah atau %)',
    minPaymentValueLabel: 'Pembayaran Minimum',
    currencyLabel: 'Mata Uang',
    marketLabel: 'Pasar Regulasi / Negara',
    marketES: 'Spanyol (Banco de España)',
    marketUS: 'Amerika Serikat (CFPB)',
    marketUK: 'Inggris (FCA)',
    marketEU: 'Uni Eropa (ECB)',
    marketJP: 'Jepang (FSA)',
    marketKR: 'Korea Selatan (FSC)',
    marketCN: 'Tiongkok (PBOC)',
    marketBR: 'Brasil (Banco Central)',
    marketMX: 'Meksiko (Banco de México)',
    marketPL: 'Polandia (KNF)',
    marketID: 'Indonesia (OJK)',
    marketTR: 'Turki (BRSA)',
    marketRU: 'Rusia (Bank Sentral)',
    marketSE: 'Swedia (Finansinspektionen)',
    marketAU: 'Australia (ASIC)',
    marketCA: 'Kanada (FCAC)',
    marketCustom: 'Batas Kustom',
    customThresholdLabel: 'Batas Riba Kustom (APR %)',

    resultsTitle: 'Hasil Pelunasan',
    totalInterestLabel: 'Total Bunga Dibayar',
    totalPaidLabel: 'Total Pengembalian',
    monthsToPayLabel: 'Waktu Pelunasan (Bulan)',
    infiniteDebtWarning: 'Utang abadi! Pembayaran bulanan tidak cukup menutup bunga.',
    payoffYearsLabel: 'Jadwal Pelunasan',

    usuryTitle: 'Analisis Suku Bunga & Kepatuhan',
    usurySafeStatus: 'Standar Pasar (Risiko Rendah)',
    usuryWarningStatus: 'Bunga Tinggi (Risiko Sedang)',
    usuryUsuriousStatus: 'Potensi Riba/Predatori (Risiko Tinggi)',
    usuryReferenceLabel: 'Rata-rata APR Pasar',
    usuryThresholdLabel: 'Batas Peringatan Bunga',

    tableTitle: 'Tabel Amortisasi Bulanan',
    tableHeaderMonth: 'Bulan',
    tableHeaderInitial: 'Saldo Awal',
    tableHeaderInterest: 'Bunga',
    tableHeaderPrincipal: 'Pokok Dibayar',
    tableHeaderPayment: 'Cicilan',
    tableHeaderFinal: 'Saldo Akhir',

    copyTooltip: 'Salin Laporan',
    copiedLabel: 'Laporan Disalin!',
    currencySymbol: 'Rp',
    percentSymbol: '%',
  },
};
