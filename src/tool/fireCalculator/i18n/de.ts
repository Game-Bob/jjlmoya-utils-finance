import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'fire-rechner-4-prozent-regel';
const title = 'FIRE-Rechner: Die 4%-Regel für Ihre finanzielle Freiheit';
const description = 'Berechnen Sie Ihre magische Zahl für die finanzielle Unabhängigkeit mit der 4%-Regel. Planen Sie Ihren vorzeitigen Ruhestand und visualisieren Sie Ihren Weg zur wirtschaftlichen Freiheit.';

const faqData = [
  {
    question: 'Was ist die 4%-Regel?',
    answer: 'Die 4%-Regel ist eine Entnahmestrategie basierend auf der Trinity-Studie. Sie besagt, dass man im ersten Jahr des Ruhestands 4 % seines Vermögens entnehmen und in den Folgejahren an die Inflation anpassen kann, ohne dass das Geld innerhalb von 30 Jahren ausgeht.',
  },
  {
    question: 'Was bedeutet FIRE?',
    answer: 'FIRE steht für Financial Independence, Retire Early (Finanzielle Unabhängigkeit, früher Ruhestand). Es ist eine Bewegung, die darauf abzielt, wirtschaftliche Freiheit durch eine aggressive Kombination aus Sparen und klugem Investieren zu erreichen.',
  },
  {
    question: 'Was ist meine magische Zahl?',
    answer: 'Ihre magische Zahl ist das gesamte Vermögen, das Sie anhäufen müssen, um von den Erträgen leben zu können, ohne zu arbeiten. Sie wird berechnet, indem Sie Ihre jährlichen Ausgaben durch die sichere Entnahmerate (meist 4 %) teilen.',
  },
  {
    question: 'Was ist der Unterschied zwischen Lean, Barista und Fat FIRE?',
    answer: 'Lean FIRE bedeutet, mit minimalen Ausgaben zu leben (70 % der aktuellen Ausgaben), Barista FIRE bedeutet, Teilzeit zu arbeiten, während die Erträge den Rest decken (50 % der Ausgaben), und Fat FIRE bedeutet einen komfortablen Lebensstil (150 % der Ausgaben).',
  },
  {
    question: 'Ist die 4%-Regel realistisch?',
    answer: 'Die 4%-Regel hat eine historische Erfolgswahrscheinlichkeit von 95 % bei einem Portfolio aus 50 % Aktien und 50 % Anleihen über 30 Jahre. Sie berücksichtigt jedoch nicht das Reihenfolgerisiko der Renditen und basiert hauptsächlich auf US-Marktdaten.',
  },
];

