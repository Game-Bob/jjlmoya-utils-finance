import { calculateSubscriptionCosts, type SubscriptionCalculatorInput, type SubscriptionFrequency, type SubscriptionInput } from './logic';
import { renderSubscriptionResults, renderSubscriptionScene } from './dom-views';
import { loadSubscriptionState, saveSubscriptionState } from './storage';
import type { SubscriptionCostAnnualizerUI } from './ui';

interface Config { ui: SubscriptionCostAnnualizerUI; initial: SubscriptionCalculatorInput; }

function createId(): string {
  return `subscription-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeAttribute(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function readField(row: HTMLElement, selector: string): string {
  return row.querySelector<HTMLInputElement | HTMLSelectElement>(selector)?.value.trim() ?? '';
}

function readRow(row: HTMLElement): SubscriptionInput {
  const renewalDate = readField(row, '[data-sca-field="renewal"]');
  const base = {
    id: row.dataset.scaRow ?? createId(),
    name: readField(row, '[data-sca-field="name"]'),
    amount: Number(readField(row, '[data-sca-field="amount"]')),
    frequency: (readField(row, '[data-sca-field="frequency"]') || 'monthly') as SubscriptionFrequency,
  };
  return renewalDate ? { ...base, renewalDate } : base;
}

function readRows(root: HTMLElement): SubscriptionInput[] {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-sca-row]')).map(readRow);
}

function collectState(root: HTMLElement): SubscriptionCalculatorInput {
  return { currency: root.querySelector<HTMLSelectElement>('[data-sca-currency]')?.value ?? 'USD', subscriptions: readRows(root) };
}

function render(root: HTMLElement, state: SubscriptionCalculatorInput, ui: SubscriptionCostAnnualizerUI): void {
  const result = calculateSubscriptionCosts(state);
  const scene = root.querySelector<HTMLElement>('[data-sca-scene]');
  const results = root.querySelector<HTMLElement>('[data-sca-results]');
  const error = root.querySelector<HTMLElement>('[data-sca-error]');
  if (!scene || !results || !error) return;
  if (!result) { scene.innerHTML = ''; results.innerHTML = ''; error.hidden = false; return; }
  error.hidden = true;
  scene.innerHTML = renderSubscriptionScene(result, ui);
  results.innerHTML = renderSubscriptionResults(result, ui);
}

function rowMarkup(item: SubscriptionInput, ui: SubscriptionCostAnnualizerUI): string {
  return `<div class="sca-row" data-sca-row="${escapeAttribute(item.id)}"><label><span>${ui.nameLabel}</span><input data-sca-field="name" value="${escapeAttribute(item.name)}" placeholder="${ui.namePlaceholder}" required /></label><label><span>${ui.amountLabel}</span><input data-sca-field="amount" type="number" min="0.01" step="0.01" value="${item.amount}" inputmode="decimal" required /></label><label><span>${ui.frequencyLabel}</span><select data-sca-field="frequency"><option value="weekly" ${item.frequency === 'weekly' ? 'selected' : ''}>${ui.weeklyOption}</option><option value="monthly" ${item.frequency === 'monthly' ? 'selected' : ''}>${ui.monthlyOption}</option><option value="quarterly" ${item.frequency === 'quarterly' ? 'selected' : ''}>${ui.quarterlyOption}</option><option value="annual" ${item.frequency === 'annual' ? 'selected' : ''}>${ui.annualOption}</option></select></label><label><span>${ui.renewalLabel} <em>${ui.optionalLabel}</em></span><input data-sca-field="renewal" type="date" value="${item.renewalDate ?? ''}" /></label><button type="button" class="sca-remove" data-sca-remove aria-label="${ui.removeSubscriptionAria}">×</button></div>`;
}

export function initSubscriptionCostAnnualizer(root: HTMLElement, config: Config): void {
  const initialState = loadSubscriptionState(config.initial);
  const list = root.querySelector<HTMLElement>('[data-sca-list]');
  const currency = root.querySelector<HTMLSelectElement>('[data-sca-currency]');
  if (!list || !currency) return;
  currency.value = initialState.currency;
  list.innerHTML = initialState.subscriptions.map((item) => rowMarkup(item, config.ui)).join('');
  render(root, initialState, config.ui);
  root.addEventListener('input', () => { const state = collectState(root); if (calculateSubscriptionCosts(state)) saveSubscriptionState(state); render(root, state, config.ui); });
  root.addEventListener('change', () => { const state = collectState(root); if (calculateSubscriptionCosts(state)) saveSubscriptionState(state); render(root, state, config.ui); });
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const remove = target.closest<HTMLButtonElement>('[data-sca-remove]');
    if (remove) { remove.closest<HTMLElement>('[data-sca-row]')?.remove(); const state = collectState(root); render(root, state, config.ui); if (calculateSubscriptionCosts(state)) saveSubscriptionState(state); return; }
    if (target.closest('[data-sca-add]')) { const next: SubscriptionInput = { id: createId(), name: '', amount: 1, frequency: 'monthly' }; list.insertAdjacentHTML('beforeend', rowMarkup(next, config.ui)); list.querySelector<HTMLElement>('[data-sca-row]:last-child [data-sca-field="name"]')?.focus(); return; }
    if (target.closest('[data-sca-reset]')) { currency.value = config.initial.currency; list.innerHTML = config.initial.subscriptions.map((item) => rowMarkup(item, config.ui)).join(''); render(root, config.initial, config.ui); saveSubscriptionState(config.initial); }
  });
}
