import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'rechner-verzugszinsen-spanien';
const title = 'Verzugszinsen und gesetzlicher Zinsrechner Spanien 2026';
const description =
  'Berechnen Sie steuerliche Verzugszinsen (Finanzamt) und gesetzliche Zinsen für Zahlungsverzug in Spanien. Aktualisierter Simulator für 2025 und 2026.';

const faqData = [
  {
    question: 'Was sind Verzugszinsen?',
    answer:
      'Dies ist der Zins, der auf einen Betrag erhoben wird, der nicht innerhalb der festgelegten Frist gezahlt wurde. Er wird auf die ursprüngliche Schuld angewendet und summiert sich bis zur vollständigen Zahlung.',
  },
  {
    question: 'Was ist der Unterschied zwischen einfachem und Zinseszins?',
    answer:
      'Einfache Zinsen werden jeden Tag nur auf das ursprüngliche Kapital berechnet. Zinseszinsen werden auf das Kapital plus die aufgelaufenen Zinsen berechnet, was zu einem schnelleren Wachstum der Schuld führt.',
  },
  {
    question: 'Wie wird der Tageszins berechnet?',
    answer:
      'Der Jahressatz wird durch 365 Tage geteilt und auf das ursprüngliche Kapital angewendet. Zum Beispiel: 10 % pro Jahr = 0,0274 % pro Tag.',
  },
  {
    question: 'Welchen Verzugszinssatz sollte ich anwenden?',
    answer:
      'Dies hängt von der lokalen Gesetzgebung und den Vertragsbedingungen ab. In Spanien legt das Gesetz zur Bekämpfung von Zahlungsverzug Höchstsätze fest. Konsultieren Sie einen Rechtsberater für Ihren spezifischen Fall.',
  },
  {
    question: 'Kann ich diesen Rechner für gerichtliche Schulden verwenden?',
    answer:
      'Dies ist ein Informationswerkzeug. Überprüfen Sie für reale Schulden die vertraglichen Bedingungen und die lokale Gesetzgebung. Konsultieren Sie bei Zweifeln einen Anwalt.',
  },
];

