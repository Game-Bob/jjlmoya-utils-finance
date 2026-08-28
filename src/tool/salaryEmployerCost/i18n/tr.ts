import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "ispanya-brut-net-maas-isveren-maliyeti-hesaplama";
const title = "İspanya Brüt Net Maaş ve İşveren Maliyeti Hesaplama 2026";
const description = "2026 kurallarına göre İspanya da net maaşı, IRPF vergi kesintisini, çalışan primlerini ve toplam işveren maliyetini hesaplayın.";

const faq = [
  {
    "question": "İspanya da bir çalışanın şirkete maliyeti ne kadardır?",
    "answer": "Şirket brüt maaşı ve kendi sosyal güvenlik primlerini öder."
  },
  {
    "question": "İspanya da brüt maaştan net maaşa nasıl hesaplama yapılır?",
    "answer": "Yıllık brüt maaştan çalışan sosyal güvenlik primi ve IRPF vergisi düşülür."
  },
  {
    "question": "12 veya 14 maaş seçimi yıllık maaşı değiştirir mi?",
    "answer": "Hayır. Hesaplayıcı aynı yıllık brüt tutarı korur."
  },
  {
    "question": "2026 yılı için hangi sosyal güvenlik oranları dahildir?",
    "answer": "Genel sağlık, işsizlik, eğitim, MEI, FOGASA ve iş kazası primleri dahildir."
  },
  {
    "question": "Maaş maksimum prim matrahını aşarsa ne olur?",
    "answer": "2026 aylık tavanı (5.101,20 €) üzerindeki kısma kademeli dayanışma primi uygulanır."
  },
  {
    "question": "Bu hesaplayıcı İspanya dışında geçerli midir?",
    "answer": "Hayır. Yalnızca 2026 İspanya mevzuatına özeldir."
  },
  {
    "question": "Maaş bilgileri bir sunucuya gönderiliyor mu?",
    "answer": "Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır."
  }
];

