export interface LateInterestResults {
  dailyInterest: number;
  totalInterest: number;
  totalAmount: number;
  effectiveRate: number;
}

export class LateInterestCalculator {
  static formatNumber(num: number): string {
    if (isNaN(num) || !isFinite(num)) return '0';
    if (Number.isInteger(num)) return num.toString();

    let formatted = num.toFixed(2);
    formatted = formatted.replace(/0+$/, '');
    if (formatted.endsWith('.')) {
      formatted = formatted.slice(0, -1);
    }
    return formatted;
  }

  static calculateSimpleInterest(
    principal: number,
    annualRate: number,
    days: number
  ): LateInterestResults {
    if (isNaN(principal) || isNaN(annualRate) || isNaN(days)) {
      return { dailyInterest: 0, totalInterest: 0, totalAmount: 0, effectiveRate: 0 };
    }

    const dailyRate = annualRate / 365 / 100;
    const dailyInterestAmount = principal * dailyRate;
    const totalInterest = dailyInterestAmount * days;
    const totalAmount = principal + totalInterest;
    const effectiveRate = (totalInterest / principal) * 100;

    return {
      dailyInterest: dailyInterestAmount,
      totalInterest,
      totalAmount,
      effectiveRate,
    };
  }

  static calculateCompoundInterest(
    principal: number,
    annualRate: number,
    days: number
  ): LateInterestResults {
    if (isNaN(principal) || isNaN(annualRate) || isNaN(days)) {
      return { dailyInterest: 0, totalInterest: 0, totalAmount: 0, effectiveRate: 0 };
    }

    const dailyRate = annualRate / 365 / 100;
    const totalAmount = principal * Math.pow(1 + dailyRate, days);
    const totalInterest = totalAmount - principal;
    const dailyInterestAmount = principal * dailyRate;
    const effectiveRate = (totalInterest / principal) * 100;

    return {
      dailyInterest: dailyInterestAmount,
      totalInterest,
      totalAmount,
      effectiveRate,
    };
  }

  static calculateMonthlyCompoundInterest(
    principal: number,
    monthlyRate: number,
    months: number
  ): LateInterestResults {
    if (isNaN(principal) || isNaN(monthlyRate) || isNaN(months)) {
      return { dailyInterest: 0, totalInterest: 0, totalAmount: 0, effectiveRate: 0 };
    }

    const rate = monthlyRate / 100;
    const totalAmount = principal * Math.pow(1 + rate, months);
    const totalInterest = totalAmount - principal;
    const dailyInterestAmount = totalInterest / (months * 30);
    const effectiveRate = (totalInterest / principal) * 100;

    return {
      dailyInterest: dailyInterestAmount,
      totalInterest,
      totalAmount,
      effectiveRate,
    };
  }
}
