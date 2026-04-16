import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'procentraknare';
const title = '4-i-1 Procenträknare: Rabatter, Höjningar och Sänkningar';
const description =
  'Beräkna enkelt procent online gratis. 4 verktyg i 1 för att få ut X % av Y, procentuell skillnad, lägga till eller dra ifrån moms, reor och dricks automatiskt.';

const faqData = [
  {
    question: 'Hur fungerar kalkylatorn?',
    answer:
      'Skriv helt enkelt in värdena i rutorna för det användningsfall som motsvarar ditt problem, så bearbetar vår kalkylator formeln utan att du behöver trycka på någon beräkna-knapp.',
  },
  {
    question: 'Är den giltig för att beräkna moms eller skatt?',
    answer:
      'Ja, block 4 ("Lägg till eller dra ifrån procent") är utformat precis för fall som att applicera en moms på 25 % på ett grundpris eller beräkna ett negativt skatteavdrag.',
  },
  {
    question: 'Hanterar den decimaler och negativa tal?',
    answer:
      'Självklart. Du kan ange decimaler (med punkt) och den fungerar även med negativa värden om du behöver analysera bokföringsbalanser med förlust.',
  },
  {
    question: 'Kan jag kopiera resultaten?',
    answer:
      'Ja, varje block har en knapp i resultatrutan som omedelbart kopierar siffran till din enhets urklipp så att du kan klistra in den i en annan app eller ett dokument.',
  },
];

