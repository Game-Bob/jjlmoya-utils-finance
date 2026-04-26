import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'juros-compostos';
const title = 'Calculadora de Juros Compostos: Visualize a sua Riqueza Futura';
const description =
  'Descubra como pequenos investimentos se transformam em grandes fortunas. A ferramenta definitiva para planear a sua liberdade financeira e reforma.';

const faqData = [
  {
    question: 'O que são juros compostos?',
    answer:
      'É o juro calculado sobre o capital inicial e também sobre os juros acumulados de períodos anteriores. Isto gera um crescimento exponencial do investimento ao longo do tempo.',
  },
  {
    question: 'Qual é a diferença para o juro simples?',
    answer:
      'No juro simples, os juros são calculados apenas sobre o capital inicial. No composto, os juros são reinvestidos, o que significa que "os seus juros geram mais juros".',
  },
  {
    question: 'O que é a "Regra dos 72"?',
    answer:
      'É uma fórmula rápida para estimar quanto tempo levará para duplicar um investimento: divida 72 pela taxa de rentabilidade anual. Por exemplo, a 8% ao ano, duplicará o seu dinheiro em 9 anos.',
  },
  {
    question: 'Porque é importante começar a investir jovem?',
    answer:
      'Devido ao efeito exponencial, o fator mais determinante não é a quantidade de dinheiro poupada, mas o tempo. Começar uns anos antes pode resultar numa riqueza final muito maior devido à capitalização.',
  },
];

const howToData = [
  {
    name: 'Introduzir capital inicial',
    text: 'Escreva a quantidade de dinheiro com que vai começar o seu plano de investimento.',
  },
  {
    name: 'Definir contribuições periódicas',
    text: 'Indique quanto dinheiro poupará e investirá mensalmente ou anualmente de forma adicional.',
  },
  {
    name: 'Estimar rentabilidade anual',
    text: 'Introduza a percentagem de lucro anual que espera obter (ex: 7% para o S&P 500 histórico).',
  },
  {
    name: 'Ajustar o horizonte temporal',
    text: 'Escolha quantos anos manterá o investimento para visualizar o crescimento exponencial do seu capital.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
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
      text: 'A Magia dos Juros Compostos: Construa a sua Riqueza Exponencialmente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein chamou-lhes a "oitava maravilha do mundo". Os <strong>juros compostos</strong> são o mecanismo mais poderoso para gerar riqueza a longo prazo. Não precisa de ser um especialista em finanças para os aproveitar: apenas precisa de tempo, paciência e dinheiro investido.',
    },
    {
      type: 'title',
      text: 'Juro Simples vs Composto: A Metáfora da Bola de Neve',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imagine que tem uma bola de neve no topo de uma colina. O <strong>juro simples</strong> é como descer essa bola e ter de lhe adicionar neve manualmente a cada metro para que cresça. O <strong>juro composto</strong> é como deixar a bola rolar sozinha: ela recolhe neve por si mesma e, quanto maior se torna, mais superfície tem para recolher <em>ainda mais</em> neve em cada volta.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Juro Simples',
          description: 'Os juros são calculados sempre apenas sobre o capital inicial.',
          points: [
            'Fórmula: Capital × Taxa × Tempo',
            'Crescimento linear e previsível',
            'Utilizado em empréstimos de curto prazo',
            'Sem reinvestimento de lucros',
          ],
        },
        {
          title: 'Juro Composto',
          description: 'Os juros somam-se ao capital e geram novos juros.',
          highlight: true,
          points: [
            'Fórmula: Capital × (1 + Taxa)^Tempo',
            'Crescimento exponencial acelerado',
            'Base de qualquer investimento a longo prazo',
            'Os seus lucros geram mais lucros',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Matematicamente, os seus lucros geram novos lucros. Nos primeiros anos parece lento, mas passado o "ponto de viragem", a curva dispara verticalmente. Aqui é onde se criam as verdadeiras fortunas.',
    },
    {
      type: 'title',
      text: 'Porque é que o tempo é o seu maior aliado?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O fator mais determinante não é a quantidade de dinheiro que investe, mas <strong>quantos anos deixa que cresça</strong>. Começar 10 anos antes pode resultar numa riqueza final 2 ou 3 vezes maior, mesmo que invista menos dinheiro total. Este efeito exponencial é a razão pela qual os jovens investidores têm uma vantagem incomparável.',
    },
    {
      type: 'tip',
      title: 'A Regra dos 72',
      html: '<p>Divida 72 pela sua rentabilidade anual para saber quantos anos levará para <strong>duplicar o seu dinheiro</strong>.</p><p><em>Exemplo: A 8%, duplica a cada 9 anos (72/8 = 9).</em></p><p>Esta fórmula mágica funciona para qualquer taxa de rendimento e ajuda-o a estimar rapidamente o crescimento dos seus investimentos.',
    },
    {
      type: 'tip',
      title: 'Conselho 2026',
      html: '<p>A inflação continua a ser um fator. Certifique-se de que a sua rentabilidade líquida supera pelo menos os 2-3% anuais para não perder poder de compra. Invista em ativos que cresçam mais depressa do que a inflação.',
    },
    {
      type: 'title',
      text: 'Frequência de Capitalização: É importante?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O juro pode capitalizar-se anualmente, semestralmente, trimestralmente, mensalmente ou até diariamente. Quanto <strong>mais frequente for a capitalização</strong>, maior será o efeito composto. Um mesmo capital com a mesma taxa crescerá mais se o juro se compuser mensalmente do que se se compuser anualmente.',
    },
  ],
  ui: {
    labelTitle: 'Simulador de Investimento',
    labelRealtime: 'Tempo real',
    labelInitial: 'Contribuição Inicial',
    labelMonthly: 'Contribuição Mensal',
    labelRate: 'Taxa Anual',
    labelYears: 'Anos',
    labelMyMoney: 'O seu Dinheiro',
    labelProfit: 'Lucro (Juros)',
    labelTotal: 'Total Acumulado',
    labelYear: 'Ano',
    labelPrincipal: 'O seu Dinheiro (Principal)',
    labelInterest: 'Juros Gerados',
    insightPrefix: '[TIP] No ano ',
    insightSuffix:
      ', os seus juros gerados anuais superarão as suas contribuições. O dinheiro já trabalha mais do que você!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
};
