import { calculateMortgage, convertCurrencyAmount, type CurrencyCode, type MortgageFrequency, type MortgageInputs } from './logic';
import { renderMortgageViews } from './dom-views';
import { readMortgageState, writeMortgageState } from './storage';
import type { MortgageExtraPaymentPlannerUI } from './ui';

interface MortgageConfig {
  ui: MortgageExtraPaymentPlannerUI;
  initial: MortgageInputs;
  locale: string;
}

function fieldValue(root: HTMLElement, key: string): string {
  return root.querySelector<HTMLInputElement>(`[data-mortgage-input="${key}"]`)?.value ?? '';
}

function numberValue(root: HTMLElement, key: string): number {
  const value = Number(fieldValue(root, key));
  return Number.isFinite(value) ? value : 0;
}

function setInput(root: HTMLElement, key: string, value: string | number): void {
  const input = root.querySelector<HTMLInputElement>(`[data-mortgage-input="${key}"]`);
  if (input) input.value = `${value}`;
}

function selectedValue(root: HTMLElement, key: string, fallback: string): string {
  return root.querySelector<HTMLElement>(`[data-mortgage-select="${key}"]`)?.dataset.value ?? fallback;
}

function readInputs(root: HTMLElement, state: MortgageInputs): MortgageInputs {
  return {
    ...state,
    principal: numberValue(root, 'principal'),
    annualRate: numberValue(root, 'annualRate'),
    termYears: numberValue(root, 'termYears'),
    recurringExtra: numberValue(root, 'recurringExtra'),
    oneOffExtra: numberValue(root, 'oneOffExtra'),
    oneOffPeriod: numberValue(root, 'oneOffPeriod'),
    startDate: fieldValue(root, 'startDate'),
    frequency: selectedValue(root, 'frequency', state.frequency) as MortgageFrequency,
    currency: selectedValue(root, 'currency', state.currency) as CurrencyCode,
  };
}

function closeSelects(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-mortgage-menu]').forEach((menu) => {
    menu.hidden = true;
    menu.previousElementSibling?.setAttribute('aria-expanded', 'false');
  });
}

function selectedLabel(ui: MortgageExtraPaymentPlannerUI, key: string, value: string): string {
  if (key === 'frequency') return ui.frequencyOptions[value as MortgageFrequency] ?? value;
  return ui.currencyOptions[value as CurrencyCode] ?? value;
}

function syncSelect(root: HTMLElement, ui: MortgageExtraPaymentPlannerUI, key: string, value: string): void {
  const select = root.querySelector<HTMLElement>(`[data-mortgage-select="${key}"]`);
  if (!select) return;
  select.dataset.value = value;
  const trigger = select.querySelector<HTMLButtonElement>('[data-mortgage-trigger]');
  if (trigger) trigger.textContent = selectedLabel(ui, key, value);
  select.querySelectorAll<HTMLButtonElement>('[data-mortgage-option]').forEach((option) => {
    const active = option.dataset.value === value;
    option.classList.toggle('is-active', active);
    option.setAttribute('aria-selected', `${active}`);
  });
}

function syncCurrency(root: HTMLElement, ui: MortgageExtraPaymentPlannerUI, currency: CurrencyCode): void {
  const outputCurrency = root.querySelector<HTMLElement>('[data-mortgage-output-currency]');
  if (outputCurrency) outputCurrency.textContent = `${ui.currencySymbols[currency]} ${currency}`;
}

function convertMonetaryInputs(root: HTMLElement, from: CurrencyCode, to: CurrencyCode): void {
  if (from === to) return;
  const factor = convertCurrencyAmount(1, from, to);
  ['principal', 'recurringExtra', 'oneOffExtra'].forEach((key) => {
    const value = numberValue(root, key);
    setInput(root, key, Number((value * factor).toFixed(2)));
  });
}

function bindSelect(root: HTMLElement, key: string, onChange: (value: string) => void): void {
  const select = root.querySelector<HTMLElement>(`[data-mortgage-select="${key}"]`);
  const trigger = select?.querySelector<HTMLButtonElement>('[data-mortgage-trigger]');
  const menu = select?.querySelector<HTMLElement>('[data-mortgage-menu]');
  if (!select || !trigger || !menu) return;
  trigger.addEventListener('click', () => {
    const shouldOpen = menu.hidden;
    closeSelects(root);
    menu.hidden = !shouldOpen;
    trigger.setAttribute('aria-expanded', `${shouldOpen}`);
  });
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
  menu.querySelectorAll<HTMLButtonElement>('[data-mortgage-option]').forEach((option) => {
    option.addEventListener('click', () => {
      onChange(option.dataset.value ?? '');
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    });
  });
}

function bindInputs(root: HTMLElement, update: () => void): void {
  root.querySelectorAll<HTMLInputElement>('[data-mortgage-input]').forEach((input) => {
    input.addEventListener('input', update);
    input.addEventListener('change', update);
  });
}

function syncAll(root: HTMLElement, state: MortgageInputs, ui: MortgageExtraPaymentPlannerUI): void {
  ['principal', 'annualRate', 'termYears', 'recurringExtra', 'oneOffExtra', 'oneOffPeriod', 'startDate'].forEach((key) => setInput(root, key, state[key as keyof MortgageInputs] as string | number));
  syncSelect(root, ui, 'frequency', state.frequency);
  syncSelect(root, ui, 'currency', state.currency);
  syncCurrency(root, ui, state.currency);
}

export function initMortgagePlanner(root: HTMLElement, config: MortgageConfig): void {
  let state: MortgageInputs = { ...config.initial, ...readMortgageState(config.locale) };
  const update = () => {
    state = readInputs(root, state);
    writeMortgageState(state, config.locale);
    syncCurrency(root, config.ui, state.currency);
    const result = calculateMortgage(state);
    renderMortgageViews(root, result ? { result, inputs: state, ui: config.ui, locale: config.locale } : null);
    const status = root.querySelector<HTMLElement>('[data-mortgage-status]');
    if (status) status.textContent = result ? `${result.periodsSaved} ${config.ui.periodsSavedLabel}` : config.ui.invalidInputMessage;
  };
  syncAll(root, state, config.ui);
  bindInputs(root, update);
  bindSelect(root, 'frequency', (value) => { state.frequency = value as MortgageFrequency; syncSelect(root, config.ui, 'frequency', value); update(); });
  bindSelect(root, 'currency', (value) => {
    const nextCurrency = value as CurrencyCode;
    convertMonetaryInputs(root, state.currency, nextCurrency);
    state.currency = nextCurrency;
    syncSelect(root, config.ui, 'currency', value);
    update();
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeSelects(root);
  });
  update();
}
