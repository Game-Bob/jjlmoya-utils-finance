import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationPurchasingPowerUI } from '../ui';

const slug = 'inflation-purchasing-power-timeline-calculator';
const title = 'Inflation Purchasing Power Timeline Calculator';
const description = 'See how an annual inflation assumption changes the amount needed to preserve purchasing power and the real value of cash over time.';

const ui: InflationPurchasingPowerUI = {
  amountLabel: 'Starting amount',
  amountHelp: 'Use any currency and keep it consistent',
  inflationLabel: 'Annual inflation rate (%)',
  inflationHelp: 'A scenario assumption, not a forecast',
  yearsLabel: 'Time horizon (years)',
  yearsHelp: 'Choose from 1 to 80 years',
  cashFlowLabel: 'Annual cash flow',
  cashFlowHelp: 'Added to or taken from the balance each year',
  cashFlowModeLabel: 'Cash flow scenario',
  noCashFlowOption: 'No recurring flow',
  contributionOption: 'Add each year',
  withdrawalOption: 'Withdraw each year',
  costEquivalentLabel: 'End cost equivalent',
  realValueLabel: 'End value in today\'s money',
  nominalBalanceLabel: 'End nominal balance',
  purchasingPowerLossLabel: 'Purchasing power lost',
  todayLabel: 'Today',
  endLabel: 'End of horizon',
  costLineLabel: 'Cost to preserve the same basket',
  realLineLabel: 'Unchanged cash buying power',
  balanceLineLabel: 'Scenario balance in today\'s money',
  chartDescription: 'Inflation timeline showing the rising cost equivalent, falling buying power and scenario balance',
  chartNote: 'Each line is measured against the starting amount',
  milestoneTitle: 'Milestones in the same currency',
  yearHeader: 'Year',
  costHeader: 'Cost equivalent',
  realHeader: 'Unchanged cash',
  balanceHeader: 'Real balance',
  methodTitle: 'How the timeline works',
  methodText: 'The cost equivalent is the starting amount multiplied by (1 + annual inflation rate) to the power of the number of years. The value of unchanged cash is the starting amount divided by that same factor. A contribution is added at the end of each year and a withdrawal is subtracted at the end of each year, with the balance stopping at zero.',
  limitationText: 'This is a transparent scenario model, not a historical CPI lookup, investment return forecast or personal financial advice. Your household basket can differ from a published consumer price index, and actual inflation can change from year to year.',
  emptyMessage: 'Enter a positive amount, a rate above -100%, a whole number of years from 1 to 80 and a non-negative cash flow.',
  contributionSummary: 'The dashed line shows the value today of the balance after the recurring contributions, with no investment return included.',
  withdrawalSummary: 'The dashed line shows the value today of the balance after the recurring withdrawals, with no investment return included.',
  noCashFlowSummary: 'The solid lines isolate inflation itself: one shows the future cost of the same basket and the other shows what unchanged cash can buy.',
  depletionWarning: 'The withdrawal scenario reaches zero in year {year}; later years remain at zero.',
  scenarioNote: 'Scenario only',
  currencyHint: 'Same currency as the starting amount',
  yearsSuffix: 'years',
  amountSuffix: 'in the same currency as your starting amount',
};

const faq = [
  {
    question: 'How does inflation reduce purchasing power?',
    answer: 'When the general price level rises, the same amount buys fewer goods and services. This calculator models that effect by dividing unchanged cash by the compounded inflation factor.',
  },
  {
    question: 'What is the difference between cost equivalent and real value?',
    answer: 'Cost equivalent is the future amount needed to buy what the starting amount buys today. Real value is what the unchanged starting amount can buy at the end of the selected horizon, expressed in today\'s money.',
  },
  {
    question: 'What do the contribution and withdrawal scenarios include?',
    answer: 'They add or subtract the cash flow at the end of each year. They do not include investment returns, taxes, fees or interest, and a withdrawal balance cannot fall below zero.',
  },
  {
    question: 'Is the inflation rate a prediction?',
    answer: 'No. It is an assumption for exploring sensitivity. Actual inflation can vary, and a published consumer price index may not match the spending pattern of your household.',
  },
];

