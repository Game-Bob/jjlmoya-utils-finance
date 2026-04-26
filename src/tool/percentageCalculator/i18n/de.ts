import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'prozentrechner';
const title = '4 in 1 Prozentrechner: Rabatte, Erhöhungen und Nachlässe';
const description =
  'Berechnen Sie Prozentsätze ganz einfach online und kostenlos. 4 Werkzeuge in 1, um X % von Y zu ermitteln, prozentuale Differenzen, MwSt. addieren oder subtrahieren, Rabatte und automatisches Trinkgeld.';

const faqData = [
  {
    question: 'Wie funktioniert der Rechner?',
    answer:
      'Geben Sie einfach die Werte in die Felder des Anwendungsfalls ein, der Ihrem Problem entspricht, und unser Rechner verarbeitet die Formel, ohne dass Sie eine Schaltfläche zum Berechnen drücken müssen.',
  },
  {
    question: 'Ist er für die Berechnung der Mehrwertsteuer oder von Steuern geeignet?',
    answer:
      'Ja, Block 4 („Prozentsatz addieren oder subtrahieren“) ist genau für Fälle wie die Anwendung einer MwSt. von 19 % auf einen Basispreis oder die Berechnung einer negativen Einkommensteuer konzipiert.',
  },
  {
    question: 'Können Dezimalzahlen und negative Zahlen verarbeitet werden?',
    answer:
      'Natürlich. Sie können Dezimalzahlen (mit Punkt) eingeben, und er funktioniert auch mit negativen Werten, wenn Sie Bilanzverluste analysieren müssen.',
  },
  {
    question: 'Kann ich die Ergebnisse kopieren?',
    answer:
      'Ja, jeder Block verfügt über eine Schaltfläche im Ergebnisfeld, die den Wert sofort in die Zwischenablage Ihres Geräts kopiert, damit Sie ihn in einer anderen App oder einem Dokument einfügen können.',
  },
];

