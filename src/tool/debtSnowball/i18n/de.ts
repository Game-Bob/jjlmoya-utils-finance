import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'schneeball-methode-schuldenrechner';
const title = 'Schulden Schneeball Rechner: Schuldenabbauplan 2026';
const description = 'Berechnen Sie Ihr Datum für die finanzielle Freiheit mit der Schneeballmethode von Dave Ramsey. Organisieren Sie Ihre Schulden und visualisieren Sie Ihren Tilgungsplan.';

const faqData = [
  {
    question: 'Was ist die Schneeballmethode?',
    answer: 'Es ist eine Strategie zum Schuldenabbau, bei der Schulden in der Reihenfolge vom kleinsten zum größten Saldo abbezahlt werden, unabhängig vom Zinssatz. Sie konzentriert sich auf den psychologischen Erfolg, kleine Konten schnell zu eliminieren.',
  },
  {
    question: 'Warum nicht nach Zinssätzen sortieren (Lawinenmethode)?',
    answer: 'Mathematisch gesehen spart das Abbezahlen der höchsten Zinsen zuerst mehr Geld. Viele Menschen geben jedoch auf, weil sie keine sofortigen Ergebnisse sehen. Der Schneeball priorisiert Motivation: Zu sehen, wie eine Schuld schnell verschwindet, gibt Energie für die großen.',
  },
  {
    question: 'Sollte ich Ersparnisse haben, bevor ich den Plan starte?',
    answer: 'Es wird empfohlen, einen kleinen Notfallfonds (ca. 1.000 €) zu haben, bevor man die Schulden angreift. Dies verhindert, dass man bei unvorhersehbaren Ereignissen wieder die Kreditkarte nutzen muss.',
  },
  {
    question: 'Welche Schulden sollte ich in den Rechner aufnehmen?',
    answer: 'Alle Konsumschulden: Kreditkarten, Privatkredite, Autokredite, überfällige Rechnungen. Hypotheken werden aufgrund ihres Volumens meist für eine spätere Phase aufgehoben.',
  },

  { question: "Was sollte ich vor der Verwendung prüfen?", answer: "Prüfen Sie Eingaben, Einheiten, Annahmen und Grenzen; das Ergebnis ist eine Orientierung, keine offizielle Entscheidung." },];

