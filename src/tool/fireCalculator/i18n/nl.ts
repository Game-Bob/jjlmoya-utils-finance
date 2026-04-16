import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'fire-calculator-4-procent-regel';
const title = 'FIRE Calculator: De 4%-regel voor jouw financiële vrijheid';
const description = 'Bereken je magische getal voor financiële onafhankelijkheid met de 4%-regel. Plan je vervroegde pensioen en visualiseer je weg naar economische vrijheid.';

const faqData = [
  {
    question: 'Wat is de 4%-regel?',
    answer: 'De 4%-regel is een opnamestrategie gebaseerd op de Trinity-studie die aangeeft dat je in het eerste jaar van je pensioen 4% van je vermogen kunt opnemen, gecorrigeerd voor inflatie in de jaren daarna, zonder dat je fondsen binnen 30 jaar opraken.',
  },
  {
    question: 'Wat is FIRE?',
    answer: 'FIRE staat voor Financial Independence, Retire Early (Financiële Onafhankelijkheid, Vroeg Pensioen). Het is een beweging die streeft naar economische vrijheid door een agressieve combinatie van sparen en slim beleggen.',
  },
  {
    question: 'Wat is mijn magische getal?',
    answer: 'Je magische getal is het totale vermogen dat je moet opbouwen om van het rendement te kunnen leven zonder te werken. Dit wordt berekend door je jaarlijkse uitgaven te delen door het veilige opnamepercentage (meestal 4%).',
  },
  {
    question: 'Wat is het verschil tussen Lean, Barista en Fat FIRE?',
    answer: 'Lean FIRE is leven met minimale uitgaven (70% van de huidige uitgaven), Barista FIRE is parttime werken terwijl het rendement de rest dekt (50% van de uitgaven), en Fat FIRE is een luxe levensstijl hebben (150% van de uitgaven).',
  },
  {
    question: 'Is de 4%-regel realistisch?',
    answer: 'De 4%-regel heeft een historische slagingskans van 95% in een portfolio van 50/50 aandelen-obligaties gedurende 30 jaar. Het houdt echter geen rekening met het volgorderisico van rendementen en is voornamelijk gebaseerd op gegevens van de Amerikaanse markt.',
  },
];

