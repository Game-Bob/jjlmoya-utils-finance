export const validation = {
  reviewedAt: '2026-08-17',
  methodology: 'The calculator applies the documented profitability inputs and exposes assumptions in the user interface; it is not a substitute for accounting or tax advice.',
  sources: [
    'User-provided revenue, cost, margin, and period inputs.',
    'Formula definitions maintained beside the profitability calculator.',
  ],
  referenceCases: [
    'Zero revenue and zero cost return a zero result without division errors.',
    'Positive revenue with positive cost preserves the expected margin relationship.',
  ],
  limitations: [
    'The result depends on the accuracy and period of the supplied figures.',
    'No official rate, accounting classification, or tax treatment is inferred.',
  ],
};
