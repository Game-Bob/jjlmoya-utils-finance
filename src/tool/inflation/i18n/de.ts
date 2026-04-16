import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflation-rechner-spanien';
const title = 'Inflationsrechner Spanien: Historischer Geldwert';
const description =
  'Entdecken Sie, wie viel Ihre Pesetas heute wert wären oder wie stark die Lebenshaltungskosten seit 1980 gestiegen sind. Historische VPI-Daten für Spanien, aktualisiert auf 2026.';

const faqData = [
  {
    question: 'Was ist der VPI und wie wird er berechnet?',
    answer:
      'Der Verbraucherpreisindex (VPI) misst die Preisentwicklung eines Warenkorbs von Waren und Dienstleistungen, die repräsentativ für den spanischen Konsum sind. Er wird durch den Vergleich der Kosten dieses Warenkorbs in verschiedenen Zeiträumen berechnet.',
  },
  {
    question: 'Wie viel hat das Geld seit 1980 an Wert verloren?',
    answer:
      '1.000 Peseten von 1980 entsprechen heute in Bezug auf die Kaufkraft etwa 60 €. Das Geld hat in diesen über 40 Jahren aufgrund der kumulierten Inflation mehr als 90 % seines Wertes verloren.',
  },
  {
    question: 'Warum verlieren meine Ersparnisse an Wert, wenn ich sie nicht bewege?',
    answer:
      'Wenn die Inflation 3 % pro Jahr beträgt und Ihr Konto 0 % Zinsen bringt, verlieren Sie jedes Jahr 3 % an Kaufkraft. Um den realen Wert zu erhalten, müssen Ihre Ersparnisse mindestens die Inflationsrate erwirtschaften.',
  },
  {
    question: 'Was war der Zeitraum mit der höchsten Inflation in Spanien?',
    answer:
      'Die 80er Jahre waren die inflationsreichsten Jahre mit zweistelligen Raten (bis zu 15 %). Die Preise änderten sich von Monat zu Monat drastisch. Seit dem Euro (2002) ist die Inflation kontrollierter, außer im Zeitraum 2021-2023.',
  },
  {
    question: 'Wie wirkt sich die Inflation auf meine Ersparnisse aus?',
    answer:
      'Die Inflation wirkt wie eine „stille Steuer“. Wenn die Inflation 5 % beträgt und Ihr Geld unter der Matratze liegt, können Sie am Ende des Jahres 5 % weniger Produkte kaufen. Es ist wichtig zu investieren, um diesem Effekt entgegenzuwirken.',
  },
];