const howToData = [
  {
    name: 'Berechnen Sie Ihre monatlichen Ausgaben',
    text: 'Analysieren Sie, wie viel Sie tatsächlich jeden Monat ausgeben, einschließlich Wohnen, Verpflegung, Dienstleistungen und Unterhaltung.',
  },
  {
    name: 'Wählen Sie Ihre sichere Entnahmerate',
    text: 'Die 4%-Regel ist der Standard, aber Sie können je nach Risikotoleranz zwischen 2,5 % (konservativer) und 6 % (aggressiver) anpassen.',
  },
  {
    name: 'Geben Sie Ihr aktuelles Vermögen ein',
    text: 'Addieren Sie die Summe Ihrer Investitionen, Ersparnisse und Vermögenswerte, die passives Einkommen generieren.',
  },
  {
    name: 'Visualisieren Sie Ihren Fortschritt',
    text: 'Beobachten Sie das Wachstumsdiagramm und die Meilensteine der Freiheit (Lean, Barista, Fat FIRE), um zu verstehen, wann Sie Ihr Ziel erreichen.',
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
    name: 'Bogleheads - Anlageleitfaden',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen zu FIRE',
  faq: faqData,
  bibliographyTitle: 'Quellen und Referenzen',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die 4%-Regel: Der heilige Gral des vorzeitigen Ruhestands',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Finden Sie heraus, wie Sie das Vermögen berechnen, das Sie benötigen, um für immer von Ihren Erträgen zu leben. Die <strong>4%-Regel</strong> entstammt der Trinity-Studie, die 1998 von drei Finanzprofessoren durchgeführt wurde. Sie analysierten historische Daten seit 1926, um zu bestimmen, welcher Prozentsatz jährlich entnommen werden konnte, ohne das Portfolio über 30 Jahre hinweg aufzehren.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Historischer Erfolg' },
        { value: '50/50', label: 'Aktien/Anleihen-Mix' },
        { value: '30', label: 'Jahre Horizont' },
        { value: '4%', label: 'Sichere Entnahme' },
      ],
    },
    {
      type: 'title',
      text: 'Was ist die FIRE-Bewegung?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE ist das Akronym für Financial Independence, Retire Early (Finanzielle Unabhängigkeit, früher Ruhestand).',
        'Sie strebt die Freiheit an, selbst zu entscheiden, was man mit seiner Zeit anfangen möchte, ohne dass Geld ein limitierender Faktor ist.',
        'Sie basiert auf der Optimierung des Sparens und kluger Investition.',
        'Das Ziel ist, dass Ihre Vermögenswerte genügend Cashflow generieren, um Ihre Ausgaben zu decken.',
      ],
    },
    {
      type: 'title',
      text: 'Arten der finanziellen Freiheit',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Minimalistischer Lebensstil. Deckt nur die grundlegenden Überlebenskosten.',
          points: ['Extremes Sparen', 'Sehr geringe Ausgaben', 'Frugale Freiheit'],
        },
        {
          title: 'Barista FIRE',
          description: 'Hybride Situation, in der Ihre Investitionen die Hälfte Ihrer Ausgaben decken.',
          points: ['Arbeit zum Vergnügen', 'Sozialversicherung abgedeckt', 'Weniger Stress'],
        },
        {
          title: 'Fat FIRE',
          description: 'Ruhestand mit einem großzügigen Budget, das Luxus und Reisen ermöglicht.',
          points: ['Hohes Vermögen', 'Keine Einschränkungen', 'Familienerbe'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wie benutzt man unseren FIRE-Rechner?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ausgaben-Tracking:</strong> Analysieren Sie Ihre tatsächlichen Ausgaben der letzten 12 Monate.',
        '<strong>SWR-Definition:</strong> Wählen Sie Ihre sichere Entnahmerate je nach Risiko.',
        '<strong>Aktuelles Vermögen:</strong> Geben Sie den Wert Ihrer aktuellen Investitionen ein.',
        '<strong>Sparkapazität:</strong> Projizieren Sie, wie viel Zeit Ihnen bis zum Ziel bleibt.',
        '<strong>Visuelle Darstellung:</strong> Analysieren Sie das Wachstumsdiagramm Ihres Vermögens.',
      ],
    },
    {
      type: 'title',
      text: 'Analyse der 4%-Regel',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vorteile',
          description: 'Warum die 4%-Regel funktioniert',
          points: [
            'Mathematische Einfachheit für schnelle Planung.',
            'Basiert auf historischen Daten von fast einem Jahrhundert.',
            'Anpassbar an jedes Ausgabenniveau.',
          ],
        },
        {
          title: 'Einschränkungen',
          description: 'Was die 4%-Regel nicht abdeckt',
          points: [
            'Das Reihenfolgerisiko der Renditen wird nicht berücksichtigt.',
            'Basiert hauptsächlich auf dem US-Markt.',
            'Ignoriert drastische Änderungen in der lokalen Steuergesetzgebung.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kritischer Faktor: Die Inflation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denken Sie daran, dass 1.000 € heute in Zukunft nicht dasselbe kaufen werden. Es ist entscheidend, reale Renditen (inflationsbereinigt) zu verwenden, damit Ihre Projektionen die heutige Kaufkraft beibehalten. Die 4%-Regel geht davon aus, dass Sie Ihre Entnahmen jährlich an die Inflation anpassen.',
    },
  ],
  ui: {
    labelTitle: 'FIRE-Rechner: 4%-Regel',
    labelDescription: 'Berechnen Sie Ihre magische Zahl für die finanzielle Unabhängigkeit mit der 4%-Regel und visualisieren Sie Ihre Meilensteine zur Freiheit.',
    labelMonthlyExpenses: 'Monatliche Ausgaben',
    labelSWR: 'Entnahmerate (SWR)',
    labelCurrentWorth: 'Aktuelles Vermögen',
    labelMonthlySavings: 'Monatliche Sparrate',
    labelAnnualReturn: 'Geschätzte Rendite (Netto)',
    labelFreedomMilestones: 'Meilensteine der Freiheit',
    labelLeanFIRE: 'Lean FIRE (70 % Grundsicherung)',
    labelBaristaFIRE: 'Barista FIRE (50 % Einkommen)',
    labelFatFIRE: 'Fat FIRE (150 % Luxus)',
    labelMagicNumber: 'Ihre magische Zahl für die Freiheit',
    labelMagicNumberDesc: 'Benötigtes Kapital, um von den Erträgen zu leben',
    labelTimeRemaining: 'Zeit bis zur finanziellen Freiheit',
    labelTimeRemainingFormat: 'Es fehlen noch {years} Jahre und {months} Monate',
    labelAlreadyFI: 'Sie haben die finanzielle Freiheit bereits erreicht!',
    labelUnachievable: 'Ziel mit dieser Sparrate unerreichbar',
    labelHiddenCostsChecklist: 'Checkliste versteckte Kosten',
    labelHealth: 'Krankenversicherung (+200€)',
    labelTaxes: 'Steuern (+150€)',
    labelHome: 'Instandhaltung Heim (+100€)',
    labelTravel: 'Reisen und Freizeit (+300€)',
    labelEmergency: 'Notfallfonds (+100€)',
    labelSubscriptions: 'Abonnements (+50€)',
    labelAdded: 'Hinzugefügt:',
    labelSavePlan: 'Plan speichern',
    labelSWRTooltip: 'Safe Withdrawal Rate: Prozentsatz Ihrer Ersparnisse, den Sie jedes Jahr entnehmen können, ohne dass das Geld ausgeht.',
    labelReturnTooltip: 'Jährliche Marktrendite (bereits inflationsbereinigt). Der historische Standard liegt bei 7 %.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
};
