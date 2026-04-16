import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CourtFeeCalculatorUI } from '../ui';

const slug = 'calculatrice-frais-judiciaires-espagne';
const title = 'Calculatrice de Frais Judiciaires Espagne';
const description = 'Calculez les frais judiciaires exacts pour les entreprises espagnoles selon la Loi 10/2012. Calculatrice automatique du formulaire 696 avec exemptions.';

const faqData = [
  {
    question: 'Les particuliers sont-ils exonérés des frais judiciaires en Espagne?',
    answer: 'Oui, depuis 2016, les particuliers sont complètement exonérés du paiement des frais judiciaires en Espagne dans tous les ordres juridictionnels.',
  },
  {
    question: 'Quel est le montant maximum des frais judiciaires?',
    answer: 'La part variable est plafonnée à 10 000 euros. Combinée avec la part fixe, le total maximum varie en fonction du type de procédure.',
  },
  {
    question: 'Qu\'est-ce que le Formulaire 696?',
    answer: 'C\'est le formulaire officiel de l\'Administration fiscale utilisé pour l\'auto-liquidation des frais de l\'exercice du pouvoir juridictionnel en Espagne.',
  },
  {
    question: 'Y a-t-il des frais judiciaires en matière pénale?',
    answer: 'Non, il n\'y a pas de frais judiciaires pour les procédures pénales en Espagne.',
  },
  {
    question: 'Comment est calculée la part variable?',
    answer: 'La part variable est de 0,5% du montant du litige jusqu\'à 1 million d\'euros. Au-delà, elle est de 0,25%. Le maximum est de 10 000 euros.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez le type de contribuable',
    text: 'Indiquez si vous êtes une personne physique (exonérée) ou une personne morale (entreprise). Les particuliers ne paient pas de frais.',
  },
  {
    name: 'Choisissez la juridiction et le type de procédure',
    text: 'Sélectionnez l\'ordre juridictionnel (Civil, Administratif ou Social) et le type de procédure.',
  },
  {
    name: 'Entrez le montant du litige',
    text: 'Écrivez le montant total réclamé dans la plainte. Pour l\'ordre social, ce champ ne s\'applique pas.',
  },
  {
    name: 'Consultez le détail',
    text: 'Obtenez le calcul automatique avec part fixe, part variable et total pour le formulaire 696.',
  },
];

