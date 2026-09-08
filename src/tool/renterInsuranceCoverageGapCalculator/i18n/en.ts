import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RenterInsuranceCoverageGapCalculatorUI } from '../ui';

export const ui: RenterInsuranceCoverageGapCalculatorUI = {
  labelPolicyLimit: 'Contents coverage limit',
  labelDeductible: 'Deductible',
  labelSampleLoss: 'Illustrative loss scenario',
  labelCurrency: 'Currency',
  labelApproximateRates: 'Currency changes use approximate planning factors, not live exchange rates.',
  labelPolicyBoundary: 'Policy boundary',
  labelSetLimit: 'Set the limit',
  labelPolicyBoundaryHint: 'Use the contents figures from your policy, then test one possible loss.',
  labelInventory: 'Replacement inventory',
  labelInventoryHint: 'Estimate what it would cost to replace everything today, by category.',
  labelPolicyLimitHelp: 'Use the contents limit shown in your policy, not the building limit.',
  labelDeductibleHelp: 'Enter the excess or deductible that applies to a contents claim.',
  labelSampleLossHelp: 'Used only to show an illustrative claim scenario after the gap is found.',
  labelTotalContents: 'Estimated contents value',
  labelCoverageGap: 'Potential coverage gap',
  labelCoverageRatio: 'Estimated cover ratio',
  labelEstimatedPayout: 'Illustrative payout',
  labelOutOfPocket: 'Illustrative out of pocket',
  labelStatus: 'Coverage reading',
  labelStatusSafe: 'Limit reaches the inventory',
  labelStatusReview: 'Small gap to review',
  labelStatusExposed: 'Contents are underinsured',
  labelStatusSafeText: 'Your entered contents limit is at least as high as the replacement inventory. Check special item limits separately.',
  labelStatusReviewText: 'The limit is close to the inventory estimate, but a small gap remains. Recheck expensive items and recent purchases.',
  labelStatusExposedText: 'The limit is below the inventory estimate. Review the policy before relying on it for a total contents loss.',
  labelLargestCategories: 'Largest inventory categories',
  labelCoverageLine: 'Policy limit',
  labelReplacementValue: 'Replacement value',
  labelLimitMarker: 'Limit marker',
  labelLossScenario: 'Loss scenario',
  labelIllustrativePayout: 'Illustrative only: a proportional clause may not apply to your policy.',
  labelReset: 'Reset example',
  labelCopy: 'Copy summary',
  labelCopied: 'Summary copied',
  labelCopyFailed: 'Copy it manually from the result',
  labelInvalidInput: 'Check the highlighted value',
  labelMethodTitle: 'How this estimate works',
  labelMethodText: 'The tool adds your category estimates and compares them with the contents limit. The gap is the positive difference between those values. The illustrative payout applies the cover ratio to the loss scenario, then subtracts the deductible; this is a planning model, not a prediction of a claim settlement. Your policy may use item limits, new-for-old rules, exclusions, first-loss cover or a different treatment of underinsurance.',
  labelPrivacyNote: 'Your inventory stays in this browser. No account, upload or server calculation is required.',
  labelAmountPlaceholder: '0.00',
  labelCategoryFurniture: 'Furniture and decor',
  labelCategoryElectronics: 'Electronics',
  labelCategoryClothing: 'Clothing and shoes',
  labelCategoryKitchen: 'Kitchen and appliances',
  labelCategoryPersonal: 'Personal items',
  labelCategoryOther: 'Other contents',
};

const slug = 'renter-insurance-coverage-gap-calculator';
const title = 'Renter Insurance Coverage Gap Calculator';
const description = 'Estimate whether your renters contents coverage limit reaches the replacement value of your belongings. Compare your inventory, policy limit, deductible and an illustrative loss scenario in your browser.';

