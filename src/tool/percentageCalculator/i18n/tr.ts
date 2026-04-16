import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'yuzde-hesaplama';
const title = '4’ü 1 Arada Yüzde Hesaplama: İndirimler, Artışlar ve Azalışlar';
const description =
  'Yüzdeleri çevrimiçi ve ücretsiz olarak kolayca hesaplayın. Y’nin %X’ini bulma, yüzdelik fark, KDV ekleme veya çıkarma, indirimler ve otomatik bahşişler için 4 araç 1 arada.';

const faqData = [
  {
    question: 'Hesaplayıcı nasıl çalışır?',
    answer:
      'Değerleri sorununuzla ilgili kullanım durumunun kutularına yazmanız yeterlidir; hesaplayıcımız herhangi bir hesapla düğmesine basmanıza gerek kalmadan formülü işler.',
  },
  {
    question: 'KDV veya vergi hesaplamak için uygun mu?',
    answer:
      'Evet, 4. blok („Yüzde ekle veya çıkar”) tam olarak bir taban fiyata %18 veya %20 KDV uygulamak veya stopaj hesaplamak gibi durumlar için tasarlanmıştır.',
  },
  {
    question: 'Ondalık ve negatif sayılarla çalışır mı?',
    answer:
      'Kesinlikle. Ondalık sayıları (nokta kullanarak) girebilirsiniz; ayrıca zarar durumundaki muhasebe bakiyelerini analiz etmeniz gerekiyorsa negatif değerlerle de çalışacaktır.',
  },
  {
    question: 'Sonuçları kopyalayabilir miyim?',
    answer:
      'Evet, her bloğun sonuç kutusunda, rakamı anında cihazınızın panosuna kopyalayan bir düğme bulunur, böylece başka bir uygulamaya veya belgeye yapıştırabilirsiniz.',
  },
];

