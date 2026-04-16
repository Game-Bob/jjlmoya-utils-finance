import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflation-spanien';
const title = 'Inflationskalkylator Spanien: Historiskt penningvärde';
const description =
  'Upptäck hur mycket dina pesetas skulle vara värda idag eller hur mycket levnadskostnaderna har stigit sedan 1980. Historiska KPI-data för Spanien uppdaterade till 2026.';

const faqData = [
  {
    question: 'Vad är KPI och hur beräknas det?',
    answer:
      'Konsumentprisindex (KPI) mäter prisutvecklingen för en korg av varor och tjänster som är representativ för spansk konsumtion. Det beräknas genom att jämföra kostnaden för denna korg under olika tidsperioder.',
  },
  {
    question: 'Hur mycket har pengarna förlorat i värde sedan 1980?',
    answer:
      '1 000 pesetas från 1980 motsvarar ungefär 60 € idag i köpkraft. Pengarna har förlorat mer än 90 % av sitt värde under de senaste 40+ åren på grund av den ackumulerade inflationen.',
  },
  {
    question: 'Varför förlorar mina besparingar i värde om jag inte rör dem?',
    answer:
      'Om inflationen är 3 % per år och ditt konto ger 0 % i ränta, förlorar du 3 % i köpkraft varje år. För att behålla det reala värdet måste dina besparingar generera minst samma avkastning som inflationsnivån.',
  },
  {
    question: 'När var perioden med högst inflation i Spanien?',
    answer:
      '80-talet var de mest inflationsdrivna åren, med tvåsiffriga nivåer (upp till 15 %). Priserna ändrades drastiskt månad för månad. Sedan euron infördes (2002) har inflationen varit mer kontrollerad, förutom under perioden 2021–2023.',
  },
  {
    question: 'Hur påverkar inflationen mina besparingar?',
    answer:
      'Inflation fungerar som en „tyst skatt”. Om inflationen är 5 % och dina pengar ligger under madrassen, kommer du i slutet av året att kunna köpa 5 % färre produkter. Det är avgörande att investera för att motverka denna effekt.',
  },
];

