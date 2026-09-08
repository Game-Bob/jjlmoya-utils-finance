import { calculateRenterInsuranceCoverageGap, validateRenterInsuranceInput, type RenterInsuranceInput } from './logic';
import { convertRenterInsuranceCurrency, isRenterInsuranceCurrencyCode, type RenterInsuranceCurrencyCode } from './currency';
import { clearRenterInsuranceResult, formatMoney, renderRenterInsuranceResult, type ViewConfig } from './dom-views';
import { readSavedRenterInsuranceInput, saveRenterInsuranceInput } from './storage';
import type { RenterInsuranceCoverageGapCalculatorUI } from './ui';

interface ControllerConfig {
  initial: RenterInsuranceInput;
  locale: string;
  ui: RenterInsuranceCoverageGapCalculatorUI;
}

const getNumber = (form: HTMLFormElement, field: string): number => Number(form.querySelector<HTMLInputElement>(`[data-field="${field}"]`)?.value ?? Number.NaN);

const readInput = (form: HTMLFormElement, currency: string): RenterInsuranceInput => ({
  currency,
  policyLimit: getNumber(form, 'policyLimit'),
  deductible: getNumber(form, 'deductible'),
  sampleLoss: getNumber(form, 'sampleLoss'),
  inventory: Array.from(form.querySelectorAll<HTMLInputElement>('[data-category]')).map((input) => ({ category: input.dataset.category as RenterInsuranceInput['inventory'][number]['category'], value: Number(input.value) })),
});

const setFieldValues = (form: HTMLFormElement, input: RenterInsuranceInput): void => {
  ['policyLimit', 'deductible', 'sampleLoss'].forEach((field) => {
    const element = form.querySelector<HTMLInputElement>(`[data-field="${field}"]`);
    if (element) element.value = String(input[field as 'policyLimit' | 'deductible' | 'sampleLoss']);
  });
  input.inventory.forEach((item) => {
    const element = form.querySelector<HTMLInputElement>(`[data-category="${item.category}"]`);
    if (element) element.value = String(item.value);
  });
};

const updateFieldErrors = (root: HTMLElement, form: HTMLFormElement, input: RenterInsuranceInput): boolean => {
  const errors = validateRenterInsuranceInput(input);
  form.querySelectorAll<HTMLInputElement>('[data-field], [data-category]').forEach((field) => field.setAttribute('aria-invalid', 'false'));
  Object.keys(errors).forEach((key) => form.querySelector<HTMLInputElement>(`[data-field="${key}"]`)?.setAttribute('aria-invalid', 'true'));
  const summary = root.querySelector<HTMLElement>('[data-ric-error]');
  if (summary) summary.hidden = Object.keys(errors).length === 0;
  if (errors.inventory) form.querySelectorAll<HTMLInputElement>('[data-category]').forEach((field) => field.setAttribute('aria-invalid', 'true'));
  return Object.keys(errors).length > 0;
};

const setCurrency = (root: HTMLElement, currency: RenterInsuranceCurrencyCode): void => {
  const selectedOption = root.querySelector<HTMLButtonElement>(`[data-ric-currency-option][data-currency="${currency}"]`);
  const symbol = selectedOption?.querySelector('strong')?.textContent ?? currency;
  root.querySelectorAll<HTMLElement>('[data-ric-unit]').forEach((unit) => { unit.textContent = symbol; });
  root.querySelectorAll<HTMLButtonElement>('[data-ric-currency-option]').forEach((option) => option.setAttribute('aria-selected', String(option.dataset.currency === currency)));
  const selectedCode = root.querySelector<HTMLElement>('[data-ric-selected-code]');
  if (selectedCode) selectedCode.textContent = currency;
  const selectedSymbol = root.querySelector<HTMLElement>('[data-ric-selected-symbol]');
  if (selectedSymbol) selectedSymbol.textContent = symbol;
};

