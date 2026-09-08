import type { RenterInsuranceInput } from './logic';

const STORAGE_KEY = 'jjlmoya:renter-insurance-coverage-gap:v1';

const isRecord = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === 'object';

export function readSavedRenterInsuranceInput(fallback: RenterInsuranceInput): RenterInsuranceInput {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed) || !isRecord(parsed.input)) return fallback;
    return parsed.input as unknown as RenterInsuranceInput;
  } catch {
    return fallback;
  }
}

export function saveRenterInsuranceInput(input: RenterInsuranceInput): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ input }));
  } catch {}
}
