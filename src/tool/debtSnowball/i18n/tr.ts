import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'borc-kartopu-metodu-hesaplayici';
const title = 'Borç Kartopu Hesaplayıcı: Borç Ödeme Planı 2026';
const description = 'Dave Ramsey’in kartopu metodu ile finansal özgürlük tarihinizi hesaplayın. Borçlarınızı düzenleyin ve aylık ödeme planınızı görselleştirin.';

const faqData = [
  {
    question: 'Borç kartopu metodu nedir?',
    answer: 'Faiz oranına bakılmaksızın borçların en küçük bakiyeden en büyüğe doğru ödenmesini içeren bir stratejidir. Küçük hesapları hızla kapatmanın getirdiği psikolojik başarıya odaklanır.',
  },
  {
    question: 'Neden faiz oranına (Çığ Metodu) göre sıralanmıyor?',
    answer: 'Matematiksel olarak en yüksek faizi önce ödemek daha fazla para kazandırır. Ancak birçok kişi hemen sonuç görmediği için pes eder. Kartopu motivasyona öncelik verir.',
  },
  {
    question: 'Plana başlamadan önce birikimim olmalı mı?',
    answer: 'Borçlara saldırmadan önce küçük bir "Acil Durum Fonu" (yaklaşık 1.000€) oluşturulması önerilir. Bu, beklenmedik durumlarda tekrar kredi kartına sarılmanızı önler.',
  },
  {
    question: 'Hesaplayıcıya hangi borçları dahil etmeliyim?',
    answer: 'Tüm tüketici borçları: kredi kartları, kişisel krediler, araç kredileri, gecikmiş faturalar. Konut kredisi genellikle hacmi nedeniyle sonraki aşamaya bırakılır.',
  },
];

const howToData = [
  {
    name: 'Borçlarınızı listeleyin',
    text: 'Tüm borçlarınızı, kalan bakiyeleri ve aylık minimum ödeme tutarlarını belirterek not edin.',
  },
  {
    name: 'Ek bütçenizi belirleyin',
    text: 'Minimum ödemelerin üzerine her ay ne kadar ek para ayırabileceğinizi hesaplayın.',
  },
  {
    name: 'Sıralayın ve önceliklendirin',
    text: 'Hesaplayıcı otomatik olarak en küçük bakiyeden en büyüğe doğru sıralayacaktır. En küçüğü hariç hepsinde minimumu ödeyin.',
  },
  {
    name: 'Basamağı uygulayın',
    text: 'En küçük borcu kapattığınızda, ona ayırdığınız tüm parayı alın ve listedeki bir sonraki borcun ödemesine ekleyin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData: 'Kaynaklar ve Referanslar',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Borç Kartopu Metodu Hesaplayıcı: Kılavuz 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Borçla yaşamak zordur. <strong>Kartopu metodu</strong>, finansal özgürlüğü geri kazanmak için en etkili stratejilerden biri olduğunu kanıtlamıştır.',
    },
  ],
  ui: {
    labelTitle: 'Tam özgürlük',
    labelDescription: 'Finansal özgürlüğe giden yolunuza psikolojik olarak en etkili yöntemle başlayın.',
    labelExtraBudget: 'AYLIK EK BÜTÇE',
    labelExtraBudgetHelp: 'Minimum ödemelerin üzerindeki ek para.',
    labelSnowballMethod: 'KARTOPU',
    labelAvalancheMethod: 'ÇIĞ',
    labelAddNewDebt: 'YENİ BORÇ EKLE',
    labelDebtName: 'İsim',
    labelDebtNamePlaceholder: 'Örn: Visa',
    labelDebtBalance: 'BORCUNUZ NE KADAR',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'MİNİMUM ÖDEME',
    labelInterestRate: 'FAİZ ORANI',
    labelInterestHelp: 'YILLIK',
    labelAddButton: 'PLANA EKLE',
    labelClearData: 'Ayarları temizle',
    labelClearDataConfirm: 'Plan boşaltılsın mı?',
    labelDeleteDebt: 'Sil',
    labelDebtInventory: 'Borç Envanteri',
    labelFreedomDate: 'FİNANSAL ÖZGÜRLÜK TARİHİ',
    labelActiveMethod: 'METOT',
    labelMonthsRemaining: 'KALAN AY SAYISI',
    labelTotalInterest: 'TOPLAM FAİZ',
    labelTotalPaid: 'TOPLAM FİNAL ÖDEMESİ',
    labelInterestSaved: 'FAİZ TASARRUFU',
    labelYourStrategy: 'Adım Adım Stratejiniz',
    labelStrategyHelp: 'Her adım toplam ödemenizi gösterir.',
    labelPriority: 'EN YÜKSEK ÖNCELİK',
    labelStep: 'ADIM',
    labelAfterPaying: 'ÖNCEKİNİ KAPATTIKTAN SONRA',
    labelMonthlyPayment: 'Aylık ödeme',
    labelDetailedAmortization: 'Detaylı Amortisman',
    labelExportCSV: '.CSV Olarak Dışa Aktar',
    labelDate: 'Tarih',
    labelStartingBalance: 'Başlangıç Bakiyesi',
    labelInterest: 'Faiz',
    labelAmortization: 'Amortisman',
    labelTotalMonth: 'Aylık Toplam',
    labelRemaining: 'Kalan',
    labelFree: 'ÖZGÜR',
    labelDebtInfinite: 'SONSUZ BORÇ',
    labelInvalidInput: 'Toplam bakiye ve minimum ödemeyi belirtin',
    labelEmptyStateTitle: 'Planınıza başlayın',
    labelEmptyStateDescription: 'Borçlarınız sonsuza kadar sürmeyecek. Borçlarınızı ekleyin.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'tr-TR',
  },
};
