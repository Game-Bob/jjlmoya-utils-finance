import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'ranta-pa-ranta-kalkylator';
const title = 'Ränta på ränta Kalkylator: Visualisera din framtida rikedom';
const description =
  'Upptäck hur små investeringar förvandlas till stora förmögenheter. Det ultimata verktyget för att planera din finansiella frihet och pension.';

const faqData = [
  {
    question: 'Vad är ränta på ränta?',
    answer:
      'Det är ränta som beräknas på det ursprungliga kapitalet och även på den ackumulerade räntan från tidigare perioder. Detta genererar en exponentiell tillväxt av investeringen över tid.',
  },
  {
    question: 'Vad är skillnaden mot enkel ränta?',
    answer:
      'Vid enkel ränta beräknas räntan endast på det ursprungliga kapitalet. Vid ränta på ränta återinvesteras räntan, vilket innebär att "din ränta genererar mer ränta".',
  },
  {
    question: 'Vad är "72-regeln"?',
    answer:
      'Det är en snabb formel för att uppskatta hur lång tid det tar för en investering att fördubblas: dela 72 med den årliga avkastningen. Till exempel, vid 8 % per år fördubblar du dina pengar på 9 år.',
  },
  {
    question: 'Varför är det viktigt att börja investera tidigt?',
    answer:
      'På grund av den exponentiella effekten är den mest avgörande faktorn inte mängden sparade pengar, utan tiden. Att börja några år tidigare kan resultera i en mycket större slutlig rikedom på grund av kapitaliseringen.',
  },
];

const howToData = [
  {
    name: 'Ange startkapital',
    text: 'Skriv in den summa pengar som du ska börja din investeringsplan med.',
  },
  {
    name: 'Definiera regelbundna insättningar',
    text: 'Ange hur mycket pengar du dessutom kommer att spara och investera varje månad eller varje år.',
  },
  {
    name: 'Uppskatta årlig avkastning',
    text: 'Ange den procentuella årliga vinst som du förväntar dig att få (t.ex. 7 % för historiska S&P 500).',
  },
  {
    name: 'Justera tidshorisonten',
    text: 'Välj hur många år du ska behålla investeringen för att visualisera den exponentiella tillväxten av ditt kapital.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Magin med ränta på ränta: Bygg din rikedom exponentiellt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein kallade det för "världens åttonde underverk". <strong>Ränta på ränta</strong> är den mest kraftfulla mekanismen för att generera rikedom på lång sikt. Du behöver inte vara finansexpert för att dra nytta av det: du behöver bara tid, tålamod och investerade pengar.',
    },
    {
      type: 'title',
      text: 'Enkel ränta vs Ränta på ränta: Snöbollsmetaforen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Föreställ dig att du har en snöboll högst upp på en kulle. <strong>Enkel ränta</strong> är som att rulla ner den bollen och behöva lägga till snö manuellt varje meter för att den ska växa. <strong>Ränta på ränta</strong> är som att låta bollen rulla själv: den samlar snö på egen hand, och ju större den blir, desto mer yta har den för att samla upp <em>ännu mer</em> snö vid varje varv.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Enkel ränta',
          description: 'Räntan beräknas alltid endast på det ursprungliga kapitalet.',
          points: [
            'Formel: Kapital × Räntesats × Tid',
            'Linjär och förutsägbar tillväxt',
            'Används i kortfristiga lån',
            'Ingen återinvestering av vinster',
          ],
        },
        {
          title: 'Ränta på ränta',
          description: 'Räntan läggs till kapitalet och genererar ny ränta.',
          highlight: true,
          points: [
            'Formel: Kapital × (1 + Räntesats)^Tid',
            'Accelererad exponentiell tillväxt',
            'Basen för all långsiktig investering',
            'Dina vinster genererar mer vinst',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Matematiskt genererar dina vinster nya vinster. Under de första åren verkar det långsamt, men efter "brytpunkten" skjuter kurvan i höjden vertikalt. Det är här de verkliga förmögenheterna skapas.',
    },
    {
      type: 'title',
      text: 'Varför är tiden din bästa vän?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den mest avgörande faktorn är inte mängden pengar du investerar, utan <strong>hur många år du låter dem växa</strong>. Att börja 10 år tidigare kan resultera i en slutlig rikedom som är 2 eller 3 gånger större, även om du investerar mindre pengar totalt sett. Denna exponentiella effekt är anledningen till att unga investerare har en ojämförlig fördel.',
    },
    {
      type: 'tip',
      title: '72 regeln',
      html: '<p>Dela 72 med din årliga avkastning för att veta hur många år det tar att <strong>fördubbla dina pengar</strong>.</p><p><em>Exempel: Vid 8 % fördubblar du vart nionde år (72/8 = 9).</em></p><p>Denna magiska formel fungerar för alla avkastningsnivåer och hjälper dig att snabbt uppskatta tillväxten i dina investeringar.',
    },
    {
      type: 'tip',
      title: 'Råd föt 2026',
      html: '<p>Inflationen är fortfarande en faktor. Se till att din nettoavkastning överstiger minst 2-3 % per år för att inte förlora köpkraft. Investera i tillgångar som växer snabbare än inflationen.',
    },
    {
      type: 'title',
      text: 'Kapitaliseringsfrekvens: Spelar det roll?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Räntan kan kapitaliseras årligen, halvårsvis, kvartalsvis, månadsvis eller till och med dagligen. Ju <strong>oftare kapitaliseringen sker</strong>, desto större blir ränta på ränta-effekten. Samma kapital med samma räntesats växer mer om räntan beräknas månadsvis än om den beräknas årligen.',
    },
  ],
  ui: {
    labelTitle: 'Investeringssimulator',
    labelRealtime: 'Realtid',
    labelInitial: 'Första insättning',
    labelMonthly: 'Månadssparande',
    labelRate: 'Årlig avk.',
    labelYears: 'Antal år',
    labelMyMoney: 'Dina pengar',
    labelProfit: 'Vinst (Ränta)',
    labelTotal: 'Totalt ackumulerat',
    labelYear: 'År',
    labelPrincipal: 'Dina pengar (Kapital)',
    labelInterest: 'Genererad ränta',
    insightPrefix: '[TIP] Under år ',
    insightSuffix:
      ', kommer din årliga genererade ränta att överstiga dina insättningar. Pengarna jobbar nu hårdare än du!',
    currencySymbol: 'kr',
    currencyCode: 'SEK',
    currencyLocale: 'sv-SE',
  },
};
