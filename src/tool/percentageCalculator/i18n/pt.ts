import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'calculadora-de-porcentagem';
const title = 'Calculadora de Percentagem 4 em 1: Descontos, Aumentos e Reduções';
const description =
  'Calcule facilmente percentagens online grátis. 4 ferramentas em 1 para tirar o X% de Y, diferença percentual, somar ou subtrair IVA, saldos e gorjetas automáticas.';

const faqData = [
  {
    question: 'Como funciona a calculadora?',
    answer:
      'Basta escrever os valores nas caixas do caso de utilização correspondente ao seu problema e a nossa calculadora processa a fórmula sem necessidade de carregar em nenhum botão de calcular.',
  },
  {
    question: 'É válida para calcular o IVA ou impostos?',
    answer:
      'Sim, o bloco 4 ("Somar ou subtrair percentagem") está desenhado precisamente para casos como aplicar um IVA de 23% a um preço base ou calcular uma retenção de IRS.',
  },
  {
    question: 'Lida com números decimais e negativos?',
    answer:
      'Com certeza. Pode introduzir números decimais (utilizando ponto) e também funcionará com valores negativos se precisar de analisar balanços contabilísticos em prejuízo.',
  },
  {
    question: 'Posso copiar os resultados?',
    answer:
      'Sim, cada bloco conta com um botão no quadro do resultado que copia instantaneamente a cifra para a área de transferência do seu dispositivo para poder colá-la noutra app ou documento.',
  },
];

