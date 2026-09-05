export const validationEvidence = {
  reviewedAt: '2026-09-05',
  reviewer: {
    name: 'GameBob finance utility team',
    expertise: 'Client-side financial calculators and transparent ratio formulas',
  },
  jurisdiction: ['General educational use'],
  methodology:
    'Monthly debt-to-income ratio is monthly debt payments divided by the selected monthly income basis, multiplied by 100. The projected scenario adds the user-entered new monthly payment. Currency switching converts all monetary inputs using the dated EUR reference factor before recalculation; values are rounded to two decimal places for display and the threshold comparison uses the unrounded values.',
  version: '1.0',
  sources: [
    {
      title: 'What is a debt-to-income ratio?',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/',
      accessedAt: '2026-09-05',
      primary: true,
    },
  ],
  referenceCases: [
    {
      name: 'Simple monthly ratio',
      input: { monthlyDebt: 2000, monthlyIncome: 6000 },
      expected: { ratio: 33.33 },
      tolerance: 0.01,
      sourceUrl: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/',
    },
  ],
  limitations: [
    'Does not estimate lender approval, affordability, creditworthiness or legal compliance.',
    'Different lenders and loan products may use different definitions, income bases and limits.',
    'The user must choose an income basis and enter the payments relevant to their own situation.',
    'Currency rates are dated reference values for display comparisons, not live transaction quotes.',
  ],
} as const;
