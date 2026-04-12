import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'spain-lottery-optimizer';
const title = 'Spain Lottery Optimizer and Probability Calculator';
const description = 'Analyze your odds in Spain\'s Christmas Lottery, Euromillones, and Bonoloto. Calculate the optimal number of tickets and expected value of your bet.';

const faqData = [
  {
    question: 'What is mathematical expectancy in lotteries?',
    answer: 'It is the average value you expect to win for each euro wagered. In almost all lotteries, mathematical expectancy is negative (you typically lose €0.50 per €1 wagered), meaning in the long run, the house always wins.',
  },
  {
    question: 'Is it better to play many different numbers or multiple tickets of the same?',
    answer: 'If you want to win "something," diversifying numbers increases your probability of winning smaller prizes. If you want the jackpot, playing a single number gives you the same odds, but a higher prize if it hits.',
  },
  {
    question: 'Is Spain\'s Christmas Lottery really worth playing?',
    answer: 'From a purely mathematical perspective, no. Only 70% of funds are returned. However, it has much higher odds of winning something (1 in 100,000) compared to Euromillones (1 in 140 million).',
  },
  {
    question: 'Can I improve my odds with statistics?',
    answer: 'No. Lottery draws are independent random processes. A number coming out yesterday has no influence on whether it comes out today. All numbers have exactly the same probability in each draw.',
  },
  {
    question: 'What does "difficulty" mean in the comparison table?',
    answer: 'It\'s a relative measure of how hard it is to win the jackpot. Accessible (under 200k): more realistic odds. Difficult (under 20M): remote odds. Extreme (over 20M): virtually impossible.',
  },
];

const howToData = [
  {
    name: 'Select the lottery type',
    text: 'Choose between Spain\'s Christmas Lottery, Primitiva, Euromillones or Bonoloto to analyze their specific rules.',
  },
  {
    name: 'Define your investment',
    text: 'Indicate how many tickets you plan to buy for this particular draw.',
  },
  {
    name: 'Analyze critical probabilities',
    text: 'Check your actual chances of winning the jackpot versus smaller prizes or getting your money back.',
  },
  {
    name: 'Evaluate risk/reward',
    text: 'Review the expected value to understand how much money you\'re statistically "giving away" per euro invested.',
  },
];

const bibliographyData = [
  {
    name: 'Spain\'s Lottery Authority (SELAE) - Transparency Portal',
    url: 'https://www.selae.es/es/web-corporativa/responsabilidad-social/portal-de-transparencia/portal-de-transparencia',
  },
  {
    name: 'Mathematics of Spain\'s Christmas Lottery - Royal Spanish Mathematical Society',
    url: 'https://rsme.es/solucion-al-desafio-matematico-de-la-loteria-de-navidad-en-el-pais/',
  },
  {
    name: 'Kelly Criterion and Risk Management - Investopedia',
    url: 'https://www.investopedia.com/terms/k/kellycriterion.asp',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Real Odds of Winning Spain\'s Lotteries',
  },
  {
    type: 'paragraph',
    html: 'Spain\'s lotteries have <strong>negative mathematical expectations</strong>, meaning you always lose money over time. Spain\'s Christmas Lottery returns 70% of funds, while Euromillones returns only 50%.',
  },
  {
    type: 'title',
    text: 'Difficulty and Profitability Comparison',
  },
  {
    type: 'paragraph',
    html: '<strong>Christmas Lottery and Children\'s Lottery</strong>: 1 in 100,000 chance of winning (much higher than others). <strong>Euromillones</strong>: 1 in 139 million. <strong>Primitiva and Bonoloto</strong>: 1 in 13-139 million depending on the game.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Christmas Lottery',
    description: 'The largest prize draw in the world. High probability of winning something.',
  },
  nino: {
    name: 'Children\'s Lottery',
    description: 'Triple the chances of getting your money back compared to Christmas.',
  },
  euromillones: {
    name: 'Euromillones',
    description: 'Astronomical prizes, nearly impossible odds.',
  },
  primitiva: {
    name: 'Primitiva',
    description: 'Spain\'s oldest lottery. Difficult but cheaper.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'The most economical. Ideal for daily play on a tight budget.',
  },
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Sources and References',
  ui: {
    gameTranslations,
    labelTitle: 'Lottery Optimizer',
    labelDescription: 'Compare draws, calculate your expected value, and discover the optimal number of tickets to play smart.',
    labelSelectGame: 'Select a lottery',
    labelConfigurePlay: 'Configure Your Play',
    labelAdjustQuantity: 'Adjust the number of participations to see your real probability.',
    labelTotalInvestment: 'Total Investment',
    labelTickets: 'Number of Tickets / Bets',
    labelUnits: 'units',
    labelExposureAnalysis: 'Exposure Analysis',
    labelSelectLottery: 'Select a lottery to see the risk analysis.',
    labelOptimalCutoff: 'Suggested Cutoff Point',
    labelProbabilitySuccess: 'Success Probability',
    labelExpectedValue: 'Expected Value (EV)',
    labelReturnTheoretical: 'Theoretical return per play made.',
    labelSocialReturnIndex: 'Social Profitability Index',
    labelLow: 'Low',
    labelMedium: 'Medium',
    labelHigh: 'High',
    labelComparison: 'Prize Comparison',
    labelLottery: 'Lottery',
    labelCost: 'Cost',
    labelTypicalPrize: 'Typical Prize',
    labelDifficulty: 'Difficulty',
    labelAccessible: 'Accessible',
    labelDifficult: 'Difficult',
    labelExtreme: 'Extreme',
    labelNote: 'Note: Christmas and Children\'s Lottery prizes are per ticket (20€). Euromillones, Primitiva, and Bonoloto are typical jackpots for first prize.',
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyLocale: 'en-US',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
