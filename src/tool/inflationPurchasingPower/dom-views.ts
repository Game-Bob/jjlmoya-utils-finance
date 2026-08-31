import type { InflationPurchasingPowerResult, InflationTimelinePoint } from './logic';
import { evaluateInflationTimeline } from './evaluator';
import type { InflationPurchasingPowerUI } from './ui';

const numberFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function formatAmount(value: number): string {
  return numberFormat.format(value);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function getChartBounds(result: InflationPurchasingPowerResult): { min: number; max: number } {
  const values = result.points.flatMap((point) => [point.costEquivalent, point.unchangedRealValue, point.realBalance]);
  const max = Math.max(...values, result.input.startingAmount) * 1.08;
  const min = Math.max(0, Math.min(...values) * 0.92);
  return { min, max: max === min ? min + 1 : max };
}

function createPath(points: InflationTimelinePoint[], value: (point: InflationTimelinePoint) => number, bounds: { min: number; max: number }): string {
  const chartWidth = 560;
  const chartHeight = 220;
  return points.map((point, index) => {
    const x = 70 + (index / Math.max(points.length - 1, 1)) * chartWidth;
    const y = 275 - ((value(point) - bounds.min) / (bounds.max - bounds.min)) * chartHeight;
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${Math.max(40, Math.min(275, y)).toFixed(1)}`;
  }).join(' ');
}

function renderLegend(label: string, className: string): string {
  return `<span class="ipp-legend-item"><i class="ipp-legend-line ${className}"></i>${escapeHtml(label)}</span>`;
}

function getEndY(value: number, bounds: { min: number; max: number }): string {
  return Math.max(40, Math.min(275, 275 - ((value - bounds.min) / (bounds.max - bounds.min)) * 220)).toFixed(1);
}

function renderChart(result: InflationPurchasingPowerResult, ui: InflationPurchasingPowerUI): string {
  const bounds = getChartBounds(result);
  const costPath = createPath(result.points, (point) => point.costEquivalent, bounds);
  const realPath = createPath(result.points, (point) => point.unchangedRealValue, bounds);
  const balancePath = createPath(result.points, (point) => point.realBalance, bounds);
  const end = result.points.at(-1);
  if (!end) return '';
  return `<svg class="ipp-chart" viewBox="0 0 700 340" role="img" aria-label="${escapeHtml(ui.chartDescription)}">
    <line class="ipp-grid-line" x1="70" y1="95" x2="630" y2="95" />
    <line class="ipp-grid-line" x1="70" y1="185" x2="630" y2="185" />
    <line class="ipp-axis" x1="70" y1="275" x2="630" y2="275" />
    <path class="ipp-line ipp-line-cost" d="${costPath}" />
    <path class="ipp-line ipp-line-real" d="${realPath}" />
    <path class="ipp-line ipp-line-balance" d="${balancePath}" />
    <circle class="ipp-end-dot ipp-dot-cost" cx="630" cy="${getEndY(end.costEquivalent, bounds)}" r="6" />
    <circle class="ipp-end-dot ipp-dot-real" cx="630" cy="${getEndY(end.unchangedRealValue, bounds)}" r="6" />
    <text class="ipp-axis-label" x="70" y="310">${escapeHtml(ui.todayLabel)}</text>
    <text class="ipp-axis-label" x="630" y="310" text-anchor="end">${escapeHtml(ui.endLabel)}</text>
    <text class="ipp-chart-caption" x="70" y="28">${escapeHtml(ui.chartNote)}</text>
  </svg>`;
}

export function renderTimelineScene(result: InflationPurchasingPowerResult, ui: InflationPurchasingPowerUI): string {
  const evaluation = evaluateInflationTimeline(result, ui);
  return `<div class="ipp-scene" data-ipp-tone="${evaluation.tone}">
    <div class="ipp-scene-heading">
      <span>${escapeHtml(ui.todayLabel)}</span>
      <span class="ipp-scene-rule"></span>
      <span>${escapeHtml(ui.endLabel)}</span>
    </div>
    ${renderChart(result, ui)}
    <div class="ipp-legend" aria-label="${escapeHtml(ui.chartDescription)}">
      ${renderLegend(ui.costLineLabel, 'ipp-legend-cost')}
      ${renderLegend(ui.realLineLabel, 'ipp-legend-real')}
      ${renderLegend(ui.balanceLineLabel, 'ipp-legend-balance')}
    </div>
  </div>`;
}

function renderMetric(label: string, value: string, className = ''): string {
  return `<div class="ipp-metric ${className}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

export function renderTimelineResults(result: InflationPurchasingPowerResult, ui: InflationPurchasingPowerUI): string {
  const end = result.points.at(-1);
  if (!end) return '';
  const evaluation = evaluateInflationTimeline(result, ui);
  const rows = result.milestones.map((point) => `<tr><th scope="row">${point.year}</th><td>${formatAmount(point.costEquivalent)}</td><td>${formatAmount(point.unchangedRealValue)}</td><td>${formatAmount(point.realBalance)}</td></tr>`).join('');
  return `<div class="ipp-result-content">
    <div class="ipp-primary-metric"><span>${escapeHtml(ui.costEquivalentLabel)}</span><strong>${formatAmount(end.costEquivalent)}</strong><small>${escapeHtml(ui.amountSuffix)}</small></div>
    <div class="ipp-metrics">
      ${renderMetric(ui.realValueLabel, formatAmount(end.unchangedRealValue))}
      ${renderMetric(ui.nominalBalanceLabel, formatAmount(end.nominalBalance))}
      ${renderMetric(ui.purchasingPowerLossLabel, `${result.purchasingPowerLossPercent.toFixed(1)}%`, 'ipp-metric-accent')}
    </div>
    <p class="ipp-scenario" data-ipp-tone="${evaluation.tone}">${escapeHtml(evaluation.message)}</p>
    <h3>${escapeHtml(ui.milestoneTitle)}</h3>
    <div class="ipp-table-wrap"><table><thead><tr><th scope="col">${escapeHtml(ui.yearHeader)}</th><th scope="col">${escapeHtml(ui.costHeader)}</th><th scope="col">${escapeHtml(ui.realHeader)}</th><th scope="col">${escapeHtml(ui.balanceHeader)}</th></tr></thead><tbody>${rows}</tbody></table></div>
  </div>`;
}
