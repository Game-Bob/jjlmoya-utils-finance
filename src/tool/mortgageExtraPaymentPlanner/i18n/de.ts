import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageExtraPaymentPlannerUI } from '../ui';

const slug = 'hypotheken-amortisationsrechner-sondertilgung';
const title = 'Hypothekenrechner mit Sondertilgungen';
const description = 'Plane eine Hypothek mit festem Zinssatz und regelmäßigen oder einmaligen Sondertilgungen, vergleiche die gesparten Zinsen und zeige alle Beträge in einer Währung an.';

const ui: MortgageExtraPaymentPlannerUI = {
  currencyLabel: 'Währung', currencyHelp: 'Einmal auswählen. Jeder Betrag im Plan verwendet diese Währung.',
  principalLabel: 'Anfangsschuld', principalHelp: 'Noch geschuldeter Betrag zu Beginn dieses Plans',
  annualRateLabel: 'Jährlicher Zinssatz', annualRateHelp: 'Nominaler fester Zinssatz für jede Zahlungsperiode',
  termLabel: 'Verbleibende Laufzeit in Jahren', termHelp: 'Geplante Laufzeit ohne Sondertilgungen',
  frequencyLabel: 'Zahlungsrhythmus', recurringExtraLabel: 'Regelmäßige Sondertilgung', recurringExtraHelp: 'Zusätzlicher Tilgungsbetrag pro Periode',
  oneOffExtraLabel: 'Einmalige Sondertilgung', oneOffExtraHelp: 'Eine einzelne Tilgung in der unten gewählten Periode',
  oneOffPeriodLabel: 'Periode der Einmalzahlung', oneOffPeriodHelp: '1 bedeutet die erste Zahlungsperiode',
  startDateLabel: 'Erster Zahlungstermin', startDateHelp: 'Wird zur Schätzung des Rückzahlungstermins verwendet',
  extraSectionTitle: 'Sondertilgungsplan', outputTitle: 'Schuldenverlauf', regularPaymentLabel: 'Regelmäßige Zahlung ohne Extras',
  interestSavedLabel: 'Gesparte Zinsen', periodsSavedLabel: 'Perioden gespart', payoffDateLabel: 'Geschätzte Rückzahlung',
  totalInterestLabel: 'Gezahlte Zinsen mit diesem Plan', totalExtraLabel: 'Zusätzliche Tilgung', baselineLabel: 'Ursprünglicher Plan', planLabel: 'Mit deinen Sondertilgungen',
  balanceSceneLabel: 'Ursprüngliche Restschuld im Vergleich zur Restschuld nach Sondertilgungen', balanceSceneHelp: 'Die gestrichelte Linie zeigt den ursprünglichen Plan. Die kupferfarbene Linie zeigt deinen Plan. Grüne Markierungen zeigen zusätzliche Tilgung.',
  annualScheduleTitle: 'Jährlicher Zahlungsplan', yearLabel: 'Jahr', paymentLabel: 'Gesamtzahlung', interestLabel: 'Zinsen', principalPaidLabel: 'Planmäßige Tilgung', extraPaidLabel: 'Zusätzliche Tilgung', endingBalanceLabel: 'Restschuld',
  formulaTitle: 'Modell und Grenzen', formulaText: 'Der Rechner verwendet ein Amortisationsmodell mit festem Zinssatz. In jeder Periode werden Zinsen auf die Eröffnungsschuld berechnet, die reguläre Zahlung auf Zinsen und Tilgung verteilt und danach regelmäßige sowie einmalige Sondertilgungen angewendet. Der jährliche Zinssatz wird durch die Zahl der Perioden geteilt. Die letzte Zahlung wird reduziert, wenn die Restschuld kleiner als die geplante Zahlung ist. Beim Wechsel der Währung werden die Geldbeträge mit einem internen Planungsfaktor umgerechnet und dasselbe Szenario neu berechnet.',
  riskNote: 'Dies ist eine Schätzung, keine Abrechnung des Kreditgebers. Der Währungswähler verwendet interne Planungsfaktoren, keine Live-Wechselkurse. Variable Zinsen, Gebühren, Versicherungen, Steuern, Zahlungspausen, Tageszinsen, Entschädigungen und Vertragsregeln zur Sondertilgung sind nicht enthalten.',
  emptyMessage: 'Gib eine gültige Schuld, einen Zinssatz, eine Laufzeit und ein Datum ein, um den Plan zu sehen.', invalidInputMessage: 'Prüfe die Eingaben, um den Plan zu sehen',
  currencyOptions: { AUD: 'A$ AUD · Australischer Dollar', BRL: 'R$ BRL · Brasilianischer Real', CAD: 'C$ CAD · Kanadischer Dollar', CHF: 'CHF · Schweizer Franken', CNY: '¥ CNY · Chinesischer Yuan', CZK: 'Kč CZK · Tschechische Krone', DKK: 'kr DKK · Dänische Krone', EUR: '€ EUR · Euro', GBP: '£ GBP · Britisches Pfund', IDR: 'Rp IDR · Indonesische Rupiah', INR: '₹ INR · Indische Rupie', JPY: '¥ JPY · Japanischer Yen', KRW: '₩ KRW · Südkoreanischer Won', MXN: 'MX$ MXN · Mexikanischer Peso', NOK: 'kr NOK · Norwegische Krone', PLN: 'zł PLN · Polnischer Zloty', RUB: '₽ RUB · Russischer Rubel', SEK: 'kr SEK · Schwedische Krone', TRY: '₺ TRY · Türkische Lira', USD: '$ USD · US-Dollar' },
  currencySymbols: { AUD: 'A$', BRL: 'R$', CAD: 'C$', CHF: 'CHF', CNY: '¥', CZK: 'Kč', DKK: 'kr', EUR: '€', GBP: '£', IDR: 'Rp', INR: '₹', JPY: '¥', KRW: '₩', MXN: 'MX$', NOK: 'kr', PLN: 'zł', RUB: '₽', SEK: 'kr', TRY: '₺', USD: '$' },
  frequencyOptions: { monthly: 'Monatlich', biweekly: 'Alle zwei Wochen', weekly: 'Wöchentlich' },
};

