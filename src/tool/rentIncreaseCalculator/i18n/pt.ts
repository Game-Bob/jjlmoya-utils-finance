import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'calculadora-aumento-aluguer-espanha-ipc';
const title = 'Calculadora de Subida de Aluguer Espanha IPC: Limite de 3%';
const description = 'Calcule a atualização da sua renda com o IPC ou o limite legal de 3% da Lei de Habitação espanhola.';

const faqData = [
  {
    question: 'Qual é a subida máxima de aluguer permitida em 2024 e 2025?',
    answer: 'De acordo com a Lei 12/2023 pelo Direito à Habitação, para os anos 2024 e 2025, o incremento máximo anual da renda em contratos de habitação permanente está limitado legalmente a 3%.',
  },
  {
    question: 'É obrigatório subir o aluguer todos os anos com o IPC?',
    answer: 'Não é obrigatório por lei. Para que a renda suba, o contrato deve incluir uma cláusula explícita que mencione a atualização anual.',
  },
  {
    question: 'Com quanta antecedência deve o senhorio notificar a subida da renda?',
    answer: 'O senhorio deve comunicar a subida por escrito ao inquilino com, pelo menos, um mês de antecedência (30 dias).',
  },
  {
    question: 'O que acontece se o IPC for superior ao limite legal de 3%?',
    answer: 'Mesmo que o IPC real seja superior, o proprietário de uma habitação habitual não pode exigir legalmente uma subida superior a 3% durante 2024 e 2025.',
  },
];

const howToData = [
  {
    name: 'Introduza o seu aluguer atual',
    text: 'Escreva a mensalidade que paga atualmente.',
  },
  {
    name: 'Escolha o modo de cálculo',
    text: 'Selecione o Limite Legal de 3% (recomendado) ou introduza uma percentagem manual.',
  },
  {
    name: 'Consulte os resultados',
    text: 'Obterá a nova renda estimada, o incremento mensal e o sobrecusto anual.',
  },
  {
    name: 'Copie o resumo',
    text: 'Gere um relatório rápido para enviar ao proprietário ou guardar nas suas notas.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Calculadora de Subida de Aluguer 2026 Espanha: Limite 3%',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Em Espanha, o <strong>Índice de Preços no Consumidor (IPC)</strong> tem sido tradicionalmente o termómetro utilizado para ajustar o preço do aluguer. No entanto, a nova Lei de Habitação introduziu limites importantes.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Calculadora de Aumento de Aluguer',
    labelDescription: 'Atualize a sua renda conforme o IPC ou aplique o limite legal de 3% de forma segura.',
    labelCurrentRent: 'Aluguer Atual',
    labelCurrentRentPlaceholder: 'Ex. 800',
    labelIncrementType: 'Modo de Atualização',
    labelLegalLimit: 'Limite Lei Habitação (3%)',
    labelManualIncrement: 'Incremento Manual (%)',
    labelManualPercentagePlaceholder: 'Ex. 2.5',
    labelNewRentEstimate: 'Nova Renda Estimada',
    labelMonthlyIncrease: 'Incremento Mensal',
    labelYearlyExtra: 'Sobrecusto Anual',
    labelLegalBadge: 'Limitado a 3% segundo a Lei 12/2023',
    labelCopyButton: 'Copiar para o proprietário',
    labelCopySuccess: 'Copiado!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'pt-PT',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
