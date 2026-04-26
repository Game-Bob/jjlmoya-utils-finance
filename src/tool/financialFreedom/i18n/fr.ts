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

export const content: ToolLocaleContent<FinancialFreedomUI> = {
  slug: 'calculateur-liberte-financiere-piste-survie',
  title: 'Calculateur de Liberté Financière et Piste de Survie',
  description: 'Calculez exactement combien de temps durera votre épargne. Notre outil de piste de survie vous aide à visualiser votre indépendance financière.',
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
    {
      type: 'title',
      text: 'Comment Calculer votre Temps de Survie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour trouver votre piste, nous divisons votre épargne liquide totale par vos dépenses périodiques. Nous calculons également votre <strong>Burn Rate</strong> : le montant exact qui quitte votre poche chaque jour.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Zone Rouge',
          description: '0-6 mois de piste.',
          points: [
            'Haute fragilité financière',
            'Focus sur l\'épargne',
            'Éviter les dettes',
            'Mode urgence',
          ],
        },
        {
          title: 'Zone Jaune',
          description: '6-24 mois de piste.',
          points: [
            'Tranquillité d\'esprit',
            'Résister aux imprévus',
            'Planifier la suite',
            'Filet de sécurité stable',
          ],
        },
        {
          title: 'Zone Verte',
          description: '24+ mois de piste.',
          highlight: true,
          points: [
            'Liberté financière',
            'Levier total',
            'Négocier sa vie',
            'Zone de liberté',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Qu\'est-ce qu\'une bonne piste de survie ?',
      answer: 'Les experts recommandent généralement un minimum de 3 à 6 mois de dépenses. Pour une vraie liberté, visez 2 ans ou plus.',
    },
  ],
  bibliography: [
    {
      name: 'Principes du Mouvement FIRE',
      url: 'https://fr.wikipedia.org/wiki/FIRE_movement',
    },
  ],
  howTo: [
    {
      name: 'Entrez votre épargne liquide',
      text: 'Saisissez le total de vos liquidités disponibles.',
    },
    {
      name: 'Définissez vos dépenses',
      text: 'Indiquez combien vous dépensez par mois ou par an.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calculateur de Liberté Financière',
      description: 'Calculez la durée de votre épargne.',
    },
  ],
};
