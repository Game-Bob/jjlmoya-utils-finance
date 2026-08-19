import { calculatePesetaValue, getSupportedYears, REFERENCE_YEAR } from './logic';
import { renderEmptyPesetaValue, renderPesetaValue, formatPesetas } from './dom-views';
import { readPesetaValueState, writePesetaValueState } from './storage';
import type { PesetaValueUI } from './ui';

interface ControllerState {
  pesetas: number;
  originYear: number;
}

function setActiveDecade(root: HTMLElement, decade: number): void {
  root.querySelectorAll<HTMLButtonElement>('[data-decade][role="tab"]').forEach((button) => {
    const isActive = Number(button.dataset.decade) === decade;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });
  root.querySelectorAll<HTMLButtonElement>('[data-year-option]').forEach((option) => {
    option.hidden = Number(option.dataset.decade) !== decade;
  });
}

function getInput(root: HTMLElement): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>('[data-peseta-input]');
}

function setYearMenu(root: HTMLElement, year: number, ui: PesetaValueUI): void {
  const trigger = root.querySelector<HTMLButtonElement>('[data-year-trigger]');
  const hidden = root.querySelector<HTMLInputElement>('[data-year-value]');
  const options = root.querySelectorAll<HTMLButtonElement>('[data-year-option]');
  if (trigger) trigger.textContent = String(year);
  if (hidden) hidden.value = String(year);
  options.forEach((option) => option.classList.toggle('is-selected', Number(option.dataset.year) === year));
  setActiveDecade(root, Math.floor(year / 10) * 10);
  trigger?.setAttribute('aria-label', `${ui.labelOriginYear}: ${year}`);
}

function closeYearMenu(root: HTMLElement, ui: PesetaValueUI): void {
  const menu = root.querySelector<HTMLElement>('[data-year-menu]');
  const trigger = root.querySelector<HTMLButtonElement>('[data-year-trigger]');
  menu?.classList.remove('is-open');
  menu?.setAttribute('aria-label', ui.labelOpenYears);
  trigger?.setAttribute('aria-expanded', 'false');
}

function toggleYearMenu(root: HTMLElement, ui: PesetaValueUI): void {
  const menu = root.querySelector<HTMLElement>('[data-year-menu]');
  const trigger = root.querySelector<HTMLButtonElement>('[data-year-trigger]');
  const isOpen = menu?.classList.toggle('is-open') ?? false;
  menu?.setAttribute('aria-label', isOpen ? ui.labelCloseYears : ui.labelOpenYears);
  trigger?.setAttribute('aria-expanded', String(isOpen));
}

function readState(root: HTMLElement): ControllerState {
  const input = getInput(root);
  const year = Number(root.querySelector<HTMLInputElement>('[data-year-value]')?.value ?? REFERENCE_YEAR);
  return { pesetas: Number(input?.value ?? 1000), originYear: year };
}

function update(root: HTMLElement, ui: PesetaValueUI): void {
  const state = readState(root);
  const result = calculatePesetaValue(state);
  if (result) {
    renderPesetaValue(root, result, ui);
    writePesetaValueState(state);
  } else {
    renderEmptyPesetaValue(root, ui);
  }
  const input = getInput(root);
  const amountLabel = root.querySelector<HTMLElement>('[data-amount-label]');
  if (input && amountLabel) amountLabel.textContent = `${formatPesetas(Number(input.value) || 0)} ${ui.labelPesetas}`;
}

function bindPresets(root: HTMLElement, ui: PesetaValueUI): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      const input = getInput(root);
      if (input) input.value = button.dataset.preset ?? '1000';
      root.querySelectorAll('[data-preset]').forEach((item) => item.classList.toggle('is-active', item === button));
      update(root, ui);
    });
  });
}

function bindYearMenu(root: HTMLElement, ui: PesetaValueUI): void {
  root.querySelector('[data-year-trigger]')?.addEventListener('click', () => toggleYearMenu(root, ui));
  root.querySelectorAll<HTMLButtonElement>('[data-decade][role="tab"]').forEach((button) => {
    button.addEventListener('click', () => setActiveDecade(root, Number(button.dataset.decade)));
  });
  root.querySelectorAll<HTMLButtonElement>('[data-year-option]').forEach((option) => {
    option.addEventListener('click', () => {
      setYearMenu(root, Number(option.dataset.year), ui);
      closeYearMenu(root, ui);
      update(root, ui);
    });
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closeYearMenu(root, ui);
  });
}

function resetTool(root: HTMLElement, input: HTMLInputElement | null, ui: PesetaValueUI): void {
  if (input) input.value = '1000';
  setYearMenu(root, 2000, ui);
  root.querySelectorAll('[data-preset]').forEach((item) => item.classList.remove('is-active'));
  update(root, ui);
}

function restoreSavedState(root: HTMLElement, input: HTMLInputElement | null, ui: PesetaValueUI): void {
  const saved = readPesetaValueState();
  if (input) input.value = String(saved?.pesetas ?? 1000);
  setYearMenu(root, saved?.originYear ?? 2000, ui);
}

export function mountPesetaValue(root: HTMLElement, ui: PesetaValueUI): void {
  const input = getInput(root);
  restoreSavedState(root, input, ui);
  const changeLabel = root.querySelector<HTMLElement>('[data-result-change]');
  changeLabel?.setAttribute('aria-label', ui.labelPurchasingPowerChange);
  root.querySelector('[data-reset]')?.addEventListener('click', () => resetTool(root, input, ui));
  input?.addEventListener('input', () => update(root, ui));
  bindPresets(root, ui);
  bindYearMenu(root, ui);
  update(root, ui);
  root.dataset.referenceYear = String(REFERENCE_YEAR);
  root.dataset.availableYears = String(getSupportedYears().length);
}
