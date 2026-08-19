import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'peseten-in-euro-umrechner';
const title = 'Peseten in Euro Rechner: Wert alter Peseten 2026';
const description = 'Rechnen Sie spanische Peseten mit dem festen Kurs von 166,386 Peseten pro Euro um und vergleichen Sie die Kaufkraft bis 2026 mit dem spanischen Verbraucherpreisindex.';

const faq = [
  { question: 'Wie viel sind 1.000 Peseten in Euro?', answer: '1.000 Peseten entsprechen beim festen Umrechnungskurs 6,01 Euro. Die separate CPI-Berechnung zeigt zusätzlich, welche Kaufkraft dieser Betrag im gewählten Jahr hatte.' },
  { question: 'Wie viel sind eine Million Peseten in Euro?', answer: 'Eine Million Peseten entsprechen 6.010,12 Euro beim festen Kurs. Die Kaufkraftschätzung für 2026 hängt vom Jahr ab, in dem der Betrag verwendet wurde.' },
  { question: 'Wie rechnet man Peseten in Euro um?', answer: 'Teilen Sie den Pesetenbetrag durch 166,386. Zum Beispiel sind 100 Peseten 0,60 Euro und 10.000 Peseten 60,10 Euro.' },
  { question: 'Was wären alte Peseten im Jahr 2026 wert?', answer: 'Der Rechner zeigt den festen Eurobetrag und zusätzlich eine Schätzung der durchschnittlichen Kaufkraft in 2026 anhand des spanischen Verbraucherpreisindex.' },
  { question: 'Berechnet der Rechner den Sammlerwert von Münzen oder Scheinen?', answer: 'Nein. Er berechnet Währungsumrechnung und durchschnittliche Kaufkraft. Seltene Münzen und Banknoten können je nach Zustand, Seltenheit und Nachfrage einen anderen Marktwert haben.' },
  { question: 'Welche Jahre verwendet der Peseten Rechner?', answer: 'Als Ursprungsjahr können Sie 1980 bis 2026 wählen. Das Bezugsjahr 2026 basiert auf den neuesten verfügbaren CPI-Daten und ist noch kein vollständiger Jahresdurchschnitt.' },
  { question: 'Ist die Kaufkraftschätzung ein genauer Preis?', answer: 'Nein. Sie vergleicht die durchschnittliche Kaufkraft nach dem CPI und ist kein exakter Preis für Wohnen, Löhne, Lebensmittel, Energie oder einen bestimmten Kauf.' },
];

const howTo = [
  { name: 'Betrag in Peseten eingeben', text: 'Geben Sie den Betrag von einer Quittung, einem Schein, einer Münze oder einem historischen Dokument ein.' },
  { name: 'Jahr auswählen', text: 'Wählen Sie das Jahrzehnt und anschließend das Jahr, in dem der Betrag verwendet wurde.' },
  { name: 'Festen Eurobetrag prüfen', text: 'Lesen Sie den nominalen Eurobetrag ab, der durch Teilen durch 166,386 entsteht.' },
  { name: 'Kaufkraft vergleichen', text: 'Vergleichen Sie den festen Betrag mit der geschätzten durchschnittlichen Kaufkraft für 2026.' },
];

const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' } as WithContext<SoftwareApplication>,
];

