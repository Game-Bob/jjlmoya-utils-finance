import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'calculatrice-boule-de-neige-dette';
const title = 'Calculatrice Méthode Boule de Neige: Plan de Remboursement de Dettes 2026';
const description =
  'Calculez votre date de liberté financière en utilisant la méthode de la boule de neige. Organisez vos dettes de la plus petite à la plus grande et visualisez votre plan de paiement mensuel gratuitement.';

const faqData = [
  {
    question: 'Qu\'est-ce que la méthode de la boule de neige?',
    answer:
      'C\'est une stratégie de remboursement de dettes popularisée par Dave Ramsey qui consiste à payer les dettes en ordre du solde le plus petit au plus grand, indépendamment des taux d\'intérêt. Elle se concentre sur la victoire psychologique d\'éliminer rapidement les petits comptes pour gagner en motivation.',
  },
  {
    question: 'Pourquoi ne pas classer par taux d\'intérêt (Avalanche)?',
    answer:
      'Mathématiquement, payer le taux le plus élevé en premier économise plus d\'argent. Cependant, beaucoup de gens abandonnent car ils ne voient pas de résultats immédiats. La Boule de Neige priorise le comportement et la motivation: voir une dette disparaître rapidement vous donne l\'énergie de continuer.',
  },
  {
    question: 'Dois-je avoir des économies avant de commencer le plan?',
    answer:
      'Il est recommandé d\'avoir un "Fonds d\'Urgence Initiale" (environ 1 000€) avant d\'attaquer les dettes. Cela évite de devoir recourir à nouveau aux cartes de crédit si une dépense imprévue survient, cassant votre séquence de progrès.',
  },
  {
    question: 'Quelles dettes dois-je inclure dans la calculatrice?',
    answer:
      'Toutes les dettes de consommation: cartes de crédit, prêts personnels, dettes familiales, prêts automobiles, factures impayées. Les hypothèques sont généralement laissées pour une phase ultérieure en raison de leur volume important.',
  },
  {
    question: 'Que faire si je reçois un revenu supplémentaire inattendu?',
    answer:
      'Toute injection de capital (bonus, loterie, salaire supplémentaire) doit aller entièrement à la dette que vous attaquez actuellement. Cela réduit drastiquement le temps total de votre plan de liberté financière.',
  },
];

