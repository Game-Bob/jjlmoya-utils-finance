import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflacao-espanha';
const title = 'Calculadora de Inflação em Espanha: Valor do Dinheiro Histórico';
const description =
  'Descubra quanto valeriam as suas pesetas hoje ou quanto subiu o custo de vida desde 1980. Dados históricos do IPC de Espanha atualizados para 2026.';

const faqData = [
  {
    question: 'O que é o IPC e como se calcula?',
    answer:
      'O Índice de Preços no Consumidor (IPC) mede a evolução dos preços de um cabaz de bens e serviços representativo do consumo espanhol. Calcula-se comparando o custo deste cabaz em diferentes períodos de tempo.',
  },
  {
    question: 'Quanto é que o dinheiro perdeu de valor desde 1980?',
    answer:
      '1.000 pesetas de 1980 equivalem a aproximadamente 60€ de hoje em poder de compra. O dinheiro perdeu mais de 90% do seu valor nestes mais de 40 anos devido à inflação acumulada.',
  },
  {
    question: 'Porque é que as minhas poupanças perdem valor se não as movimento?',
    answer:
      'Se a inflação for de 3% ao ano e a sua conta der 0% de juros, perde 3% de poder de compra todos os anos. Para manter o valor real, as suas poupanças devem gerar pelo menos a taxa de inflação.',
  },
  {
    question: 'Qual foi o período de maior inflação em Espanha?',
    answer:
      'Os anos 80 foram os mais inflacionários, com taxas de dois dígitos (até 15%). Os preços mudavam drasticamente mês a mês. Desde o euro (2002), a inflação tem sido mais controlada, exceto em 2021-2023.',
  },
  {
    question: 'Como é que a inflação afeta as minhas poupanças?',
    answer:
      'A inflação atua como um „imposto silencioso”. Se a inflação for de 5% e o seu dinheiro estiver debaixo do colchão, no final do ano poderá comprar menos 5% de produtos. É fundamental investir para contrariar este efeito.',
  },
];

