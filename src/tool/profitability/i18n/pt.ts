import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Investimento Inicial',
  labelFinalValue: 'Valor Final / Saldo Atual',
  labelTimeSelection: 'Duração do Investimento',
  labelYears: 'Anos',
  labelMonths: 'Meses',
  labelDays: 'Dias',
  labelROI: 'Retorno do Investimento (ROI)',
  labelCAGR: 'Crescimento Anualizado (CAGR)',
  labelNetProfit: 'Lucro Líquido',
  labelLinearGrowth: 'Crescimento Linear (Estimado)',
  labelExponentialGrowth: 'Crescimento Composto (CAGR)',
  labelPositiveResult: 'Investimento Rentável',
  labelNegativeResult: 'Posição em Perda',
  labelCopyResult: 'Copiar Resultados',
  labelCopied: 'Copiado!',
};

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'calculadora-rentabilidade-investimento-roi-cagr',
  title: 'Calculadora de Rentabilidade: ROI & CAGR',
  description: 'Analisa o rendimento dos teus investimentos. Calcula o ROI e o CAGR para entenderes os teus ganhos reais.',
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Qual métrica é melhor?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>ROI</strong> indica a percentagem total de ganho, mas ignora o tempo. O <strong>CAGR</strong> é melhor para análises a longo prazo.',
    },
  ],
  faq: [
    {
      question: 'O que é um bom CAGR?',
      answer: 'Historicamente o S&P 500 rende cerca de 7-10% ao ano.',
    },
  ],
  bibliography: [
    {
      name: 'Definição de ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Insere o capital inicial',
      text: 'Insere o montante investido originalmente.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calculadora de Rentabilidade',
      description: 'Calcula ROI e CAGR.',
    },
  ],
};
