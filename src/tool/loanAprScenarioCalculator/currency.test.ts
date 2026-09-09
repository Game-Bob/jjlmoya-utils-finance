import { describe, expect, it } from "vitest";
import {
  convertLoanCurrency,
  currencyOptions,
  defaultCurrencyByLocale,
} from "./currency";

describe("loan APR currency support", () => {
  it("offers the international currency set used by the other scenario tools", () => {
    expect(currencyOptions.map(({ code }) => code)).toEqual([
      "AUD",
      "BRL",
      "CAD",
      "CHF",
      "CNY",
      "CZK",
      "DKK",
      "EUR",
      "GBP",
      "IDR",
      "INR",
      "JPY",
      "KRW",
      "MXN",
      "NOK",
      "PLN",
      "RUB",
      "SEK",
      "TRY",
      "USD",
    ]);
  });

  it("uses a symbol and name for every currency option", () => {
    expect(currencyOptions.find(({ code }) => code === "RUB")).toMatchObject({
      symbol: "₽",
      name: "Russian ruble",
    });
    expect(currencyOptions.every(({ symbol, name }) => symbol && name)).toBe(
      true,
    );
  });

  it("selects a useful default for each supported locale family", () => {
    expect(defaultCurrencyByLocale).toMatchObject({
      en: "USD",
      es: "EUR",
      ja: "JPY",
      zh: "CNY",
    });
  });

  it("converts monetary inputs with reversible planning factors", () => {
    expect(convertLoanCurrency(100, "EUR", "USD")).toBe(108.7);
    expect(convertLoanCurrency(108.7, "USD", "EUR")).toBe(100);
  });
});
