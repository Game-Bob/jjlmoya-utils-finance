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

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'profitabilitetskalkylator-investering-roi-cagr',
  title: 'Profitabilitetskalkylator: ROI & CAGR',
  description: 'Analysera dina investeringars prestanda. Beräkna ROI och CAGR för att förstå dina verkliga årliga vinster.',
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
  faq: [
    {
      question: 'Vad är en bra CAGR?',
      answer: 'Historiskt har S&P 500 gett cirka 7-10% i årlig avkastning.',
    },
  ],
  bibliography: [
    {
      name: 'Definition av ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Ange startkapital',
      text: 'Fyll i beloppet du ursprungligen investerade.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Profitabilitetskalkylator',
      description: 'Beräkna ROI och CAGR.',
    },
  ],
};
