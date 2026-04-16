import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'gecikme-faizi-hesaplama-ispanya';
const title = 'İspanya Gecikme Faizi ve Yasal Faiz Hesaplayıcı 2026';
const description =
  'İspanya’daki vergi (Hacienda) gecikme faizlerini ve ödeme yapılmaması durumundaki yasal faizleri hesaplayın. 2025 ve 2026 yılları için güncellenmiş simülatör.';

const faqData = [
  {
    question: 'Gecikme faizi (mora faizi) nedir?',
    answer:
      'Belirlenen süre içinde ödenmeyen bir tutar üzerinden alınan faizdir. Asıl borç üzerine uygulanır ve ödemenin tamamı yapılana kadar birikir.',
  },
  {
    question: 'Basit faiz ile bileşik faiz arasındaki fark nedir?',
    answer:
      'Basit faiz, her gün sadece asıl ana para üzerinden hesaplanır. Bileşik faiz ise ana para artı birikmiş faizler üzerinden hesaplanarak borcun daha hızlı büyümesine neden olur.',
  },
  {
    question: 'Günlük faiz nasıl hesaplanır?',
    answer:
      'Yıllık oran 365 güne bölünür ve asıl ana paraya uygulanır. Örneğin, yıllık %10 = günlük %0,0274.',
  },
  {
    question: 'Hangi gecikme faizi oranını uygulamalıyım?',
    answer:
      'Bu, yerel mevzuata ve sözleşme şartlarına bağlıdır. İspanya’da Geç Ödemelerle Mücadele Kanunu azami oranları belirler. Özel durumunuz için bir hukuk danışmanına başvurun.',
  },
  {
    question: 'Bu hesaplayıcıyı mahkeme borçları için kullanabilir miyim?',
    answer:
      'Bu bilgilendirme amaçlı bir araçtır. Gerçek borçlar için sözleşme şartlarını ve yerel mevzuatı kontrol edin. Şüphe durumunda bir avukata danışın.',
  },
];

