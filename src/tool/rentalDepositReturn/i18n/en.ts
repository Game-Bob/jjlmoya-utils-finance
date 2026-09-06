import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { RentalDepositReturnUI } from '../ui';

const ui: RentalDepositReturnUI = {
  depositLabel: 'Deposit paid',
  depositHelp: 'Use the amount actually paid as the deposit, in the same currency as every line below.',
  deductionsTitle: 'Items kept from the deposit',
  deductionsHelp: 'Enter the landlord or agent\'s own breakdown. Mark a line disputed when you want to test the amount without it.',
  descriptionLabel: 'Description',
  descriptionPlaceholder: 'e.g. Final water bill',
  amountLabel: 'Amount',
  statusLabel: 'Deduction status',
  confirmedOption: 'Confirmed',
  disputedOption: 'Disputed',
  addButton: 'Add deduction',
  resetButton: 'Restore example',
  newDeductionLabel: 'New deduction',
  removeButton: 'Remove this deduction',
  currencyLabel: 'Currency',
  currencyHelp: 'All figures stay in this currency. No exchange rates are used.',
  summaryTitle: 'Confirmed vs disputed',
  estimatedReturnLabel: 'Estimated return',
  undisputedReturnLabel: 'If disputed items are removed',
  totalDeductionsLabel: 'Total deductions',
  deductionBreakdownTitle: 'The ledger behind the result',
  confirmedLabel: 'Confirmed items',
  disputedLabel: 'Disputed items',
  returnFlowTitle: 'Deposit to return',
  returnFlowText: 'A clear split between what is being kept and what could come back.',
  depositNode: 'Deposit in',
  deductionNode: 'Kept for deductions',
  returnNode: 'Estimated back',
  overDeductedTitle: 'The deductions exceed the deposit',
  overDeductedText: 'The entered breakdown is above the deposit by',
  scenariosTitle: 'One dispute at a time',
  scenariosText: 'These scenarios show the return if one disputed line is removed while all other lines stay in place.',
  scenarioColumn: 'Removed line',
  scenarioReturnColumn: 'Return if removed',
  scenarioIncreaseColumn: 'Increase in return',
  noDisputed: 'Mark a line as disputed to see a comparison scenario.',
  emptyMessage: 'Add a deposit and use a description with a zero or positive amount for every deduction.',
  copyButton: 'Copy claim summary',
  copiedButton: 'Summary copied',
  privacyNote: 'Your figures stay in this browser. Nothing is sent to a server.',
  methodTitle: 'How this estimate works',
  methodText: 'The tool adds every deduction, subtracts that total from the deposit and floors the estimated return at zero. A disputed scenario removes one disputed line from the total so you can compare the effect of that line.',
  limitationText: 'This is a calculation of your own figures, not a legal decision. Deposit rules, allowable deductions, evidence requirements and deadlines vary by jurisdiction and agreement.',
  reportTitle: 'Rental deposit return summary',
  reportDeposit: 'Deposit paid',
  reportDeductions: 'Deductions entered',
  reportConfirmed: 'Confirmed deductions',
  reportDisputed: 'Disputed deductions',
  reportEstimatedReturn: 'Estimated return',
  reportPotentialReturn: 'Return if disputed items are removed',
  reportNote: 'Check the agreement, invoices, condition record and local process before making a claim.',
};

const faq = [
  { question: 'What does the rental deposit return calculator estimate?', answer: 'It totals the deduction amounts you enter and subtracts them from the deposit. It also shows the amount that would remain if disputed lines were removed one at a time.' },
  { question: 'Does the calculator decide whether a deduction is legal?', answer: 'No. It only transforms your own figures. The rules, evidence and deadlines for a deposit depend on the tenancy agreement and the jurisdiction.' },
  { question: 'What should I enter as a disputed item?', answer: 'Use a line for a charge you want to question, such as a repair, cleaning fee, unpaid bill or rent balance. The scenario shows how much the return changes if that line is left out.' },
];

const howTo = [
  { name: 'Enter the deposit', text: 'Type the deposit amount that was actually paid and choose its currency.' },
  { name: 'Add the breakdown', text: 'Enter each deduction from the statement or settlement, with its amount and a confirmed or disputed status.' },
  { name: 'Compare the returns', text: 'Read the estimated return, the return without disputed items and the one-line dispute scenarios.' },
  { name: 'Copy the summary', text: 'Copy the figures into your own message or notes, then check the agreement and supporting documents before claiming.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Estimate a rental deposit return',
  description: 'Compare a rental deposit with the deductions in your own settlement.',
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rental Deposit Return Calculator',
  description: 'Estimate a rental deposit return from your own deductions and compare disputed items.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<RentalDepositReturnUI> = {
  slug: 'rental-deposit-return-calculator',
  title: 'Rental Deposit Return Calculator',
  description: 'Estimate how much of your rental deposit could come back after itemising confirmed and disputed deductions.',
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Turn a deposit statement into a return estimate', level: 2 },
    { type: 'paragraph', html: '<p>When a tenancy ends, a settlement can mix the deposit, unpaid bills, cleaning, repairs and other charges in one opaque figure. This browser-only calculator lets you enter that statement and see the arithmetic behind the estimated return.</p>' },
    { type: 'title', text: 'Separate confirmed and disputed deductions', level: 3 },
    { type: 'paragraph', html: '<p>Mark each line as confirmed or disputed. The main estimate includes every line, while the comparison shows what would come back if a disputed line were removed. That turns a vague disagreement into a specific amount to check against invoices, the condition record and the tenancy agreement.</p>' },
    { type: 'list', items: ['Deposit paid and total deductions', 'Return estimate with the full breakdown', 'Return if disputed items are removed', 'A copyable summary for your own claim notes'] },
    { type: 'title', text: 'A calculation, not a legal ruling', level: 3 },
    { type: 'paragraph', html: '<p>Deposit protection and deduction rules differ across countries, regions and agreements. The tool does not decide whether a charge is lawful, reasonable or evidenced, and it does not apply a universal deadline or percentage.</p>' },
  ],
};