const faq = [
  { question: 'Wie verändern zusätzliche Hypothekenzahlungen den Plan?', answer: 'Der Rechner lässt die reguläre Zahlung unverändert und wendet deine zusätzliche Tilgung nach jeder planmäßigen Zahlung an. Die Schuld kann dadurch früher auf null sinken und die Gesamtzinsen können fallen. Dein Kreditgeber kann Sondertilgungen anders behandeln, daher vergleiche das Ergebnis mit dem Vertrag.' },
  { question: 'Was passiert beim Wechsel der Währung?', answer: 'Der Rechner rechnet die Geldbeträge mit einem internen Planungsfaktor in die neue Währung um und berechnet dasselbe Szenario neu. Der Faktor ist kein Live-Kurs; nutze das Ergebnis zur Planung, nicht als aktuelle Wechselkursangabe.' },
  { question: 'Warum gibt es nur einen Währungswähler?', answer: 'Die ausgewählte Währung gilt für Schuld, Sondertilgungen, reguläre Zahlungen, Zinsen, Restschulden und die Jahrestabelle. Eine gemeinsame Einheit hält das Formular verständlich und verhindert vermischte Währungen.' },
  { question: 'Berechnet der Rechner meine echte Kreditrate?', answer: 'Er schätzt einen Amortisationsplan mit festem Zinssatz. Vertragsregeln, Zinstage, Gebühren, Versicherungen, Steuern, Zinsänderungen, Entschädigungen und die genaue Behandlung vorzeitiger Tilgung sind nicht bekannt. Für den vertraglichen Betrag zählen Abrechnung und Vertrag.' },
];