const howToData = [
  {
    name: 'Bereken je maandelijkse uitgaven',
    text: 'Analyseer hoeveel je daadwerkelijk elke maand uitgeeft, inclusief huisvesting, voeding, diensten en entertainment.',
  },
  {
    name: 'Kies jouw veilige opnamepercentage',
    text: 'De 4%-regel is de standaard, maar je kunt aanpassen tussen 2,5% (conservatiever) en 6% (agressiever) afhankelijk van je risicotolerantie.',
  },
  {
    name: 'Voer je huidige vermogen in',
    text: 'Tel het totaal van je beleggingen, spaargeld en activa die passief inkomen genereren op.',
  },
  {
    name: 'Visualiseer je voortgang',
    text: 'Bekijk de groeigrafiek en de mijlpalen van vrijheid (Lean, Barista, Fat FIRE) om te begrijpen wanneer je je doel zult bereiken.',
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
    name: 'Bogleheads - Beleggingsgids',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over FIRE',
  faq: faqData,
  bibliographyTitle: 'Bronnen en referenties',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De 4%-regel: De heilige graal van vervroegd pensioen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ontdek hoe je het vermogen berekent dat je nodig hebt om voor altijd van het rendement te leven. De <strong>4%-regel</strong> is voortgekomen uit de Trinity-studie, uitgevoerd in 1998 door drie professoren in de financiën. Ze analyseerden historische gegevens sinds 1926 om te bepalen welk percentage jaarlijks kon worden opgenomen zonder de portefeuille in 30 jaar uit te putten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Historisch succes' },
        { value: '50/50', label: 'Mix Aandelen/Obligaties' },
        { value: '30', label: 'Jaar Horizon' },
        { value: '4%', label: 'Veilige opname' },
      ],
    },
    {
      type: 'title',
      text: 'Wat is de FIRE-beweging?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE is het acroniem voor Financial Independence, Retire Early (Financiële Onafhankelijkheid, Vroeg Pensioen).',
        'Streeft naar de vrijheid om te kiezen wat je met je tijd doet zonder dat geld een beperkende factor is.',
        'Gebaseerd op de optimalisatie van sparen en slim beleggen.',
        'Het doel is dat je activa voldoende cashflow genereren om je uitgaven te dekken.',
      ],
    },
    {
      type: 'title',
      text: 'Typen Financiële Vrijheid',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Minimalistische levensstijl. Dekt alleen de basisuitgaven om te overleven.',
          points: ['Extreem sparen', 'Zeer lage uitgaven', 'Sobere vrijheid'],
        },
        {
          title: 'Barista FIRE',
          description: 'Hybride situatie waarbij je beleggingen de helft van je uitgaven dekken.',
          points: ['Werken voor je plezier', 'Sociale zekerheid gedekt', 'Minder stress'],
        },
        {
          title: 'Fat FIRE',
          description: 'Pensioen met een ruim budget dat luxe en reizen toelaat.',
          points: ['Hoog vermogen', 'Geen beperkingen', 'Familie-erfenis'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe gebruik je onze FIRE calculator?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Uitgaven bijhouden:</strong> Analyseer je werkelijke uitgaven van de afgelopen 12 maanden.',
        '<strong>SWR-definitie:</strong> Kies je veilige opnamepercentage op basis van je risico.',
        '<strong>Huidig vermogen:</strong> Voer de waarde van je huidige beleggingen in.',
        '<strong>Spaarcapaciteit:</strong> Projecteer hoeveel tijd je nog hebt tot het doel.',
        '<strong>Visuele weergave:</strong> Analyseer de groeigrafiek van je vermogen.',
      ],
    },
    {
      type: 'title',
      text: 'Analyse van de 4%-regel',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Voordelen',
          description: 'Waarom de 4%-regel werkt',
          points: [
            'Wiskundige eenvoud voor snelle planning.',
            'Gebaseerd op historische gegevens van bijna een eeuw.',
            'Aanpasbaar aan elk uitgavenniveau.',
          ],
        },
        {
          title: 'Beperkingen',
          description: 'Wat de 4%-regel niet dekt',
          points: [
            'Houdt geen rekening met het volgorderisico van rendementen.',
            'Voornamelijk gebaseerd op de Amerikaanse markt.',
            'Negeert drastische veranderingen in lokale fiscaliteit.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kritieke factor: De inflatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onthoud dat € 1.000 vandaag in de toekomst niet hetzelfde zal kopen. Het is cruciaal om reëel rendement (gecorrigeerd voor inflatie) te gebruiken zodat je projecties de huidige koopkracht behouden. De 4%-regel gaat ervan uit dat je je opnames jaarlijks aanpast aan de inflatie.',
    },
  ],
  ui: {
    labelTitle: 'FIRE Calculator: 4%-regel',
    labelDescription: 'Bereken je magische getal voor financiële onafhankelijkheid met de 4%-regel en visualiseer je mijlpalen naar vrijheid.',
    labelMonthlyExpenses: 'Maandelijkse uitgaven',
    labelSWR: 'Opnamepercentage (SWR)',
    labelCurrentWorth: 'Huidig vermogen',
    labelMonthlySavings: 'Maandelijkse spaarcapaciteit',
    labelAnnualReturn: 'Geschat rendement (netto)',
    labelFreedomMilestones: 'Mijlpalen van vrijheid',
    labelLeanFIRE: 'Lean FIRE (70% overleving)',
    labelBaristaFIRE: 'Barista FIRE (50% inkomen)',
    labelFatFIRE: 'Fat FIRE (150% luxe)',
    labelMagicNumber: 'Jouw magische getal om vrij te zijn',
    labelMagicNumberDesc: 'Benodigd kapitaal om van het rendement te leven',
    labelTimeRemaining: 'Tijd tot financiële vrijheid',
    labelTimeRemainingFormat: 'Je hebt nog {years} jaar en {months} maanden te gaan',
    labelAlreadyFI: 'Je hebt al financiële vrijheid bereikt!',
    labelUnachievable: 'Doel onbereikbaar met dit spaargeld',
    labelHiddenCostsChecklist: 'Checklist voor verborgen kosten',
    labelHealth: 'Zorgverzekering (+€ 200)',
    labelTaxes: 'Belastingen (+€ 150)',
    labelHome: 'Woningonderhoud (+€ 100)',
    labelTravel: 'Reizen en vrije tijd (+€ 300)',
    labelEmergency: 'Noodfonds (+€ 100)',
    labelSubscriptions: 'Abonnementen (+€ 50)',
    labelAdded: 'Toegevoegd:',
    labelSavePlan: 'Plan opslaan',
    labelSWRTooltip: 'Safe Withdrawal Rate: Percentage van je spaargeld dat je elk jaar kunt opnemen zonder dat het geld opraakt.',
    labelReturnTooltip: 'Jaarlijks marktrendement (al gecorrigeerd voor inflatie). De historische standaard is 7%.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
};
