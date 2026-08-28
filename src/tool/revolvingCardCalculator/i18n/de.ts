import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolverkarten-rechner';
const title = 'Revolverkarten und Wucherrechner';
const description = 'Berechnen Sie Tilgungszeit und Zinskosten Ihrer Revolving-Kreditkarte. Prüfen Sie die Effektivzinsen auf Wucher-Grenzwerte.';

const faqData = [{ question: 'Was ist eine Revolving-Kreditkarte?', answer: 'Eine Revolving-Kreditkarte ermöglicht die flexible Rückzahlung in monatlichen Teilbeträgen.' },
  { question: "Was sollte ich vor der Verwendung prüfen?", answer: "Prüfen Sie Eingaben, Einheiten, Annahmen und Grenzen; das Ergebnis ist eine Orientierung, keine offizielle Entscheidung." },
  { question: "Was sollte ich vor der Verwendung prüfen?", answer: "Prüfen Sie Eingaben, Einheiten, Annahmen und Grenzen; das Ergebnis ist eine Orientierung, keine offizielle Entscheidung." },
  { question: "Was sollte ich vor der Verwendung prüfen?", answer: "Prüfen Sie Eingaben, Einheiten, Annahmen und Grenzen; das Ergebnis ist eine Orientierung, keine offizielle Entscheidung." },];
