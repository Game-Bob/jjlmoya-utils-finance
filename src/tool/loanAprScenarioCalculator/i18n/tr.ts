import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Teklif A",
  labelScenarioB: "Teklif B",
  labelScenarioName: "Teklif adı",
  labelCurrency: "Para birimi",
  labelApproximateRates:
    "Planlama için yaklaşık katsayılar; canlı döviz kurları değildir.",
  labelPrincipal: "Borç alınan tutar",
  labelTerm: "Geri ödeme süresi",
  labelMonths: "ay",
  labelInputBasis: "Hangi bilgiyi biliyorsunuz?",
  labelAnnualRate: "Nominal yıllık faiz",
  labelMonthlyPayment: "Bilinen aylık ödeme",
  labelUpfrontFees: "Başlangıç ücretleri",
  labelMonthlyFees: "Aylık ücretler",
  labelFinalFees: "Son ücret",
  labelOfferNameA: "Teklif A",
  labelOfferNameB: "Teklif B",
  labelRateMode: "Faizi biliyorum",
  labelPaymentMode: "Ödemeyi biliyorum",
  labelPreset: "Karşılaştırmayı başlat",
  labelPresetBalanced: "Dengeli teklifler",
  labelPresetLowFee: "Düşük faiz ve ücretler",
  labelPresetLongTerm: "Daha uzun vade",
  labelReset: "Değerleri sıfırla",
  labelCopy: "Karşılaştırmayı kopyala",
  labelCopied: "Karşılaştırma kopyalandı",
  labelEffectiveApr: "Efektif yıllık maliyet",
  labelNominalRate: "Nominal faiz",
  labelMonthlyPaymentResult: "Aylık ödeme",
  labelTotalPaid: "Toplam ödenen",
  labelTotalFees: "Senaryodaki ücretler",
  labelFinanceCost: "Anaparayı aşan maliyet",
  labelNetCashReceived: "Başlangıç ücretlerinden sonra alınan",
  labelWinner: "Hangi teklif daha ucuz?",
  labelLowerCost: "Daha düşük efektif maliyet",
  labelHigherCost: "Daha yüksek efektif maliyet",
  labelTie: "Neredeyse eşit",
  labelNeedValidInputs: "Geçerli bilgiler gerekli",
  labelInvalidPrincipal:
    "Borç alınan tutar sıfırdan ve başlangıç ücretlerinden büyük olmalıdır.",
  labelInvalidTerm: "1 ile 600 ay arasında tam sayı bir vade kullanın.",
  labelInvalidFees: "Ücretler negatif olamaz.",
  labelInvalidPayment:
    "Alınan net tutarı geri ödeyebilecek pozitif bir aylık ödeme girin.",
  labelInvalidRate: "%0 ile %100 arasında nominal yıllık faiz kullanın.",
  labelNoComparison: "Karşılaştırmak için iki teklifi de tamamlayın.",
  labelTimeline: "Ödeme zaman çizelgesi",
  labelStart: "Başlangıç",
  labelMonthly: "Her ay",
  labelEnd: "Son ay",
  labelFormula: "Karşılaştırma nasıl çalışır",
  labelFormulaText:
    "Efektif yıllık maliyet, alınan tutarı iskonto edilmiş ödemeler ve ücretlerle eşitleyen aylık oranın yıllıklaştırılmış değeridir.",
  labelApproximation:
    "Tahmin eşit aylık ödemeleri, erteleme dönemi olmamasını ve yalnızca girdiğiniz ücretleri varsayar. Kredi verenin resmi APR değerinin yerine geçmez.",
  labelScenarioSummary: "Senaryo özeti",
  currencyCode: "TRY",
  currencyLocale: "tr-TR",
};

const faq = [
  {
    question: "Faiz oranı ile efektif yıllık maliyet arasındaki fark nedir?",
    answer:
      "Nominal faiz, bakiye üzerinden alınan faizi gösterir. Efektif yıllık maliyet ayrıca girdiğiniz başlangıç, aylık ve son ücretlerin tutarını ve zamanını da dikkate alır.",
  },
  {
    question: "Faiz yerine aylık ödeme girebilir miyim?",
    answer:
      "Evet. Teklif için bilinen aylık ödemeyi seçin. Hesaplayıcı alınan tutara, ödeme akışına ve ücretlere uyan aylık oranı tahmin eder.",
  },
  {
    question: "Hangi teklif daha ucuz?",
    answer:
      "Önce efektif yıllık maliyeti karşılaştırın, sonra toplam ödenen ve alınan tutarı kontrol edin. Vade veya tutar farklıysa daha düşük yüzde yine de daha yüksek toplam maliyete yol açabilir.",
  },
  {
    question: "Bu, kredi verenin resmi APR değeri mi?",
    answer:
      "Hayır. Girdilerinize dayanan şeffaf bir senaryo tahminidir. Vergiler, sigorta, ödeme tarihleri ve diğer maliyetler kredi verene ve yargı alanına göre farklı hesaplanabilir.",
  },
];

