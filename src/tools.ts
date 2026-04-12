import type { ToolDefinition } from './types';
import { COMPOUND_INTEREST_TOOL } from './tool/compoundInterest';
import { MORTGAGE_TOOL } from './tool/mortgage';
import { INFLATION_TOOL } from './tool/inflation';
import { PERCENTAGE_CALCULATOR_TOOL } from './tool/percentageCalculator';
import { LATE_INTEREST_TOOL } from './tool/lateInterest';

export const ALL_TOOLS: ToolDefinition[] = [COMPOUND_INTEREST_TOOL, MORTGAGE_TOOL, INFLATION_TOOL, PERCENTAGE_CALCULATOR_TOOL, LATE_INTEREST_TOOL];

