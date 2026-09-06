import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { CapitalGainsTaxScenarioCalculatorUI } from '../ui';

export const ui: CapitalGainsTaxScenarioCalculatorUI = {
  labelPurchasePrice: 'Purchase price',
  labelAcquisitionCosts: 'Acquisition costs',
  labelImprovements: 'Improvements',
  labelSalePrice: 'Current sale price',
  labelSellingCosts: 'Current selling costs',
  labelTaxRate: 'Estimated tax rate',
  labelAlternativeSalePrice: 'Alternative sale price',
  labelAlternativeSellingCosts: 'Alternative selling costs',
  labelCurrency: 'Currency',
  labelCurrentScenario: 'Current scenario',
  labelAlternativeScenario: 'Alternative scenario',
  labelAcquisitionBasis: 'Estimated acquisition basis',
  labelNetSaleValue: 'Net sale value',
  labelGainOrLoss: 'Gain or loss',
  labelEstimatedTax: 'Estimated tax',
  labelNetGainAfterTax: 'Estimated gain after tax',
  labelNetProceeds: 'Estimated proceeds after tax',
  labelBetterScenario: 'Scenario with more estimated gain',
  labelCurrentIsBetter: 'Current sale',
  labelAlternativeIsBetter: 'Alternative sale',
  labelSameOutcome: 'Same result',
  labelGainStatus: 'Estimated gain',
  labelLossStatus: 'Estimated loss',
  labelBreakEvenStatus: 'Estimated break even',
  labelTaxableGainNote: 'Tax is applied only to a positive gain in this planning model.',
  labelLossNote: 'No estimated tax is applied to this loss. Local rules may treat losses differently.',
  labelVisual: 'Comparison of estimated gain after tax for both scenarios',
  labelComparison: 'Compare scenarios',
  labelDifference: 'Difference',
  labelCopy: 'Copy summary',
  labelCopied: 'Summary copied',
  labelReset: 'Reset example',
  labelInvalidInput: 'Check this value',
  labelMethodTitle: 'How this estimate works',
  labelMethodText: 'The estimated acquisition basis is purchase price plus acquisition costs and improvements. Net sale value is sale price minus selling costs. The tool subtracts the basis from net sale value, then applies the percentage you enter to a positive gain only. It does not look up a tax rate.',
  labelPrivacyNote: 'Your figures stay in this browser. No account, API or server calculation is required.',
  labelAmountPlaceholder: '0.00',
  labelPercentPlaceholder: '0 to 100',
};

const slug = 'capital-gains-tax-scenario-calculator';
const title = 'Capital Gains Tax Scenario Calculator';
const description = 'Compare the estimated gain after tax from two sale scenarios using your own purchase price, costs, improvements and tax rate. The calculation is a transparent planning estimate, not a tax filing.';

const faq = [
  {
    question: 'What does this capital gains scenario calculator estimate?',
    answer: 'It estimates the gain or loss from a sale, the positive gain used as the taxable amount in this model, the tax produced by the percentage you enter, and the remaining gain after that estimate. It compares a current scenario with an alternative sale price and selling cost.',
  },
  {
    question: 'Which costs can I enter?',
    answer: 'Enter the purchase price, acquisition costs and improvements that you want included in the estimated acquisition basis. Enter selling costs separately because they reduce the net sale value. Only include amounts relevant to your own transaction and keep your supporting records.',
  },
  {
    question: 'Does the calculator know my local capital gains tax rate?',
    answer: 'No. You enter the percentage as a planning assumption. Tax treatment can depend on jurisdiction, asset type, ownership, dates, exemptions, prior losses, depreciation and other facts, so the result is not a tax assessment.',
  },
  {
    question: 'Why is estimated tax zero when the result is a loss?',
    answer: 'This simple comparison applies the entered rate only to a positive gain. It does not decide whether a loss can be offset, carried forward or reported under the rules that apply to you.',
  },
  {
    question: 'Can I use the result for a tax return?',
    answer: 'No. Use it to compare your own scenarios and prepare questions for a tax authority or qualified adviser. It does not include every adjustment, special regime or reporting rule.',
  },
];

const howTo = [
  {
    name: 'Enter the acquisition figures',
    text: 'Add what you paid, eligible acquisition costs and improvements that you want to test as part of the estimated basis.',
  },
  {
    name: 'Enter the current sale scenario',
    text: 'Provide the current sale price and selling costs. The tool subtracts selling costs before comparing the sale with the estimated basis.',
  },
  {
    name: 'Enter your planning rate',
    text: 'Type the percentage you want to test. It is an assumption supplied by you, not a rate retrieved by the tool.',
  },
  {
    name: 'Test the alternative',
    text: 'Change the alternative sale price or its selling costs and read which scenario leaves the larger estimated gain after the entered percentage.',
  },
];

export const content: ToolLocaleContent<CapitalGainsTaxScenarioCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    { type: 'title', text: 'Compare two sale decisions with your own numbers', level: 2 },
    {
      type: 'paragraph',
      html: '<p>A sale decision often turns on more than the headline price. Acquisition costs, improvements and selling costs change the amount left after the transaction. This calculator lets you compare a current sale with an alternative using figures you already own and a tax percentage you choose for planning.</p>',
    },
    { type: 'title', text: 'What the estimate includes', level: 2 },
    {
      type: 'list',
      items: [
        'Estimated acquisition basis: purchase price plus acquisition costs and improvements.',
        'Net sale value: sale price minus selling costs.',
        'Gain or loss: net sale value minus estimated acquisition basis.',
        'Estimated tax: your entered percentage applied to a positive gain in the model.',
        'Comparison: the difference in estimated gain after tax between the two scenarios.',
      ],
    },
    { type: 'title', text: 'How to interpret the two scenarios', level: 2 },
    {
      type: 'paragraph',
      html: '<p>Use the current scenario for the sale you are considering now. Use the alternative fields to test a different sale price or a different selling cost. A higher price does not automatically mean a larger after tax gain if the associated selling costs also rise; the comparison makes that trade off visible.</p>',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Current scenario',
          description: 'Your first set of sale assumptions.',
          points: ['Uses the current sale price', 'Subtracts current selling costs', 'Shows the estimated gain after tax'],
        },
        {
          title: 'Alternative scenario',
          description: 'A second set of sale assumptions.',
          points: ['Tests a different sale price', 'Allows different selling costs', 'Shows the difference immediately'],
          highlight: true,
        },
      ],
    },
    { type: 'title', text: 'Important limits of a capital gains estimate', level: 2 },
    {
      type: 'paragraph',
      html: '<p>This is a transparent planning model, not a jurisdiction specific tax calculator. It does not look up rates or decide which costs qualify. It does not model depreciation, exemptions, inflation adjustments, previous losses, ownership splits, special regimes or separate allocation of improvements. Confirm the applicable rules and keep transaction records before filing.</p>',
    },
    { type: 'title', text: 'A private, local comparison', level: 2 },
    {
      type: 'paragraph',
      html: '<p>The figures are entered by you and processed in the browser. That makes the tool useful for a quick what if comparison when a spreadsheet would be overkill, while keeping the assumptions visible so you can take the result into a more complete tax workflow.</p>',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