const mountCurrencyMenu = (root: HTMLElement, onSelect: (currency: RenterInsuranceCurrencyCode) => void): void => {
  const trigger = root.querySelector<HTMLButtonElement>('[data-ric-currency-trigger]');
  const menu = root.querySelector<HTMLElement>('[data-ric-currency-menu]');
  const close = (): void => { if (menu && trigger) { menu.hidden = true; trigger.setAttribute('aria-expanded', 'false'); } };
  trigger?.addEventListener('click', () => { if (menu) { menu.hidden = !menu.hidden; trigger.setAttribute('aria-expanded', String(!menu.hidden)); } });
  root.querySelectorAll<HTMLButtonElement>('[data-ric-currency-option]').forEach((option) => option.addEventListener('click', () => { const nextCurrency = option.dataset.currency; if (nextCurrency && isRenterInsuranceCurrencyCode(nextCurrency)) onSelect(nextCurrency); close(); }));
  document.addEventListener('click', (event) => { if (!root.contains(event.target as Node)) close(); });
};

const mountCopyAction = (root: HTMLElement, form: HTMLFormElement, config: ControllerConfig, getCurrency: () => RenterInsuranceCurrencyCode): void => {
  form.querySelector('[data-ric-copy]')?.addEventListener('click', () => {
    const result = calculateRenterInsuranceCoverageGap(readInput(form, getCurrency()));
    if (!result) return;
    const summary = `${config.ui.labelCoverageGap}: ${formatMoney(config.locale, result.currency, result.coverageGap)}. ${config.ui.labelCoverageRatio}: ${Math.round(result.coverageRatio * 100)}%. ${config.ui.labelLargestCategories}: ${result.largestCategories.map((item) => item.category).join(', ')}.`;
    navigator.clipboard?.writeText(summary).then(() => { const status = root.querySelector<HTMLElement>('[data-ric-copy-status]'); if (status) status.textContent = config.ui.labelCopied; }).catch(() => { const status = root.querySelector<HTMLElement>('[data-ric-copy-status]'); if (status) status.textContent = config.ui.labelCopyFailed; });
  });
};

export function mountRenterInsuranceTool(root: HTMLElement, config: ControllerConfig): void {
  const form = root.querySelector<HTMLFormElement>('[data-ric-form]');
  if (!form) return;
  const saved = readSavedRenterInsuranceInput(config.initial);
  let currency: RenterInsuranceCurrencyCode = isRenterInsuranceCurrencyCode(saved.currency) ? saved.currency : config.initial.currency as RenterInsuranceCurrencyCode;
  setFieldValues(form, saved);
  const viewConfig: ViewConfig = { root, locale: config.locale, ui: config.ui };
  const update = (): void => {
    const input = readInput(form, currency);
    if (updateFieldErrors(root, form, input)) { clearRenterInsuranceResult(root, config.ui); return; }
    const result = calculateRenterInsuranceCoverageGap(input);
    if (!result) return;
    saveRenterInsuranceInput(input);
    renderRenterInsuranceResult(viewConfig, result);
  };
  const reset = (): void => { currency = config.initial.currency as RenterInsuranceCurrencyCode; setFieldValues(form, config.initial); setCurrency(root, currency); update(); };
  form.querySelectorAll<HTMLInputElement>('[data-field], [data-category]').forEach((field) => field.addEventListener('input', update));
  form.querySelector('[data-ric-reset]')?.addEventListener('click', reset);
  mountCopyAction(root, form, config, () => currency);
  mountCurrencyMenu(root, (nextCurrency) => {
    if (nextCurrency === currency) return;
    const moneyFields = [...Array.from(form.querySelectorAll<HTMLInputElement>('[data-field]')), ...Array.from(form.querySelectorAll<HTMLInputElement>('[data-category]'))];
    moneyFields.forEach((field) => { const value = Number(field.value); if (Number.isFinite(value)) field.value = String(convertRenterInsuranceCurrency(value, currency, nextCurrency)); });
    currency = nextCurrency;
    setCurrency(root, currency);
    update();
  });
  setCurrency(root, currency);
  update();
}
