import type { RevolvingInputs, RevolvingMarket, AmortizationResult, AmortizationRow, UsuryAnalysis } from './types';

interface MarketDefinition {
  name: string;
  referenceRate: number;
  thresholdRate: number;
  safeSummary: string;
  warningSummary: string;
  usuriousSummary: string;
}

const MARKET_DEFINITIONS: Record<RevolvingMarket, MarketDefinition> = {
  es: {
    name: 'Spain (Banco de España)',
    referenceRate: 18.0,
    thresholdRate: 24.0,
    safeSummary: 'The APR is below the average revolving credit card rate in Spain (~18%).',
    warningSummary: 'The APR exceeds the Spanish average revolving rate (~18%). High risk of debt capitalization.',
    usuriousSummary: 'Potentially null by usury: Spanish Supreme Court (STS 258/2023) rules contracts usurious if APR exceeds the average by more than 6 percentage points (~24%).',
  },
  us: {
    name: 'United States (CFPB)',
    referenceRate: 21.5,
    thresholdRate: 30.0,
    safeSummary: 'The APR is below the US national credit card average (~21.5%).',
    warningSummary: 'The APR is above the US national average (~21.5%). High compounding risk.',
    usuriousSummary: 'APR above 30% is considered predatory by US consumer advocates. Federal law does not cap credit card rates, but state usury laws may apply.',
  },
  uk: {
    name: 'United Kingdom (FCA)',
    referenceRate: 22.0,
    thresholdRate: 35.0,
    safeSummary: 'The APR is below the UK average credit card rate (~22%).',
    warningSummary: 'The APR is above the UK average credit card rate (~22%).',
    usuriousSummary: 'An APR above 35% is extremely high in the UK market. The FCA requires mandatory affordability assessments at these levels.',
  },
  eu: {
    name: 'European Union (ECB reference)',
    referenceRate: 16.5,
    thresholdRate: 24.0,
    safeSummary: 'The APR is within the range typical for EU revolving credit products.',
    warningSummary: 'The APR is above the EU average for revolving cards. Check national usury laws in your country.',
    usuriousSummary: 'APR likely exceeds national usury caps in force across EU member states.',
  },
  jp: {
    name: 'Japan (Financial Services Agency)',
    referenceRate: 14.0,
    thresholdRate: 20.0,
    safeSummary: 'The APR is within the Japanese interest rate cap limit set by the Money Lending Business Act (20%).',
    warningSummary: 'The APR is approaching the Japanese legal cap of 20% (Money Lending Business Act).',
    usuriousSummary: 'APR exceeds 20%: this violates the Japanese Money Lending Business Act (貸金業法). The contract may be illegal and the excess interest recoverable.',
  },
  kr: {
    name: 'South Korea (FSC)',
    referenceRate: 15.0,
    thresholdRate: 20.0,
    safeSummary: 'The APR is below the South Korean average credit card revolving rate.',
    warningSummary: 'The APR is above the South Korean average revolving rate (~15%).',
    usuriousSummary: 'APR exceeds 20%: this may violate the Interest Limitation Act (이자제한법) in South Korea, which caps non-bank consumer loans.',
  },
  cn: {
    name: "China (People's Bank of China)",
    referenceRate: 18.0,
    thresholdRate: 24.0,
    safeSummary: 'The APR is within the range typical for Chinese credit card revolving products.',
    warningSummary: 'The APR is above the typical Chinese credit card revolving rate (~18%).',
    usuriousSummary: "APR above 24%: under China's Supreme People's Court guidelines, the 24% threshold triggers enforceability limits on interest claims.",
  },
  br: {
    name: 'Brazil (Banco Central do Brasil)',
    referenceRate: 120.0,
    thresholdRate: 350.0,
    safeSummary: 'The APR is below the extremely high Brazilian revolving credit average (~120% p.a.).',
    warningSummary: 'The APR is approaching dangerous levels in the Brazilian revolving credit market.',
    usuriousSummary: 'APR at extreme levels. New regulation (Law 14.905/2024) capped revolving rates at ~220%. You may have legal grounds to contest.',
  },
  mx: {
    name: 'Mexico (Banco de México)',
    referenceRate: 40.0,
    thresholdRate: 75.0,
    safeSummary: 'The APR is below the Mexican average revolving credit card rate (~40%).',
    warningSummary: 'The APR is above the Mexican average revolving rate (~40%). High compounding risk.',
    usuriousSummary: 'APR above 75% in Mexico. Banco de México imposes transparency rules, and usury claims may be possible under civil code.',
  },
  pl: {
    name: 'Poland (KNF / Civil Code)',
    referenceRate: 14.0,
    thresholdRate: 22.0,
    safeSummary: 'The APR is below the Polish average revolving credit rate.',
    warningSummary: 'The APR is above the Polish average revolving rate. Review your agreement.',
    usuriousSummary: 'APR may exceed Polish Civil Code usury limits. The non-interest costs cap and the maximum interest rate are strictly regulated.',
  },
  id: {
    name: 'Indonesia (OJK)',
    referenceRate: 24.0,
    thresholdRate: 36.0,
    safeSummary: 'The APR is within the range allowed by OJK (Otoritas Jasa Keuangan) for credit cards.',
    warningSummary: 'The APR is above the Indonesian average credit card rate (~24%).',
    usuriousSummary: 'APR above OJK recommended limits. Excessive rates may be contested under Indonesian consumer protection law.',
  },
  tr: {
    name: 'Turkey (BRSA / BDDK)',
    referenceRate: 40.0,
    thresholdRate: 60.0,
    safeSummary: 'The APR is within the BRSA-set credit card rate range for Turkey.',
    warningSummary: 'The APR is above the Turkish average credit card rate. Turkey has mandatory BRSA rate ceilings.',
    usuriousSummary: 'APR above BRSA limits. Turkish banking law sets maximum credit card interest rates; excess interest is not legally collectible.',
  },
  ru: {
    name: 'Russia (Bank of Russia)',
    referenceRate: 25.0,
    thresholdRate: 35.0,
    safeSummary: 'The APR is within the Russian average credit card revolving rate.',
    warningSummary: 'The APR is above the Russian average revolving rate (~25%). Compounding risk is high.',
    usuriousSummary: 'APR above 35% in Russia. Federal law No. 353-FZ on consumer credit establishes maximum rate limits as published quarterly by the Bank of Russia.',
  },
  se: {
    name: 'Sweden (Finansinspektionen)',
    referenceRate: 19.0,
    thresholdRate: 30.0,
    safeSummary: 'The APR is below the Swedish average revolving credit rate.',
    warningSummary: 'The APR is above the Swedish average revolving rate (~19%).',
    usuriousSummary: 'APR above 30% in Sweden. The Consumer Credit Act and Finansinspektionen rules restrict excessive rates. Legal challenge may be possible.',
  },
  au: {
    name: 'Australia (ASIC / NCCP)',
    referenceRate: 20.0,
    thresholdRate: 30.0,
    safeSummary: 'The APR is below the Australian average credit card revolving rate.',
    warningSummary: 'The APR is above the Australian average (~20%). ASIC requires responsible lending obligations.',
    usuriousSummary: 'APR above 30% in Australia. The National Consumer Credit Protection Act (NCCP) may apply.',
  },
  ca: {
    name: 'Canada (FCAC)',
    referenceRate: 20.0,
    thresholdRate: 26.0,
    safeSummary: 'The APR is below the typical Canadian credit card revolving rate.',
    warningSummary: 'The APR is above the Canadian average (~20%). The FCAC mandates full disclosure of costs.',
    usuriousSummary: 'APR above 26% in Canada. The Criminal Code of Canada sets a 60% annual effective rate ceiling.',
  },
  custom: {
    name: 'Custom Threshold',
    referenceRate: 15.0,
    thresholdRate: 25.0,
    safeSummary: 'The APR is below your custom reference rate.',
    warningSummary: 'The APR is above your custom reference rate.',
    usuriousSummary: 'The APR exceeds your custom usury threshold.',
  },
};

