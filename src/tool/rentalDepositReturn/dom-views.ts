import type { RentalDepositResult } from './logic';
import type { RentalDepositReturnUI } from './ui';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function formatMoney(value: number, currency: string, locale: string): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2 }).format(value);
}

function metric(label: string, value: string, accent = ''): string {
  return `<div class="rdr-metric ${accent}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

export function renderDepositScene(result: RentalDepositResult, ui: RentalDepositReturnUI, locale = 'en-US'): string {
  const used = result.deposit > 0 ? Math.min(100, (result.totalDeductions / result.deposit) * 100) : 0;
  const returnWidth = result.deposit > 0 ? Math.max(0, 100 - used) : 0;
  const rows = result.deductions.length === 0
    ? `<p class="rdr-scene-empty">${escapeHtml(ui.emptyMessage)}</p>`
    : result.deductions.map((deduction) => `<div class="rdr-ledger-row ${deduction.status}"><span>${escapeHtml(deduction.description)}</span><i class="rdr-ledger-line"><b style="width:${Math.min(100, Math.max(0, deduction.shareOfDeposit)).toFixed(1)}%"></b></i><strong>${escapeHtml(formatMoney(deduction.amount, result.currency, locale))}</strong></div>`).join('');
  return `<div class="rdr-scene" aria-label="${escapeHtml(ui.returnFlowTitle)}"><div class="rdr-scene-heading"><span class="rdr-key-mark" aria-hidden="true">⌁</span><div><strong>${escapeHtml(ui.returnFlowTitle)}</strong><p>${escapeHtml(ui.returnFlowText)}</p></div></div><div class="rdr-flow"><div class="rdr-flow-node rdr-flow-deposit"><span aria-hidden="true">●</span><strong>${escapeHtml(formatMoney(result.deposit, result.currency, locale))}</strong><small>${escapeHtml(ui.depositNode)}</small></div><div class="rdr-flow-arrow" aria-hidden="true">→</div><div class="rdr-flow-node rdr-flow-return" style="--return-width:${returnWidth.toFixed(1)}%"><span aria-hidden="true">↗</span><strong>${escapeHtml(formatMoney(result.estimatedReturn, result.currency, locale))}</strong><small>${escapeHtml(ui.returnNode)}</small></div></div><div class="rdr-meter" aria-label="${escapeHtml(ui.deductionNode)}"><span style="width:${used.toFixed(1)}%"></span></div><div class="rdr-meter-labels"><span>${escapeHtml(ui.deductionNode)} ${escapeHtml(formatMoney(result.totalDeductions, result.currency, locale))}</span><span>${escapeHtml(ui.returnNode)} ${escapeHtml(formatMoney(result.estimatedReturn, result.currency, locale))}</span></div><div class="rdr-ledger"><div class="rdr-ledger-title"><span>${escapeHtml(ui.deductionBreakdownTitle)}</span><span>${escapeHtml(ui.amountLabel)}</span></div>${rows}</div></div>`;
}

export function renderDepositResults(result: RentalDepositResult, ui: RentalDepositReturnUI, locale = 'en-US'): string {
  const scenarioRows = result.scenarios.length === 0
    ? `<p class="rdr-muted">${escapeHtml(ui.noDisputed)}</p>`
    : `<div class="rdr-table-wrap"><table><thead><tr><th scope="col">${escapeHtml(ui.scenarioColumn)}</th><th scope="col">${escapeHtml(ui.scenarioReturnColumn)}</th><th scope="col">${escapeHtml(ui.scenarioIncreaseColumn)}</th></tr></thead><tbody>${result.scenarios.map((scenario) => `<tr><th scope="row">${escapeHtml(scenario.description)}</th><td>${escapeHtml(formatMoney(scenario.returnAmount, result.currency, locale))}</td><td>+${escapeHtml(formatMoney(scenario.additionalReturn, result.currency, locale))}</td></tr>`).join('')}</tbody></table></div>`;
  const warning = result.overDeducted > 0 ? `<div class="rdr-warning"><strong>${escapeHtml(ui.overDeductedTitle)}</strong><p>${escapeHtml(ui.overDeductedText)} ${escapeHtml(formatMoney(result.overDeducted, result.currency, locale))}</p></div>` : '';
  return `<div class="rdr-results"><div class="rdr-metrics">${metric(ui.estimatedReturnLabel, formatMoney(result.estimatedReturn, result.currency, locale), 'rdr-accent')}${metric(ui.undisputedReturnLabel, formatMoney(result.undisputedReturn, result.currency, locale))}${metric(ui.totalDeductionsLabel, formatMoney(result.totalDeductions, result.currency, locale))}</div>${warning}<section class="rdr-panel"><h3>${escapeHtml(ui.scenariosTitle)}</h3><p>${escapeHtml(ui.scenariosText)}</p>${scenarioRows}</section><section class="rdr-panel rdr-summary"><h3>${escapeHtml(ui.summaryTitle)}</h3><dl><div><dt>${escapeHtml(ui.confirmedLabel)}</dt><dd>${escapeHtml(formatMoney(result.confirmedDeductions, result.currency, locale))}</dd></div><div><dt>${escapeHtml(ui.disputedLabel)}</dt><dd>${escapeHtml(formatMoney(result.disputedDeductions, result.currency, locale))}</dd></div></dl></section></div>`;
}
