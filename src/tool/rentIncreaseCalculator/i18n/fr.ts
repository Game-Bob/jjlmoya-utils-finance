import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'calculatrice-augmentation-loyer';
const title = 'Calculatrice d\'Augmentation de Loyer Espagne 2026 Plafond Légal 3%';
const description = 'Calculez gratuitement l\'augmentation de votre loyer en Espagne selon l\'IPC ou le plafond légal de 3% de la Loi sur le Droit au Logement.';

const faqData = [
  {
    question: 'Quel est le pourcentage maximum d\'augmentation de loyer autorisé en 2024 et 2025?',
    answer: 'Selon la Loi 12/2023 sur le Droit au Logement, l\'augmentation annuelle maximale du loyer pour les résidences principales en 2024 et 2025 est limitée à 3% par la loi. Cette limite s\'applique même si l\'IPC (Indice des Prix à la Consommation) est supérieur.',
  },
  {
    question: 'Est-il obligatoire d\'augmenter le loyer chaque année selon l\'IPC?',
    answer: 'Non, ce n\'est pas obligatoire par la loi. Pour que le loyer augmente, le bail doit inclure une clause explicite mentionnant les ajustements annuels. Si aucune clause de ce type n\'existe, le prix initialement convenu reste en vigueur pendant la durée du contrat.',
  },
  {
    question: 'Quel délai le propriétaire doit-il respecter pour notifier une augmentation?',
    answer: 'Le propriétaire doit notifier le locataire par écrit au moins un mois (30 jours) avant la date d\'effet du nouveau loyer. Si la notification intervient plus tard, l\'augmentation ne s\'applique qu\'à partir du mois suivant la notification.',
  },
  {
    question: 'Que se passe-t-il si l\'IPC dépasse le plafond légal de 3%?',
    answer: 'Même si l\'IPC publié par l\'INE (Institut National de la Statistique) espagnol est de 5% ou 6%, le propriétaire d\'une résidence principale ne peut pas légalement exiger une augmentation supérieure à 3% en 2024-2025. Toute tentative de facturer plus est légalement contestable.',
  },
  {
    question: 'À quels types de contrats le plafond de 3% ne s\'applique-t-il pas?',
    answer: 'Le plafond ne s\'applique généralement pas aux locaux commerciaux, entrepôts industriels, bureaux ou places de parking indépendantes. Ceux-ci sont régis par ce que les parties conviennent librement dans le contrat.',
  },
];

const howToData = [
  {
    name: 'Entrez votre loyer actuel',
    text: 'Saisissez le montant mensuel que vous payez actuellement selon votre reçu de loyer.',
  },
  {
    name: 'Choisissez votre méthode de calcul',
    text: 'Sélectionnez le plafond légal de 3% (recommandé pour les résidences principales) ou entrez un pourcentage personnalisé.',
  },
  {
    name: 'Consultez les résultats',
    text: 'Obtenez le nouveau loyer estimé, l\'augmentation mensuelle et le surcoût annuel en un coup d\'œil.',
  },
  {
    name: 'Copiez le résumé',
    text: 'Générez un rapport rapide à envoyer à votre propriétaire ou à conserver pour vos dossiers.',
  },
];

const bibliographyData = [
  {
    name: 'Loi 12/2023 sur le Droit au Logement (BOE.es)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-12203',
  },
  {
    name: 'Calculatrice d\'IPC de l\'Institut National de la Statistique espagnol (INE)',
    url: 'https://www.ine.es/varipc/index.do',
  },
  {
    name: 'Loi sur les Baux Urbains - Texte Consolidé',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1994-26017',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Comprendre le Plafond Légal de 3% pour les Augmentations de Loyer',
  },
  {
    type: 'paragraph',
    html: 'La Loi 12/2023 sur le Droit au Logement en Espagne établit un <strong>plafond d\'augmentation annuel de 3%</strong> pour les loyers de résidences principales en 2024 et 2025. Cette mesure de protection des locataires prévaut sur l\'Indice des Prix à la Consommation (IPC) lorsqu\'il dépasse 3%.',
  },
  {
    type: 'title',
    text: 'Quand Utiliser le Calcul Manuel ou le Plafond Légal',
  },
  {
    type: 'paragraph',
    html: 'Utilisez cette calculatrice de deux façons: appliquez le <strong>plafond légal de 3%</strong> (recommandé pour les résidences principales) ou entrez un <strong>pourcentage personnalisé</strong> si vous calculez les augmentations pour les propriétés commerciales ou les périodes antérieures à 2024.',
  },
  {
    type: 'title',
    text: 'Que Doit Respecter une Augmentation de Loyer Valide',
  },
  {
    type: 'paragraph',
    html: '<strong>Pour qu\'une augmentation de loyer soit valide:</strong> Le bail doit inclure une clause d\'ajustement annuel. Le propriétaire doit donner un préavis écrit d\'au moins 30 jours. L\'augmentation ne peut pas dépasser 3% pour les résidences principales (2024-2025). Les locataires peuvent contester le non-respect de ces conditions.',
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

const howToSchema: WithContext<HowToThing> = {
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Sources et Références',
  ui: {
    labelTitle: 'Calculatrice d\'Augmentation de Loyer',
    labelDescription: 'Ajustez votre loyer selon l\'IPC ou appliquez le plafond légal de 3% de manière sûre.',
    labelCurrentRent: 'Loyer Actuel',
    labelCurrentRentPlaceholder: 'Ex. 800',
    labelIncrementType: 'Méthode de Calcul',
    labelLegalLimit: 'Plafond Légal (3%)',
    labelManualIncrement: 'Pourcentage Manuel (%)',
    labelManualPercentagePlaceholder: 'Ex. 2.5',
    labelNewRentEstimate: 'Nouveau Loyer Estimé',
    labelMonthlyIncrease: 'Augmentation Mensuelle',
    labelYearlyExtra: 'Surcoût Annuel',
    labelLegalBadge: 'Limité à 3% selon la Loi 12/2023',
    labelCopyButton: 'Copier pour le propriétaire',
    labelCopySuccess: 'Copié!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'fr-FR',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