const howToData = [
  {
    name: 'Berechnungsart wählen',
    text: 'Wählen Sie je nach Situation zwischen einfachen Zinsen, Zinseszinsen oder monatlichen Zinsen.',
  },
  {
    name: 'Daten eingeben',
    text: 'Geben Sie den ursprünglichen Betrag, den Zinssatz und den Verzugszeitraum ein.',
  },
  {
    name: 'Ergebnis erhalten',
    text: 'Der Rechner zeigt den aufgelaufenen Tageszins, die Gesamtzinsen, den Endbetrag und den effektiven Zinssatz an.',
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

export const content: ToolLocaleContent<LateInterestUI> = {
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
      text: 'Rechner für Verzugszinsen und gesetzliche Zinsen: Vollständiger Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im komplexen rechtlichen und steuerlichen Geflecht Spaniens ist der Zeitablauf bei einer Schuld nicht kostenlos. Die <strong>Verzugszinsen</strong> und der <strong>gesetzliche Zinssatz</strong> sind Mechanismen, die das Gesetz nutzt, um den Schaden auszugleichen, der durch die Verspätung bei der Erfüllung einer Geldverpflichtung entsteht. Ob es sich um eine Schuld beim Finanzamt (<strong>Hacienda</strong>), einen Zahlungsausfall zwischen Unternehmen oder eine gerichtliche Forderung handelt – es ist entscheidend zu verstehen, wie diese Zinsen anfallen.',
    },
    {
      type: 'title',
      text: 'Was ist der gesetzliche Zinssatz?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der gesetzliche Zinssatz ist der Aufschlag, der auf eine Schuld angewendet wird, wenn die Parteien keinen spezifischen Zins vereinbart haben oder wenn das Gesetz dies bestimmt. Für die Jahre <strong>2024, 2025 und 2026</strong> wurde dieser Satz stabil bei <strong>3,25 %</strong> gehalten. Dieser Prozentsatz dient als Basis für eine Vielzahl von rechtlichen Berechnungen.',
    },
    {
      type: 'title',
      text: 'Die steuerlichen Verzugszinsen (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn die Schuld gegenüber der öffentlichen Verwaltung besteht, liegen die <strong>steuerlichen Verzugszinsen</strong> über dem gesetzlichen Zinssatz, um den Verzug bei der Steuerzahlung zu unterbinden. Für den Zeitraum <strong>2024-2026</strong> wurde dieser auf <strong>4,0625 %</strong> festgelegt. Dies ist der Aufschlag, den das Finanzamt erhebt, wenn Sie eine Steuererklärung verspätet einreichen.',
    },
    {
      type: 'tip',
      title: 'Entschädigungscharakter, keine Strafe',
      html: '<p><strong>Wichtiger Hinweis:</strong> Im Gegensatz zu Sanktionen haben Verzugszinsen Entschädigungscharakter und sind keine Strafe. Das Finanzamt „bestraft” Sie nicht damit, sondern erhebt Gebühren für die Zeit, in der Sie über Geld verfügt haben, das in den öffentlichen Kassen sein sollte.</p>',
    },
    {
      type: 'title',
      text: 'Berechnung der Zinsen Schritt für Schritt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Berechnung dieser Zinsen folgt einer einfachen Zinsformel, wobei die Zeit in Kalendertagen gezählt wird: <strong>Zinsen = (Kapital × Tage × Zinssatz) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Kapital:</strong> Der Gesamtbetrag der ursprünglichen Schuld.',
        '<strong>Tage:</strong> Die Anzahl der Tage seit dem Tag nach der Fälligkeit bis zum Tag der effektiven Zahlung.',
        '<strong>Zinssatz:</strong> Der geltende jährliche Prozentsatz (z. B. 3,25 oder 4,0625).',
        '<strong>36.500:</strong> Der Divisor zur Umrechnung des Jahressatzes in einen Tagessatz (365 Tage x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Praxisbeispiel: Schuld beim Finanzamt',
      html: '<p>Stellen Sie sich vor, Sie schulden 5.000 € aus einer Einkommensteuererklärung, die vor 180 Tagen fällig war:</p><ul><li>Anwendbarer Zinssatz (Verzug): 4,0625 %</li><li>Berechnung: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Ergebnis:</strong> 100,17 €</li><li>Gesamtbetrag: 5.100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Unterschiede je nach Schuldenart',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zivilschulden:</strong> Zwischen Privatpersonen gelten 3,25 % (gesetzlich).',
        '<strong>Handelsschulden:</strong> Sie unterliegen dem Gesetz zur Bekämpfung von Zahlungsverzug und erreichen 2025-2026 etwa 10,15 % - 11,15 %.',
        '<strong>Sozialversicherungsschulden:</strong> Hier gelten 4,0625 % plus Aufschläge von 10 % bis 20 %.',
        '<strong>Prozesszinsen:</strong> Bei einem Gerichtsurteil 5,25 % ab dem Datum des Urteils.',
      ],
    },
    {
      type: 'title',
      text: 'Zinsen im Geschäftsverkehr: Vorsicht bei den 60 Tagen!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie Selbstständiger oder ein Unternehmen sind, legt das spanische Gesetz 3/2004 eine maximale Zahlungsfrist von 60 Tagen fest. Wenn Ihr Kunde diese Frist überschreitet, können Sie automatisch Verzugszinsen für Handelsgeschäfte verlangen, ohne dass eine Mahnung erforderlich ist, und zusätzlich einen Pauschalbetrag von 40 € für Beitreibungskosten erheben.',
    },
  ],
  ui: {
    labelTitle: 'Verzugszinsrechner',
    labelSimpleTitle: 'Einfach',
    labelCompoundTitle: 'Zinseszins',
    labelMonthlyTitle: 'Monatlich',
    labelSimpleQuestion: 'Mit einfachem Zins berechnen',
    labelCompoundQuestion: 'Mit Zinseszins berechnen',
    labelMonthlyQuestion: 'Mit monatlichen Perioden berechnen',
    labelPrincipal: 'Ursprünglicher Betrag',
    labelAnnualRate: 'Jahressatz',
    labelDays: 'Tage Verzug',
    labelMonths: 'Monate Verzug',
    labelMonthlyRate: 'Monatssatz',
    labelDailyInterest: 'Tageszins',
    labelTotalInterest: 'Gesamtzinsen',
    labelTotalAmount: 'Gesamtbetrag',
    labelEffectiveRate: 'Effektiver Satz',
    labelCopyTooltip: 'Ergebnis kopieren',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Angewandte Formel',
    reportTitle: 'BERICHT ÜBER ZINSBERECHNUNG',
    reportLabelPrincipal: 'Kapital',
    reportLabelType: 'Typ',
    reportLabelPeriod: 'Zeitraum',
    reportLabelDays: 'Verstrichene Tage',
    reportLabelInterest: 'ANGEFALLENE ZINSEN',
    reportLabelTotal: 'GESAMTBETRAG',
    reportDaysSuffix: 'Tage',
    formulaDescription: 'Diese Berechnung nutzt die aktuellen Sätze. Wenn der Zeitraum frühere Jahre mit anderen Sätzen umfasst, sollte die tatsächliche Berechnung nach Zeiträumen aufgeteilt werden.',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
};
