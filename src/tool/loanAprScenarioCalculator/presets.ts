import { defaultState } from "./storage";
import { writeScenario } from "./scenario-dom";

function lowFeeState() {
  const state = defaultState();
  return {
    ...state,
    scenarioA: {
      ...state.scenarioA,
      annualRate: 6.8,
      monthlyPayment: 307.72,
      upfrontFees: 0,
      monthlyFees: 0,
    },
    scenarioB: {
      ...state.scenarioB,
      annualRate: 6.4,
      monthlyPayment: 305.95,
      upfrontFees: 500,
      monthlyFees: 4,
    },
  };
}

function longTermState() {
  const state = defaultState();
  return {
    ...state,
    scenarioA: {
      ...state.scenarioA,
      termMonths: 60,
      annualRate: 5.8,
      monthlyPayment: 192.26,
    },
    scenarioB: {
      ...state.scenarioB,
      termMonths: 60,
      annualRate: 5.1,
      monthlyPayment: 189.11,
      upfrontFees: 350,
    },
  };
}

export function applyPreset(root: HTMLElement, preset: string): void {
  let state = defaultState();
  if (preset === "low-fee") state = lowFeeState();
  if (preset === "long-term") state = longTermState();
  writeScenario(root, "a", state.scenarioA);
  writeScenario(root, "b", state.scenarioB);
}
