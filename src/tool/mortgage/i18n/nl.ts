import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'hypotheek-berekenen';
const title = 'Hypotheek Simulator en Franse Amortisatietabel';
const description =
  'Bereken uw maandelijkse hypotheeklasten, ontdek hoeveel u aan rente zult betalen en visualiseer direct uw volledige aflossingsschema.';

const faqData = [
  {
    question: 'Wat is het Franse amortisatiesysteem?',
    answer:
      'Dit is het meest gebruikte systeem voor hypotheken. Het maandbedrag blijft gedurende de rentevaste periode gelijk, maar in het begin bestaat dit bedrag voor het grootste deel uit rente en lost u weinig af. Aan het einde is dit andersom. Daarom is extra aflossen in de eerste jaren het meest voordelig.',
  },
  {
    question: 'Vaste of variabele rente in 2026?',
    answer:
      'Vaste rente: u betaalt nu misschien iets meer, maar u heeft 30 jaar lang zekerheid. Variabele rente: kan vandaag goedkoper zijn, maar als de rente stijgt, kunnen uw maandlasten flink oplopen. Dit hangt af van uw risicobereidheid.',
  },
  {
    question: 'Hoeveel bespaar ik als ik €10.000 extra aflos?',
    answer:
      'Dat hangt af van het moment. Als u in het eerste jaar van een hypotheek van €200.000 tegen 3% extra aflost, kunt u meer dan €15.000 aan rente besparen. Doet u dit in het 20e jaar, dan bespaart u nauwelijks €2.000. Timing is essentieel.',
  },
  {
    question: 'Welk percentage van mijn salaris mag naar de hypotheek gaan?',
    answer:
      'De algemene aanbeveling is om niet meer dan 30-35% van uw netto maandinkomen aan woonlasten (inclusief andere schulden) uit te geven. Daarboven neemt het risico op betalingsproblemen bij tegenslag aanzienlijk toe.',
  },
];

