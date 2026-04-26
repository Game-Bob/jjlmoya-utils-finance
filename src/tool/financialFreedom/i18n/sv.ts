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
  labelYearsShort: 'å',
  labelMonthsShort: 'm',
  labelDaysShort: 'd',
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

const slug = 'ekonomisk-frihet-kalkylator-overlevnadstid';
const title = 'Kalkylator för Ekonomisk Frihet & Överlevnadstid';
const description = 'Beräkna exakt hur länge dina besparingar räcker. Vårt verktyg hjälper dig att visualisera din ekonomiska självständighet.';

const faq = [
  {
    question: 'Vad är en bra runway?',
    answer: 'Experter rekommenderar minst 3 till 6 månader. För verklig frihet, sikta på 2 år eller mer.',
  },
  {
    question: 'Inkluderar denna kalkylator inflation?',
    answer: 'Detta verktyg är utformat för omedelbar beräkning av likvida medel mot nuvarande utgifter.',
  },
  {
    question: 'Vad är "Burn Rate" i privatekonomi?',
    answer: 'Burn rate är takten med vilken du spenderar dina besparingar för att täcka levnadskostnader.',
  },
];

const howTo = [
  {
    name: 'Ange dina totala besparingar',
    text: 'Fyll i det totala beloppet av likvida medel du har tillgång till.',
  },
  {
    name: 'Ställ in utgifter',
    text: 'Ange hur mycket du spenderar per månad eller år.',
  },
  {
    name: 'Analysera säkerhetszon',
    text: 'Kontrollera om du är i röd, gul eller grön zon.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
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
  faq,
  bibliography: [
    {
      name: 'Principer för FIRE-rörelsen',
      url: 'https://en.wikipedia.org/wiki/FIRE_movement',
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
