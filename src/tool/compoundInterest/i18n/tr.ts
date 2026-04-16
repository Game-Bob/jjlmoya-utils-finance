import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'bilesik-faiz-hesaplama';
const title = 'Bileşik Faiz Hesaplayıcı: Gelecekteki Birikiminizi Görselleştirin';
const description =
  'Küçük yatırımların nasıl büyük servetlere dönüştüğünü keşfedin. Finansal özgürlüğünüzü ve emekliliğinizi planlamak için nihai araç.';

const faqData = [
  {
    question: 'Bileşik faiz nedir?',
    answer:
      'Hem ana para hem de önceki dönemlerden biriken faiz üzerinden hesaplanan faizdir. Bu, zamanla yatırımın katlanarak büyümesini sağlar.',
  },
  {
    question: 'Basit faizden farkı nedir?',
    answer:
      'Basit faizde, faiz sadece ana para üzerinden hesaplanır. Bileşikte ise faizler tekrar yatırıma eklenir, bu da „faizinizin faiz getirmesi” anlamına gelir.',
  },
  {
    question: '„72 Kuralı” nedir?',
    answer:
      'Bir yatırımın ne kadar sürede ikiye katlanacağını tahmin etmek için kullanılan hızlı bir formüldür: 72’yi yıllık getiri oranına bölün. Örneğin, yıllık %8 faizle paranızı 9 yılda ikiye katlarsınız.',
  },
  {
    question: 'Neden erken yaşta yatırım yapmaya başlamak önemlidir?',
    answer:
      'Üstel etki nedeniyle, en belirleyici faktör biriktirilen para miktarı değil, zamandır. Birkaç yıl erken başlamak, anaparalaşma sayesinde çok daha büyük bir nihai servetle sonuçlanabilir.',
  },
];

const howToData = [
  {
    name: 'Ana parayı girin',
    text: 'Yatırım planınıza başlayacağınız para miktarını yazın.',
  },
  {
    name: 'Düzenli katkıları belirleyin',
    text: 'Ek olarak her ay veya her yıl ne kadar para biriktirip yatıracağınızı belirtin.',
  },
  {
    name: 'Yıllık getiriyi tahmin edin',
    text: 'Beklediğiniz yıllık kâr yüzdesini girin (örneğin: tarihsel S&P 500 için %7).',
  },
  {
    name: 'Zaman dilimini ayarlayın',
    text: 'Ana paranızın üstel büyümesini görmek için yatırımı kaç yıl sürdüreceğinizi seçin.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Bileşik Faiz - Vikipedi',
      url: 'https://tr.wikipedia.org/wiki/Bileşik_faiz',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Bileşik Faizin Büyüsü: Servetinizi Üstel Olarak İnşa Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein ona „dünyanın sekizinci harikası” demiştir. <strong>Bileşik faiz</strong>, uzun vadede servet yaratmak için en güçlü mekanizmadır. Bundan yararlanmak için finans uzmanı olmanıza gerek yok: sadece zaman, sabır ve yatırılan paraya ihtiyacınız var.',
    },
    {
      type: 'title',
      text: 'Basit Faiz vs Bileşik Faiz: Kar Topu Metaforu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir tepenin tepesinde bir kar topunuz olduğunu hayal edin. <strong>Basit faiz</strong>, o topu aşağı yuvarlamak ve büyümesi için her metrede elle kar eklemek gibidir. <strong>Bileşik faiz</strong> ise topun kendi kendine yuvarlanmasına izin vermek gibidir: kendi başına kar toplar ve büyüdükçe her dönüşte <em>daha da fazla</em> kar toplamak için daha fazla yüzeye sahip olur.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Basit Faiz',
          description: 'Faiz her zaman sadece başlangıç ana parası üzerinden hesaplanır.',
          points: [
            'Formül: Ana Para × Oran × Zaman',
            'Doğrusal ve öngörülebilir büyüme',
            'Kısa vadeli kredilerde kullanılır',
            'Kârın yeniden yatırımı yoktur',
          ],
        },
        {
          title: 'Bileşik Faiz',
          description: 'Faiz ana paraya eklenir ve yeni faiz getirir.',
          highlight: true,
          points: [
            'Formül: Ana Para × (1 + Oran)^Zaman',
            'Hızlandırılmış üstel büyüme',
            'Tüm uzun vadeli yatırımların temelidir',
            'Kârınız daha fazla kâr getirir',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Matematiksel olarak, kârınız yeni kârlar doğurur. İlk yıllarda yavaş görünür ama „kırılma noktasından” sonra eğri dikey olarak yükselir. Gerçek servetler burada yaratılır.',
    },
    {
      type: 'title',
      text: 'Zaman neden en büyük müttefikinizdir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En belirleyici faktör ne kadar para yatırdığınız değil, <strong>kaç yıl büyümesine izin verdiğinizdir</strong>. 10 yıl erken başlamak, toplamda daha az para yatırsanız bile, 2 veya 3 kat daha fazla nihai servetle sonuçlanabilir. Bu üstel etki, genç yatırımcıların rakipsiz bir avantaja sahip olmasının nedenidir.',
    },
    {
      type: 'tip',
      title: '72 Kuralı',
      html: '<p>Paranızın <strong>ikiye katlanmasının</strong> kaç yıl süreceğini öğrenmek için 72’yi yıllık getiri oranınıza bölün.</p><p><em>Örnek: %8 ile her 9 yılda bir ikiye katlanır (72/8 = 9).</em></p><p>Bu sihirli formül her getiri oranı için geçerlidir ve yatırımlarınızın büyümesini hızlıca tahmin etmenize yardımcı olur.',
    },
    {
      type: 'tip',
      title: '2026 Tavsiyesi',
      html: '<p>Enflasyon hala bir faktör. Satın alma gücünüzü kaybetmemek için net getirinizin yılda en az %2-3’ü geçtiğinden emin olun. Enflasyondan daha hızlı büyüyen varlıklara yatırım yapın.',
    },
    {
      type: 'title',
      text: 'Anaparalaşma Sıklığı: Fark Eder mi?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Faiz yıllık, altı aylık, üç aylık, aylık hatta günlük olarak anaparalaşabilir. <strong>Anaparalaşma ne kadar sık olursa</strong>, bileşik etki o kadar büyük olur. Aynı oranla aynı ana para, faiz yıllık yerine aylık olarak bileşik hale gelirse daha fazla büyüyecektir.',
    },
  ],
  ui: {
    labelTitle: 'Yatırım Similatörü',
    labelRealtime: 'Gerçek zamanlı',
    labelInitial: 'Başlangıç Katkısı',
    labelMonthly: 'Aylık Katkı',
    labelRate: 'Yıllık Getiri',
    labelYears: 'Yıl',
    labelMyMoney: 'Paranız',
    labelProfit: 'Kâr (Faiz)',
    labelTotal: 'Biriken Toplam',
    labelYear: 'Yıl',
    labelPrincipal: 'Paranız (Ana Para)',
    labelInterest: 'Getirilen Faizler',
    insightPrefix: '[İPUCU] ',
    insightSuffix:
      '. yılda, yıllık getirilen faizleriniz katkılarınızı aşacaktır. Para artık sizden daha çok çalışıyor!',
    currencySymbol: '₺',
    currencyCode: 'TRY',
    currencyLocale: 'tr-TR',
  },
};
