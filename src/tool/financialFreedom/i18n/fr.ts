import type { FinancialFreedomUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: FinancialFreedomUI = {
  labelSavings: 'Épargne Totale',
  labelExpenses: 'Dépenses Actuelles',
  labelMonthly: 'Mensuelles',
  labelYearly: 'Annuelles',
  labelTimeRemaining: 'Votre Piste de Survie',
  labelYears: 'Ans',
  labelMonths: 'Mois',
  labelDays: 'Jours',
  labelYearsShort: 'a',
  labelMonthsShort: 'm',
  labelDaysShort: 'j',
  labelStatus: 'État de Sécurité Financière',
  labelRedZone: 'Zone Rouge : Risque Élevé',
  labelYellowZone: 'Zone Jaune : Stable',
  labelGreenZone: 'Zone Verte : Liberté Financière',
  labelBurnRateDaily: 'Taux de Dépense Quotidien',
  labelBurnRateMonthly: 'Taux de Dépense Mensuel',
  labelWhatIf: 'Le Pouvoir des 10%',
  labelWhatIfDescription: 'En réduisant vos dépenses de seulement 10%, vous pourriez prolonger votre survie de manière significative.',
  labelGainTime: 'Temps de Survie Supplémentaire',
  labelCopyResult: 'Copier le Résumé',
  labelCopied: 'Copié !',
};

const slug = 'calculateur-liberte-financiere-piste-survie';
const title = 'Calculateur de Liberté Financière et Piste de Survie';
const description = 'Calculez exactement combien de temps durera votre épargne. Notre outil de piste de survie vous aide à visualiser votre indépendance financière.';

const faq = [
  {
    question: 'Qu\'est-ce qu\'une bonne piste de survie ?',
    answer: 'Les experts recommandent généralement un minimum de 3 à 6 mois de dépenses. Pour une vraie liberté, visez 2 ans ou plus.',
  },
  {
    question: 'Ce calculateur inclut-il l\'inflation ?',
    answer: 'Cet outil est conçu pour le calcul immédiat des actifs liquides par rapport aux dépenses actuelles.',
  },
  {
    question: 'Qu\'est-ce que le "Burn Rate" en finances personnelles ?',
    answer: 'Le burn rate est le rythme auquel vous dépensez votre épargne pour couvrir vos frais de vie.',
  },
];

const howTo = [
  {
    name: 'Entrez votre épargne liquide',
    text: 'Saisissez le total de vos liquidités disponibles.',
  },
  {
    name: 'Définissez vos dépenses',
    text: 'Indiquez combien vous dépensez par mois ou par an.',
  },
  {
    name: 'Analysez votre zone de sécurité',
    text: 'Vérifiez si vous êtes en zone Rouge, Jaune ou Verte.',
  },
];

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'Qu\'est-ce que la Piste de Survie Financière ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>piste de survie</strong> (ou runway) est la durée pendant laquelle vous pouvez vivre sans nouveau revenu. C\'est l\'indicateur ultime de la liberté financière. Contrairement à un simple solde bancaire, la piste vous indique combien de "temps humain" vous avez acheté avec votre épargne.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Principes du Mouvement FIRE',
      url: 'https://fr.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
