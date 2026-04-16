import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'enflasyon-ispanya';
const title = 'İspanya Enflasyon Hesaplayıcı: Paranın Tarihsel Değeri';
const description =
  'Pesetalarınızın bugün ne kadar değere sahip olacağını veya 1980’den bu yana yaşam maliyetinin ne kadar arttığını keşfedin. 2026 yılına kadar güncellenmiş İspanya tarihsel TÜFE verileri.';

const faqData = [
  {
    question: 'TÜFE nedir ve nasıl hesaplanır?',
    answer:
      'Tüketici Fiyat Endeksi (TÜFE), İspanya tüketimini temsil eden bir mal ve hizmet sepetinin fiyatlarındaki değişimi ölçer. Bu sepetin maliyetinin farklı zaman dilimlerinde karşılaştırılmasıyla hesaplanır.',
  },
  {
    question: '1980’den bu yana para ne kadar değer kaybetti?',
    answer:
      '1980 yılındaki 1.000 Peseta, satın alma gücü bakımından bugünün yaklaşık 60 Avrosuna eşdeğerdir. Para, birikimli enflasyon nedeniyle bu 40 yılı aşkın sürede değerinin %90’ından fazlasını kaybetmiştir.',
  },
  {
    question: 'Neden birikimlerimi hareket ettirmezsem değer kaybediyorlar?',
    answer:
      'Enflasyon yıllık %3 ise ve hesabınız %0 faiz veriyorsa, her yıl satın alma gücünüzün %3’ünü kaybedersiniz. Gerçek değeri korumak için birikimleriniz en az enflasyon oranı kadar getiri sağlamalıdır.',
  },
  {
    question: 'İspanya’da en yüksek enflasyon dönemi hangisiydi?',
    answer:
      '80’li yıllar, çift haneli oranlarla (%15’e kadar) en enflasyonist yıllardı. Fiyatlar aydan aya köklü bir şekilde değişiyordu. Euro’dan (2002) bu yana enflasyon, 2021-2023 dönemi hariç daha kontrollü olmuştur.',
  },
  {
    question: 'Enflasyon birikimlerimi nasıl etkiler?',
    answer:
      'Enflasyon „sessiz vergi” gibi hareket eder. Enflasyon %5 ise ve paranız yastık altındaysa, yıl sonunda %5 daha az ürün satın alabilirsiniz. Bu etkiyle mücadele etmek için yatırım yapmak esastır.',
  },
];

