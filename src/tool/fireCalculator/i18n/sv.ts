import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'fire-kalkylator-4-procents-regeln';
const title = 'FIRE kalkylator: 4% regeln för din finansiella frihet';
const description = 'Beräkna ditt magiska tal för finansiellt oberoende med hjälp av 4%-regeln. Planera din tidiga pension och visualisera din väg mot ekonomisk frihet.';

const faqData = [
  {
    question: 'Vad är 4%-regeln?',
    answer: '4%-regeln är en uttagsstrategi baserad på Trinity-studien som visar att du kan ta ut 4 % av ditt kapital under det första året av pensionen, justerat för inflation i efterföljande år, utan att pengarna tar slut under 30 år.',
  },
  {
    question: 'Vad är FIRE?',
    answer: 'FIRE står för Financial Independence, Retire Early (Finansiell självständighet, tidig pension). Det är en rörelse som strävar efter att uppnå ekonomisk frihet genom en aggressiv kombination av sparande och smarta investeringar.',
  },
  {
    question: 'Vad är mitt magiska tal?',
    answer: 'Ditt magiska tal är det totala kapital du behöver samla på dig för att kunna leva på avkastningen utan att arbeta. Det beräknas genom att dela dina årliga utgifter med den säkra uttagsräntan (vanligtvis 4 %).',
  },
  {
    question: 'Vad är skillnaden mellan Lean, Barista och Fat FIRE?',
    answer: 'Lean FIRE är att leva med minimala utgifter (70 % av nuvarande utgifter), Barista FIRE är att jobba deltid medan avkastningen täcker resten (50 % av utgifterna), och Fat FIRE är att ha en påkostad livsstil (150 % av utgifterna).',
  },
  {
    question: 'Är 4%-regeln realistisk?',
    answer: '4%-regeln har en historisk sannolikhet för framgång på 95 % i en portfölj med 50/50 aktier/obligationer under 30 år. Den tar dock inte hänsyn till sekvensrisk för avkastning och baseras främst på data från den amerikanska marknaden.',
  },
];

const howToData = [
  {
    name: 'Beräkna dina månadsutgifter',
    text: 'Analysera hur mycket du faktiskt spenderar varje månad inklusive boende, mat, tjänster och underhållning.',
  },
  {
    name: 'Välj din säkra uttagsränta',
    text: '4%-regeln är standard, men du kan justera mellan 2,5 % (mer konservativt) och 6 % (mer aggressivt) beroende på din risktolerans.',
  },
  {
    name: 'Ange ditt nuvarande kapital',
    text: 'Addera det totala värdet av dina investeringar, sparande och tillgångar som genererar passiv inkomst.',
  },
  {
    name: 'Visualisera dina framsteg',
    text: 'Se tillväxtdiagrammet och milstolparna för frihet (Lean, Barista, Fat FIRE) för att förstå när du når ditt mål.',
  },
];

