import { content as contentES } from './i18n/es';
import { content as contentEN } from './i18n/en';
import { content as contentFR } from './i18n/fr';
import DebtSnowballComponent from './component.astro';
import { DebtSnowballLogic, type Debt, type SimulationResult, type ProjectionMonth } from './logic';

export type { Debt, SimulationResult, ProjectionMonth };

export const DEBT_SNOWBALL_TOOL = {
  id: 'debtSnowball',
  entry: {
    id: 'debtSnowball',
    component: DebtSnowballComponent,
    i18n: {
      es: () => Promise.resolve(contentES),
      en: () => Promise.resolve(contentEN),
      fr: () => Promise.resolve(contentFR),
    },
  },
  logic: DebtSnowballLogic,
};

export const debtSnowball = {
  id: 'debtSnowball',
  entry: {
    id: 'debtSnowball',
    component: DebtSnowballComponent,
    i18n: {
      es: () => Promise.resolve(contentES),
      en: () => Promise.resolve(contentEN),
      fr: () => Promise.resolve(contentFR),
    },
  },
};
