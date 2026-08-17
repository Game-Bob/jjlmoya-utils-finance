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

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
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
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },
  { type: 'paragraph', html: "Nutzen Sie das Ergebnis zur Planung und zum Szenarienvergleich; es ersetzt keine offizielle Berechnung oder Fachberatung." },
  { type: 'paragraph', html: "Deuten Sie das Ergebnis gemeinsam mit den angezeigten Annahmen, bevor Sie es verwenden." },
  { type: 'paragraph', html: "Prüfen Sie Eingaben, Einheiten, Rundung, Datum und Recht, weil jedes Element die Schätzung verändern kann." },],
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
