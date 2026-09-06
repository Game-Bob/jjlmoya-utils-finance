import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InsuranceDeductibleBreakEvenCalculatorUI } from '../ui';

export const ui: InsuranceDeductibleBreakEvenCalculatorUI = {
  labelDamageCost: 'Estimated damage cost',
  labelDeductible: 'Policy deductible',
  labelAnnualPremium: 'Current annual premium',
  labelPremiumIncrease: 'Possible premium increase',
  labelSurchargeYears: 'Years with the increase',
  labelCurrency: 'Display currency',
  labelClaimRoute: 'File a claim',
  labelPayYourselfRoute: 'Pay the damage yourself',
  labelClaimCost: 'Your estimated claim cost',
  labelPayYourselfCost: 'Your estimated self-pay cost',
  labelPremiumSurcharge: 'Estimated premium surcharge',
  labelInsurerShare: 'Amount above the deductible',
  labelBreakEvenDamage: 'Break-even damage amount',
  labelDifference: 'Potential saving by choosing the cheaper route',
  labelRecommendation: 'Model recommendation',
  labelClaimRecommended: 'Filing may cost less',
  labelPayYourselfRecommended: 'Paying yourself may cost less',
  labelBreakEvenRecommendation: 'Both routes cost about the same',
  labelVisual: 'Comparison of estimated costs for filing a claim and paying the damage yourself',
  labelReset: 'Reset example',
  labelCopy: 'Copy summary',
  labelCopied: 'Summary copied',
  labelCopyFailed: 'Copy it manually from the result',
  labelInvalidInput: 'Check the highlighted value',
  labelMethodTitle: 'How this estimate works',
  labelMethodText: 'The model treats the claim route as the deductible, or the full damage when the damage is below the deductible, plus the extra premium caused by the increase you enter. It compares that amount with paying the full damage yourself. The break-even damage amount is the deductible plus the estimated total surcharge. Check that your policy covers this type of loss and ask your insurer how a claim could affect your premium.',
  labelPrivacyNote: 'Your figures stay in this browser. No account, API or server calculation is required.',
  labelAmountPlaceholder: '0.00',
  labelPercentPlaceholder: '0 to 100',
  labelYearsPlaceholder: '0.5 to 20',
  labelApproximateRates: 'Currency changes use approximate planning factors, not live exchange rates.',
};

const slug = 'insurance-deductible-break-even-calculator';
const title = 'Insurance Deductible Break Even Calculator';
const description = 'Compare filing an insurance claim with paying for a loss yourself using your damage cost, deductible, premium and possible surcharge. This private browser estimate helps you see the break-even amount without predicting your insurer\'s decision.';

const faq = [
  {
    question: 'What does this insurance deductible calculator compare?',
    answer: 'It compares two user-defined routes for one loss: the estimated out-of-pocket cost of filing a claim and the full cost of paying for the damage yourself. The claim route includes the deductible and the possible premium surcharge you enter.',
  },
  {
    question: 'What is the break-even damage amount?',
    answer: 'In this model, it is the deductible plus the estimated total premium surcharge. Damage above that amount may make a claim cheaper, while damage below it may make self-payment cheaper. The result assumes the loss is covered and the insurer pays the eligible amount above the deductible.',
  },
  {
    question: 'Can this calculator predict whether my premium will increase?',
    answer: 'No. You provide the possible percentage and the number of years for the estimate. Your insurer, policy, claim history, location and type of loss determine what actually happens.',
  },
  {
    question: 'What if the damage is smaller than my deductible?',
    answer: 'The model shows no insurer contribution because the damage does not exceed the deductible. Filing may still have policy or reporting implications, so check your policy and ask the insurer before deciding.',
  },
  {
    question: 'Is the result insurance or legal advice?',
    answer: 'No. It is a transparent comparison using your own assumptions. It does not check coverage, depreciation, claim limits, taxes, reporting deadlines or local rules, and it does not recommend concealing a loss or delaying a required notice.',
  },
];

const howTo = [
  { name: 'Enter the estimated damage', text: 'Use the repair, replacement or loss amount you are currently considering, in the currency shown.' },
  { name: 'Add the policy deductible', text: 'Enter the deductible that applies to this type of claim, rather than a different deductible from another part of the policy.' },
  { name: 'Test the premium effect', text: 'Enter a possible percentage increase and how many years you want to include. Use zero when you want to see the deductible-only comparison.' },
  { name: 'Read the decision boundary', text: 'Compare the two estimated costs and the break-even damage amount, then confirm coverage and any reporting requirement with your insurer.' },
];

export const content: ToolLocaleContent<InsuranceDeductibleBreakEvenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    { type: 'title', text: 'Should you file a claim or pay for the damage?', level: 2 },
    { type: 'paragraph', html: '<p>A small loss can create an awkward insurance decision. The deductible is only part of the picture if you expect a claim to affect future premiums. This calculator puts your own damage estimate, deductible and possible surcharge into one transparent comparison so you can see the cost boundary before contacting the insurer.</p>' },
    { type: 'title', text: 'What you need to enter', level: 2 },
    { type: 'list', items: ['The estimated cost of the damage or repair.', 'The deductible shown for this coverage in your policy.', 'Your current annual premium.', 'A possible premium increase and how long you want to model it.'] },
    { type: 'title', text: 'How to interpret the result', level: 2 },
    { type: 'paragraph', html: '<p>The claim estimate combines the deductible with the total surcharge you entered. The self-pay estimate is the full damage cost. The break-even amount shows the loss size at which those two simplified routes meet. A recommendation is only a cost comparison: it does not establish coverage, claim eligibility or the insurer\'s actual premium decision.</p>' },
    { type: 'comparative', columns: 2, items: [
      { title: 'File a claim', description: 'Useful when the covered amount above the deductible outweighs the possible surcharge.', points: ['Pays the deductible in the model', 'Includes the entered premium effect', 'Shows the estimated insurer contribution'] },
      { title: 'Pay yourself', description: 'Useful when the loss is close to or below the modelled break-even amount.', points: ['Avoids the modelled surcharge', 'Pays the full damage estimate', 'May avoid a claim process, subject to your policy'] },
    ] },
    { type: 'title', text: 'Limits and privacy', level: 2 },
    { type: 'paragraph', html: '<p>This is not a claim decision engine. It does not read your policy, check whether the loss is covered, estimate depreciation or predict a premium. It assumes a simple covered loss where the insurer pays eligible costs above the deductible. All figures are processed in your browser, so you can test private scenarios without uploading them.</p>' },
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
