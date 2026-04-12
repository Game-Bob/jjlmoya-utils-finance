export interface FIRECalculationResult {
  magicNumber: number;
  monthlyExpenses: number;
  annualExpenses: number;
  annualReturn: number;
  currentWorth: number;
  monthlySavings: number;
  swr: number;
  yearsToFI: number;
  monthsToFI: number;
  leanTarget: number;
  baristaTarget: number;
  fatTarget: number;
  wealthHistory: number[];
  isAlreadyFI: boolean;
  isAchievable: boolean;
}

export class FIRELogic {
  static calculateFIRE(
    monthlyExpenses: number,
    swr: number,
    currentWorth: number,
    monthlySavings: number,
    annualReturn: number,
    extraCosts: number = 0
  ): FIRECalculationResult {
    const totalExpenses = monthlyExpenses + extraCosts;
    const annualExpenses = totalExpenses * 12;
    const swrDecimal = swr / 100;
    const magicNumber = annualExpenses / swrDecimal;

    const monthlyReturn = Math.pow(1 + annualReturn / 100, 1 / 12) - 1;
    const r = monthlyReturn;
    const PMT = monthlySavings;
    const PV = currentWorth;
    const FV = magicNumber;

    let months = 0;
    let isAlreadyFI = false;
    let isAchievable = true;

    if (PV >= FV) {
      months = 0;
      isAlreadyFI = true;
    } else if (r === 0) {
      if (PMT > 0) {
        months = (FV - PV) / PMT;
      } else {
        isAchievable = false;
        months = Infinity;
      }
    } else {
      const numerator = FV * r + PMT;
      const denominator = PV * r + PMT;
      if (numerator > 0 && denominator > 0) {
        months = Math.log(numerator / denominator) / Math.log(1 + r);
      } else {
        isAchievable = false;
        months = Infinity;
      }
    }

    const yearsToFI = Math.floor(months / 12);
    const monthsToFI = Math.ceil(months) % 12;

    const leanTarget = magicNumber * 0.7;
    const baristaTarget = magicNumber * 0.5;
    const fatTarget = magicNumber * 1.5;

    const wealthHistory = this.generateWealthHistory(
      PV,
      PMT,
      r,
      FV,
      isFinite(months) ? Math.max(months, 12) : 12 * 50,
      50
    );

    return {
      magicNumber,
      monthlyExpenses: totalExpenses,
      annualExpenses,
      annualReturn,
      currentWorth,
      monthlySavings,
      swr,
      yearsToFI,
      monthsToFI,
      leanTarget,
      baristaTarget,
      fatTarget,
      wealthHistory,
      isAlreadyFI,
      isAchievable,
    };
  }

  private static generateWealthHistory(
    PV: number,
    PMT: number,
    r: number,
    FV: number,
    duration: number,
    steps: number
  ): number[] {
    const history: number[] = [PV];

    for (let i = 1; i <= steps; i++) {
      const t = (i / steps) * duration;
      let w: number;
      if (r === 0) {
        w = PV + PMT * t;
      } else {
        w = PV * Math.pow(1 + r, t) + (PMT * (Math.pow(1 + r, t) - 1)) / r;
      }
      history.push(w);
    }

    return history;
  }

  static getMilestoneProgress(current: number, target: number): number {
    return Math.min(100, (current / target) * 100);
  }
}
