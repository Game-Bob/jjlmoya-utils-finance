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

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'calculadora-liberdade-financeira-pista-sobrevivencia',
  title: 'Calculadora de Liberdade Financeira e Pista de Sobrevivência',
  description: 'Calcula exatamente quanto tempo as tuas poupanças vão durar. A nossa ferramenta de pista ajuda-te a visualizar a tua independência.',
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
  faq: [
    {
      question: 'O que é uma boa pista?',
      answer: 'Especialistas recomendam de 3 a 6 meses. Para liberdade real, foca em 2 anos ou mais.',
    },
  ],
  bibliography: [
    {
      name: 'Princípios do Movimento FIRE',
      url: 'https://pt.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Insere as tuas poupanças',
      text: 'Insere o total de dinheiro líquido disponível.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calculadora de Liberdade Financeira',
      description: 'Calcula a duração das tuas poupanças.',
    },
  ],
};
