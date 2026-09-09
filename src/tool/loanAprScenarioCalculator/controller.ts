import { calculateScenario, compareScenarios } from "./logic";
import type { LoanAprCurrencyCode } from "./currency";
import {
  defaultState,
  loadStoredState,
  saveStoredState,
  type LoanAprStoredState,
} from "./storage";
import { formatResultForCopy, renderComparison } from "./dom-views";
import type { LoanAprScenarioCalculatorUI } from "./ui";
import {
  closeCurrencyMenu,
  convertMoneyFields,
  setCurrencyState,
  toggleCurrencyMenu,
} from "./currency-dom";
import { applyPreset } from "./presets";
import {
  readScenario,
  setMode,
  writeScenario,
  type ScenarioSide,
} from "./scenario-dom";

function readState(
  root: HTMLElement,
  currency: LoanAprCurrencyCode,
): LoanAprStoredState {
  return {
    scenarioA: readScenario(root, "a"),
    scenarioB: readScenario(root, "b"),
    currency,
  };
}

function render(
  root: HTMLElement,
  ui: LoanAprScenarioCalculatorUI,
  locale: string,
  currency: LoanAprCurrencyCode,
): { copy: string } {
  const state = readState(root, currency);
  const first = calculateScenario(state.scenarioA);
  const second = calculateScenario(state.scenarioB);
  const comparison = compareScenarios(first, second);
  const result = root.querySelector<HTMLElement>("[data-result]");
  if (result)
    renderComparison({
      root: result,
      first,
      second,
      comparison,
      context: { ui, locale, currency },
    });
  saveStoredState(state);
  return {
    copy: formatResultForCopy({
      first,
      second,
      comparison,
      context: { ui, locale, currency },
    }),
  };
}

export function setupLoanAprScenarioCalculator(
  root: HTMLElement,
  ui: LoanAprScenarioCalculatorUI,
  locale: string,
  defaultCurrency: LoanAprCurrencyCode,
): void {
  const stored = loadStoredState();
  const initialState = stored ?? defaultState();
  let selectedCurrency = stored?.currency ?? defaultCurrency;
  writeScenario(root, "a", initialState.scenarioA);
  writeScenario(root, "b", initialState.scenarioB);
  setCurrencyState(root, selectedCurrency);
  const copyStatus = root.querySelector<HTMLElement>("[data-copy-status]");
  render(root, ui, locale, selectedCurrency);
  const context: ControllerContext = {
    ui,
    locale,
    defaultCurrency,
    status: copyStatus,
    getCurrency: () => selectedCurrency,
    setCurrency: (currency) => {
      selectedCurrency = currency;
    },
  };
  bindEvents(root, context);
}

function bindEvents(root: HTMLElement, context: ControllerContext): void {
  root.addEventListener("input", () =>
    render(root, context.ui, context.locale, context.getCurrency()),
  );
  root.addEventListener("change", () =>
    render(root, context.ui, context.locale, context.getCurrency()),
  );
  root.addEventListener("click", (event) => handleClick(root, event, context));
}

interface ControllerContext {
  ui: LoanAprScenarioCalculatorUI;
  locale: string;
  defaultCurrency: LoanAprCurrencyCode;
  status: HTMLElement | null;
  getCurrency: () => LoanAprCurrencyCode;
  setCurrency: (currency: LoanAprCurrencyCode) => void;
}

function resetTool(root: HTMLElement, context: ControllerContext): void {
  const reset = defaultState();
  writeScenario(root, "a", reset.scenarioA);
  writeScenario(root, "b", reset.scenarioB);
  context.setCurrency(context.defaultCurrency);
  setCurrencyState(root, context.defaultCurrency);
  closeCurrencyMenu(root);
  render(root, context.ui, context.locale, context.defaultCurrency);
  if (context.status) context.status.textContent = "";
}

function handleCurrencyClick(
  root: HTMLElement,
  target: HTMLElement,
  context: ControllerContext,
): boolean {
  const trigger = target.closest<HTMLButtonElement>("[data-currency-trigger]");
  if (trigger) {
    toggleCurrencyMenu(root);
    return true;
  }
  const option = target.closest<HTMLButtonElement>("[data-currency]");
  if (!option) return false;
  const nextCurrency = option.dataset.currency as LoanAprCurrencyCode;
  convertMoneyFields(root, context.getCurrency(), nextCurrency);
  context.setCurrency(nextCurrency);
  setCurrencyState(root, nextCurrency);
  closeCurrencyMenu(root);
  render(root, context.ui, context.locale, nextCurrency);
  return true;
}

function handleScenarioClick(
  root: HTMLElement,
  target: HTMLElement,
  context: ControllerContext,
): boolean {
  const modeButton = target.closest<HTMLButtonElement>(
    "[data-mode-side][data-mode]",
  );
  if (modeButton) {
    setMode(
      root,
      modeButton.dataset.modeSide as ScenarioSide,
      modeButton.dataset.mode as LoanMode,
    );
    render(root, context.ui, context.locale, context.getCurrency());
    return true;
  }
  const preset = target.closest<HTMLButtonElement>("[data-preset]");
  if (!preset) return false;
  applyPreset(root, preset.dataset.preset ?? "balanced");
  render(root, context.ui, context.locale, context.getCurrency());
  return true;
}

function handleActionClick(
  root: HTMLElement,
  target: HTMLElement,
  context: ControllerContext,
): void {
  if (target.closest("[data-reset]")) {
    resetTool(root, context);
    return;
  }
  if (target.closest("[data-copy]"))
    void copyText(
      render(root, context.ui, context.locale, context.getCurrency()).copy,
      context.status,
      context.ui.labelCopied,
    );
}

function handleClick(
  root: HTMLElement,
  event: Event,
  context: ControllerContext,
): void {
  const target = event.target as HTMLElement;
  if (handleCurrencyClick(root, target, context)) return;
  if (handleScenarioClick(root, target, context)) return;
  handleActionClick(root, target, context);
}

async function copyText(
  text: string,
  status: HTMLElement | null,
  copiedLabel: string,
): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    if (status) status.textContent = copiedLabel;
  } catch {}
}