export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: {
    labelAmount: 'Historischer Betrag', labelAmountHint: 'Startpunkt wählen', labelOriginYear: 'Ursprungsjahr', labelOriginYearHint: 'Jährlicher CPI-Durchschnitt, sofern verfügbar', labelReferenceYear: 'Bezugsjahr 2026 bis heute', labelNominalEuros: 'Feste Umrechnung', labelTodayValue: 'Geschätzte Kaufkraft', labelPurchasingPowerChange: 'Veränderung der Kaufkraft', labelNominalDifference: 'Unterschied zur Umrechnung', labelConversionRate: 'Peseten pro Euro', labelCpiMethod: 'CPI-Multiplikator', labelPreset100: '100 Pta', labelPreset1000: '1.000 Pta', labelPreset10000: '10.000 Pta', labelPreset100000: '100.000 Pta', labelPesetas: 'Peseten', labelEuro: 'Euro', labelFrom: 'Von', labelTo: 'Bis', labelOpenYears: 'Ursprungsjahre öffnen', labelCloseYears: 'Ursprungsjahre schließen', labelDecade: 'Jahrzehnt wählen', labelCoin: 'Münze', labelBanknote: 'Banknote', labelCashPieces: 'Geldstücke', labelState: 'Wertentwicklung', labelStatePositive: 'gestiegen', labelStateNeutral: 'unverändert', labelStateNegative: 'gesunken', labelReset: 'Beispiel zurücksetzen', currencyLocale: 'de-DE',
  },
  seo: [
    { type: 'title', text: 'Peseten in Euro: Die Antwort hängt von der Frage ab', level: 2 },
    { type: 'paragraph', html: 'Wenn Sie einen alten Preis, Lohn, Beleg, eine Münze oder Banknote in spanischen Peseten haben, liefert dieser Rechner zwei Antworten. Er zeigt zuerst die feste Umrechnung in Euro und danach die geschätzte Kaufkraft in 2026 nach der spanischen Preisentwicklung.' },
    { type: 'title', text: 'Häufige Umrechnungen von Peseten in Euro', level: 2 },
    { type: 'paragraph', html: 'Der feste Kurs beträgt immer 166,386 Peseten für 1 Euro. Das Jahr ändert diesen nominalen Kurs nicht.' },
    { type: 'table', headers: ['Alter Betrag', 'Feste Umrechnung'], rows: [['1 Pesete', '0,01 Euro'], ['25 Peseten', '0,15 Euro'], ['100 Peseten', '0,60 Euro'], ['500 Peseten', '3,01 Euro'], ['1.000 Peseten', '6,01 Euro'], ['2.000 Peseten', '12,02 Euro'], ['5.000 Peseten', '30,05 Euro'], ['10.000 Peseten', '60,10 Euro'], ['1 Million Peseten', '6.010,12 Euro']] },
    { type: 'title', text: 'Was waren Peseten im Jahr 2026 wert?', level: 2 },
    { type: 'paragraph', html: 'Die CPI-Schätzung beantwortet eine andere Frage als die Euro-Umrechnung. Sie schätzt, wie viele Euro im Bezugsjahr für einen ähnlichen durchschnittlichen Warenkorb nötig wären wie für den gewählten Pesetenbetrag im Ursprungsjahr. 2026 verwendet die neuesten verfügbaren Daten bis heute und ist noch kein vollständiger Jahresdurchschnitt.' },
    { type: 'table', headers: ['Ergebnis', 'Bedeutung'], rows: [['Feste Umrechnung', 'Der nominale Eurobetrag nach dem offiziellen Kurs.'], ['CPI-bereinigter Wert', 'Eine Schätzung der durchschnittlichen Kaufkraft in 2026.'], ['Unterschied', 'Die Lücke zwischen Umrechnung und CPI-Schätzung.']] },
    { type: 'title', text: 'So berechnen Sie einen alten Pesetenbetrag', level: 2 },
    { type: 'list', items: ['Betrag von Beleg, Schein, Münze oder Dokument eingeben.', 'Jahr auswählen, in dem der Betrag verwendet wurde.', 'Feste Umrechnung für den direkten Eurovergleich verwenden.', 'CPI-Wert für den historischen Kaufkraftvergleich verwenden.', 'Den Unterschied als Inflationserklärung verstehen, nicht als persönliche Preisprognose.'] },
    { type: 'title', text: 'Münzen und Banknoten haben nicht automatisch diesen Sammlerwert', level: 2 },
    { type: 'paragraph', html: 'Dies ist ein Rechner für Währung und Inflation, kein Preisführer für Sammler. Eine seltene Pesetenmünze oder Banknote kann abhängig von Jahrgang, Zustand, Seltenheit und Nachfrage einen eigenen Marktwert haben.' },
    { type: 'tip', title: 'Das Jahr ändert die Kaufkraft, nicht den Wechselkurs', html: 'Der feste Kurs bleibt bei 166,386 Peseten pro Euro. Nur der CPI-Vergleich ändert sich mit dem Ursprungsjahr und beschreibt einen durchschnittlichen Warenkorb.' },
  ],
  faq, bibliography, howTo, schemas,
};
