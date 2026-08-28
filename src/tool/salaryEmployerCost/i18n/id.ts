import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "kalkulator-gaji-kotor-bersih-biaya-pemberi-kerja-spanyol";
const title = "Kalkulator Gaji Kotor, Bersih & Biaya Perusahaan Spanyol 2026";
const description = "Hitung gaji bersih, potongan IRPF, iuran pekerja, dan total biaya perusahaan di Spanyol berdasarkan aturan 2026.";

const faq = [
  {
    "question": "Berapa biaya seorang karyawan bagi perusahaan di Spanyol?",
    "answer": "Perusahaan membayar gaji kotor ditambah iuran jaminan sosial perusahaan."
  },
  {
    "question": "Bagaimana cara menghitung gaji kotor ke bersih di Spanyol?",
    "answer": "Mulai dari gaji kotor tahunan, kurangi iuran jaminan sosial pekerja dan kurangi pajak IRPF."
  },
  {
    "question": "Apakah memilih 12 atau 14 pembayaran mengubah gaji tahunan?",
    "answer": "Tidak. Kalkulator mempertahankan total kotor tahunan yang sama."
  },
  {
    "question": "Tarif Jaminan Sosial apa saja yang termasuk untuk 2026?",
    "answer": "Estimasi mencakup kontinjensi umum, pengangguran, pelatihan, MEI, FOGASA, dan premi kecelakaan kerja."
  },
  {
    "question": "Apa yang terjadi jika gaji melebihi batas maksimum iuran?",
    "answer": "Batas maksimum bulanan 2026 adalah €5.101,20. Di atas itu berlaku iuran solidaritas progresif."
  },
  {
    "question": "Apakah kalkulator ini berlaku di luar Spanyol?",
    "answer": "Tidak. Kalkulator ini terbatas untuk sistem Spanyol 2026."
  },
  {
    "question": "Apakah data gaji dikirim ke server?",
    "answer": "Tidak. Semua perhitungan berjalan di peramban Anda secara lokal."
  }
];

