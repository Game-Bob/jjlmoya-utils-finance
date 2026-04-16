import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'konut-kredisi-hesaplama';
const title = 'Konut Kredisi Simülatörü ve Fransız Amortisman Tablosu';
const description =
  'Aylık kredi taksitinizi hesaplayın, ne kadar faiz ödeyeceğinizi öğrenin ve tüm ödeme planınızı anında görüntüleyin.';

const faqData = [
  {
    question: 'Fransız amortisman sistemi nedir?',
    answer:
      'En yaygın kullanılan sistemdir. Aylık taksit her zaman aynıdır, ancak başlangıçta ödemenizin neredeyse tamamı faize, çok azı ise ana paraya gider. Sonunda ise durum tam tersidir. Bu nedenle erken ödeme yapmak ilk yıllarda daha karlıdır.',
  },
  {
    question: '2026’da sabit mi yoksa değişken faiz mi tercih edilmeli?',
    answer:
      'Sabit faiz: Şimdi biraz daha fazla ödersiniz ama 30 yıl boyunca huzurla uyursunuz. Değişken faiz: Bugün daha ucuz olabilir, ancak faizler yükselirse taksitleriniz fırlayabilir. Bu, risk toleransınıza bağlıdır.',
  },
  {
    question: '10.000 TL erken ödeme yaparsam ne kadar tasarruf ederim?',
    answer:
      'Zamana göre değişir. 200.000 TL’lik %3 faizli bir kredinin 1. yılında ödeme yaparsanız 15.000 TL’den fazla faiz tasarrufu sağlayabilirsiniz. 20. yılda yaparsanız tasarruf 2.000 TL’yi zor bulur. Zamanlama kritiktir.',
  },
  {
    question: 'Maaşımın yüzde kaçını krediye ayırmalıyım?',
    answer:
      'Genel tavsiye, aylık net gelirinizin %30-35’ini (diğer borçlar dahil) geçmemesidir. Bu eşiğin aşılması, beklenmedik durumlarda temerrüt riskini önemli ölçüde artırır.',
  },
];

