import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "spanien-brutto-netto-gehaltsrechner-arbeitgeberkosten";
const title = "Spanien Brutto Netto Gehaltsrechner & Arbeitgeberkosten 2026";
const description = "Berechnen Sie Nettogehalt, Einkommensteuer, Arbeitnehmerbeiträge und die Gesamtkosten des Arbeitgebers in Spanien nach den Regeln von 2026.";

const faq = [
  {
    "question": "Wie viel kostet ein Arbeitnehmer ein Unternehmen in Spanien?",
    "answer": "Das Unternehmen zahlt das Bruttogehalt zuzüglich seiner Sozialversicherungsbeiträge. Für eine unbefristete Bürostelle mit 30.000 € Jahresbrutto, 1,50 % Unfallprämie und den Sätzen von 2026 betragen die geschätzten Jahreskosten für den Arbeitgeber 39.645 € vor Boni, Zusatzleistungen oder Abfindungsrückstellungen."
  },
  {
    "question": "Wie berechne ich das Bruttogehalt zum Nettogehalt in Spanien?",
    "answer": "Gehen Sie vom Jahresbruttogehalt aus, ziehen Sie die Sozialversicherungsbeiträge des Arbeitnehmers ab und ziehen Sie den IRPF-Einbehalt ab. Geben Sie den IRPF-Prozentsatz aus dem Rechner der Steuerbehörde, einem Angebot oder einer Gehaltsabrechnung ein."
  },
  {
    "question": "Verändert die Wahl von 12 oder 14 Zahlungen das Jahresgehalt?",
    "answer": "Nein. Der Rechner behält den gleichen Bruttojahresbetrag bei und teilt die Jahresschätzungen durch 12 oder 14. Die Zahl pro Zahlung ist ein Durchschnitt."
  },
  {
    "question": "Welche Sozialversicherungssätze sind für 2026 enthalten?",
    "answer": "Die Schätzung umfasst allgemeine Rechnungslegung, Arbeitslosigkeit, Ausbildung, den MEI-Mechanismus und gegebenenfalls FOGASA sowie die gewählte Berufsgenossenschaftsprämie."
  },
  {
    "question": "Was passiert, wenn das Gehalt die Beitragsbemessungsgrenze überschreitet?",
    "answer": "Standardbeiträge sind auf die monatliche Höchstbemessungsgrenze 2026 von 5.101,20 € gedeckelt. Darüber hinaus gilt der progressive Solidaritätsbeitrag 2026."
  },
  {
    "question": "Ist dieser Rechner außerhalb Spaniens gültig?",
    "answer": "Nein. Er ist bewusst auf Spanien und das Allgemeine Sozialversicherungssystem 2026 für Vollzeitkräfte beschränkt."
  },
  {
    "question": "Werden Gehaltsinformationen an einen Server gesendet?",
    "answer": "Nein. Die Berechnungen laufen lokal in Ihrem Browser."
  }
];