const howToData = [
  {
    name: 'Matematiksel Probleminizi Belirleyin',
    text: '4 bloğun başlıklarını okuyun ve neyi bilmek istediğinizle eşleşeni seçin (Örn: 50’nin %20’si kaçtır? -> Blok 1).',
  },
  {
    name: 'Rakamları Girin',
    text: '„X” ve „Y” alanlarını doldurun. Sıralama konusunda endişelenmeyin, her bloğun cümlesi sizi görsel olarak yönlendirir.',
  },
  {
    name: 'Anlık Sonucu Kopyalayın',
    text: 'Rakam, siz yazdıkça gerçek zamanlı olarak aşağıda görünecektir. Başka bir yere götürmek isterseniz kopyala simgesine basın.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'Yüzde Hesaplama — Vikipedi',
      url: 'https://tr.wikipedia.org/wiki/Yüzde',
    },
    {
      name: 'Temel Matematik Kavramları — Khan Academy',
      url: 'https://tr.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4’ü 1 Arada Yüzde Hesaplama: Hızlı Hesaplamalarda Ustalaşın',
      level: 2,
    },
    {
      type: 'title',
      text: 'Çoklu yüzde hesaplayıcı ne işe yarar?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yüzde hesaplamak, günlük hayatımızdaki en yaygın matematiksel işlemlerden biridir. İndirimli satışlarda indirimi hesaplamaktan, bir restoranda uygun bahşişi bilmeye; bir işletmedeki kâr marjını belirlemekten bir kredinin faizini bulmaya kadar. Günlük işlemler olmalarına rağmen, bunları zihinden yapmak veya tam formülü hatırlamak her zaman kolay değildir.',
    },
    {
      type: 'paragraph',
      html: '4’ü 1 arada yüzde hesaplayıcımız en çok talep edilen senaryoları gruplandırır. Artık Google’da „yüzde 20 nasıl hesaplanır” veya „yüzde hesaplama formülü” diye aramanıza gerek yok. Dört temel işlem tek bir yerde, etkileşimli ve anlık sonuçlarla elinizin altında.',
    },
    {
      type: 'title',
      text: 'En Yaygın 4 Kullanım Durumunun İncelenmesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hayatınızı kolaylaştırmak için aracı, her gün karşılaştığımız gerçek sorunları çözen dört açık görsel bloğa ayırdık:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Y’nin %X’i kaçtır?',
      html: '<p><strong>Klasik durum.</strong> İndirim veya bahşiş hesaplamak için kullanışlıdır. 120 TL’nin %15’inin ne kadar olduğunu bilmek istiyorsanız bu araç size göredir. Temeldeki formül sadece yüzdeyi 100’e böler ve toplam değerle çarpar.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. X, Y’nin yüzde kaçıdır?',
      html: '<p><strong>Oranlar için idealdir.</strong> 60 puanlık bir sınavdan 45 puan aldıysanız, 100 üzerinden notunuz kaçtır? Bu işlev, parçayı bütüne böler ve yüzle çarparak size tam göreceli ağırlığı verir.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Yüzdelik Artış veya Azalış',
      html: '<p><strong>Finans ve analitik için mükemmeldir.</strong> Kira geçen yıldan beri ne kadar arttı? Eskiden 8000 TL ödüyorken şimdi 8400 TL ödüyorsanız, bu işlev size %5’lik bir artış yaşadığınızı söyleyecektir. İki rakam arasındaki büyümeyi veya küçülmeyi ölçer.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Bir değere yüzde ekle veya çıkar',
      html: '<p><strong>KDV için süper kullanışlıdır.</strong> Bir taban fiyatınız varsa (örn. 100 TL) ve %20 KDV eklemeniz gerekiyorsa, bu hesaplayıcı ara işlemlerle uğraşmadan size doğrudan 120 TL sonucunu verecektir. Aynı şekilde, doğrudan bir indirim uygulamak için de kullanılır (örn. %20 çıkarmak).</p>',
    },
    {
      type: 'title',
      text: 'Yüzde hesaplama hakkında yaygın efsaneler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Büyük yüzdeler veya ondalık sayılar gördüğümüzde genellikle tıkanırız ama hayatınızı kolaylaştırabilecek bazı matematiksel „numaralar” vardır. Bunların en ünlüsü <strong>yüzdelerin tersine çevrilebilirliğidir</strong>.',
    },
    {
      type: 'tip',
      title: 'Tersine çevrilebilirlik numarası',
      html: '<p>Y’nin %X’inin, X’in %Y’sine tam olarak eşit olduğunu biliyor muydunuz? Örneğin, sizden zihinden 50’nin %18’ini hesaplamanız istenirse bu karmaşık gelebilir. Ama tersine çevirirseniz, 18’in %50’si çok kolaydır: bu 9’dur! Bu, mutlak her sayı için geçerlidir ve günlük hayatta inanılmaz bir can kurtarıcıdır.</p>',
    },
    {
      type: 'title',
      text: 'Büyüme hesaplarken neden yanılıyoruz?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En yaygın hatalardan biri 3. vakada gerçekleşir: yüzdelik artış veya azalış. Bir hisse senedinin borsada 100 TL olduğunu, %50 düştüğünü ve ertesi gün %50 arttığını hayal edelim. Sezgilerimiz onun tekrar 100 TL değerine döneceğini söyler ama bu yanlıştır.',
    },
    {
      type: 'paragraph',
      html: '100 TL’den %50 düşerse yeni değeri 50 TL olur. Bu 50 TL’den %50 artarsa artış 50’nin yarısı (25 TL) kadardır. Bu nedenle nihai fiyat 75 TL olacaktır. Bu, yüzdelik artış ve azalışların neden simetrik olmadığının ve bu gibi dinamik hesaplayıcıların ciddi finansal hataları neden önlediğinin klasik bir örneğidir.',
    },
    {
      type: 'title',
      text: 'Profesyonel ve akademik kullanım',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Arayüzümüz dikkat dağıtıcı unsurlardan arındırılmıştır ve <strong>hızlı çalışmak</strong> için tasarlanmıştır. Tarayıcınızda sabitlenmiş bir sekmede tutabilir, alanlar arasında çevikçe geçiş yapabilir ve sonucun yanındaki kopyala düğmesi sayesinde tam veriyi yazım hatası riski olmadan Excel veya Google Sheets’inize aktarabilirsiniz.',
    },
    {
      type: 'list',
      items: [
        'Web ticaret ve fiziksel mağazalar: Ticari marjlar uygulayarak ve KDV ekleyerek satış fiyatının hızlı hesaplanması.',
        'İnsan kaynakları yönetimi: Ücret farkının, vergi kesintilerinin ve TÜFE’ye endeksli maaş artışlarının belirlenmesi.',
        'Üniversite eğitimi: Notları dengeleyen profesörler veya deneylerinin sapmasını analiz eden bilim dalları öğrencileri.',
        'Dijital pazarlama: E-ticarette CTR (Tıklanma Oranı), ROAS (Reklam Harcaması Getirisi) veya Dönüşüm Oranı ölçümü.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Yüzde Hesaplama',
    labelCase1Title: 'Durum 1',
    labelCase1Question: 'Y’nin %X’i kaçtır?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formül: (X / 100) × Y',
    labelCase2Title: 'Durum 2',
    labelCase2Question: 'X, Y’nin yüzde kaçıdır?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formül: (X / Y) × 100',
    labelCase3Title: 'Durum 3',
    labelCase3Question: 'İki değer arasındaki yüzdelik fark',
    labelCase3Placeholder1: 'Değer 1',
    labelCase3Placeholder2: 'Değer 2',
    labelCase3Formula: 'Formül: ((Değer 2 - Değer 1) / |Değer 1|) × 100',
    labelCase4Title: 'Durum 4',
    labelCase4Question: 'Bir değere yüzde ekle veya çıkar',
    labelCase4Placeholder1: 'Değer',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formül: Değer ± (Değer × (% / 100))',
    labelCase4AddLabel: 'Toplam (Değer + %)',
    labelCase4SubtractLabel: 'Fark (Değer - %)',
    labelResult: 'Sonuç',
    labelDifference: 'Fark',
    labelCopyTooltip: 'Sonucu kopyala',
    labelFormula: 'Formül',
    percentSymbol: '%',
  },
};
