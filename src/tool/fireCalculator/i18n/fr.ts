import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'calculatrice-regle-4-pour-cent-fire';
const title = 'Calculatrice FIRE: Règle des 4%';
const description = 'Calculez votre chiffre magique pour l\'indépendance financière. Planifiez votre retraite anticipée et visualisez votre chemin vers la liberté économique.';

const faqData = [
  {
    question: 'Qu\'est-ce que la Règle des 4%?',
    answer: 'La Règle des 4% est une stratégie de retraite basée sur l\'Étude Trinity indiquant que vous pouvez retirer 4% de votre patrimoine la première année, ajusté pour l\'inflation par la suite, sans épuiser vos fonds sur 30 ans.',
  },
  {
    question: 'Qu\'est-ce que FIRE?',
    answer: 'FIRE signifie Financial Independence, Retire Early (Indépendance Financière, Retraite Anticipée). C\'est un mouvement cherchant la liberté économique par une épargne agressive et des investissements intelligents.',
  },
  {
    question: 'Quel est mon chiffre magique?',
    answer: 'Votre chiffre magique est le patrimoine total nécessaire pour vivre des rendements sans travailler. Il est calculé en divisant vos dépenses annuelles par le taux de retrait sûr (généralement 4%).',
  },
  {
    question: 'Quelle est la différence entre Lean, Barista et Fat FIRE?',
    answer: 'Lean FIRE signifie vivre avec des dépenses minimales (70% actuelles), Barista FIRE est un travail à temps partiel avec investissements couvrant le reste (50%), et Fat FIRE est un style de vie confortable (150% des dépenses).',
  },
  {
    question: 'La Règle des 4% est-elle réaliste?',
    answer: 'La Règle des 4% a un taux de réussite historique de 95% dans un portefeuille 50/50 actions-obligations sur 30 ans. Cependant, elle ne tient pas compte du risque de séquence de rendements et repose principalement sur les données du marché américain.',
  },
];

const howToData = [
  {
    name: 'Calculez vos dépenses mensuelles',
    text: 'Analysez ce que vous dépensez réellement chaque mois en incluant logement, nourriture, services et loisirs.',
  },
  {
    name: 'Choisissez votre taux de retrait sûr',
    text: 'La Règle des 4% est standard, mas ajustez entre 2,5% (conservateur) et 6% (agressif) selon votre tolérance au risque.',
  },
  {
    name: 'Entrez votre patrimoine actuel',
    text: 'Additionnez vos investissements, épargnes et actifs générateurs de revenus.',
  },
  {
    name: 'Visualisez votre progression',
    text: 'Voyez le graphique de croissance et les jalons de liberté (Lean, Barista, Fat FIRE) pour comprendre quand vous atteindrez votre objectif.',
  },
];

