import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'calculadora-regra-4-por-cento-fire';
const title = 'Calculadora FIRE: Regra dos 4% para a sua Liberdade Financeira';
const description = 'Calcule o seu número mágico para a independência financeira usando a regra dos 4%. Planeie a sua reforma antecipada e visualize o seu caminho para a liberdade económica.';

const faqData = [
  {
    question: 'O que é a Regra dos 4%?',
    answer: 'A Regra dos 4% é uma estratégia de levantamento baseada no Estudo Trinity que indica que pode levantar 4% do seu património no primeiro ano de reforma, ajustando pela inflação nos anos seguintes, sem esgotar os seus fundos em 30 anos.',
  },
  {
    question: 'O que é FIRE?',
    answer: 'FIRE significa Financial Independence, Retire Early (Independência Financeira, Reforma Antecipada). É um movimento que procura alcançar a liberdade económica através de uma combinação agressiva de poupança e investimento inteligente.',
  },
  {
    question: 'Qual é o meu número mágico?',
    answer: 'O seu número mágico é o património total que precisa de acumular para poder viver dos rendimentos sem trabalhar. É calculado dividindo as suas despesas anuais pela taxa de levantamento segura (geralmente 4%).',
  },
  {
    question: 'Qual a diferença entre Lean, Barista e Fat FIRE?',
    answer: 'Lean FIRE é viver com despesas mínimas (70% das despesas atuais), Barista FIRE é trabalhar a tempo parcial enquanto os rendimentos cobrem o resto (50% das despesas), e Fat FIRE é ter um estilo de vida folgado (150% das despesas).',
  },
  {
    question: 'A Regra dos 4% é realista?',
    answer: 'A Regra dos 4% tem uma probabilidade histórica de sucesso de 95% numa carteira 50/50 ações-obrigações durante 30 anos. No entanto, não contempla o risco de sequência de retornos e baseia-se principalmente em dados do mercado norte-americano.',
  },
];

