import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'calculateur-interets-composes';
const title = 'Calculateur d\'Intérêts Composés | Visualisez votre Richesse Future';
const description =
  'Découvrez comment de petits investissements deviennent de grandes fortunes. L\'outil définitif pour planifier votre liberté financière et votre retraite.';

const faqData = [
  {
    question: 'Qu\'est-ce que l\'intérêt composé ?',
    answer:
      'C\'est l\'intérêt calculé sur le capital initial et également sur les intérêts accumulés des périodes précédentes. Cela génère une croissance exponentielle de l\'investissement au fil du temps.',
  },
  {
    question: 'Quelle est la différence avec l\'intérêt simple ?',
    answer:
      "Avec l'intérêt simple, les intérêts sont calculés uniquement sur le capital initial. Avec l'intérêt composé, les intérêts sont réinvestis, ce qui signifie que 'vos intérêts génèrent plus d'intérêts'.",
  },
  {
    question: "Qu'est-ce que la 'Règle des 72' ?",
    answer:
      "C'est une formule rapide pour estimer combien de temps il faudra pour doubler un investissement : divisez 72 par le taux de rendement annuel. Par exemple, à 8% par an, vous doublez votre argent en 9 ans.",
  },
  {
    question: 'Pourquoi est-il important de commencer à investir jeune ?',
    answer:
      "En raison de l'effet exponentiel, le facteur le plus déterminant n'est pas le montant d'argent épargné, mais le temps. Commencer quelques années plus tôt peut aboutir à une richesse finale beaucoup plus grande grâce à la capitalisation.",
  },
];

const howToData = [
  {
    name: 'Saisir le capital initial',
    text: 'Entrez le montant d\'argent avec lequel vous allez démarrer votre plan d\'investissement.',
  },
  {
    name: 'Définir les contributions périodiques',
    text: 'Indiquez combien d\'argent vous économiserez et investirez chaque mois en plus.',
  },
  {
    name: 'Estimer le rendement annuel',
    text: 'Entrez le pourcentage de bénéfice annuel que vous espérez obtenir (ex. 7% pour le S&P 500 historique).',
  },
  {
    name: 'Ajuster l\'horizon temporel',
    text: 'Choisissez combien d\'années vous maintiendrez l\'investissement pour visualiser la croissance exponentielle de votre capital.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Khan Academy: Interest and Debt',
      url: 'https://www.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial',
    },
    {
      name: 'Banque de France : Éducation financière',
      url: 'https://www.banque-france.fr/fr/la-banque-de-france/notre-mission/education-economique-financiere-et-statistique',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Magie de l\'Intérêt Composé : Construisez Votre Richesse Exponentiellement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein l\'a appelée la "huitième merveille du monde". L\'<strong>intérêt composé</strong> est le mécanisme le plus puissant pour construire une richesse à long terme. Vous n\'avez pas besoin d\'être un expert en finance pour l\'utiliser : vous avez juste besoin de temps, de patience et d\'argent investi.',
    },
    {
      type: 'title',
      text: 'Intérêt Simple vs Composé : La Métaphore de la Boule de Neige',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Imaginez une boule de neige au sommet d\'une colline. L\'<strong>intérêt simple</strong> est comme la faire rouler vers le bas et devoir ajouter manuellement de la neige tous les mètres pour qu\'elle grandisse. L\'<strong>intérêt composé</strong> est comme la laisser rouler seule : elle ramasse naturellement de la neige, et plus elle devient grosse, plus elle a de surface pour ramasser <em>encore plus</em> de neige à chaque rotation.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Intérêt Simple',
          description: 'Les intérêts sont toujours calculés sur le capital original.',
          points: [
            'Formule : Capital × Taux × Temps',
            'Croissance linéaire et prévisible',
            'Utilisé dans les prêts à court terme',
            'Pas de réinvestissement des bénéfices',
          ],
        },
        {
          title: 'Intérêt Composé',
          description: 'Les intérêts s\'ajoutent au capital et génèrent de nouveaux intérêts.',
          highlight: true,
          points: [
            'Formule : Capital × (1 + Taux)^Temps',
            'Croissance exponentielle accélérée',
            'Fondation de l\'investissement à long terme',
            'Vos bénéfices génèrent plus de bénéfices',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Mathématiquement, vos revenus génèrent de nouveaux revenus. Au cours des premières années, cela semble lent, mais après le "point d\'inflexion", la courbe augmente verticalement. C\'est là que se créent les vraies richesses.',
    },
    {
      type: 'title',
      text: 'Pourquoi le Temps est Votre Plus Grand Allié',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le facteur le plus déterminant n\'est pas le montant que vous investissez, mais <strong>combien de temps vous le laissez croître</strong>. Commencer 10 ans plus tôt peut entraîner une richesse finale 2 ou 3 fois plus importante, même si vous investissez moins au total. Cet effet exponentiel est la raison pour laquelle les jeunes investisseurs ont un avantage incomparable.',
    },
    {
      type: 'tip',
      title: 'La Règle des 72',
      html: '<p>Divisez 72 par votre rendement annuel pour découvrir en combien d\'années vous allez <strong>doubler votre argent</strong>.</p><p><em>Exemple : À 8%, vous doublez tous les 9 ans (72/8 = 9).</em></p><p>Cette formule magique fonctionne pour n\'importe quel taux de rendement et vous aide à estimer rapidement la croissance de vos investissements.</p>',
    },
    {
      type: 'tip',
      title: 'Conseil 2026',
      html: '<p>L\'inflation reste un facteur. Assurez-vous que vos rendements nets dépassent au moins 2-3% annuellement pour ne pas perdre votre pouvoir d\'achat. Investissez dans des actifs qui croissent plus vite que l\'inflation.</p>',
    },
    {
      type: 'title',
      text: 'Fréquence de Capitalisation : Est-ce Important?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les intérêts peuvent être composés annuellement, semestriellement, trimestriellement, mensuellement ou même quotidiennement. Plus <strong>la capitalisation est fréquente</strong>, plus l\'effet composé est important. Le même capital au même taux croîtra davantage si les intérêts sont composés mensuellement plutôt qu\'annuellement.',
    },
  ],
  ui: {
    labelTitle: 'Simulateur d\'Investissement',
    labelRealtime: 'Temps réel',
    labelInitial: 'Capital Initial',
    labelMonthly: 'Versement Mensuel',
    labelRate: 'R. Annuel',
    labelYears: 'Années',
    labelMyMoney: 'Votre Argent',
    labelProfit: 'Bénéfice (Intérêt)',
    labelTotal: 'Total Accumulé',
    labelYear: 'Année',
    labelPrincipal: 'Votre Argent (Principal)',
    labelInterest: 'Intérêts Générés',
    insightPrefix: '[TIP] En l\'année ',
    insightSuffix:
      ', vos intérêts annuels générés dépasseront vos versements. L\'argent travaille plus que vous !',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
};
