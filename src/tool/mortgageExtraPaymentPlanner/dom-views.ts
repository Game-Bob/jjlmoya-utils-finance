import type { MortgageInputs, MortgageResult, PaymentRow } from './logic';
import type { MortgageExtraPaymentPlannerUI } from './ui';

export interface MortgageViewContext {
  result: MortgageResult;
  inputs: MortgageInputs;
  ui: MortgageExtraPaymentPlannerUI;
  locale: string;
}

function money(value: number, currency: string, locale: string): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2 }).format(value);
}

function dateLabel(value: string, locale: string): string {
  const date = new Date(`${value}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' }).format(date);
}

function textElement(tag: string, text: string, className?: string): HTMLElement {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function createMetric(label: string, value: string, className: string): HTMLElement {
  const element = document.createElement('div');
  element.className = `mortgage-metric ${className}`;
  element.append(textElement('span', label, 'mortgage-metric-label'), textElement('strong', value, 'mortgage-metric-value'));
  return element;
}

function sampleRows(rows: PaymentRow[], count: number): PaymentRow[] {
  if (rows.length <= count) return rows;
  return Array.from({ length: count }, (_, index) => rows[Math.min(rows.length - 1, Math.round((index * (rows.length - 1)) / (count - 1)))])!;
}

function createPath(rows: PaymentRow[], principal: number): string {
  return sampleRows(rows, 13).map((row, index, sampled) => {
    const x = 42 + (index * 526) / Math.max(1, sampled.length - 1);
    const y = 28 + (row.balance / principal) * 112;
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

function addExtraMarkers(svg: SVGSVGElement, context: MortgageViewContext): void {
  const sampled = sampleRows(context.result.schedule, 13);
  sampled.forEach((row, index) => {
    if (row.extra <= 0) return;
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const x = 42 + (index * 526) / Math.max(1, sampled.length - 1);
    marker.setAttribute('x1', x.toFixed(1));
    marker.setAttribute('x2', x.toFixed(1));
    marker.setAttribute('y1', '28');
    marker.setAttribute('y2', '140');
    marker.setAttribute('class', 'mortgage-extra-marker');
    svg.append(marker);
  });
}

function renderScene(container: HTMLElement, context: MortgageViewContext): void {
  const { result, inputs, ui, locale } = context;
  container.replaceChildren();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 620 180');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', ui.balanceSceneLabel);
  const baseline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  baseline.setAttribute('d', createPath(result.baselineSchedule, inputs.principal));
  baseline.setAttribute('class', 'mortgage-path mortgage-path-baseline');
  const plan = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  plan.setAttribute('d', createPath(result.schedule, inputs.principal));
  plan.setAttribute('class', 'mortgage-path mortgage-path-plan');
  svg.append(baseline, plan);
  addExtraMarkers(svg, context);
  const legend = document.createElement('div');
  legend.className = 'mortgage-scene-legend';
  const baselineLegend = textElement('span', ui.baselineLabel, 'mortgage-legend-item mortgage-legend-baseline');
  const planLegend = textElement('span', ui.planLabel, 'mortgage-legend-item mortgage-legend-plan');
  legend.append(baselineLegend, planLegend);
  const helper = textElement('p', ui.balanceSceneHelp, 'mortgage-scene-help');
  const caption = textElement('p', `${ui.payoffDateLabel}: ${dateLabel(result.payoffDate, locale)}`, 'mortgage-scene-caption');
  container.append(svg, legend, helper, caption);
}

function renderMetrics(container: HTMLElement, context: MortgageViewContext): void {
  const { result, inputs, ui, locale } = context;
  container.replaceChildren();
  const currency = inputs.currency;
  const converted = (value: number) => money(value, currency, locale);
  const grid = document.createElement('div');
  grid.className = 'mortgage-metrics';
  grid.append(
    createMetric(ui.regularPaymentLabel, converted(result.regularPayment), 'mortgage-metric-primary'),
    createMetric(ui.interestSavedLabel, converted(result.interestSaved), 'mortgage-metric-positive'),
    createMetric(ui.periodsSavedLabel, `${result.periodsSaved}`, 'mortgage-metric-positive'),
    createMetric(ui.totalInterestLabel, converted(result.totalInterest), 'mortgage-metric-secondary'),
    createMetric(ui.totalExtraLabel, converted(result.totalExtra), 'mortgage-metric-secondary'),
    createMetric(ui.payoffDateLabel, dateLabel(result.payoffDate, locale), 'mortgage-metric-date'),
  );
  const status = textElement('p', `${ui.planLabel}: ${converted(result.interestSaved)} ${ui.interestSavedLabel.toLowerCase()}`, 'mortgage-result-note');
  container.append(grid, status);
}

function addCell(row: HTMLTableRowElement, value: string, className?: string): void {
  const cell = document.createElement('td');
  cell.textContent = value;
  if (className) cell.className = className;
  row.append(cell);
}

function renderAnnualTable(container: HTMLElement, context: MortgageViewContext): void {
  const { result, inputs, ui, locale } = context;
  container.replaceChildren();
  const currency = inputs.currency;
  const converted = (value: number) => money(value, currency, locale);
  const table = document.createElement('table');
  table.className = 'mortgage-annual-table';
  const head = document.createElement('thead');
  const headRow = document.createElement('tr');
  [ui.yearLabel, ui.paymentLabel, ui.interestLabel, ui.principalPaidLabel, ui.extraPaidLabel, ui.endingBalanceLabel].forEach((label) => {
    headRow.append(textElement('th', label));
  });
  head.append(headRow);
  const body = document.createElement('tbody');
  result.annualSummary.forEach((summary) => {
    const row = document.createElement('tr');
    addCell(row, `${summary.year}`);
    addCell(row, converted(summary.payment));
    addCell(row, converted(summary.interest));
    addCell(row, converted(summary.principal));
    addCell(row, converted(summary.extra));
    addCell(row, converted(summary.balance));
    body.append(row);
  });
  table.append(head, body);
  container.append(table);
}

export function renderMortgageViews(
  root: HTMLElement,
  context: MortgageViewContext | null,
): void {
  const scene = root.querySelector<HTMLElement>('[data-mortgage-scene]');
  const metrics = root.querySelector<HTMLElement>('[data-mortgage-results]');
  const annual = root.querySelector<HTMLElement>('[data-mortgage-annual]');
  const empty = root.querySelector<HTMLElement>('[data-mortgage-empty]');
  if (!scene || !metrics || !annual || !empty) return;
  if (!context) {
    scene.replaceChildren();
    metrics.replaceChildren();
    annual.replaceChildren();
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  renderScene(scene, context);
  renderMetrics(metrics, context);
  renderAnnualTable(annual, context);
}