const bibliographyData = [
  {
    name: 'The Trinity Study: Portfolio Survivability',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Early Retirement Forum - 4% Rule Discussion',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Shiller CAPE Index - Market Valuations',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Bogleheads - Investeringsguide',
    url: 'https://bogleheads.es/',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om FIRE',
  faq: faqData,
  bibliographyTitle: 'Källor och referenser',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4%-regeln: Den heliga graalen för tidig pension',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Upptäck hur du beräknar det kapital som krävs för att leva på avkastningen för alltid. <strong>4%-regeln</strong> kom från Trinity-studien, som genomfördes 1998 av tre professorer i finans. De analyserade historiska data från 1926 för att avgöra vilken procentsats som kunde tas ut årligen utan att tömma portföljen på 30 år.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Historisk framgång' },
        { value: '50/50', label: 'Mix Aktier/Obligationer' },
        { value: '30', label: 'Års horisont' },
        { value: '4%', label: 'Säkert uttag' },
      ],
    },
    {
      type: 'title',
      text: 'Vad är FIRE-rörelsen?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE är akronymen för Financial Independence, Retire Early (Finansiell självständighet, tidig pension).',
        'Strävar efter friheten att välja vad man vill göra med sin tid utan att pengar är en begränsande faktor.',
        'Baseras på optimering av sparande och smarta investeringar.',
        'Målet är att dina tillgångar ska generera tillräckligt kassaflöde för att täcka dina utgifter.',
      ],
    },
    {
      type: 'title',
      text: 'Typer av finansiell frihet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Minimalistisk livsstil. Täcker endast grundläggande överlevnadskostnader.',
          points: ['Extremt sparande', 'Mycket låga utgifter', 'Enkel frihet'],
        },
        {
          title: 'Barista FIRE',
          description: 'Hybridsituation där dina investeringar täcker hälften av dina utgifter.',
          points: ['Jobb för nöjes skull', 'Socialförsäkring täckt', 'Mindre stress'],
        },
        {
          title: 'Fat FIRE',
          description: 'Pension med en rymlig budget som tillåter lyx och resor.',
          points: ['Stort kapital', 'Noll restriktioner', 'Familjearv'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur använder man vår FIRE-kalkylator?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Utgiftsspårning:</strong> Analysera dina faktiska utgifter de senaste 12 månaderna.',
        '<strong>SWR-definition:</strong> Välj din säkra uttagsränta efter din risk.',
        '<strong>Nuvarande kapital:</strong> Ange värdet på dina nuvarande investeringar.',
        '<strong>Sparkapacitet:</strong> Se hur lång tid du har kvar till målet.',
        '<strong>Visuell analys:</strong> Analysera tillväxtdiagrammet för din förmögenhet.',
      ],
    },
    {
      type: 'title',
      text: 'Analys av 4%-regeln',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fördelar',
          description: 'Varför 4%-regeln fungerar',
          points: [
            'Matematisk enkelhet för snabb planering.',
            'Baserad på historiska data från nästan ett sekel.',
            'Anpassningsbar till alla utgiftsnivåer.',
          ],
        },
        {
          title: 'Begränsningar',
          description: 'Vad 4%-regeln inte täcker',
          points: [
            'Tar inte hänsyn till sekvensrisk för avkastning.',
            'Baseras främst på den amerikanska marknaden.',
            'Ignorerar drastiska förändringar i lokal beskattning.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kritisk faktor: Inflationen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kom ihåg att 1 000 kr idag inte kommer att köpa samma sak i framtiden. Det är avgörande att använda real avkastning (inflation borträknad) så att dina prognoser behåller dagens köpkraft. 4%-regeln förutsätter att du justerar dina uttag årligen för inflation.',
    },
  ],
  ui: {
    labelTitle: 'FIRE kalkylator: 4% regeln',
    labelDescription: 'Beräkna ditt magiska tal för finansiell självständighet med 4%-regeln och visualisera dina milstolpar mot frihet.',
    labelMonthlyExpenses: 'Månadsutgifter',
    labelSWR: 'Uttagsränta (SWR)',
    labelCurrentWorth: 'Nuvarande kapital',
    labelMonthlySavings: 'Månadssparande',
    labelAnnualReturn: 'Beräknad avkastning (netto)',
    labelFreedomMilestones: 'Milstolpar för frihet',
    labelLeanFIRE: 'Lean FIRE (70 % överlevnad)',
    labelBaristaFIRE: 'Barista FIRE (50 % inkomst)',
    labelFatFIRE: 'Fat FIRE (150 % lyx)',
    labelMagicNumber: 'Ditt magiska tal för att bli fri',
    labelMagicNumberDesc: 'Kapital som krävs för att leva på avkastningen',
    labelTimeRemaining: 'Tid till finansiell frihet',
    labelTimeRemainingFormat: 'Det fattas {years} år och {months} månader',
    labelAlreadyFI: 'Du har redan nått finansiell frihet!',
    labelUnachievable: 'Målet kan inte nås med detta sparande',
    labelHiddenCostsChecklist: 'Checklista för dolda kostnader',
    labelHealth: 'Sjukvårdsförsäkring (+200 kr)',
    labelTaxes: 'Skatt (+150 kr)',
    labelHome: 'Hemunderhåll (+100 kr)',
    labelTravel: 'Resor och nöje (+300 kr)',
    labelEmergency: 'Buffertsparande (+100 kr)',
    labelSubscriptions: 'Prenumerationer (+50 kr)',
    labelAdded: 'Tillagt:',
    labelSavePlan: 'Spara plan',
    labelSWRTooltip: 'Safe Withdrawal Rate: Procent av ditt sparande som du kan ta ut varje år utan att pengarna tar slut.',
    labelReturnTooltip: 'Årlig marknadsavkastning (redan inflation borträknad). Historisk standard är 7 %.',
    currencySymbol: 'kr',
    currencyCode: 'SEK',
    currencyLocale: 'sv-SE',
  },
};
