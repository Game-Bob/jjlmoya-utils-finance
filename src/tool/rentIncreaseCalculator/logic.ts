export class RentIncreaseCalculator {
  static calculate(currentRent: number, percentage: number) {
    const monthlyIncrease = currentRent * (percentage / 100);
    const newRent = currentRent + monthlyIncrease;
    const yearlyIncrease = monthlyIncrease * 12;

    return {
      currentRent,
      percentage,
      monthlyIncrease,
      newRent,
      yearlyIncrease,
      barRatio: currentRent > 0 ? (currentRent / newRent) * 100 : 0,
    };
  }

  static validateInputs(currentRent: number, percentage: number): boolean {
    return currentRent > 0 && percentage >= 0 && percentage <= 100;
  }

  static generateReport(
    currentRent: number,
    percentage: number,
    isLegal: boolean,
    formatFn: (val: number) => string
  ): string {
    const calc = this.calculate(currentRent, percentage);
    const percentageLabel = isLegal ? "3% (Legal Limit)" : `${percentage}%`;

    return `
RENT INCREASE UPDATE
----------------------------------
Previous Rent: ${formatFn(calc.currentRent)}
Applied Percentage: ${percentageLabel}
----------------------------------
MONTHLY INCREASE: +${formatFn(calc.monthlyIncrease)}
NEW MONTHLY RENT: ${formatFn(calc.newRent)}
ANNUAL EXTRA COST: +${formatFn(calc.yearlyIncrease)}

Calculated at jjlmoya.es
    `.trim();
  }
}