const howTo = [
  {
    "name": "Brüt maaşı girin",
    "text": "Yıllık veya aylık seçeneğini belirleyip tutarı yazın."
  },
  {
    "name": "İspanya bordro koşullarını ayarlayın",
    "text": "12/14 ödeme, sözleşme türü, IRPF ve iş kazası primini seçin."
  },
  {
    "name": "Maaş dağılımını inceleyin",
    "text": "Net maaş, çalışan kesintileri ve işveren primlerini karşılaştırın."
  },
  {
    "name": "Sonuç periyodunu değiştirin",
    "text": "Yıllık toplamlar veya ödeme başına ortalama görünümüne geçin."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "tr",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Brüt maaş göstergesi",
    "labelGrossSalaryHint": "Maaş tutarı",
    "labelAnnual": "Yıllık",
    "labelMonthly": "Aylık",
    "labelPaySchedule": "Ödeme takvimi",
    "labelTwelvePayments": "12 maaş",
    "labelFourteenPayments": "14 maaş",
    "labelContract": "Sözleşme türü",
    "labelPermanent": "Süresiz (Kadrolu)",
    "labelTemporary": "Süreli (Geçici)",
    "labelIrpfRate": "IRPF Gelir Vergisi Kesintisi",
    "labelIrpfHint": "Vergi dairesi hesaplayıcısı veya bordro oranınızı girin",
    "labelRiskRate": "İş Kazası ve Meslek Hastalığı Primi (AT & EP)",
    "labelRiskHint": "Pozisyona göre işveren iş kazası prim oranı",
    "labelOfficePreset": "Ofis %1,50",
    "labelTradePreset": "Saha / Satış %2,00",
    "labelConstructionPreset": "İnşaat / Saha %6,70",
    "labelNetCore": "Net maaş çekirdeği",
    "labelEmployeeDeductions": "Çalışan kesintileri",
    "labelDeductionsFormula": "IRPF artı çalışan sosyal güvenlik primi",
    "labelEmployerHalo": "İşveren katkı payı halkası",
    "labelEmployerCost": "Toplam işveren maliyeti",
    "labelAnnualView": "Yıllık görünüm",
    "labelPerPaymentView": "Ödeme başına ortalama",
    "labelGross": "Brüt maaş",
    "labelIrpf": "IRPF kesintisi",
    "labelEmployeeSocialSecurity": "Çalışan sosyal güvenliği",
    "labelContributionBase": "Aylık prim matrahı",
    "labelCostMultiplier": "Brüte göre maliyet çarpanı",
    "labelWorkerKeeps": "Toplam maliyet içinde net pay oranı",
    "labelLeanGap": "Sıkı maliyet halkası",
    "labelTypicalGap": "Standart maliyet halkası",
    "labelWideGap": "Genişletilmiş maliyet halkası",
    "labelModelScope": "Yalnızca İspanya. 2026 Genel Rejim, tam zamanlı çalışma. Sonuçlar tahmini niteliktedir.",
    "labelReset": "Örneği sıfırla",
    "labelInvalid": "Geçerli bir yıllık brüt maaş girin ve oranları sınırlar içinde tutun.",
    "labelMinimumSalary": "Model 2026 İspanya asgari ücreti olan yıllık 17.094 € dan başlar.",
    "labelPrivacy": "Tarayıcınızda yerel olarak hesaplanır"
},
  seo: [
    { type: 'title', text: "İspanya da brüt maaştan gerçek şirket maliyetine", level: 2 },
    { type: 'paragraph', html: "2026 kurallarına göre İspanya da net maaşı, IRPF vergi kesintisini, çalışan primlerini ve toplam işveren maliyetini hesaplayın." },
    { type: 'title', text: "İspanya işveren maliyeti hesaplama formülü", level: 2 },
    { type: 'paragraph', html: "Şirket brüt maaşı ve kendi sosyal güvenlik primlerini öder. Brüt ücret modelin başlangıç noktasıdır; çalışan primleri ve IRPF kesintisi tahmin edilerek net ücret bulunur. Şirket maliyetine, seçilen iş kazası oranı da dahil olmak üzere işveren sosyal güvenlik primleri eklenir. Girilen tutarın yıllık mı aylık mı olduğunu ve teklifin on iki mi on dört mü ödeme içerdiğini kontrol edin. Ek ödemeler bordro başına ortalamayı değiştirir, ancak anlaşılmış yıllık brüt ücreti değiştirmemelidir. Sonucu teklifleri karşılaştırmak ve bütçe hazırlamak için kullanın; önemli kararları güncel bordro veya resmî hesapla doğrulayın." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Net maaş çekirdeği"], ['Employer Cost', "Toplam işveren maliyeti"]] },
    { type: 'title', text: "2026 yılı İspanya sosyal güvenlik prim oranları", level: 2 },
    { type: 'paragraph', html: "Genel sağlık, işsizlik, eğitim, MEI, FOGASA ve iş kazası primleri dahildir." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Ofis %1,50", '1.50%'], ["Saha / Satış %2,00", '2.00%'], ["İnşaat / Saha %6,70", '6.70%']] },
    { type: 'title', text: "Prim tavanları ve yüksek maaşlar", level: 2 },
    { type: 'paragraph', html: "2026 aylık tavanı (5.101,20 €) üzerindeki kısma kademeli dayanışma primi uygulanır." },
    { type: 'title', text: "12 maaş ve 14 maaş arasındaki fark", level: 2 },
    { type: 'paragraph', html: "Hayır. Hesaplayıcı aynı yıllık brüt tutarı korur." },
    { type: 'tip', title: "Ödeme takvimi", html: "12/14 ödeme, sözleşme türü, IRPF ve iş kazası primini seçin." },
    { type: 'title', text: "İspanya maaş tahmin modelinin sınırları", level: 2 },
    { type: 'paragraph', html: "Yalnızca İspanya. 2026 Genel Rejim, tam zamanlı çalışma ve normal nakit ücret. Sonuçlar tahmini niteliktedir. Net ücret ve işveren maliyeti çalışanın kişisel durumu, vergi bölgesi, yan haklar, primler, sözleşme türü ve güncel kurallar nedeniyle değişebilir. Teklifleri karşılaştırırken IRPF kesintisini, ödeme sayısını, prim matrahını ve iş kazası oranını aynı tutun. On iki veya on dört ödeme yıllık brüt tutarı değiştirmez, ancak ödeme başına ortalamayı değiştirir. Yüksek ücretlerde prim tavanı ve dayanışma primi sonucu etkileyebilir. Model kısmi çalışmayı, serbest çalışmayı, olağandışı bonusları veya bordro düzeltmelerini kapsamaz. Varsayımları kaydedin ve önemli kararları güncel bordro veya resmî hesapla doğrulayın. Vergi yılı, sözleşme, oranlar veya kişisel bilgiler değiştiğinde hesabı yeniden yapın." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
