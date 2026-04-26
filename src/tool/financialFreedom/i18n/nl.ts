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
  labelYearsShort: 'j',
  labelMonthsShort: 'm',
  labelDaysShort: 'd',
  labelStatus: 'Finansiële Veiligheidsstatus',
  labelRedZone: 'Rode Zone: Hoog Risico',
  labelYellowZone: 'Gele Zone: Stabiel',
  labelGreenZone: 'Groene Zone: Finansiële Vrijheid',
  labelBurnRateDaily: 'Dagelijks Uitgavepatroon',
  labelBurnRateMonthly: 'Maandelijks Uitgavepatroon',
  labelWhatIf: 'De 10%-Regel',
  labelWhatIfDescription: 'Door je uitgaven met slechts 10% te verlagen, kun je je runway aanzienlijk verlengen.',
  labelGainTime: 'Extra Overlevingstijd',
  labelCopyResult: 'Samenvatting Kopiëren',
  labelCopied: 'Gekopieerd!',
};

const slug = 'financiele-vrijheid-calculator-overlevingstijd';
const title = 'Financiële Vrijheid & Survival Runway Calculator';
const description = 'Bereken precies hoe lang je spaargeld meegaat. Onze runway-tool helpt je bij het plannen van je financiële onafhankelijkheid.';

const faq = [
  {
    question: 'Wat is een goede runway?',
    answer: 'Experts raden minimaal 3 tot 6 maanden aan. Voor echte vrijheid mik je op 2 jaar of meer.',
  },
  {
    question: 'Houdt deze calculator rekening met inflatie?',
    answer: 'Deze tool is ontworpen voor de directe berekening van liquide middelen tegenover huidige uitgaven.',
  },
  {
    question: 'Wat is "Burn Rate" in persoonlijke financiën?',
    answer: 'Burn rate is de snelheid waarmee je je spaargeld verbruikt om je levensonderhoud te deken.',
  },
];

const howTo = [
  {
    name: 'Voer je totale spaargeld in',
    text: 'Voer het totaalbedrag aan liquide middelen in.',
  },
  {
    name: 'Stel je uitgaven in',
    text: 'Geef aan hoeveel je per maand of jaar uitgeeft.',
  },
  {
    name: 'Analyseer je veiligheidszone',
    text: 'Controleer of je in de rode, gele of groene zone zit.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
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
  faq,
  bibliography: [
    {
      name: 'Principes van de FIRE-beweging',
      url: 'https://nl.wikipedia.org/wiki/FIRE-beweging',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
