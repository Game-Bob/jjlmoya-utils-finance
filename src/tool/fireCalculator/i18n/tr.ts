import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'fire-hesaplayici-yuzde-4-kurali';
const title = 'FIRE Hesaplayıcı: Finansal Özgürlüğünüz için %4 Kuralı';
const description = '%4 kuralını kullanarak finansal bağımsızlık için sihirli numaranızı hesaplayın Erken emekliliğinizi planlayın ve ekonomik özgürlüğe giden yolunuzu görselleştirin.';

const faqData = [
  {
    question: '%4 Kuralı Nedir?',
    answer: '%4 Kuralı, Trinity Çalışması’na dayanan bir çekim stratejisidir; emekliliğin ilk yılında mal varlığınızın %4’ünü çekebileceğinizi ve sonraki yıllarda enflasyona göre ayarlama yaparak fonlarınızı 30 yıl boyunca tüketmeden yaşayabileceğinizi belirtir.',
  },
  {
    question: 'FIRE Nedir?',
    answer: 'FIRE, Financial Independence, Retire Early (Finansal Bağımsızlık, Erken Emeklilik) anlamına gelir. Tasarruf ve akıllı yatırımın agresif bir kombinasyonu yoluyla ekonomik özgürlüğe ulaşmayı amaçlayan bir harekettir.',
  },
  {
    question: 'Sihirli Numaram Kaç?',
    answer: 'Sihirli numaranız, çalışmadan getirilerle yaşayabilmek için biriktirmeniz gereken toplam mal varlığıdır. Yıllık giderlerinizin güvenli çekim oranına (genellikle %4) bölünmesiyle hesaplanır.',
  },
  {
    question: 'Lean, Barista ve Fat FIRE Arasındaki Fark Nedir?',
    answer: 'Lean FIRE, minimum giderlerle yaşamak (mevcut giderlerin %70’i), Barista FIRE, getiriler geri kalanını karşılarken yarı zamanlı çalışmak (%50 gider) ve Fat FIRE, lüks bir yaşam tarzına sahip olmaktır (%150 gider).',
  },
  {
    question: '%4 Kuralı Gerçekçi mi?',
    answer: '%4 kuralı, 30 yıl boyunca %50 hisse senedi-%50 tahvil portföyünde %95’lik bir tarihsel başarı olasılığına sahiptir. Ancak, getiri dizisi riskini hesaba katmaz ve esas olarak ABD piyasa verilerine dayanır.',
  },
];

