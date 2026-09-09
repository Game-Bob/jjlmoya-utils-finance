export const currencyOptions = [
  { code: "AUD", symbol: "A$", name: "Australian dollar" },
  { code: "BRL", symbol: "R$", name: "Brazilian real" },
  { code: "CAD", symbol: "C$", name: "Canadian dollar" },
  { code: "CHF", symbol: "CHF", name: "Swiss franc" },
  { code: "CNY", symbol: "¥", name: "Chinese yuan" },
  { code: "CZK", symbol: "Kč", name: "Czech koruna" },
  { code: "DKK", symbol: "kr", name: "Danish krone" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British pound" },
  { code: "IDR", symbol: "Rp", name: "Indonesian rupiah" },
  { code: "INR", symbol: "₹", name: "Indian rupee" },
  { code: "JPY", symbol: "¥", name: "Japanese yen" },
  { code: "KRW", symbol: "₩", name: "South Korean won" },
  { code: "MXN", symbol: "MX$", name: "Mexican peso" },
  { code: "NOK", symbol: "kr", name: "Norwegian krone" },
  { code: "PLN", symbol: "zł", name: "Polish złoty" },
  { code: "RUB", symbol: "₽", name: "Russian ruble" },
  { code: "SEK", symbol: "kr", name: "Swedish krona" },
  { code: "TRY", symbol: "₺", name: "Turkish lira" },
  { code: "USD", symbol: "$", name: "US dollar" },
] as const;

export type LoanAprCurrencyCode = (typeof currencyOptions)[number]["code"];

export const currencyFormatLocale: Record<LoanAprCurrencyCode, string> = {
  AUD: "en-AU",
  BRL: "pt-BR",
  CAD: "en-CA",
  CHF: "de-CH",
  CNY: "zh-CN",
  CZK: "cs-CZ",
  DKK: "da-DK",
  EUR: "es-ES",
  GBP: "en-GB",
  IDR: "id-ID",
  INR: "en-IN",
  JPY: "ja-JP",
  KRW: "ko-KR",
  MXN: "es-MX",
  NOK: "nb-NO",
  PLN: "pl-PL",
  RUB: "ru-RU",
  SEK: "sv-SE",
  TRY: "tr-TR",
  USD: "en-US",
};

export const defaultCurrencyByLocale: Record<string, LoanAprCurrencyCode> = {
  de: "EUR",
  en: "USD",
  es: "EUR",
  fr: "EUR",
  id: "IDR",
  it: "EUR",
  ja: "JPY",
  ko: "KRW",
  nl: "EUR",
  pl: "PLN",
  pt: "EUR",
  ru: "RUB",
  sv: "SEK",
  tr: "TRY",
  zh: "CNY",
};

const approximateUsdFactors: Record<LoanAprCurrencyCode, number> = {
  AUD: 1.52,
  BRL: 5.1,
  CAD: 1.38,
  CHF: 0.88,
  CNY: 7.2,
  CZK: 23,
  DKK: 6.85,
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  IDR: 16000,
  INR: 84,
  JPY: 150,
  KRW: 1380,
  MXN: 18,
  NOK: 10.7,
  PLN: 3.95,
  RUB: 90,
  SEK: 10.5,
  TRY: 34,
};

export const isLoanAprCurrencyCode = (
  value: string,
): value is LoanAprCurrencyCode =>
  currencyOptions.some(({ code }) => code === value);

export const convertLoanCurrency = (
  amount: number,
  from: LoanAprCurrencyCode,
  to: LoanAprCurrencyCode,
): number =>
  Number(
    (
      (amount * approximateUsdFactors[to]) /
      approximateUsdFactors[from]
    ).toFixed(2),
  );
