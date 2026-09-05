import type { SubscriptionCalculatorResult } from './logic';
import type { SubscriptionCostAnnualizerUI } from './ui';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function formatMoney(value: number, currency: string): string {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency, maximumFractionDigits: 2 }).format(value);
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

function metric(label: string, value: string, accent = ''): string {
  return `<div class="sca-metric ${accent}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

export function renderSubscriptionScene(result: SubscriptionCalculatorResult, ui: SubscriptionCostAnnualizerUI): string {
  const bars = result.items.map((item) => {
    const width = Math.max(10, (item.annualCost / Math.max(result.annualTotal, 1)) * 100);
    return `<div class="sca-bar-row"><span>${escapeHtml(item.name)}</span><div class="sca-bar-track"><i style="width:${width.toFixed(1)}%"></i></div><strong>${escapeHtml(formatMoney(item.annualCost, result.currency))}</strong></div>`;
  }).join('');
  return `<div class="sca-scene" aria-label="${escapeHtml(ui.yearlyViewTitle)}"><div class="sca-calendar"><span>52</span><small>${escapeHtml(ui.weeklyOption)}</small><span>12</span><small>${escapeHtml(ui.monthlyOption)}</small><span>4</span><small>${escapeHtml(ui.quarterlyOption)}</small><span>1</span><small>${escapeHtml(ui.annualOption)}</small></div><div class="sca-flow-line"></div><div class="sca-coin-stack"><i></i><i></i><i></i><i></i><b>${escapeHtml(formatMoney(result.annualTotal, result.currency))}</b></div><div class="sca-bars">${bars}</div></div>`;
}

export function renderSubscriptionResults(result: SubscriptionCalculatorResult, ui: SubscriptionCostAnnualizerUI): string {
  const scenarioRows = result.scenarios.map((scenario) => {
    const item = result.items.find((candidate) => candidate.id === scenario.removedId);
    if (!item) return '';
    return `<tr><th scope="row">${escapeHtml(item.name)}</th><td>${escapeHtml(formatMoney(scenario.annualTotal, result.currency))}</td><td>${escapeHtml(formatMoney(scenario.savedAnnual, result.currency))}</td></tr>`;
  }).join('');
  const renewals = result.renewals.length === 0
    ? `<p class="sca-muted">${escapeHtml(ui.noRenewals)}</p>`
    : `<div class="sca-renewals"><div class="sca-renewal-head"><span>${escapeHtml(ui.renewalDateLabel)}</span><span>${escapeHtml(ui.subscriptionLabel)}</span><span>${escapeHtml(ui.renewalAmountLabel)}</span></div>${result.renewals.slice(0, 6).map((item) => `<div class="sca-renewal"><time datetime="${item.date}">${escapeHtml(formatDate(item.date))}</time><span>${escapeHtml(item.name)}</span><strong>${escapeHtml(formatMoney(item.amount, result.currency))}</strong></div>`).join('')}</div>`;
  return `<div class="sca-results"><div class="sca-metrics">${metric(ui.monthlyTotalLabel, formatMoney(result.monthlyTotal, result.currency), 'sca-accent')}${metric(ui.annualTotalLabel, formatMoney(result.annualTotal, result.currency))}${metric(ui.dailyTotalLabel, formatMoney(result.averageDailyCost, result.currency))}</div><section class="sca-panel"><h3>${escapeHtml(ui.scenarioTitle)}</h3><p>${escapeHtml(ui.scenarioText)}</p><div class="sca-table-wrap"><table><thead><tr><th scope="col">${escapeHtml(ui.subscriptionLabel)}</th><th scope="col">${escapeHtml(ui.keepLabel)}</th><th scope="col">${escapeHtml(ui.saveLabel)}</th></tr></thead><tbody>${scenarioRows}</tbody></table></div></section><section class="sca-panel"><h3>${escapeHtml(ui.renewalTitle)}</h3>${renewals}</section></div>`;
}