const howToData = [{ name: 'Markt wählen', text: 'Wählen Sie Ihr Land oder einen benutzerdefinierten Grenzwert.' },
  { name: "Annahmen prüfen", text: "Kontrollieren Sie Eingaben, Einheiten und Grenzen des Rechners, bevor Sie das Ergebnis auslegen." },
  { name: "Annahmen prüfen", text: "Kontrollieren Sie Eingaben, Einheiten und Grenzen des Rechners, bevor Sie das Ergebnis auslegen." },
  { name: "Annahmen prüfen", text: "Kontrollieren Sie Eingaben, Einheiten und Grenzen des Rechners, bevor Sie das Ergebnis auslegen." },];

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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: 'Funktionsweise von Revolving-Kreditkarten' }, { type: 'paragraph', html: 'Eine Revolving-Kreditkarte ermöglicht die flexible Rückzahlung.' },
  { type: 'paragraph', html: "Eine <strong>Revolving-Kreditkarte</strong> erlaubt flexible Teilzahlungen, kann aber bei hohen effektiven Jahreszinsen zu einer langwierigen Schuld werden. Der offene Betrag wird in den nächsten Abrechnungszeitraum übertragen und weiter verzinst." },
  { type: 'paragraph', html: "Bei einem Ratenkredit ist die Laufzeit meist von Anfang an geplant. Bei einer Revolving-Karte hängt sie dagegen stark von der Monatsrate ab: Eine kleine Rate kann den Saldo über Jahre bestehen lassen." },
  { type: 'paragraph', html: "Der effektive Jahreszins ist wichtiger als die Höhe der beworbenen Monatsrate. Prüfen Sie auch Gebühren und Bedingungen, bevor Sie verschiedene Kartenangebote vergleichen." },
  { type: 'paragraph', html: "Wenn eine Rate als Prozentsatz des offenen Saldos festgelegt wird, sinkt auch der absolute Zahlungsbetrag mit dem Saldo. Dadurch wird in späteren Monaten oft weniger Kapital getilgt." },
  { type: 'paragraph', html: "Zuerst werden die laufenden Monatszinsen bedient; nur der Rest reduziert die Schuld. Liegt die Rate unter den Zinsen, wächst der Saldo statt zu sinken und der Rechner kann eine unendliche Tilgungsdauer anzeigen." },
  { type: 'paragraph', html: "Der Simulator stellt deshalb Zinsen, Tilgung und Endsaldo für jeden Monat gegenüber. So erkennen Sie, ob Ihre Zahlung wirklich Kapital abbaut." },
  { type: 'paragraph', html: "Wählen Sie zuerst Spanien, USA, Großbritannien oder einen benutzerdefinierten Referenzmarkt. Geben Sie danach offenen Saldo, Kreditrahmen und effektiven Jahreszins ein." },
  { type: 'paragraph', html: "Vergleichen Sie eine feste Monatsrate mit einer prozentualen Rate. Bei der prozentualen Variante ist ein absoluter Mindestbetrag wichtig, damit die Zahlung nicht zu klein wird, sobald der Saldo fällt." },
  { type: 'paragraph', html: "Lesen Sie Gesamtzinsen, Gesamtrückzahlung und Monate bis zur Tilgung gemeinsam. Die kürzeste Laufzeit und die geringsten Zinsen sind nicht immer dieselbe Einstellung." },
  { type: 'paragraph', html: "Der Wucherstatus vergleicht den eingegebenen Zinssatz mit dem Schwellenwert des gewählten Marktes. Der Hinweis ist eine Rechenhilfe und keine verbindliche rechtliche Bewertung eines Vertrags." },
  { type: 'paragraph', html: "In Spanien kann die rechtliche Beurteilung einer Revolving-Karte vom Vergleich mit dem damaligen durchschnittlichen Marktzinssatz abhängen. In anderen Ländern gelten andere Regeln, Obergrenzen oder Gerichtsentscheidungen." },
  { type: 'paragraph', html: "Ein Warnhinweis beweist keinen Rechtsverstoß, und ein unauffälliger Status schließt eine Prüfung nicht aus. Für einen konkreten Vertrag sollten Sie lokale Verbraucher- oder Rechtsberatung einholen." },
  { type: 'paragraph', html: "Die Simulation verwendet den eingegebenen Saldo, den effektiven Jahreszins und regelmäßige monatliche Zahlungen. Sie geht davon aus, dass keine neuen Käufe, Verzugsgebühren oder Zinsänderungen hinzukommen." },
  { type: 'paragraph', html: "Tatsächliche Abrechnungen können tägliche Zinsberechnung, Gebühren, Versicherungen, Mindestbeträge oder unterschiedliche Zahlungsdaten enthalten. Diese Details können Laufzeit und Gesamtkosten verändern." },
  { type: 'paragraph', html: "Verwenden Sie das Ergebnis, um Fragen an die Bank zu formulieren und Szenarien zu vergleichen. Es ersetzt weder den Kontoauszug noch die Prüfung der Vertragsbedingungen." },
  { type: 'paragraph', html: "Verwenden Sie das Ergebnis, um Fragen an die Bank zu formulieren und Szenarien zu vergleichen. Es ersetzt weder den Kontoauszug noch die Prüfung der Vertragsbedingungen." },
  { type: 'paragraph', html: "Vergleichen Sie die Laufzeit, die Gesamtzinsen und den Endsaldo gemeinsam. Eine niedrigere Monatsrate kann kurzfristig entlasten, erhöht aber häufig die Gesamtkosten." },
  { type: 'paragraph', html: "Aktualisieren Sie die Eingaben nach jeder Änderung von Saldo, Zinssatz, Gebühren oder Zahlungsverhalten und bewahren Sie die verwendeten Vertragsdaten auf." },],
  ui: {
    title: 'Revolving Kreditkarten & Wucherrechner',
    balanceLabel: 'Offener Saldo',
    creditLimitLabel: 'Kreditrahmen',
    aprLabel: 'Effektiver Jahreszins (APR / TAE)',
    paymentTypeLabel: 'Zahlungsart',
    paymentTypeFixed: 'Feste monatliche Rate',
    paymentTypePercentage: 'Prozentualer Saldo-Anteil',
    paymentValueLabel: 'Ratenhöhe (Betrag oder %)',
    minPaymentValueLabel: 'Mindestbetrag',
    currencyLabel: 'Währung',
    marketLabel: 'Regulierungsmarkt / Land',
    marketES: 'Spanien (Banco de España + 6% Regel)',
    marketUS: 'USA (CFPB-Referenz)',
    marketUK: 'Großbritannien (FCA)',
    marketEU: 'Europäische Union (EZB-Referenz)',
    marketJP: 'Japan (FSA)',
    marketKR: 'Südkorea (FSC)',
    marketCN: 'China (PBOC)',
    marketBR: 'Brasilien (Banco Central)',
    marketMX: 'Mexiko (Banco de México)',
    marketPL: 'Polen (KNF)',
    marketID: 'Indonesien (OJK)',
    marketTR: 'Türkei (BRSA)',
    marketRU: 'Russland (Zentralbank)',
    marketSE: 'Schweden (Finansinspektionen)',
    marketAU: 'Australien (ASIC)',
    marketCA: 'Kanada (FCAC)',
    marketCustom: 'Benutzerdefinierter Grenzwert',
    customThresholdLabel: 'Benutzerdefinierter Wuchergrenzwert (APR %)',

    resultsTitle: 'Tilgungsergebnisse',
    totalInterestLabel: 'Gesamtzinsen',
    totalPaidLabel: 'Gesamtrückzahlung',
    monthsToPayLabel: 'Tilgungsdauer',
    infiniteDebtWarning: 'Ewige Schulden! Die Monatsrate deckt nicht die monatlichen Zinsen.',
    payoffYearsLabel: 'Zeitplan der Tilgung',

    usuryTitle: 'Wucher- & Konformitätsanalyse',
    usurySafeStatus: 'Marktüblich (Niedriges Risiko)',
    usuryWarningStatus: 'Hoher Zinssatz (Mittleres Risiko)',
    usuryUsuriousStatus: 'Potenzieller Wucher (Hohes Risiko)',
    usuryReferenceLabel: 'Durchschnittlicher Markt-APR',
    usuryThresholdLabel: 'Wucher-Warnschwelle',

    tableTitle: 'Monatlicher Tilgungsplan',
    tableHeaderMonth: 'Monat',
    tableHeaderInitial: 'Anfangssaldo',
    tableHeaderInterest: 'Zinsen',
    tableHeaderPrincipal: 'Tilgung',
    tableHeaderPayment: 'Rate',
    tableHeaderFinal: 'Endsaldo',

    copyTooltip: 'Bericht in Zwischenablage kopieren',
    copiedLabel: 'Bericht kopiert!',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
