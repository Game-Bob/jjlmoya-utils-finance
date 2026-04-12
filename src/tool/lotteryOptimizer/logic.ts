export type LotteryId = 'gordo' | 'nino' | 'euromillones' | 'primitiva' | 'bonoloto';

export interface LotteryGame {
  id: LotteryId;
  name: string;
  cost: number;
  jackpot: number;
  odds: number;
  description: string;
  payoutRate: number;
}

export const LOTTERY_DATA: Record<LotteryId, LotteryGame> = {
  gordo: {
    id: 'gordo',
    name: 'Lotería de Navidad',
    cost: 20,
    jackpot: 400000,
    odds: 100000,
    payoutRate: 70,
    description: 'El mayor reparto de premios del mundo. Probabilidad alta de ganar algo.',
  },
  nino: {
    id: 'nino',
    name: 'Lotería del Niño',
    cost: 20,
    jackpot: 200000,
    odds: 100000,
    payoutRate: 70,
    description: 'Triplica las posibilidades de reintegro respecto a Navidad.',
  },
  euromillones: {
    id: 'euromillones',
    name: 'Euromillones',
    cost: 2.5,
    jackpot: 17000000,
    odds: 139838160,
    payoutRate: 50,
    description: 'Premios astronómicos, probabilidades casi imposibles.',
  },
  primitiva: {
    id: 'primitiva',
    name: 'La Primitiva',
    cost: 1,
    jackpot: 2000000,
    odds: 139838160,
    payoutRate: 55,
    description: 'La lotería más antigua de España. Difícil pero más barata.',
  },
  bonoloto: {
    id: 'bonoloto',
    name: 'Bonoloto',
    cost: 0.5,
    jackpot: 400000,
    odds: 13983816,
    payoutRate: 55,
    description: 'La más económica. Ideal para jugar a diario con poco presupuesto.',
  },
};

export class LotteryLogic {
  private static getChristmasRecommendation(tickets: number): { recommendation: string; optimalTickets: number } {
    if (tickets < 5) {
      return {
        recommendation:
          'Para una gestión de riesgo básica, se suele buscar diversificar terminaciones. Jugar pocas unidades mantiene la ilusión con el mínimo riesgo de capital.',
        optimalTickets: 1,
      };
    }
    if (tickets < 10) {
      return {
        recommendation:
          'Acercarse a los 10 décimos (200€) garantiza estadísticamente un reintegro, pero recuerda que esto supone recuperar solo el 10% de lo invertido en ese nivel.',
        optimalTickets: tickets,
      };
    }
    return {
      recommendation:
        'Has superado el umbral de diversificación básica. A partir de aquí, cada décimo extra aumenta tu exposición al riesgo sin mejorar la eficiencia de retorno.',
      optimalTickets: 10,
    };
  }

  private static getOtherRecommendation(
    totalCost: number,
    tickets: number,
    cost: number
  ): { recommendation: string; optimalTickets: number } {
    if (totalCost > 15) {
      return {
        recommendation:
          'En juegos de probabilidad extrema, no hay "estrategia óptima" más allá de limitar estrictamente el gasto. Reducir la cuantía es la mejor jugada.',
        optimalTickets: Math.floor(5 / cost),
      };
    }
    return {
      recommendation:
        'Mantener una participación simbólica es la forma más racional de participar en sorteos con botes astronómicos.',
      optimalTickets: tickets,
    };
  }

  static calculateStats(id: LotteryId, tickets: number) {
    const game = LOTTERY_DATA[id];
    const totalCost = tickets * game.cost;
    const winProbability = 1 - Math.pow((game.odds - 1) / game.odds, tickets);
    const expectedValue = game.jackpot * (tickets / game.odds) - totalCost;

    const isChristmas = id === 'gordo' || id === 'nino';
    const { recommendation, optimalTickets } = isChristmas
      ? this.getChristmasRecommendation(tickets)
      : this.getOtherRecommendation(totalCost, tickets, game.cost);

    return {
      totalCost,
      winProbability: winProbability * 100,
      expectedValue,
      recommendation,
      optimalTickets,
      efficiency: (game.payoutRate / 100) * (tickets / totalCost),
    };
  }

  static compareGames() {
    return Object.values(LOTTERY_DATA)
      .map((game) => ({
        name: game.name,
        score: game.payoutRate / 100 / (game.odds / 1000000),
        odds: game.odds,
      }))
      .sort((a, b) => b.score - a.score);
  }
}
