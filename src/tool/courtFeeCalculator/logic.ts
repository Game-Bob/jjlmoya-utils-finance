export type JurisdictionType = 'civil' | 'contencioso' | 'social';
export type ProcedureType = 'ordinario' | 'monitorio' | 'ejecutivo' | 'apelacion' | 'casacion' | 'abreviado' | 'cont-ordinario' | 'cont-apelacion' | 'cont-casacion' | 'suplicacion' | 'soc-casacion';
export type EntityType = 'juridica' | 'fisica';

export interface CourtFeeResult {
  isExempt: boolean;
  fixedFee: number;
  variableFee: number;
  totalFee: number;
  taxableBase: number;
  procedureName: string;
}

const FIXED_FEES: Record<JurisdictionType, Record<ProcedureType, number>> = {
  civil: {
    ordinario: 300,
    monitorio: 100,
    ejecutivo: 200,
    apelacion: 800,
    casacion: 1200,
    abreviado: 0,
    'cont-ordinario': 0,
    'cont-apelacion': 0,
    'cont-casacion': 0,
    suplicacion: 0,
    'soc-casacion': 0,
  },
  contencioso: {
    ordinario: 0,
    monitorio: 0,
    ejecutivo: 0,
    apelacion: 0,
    casacion: 0,
    abreviado: 200,
    'cont-ordinario': 350,
    'cont-apelacion': 800,
    'cont-casacion': 1200,
    suplicacion: 0,
    'soc-casacion': 0,
  },
  social: {
    ordinario: 0,
    monitorio: 0,
    ejecutivo: 0,
    apelacion: 0,
    casacion: 0,
    abreviado: 0,
    'cont-ordinario': 0,
    'cont-apelacion': 0,
    'cont-casacion': 0,
    suplicacion: 500,
    'soc-casacion': 600,
  },
};

const PROCEDURE_LABELS: Record<JurisdictionType, Record<ProcedureType, string>> = {
  civil: { ordinario: 'Juicio Ordinario', monitorio: 'Juicio Verbal / Monitorio', ejecutivo: 'Ejecutivo', apelacion: 'Apelación', casacion: 'Casación', abreviado: '', 'cont-ordinario': '', 'cont-apelacion': '', 'cont-casacion': '', suplicacion: '', 'soc-casacion': '' },
  contencioso: { ordinario: '', monitorio: '', ejecutivo: '', apelacion: '', casacion: '', abreviado: 'Abreviado', 'cont-ordinario': 'Ordinario', 'cont-apelacion': 'Apelación', 'cont-casacion': 'Casación', suplicacion: '', 'soc-casacion': '' },
  social: { ordinario: '', monitorio: '', ejecutivo: '', apelacion: '', casacion: '', abreviado: '', 'cont-ordinario': '', 'cont-apelacion': '', 'cont-casacion': '', suplicacion: 'Suplicación', 'soc-casacion': 'Casación' },
};

export class CourtFeeLogic {
  private static getVariableFee(jurisdiction: JurisdictionType, amount: number): number {
    if (jurisdiction === 'social') return 0;
    const variable = amount <= 1000000 ? amount * 0.005 : 5000 + (amount - 1000000) * 0.0025;
    return Math.min(variable, 10000);
  }

  static calculateFee(
    entityType: EntityType,
    jurisdiction: JurisdictionType,
    procedure: ProcedureType,
    amount: number
  ): CourtFeeResult {
    if (entityType === 'fisica') {
      return { isExempt: true, fixedFee: 0, variableFee: 0, totalFee: 0, taxableBase: 0, procedureName: '' };
    }
    const fixedFee = FIXED_FEES[jurisdiction][procedure] || 0;
    const variableFee = this.getVariableFee(jurisdiction, amount);
    return { isExempt: false, fixedFee, variableFee, totalFee: fixedFee + variableFee, taxableBase: amount, procedureName: procedure };
  }

  static getProcedureLabel(jurisdiction: JurisdictionType, procedure: ProcedureType): string {
    return PROCEDURE_LABELS[jurisdiction][procedure] || '';
  }
}
