import { describe, expect, it } from "vitest";
import {
  calculateScenario,
  compareScenarios,
  monthlyPaymentFromRate,
} from "./logic";

const baseScenario = {
  name: "Offer A",
  principal: 10000,
  termMonths: 36,
  mode: "rate" as const,
  annualRate: 6,
  monthlyPayment: 0,
  upfrontFees: 0,
  monthlyFees: 0,
  finalFees: 0,
};

describe("loan APR scenario logic", () => {
  it("calculates an amortising payment from a nominal annual rate", () => {
    expect(monthlyPaymentFromRate(10000, 0, 10)).toBe(1000);
    expect(monthlyPaymentFromRate(10000, 6, 36)).toBeCloseTo(304.22, 1);
  });

  it("returns the nominal rate as the effective APR when no fees are present", () => {
    const result = calculateScenario(baseScenario);
    expect(result.valid).toBe(true);
    expect(result.effectiveApr).toBeCloseTo(6.168, 3);
    expect(result.totalFees).toBe(0);
  });

  it("raises effective APR when an upfront fee reduces the cash received", () => {
    const result = calculateScenario({ ...baseScenario, upfrontFees: 450 });
    expect(result.valid).toBe(true);
    expect(result.effectiveApr).toBeGreaterThan(6);
    expect(result.netCashReceived).toBe(9550);
  });

  it("can infer an effective APR from a known monthly payment", () => {
    const result = calculateScenario({
      ...baseScenario,
      mode: "payment",
      annualRate: 0,
      monthlyPayment: 304.22,
    });
    expect(result.valid).toBe(true);
    expect(result.effectiveApr).toBeCloseTo(6.168, 2);
  });

  it("rejects non-positive cash received and malformed terms", () => {
    expect(
      calculateScenario({ ...baseScenario, upfrontFees: 10000 }).valid,
    ).toBe(false);
    expect(calculateScenario({ ...baseScenario, termMonths: 0 }).valid).toBe(
      false,
    );
  });

  it("identifies the lower effective cost", () => {
    const first = calculateScenario(baseScenario);
    const second = calculateScenario({ ...baseScenario, upfrontFees: 450 });
    expect(compareScenarios(first, second).winner).toBe("a");
  });
});