const howTo = [
  {
    name: "Tutarı ve vadeyi girin",
    text: "Her teklif için alacağınız tutarı ve aylık ödeme sayısını ekleyin.",
  },
  {
    name: "Bildiğiniz bilgiyi seçin",
    text: "Teklifte bulunan nominal yıllık faizi veya aylık ödemeyi girin.",
  },
  {
    name: "Tüm ücretleri ekleyin",
    text: "Tam nakit akışını görmek için başlangıç, aylık ve son ücretleri girin.",
  },
  {
    name: "Karşılaştırmayı okuyun",
    text: "Efektif yıllık maliyeti kullanın, karar vermeden önce toplam ödenen ve alınan tutarı kontrol edin.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kredi APR senaryo hesaplayıcısı",
    description:
      "Faiz, ödeme ve ücret içeren iki kredi senaryosunu karşılaştırır.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "İki kredi teklifini karşılaştırma",
    description:
      "İki kredinin nakit akışını modelleyip efektif yıllık maliyetlerini karşılaştırın.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "kredi-apr-senaryo-hesaplayici",
  title: "Kredi APR senaryo hesaplayıcısı",
  description:
    "Karar vermeden önce efektif yıllık maliyeti tahmin etmek için iki kredi teklifinin faizini, ödeme planını ve ücretlerini karşılaştırın.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Kredileri efektif yıllık maliyete göre karşılaştırın",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Düşük görünen bir faiz oranı dosya ücretini, aylık hizmet ücretini veya son maliyeti gizleyebilir. Bu hesaplayıcı iki teklifin ayrıntılarını karşılaştırılabilir nakit akışlarına çevirerek gerçekten aldığınız paranın maliyetini gösterir.</p>",
    },
    { type: "title", text: "Tahmin neleri içerir", level: 3 },
    {
      type: "paragraph",
      html: "<p>Her teklif için tutarı, vadeyi, nominal yıllık faizi veya bilinen aylık ödemeyi ve farklı zamanlardaki ücretleri girin. Hesaplayıcı alınan net tutarı iskonto edilmiş ödemeler ve ücretlerle dengeleyen aylık oranı bulur ve yıllıklaştırır.</p>",
    },
    {
      type: "paragraph",
      html: "<p>Böylece kredi fiyatı yalnızca faiz oranıyla sınırlı kalmaz. Resmi APR yerel kurallara ve senaryoda bulunmayan varsayımlara bağlı olabileceği için sonuç bir tahmindir.</p>",
    },
    { type: "title", text: "Sonuç nasıl okunur", level: 3 },
    {
      type: "list",
      items: [
        "Tutar ve vade benzer olduğunda efektif yıllık maliyeti karşılaştırın.",
        "Gerçek nakit etkisini anlamak için toplam ödemeyi kontrol edin.",
        "Başlangıç ücretlerinden sonra alınan tutara bakın.",
        "Her maliyetin ne zaman oluştuğunu zaman çizelgesinde görün.",
      ],
    },
    {
      type: "tip",
      title: "Son referans kredi verenin belgesidir",
      html: "<p>Gerçek bir sözleşmede kredi verenin resmi APR değerini aynı varsayımlarla karşılaştırın. Sigorta, vergi, değişken faiz, erken ödeme ücretleri ve girmediğiniz masrafları sorun.</p>",
    },
    { type: "title", text: "Senaryo tahmininin sınırları", level: 3 },
    {
      type: "paragraph",
      html: "<p>Araç eşit aylık ödemeleri, erteleme dönemi olmamasını ve başlangıçta, vade sırasında veya son ayda oluşan ücretleri varsayar. Ödeme gücünü, onayı, yasallığı veya ürünün resmi APR değerini doğrulamaz.</p>",
    },
  ],
};
