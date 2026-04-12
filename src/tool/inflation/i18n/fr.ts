import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'calculatrice-inflation-espagne';
const title = 'Calculatrice d\'Inflation en Espagne: Valeur Historique de l\'Argent';
const description =
  'Découvrez la valeur actuelle de vos pesetas ou comment le coût de la vie a augmenté depuis 1980. Données historiques IPC espagnoles mises à jour jusqu\'en 2026.';

const faqData = [
  {
    question: 'Qu\'est-ce que l\'IPC et comment est-il calculé?',
    answer:
      'L\'Indice des Prix à la Consommation (IPC) mesure l\'évolution des prix d\'un panier de biens et services représentatif de la consommation espagnole. Il est calculé en comparant le coût de ce panier sur différentes périodes.',
  },
  {
    question: 'Combien d\'argent a perdu de valeur depuis 1980?',
    answer:
      '1 000 pesetas de 1980 valent environ 60€ aujourd\'hui en pouvoir d\'achat. L\'argent a perdu plus de 90% de sa valeur en 40+ ans en raison de l\'inflation accumulée.',
  },
  {
    question: 'Pourquoi mes économies perdent-elles de la valeur si je ne les bouge pas?',
    answer:
      'Si l\'inflation est de 3% par an et votre compte rapporte 0% d\'intérêts, vous perdez 3% de pouvoir d\'achat chaque année. Pour maintenir la valeur réelle, vos économies doivent générer au moins le taux d\'inflation.',
  },
  {
    question: 'Quelle a été la période d\'inflation la plus élevée en Espagne?',
    answer:
      'Les années 1980 ont connu l\'inflation la plus importante, avec des taux à deux chiffres (jusqu\'à 15%). Les prix changeaient drastiquement mois après mois. Depuis l\'euro (2002), l\'inflation a été mieux contrôlée, sauf en 2021-2023.',
  },
  {
    question: 'Comment l\'inflation affecte-t-elle mes économies?',
    answer:
      'L\'inflation agit comme un "impôt silencieux". Si l\'inflation est de 5% et votre argent est sous le matelas, en fin d\'année vous pourrez acheter 5% moins de produits. Il est essentiel d\'investir pour contrecarrer cet effet.',
  },
];

const howToData = [
  {
    name: 'Sélectionner l\'année de départ',
    text: 'Choisissez à partir de quelle date vous souhaitez calculer la valeur de l\'argent (disponible de 1980 à 2026).',
  },
  {
    name: 'Entrer le montant',
    text: 'Tapez le montant en pesetas (pour les anciennes dates) ou en euros que vous souhaitez comparer.',
  },
  {
    name: 'Choisir l\'année de fin',
    text: 'Définissez jusqu\'à quand vous souhaitez voir l\'évolution du pouvoir d\'achat.',
  },
  {
    name: 'Analyser le résultat réel',
    text: 'Observez l\'équivalence de pouvoir d\'achat et le pourcentage d\'inflation accumulée pour cette période.',
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

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'INE: Indice des Prix à la Consommation Espagnol',
      url: 'https://www.ine.es/',
    },
    {
      name: 'Banque d\'Espagne: Analyse de l\'Inflation',
      url: 'https://www.bde.es/',
    },
    {
      name: 'BCE: Données Historiques d\'Inflation de la Zone Euro',
      url: 'https://www.ecb.europa.eu/',
    },
    {
      name: 'OCDE: Analyse de la Parité du Pouvoir d\'Achat',
      url: 'https://www.oecd.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'L\'Argent Invisible: Comment l\'Inflation Érode vos Économies',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>inflation</strong> est l\'augmentation soutenue du niveau général des prix dans une économie. Bien qu\'elle semble progressive, son effet cumulatif est dévastateur: les 1 000€ que vous aviez économisés il y a 10 ans achètent probablement 30% moins de biens et services aujourd\'hui.',
    },
    {
      type: 'tip',
      title: 'L\'Effet Composé',
      html: '<p>L\'inflation fonctionne de manière <strong>composée</strong>, comme les intérêts sur vos économies mais en sens inverse. Année après année, le pourcentage s\'applique à ce qui a déjà été perdu.</p>',
    },
    {
      type: 'title',
      text: 'Jalons Économiques en Espagne',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Années 1980: La Décennie Inflationniste',
          description: 'Inflation à deux chiffres (jusqu\'à 15%). Les prix changeaient drastiquement mois après mois.',
          points: [
            'IPC maximum: 15,6% en 1980',
            'Crise économique mondiale',
            'Chômage massif',
            'Politiques d\'austérité',
          ],
        },
        {
          title: 'Inflation Pandémique : 2021 à 2023',
          description: 'Hausse brusque de l\'inflation due à l\'énergie et l\'alimentation, dépassant 6%.',
          highlight: true,
          points: [
            'Inflation maximale: 6,5% en 2021',
            'Crise énergétique en Europe',
            'Perturbations des chaînes d\'approvisionnement',
            'Récupération progressive en 2024',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Utilisez notre calculatrice pour comprendre le vrai impact de l\'inflation sur votre patrimoine et pourquoi investir (plutôt que d\'épargner sans rendement) est essentiel pour préserver votre pouvoir d\'achat.',
    },
  ],
  ui: {
    labelTitle: 'Calculatrice d\'Inflation Espagne',
    labelInitialAmount: 'Argent Initial',
    labelInitialYear: 'En l\'année',
    labelFinalAmount: 'Équivalence Aujourd\'hui',
    labelFinalYear: 'Année 2026',
    labelInflationRate: 'Inflation Accumulée',
    labelCalculatedOn: 'Calcul effectué à partir des données officielles de l\'INE jusqu\'en 2025 et des projections estimées pour la fin de 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
    labelYearSelect: 'En l\'année',
    labelIn: 'En',
    labelEquivalentToday: 'équivaut aujourd\'hui à',
    labelInflationAccumulated: 'Inflation Accumulée',
    labelYear: 'Année',
  },
};
