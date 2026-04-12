import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'calculatrice-hypotheque';
const title = 'Calculatrice Hypothécaire: Tableau d\'Amortissement Complet';
const description =
  'Calculez votre paiement hypothécaire mensuel, découvrez le coût total des intérêts et visualisez votre tableau d\'amortissement complet instantanément.';

const faqData = [
  {
    question: 'Qu\'est-ce que le système d\'amortissement français?',
    answer:
      'C\'est le système le plus utilisé en Europe. Votre paiement mensuel reste identique, mais au début vous payez presque entièrement les intérêts avec très peu de capital. À la fin, c\'est l\'inverse. C\'est pourquoi le remboursement anticipé est plus rentable dans les premières années.',
  },
  {
    question: 'Taux fixe ou variable en 2026?',
    answer:
      'Taux fixe: vous payez un peu plus maintenant mais dormez tranquille 30 ans. Taux variable: peut être moins cher au début, mais si les taux montent à 4-5%, votre paiement pourrait exploser. Cela dépend de votre tolérance au risque.',
  },
  {
    question: 'Combien j\'économise si je rembourse 10 000€ à l\'avance?',
    answer:
      'Cela dépend du moment. Si vous remboursez à l\'année 1 d\'une hypothèque de 200 000€ à 3%, vous pouvez économiser plus de 15 000€ en intérêts. Si vous le faites à l\'année 20, vous en économisez à peine 2 000€. Le timing est crucial.',
  },
  {
    question: 'Quel pourcentage de mon revenu devrais-je consacrer à l\'hypothèque?',
    answer:
      'Les conseillers financiers recommandent de ne pas dépasser 28-31% du revenu brut mensuel (ratio d\'habitation). Certains permettent jusqu\'à 43% de ratio d\'endettement incluant toutes les obligations. Dépasser ces seuils augmente le risque de défaut en cas d\'urgence.',
  },
];