const howToData = [
  {
    name: 'Leenbedrag invoeren',
    text: 'Voer het totale bedrag in dat u bij de bank wilt lenen (na aftrek van uw eigen inleg).',
  },
  {
    name: 'Rentevoet aanpassen',
    text: 'Voer de rentevoet in die de bank aanbiedt. U kunt vergelijken tussen een vaste of variabele rente.',
  },
  {
    name: 'Looptijd kiezen',
    text: 'Bepaal in hoeveel jaar u de lening wilt terugbetalen. Een langere looptijd betekent lagere maandlasten, maar u betaalt meer rente in totaal.',
  },
  {
    name: 'Aflossingsschema analyseren',
    text: 'Bekijk maand na maand hoe uw schuld afneemt en welk deel van uw maandlast naar rente versus aflossing gaat.',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen en Referenties',
  bibliography: [
    {
      name: 'De Nederlandsche Bank: Informatie over hypotheken',
      url: 'https://www.dnb.nl/',
    },
    {
      name: 'Vereniging Eigen Huis: Hypotheek aflossen',
      url: 'https://www.eigenhuis.nl/hypotheken/aflossen',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Complete Gids voor Hypotheken: Het Annunïteitensysteem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een hypotheek is waarschijnlijk de grootste financiële verplichting die u in uw leven aangaat. Begrijpen hoe het aflossingssysteem werkt is cruciaal om slimme beslissingen te nemen die u tienduizenden euro’s kunnen besparen.',
    },
    {
      type: 'title',
      text: 'De "Valkuils" van het Franse Systeem: De Opbouw van uw Maandlast',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meeste annuïteitenhypotheken werken volgens het <strong>Franse Amortisatiesysteem</strong>. Het belangrijkste kenmerk is dat het maandbedrag gelijk blijft (bij een vaste rente), maar de verhouding tussen rente en aflossing verandert gedurende de tijd.',
    },
    {
      type: 'tip',
      title: 'Het Verloop van uw Lasten',
      html: '<p><strong>In het begin (Jaar 1-10):</strong> U betaalt bijna alleen maar RENTE en lost heel weinig af. Bij een hypotheek van €250.000 tegen 3% kan uw eerste betaling voor 80% uit rente bestaan.</p><p><strong>In het midden (Jaar 11-25):</strong> De verhouding komt geleidelijk meer in balans.</p><p><strong>Aan het einde (Jaar 26-30):</strong> U betaalt bijna alleen nog maar AFLOSSING en heel weinig rente.</p>',
    },
    {
      type: 'paragraph',
      html: 'Daarom is het veel rendabeler om in de eerste jaren van de hypotheek <strong>extra af te lossen</strong>. €10.000 extra aflossen in jaar 1 kan u meer dan €15.000 aan toekomstige rente besparen. Dezelfde aflossing in jaar 20 bespaart u nauwelijks €2.000.',
    },
    {
      type: 'title',
      text: 'Hoeveel Mag ik Uitgeven aan een Hypotheek?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Financiële planners adviseren dat uw hypotheeklasten <strong>niet meer dan 30-35% van uw netto maandinkomen</strong> mogen bedragen. Als u hieroverheen gaat, neemt het risico toe dat u bij tegenslag (werkloosheid, ziekte) de lasten niet meer kunt dragen.',
    },
    {
      type: 'title',
      text: 'Context 2026: Vaste vs Variabele Rente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Met een schommelende rente is de keuze tussen <strong>Vaste Rente</strong> of <strong>Variabele Rente</strong> een strategische beslissing die elk jaar duizenden euro’s kan schelen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vaste Rente',
          description: 'U betaalt nu iets meer, maar u slaapt rustig omdat uw lasten nooit zullen stijgen.',
          points: [
            'Voorspelbare lasten voor de hele periode',
            'Bescherming tegen rentestijgingen',
            'Gemoedsrust in onzekere tijden',
            'Ideaal voor een strak budget',
          ],
        },
        {
          title: 'Variabele Rente',
          description: 'Vandaag vaak goedkoper, maar het stelt u bloot aan onzekerheid.',
          highlight: true,
          points: [
            'Lagere startlasten',
            'Risico op flinke rentestijgingen',
            'Mogelijke grote impact op uw maandbudget',
            'Alleen voor wie risico kan dragen',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'De Keuze Hangt Af van Uw Profiel',
      html: '<p><strong>Kies Vaste Rente als:</strong> Uw budget krap is, u zekerheid zoekt en geen onaangename maandelijkse verrassingen wilt.</p><p><strong>Kies Variabele Rente als:</strong> U een financiële buffer heeft, verwacht dat de rente gaat dalen of een kleine/kortlopende hypotheek heeft.</p>',
    },
  ],
  ui: {
    labelTitle: 'Hypotheek Calculator',
    labelLoanAmount: 'Leenbedrag',
    labelInterestRate: 'Rente (Jaar)',
    labelYears: 'Looptijd (Jaren)',
    labelMonthlyExtra: 'Maandelijkse Extra Aflossing',
    labelMonthlyPayment: 'Maandlast',
    labelMonthCount: 'maanden',
    labelSavingsCard: 'Uw Potentiële Besparing',
    labelSavingsInterest: 'Rente',
    labelSavingsTime: 'Tijd',
    labelTimelineComparison: 'Tijdsvergelijking',
    labelTimelineOriginal: 'Originele Duur',
    labelTimelineOptimized: 'Duur met Extra Aflossing',
    labelCostBreakdown: 'Overzicht Totale Kosten',
    labelBorrowed: 'Geleend',
    labelTotalBorrowed: 'Totaal Geleend',
    labelTotalInterest: 'Totale Rente',
    labelAmortizationTable: 'Aflossingsschema',
    labelTableHeader: 'Bekijk volledige tabel',
    labelViewAll: 'Bekijk alles',
    labelPaid: 'Hypotheek Afgelost',
    labelTableMonth: 'Maand',
    labelTableInterest: 'Rente',
    labelTablePrincipal: 'Aflossing',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Restsaldo',
    labelMoreMonths: 'meer maanden',
    labelMonth: 'Maand',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
    monthPlural: 'maanden',
    yearPlural: 'jaren',
  },
};
