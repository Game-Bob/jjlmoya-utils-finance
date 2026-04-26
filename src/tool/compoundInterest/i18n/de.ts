import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'zinseszins-rechner';
const title = 'Zinseszinsrechner: Visualisieren Sie Ihren zukünftigen Reichtum';
const description =
  'Entdecken Sie, wie aus kleinen Investitionen große Vermögen werden. Das ultimative Werkzeug zur Planung Ihrer finanziellen Freiheit und Altersvorsorge.';

const faqData = [
  {
    question: 'Was ist Zinseszins?',
    answer:
      'Es sind Zinsen, die auf das ursprüngliche Kapital und auch auf die aufgelaufenen Zinsen früherer Perioden berechnet werden. Dies führt im Laufe der Zeit zu einem exponentiellen Wachstum der Investition.',
  },
  {
    question: 'Was ist der Unterschied zum einfachen Zins?',
    answer:
      'Beim einfachen Zins werden die Zinsen nur auf das ursprüngliche Kapital berechnet. Beim Zinseszins werden die Zinsen reinvestiert, was bedeutet, dass „Ihre Zinsen weitere Zinsen generieren“.',
  },
  {
    question: 'Was ist die „72er-Regel“?',
    answer:
      'Es ist eine Faustformel zur Schätzung, wie lange es dauert, bis sich eine Investition verdoppelt: Teilen Sie 72 durch die jährliche Rendite. Beispiel: Bei 8 % pro Jahr verdoppeln Sie Ihr Geld in 9 Jahren.',
  },
  {
    question: 'Warum ist es wichtig, jung mit dem Investieren zu beginnen?',
    answer:
      'Aufgrund des exponentiellen Effekts ist der entscheidendste Faktor nicht die Menge des gesparten Geldes, sondern die Zeit. Ein paar Jahre früher anzufangen, kann aufgrund der Kapitalisierung zu einem viel größeren Endvermögen führen.',
  },
];

