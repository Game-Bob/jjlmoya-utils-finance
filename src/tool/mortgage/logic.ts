export interface MortgageInput {
  amount: number;
  annualInterestRate: number;
  years: number;
  monthlyExtraPayment?: number;
}

export interface MortgageResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPaid: number;
  amortizationTable: AmortizationRow[];
  yearsSaved: number;
  monthsSaved: number;
  interestSaved: number;
  originalTotalInterest: number;
  actualDurationMonths: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  extraPayment: number;
  remainingBalance: number;
}

export class MortgageCalculator {
  private static calculateMonthlyPayment(amount: number, monthlyRate: number, totalMonths: number): number {
    if (monthlyRate === 0) {
      return amount / totalMonths;
    }
    const power = Math.pow(1 + monthlyRate, totalMonths);
    return (amount * (monthlyRate * power)) / (power - 1);
  }

  private static calculateOriginalInterest(amount: number, monthlyRate: number, totalMonths: number, monthlyPaymentBase: number): number {
    let originalTotalInterest = 0;
    let tempBalance = amount;
    for (let i = 0; i < totalMonths; i++) {
      const interest = tempBalance * monthlyRate;
      originalTotalInterest += interest;
      tempBalance -= monthlyPaymentBase - interest;
    }
    return originalTotalInterest;
  }

  private static processMonthlyPayment(balance: number, monthlyRate: number, monthlyPaymentBase: number, monthlyExtraPayment: number): { interest: number; principal: number; extra: number; newBalance: number } {
    const interestPayment = balance * monthlyRate;
    let principalPayment = monthlyPaymentBase - interestPayment;
    let currentExtra = monthlyExtraPayment;

    if (principalPayment + currentExtra > balance) {
      if (principalPayment > balance) {
        principalPayment = balance;
        currentExtra = 0;
      } else {
        currentExtra = balance - principalPayment;
      }
      return { interest: interestPayment, principal: principalPayment, extra: currentExtra, newBalance: 0 };
    }

    const newBalance = balance - principalPayment - currentExtra;
    return { interest: interestPayment, principal: principalPayment, extra: currentExtra, newBalance: newBalance < 0.01 ? 0 : newBalance };
  }

  private static buildAmortizationTable(config: { amount: number; monthlyRate: number; totalMonths: number; monthlyPaymentBase: number; monthlyExtraPayment: number }): { table: AmortizationRow[]; totalInterest: number; actualMonths: number } {
    const { amount, monthlyRate, totalMonths, monthlyPaymentBase, monthlyExtraPayment } = config;
    const table: AmortizationRow[] = [];
    let remainingBalance = amount;
    let totalInterest = 0;
    let actualMonths = 0;

    for (let month = 1; month <= totalMonths; month++) {
      const payment = this.processMonthlyPayment(remainingBalance, monthlyRate, monthlyPaymentBase, monthlyExtraPayment);

      totalInterest += payment.interest;
      actualMonths = month;
      remainingBalance = payment.newBalance;

      table.push({
        month,
        payment: Number((payment.principal + payment.interest + payment.extra).toFixed(2)),
        interest: Number(payment.interest.toFixed(2)),
        principal: Number(payment.principal.toFixed(2)),
        extraPayment: Number(payment.extra.toFixed(2)),
        remainingBalance: Number(remainingBalance.toFixed(2)),
      });

      if (remainingBalance <= 0) break;
    }

    return { table, totalInterest, actualMonths };
  }

  static calculate(input: MortgageInput): MortgageResult {
    const { amount, annualInterestRate, years, monthlyExtraPayment = 0 } = input;
    const monthlyRate = annualInterestRate / 100 / 12;
    const totalMonths = years * 12;

    const monthlyPaymentBase = this.calculateMonthlyPayment(amount, monthlyRate, totalMonths);
    const originalTotalInterest = this.calculateOriginalInterest(amount, monthlyRate, totalMonths, monthlyPaymentBase);
    const { table: amortizationTable, totalInterest, actualMonths } = this.buildAmortizationTable({ amount, monthlyRate, totalMonths, monthlyPaymentBase, monthlyExtraPayment });

    return {
      monthlyPayment: Number(monthlyPaymentBase.toFixed(2)),
      totalInterest: Number(totalInterest.toFixed(2)),
      totalPaid: Number((amount + totalInterest).toFixed(2)),
      amortizationTable,
      originalTotalInterest: Number(originalTotalInterest.toFixed(2)),
      interestSaved: Number((originalTotalInterest - totalInterest).toFixed(2)),
      actualDurationMonths: actualMonths,
      monthsSaved: totalMonths - actualMonths,
      yearsSaved: Number(((totalMonths - actualMonths) / 12).toFixed(1)),
    };
  }
}
