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
      text: 'Calculatrice d\'Inflation Historique: Comprendre la Valeur Réelle de Votre Argent',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'inflation est l\'« impôt silencieux » qui dévore vos économies année après année. Savez-vous combien votre argent a perdu de valeur depuis 1980? Combien coûte réellement ce café que vous payiez 300 pesetas il y a 20 ans?',
    },
    {
      type: 'title',
      text: 'L\'Inflation: L\'Impôt Silencieux sur Votre Patrimoine',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>inflation</strong> est l\'augmentation soutenue et généralisée des prix. Bien qu\'elle semble être un phénomène technique, son impact sur l\'économie réelle est direct: elle réduit la quantité de biens que vous pouvez acheter avec le même argent, éroding une vie d\'épargne si les mesures protectrices ne sont pas prises.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15,6%',
          label: 'Record Historique 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8,4%',
          label: 'Pic de Prix 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2,0%',
          label: 'Objectif de Stabilité',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Termes Financiers Essentiels',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IPC',
          definition: 'Indicateur qui résume la variation des prix d\'un panier de consommation de base.',
        },
        {
          term: 'Pouvoir d\'Achat',
          definition: 'La capacité réelle d\'achat de la monnaie à un moment donné.',
        },
        {
          term: 'Déflation',
          definition: 'Baisse généralisée des prix qui peut paralyser l\'investissement.',
        },
        {
          term: 'Stagflation',
          definition: 'Scénario d\'inflation élevée combinée avec la stagnation économique.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jalons Économiques et Comparaison',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crise des Années 1980',
          description: 'Période marquée par des inflations à deux chiffres et une grande instabilité du travail.',
          points: [
            'Taux d\'intérêt extrêmement élevés',
            'Perte rapide de valeur de la peseta',
            'Salaires dévorés par les prix',
          ],
        },
        {
          title: 'Inflation Pandémique: 2021 à 2023',
          description: 'Augmentation brutale due aux coûts énergétiques et aux problèmes de chaîne d\'approvisionnement.',
          highlight: true,
          points: [
            'Impact direct sur le coût de la vie',
            'Augmentation des taux de la BCE pour freiner la consommation',
            'Récupération lente du pouvoir d\'achat',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Produit ou Indicateur', 'Valeur en 1980 (Estimée)', 'Valeur en 2026 (Projetée)', 'Variation'],
      rows: [
        ['Baguette de Pain', '0,15€ (25 pts)', '1,40€', '833%'],
        ['Café en Établissement', '0,30€ (50 pts)', '1,65€', '450%'],
        ['Ticket de Cinéma', '1,20€ (200 pts)', '9,80€', '716%'],
        ['Salaire Minimum Mensuel', '154€ (25 615 pts)', '1 140€', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Le Danger de l\'Argent Liquide',
      html: 'Garder l\'argent sous le matelas ou sur des comptes d\'épargne non rémunérés est une perte garantie de capital. Une inflation moyenne de 3% réduit de moitié la valeur de vos économies en moins de 25 ans.',
    },
    {
      type: 'title',
      text: 'Conseils pour Protéger vos Économies',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Stratégies d\'Investissement',
      items: [
        {
          pro: 'Actifs Réels: L\'immobilier s\'apprécie généralement avec l\'inflation.',
          con: 'Faible liquidité et coûts d\'entrée élevés.',
        },
        {
          pro: 'Bourse et Fonds: Rendements qui dépassent généralement l\'IPC à long terme.',
          con: 'Volatilité et risque de marché à court terme.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Habitudes Financières Saines',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Passez en revue régulièrement vos dépenses pour détecter les augmentations cachées.',
        'Diversifiez vos épargnes dans différents types d\'actifs.',
        'Envisagez les obligations d\'État liées à l\'inflation.',
        'Utilisez des outils de calcul pour contextualiser les offres et les salaires.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Attention: Intérêt Composé Négatif',
      html: 'L\'inflation agit comme un intérêt composé inversé. Chaque année, le pourcentage de perte s\'applique à une valeur déjà diminuée, accélérant la perte de richesse si vous n\'intervenez pas.',
    },
    {
      type: 'summary',
      title: 'Conclusions Clés',
      items: [
        'L\'IPC est juste une moyenne; votre inflation personnelle dépend de vos habitudes.',
        'Investir n\'est pas optionnel si vous voulez préserver la valeur réelle de votre travail.',
        'Les calculatrices d\'inflation sont essentielles pour comprendre les contrats à long terme.',
      ],
    },
    {
      type: 'message',
      title: 'Prenez le Contrôle de Votre Économie',
      html: 'Notre calculatrice utilise les données officielles de l\'INE pour vous offrir la vision la plus précise du paysage économique actuel et passé de l\'Espagne.',
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
