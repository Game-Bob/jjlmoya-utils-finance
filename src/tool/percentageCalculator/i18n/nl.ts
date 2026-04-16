import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'procent-calculator';
const title = '4 in 1 Procent Calculator: Kortingen, Stijgingen en Verlagingen';
const description =
  'Bereken eenvoudig percentages online gratis. 4 tools in 1 om X% van Y te berekenen, procentueel verschil, BTW optellen of aftrekken, kortingen en automatische fooien.';

const faqData = [
  {
    question: 'Hoe werkt de calculator?',
    answer:
      'Voer eenvoudig de waarden in de vakken van de use case die overeenkomt met je probleem in, en onze calculator verwerkt de formule zonder dat je op een berekenknop hoeft te drukken.',
  },
  {
    question: 'Is het geschikt voor het berekenen van BTW of belastingen?',
    answer:
      'Ja, blok 4 ("Percentage optellen of aftrekken") is precies ontworpen voor gevallen zoals het toepassen van 21% BTW op een basisprijs of het berekenen van een negatieve bronbelasting.',
  },
  {
    question: 'Kan het omgaan met decimalen en negatieve getallen?',
    answer:
      'Natuurlijk. Je kunt decimalen invoeren (met een punt) en het werkt ook met negatieve waarden als je boekhoudkundige balansen met verlies moet analyseren.',
  },
  {
    question: 'Kan ik de resultaten kopiëren?',
    answer:
      'Ja, elk blok heeft een knop in het resultaatveld die het getal direct naar het klembord van je apparaat kopieert, zodat je het in een andere app of document kunt plakken.',
  },
];