const howToData = [
  {
    name: 'Startkapital eingeben',
    text: 'Geben Sie den Geldbetrag ein, mit dem Sie Ihren Investitionsplan beginnen möchten.',
  },
  {
    name: 'Regelmäßige Beiträge festlegen',
    text: 'Geben Sie an, wie viel Geld Sie zusätzlich jeden Monat oder jedes Jahr sparen und investieren werden.',
  },
  {
    name: 'Jährliche Rendite schätzen',
    text: 'Geben Sie den Prozentsatz an jährlichem Gewinn ein, den Sie erwarten (z. B. 7 % für den historischen S&P 500).',
  },
  {
    name: 'Zeithorizont anpassen',
    text: 'Wählen Sie aus, wie viele Jahre Sie die Investition halten möchten, um das exponentielle Wachstum Ihres Kapitals zu visualisieren.',
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
      text: 'Die Magie des Zinseszinses: Bauen Sie Ihren Reichtum exponentiell auf',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein nannte ihn das „achte Weltwunder“. Der <strong>Zinseszins</strong> ist der mächtigste Mechanismus, um langfristig Reichtum zu generieren. Man muss kein Finanzexperte sein, um ihn zu nutzen: Man braucht nur Zeit, Geduld und investiertes Geld.',
    },
    {
      type: 'title',
      text: 'Einfacher Zins vs. Zinseszins: Die Metapher des Schneeballs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stellen Sie sich vor, Sie haben einen Schneeball oben auf einem Hügel. Der <strong>einfache Zins</strong> ist so, als würde man diesen Ball hinunterrollen und manuell jeden Meter Schnee hinzufügen müssen, damit er wächst. Der <strong>Zinseszins</strong> ist so, als würde man den Ball von selbst rollen lassen: Er sammelt von alleine Schnee auf, und je größer er wird, desto mehr Oberfläche hat er, um bei jeder Drehung <em>noch mehr</em> Schnee aufzusammeln.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Einfacher Zins',
          description: 'Die Zinsen werden immer nur auf das ursprüngliche Kapital berechnet.',
          points: [
            'Formel: Kapital × Zinssatz × Zeit',
            'Lineares und vorhersehbares Wachstum',
            'Verwendet bei kurzfristigen Krediten',
            'Keine Reinvestition von Gewinnen',
          ],
        },
        {
          title: 'Zinseszins',
          description: 'Zinsen werden zum Kapital addiert und generieren neue Zinsen.',
          highlight: true,
          points: [
            'Formel: Kapital × (1 + Zinssatz)^Zeit',
            'Beschleunigtes exponentielles Wachstum',
            'Grundlage jeder langfristigen Investition',
            'Ihre Gewinne generieren weitere Gewinne',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Mathematisch gesehen generieren Ihre Gewinne neue Gewinne. In den ersten Jahren scheint es langsam zu sein, aber nach dem „Wendepunkt“ schießt die Kurve vertikal nach oben. Hier entstehen die wahren Vermögen.',
    },
    {
      type: 'title',
      text: 'Warum ist Zeit Ihr größter Verbündeter?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der entscheidendste Faktor ist nicht die Geldmenge, die Sie investieren, sondern <strong>wie viele Jahre Sie es wachsen lassen</strong>. 10 Jahre früher anzufangen kann zu einem 2- oder 3-mal größeren Endvermögen führen, selbst wenn Sie insgesamt weniger Geld investieren. Dieser exponentielle Effekt ist der Grund, warum junge Investoren einen unvergleichlichen Vorteil haben.',
    },
    {
      type: 'tip',
      title: 'Die 72er Regel',
      html: '<p>Teilen Sie 72 durch Ihre jährliche Rendite, um zu wissen, wie viele Jahre es dauert, bis sich <strong>Ihr Geld verdoppelt</strong>.</p><p><em>Beispiel: Bei 8% verdoppeln Sie alle 9 Jahre (72/8 = 9).</em></p><p>Diese magische Formel funktioniert für jede Rendite und hilft Ihnen, das Wachstum Ihrer Investitionen schnell abzuschätzen.</p>',
    },
    {
      type: 'tip',
      title: 'Tipp 2026',
      html: '<p>Die Inflation bleibt ein Faktor. Stellen Sie sicher, dass Ihre Nettorendite mindestens 2-3 % pro Jahr übersteigt, um keine Kaufkraft zu verlieren. Investieren Sie in Vermögenswerte, die schneller wachsen als die Inflation.</p>',
    },
    {
      type: 'title',
      text: 'Zinskapitalisierung: Spielt sie eine Rolle?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zinsen können jährlich, halbjährlich, vierteljährlich, monatlich oder sogar täglich kapitalisiert werden. Je <strong>häufiger die Kapitalisierung</strong> erfolgt, desto größer ist der Zinseszinseffekt. Ein gleiches Kapital mit demselben Zinssatz wächst stärker, wenn die Zinsverrechnung monatlich erfolgt als wenn sie nur jährlich durchgeführt wird.',
    },
  ],
  ui: {
    labelTitle: 'Investitionssimulator',
    labelRealtime: 'Echtzeit',
    labelInitial: 'Startkapital',
    labelMonthly: 'Monatlicher Beitrag',
    labelRate: 'Rendite p.a.',
    labelYears: 'Jahre',
    labelMyMoney: 'Ihr Geld',
    labelProfit: 'Gewinn (Zinsen)',
    labelTotal: 'Gesamtguthaben',
    labelYear: 'Jahr',
    labelPrincipal: 'Ihr Geld (Stammkapital)',
    labelInterest: 'Generierte Zinsen',
    insightPrefix: '[TIPP] Im Jahr ',
    insightSuffix:
      ', werden Ihre jährlich generierten Zinsen Ihre Beiträge übersteigen. Das Geld arbeitet bereits mehr als Sie!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
};
