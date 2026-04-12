export interface PercentageResults {
  percentOfNumber: number;
  percentageOf: number;
  percentageDifference: number;
  addPercentage: number;
  subtractPercentage: number;
}

export class PercentageCalculator {
  static formatNumber(num: number): string {
    if (isNaN(num) || !isFinite(num)) return '0';
    if (Number.isInteger(num)) return num.toString();

    let formatted = num.toFixed(4);
    formatted = formatted.replace(/0+$/, '');
    if (formatted.endsWith('.')) {
      formatted = formatted.slice(0, -1);
    }
    return formatted;
  }

  static calculatePercentOfNumber(percentage: number, number: number): number {
    if (isNaN(percentage) || isNaN(number)) return 0;
    return (percentage / 100) * number;
  }

  static calculateWhatPercentageIs(x: number, y: number): number {
    if (isNaN(x) || isNaN(y) || y === 0) return 0;
    return (x / y) * 100;
  }

  static calculatePercentageDifference(value1: number, value2: number): number {
    if (isNaN(value1) || isNaN(value2) || value1 === 0) return 0;
    return ((value2 - value1) / Math.abs(value1)) * 100;
  }

  static calculateAddPercentage(value: number, percentage: number): number {
    if (isNaN(value) || isNaN(percentage)) return 0;
    const amount = value * (percentage / 100);
    return value + amount;
  }

  static calculateSubtractPercentage(value: number, percentage: number): number {
    if (isNaN(value) || isNaN(percentage)) return 0;
    const amount = value * (percentage / 100);
    return value - amount;
  }
}