const howTo = [
  {
    "name": "Masukkan gaji kotor",
    "text": "Pilih opsi tahunan atau bulanan lalu masukkan gaji kotor."
  },
  {
    "name": "Atur asumsi penggajian Spanyol",
    "text": "Pilih 12/14 pembayaran, jenis kontrak, IRPF, dan premi risiko."
  },
  {
    "name": "Bandingkan komponen gaji",
    "text": "Lihat gaji bersih, potongan pekerja, dan kontribusi perusahaan."
  },
  {
    "name": "Ubah periode hasil",
    "text": "Lihat total tahunan atau rata-rata per pembayaran."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "id",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Sinyal Gaji Kotor",
    "labelGrossSalaryHint": "Jumlah gaji",
    "labelAnnual": "Tahunan",
    "labelMonthly": "Bulanan",
    "labelPaySchedule": "Jadwal Pembayaran",
    "labelTwelvePayments": "12 Pembayaran",
    "labelFourteenPayments": "14 Pembayaran",
    "labelContract": "Jenis Kontrak",
    "labelPermanent": "Tetap",
    "labelTemporary": "Kontrak / Sementara",
    "labelIrpfRate": "Pemotongan Pajak IRPF",
    "labelIrpfHint": "Gunakan tarif dari otoritas pajak, penawaran, atau slip gaji",
    "labelRiskRate": "Premi Risiko Kecelakaan Kerja (AT & EP)",
    "labelRiskHint": "Tarif premi kecelakaan kerja untuk perusahaan",
    "labelOfficePreset": "Kantor 1,50%",
    "labelTradePreset": "Penjualan / Komersial 2,00%",
    "labelConstructionPreset": "Konstruksi 6,70%",
    "labelNetCore": "Inti Gaji Bersih",
    "labelEmployeeDeductions": "Potongan Pekerja",
    "labelDeductionsFormula": "IRPF ditambah Jaminan Sosial Pekerja",
    "labelEmployerHalo": "Halo Iuran Perusahaan",
    "labelEmployerCost": "Total Biaya Perusahaan",
    "labelAnnualView": "Tampilan Tahunan",
    "labelPerPaymentView": "Rata-rata per Pembayaran",
    "labelGross": "Gaji Kotor",
    "labelIrpf": "Potongan IRPF",
    "labelEmployeeSocialSecurity": "Jaminan Sosial Pekerja",
    "labelContributionBase": "Basis Iuran Bulanan",
    "labelCostMultiplier": "Pengali Biaya dibanding Kotor",
    "labelWorkerKeeps": "Porsi Bersih dari Total Biaya",
    "labelLeanGap": "Halo Biaya Efisien",
    "labelTypicalGap": "Halo Biaya Standar",
    "labelWideGap": "Halo Biaya Luas",
    "labelModelScope": "Khusus Spanyol. Skema Umum 2026, kerja penuh waktu, gaji tunai biasa. Hasil berupa estimasi.",
    "labelReset": "Reset contoh",
    "labelInvalid": "Masukkan gaji kotor tahunan yang valid dan jaga tarif IRPF serta risiko dalam batas.",
    "labelMinimumSalary": "Model dimulai dari UMR tahunan Spanyol 2026 sebesar €17.094.",
    "labelPrivacy": "Dihitung secara lokal di peramban Anda"
},
  seo: [
    { type: 'title', text: "Dari gaji kotor ke biaya nyata perusahaan di Spanyol", level: 2 },
    { type: 'paragraph', html: "Satu tawaran gaji memiliki tiga angka penting: gaji kotor dalam kontrak, jumlah bersih yang diterima pekerja, dan biaya penuh yang dibayar perusahaan. Kalkulator gaji Spanyol ini menampilkan ketiganya bersama. Masukkan satu angka kotor untuk memperkirakan potongan IRPF, iuran pekerja, iuran perusahaan, dan total biaya berdasarkan Skema Umum 2026." },
    { type: 'title', text: "Formula biaya perusahaan Spanyol", level: 2 },
    { type: 'paragraph', html: "Total biaya perusahaan sama dengan gaji kotor tahunan ditambah iuran Jaminan Sosial perusahaan. Perkiraan gaji bersih sama dengan gaji kotor dikurangi iuran pekerja dan persentase IRPF yang Anda masukkan. Kolom IRPF sengaja dipisahkan karena potongan yang sebenarnya dapat berubah menurut keadaan pribadi dan keluarga." },
    { type: 'table', headers: ['Lapisan', 'Perhitungan'], rows: [['Gaji bersih', 'Gaji kotor dikurangi iuran pekerja dan IRPF'], ['Potongan pekerja', 'Jaminan Sosial pekerja ditambah IRPF'], ['Iuran perusahaan', 'Iuran perusahaan ditambah premi kecelakaan kerja'], ['Total biaya', 'Gaji kotor ditambah iuran perusahaan']] },
    { type: 'title', text: "Tarif Jaminan Sosial Spanyol 2026 yang disertakan", level: 2 },
    { type: 'paragraph', html: "Untuk kontrak tetap, model memasukkan kontinjensi umum 4,70% untuk pekerja dan 23,60% untuk perusahaan, pengangguran 1,55% dan 5,50%, pelatihan 0,10% dan 0,60%, serta mekanisme keadilan antargenerasi 0,15% dan 0,75%. Model juga menambahkan 0,20% iuran perusahaan untuk FOGASA dan premi kecelakaan kerja yang dipilih. Kontrak sementara memakai tarif pengangguran yang berbeda." },
    { type: 'table', headers: ['Profil pekerjaan', 'Premi perusahaan'], rows: [["Pekerjaan kantor", '1,50%'], ["Penjualan / komersial", '2,00%'], ["Konstruksi", '6,70%']] },
    { type: 'title', text: "Batas iuran dan gaji tinggi", level: 2 },
    { type: 'paragraph', html: "Dasar iuran standar dibatasi hingga €5.101,20 per bulan pada 2026. Untuk penghasilan di atas batas itu, kalkulator menambahkan iuran solidaritas progresif. Dengan demikian, persentase biasa tidak diterapkan begitu saja pada seluruh gaji tinggi." },
    { type: 'title', text: "Skema 12 pembayaran dan 14 pembayaran", level: 2 },
    { type: 'paragraph', html: "Pilihan jadwal tidak mengubah gaji kotor tahunan atau biaya tahunan perusahaan; pilihan itu hanya mengubah rata-rata yang ditampilkan per pembayaran. Penggajian 14 kali yang sebenarnya dapat membagi iuran dan potongan secara berbeda antara pembayaran rutin dan tambahan, sehingga angka ini terutama berguna untuk membandingkan tawaran dan anggaran." },
    { type: 'tip', title: "Bandingkan dengan asumsi yang sama", html: "Pertahankan tarif IRPF, jenis kontrak, jadwal pembayaran, dan premi kecelakaan kerja agar pengaruh gaji kotor dapat terlihat jelas. Dengan begitu dua tawaran kerja atau anggaran perekrutan dapat dibandingkan secara adil." },
    { type: 'title', text: "Batasan estimasi gaji Spanyol ini", level: 2 },
    { type: 'paragraph', html: "Kalkulator ini khusus untuk pekerja penuh waktu di Spanyol, Skema Umum 2026, dan gaji tunai biasa. Kalkulator tidak mencakup dasar minimum paruh waktu, penyelesaian pajak regional, tunjangan natura, bonus dengan perlakuan khusus, pengurangan, hubungan kerja khusus, pekerja mandiri, atau penyesuaian penggajian. Hasilnya adalah estimasi, bukan nasihat penggajian atau pajak." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