const howToData = [
  {
    name: 'Ursprungsjahr auswählen',
    text: 'Wählen Sie das Datum aus, ab dem Sie den Geldwert berechnen möchten (verfügbar von 1980 bis 2026).',
  },
  {
    name: 'Betrag eingeben',
    text: 'Geben Sie den Betrag in Peseten (für alte Daten) oder in Euro ein, den Sie vergleichen möchten.',
  },
  {
    name: 'Endjahr wählen',
    text: 'Legen Sie fest, bis zu welchem Zeitpunkt Sie die Entwicklung der Kaufkraft sehen möchten.',
  },
  {
    name: 'Reales Ergebnis analysieren',
    text: 'Beobachten Sie die Kaufkraftentsprechung und den Prozentsatz der kumulierten Inflation in diesem Zeitraum.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen zur Inflation',
  faq: faqData,
  bibliographyTitle: 'Offizielle Quellen und Referenzen',
  bibliography: [
    {
      name: 'INE: Verbraucherpreisindex (Spanien)',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'Banco de España: Inflationsanalyse',
      url: 'https://www.bde.es/',
    },
    {
      name: 'EZB: Geldpolitik und Preise',
      url: 'https://www.ecb.europa.eu/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Historischer Inflationsrechner: Verstehen Sie den realen Wert Ihres Geldes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Inflation ist die „stille Steuer“, die Jahr für Jahr an Ihren Ersparnissen frisst. Wissen Sie, wie viel Ihr Geld seit 1980 an Wert verloren hat? Wie viel kostet eigentlich der Kaffee, für den Sie vor 20 Jahren 300 Peseten bezahlt haben?',
    },
    {
      type: 'title',
      text: 'Inflation: Die stille Steuer auf Ihr Vermögen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Inflation</strong> ist der anhaltende und allgemeine Anstieg der Preise. Auch wenn es wie ein technisches Phänomen erscheint, ist seine Auswirkung auf die Realwirtschaft direkt: Es reduziert die Menge an Gütern, die Sie mit dem gleichen Geld kaufen können, und zehrt an den Ersparnissen eines ganzen Lebens, wenn keine Schutzmaßnahmen ergriffen werden.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Historischer Rekord 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Preishöchststand 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Stabilitätsziel',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wichtige Finanzbegriffe',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'VPI',
          definition: 'Indikator, der die Preisveränderung eines Grundwarenkorbs zusammenfasst.',
        },
        {
          term: 'Kaufkraft',
          definition: 'Die reale Kaufkapazität einer Währung zu einem bestimmten Zeitpunkt.',
        },
        {
          term: 'Deflation',
          definition: 'Ein allgemeiner Preisverfall, der Investitionen lähmen kann.',
        },
        {
          term: 'Stagflation',
          definition: 'Szenario mit hoher Inflation bei gleichzeitigem wirtschaftlichem Stillstand.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wirtschaftliche Meilensteine und Vergleich',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Krise der 80er Jahre',
          description: 'Zeitraum geprägt von zweistelliger Inflation und großer Arbeitsmarktinstabilität.',
          points: [
            'Extrem hohe Zinssätze',
            'Schneller Wertverlust der Peseta',
            'Gehälter von den Preisen aufgefressen',
          ],
        },
        {
          title: 'Inflation der Pandemie: 2021 bis 2023',
          description: 'Abrupter Anstieg durch Energiekosten und Probleme in der Lieferkette.',
          highlight: true,
          points: [
            'Direkte Auswirkungen auf den Warenkorb',
            'Zinserhöhungen der EZB zur Dämpfung des Konsums',
            'Langsame Erholung der Kaufkraft',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Produkt oder Indikator', 'Wert 1980 (Geschätzt)', 'Wert 2026 (Projiziert)', 'Veränderung'],
      rows: [
        ['Laib Brot', '0,15 € (25 Pts)', '1,40 €', '833 %'],
        ['Kaffee im Lokal', '0,30 € (50 Pts)', '1,65 €', '450 %'],
        ['Kinokarte', '1,20 € (200 Pts)', '9,80 €', '716 %'],
        ['Monatlicher Mindestlohn', '154 € (25.615 Pts)', '1.140 €', '640 %'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Die Gefahr von Bargeld',
      html: 'Geld unter der Matratze oder auf unverzinsten Girokonten aufzubewahren, ist ein garantierter Kapitalverlust. Eine durchschnittliche Inflation von 3 % halbiert den Wert Ihrer Ersparnisse in weniger als 25 Jahren.',
    },
    {
      type: 'title',
      text: 'Tipps zum Schutz Ihrer Ersparnisse',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Investmentstrategien',
      items: [
        {
          pro: 'Sachwerte: Immobilien werten sich oft mit der Inflation auf.',
          con: 'Geringe Liquidität und hohe Einstiegskosten.',
        },
        {
          pro: 'Börse und Fonds: Renditen, die langfristig oft den VPI übertreffen.',
          con: 'Volatilität und Marktrisiko auf kurze Sicht.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Gesunde Finanzgewohnheiten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Regelmäßige Überprüfung Ihrer Ausgaben, um versteckte Erhöhungen zu erkennen.',
        'Diversifizierung der Ersparnisse in verschiedene Arten von Vermögenswerten.',
        'Erwägung inflationsgeschützter Staatsanleihen.',
        'Verwendung von Berechnungswerkzeugen zur Kontextualisierung von Angeboten und Gehältern.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Warnung vor negativem Zinseszins',
      html: 'Die Inflation wirkt wie ein umgekehrter Zinseszins. Jedes Jahr wird der Verlustprozentsatz auf einen bereits verringerten Wert angewendet, was den Vermögensverlust beschleunigt, wenn nicht eingegriffen wird.',
    },
    {
      type: 'summary',
      title: 'Wichtige Schlussfolgerungen',
      items: [
        'Der VPI ist nur ein Durchschnitt; Ihre persönliche Inflation hängt von Ihren Gewohnheiten ab.',
        'Investieren ist keine Option, wenn man den realen Wert der Arbeit erhalten will.',
        'Inflationsrechner sind lebenswichtig, um langfristige Verträge zu verstehen.',
      ],
    },
    {
      type: 'message',
      title: 'Übernehmen Sie die Kontrolle über Ihre Finanzen',
      html: 'Unser Rechner verwendet offizielle INE-Daten, um Ihnen das präziseste Bild der wirtschaftlichen Vergangenheit und Gegenwart Spaniens zu bieten.',
    },
  ],
  ui: {
    labelTitle: 'Inflationsrechner Spanien',
    labelInitialAmount: 'Startkapital',
    labelInitialYear: 'Im Jahr',
    labelFinalAmount: 'Entsprechung Heute',
    labelFinalYear: 'Jahr 2026',
    labelInflationRate: 'Kumulierte Inflation',
    labelCalculatedOn: 'Berechnung unter Verwendung offizieller INE-Daten bis 2025 und geschätzter Prognosen für das Ende von 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
    labelYearSelect: 'Im Jahr',
    labelIn: 'In',
    labelEquivalentToday: 'entspricht heute',
    labelInflationAccumulated: 'Kumulierte Inflation',
    labelYear: 'Jahr',
  },
};
