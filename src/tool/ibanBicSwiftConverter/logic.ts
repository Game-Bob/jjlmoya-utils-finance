export interface BankData {
  name: string;
  bic: string;
}

export interface IBANValidationResult {
  isValid: boolean;
  countryCode: string;
  bankData?: BankData;
}

const SPANISH_BANKS: Record<string, BankData> = {
  "0049": { name: "Banco Santander", bic: "BSCH ES MM XXX" },
  "0182": { name: "BBVA (Banco Bilbao Vizcaya Argentaria)", bic: "BBVA ES MM XXX" },
  "2100": { name: "CaixaBank", bic: "CAIX ES BB XXX" },
  "0081": { name: "Banco Sabadell", bic: "BSAB ES BB XXX" },
  "0128": { name: "Bankinter", bic: "BKNM ES MM XXX" },
  "1465": { name: "ING Bank N.V., sucursal en España", bic: "INGD ES MM XXX" },
  "2038": { name: "Bankia (absorbido por CaixaBank)", bic: "CAIX ES BB XXX" },
  "0138": { name: "Abanca Corporación Bancaria", bic: "NCGA ES MM XXX" },
  "2080": { name: "Abanca (Cajas Rurales)", bic: "NCGA ES MM XXX" },
  "2103": { name: "Unicaja Banco", bic: "UNCA ES MM XXX" },
  "2048": { name: "Liberbank (absorbido por Unicaja)", bic: "UNCA ES MM XXX" },
  "2095": { name: "Kutxabank", bic: "KUTX ES BB XXX" },
  "3058": { name: "Cajamar Caja Rural", bic: "CAJM ES MM XXX" },
  "0239": { name: "EVO Banco (Grupo Bankinter)", bic: "EVOB ES MM XXX" },
  "0019": { name: "Deutsche Bank SAE", bic: "DEUT ES MM XXX" },
  "0075": { name: "Banco Popular (absorbido por Santander)", bic: "BSCH ES MM XXX" },
  "0030": { name: "Banco de España", bic: "BESP ES MM XXX" },
  "0216": { name: "Targobank", bic: "TARG ES MM XXX" },
  "0240": { name: "Banco Caminos", bic: "CAMI ES MM XXX" },
  "1491": { name: "Triodos Bank N.V. S.E.", bic: "TRID ES MM XXX" },
  "3190": { name: "Caja Rural de Teruel", bic: "CRTE ES 22 XXX" },
  "3183": { name: "Caja Rural de Navarra", bic: "CRNA ES MM XXX" },
  "3017": { name: "Caja Rural de Soria", bic: "CRSO ES 22 XXX" },
  "2085": { name: "Ibercaja Banco", bic: "CAJA ES MM XXX" },
  "0061": { name: "Banca March", bic: "BAMR ES MM XXX" },
  "0003": { name: "Banco de depósitos", bic: "BDEP ES MM XXX" },
  "0198": { name: "Banco Cooperativo Español", bic: "BCES ES MM XXX" },
  "0234": { name: "Banco de Sabadell (Bex)", bic: "BSAB ES BB XXX" },
  "1544": { name: "Qonto S.A.", bic: "QNTO FR PP XXX" },
  "1548": { name: "Revolut Bank UAB", bic: "REVO LT 22" },
};

export class IBANConverter {
  static validateIBAN(iban: string): boolean {
    const cleanIban = iban.toUpperCase().replace(/\s+/g, "");
    if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]{4,30}$/.test(cleanIban)) return false;

    const rearranged = cleanIban.slice(4) + cleanIban.slice(0, 4);
    const numeric = rearranged
      .split("")
      .map((c) => {
        const code = c.charCodeAt(0);
        return code >= 65 && code <= 90 ? (code - 55).toString() : c;
      })
      .join("");

    let remainder = 0;
    for (let i = 0; i < numeric.length; i += 7) {
      const chunk = remainder.toString() + numeric.substring(i, i + 7);
      remainder = parseInt(chunk, 10) % 97;
    }

    return remainder === 1;
  }

  static getBICFromIBAN(iban: string): BankData | null {
    const cleanIban = iban.toUpperCase().replace(/\s+/g, "");
    const country = cleanIban.slice(0, 2);

    if (country === "ES") {
      const bankCode = cleanIban.slice(4, 8);
      return SPANISH_BANKS[bankCode] || null;
    }

    return null;
  }

  static validate(iban: string): IBANValidationResult {
    const cleanIban = iban.toUpperCase().replace(/\s+/g, "");
    const countryCode = cleanIban.slice(0, 2);
    const isValid = this.validateIBAN(iban);

    return {
      isValid,
      countryCode,
      bankData: isValid ? this.getBICFromIBAN(iban) : undefined,
    };
  }

  static formatIBAN(iban: string): string {
    const clean = iban.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let formatted = "";
    for (let i = 0; i < clean.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += clean[i];
    }
    return formatted;
  }
}
