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

interface CalcParams {
  monthlyExpenses: number;
  swr: number;
  currentWorth: number;
  monthlySavings: number;
  annualReturn: number;
  extraCosts?: number;
}

interface HistoryParams {
  pv: number;
  pmt: number;
  r: number;
  totalMonths: number;
}

export class FIRELogic {
  static calculateFIRE(params: CalcParams): FIRECalculationResult {
    const totalExpenses = params.monthlyExpenses + (params.extraCosts || 0);
    const annualExpenses = totalExpenses * 12;
    const magicNumber = annualExpenses / (params.swr / 100);
    const monthlyReturn = Math.pow(1 + params.annualReturn / 100, 1 / 12) - 1;
    const timeAndTargets = this.calculateTimeToFI(monthlyReturn, params.currentWorth, params.monthlySavings, magicNumber);
    const wealthHistory = this.generateWealthHistory({ pv: params.currentWorth, pmt: params.monthlySavings, r: monthlyReturn, totalMonths: timeAndTargets.months });
    const { leanTarget, baristaTarget, fatTarget } = this.calculateTargets(magicNumber);
    return {
      magicNumber, monthlyExpenses: totalExpenses, annualExpenses, annualReturn: params.annualReturn, currentWorth: params.currentWorth,
      monthlySavings: params.monthlySavings, swr: params.swr, yearsToFI: timeAndTargets.yearsToFI, monthsToFI: timeAndTargets.monthsToFI,
      leanTarget, baristaTarget, fatTarget, wealthHistory, isAlreadyFI: timeAndTargets.isAlreadyFI, isAchievable: timeAndTargets.isAchievable,
    };
  }

  private static calculateTimeToFI(
    r: number,
    PV: number,
    PMT: number,
    FV: number
  ): { months: number; yearsToFI: number; monthsToFI: number; isAlreadyFI: boolean; isAchievable: boolean } {
    let months = 0;
    let isAlreadyFI = false;
    let isAchievable = true;

    if (PV >= FV) {
      isAlreadyFI = true;
    } else if (r === 0) {
      isAchievable = PMT > 0;
      months = isAchievable ? (FV - PV) / PMT : Infinity;
    } else {
      const numerator = FV * r + PMT;
      const denominator = PV * r + PMT;
      isAchievable = numerator > 0 && denominator > 0;
      months = isAchievable ? Math.log(numerator / denominator) / Math.log(1 + r) : Infinity;
    }

    return {
      months,
      yearsToFI: Math.floor(months / 12),
      monthsToFI: Math.ceil(months) % 12,
      isAlreadyFI,
      isAchievable,
    };
  }

  private static generateWealthHistory(params: HistoryParams): number[] {
    const { pv, pmt, r, totalMonths } = params;
    const history: number[] = [pv];
    const steps = 50;
    const duration = isFinite(totalMonths) ? Math.max(totalMonths, 12) : 12 * 50;

    for (let i = 1; i <= steps; i++) {
      const t = (i / steps) * duration;
      const w = r === 0 ? pv + pmt * t : pv * Math.pow(1 + r, t) + (pmt * (Math.pow(1 + r, t) - 1)) / r;
      history.push(w);
    }

    return history;
  }

  private static calculateTargets(magicNumber: number) {
    return {
      leanTarget: magicNumber * 0.7,
      baristaTarget: magicNumber * 0.5,
      fatTarget: magicNumber * 1.5,
    };
  }

  static getMilestoneProgress(current: number, target: number): number {
    return Math.min(100, (current / target) * 100);
  }
}