const howTo = [
  {
    "name": "Bruttogehalt eingeben",
    "text": "Wählen Sie die jährliche oder monatliche Eingabe und geben Sie das Bruttogehalt ein."
  },
  {
    "name": "Spanische Lohnannahmen festlegen",
    "text": "Wählen Sie 12 oder 14 Zahlungen, unbefristeten oder befristeten Vertrag, IRPF-Einbehalt und Unfallprämie."
  },
  {
    "name": "Gehaltsorbit ablesen",
    "text": "Vergleichen Sie Nettokern, Arbeitnehmerabzüge und den Arbeitgeberbeitragshalo."
  },
  {
    "name": "Ergebniszeitraum umschalten",
    "text": "Zeigen Sie Jahressummen oder Durchschnittsbeträge pro Zahlung an."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "de",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Bruttogehalts-Signal",
    "labelGrossSalaryHint": "Gehaltsbetrag",
    "labelAnnual": "Jährlich",
    "labelMonthly": "Monatlich",
    "labelPaySchedule": "Zahlungsplan",
    "labelTwelvePayments": "12 Zahlungen",
    "labelFourteenPayments": "14 Zahlungen",
    "labelContract": "Vertragsart",
    "labelPermanent": "Unbefristet",
    "labelTemporary": "Befristet",
    "labelIrpfRate": "IRPF-Einbehalt (Einkommensteuer)",
    "labelIrpfHint": "Verwenden Sie den Satz des Finanzamts, Angebots oder Lohnzettel",
    "labelRiskRate": "Berufsgenossenschaftsprämie (Unfall u. Berufskrankheit)",
    "labelRiskHint": "Arbeitgebersatz für Arbeitsunfälle und Berufskrankheiten",
    "labelOfficePreset": "Büro 1,50 %",
    "labelTradePreset": "Außendienst / Vertrieb 2,00 %",
    "labelConstructionPreset": "Baugewerbe 6,70 %",
    "labelNetCore": "Nettogehaltskern",
    "labelEmployeeDeductions": "Arbeitnehmerabzüge",
    "labelDeductionsFormula": "IRPF plus Arbeitnehmer-Sozialversicherung",
    "labelEmployerHalo": "Arbeitgeberbeitragshalo",
    "labelEmployerCost": "Gesamte Arbeitgeberkosten",
    "labelAnnualView": "Jahresansicht",
    "labelPerPaymentView": "Durchschnitt pro Zahlung",
    "labelGross": "Bruttogehalt",
    "labelIrpf": "IRPF-Einbehalt",
    "labelEmployeeSocialSecurity": "Arbeitnehmer-Sozialversicherung",
    "labelContributionBase": "Monatliche Beitragsbemessungsgrenze",
    "labelCostMultiplier": "Kostenmultiplikator gegenüber Brutto",
    "labelWorkerKeeps": "Nettoanteil an den Gesamtkosten",
    "labelLeanGap": "Kompakter Kostenhalo",
    "labelTypicalGap": "Typischer Kostenhalo",
    "labelWideGap": "Erweiterter Kostenhalo",
    "labelModelScope": "Nur Spanien. Allgemeines System 2026, Vollzeitbeschäftigung und ordentliches Bargeldgehalt. Die Ergebnisse sind Schätzungen, keine Lohn- oder Steuerberatung.",
    "labelReset": "Beispiel zurücksetzen",
    "labelInvalid": "Geben Sie ein gültiges Vollzeit-Jahresgehalt ein und halten Sie IRPF- und Unfallquoten im zulässigen Bereich.",
    "labelMinimumSalary": "Das Modell beginnt beim Vollzeit-Mindestlohn 2026 von 17.094 € pro Jahr.",
    "labelPrivacy": "Lokal in Ihrem Browser berechnet"
},
  seo: [
    { type: 'title', text: "Vom Bruttogehalt zu den tatsächlichen Unternehmenskosten in Spanien", level: 2 },
    { type: 'paragraph', html: "Ein Gehaltsangebot hat drei verschiedene Werte: das Bruttogehalt im Vertrag, den Nettobetrag für die beschäftigte Person und die vollständigen Kosten des Unternehmens. Dieser Gehaltsrechner für Spanien hält diese Ebenen zusammen. Geben Sie einen Bruttobetrag ein, um IRPF-Einbehalt, Arbeitnehmerbeiträge, Arbeitgeberbeiträge und die geschätzten Gesamtkosten nach dem Allgemeinen System 2026 zu vergleichen." },
    { type: 'title', text: "Die Formel der Arbeitgeberkosten", level: 2 },
    { type: 'paragraph', html: "Die gesamten Arbeitgeberkosten entsprechen dem Jahresbruttogehalt zuzüglich der Sozialversicherungsbeiträge des Unternehmens. Das geschätzte Nettogehalt ergibt sich aus Bruttogehalt minus Arbeitnehmer-Sozialversicherung und dem eingegebenen IRPF-Einbehalt. Der IRPF-Satz bleibt bewusst ein eigenes Feld, weil persönliche und familiäre Umstände die tatsächliche Einbehaltung verändern können." },
    { type: 'table', headers: ['Ebene', 'Berechnung'], rows: [['Nettogehalt', 'Bruttogehalt minus Arbeitnehmer-Sozialversicherung und IRPF'], ['Arbeitnehmerabzüge', 'Arbeitnehmer-Sozialversicherung plus IRPF-Einbehalt'], ['Arbeitgeberbeiträge', 'Unternehmensbeiträge plus ausgewählte Berufsgenossenschaftsprämie'], ['Gesamtkosten', 'Bruttogehalt plus Arbeitgeberbeiträge']] },
    { type: 'title', text: "Enthaltene spanische Sozialversicherungssätze für 2026", level: 2 },
    { type: 'paragraph', html: "Für einen unbefristeten Vertrag berücksichtigt das Modell 4,70 % Arbeitnehmer- und 23,60 % Arbeitgeberanteil für allgemeine Kontingenzen, 1,55 % und 5,50 % für Arbeitslosigkeit, 0,10 % und 0,60 % für Ausbildung sowie 0,15 % und 0,75 % für den Generationenausgleichsmechanismus. Zusätzlich werden 0,20 % Arbeitgeberanteil für FOGASA und die ausgewählte Unfall- und Berufskrankheitsprämie einbezogen. Bei befristeten Verträgen gelten andere Arbeitslosenanteile." },
    { type: 'table', headers: ['Berufsprofil', 'Arbeitgeberprämie'], rows: [["Büroarbeit", '1,50 %'], ["Außendienst / Vertrieb", '2,00 %'], ["Baugewerbe", '6,70 %']] },
    { type: 'title', text: "Beitragsgrenzen und hohe Gehälter", level: 2 },
    { type: 'paragraph', html: "Die reguläre Beitragsbemessungsgrundlage ist 2026 auf 5.101,20 € pro Monat begrenzt. Für monatliche Vergütung oberhalb dieser Grenze ergänzt der Rechner den progressiven Solidaritätsbeitrag. Dadurch wird bei hohen Gehältern nicht einfach derselbe Standardsatz auf den gesamten Bruttobetrag angewendet." },
    { type: 'title', text: "Zwölf Zahlungen oder vierzehn Zahlungen", level: 2 },
    { type: 'paragraph', html: "Die Auswahl verändert weder das Jahresbruttogehalt noch die jährlichen Arbeitgeberkosten. Sie verändert nur den angezeigten Durchschnitt pro Zahlung. Bei einem echten Vierzehn-Zahlungen-Modell können Beiträge und Einbehalte auf reguläre und zusätzliche Abrechnungen unterschiedlich verteilt sein; der Durchschnitt eignet sich daher vor allem zum Vergleich von Angeboten und Budgets." },
    { type: 'tip', title: "Vergleiche mit gleichen Annahmen", html: "Halten Sie IRPF-Satz, Vertragsart, Zahlungsplan und Berufsgenossenschaftsprämie konstant. So isolieren Sie den Einfluss des Bruttogehalts und vergleichen zwei Angebote oder Einstellungsbudgets sinnvoll." },
    { type: 'title', text: "Grenzen dieser spanischen Gehaltsschätzung", level: 2 },
    { type: 'paragraph', html: "Der Rechner ist auf Vollzeitbeschäftigung in Spanien, das Allgemeine System 2026 und ein gewöhnliches Bargeldgehalt beschränkt. Er berücksichtigt keine Teilzeit-Mindestbemessungsgrundlagen, regionalen Steuerabrechnungen, Sachleistungen, Sonderboni, Ermäßigungen, besonderen Beschäftigungsverhältnisse, Selbstständigkeit oder nachträglichen Lohnabrechnungen. Die Ergebnisse sind Schätzungen und keine Lohn- oder Steuerberatung." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
