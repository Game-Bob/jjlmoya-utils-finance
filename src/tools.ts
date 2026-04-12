import type { ToolDefinition } from './types';
import { COMPOUND_INTEREST_TOOL } from './tool/compoundInterest';
import { MORTGAGE_TOOL } from './tool/mortgage';
import { INFLATION_TOOL } from './tool/inflation';
import { PERCENTAGE_CALCULATOR_TOOL } from './tool/percentageCalculator';
import { LATE_INTEREST_TOOL } from './tool/lateInterest';
import { IBAN_BIC_SWIFT_TOOL } from './tool/ibanBicSwiftConverter';
import { RENT_INCREASE_TOOL } from './tool/rentIncreaseCalculator';
import { LOTTERY_OPTIMIZER_TOOL } from './tool/lotteryOptimizer';
import { COURT_FEE_CALCULATOR_TOOL } from './tool/courtFeeCalculator';
import { LEGAL_INTEREST_RATE_TOOL } from './tool/legalInterestRate';
import { FIRE_CALCULATOR_TOOL } from './tool/fireCalculator';
import { DEBT_SNOWBALL_TOOL } from './tool/debtSnowball';

export const ALL_TOOLS: ToolDefinition[] = [COMPOUND_INTEREST_TOOL, MORTGAGE_TOOL, INFLATION_TOOL, PERCENTAGE_CALCULATOR_TOOL, LATE_INTEREST_TOOL, IBAN_BIC_SWIFT_TOOL, RENT_INCREASE_TOOL, LOTTERY_OPTIMIZER_TOOL, COURT_FEE_CALCULATOR_TOOL, LEGAL_INTEREST_RATE_TOOL, FIRE_CALCULATOR_TOOL, DEBT_SNOWBALL_TOOL];