const howToData = [
  {
    name: 'Başlangıç yılını seçin',
    text: 'Paranın değerini hesaplamak istediğiniz tarihi seçin (1980’den 2026’ya kadar mevcuttur).',
  },
  {
    name: 'Tutarı girin',
    text: 'Karşılaştırmak istediğiniz tutarı Peseta (eski tarihler için) veya Euro cinsinden yazın.',
  },
  {
    name: 'Bitiş yılını seçin',
    text: 'Satın alma gücünün gelişimini hangi ana kadar görmek istediğinizi belirleyin.',
  },
  {
    name: 'Gerçek sonucu analiz edin',
    text: 'Satın alma gücü eşdeğerini ve bu dönemdeki birikimli enflasyon yüzdesini gözlemleyin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Enflasyon Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Resmi Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'INE: Tüketici Fiyat Endeksi (İspanya)',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'İspanya Bankası (Banco de España): Enflasyon Analizi',
      url: 'https://www.bde.es/',
    },
    {
      name: 'AMB: Para Politikası ve Fiyatlar',
      url: 'https://www.ecb.europa.eu/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tarihsel Enflasyon Hesaplayıcı: Paranızın Gerçek Değerini Anlayın',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Enflasyon, birikimlerinizi her yıl kemiren „sessiz vergi”dir. 1980’den bu yana paranızın ne kadar değer kaybettiğini biliyor musunuz? 20 yıl önce 300 Peseta ödediğiniz o kahve bugün gerçekte ne kadar?',
    },
    {
      type: 'title',
      text: 'Enflasyon: Varlığınız Üzerindeki Sessiz Vergi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Enflasyon</strong>, fiyatların sürekli ve genel artışıdır. Teknik bir fenomen gibi görünse de gerçek ekonomi üzerindeki etkisi doğrudan olup, aynı miktardaki parayla alabileceğiniz mal miktarını azaltır ve koruyucu önlemler alınmazsa bir ömürlük birikimi eritir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: '1980 Tarihsel Rekoru',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: '2022 Fiyat Zirvesi',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'İstikrar Hedefi',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Temel Finansal Terimler',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'TÜFE',
          definition: 'Temel tüketim sepetindeki fiyat değişimini özetleyen gösterge.',
        },
        {
          term: 'Satın Alma Gücü',
          definition: 'Bir para biriminin belirli bir andaki gerçek alım kapasitesi.',
        },
        {
          term: 'Deflasyon',
          definition: 'Yatırımları felç edebilen fiyatlardaki genel düşüş.',
        },
        {
          term: 'Stagflasyon',
          definition: 'Ekonomik durgunlukla birlikte görülen yüksek enflasyon senaryosu.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ekonomik Dönüm Noktaları ve Karşılaştırma',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '80’ler Krizi',
          description: 'Çift haneli enflasyonlar ve büyük iş gücü istikrarsızlığı ile işaretlenen dönem.',
          points: [
            'Aşırı yüksek faiz oranları',
            'Peseta değerinin hızla kaybı',
            'Fiyatlar tarafından yutulan maaşlar',
          ],
        },
        {
          title: 'Pandemi Enflasyonu: 2021-2023',
          description: 'Enerji maliyetleri ve tedarik zinciri sorunları nedeniyle ani yükseliş.',
          highlight: true,
          points: [
            'Market sepetine doğrudan etki',
            'Tüketimi frenlemek için AMB’nin faiz artırımı',
            'Satın alma gücünün yavaş toparlanması',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Ürün veya Gösterge', '1980 Değeri (Tahmini)', '2026 Değeri (Öngörülen)', 'Değişim'],
      rows: [
        ['Ekmek', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Kafede Kahve', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Sinema Bileti', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Aylık Asgari Ücret', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Nakit Paranın Tehlikesi',
      html: 'Parayı yastık altında veya getirisiz vadesiz hesaplarda tutmak, garantili sermaye kaybıdır. Ortalama %3 enflasyon, birikimlerinizin değerini 25 yıldan kısa sürede yarıya indirir.',
    },
    {
      type: 'title',
      text: 'Birikimlerinizi Korumak İçin Öneriler',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Yatırım Stratejileri',
      items: [
        {
          pro: 'Gerçek Varlıklar: Gayrimenkuller genellikle enflasyonla birlikte değer kazanır.',
          con: 'Düşük likidite ve yüksek giriş maliyetleri.',
        },
        {
          pro: 'Borsa ve Fonlar: Uzun vadede genellikle TÜFE’yi aşan getiriler.',
          con: 'Kısa vadede volatilite ve piyasa riski.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sağlıklı Finansal Alışkanlıklar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gizli artışları tespit etmek için harcamalarınızı periyodik olarak gözden geçirin.',
        'Birikimlerinizi farklı varlık türlerine dağıtın.',
        'Enflasyona endeksli devlet tahvillerini değerlendirin.',
        'Teklifleri ve maaşları bağlamsallaştırmak için hesaplama araçları kullanın.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Negatif Bileşik Faiz Uyarısı',
      html: 'Enflasyon ters bileşik faiz gibi hareket eder. Her yıl, kayıp yüzdesi zaten azalmış olan bir değere uygulanır ve müdahale edilmezse servet kaybını hızlandırır.',
    },
    {
      type: 'summary',
      title: 'Temel Sonuçlar',
      items: [
        'TÜFE sadece bir ortalamadır; kişisel enflasyonunuz alışkanlıklarınıza bağlıdır.',
        'Çalışmanın gerçek değerini korumak isteniyorsa yatırım yapmak isteğe bağlı değildir.',
        'Enflasyon hesaplayıcıları uzun vadeli sözleşmeleri anlamak için hayati önem taşır.',
      ],
    },
    {
      type: 'message',
      title: 'Ekonominizin Kontrolünü Ele Alın',
      html: 'Hesaplayıcımız, İspanya’nın ekonomik geçmişi ve bugünü hakkında size en doğru görünümü sunmak için resmi INE verilerini kullanır.',
    },
  ],
  ui: {
    labelTitle: 'İspanya Enflasyon Hesaplayıcı',
    labelInitialAmount: 'Başlangıç Tutarı',
    labelInitialYear: 'Yılında',
    labelFinalAmount: 'Bugünkü Karşılığı',
    labelFinalYear: '2026 Yılı',
    labelInflationRate: 'Birikimli Enflasyon',
    labelCalculatedOn: 'Hesaplama 2025’e kadar olan resmi INE verileri ve 2026 sonu için tahmini öngörüler kullanılarak yapılmıştır.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'tr-TR',
    labelYearSelect: 'Yılında',
    labelIn: 'Şu tarihteki',
    labelEquivalentToday: 'bugün şuna eşdeğerdir',
    labelInflationAccumulated: 'Birikimli Enflasyon',
    labelYear: 'Yıl',
  },
};
