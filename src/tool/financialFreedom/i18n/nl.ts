import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Totale Spaargelden',
  labelExpenses: 'Huidige Uitgaven',
  labelMonthly: 'Maandelijks',
  labelYearly: 'Jaarlijks',
  labelTimeRemaining: 'Jouw Financiële Runway',
  labelYears: 'Jaar',
  labelMonths: 'Maanden',
  labelDays: 'Dagen',
  labelStatus: 'Financiële Veiligheidsstatus',
  labelRedZone: 'Rode Zone: Hoog Risico',
  labelYellowZone: 'Gele Zone: Stabiel',
  labelGreenZone: 'Groene Zone: Financiële Vrijheid',
  labelBurnRateDaily: 'Dagelijks Uitgavepatroon',
  labelBurnRateMonthly: 'Maandelijks Uitgavepatroon',
  labelWhatIf: 'De 10%-Regel',
  labelWhatIfDescription: 'Door je uitgaven met slechts 10% te verlagen, kun je je runway aanzienlijk verlengen.',
  labelGainTime: 'Extra Overlevingstijd',
  labelCopyResult: 'Samenvatting Kopiëren',
  labelCopied: 'Gekopieerd!',
};

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'financiele-vrijheid-calculator-overlevingstijd',
  title: 'Financiële Vrijheid & Survival Runway Calculator',
  description: 'Bereken precies hoe lang je spaargeld meegaat. Onze runway-tool helpt je bij het plannen van je financiële onafhankelijkheid.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'Wat is een Financiële Runway?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>survival runway</strong> is de hoeveelheid tijd die je kunt leven zonder nieuw inkomen. Het is de ultieme maatstaf voor financiële vrijheid.',
    },
  ],
  faq: [
    {
      question: 'Wat is een goede runway?',
      answer: 'Experts raden minimaal 3 tot 6 maanden aan. Voor echte vrijheid mik je op 2 jaar of meer.',
    },
  ],
  bibliography: [
    {
      name: 'Principes van de FIRE-beweging',
      url: 'https://nl.wikipedia.org/wiki/FIRE-beweging',
    },
  ],
  howTo: [
    {
      name: 'Voer je totale spaargeld in',
      text: 'Voer het totaalbedrag aan liquide middelen in.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Financiële Vrijheid Calculator',
      description: 'Bereken hoe lang je spaargeld meegaat.',
    },
  ],
};
