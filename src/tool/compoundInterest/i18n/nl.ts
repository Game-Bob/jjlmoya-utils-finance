import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'samengestelde-interest';
const title = 'Samengestelde Interest Calculator: Visualiseer uw Toekomstige Rijkdom';
const description =
  'Ontdek hoe kleine investeringen veranderen in grote fortuinen. De ultieme tool voor het plannen van uw financiële vrijheid en pensioen.';

const faqData = [
  {
    question: 'Wat is samengestelde interest?',
    answer:
      'Het is de rente die wordt berekend over het beginvermogen en ook over de opgebouwde rente van voorgaande perioden. Dit genereert een exponentiële groei van de investering in de loop van de tijd.',
  },
  {
    question: 'Wat is het verschil met enkelvoudige interest?',
    answer:
      'Bij enkelvoudige interest wordt de rente alleen berekend over het beginvermogen. Bij samengestelde interest wordt de rente herbelegd, wat betekent dat "uw rente weer rente genereert".',
  },
  {
    question: 'Wat is de "Regel van 72"?',
    answer:
      'Het is een snelle formule om te schatten hoe lang het duurt voordat een investering verdubbelt: deel 72 door het jaarlijkse rendement. Bijvoorbeeld, bij 8% per jaar verdubbelt u uw geld in 9 jaar.',
  },
  {
    question: 'Waarom is het belangrijk om jong te beginnen met beleggen?',
    answer:
      'Vanwege het exponentiële effect is de meest bepalende factor niet de hoeveelheid gespaard geld, maar de tijd. Een paar jaar eerder beginnen kan resulteren in een veel groter eindvermogen dankzij de kapitalisatie.',
  },
];

const howToData = [
  {
    name: 'Beginvermogen invoeren',
    text: 'Voer het geldbedrag in waarmee u uw investeringsplan gaat starten.',
  },
  {
    name: 'Periodieke inleg bepalen',
    text: 'Geef aan hoeveel geld u daarnaast elke maand of elk jaar extra gaat sparen en beleggen.',
  },
  {
    name: 'Jaarlijks rendement schatten',
    text: 'Voer het percentage jaarlijkse winst in dat u verwacht te behalen (bijv. 7% voor de historische S&P 500).',
  },
  {
    name: 'Tijdshorizon aanpassen',
    text: 'Kies hoeveel jaar u de investering wilt aanhouden om de exponentiële groei van uw kapitaal te visualiseren.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen en Referenties',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Samengestelde interest - Wikipedia',
      url: 'https://nl.wikipedia.org/wiki/Samengestelde_interest',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De Magie van Samengestelde Interest: Bouw uw Vermogen Exponentieel op',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein noemde het het "achtste wereldwonder". <strong>Samengestelde interest</strong> is het krachtigste mechanisme om op de lange termijn rijkdom te genereren. U hoeft geen expert in financiën te zijn om ervan te profiteren: u heeft alleen tijd, geduld en belegd geld nodig.',
    },
    {
      type: 'title',
      text: 'Enkelvoudige vs Samengestelde Interest: De Metafoor van de Sneeuwbal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stel u voor dat u een sneeuwbal heeft bovenop een heuvel. <strong>Enkelvoudige interest</strong> is als het naar beneden rollen van die bal en er handmatig elke meter sneeuw aan toe moeten voegen om hem te laten groeien. <strong>Samengestelde interest</strong> is als het laten rollen van de bal vanzelf: hij verzamelt zelf sneeuw, en hoe groter hij wordt, hoe meer oppervlak hij heeft om bij elke omwenteling <em>nog meer</em> sneeuw op te verzamelen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Enkelvoudige Interest',
          description: 'De rente wordt altijd alleen berekend over het beginvermogen.',
          points: [
            'Formule: Vermogen × Percentage × Tijd',
            'Lineaire en voorspelbare groei',
            'Gebruikt bij kortlopende leningen',
            'Geen herbelegging van winsten',
          ],
        },
        {
          title: 'Samengestelde Interest',
          description: 'De rente wordt opgeteld bij het vermogen en genereert nieuwe rente.',
          highlight: true,
          points: [
            'Formule: Vermogen × (1 + Percentage)^Tijd',
            'Versnelde exponentiële groei',
            'Basis van elke langetermijnbelegging',
            'Uw winsten genereren meer winst',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Wiskundig gezien genereren uw winsten nieuwe winsten. In de eerste jaren lijkt het langzaam, maar na het "kantelpunt" schiet de curve verticaal omhoog. Hier wordt de echte rijkdom gecreëerd.',
    },
    {
      type: 'title',
      text: 'Waarom is tijd uw grootste bondgenoot?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meest bepalende factor is niet de hoeveelheid geld die u belegt, maar <strong>hoeveel jaar u het laat groeien</strong>. Een jaar of 10 eerder beginnen kan resulteren in een eindvermogen dat 2 of 3 keer zo groot is, zelfs als u in totaal minder geld inlegt. Dit exponentiële effect is de reden waarom jonge beleggers een onvergelijkbaar voordeel hebben.',
    },
    {
      type: 'tip',
      title: 'De Regel van 72',
      html: '<p>Deel 72 door uw jaarlijkse rendement om te weten hoeveel jaar het duurt om <strong>uw geld te verdubbelen</strong>.</p><p><em>Voorbeeld: Bij 8% verdubbelt u elke 9 jaar (72/8 = 9).</em></p><p>Deze magische formule werkt voor elk rendement en helpt u om snel de groei van uw beleggingen in te schatten.',
    },
    {
      type: 'tip',
      title: 'Advies 2026',
      html: '<p>Inflatie blijft een factor. Zorg ervoor dat uw netto rendement ten minste 2-3% per jaar bedraagt om geen koopkracht te verliezen. Beleg in activa die sneller groeien dan de inflatie.</p>',
    },
    {
      type: 'title',
      text: 'Frequentie van Kapitalisatie: Maakt het uit?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De rente kan jaarlijks, halfjaarlijks, driemaandelijks, maandelijks of zelfs dagelijks worden gekapitaliseerd. Hoe <strong>vaker de kapitalisatie</strong> plaatsvindt, hoe groter het samengestelde effect. Een zelfde kapitaal met hetzelfde percentage zal sterker groeien als de rente maandelijks wordt berekend dan wanneer dit jaarlijks gebeurt.',
    },
  ],
  ui: {
    labelTitle: 'Beleggingssimulator',
    labelRealtime: 'Realtime',
    labelInitial: 'Begininleg',
    labelMonthly: 'Maandelijkse Inleg',
    labelRate: 'Jaarrendement',
    labelYears: 'Jaren',
    labelMyMoney: 'Uw Geld',
    labelProfit: 'Winst (Rente)',
    labelTotal: 'Totaal Opgebouwd',
    labelYear: 'Jaar',
    labelPrincipal: 'Uw Geld (Hoofdsom)',
    labelInterest: 'Gegenereerde Rente',
    insightPrefix: '[TIP] In jaar ',
    insightSuffix:
      ', zal de jaarlijks gegenereerde rente hoger zijn dan uw inleg. Het geld werkt nu harder dan u!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
};
