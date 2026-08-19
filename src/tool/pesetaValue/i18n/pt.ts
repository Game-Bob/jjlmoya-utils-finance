import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'conversor-pesetas-euros-valor-2026';
const title = 'Conversor de pesetas para euros: valor em 2026';
const description = 'Converta pesetas espanholas em euros à taxa fixa de 166,386 pesetas por euro e estime o poder de compra até 2026 com o IPC espanhol.';
const faq = [
  { question: 'Quantos euros são 1.000 pesetas?', answer: '1.000 pesetas correspondem a 6,01 euros à taxa de conversão fixa. A calculadora também mostra uma estimativa separada do poder de compra dessa quantia no ano escolhido.' },
  { question: 'Quantos euros são um milhão de pesetas?', answer: 'Um milhão de pesetas corresponde a 6.010,12 euros à taxa fixa. A estimativa do poder de compra em 2026 depende do ano em que o valor foi usado.' },
  { question: 'Como converter pesetas para euros?', answer: 'Divida o valor em pesetas por 166,386. Por exemplo, 100 pesetas são 0,60 euros e 10.000 pesetas são 60,10 euros.' },
  { question: 'Quanto valeriam as pesetas antigas em 2026?', answer: 'Há duas respostas. A conversão fixa dá o valor legal em euros e o resultado corrigido pelo IPC estima quantos euros de 2026 seriam necessários para um cabaz médio semelhante.' },
  { question: 'A calculadora avalia uma moeda ou nota de coleção?', answer: 'Não. Calcula conversão monetária e poder de compra médio. Uma moeda rara ou uma nota de coleção pode ter outro valor conforme o estado, a raridade e a procura.' },
  { question: 'Que anos usa o conversor de pesetas?', answer: 'Pode escolher um ano de origem entre 1980 e 2026. A referência de 2026 usa os dados de IPC publicados mais recentes e ainda não é uma média anual completa.' },
  { question: 'A estimativa do poder de compra é um preço exato?', answer: 'Não. É uma comparação média baseada no IPC, não um preço exato de habitação, salários, alimentação, energia ou de uma compra específica.' },
];
const howTo = [
  { name: 'Introduzir o valor em pesetas', text: 'Escreva o valor de um recibo, nota, moeda ou documento histórico.' },
  { name: 'Escolher o ano', text: 'Selecione a década e depois o ano em que o valor foi utilizado.' },
  { name: 'Ler a conversão fixa', text: 'Veja o valor nominal obtido ao dividir as pesetas por 166,386.' },
  { name: 'Comparar o poder de compra', text: 'Compare a conversão fixa com a estimativa do poder de compra médio em 2026.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: 'Valor histórico', labelAmountHint: 'Escolha um ponto de partida', labelOriginYear: 'Ano de origem', labelOriginYearHint: 'Média anual do IPC quando disponível', labelReferenceYear: 'Referência de 2026 até à data', labelNominalEuros: 'Conversão fixa', labelTodayValue: 'Poder de compra estimado', labelPurchasingPowerChange: 'Alteração do poder de compra', labelNominalDifference: 'Diferença da conversão', labelConversionRate: 'Pesetas por euro', labelCpiMethod: 'Multiplicador do IPC', labelPreset100: '100 ptas', labelPreset1000: '1.000 ptas', labelPreset10000: '10.000 ptas', labelPreset100000: '100.000 ptas', labelPesetas: 'pesetas', labelEuro: 'euros', labelFrom: 'De', labelTo: 'Até', labelOpenYears: 'Abrir anos de origem', labelCloseYears: 'Fechar anos de origem', labelDecade: 'Escolher uma década', labelCoin: 'moeda', labelBanknote: 'nota', labelCashPieces: 'dinheiro', labelState: 'evolução do valor', labelStatePositive: 'aumentou', labelStateNeutral: 'sem alteração', labelStateNegative: 'diminuiu', labelReset: 'Repor exemplo', currencyLocale: 'pt-PT' },
  seo: [
    { type: 'title', text: 'Pesetas para euros: duas respostas para a mesma pergunta', level: 2 },
    { type: 'paragraph', html: 'Se tem um preço antigo, salário, recibo, nota ou moeda em pesetas espanholas, este conversor dá duas respostas. Primeiro mostra a conversão fixa para euros e depois estima o que esse valor representa em poder de compra de 2026 segundo a evolução dos preços em Espanha.' },
    { type: 'title', text: 'Conversões comuns de pesetas para euros', level: 2 },
    { type: 'paragraph', html: 'A taxa fixa é sempre de 166,386 pesetas por 1 euro. O ano não altera esta conversão nominal.' },
    { type: 'table', headers: ['Valor antigo', 'Conversão fixa'], rows: [['1 peseta', '0,01 euro'], ['25 pesetas', '0,15 euro'], ['50 pesetas', '0,30 euro'], ['100 pesetas', '0,60 euro'], ['500 pesetas', '3,01 euros'], ['1.000 pesetas', '6,01 euros'], ['2.000 pesetas', '12,02 euros'], ['5.000 pesetas', '30,05 euros'], ['10.000 pesetas', '60,10 euros'], ['1 milhão de pesetas', '6.010,12 euros']] },
    { type: 'title', text: 'Quanto valiam as pesetas em 2026?', level: 2 },
    { type: 'paragraph', html: 'O resultado corrigido pelo IPC responde a uma pergunta diferente da conversão para euros. Estima quantos euros de 2026 permitiriam comprar um cabaz médio semelhante ao que o valor escolhido comprava no seu ano de origem. A referência de 2026 usa os dados publicados mais recentes até à data e não uma média anual concluída.' },
    { type: 'table', headers: ['Resultado', 'Significado'], rows: [['Conversão fixa', 'O valor nominal exato em euros à taxa oficial.'], ['Valor corrigido pelo IPC', 'Uma estimativa do poder de compra médio equivalente em 2026.'], ['Diferença', 'A distância entre a conversão fixa e a estimativa do IPC.']] },
    { type: 'title', text: 'Como calcular um valor antigo em pesetas', level: 2 },
    { type: 'list', items: ['Introduza o valor do recibo, nota, moeda ou documento.', 'Escolha o ano em que o valor foi utilizado ou recebido.', 'Use a conversão fixa para obter a equivalência direta em euros.', 'Use o valor do IPC para compreender o poder de compra histórico.', 'Leia a diferença como contexto da inflação e não como previsão do seu preço pessoal.'] },
    { type: 'title', text: 'Moedas e notas não têm automaticamente este valor de coleção', level: 2 },
    { type: 'paragraph', html: 'Esta ferramenta calcula moeda e inflação, não uma avaliação de numismática. Uma moeda rara ou uma nota antiga pode ter um valor de mercado diferente conforme o ano, o estado, a raridade e a procura.' },
    { type: 'tip', title: 'O ano altera o poder de compra, não a taxa de câmbio', html: 'A conversão oficial continua a ser 166,386 pesetas por euro. Só a comparação do IPC muda com o ano de origem e descreve sempre um cabaz médio de consumo.' },
  ],
  faq, bibliography, howTo, schemas,
};
