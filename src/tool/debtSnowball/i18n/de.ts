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
];

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
  ],
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
