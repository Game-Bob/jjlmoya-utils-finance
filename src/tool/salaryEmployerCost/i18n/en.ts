import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = 'spain-gross-net-salary-employer-cost-calculator';
const title = 'Spain Gross Net Salary and Employer Cost Calculator for 2026';
const description = 'Estimate take home pay, personal income tax withholding, employee contributions and the full employer cost of a salary in Spain under 2026 rules.';

const faq = [
  {
    question: 'How much does an employee cost a company in Spain?',
    answer: 'The company pays the gross salary plus its Social Security contributions. For a permanent office role with a €30,000 annual gross salary, a 1.50% occupational premium and the 2026 rates used here, the estimated annual employer cost is €39,645 before bonuses, benefits, severance provisions or other company expenses.',
  },
  {
    question: 'How do I calculate gross salary to net salary in Spain?',
    answer: 'Start with annual gross salary, subtract employee Social Security contributions and subtract IRPF withholding. Enter the IRPF percentage from the Tax Agency calculator, an offer estimate or a recent payslip because personal and family circumstances can change that rate.',
  },
  {
    question: 'Does choosing 12 or 14 payments change the annual salary?',
    answer: 'No. The calculator preserves the same annual gross amount and divides the annual estimates by 12 or 14. The per payment figure is an average, so an actual 14 payment payroll can distribute deductions differently between ordinary and extra payments.',
  },
  {
    question: 'Which Social Security rates are included for 2026?',
    answer: 'The estimate includes common contingencies, unemployment, training, the Intergenerational Equity Mechanism and FOGASA where applicable. It also includes the employer occupational accident and disease premium selected in the control.',
  },
  {
    question: 'What happens when salary exceeds the maximum contribution base?',
    answer: 'Standard contributions are capped at the 2026 maximum monthly base of €5,101.20. The calculator then applies the 2026 progressive solidarity contribution to monthly remuneration above that amount.',
  },
  {
    question: 'Is this calculator valid outside Spain?',
    answer: 'No. It is deliberately limited to Spain and the 2026 General Social Security Scheme for a full time employee receiving ordinary cash salary. It does not mix rates or tax systems from other countries.',
  },
  {
    question: 'Is salary information sent to a server?',
    answer: 'No. Calculations run in your browser. Your most recent inputs can be stored locally on the same device so that you can continue the comparison later.',
  },
];

