import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Gesamte Ersparnisse',
  labelExpenses: 'Aktuelle Ausgaben',
  labelMonthly: 'Monatlich',
  labelYearly: 'Jährlich',
  labelTimeRemaining: 'Ihre Überlebensdauer',
  labelYears: 'Jahre',
  labelMonths: 'Monate',
  labelDays: 'Tage',
  labelStatus: 'Finanzieller Sicherheitsstatus',
  labelRedZone: 'Rote Zone: Hohes Risiko',
  labelYellowZone: 'Gelbe Zone: Stabil',
  labelGreenZone: 'Grüne Zone: Finanzielle Freiheit',
  labelBurnRateDaily: 'Tägliche Ausgabenrate',
  labelBurnRateMonthly: 'Monatliche Ausgabenrate',
  labelWhatIf: 'Die 10%-Strategie',
  labelWhatIfDescription: 'Durch die Reduzierung Ihrer Ausgaben um nur 10% könnten Sie Ihre Überlebensdauer erheblich verlängern.',
  labelGainTime: 'Zusätzliche Überlebenszeit',
  labelCopyResult: 'Zusammenfassung kopieren',
  labelCopied: 'Kopiert!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'finanzielle-freiheit-rechner-uberlebensdauer',
  title: 'Rechner für Finanzielle Freiheit & Überlebensdauer',
  description: 'Berechnen Sie genau, wie lange Ihre Ersparnisse reichen werden. Unser Tool hilft Ihnen, Ihre finanzielle Unabhängigkeit zu visualisieren.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'Was ist die finanzielle Überlebensdauer?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Überlebensdauer</strong> (Runway) ist die Zeitspanne, in der Sie ohne neues Einkommen leben können. Es ist die ultimative Kennzahl für finanzielle Freiheit. Im Gegensatz zum Kontostand zeigt sie Ihnen, wie viel "menschliche Zeit" Sie gekauft haben.',
    },
  ],
  faq: [
    {
      question: 'Was ist eine gute Überlebensdauer?',
      answer: 'Experten empfehlen mindestens 3 bis 6 Monate. Für echte Freiheit sind 2 Jahre oder mehr ideal.',
    },
  ],
  bibliography: [
    {
      name: 'FIRE-Bewegung Prinzipien',
      url: 'https://de.wikipedia.org/wiki/FIRE-Bewegung',
    },
  ],
  howTo: [
    {
      name: 'Ersparnisse eingeben',
      text: 'Geben Sie Ihr gesamtes verfügbares Bargeld ein.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Finanzielle Freiheit Rechner',
      description: 'Berechnen Sie die Dauer Ihrer Ersparnisse.',
    },
  ],
};