const howTo = [
  { name: 'Währung festlegen', text: 'Wähle die eine Währung, die du verwenden möchtest. Sie gilt für alle Geldbeträge und Ergebnisse.' },
  { name: 'Kredit beschreiben', text: 'Gib Anfangsschuld, nominalen Jahreszins, Restlaufzeit, ersten Zahlungstermin und Zahlungsrhythmus ein.' },
  { name: 'Sondertilgungen hinzufügen', text: 'Trage einen Betrag pro Periode ein und ergänze optional eine Einmalzahlung mit ihrer Periode.' },
  { name: 'Vergleich lesen', text: 'Vergleiche die ursprüngliche Restschuld mit deinem Plan und prüfe gesparte Zinsen, gesparte Perioden, Rückzahlungstermin und Jahrestabelle.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: ToolLocaleContent<MortgageExtraPaymentPlannerUI> = {
  slug, title, description, ui, faq, bibliography, howTo, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Plane, was Sondertilgungen an deiner Hypothek ändern', level: 2 },
    { type: 'paragraph', html: '<p>Ein Tilgungsplan trennt jede Zahlung in Zinsen und Tilgung. Wenn du zusätzliche Tilgung leistest und die reguläre Zahlung gleich bleibt, kann die Restschuld früher auf null sinken. Dieser Rechner macht den Unterschied zwischen ursprünglichem Verlauf und deinem Plan sichtbar.</p>' },
    { type: 'paragraph', html: '<p>Das Ergebnis ist eine Schätzung für ein Darlehen mit festem Zinssatz. Es berücksichtigt Schuld, nominalen Jahreszins, Zahlungsperioden und den nach jeder Zahlung sinkenden Saldo. Vertragsregeln, Rundungen und Gebühren können beim Kreditgeber anders sein.</p>' },
    { type: 'title', text: 'So funktioniert die Amortisationsrechnung', level: 3 },
    { type: 'paragraph', html: '<p>In jeder Periode werden die Zinsen aus der Eröffnungsschuld berechnet. Der Jahreszins wird durch die Zahl der Perioden geteilt. Danach wird die reguläre Zahlung auf Zinsen und Tilgung verteilt; regelmäßige und einmalige Sondertilgungen senken die Restschuld zusätzlich.</p>' },
    { type: 'table', headers: ['Wert', 'Berechnung', 'Bedeutung'], rows: [['Periodischer Zins', 'Jahreszins / Perioden pro Jahr', 'Zins für eine Zahlungsperiode'], ['Reguläre Zahlung', 'Feste Zahlungsformel', 'Zahlung vor zusätzlicher Tilgung'], ['Periodenzins', 'Eröffnungsschuld x periodischer Zins', 'Vom Modell angenommener Zins'], ['Restschuld', 'Eröffnungsschuld - Tilgung - Extras', 'Im Plan noch geschuldeter Betrag']] },
    { type: 'title', text: 'Was Sondertilgungen tatsächlich ändern', level: 3 },
    { type: 'paragraph', html: '<p>Eine Sondertilgung senkt in diesem Modell direkt die Schuld. Künftige Zinsen werden deshalb auf einen kleineren Betrag berechnet. Sieh dir sowohl gesparte Zinsen als auch gesparte Perioden an: Der erste Wert beschreibt vermiedene Finanzierungskosten, der zweite den früheren Rückzahlungstermin.</p>' },
    { type: 'paragraph', html: '<p>Der Kreditgeber kann stattdessen die reguläre Rate senken, die Laufzeit beibehalten oder eine formelle Anfrage verlangen. Prüfe daher Grenzen, Mindestbeträge und mögliche Entschädigungen vor einer Zahlung.</p>' },
    { type: 'title', text: 'Währungen einfach und ohne Mischrechnung verwenden', level: 3 },
    { type: 'paragraph', html: '<p>Wähle eine Währung für den Haushaltsplan oder die Kreditabrechnung. Sie gilt für Schuld, Sondertilgungen, Zahlungen, Zinsen und Restschulden. Beim Wechsel werden die Geldbeträge intern umgerechnet, die Struktur des Szenarios bleibt gleich.</p>' },
    { type: 'list', items: ['Wähle die Währung deines Budgets oder der Kreditabrechnung.', 'Gib Schuld und jede Sondertilgung in der ausgewählten Einheit ein.', 'Behandle den Wechsel als neue Planungseinheit, nicht als Änderung des Kreditvertrags.', 'Prüfe den zulässigen Zahlungsrhythmus und die Regeln für vorzeitige Tilgung.', 'Nutze die Jahrestabelle, um die Wirkung einer Einmalzahlung zu erkennen.'] },
    { type: 'title', text: 'Ein einfaches Beispiel für die Ausgabe', level: 3 },
    { type: 'paragraph', html: '<p>Bei 250.000 EUR, 3,5 Prozent festem Jahreszins und 25 Jahren Restlaufzeit verändern 150 EUR monatliche Sondertilgung sowie 5.000 EUR in Periode 12 die ursprüngliche reguläre Zahlung in diesem Modell nicht. Sie senken aber die Restschuld und damit spätere Zinsen.</p>' },
    { type: 'paragraph', html: '<p>Wenn du zu USD wechselst, rechnet der Rechner die Beträge mit dem internen Planungsfaktor um und berechnet dasselbe Szenario neu. Das ist eine übersichtliche Planungshilfe, aber keine aktuelle Markt- oder Vertragsbewertung.</p>' },
    { type: 'title', text: 'Vor einer Entscheidung prüfen', level: 3 },
    { type: 'list', items: ['Frage, ob eine Sondertilgung Laufzeit oder Rate reduziert.', 'Prüfe jährliche Grenzen, Mindestbeträge und Entschädigungen.', 'Bestätige, ob der genannte Zins nominal, effektiv, fest oder variabel ist.', 'Vergleiche den Saldo mit einer aktuellen Abrechnung des Kreditgebers.', 'Notiere bei internationaler Planung den verwendeten Wechselkurs und das Datum.'] },
    { type: 'tip', title: 'Die Grafik ist ein Vergleich, kein Versprechen', html: '<p>Die gestrichelte Linie zeigt den ursprünglichen festen Plan ohne Extras. Die kupferfarbene Linie folgt deinen Eingaben. Gebühren, Versicherungen, Steuern, tägliche Zinsen, Wechselkursbewegungen und Vertragsregeln sind nicht enthalten.</p>' },
    { type: 'title', text: 'Grenzen dieses Hypothekenrechners', level: 3 },
    { type: 'paragraph', html: '<p>Das Werkzeug modelliert ein vollständig tilgendes Darlehen mit festem Zinssatz, regelmäßigen Zahlungen und optionaler zusätzlicher Tilgung. Es hilft bei Szenarien und Fragen an den Kreditgeber. Es beurteilt keine Tragbarkeit, erteilt keine Steuer- oder Rechtsberatung und ersetzt keine Abrechnung.</p>' },
  ],
};