const howTo = [
  { name: 'Enter the gross salary', text: 'Choose annual or monthly input, then enter the gross salary offered or budgeted.' },
  { name: 'Set the Spanish payroll assumptions', text: 'Choose 12 or 14 payments, permanent or temporary contract, your IRPF withholding rate and the applicable occupational premium.' },
  { name: 'Read the salary orbit', text: 'Compare the net core, employee deductions and the outer employer contribution halo.' },
  { name: 'Switch the result period', text: 'View annual totals or average amounts per payment without changing the annual salary.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    labelGrossSalary: 'Gross salary signal',
    labelGrossSalaryHint: 'Salary amount',
    labelAnnual: 'Annual',
    labelMonthly: 'Monthly',
    labelPaySchedule: 'Payment schedule',
    labelTwelvePayments: '12 payments',
    labelFourteenPayments: '14 payments',
    labelContract: 'Contract type',
    labelPermanent: 'Permanent',
    labelTemporary: 'Temporary',
    labelIrpfRate: 'IRPF withholding',
    labelIrpfHint: 'Use your Tax Agency, offer or payslip rate',
    labelRiskRate: 'Occupational premium',
    labelRiskHint: 'Employer AT and EP rate for the role',
    labelOfficePreset: 'Office 1.50%',
    labelTradePreset: 'Sales representative 2.00%',
    labelConstructionPreset: 'Construction 6.70%',
    labelNetCore: 'Net salary core',
    labelEmployeeDeductions: 'Worker deductions',
    labelDeductionsFormula: 'IRPF plus employee Social Security',
    labelEmployerHalo: 'Employer contribution halo',
    labelEmployerCost: 'Total employer cost',
    labelAnnualView: 'Annual view',
    labelPerPaymentView: 'Average per payment',
    labelGross: 'Gross salary',
    labelIrpf: 'IRPF withholding',
    labelEmployeeSocialSecurity: 'Employee Social Security',
    labelContributionBase: 'Monthly contribution base',
    labelCostMultiplier: 'Cost versus gross',
    labelWorkerKeeps: 'Net share of total cost',
    labelLeanGap: 'Compact cost halo',
    labelTypicalGap: 'Typical cost halo',
    labelWideGap: 'Expanded cost halo',
    labelModelScope: 'Spain only. 2026 General Scheme, full time employment and ordinary cash salary. Results are estimates, not payroll or tax advice.',
    labelReset: 'Reset example',
    labelInvalid: 'Enter a supported full time annual salary and keep IRPF and occupational rates within the available ranges.',
    labelMinimumSalary: 'The model starts at the 2026 full time minimum of €17,094 per year.',
    labelPrivacy: 'Calculated locally in your browser',
    currencyLocale: 'en-IE',
  },
  seo: [
    { type: 'title', text: 'From gross salary to the real company cost in Spain', level: 2 },
    { type: 'paragraph', html: 'A salary offer has three different values: the gross amount in the contract, the net amount that reaches the employee and the total cost paid by the company. This Spain salary calculator keeps those layers together. Enter one gross figure and it estimates IRPF withholding, employee Social Security, employer contributions and the complete employment cost under the 2026 General Scheme.' },
    { type: 'title', text: 'The employer cost formula', level: 2 },
    { type: 'paragraph', html: 'Total employer cost equals annual gross salary plus employer Social Security contributions. Estimated net salary equals gross salary minus employee Social Security and the IRPF percentage entered by the user. The IRPF control is intentionally visible because withholding depends on personal circumstances and should come from the Spanish Tax Agency calculator, an employer estimate or a current payslip.' },
    { type: 'table', headers: ['Layer', 'Calculation'], rows: [['Net salary', 'Gross salary minus employee Social Security minus IRPF withholding'], ['Worker deductions', 'Employee Social Security plus IRPF withholding'], ['Employer contributions', 'Company Social Security rates plus the selected occupational premium'], ['Total employer cost', 'Gross salary plus employer contributions']] },
    { type: 'title', text: 'Spanish Social Security rates included for 2026', level: 2 },
    { type: 'paragraph', html: 'For a permanent contract, the model applies 4.70% employee and 23.60% employer common contingencies, 1.55% employee and 5.50% employer unemployment, 0.10% employee and 0.60% employer training, 0.15% employee and 0.75% employer MEI, and 0.20% employer FOGASA. Temporary contracts use 1.60% employee and 6.70% employer unemployment. The separate occupational premium changes with the role or company activity.' },
    { type: 'table', headers: ['Occupational preset', 'Employer rate'], rows: [['Exclusive office work', '1.50%'], ['Sales representative', '2.00%'], ['Construction work', '6.70%']] },
    { type: 'title', text: 'Contribution caps and high salaries', level: 2 },
    { type: 'paragraph', html: 'The standard contribution base is limited to €5,101.20 per month in 2026. Above that threshold, the calculator adds the progressive solidarity contribution across its three monthly remuneration bands. This prevents a high salary estimate from simply applying the ordinary percentage to the entire gross amount.' },
    { type: 'title', text: 'Twelve payments and fourteen payments', level: 2 },
    { type: 'paragraph', html: 'Changing the payment schedule does not change annual gross salary or annual company cost. It changes the displayed average per payment. A real fourteen payment payroll can collect Social Security mainly through ordinary monthly payslips, so the average shown here is best for comparing offers and budgets rather than reproducing every line of a payslip.' },
    { type: 'tip', title: 'Use the same assumptions when comparing offers', html: 'Keep the IRPF rate, contract type, payment schedule and occupational premium consistent. That isolates the effect of gross salary and makes two job offers or hiring budgets genuinely comparable.' },
    { type: 'title', text: 'Limits of this Spain salary estimate', level: 2 },
    { type: 'paragraph', html: 'The calculator is limited to full time employment in Spain under the 2026 General Scheme. It does not cover part time minimum bases, regional tax settlements, benefits in kind, bonuses with special treatment, reductions, bonuses in company contributions, special employment relationships, self employment or payroll regularisation. Use payroll software or professional advice when those details matter.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
