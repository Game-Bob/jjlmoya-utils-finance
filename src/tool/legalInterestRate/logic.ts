export interface LegalInterestResult {
  capital: number;
  days: number;
  rate: number;
  interest: number;
  total: number;
}

export class LegalInterestLogic {
  private static readonly RATE = 3.25;
  private static readonly DAYS_PER_YEAR = 365;

  static calculateInterest(capital: number, days: number): LegalInterestResult {
    const interest = (capital * this.RATE * days) / (this.DAYS_PER_YEAR * 100);
    const total = capital + interest;

    return {
      capital,
      days,
      rate: this.RATE,
      interest,
      total,
    };
  }

  static getRate(): number {
    return this.RATE;
  }
}
