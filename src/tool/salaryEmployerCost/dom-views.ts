import { evaluateCostGap } from './evaluator';
import type { SalaryCostResult } from './logic';
import type { SalaryEmployerCostUI } from './ui';

export type SalaryViewMode = 'annual' | 'payment';

const select = <T extends Element>(root: HTMLElement, selector: string): T | null =>
  root.querySelector<T>(selector);

function setText(root: HTMLElement, selector: string, value: string): void {
  const element = select<HTMLElement>(root, selector);
  if (element) element.textContent = value;
}

function formatCurrency(value: number, ui: SalaryEmployerCostUI): string {
  return new Intl.NumberFormat(ui.currencyLocale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(value);
}

function displayValues(result: SalaryCostResult, mode: SalaryViewMode) {
  if (mode === 'annual') {
    return {
      gross: result.annualGross,
      net: result.annualNet,
      irpf: result.annualIrpf,
      employee: result.annualEmployeeSocialSecurity,
      employer: result.annualEmployerSocialSecurity,
      cost: result.annualEmployerCost,
    };
  }
  const payments = result.annualGross / result.grossPerPayment;
  return {
    gross: result.grossPerPayment,
    net: result.netPerPayment,
    irpf: result.annualIrpf / payments,
    employee: result.annualEmployeeSocialSecurity / payments,
    employer: result.annualEmployerSocialSecurity / payments,
    cost: result.employerCostPerPayment,
  };
}

function renderOrbit(root: HTMLElement, result: SalaryCostResult): void {
  const total = result.annualEmployerCost;
  const net = result.annualNet / total * 100;
  const irpf = net + result.annualIrpf / total * 100;
  const employee = irpf + result.annualEmployeeSocialSecurity / total * 100;
  root.style.setProperty('--orbit-net', `${net}%`);
  root.style.setProperty('--orbit-irpf', `${irpf}%`);
  root.style.setProperty('--orbit-employee', `${employee}%`);
}

function renderMetrics(root: HTMLElement, result: SalaryCostResult, ui: SalaryEmployerCostUI): void {
  setText(root, '[data-result-base]', formatCurrency(result.monthlyContributionBase, ui));
  setText(root, '[data-result-multiplier]', `${result.costMultiplier.toFixed(3)}x`);
  setText(root, '[data-result-keeps]', `${result.workerKeepsPercent.toFixed(1)}%`);
  const state = evaluateCostGap(result);
  const labels = { lean: ui.labelLeanGap, typical: ui.labelTypicalGap, wide: ui.labelWideGap };
  setText(root, '[data-result-state]', labels[state]);
  const badge = select<HTMLElement>(root, '[data-result-state]');
  if (badge) badge.dataset.state = state;
}

export function renderSalaryResult(
  root: HTMLElement,
  result: SalaryCostResult,
  ui: SalaryEmployerCostUI,
  mode: SalaryViewMode,
): void {
  const values = displayValues(result, mode);
  setText(root, '[data-result-gross]', formatCurrency(values.gross, ui));
  setText(root, '[data-result-net]', formatCurrency(values.net, ui));
  setText(root, '[data-result-irpf]', formatCurrency(values.irpf, ui));
  setText(root, '[data-result-employee]', formatCurrency(values.employee, ui));
  setText(root, '[data-result-employer]', formatCurrency(values.employer, ui));
  setText(root, '[data-result-cost]', formatCurrency(values.cost, ui));
  renderMetrics(root, result, ui);
  renderOrbit(root, result);
  root.dataset.valid = 'true';
}

export function renderInvalidSalary(root: HTMLElement, ui: SalaryEmployerCostUI): void {
  root.dataset.valid = 'false';
  setText(root, '[data-invalid-message]', ui.labelInvalid);
}
