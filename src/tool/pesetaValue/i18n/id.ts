import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'konverter-peseta-ke-euro-nilai-2026';
const title = 'Konverter peseta ke euro: nilai peseta lama pada 2026';
const description = 'Konversikan peseta Spanyol ke euro dengan kurs tetap 166,386 peseta per euro dan perkirakan daya beli sampai 2026 menggunakan CPI Spanyol.';
const faq = [
  { question: 'Berapa euro nilai 1.000 peseta?', answer: '1.000 peseta sama dengan 6,01 euro berdasarkan kurs konversi tetap. Kalkulator juga menampilkan perkiraan terpisah tentang daya beli jumlah tersebut pada tahun yang dipilih.' },
  { question: 'Berapa euro nilai satu juta peseta?', answer: 'Satu juta peseta sama dengan 6.010,12 euro berdasarkan kurs tetap. Perkiraan daya belinya pada 2026 bergantung pada tahun saat uang itu digunakan.' },
  { question: 'Bagaimana cara mengubah peseta ke euro?', answer: 'Bagi jumlah peseta dengan 166,386. Contohnya, 100 peseta sama dengan 0,60 euro dan 10.000 peseta sama dengan 60,10 euro.' },
  { question: 'Berapa nilai peseta lama pada 2026?', answer: 'Ada dua jawaban. Konversi tetap memberikan jumlah resmi dalam euro, sedangkan hasil yang disesuaikan CPI memperkirakan euro 2026 yang diperlukan untuk daya beli rata-rata yang serupa.' },
  { question: 'Apakah kalkulator ini menilai koin atau uang kertas koleksi?', answer: 'Tidak. Kalkulator ini menghitung konversi mata uang dan daya beli rata-rata. Koin langka atau uang kertas koleksi dapat memiliki nilai pasar lain berdasarkan kondisi, kelangkaan, dan permintaan.' },
  { question: 'Tahun apa saja yang digunakan kalkulator peseta?', answer: 'Anda dapat memilih tahun asal dari 1980 sampai 2026. Referensi 2026 menggunakan data CPI terbaru yang telah diterbitkan dan belum merupakan rata-rata tahunan lengkap.' },
  { question: 'Apakah perkiraan daya beli merupakan harga yang pasti?', answer: 'Tidak. Ini adalah perbandingan rata-rata berdasarkan CPI, bukan harga pasti untuk rumah, upah, makanan, energi, atau pembelian tertentu.' },
];
const howTo = [
  { name: 'Masukkan jumlah peseta', text: 'Masukkan jumlah dari tanda terima, uang kertas, koin, atau dokumen sejarah.' },
  { name: 'Pilih tahun', text: 'Pilih dekade lalu tahun saat jumlah tersebut digunakan.' },
  { name: 'Baca konversi tetap', text: 'Lihat jumlah nominal yang diperoleh dengan membagi peseta dengan 166,386.' },
  { name: 'Bandingkan daya beli', text: 'Bandingkan konversi tetap dengan perkiraan daya beli rata-rata pada 2026.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: 'Jumlah historis', labelAmountHint: 'Pilih titik awal', labelOriginYear: 'Tahun asal', labelOriginYearHint: 'Rata-rata CPI tahunan jika tersedia', labelReferenceYear: 'Referensi 2026 sampai saat ini', labelNominalEuros: 'Konversi tetap', labelTodayValue: 'Perkiraan daya beli', labelPurchasingPowerChange: 'Perubahan daya beli', labelNominalDifference: 'Selisih dari konversi', labelConversionRate: 'Peseta per euro', labelCpiMethod: 'Pengali CPI', labelPreset100: '100 ptas', labelPreset1000: '1.000 ptas', labelPreset10000: '10.000 ptas', labelPreset100000: '100.000 ptas', labelPesetas: 'peseta', labelEuro: 'euro', labelFrom: 'Dari', labelTo: 'Ke', labelOpenYears: 'Buka tahun asal', labelCloseYears: 'Tutup tahun asal', labelDecade: 'Pilih dekade', labelCoin: 'koin', labelBanknote: 'uang kertas', labelCashPieces: 'pecahan uang', labelState: 'pergerakan nilai', labelStatePositive: 'meningkat', labelStateNeutral: 'tetap', labelStateNegative: 'menurun', labelReset: 'Atur ulang contoh', currencyLocale: 'id-ID' },
  seo: [
    { type: 'title', text: 'Peseta ke euro: dua jawaban untuk satu pertanyaan', level: 2 },
    { type: 'paragraph', html: 'Jika Anda memiliki harga lama, gaji, tanda terima, koin, atau uang kertas dalam peseta Spanyol, konverter ini memberikan dua jawaban. Pertama, alat ini menampilkan konversi tetap ke euro. Kemudian alat ini memperkirakan arti jumlah tersebut dalam daya beli 2026 berdasarkan perubahan harga di Spanyol.' },
    { type: 'title', text: 'Konversi peseta ke euro yang umum', level: 2 },
    { type: 'paragraph', html: 'Kurs tetap selalu 166,386 peseta untuk 1 euro. Tahun tidak mengubah konversi nominal ini.' },
    { type: 'table', headers: ['Jumlah lama', 'Konversi tetap'], rows: [['1 peseta', '0,01 euro'], ['25 peseta', '0,15 euro'], ['50 peseta', '0,30 euro'], ['100 peseta', '0,60 euro'], ['500 peseta', '3,01 euro'], ['1.000 peseta', '6,01 euro'], ['2.000 peseta', '12,02 euro'], ['5.000 peseta', '30,05 euro'], ['10.000 peseta', '60,10 euro'], ['1 juta peseta', '6.010,12 euro']] },
    { type: 'title', text: 'Berapa nilai peseta pada 2026?', level: 2 },
    { type: 'paragraph', html: 'Hasil yang disesuaikan CPI menjawab pertanyaan yang berbeda dari konversi euro. Hasil ini memperkirakan berapa euro pada 2026 yang diperlukan untuk membeli keranjang rata-rata yang serupa dengan yang dapat dibeli oleh jumlah tersebut pada tahun asalnya. Referensi 2026 menggunakan data terbaru sampai saat ini dan bukan rata-rata tahunan yang sudah selesai.' },
    { type: 'table', headers: ['Hasil', 'Artinya'], rows: [['Konversi tetap', 'Jumlah nominal euro yang tepat berdasarkan kurs resmi.'], ['Nilai yang disesuaikan CPI', 'Perkiraan daya beli rata-rata yang setara pada 2026.'], ['Selisih', 'Jarak antara konversi tetap dan perkiraan CPI.']] },
    { type: 'title', text: 'Cara menghitung jumlah lama dalam peseta', level: 2 },
    { type: 'list', items: ['Masukkan jumlah dari tanda terima, uang kertas, koin, atau dokumen.', 'Pilih tahun saat jumlah itu digunakan atau diterima.', 'Gunakan konversi tetap untuk kesetaraan langsung dalam euro.', 'Gunakan nilai CPI untuk memahami konteks daya beli historis.', 'Gunakan selisih sebagai konteks inflasi, bukan perkiraan harga pribadi.'] },
    { type: 'title', text: 'Koin dan uang kertas tidak otomatis memiliki nilai koleksi ini', level: 2 },
    { type: 'paragraph', html: 'Alat ini menghitung mata uang dan inflasi, bukan penilaian numismatik. Koin langka atau uang kertas lama dapat memiliki nilai pasar berbeda berdasarkan tahun, kondisi, kelangkaan, dan permintaan.' },
    { type: 'tip', title: 'Tahun mengubah daya beli, bukan kurs', html: 'Kurs resmi tetap 166,386 peseta per euro. Hanya perbandingan CPI yang berubah berdasarkan tahun asal dan perbandingan itu selalu menggambarkan keranjang konsumsi rata-rata.' },
  ],
  faq, bibliography, howTo, schemas,
};
