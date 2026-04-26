import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'huurverhoging-calculator-spanje-ipc';
const title = 'Huurverhoging Calculator Spanje IPC 3% Limiet';
const description = 'Bereken de actualisering van uw huur met de IPC of de wettelijke limiet van 3% volgens de Spaanse Woonwet.';

const faqData = [
  {
    question: 'Wat is de maximaal toegestane huurverhoging in 2024 en 2025?',
    answer: 'Volgens Wet 12/2023 over het recht op huisvesting is de maximale jaarlijkse verhoging van de huurprijs voor hoofdverblijven in 2024 en 2025 wettelijk beperkt tot 3%.',
  },
  {
    question: 'Is het verplicht om de huur elk jaar met de IPC te verhogen?',
    answer: 'Nee. Om de huur te laten stijgen, moet de huurovereenkomst een expliciete clausule bevatten over de jaarlijkse actualisering.',
  },
  {
    question: 'Hoe ver van tevoren moet de verhuurder de verhoging aankondigen?',
    answer: 'De verhuurder moet de verhoging ten minste één maand (30 dagen) van tevoren schriftelijk aan de huurder meedelen.',
  },
  {
    question: 'Wat gebeurt er als de IPC hoger is dan de wettelijke limiet van 3%?',
    answer: 'Zelfs als de werkelijke IPC hoger is, mag de eigenaar van een hoofdverblijf in 2024 und 2025 wettelijk geen verhoging van meer dan 3% eisen.',
  },
];

const howToData = [
  {
    name: 'Voer uw huidige huur in',
    text: 'Voer het maandelijkse bedrag in dat u momenteel betaalt.',
  },
  {
    name: 'Kies de berekeningsmethode',
    text: 'Selecteer de wettelijke limiet van 3% (aanbevolen) of voer handmatig een percentage in.',
  },
  {
    name: 'Bekijk de resultaten',
    text: 'U ziet direct de nieuwe geschatte huur, de maandelijkse verhoging en de jaarlijkse extra kosten.',
  },
  {
    name: 'Kopieer de samenvatting',
    text: 'Genereer een beknopt rapport om naar de verhuurder te sturen of voor uw eigen administratie.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Huurverhoging Calculator 2026 Spanje 3% Limiet',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In Spanje wordt de <strong>Consumentenprijsindex (IPC)</strong> traditioneel gebruikt om de huurprijs aan te passen. De nieuwe Woonwet heeft echter belangrijke limieten geïntroduceerd.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Huurverhoging Calculator',
    labelDescription: 'Pas uw huur veilig aan de IPC aan of pas de wettelijke limiet van 3% toe.',
    labelCurrentRent: 'Huidige Huur',
    labelCurrentRentPlaceholder: 'Bijv. 800',
    labelIncrementType: 'Actualiseringsmethode',
    labelLegalLimit: 'Limiet Woonwet (3%)',
    labelManualIncrement: 'Handmatige Verhoging (%)',
    labelManualPercentagePlaceholder: 'Bijv. 2.5',
    labelNewRentEstimate: 'Nieuwe Geschatte Huur',
    labelMonthlyIncrease: 'Maandelijkse Verhoging',
    labelYearlyExtra: 'Jaarlijkse Extra Kosten',
    labelLegalBadge: 'Beperkt tot 3% volgens Wet 12/2023',
    labelCopyButton: 'Kopiëren voor de verhuurder',
    labelCopySuccess: 'Gekopieerd!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
