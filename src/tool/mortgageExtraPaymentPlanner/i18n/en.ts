import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageExtraPaymentPlannerUI } from '../ui';

const slug = 'mortgage-amortization-extra-payment-planner';
const title = 'Mortgage Amortization Planner with Extra Payments';
const description = 'Plan a fixed rate mortgage with recurring or one off extra payments, compare interest saved and view every amount in one chosen currency.';

const ui: MortgageExtraPaymentPlannerUI = {
  currencyLabel: 'Currency',
  currencyHelp: 'Choose once. Every amount in the plan uses this currency.',
  principalLabel: 'Starting principal',
  principalHelp: 'The amount still owed at the start of this plan',
  annualRateLabel: 'Annual interest rate',
  annualRateHelp: 'Nominal fixed rate used for each payment period',
  termLabel: 'Remaining term in years',
  termHelp: 'The planned duration before extra payments',
  frequencyLabel: 'Payment frequency',
  recurringExtraLabel: 'Recurring extra payment',
  recurringExtraHelp: 'Additional principal paid every period',
  oneOffExtraLabel: 'One off extra payment',
  oneOffExtraHelp: 'A single principal payment in the period below',
  oneOffPeriodLabel: 'One off payment period',
  oneOffPeriodHelp: '1 means the first payment period',
  startDateLabel: 'First payment date',
  startDateHelp: 'Used to estimate the payoff date',
  extraSectionTitle: 'Extra payment plan',
  outputTitle: 'Balance path',
  regularPaymentLabel: 'Regular payment before extras',
  interestSavedLabel: 'Interest saved',
  periodsSavedLabel: 'periods saved',
  payoffDateLabel: 'Estimated payoff',
  totalInterestLabel: 'Interest paid with this plan',
  totalExtraLabel: 'Extra principal paid',
  baselineLabel: 'Original schedule',
  planLabel: 'With your extra payments',
  balanceSceneLabel: 'Original mortgage balance compared with the balance after extra payments',
  balanceSceneHelp: 'The dashed line is the original schedule. The copper line is your plan. Green marks show periods with extra principal.',
  annualScheduleTitle: 'Annual payment schedule',
  yearLabel: 'Year',
  paymentLabel: 'Total paid',
  interestLabel: 'Interest',
  principalPaidLabel: 'Scheduled principal',
  extraPaidLabel: 'Extra principal',
  endingBalanceLabel: 'Ending balance',
  formulaTitle: 'Model and limits',
  formulaText: 'The planner uses a fixed rate amortization model. Each period calculates interest on the opening balance, applies the regular payment to interest and principal, then applies recurring and one off extra principal. Interest is annual rate divided by the number of periods per year. The final payment is reduced when the remaining balance is smaller than the planned payment. Changing the currency converts the monetary inputs with an internal planning ratio before calculating the same scenario again.',
  riskNote: 'This is an estimate, not a lender statement. The currency selector uses internal planning ratios, not live market rates. The model does not include variable rates, fees, insurance, taxes, payment holidays, daily interest, penalties or the contract rules that determine how your lender applies an overpayment.',
  emptyMessage: 'Enter a valid principal, rate, term and date to see the plan.',
  invalidInputMessage: 'Check the inputs to see the plan',
  currencyOptions: {
    AUD: 'A$ AUD · Australian dollar',
    BRL: 'R$ BRL · Brazilian real',
    CAD: 'C$ CAD · Canadian dollar',
    CHF: 'CHF · Swiss franc',
    CNY: '¥ CNY · Chinese yuan',
    CZK: 'Kč CZK · Czech koruna',
    DKK: 'kr DKK · Danish krone',
    EUR: '€ EUR · Euro',
    GBP: '£ GBP · Pound sterling',
    IDR: 'Rp IDR · Indonesian rupiah',
    INR: '₹ INR · Indian rupee',
    JPY: '¥ JPY · Japanese yen',
    KRW: '₩ KRW · South Korean won',
    MXN: 'MX$ MXN · Mexican peso',
    NOK: 'kr NOK · Norwegian krone',
    PLN: 'zł PLN · Polish zloty',
    RUB: '₽ RUB · Russian ruble',
    SEK: 'kr SEK · Swedish krona',
    TRY: '₺ TRY · Turkish lira',
    USD: '$ USD · US dollar',
  },
  currencySymbols: {
    AUD: 'A$',
    BRL: 'R$',
    CAD: 'C$',
    CHF: 'CHF',
    CNY: '¥',
    CZK: 'Kč',
    DKK: 'kr',
    EUR: '€',
    GBP: '£',
    IDR: 'Rp',
    INR: '₹',
    JPY: '¥',
    KRW: '₩',
    MXN: 'MX$',
    NOK: 'kr',
    PLN: 'zł',
    RUB: '₽',
    SEK: 'kr',
    TRY: '₺',
    USD: '$',
  },
  frequencyOptions: {
    monthly: 'Monthly',
    biweekly: 'Every two weeks',
    weekly: 'Weekly',
  },
};

const faq = [
  {
    question: 'How do extra mortgage payments change the schedule?',
    answer: 'This planner keeps the regular payment unchanged and applies your extra principal after each scheduled payment. The balance can therefore reach zero earlier and the interest total can fall. Your lender may apply an overpayment differently, so compare the result with your contract.',
  },
  {
    question: 'What happens when I change the currency?',
    answer: 'The planner converts the monetary inputs to the new currency with an internal planning ratio, then recalculates the same scenario. The ratio is not a live market quote, so use the result for planning rather than as a current exchange-rate statement.',
  },
  {
    question: 'Why is there only one currency selector?',
    answer: 'The selected currency applies to the principal, extra payments, regular payments, interest, balances and annual schedule. One shared unit keeps the form readable and prevents accidentally mixing currencies inside one calculation.',
  },
  {
    question: 'Does the planner calculate my real lender payment?',
    answer: 'It estimates a fixed rate amortization schedule. It does not know your lender contract, day count convention, fees, insurance, taxes, rate revisions, penalties or the exact treatment of an early repayment. Use your statement and contract for the contractual figure.',
  },
];

