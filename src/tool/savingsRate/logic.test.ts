import { describe, expect, it } from "vitest";
import { calculateSavingsRate } from "./logic";

describe("calculateSavingsRate", () => {
  it("calculates the current rate, annualized totals, and target gap", () => {
    const result = calculateSavingsRate({
      income: 4000,
      saved: 1200,
      extraContribution: 200,
      targetRate: 40,
      incomeChange: 0,
      spendingChange: 0,
      period: "monthly",
    });

    expect(result).toMatchObject({
      spending: 2600,
      saved: 1400,
      rate: 35,
      annualIncome: 48000,
      annualSaved: 16800,
      targetGap: 5,
      additionalToTarget: 200,
    });
    expect(result?.scenario.rate).toBe(35);
  });

  it("shows how income and spending changes alter the rate", () => {
    const result = calculateSavingsRate({
      income: 3000,
      saved: 900,
      extraContribution: 0,
      targetRate: 40,
      incomeChange: 10,
      spendingChange: -5,
      period: "monthly",
    });

    expect(result?.scenario.income).toBe(3300);
    expect(result?.scenario.spending).toBe(1995);
    expect(result?.scenario.saved).toBe(1305);
    expect(result?.scenario.rate).toBe(39.55);
    expect(result?.scenario.changeFromBase).toBe(9.55);
  });

  it("does not ask for more savings when the target is already met", () => {
    const result = calculateSavingsRate({
      income: 5000,
      saved: 2500,
      extraContribution: 0,
      targetRate: 40,
      incomeChange: 0,
      spendingChange: 0,
      period: "yearly",
    });

    expect(result?.additionalToTarget).toBe(0);
    expect(result?.targetGap).toBe(-10);
    expect(result?.annualIncome).toBe(5000);
  });

  it("rejects impossible or incomplete inputs", () => {
    expect(
      calculateSavingsRate({
        income: 0,
        saved: 0,
        extraContribution: 0,
        targetRate: 20,
        incomeChange: 0,
        spendingChange: 0,
        period: "monthly",
      }),
    ).toBeNull();

    expect(
      calculateSavingsRate({
        income: 3000,
        saved: 3500,
        extraContribution: 0,
        targetRate: 20,
        incomeChange: 0,
        spendingChange: 0,
        period: "monthly",
      }),
    ).toBeNull();
  });
});
