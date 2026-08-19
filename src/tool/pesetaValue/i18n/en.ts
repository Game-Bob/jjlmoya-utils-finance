import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'pesetas-to-euros-with-inflation-calculator';
const title = 'Pesetas to Euros Calculator: Old Peseta Value in 2026';
const description = 'Convert Spanish pesetas to euros at 166.386 pesetas per euro, then estimate their purchasing power from 1980 to 2026 with Spain\'s CPI.';

const faq = [
  {
    question: 'How much is 1,000 pesetas in euros?',
    answer: '1,000 pesetas equals €6.01 at the official fixed conversion rate: 1 euro = 166.386 pesetas. The calculator then shows a separate CPI estimate for what that amount represented in the selected year.',
  },
  {
    question: 'How much is 1 million pesetas in euros?',
    answer: '1,000,000 pesetas equals €6,010.12 at the fixed conversion rate. That is the nominal currency conversion; its 2026 purchasing-power estimate depends on the year you choose.',
  },
  {
    question: 'How do I convert pesetas to euros?',
    answer: 'Divide the peseta amount by 166.386. For example, 100 pesetas is €0.60, 500 pesetas is €3.01, 5,000 pesetas is €30.05 and 10,000 pesetas is €60.10 before any inflation adjustment.',
  },
  {
    question: 'What would old pesetas be worth in 2026?',
    answer: 'There are two different answers. The fixed conversion gives the legal euro amount; the CPI-adjusted result estimates the euros needed in 2026 to buy a similar average basket of goods and services. Select the year when the pesetas were used to see both.',
  },
  {
    question: 'What does the inflation-adjusted peseta value mean?',
    answer: 'It is a Spanish CPI comparison, not a price prediction. It approximates how much money in 2026 would match the selected amount average purchasing power in its origin year.',
  },
  {
    question: 'Does this calculate the value of an old peseta coin or banknote?',
    answer: 'No. This tool calculates currency conversion and average purchasing power. A rare peseta coin, an unusual issue or a collectible banknote can have a separate market value that depends on condition, scarcity and demand.',
  },
  {
    question: 'Which years does the peseta calculator use?',
    answer: 'You can choose an origin year from 1980 to 2026. The current reference is 2026 year to date, based on the latest published Spanish CPI data available for the year, so it is not presented as a completed 2026 annual average.',
  },
];

const howTo = [
  { name: 'Enter the old peseta amount', text: 'Type the amount printed on a receipt, note, coin or historical document, or start with a quick preset.' },
  { name: 'Select the year', text: 'Choose the decade and then the year when that amount was used. The calculator uses Spanish CPI data for the comparison.' },
  { name: 'Check the fixed conversion', text: 'Read the exact nominal euro result obtained by dividing pesetas by 166.386.' },
  { name: 'Compare purchasing power', text: 'Use the CPI-adjusted 2026 result to understand the amount in average consumer-price terms, with 2026 shown as year to date.' },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PesetaValueUI> = {
  slug,
  title,
  description,
  ui: {
    labelAmount: 'Historical amount',
    labelAmountHint: 'Choose a starting point',
    labelOriginYear: 'Origin year',
    labelOriginYearHint: 'Annual average CPI reference where available',
    labelReferenceYear: 'Reference year 2026 year to date',
    labelNominalEuros: 'Fixed conversion',
    labelTodayValue: 'Estimated purchasing power',
    labelPurchasingPowerChange: 'Purchasing power change',
    labelNominalDifference: 'Difference from conversion',
    labelConversionRate: 'Pesetas per euro',
    labelCpiMethod: 'CPI multiplier',
    labelPreset100: '100 pt',
    labelPreset1000: '1,000 pt',
    labelPreset10000: '10,000 pt',
    labelPreset100000: '100,000 pt',
    labelPesetas: 'pesetas',
    labelEuro: 'euros',
    labelFrom: 'From',
    labelTo: 'To',
    labelOpenYears: 'Open origin years',
    labelCloseYears: 'Close origin years',
    labelDecade: 'Choose a decade',
    labelCoin: 'coin',
    labelBanknote: 'banknote',
    labelCashPieces: 'cash pieces',
    labelState: 'value movement',
    labelStatePositive: 'expanded',
    labelStateNeutral: 'unchanged',
    labelStateNegative: 'contracted',
    labelReset: 'Reset example',
    currencyLocale: 'en-IE',
  },
  seo: [
    { type: 'title', text: 'Pesetas to euros: the answer depends on the question', level: 2 },
    { type: 'paragraph', html: 'If you have an old price, wage, receipt, coin or banknote in Spanish pesetas, this calculator gives you two useful answers. First, it converts the face amount into euros using the official fixed rate. Second, it estimates what that amount represents in 2026 purchasing-power terms after Spanish consumer-price inflation.' },
    { type: 'title', text: 'Common peseta to euro conversions', level: 2 },
    { type: 'paragraph', html: 'The fixed rate is always 166.386 pesetas for €1. The year does not change this conversion.' },
    { type: 'table', headers: ['Old amount', 'Fixed euro conversion'], rows: [['1 peseta', '€0.01'], ['25 pesetas', '€0.15'], ['50 pesetas', '€0.30'], ['100 pesetas', '€0.60'], ['500 pesetas', '€3.01'], ['1,000 pesetas', '€6.01'], ['2,000 pesetas', '€12.02'], ['5,000 pesetas', '€30.05'], ['10,000 pesetas', '€60.10'], ['1 million pesetas', '€6,010.12']] },
    { type: 'title', text: 'What were pesetas worth in 2026?', level: 2 },
    { type: 'paragraph', html: 'The CPI-adjusted result answers a different question from the euro conversion. It estimates how many 2026 euros would buy a similar average basket of goods and services to the selected peseta amount in its origin year. Choose the year of the old amount to see how inflation changes the comparison. The 2026 reference is year to date using the latest published Spanish CPI data, not a completed annual average.' },
    { type: 'table', headers: ['Result', 'What it means'], rows: [['Fixed conversion', 'The exact nominal euro amount under the official exchange rate.'], ['CPI-adjusted value', 'An estimate of equivalent average purchasing power in 2026.'], ['Difference', 'The gap between the fixed conversion and the CPI estimate.']] },
    { type: 'title', text: 'How to calculate an old peseta amount', level: 2 },
    { type: 'list', items: ['Enter the amount printed on the old receipt, note, coin or document.', 'Select the year when that amount was used or received.', 'Read the fixed conversion when you need a direct peseta-to-euro answer.', 'Read the CPI-adjusted value when you want historical purchasing-power context.', 'Use the difference as an explanation of inflation, not as a personal price forecast.'] },
    { type: 'title', text: 'Peseta coins and banknotes are not automatically worth their face value', level: 2 },
    { type: 'paragraph', html: 'This is a currency and inflation calculator, not a collectible-price guide. A particular peseta coin or banknote may be worth more or less to collectors depending on its year, condition, rarity and demand. The visual denominations are a historical reference; they do not provide an appraisal.' },
    { type: 'tip', title: 'The year changes purchasing power, not the exchange rate', html: 'The official conversion remains 166.386 pesetas per euro. Only the CPI comparison changes with the origin year, and CPI is an average basket measure that may not match housing, wages, food, energy or one specific purchase.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