const faq = [
  { question: 'What does this renters insurance coverage calculator measure?', answer: 'It adds the replacement values you enter for household contents and compares that total with your policy contents limit. The difference is a planning estimate of the amount that may sit outside the limit.' },
  { question: 'Which value should I use for my contents inventory?', answer: 'Use a realistic current replacement estimate for all belongings covered by the contents section, including furniture, electronics, clothing, appliances and personal items. Check whether your policy asks for new-for-old or another valuation basis.' },
  { question: 'Does the result prove that I am underinsured?', answer: 'No. The result is only as good as your inventory, policy wording and valuation assumptions. Item sublimits, exclusions, special schedules and clauses about underinsurance can change a claim.' },
  { question: 'Why does the calculator show an illustrative payout?', answer: 'It shows what a simple proportional model would produce for the loss amount you enter, after the deductible. It is included to make the effect of a gap tangible, but it does not predict what an insurer will pay.' },
  { question: 'Should I include my landlord\'s fixtures and fittings?', answer: 'Only include items that belong in your contents cover and follow your policy wording. Tenants liability, buildings, fixtures and contents can be separate sections, so do not merge them just to increase the inventory total.' },
];

const howTo = [
  { name: 'Build a replacement inventory', text: 'Walk through each room and enter what it would cost to replace the contents today. Group items into the six categories so the largest sources of value remain visible.' },
  { name: 'Enter the contents limit', text: 'Copy the contents sum insured from your policy schedule or quote. Do not use the buildings limit or a liability limit.' },
  { name: 'Add the deductible and test a loss', text: 'Enter the deductible for contents claims and a sample loss amount to see an illustrative out-of-pocket scenario.' },
  { name: 'Review the decision boundary', text: 'If a gap appears, revisit expensive items, single-item limits, valuables and recent purchases with the insurer or broker before relying on the policy.' },
];

export const content: ToolLocaleContent<RenterInsuranceCoverageGapCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    { type: 'title', text: 'Check the limit against the value of your belongings', level: 2 },
    { type: 'paragraph', html: '<p>Renters contents insurance is easiest to underestimate when the limit is chosen as a round number rather than built from a room-by-room inventory. This calculator turns your own replacement estimates into a visible coverage boundary, so you can see whether the policy limit leaves a gap before you need to claim.</p>' },
    { type: 'title', text: 'What to gather before calculating', level: 2 },
    { type: 'list', items: ['A replacement estimate for furniture, electronics, clothing, appliances and personal items.', 'The contents limit from the policy schedule, separate from buildings or liability cover.', 'The deductible or excess that applies to a contents claim.', 'A realistic sample loss if you want to explore an illustrative payout.'] },
    { type: 'title', text: 'How to read the coverage gap', level: 2 },
    { type: 'paragraph', html: '<p>The gap is the contents estimate above the limit. A zero gap means the two totals meet under your assumptions; it does not confirm that every item is covered. A positive gap is a prompt to inspect the valuation basis, expensive-item sublimits, exclusions and any underinsurance clause in the policy.</p>' },
    { type: 'table', headers: ['Signal', 'What it tells you', 'Next useful action'], rows: [['Limit reaches inventory', 'The entered limit is at least the entered replacement total.', 'Check valuables, item limits and policy exclusions.'], ['Small gap to review', 'The limit is close, but recent purchases or rounding could matter.', 'Recheck the biggest categories and update the schedule if needed.'], ['Contents are underinsured', 'The entered limit is materially below the replacement total.', 'Ask for a revised quote or confirm how the policy handles underinsurance.']] },
    { type: 'title', text: 'Limits of the estimate', level: 2 },
    { type: 'paragraph', html: '<p>This tool does not read a policy, decide whether a loss is covered or calculate a binding settlement. The payout scenario uses a simple proportional model and subtracts the deductible. Real policies may use different clauses, item limits, valuation rules, exclusions or first-loss arrangements.</p>' },
    { type: 'tip', title: 'Evidence tip', html: '<p>Keep receipts, photographs and a dated inventory for high-value belongings. The Financial Ombudsman Service explains why consumers can be underinsured when they do not calculate the full replacement cost of contents, while Spanish insurance law describes the sum insured as the maximum indemnity and sets a proportional rule for underinsurance unless the policy says otherwise.</p>' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) },
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
  ],
};
