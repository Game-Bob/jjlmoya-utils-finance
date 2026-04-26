import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'İlk Yatırım',
  labelFinalValue: 'Son Değer / Mevcut Bakiye',
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

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'yatirim-karlilik-hesaplama-roi-cagr',
  title: 'Karlılık Hesaplayıcı: ROI & CAGR',
  description: 'Yatırım performansınızı analiz edin. Gerçek kazançlarınızı anlamak için ROI ve CAGR hesaplayın.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI mi CAGR mı: Hangi metrik daha iyi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> toplam yüzde kazancı gösterir ancak zamanı görmezden gelir. <strong>CAGR</strong> uzun vadeli analizler için daha iyidir.',
    },
  ],
  faq: [
    {
      question: 'İyi bir CAGR nedir?',
      answer: 'Tarihsel olarak S&P 500 yıllık yaklaşık %7-10 getiri sağlamıştır.',
    },
  ],
  bibliography: [
    {
      name: 'ROI Tanımı - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'İlk sermayeyi girin',
      text: 'Orijinal olarak yatırdığınız miktarı girin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Karlılık Hesaplayıcı',
      description: 'ROI ve CAGR hesaplayın.',
    },
  ],
};
