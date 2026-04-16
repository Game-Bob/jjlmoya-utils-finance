import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'simulador-hipoteca';
const title = 'Simulador de Hipoteca e Tabela de Amortização Francesa';
const description =
  'Calcule a sua prestação mensal, descubra quanto pagará em juros e visualize o seu plano de amortização completo instantaneamente.';

const faqData = [
  {
    question: 'O que é o sistema de amortização francês?',
    answer:
      'É o sistema mais utilizado. A prestação mensal é constante, mas no início paga quase tudo em juros e muito pouco capital. No final, é o contrário. Por isso, amortizar antecipadamente é mais rentável nos primeiros anos.',
  },
  {
    question: 'Taxa fixa ou variável em 2026?',
    answer:
      'Taxa fixa: paga mais agora mas dorme descansado por 30 anos. Taxa variável: pode ser mais barata hoje, mas se a Euribor subir, a sua prestação pode disparar. Depende da sua aversão ao risco.',
  },
  {
    question: 'Quanto poupo se amortizar 10.000€ antecipadamente?',
    answer:
      'Depende do momento. Se amortizar no ano 1 de uma hipoteca de 200.000€ a 3%, pode poupar mais de 15.000€ em juros. Se o fizer no ano 20, mal poupa 2.000€. O timing é crucial.',
  },
  {
    question: 'Que percentagem do meu salário devo destinar à hipoteca?',
    answer:
      'A recomendação geral é de não superar os 30-35% dos seus rendimentos líquidos mensais (incluindo outras dívidas). Superar este limiar aumenta significativamente o risco de incumprimento perante imprevistos.',
  },
];

const howToData = [
  {
    name: 'Introduzir o montante do empréstimo',
    text: 'Escreva a quantia total que precisa de solicitar ao banco (subtraindo as suas poupanças dadas como entrada).',
  },
  {
    name: 'Ajustar a taxa de juro',
    text: 'Introduza a taxa (TAN) oferecida pela entidade. Pode comparar entre taxa fixa ou variável.',
  },
  {
    name: 'Escolher o prazo de amortização',
    text: 'Defina em quantos anos quer pagar o empréstimo. Quanto mais anos, menor a prestação, mas pagará mais juros totais.',
  },
  {
    name: 'Analisar o plano de amortização',
    text: 'Reveja mês a mês a evolução da sua dívida e que parte da prestação se destina a juros vs capital.',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes e Referências',
  bibliography: [
    {
      name: 'Banco de Portugal: Portal do Cliente Bancário',
      url: 'https://clientebancario.bportugal.pt/',
    },
    {
      name: 'DECO: Simulador de crédito habitação',
      url: 'https://www.deco.proteste.pt/dinheiro/credito-habitacao',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guia Completo de Hipotecas: Sistema Francês e Amortização',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A hipoteca é provavelmente a maior dívida que contrairá na sua vida. Entender como funciona o sistema de amortização francês é crucial para tomar decisões inteligentes que podem poupar-lhe dezenas de milhares de euros.',
    },
    {
      type: 'title',
      text: 'A "Ratoeira" do Sistema Francês: Entender a Composição da Prestação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Em Portugal, a maioria das hipotecas usa o <strong>Sistema de Amortização Francês</strong>. A sua principal característica é que a prestação mensal é constante (se a taxa for fixa), mas a composição muda radicalmente ao longo do tempo.',
    },
    {
      type: 'tip',
      title: 'Como Evolui a sua Prestação',
      html: '<p><strong>Ao princípio (Anos 1-10):</strong> Paga quase tudo em JUROS e devolve muito pouco capital. Numa hipoteca de 250.000€ a 3%, o seu primeiro pagamento pode ter 80% de juros.</p><p><strong>A meio (Anni 11-25):</strong> A proporção equilibra-se gradualmente.</p><p><strong>Ao final (Anni 26-30):</strong> Paga quase tudo em CAPITAL e muito poucos juros.</p>',
    },
    {
      type: 'paragraph',
      html: 'Por isso, se vai <strong>amortizar hipoteca</strong> (adiantar dinheiro), é muito mais rentável fazê-lo nos primeiros anos do empréstimo. Amortizar 10.000€ no ano 1 pode poupar-lhe mais de 15.000€ em juros. O mesmo adiantamento no ano 20 mal poupa 2.000€.',
    },
    {
      type: 'title',
      text: 'Quanto Dinheiro Devo Destinar à Hipoteca?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O Banco de Portugal recomenda que a sua taxa de esforço <strong>não supere os 30-35% dos seus rendimentos líquidos mensais</strong>. Se superar este limite, aumenta significativamente o risco de incumprimento perante imprevistos (perda de emprego, doença, etc.).',
    },
    {
      type: 'title',
      text: 'Contexto 2026: Taxa Fixa vs Variável',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Com a Euribor a oscilar, escolher entre <strong>Taxa Fixa</strong> ou <strong>Taxa Variável</strong> é uma decisão estratégica que pode custar milhares de euros anualmente.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Taxa Fixa',
          description: 'Paga um pouco mais agora, mas dorme descansado sabendo que a prestação nunca subirá.',
          points: [
            'Prestação previsível durante todo o prazo',
            'Proteção contra subidas da Euribor',
            'Paz de espírito em economia incerta',
            'Ideal para orçamentos apertados',
          ],
        },
        {
          title: 'Taxa Variável',
          description: 'Pode ser mais barata hoje, mas expõe a sua economia à volatilidade.',
          highlight: true,
          points: [
            'Prestação inicial mais baixa',
            'Risco de subidas da Euribor',
            'Impacto potencial grave no orçamento',
            'Apenas para quem tolera risco alto',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'A Decisão Fixa vs Variável Depende do Seu Perfil',
      html: '<p><strong>Escolha Taxa Fixa se:</strong> O seu orçamento é apertado, procura certeza e não tolera surpresas mensais desagradables.</p><p><strong>Escolha Taxa Variável se:</strong> Tem almofada financeira, acredita que a Euribor vai baixar ou a hipoteca é curta.',
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Hipoteca',
    labelLoanAmount: 'Montante Empréstimo',
    labelInterestRate: 'Juro (TAN)',
    labelYears: 'Prazo (Anos)',
    labelMonthlyExtra: 'Acrescentar Poupança Mensal',
    labelMonthlyPayment: 'Prestação Mensal',
    labelMonthCount: 'meses',
    labelSavingsCard: 'A sua Poupança Potencial',
    labelSavingsInterest: 'Juros',
    labelSavingsTime: 'Tempo',
    labelTimelineComparison: 'Comparativa Temporal',
    labelTimelineOriginal: 'Duração Original',
    labelTimelineOptimized: 'Duração com Amortização',
    labelCostBreakdown: 'Resumo de Custos Totais',
    labelBorrowed: 'Emprestado',
    labelTotalBorrowed: 'Total Emprestado',
    labelTotalInterest: 'Total Juros',
    labelAmortizationTable: 'Tabela de Amortização',
    labelTableHeader: 'Ver tabela completa',
    labelViewAll: 'Ver tudo',
    labelPaid: 'Hipoteca Paga',
    labelTableMonth: 'Mês',
    labelTableInterest: 'Juro',
    labelTablePrincipal: 'Capital',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Em dívida',
    labelMoreMonths: 'mais meses',
    labelMonth: 'Mese',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
    monthPlural: 'meses',
    yearPlural: 'anos',
  },
};
