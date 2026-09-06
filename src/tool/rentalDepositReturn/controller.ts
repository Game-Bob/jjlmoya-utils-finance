import { calculateRentalDepositReturn, type DeductionInput, type DeductionStatus, type RentalDepositInput } from './logic';
import { CURRENCIES, type CurrencyCode } from './currency';
import { renderDepositResults, renderDepositScene } from './dom-views';
import type { RentalDepositReturnUI } from './ui';

interface Config { ui: RentalDepositReturnUI; initial: RentalDepositInput; locale: string; }

function createId(): string {
  return `deduction-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeAttribute(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function fieldValue(row: HTMLElement, selector: string): string {
  return row.querySelector<HTMLInputElement | HTMLSelectElement>(selector)?.value.trim() ?? '';
}

function readDeductions(root: HTMLElement): DeductionInput[] {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-rdr-row]')).map((row) => ({
    id: row.dataset.rdrRow ?? createId(),
    description: fieldValue(row, '[data-rdr-field="description"]'),
    amount: Number(fieldValue(row, '[data-rdr-field="amount"]')),
    status: (fieldValue(row, '[data-rdr-field="status"]') || 'confirmed') as DeductionStatus,
  }));
}

function collectState(root: HTMLElement): RentalDepositInput {
  return {
    currency: root.querySelector<HTMLElement>('[data-rdr-currency-select]')?.dataset.value ?? 'EUR',
    deposit: Number(root.querySelector<HTMLInputElement>('[data-rdr-deposit]')?.value ?? 0),
    deductions: readDeductions(root),
  };
}

function render(root: HTMLElement, state: RentalDepositInput, ui: RentalDepositReturnUI, locale: string): void {
  const result = calculateRentalDepositReturn(state);
  const scene = root.querySelector<HTMLElement>('[data-rdr-scene]');
  const results = root.querySelector<HTMLElement>('[data-rdr-results]');
  const error = root.querySelector<HTMLElement>('[data-rdr-error]');
  if (!scene || !results || !error) return;
  if (!result) {
    scene.innerHTML = '';
    results.innerHTML = '';
    error.hidden = false;
    return;
  }
  error.hidden = true;
  scene.innerHTML = renderDepositScene(result, ui, locale);
  results.innerHTML = renderDepositResults(result, ui, locale);
}

function rowMarkup(item: DeductionInput, ui: RentalDepositReturnUI): string {
  return `<div class="rdr-row" data-rdr-row="${escapeAttribute(item.id)}"><label><span>${escapeAttribute(ui.descriptionLabel)}</span><input data-rdr-field="description" value="${escapeAttribute(item.description)}" placeholder="${escapeAttribute(ui.descriptionPlaceholder)}" required /></label><label><span>${escapeAttribute(ui.amountLabel)}</span><input data-rdr-field="amount" type="number" min="0" step="0.01" value="${item.amount}" inputmode="decimal" required /></label><label><span>${escapeAttribute(ui.statusLabel)}</span><span class="rdr-select-wrap"><select data-rdr-field="status"><option value="confirmed" ${item.status === 'confirmed' ? 'selected' : ''}>${escapeAttribute(ui.confirmedOption)}</option><option value="disputed" ${item.status === 'disputed' ? 'selected' : ''}>${escapeAttribute(ui.disputedOption)}</option></select><span class="rdr-select-arrow" aria-hidden="true"></span></span></label><button type="button" class="rdr-remove" data-rdr-remove aria-label="${escapeAttribute(ui.removeButton)}">×</button></div>`;
}

function report(result: ReturnType<typeof calculateRentalDepositReturn>, ui: RentalDepositReturnUI, locale: string): string {
  if (!result) return '';
  const format = (value: number): string => new Intl.NumberFormat(locale, { style: 'currency', currency: result.currency }).format(value);
  const lines = result.deductions.map((deduction) => `- ${deduction.description}: ${format(deduction.amount)} (${deduction.status === 'confirmed' ? ui.confirmedOption : ui.disputedOption})`);
  return [ui.reportTitle, `${ui.reportDeposit}: ${format(result.deposit)}`, `${ui.reportDeductions}:`, ...lines, `${ui.reportConfirmed}: ${format(result.confirmedDeductions)}`, `${ui.reportDisputed}: ${format(result.disputedDeductions)}`, `${ui.reportEstimatedReturn}: ${format(result.estimatedReturn)}`, `${ui.reportPotentialReturn}: ${format(result.undisputedReturn)}`, ui.reportNote].join('\n');
}

// eslint-disable-next-line max-lines-per-function, complexity
export function initRentalDepositReturn(root: HTMLElement, config: Config): void {
  const deposit = root.querySelector<HTMLInputElement>('[data-rdr-deposit]');
  const currency = root.querySelector<HTMLElement>('[data-rdr-currency-select]');
  const currencyTrigger = currency?.querySelector<HTMLButtonElement>('[data-rdr-currency-trigger]');
  const currencyMenu = currency?.querySelector<HTMLElement>('[data-rdr-currency-menu]');
  const list = root.querySelector<HTMLElement>('[data-rdr-list]');
  const copy = root.querySelector<HTMLButtonElement>('[data-rdr-copy]');
  if (!deposit || !currency || !currencyTrigger || !currencyMenu || !list || !copy) return;
  const initialState = config.initial;
  deposit.value = String(initialState.deposit);
  currency.dataset.value = initialState.currency;
  list.innerHTML = initialState.deductions.map((item) => rowMarkup(item, config.ui)).join('');
  render(root, initialState, config.ui, config.locale);
  root.addEventListener('input', () => render(root, collectState(root), config.ui, config.locale));
  root.addEventListener('change', () => render(root, collectState(root), config.ui, config.locale));
  const closeCurrencyMenu = (): void => {
    currencyMenu.hidden = true;
    currencyTrigger.setAttribute('aria-expanded', 'false');
  };
  const syncCurrency = (value: CurrencyCode): void => {
    currency.dataset.value = value;
    const definition = CURRENCIES[value];
    const symbol = currency.querySelector<HTMLElement>('[data-rdr-currency-symbol]');
    if (symbol) symbol.textContent = definition.symbol;
    currencyTrigger.setAttribute('aria-label', `${config.ui.currencyLabel}: ${value}`);
    currency.querySelectorAll<HTMLButtonElement>('[data-rdr-currency-option]').forEach((option) => {
      option.classList.toggle('is-active', option.dataset.value === value);
      option.setAttribute('aria-selected', `${option.dataset.value === value}`);
    });
  };
  syncCurrency(initialState.currency as CurrencyCode);
  const openCurrencyMenu = (focusActive = false): void => {
    currencyMenu.hidden = false;
    currencyTrigger.setAttribute('aria-expanded', 'true');
    if (focusActive) currency.querySelector<HTMLButtonElement>('.rdr-currency-option.is-active')?.focus();
  };
  currencyTrigger.addEventListener('click', () => {
    const shouldOpen = currencyMenu.hidden;
    closeCurrencyMenu();
    if (shouldOpen) openCurrencyMenu();
  });
  currencyTrigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCurrencyMenu();
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCurrencyMenu(true);
    }
  });
  currencyMenu.querySelectorAll<HTMLButtonElement>('[data-rdr-currency-option]').forEach((option) => {
    option.addEventListener('click', () => {
      const value = option.dataset.value as CurrencyCode;
      syncCurrency(value);
      closeCurrencyMenu();
      currencyTrigger.focus();
      render(root, collectState(root), config.ui, config.locale);
    });
  });
  document.addEventListener('click', (event) => {
    if (!currency.contains(event.target as Node)) closeCurrencyMenu();
  });
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const remove = target.closest<HTMLButtonElement>('[data-rdr-remove]');
    if (remove) {
      remove.closest<HTMLElement>('[data-rdr-row]')?.remove();
      render(root, collectState(root), config.ui, config.locale);
      return;
    }
    if (target.closest('[data-rdr-add]')) {
      const next: DeductionInput = { id: createId(), description: config.ui.newDeductionLabel, amount: 0, status: 'confirmed' };
      list.insertAdjacentHTML('beforeend', rowMarkup(next, config.ui));
      list.querySelector<HTMLElement>('[data-rdr-row]:last-child [data-rdr-field="description"]')?.focus();
      render(root, collectState(root), config.ui, config.locale);
      return;
    }
    if (target.closest('[data-rdr-reset]')) {
      deposit.value = String(initialState.deposit);
      syncCurrency(initialState.currency as CurrencyCode);
      list.innerHTML = initialState.deductions.map((item) => rowMarkup(item, config.ui)).join('');
      render(root, initialState, config.ui, config.locale);
      return;
    }
    if (target.closest('[data-rdr-copy]')) {
      const result = calculateRentalDepositReturn(collectState(root));
      navigator.clipboard.writeText(report(result, config.ui, config.locale));
      const label = copy.querySelector('[data-rdr-copy-label]');
      if (label) label.textContent = config.ui.copiedButton;
      window.setTimeout(() => { if (label) label.textContent = config.ui.copyButton; }, 2000);
    }
  });
}
