export interface Debt {
  id: string;
  name: string;
  balance: number;
  minPayment: number;
  rate: number;
}

interface DebtState extends Debt {
  balance: number;
}

export interface SimulationResult {
  proj: ProjectionMonth[];
  mo: number;
  totalI: number;
  totalP: number;
  isGrowing: boolean;
}

export interface ProjectionMonth {
  mo: number;
  iniB: number;
  int: number;
  princ: number;
  total: number;
  finB: number;
}

interface MonthParams {
  current: DebtState[];
  proj: ProjectionMonth[];
  initialTotalCommitment: number;
  mo: number;
}

export class DebtSnowballLogic {
  static simulate(debts: Debt[], extra: number, method: 'snowball' | 'avalanche'): SimulationResult | null {
    if (debts.length === 0) return null;
    const current = this.initializeDebts(debts, method);
    const initialTotalCommitment = debts.reduce((s, d) => s + d.minPayment, 0) + extra;
    const result = { proj: [] as ProjectionMonth[], totalI: 0, totalP: 0, isGrowing: false, mo: 0 };

    while (current.some((d) => d.balance > 0.01) && result.mo < 600) {
      const monthI = this.processMonth({ current, proj: result.proj, initialTotalCommitment, mo: result.mo });
      result.totalI += monthI;
      this.checkGrowingDebt(result, current);
      if (result.isGrowing && result.mo > 24) break;
      result.totalP = result.proj[result.mo]?.total || result.totalP;
      result.mo++;
    }

    return result;
  }

  private static checkGrowingDebt(result: { proj: ProjectionMonth[]; isGrowing: boolean; mo: number }, current: DebtState[]) {
    const finB = current.reduce((s: number, d: DebtState) => s + d.balance, 0);
    const iniB = result.proj[result.mo]?.iniB || 0;
    result.isGrowing = finB >= iniB && result.mo > 1 && iniB > 0;
  }

  private static initializeDebts(debts: Debt[], method: 'snowball' | 'avalanche'): DebtState[] {
    const current = JSON.parse(JSON.stringify(debts)).map((d: Debt) => ({
      ...d,
      balance: parseFloat(d.balance.toString()),
      minPayment: parseFloat(d.minPayment.toString()),
      rate: parseFloat(d.rate.toString()),
    })) as DebtState[];

    if (method === 'snowball') {
      current.sort((a, b) => a.balance - b.balance);
    } else {
      current.sort((a, b) => b.rate - a.rate);
    }
    return current;
  }

  private static processMonth(params: MonthParams): number {
    const { current, proj, initialTotalCommitment, mo } = params;
    const iniB = current.reduce((s: number, d: DebtState) => s + d.balance, 0);
    const monthI = this.applyInterestAndMinPayments(current);
    const paidThisMonth = this.distributePayments(current, initialTotalCommitment);
    const finB = current.reduce((s: number, d: DebtState) => s + d.balance, 0);

    proj.push({
      mo: mo + 1,
      iniB,
      int: monthI,
      princ: paidThisMonth - monthI,
      total: paidThisMonth,
      finB: Math.max(0, finB),
    });

    return monthI;
  }

  private static applyInterestAndMinPayments(current: DebtState[]): number {
    let monthI = 0;
    current.forEach((d) => {
      if (d.balance > 0) {
        const i = d.balance * ((d.rate / 100) / 12);
        d.balance += i;
        monthI += i;
      }
    });
    return monthI;
  }

  private static distributePayments(current: DebtState[], initialTotalCommitment: number): number {
    let paidThisMonth = 0;
    current.forEach((d) => {
      if (d.balance > 0) {
        const p = Math.min(d.balance, d.minPayment);
        d.balance -= p;
        paidThisMonth += p;
      }
    });

    const availableExtra = initialTotalCommitment - paidThisMonth;
    if (availableExtra > 0) {
      const target = current.find((d) => d.balance > 0.01);
      if (target) {
        const extraPay = Math.min(target.balance, availableExtra);
        target.balance -= extraPay;
        paidThisMonth += extraPay;
      }
    }

    return paidThisMonth;
  }

  static simulateNoExtra(debts: Debt[]): { totalI: number } | null {
    if (!debts.length) return null;
    const current = JSON.parse(JSON.stringify(debts));
    let mo = 0;
    let totalI = 0;

    while (current.some((d: Debt) => d.balance > 0.01) && mo < 480) {
      const iniB = current.reduce((s: number, d: Debt) => s + d.balance, 0);
      current.forEach((d: Debt) => {
        if (d.balance > 0) {
          const i = d.balance * ((d.rate / 100) / 12);
          d.balance += i;
          totalI += i;
          const p = Math.min(d.balance, d.minPayment);
          d.balance -= p;
        }
      });
      const finB = current.reduce((s: number, d: Debt) => s + d.balance, 0);
      if (finB > iniB && mo > 24) break;
      mo++;
    }

    return { totalI };
  }
}