function computePayment(inputs: RevolvingInputs, initialBalance: number): number {
  let payment = inputs.paymentType === 'fixed'
    ? inputs.paymentValue
    : initialBalance * (inputs.paymentValue / 100);

  if (payment < inputs.minPaymentValue) {
    payment = inputs.minPaymentValue;
  }
  return payment;
}

function buildRow(month: number, initialBalance: number, payment: number, interestPaid: number): AmortizationRow {
  const principalPaid = payment - interestPaid;
  const finalBalance = Math.max(0, initialBalance - principalPaid);
  return { month, initialBalance, interestPaid, principalPaid, payment, finalBalance };
}

function runAmortizationLoop(inputs: RevolvingInputs): { schedule: AmortizationRow[]; totalInterest: number; totalPaid: number; isInfinite: boolean } {
  const schedule: AmortizationRow[] = [];
  let balance = inputs.balance;
  const monthlyRate = (inputs.apr / 100) / 12;
  let totalInterest = 0;
  let totalPaid = 0;
  let month = 0;
  const maxMonths = 1200;

  while (balance > 0.01 && month < maxMonths) {
    month++;
    const interestPaid = balance * monthlyRate;
    let payment = computePayment(inputs, balance);

    if (payment > balance + interestPaid) {
      payment = balance + interestPaid;
    }

    if (payment <= interestPaid + 0.01) {
      return { schedule, totalInterest, totalPaid, isInfinite: true };
    }

    const row = buildRow(month, balance, payment, interestPaid);
    balance = row.finalBalance;
    totalInterest += interestPaid;
    totalPaid += payment;
    schedule.push(row);
  }

  const isInfinite = month >= maxMonths && balance > 0.01;
  return { schedule, totalInterest, totalPaid, isInfinite };
}

export function calculateAmortization(inputs: RevolvingInputs): AmortizationResult {
  const { schedule, totalInterest, totalPaid, isInfinite } = runAmortizationLoop(inputs);
  return {
    schedule,
    totalInterest,
    totalPaid,
    monthsToPay: schedule.length,
    isInfinite,
  };
}

function resolveUsuryStatus(apr: number, referenceRate: number, thresholdRate: number): 'safe' | 'warning' | 'usurious' {
  if (apr >= thresholdRate) return 'usurious';
  if (apr >= referenceRate) return 'warning';
  return 'safe';
}

export function analyzeUsury(apr: number, market: RevolvingMarket, customThreshold?: number): UsuryAnalysis {
  const def = MARKET_DEFINITIONS[market];
  const thresholdRate = market === 'custom' ? (customThreshold ?? 25.0) : def.thresholdRate;
  const referenceRate = def.referenceRate;
  const status = resolveUsuryStatus(apr, referenceRate, thresholdRate);

  const detailsMap: Record<typeof status, string> = {
    safe: def.safeSummary,
    warning: def.warningSummary,
    usurious: def.usuriousSummary,
  };

  return {
    status,
    marketName: def.name,
    referenceRate,
    thresholdRate,
    details: detailsMap[status],
  };
}