const howToData = [
  {
    name: 'Välj ursprungsår',
    text: 'Välj från vilket datum du vill beräkna penningvärdet (tillgängligt från 1980 till 2026).',
  },
  {
    name: 'Ange belopp',
    text: 'Skriv in beloppet i pesetas (för gamla datum) eller i euro som du vill jämföra.',
  },
  {
    name: 'Välj slutår',
    text: 'Definiera fram till vilken tidpunkt du vill se köpkraftens utveckling.',
  },
  {
    name: 'Analysera det reala resultatet',
    text: 'Se köpkraftsmotsvarigheten och procentandelen för den ackumulerade inflationen under den valda perioden.',
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

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om inflation',
  faq: faqData,
  bibliographyTitle: 'Officiella källor och referenser',
  bibliography: [
    {
      name: 'INE: Konsumentprisindex (Spanien)',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'Banco de España: Inflationsanalys',
      url: 'https://www.bde.es/',
    },
    {
      name: 'ECB: Penningpolitik och priser',
      url: 'https://www.ecb.europa.eu/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Historisk inflationskalkylator: Förstå dina pengars verkliga värde',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflation är den „tysta skatten” som äter upp dina besparingar år efter år. Vet du hur mycket dina pengar har förlorat i värde sedan 1980? Vad kostar egentligen den där kaffet som du betalade 300 pesetas för för 20 år sedan?',
    },
    {
      type: 'title',
      text: 'Inflation: Den tysta skatten på din förmögenhet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Inflation</strong> är den ihållande och allmänna prisstegringen. Även om det verkar vara ett tekniskt fenomen är dess inverkan på realekonomin direkt: det minskar mängden varor du kan köpa för samma pengar och urholkar ett helt livs besparingar om man inte vidtar skyddsåtgärder.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Historiskt rekord 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Priestopp 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Stabilitetsmål',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Viktiga ekonomiska termer',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'KPI',
          definition: 'Indikator som sammanfattar prisvariationen för en baskorg av varor.',
        },
        {
          term: 'Köpkraft',
          definition: 'En valutas faktiska köpförmåga vid en viss tidpunkt.',
        },
        {
          term: 'Deflation',
          definition: 'Allmän prissänkning som kan förlamna investeringar.',
        },
        {
          term: 'Stagflation',
          definition: 'Scenario med hög inflation i kombination med ekonomisk stagnation.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Ekonomiska milstolpar och jämförelse',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Krisen under 80 talet',
          description: 'Period präglad av tvåsiffrig inflation och stor instabilitet på arbetsmarknaden.',
          points: [
            'Extremt höga räntesatser',
            'Snabb värdeförlust för pesetan',
            'Löner som äts upp av priserna',
          ],
        },
        {
          title: 'Inflation under pandemin: 2021 till 2023',
          description: 'Plötslig ökning på grund av energikostnader och problem i leveranskedjan.',
          highlight: true,
          points: [
            'Direkt inverkan på matkassen',
            'Räntehöjningar från ECB för att dämpa konsumtionen',
            'Långsam återhämtning av köpkraften',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Produkt eller indikator', 'Värde 1980 (Uppskattat)', 'Värde 2026 (Prognos)', 'Förändring'],
      rows: [
        ['Limpa bröd', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Kaffe på kafé', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Biobiljett', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Månadens minimilön', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Faran med kontanter',
      html: 'Att förvara pengar under madrassen eller på transaktionskonton utan avkastning är en garanterad kapitalförlust. En genomsnittlig inflation på 3 % halverar värdet på dina besparingar på mindre än 25 år.',
    },
    {
      type: 'title',
      text: 'Råd för att skydda dina besparingar',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Investeringsstrategier',
      items: [
        {
          pro: 'Reala tillgångar: Fastigheter ökar ofta i värde i takt med inflationen.',
          con: 'Låg likviditet och höga inträdeskostnader.',
        },
        {
          pro: 'Börsen och fonder: Avkastning som på lång sikt brukar överstiga KPI.',
          con: 'Volatilitet och marknadsrisk på kort sikt.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sunda ekonomiska vanor',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Se över dina utgifter regelbundet för att upptäcka dolda prishöjningar.',
        'Diversifiera besparingar i olika typer av tillgångar.',
        'Överväg statsobligationer kopplade till inflationen.',
        'Använd beräkningsverktyg för att sätta erbjudanden och löner i sitt sammanhang.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Varning för negativ ränta på ränta',
      html: 'Inflation fungerar som en omvänd ränta-på-ränta-effekt. Varje år tillämpas förlustprocenten på ett värde som redan minskat, vilket påskyndar värdeförlusten om man inte agerar.',
    },
    {
      type: 'summary',
      title: 'Viktiga slutsatser',
      items: [
        'KPI är bara ett genomsnitt; din personliga inflation beror på dina vanor.',
        'Investering är inte valfritt om man vill bevara det reala värdet av sitt arbete.',
        'Inflationskalkylatorer är avgörande för att förstå långsiktiga avtal.',
      ],
    },
    {
      type: 'message',
      title: 'Ta kontroll över din ekonomi',
      html: 'Vår kalkylator använder officiella INE-data för att ge dig den mest exakta bilden av Spaniens ekonomiska dåtid och nutid.',
    },
  ],
  ui: {
    labelTitle: 'Inflationskalkylator Spanien',
    labelInitialAmount: 'Startbelopp',
    labelInitialYear: 'Under året',
    labelFinalAmount: 'Motsvarighet idag',
    labelFinalYear: 'År 2026',
    labelInflationRate: 'Ackumulerad inflation',
    labelCalculatedOn: 'Beräkningen har gjorts med officiella INE-data fram till 2025 och uppskattade prognoser för slutet av 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'sv-SE',
    labelYearSelect: 'Under året',
    labelIn: 'I',
    labelEquivalentToday: 'motsvarar idag',
    labelInflationAccumulated: 'Ackumulerad inflation',
    labelYear: 'År',
  },
};
