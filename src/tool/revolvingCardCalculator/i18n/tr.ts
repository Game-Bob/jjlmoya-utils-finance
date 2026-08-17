import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'doner-kredi-karti-hesaplayici';
const title = 'Döner Kredi Kartı ve Fahiş Faiz Hesaplayıcı';
const description = 'Döner kredi kartı borcunuzun geri ödeme süresini ve faiz maliyetini hesaplayın.';

const faqData = [{ question: 'Döner kredi kartı nasıl çalışır?', answer: 'Döner kredi kartları esnek ödeme imkanı sunar.' },
  { question: "Sonucu kullanmadan önce neyi kontrol etmeliyim?", answer: "Girdileri, birimleri, varsayımları ve sınırlamaları kontrol edin; bu bir rehber tahmindir, resmî karar değildir." },
  { question: "Sonucu kullanmadan önce neyi kontrol etmeliyim?", answer: "Girdileri, birimleri, varsayımları ve sınırlamaları kontrol edin; bu bir rehber tahmindir, resmî karar değildir." },
  { question: "Sonucu kullanmadan önce neyi kontrol etmeliyim?", answer: "Girdileri, birimleri, varsayımları ve sınırlamaları kontrol edin; bu bir rehber tahmindir, resmî karar değildir." },];
const howToData = [{ name: 'Piyasa seçin', text: 'Ülkenizi veya özel limiti seçin.' },
  { name: "Varsayımları kontrol edin", text: "Sonucu yorumlamadan önce hesaplayıcının girdilerini, birimlerini ve sınırlamalarını kontrol edin." },
  { name: "Varsayımları kontrol edin", text: "Sonucu yorumlamadan önce hesaplayıcının girdilerini, birimlerini ve sınırlamalarını kontrol edin." },
  { name: "Varsayımları kontrol edin", text: "Sonucu yorumlamadan önce hesaplayıcının girdilerini, birimlerini ve sınırlamalarını kontrol edin." },];

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
  seo: [{ type: 'title', text: 'Döner Kredi Kartı Nasıl Çalışır?' }, { type: 'paragraph', html: 'Döner kredi kartları esnek ödeme imkanı sunar.' },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },],
  ui: {
    title: 'Döner Kredi Kartı & Faiz Hesaplayıcı',
    balanceLabel: 'Kalan Borç',
    creditLimitLabel: 'Kredi Limiti',
    aprLabel: 'Faiz Oranı (Yıllık % / APR)',
    paymentTypeLabel: 'Ödeme Türü',
    paymentTypeFixed: 'Sabit Aylık Tutar',
    paymentTypePercentage: 'Borç Yüzdesi',
    paymentValueLabel: 'Ödeme Miktarı (Tutar veya %)',
    minPaymentValueLabel: 'Asgari Ödeme Tutarı',
    currencyLabel: 'Para Birimi',
    marketLabel: 'Düzenleyici Piyasa / Ülke',
    marketES: 'İspanya (Banco de España)',
    marketUS: 'ABD (CFPB)',
    marketUK: 'İngiltere (FCA)',
    marketEU: 'Avrupa Birliği (ECB)',
    marketJP: 'Japonya (FSA)',
    marketKR: 'Güney Kore (FSC)',
    marketCN: 'Çin (PBOC)',
    marketBR: 'Brezilya (Banco Central)',
    marketMX: 'Meksika (Banco de México)',
    marketPL: 'Polonya (KNF)',
    marketID: 'Endonezya (OJK)',
    marketTR: 'Türkiye (BDDK / Merkez Bankası)',
    marketRU: 'Rusya (Меркез Банкасы)',
    marketSE: 'İsveç (Finansinspektionen)',
    marketAU: 'Avustralya (ASIC)',
    marketCA: 'Kanada (FCAC)',
    marketCustom: 'Özel Limit',
    customThresholdLabel: 'Özel Faiz Limiti (Yıllık %)',

    resultsTitle: 'Geri Ödeme Sonuçları',
    totalInterestLabel: 'Ödenen Toplam Faiz',
    totalPaidLabel: 'Toplam Geri Ödeme',
    monthsToPayLabel: 'Ödeme Süresi (Ay)',
    infiniteDebtWarning: 'Sonsuz borç! Aylık ödeme aylık faizi karşılamıyor.',
    payoffYearsLabel: 'Ödeme Zaman Çizelgesi',

    usuryTitle: 'Faiz & Uyum Analizi',
    usurySafeStatus: 'Piyasa Standartlarında (Düşük Risk)',
    usuryWarningStatus: 'Yüksek Faiz Oranı (Orta Risk)',
    usuryUsuriousStatus: 'Aşırı Faiz Riskli (Yüksek Risk)',
    usuryReferenceLabel: 'Ortalama Piyasa Oranı',
    usuryThresholdLabel: 'Faiz Uyarı Eşiği',

    tableTitle: 'Aylık Ödeme Planı',
    tableHeaderMonth: 'Ay',
    tableHeaderInitial: 'Başlangıç Borcu',
    tableHeaderInterest: 'Faiz',
    tableHeaderPrincipal: 'Ana Para Ödemesi',
    tableHeaderPayment: 'Ödenen Tutar',
    tableHeaderFinal: 'Kalan Borç',

    copyTooltip: 'Raporu Kopyala',
    copiedLabel: 'Rapor Kopyalandı!',
    currencySymbol: '₺',
    percentSymbol: '%',
  },
};