const howToData = [
  {
    name: 'Identifique o seu problema matemático',
    text: 'Leia os títulos dos 4 blocos e escolha o que coincide com o que quer saber (Ex. Quanto é 20% de 50? -> Bloco 1).',
  },
  {
    name: 'Introduza os valores',
    text: 'Preencha os campos "X" e "Y". Não se preocupe com a ordem, a frase de cada bloco guia-o visualmente.',
  },
  {
    name: 'Copie o resultado instantâneo',
    text: 'O valor aparecerá em tempo real em baixo à medida que escreve. Prima o ícone de copiar se desejar levá-lo para outra parte.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes e Referências',
  bibliography: [
    {
      name: 'Cálculo de Percentagens - Wikipedia',
      url: 'https://pt.wikipedia.org/wiki/Percentagem',
    },
    {
      name: 'Conceitos Matemáticos Básicos - Khan Academy',
      url: 'https://pt.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-percents/v/describing-the-meaning-of-percent',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Percentagem 4 em 1: Domine os Cálculos Rápidos',
      level: 2,
    },
    {
      type: 'title',
      text: 'Para que serve uma calculadora de percentagens múltipla?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Calcular percentagens é uma das operações matemáticas mais comuns no nosso dia a dia. Desde calcular o desconto nuns saldos, conhecer a gorjeta adequada num restaurante, até determinar a margem de lucro num negócio ou o juro de um empréstimo. Apesar de serem operações quotidianas, nem sempre é fácil realizá-las mentalmente ou recordar a fórmula exata.',
    },
    {
      type: 'paragraph',
      html: 'A nossa calculadora de percentagens 4 em 1 agrupa os cenários mais procurados. Já não precisa de pesquisar no Google "como tirar 20 por cento" ou "fórmula para cálculo de percentagem". Tem as quatro operações essenciais num único lugar, de forma interativa e com resultados instantâneos.',
    },
    {
      type: 'title',
      text: 'Revendo os 4 casos de utilização mais habituais',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para lhe facilitar a vida, separámos a ferramenta em quatro blocos visuais claros que resolvem os problemas reais com que nos deparamos diariamente:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Quanto é X% de Y?',
      html: '<p><strong>O caso clássico.</strong> Útil para calcular descontos ou gorjetas. Se quer saber quanto é 15% de 120€, esta é a sua ferramenta. A fórmula subjacente simplesmente divide a percentagem por 100 e multiplica-a pelo valor total.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Que percentagem é X de Y?',
      html: '<p><strong>Ideal para proporções.</strong> Se tirou 45 pontos num exame de 60, que nota tem sobre 100? Esta função divide a parte pelo total e multiplica-a por cem, dando-lhe o peso relativo exato.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Aumento ou Diminuição Percentual',
      html: '<p><strong>Perfeito para finanças e analítica.</strong> Quanto subiu a renda desde o ano passado? Se antes pagava 800€ e agora 840€, esta função dir-lhe-á que sofreu um aumento de 5%. Mede o crescimento ou decréscimo entre dois valores.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Somar ou Subtrair percentagem a um valor',
      html: '<p><strong>Super útil para o IVA.</strong> Se tem um preço base (ex. 100€) e precisa de lhe adicionar 23% de IVA, esta calculadora dar-lhe-á diretamente os 123€ finais sem ter de fazer operações intermédias. Da mesma forma, serve para aplicar um desconto direto (ex. subtrair 20%).</p>',
    },
    {
      type: 'title',
      text: 'Mitos comuns sobre o cálculo de percentagens',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitas vezes bloqueamos ao ver percentagens grandes ou decimais, mas há alguns "truques" matemáticos que podem facilitar-lhe a vida. O mais famoso é a <strong>reversibilidade das percentagens</strong>.',
    },
    {
      type: 'tip',
      title: 'O truque da reversibilidade',
      html: '<p>Sabia que X% de Y é exatamente igual a Y% de X? Por exemplo, se lhe pedirem para calcular 18% de 50 mentalmente, pode parecer complicado. Mas se o inverter, 50% de 18 é muito fácil: é 9! Isto aplica-se a absolutamente qualquer número e é um salva-vidas incrível no dia a dia.</p>',
    },
    {
      type: 'title',
      text: 'Porque falhamos ao calcular crescimentos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um dos erros mais comuns ocorre no caso 3: o aumento ou diminuição percentual. Imaginemos que uma ação na bolsa custa 100€, desce 50% e no dia seguinte sobe 50%. A intuição diz-nos que volta a valer 100€, mas é incorreto.',
    },
    {
      type: 'paragraph',
      html: 'Se descer 50% de 100€, o seu novo valor é 50€. Se a partir desses 50€ subir 50%, o incremento é metade de 50 (25€). Portanto, o preço final seria 75€. Este é um exemplo clássico de porque é que as subidas e descidas percentuais não são assimétricas e porque calculadoras dinâmicas como esta previnem erros financeiros graves.',
    },
    {
      type: 'title',
      text: 'Uso profissional e académico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A nossa interface está livre de distrações e desenhada para <strong>trabalhar rápido</strong>. Pode tê-la num separador fixo do navegador, tabular agilmente entre os campos e, graças ao botão de copiar junto ao resultado, trasladar o dado exato para o seu Excel ou Google Sheets sem risco de erros de digitação.',
    },
    {
      type: 'list',
      items: [
        'Comércio web e lojas físicas: Cálculo rápido de PVP aplicando margens comerciais e somando o IVA.',
        'Gestão de recursos humanos: Determinação da disparidade salarial, retenções de IRS e aumentos de ordenado referenciados ao IPC.',
        'Educação universitária: Professores que nivelam classificações ou estudantes de áreas científicas a analisar o desvio das suas experiências.',
        'Marketing digital: Medição do CTR (Click Through Rate), ROAS (Return on Ad Spend) ou Taxa de Conversão em eCommerce.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Calculadora de Percentagem',
    labelCase1Title: 'Caso 1',
    labelCase1Question: 'Quanto é X% de Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Fórmula: (X / 100) × Y',
    labelCase2Title: 'Caso 2',
    labelCase2Question: 'Que percentagem é X de Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Fórmula: (X / Y) × 100',
    labelCase3Title: 'Caso 3',
    labelCase3Question: 'Diferença percentual entre dois valores',
    labelCase3Placeholder1: 'Valor 1',
    labelCase3Placeholder2: 'Valor 2',
    labelCase3Formula: 'Fórmula: ((Valor 2 - Valor 1) / |Valor 1|) × 100',
    labelCase4Title: 'Caso 4',
    labelCase4Question: 'Somar ou subtrair percentagem a um valor',
    labelCase4Placeholder1: 'Valor',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Fórmula: Valor ± (Valor × (% / 100))',
    labelCase4AddLabel: 'Soma (Valor + %)',
    labelCase4SubtractLabel: 'Subtração (Valor - %)',
    labelResult: 'Resultado',
    labelDifference: 'Diferença',
    labelCopyTooltip: 'Copiar resultado',
    labelFormula: 'Fórmula',
    percentSymbol: '%',
  },
};
