import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'konverter-iban-ke-bic-swift';
const title = 'Konverter IBAN ke BIC SWIFT dan Pencarian Bank';
const description = 'Dapatkan kode BIC/SWIFT dari IBAN Spanyol mana pun secara instan. Validator akun bank dengan algoritma resmi untuk transfer.';

const faqData = [
  {
    question: 'Apa itu kode BIC atau SWIFT?',
    answer: 'Ini adalah pengenal internasional bank Anda. Kode ini diperlukan agar uang mengetahui ke lembaga mana ia harus dituju saat dikirim ke luar zona SEPA (Eropa).',
  },
  {
    question: 'Bagaimana cara mengetahui BIC bank saya?',
    answer: 'Anda dapat melihatnya di perbankan online Anda atau menggunakan konverter kami. Untuk bank-bank Spanyol, cukup masukkan IBAN, dan kami akan mengekstrak kode lembaga serta memberikan BIC yang sesuai.',
  },
  {
    question: 'Apakah aman memasukkan IBAN saya di sini?',
    answer: 'Sangat aman. Alat kami memvalidasi kode secara lokal di browser Anda. Kami tidak menyimpan atau mengirim data perbankan Anda ke server eksternal mana pun.',
  },
  {
    question: 'Mengapa IBAN di Spanyol memiliki 24 karakter?',
    answer: 'Ini adalah norma standar. 4 Karakter pertama mengidentifikasi negara dan kontrol, dan 20 lainnya adalah nomor rekening lama.',
  },
];

const howToData = [
  {
    name: 'Cari IBAN Anda',
    text: 'Anda akan menemukannya di kartu bank, buku tabungan, atau profil perbankan online Anda.',
  },
  {
    name: 'Masukkan ke dalam validator',
    text: 'Tulis atau tempel kode lengkapnya. Sistem kami akan memformatnya secara otomatis untuk memudahkan pembacaan.',
  },
  {
    name: 'Tekan tombol konversi',
    text: 'Sistem akan memvalidasi bahwa digit kontrol sudah benar menggunakan algoritma Modulo 97.',
  },
  {
    name: 'Salin hasilnya',
    text: 'Anda akan mendapatkan kode BIC/SWIFT dan nama lembaga perbankan yang siap untuk disalin dan digunakan.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
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
      text: 'Konverter IBAN ke BIC/SWIFT: Segala Hal yang Perlu Anda Ketahui tentang Kode Bank Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam dunia keuangan internasional yang kompleks, dua akronim mendominasi setiap operasi transfer: <strong>IBAN</strong> dan <strong>BIC</strong> (juga dikenal sebagai SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'Konverter IBAN ke BIC / SWIFT',
    labelDescription: 'Hitung kode BIC dari akun bank Spanyol mana pun secara instan.',
    labelInputIBAN: 'Masukkan IBAN Anda',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Dapatkan Kode BIC',
    labelBIC: 'Kode BIC / SWIFT',
    labelCountry: 'Negara / Format',
    labelBank: 'Lembaga Perbankan',
    labelError: 'IBAN yang dimasukkan tampaknya tidak valid. Periksa kembali digitnya.',
    labelCopyButton: 'Salin',
    labelCopied: 'Tersalin',
    labelBankNotIdentified: 'Lembaga tidak teridentifikasi',
    labelBankOutsideSpain: 'Bank di luar Spanyol (Data terbatas)',
    labelInvalidIBAN: 'IBAN Tidak Valid',
    labelFormattingOK: 'Format OK',
  },
};
