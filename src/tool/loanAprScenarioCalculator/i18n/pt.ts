import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";
import type { LoanAprScenarioCalculatorUI } from "../ui";

const ui: LoanAprScenarioCalculatorUI = {
  labelScenarioA: "Oferta A",
  labelScenarioB: "Oferta B",
  labelScenarioName: "Nome da oferta",
  labelCurrency: "Moeda",
  labelApproximateRates:
    "Fatores aproximados para planeamento, não taxas de câmbio em tempo real.",
  labelPrincipal: "Montante emprestado",
  labelTerm: "Prazo de reembolso",
  labelMonths: "meses",
  labelInputBasis: "Que dado conhece?",
  labelAnnualRate: "Taxa nominal anual",
  labelMonthlyPayment: "Prestação mensal conhecida",
  labelUpfrontFees: "Comissões iniciais",
  labelMonthlyFees: "Comissões mensais",
  labelFinalFees: "Comissão final",
  labelOfferNameA: "Oferta A",
  labelOfferNameB: "Oferta B",
  labelRateMode: "Conheço a taxa",
  labelPaymentMode: "Conheço a prestação",
  labelPreset: "Começar uma comparação",
  labelPresetBalanced: "Ofertas equilibradas",
  labelPresetLowFee: "Taxa baixa com comissões",
  labelPresetLongTerm: "Prazo mais longo",
  labelReset: "Repor valores",
  labelCopy: "Copiar comparação",
  labelCopied: "Comparação copiada",
  labelEffectiveApr: "Custo anual efetivo",
  labelNominalRate: "Taxa nominal",
  labelMonthlyPaymentResult: "Prestação mensal",
  labelTotalPaid: "Total pago",
  labelTotalFees: "Comissões do cenário",
  labelFinanceCost: "Custo acima do capital",
  labelNetCashReceived: "Valor recebido após comissões iniciais",
  labelWinner: "Qual oferta custa menos?",
  labelLowerCost: "Custo efetivo inferior",
  labelHigherCost: "Custo efetivo superior",
  labelTie: "Quase iguais",
  labelNeedValidInputs: "São necessários dados válidos",
  labelInvalidPrincipal:
    "O montante deve ser superior a zero e às comissões iniciais.",
  labelInvalidTerm: "Use um prazo inteiro entre 1 e 600 meses.",
  labelInvalidFees: "As comissões não podem ser negativas.",
  labelInvalidPayment:
    "Introduza uma prestação mensal positiva que consiga reembolsar o valor líquido recebido.",
  labelInvalidRate: "Use uma taxa nominal anual entre 0% e 100%.",
  labelNoComparison: "Preencha as duas ofertas para as comparar.",
  labelTimeline: "Calendário de pagamentos",
  labelStart: "Início",
  labelMonthly: "Cada mês",
  labelEnd: "Último mês",
  labelFormula: "Como funciona a comparação",
  labelFormulaText:
    "O custo anual efetivo é a taxa mensal anualizada que iguala o valor recebido aos pagamentos e comissões descontados.",
  labelApproximation:
    "A estimativa assume prestações mensais iguais, sem período de carência e apenas as comissões introduzidas. Não substitui a TAEG oficial do credor.",
  labelScenarioSummary: "Resumo do cenário",
  currencyCode: "EUR",
  currencyLocale: "pt-PT",
};

