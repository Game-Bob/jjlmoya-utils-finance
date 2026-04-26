import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Ursprunglig Investering',
  labelFinalValue: 'Slutvärde / Nuvarande Saldo',
  labelTimeSelection: 'Investeringsperiod',
  labelYears: 'År',
  labelMonths: 'Månader',
  labelDays: 'Dagar',
  labelROI: 'Avkastning på Investering (ROI)',
  labelCAGR: 'Årlig Tillväxttakt (CAGR)',
  labelNetProfit: 'Nettovinst',
  labelLinearGrowth: 'Linjär Tillväxt (Uppskattad)',
  labelExponentialGrowth: 'Sammansatt Tillväxt (CAGR)',
  labelPositiveResult: 'Lönsam Investering',
  labelNegativeResult: 'Förlustposition',
  labelCopyResult: 'Kopiera Resultat',
  labelCopied: 'Kopierad!',
};

const slug = 'profitabilitetskalkylator-investering-roi-cagr';
const title = 'Profitabilitetskalkylator: ROI & CAGR';
const description = 'Analysera dina investeringars prestanda. Beräkna ROI och CAGR för att förstå dina verkliga årliga vinster.';

const faq = [
  {
    question: 'Vad är en bra CAGR?',
    answer: 'Historiskt har S&P 500 gett cirka 7-10% i årlig avkastning.',
  },
  {
    question: 'Varför skiljer sig min CAGR från min totala ROI?',
    answer: 'ROI är den totala vinsten oavsett tid. CAGR är den årliga takten.',
  },
];

const howTo = [
  {
    name: 'Ange startkapital',
    text: 'Fyll i beloppet du ursprungligen investerade.',
  },
  {
    name: 'Ange slutvärde',
    text: 'Fyll i nuvarande marknadsvärde.',
  },
  {
    name: 'Ställ in tidsperiod',
    text: 'Ange hur länge du har haft investeringen.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Vilket mått är bäst?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> visar den totala procentuella vinsten men ignorerar tiden. <strong>CAGR</strong> är bättre för långsiktig analys.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Definition av ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
