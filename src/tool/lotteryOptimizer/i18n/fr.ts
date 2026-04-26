import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'optimiseur-loterie-espagne';
const title = 'Optimiseur de Loteries Espagne et Calculateur de Probabilités';
const description = 'Analysez vos chances à la Loterie de Noël espagnole, Euromillones et Bonoloto. Calculez le nombre optimal de billets et la valeur attendue de votre pari.';

const faqData = [
  {
    question: 'Qu\'est-ce que l\'espérance mathématique à la loterie?',
    answer: 'C\'est la valeur moyenne que vous vous attendez à gagner pour chaque euro misé. Dans presque toutes les loteries, l\'espérance mathématique est négative (vous perdez généralement 0,50€ par 1€ misé), ce qui signifie qu\'à long terme, la maison gagne toujours.',
  },
  {
    question: 'Est-il mieux de jouer de nombreux numéros différents ou plusieurs billets du même?',
    answer: 'Si vous voulez gagner "quelque chose", diversifier les numéros augmente votre probabilité de gagner des prix mineurs. Si vous visez le gros lot, jouer un seul numéro vous donne les mêmes chances, mais un prix plus élevé s\'il sort.',
  },
  {
    question: 'La Loterie de Noël espagnole vaut-elle vraiment le coup?',
    answer: 'D\'un point de vue purement mathématique, non. Seuls 70% des fonds sont retournés. Cependant, elle a des chances beaucoup plus élevées de gagner quelque chose (1 sur 100 000) comparé à Euromillones (1 sur 140 millions).',
  },
  {
    question: 'Puis-je améliorer mes chances avec les statistiques?',
    answer: 'Non. Les tirages de loterie sont des processus aléatoires indépendants. Un numéro sorti hier n\'a aucune influence sur sa sortie aujourd\'hui. Tous les numéros ont exactement la même probabilité à chaque tirage.',
  },
  {
    question: 'Que signifie la "difficulté" dans le tableau comparatif?',
    answer: 'C\'est une mesure relative de la difficulté à remporter le gros lot. Accessible (moins de 200k): probabilités plus réalistes. Difficile (moins de 20M): probabilités éloignées. Extrême (plus de 20M): pratiquement impossible.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez le type de loterie',
    text: 'Choisissez entre la Loterie de Noël espagnole, Primitiva, Euromillones ou Bonoloto pour analyser leurs règles spécifiques.',
  },
  {
    name: 'Définissez votre investissement',
    text: 'Indiquez combien de billets vous envisagez d\'acheter pour ce tirage particulier.',
  },
  {
    name: 'Analysez les probabilités critiques',
    text: 'Vérifiez vos chances réelles de gagner le gros lot par rapport aux prix mineurs ou récupérer votre argent.',
  },
  {
    name: 'Évaluez le risque/récompense',
    text: 'Consultez la valeur attendue pour comprendre combien d\'argent vous "donnez" statistiquement par euro investi.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Vraies Probabilités de Gagner aux Loteries Espagnoles',
  },
  {
    type: 'paragraph',
    html: 'Les loteries espagnoles ont des <strong>espérances mathématiques négatives</strong>, ce qui signifie que vous perdez toujours de l\'argent au fil du temps. La Loterie de Noël retourne 70% des fonds, tandis qu\'Euromillones ne retourne que 50%.',
  },
  {
    type: 'title',
    text: 'Comparaison de Difficulté et de Rentabilité',
  },
  {
    type: 'paragraph',
    html: '<strong>Loterie de Noël et Loterie des Enfants</strong>: 1 sur 100 000 de chances de gagner (bien plus élevé que les autres). <strong>Euromillones</strong>: 1 sur 139 millions. <strong>Primitiva et Bonoloto</strong>: 1 sur 13-139 millions selon le jeu.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Loterie de Noël',
    description: 'Le plus grand tirage de prix du monde. Probabilité élevée de gagner quelque chose.',
  },
  nino: {
    name: 'Loterie des Enfants',
    description: 'Triple les chances de récupérer votre argent par rapport à Noël.',
  },
  euromillones: {
    name: 'Euromillones',
    description: 'Des prix astronomiques, des probabilités quasi impossibles.',
  },
  primitiva: {
    name: 'Primitiva',
    description: 'La plus ancienne loterie d\'Espagne. Difficile mais moins chère.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'La plus économique. Idéale pour jouer au quotidien avec un petit budget.',
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    gameTranslations,
    labelTitle: 'Optimiseur de Loteries',
    labelDescription: 'Comparez les tirages, calculez votre valeur attendue et découvrez le nombre optimal de billets pour jouer intelligemment.',
    labelSelectGame: 'Sélectionnez une loterie',
    labelConfigurePlay: 'Configurez Votre Jeu',
    labelAdjustQuantity: 'Ajustez le nombre de participations pour voir votre probabilité réelle.',
    labelTotalInvestment: 'Investissement Total',
    labelTickets: 'Nombre de Billets / Mises',
    labelUnits: 'unités',
    labelExposureAnalysis: 'Analyse d\'Exposition',
    labelSelectLottery: 'Sélectionnez une loterie pour voir l\'analyse des risques.',
    labelOptimalCutoff: 'Point de Coupure Suggéré',
    labelProbabilitySuccess: 'Probabilité de Succès',
    labelExpectedValue: 'Valeur Attendue (VE)',
    labelReturnTheoretical: 'Retour théorique par jeu effectué.',
    labelSocialReturnIndex: 'Indice de Rentabilité Sociale',
    labelLow: 'Basse',
    labelMedium: 'Moyenne',
    labelHigh: 'Haute',
    labelComparison: 'Comparaison des Prix',
    labelLottery: 'Loterie',
    labelCost: 'Coût',
    labelTypicalPrize: 'Prix Typique',
    labelDifficulty: 'Difficulté',
    labelAccessible: 'Accessible',
    labelDifficult: 'Difficile',
    labelExtreme: 'Extrême',
    labelNote: 'Remarque: Les prix de la Loterie de Noël et des Enfants sont par billet (20€). Euromillones, Primitiva et Bonoloto sont des gros lots typiques pour le premier prix.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