const howToData = [
  {
    name: 'Schulden auflisten',
    text: 'Listen Sie alle Ihre Schulden mit dem aktuellen Restsaldo und der monatlichen Mindestzahlung auf.',
  },
  {
    name: 'Extra-Budget festlegen',
    text: 'Berechnen Sie, wie viel zusätzliches Geld Sie jeden Monat über die Mindestzahlungen hinaus aufwenden können.',
  },
  {
    name: 'Sortieren und Priorisieren',
    text: 'Der Rechner sortiert automatisch vom kleinsten zum größten Saldo. Zahlen Sie das Minimum für alle außer der kleinsten.',
  },
  {
    name: 'Kaskade ausführen',
    text: 'Wenn die kleinste Schuld getilgt ist, nehmen Sie das gesamte Geld, das Sie dafür aufgewendet haben, und addieren es zur Zahlung der nächsten.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<DebtSnowballUI> = {
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
      text: 'Schulden Schneeball Rechner: Ihr Weg zur Schuldenfreiheit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Schuldenfrei zu leben ist wie ein Marathon ohne schweren Rucksack. Die <strong>Schneeballmethode</strong> hat sich als eine der effektivsten Strategien erwiesen.',
    },

  { type: 'paragraph', html: "Schuldenfrei zu leben ist wie ein Marathon ohne schweren Rucksack. Die <strong>Schneeballmethode</strong> ordnet Ihre Verbindlichkeiten nach dem kleinsten offenen Saldo und macht den ersten Fortschritt schnell sichtbar. Sie ist nicht immer die mathematisch günstigste Strategie, kann aber durch klare Zwischenziele helfen, den Plan tatsächlich durchzuhalten." },
  { type: 'paragraph', html: "Tragen Sie für jede Schuld den Namen, den aktuellen Saldo, die Mindestzahlung und den Jahreszins ein. Der Rechner sortiert die Schulden vom kleinsten zum größten Saldo. Sie zahlen zunächst die Mindestbeträge für alle Konten und setzen Ihr zusätzliches Monatsbudget vollständig bei der kleinsten Schuld ein." },
  { type: 'paragraph', html: "Sobald die erste Schuld getilgt ist, wird ihre bisherige Zahlung frei. Dieses Geld wandert zusammen mit dem Extra-Budget zur nächsten Schuld. So wächst die monatliche Tilgung Schritt für Schritt, während die Liste kürzer wird." },
  { type: 'paragraph', html: "Der Tilgungsplan zeigt für jede Etappe das Zahlungsdatum, die anfallenden Zinsen, die Gesamtsumme und den verbleibenden Saldo. Dadurch sehen Sie nicht nur ein Enddatum, sondern auch, welcher konkrete Schritt als Nächstes ansteht." },
  { type: 'paragraph', html: "Die <strong>Lawinenmethode</strong> beginnt mit dem höchsten Zinssatz und spart mathematisch oft mehr Zinsen. Die Schneeballmethode beginnt dagegen mit dem kleinsten Saldo und erzeugt schneller sichtbare Erfolge. Wählen Sie die Reihenfolge, die Sie im Alltag zuverlässig einhalten können." },
  { type: 'paragraph', html: "Beide Methoden setzen voraus, dass Sie alle Mindestzahlungen leisten und keine neuen Salden aufbauen. Ein kleiner Notgroschen kann verhindern, dass eine unerwartete Rechnung den Plan sofort wieder zurückwirft." },
  { type: 'paragraph', html: "Ihr zusätzliches Monatsbudget sollte ein Betrag sein, den Sie regelmäßig aufbringen können. Ein unrealistisch hoher Wert sieht im Rechner gut aus, führt aber in der Praxis zu einem Abbruch oder zu neuen Schulden." },
  { type: 'paragraph', html: "Wenn eine Schuld als unendlich markiert wird, deckt die geplante Rate die laufenden Monatszinsen nicht. Prüfen Sie dann Saldo, Zinssatz und Zahlung und erhöhen Sie die Rate nur so weit, wie Ihr Budget es tatsächlich erlaubt." },
  { type: 'paragraph', html: "Die Simulation arbeitet mit Ihren Eingaben, monatlichen Zinsen und regelmäßigen Zahlungen. Gebühren, neue Einkäufe, variable Zinssätze und Sonderzahlungen können die tatsächliche Laufzeit verändern." },
  { type: 'paragraph', html: "Ein schneller erster Erfolg ist psychologisch wertvoll, aber nicht kostenlos: Wenn eine teure Schuld später getilgt wird, können insgesamt mehr Zinsen anfallen als bei der Lawinenmethode. Vergleichen Sie deshalb beide Szenarien, bevor Sie sich festlegen." },
  { type: 'paragraph', html: "Nutzen Sie die CSV-Funktion, um den Plan zu speichern und die nächsten Zahlungen sichtbar zu machen. Aktualisieren Sie den Rechner, wenn sich Einkommen, Mindestzahlungen oder Zinssätze ändern." },
  { type: 'paragraph', html: "Die Schneeballmethode ist ein Planungswerkzeug und keine rechtliche oder finanzielle Einzelfallberatung. Bei Zahlungsproblemen sollten Sie frühzeitig eine unabhängige Schuldnerberatung kontaktieren." },
  { type: 'paragraph', html: "Eine gute Reihenfolge allein beseitigt keine Schuld: Entscheidend sind regelmäßige Zahlungen, ein realistisches Budget und eine Pause bei neuen Kreditkartenausgaben. Der Rechner macht diese Annahmen sichtbar, damit Sie sie bewusst prüfen können." },
  { type: 'paragraph', html: "Lesen Sie Zinskosten und Gesamtrückzahlung gemeinsam mit dem Freiheitsdatum. Eine kürzere Laufzeit ist nicht automatisch die günstigste, wenn dafür ein Budget gewählt wird, das Sie nicht dauerhaft tragen können." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Vergleich von Schneeball- und Lawinenszenarien. Prüfen Sie Beträge, Zinssätze, Mindestzahlungen, Rundungen und den Betrachtungszeitraum vor einer Entscheidung." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },
  { type: 'paragraph', html: "Prüfen Sie Beträge, Zinssätze, Mindestzahlungen, Rundungen und den Betrachtungszeitraum vor einer Entscheidung. Die Simulation ist eine Orientierung und ersetzt keine Schuldnerberatung, Vertragsprüfung oder individuelle Finanzberatung." },],
  ui: {
    labelTitle: 'Totale Freiheit',
    labelDescription: 'Starten Sie Ihren Weg zur finanziellen Freiheit mit der psychologisch effektivsten Methode.',
    labelExtraBudget: 'MONATLICHES EXTRA-BUDGET',
    labelExtraBudgetHelp: 'Zusätzliches Geld über die Mindestzahlungen hinaus.',
    labelSnowballMethod: 'SCHNEEBALL',
    labelAvalancheMethod: 'LAWINE',
    labelAddNewDebt: 'NEUE SCHULD HINZUFÜGEN',
    labelDebtName: 'Name',
    labelDebtNamePlaceholder: 'Z.B. Visa',
    labelDebtBalance: 'WIE VIEL SCHULDEN SIE',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'MINDESTZAHLUNG',
    labelInterestRate: 'ZINSSATZ',
    labelInterestHelp: 'JÄHRLICH',
    labelAddButton: 'ZUM PLAN HINZUFÜGEN',
    labelClearData: 'Einstellungen löschen',
    labelClearDataConfirm: 'Plan leeren?',
    labelDeleteDebt: 'Löschen',
    labelDebtInventory: 'Schuldenliste',
    labelFreedomDate: 'DATUM DER FINANZIELLEN FREIHEIT',
    labelActiveMethod: 'METHODE',
    labelMonthsRemaining: 'VERBLEIBENDE MONATE',
    labelTotalInterest: 'GESAMTINTERESSEN',
    labelTotalPaid: 'GESAMTZAHLUNG',
    labelInterestSaved: 'ZINSERSPARNIS',
    labelYourStrategy: 'Ihre Strategie Schritt für Schritt',
    labelStrategyHelp: 'Jeder Schritt zeigt Ihre Gesamtzahlung an.',
    labelPriority: 'HÖCHSTE PRIORITÄT',
    labelStep: 'SCHRITT',
    labelAfterPaying: 'NACH TILGUNG DER VORHERIGEN',
    labelMonthlyPayment: 'Monatliche Zahlung',
    labelDetailedAmortization: 'Detaillierter Tilgungsplan',
    labelExportCSV: 'Als .CSV exportieren',
    labelDate: 'Datum',
    labelStartingBalance: 'Anfangssaldo',
    labelInterest: 'Zinsen',
    labelAmortization: 'Tilgung',
    labelTotalMonth: 'Monatssumme',
    labelRemaining: 'Verbleibend',
    labelFree: 'FREI',
    labelDebtInfinite: 'UNENDLICHE SCHULDEN',
    labelInvalidInput: 'Gesamtsaldo und Mindestzahlung angeben',
    labelEmptyStateTitle: 'Plan starten',
    labelEmptyStateDescription: 'Ihre Schulden sind nicht für immer. Fügen Sie Ihre Schulden hinzu.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
};
