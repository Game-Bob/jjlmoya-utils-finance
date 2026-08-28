import type { DividendYieldUI } from './ui';
import type { DividendYieldResult } from './logic';
import { getYieldMessage } from './evaluator';

const numberFormat = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function formatValue(value: number): string {
  return numberFormat.format(value);
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

function getReadingClass(yieldPercent: number): string {
  if (yieldPercent >= 6) return 'strong';
  if (yieldPercent >= 2) return 'visible';
  return 'quiet';
}

export function renderCouponScene(result: DividendYieldResult, ui: DividendYieldUI): string {
  const width = Math.min(Math.max(result.grossYieldPercent * 8, 8), 220);
  const yieldLabel = `${formatValue(result.grossYieldPercent)}%`;
  return `<div class="dy-scene" data-yield-reading="${getReadingClass(result.grossYieldPercent)}">
    <svg class="dy-coupon-art" viewBox="0 0 560 250" role="img" aria-label="${escapeHtml(yieldLabel)} annual dividend yield">
      <rect class="dy-paper" x="24" y="32" width="512" height="172" rx="16" />
      <path class="dy-perforation" d="M174 32v172M386 32v172" />
      <path class="dy-price-line" d="M72 133h96M392 133h96" />
      <text class="dy-art-kicker" x="72" y="86">${escapeHtml(ui.priceShareLabel)}</text>
      <text class="dy-art-value" x="72" y="122">${formatValue(result.pricePerShare)}</text>
      <text class="dy-art-kicker" x="392" y="86">${escapeHtml(ui.annualDividendLabel)}</text>
      <text class="dy-art-value dy-art-accent" x="392" y="122">${formatValue(result.annualDividendPerShare)}</text>
      <rect class="dy-coupon-fill" x="170" y="151" width="${width}" height="20" rx="10" />
      <text class="dy-art-yield" x="280" y="187">${yieldLabel}</text>
    </svg>
    <p class="dy-scene-note">${escapeHtml(ui.couponNote)}</p>
  </div>`;
}

export function renderResults(result: DividendYieldResult, ui: DividendYieldUI): string {
  const growthBlock = result.forwardYieldPercent !== result.grossYieldPercent
    ? `<div class="dy-forward">
      <span class="dy-forward-title">${escapeHtml(ui.forwardTitle)}</span>
      <strong>${formatValue(result.forwardYieldPercent)}%</strong>
      <span>${escapeHtml(ui.forwardYieldLabel)}: ${formatValue(result.forwardYieldPercent)}%</span>
      <span>${escapeHtml(ui.forwardDividendLabel)}: ${formatValue(result.forwardAnnualDividendPerShare)} ${escapeHtml(ui.perShareSuffix)}</span>
      <span class="dy-forward-note">${escapeHtml(ui.growthNote)}</span>
    </div>`
    : '';
  return `<div class="dy-result-grid">
    <div class="dy-primary-result"><span>${escapeHtml(ui.grossYieldLabel)}</span><strong>${formatValue(result.grossYieldPercent)}%</strong></div>
    <div class="dy-result-cell"><span>${escapeHtml(ui.netYieldLabel)}</span><strong>${formatValue(result.netYieldPercent)}%</strong></div>
    <div class="dy-result-cell"><span>${escapeHtml(ui.grossIncomeLabel)}</span><strong>${formatValue(result.grossAnnualIncome)}</strong><small>${escapeHtml(ui.annualSuffix)}</small></div>
    <div class="dy-result-cell"><span>${escapeHtml(ui.netIncomeLabel)}</span><strong>${formatValue(result.netAnnualIncome)}</strong><small>${escapeHtml(ui.annualSuffix)}</small></div>
  </div>
  ${growthBlock}
  <p class="dy-reading">${escapeHtml(getYieldMessage(result))}</p>`;
}