const howTo = [
  { name: 'Set the currency', text: 'Choose the single currency you want to use. The planner applies it to every monetary input and result.' },
  { name: 'Describe the loan', text: 'Enter the principal, nominal annual rate, remaining term, first payment date and payment frequency.' },
  { name: 'Add extra payments', text: 'Enter an extra amount paid every period, then add one optional lump sum and the period when it happens.' },
  { name: 'Read the comparison', text: 'Compare the dashed original balance with your plan, then review interest saved, periods saved, payoff date and the annual schedule.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<MortgageExtraPaymentPlannerUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Plan what extra mortgage payments can change', level: 2 },
    { type: 'paragraph', html: '<p>An amortization schedule separates each payment into interest and principal. When you pay extra principal and the lender keeps the regular payment unchanged, the balance can reach zero sooner. This planner makes that tradeoff visible by comparing the original balance path with the path created by your recurring and one off extra payments.</p>' },
    { type: 'paragraph', html: '<p>The result is a planning estimate for a fixed rate loan. It uses the principal, nominal annual rate, number of payment periods, and an opening balance that changes after each payment. It does not promise the exact amount your lender will charge because contracts can use different day counts, fees, rounding rules, or overpayment instructions.</p>' },
    { type: 'title', text: 'How the amortization calculation works', level: 3 },
    { type: 'paragraph', html: '<p>For each period, the model calculates interest from the opening balance. The periodic rate is the annual rate divided by the number of periods per year. The regular payment is then found with the fixed payment formula. After the scheduled principal, the recurring extra and the selected one off payment reduce the balance further.</p>' },
    { type: 'table', headers: ['Figure', 'Calculation', 'Interpretation'], rows: [['Periodic rate', 'Annual rate / periods per year', 'The rate applied in each payment period'], ['Regular payment', 'Principal x rate x (1 + rate)^n / ((1 + rate)^n - 1)', 'The fixed payment before extra principal'], ['Interest in a period', 'Opening balance x periodic rate', 'The interest implied by the model for that period'], ['Balance after payment', 'Opening balance - scheduled principal - extra principal', 'The amount still owed in the plan']] },
    { type: 'title', text: 'What extra payments actually change', level: 3 },
    { type: 'paragraph', html: '<p>An extra payment is applied to principal in this model, so future interest is calculated on a smaller balance. The useful comparison is not only the amount of extra cash paid. Look at both interest saved and periods saved: one shows the financing cost avoided, while the other shows how much earlier the model reaches zero.</p>' },
    { type: 'paragraph', html: '<p>The lender may instead reduce the regular payment, keep the term, or require a formal request before changing the schedule. Some contracts also impose limits or compensation for early repayment. Use this output to prepare a question for the lender, not to replace the lender statement.</p>' },
    { type: 'title', text: 'Use currencies without mixing the math', level: 3 },
    { type: 'paragraph', html: '<p>Choose one currency before entering the loan amounts. The selector applies to the principal, recurring extra, lump sum, payments, interest and balances, so the form never asks you to reconcile two currency columns. Switching currency converts the monetary inputs internally and keeps the scenario structure intact.</p>' },
    { type: 'list', items: ['Choose the currency you use for the household budget or lender statement.', 'Keep the principal and every extra payment in the selected currency.', 'Treat a currency switch as a planning-unit change, not as a change to the lender contract.', 'Check whether your lender permits the selected frequency and how it applies early principal.', 'Review the annual table to find the years in which the lump sum makes the largest difference.'] },
    { type: 'title', text: 'A simple example to interpret the output', level: 3 },
    { type: 'paragraph', html: '<p>Suppose the starting principal is 250,000 EUR at a fixed nominal rate of 3.5% over 25 years. A recurring extra of 150 EUR and a 5,000 EUR lump sum in period 12 do not change the original regular payment in this model. They do lower the balance after the relevant periods, which reduces later interest and moves the estimated payoff date earlier.</p>' },
    { type: 'paragraph', html: '<p>If you switch the currency to USD, the tool converts the monetary inputs with its internal planning ratio and recalculates the same loan scenario in dollars. That keeps the interface simple, but the result is not a live market valuation and should not replace a lender statement or current FX quote.</p>' },
    { type: 'title', text: 'What to check before acting', level: 3 },
    { type: 'list', items: ['Ask the lender whether an overpayment reduces the term or the regular payment.', 'Check any early repayment compensation, annual limits and minimum lump sum.', 'Confirm whether the stated rate is nominal, effective, fixed, variable or subject to a review.', 'Compare the calculated balance with a recent lender statement before making a payment.', 'Save the exchange rate and date if the result is part of an international household budget.'] },
    { type: 'tip', title: 'The chart is a comparison, not a promise', html: '<p>The dashed line assumes the original fixed schedule without extra payments. The copper line follows the inputs you entered. Neither line includes contract specific fees, insurance, taxes, variable rate changes, daily interest, currency market movements or a guarantee that the lender will apply an overpayment in the same way.</p>' },
    { type: 'title', text: 'Limits of this mortgage planner', level: 3 },
    { type: 'paragraph', html: '<p>This tool models a fully amortizing fixed rate loan with regular payments and optional extra principal. It is useful for exploring scenarios and preparing questions. It cannot determine affordability, approve a loan, provide tax or legal advice, forecast exchange rates, reproduce a lender statement, or establish which early repayment rules apply in your country.</p>' },
  ],
};
