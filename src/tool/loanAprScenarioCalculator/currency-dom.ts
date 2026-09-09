import {
  convertLoanCurrency,
  currencyOptions,
  type LoanAprCurrencyCode,
} from "./currency";

const moneyFields = [
  "principal",
  "payment",
  "upfrontFees",
  "monthlyFees",
  "finalFees",
] as const;

function currencyDisplay(
  currency: LoanAprCurrencyCode,
  selected: HTMLButtonElement | null,
): { symbol: string; name: string } {
  const option = currencyOptions.find(({ code }) => code === currency);
  return {
    symbol:
      option?.symbol ??
      selected?.querySelector("strong")?.textContent ??
      currency,
    name: option?.name ?? currency,
  };
}

function markCurrencyOptions(
  root: HTMLElement,
  currency: LoanAprCurrencyCode,
): void {
  root
    .querySelectorAll<HTMLButtonElement>("[data-currency]")
    .forEach((button) =>
      button.setAttribute(
        "aria-selected",
        String(button.dataset.currency === currency),
      ),
    );
}

function updateCurrencyLabels(
  root: HTMLElement,
  display: { symbol: string; name: string },
): void {
  root
    .querySelector<HTMLElement>("[data-selected-currency-symbol]")
    ?.replaceChildren(display.symbol);
  root
    .querySelector<HTMLElement>("[data-selected-currency-name]")
    ?.replaceChildren(display.name);
  root
    .querySelectorAll<HTMLElement>("[data-currency-unit]")
    .forEach((unit) => (unit.textContent = display.symbol));
}

export function setCurrencyState(
  root: HTMLElement,
  currency: LoanAprCurrencyCode,
): void {
  const selected = root.querySelector<HTMLButtonElement>(
    `[data-currency="${currency}"]`,
  );
  markCurrencyOptions(root, currency);
  updateCurrencyLabels(root, currencyDisplay(currency, selected));
}

export function closeCurrencyMenu(root: HTMLElement): void {
  const menu = root.querySelector<HTMLElement>("[data-currency-menu]");
  const trigger = root.querySelector<HTMLButtonElement>(
    "[data-currency-trigger]",
  );
  if (menu && trigger) {
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  }
}

export function toggleCurrencyMenu(root: HTMLElement): void {
  const menu = root.querySelector<HTMLElement>("[data-currency-menu]");
  const trigger = root.querySelector<HTMLButtonElement>(
    "[data-currency-trigger]",
  );
  if (menu && trigger) {
    menu.hidden = !menu.hidden;
    trigger.setAttribute("aria-expanded", String(!menu.hidden));
  }
}

export function convertMoneyFields(
  root: HTMLElement,
  from: LoanAprCurrencyCode,
  to: LoanAprCurrencyCode,
): void {
  if (from === to) return;
  (["a", "b"] as const).forEach((side) =>
    moneyFields.forEach((field) => {
      const input = root.querySelector<HTMLInputElement>(
        `[data-scenario="${side}"] [data-field="${field}"]`,
      );
      const value = Number(input?.value);
      if (input && Number.isFinite(value))
        input.value = String(convertLoanCurrency(value, from, to));
    }),
  );
}
