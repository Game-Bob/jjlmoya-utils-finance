import { calculateDividendYield, type DividendCadence, type DividendYieldInput } from './logic';
import { loadDividendYieldState, saveDividendYieldState } from './storage';
import { renderCouponScene, renderResults } from './dom-views';
import type { DividendYieldUI } from './ui';

interface Config {
  ui: DividendYieldUI;
  initial: DividendYieldInput;
}

function readNumber(root: HTMLElement, name: string, fallback: number): number {
  const field = root.querySelector<HTMLInputElement>(`[data-dividend-input="${name}"]`);
  const value = Number(field?.value);
  return Number.isFinite(value) ? value : fallback;
}

function collectState(root: HTMLElement, fallback: DividendYieldInput): DividendYieldInput {
  const cadence = root.querySelector<HTMLButtonElement>('[data-dividend-cadence].is-active')?.dataset.dividendCadence;
  return {
    pricePerShare: readNumber(root, 'price', fallback.pricePerShare),
    dividendPerPayment: readNumber(root, 'dividend', fallback.dividendPerPayment),
    cadence: cadence === 'quarterly' ? 'quarterly' : 'annual',
    shares: readNumber(root, 'shares', fallback.shares),
    withholdingRate: readNumber(root, 'withholding', fallback.withholdingRate),
    growthRate: readNumber(root, 'growth', fallback.growthRate),
  };
}

function setInputValues(root: HTMLElement, state: DividendYieldInput): void {
  const values: Record<string, number> = {
    price: state.pricePerShare,
    dividend: state.dividendPerPayment,
    shares: state.shares,
    withholding: state.withholdingRate,
    growth: state.growthRate,
  };
  Object.entries(values).forEach(([name, value]) => {
    const field = root.querySelector<HTMLInputElement>(`[data-dividend-input="${name}"]`);
    if (field) field.value = String(value);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-dividend-cadence]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.dividendCadence === state.cadence);
    button.setAttribute('aria-pressed', String(button.dataset.dividendCadence === state.cadence));
  });
}

function render(root: HTMLElement, state: DividendYieldInput, ui: DividendYieldUI): void {
  const result = calculateDividendYield(state);
  const scene = root.querySelector<HTMLElement>('[data-dividend-scene]');
  const results = root.querySelector<HTMLElement>('[data-dividend-results]');
  const error = root.querySelector<HTMLElement>('[data-dividend-error]');
  if (!scene || !results || !error) return;
  if (!result) {
    scene.innerHTML = '';
    results.innerHTML = '';
    error.textContent = ui.emptyMessage;
    error.hidden = false;
    return;
  }
  error.hidden = true;
  scene.innerHTML = renderCouponScene(result, ui);
  results.innerHTML = renderResults(result, ui);
}

export function initDividendYield(root: HTMLElement, config: Config): void {
  const state = loadDividendYieldState(config.initial);
  setInputValues(root, state);
  render(root, state, config.ui);
  root.addEventListener('input', () => {
    const nextState = collectState(root, state);
    saveDividendYieldState(nextState);
    render(root, nextState, config.ui);
  });
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest<HTMLButtonElement>('[data-dividend-cadence]');
    if (!button) return;
    const cadence = button.dataset.dividendCadence as DividendCadence | undefined;
    if (!cadence) return;
    const nextState = { ...collectState(root, state), cadence };
    setInputValues(root, nextState);
    saveDividendYieldState(nextState);
    render(root, nextState, config.ui);
  });
}
