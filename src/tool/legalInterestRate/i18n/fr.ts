import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LegalInterestRateUI } from '../ui';

const slug = 'interet-legal-argent-espagne';
const title = 'Taux d\'Intérêt Légal Espagne 2026';
const description = 'Calculez le taux d\'intérêt légal applicable en Espagne pour 2026. Calculatrice automatique avec taux de 3,25% selon la loi budgétaire. Inclut calculs de retard et intérêts de mora.';

const faqData = [
  {
    question: 'Quel est le taux d\'intérêt légal en Espagne pour 2026?',
    answer: 'Le taux d\'intérêt légal reste fixé à 3,25% pour l\'exercice 2026, établi par la Loi de Budgets Généraux de l\'État espagnol.',
  },
  {
    question: 'Comment est calculé l\'intérêt de retard?',
    answer: 'L\'intérêt de retard est calculé en multipliant le capital dû par 3,25% et le nombre de jours de retard, divisé par 36 500. Une base de 365 jours est utilisée.',
  },
  {
    question: 'Quelle est la différence entre intérêt légal et intérêt de retard?',
    answer: 'L\'intérêt légal est le taux de référence de base. L\'intérêt de retard fiscal est de 4,06%, appliqué par l\'administration fiscale avec surcharge. Les opérations commerciales: 10,15%, taux le plus élevé.',
  },
  {
    question: 'L\'intérêt légal s\'applique-t-il automatiquement?',
    answer: 'Oui, l\'intérêt légal s\'applique automatiquement en cas de retard de paiement et si aucun autre taux n\'a été convenu. Si un contrat existe, les dispositions contractuelles prévalent dans les limites de la Loi sur l\'usure.',
  },
  {
    question: 'Qu\'est-ce que l\'intérêt de procédure?',
    answer: 'L\'intérêt de procédure est de 5,25% (intérêt légal plus 2 points) appliqué à partir de la date du jugement condamnant au paiement, pour dissuader les retards.',
  },
];

const howToData = [
  {
    name: 'Entrez le capital dû',
    text: 'Écrivez le montant pour lequel vous devez calculer les intérêts. Il peut s\'agir d\'une dette, d\'une facture impayée ou d\'un montant dû.',
  },
  {
    name: 'Spécifiez le nombre de jours de retard',
    text: 'Indiquez combien de jours le non-paiement a duré ou durera. Le calcul utilise une base de 365 jours selon la réglementation espagnole.',
  },
  {
    name: 'Visualisez le résultat',
    text: 'Obtenez automatiquement le montant des intérêts générés et le total à payer en appliquant le taux de 3,25% en vigueur en 2026.',
  },
  {
    name: 'Consultez les autres taux',
    text: 'Observez les autres taux de référence: intérêt de retard fiscal (4,06%) et opérations commerciales (10,15%) pour un contexte supplémentaire.',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Taux d\'Intérêt Légal Espagne 2026 - Calculatrice',
  },
  {
    type: 'paragraph',
    html: 'Le <strong>taux d\'intérêt légal en Espagne pour 2026</strong> est de <strong>3,25%</strong>. Il s\'applique automatiquement en cas de retard de paiement et si aucun autre taux n\'a été convenu. Utilisez notre calculatrice pour déterminer le montant exact des intérêts selon les jours de retard.',
  },
  {
    type: 'title',
    text: 'Taux de référence complémentaires',
  },
  {
    type: 'paragraph',
    html: 'En plus du taux d\'intérêt légal de base (3,25%), il existe d\'autres taux: <strong>intérêt de retard fiscal 4,06%</strong> (Administration fiscale), <strong>intérêt de procédure 5,25%</strong> (jugements) et <strong>intérêt opérations commerciales 10,15%</strong> (B2B).',
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<LegalInterestRateUI> = {
  slug,
  title,
  description,
  ui: {
    labelTitle: 'Taux d\'Intérêt Légal de l\'Argent',
    labelDescription: 'Calculez le montant exact des intérêts légaux selon la Loi budgétaire 2026 de l\'Espagne. Calculatrice automatique avec taux de 3,25%.',
    labelBadge: 'Journal Officiel Espagnol 2026',
    labelSubtitle: 'Le taux d\'intérêt légal reste fixé à 3,25% pour 2026, établi par la Loi de Budgets Généraux de l\'État.',
    labelLegalInterest: 'Intérêt Légal',
    labelDelayInterest: 'Intérêt de Retard',
    labelCommercialOperations: 'Opérations Commerciales',
    labelActive: 'En vigueur 2026',
    labelTributary: 'Fiscal (Fisc)',
    labelFirstHalf: 'Premier Semestre 2026',
    labelQuickCalculator: 'Calculatrice Rapide d\'Intérêt (3,25%)',
    labelCapital: 'Capital Dû',
    labelDays: 'Jours de Retard',
    labelInterestGenerated: 'Intérêt Généré',
    labelTotalToPay: 'Total à Payer',
    labelFormula: 'Cette calculatrice applique la formule standard d\'intérêt simple:',
    labelBase: 'Une base de 365 jours est utilisée pour les calculs officiels selon les réglementations espagnoles actuelles en 2026.',
    labelOfficialRegulation: 'Règlement Officiel',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
