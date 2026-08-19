import type { PesetaValueInput } from './logic';

const STORAGE_KEY = 'jjlmoya-peseta-value';

export interface SavedPesetaValueState extends PesetaValueInput {
  preset?: number;
}

export function readPesetaValueState(): SavedPesetaValueState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedPesetaValueState;
    if (!Number.isFinite(parsed.pesetas) || !Number.isInteger(parsed.originYear)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writePesetaValueState(state: SavedPesetaValueState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
