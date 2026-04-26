import { bibliography } from '../bibliography'
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
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculatrice des Intérêts de Retard et Légaux: Guide Complet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans le cadre juridique et fiscal complexe de l\'Espagne, l\'écoulement du temps sur une dette n\'est pas gratuit. L\'<strong>intérêt de retard</strong> et l\'<strong>intérêt légal de l\'argent</strong> sont les mécanismes que la loi utilise pour dédommager le préjudice causé par le non-respect d\'une obligation dineraire dans les délais. Qu\'il s\'agisse d\'une dette envers l\'administration fiscale, d\'un non-paiement entre entreprises ou d\'une réclamation judiciaire, comprendre comment ces intérêts s\'accumulent est essentiel.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que l\'Intérêt Légal de l\'Argent?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'intérêt légal de l\'argent est le surcoût appliqué à une dette lorsque les parties n\'ont pas convenu d\'un intérêt spécifique ou lorsque la loi le détermine. Pour les années <strong>2024, 2025 et 2026</strong>, ce taux est resté stable à <strong>3,25%</strong>. Ce pourcentage sert de base à de nombreux calculs juridiques.',
    },
    {
      type: 'title',
      text: 'Intérêt de Retard Fiscal (Autorité Fiscale)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsque la dette est envers l\'Administration, l\'<strong>intérêt de retard fiscal</strong> est supérieur à l\'intérêt légal pour décourager les retards de paiement d\'impôts. Pour la période <strong>2024-2026</strong>, il a été fixé à <strong>4,0625%</strong>. C\'est le surcoût que l\'administration fiscale vous facturera si vous produisez une auto-déclaration hors délai.',
    },
    {
      type: 'tip',
      title: 'Nature Compensatoire, Non Punitive',
      html: '<p><strong>Point clé:</strong> Contrairement aux amendes, les intérêts de retard ont une nature compensatoire, non punitive. L\'administration ne vous "punit" pas avec eux, mais vous facture le temps que vous avez eu de l\'argent qui aurait dû être dans les caisses publiques.</p>',
    },
    {
      type: 'title',
      text: 'Comment Calculer les Intérêts Étape par Étape',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le calcul de ces intérêts suit une formule d\'intérêt simple, où le temps est compté en jours civils: <strong>Intérêts = (Principal × Jours × Taux d\'Intérêt) / 36 500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Principal:</strong> Le montant total de la dette originale.',
        '<strong>Jours:</strong> Le nombre de jours écoulés depuis le jour suivant la date d\'échéance jusqu\'au jour du paiement effectif.',
        '<strong>Taux d\'Intérêt:</strong> Le pourcentage annuel applicable (p. ex. 3,25 ou 4,0625).',
        '<strong>36 500:</strong> Le facteur diviseur pour convertir le pourcentage annuel en quotidien (365 jours x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Exemple Pratique: Dette Fiscale',
      html: '<p>Imaginez que vous devez 5 000 € suite à une déclaration d\'impôt qui était due il y a 180 jours:</p><ul><li>Intérêt applicable (Retard): 4,0625%</li><li>Calcul: (5 000 × 180 × 4,0625) / 36 500</li><li><strong>Intérêts résultants:</strong> 100,17 €</li><li>Total à payer: 5 100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Différences Selon le Type de Dette',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dettes Civiles:</strong> Entre particuliers, 3,25% (légal) s\'applique.',
        '<strong>Dettes Commerciales:</strong> Régies par la Loi de Lutte contre le Retard de Paiement, atteignant 10,15% - 11,15% en 2025-2026.',
        '<strong>Dettes à la Sécurité Sociale:</strong> Appliquent 4,0625% plus des surcharges de 10% à 20%.',
        '<strong>Intérêts Judiciaires:</strong> Lorsqu\'il y a une décision judiciaire, 5,25% à partir de la date du jugement.',
      ],
    },
    {
      type: 'title',
      text: 'Intérêts dans les Opérations Commerciales: Attention au Délai de 60 Jours!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si vous êtes travailleur indépendant ou entreprise, la Loi de Lutte contre le Retard de Paiement établit un délai maximum de paiement de 60 jours. Si votre client dépasse cette date, vous pouvez exiger automatiquement des intérêts de retard commerciaux, sans avoir besoin d\'un rappel, et vous pouvez également percevoir un montant forfaitaire de 40 € pour frais de recouvrement.',
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
