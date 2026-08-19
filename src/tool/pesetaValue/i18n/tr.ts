import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'peseta-euro-donusturucu-deger-2026';
const title = 'Peseta euro çevirici: 2026 değeri';
const description = 'İspanyol pesetalarını euro başına 166,386 peseta sabit kuruyla euroya çevirin ve İspanya TÜFE verileriyle 2026 yılına kadar satın alma gücünü tahmin edin.';
const faq = [
  { question: '1.000 peseta kaç euro eder?', answer: 'Sabit dönüşüm kuruna göre 1.000 peseta 6,01 euro eder. Hesaplayıcı ayrıca bu miktarın seçilen yıldaki satın alma gücü için ayrı bir tahmin gösterir.' },
  { question: 'Bir milyon peseta kaç euro eder?', answer: 'Sabit kura göre bir milyon peseta 6.010,12 euro eder. 2026 yılı için tahmini satın alma gücü, paranın kullanıldığı yıla bağlıdır.' },
  { question: 'Peseta euroya nasıl çevrilir?', answer: 'Peseta miktarını 166,386 ile bölün. Örneğin 100 peseta 0,60 euro, 10.000 peseta ise 60,10 euro eder.' },
  { question: 'Eski pesetalar 2026 yılında ne kadar ederdi?', answer: 'İki farklı cevap vardır. Sabit dönüşüm resmi euro miktarını verir; TÜFE ile düzeltilmiş sonuç, benzer ortalama satın alma gücü için 2026 yılında gereken euro miktarını tahmin eder.' },
  { question: 'Hesaplayıcı eski madeni para veya banknotun koleksiyon değerini hesaplar mı?', answer: 'Hayır. Para dönüşümünü ve ortalama satın alma gücünü hesaplar. Nadir bir madeni para veya koleksiyon banknotu durum, nadirlik ve talebe göre farklı bir piyasa değerine sahip olabilir.' },
  { question: 'Peseta hesaplayıcı hangi yılları kullanır?', answer: '1980 ile 2026 arasındaki bir başlangıç yılını seçebilirsiniz. 2026 referansı yayımlanmış en güncel TÜFE verilerini kullanır ve henüz tamamlanmış yıllık ortalama değildir.' },
  { question: 'Satın alma gücü tahmini kesin bir fiyat mıdır?', answer: 'Hayır. Bu, TÜFE temelinde yapılan ortalama bir karşılaştırmadır; konut, ücret, gıda, enerji veya belirli bir alışveriş için kesin fiyat değildir.' },
];
const howTo = [
  { name: 'Peseta miktarını girin', text: 'Makbuz, banknot, madeni para veya tarihî belgedeki miktarı yazın.' },
  { name: 'Yılı seçin', text: 'Önce on yılı, ardından miktarın kullanıldığı yılı seçin.' },
  { name: 'Sabit dönüşümü okuyun', text: 'Pesetayı 166,386 ile bölerek oluşan nominal euro miktarını görün.' },
  { name: 'Satın alma gücünü karşılaştırın', text: 'Sabit dönüşümü 2026 ortalama satın alma gücü tahminiyle karşılaştırın.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: 'Tarihî miktar', labelAmountHint: 'Başlangıç noktası seçin', labelOriginYear: 'Başlangıç yılı', labelOriginYearHint: 'Varsa yıllık TÜFE ortalaması', labelReferenceYear: '2026 referansı bugüne kadar', labelNominalEuros: 'Sabit dönüşüm', labelTodayValue: 'Tahmini satın alma gücü', labelPurchasingPowerChange: 'Satın alma gücü değişimi', labelNominalDifference: 'Dönüşüm farkı', labelConversionRate: 'Euro başına peseta', labelCpiMethod: 'TÜFE çarpanı', labelPreset100: '100 ptas', labelPreset1000: '1.000 ptas', labelPreset10000: '10.000 ptas', labelPreset100000: '100.000 ptas', labelPesetas: 'peseta', labelEuro: 'euro', labelFrom: 'Başlangıç', labelTo: 'Bitiş', labelOpenYears: 'Başlangıç yıllarını aç', labelCloseYears: 'Başlangıç yıllarını kapat', labelDecade: 'On yıl seçin', labelCoin: 'madeni para', labelBanknote: 'banknot', labelCashPieces: 'para parçaları', labelState: 'değer hareketi', labelStatePositive: 'arttı', labelStateNeutral: 'değişmedi', labelStateNegative: 'azaldı', labelReset: 'Örneği sıfırla', currencyLocale: 'tr-TR' },
  seo: [
    { type: 'title', text: 'Pesetadan euroya: aynı soru için iki cevap', level: 2 },
    { type: 'paragraph', html: 'Eski bir fiyat, maaş, makbuz, madeni para veya İspanyol pesetasıyla yazılmış banknotunuz varsa bu çevirici iki cevap verir. Önce sabit euro dönüşümünü gösterir, ardından tutarın İspanya fiyat değişimlerine göre 2026 satın alma gücü karşılığını tahmin eder.' },
    { type: 'title', text: 'Yaygın peseta euro dönüşümleri', level: 2 },
    { type: 'paragraph', html: 'Sabit kur her zaman 1 euro için 166,386 pesetadır. Yıl, nominal dönüşümü değiştirmez.' },
    { type: 'table', headers: ['Eski miktar', 'Sabit dönüşüm'], rows: [['1 peseta', '0,01 euro'], ['25 peseta', '0,15 euro'], ['50 peseta', '0,30 euro'], ['100 peseta', '0,60 euro'], ['500 peseta', '3,01 euro'], ['1.000 peseta', '6,01 euro'], ['2.000 peseta', '12,02 euro'], ['5.000 peseta', '30,05 euro'], ['10.000 peseta', '60,10 euro'], ['1 milyon peseta', '6.010,12 euro']] },
    { type: 'title', text: 'Pesetalar 2026 yılında ne kadar değerindeydi?', level: 2 },
    { type: 'paragraph', html: 'TÜFE ile düzeltilmiş sonuç euro dönüşümünden farklı bir soruyu yanıtlar. Seçilen miktarın başlangıç yılında satın alabildiği ortalama mal ve hizmet sepetine 2026 yılında ulaşmak için gereken euroyu tahmin eder. 2026 referansı bugüne kadarki en güncel verileri kullanır ve tamamlanmış yıllık ortalama değildir.' },
    { type: 'table', headers: ['Sonuç', 'Anlamı'], rows: [['Sabit dönüşüm', 'Resmî kura göre kesin nominal euro miktarı.'], ['TÜFE ile düzeltilmiş değer', '2026 yılında eşdeğer ortalama satın alma gücü tahmini.'], ['Fark', 'Sabit dönüşüm ile TÜFE tahmini arasındaki mesafe.']] },
    { type: 'title', text: 'Eski bir peseta miktarı nasıl hesaplanır?', level: 2 },
    { type: 'list', items: ['Makbuz, banknot, madeni para veya belgedeki miktarı girin.', 'Miktarın kullanıldığı veya alındığı yılı seçin.', 'Doğrudan euro karşılığı için sabit dönüşümü kullanın.', 'Tarihî satın alma gücü bağlamı için TÜFE değerini kullanın.', 'Farkı enflasyon bağlamı olarak okuyun, kişisel fiyat tahmini olarak değil.'] },
    { type: 'title', text: 'Madeni para ve banknotların koleksiyon değeri otomatik olarak bu değildir', level: 2 },
    { type: 'paragraph', html: 'Bu araç para dönüşümü ve enflasyonu hesaplar, nümizmatik değerleme yapmaz. Nadir bir madeni para veya eski banknot yıl, durum, nadirlik ve talebe göre farklı bir piyasa değerine sahip olabilir.' },
    { type: 'tip', title: 'Yıl satın alma gücünü değiştirir, kuru değil', html: 'Resmî kur 1 euro için 166,386 peseta olarak kalır. Yalnızca başlangıç yılıyla TÜFE karşılaştırması değişir ve bu karşılaştırma her zaman ortalama tüketim sepetini anlatır.' },
  ],
  faq, bibliography, howTo, schemas,
};
