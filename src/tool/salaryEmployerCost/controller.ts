import {
  DEFAULT_SALARY_INPUT,
  MINIMUM_ANNUAL_GROSS,
  annualizeSalary,
  calculateSalaryCost,
  type ContractType,
  type PayPeriods,
  type SalaryAmountMode,
  type SalaryCostInput,
} from './logic';
import { renderInvalidSalary, renderSalaryResult, type SalaryViewMode } from './dom-views';
import { loadSalaryInput, saveSalaryInput } from './storage';
import type { SalaryEmployerCostUI } from './ui';

interface ToolConfig {
  ui: SalaryEmployerCostUI;
}

const select = <T extends Element>(root: HTMLElement, selector: string): T | null =>
  root.querySelector<T>(selector);

function readConfig(root: HTMLElement): ToolConfig | null {
  const script = select<HTMLScriptElement>(root, '[data-salary-config]');
  if (!script?.textContent) return null;
  try {
    return JSON.parse(script.textContent) as ToolConfig;
  } catch {
    return null;
  }
}

function setPressed(root: HTMLElement, field: string, value: string | number): void {
  root.querySelectorAll<HTMLButtonElement>(`[data-field="${field}"]`).forEach((button) => {
    const active = button.dataset.value === String(value);
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function setAmountBounds(root: HTMLElement, input: SalaryCostInput): void {
  const minimum = input.amountMode === 'annual'
    ? MINIMUM_ANNUAL_GROSS
    : MINIMUM_ANNUAL_GROSS / input.payPeriods;
  const maximum = input.amountMode === 'annual' ? 240_000 : 240_000 / input.payPeriods;
  root.querySelectorAll<HTMLInputElement>('[data-input-amount]').forEach((element) => {
    element.min = String(Math.ceil(minimum));
    element.max = String(Math.floor(maximum));
    const rangeStep = input.amountMode === 'annual' ? '1' : '0.01';
    const numberStep = input.amountMode === 'annual' ? '100' : '10';
    element.step = element.type === 'range' ? rangeStep : numberStep;
  });
}

function syncControls(root: HTMLElement, input: SalaryCostInput, view: SalaryViewMode): void {
  setAmountBounds(root, input);
  root.querySelectorAll<HTMLInputElement>('[data-input-amount]').forEach((element) => {
    element.value = String(Math.round(input.amount * 100) / 100);
  });
  const irpf = select<HTMLInputElement>(root, '[data-input-irpf]');
  const risk = select<HTMLInputElement>(root, '[data-input-risk]');
  if (irpf) irpf.value = String(input.irpfRate);
  if (risk) risk.value = String(input.riskRate);
  const irpfOutput = select<HTMLOutputElement>(root, '[data-output-irpf]');
  const riskOutput = select<HTMLOutputElement>(root, '[data-output-risk]');
  if (irpfOutput) irpfOutput.value = `${input.irpfRate.toFixed(1)}%`;
  if (riskOutput) riskOutput.value = `${input.riskRate.toFixed(2)}%`;
  setPressed(root, 'amountMode', input.amountMode);
  setPressed(root, 'payPeriods', input.payPeriods);
  setPressed(root, 'contractType', input.contractType);
  setPressed(root, 'view', view);
  setPressed(root, 'riskRate', input.riskRate);
}

function render(root: HTMLElement, config: ToolConfig, input: SalaryCostInput, view: SalaryViewMode): void {
  syncControls(root, input, view);
  const result = calculateSalaryCost(input);
  if (!result) {
    renderInvalidSalary(root, config.ui);
    return;
  }
  renderSalaryResult(root, result, config.ui, view);
  saveSalaryInput(input);
}

function changeMode(input: SalaryCostInput, mode: SalaryAmountMode): SalaryCostInput {
  const annualGross = annualizeSalary(input);
  const amount = mode === 'annual' ? annualGross : annualGross / input.payPeriods;
  return { ...input, amountMode: mode, amount };
}

function changePayments(input: SalaryCostInput, payPeriods: PayPeriods): SalaryCostInput {
  const annualGross = annualizeSalary(input);
  const amount = input.amountMode === 'monthly' ? annualGross / payPeriods : input.amount;
  return { ...input, payPeriods, amount };
}

function changeField(input: SalaryCostInput, field: string, value: string): SalaryCostInput {
  if (field === 'amountMode') return changeMode(input, value as SalaryAmountMode);
  if (field === 'payPeriods') return changePayments(input, Number(value) as PayPeriods);
  if (field === 'contractType') return { ...input, contractType: value as ContractType };
  if (field === 'riskRate') return { ...input, riskRate: Number(value) };
  return input;
}

export function initSalaryEmployerCost(root: HTMLElement): void {
  const config = readConfig(root);
  if (!config) return;
  let input = loadSalaryInput();
  let view: SalaryViewMode = 'annual';
  select<HTMLFormElement>(root, 'form')?.addEventListener('submit', (event) => event.preventDefault());
  render(root, config, input, view);
  root.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.matches('[data-input-amount]')) input = { ...input, amount: Number(target.value) };
    if (target.matches('[data-input-irpf]')) input = { ...input, irpfRate: Number(target.value) };
    if (target.matches('[data-input-risk]')) input = { ...input, riskRate: Number(target.value) };
    render(root, config, input, view);
  });
  root.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('button');
    if (!button) return;
    if (button.dataset.action === 'reset') input = { ...DEFAULT_SALARY_INPUT };
    if (button.dataset.field === 'view') view = button.dataset.value as SalaryViewMode;
    if (button.dataset.field && button.dataset.value) {
      input = changeField(input, button.dataset.field, button.dataset.value);
    }
    render(root, config, input, view);
  });
}