const howToData = [
  {
    name: 'Identifiera ditt matematiska problem',
    text: 'Läs titlarna på de 4 blocken och välj det som stämmer överens med det du vill veta (T.ex. Hur mycket är 20 % av 50? -> Block 1).',
  },
  {
    name: 'Ange siffrorna',
    text: 'Fyll i fälten "X" och "Y". Oroa dig inte för ordningen, texten i varje block vägleder dig visuellt.',
  },
  {
    name: 'Kopiera det omedelbara resultatet',
    text: 'Siffran visas i realtid längst ner medan du skriver. Tryck på kopieringsikonen om du vill ta med den någon annanstans.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor och referenser',
  bibliography: [
    {
      name: 'Beräkning av Procent - Wikipedia',
      url: 'https://sv.wikipedia.org/wiki/Procent',
    },
    {
      name: 'Grundläggande matematiska begrepp - Khan Academy',
      url: 'https://sv.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4-i-1 Procenträknare: Bemästra snabba beräkningar',
      level: 2,
    },
    {
      type: 'title',
      text: 'Vad tjänar en multipel procenträknare till?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att beräkna procent är en av de vanligaste matematiska operationerna i vår vardag. Från att beräkna rabatten på en rea, veta lämplig dricks på en restaurang, till att fastställa vinstmarginalen i ett företag eller räntan på ett lån. Trots att det är vardagliga operationer är det inte alltid lätt att utföra dem i huvudet eller komma ihåg den exakta formeln.',
    },
    {
      type: 'paragraph',
      html: 'Vår 4-i-1 procenträknare grupperar de mest efterfrågade scenarierna. Du behöver inte längre leta på Google efter "hur man får ut 20 procent" eller "formel för procentberäkning". Du har de fyra nödvändiga operationerna på ett ställe, interaktivt och med omedelbara resultat.',
    },
    {
      type: 'title',
      text: 'Genomsgång av de 4 vanligaste användningsfallen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För att underlätta för dig har vi delat upp verktyget i fyra tydliga visuella block som löser de verkliga problem vi möter dagligen:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Hur mycket är X % av Y?',
      html: '<p><strong>Det klassiska fallet.</strong> Användbart för att beräkna rabatter eller dricks. Om du vill veta hur mycket 15 % av 120 kr är, är detta ditt verktyg. Den underliggande formeln delar helt enkelt procenten med 100 och multiplicerar den med totalvärdet.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Vilken procentsats är X av Y?',
      html: '<p><strong>Idealiskt för proportioner.</strong> Om du har fått 45 poäng på ett prov med 60, vilket betyg har du på 100? Denna funktion delar delen med helheten och multiplicerar det med hundra, vilket ger dig den exakta relativa vikten.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Procentuell ökning eller minskning',
      html: '<p><strong>Perfekt för finans och analys.</strong> Hur mycket har hyran ökat sedan förra året? Om du tidigare betalade 8 000 kr och nu 8 400 kr, kommer denna funktion att berätta att du har fått en ökning på 5 %. Den mäter tillväxt eller minskning mellan två siffror.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Lägg till eller dra ifrån procent på ett värde',
      html: '<p><strong>Superanvändbart för moms.</strong> Om du har ett grundpris (t.ex. 1 000 kr) och behöver lägga till 25 % moms, kommer denna räknare direkt att ge dig de slutgiltiga 1 250 kr utan att behöva göra mellanoperationer. På samma sätt tjänar den till att tillämpa en direkt rabatt (t.ex. dra ifrån 20 %).</p>',
    },
    {
      type: 'title',
      text: 'Vanliga myter om procentberäkning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ofta låser vi oss när vi ser stora procentsatser eller decimaler, men det finns några matematiska "knep" som kan underlätta ditt liv. Det mest kända är <strong>procentens reversibilitet</strong>.',
    },
    {
      type: 'tip',
      title: 'Knepet med reversibilitet',
      html: '<p>Visste du att X % av Y är exakt detsamma som Y % av X? Till exempel, om man ber dig beräkna 18 % av 50 i huvudet kan det låta komplicerat. Men om du vänder på det är 50 % av 18 väldigt enkelt: det är 9! Detta gäller för absolut vilket tal som helst och är en fantastisk livräddare i vardagen.</p>',
    },
    {
      type: 'title',
      text: 'Varför vi misslyckas med att beräkna tillväxt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett av de vanligaste felen sker i fall 3: den procentuella ökningen eller minskningen. Tänk dig att en aktie på börsen kostar 100 kr, sjunker med 50 % och nästa dag stiger med 50 %. Intuitionen säger oss att den är värd 100 kr igen, men det är felaktigt.',
    },
    {
      type: 'paragraph',
      html: 'Om den sjunker med 50 % från 100 kr är dess nya värde 50 kr. Om den från dessa 50 kr stiger med 50 % är ökningen hälften av 50 (25 kr). Därför skulle det slutgiltiga priset vara 75 kr. Detta är ett klassiskt exempel på varför procentuella uppgångar och nedgångar inte är asymmetriska och varför dynamiska kalkylatorer som denna förebygger allvarliga finansiella fel.',
    },
    {
      type: 'title',
      text: 'Professionell och akademisk användning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vårt gränssnitt är fritt från distraktioner och utformat för att <strong>arbeta snabbt</strong>. Du kan ha det i en fäst flik i webbläsaren, tabba smidigt mellan de olika fälten och, tack vare kopieringsknappen bredvid resultatet, föra över den exakta siffran till ditt Excel eller Google Sheets utan risk för skrivfel.',
    },
    {
      type: 'list',
      items: [
        'E-handel och fysiska butiker: Snabb beräkning av försäljningspris genom att tillämpa handelsmarginaler och lägga till moms.',
        'Personaladministration: Fastställande av lönegap, skatteavdrag och löneökningar refererade till KPI.',
        'Universitetsutbildning: Lärare som jämnar ut betyg eller studenter inom naturvetenskap som analyserar avvikelser i sina experiment.',
        'Digital marknadsföring: Mätning av CTR (Click Through Rate), ROAS (Return on Ad Spend) eller konverteringsgrad i e-handel.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Procenträknare',
    labelCase1Title: 'Fall 1',
    labelCase1Question: 'Hur mycket är X % av Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formel: (X / 100) × Y',
    labelCase2Title: 'Fall 2',
    labelCase2Question: 'Vilken procentsats är X av Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formel: (X / Y) × 100',
    labelCase3Title: 'Fall 3',
    labelCase3Question: 'Procentuell skillnad mellan två värden',
    labelCase3Placeholder1: 'Värde 1',
    labelCase3Placeholder2: 'Värde 2',
    labelCase3Formula: 'Formel: ((Värde 2 - Värde 1) / |Värde 1|) × 100',
    labelCase4Title: 'Fall 4',
    labelCase4Question: 'Lägg till eller dra ifrån procent på ett värde',
    labelCase4Placeholder1: 'Värde',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formel: Värde ± (Värde × (% / 100))',
    labelCase4AddLabel: 'Summa (Värde + %)',
    labelCase4SubtractLabel: 'Skillnad (Värde - %)',
    labelResult: 'Resultat',
    labelDifference: 'Skillnad',
    labelCopyTooltip: 'Kopiera resultat',
    labelFormula: 'Formel',
    percentSymbol: '%',
  },
};
