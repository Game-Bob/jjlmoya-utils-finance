import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'hypothekenrechner';
const title = 'Hypothekenrechner und Tilgungsplan (Annuitätendarlehen)';
const description =
  'Berechnen Sie Ihre monatliche Hypothekenrate, finden Sie heraus, wie viel Zinsen Sie zahlen werden, und visualisieren Sie sofort Ihren vollständigen Tilgungsplan.';

const faqData = [
  {
    question: 'Was ist ein Annuitätendarlehen?',
    answer:
      'Dies ist das am häufigsten verwendete System für Hypotheken. Die monatliche Rate bleibt immer gleich, aber zu Beginn zahlen Sie fast nur Zinsen und sehr wenig Tilgung (Kapital). Am Ende ist es umgekehrt. Deshalb ist eine vorzeitige Tilgung in den ersten Jahren rentabler.',
  },
  {
    question: 'Fester oder variabler Zinssatz im Jahr 2026?',
    answer:
      'Fester Zinssatz: Sie zahlen jetzt mehr, schlafen aber 30 Jahre lang ruhig. Variabler Zinssatz: Kann heute billiger sein, aber wenn der Marktzins steigt, könnte Ihre Rate in die Höhe schießen. Es hängt von Ihrer Risikobereitschaft ab.',
  },
  {
    question: 'Wie viel spare ich, wenn ich 10.000 € vorzeitig tilge?',
    answer:
      'Das hängt vom Zeitpunkt ab. Wenn Sie im ersten Jahr einer Hypothek von 200.000 € bei 3 % tilgen, können Sie über 15.000 € an Zinsen sparen. Wenn Sie dies im 20. Jahr tun, sparen Sie kaum 2.000 €. Das Timing ist entscheidend.',
  },
  {
    question: 'Welchen Prozentsatz meines Gehalts sollte ich für die Hypothek aufwenden?',
    answer:
      'Die allgemeine Empfehlung ist, 30-35 % Ihres monatlichen Nettoeinkommens (einschließlich anderer Schulden) nicht zu überschreiten. Das Überschreiten dieser Schwelle erhöht das Risiko von Zahlungsausfällen bei unvorhergesehenen Ereignissen erheblich.',
  },
];