const bibliographyData = [
  {
    name: 'Loi 10/2012 sur les Frais Judiciaires (Bulletin Officiel)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-14301',
  },
  {
    name: 'Décision de la Cour Constitutionnelle 140/2016 sur les Frais Judiciaires',
    url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2016-7905',
  },
  {
    name: 'Administration Fiscale Espagnole - Formulaire 696',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GC07.shtml',
  },
  {
    name: 'Conseil Général du Pouvoir Judiciaire - Information sur les Frais',
    url: 'https://www.cgpj.es/es/Inicio',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Calculatrice de Frais Judiciaires en Espagne: Guide Complet',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La <strong>Calculatrice de Frais Judiciaires</strong> est un outil technique conçu pour déterminer avec précision le coût fiscal du pouvoir juridictionnel en Espagne. Depuis la réforme de la Loi 10/2012, le calcul de ces frais est devenu une tâche critique pour la planification procédurale des entreprises et des professionnels du droit.',
  },
  {
    type: 'card',
    title: 'Aspects Clés des Frais Judiciaires',
    html: '<ul><li>Obligatoires uniquement pour les <strong>personnes morales</strong> (entreprises).</li><li>Assujettis au <strong>Formulaire 696</strong> de l\'Administration fiscale.</li><li>Composés d\'une <strong>part fixe</strong> et d\'une <strong>part variable</strong>.</li><li>Plafond de la part variable fixé à <strong>10 000 €</strong>.</li></ul>',
  },
  {
    type: 'card',
    html: '<p>Cet outil simule l\'auto-liquidation du tribut, en détaillant les montants selon l\'ordre juridictionnel (Civil, Administratif ou Social) et le montant du litige, permettant de prévoir l\'impact financier avant l\'engagement du procès.</p>',
  },
  {
    type: 'title',
    text: 'Qui Doit Payer les Frais Judiciaires en 2026?',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'La loi actuelle, suite à la décision historique de la <strong>Cour Constitutionnelle 140/2016</strong>, établit un cadre d\'exonération clair qui protège l\'accès à la justice des citoyens individus.',
  },
  {
    type: 'list',
    items: [
      '<strong>Personnes Physiques:</strong> Jouissent d\'une exonération absolue dans tous les ordres juridictionnels.',
      '<strong>Personnes Morales:</strong> Sont les principaux sujets passifs du tribut.',
      '<strong>Sujets Spéciaux:</strong> Les entités d\'utilité publique et les administrations sont exonérées.',
    ],
  },
  {
    type: 'title',
    text: 'Structure Technique de la Redevance',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le calcul mathématique effectué par notre outil se divise en deux composantes obligatoires qui s\'ajoutent pour obtenir le total du Formulaire 696.',
  },
  {
    type: 'title',
    text: '1. Part Fixe par Procédure',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'Déterminée par le type d\'action juridique intentée. Un jugement civil ordinaire entraîne une redevance de 300 €, tandis qu\'un pourvoi en cassation devant la Cour Suprême s\'élève à 1 200 €.',
  },
  {
    type: 'title',
    text: '2. Part Variable par Montant du Litige',
    level: 4,
  },
  {
    type: 'paragraph',
    html: 'S\'applique à la base imposable du procès. Pour les entreprises, les taux de taxation s\'appliquent de manière échelonnée.',
  },
  {
    type: 'table',
    headers: ['Tranche de Montant', 'Taux Applicable'],
    rows: [
      ['Jusqu\'à 1 000 000 €', '<strong>0,50%</strong>'],
      ['Dépassement de 1 000 000 €', '<strong>0,25%</strong>'],
      ['Limite Maximale Variable', '<strong>10 000 €</strong>'],
    ],
  },
  {
    type: 'title',
    text: 'Frais dans des Ordres Juridictionnels Spécifiques',
    level: 2,
  },
  {
    type: 'title',
    text: 'Juridiction Civile',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'C\'est le domaine avec le plus grand volume de liquidations. Couvre les procédures monitoires, verbales, ordinaires et les exécutions. Notre calculatrice ajuste automatiquement la redevance fixe selon la complexité de la procédure choisie.',
  },
  {
    type: 'title',
    text: 'Ordre Contentieux Administratif',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'S\'applique dans les litiges contre l\'Administration. Les montants varient selon qu\'il s\'agit d\'une procédure abrégée (200 €) ou ordinaire (350 €), plus les tranches variables correspondantes.',
  },
  {
    type: 'tip',
    title: 'Référence Légale',
    html: '<p>Consultez toujours la Loi 10/2012 pour les cas particuliers d\'exonération partielle ou les remises pour utilisation de moyens télématiques.</p>',
  },
  {
    type: 'title',
    text: 'Conséquences de l\'Omission du Paiement',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'L\'introduction d\'une action en justice par une partie obligée sans le justificatif de paiement correspondant entraîne une demande de régularisation. Le non-respect de ce délai de 10 jours entraîne le classement définitif des procédures.',
  },
  {
    type: 'card',
    title: 'Avantages de la Simulation Préalable',
    html: '<ul><li>Précision absolue dans la quantification des frais de procédure.</li><li>Évite les retards dus aux erreurs d\'auto-liquidation du Formulaire 696.</li><li>Optimise la prise de décision financière dans la stratégie juridique.</li></ul>',
  },
  {
    type: 'paragraph',
    html: 'Notre <strong>Calculatrice de Frais Judiciaires</strong> garantit que les professionnels et les entreprises opèrent avec des données mises à jour jusqu\'en 2026, respectant la rigueur technique qu\'exige la pratique juridique moderne.',
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

export const content: ToolLocaleContent<CourtFeeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Sources et Références',
  ui: {
    labelTitle: 'Calculatrice de Frais Judiciaires',
    labelDescription: 'Calculez le montant exact du formulaire 696 selon la juridiction, la procédure et le montant du litige. Pour les entreprises et professionnels espagnols.',
    labelLegalParameters: 'Paramètres Légaux',
    labelEntityType: 'Type de Contribuable',
    labelJurisdiction: 'Juridiction',
    labelProcedure: 'Type de Procédure',
    labelClaimAmount: 'Montant du Litige',
    labelEstimatedSettlement: 'Liquidation Estimée',
    labelExemptSubject: 'Contribuable Exonéré',
    labelFixedQuote: 'Part Fixe (Procédurale)',
    labelVariableQuote: 'Part Variable (0,5% / 0,25%)',
    labelTaxableBase: 'Base Imposable',
    labelCopySettlement: 'Copier la Liquidation',
    labelEntityJuridica: 'Personne Morale (SARL, SA)',
    labelEntityFisica: 'Personne Physique (Exonérée)',
    labelCivilOrder: 'Ordre Civil',
    labelAdministrativeOrder: 'Administratif',
    labelSocialOrder: 'Ordre Social',
    labelModel696: 'Formulaire 696',
    labelOrdinary: 'Jugement Ordinaire',
    labelVerbal: 'Jugement Verbal / Suivi',
    labelExecutive: 'Exécutoire',
    labelAppeal: 'Appel',
    labelCassation: 'Cassation',
    labelAbbreviated: 'Abrégé',
    labelSupplication: 'Supplique',
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
