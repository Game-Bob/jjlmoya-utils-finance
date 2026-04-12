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
      text: 'Intérêt Simple vs. Composé : La Métaphore de la Boule de Neige',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Imaginez que vous avez une boule de neige au sommet d'une colline. L'<strong>intérêt simple</strong>, c'est comme faire descendre cette boule et devoir lui ajouter de la neige manuellement tous les mètres pour qu'elle grandisse. L'<strong>intérêt composé</strong>, c'est comme laisser la boule rouler d'elle-même : elle ramasse de la neige seule, et plus elle grossit, plus elle a de surface pour en ramasser <em>encore plus</em> à chaque tour.",
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Intérêt Simple',
          description: 'Les intérêts sont toujours calculés sur le capital initial.',
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
            'Base de tout investissement à long terme',
            'Vos bénéfices génèrent plus de bénéfices',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Mathématiquement, vos bénéfices génèrent de nouveaux bénéfices. Les premières années semblent lentes, mais une fois passé le "point d\'inflexion", la courbe monte verticalement. C\'est là que se créent les vraies fortunes.',
    },
    {
      type: 'tip',
      title: 'La Règle des 72',
      html: '<p>Divisez 72 par votre taux de rendement annuel pour savoir en combien d\'années vous allez <strong>doubler votre argent</strong>.</p><p><em>Exemple : À 8%, vous doublez tous les 9 ans (72 ÷ 8 = 9).</em></p>',
    },
    {
      type: 'tip',
      title: 'Conseil 2026',
      html: '<p>L\'inflation reste un facteur important. Assurez-vous que votre rendement net dépasse au moins 2-3% par an pour ne pas perdre de pouvoir d\'achat.</p>',
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
