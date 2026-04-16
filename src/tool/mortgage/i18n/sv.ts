import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'bolanekalkylator';
const title = 'Bolånekalkylator och Fransk amorteringsplan';
const description =
  'Beräkna din månatliga bolånekostnad, se hur mycket du betalar i ränta och få en fullständig amorteringsplan direkt.';

const faqData = [
  {
    question: 'Vad är fransk amortering (annuitetslån)?',
    answer:
      'Det är det vanligaste systemet för bolån. Månadsbeloppet är detsamma under hela perioden, men i början betalar du nästan bara ränta och mycket lite på själva skulden (kapitalet). Mot slutet är det tvärtom. Därför är det mer lönsamt att göra extra amorteringar under de första åren.',
  },
  {
    question: 'Bunden eller rörlig ränta under 2026?',
    answer:
      'Bunden ränta: du betalar mer nu men sover gott i 30 år. Rörlig ränta: kan vara billigare idag, men om räntan stiger kan din månadskostnad skjuta i höjden. Det beror på din inställning till risk.',
  },
  {
    question: 'Hur mycket sparar jag om jag amorterar 100 000 kr extra?',
    answer:
      'Det beror på när du gör det. Om du amorterar år 1 på ett lån på 2 miljoner kr till 3 % ränta kan du spara över 150 000 kr i framtida räntekostnader. Om du gör det år 20 sparar du knappt 20 000 kr. Tajmingen är avgörande.',
  },
  {
    question: 'Hur stor del av min lön bör gå till bolånet?',
    answer:
      'Den allmänna rekommendationen är att inte överskrida 30-35 % av din nettoinkomst (inklusive andra skulder). Att gå över denna gräns ökar risken för betalningssvårigheter vid oförutsedda händelser.',
  },
];

const howToData = [
  {
    name: 'Ange lånebelopp',
    text: 'Skriv in det totala beloppet du behöver låna från banken (efter att du dragit av din kontantinsats).',
  },
  {
    name: 'Justera räntesatsen',
    text: 'Ange den ränta som banken erbjuder. Du kan jämföra mellan bunden och rörlig ränta.',
  },
  {
    name: 'Välj amorteringstid',
    text: 'Bestäm på hur många år du vill betala tillbaka lånet. Fler år innebär lägre månadskostnad men du betalar mer ränta totalt sett.',
  },
  {
    name: 'Analysera amorteringsplanen',
    text: 'Se månad för månad hur din skuld minskar och hur stor del av din betalning som går till ränta respektive amortering.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor och referenser',
  bibliography: [
    {
      name: 'Konsumenternas: Om bolån',
      url: 'https://www.konsumenternas.se/lan--betalningar/lan/bolan/',
    },
    {
      name: 'Finansinspektionen: Bolån och amorteringskrav',
      url: 'https://www.fi.se/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Komplett guide till bolån: Annuitet och amortering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett bolån är förmodligen den största skuld du kommer att ta i ditt liv. Att förstå hur annuitetssystemet fungerar är avgörande för att fatta smarta beslut som kan spara dig tiotusentals kronor.',
    },
    {
      type: 'title',
      text: 'Annuitetens "Fälla": Förstå sammansättningen av din betalning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De flesta bolån använder <strong>Annuitetssystemet</strong>. Huvuddraget är att månadsbeloppet är detsamma (om räntan är bunden), men sammansättningen förändras radikalt över tid.',
    },
    {
      type: 'tip',
      title: 'Hur din månadskostnad utvecklas',
      html: '<p><strong>I början (År 1-10):</strong> Du betalar nästan bara RÄNTA och amorterar mycket lite på skulden. På ett lån på 2 500 000 kr till 3 % kan din första betalning bestå till 80 % av ränta.</p><p><strong>I mitten (År 11-25):</strong> Proportionerna jämnas gradvis ut.</p><p><strong>I slutet (År 26-30):</strong> Du betalar nästan bara AMORTERING och mycket lite ränta.</p>',
    },
    {
      type: 'paragraph',
      html: 'Därför, om du planerar att <strong>göra extra amorteringar</strong> (betala in pengar i förväg), är det mycket mer lönsamt att göra det under de första åren av lånet. Att amortera 100 000 kr extra år 1 kan spara dig mer än 150 000 kr i framtida räntekostnader. Samma belopp år 20 sparar dig knappt 20 000 kr.',
    },
    {
      type: 'title',
      text: 'Hur mycket pengar bör jag lägga på bolånet?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Finansiella rådgivare rekommenderar att ditt bolån <strong>inte överskrider 30-35 % av din nettoinkomst</strong>. Om du går över denna gräns ökar risken för betalningssvårigheter vid oförutsedda händelser (jobbförlust, sjukdom, etc.).',
    },
    {
      type: 'title',
      text: 'Kontext 2026: Bunden vs Rörlig ränta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Med fluktuerande räntor är valet mellan <strong>Bunden ränta</strong> och <strong>Rörlig ränta</strong> ett strategiskt beslut som kan kosta tusentals kronor per år.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bunden ränta',
          description: 'Du betalar lite mer nu, men du sover gott eftersom din kostnad aldrig kommer att stiga.',
          points: [
            'Förutsägbar kostnad under hela perioden',
            'Skydd mot räntehöjningar',
            'Trygghet i en osäker ekonomi',
            'Idealiskt för snäva budgetar',
          ],
        },
        {
          title: 'Rörlig ränta',
          description: 'Kan vara billigare idag, men utsätter din ekonomi för risker vid ränteuppgång.',
          highlight: true,
          points: [
            'Lägre initial månadskostnad',
            'Risk för kraftiga räntehöjningar',
            'Möjlig stor påverkan på månadsbudgeten',
            'Endast för den som tål hög risk',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Beslutet beror på din profil',
      html: '<p><strong>Välj bunden ränta om:</strong> Din budget är snäv, du söker säkerhet och inte tål obehagliga överraskningar varje månad.</p><p><strong>Välj rörlig ränta om:</strong> Du har en ekonomisk buffert, tror att räntorna kommer att sjunka eller ditt lån är litet.',
    },
  ],
  ui: {
    labelTitle: 'Bolånekalkylator',
    labelLoanAmount: 'Lånebelopp',
    labelInterestRate: 'Ränta (%)',
    labelYears: 'Löptid (år)',
    labelMonthlyExtra: 'Extra månadsamortering',
    labelMonthlyPayment: 'Månadskostnad',
    labelMonthCount: 'månader',
    labelSavingsCard: 'Din potentiella besparing',
    labelSavingsInterest: 'Ränta',
    labelSavingsTime: 'Tid',
    labelTimelineComparison: 'Tidsjämförelse',
    labelTimelineOriginal: 'Ursprunglig tid',
    labelTimelineOptimized: 'Tid med extra amortering',
    labelCostBreakdown: 'Sammanställning totala kostnader',
    labelBorrowed: 'Lånat',
    labelTotalBorrowed: 'Total lånebelopp',
    labelTotalInterest: 'Total ränta',
    labelAmortizationTable: 'Amorteringsplan',
    labelTableHeader: 'Visa hela tabellen',
    labelViewAll: 'Visa allt',
    labelPaid: 'Lån helt avbetalt',
    labelTableMonth: 'Månad',
    labelTableInterest: 'Ränta',
    labelTablePrincipal: 'Amortering',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Kvarvarande skuld',
    labelMoreMonths: 'fler månader',
    labelMonth: 'Månad',
    currencySymbol: 'kr',
    currencyCode: 'SEK',
    currencyLocale: 'sv-SE',
    monthPlural: 'månader',
    yearPlural: 'år',
  },
};
