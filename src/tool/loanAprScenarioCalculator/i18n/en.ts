import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Offer A",
  labelScenarioB: "Offer B",
  labelScenarioName: "Offer name",
  labelCurrency: "Currency",
  labelApproximateRates:
    "Uses approximate planning factors, not live exchange rates.",
  labelPrincipal: "Amount borrowed",
  labelTerm: "Repayment term",
  labelMonths: "months",
  labelInputBasis: "What do you know?",
  labelAnnualRate: "Nominal annual rate",
  labelMonthlyPayment: "Known monthly payment",
  labelUpfrontFees: "Upfront fees",
  labelMonthlyFees: "Monthly fees",
  labelFinalFees: "Final fee",
  labelOfferNameA: "Offer A",
  labelOfferNameB: "Offer B",
  labelRateMode: "I know the rate",
  labelPaymentMode: "I know the payment",
  labelPreset: "Start with a comparison",
  labelPresetBalanced: "Balanced offers",
  labelPresetLowFee: "Low rate with fees",
  labelPresetLongTerm: "Longer term",
  labelReset: "Reset values",
  labelCopy: "Copy comparison",
  labelCopied: "Comparison copied",
  labelEffectiveApr: "Effective annual cost",
  labelNominalRate: "Nominal rate",
  labelMonthlyPaymentResult: "Monthly payment",
  labelTotalPaid: "Total paid",
  labelTotalFees: "Fees in the scenario",
  labelFinanceCost: "Cost above principal",
  labelNetCashReceived: "Cash received after upfront fees",
  labelWinner: "Which offer costs less?",
  labelLowerCost: "Lower effective cost",
  labelHigherCost: "Higher effective cost",
  labelTie: "Nearly tied",
  labelNeedValidInputs: "Needs valid inputs",
  labelInvalidPrincipal:
    "The amount borrowed must be greater than the upfront fees and above zero.",
  labelInvalidTerm: "Use a whole repayment term from 1 to 600 months.",
  labelInvalidFees: "Fees cannot be negative.",
  labelInvalidPayment:
    "Enter a positive monthly payment that can repay the net cash received.",
  labelInvalidRate: "Use a nominal annual rate from 0% to 100%.",
  labelNoComparison: "Complete both offers to compare them.",
  labelTimeline: "Payment timeline",
  labelStart: "Start",
  labelMonthly: "Each month",
  labelEnd: "Final month",
  labelFormula: "How the comparison works",
  labelFormulaText:
    "The effective annual cost is the annualised monthly rate that makes the cash received equal to the discounted payments and fees.",
  labelApproximation:
    "Estimate assumes equal monthly payments, no grace period and only the fees you enter. It does not replace the APR or TAE in a lender disclosure.",
  labelScenarioSummary: "Scenario summary",
  currencyCode: "USD",
  currencyLocale: "en-US",
};

const faq = [
  {
    question:
      "What is the difference between the interest rate and the effective annual cost?",
    answer:
      "The nominal interest rate describes the interest charged on the balance. The effective annual cost in this calculator also reflects the timing and amount of the upfront, monthly and final fees you enter.",
  },
  {
    question: "Can I enter a monthly payment instead of an interest rate?",
    answer:
      "Yes. Choose the known monthly payment option for that offer. The calculator infers the monthly rate that matches the amount received, the payment stream and the fees in the scenario.",
  },
  {
    question: "Which offer is cheaper?",
    answer:
      "Compare the effective annual cost first, then review total paid and cash received. A lower percentage can still have a higher total cost when the term or amount differs, so the decision should use all three signals.",
  },
  {
    question: "Is this the official APR or TAE from a lender?",
    answer:
      "No. It is a transparent scenario estimate based on your inputs. Lenders and jurisdictions may include or exclude costs differently and may use different payment dates, taxes, insurance or variable-rate assumptions.",
  },
];

const howTo = [
  {
    name: "Enter the amount and term",
    text: "Add the amount you would receive and the number of monthly repayments for each offer.",
  },
  {
    name: "Choose the known offer detail",
    text: "Enter either the nominal annual rate or the monthly payment, depending on what the offer gives you.",
  },
  {
    name: "Add every relevant fee",
    text: "Enter fees paid at the start, each month or at the end so the comparison reflects the cash flow you want to test.",
  },
  {
    name: "Read the cost scanner",
    text: "Use effective annual cost to compare pricing, then check total paid and net cash received before deciding which offer fits your question.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Loan APR scenario calculator",
    description:
      "Compare two loan scenarios with rates, payments and fees using a transparent effective annual cost estimate.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Compare two loan offers with rates and fees",
    description:
      "Use the calculator to model two loan cash flows and compare their effective annual cost.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "loan-apr-scenario-calculator",
  title: "Loan APR scenario calculator",
  description:
    "Compare two loan offers with their interest, payment schedule and fees to estimate the effective annual cost before you decide.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Compare loan offers by effective annual cost",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>A low advertised interest rate can hide an arrangement fee, a monthly service charge or a final cost. This loan APR scenario calculator turns the details you have into two comparable cash flow scenarios, so you can see the cost of the money you actually receive.</p>",
    },
    { type: "title", text: "What the estimate includes", level: 3 },
    {
      type: "paragraph",
      html: "<p>For each offer, enter the amount borrowed, the repayment term, either the nominal annual rate or the known monthly payment, and the fees charged at different points in the loan. The calculator finds the monthly rate that balances the net cash received against the discounted payments and fees, then annualises it.</p>",
    },
    {
      type: "paragraph",
      html: "<p>This mirrors the useful comparison principle behind APR and TAE: the price of credit is broader than the interest rate alone. The result is deliberately labelled an estimate because official disclosures may follow jurisdiction-specific rules and include assumptions that are not present in your scenario.</p>",
    },
    { type: "title", text: "How to read the result", level: 3 },
    {
      type: "list",
      items: [
        "Compare effective annual cost when the amount and term are alike.",
        "Check total paid to understand the absolute cash impact.",
        "Check cash received after upfront fees so a fee is not mistaken for borrowed money.",
        "Use the timeline to see when each cost enters the scenario.",
      ],
    },
    {
      type: "tip",
      title: "Use the lender disclosure as the final reference",
      html: "<p>If you are comparing a real contract, match the lender's APR or TAE against the same assumptions. Ask about insurance, taxes, variable rates, early repayment charges and any fee that is not represented by your inputs.</p>",
    },
    { type: "title", text: "Limits of a scenario estimate", level: 3 },
    {
      type: "paragraph",
      html: "<p>This tool assumes equal monthly payments, no grace period and fees that you can place at the start, during the term or in the final month. It does not certify affordability, approval, legality or the official APR of a product. Use it to make a better comparison from the information you have, then verify the offer documents.</p>",
    },
  ],
};
