export interface FinancialFreedomInput {
  savings: number;
  expenses: number;
  expensePeriod: 'monthly' | 'yearly';
}

export interface HumanTime {
  years: number;
  months: number;
  days: number;
}

export interface FinancialFreedomResult {
  dailyBurn: number;
  monthlyBurn: number;
  totalDays: number;
  humanTime: HumanTime;
  status: 'red' | 'yellow' | 'green';
  gainWithSavings: HumanTime;
}

export class FinancialFreedomCalculator {
  static calculate(input: FinancialFreedomInput): FinancialFreedomResult {
    const { savings, expenses, expensePeriod } = input;
    
    const annualExpenses = expensePeriod === 'monthly' ? expenses * 12 : expenses;
    const monthlyBurn = annualExpenses / 12;
    const dailyBurn = annualExpenses / 365;
    
    const totalDays = dailyBurn > 0 ? savings / dailyBurn : 0;
    
    const humanTime = this.calculateHumanTime(totalDays);
    
    let status: 'red' | 'yellow' | 'green' = 'red';
    if (totalDays > 730) {
      status = 'green';
    } else if (totalDays > 180) {
      status = 'yellow';
    }
    
    const potentialSavings = annualExpenses * 0.1;
    const newAnnualExpenses = annualExpenses - potentialSavings;
    const newDailyBurn = newAnnualExpenses / 365;
    const newTotalDays = newDailyBurn > 0 ? savings / newDailyBurn : 0;
    
    const gainWithSavings = this.calculateHumanTime(newTotalDays - totalDays);

    return {
      dailyBurn: Number(dailyBurn.toFixed(2)),
      monthlyBurn: Number(monthlyBurn.toFixed(2)),
      totalDays: Math.floor(totalDays),
      humanTime,
      status,
      gainWithSavings
    };
  }

  private static calculateHumanTime(totalDays: number): HumanTime {
    if (totalDays <= 0) return { years: 0, months: 0, days: 0 };
    
    const years = Math.floor(totalDays / 365);
    const remainingDaysAfterYears = totalDays % 365;
    const months = Math.floor(remainingDaysAfterYears / 30.44);
    const days = Math.floor(remainingDaysAfterYears % 30.44);
    
    return { years, months, days };
  }
}
