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

const slug = 'calculadora-rentabilidade-investimento-roi-cagr';
const title = 'Calculadora de Rentabilidade: ROI & CAGR';
const description = 'Analisa o rendimento dos teus investimentos. Calcula o ROI e o CAGR para entenderes os teus ganhos reais.';

const faq = [
  {
    question: 'O que é um bom CAGR?',
    answer: 'Historicamente o S&P 500 rende cerca de 7-10% ao ano.',
  },
  {
    question: 'Porque é que o meu CAGR é diferente do ROI total?',
    answer: 'O ROI é o retorno total independentemente do tempo. O CAGR é a taxa anual necessária para atingir esse retorno.',
  },
];

const howTo = [
  {
    name: 'Insere o capital inicial',
    text: 'Insere o montante investido originalmente.',
  },
  {
    name: 'Insere o valor final',
    text: 'Insere o valor de mercado atual.',
  },
  {
    name: 'Define a duração',
    text: 'Especifica quanto tempo mantiveste o investimento.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR: Qual métrica é melhor?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>ROI</strong> indica a percentagem total de ganho, mas ignora o tempo. El <strong>CAGR</strong> é melhor para análises a longo prazo.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Definição de ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
