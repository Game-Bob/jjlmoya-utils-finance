import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Poupanças Totais',
  labelExpenses: 'Gastos Atuais',
  labelMonthly: 'Mensais',
  labelYearly: 'Anuais',
  labelTimeRemaining: 'Tua Pista de Sobrevivência',
  labelYears: 'Anos',
  labelMonths: 'Meses',
  labelDays: 'Dias',
  labelYearsShort: 'a',
  labelMonthsShort: 'm',
  labelDaysShort: 'd',
  labelStatus: 'Estado de Segurança Financeira',
  labelRedZone: 'Zona Vermelha: Alto Risco',
  labelYellowZone: 'Zona Amarela: Estável',
  labelGreenZone: 'Zona Verde: Liberdade Financeira',
  labelBurnRateDaily: 'Taxa de Gasto Diário',
  labelBurnRateMonthly: 'Taxa de Gasto Mensal',
  labelWhatIf: 'A Regra dos 10%',
  labelWhatIfDescription: 'Ao reduzir os teus gastos em apenas 10%, poderias estender a tua pista significativamente.',
  labelGainTime: 'Tempo Extra Ganho',
  labelCopyResult: 'Copiar Resumo',
  labelCopied: 'Copiado!',
};

const slug = 'calculadora-liberdade-financeira-pista-sobrevivencia';
const title = 'Calculadora de Liberdade Financeira e Pista de Sobrevivência';
const description = 'Calcula exatamente quanto tempo as tuas poupanças vão durar. A nossa ferramenta de pista ajuda-te a visualizar a tua independência.';

const faq = [
  {
    question: 'O que é uma boa pista?',
    answer: 'Especialistas recomendam de 3 a 6 meses. Para liberdade real, foca em 2 anos ou mais.',
  },
  {
    question: 'Esta calculadora inclui a inflação?',
    answer: 'Esta ferramenta foi concebida para o cálculo imediato de ativos líquidos face aos gastos atuais.',
  },
  {
    question: 'O que é o "Burn Rate" em finanças pessoais?',
    answer: 'O burn rate é o ritmo a que consomes as tuas poupanças para cobrir os teus gastos.',
  },
];

const howTo = [
  {
    name: 'Insere as tuas poupanças',
    text: 'Insere o total de dinheiro líquido disponível.',
  },
  {
    name: 'Define os teus gastos',
    text: 'Indica quanto gastas por mês ou por ano.',
  },
  {
    name: 'Analisa a tua zona de segurança',
    text: 'Verifica se estás na zona Vermelha, Amarela ou Verde.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'O que é a Pista de Sobrevivência Financeira?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>pista de sobrevivência</strong> (runway) é o tempo que podes viver sem novos rendimentos. É a métrica definitiva da liberdade financeira.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Princípios do Movimento FIRE',
      url: 'https://pt.wikipedia.org/wiki/FIRE_movement',
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
