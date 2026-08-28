import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Başlangıç Yatırımı',
  labelFinalValue: 'Final Değeri / Mevcut Bakiye',
  labelTimeSelection: 'Yatırım Süresi',
  labelYears: 'Yıl',
  labelMonths: 'Ay',
  labelDays: 'Gün',
  labelROI: 'Yatırım Getirisi (ROI)',
  labelCAGR: 'Yıllık Büyüme Oranı (CAGR)',
  labelNetProfit: 'Net Kar',
  labelLinearGrowth: 'Doğrusal Büyüme (Tahmini)',
  labelExponentialGrowth: 'Bileşik Büyüme (CAGR)',
  labelPositiveResult: 'Karlı Yatırım',
  labelNegativeResult: 'Zarar Pozisyonu',
  labelCopyResult: 'Sonuçları Kopyala',
  labelCopied: 'Kopyalandı!',
};

const slug = 'yatirim-karlilik-hesaplama-roi-cagr';
const title = 'Karlılık Hesaplayıcı: ROI & CAGR';
const description = 'Yatırım performansınızı analiz edin. Gerçek kazançlarınızı anlamak için ROI ve CAGR hesaplayın.';

const faq = [
  {
    question: 'İyi bir CAGR nedir?',
    answer: 'Tarihsel olarak S&P 500 yıllık yaklaşık %7-10 getiri sağlar.',
  },
  {
    question: 'CAGR neden toplam ROI\'den farklıdır?',
    answer: 'ROI zamandan bağımsız toplam getiridir. CAGR ise yıllık orandır.',
  },

  { question: "Sonucu kullanmadan önce neyi kontrol etmeliyim?", answer: "Girdileri, birimleri, varsayımları ve sınırlamaları kontrol edin; bu bir rehber tahmindir, resmî karar değildir." },];

const howTo = [
  {
    name: 'Başlangıç sermayesini girin',
    text: 'Orijinal yatırım miktarını girin.',
  },
  {
    name: 'Final değerini girin',
    text: 'Mevcut piyasa değerini girin.',
  },
  {
    name: 'Süreyi belirleyin',
    text: 'Yatırımı ne kadar süre tuttuğunuzu belirtin.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Hangi metrik daha iyi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> toplam getiri yüzdesini gösterir ancak zamanı dikkate almaz. <strong>CAGR</strong> uzun vadeli analiz için daha iyidir.',
    },

  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın." },
  { type: 'paragraph', html: "Girdileri, birimleri, yuvarlamayı, tarihi ve yargı alanını kontrol edin; her biri tahmini değiştirebilir." },
  { type: 'paragraph', html: "Sonucu planlama ve senaryo karşılaştırması için kullanın; resmî hesabın veya uzman görüşünün yerine geçmez." },
  { type: 'paragraph', html: "Kullanmadan önce sonucu hesaplayıcının gösterdiği varsayımlarla birlikte yorumlayın. CAGR teorik bir ortalamadır ve fiyat dalgalanmasını göstermez; yatırım dönemini, ücretleri, para girişlerini ve çekimleri kontrol edin. ROI toplam sonucu, CAGR ise farklı süreleri karşılaştırmayı kolaylaştırır." },],
  faq,
  bibliography: [
    {
      name: 'ROI Tanımı - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