const howToData = [
  {
    name: 'Hesaplama türünü seçin',
    text: 'Durumunuza göre basit faiz, bileşik faiz veya aylık dönemler arasından seçim yapın.',
  },
  {
    name: 'Verileri girin',
    text: 'Asıl tutarı, faiz oranını ve gecikme süresini girin.',
  },
  {
    name: 'Sonucu alın',
    text: 'Hesaplayıcı, birikmiş günlük faizi, oluşan toplam faizi, nihai tutarı ve efektif oranı gösterir.',
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

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Referanslar',
  bibliography: [
    {
      name: 'İspanya 3/2004 Sayılı Geç Ödemelerle Mücadele Kanunu',
      url: 'https://www.boe.es/',
    },
    {
      name: 'İspanya Bankası (Banco de España): Faiz Oranları',
      url: 'https://www.bde.es/',
    },
    {
      name: 'Bileşik Faiz Hesaplama',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gecikme Faizi ve Yasal Faiz Hesaplayıcı: İspanya Tam Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İspanya’nın karmaşık hukuki ve mali düzeninde, bir borcun ödenmesindeki gecikme bedelsiz değildir. <strong>Gecikme faizi</strong> ve <strong>paranın yasal faizi</strong>, kanunun bir para borcunun yerine getirilmesindeki gecikmeden kaynaklanan zararı telafi etmek için kullandığı mekanizmalardır. İster vergi dairesine (<strong>Hacienda</strong>) olan bir borç, ister şirketler arası bir ödeme gecikmesi veya adli bir talep olsun, bu faizlerin nasıl tahakkuk ettiğini anlamak temel önemdedir.',
    },
    {
      type: 'title',
      text: 'Paranın Yasal Faizi (Interés Legal del Dinero) Nedir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Paranın yasal faizi, tarafların belirli bir faiz üzerinde anlaşmadığı veya kanunun öngördüğü durumlarda borca uygulanan ek bedeldir. <strong>2024, 2025 ve 2026</strong> yılları için bu oran <strong>%3,25</strong> seviyesinde sabit tutulmuştur. Bu yüzde, birçok hukuki hesaplamanın temeli olarak hizmet eder.',
    },
    {
      type: 'title',
      text: 'Vergi Gecikme Faizi (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Borç Kamu İdaresi’ne olduğunda, vergi ödemelerindeki gecikmeyi caydırmak amacıyla <strong>vergi gecikme faizi</strong> yasal faizden daha yüksektir. <strong>2024-2026</strong> dönemi için bu oran <strong>%4,0625</strong> olarak belirlenmiştir. Bu, bir vergi beyannamesini süresinden sonra verdiğinizde Hacienda’nın sizden tahsil edeceği ek bedeldir.',
    },
    {
      type: 'tip',
      title: 'Cezai Değil, Tazminat Niteliğinde',
      html: '<p><strong>Önemli bilgi:</strong> Yaptırımların aksine, gecikme faizleri cezai değil, tazminat niteliğindedir. Vergi dairesi sizi bununla „cezalandırmaz”, ancak kamu kasasında olması gereken bir parayı elinizde tuttuğunuz süre için ücret tahsil eder.</p>',
    },
    {
      type: 'title',
      text: 'Adım Adım Faiz Nasıl Hesaplanır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu faizlerin hesaplanması, zamanın takvim günü bazında sayıldığı basit faiz formülünü takip eder: <strong>Faiz = (Ana Para × Gün × Faiz Oranı) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Ana Para:</strong> Asıl borcun toplam tutarı.',
        '<strong>Gün:</strong> Vadenin ertesi gününden fiili ödeme gününe kadar geçen gün sayısı.',
        '<strong>Faiz Oranı:</strong> Uygulanabilir yıllık yüzde (Örn: 3,25 veya 4,0625).',
        '<strong>36.500:</strong> Yıllık yüzdeyi günlüğe çeviren bölme faktörü (365 gün x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Pratik Örnek: Vergi Dairesine (Hacienda) Olan Borç',
      html: '<p>Vadesi 180 gün önce dolmuş 5.000 € tutarında bir vergi borcunuz olduğunu varsayalım:</p><ul><li>Uygulanacak Faiz (Gecikme): %4,0625</li><li>Hesaplama: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Oluşan Faiz:</strong> 100,17 €</li><li>Ödenecek Toplam: 5.100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Borç Türüne Göre Farklılıklar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sivil Borçlar:</strong> Şahıslar arası borçlarda %3,25 (yasal) uygulanır.',
        '<strong>Ticari Borçlar:</strong> Geç Ödemelerle Mücadele Kanunu’na tabidir ve 2025-2026 yıllarında %10,15 - %11,15 seviyelerine ulaşır.',
        '<strong>Sosyal Güvenlik Borçları:</strong> %4,0625 artı %10 ile %20 arası gecikme zamları uygulanır.',
        '<strong>Yasal İşlem Faizleri:</strong> Mahkeme kararı olduğunda, karar tarihinden itibaren %5,25 uygulanır.',
      ],
    },
    {
      type: 'title',
      text: 'Ticari İşlemlerde Faiz: 60 Güne Dikkat!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kendi hesabına çalışan biriyseniz veya bir şirketseniz, İspanya’da 3/2004 sayılı Kanun azami 60 günlük bir ödeme süresi belirler. Müşteriniz bu tarihi geçerse, hatırlatmaya gerek kalmaksızın otomatik olarak ticari gecikme faizi talep edebilir ve ayrıca tahsilat masrafları için 40 € tutarında sabit bir ücret alabilirsiniz.',
    },
  ],
  ui: {
    labelTitle: 'Gecikme Faizi Hesaplayıcı',
    labelSimpleTitle: 'Basit',
    labelCompoundTitle: 'Bileşik',
    labelMonthlyTitle: 'Aylık',
    labelSimpleQuestion: 'Basit faizle hesapla',
    labelCompoundQuestion: 'Bileşik faizle hesapla',
    labelMonthlyQuestion: 'Aylık dönemlerle hesapla',
    labelPrincipal: 'Asıl Tutar',
    labelAnnualRate: 'Yıllık Oran',
    labelDays: 'Gecikme Günü',
    labelMonths: 'Gecikme Ayı',
    labelMonthlyRate: 'Aylık Oran',
    labelDailyInterest: 'Günlük Faiz',
    labelTotalInterest: 'Toplam Faiz',
    labelTotalAmount: 'Ödenecek Toplam Tutar',
    labelEffectiveRate: 'Efektif Oran',
    labelCopyTooltip: 'Sonucu kopyala',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Uygulanan formül',
    reportTitle: 'FAİZ HESAPLAMA RAPORU',
    reportLabelPrincipal: 'Ana Para',
    reportLabelType: 'Tür',
    reportLabelPeriod: 'Dönem',
    reportLabelDays: 'Geçen gün sayısı',
    reportLabelInterest: 'TAHAKKUK EDEN FAİZ',
    reportLabelTotal: 'TASFİYE EDİLECEK TOPLAM',
    reportDaysSuffix: 'gün',
    formulaDescription: 'Bu hesaplama yürürlükteki oranları kullanır. Dönem farklı oranlara sahip önceki yılları kapsıyorsa, gerçek hesaplama dönemlere göre bölünmelidir.',
    currencyCode: 'EUR',
    currencyLocale: 'tr-TR',
  },
};
