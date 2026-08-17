export const validation = {
  reviewedAt: '2026-08-17',
  methodology: 'The calculator models repayment using the entered balance, rate, payment, and fees, while presenting assumptions and limitations with the result.',
  sources: [
    'User-provided balance, interest rate, payment, fee, and period inputs.',
    'Formula definitions maintained beside the revolving-card calculator.',
  ],
  referenceCases: [
    'A zero balance produces no outstanding principal.',
    'Increasing the payment while holding other inputs constant does not increase the estimated payoff duration.',
  ],
  limitations: [
    'Actual lender terms, variable rates, fees, rounding, and payment dates may change the outcome.',
    'The result is educational and does not represent official financial data or advice.',
  ],
};