const howTo = [
  { name: 'Enter a starting amount', text: 'Use the amount whose future purchasing power you want to inspect, keeping one currency throughout the calculation.' },
  { name: 'Set an inflation scenario', text: 'Enter an annual rate and a whole-number time horizon. Use a range of rates when you want to test sensitivity instead of relying on one assumption.' },
  { name: 'Add an optional cash flow', text: 'Choose Add each year or Withdraw each year, then enter the recurring amount. Leave No recurring flow selected to isolate inflation.' },
  { name: 'Read the curves and milestones', text: 'Compare the end cost equivalent with the end value in today\'s money, then use the milestone table to see when the gap becomes material.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<InflationPurchasingPowerUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Use an inflation timeline to plan for a changing price level', level: 2 },
    { type: 'paragraph', html: '<p>Inflation changes the price level over time, so a cash amount that looks unchanged can buy less in the future. This calculator separates two questions that are often mixed together: how much money may be needed to buy the same basket, and how much purchasing power unchanged cash retains.</p>' },
    { type: 'paragraph', html: '<p>Enter a starting amount, an annual inflation assumption and a time horizon. The timeline compounds the rate each year, then shows the cost equivalent rising while the buying power of unchanged cash falls. The result is expressed in the same currency as your input and does not pretend to know the future path of prices.</p>' },
    { type: 'title', text: 'The two core readings', level: 3 },
    { type: 'table', headers: ['Reading', 'Formula', 'Use it to answer'], rows: [['Cost equivalent', 'Starting amount x (1 + inflation rate)^years', 'How much would be needed at the end to buy the same basket?'], ['Unchanged cash buying power', 'Starting amount / (1 + inflation rate)^years', 'What can the original cash buy at the end, measured in today\'s money?'], ['Purchasing power lost', '(1 - 1 / price factor) x 100', 'What share of the starting buying power is no longer available?']] },
    { type: 'paragraph', html: '<p>For example, at 3% annual inflation, 1,000 becomes a cost equivalent of about 1,344 after ten years. If the 1,000 stays unchanged in cash, its purchasing power is about 744 in today\'s money. Those are two views of the same price-level change, not two separate investment returns.</p>' },
    { type: 'title', text: 'Why compounding matters', level: 3 },
    { type: 'paragraph', html: '<p>Annual inflation rates compound because each year\'s prices become the base for the next year. Ten years at 3% is not a flat 30% adjustment: the factor is 1.03 to the tenth power, or about 1.344. Small differences in the assumed rate become more visible over longer horizons.</p>' },
    { type: 'list', items: ['Run a low, central and high rate instead of trusting one scenario.', 'Use the milestone table to identify when a planned expense becomes materially more expensive.', 'Compare the cost equivalent with an income, pension or savings target expressed in the same currency.', 'Treat the result as a planning reference and replace the assumption when your evidence changes.'] },
    { type: 'title', text: 'Adding contributions or withdrawals', level: 3 },
    { type: 'paragraph', html: '<p>The optional cash-flow scenario makes the timeline more useful for a savings or spending plan without hiding the inflation effect. A contribution is added to the nominal balance at the end of each year. A withdrawal is subtracted at the same point, and the model stops the balance at zero when the withdrawals exhaust it.</p>' },
    { type: 'paragraph', html: '<p>The dashed balance line is converted back into today\'s money using the same inflation factor. It is not an investment projection: no interest, market return, tax, fee or contribution growth is included. If you need to plan a real portfolio, keep the inflation assumption and the return assumption as separate scenarios.</p>' },
    { type: 'tip', title: 'Use the rate as a range, not a promise', html: '<p>Published consumer price indexes describe an average basket, while your own rent, energy, food, travel and healthcare mix may move differently. Test several rates and label the result with the assumption and date you used.</p>' },
    { type: 'title', text: 'What the timeline cannot tell you', level: 3 },
    { type: 'paragraph', html: '<p>This tool does not retrieve historical CPI data, forecast inflation, estimate a personal cost of living, calculate taxes or recommend an investment. It also does not model changing annual rates, asset returns, debt interest or irregular cash flows. Its value is making one assumption visible and showing how strongly the horizon changes the result.</p>' },
    { type: 'paragraph', html: '<p>For an important decision, compare the output with an appropriate official price index, your actual spending records and the terms of the product or income you are planning around. A result can be mathematically consistent and still be a poor description of your household or country.</p>' },
  ],
};