const howToData = [
  {
    name: 'Aylık Giderlerinizi Hesaplayın',
    text: 'Konut, gıda, hizmetler ve eğlence dahil olmak üzere her ay gerçekte ne kadar harcadığınızı analiz edin.',
  },
  {
    name: 'Güvenli Çekim Oranınızı Seçin',
    text: '%4 Kuralı standarttır, ancak risk toleransınıza göre %2,5 (daha muhafazakar) ile %6 (daha agresif) arasında ayarlama yapabilirsiniz.',
  },
  {
    name: 'Mevcut Mal Varlığınızı Girin',
    text: 'Yatırımlarınızın, tasarruflarınızın ve pasif gelir getiren varlıklarınızın toplamını toplayın.',
  },
  {
    name: 'İlerlemenizi Görselleştirin',
    text: 'Hedefinize ne zaman ulaşacağınızı anlamak için büyüme grafiğini ve özgürlük kilometre taşlarını (Lean, Barista, Fat FIRE) gözlemleyin.',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'FIRE Hakkında Sıkça Sorulan Sorular',
  faq: faqData: 'Kaynaklar ve Referanslar',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '%4 Kuralı: Erken Emekliliğin Kutsal Kasesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sonsuza dek getirilerle yaşamak için gereken mal varlığını nasıl hesaplayacağınızı keşfedin. <strong>%4 Kuralı</strong>, 1998 yılında üç finans profesörü tarafından yürütülen Trinity Çalışması’ndan doğmuştur. Portföyü 30 yılda tüketmeden yıllık olarak hangi yüzdenin çekilebileceğini belirlemek için 1926’dan bu yana olan tarihsel verileri analiz ettiler.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '%95', label: 'Tarihsel Başarı' },
        { value: '50/50', label: 'Hisse/Tahvil Payı' },
        { value: '30', label: 'Yıllık Ufuk' },
        { value: '%4', label: 'Güvenli Çekim' },
      ],
    },
    {
      type: 'title',
      text: 'FIRE Hareketi Nedir?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE, Financial Independence, Retire Early (Finansal Bağımsızlık, Erken Emeklilik) ifadesinin kısaltmasıdır.',
        'Paranın kısıtlayıcı bir faktör olmadığı, zamanınızla ne yapacağınızı seçme özgürlüğünü arar.',
        'Tasarrufun optimizasyonu ve akıllı yatırıma dayanır.',
        'Hedef, varlıklarınızın giderlerinizi karşılayacak kadar nakit akışı yaratmasıdır.',
      ],
    },
    {
      type: 'title',
      text: 'Finansal Özgürlük Türleri',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Minimalist yaşam tarzı. Sadece temel hayatta kalma giderlerini karşılar.',
          points: ['Ekstrem tasarruf', 'Çok düşük harcama', 'Sade özgürlük'],
        },
        {
          title: 'Barista FIRE',
          description: 'Yatırımlarınızın giderlerinizin yarısını karşıladığı hibrit durum.',
          points: ['Keyif için çalışma', 'Sosyal güvence kapsamında', 'Daha az stres'],
        },
        {
          title: 'Fat FIRE',
          description: 'Lüks ve seyahate izin veren geniş bir bütçeyle emeklilik.',
          points: ['Yüksek mal varlığı', 'Sıfır kısıtlama', 'Aile mirası'],
        },
      ],
    },
    {
      type: 'title',
      text: 'FIRE Hesaplayıcımız Nasıl Kullanılır?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Gider Takibi:</strong> Son 12 aydaki gerçek giderlerinizi analiz edin.',
        '<strong>SWR Tanımı:</strong> Riskinize göre güvenli çekim oranınızı seçin.',
        '<strong>Mevcut Mal Varlığı:</strong> Mevcut yatırımlarınızın değerini girin.',
        '<strong>Tasarruf Kapasitesi:</strong> Hedefe ne kadar zamanınız kaldığını tahmin edin.',
        '<strong>Görsel Analiz:</strong> Servetinizin büyüme grafiğini analiz edin.',
      ],
    },
    {
      type: 'title',
      text: '%4 Kuralının Analizi',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Avantajlar',
          description: '%4 kuralı neden işe yarıyor?',
          points: [
            'Hızlı planlama için matematiksel basitlik.',
            'Neredeyse bir asırlık tarihsel verilere dayanır.',
            'Her türlü harcama seviyesine uyarlanabilir.',
          ],
        },
        {
          title: 'Sınırlamalar',
          description: '%4 kuralı neleri kapsamaz?',
          points: [
            'Getiri dizisi riskini hesaba katmaz.',
            'Esas olarak ABD piyasasına dayanır.',
            'Yerel vergilendirmedeki köklü değişiklikleri görmezden gelir.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kritik Faktör: Enflasyon',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bugünkü 1.000 TL’nin gelecekte aynı şeyi satın almayacağını unutmayın. Projeksiyonlarınızın mevcut satın alma gücünü koruması için reel getirileri (enflasyon düşülmüş) kullanmak hayati önem taşır. %4 Kuralı, çekimlerinizi her yıl enflasyona göre ayarladığınızı varsayar.',
    },
  ],
  ui: {
    labelTitle: 'FIRE Hesaplayıcı: %4 Kuralı',
    labelDescription: '%4 kuralını kullanarak finansal bağımsızlık için sihirli numaranızı hesaplayın ve özgürlüğe giden kilometre taşlarınızı görselleştirin.',
    labelMonthlyExpenses: 'Aylık Giderler',
    labelSWR: 'Çekim Oranı (SWR)',
    labelCurrentWorth: 'Mevcut Mal Varlığı',
    labelMonthlySavings: 'Aylık Tasarruf Kapasitesi',
    labelAnnualReturn: 'Tahmini Getiri (Net)',
    labelFreedomMilestones: 'Özgürlük Kilometre Taşları',
    labelLeanFIRE: 'Lean FIRE (%70 hayatta kalma)',
    labelBaristaFIRE: 'Barista FIRE (%50 gelir)',
    labelFatFIRE: 'Fat FIRE (%150 lüks)',
    labelMagicNumber: 'Özgür Olmak İçin Sihirli Numaranız',
    labelMagicNumberDesc: 'Getirilerle yaşamak için gereken sermaye',
    labelTimeRemaining: 'Finansal özgürlüğe kalan süre',
    labelTimeRemainingFormat: '{years} yıl ve {months} ayınız kaldı',
    labelAlreadyFI: 'Zaten finansal özgürlüğe ulaştınız!',
    labelUnachievable: 'Bu tasarrufla hedefe ulaşılamaz',
    labelHiddenCostsChecklist: 'Gizli Gider Kontrol Listesi',
    labelHealth: 'Sağlık Sigortası (+200₺)',
    labelTaxes: 'Vergiler (+150₺)',
    labelHome: 'Ev Bakımı (+100₺)',
    labelTravel: 'Seyahat ve Eğlence (+300₺)',
    labelEmergency: 'Acil Durum Fonu (+100₺)',
    labelSubscriptions: 'Abonelikler (+50₺)',
    labelAdded: 'Eklendi:',
    labelSavePlan: 'Planı Kaydet',
    labelSWRTooltip: 'Safe Withdrawal Rate: Tasarruflarınızın bitme riski olmadan her yıl çekebileceğiniz yüzdesi.',
    labelReturnTooltip: 'Yıllık piyasa getirisi (enflasyon düşülmüş hali). Tarihsel standart %7’dir.',
    currencySymbol: '₺',
    currencyCode: 'TRY',
    currencyLocale: 'tr-TR',
  },
};
