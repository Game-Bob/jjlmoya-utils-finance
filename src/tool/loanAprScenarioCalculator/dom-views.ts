import type { LoanAprScenarioCalculatorUI } from "./ui";
import type { ComparisonResult, LoanScenarioResult } from "./logic";
import { currencyFormatLocale, type LoanAprCurrencyCode } from "./currency";
import { getDifferenceLabel, getScenarioBadge } from "./evaluator";

function money(
  value: number,
  locale: string,
  currency: LoanAprCurrencyCode,
): string {
  return new Intl.NumberFormat(currencyFormatLocale[currency] ?? locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function percent(value: number): string {
  return `${value.toFixed(2)}%`;
}

function escapeText(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ] ?? character,
  );
}

type MetricTone = "better" | "worse" | "neutral" | "";

function metric(
  label: string,
  value: string,
  emphasis = false,
  tone: MetricTone = "",
): string {
  const classes = [
    "loan-apr-metric",
    emphasis ? "loan-apr-metric-emphasis" : "",
    tone ? `loan-apr-metric-${tone}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<div class="${classes}"><dt>${escapeText(label)}</dt><dd>${escapeText(value)}</dd></div>`;
}

function timeline(input: {
  result: LoanScenarioResult;
  side: "a" | "b";
  ui: LoanAprScenarioCalculatorUI;
  locale: string;
  currency: LoanAprCurrencyCode;
}): string {
  const { result, side, ui, locale, currency } = input;
  const firstPayment = money(
    result.monthlyPayment + result.monthlyFees,
    locale,
    currency,
  );
  const finalPayment = money(
    result.monthlyPayment + result.monthlyFees + result.finalFees,
    locale,
    currency,
  );
  return `<div class="loan-apr-timeline loan-apr-timeline-${side}" aria-label="${escapeText(result.name)} ${escapeText(ui.labelTimeline)}"><div class="loan-apr-timeline-track"><span class="loan-apr-timeline-dot loan-apr-timeline-start"></span><span class="loan-apr-timeline-line"></span><span class="loan-apr-timeline-dot loan-apr-timeline-end"></span></div><div class="loan-apr-timeline-labels"><span>${escapeText(ui.labelStart)}<strong>${escapeText(money(result.netCashReceived, locale, currency))}</strong></span><span>${escapeText(ui.labelMonthly)}<strong>${escapeText(firstPayment)}</strong></span><span>${escapeText(ui.labelEnd)}<strong>${escapeText(finalPayment)}</strong></span></div></div>`;
}

function errorMessage(
  error: string | undefined,
  ui: LoanAprScenarioCalculatorUI,
): string {
  if (error === "principal") return ui.labelInvalidPrincipal;
  if (error === "term") return ui.labelInvalidTerm;
  if (error === "fees") return ui.labelInvalidFees;
  if (error === "rate") return ui.labelInvalidRate;
  return ui.labelInvalidPayment;
}

interface ViewContext {
  ui: LoanAprScenarioCalculatorUI;
  locale: string;
  currency: LoanAprCurrencyCode;
}

function badgeText(
  badge: ReturnType<typeof getScenarioBadge>,
  ui: LoanAprScenarioCalculatorUI,
): string {
  if (badge === "lower") return ui.labelLowerCost;
  if (badge === "higher") return ui.labelHigherCost;
  if (badge === "neutral") return ui.labelTie;
  return ui.labelNeedValidInputs;
}

function metricTone(
  current: number,
  other: number,
  higherIsBetter = false,
): MetricTone {
  if (!Number.isFinite(current) || !Number.isFinite(other)) return "";
  if (Math.abs(current - other) < 0.005) return "neutral";
  const currentIsBetter = higherIsBetter ? current > other : current < other;
  return currentIsBetter ? "better" : "worse";
}

function visualComparison(
  first: LoanScenarioResult,
  second: LoanScenarioResult,
  comparison: ComparisonResult,
  ui: LoanAprScenarioCalculatorUI,
): string {
  const firstBadge = getScenarioBadge("a", first, comparison);
  const secondBadge = getScenarioBadge("b", second, comparison);
  const aprValue = (result: LoanScenarioResult): string =>
    result.valid ? percent(result.effectiveApr) : "-";
  return `<div class="loan-apr-visual-comparison" aria-label="${escapeText(ui.labelEffectiveApr)}"><div class="loan-apr-visual-side loan-apr-visual-${firstBadge}"><span class="loan-apr-visual-index">A</span><span class="loan-apr-visual-name">${escapeText(first.name)}</span><strong>${escapeText(aprValue(first))}</strong><small>${escapeText(badgeText(firstBadge, ui))}</small></div><div class="loan-apr-visual-vs" aria-hidden="true">VS</div><div class="loan-apr-visual-side loan-apr-visual-${secondBadge}"><span class="loan-apr-visual-index">B</span><span class="loan-apr-visual-name">${escapeText(second.name)}</span><strong>${escapeText(aprValue(second))}</strong><small>${escapeText(badgeText(secondBadge, ui))}</small></div></div>`;
}

function scenarioPanel(input: {
  result: LoanScenarioResult;
  other: LoanScenarioResult;
  side: "a" | "b";
  comparison: ComparisonResult;
  context: ViewContext;
}): string {
  const { result, other, side, comparison, context } = input;
  const { ui, locale, currency } = context;
  const badge = getScenarioBadge(side, result, comparison);
  const statusText = badgeText(badge, ui);
  if (!result.valid)
    return `<article class="loan-apr-result-panel loan-apr-result-invalid"><header><span class="loan-apr-result-index">${side.toUpperCase()}</span><h3>${escapeText(result.name)}</h3><span class="loan-apr-badge loan-apr-badge-invalid">${escapeText(statusText)}</span></header><p>${escapeText(errorMessage(result.error, ui))}</p></article>`;
  return `<article class="loan-apr-result-panel loan-apr-result-${badge}"><header><span class="loan-apr-result-index">${side.toUpperCase()}</span><h3>${escapeText(result.name)}</h3><span class="loan-apr-badge">${escapeText(statusText)}</span></header>${timeline({ result, side, ui, locale, currency })}<dl class="loan-apr-metrics">${metric(ui.labelEffectiveApr, percent(result.effectiveApr), true, metricTone(result.effectiveApr, other.effectiveApr))}${metric(ui.labelMonthlyPaymentResult, money(result.monthlyPayment, locale, currency), false, metricTone(result.monthlyPayment, other.monthlyPayment))}${metric(ui.labelTotalPaid, money(result.totalPaid, locale, currency), false, metricTone(result.totalPaid, other.totalPaid))}${metric(ui.labelTotalFees, money(result.totalFees, locale, currency), false, metricTone(result.totalFees, other.totalFees))}${metric(ui.labelFinanceCost, money(result.financeCost, locale, currency), false, metricTone(result.financeCost, other.financeCost))}${metric(ui.labelNetCashReceived, money(result.netCashReceived, locale, currency), false, metricTone(result.netCashReceived, other.netCashReceived, true))}</dl></article>`;
}

function winnerText(
  first: LoanScenarioResult,
  second: LoanScenarioResult,
  comparison: ComparisonResult,
  ui: LoanAprScenarioCalculatorUI,
): string {
  if (comparison.winner === "a")
    return `${first.name} ${ui.labelLowerCost.toLowerCase()}`;
  if (comparison.winner === "b")
    return `${second.name} ${ui.labelLowerCost.toLowerCase()}`;
  if (comparison.winner === "tie") return ui.labelTie;
  return ui.labelNoComparison;
}

export function renderComparison(input: {
  root: HTMLElement;
  first: LoanScenarioResult;
  second: LoanScenarioResult;
  comparison: ComparisonResult;
  context: ViewContext;
}): void {
  const { root, first, second, comparison, context } = input;
  const { ui } = context;
  root.innerHTML = `<div class="loan-apr-result-intro"><div><h2>${escapeText(ui.labelWinner)}</h2></div><p>${escapeText(winnerText(first, second, comparison, ui))}<br><span>${escapeText(getDifferenceLabel(comparison))}</span></p></div>${visualComparison(first, second, comparison, ui)}<div class="loan-apr-result-panels">${scenarioPanel({ result: first, other: second, side: "a", comparison, context })}${scenarioPanel({ result: second, other: first, side: "b", comparison, context })}</div><div class="loan-apr-method"><span>${escapeText(ui.labelFormula)}</span><p>${escapeText(ui.labelFormulaText)}</p><small>${escapeText(ui.labelApproximation)}</small></div>`;
}

function copyWinner(
  first: LoanScenarioResult,
  second: LoanScenarioResult,
  comparison: ComparisonResult,
  ui: LoanAprScenarioCalculatorUI,
): string {
  if (comparison.winner === "a") return first.name;
  if (comparison.winner === "b") return second.name;
  if (comparison.winner === "tie") return ui.labelTie;
  return ui.labelNoComparison;
}

function copyLine(result: LoanScenarioResult, context: ViewContext): string {
  if (!result.valid)
    return `${result.name}: ${context.ui.labelNeedValidInputs}`;
  return `${result.name}: ${percent(result.effectiveApr)} effective APR, ${money(result.monthlyPayment, context.locale, context.currency)} monthly payment, ${money(result.totalPaid, context.locale, context.currency)} total paid`;
}

export function formatResultForCopy(input: {
  first: LoanScenarioResult;
  second: LoanScenarioResult;
  comparison: ComparisonResult;
  context: ViewContext;
}): string {
  const { first, second, comparison, context } = input;
  return `${context.ui.labelWinner}: ${copyWinner(first, second, comparison, context.ui)}\n${copyLine(first, context)}\n${copyLine(second, context)}`;
}
