import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'calculatrice-interets-retard';
const title = 'Calculatrice d\'Intérêts de Retard: Calcul des Pénalités';
const description =
  'Calculez les intérêts de retard sur les paiements en retard. Outil pour calculer les intérêts simples, composés ou mensuels. Utile pour les factures impayées et les dettes.';

const faqData = [
  {
    question: 'Qu\'est-ce que l\'intérêt de retard ou les pénalités de retard?',
    answer:
      'C\'est l\'intérêt facturé sur une somme non payée dans le délai convenu. Il s\'applique à la dette originale et s\'accumule jusqu\'à ce que le paiement complet soit effectué.',
  },
  {
    question: 'Quelle est la différence entre les intérêts simples et composés?',
    answer:
      'L\'intérêt simple est calculé uniquement sur le capital original chaque jour. L\'intérêt composé est calculé sur le capital plus les intérêts accumulés, générant une croissance plus rapide de la dette.',
  },
  {
    question: 'Comment les intérêts quotidiens sont-ils calculés?',
    answer:
      'Divisez le taux annuel par 365 jours et appliquez-le au capital original. Par exemple, 10% annuel = 0,0274% quotidien.',
  },
  {
    question: 'Quel taux d\'intérêt de retard dois-je appliquer?',
    answer:
      'Cela dépend de la législation locale et des termes du contrat. La France a des limites légales sur les taux de pénalité. Consultez un conseil juridique pour votre cas spécifique.',
  },
  {
    question: 'Puis-je utiliser cette calculatrice pour les dettes légales?',
    answer:
      'C\'est un outil informatif. Pour les dettes réelles, vérifiez les conditions contractuelles et la législation locale. Consultez un avocat si vous avez des doutes.',
  },
];

const howToData = [
  {
    name: 'Choisissez le type de calcul',
    text: 'Sélectionnez entre intérêt simple, composé ou mensuel selon votre situation.',
  },
  {
    name: 'Entrez les données',
    text: 'Saisissez le montant original, le taux d\'intérêt et la période de retard.',
  },
  {
    name: 'Obtenez votre résultat',
    text: 'La calculatrice affiche l\'intérêt quotidien accumulé, l\'intérêt total, le montant final et le taux effectif.',
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

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'Légifrance: Code du Commerce',
      url: 'https://www.legifrance.gouv.fr/',
    },
    {
      name: 'Banque de France: Taux Directeurs',
      url: 'https://www.banque-france.fr/',
    },
    {
      name: 'Calcul des Intérêts Composés',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comment Calculer les Intérêts de Retard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>intérêt de retard</strong> ou <strong>pénalité de retard</strong> est la pénalité financière appliquée lorsqu\'un paiement n\'est pas effectué dans le délai convenu. Son calcul est essentiel dans les contextes commerciaux et juridiques.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Intérêt Simple',
          description: 'Calculé uniquement sur le principal original chaque période.',
          points: [
            'Croissance linéaire et prévisible',
            'Moins nuisible que composé',
            'Commun dans les contrats simples',
            'Formule: Capital × Taux × Période',
          ],
        },
        {
          title: 'Intérêt Composé',
          description: 'Recalculé sur le capital plus les intérêts accumulés.',
          highlight: true,
          points: [
            'Croissance exponentielle',
            'Plus coûteux pour le débiteur',
            'Utilisé en finance complexe',
            'Les intérêts génèrent plus d\'intérêts',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Le calcul exact des intérêts de retard dépend de la législation locale. En France, le Code du Commerce établit les taux maximums. Vérifiez toujours les conditions contractuelles et consultez un expert juridique.',
    },
  ],
  ui: {
    labelTitle: 'Calculatrice d\'Intérêts de Retard',
    labelSimpleTitle: 'Simple',
    labelCompoundTitle: 'Composé',
    labelMonthlyTitle: 'Mensuel',
    labelSimpleQuestion: 'Calculer avec intérêt simple',
    labelCompoundQuestion: 'Calculer avec intérêt composé',
    labelMonthlyQuestion: 'Calculer avec périodes mensuelles',
    labelPrincipal: 'Montant Original',
    labelAnnualRate: 'Taux Annuel',
    labelDays: 'Jours de Retard',
    labelMonths: 'Mois de Retard',
    labelMonthlyRate: 'Taux Mensuel',
    labelDailyInterest: 'Intérêt Quotidien',
    labelTotalInterest: 'Intérêt Total',
    labelTotalAmount: 'Montant Total à Payer',
    labelEffectiveRate: 'Taux Effectif',
    labelCopyTooltip: 'Copier le résultat',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Formule appliquée',
    reportTitle: 'RAPPORT DE CALCUL DES INTÉRÊTS',
    reportLabelPrincipal: 'Principal',
    reportLabelType: 'Type',
    reportLabelPeriod: 'Période',
    reportLabelDays: 'Jours écoulés',
    reportLabelInterest: 'INTÉRÊTS COURUS',
    reportLabelTotal: 'TOTAL DÛ',
    reportDaysSuffix: 'jours',
    formulaDescription: 'Ce calcul utilise les taux en vigueur. Si la période s\'étend sur des années antérieures avec des taux différents, le calcul réel devrait être divisé par périodes.',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
};