const howToData = [
  {
    name: 'Darlehensbetrag eingeben',
    text: 'Geben Sie den Gesamtbetrag ein, den Sie von der Bank benötigen (abzüglich Ihres Eigenkapitals).',
  },
  {
    name: 'Zinssatz anpassen',
    text: 'Geben Sie den von der Bank angebotenen Sollzinssatz ein. Sie können zwischen festen und variablen Zinssätzen vergleichen.',
  },
  {
    name: 'Laufzeit wählen',
    text: 'Legen Sie fest, in wie vielen Jahren Sie das Darlehen zurückzahlen möchten. Mehr Jahre bedeuten eine niedrigere Rate, aber höhere Gesamtzinsen.',
  },
  {
    name: 'Tilgungsplan analysieren',
    text: 'Überprüfen Sie Monat für Monat, wie sich Ihre Schulden entwickeln und welcher Teil Ihrer Rate für Zinsen vs. Tilgung aufgewendet wird.',
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

export const content: ToolLocaleContent<MortgageUI> = {
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
      text: 'Vollständiger Leitfaden für Hypotheken: Annuität und Tilgung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Hypothek ist wahrscheinlich die größte Schuld, die Sie in Ihrem Leben eingehen werden. Das Verständnis der Funktionsweise des Annuitätendarlehens ist entscheidend, um kluge Entscheidungen zu treffen, die Ihnen Zehntausende von Euro sparen können.',
    },
    {
      type: 'title',
      text: 'Die „Falle“ des Annuitätendarlehens: Die Zusammensetzung Ihrer Rate verstehen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Hypotheken verwenden das <strong>Annuitätendarlehen</strong>. Sein Hauptmerkmal ist, dass die monatliche Rate (bei festem Zins) immer gleich bleibt, sich aber die Zusammensetzung im Laufe der Zeit radikal ändert.',
    },
    {
      type: 'tip',
      title: 'Wie sich Ihre Rate entwickelt',
      html: '<p><strong>Am Anfang (Jahre 1-10):</strong> Sie zahlen fast nur ZINSEN und tilgen sehr wenig vom geliehenen Geld. Bei einer Hypothek von 250.000 € zu 3 % könnte Ihre erste Zahlung zu 80 % aus Zinsen bestehen.</p><p><strong>In der Mitte (Jahre 11-25):</strong> Das Verhältnis gleicht sich allmählich aus.</p><p><strong>Am Ende (Jahre 26-30):</strong> Sie zahlen fast nur TILGUNG und sehr wenig Zinsen.</p>',
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie also eine <strong>Hypothekentilgung</strong> (vorzeitige Rückzahlung) vornehmen möchten, ist dies in den ersten Jahren des Darlehens weitaus rentabler. Eine Tilgung von 10.000 € im ersten Jahr kann Ihnen über 15.000 € an Zinsen sparen. Dieselbe Vorauszahlung im 20. Jahr spart Ihnen kaum 2.000 €.',
    },
    {
      type: 'title',
      text: 'Wie viel Geld sollte ich für die Hypothek aufwenden?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Finanzexperten empfehlen, dass Ihre Hypothek <strong>30-35 % Ihres monatlichen Nettoeinkommens nicht überschreiten sollte</strong>. Wenn Sie diese Schwelle überschreiten, erhöhen Sie das Risiko von Zahlungsausfällen bei unvorhergesehenen Ereignissen (Arbeitsplatzverlust, Krankheit usw.) erheblich.',
    },
    {
      type: 'title',
      text: 'Kontext 2026: Fester vs. variabler Zinssatz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Wahl zwischen einem <strong>festen Zinssatz</strong> oder einem <strong>variablen Zinssatz</strong> ist eine strategische Entscheidung, die jährlich Tausende von Euro kosten kann.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fester Zinssatz',
          description: 'Sie zahlen jetzt etwas mehr, schlafen aber ruhig, da Ihre Rate niemals steigen wird.',
          points: [
            'Vorhersehbare Rate für 30 Jahre',
            'Schutz vor Zinserhöhungen',
            'Seelenfrieden in unsicherer Wirtschaft',
            'Ideal für knappe Budgets',
          ],
        },
        {
          title: 'Variabler Zinssatz',
          description: 'Kann heute billiger sein, setzt Ihre Wirtschaft aber Volatilität aus.',
          highlight: true,
          points: [
            'Niedrigere Anfangsrate',
            'Risiko von Zinserhöhungen',
            'Potenziell schwerwiegende Auswirkungen auf das Budget',
            'Nur für Risikofreudige',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Die Entscheidung Fest vs. Variabel hängt von Ihrem Profil ab',
      html: '<p><strong>Wählen Sie einen festen Zinssatz, wenn:</strong> Ihr Budget knapp ist, Sie Sicherheit suchen und keine unangenehmen monatlichen Überraschungen vertragen.</p><p><strong>Wählen Sie einen variablen Zinssatz, wenn:</strong> Sie über ein finanzielles Polster verfügen, glauben, dass die Zinsen sinken werden, oder Ihre Hypothek klein/kurzfristig ist.</p>',
    },
  ],
  ui: {
    labelTitle: 'Hypothekenrechner',
    labelLoanAmount: 'Darlehensbetrag',
    labelInterestRate: 'Zinssatz (Sollzins)',
    labelYears: 'Laufzeit (Jahre)',
    labelMonthlyExtra: 'Monatliche Sondertilgung',
    labelMonthlyPayment: 'Monatliche Rate',
    labelMonthCount: 'Monate',
    labelSavingsCard: 'Ihr Sparpotenzial',
    labelSavingsInterest: 'Zinsen',
    labelSavingsTime: 'Zeit',
    labelTimelineComparison: 'Zeitvergleich',
    labelTimelineOriginal: 'Ursprüngliche Dauer',
    labelTimelineOptimized: 'Dauer mit Sondertilgung',
    labelCostBreakdown: 'Aufschlüsselung Gesamtkosten',
    labelBorrowed: 'Gliehen',
    labelTotalBorrowed: 'Gesamtdarlehen',
    labelTotalInterest: 'Gesamtzinsen',
    labelAmortizationTable: 'Tilgungsplan',
    labelTableHeader: 'Vollständige Tabelle ansehen',
    labelViewAll: 'Alle ansehen',
    labelPaid: 'Hypothek abbezahlt',
    labelTableMonth: 'Monat',
    labelTableInterest: 'Zinsen',
    labelTablePrincipal: 'Tilgung',
    labelTableExtra: 'Sonder',
    labelTableBalance: 'Restschuld',
    labelMoreMonths: 'weitere Monate',
    labelMonth: 'Monat',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
    monthPlural: 'Monate',
    yearPlural: 'Jahre',
  },
};
