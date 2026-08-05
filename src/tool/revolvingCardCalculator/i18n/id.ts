import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'kalkulator-kartu-revolving';
const title = 'Kalkulator Kartu Revolving & Riba';
const description = 'Simulasikan waktu dan biaya pelunasan utang kartu kredit revolving Anda serta cek batas suku bunga tinggi.';

const faqData = [{ question: 'Bagaimana kartu revolving bekerja?', answer: 'Kartu kredit revolving memungkinkan pembayaran secara mencicil.' }];
const howToData = [{ name: 'Pilih pasar', text: 'Pilih negara atau batas kustom.' }];

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
  seo: [{ type: 'title', text: 'Bagaimana Kartu Revolving Bekerja?' }, { type: 'paragraph', html: 'Kartu kredit revolving memungkinkan pembayaran secara mencicil.' }],
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