const howToData = [
  {
    name: 'Entrez le montant du prêt',
    text: 'Tapez le montant total que vous devez emprunter au prêteur (moins votre acompte).',
  },
  {
    name: 'Ajustez le taux d\'intérêt',
    text: 'Entrez le TAEG (Taux Annuel Effectif Global) offert par le prêteur. Vous pouvez comparer les options à taux fixe ou variable.',
  },
  {
    name: 'Choisissez votre période de remboursement',
    text: 'Définissez en combien d\'années vous souhaitez rembourser le prêt. Plus d\'années signifie un paiement mensuel plus faible mais des intérêts totaux plus élevés.',
  },
  {
    name: 'Examinez le tableau d\'amortissement',
    text: 'Examinez mois après mois comment votre dette diminue et quelle partie de chaque paiement va aux intérêts par rapport au capital.',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'Banque de France: Comprendre les crédits immobiliers',
      url: 'https://www.banque-france.fr/',
    },
    {
      name: 'Institut National de la Consommation: Guides de l\'emprunteur',
      url: 'https://www.inc-conso.fr/',
    },
    {
      name: 'Conseil Supérieur du Notariat: Ressources hypothécaires',
      url: 'https://www.notaires.fr/',
    },
    {
      name: 'Investopedia FR: Calcul des amortissements hypothécaires',
      url: 'https://www.investopedia.com/terms/m/mortgage.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Complet du Crédit Immobilier : Comprendre l\'Amortissement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un crédit immobilier est probablement la plus grande dette que vous contracterez jamais. Comprendre comment fonctionne le système d\'amortissement est crucial pour prendre des décisions intelligentes qui pourraient vous économiser des dizaines de milliers d\'euros.',
    },
    {
      type: 'title',
      text: 'Le "Piège" des Intérêts Prépondérants : Comprendre Votre Ventilation de Paiement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La plupart des crédits immobiliers utilisent le <strong>système d\'amortissement standard</strong>. Sa caractéristique est que votre paiement mensuel reste constant (à taux fixe), mais la composition change dramatiquement au fil du temps.',
    },
    {
      type: 'tip',
      title: 'Comment Votre Paiement Évolue',
      html: '<p><strong>Premières Années (1-10 ans) :</strong> Vous payez presque uniquement les INTÉRÊTS et très peu du capital emprunté. Sur un crédit de 250 000€ à 3%, votre premier paiement pourrait être 80% intérêts.</p><p><strong>Années Intermédiaires (11-25 ans) :</strong> La proportion s\'équilibre graduellement.</p><p><strong>Dernières Années (26-30 ans) :</strong> Vous payez presque uniquement le CAPITAL avec très peu d\'intérêts.</p>',
    },
    {
      type: 'paragraph',
      html: 'C\'est pourquoi <strong>faire des remboursements anticipés</strong> (rembourser le capital tôt) est bien plus rentable dans les premières années. Rembourser 10 000€ en année 1 peut vous économiser plus de 15 000€ en intérêts. Le même remboursement en année 20 vous économise à peine 2 000€.',
    },
    {
      type: 'title',
      text: 'Combien Devriez-Vous Consacrer à Votre Crédit?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les experts financiers recommandent que votre crédit <strong>ne dépasse pas 30-35% de vos revenus bruts mensuels</strong>. Si vous dépassez ce seuil, vous augmentez considérablement le risque de défaillance face aux imprévus (perte d\'emploi, urgence médicale, etc.).',
    },
    {
      type: 'title',
      text: 'Contexte 2026 : Taux Fixe vs Variable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Avec des taux d\'intérêt fluctuants, choisir entre <strong>Taux Fixe</strong> ou <strong>Taux Variable</strong> est une décision stratégique qui peut coûter des milliers d\'euros par an.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Taux Fixe',
          description: 'Vous payez un peu plus maintenant, mais dormez tranquille sachant que votre paiement ne changerait jamais.',
          points: [
            'Paiement prévisible pour 30 ans',
            'Protection contre les augmentations de taux',
            'Tranquillité d\'esprit en économie incertaine',
            'Idéal pour les budgets serrés',
          ],
        },
        {
          title: 'Taux Variable',
          description: 'Il peut être moins cher aujourd\'hui, mais expose vos finances à la volatilité.',
          highlight: true,
          points: [
            'Paiement initial plus bas',
            'Risque d\'augmentations de taux (4-5% possibles)',
            'Impact potentiellement grave sur le budget',
            'Seulement pour ceux qui tolèrent le risque élevé',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Taux Fixe vs Variable : Cela Dépend de Votre Profil',
      html: '<p><strong>Choisissez Taux Fixe si :</strong> Votre budget est serré, vous recherchez la certitude, vous ne tolérez pas les surprises de paiement.</p><p><strong>Choisissez Taux Variable si :</strong> Vous avez un coussin financier, vous croyez que les taux baisseront, votre crédit est petit ou à court terme.</p>',
    },
  ],
  ui: {
    labelTitle: 'Calculatrice Hypothécaire',
    labelLoanAmount: 'Montant du Prêt',
    labelInterestRate: 'Taux d\'Intérêt (TAEG)',
    labelYears: 'Durée du Prêt (Années)',
    labelMonthlyExtra: 'Ajouter un Paiement Mensuel Supplémentaire',
    labelMonthlyPayment: 'Paiement Mensuel',
    labelMonthCount: 'mois',
    labelSavingsCard: 'Votre Potentiel d\'Économies',
    labelSavingsInterest: 'Intérêts',
    labelSavingsTime: 'Temps',
    labelTimelineComparison: 'Comparaison Temporelle',
    labelTimelineOriginal: 'Durée Originale',
    labelTimelineOptimized: 'Durée avec Paiements Supplémentaires',
    labelCostBreakdown: 'Répartition des Coûts Totaux',
    labelBorrowed: 'Emprunté',
    labelTotalBorrowed: 'Total Emprunté',
    labelTotalInterest: 'Total des Intérêts',
    labelAmortizationTable: 'Tableau d\'Amortissement',
    labelTableHeader: 'Afficher le tableau complet',
    labelViewAll: 'Afficher tout',
    labelPaid: 'Hypothèque Remboursée',
    labelTableMonth: 'Mois',
    labelTableInterest: 'Intérêt',
    labelTablePrincipal: 'Principal',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Solde',
    labelMoreMonths: 'plus de mois',
    labelMonth: 'Mois',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
    monthPlural: 'mois',
    yearPlural: 'années',
  },
};