const howToData = [
  {
    name: 'Calcule as suas despesas mensais',
    text: 'Analise quanto gasta realmente cada mês, incluindo habitação, alimentação, serviços e entretenimento.',
  },
  {
    name: 'Escolha a sua taxa de levantamento segura',
    text: 'A Regra dos 4% é o padrão, mas pode ajustar entre 2,5% (mais conservador) e 6% (mais agressivo) de acordo com a sua tolerância ao risco.',
  },
  {
    name: 'Introduza o seu património atual',
    text: 'Some o total dos seus investimentos, poupanças e ativos que geram rendimento passivo.',
  },
  {
    name: 'Visualize o seu progresso',
    text: 'Observe o gráfico de crescimento e os marcos de liberdade (Lean, Barista, Fat FIRE) para entender quando alcançará a sua meta.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regra dos 4%: O Santo Graal da Reforma Antecipada',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Descubra como calcular o património necessário para viver dos rendimentos para sempre. A <strong>Regra dos 4%</strong> surgiu do Estudo Trinity, realizado em 1998 por três professores de finanças. Analisaram dados históricos desde 1926 para determinar que percentagem se podia levantar anualmente sem esgotar a carteira em 30 anos.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Sucesso Histórico' },
        { value: '50/50', label: 'Mix Ações/Obrigações' },
        { value: '30', label: 'Anos de Horizonte' },
        { value: '4%', label: 'Levantamento Seguro' },
      ],
    },
    {
      type: 'title',
      text: 'O que é o Movimento FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE é a sigla para Financial Independence, Retire Early (Independência Financeira, Reforma Antecipada).',
        'Procura a liberdade de escolher o que fazer com o seu tempo sem que o dinheiro seja um condicionante.',
        'Baseia-se na otimização da poupança e no investimento inteligente.',
        'O objetivo é que os seus ativos gerem fluxo de caixa suficiente para cobrir as suas despesas.',
      ],
    },
    {
      type: 'title',
      text: 'Tipos de Liberdade Financeira',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Estilo de vida minimalista. Cobre apenas as despesas básicas de sobrevivência.',
          points: ['Poupança extrema', 'Gasto muito baixo', 'Liberdade frugal'],
        },
        {
          title: 'Barista FIRE',
          description: 'Situação híbrida onde os seus investimentos cobrem a metade das suas despesas.',
          points: ['Trabalho por prazer', 'Segurança social coberta', 'Menor stresse'],
        },
        {
          title: 'Fat FIRE',
          description: 'Reforma com um orçamento folgado que permite luxos e viagens.',
          points: ['Alto património', 'Zero restrições', 'Legado familiar'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como usar a nossa Calculadora FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Controlo de Despesas:</strong> Analise as suas despesas reais dos últimos 12 meses.',
        '<strong>Definição de SWR:</strong> Escolha a sua taxa de levantamento segura de acordo com o seu risco.',
        '<strong>Património Atual:</strong> Introduza o valor dos seus investimentos atuais.',
        '<strong>Capacidade de Poupança:</strong> Projete quanto tempo lhe resta para a meta.',
        '<strong>Visualização Visual:</strong> Analise o gráfico de crescimento da sua riqueza.',
      ],
    },
    {
      type: 'title',
      text: 'Análise da Regra dos 4%',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vantagens',
          description: 'Por que funciona a regra dos 4%',
          points: [
            'Simplicidade matemática para planeamento rápido.',
            'Baseada em dados históricos de quase um século.',
            'Adaptável a qualquer nível de gasto.',
          ],
        },
        {
          title: 'Limitações',
          description: 'O que não cobre a regra dos 4%',
          points: [
            'Não contempla o risco de sequência de retornos.',
            'Baseada principalmente no mercado norte-americano.',
            'Ignora mudanças drásticas na fiscalidade local.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Factor Crítico: A Inflação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lembre-se que 1.000€ hoje não comprarão o mesmo no futuro. É vital usar rentabilidades reais (descontada a inflação) para que as suas projeções mantenham o poder de compra atual. A Regra dos 4% assume que ajusta os seus levantamentos anualmente pela inflação.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora FIRE: Regra dos 4%',
    labelDescription: 'Calcule o seu número mágico para a independência financeira usando a regra dos 4% e visualize os seus marcos para a liberdade.',
    labelMonthlyExpenses: 'Despesas Mensais',
    labelSWR: 'Taxa de Levantamento (SWR)',
    labelCurrentWorth: 'Património Atual',
    labelMonthlySavings: 'Capacidade de Poupança Mensal',
    labelAnnualReturn: 'Rentabilidade Estimada (Neta)',
    labelFreedomMilestones: 'Marcos de Liberdade',
    labelLeanFIRE: 'Lean FIRE (70% sobrevivência)',
    labelBaristaFIRE: 'Barista FIRE (50% rendimento)',
    labelFatFIRE: 'Fat FIRE (150% luxo)',
    labelMagicNumber: 'O Seu Número Mágico para ser Livre',
    labelMagicNumberDesc: 'Capital necessário para viver dos rendimentos',
    labelTimeRemaining: 'Tempo até à liberdade financeira',
    labelTimeRemainingFormat: 'Faltam-lhe {years} anos e {months} meses',
    labelAlreadyFI: 'Já alcançou a liberdade financeira!',
    labelUnachievable: 'Meta inalcançável com esta poupança',
    labelHiddenCostsChecklist: 'Checklist de Despesas Ocultas',
    labelHealth: 'Seguro de Saúde (+200€)',
    labelTaxes: 'Impostos (+150€)',
    labelHome: 'Manutenção da Casa (+100€)',
    labelTravel: 'Viagens e Lazer (+300€)',
    labelEmergency: 'Fundo de Emergência (+100€)',
    labelSubscriptions: 'Subscrições (+50€)',
    labelAdded: 'Adicionado:',
    labelSavePlan: 'Guardar Plano',
    labelSWRTooltip: 'Safe Withdrawal Rate: Percentagem das suas poupanças que pode levantar todos os anos sem ficar sem dinheiro.',
    labelReturnTooltip: 'Rendimento anual do mercado (já descontada a inflação). O padrão histórico é de 7%.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
};
