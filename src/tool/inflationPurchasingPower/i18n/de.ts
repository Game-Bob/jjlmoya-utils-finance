import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationPurchasingPowerUI } from '../ui';

const title = 'Rechner für Inflation und Kaufkraft im Zeitverlauf';
const description = 'Zeigt, wie eine jährliche Inflationsannahme den benötigten Betrag für dieselbe Kaufkraft und den realen Wert von Bargeld verändert.';
const ui: InflationPurchasingPowerUI = {
  amountLabel: 'Startbetrag', amountHelp: 'Beliebige Waehrung verwenden und beibehalten',
  inflationLabel: 'Jaehrliche Inflationsrate (%)', inflationHelp: 'Eine Szenarioannahme, keine Prognose',
  yearsLabel: 'Zeitraum (Jahre)', yearsHelp: 'Von 1 bis 80 Jahre waehlen',
  cashFlowLabel: 'Jaehrlicher Cashflow', cashFlowHelp: 'Wird jedes Jahr zum Guthaben addiert oder davon abgezogen',
  cashFlowModeLabel: 'Cashflow-Szenario', noCashFlowOption: 'Kein regelmaessiger Cashflow', contributionOption: 'Jedes Jahr einzahlen', withdrawalOption: 'Jedes Jahr entnehmen',
  costEquivalentLabel: 'Kostenwert am Ende', realValueLabel: 'Endwert in heutigem Geld', nominalBalanceLabel: 'Nominales Endguthaben', purchasingPowerLossLabel: 'Verlorene Kaufkraft',
  todayLabel: 'Heute', endLabel: 'Ende des Zeitraums', costLineLabel: 'Kosten fuer denselben Warenkorb', realLineLabel: 'Unveraenderte Kaufkraft des Bargelds', balanceLineLabel: 'Szenarioguthaben in heutigem Geld',
  chartDescription: 'Inflationsverlauf mit steigenden Kosten, sinkender Kaufkraft und Szenarioguthaben', chartNote: 'Jede Linie wird am Startbetrag gemessen', milestoneTitle: 'Meilensteine in derselben Waehrung',
  yearHeader: 'Jahr', costHeader: 'Kostenwert', realHeader: 'Unveraendertes Bargeld', balanceHeader: 'Reales Guthaben', methodTitle: 'So funktioniert der Zeitverlauf',
  methodText: 'Der Kostenwert ist der Startbetrag multipliziert mit (1 + jaehrliche Inflationsrate) hoch der Jahreszahl. Der Wert unveraenderten Bargelds ist der Startbetrag geteilt durch denselben Faktor. Einzahlungen werden am Jahresende addiert, Entnahmen abgezogen; das Guthaben endet bei null.',
  limitationText: 'Dies ist ein transparentes Szenariomodell, keine historische CPI-Abfrage, Renditeprognose oder persoenliche Finanzberatung. Dein Warenkorb kann von einem veroeffentlichten Verbraucherpreisindex abweichen, und die tatsaechliche Inflation kann sich jaehrlich aendern.',
  emptyMessage: 'Gib einen positiven Betrag, eine Rate ueber -100 %, eine ganze Jahreszahl von 1 bis 80 und einen nicht negativen Cashflow ein.', contributionSummary: 'Die gestrichelte Linie zeigt den heutigen Wert des Guthabens nach den regelmaessigen Einzahlungen ohne Anlagerendite.', withdrawalSummary: 'Die gestrichelte Linie zeigt den heutigen Wert des Guthabens nach den regelmaessigen Entnahmen ohne Anlagerendite.', noCashFlowSummary: 'Die durchgezogenen Linien zeigen nur die Inflation: eine die kuenftigen Kosten desselben Warenkorbs, die andere die Kaufkraft unveraenderten Bargelds.', depletionWarning: 'Das Entnahmeszenario erreicht im Jahr {year} null; danach bleibt es bei null.',
  scenarioNote: 'Nur ein Szenario', currencyHint: 'Dieselbe Waehrung wie der Startbetrag', yearsSuffix: 'Jahre', amountSuffix: 'in derselben Waehrung wie dein Startbetrag',
};
const faq = [
  { question: 'Wie senkt Inflation die Kaufkraft?', answer: 'Wenn das allgemeine Preisniveau steigt, kauft derselbe Betrag weniger Waren und Dienstleistungen. Der Rechner zeigt diesen Effekt, indem er unveraendertes Bargeld durch den kumulierten Inflationsfaktor teilt.' },
  { question: 'Was ist der Unterschied zwischen Kostenwert und Realwert?', answer: 'Der Kostenwert ist der kuenftige Betrag fuer denselben Warenkorb. Der Realwert zeigt, was der unveraenderte Startbetrag am Ende in heutigem Geld kaufen kann.' },
  { question: 'Was enthalten Einzahlungs- und Entnahmeszenarien?', answer: 'Der Cashflow wird am Ende jedes Jahres addiert oder abgezogen. Renditen, Steuern, Gebuehren und Zinsen sind nicht enthalten; Entnahmen koennen das Guthaben nicht unter null senken.' },
  { question: 'Ist die Inflationsrate eine Vorhersage?', answer: 'Nein. Sie ist eine Annahme zur Sensitivitaetsanalyse. Die tatsaechliche Inflation kann abweichen, ebenso wie dein persoenlicher Warenkorb.' },
];
const howTo = [
  { name: 'Startbetrag eingeben', text: 'Verwende den Betrag, dessen kuenftige Kaufkraft du untersuchen willst, und bleibe bei einer Waehrung.' },
  { name: 'Inflationsszenario festlegen', text: 'Gib eine jaehrliche Rate und einen ganzen Zeitraum ein. Vergleiche mehrere Raten, statt dich auf eine Annahme zu verlassen.' },
  { name: 'Optionalen Cashflow hinzufuegen', text: 'Waehle Einzahlen oder Entnehmen und gib den wiederkehrenden Betrag ein. Ohne regelmaessigen Cashflow bleibt nur der Inflationseffekt.' },
  { name: 'Kurven und Meilensteine lesen', text: 'Vergleiche Kostenwert und Endwert in heutigem Geld. Die Tabelle zeigt, wann die Luecke deutlich wird.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'de' };
const seo = [
  { type: 'title' as const, text: 'Inflationsverlauf fuer eine bessere Kaufkraftplanung', level: 2 },
  { type: 'paragraph' as const, html: '<p>Inflation veraendert das Preisniveau. Ein unveraenderter Geldbetrag kann deshalb spaeter weniger kaufen. Dieser Rechner trennt die benoetigten Kosten fuer denselben Warenkorb von der Kaufkraft, die Bargeld behaelt.</p>' },
  { type: 'paragraph' as const, html: '<p>Gib Startbetrag, jaehrliche Inflationsannahme und Zeitraum ein. Die Rate wird jedes Jahr kumuliert. Die Ergebnisse bleiben in derselben Waehrung und behaupten nicht, den kuenftigen Preisverlauf zu kennen.</p>' },
  { type: 'title' as const, text: 'Die zwei wichtigsten Werte', level: 3 },
  { type: 'table' as const, headers: ['Wert', 'Formel', 'Frage'], rows: [['Kostenwert', 'Startbetrag x (1 + Inflationsrate)^Jahre', 'Wie viel kostet derselbe Warenkorb am Ende?'], ['Kaufkraft von Bargeld', 'Startbetrag / (1 + Inflationsrate)^Jahre', 'Was kann der alte Betrag in heutigem Geld kaufen?'], ['Verlorene Kaufkraft', '(1 - 1 / Preisfaktor) x 100', 'Welcher Anteil der Kaufkraft fehlt?']] },
  { type: 'paragraph' as const, html: '<p>Bei 3 % Inflation werden aus 1.000 nach zehn Jahren ungefaehr 1.344 Kostenwert. Bleibt der Betrag als Bargeld unveraendert, entspricht seine Kaufkraft dann etwa 744 in heutigem Geld.</p>' },
  { type: 'title' as const, text: 'Warum die Aufzinsung zaehlt', level: 3 },
  { type: 'paragraph' as const, html: '<p>Jedes Jahrespreisniveau bildet die Basis fuer das naechste. Zehn Jahre mit 3 % sind daher nicht einfach 30 %. Der Faktor ist 1,03 hoch zehn, also ungefaehr 1,344. Kleine Ratenunterschiede werden ueber lange Zeitraeume sichtbar.</p>' },
  { type: 'list' as const, items: ['Vergleiche niedrige, mittlere und hohe Raten.', 'Nutze die Meilensteintabelle fuer wichtige Ausgaben.', 'Vergleiche den Kostenwert mit Sparziel, Einkommen oder Rente.', 'Notiere Annahme und Datum und ersetze sie bei neuen Erkenntnissen.'] },
  { type: 'title' as const, text: 'Einzahlungen und Entnahmen', level: 3 },
  { type: 'paragraph' as const, html: '<p>Eine Einzahlung wird am Jahresende zum Nominalguthaben addiert. Eine Entnahme wird dort abgezogen; wenn sie das Guthaben aufbraucht, bleibt es bei null. So bleibt der Inflationseffekt sichtbar.</p>' },
  { type: 'paragraph' as const, html: '<p>Die gestrichelte Guthabenlinie wird mit demselben Faktor in heutiges Geld umgerechnet. Sie ist keine Anlageprojektion und enthält weder Zinsen noch Markttrend, Steuer, Gebuehr oder Wachstum der Einzahlung.</p>' },
  { type: 'tip' as const, title: 'Nutze eine Bandbreite statt eines Versprechens', html: '<p>Ein Verbraucherpreisindex beschreibt einen Durchschnittswarenkorb. Deine Miete, Energie, Lebensmittel und Gesundheit koennen sich anders entwickeln. Teste mehrere Raten.</p>' },
  { type: 'title' as const, text: 'Was der Zeitverlauf nicht sagt', level: 3 },
  { type: 'paragraph' as const, html: '<p>Das Tool ruft keine historischen CPI-Daten ab, prognostiziert keine Inflation und empfiehlt keine Anlage. Veraenderliche Jahresraten, Renditen, Kreditzinsen und unregelmaessige Cashflows sind nicht modelliert.</p>' },
  { type: 'paragraph' as const, html: '<p>Bei wichtigen Entscheidungen vergleiche das Ergebnis mit einem passenden Verbraucherpreisindex, deinen Ausgabenaufzeichnungen und den Vertragsbedingungen. Ein mathematisch konsistentes Ergebnis muss deinen Haushalt nicht genau beschreiben.</p>' },
];
export const content: ToolLocaleContent<InflationPurchasingPowerUI> = { slug: 'inflation-kaufkraft-zeitstrahl-rechner', title, description, ui, faq, bibliography, howTo, schemas: [faqSchema, howToSchema, appSchema], seo };
