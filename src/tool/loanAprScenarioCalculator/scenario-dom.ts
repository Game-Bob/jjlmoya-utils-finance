import type { LoanMode, LoanScenarioInput } from "./logic";

export type ScenarioSide = "a" | "b";

function numberValue(root: HTMLElement, selector: string): number {
  return Number(root.querySelector<HTMLInputElement>(selector)?.value ?? 0);
}

function textValue(
  root: HTMLElement,
  selector: string,
  fallback: string,
): string {
  return (
    root.querySelector<HTMLInputElement>(selector)?.value.trim() || fallback
  );
}

function modeValue(root: HTMLElement, side: ScenarioSide): LoanMode {
  return (
    (root.querySelector<HTMLButtonElement>(
      `[data-mode-side="${side}"][aria-pressed="true"]`,
    )?.dataset.mode as LoanMode) ?? "rate"
  );
}

export function readScenario(
  root: HTMLElement,
  side: ScenarioSide,
): LoanScenarioInput {
  const selector = `[data-scenario="${side}"]`;
  return {
    name: textValue(
      root,
      `${selector} [data-field="name"]`,
      side === "a" ? "Offer A" : "Offer B",
    ),
    principal: numberValue(root, `${selector} [data-field="principal"]`),
    termMonths: numberValue(root, `${selector} [data-field="term"]`),
    mode: modeValue(root, side),
    annualRate: numberValue(root, `${selector} [data-field="rate"]`),
    monthlyPayment: numberValue(root, `${selector} [data-field="payment"]`),
    upfrontFees: numberValue(root, `${selector} [data-field="upfrontFees"]`),
    monthlyFees: numberValue(root, `${selector} [data-field="monthlyFees"]`),
    finalFees: numberValue(root, `${selector} [data-field="finalFees"]`),
  };
}

function setInput(
  root: HTMLElement,
  selector: string,
  value: string | number,
): void {
  const input = root.querySelector<HTMLInputElement>(selector);
  if (input) input.value = String(value);
}

export function setMode(
  root: HTMLElement,
  side: ScenarioSide,
  mode: LoanMode,
): void {
  root
    .querySelectorAll<HTMLButtonElement>(`[data-mode-side="${side}"]`)
    .forEach((button) =>
      button.setAttribute("aria-pressed", String(button.dataset.mode === mode)),
    );
  const rateField = root.querySelector<HTMLElement>(
    `[data-scenario="${side}"] [data-mode-field="rate"]`,
  );
  const paymentField = root.querySelector<HTMLElement>(
    `[data-scenario="${side}"] [data-mode-field="payment"]`,
  );
  if (rateField) rateField.hidden = mode !== "rate";
  if (paymentField) paymentField.hidden = mode !== "payment";
}

export function writeScenario(
  root: HTMLElement,
  side: ScenarioSide,
  scenario: LoanScenarioInput,
): void {
  const selector = `[data-scenario="${side}"]`;
  setInput(root, `${selector} [data-field="name"]`, scenario.name);
  setInput(root, `${selector} [data-field="principal"]`, scenario.principal);
  setInput(root, `${selector} [data-field="term"]`, scenario.termMonths);
  setInput(root, `${selector} [data-field="rate"]`, scenario.annualRate);
  setInput(root, `${selector} [data-field="payment"]`, scenario.monthlyPayment);
  setInput(
    root,
    `${selector} [data-field="upfrontFees"]`,
    scenario.upfrontFees,
  );
  setInput(
    root,
    `${selector} [data-field="monthlyFees"]`,
    scenario.monthlyFees,
  );
  setInput(root, `${selector} [data-field="finalFees"]`, scenario.finalFees);
  setMode(root, side, scenario.mode);
}