const faq = [
  {
    question:
      "Qual é a diferença entre a taxa de juro e o custo anual efetivo?",
    answer:
      "A taxa nominal descreve os juros sobre o saldo. O custo anual efetivo também considera o valor e o momento das comissões iniciais, mensais e finais introduzidas.",
  },
  {
    question: "Posso introduzir uma prestação mensal em vez da taxa de juro?",
    answer:
      "Sim. Escolha a prestação mensal conhecida para essa oferta. A calculadora infere a taxa mensal compatível com o valor recebido, os pagamentos e as comissões.",
  },
  {
    question: "Qual é a oferta mais barata?",
    answer:
      "Compare primeiro o custo anual efetivo e depois verifique o total pago e o valor recebido. Uma percentagem menor pode ter um custo total superior quando o prazo ou o montante diferem.",
  },
  {
    question: "É a TAEG oficial do credor?",
    answer:
      "Não. É uma estimativa transparente baseada nos seus dados. Os credores e as jurisdições podem tratar de forma diferente impostos, seguros, datas de pagamento e outras despesas.",
  },
];

const howTo = [
  {
    name: "Introduza montante e prazo",
    text: "Indique o valor que receberia e o número de prestações mensais de cada oferta.",
  },
  {
    name: "Escolha o dado conhecido",
    text: "Introduza a taxa nominal anual ou a prestação mensal, conforme os dados da oferta.",
  },
  {
    name: "Adicione todas as comissões",
    text: "Inclua comissões iniciais, mensais e finais para representar o fluxo completo.",
  },
  {
    name: "Leia a comparação",
    text: "Use o custo anual efetivo e verifique o total pago e o valor recebido antes de decidir.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculadora de cenários TAEG de empréstimo",
    description:
      "Compara dois cenários de empréstimo com taxas, prestações e comissões.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Comparar duas ofertas de empréstimo",
    description:
      "Modele os fluxos de dois empréstimos e compare o custo anual efetivo.",
    step: howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  },
];

export const content: ToolLocaleContent<LoanAprScenarioCalculatorUI> = {
  slug: "calculadora-cenarios-taeg-emprestimo",
  title: "Calculadora de cenários TAEG de empréstimo",
  description:
    "Compare duas ofertas de empréstimo com juros, calendário de pagamentos e comissões para estimar o custo anual efetivo.",
  ui,
  faq,
  bibliography,
  howTo,
  schemas,
  seo: [
    {
      type: "title",
      text: "Compare empréstimos pelo custo anual efetivo",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<p>Uma taxa anunciada baixa pode esconder uma comissão de abertura, um encargo mensal ou um custo final. Esta calculadora transforma os dados de duas ofertas em cenários de fluxo de caixa comparáveis.</p>",
    },
    { type: "title", text: "O que inclui a estimativa", level: 3 },
    {
      type: "paragraph",
      html: "<p>Para cada oferta, introduza o montante, o prazo, a taxa nominal ou a prestação mensal conhecida e as comissões cobradas em momentos diferentes. A calculadora encontra a taxa mensal que equilibra o valor recebido com os pagamentos e comissões descontados, e anualiza-a.</p>",
    },
    {
      type: "paragraph",
      html: "<p>O preço do crédito é mais amplo do que a taxa de juro. O resultado é uma estimativa porque a TAEG oficial pode seguir regras locais e incluir pressupostos ausentes do seu cenário.</p>",
    },
    { type: "title", text: "Como ler o resultado", level: 3 },
    {
      type: "list",
      items: [
        "Compare o custo anual efetivo quando montante e prazo são semelhantes.",
        "Verifique o total pago para perceber o impacto absoluto.",
        "Confirme o valor recebido depois das comissões iniciais.",
        "Use o calendário para ver quando surge cada custo.",
      ],
    },
    {
      type: "tip",
      title: "Use a documentação do credor como referência final",
      html: "<p>Num contrato real, compare a TAEG oficial com os mesmos pressupostos. Pergunte por seguros, impostos, taxas variáveis, custos de amortização antecipada e encargos não representados.</p>",
    },
    { type: "title", text: "Limites de um cenário", level: 3 },
    {
      type: "paragraph",
      html: "<p>A ferramenta assume prestações mensais iguais, sem período de carência e comissões no início, durante o prazo ou no último mês. Não certifica capacidade financeira, aprovação, legalidade ou TAEG oficial.</p>",
    },
  ],
};