const howToData = [
  {
    name: 'Identificeer je wiskundige probleem',
    text: 'Lees de titels van de 4 blokken en kies degene die overeenkomt met wat je wilt weten (Bijv. Hoeveel is 20% van 50? -> Blok 1).',
  },
  {
    name: 'Voer de cijfers in',
    text: 'Vul de velden "X" en "Y" in. Maak je geen zorgen over de volgorde, de tekst in elk blok begeleidt je visueel.',
  },
  {
    name: 'Kopieer het onmiddellijke resultaat',
    text: 'Het getal verschijnt in real-time onderaan terwijl je typt. Druk op het kopieer-icoon als je het elders wilt gebruiken.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen en Referenties',
  bibliography: [
    {
      name: 'Berekenen van Percentages - Wikipedia',
      url: 'https://nl.wikipedia.org/wiki/Percentage',
    },
    {
      name: 'Basis Wiskunde Concepten - Khan Academy',
      url: 'https://nl.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '4 in 1 Procent Calculator: Beheers Snelle Berekeningen',
      level: 2,
    },
    {
      type: 'title',
      text: 'Waarvoor dient een meervoudige procent calculator?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het berekenen van percentages is een van de meest voorkomende wiskundige bewerkingen in ons dagelijks leven. Van het berekenen van de korting in de uitverkoop en het bepalen van de juiste fooi in een restaurant, tot het vaststellen van de winstmarge in een bedrijf of de rente op een lening. Ondanks dat het dagelijkse handelingen zijn, is het niet altijd gemakkelijk om ze uit het hoofd te doen of de exacte formule te onthouden.',
    },
    {
      type: 'paragraph',
      html: 'Onze 4-in-1 procent calculator groepeert de meest gevraagde scenario\'s. Je hoeft niet meer op Google te zoeken naar "hoe bereken ik 20 procent" of "formule voor procentberekening". Je hebt de vier essentiële bewerkingen op één plek, interactief en met onmiddellijke resultaten.',
    },
    {
      type: 'title',
      text: 'De 4 meest voorkomende use cases bekeken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om je het leven gemakkelijker te maken, hebben we de tool opgedeeld in vier duidelijke visuele blokken die de echte problemen oplossen waar we dagelijks mee te maken krijgen:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Hoeveel is X% van Y?',
      html: '<p><strong>Het klassieke geval.</strong> Handig voor het berekenen van kortingen of fooien. Als je wilt weten hoeveel 15% van €120 is, dan is dit jouw tool. De achterliggende formule deelt simpelweg het percentage door 100 en vermenigvuldigt het met de totale waarde.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Welk percentage is X van Y?',
      html: '<p><strong>Ideaal voor verhoudingen.</strong> Als je 45 punten hebt gescoord op een examen van 60, welk cijfer heb je dan op een schaal van 100? Deze functie deelt het deel door het totaal en vermenigvuldigt het met honderd, wat je het exacte relatieve gewicht geeft.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Procentuele Toename of Afname',
      html: '<p><strong>Perfect voor financiën en analyse.</strong> Hoeveel is de huur gestegen sinds vorig jaar? Als je eerst €800 betaalde en nu €840, dan vertelt deze functie je dat je een stijging van 5% hebt gehad. Het meet de groei of afname tussen twee getallen.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Percentage optellen of aftrekken bij een waarde',
      html: '<p><strong>Super handig voor de BTW.</strong> Als je een basisprijs hebt (bijv. €100) and je moet 21% BTW toevoegen, dan geeft deze calculator je direct de uiteindelijke €121 zonder tussenstappen te hoeven doen. Op dezelfde manier dient het om een directe korting toe te passen (bijv. 20% aftrekken).</p>',
    },
    {
      type: 'title',
      text: 'Veelvoorkomende mythes over het berekenen van percentages',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vaak blokkeren we bij het zien van grote percentages of decimalen, maar er zijn enkele wiskundige "trucs" die je leven makkelijker kunnen maken. De bekendste is de <strong>omkeerbaarheid van percentages</strong>.',
    },
    {
      type: 'tip',
      title: 'De truc van de omkeerbaarheid',
      html: '<p>Wist je dat X% van Y exact gelijk is aan Y% van X? Bijvoorbeeld, als men je vraagt om 18% van 50 uit het hoofd te rekenen, kan dat ingewikkeld klinken. Maar als je het omdraait, is 50% van 18 heel makkelijk: het is 9! Dit geldt voor absoluut elk getal en is een geweldige levensredder in het dagelijks leven.</p>',
    },
    {
      type: 'title',
      text: 'Waarom we falen bij het berekenen van groei',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een van de meest voorkomende fouten treedt op in geval 3: de procentuele toename of afname. Stel je voor dat een aandeel op de beurs €100 kost, 50% daalt en de volgende dag 50% stijgt. De intuïtie zegt ons dat het weer €100 waard is, maar dat is onjuist.',
    },
    {
      type: 'paragraph',
      html: 'Als het 50% daalt vanaf €100, is de nieuwe waarde €50. Als het vanaf die €50 weer 50% stijgt, is de toename de helft van 50 (€25). Daarom zou de uiteindelijke prijs €75 zijn. Dit is een klassiek voorbeeld van waarom procentuele stijgingen en dalingen niet asymmetrisch zijn en waarom dynamische calculators zoals deze ernstige financiële fouten voorkomen.',
    },
    {
      type: 'title',
      text: 'Professioneel en academisch gebruik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onze interface is vrij van afleidingen en ontworpen om <strong>snel te werken</strong>. Je kunt hem in een vastgezette browsertab hebben staan, snel schakelen tussen de verschillende velden en, dankzij de kopieerknop naast het resultaat, de exacte gegevens naar je Excel of Google Sheets overbrengen zonder risico op typefouten.',
    },
    {
      type: 'list',
      items: [
        'E-commerce en fysieke winkels: Snelle berekening van de verkoopprijs door commerciële marges toe te passen en BTW op te tellen.',
        'Human resources management: Bepaling van de loonkloof, loonheffingen en salarisverhogingen op basis van de consumentenprijsindex.',
        'Universitair onderwijs: Docenten die cijfers nivelleren of studenten in wetenschappelijke richtingen die de afwijking van hun experimenten analyseren.',
        'Digitale marketing: Meting van CTR (Click Through Rate), ROAS (Return on Ad Spend) of Conversion Rate in eCommerce.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Procent Calculator',
    labelCase1Title: 'Geval 1',
    labelCase1Question: 'Hoeveel is X% van Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formule: (X / 100) × Y',
    labelCase2Title: 'Geval 2',
    labelCase2Question: 'Welk percentage is X van Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formule: (X / Y) × 100',
    labelCase3Title: 'Geval 3',
    labelCase3Question: 'Procentueel verschil tussen twee waarden',
    labelCase3Placeholder1: 'Waarde 1',
    labelCase3Placeholder2: 'Waarde 2',
    labelCase3Formula: 'Formule: ((Waarde 2 - Waarde 1) / |Waarde 1|) × 100',
    labelCase4Title: 'Geval 4',
    labelCase4Question: 'Percentage optellen of aftrekken bij een waarde',
    labelCase4Placeholder1: 'Waarde',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formule: Waarde ± (Waarde × (% / 100))',
    labelCase4AddLabel: 'Som (Waarde + %)',
    labelCase4SubtractLabel: 'Aftrekken (Waarde - %)',
    labelResult: 'Resultaat',
    labelDifference: 'Verschil',
    labelCopyTooltip: 'Resultaat kopiëren',
    labelFormula: 'Formule',
    percentSymbol: '%',
  },
};
