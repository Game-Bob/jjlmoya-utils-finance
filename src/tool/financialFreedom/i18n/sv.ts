import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Totala Sparande',
  labelExpenses: 'Nuvarande Utgifter',
  labelMonthly: 'Månadsvis',
  labelYearly: 'Årsvis',
  labelTimeRemaining: 'Din Ekonomiska Runway',
  labelYears: 'År',
  labelMonths: 'Månader',
  labelDays: 'Dagar',
  labelStatus: 'Finansiell Säkerhetsstatus',
  labelRedZone: 'Röd Zon: Hög Risk',
  labelYellowZone: 'Gul Zon: Stabil',
  labelGreenZone: 'Grön Zon: Finansiell Frihet',
  labelBurnRateDaily: 'Daglig Utgiftstakt',
  labelBurnRateMonthly: 'Månatlig Utgiftstakt',
  labelWhatIf: '10%-Regeln',
  labelWhatIfDescription: 'Genom att minska dina utgifter med bara 10% kan du förlänga din runway avsevärt.',
  labelGainTime: 'Extra Överlevnadstid',
  labelCopyResult: 'Kopiera Sammanfattning',
  labelCopied: 'Kopierad!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'ekonomisk-frihet-kalkylator-overlevnadstid',
  title: 'Kalkylator för Ekonomisk Frihet & Överlevnadstid',
  description: 'Beräkna exakt hur länge dina besparingar räcker. Vårt verktyg hjälper dig att visualisera din ekonomiska självständighet.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'Vad är en ekonomisk runway?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En <strong>ekonomisk runway</strong> är den tid du kan leva utan nya inkomster. Det är det ultimata måttet på ekonomisk frihet.',
    },
  ],
  faq: [
    {
      question: 'Vad är en bra runway?',
      answer: 'Experter rekommenderar minst 3 till 6 månader. För verklig frihet, sikta på 2 år eller mer.',
    },
  ],
  bibliography: [
    {
      name: 'Principer för FIRE-rörelsen',
      url: 'https://en.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Ange dina totala besparingar',
      text: 'Fyll i det totala beloppet av likvida medel du har tillgång till.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Kalkylator för Ekonomisk Frihet',
      description: 'Beräkna hur länge dina besparingar räcker.',
    },
  ],
};
