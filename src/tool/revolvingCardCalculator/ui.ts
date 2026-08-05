export interface RevolvingCardCalculatorUI extends Record<string, unknown> {
  title: string;
  balanceLabel: string;
  creditLimitLabel: string;
  aprLabel: string;
  paymentTypeLabel: string;
  paymentTypeFixed: string;
  paymentTypePercentage: string;
  paymentValueLabel: string;
  minPaymentValueLabel: string;
  currencyLabel: string;
  marketLabel: string;
  marketES: string;
  marketUS: string;
  marketUK: string;
  marketEU: string;
  marketJP: string;
  marketKR: string;
  marketCN: string;
  marketBR: string;
  marketMX: string;
  marketPL: string;
  marketID: string;
  marketTR: string;
  marketRU: string;
  marketSE: string;
  marketAU: string;
  marketCA: string;
  marketCustom: string;
  customThresholdLabel: string;

  resultsTitle: string;
  totalInterestLabel: string;
  totalPaidLabel: string;
  monthsToPayLabel: string;
  infiniteDebtWarning: string;
  payoffYearsLabel: string;

  usuryTitle: string;
  usurySafeStatus: string;
  usuryWarningStatus: string;
  usuryUsuriousStatus: string;
  usuryReferenceLabel: string;
  usuryThresholdLabel: string;

  tableTitle: string;
  tableHeaderMonth: string;
  tableHeaderInitial: string;
  tableHeaderInterest: string;
  tableHeaderPrincipal: string;
  tableHeaderPayment: string;
  tableHeaderFinal: string;

  copyTooltip: string;
  copiedLabel: string;
  currencySymbol: string;
  percentSymbol: string;
}
