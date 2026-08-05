export type RevolvingMarket =
  | 'es'
  | 'us'
  | 'uk'
  | 'eu'
  | 'jp'
  | 'kr'
  | 'cn'
  | 'br'
  | 'mx'
  | 'pl'
  | 'id'
  | 'tr'
  | 'ru'
  | 'se'
  | 'au'
  | 'ca'
  | 'custom';

export interface RevolvingInputs {
  balance: number;
  creditLimit: number;
  apr: number;
  paymentType: 'fixed' | 'percentage';
  paymentValue: number;
  minPaymentValue: number;
  market: RevolvingMarket;
  customThreshold?: number;
}

export interface AmortizationRow {
  month: number;
  initialBalance: number;
  interestPaid: number;
  principalPaid: number;
  payment: number;
  finalBalance: number;
}

export interface AmortizationResult {
  schedule: AmortizationRow[];
  totalInterest: number;
  totalPaid: number;
  monthsToPay: number;
  isInfinite: boolean;
}

export interface UsuryAnalysis {
  status: 'safe' | 'warning' | 'usurious';
  marketName: string;
  referenceRate: number;
  thresholdRate: number;
  details: string;
}