const howToData = [
  {
    name: 'Identifizieren Sie Ihr mathematisches Problem',
    text: 'Lesen Sie die Titel der 4 Blöcke und wählen Sie den aus, der Ihrem Anliegen entspricht (Z. B. Wie viel sind 20 % von 50? -> Block 1).',
  },
  {
    name: 'Geben Sie die Zahlen ein',
    text: 'Füllen Sie die Felder „X“ und „Y“ aus. Machen Sie sich keine Sorgen um die Reihenfolge, der Text jedes Blocks führt Sie visuell.',
  },
  {
    name: 'Kopieren Sie das Sofortergebnis',
    text: 'Der Wert erscheint in Echtzeit unten, während Sie schreiben. Klicken Sie auf das Kopiersymbol, wenn Sie ihn an einer anderen Stelle verwenden möchten.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
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
      text: '4 in 1 Prozentrechner: Schnelle Berechnungen meistern',
      level: 2,
    },
    {
      type: 'title',
      text: 'Wozu dient ein multipler Prozentrechner?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das Berechnen von Prozentsätzen ist eine der häufigsten mathematischen Operationen in unserem Alltag. Vom Berechnen von Rabatten beim Schlussverkauf über die Bestimmung des angemessenen Trinkgelds im Restaurant bis hin zur Ermittlung der Gewinnspanne in einem Unternehmen oder der Zinsen für einen Kredit. Trotz der Tatsache, dass es sich um alltägliche Operationen handelt, ist es nicht immer einfach, sie im Kopf durchzuführen oder sich an die genaue Formel zu erinnern.',
    },
    {
      type: 'paragraph',
      html: 'Unser 4 in 1 Prozentrechner gruppiert die am häufigsten nachgefragten Szenarien. Sie müssen nicht mehr bei Google nach „wie berechnet man 20 Prozent“ oder „Formel zur Prozentrechnung“ suchen. Sie haben die vier wesentlichen Operationen an einem Ort, interaktiv und mit sofortigen Ergebnissen.',
    },
    {
      type: 'title',
      text: 'Überprüfung der 4 häufigsten Anwendungsfälle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um Ihnen das Leben zu erleichtern, haben wir das Werkzeug in vier klare visuelle Blöcke unterteilt, die reale Probleme lösen, mit denen wir täglich konfrontiert sind:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Wie viel sind X % von Y?',
      html: '<p><strong>Der klassische Fall.</strong> Nützlich zur Berechnung von Rabatten oder Trinkgeldern. Wenn Sie wissen möchten, wie viel 15 % von 120 € sind, ist dies Ihr Werkzeug. Die zugrunde liegende Formel teilt einfach den Prozentsatz durch 100 und multipliziert ihn mit dem Gesamtwert.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Welcher Prozentsatz sind X von Y?',
      html: '<p><strong>Ideal für Proportionen.</strong> Wenn Sie in einer Prüfung 45 von 60 Punkten erreicht haben, welche Note haben Sie auf 100 bezogen? Diese Funktion teilt den Teil durch das Ganze und multipliziert es mit hundert, was Ihnen das exakte relative Gewicht angibt.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Prozentuale Zunahme oder Abnahme',
      html: '<p><strong>Perfekt für Finanzen und Analytik.</strong> Wie stark ist die Miete seit letztem Jahr gestiegen? Wenn Sie vorher 800 € bezahlt haben und jetzt 840 €, sagt Ihnen diese Funktion, dass Sie eine Erhöhung von 5 % erfahren haben. Sie misst das Wachstum oder die Abnahme zwischen zwei Zahlen.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Prozentsatz zu einem Wert addieren oder subtrahieren',
      html: '<p><strong>Super nützlich für die MwSt.</strong> Wenn Sie einen Basispreis haben (z. B. 100 €) und 19 % MwSt. hinzufügen müssen, liefert Ihnen dieser Rechner direkt den Endpreis von 119 €, ohne dass Sie Zwischenschritte durchführen müssen. Ebenso dient er dazu, einen direkten Rabatt anzuwenden (z. B. 20 % abziehen).</p>',
    },
    {
      type: 'title',
      text: 'Gängige Mythen über die Prozentrechnung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Oft blockieren wir, wenn wir große Prozentsätze oder Dezimalzahlen sehen, aber es gibt einige mathematische „Tricks“, die Ihnen das Leben erleichtern können. Der bekannteste ist die <strong>Reversibilität von Prozentsätzen</strong>.',
    },
    {
      type: 'tip',
      title: 'Der Trick der Reversibilität',
      html: '<p>Wussten Sie, dass X % von Y genau dasselbe ist wie Y % von X? Wenn man Sie beispielsweise bittet, 18 % von 50 im Kopf zu berechnen, kann das kompliziert klingen. Aber wenn Sie es umkehren, sind 50 % von 18 ganz einfach: Es ist 9! Dies gilt für absolut jede Zahl und ist ein erstaunlicher Lebensretter im Alltag.</p>',
    },
    {
      type: 'title',
      text: 'Warum wir bei der Berechnung von Wachstum oft scheitern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Einer der häufigsten Fehler tritt in Fall 3 auf: die prozentuale Zunahme oder Abnahme. Stellen wir uns vor, eine Aktie an der Börse kostet 100 €, fällt um 50 % und steigt am nächsten Tag um 50 %. Die Intuition sagt uns, dass sie wieder 100 € wert ist, aber das ist falsch.',
    },
    {
      type: 'paragraph',
      html: 'Wenn sie von 100 € um 50 % fällt, ist ihr neuer Wert 50 €. Wenn sie von diesen 50 € um 50 % steigt, beträgt die Erhöhung die Hälfte von 50 (25 €). Daher wäre der Endpreis 75 €. Dies ist ein klassisches Beispiel dafür, warum prozentuale Steigerungen und Senkungen nicht asymmetrisch sind und warum dynamische Rechner wie dieser schwerwiegende Finanzfehler verhindern.',
    },
    {
      type: 'title',
      text: 'Professionelle und akademische Nutzung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Unsere Benutzeroberfläche ist frei von Ablenkungen und auf <strong>schnelles Arbeiten</strong> ausgelegt. Sie können sie in einem fixierten Browsertab bereithalten, flink zwischen den verschiedenen Feldern wechseln und dank der Kopierschaltfläche neben dem Ergebnis den exakten Wert risikoarm in Ihr Excel oder Google Sheets übertragen.',
    },
    {
      type: 'list',
      items: [
        'E-Commerce und Ladengeschäfte: Schnelle Berechnung des UVP unter Anwendung von Handelsspannen und Hinzurechnung der MwSt.',
        'Personalwesen: Bestimmung des Lohngefälles, Lohnsteuerabzüge und Gehaltserhöhungen in Bezug auf den VPI.',
        'Universitäre Bildung: Dozenten, die Noten angleichen, oder Studenten wissenschaftlicher Fachrichtungen, die die Abweichung ihrer Experimente analysieren.',
        'Digitales Marketing: Messung von CTR (Click Through Rate), ROAS (Return on Ad Spend) oder Conversion Rate im E-Commerce.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Prozentrechner',
    labelCase1Title: 'Fall 1',
    labelCase1Question: 'Wie viel sind X % von Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formel: (X / 100) × Y',
    labelCase2Title: 'Fall 2',
    labelCase2Question: 'Welcher Prozentsatz sind X von Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formel: (X / Y) × 100',
    labelCase3Title: 'Fall 3',
    labelCase3Question: 'Prozentuale Differenz zwischen zwei Werten',
    labelCase3Placeholder1: 'Wert 1',
    labelCase3Placeholder2: 'Wert 2',
    labelCase3Formula: 'Formel: ((Wert 2 - Wert 1) / |Wert 1|) × 100',
    labelCase4Title: 'Fall 4',
    labelCase4Question: 'Prozentsatz zu einem Wert addieren oder subtrahieren',
    labelCase4Placeholder1: 'Wert',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formel: Wert ± (Wert × (% / 100))',
    labelCase4AddLabel: 'Summe (Wert + %)',
    labelCase4SubtractLabel: 'Differenz (Wert - %)',
    labelResult: 'Ergebnis',
    labelDifference: 'Differenz',
    labelCopyTooltip: 'Ergebnis kopieren',
    labelFormula: 'Formel',
    percentSymbol: '%',
  },
};
