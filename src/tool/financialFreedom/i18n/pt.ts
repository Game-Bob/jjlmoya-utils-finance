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
      html: 'A <strong>pista de sobrevivência</strong> (runway) é o tempo que podes viver sem novos rendimentos. É a métrica definitiva da liberdade financeira: transforma o dinheiro líquido que já tens numa medida concreta de tempo e margem de segurança.',
    },
    {
      type: 'title',
      text: 'Como calcular a tua autonomia financeira',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A calculadora divide as poupanças líquidas pelas despesas do período escolhido e apresenta o resultado em anos, meses e dias. Também mostra o <strong>burn rate</strong>, ou seja, quanto sai em média por dia para manter o teu estilo de vida. Inclui renda, alimentação, transportes, seguros e prestações nas despesas para obter uma estimativa realista.',
    },
    {
      type: 'title',
      text: 'Como interpretar as zonas de segurança',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Menos de seis meses coloca-te na zona vermelha e indica uma reserva frágil. Entre seis e vinte e quatro meses estás na zona amarela, com mais margem para uma quebra de rendimento. Acima de vinte e quatro meses, a zona verde oferece uma base mais confortável para mudar de trabalho, iniciar um projeto ou tomar decisões com calma.',
    },
    {
      type: 'paragraph',
      html: 'Usa o resultado para planear e comparar cenários, como reduzir despesas em 10% ou aumentar a poupança. É uma estimativa: não inclui automaticamente inflação, rendimentos de investimentos, impostos ou despesas extraordinárias. Confirma sempre os dados, unidades, arredondamentos e premissas apresentadas pela calculadora.',
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
