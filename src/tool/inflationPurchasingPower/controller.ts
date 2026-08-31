import { calculateInflationTimeline, type CashFlowMode, type InflationPurchasingPowerInput } from './logic';
import { renderTimelineResults, renderTimelineScene } from './dom-views';
import { loadInflationPurchasingPowerState, saveInflationPurchasingPowerState } from './storage';
import type { InflationPurchasingPowerUI } from './ui';

interface Config {
  ui: InflationPurchasingPowerUI;
  initial: InflationPurchasingPowerInput;
}

function readNumber(root: HTMLElement, name: string): number {
  const field = root.querySelector<HTMLInputElement>(`[data-ipp-input="${name}"]`);
  return field?.value === '' ? Number.NaN : Number(field?.value);
}

function collectState(root: HTMLElement): InflationPurchasingPowerInput {
  const activeMode = root.querySelector<HTMLButtonElement>('[data-ipp-mode].is-active')?.dataset.ippMode;
  return {
    startingAmount: readNumber(root, 'amount'),
    annualInflationRate: readNumber(root, 'inflation'),
    years: readNumber(root, 'years'),
    annualCashFlow: readNumber(root, 'cash-flow'),
    cashFlowMode: activeMode === 'contribution' || activeMode === 'withdrawal' ? activeMode : 'none',
  };
}

function setMode(root: HTMLElement, mode: CashFlowMode): void {
  root.querySelectorAll<HTMLButtonElement>('[data-ipp-mode]').forEach((button) => {
    const isActive = button.dataset.ippMode === mode;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  const cashFlowField = root.querySelector<HTMLInputElement>('[data-ipp-input="cash-flow"]');
  if (cashFlowField) cashFlowField.disabled = mode === 'none';
}

function setInputValues(root: HTMLElement, state: InflationPurchasingPowerInput): void {
  const values: Record<string, number> = { amount: state.startingAmount, inflation: state.annualInflationRate, years: state.years, 'cash-flow': state.annualCashFlow };
  Object.entries(values).forEach(([name, value]) => {
    const field = root.querySelector<HTMLInputElement>(`[data-ipp-input="${name}"]`);
    if (field) field.value = String(value);
  });
  setMode(root, state.cashFlowMode);
}

function render(root: HTMLElement, state: InflationPurchasingPowerInput, ui: InflationPurchasingPowerUI): void {
  const result = calculateInflationTimeline(state);
  const scene = root.querySelector<HTMLElement>('[data-ipp-scene]');
  const results = root.querySelector<HTMLElement>('[data-ipp-results]');
  const error = root.querySelector<HTMLElement>('[data-ipp-error]');
  if (!scene || !results || !error) return;
  if (!result) {
    scene.innerHTML = '';
    results.innerHTML = '';
    error.hidden = false;
    return;
  }
  error.hidden = true;
  scene.innerHTML = renderTimelineScene(result, ui);
  results.innerHTML = renderTimelineResults(result, ui);
}

export function initInflationPurchasingPower(root: HTMLElement, config: Config): void {
  const initialState = loadInflationPurchasingPowerState(config.initial);
  setInputValues(root, initialState);
  render(root, initialState, config.ui);
  root.addEventListener('input', () => {
    const state = collectState(root);
    if (calculateInflationTimeline(state)) saveInflationPurchasingPowerState(state);
    render(root, state, config.ui);
  });
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>('[data-ipp-mode]');
    const mode = button?.dataset.ippMode as CashFlowMode | undefined;
    if (!button || !mode) return;
    setMode(root, mode);
    const state = collectState(root);
    saveInflationPurchasingPowerState(state);
    render(root, state, config.ui);
  });
}
