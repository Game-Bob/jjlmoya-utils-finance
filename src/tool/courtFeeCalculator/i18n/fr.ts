import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
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
    text: 'Calculatrice de Frais Judiciaires Espagnols - Formulaire 696',
  },
  {
    type: 'paragraph',
    html: 'Les <strong>frais judiciaires</strong> en Espagne sont régis par la <strong>Loi 10/2012</strong> et affectent les entreprises et les professionnels. Le calcul est effectué automatiquement en considérant la part fixe basée sur le type de procédure et la part variable de 0,5% du montant du litige.',
  },
  {
    type: 'title',
    text: 'Exonérations et Cas Particuliers',
  },
  {
    type: 'paragraph',
    html: 'Les <strong>particuliers sont complètement exonérés</strong> des frais judiciaires depuis 2016. Dans les procédures pénales, il n\'y a également pas de frais. L\'ordre social a des règles spécifiques pour le calcul des frais.',
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
