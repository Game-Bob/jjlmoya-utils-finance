import type { CoverageCategoryResult, RenterInsuranceResult } from './logic';
import type { RenterInsuranceCoverageGapCalculatorUI } from './ui';
import { evaluateCoverage } from './evaluator';

export interface ViewConfig {
  root: HTMLElement;
  locale: string;
  ui: RenterInsuranceCoverageGapCalculatorUI;
}

const setText = (root: HTMLElement, selector: string, value: string): void => {
  const element = root.querySelector<HTMLElement>(selector);
  if (element) element.textContent = value;
};

const formatMoney = (locale: string, currency: string, value: number): string => new Intl.NumberFormat(locale, {
  style: 'currency',
  currency,
  maximumFractionDigits: 2,
}).format(value);

const renderCategoryList = (root: HTMLElement, categories: CoverageCategoryResult[], locale: string, currency: string): void => {
  const list = root.querySelector<HTMLOListElement>('[data-ric-largest-list]');
  if (!list) return;
  list.replaceChildren(...categories.map((category) => {
    const item = document.createElement('li');
    item.textContent = `${category.category}: ${formatMoney(locale, currency, category.value)}`;
    return item;
  }));
};

const renderShelf = (root: HTMLElement, result: RenterInsuranceResult): void => {
  const total = Math.max(result.totalContents, 1);
  const contentWidth = Math.min(100, result.totalContents / total * 100);
  const limitWidth = Math.min(100, result.policyLimit / total * 100);
  root.querySelector<HTMLElement>('[data-ric-contents-fill]')?.style.setProperty('width', `${contentWidth}%`);
  root.querySelector<HTMLElement>('[data-ric-limit-line]')?.style.setProperty('left', `${limitWidth}%`);
  root.querySelector<HTMLElement>('[data-ric-loss-mark]')?.style.setProperty('left', `${Math.min(100, result.sampleLoss / total * 100)}%`);
};

export function renderRenterInsuranceResult(config: ViewConfig, result: RenterInsuranceResult): void {
  const { root, locale, ui } = config;
  const evaluation = evaluateCoverage(result, ui);
  root.dataset.status = evaluation.status;
  setText(root, '[data-ric-status]', evaluation.label);
  setText(root, '[data-ric-status-text]', evaluation.text);
  setText(root, '[data-ric-total]', formatMoney(locale, result.currency, result.totalContents));
  setText(root, '[data-ric-gap]', formatMoney(locale, result.currency, result.coverageGap));
  setText(root, '[data-ric-ratio]', `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(result.coverageRatio * 100)}%`);
  setText(root, '[data-ric-payout]', formatMoney(locale, result.currency, result.estimatedPayout));
  setText(root, '[data-ric-out-of-pocket]', formatMoney(locale, result.currency, result.estimatedOutOfPocket));
  setText(root, '[data-ric-loss-label]', `${ui.labelLossScenario}: ${formatMoney(locale, result.currency, result.sampleLoss)}`);
  renderCategoryList(root, result.largestCategories, locale, result.currency);
  renderShelf(root, result);
}

export function clearRenterInsuranceResult(root: HTMLElement, ui: RenterInsuranceCoverageGapCalculatorUI): void {
  root.dataset.status = 'invalid';
  ['total', 'gap', 'ratio', 'payout', 'out-of-pocket'].forEach((key) => setText(root, `[data-ric-${key}]`, '—'));
  setText(root, '[data-ric-status]', ui.labelInvalidInput);
  setText(root, '[data-ric-status-text]', '');
  root.querySelector<HTMLElement>('[data-ric-contents-fill]')?.style.setProperty('width', '0%');
  root.querySelector<HTMLElement>('[data-ric-limit-line]')?.style.setProperty('left', '0%');
  root.querySelector<HTMLElement>('[data-ric-loss-mark]')?.style.setProperty('left', '0%');
  root.querySelector('[data-ric-largest-list]')?.replaceChildren();
}

export { formatMoney };
