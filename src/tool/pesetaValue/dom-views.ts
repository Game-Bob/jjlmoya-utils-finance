import type { PesetaValueUI } from './ui';
import { decomposePesetas, type CashPiece, type PesetaValueResult } from './logic';
import { evaluatePesetaValue, type ValueState } from './evaluator';

export function formatCurrency(value: number, ui: PesetaValueUI): string {
  return new Intl.NumberFormat(ui.currencyLocale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(value).replace(/\u00a0/g, ' ');
}

export function formatPesetas(value: number): string {
  return new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(value);
}

function renderCashPiece(piece: CashPiece, ui: PesetaValueUI): HTMLElement {
  const element = document.createElement('div');
  const label = piece.kind === 'coin' ? ui.labelCoin : ui.labelBanknote;
  element.className = `pv-cash-piece pv-cash-${piece.kind} pv-cash-value-${piece.value}${piece.count > 0 ? ' is-used' : ''}`;
  element.dataset.value = String(piece.value);
  element.setAttribute('aria-label', `${piece.count} ${label} ${formatPesetas(piece.value)} ${ui.labelPesetas}`);
  element.dataset.count = String(piece.count);
  const value = document.createElement('strong');
  value.textContent = formatPesetas(piece.value);
  element.append(value);
  if (piece.count > 1) {
    const count = document.createElement('small');
    count.textContent = `${piece.count}×`;
    element.append(count);
  }
  return element;
}

function renderCashScene(root: HTMLElement, result: PesetaValueResult, ui: PesetaValueUI): void {
  const piecesRoot = root.querySelector<HTMLElement>('[data-cash-pieces]');
  const caption = root.querySelector<HTMLElement>('[data-cash-caption]');
  if (!piecesRoot || !caption) return;
  piecesRoot.replaceChildren(...decomposePesetas(result.pesetas).map((piece) => renderCashPiece(piece, ui)));
  caption.textContent = `${formatPesetas(result.pesetas)} ${ui.labelPesetas}`;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.textContent = value;
  });
}

function renderDial(root: HTMLElement, result: PesetaValueResult): void {
  const evaluation = evaluatePesetaValue(result);
  const progress = Math.min(100, Math.max(8, result.cpiMultiplier * 12));
  root.style.setProperty('--pv-progress', `${progress}%`);
  root.dataset.state = evaluation.state;
}

function getStateLabel(state: ValueState, ui: PesetaValueUI): string {
  if (state === 'positive') return ui.labelStatePositive;
  if (state === 'negative') return ui.labelStateNegative;
  return ui.labelStateNeutral;
}

export function renderPesetaValue(root: HTMLElement, result: PesetaValueResult, ui: PesetaValueUI): void {
  const evaluation = evaluatePesetaValue(result);
  setText(root, '[data-result-nominal]', formatCurrency(result.nominalEuros, ui));
  setText(root, '[data-result-adjusted]', formatCurrency(result.adjustedEuros, ui));
  setText(root, '[data-result-difference]', formatCurrency(result.nominalDifference, ui));
  setText(root, '[data-result-change]', `${result.purchasingPowerChange > 0 ? '+' : ''}${result.purchasingPowerChange.toFixed(1)}%`);
  setText(root, '[data-result-origin]', String(result.originYear));
  setText(root, '[data-result-reference]', String(result.referenceYear));
  setText(root, '[data-result-cpi]', `${result.cpiMultiplier.toFixed(2)}×`);
  setText(root, '[data-result-state-label]', getStateLabel(evaluation.state, ui));
  renderCashScene(root, result, ui);
  renderDial(root, result);
}

export function renderEmptyPesetaValue(root: HTMLElement, ui: PesetaValueUI): void {
  setText(root, '[data-result-nominal]', formatCurrency(0, ui));
  setText(root, '[data-result-adjusted]', formatCurrency(0, ui));
  setText(root, '[data-result-difference]', formatCurrency(0, ui));
  setText(root, '[data-result-change]', '0.0%');
  root.querySelector<HTMLElement>('[data-cash-pieces]')?.replaceChildren();
  setText(root, '[data-cash-caption]', '');
}