const bibliographyData = [
  {
    name: 'L\'Étude Trinity: Survivabilité du Portefeuille',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Forum de Retraite Anticipée',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Indice CAPE de Shiller',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Investopedia - FIRE Guide',
    url: 'https://www.investopedia.com/terms/f/financial-independence-retire-early-fire.asp',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Règle des 4%: Le Saint Graal de la Retraite Anticipée',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Découvrez comment calculer le patrimoine nécessaire pour vivre des rendements à jamais. La <strong>Règle des 4%</strong> provient de l\'Étude Trinity, menée en 1998 par trois professeurs de finance. Ils ont analysé les données de marché historiques depuis 1926 pour déterminer quel pourcentage pouvait être retiré annuellement sans épuiser le portefeuille en 30 ans.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Taux de Réussite' },
        { value: '50/50', label: 'Mix Actions/Obligations' },
        { value: '30', label: 'Horizon Temporel' },
        { value: '4%', label: 'Retrait Sûr' },
      ],
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que le Mouvement FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE signifie Financial Independence, Retire Early (Indépendance Financière, Retraite Anticipée).',
        'Cherche la liberté de choisir comment passer votre temps sans contraintes financières.',
        'Basé sur l\'optimisation de l\'épargne et des stratégies d\'investissement intelligentes.',
        'Vise ce que vos actifs génèrent suffisamment de flux de trésorerie pour couvrir vos dépenses.',
      ],
    },
    {
      type: 'title',
      text: 'Types de Liberté Financière',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Mode de vie minimaliste couvrant uniquement les dépenses de survie.',
          points: ['Épargne extrême', 'Dépenses très faibles', 'Liberté frugale'],
        },
        {
          title: 'Barista FIRE',
          description: 'Situation hybride où les investissements couvrent la moitié de vos dépenses.',
          points: ['Travail par choix', 'Couverture sociale assurée', 'Moins de stress'],
        },
        {
          title: 'Fat FIRE',
          description: 'Retraite confortable avec budget pour luxes et voyages.',
          points: ['Patrimoine élevé', 'Aucune restriction', 'Héritage familial'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment Utiliser Notre Calculatrice FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Suivi des Dépenses:</strong> Analysez vos dépenses réelles sur 12 mois.',
        '<strong>Définition du Taux:</strong> Choisissez votre taux de retrait sûr selon votre risque.',
        '<strong>Patrimoine Actuel:</strong> Entrez la valeur totale de vos investissements.',
        '<strong>Capacité d\'Épargne:</strong> Projetez combien de temps jusqu\'à votre objectif.',
        '<strong>Aperçus Visuels:</strong> Analysez votre graphique de croissance et jalons.',
      ],
    },
    {
      type: 'title',
      text: 'Analyse de la Règle des 4%',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Avantages',
          description: 'Pourquoi la règle des 4% fonctionne',
          points: [
            'Mathématiques simples pour une planification rapide.',
            'Basée sur près d\'un siècle de données historiques.',
            'Adaptable à n\'importe quel niveau de dépenses.',
          ],
        },
        {
          title: 'Limitations',
          description: 'Ce que la règle des 4% ne couvre pas',
          points: [
            'Ne tient pas compte du risque de séquence de rendements.',
            'Basée principalement sur les données du marché américain.',
            'Ignore les changements majeurs de lois fiscales.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Facteur Critique: L\'Inflation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rappelez-vous que 1 000€ aujourd\'hui ne achèteront pas la même chose à l\'avenir. Il est vital d\'utiliser des rendements réels (ajustés pour l\'inflation) pour que vos projections conservent le pouvoir d\'achat actuel. La Règle des 4% suppose que vous ajustez les retraits annuellement pour l\'inflation.',
    },
  ],
  ui: {
    labelTitle: 'Calculatrice FIRE: Règle des 4%',
    labelDescription: 'Calculez votre chiffre magique pour l\'indépendance financière et visualisez vos jalons vers la liberté économique.',
    labelMonthlyExpenses: 'Dépenses Mensuelles',
    labelSWR: 'Taux de Retrait Sûr',
    labelCurrentWorth: 'Patrimoine Actuel',
    labelMonthlySavings: 'Capacité d\'Épargne Mensuelle',
    labelAnnualReturn: 'Rendement Estimé (Net)',
    labelFreedomMilestones: 'Jalons de Liberté',
    labelLeanFIRE: 'Lean FIRE (70% survie)',
    labelBaristaFIRE: 'Barista FIRE (50% revenus)',
    labelFatFIRE: 'Fat FIRE (150% luxe)',
    labelMagicNumber: 'Votre Chiffre Magique pour la Liberté',
    labelMagicNumberDesc: 'Capital nécessaire pour vivre des rendements',
    labelTimeRemaining: 'Temps jusqu\'à la liberté financière',
    labelTimeRemainingFormat: 'Il vous reste {years} ans et {months} mois',
    labelAlreadyFI: 'Vous avez déjà atteint la liberté financière!',
    labelUnachievable: 'Objectif inatteignable avec cette épargne',
    labelHiddenCostsChecklist: 'Liste de Contrôle des Dépenses Cachées',
    labelHealth: 'Assurance Santé (+200€)',
    labelTaxes: 'Impôts (+150€)',
    labelHome: 'Entretien Domicile (+100€)',
    labelTravel: 'Voyage et Loisirs (+300€)',
    labelEmergency: 'Fonds d\'Urgence (+100€)',
    labelSubscriptions: 'Abonnements (+50€)',
    labelAdded: 'Ajouté:',
    labelSavePlan: 'Enregistrer le Plan',
    labelSWRTooltip: 'Taux de Retrait Sûr: Le pourcentage de vos épargnes que vous pouvez retirer chaque année sans manquer d\'argent.',
    labelReturnTooltip: 'Rendement annuel du marché (ajusté pour l\'inflation). La norme historique est de 7%.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
};