const howToData = [
  {
    name: 'Selecionar o ano de origem',
    text: 'Escolha a partir de que data quer calcular o valor do dinheiro (disponível de 1980 a 2026).',
  },
  {
    name: 'Introduzir a quantidade',
    text: 'Escreva o montante em pesetas (para datas antigas) o em euros que quer comparar.',
  },
  {
    name: 'Escolher o ano final',
    text: 'Defina até que momento quer ver a evolução do poder de compra.',
  },
  {
    name: 'Analisar o resultado real',
    text: 'Observe a equivalência de poder de compra e a percentagem de inflação acumulada nesse período.',
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

export const content: ToolLocaleContent<InflationUI> = {
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
      text: 'Calculadora de Inflação Histórica: Entenda o Valor Real do seu Dinheiro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A inflação é o „imposto silencioso” que devora as suas poupanças ano após ano. Sabe quanto é que o seu dinheiro perdeu de valor desde 1980? Quanto custa realmente esse café que pagava a 300 pesetas há 20 anos?',
    },
    {
      type: 'title',
      text: 'A Inflação: O Imposto Silencioso sobre o seu Património',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A <strong>inflação</strong> é o incremento sustentado e generalizado dos preços. Embora pareça um fenómeno técnico, o seu impacto na economia real é direto: reduz a quantidade de bens que pode comprar com o mesmo dinheiro, erodindo a poupança de toda uma vida se não forem tomadas medidas protetoras.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Recorde Histórico 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Pico de Preços 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Objetivo de Estabilidade',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Termos Financeiros Essenciais',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IPC',
          definition: 'Indicador que resume a variação de preços de um cabaz básico de consumo.',
        },
        {
          term: 'Poder de Compra',
          definition: 'Capacidade de compra real de uma moeda num momento determinado.',
        },
        {
          term: 'Deflação',
          definition: 'Descida generalizada dos preços que pode paralisar o investimento.',
        },
        {
          term: 'Estagflação',
          definition: 'Cenário de alta inflação combinado com estagnação económica.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Marcos Económicos e Comparativa',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crise dos anos 80',
          description: 'Período marcado por inflações de dois dígitos e grande instabilidade laboral.',
          points: [
            'Taxas de juro extremamente altas',
            'Perda rápida de valor da peseta',
            'Salários devorados pelos preços',
          ],
        },
        {
          title: 'Inflação da Pandemia: 2021 a 2023',
          description: 'Subida brusca devido a custos energéticos e problemas na cadeia de abastecimento.',
          highlight: true,
          points: [
            'Impacto direto no cabaz de compras',
            'Subida de taxas do BCE para travar o consumo',
            'Recuperação lenta do poder de compra',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Produto ou Indicador', 'Valor em 1980 (Estimado)', 'Valor em 2026 (Projetado)', 'Variação'],
      rows: [
        ['Pão de cacete', '0.15€ (25 pts)', '1.40€', '833%'],
        ['Café em estabelecimento', '0.30€ (50 pts)', '1.65€', '450%'],
        ['Bilhete de cinema', '1.20€ (200 pts)', '9.80€', '716%'],
        ['Salário Mínimo Mensal', '154€ (25.615 pts)', '1.140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'O Perigo do Dinheiro Vivo',
      html: 'Guardar dinheiro debaixo do colchão ou em contas à ordem sem rentabilidade é uma perda de capital garantida. Uma inflação média de 3% reduz a metade o valor das suas poupanças em menos de 25 anos.',
    },
    {
      type: 'title',
      text: 'Conselhos para Proteger as suas Poupanças',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Estratégias de Investimento',
      items: [
        {
          pro: 'Ativos Reais: Os imóveis costumam valorizar-se com a inflação.',
          con: 'Baixa liquidez e altos custos de entrada.',
        },
        {
          pro: 'Bolsa e Fundos: Rentabilidades que costumam superar o IPC a longo prazo.',
          con: 'Volatilidade e risco de mercado a curto prazo.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hábitos Financeiros Saudáveis',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Rever periodicamente os seus gastos para detetar subidas ocultas.',
        'Diversificar poupanças em diferentes tipos de ativos.',
        'Considerar títulos do tesouro vinculados à inflação.',
        'Utilizar ferramentas de cálculo para contextualizar ofertas e salários.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aviso sobre o Juro Composto Negativo',
      html: 'A inflação atua como um juro composto inverso. Todos os anos, a percentagem de perda aplica-se sobre um valor já diminuído, acelerando a perda de riqueza se não houver intervenção.',
    },
    {
      type: 'summary',
      title: 'Conclusões Chave',
      items: [
        'O IPC é apenas uma média; a sua inflação pessoal depende dos seus hábitos.',
        'Investir não é opcional se se pretende preservar o valor real do trabalho.',
        'As calculadoras de inflação são vitais para entender contratos de longo prazo.',
      ],
    },
    {
      type: 'message',
      title: 'Tome o Controlo da sua Economia',
      html: 'A nossa calculadora utiliza dados oficiais do INE para lhe oferecer a visão mais precisa do passado e presente económico de Espanha.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Inflação Espanha',
    labelInitialAmount: 'Dinheiro Inicial',
    labelInitialYear: 'No ano',
    labelFinalAmount: 'Equivalência Hoje',
    labelFinalYear: 'Ano 2026',
    labelInflationRate: 'Inflação Acumulada',
    labelCalculatedOn: 'Cálculo realizado utilizando dados oficiais do INE até 2025 e projeções estimadas para o fecho de 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
    labelYearSelect: 'No ano',
    labelIn: 'Em',
    labelEquivalentToday: 'equivale hoje a',
    labelInflationAccumulated: 'Inflação Acumulada',
    labelYear: 'Ano',
  },
};
