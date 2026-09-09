import type { LoanMode, LoanScenarioInput } from "./logic";
import { isLoanAprCurrencyCode, type LoanAprCurrencyCode } from "./currency";

export interface LoanAprStoredState {
  scenarioA: LoanScenarioInput;
  scenarioB: LoanScenarioInput;
  currency: LoanAprCurrencyCode;
}

const STORAGE_KEY = "loan-apr-scenario-calculator:v1";

export function loadStoredState(): LoanAprStoredState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as LoanAprStoredState;
    if (!value || !value.scenarioA || !value.scenarioB) return null;
    return {
      ...value,
      currency: isLoanAprCurrencyCode(value.currency) ? value.currency : "USD",
    };
  } catch {}
  return null;
}

export function saveStoredState(state: LoanAprStoredState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function defaultScenario(
  name: string,
  mode: LoanMode = "rate",
): LoanScenarioInput {
  return {
    name,
    principal: 10000,
    termMonths: 36,
    mode,
    annualRate: 6,
    monthlyPayment: 304.22,
    upfrontFees: 0,
    monthlyFees: 0,
    finalFees: 0,
  };
}

export function defaultState(): LoanAprStoredState {
  return {
    scenarioA: defaultScenario("Offer A"),
    scenarioB: {
      ...defaultScenario("Offer B"),
      annualRate: 7.25,
      monthlyPayment: 309.88,
      upfrontFees: 150,
    },
    currency: "USD",
  };
}