const howToData = [
  {
    name: 'Kredi tutarını girin',
    text: 'Bankadan talep etmeniz gereken toplam tutarı yazın (peşinatınızı düştükten sonra).',
  },
  {
    name: 'Faiz oranını ayarlayın',
    text: 'Bankanın sunduğu yıllık faiz oranını girin. Sabit veya değişken faiz arasında karşılaştırma yapabilirsiniz.',
  },
  {
    name: 'Vade süresini seçin',
    text: 'Krediyi kaç yılda geri ödemek istediğinizi belirleyin. Yıl arttıkça taksit düşer ama toplamda daha fazla faiz ödersiniz.',
  },
  {
    name: 'Amortisman tablosunu inceleyin',
    text: 'Borcunuzun ay ay nasıl değiştiğini ve taksitinizin ne kadarının faiz, ne kadarının ana para ödemesine gittiğini kontrol edin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'Türkiye Cumhuriyet Merkez Bankası: Krediler hakkında bilgi',
      url: 'https://www.tcmb.gov.tr/',
    },
    {
      name: 'Bankacılık Düzenleme ve Denetleme Kurumu (BDDK)',
      url: 'https://www.bddk.org.tr/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Konut Kredisi Kapsamlı Rehberi: Fransız Sistemi ve Ödeme Planı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Konut kredisi muhtemelen hayatınızda alacağınız en büyük borçtur. Fransız amortisman sisteminin nasıl çalıştığını anlamak, size on binlerce lira tasarruf ettirebilecek akıllı kararlar vermeniz için çok önemlidir.',
    },
    {
      type: 'title',
      text: 'Fransız Sisteminin „Tuzağı”: Taksit Kompozisyonunu Anlamak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Türkiye’deki çoğu kredi <strong>Fransız Amortisman Sistemi</strong> (eşit taksitli) kullanır. Ana özelliği, aylık taksitin her zaman aynı olmasıdır (sabit faiz durumunda), ancak içindeki ana para ve faiz oranları zamanla köklü bir şekilde değişir.',
    },
    {
      type: 'tip',
      title: 'Taksitleriniz Nasıl Evrilir?',
      html: '<p><strong>Başlangıçta (1-10. Yıllar):</strong> Taksitin neredeyse tamamını FAİZ olarak ödersiniz ve çok az ana para eksilir. Örneğin %1 faizli bir kredide ilk ödemenizin büyük çoğunluğu faiz olabilir.</p><p><strong>Ortada (11-20. Yıllar):</strong> Oran kademeli olarak dengelenir.</p><p><strong>Sonda (21-30. Yıllar):</strong> Neredeyse tamamı ANA PARA ödemesine gider ve çok az faiz kalır.</p>',
    },
    {
      type: 'paragraph',
      html: 'Bu nedenle, <strong>kredi erken ödemesi</strong> yapacaksanız, bunu kredinin ilk yıllarında yapmak çok daha karlıdır. 1. yılda yapacağınız bir erken ödeme, 20. yılda yapacağınızdan çok daha fazla faiz yükünden kurtarır.',
    },
    {
      type: 'title',
      text: 'Krediye Ne Kadar Para Ayırmalıyım?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Genel tavsiye, kredi taksitlerinizin <strong>aylık net gelirinizin %30-35’ini geçmemesidir</strong>. Bu eşiğin aşılması, iş kaybı, hastalık gibi durumlarda ödeme zorluğu riskini ciddi şekilde artırır.',
    },
    {
      type: 'title',
      text: '2026 Bağlamı: Sabit vs Değişken Faiz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalgalı faiz ortamında, <strong>Sabit Faiz</strong> veya <strong>Değişken Faiz</strong> arasında seçim yapmak, yıllık binlerce lira fark yaratabilecek stratejik bir karardır.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sabit Faiz',
          description: 'Şimdi biraz daha fazla ödersiniz ama taksitinizin asla artmayacağını bilerek huzurla uyursunuz.',
          points: [
            '30 yıl boyunca öngörülebilir taksit',
            'Faiz artışlarına karşı tam koruma',
            'Belirsiz ekonomide iç huzuru',
            'Dar bütçeler için ideal',
          ],
        },
        {
          title: 'Değişken Faiz',
          description: 'Bugün daha ucuz olabilir ancak ekonominizi piyasa dalgalanmalarına açık hale getirir.',
          highlight: true,
          points: [
            'Daha düşük başlangıç taksiti',
            'Faiz artış riski',
            'Bütçe üzerinde ciddi olası etki',
            'Sadece yüksek risk toleransı olanlar için',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Sabit vs Değişken Kararı Profilinize Bağlıdır',
      html: '<p><strong>Sabit Faizi Seçin:</strong> Bütçeniz darsa, kesinlik arıyorsanız ve sürprizlerden hoşlanmıyorsanız.</p><p><strong>Değişken Faizi Seçin:</strong> Finansal tamponunuz varsa, faizlerin düşeceğine inanıyorsanız veya krediniz küçükse.',
    },
  ],
  ui: {
    labelTitle: 'Kredi Hesaplayıcı',
    labelLoanAmount: 'Kredi Tutarı',
    labelInterestRate: 'Faiz Oranı (%)',
    labelYears: 'Vade (Yıl)',
    labelMonthlyExtra: 'Aylık Ek Ödeme',
    labelMonthlyPayment: 'Aylık Taksit',
    labelMonthCount: 'ay',
    labelSavingsCard: 'Potansiyel Tasarrufunuz',
    labelSavingsInterest: 'Faiz Tasarrufu',
    labelSavingsTime: 'Zaman Kazancı',
    labelTimelineComparison: 'Zaman Karşılaştırması',
    labelTimelineOriginal: 'Orijinal Vade',
    labelTimelineOptimized: 'Erken Ödeme ile Vade',
    labelCostBreakdown: 'Toplam Maliyet Dağılımı',
    labelBorrowed: 'Ana Para',
    labelTotalBorrowed: 'Toplam Kredi',
    labelTotalInterest: 'Toplam Faiz',
    labelAmortizationTable: 'Ödeme Planı',
    labelTableHeader: 'Tüm tabloyu gör',
    labelViewAll: 'Hepsini gör',
    labelPaid: 'Kredi Ödendi',
    labelTableMonth: 'Ay',
    labelTableInterest: 'Faiz',
    labelTablePrincipal: 'Ana Para',
    labelTableExtra: 'Ekstra',
    labelTableBalance: 'Kalan Borç',
    labelMoreMonths: 'ay daha',
    labelMonth: 'Ay',
    currencySymbol: '₺',
    currencyCode: 'TRY',
    currencyLocale: 'tr-TR',
    monthPlural: 'ay',
    yearPlural: 'yıl',
  },
};
