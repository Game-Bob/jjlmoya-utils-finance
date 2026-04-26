import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'piyango-optimize-edici-olasilik-hesaplayici';
const title = 'Piyango Optimize Edici ve Olasılık Hesaplayıcı';
const description = 'İspanya Noel Piyangosu, Euromillions ve Bonoloto’daki olasılıklarınızı analiz edin. İdeal bilet sayısını ve bahsinizin beklenen değerini hesaplayın.';

const faqData = [
  {
    question: 'Piyangoda matematiksel beklenti nedir?',
    answer: 'Bahis yapılan her bir euro başına kazanmayı beklediğiniz ortalama değerdir. Hemen hemen tüm piyangolarda matematiksel beklenti negatiftir (genellikle oynanan her 1€ için 0,50€ kaybedersiniz), bu da uzun vadede her zaman kasanın kazandığı anlamına gelir.',
  },
  {
    question: 'Birçok farklı numara oynamak mı yoksa aynı numaranın birçok biletini almak mı daha iyidir?',
    answer: '"Bir şeyler" kazanmak istiyorsanız, numaraları çeşitlendirmek küçük ödüller alma olasılığınızı artırır. Büyük ikramiyeyi hedefliyorsanız, tek bir numara oynamak ikramiye için aynı olasılığı verir ancak tutarsa ödül daha büyük olur.',
  },
  {
    question: 'İspanya Noel Piyangosu (El Gordo) oynamak gerçekten mantıklı mı?',
    answer: 'Tamamen matematiksel bir bakış açısıyla, hayır. Toplanan paranın sadece %70’i dağıtılır. Ancak, büyük ikramiye olasılığı (100.000’de 1), Euromillions’tan (140 milyonda 1) çok daha yüksektir.',
  },
  {
    question: 'İstatistiklerle şansımı artırabilir miyim?',
    answer: 'Hayır. Piyango çekilişleri bağımsız rastgele süreçlerdir. Bir numaranın dün çıkmış olması, bugün çıkma olasılığını hiçbir şekilde etkilemez.',
  },
  {
    question: 'Karşılaştırma tablosundaki "zorluk" ne anlama geliyor?',
    answer: 'Birinci ödülü kazanmanın ne kadar zor olduğunun göreceli bir ölçüsüdür. Erişilebilir (200 binden az), Zor (20 milyondan az), Ekstrem (20 milyondan fazla).',
  },
];

const howToData = [
  {
    name: 'Çekiliş türünü seçin',
    text: 'Belirli kurallarını analiz etmek için Noel Piyangosu, Primitiva, Euromillions veya Bonoloto arasından seçim yapın.',
  },
  {
    name: 'Yatırımınızı belirleyin',
    text: 'Bu çekiliş için kaç bilet veya bahis almayı planladığınızı belirtin.',
  },
  {
    name: 'Kritik olasılıkları analiz edin',
    text: 'Birinci ödülü kazanma şansınızı küçük ödüller veya amorti ile karşılaştırın.',
  },
  {
    name: 'Risk/getiri değerlendirmesi yapın',
    text: 'Yatırılan her euro başına istatistiksel olarak ne kadar para "hediye ettiğinizi" anlamak için matematiksel beklentiyi gözden geçirin.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Umudun Matematiği',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Piyango oynamak, birçoğu için birkaç euro karşılığında bir illüzyon satın almaktır. Ancak çekilişlerin arkasında matematiğin en büyüleyici dallarından biri olan uç olasılıkların istatistiği yatar.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Noel Piyangosu (El Gordo)',
    description: 'Dünyanın en büyük ödül dağıtımı. Bir şeyler kazanma olasılığı yüksek.',
  },
  nino: {
    name: 'Çocuk Piyangosu (El Niño)',
    description: 'Noel’e göre amorti olasılığını üç katına çıkarır.',
  },
  euromillones: {
    name: 'Euromillions',
    description: 'Astronomik ödüller, neredeyse imkansız olasılıklar.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'İspanya’nın en eski piyangosu. Zor ama daha ucuz.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'En ekonomik olanı. Küçük bütçeyle günlük oynamak için ideal.',
  },
};

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

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    gameTranslations,
    labelTitle: 'Piyango Optimize Edici',
    labelDescription: 'Çekilişleri karşılaştırın, matematiksel beklentinizi hesaplayın ve mantıklı oynayın.',
    labelSelectGame: 'Bir piyango seçin',
    labelConfigurePlay: 'Oyununuzu Yapılandırın',
    labelAdjustQuantity: 'Gerçek olasılığınızı görmek için katılım sayısını ayarlayın.',
    labelTotalInvestment: 'Toplam Yatırım',
    labelTickets: 'Bilet / Bahis Miktarı',
    labelUnits: 'adet',
    labelExposureAnalysis: 'Risk Analizi',
    labelSelectLottery: 'Risk analizini görmek için bir piyango seçin.',
    labelOptimalCutoff: 'Önerilen Kesme Noktası',
    labelProbabilitySuccess: 'Başarı Olasılığı',
    labelExpectedValue: 'Beklenen Değer (EV)',
    labelReturnTheoretical: 'Yapılan her oyun başına teorik getiri.',
    labelSocialReturnIndex: 'Sosyal Karlılık Endeksi',
    labelLow: 'Düşük',
    labelMedium: 'Orta',
    labelHigh: 'Yüksek',
    labelComparison: 'Ödül Karşılaştırması',
    labelLottery: 'Piyango',
    labelCost: 'Maliyet',
    labelTypicalPrize: 'Tipik Ödül',
    labelDifficulty: 'Zorluk',
    labelAccessible: 'Erişilebilir',
    labelDifficult: 'Zor',
    labelExtreme: 'Ekstrem',
    labelNote: 'Not: Noel ve El Niño ödülleri "décimo" (20€) başınadır. Euromillions vb. tipik ikramiyelerdir.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'tr-TR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