const howToData = [
  {
    name: 'Listez vos dettes',
    text: 'Écrivez toutes vos dettes en indiquant le solde total impayé et le paiement minimum mensuel que vous effectuez actuellement pour chacune. Ne vous préoccupez pas des intérêts pour le moment.',
  },
  {
    name: 'Définissez votre budget supplémentaire',
    text: 'Calculez combien d\'argent supplémentaire vous pouvez allouer chaque mois en plus des paiements minimums. Même 20€ par mois peuvent faire une différence dans l\'effet boule de neige.',
  },
  {
    name: 'Ordonnez et priorisez',
    text: 'La calculatrice ordonnera automatiquement du solde le plus petit au plus grand. Payez le minimum sur tous sauf le plus petit. Mettez tout votre argent supplémentaire sur celui-ci.',
  },
  {
    name: 'Exécutez la cascade',
    text: 'Une fois que vous avez payé la plus petite dette, prenez tout l\'argent que vous y allouviez (son minimum + l\'extra) et ajoutez-le à la prochaine dette de la liste. Répétez jusqu\'à être libre.',
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

export const content: ToolLocaleContent<DebtSnowballUI> = {
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
      text: 'Calculatrice de Dette avec la Méthode Boule de Neige: Guide 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vivre avec des dettes, c\'est comme essayer de courir un marathon avec un sac à dos rempli de pierres. La <strong>méthode de la boule de neige</strong>, popularisée par les experts en finances personnelles, s\'est avérée être l\'une des stratégies les plus efficaces pour retrouver la liberté financière. Elle ne repose pas sur l\'efficacité mathématique, mais sur la puissante <strong>base psychologique du comportement humain</strong>.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que la Méthode de la Boule de Neige?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La méthode de la boule de neige est une stratégie de réduction de dettes où vous remboursez vos obligations en ordre du <strong>solde le plus petit au plus grand</strong>, indépendamment de leurs taux d\'intérêt. Pendant que vous effectuez les paiements minimums sur toutes vos dettes, vous allouez chaque euro supplémentaire que vous pouvez économiser au solde le plus petit.',
    },
    {
      type: 'paragraph',
      html: 'Une fois que cette première dette disparaît, tout l\'argent que vous lui allouuviez va vers la prochaine plus petite dette. Cet effet crée un momentum similaire à une petite boule de neige qui roule en bas d\'une colline, devenant plus grande et plus rapide à chaque tour.',
    },
    {
      type: 'title',
      text: 'Psychologie vs. Mathématiques: Pourquoi ça marche?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si vous parlez à un financier pur, il vous dira que la <strong>Méthode de l\'Avalanche</strong> est supérieure car vous économisez plus d\'argent en intérêts. Et techniquement, ils ont raison. Cependant, la dette n\'est pas un problème de mathématiques; c\'est un problème d\'<strong>habitudes et de comportement</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Victoires rapides:</strong> En éliminant la plus petite dette en seulement quelques mois, vous obtenez une libération de dopamine qui vous motive à continuer.',
        '<strong>Simplification mentale:</strong> Passer de 7 factures mensuelles à 6 réduit le stress et la complexité de votre vie financière.',
        '<strong>Motivation soutenue:</strong> Le succès précoce vous donne l\'énergie nécessaire pour affronter les plus grandes dettes qui viendront plus tard.',
      ],
    },
    {
      type: 'title',
      text: 'Boule de Neige vs. Avalanche: Différences clés',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Notre outil vous permet de comparer les deux scénarios en temps réel pour que vous décidiez quel plan convient le mieux à votre profil:',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Méthode Avalanche',
          description: 'Priorise le taux d\'intérêt le plus élevé.',
          points: [
            'Vous économisez le maximum d\'argent sur les intérêts bancaires',
            'Il peut prendre longtemps pour sentir les progrès',
            'Si la dette la plus chère est très importante, le découragement arrive plus tôt',
            'Mathématiquement optimal',
          ],
        },
        {
          title: 'Méthode Boule de Neige',
          description: 'Priorise le solde le plus petit.',
          points: [
            'Vous éliminez les comptes de votre liste dès que possible',
            'Génère un renforcement positif immédiat',
            'Taux de réussite du plan plus élevé',
            'Psychologiquement gratifiant',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment Utiliser la Calculatrice de Dette',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour obtenir un plan de paiement précis, suivez ces étapes structurées dans l\'outil:',
    },
    {
      type: 'list',
      items: [
        '<strong>Cartographie des dettes:</strong> Entrez le nom, le solde impayé actuel et le paiement minimum mensuel pour chaque prêt ou carte.',
        '<strong>Ajustement du budget:</strong> Définissez votre "Budget Supplémentaire". C\'est la somme mensuelle que vous pouvez économiser en plus des paiements minimums.',
        '<strong>Simulation de capital:</strong> Utilisez l\'option d\'injection de capital pour voir comment un revenu inattendu (comme un bonus) raccourcit votre calendrier.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Formule d\'amortissement:</strong> Solde Final = Solde Initial + Intérêts Mensuels - (Paiement Minimum + Budget Supplémentaire)',
    },
    {
      type: 'title',
      text: 'Conseils pour Accélérer Votre Liberté Financière',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calculatrice vous montre une date estimée basée sur vos données actuelles, mais cette date n\'est pas gravée dans le marbre:',
    },
    {
      type: 'list',
      items: [
        '<strong>Passez en revue vos abonnements:</strong> Souvent, cet argent supplémentaire de 50€ que vous besoin est caché dans des services que vous n\'utilisez pas.',
        '<strong>Gelsez vos cartes:</strong> Vous ne pouvez pas sortir d\'un trou si vous continuez à creuser. Pendant le plan, évitez de contracter de nouvelles dettes.',
        '<strong>Fonds d\'urgence:</strong> Ayez au moins 1 000€ économisés avant de commencer. Cela empêche une dépense inattendue de casser votre plan de paiement.',
      ],
    },
    {
      type: 'paragraph',
      html: '<strong>Souvenez-vous:</strong> La liberté financière est 20% de connaissance et 80% de comportement. Le jour où vous verrez "0" sur votre solde final sera le jour où vous retrouverez le contrôle total de votre temps et votre argent.',
    },
    {
      type: 'title',
      text: 'Conclusion et Prochaines Étapes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>calculatrice de la méthode boule de neige</strong> est un outil de planification fondamental. Le vrai travail se fait dans votre vie quotidienne, dans les décisions que vous prenez à chaque achat. Nous vous recommandons de télécharger votre plan au format CSV et de le poster quelque part de visible pour rester concentré sur votre objectif final: être sans dettes.',
    },
  ],
  ui: {
    labelTitle: 'Liberté totale',
    labelDescription: 'Entrez en mode liberté financière. Utilisez la méthode psychologiquement la plus efficace pour éliminer vos dettes.',
    labelExtraBudget: 'BUDGET SUPPLÉMENTAIRE MENSUEL',
    labelExtraBudgetHelp: 'Argent supplémentaire en plus des paiements minimums.',
    labelSnowballMethod: 'BOULE DE NEIGE',
    labelAvalancheMethod: 'AVALANCHE',
    labelAddNewDebt: 'AJOUTER UNE NOUVELLE DETTE',
    labelDebtName: 'Nom',
    labelDebtNamePlaceholder: 'Ex: Visa',
    labelDebtBalance: 'COMBIEN VOUS DEVEZ',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'PAIEMENT MINIMUM',
    labelInterestRate: 'TAUX D\'INTÉRÊT',
    labelInterestHelp: 'ANNUEL',
    labelAddButton: 'AJOUTER AU PLAN',
    labelClearData: 'Effacer la configuration',
    labelClearDataConfirm: 'Effacer le plan?',
    labelDeleteDebt: 'Supprimer',
    labelDebtInventory: 'Inventaire des Dettes',
    labelFreedomDate: 'DATE DE LIBERTÉ FINANCIÈRE',
    labelActiveMethod: 'MÉTHODE',
    labelMonthsRemaining: 'MOIS RESTANTS',
    labelTotalInterest: 'INTÉRÊT TOTAL',
    labelTotalPaid: 'PAIEMENT TOTAL FINAL',
    labelInterestSaved: 'INTÉRÊTS ÉCONOMISÉS',
    labelYourStrategy: 'Votre Stratégie Étape par Étape',
    labelStrategyHelp: 'Chaque étape montre votre paiement total quand c\'est son tour',
    labelPriority: 'PRIORITÉ MAXIMALE',
    labelStep: 'ÉTAPE',
    labelAfterPaying: 'APRÈS PAIEMENT PRÉCÉDENT',
    labelMonthlyPayment: 'Paiement mensuel',
    labelDetailedAmortization: 'Amortissement Détaillé',
    labelExportCSV: 'Exporter .CSV',
    labelDate: 'Date',
    labelStartingBalance: 'Solde Initial',
    labelInterest: 'Intérêt',
    labelAmortization: 'Amortissé',
    labelTotalMonth: 'Total du Mois',
    labelRemaining: 'Restant',
    labelFree: 'LIBRE',
    labelDebtInfinite: 'DETTE INFINIE',
    labelInvalidInput: 'Indiquez le solde total et le paiement minimum',
    labelEmptyStateTitle: 'Commencez votre plan',
    labelEmptyStateDescription: 'Vos dettes n\'auront pas pour toujours. Ajoutez vos dettes pour visualiser votre chemin vers la liberté financière.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
};
