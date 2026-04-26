export interface ProfitabilityInput {
  initialInvestment: number;
  finalValue: number;
  timeValue: number;
  timeUnit: 'days' | 'months' | 'years';
}

export interface ProfitabilityResult {
  roi: number;
  cagr: number;
  netProfit: number;
  isPositive: boolean;
  years: number;
}

export class ProfitabilityCalculator {
  static calculate(input: ProfitabilityInput): ProfitabilityResult {
    const { initialInvestment, finalValue, timeValue, timeUnit } = input;
    
    let years = 0;
    if (timeUnit === 'days') years = timeValue / 365;
    else if (timeUnit === 'months') years = timeValue / 12;
    else years = timeValue;

    const netProfit = finalValue - initialInvestment;
    const isPositive = netProfit >= 0;
    
    const roi = initialInvestment !== 0 ? (netProfit / initialInvestment) * 100 : 0;
    
    let cagr = 0;
    if (initialInvestment > 0 && finalValue > 0 && years > 0) {
      cagr = (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100;
    }

    return {
      roi: Number(roi.toFixed(2)),
      cagr: Number(cagr.toFixed(2)),
      netProfit: Number(netProfit.toFixed(2)),
      isPositive,
      years
    };
  }
}
