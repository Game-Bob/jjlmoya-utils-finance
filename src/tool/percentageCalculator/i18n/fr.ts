import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'calculatrice-pourcentages';
const title = 'Calculatrice de Pourcentages: 4 en 1 pour Réductions, TVA et Majorations';
const description =
  'Calculez facilement les pourcentages en ligne gratuitement. 4 outils en 1 pour trouver X% de Y, différence en pourcentage, ajouter ou soustraire la TVA, réductions et calculs de pourboires automatiquement.';

const faqData = [
  {
    question: 'Comment fonctionne la calculatrice?',
    answer:
      'Il suffit de saisir les valeurs dans les champs du cas d\'utilisation qui correspond à votre problème et notre calculatrice traite la formule sans avoir besoin d\'appuyer sur un bouton de calcul.',
  },
  {
    question: 'Est-elle valable pour calculer la TVA ou les impôts?',
    answer:
      'Oui, le cas 4 (Ajouter ou soustraire un pourcentage) est conçu précisément pour les cas comme appliquer une TVA de 21% à un prix de base ou calculer un impôt sur le revenu négatif.',
  },
  {
    question: 'Gère-t-elle les décimales et les nombres négatifs?',
    answer:
      'Bien sûr. Vous pouvez entrer des nombres décimaux (en utilisant un point) et cela fonctionnera également avec des valeurs négatives si vous avez besoin d\'analyser les soldes comptables en pertes.',
  },
  {
    question: 'Puis-je copier les résultats?',
    answer:
      'Oui, chaque cas a un bouton dans la zone de résultat qui copie instantanément le nombre dans le presse-papiers de votre appareil pour que vous puissiez le coller dans une autre application ou document.',
  },
];

const howToData = [
  {
    name: 'Identifiez votre problème mathématique',
    text: 'Lisez les titres des 4 cas et choisissez celui qui correspond à ce que vous voulez savoir (Ex. Quel est 20% de 50? → Cas 1).',
  },
  {
    name: 'Entrez les nombres',
    text: 'Remplissez les champs X et Y. Ne vous inquiétez pas de l\'ordre, le texte de chaque cas vous guide visuellement.',
  },
  {
    name: 'Copiez le résultat instantané',
    text: 'Le nombre apparaîtra en temps réel ci-dessous à mesure que vous tapez. Cliquez sur l\'icône de copie si vous souhaitez l\'utiliser ailleurs.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources et Références',
  bibliography: [
    {
      name: 'Calcul des Pourcentages: Wikipédia',
      url: 'https://fr.wikipedia.org/wiki/Pourcentage',
    },
    {
      name: 'Concepts Mathématiques de Base: Khan Academy',
      url: 'https://fr.khanacademy.org/math/pre-algebra',
    },
    {
      name: 'Direction Générale des Finances Publiques: Guides de TVA',
      url: 'https://www.impots.gouv.fr/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Les 4 Formules Essentielles de Pourcentages',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les pourcentages apparaissent dans presque tout: achats avec réduction, impôts, changements de prix et analyse de données. Apprenez les 4 formules essentielles dont vous avez besoin.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Cas 1 et 2: Relations de Base',
          description: 'Trouver une partie du tout, ou savoir quelle proportion est une quantité.',
          points: [
            'X% de Y: appliquer un pourcentage à une quantité',
            'X est quel % de Y: trouver le pourcentage relatif',
            'Utilisés dans: réductions, pourboires, analyse',
            'Formules simples de règle de trois',
          ],
        },
        {
          title: 'Cas 3 et 4: Changements et Ajustements',
          description: 'Mesurer les changements entre les valeurs ou ajuster une valeur par un pourcentage.',
          highlight: true,
          points: [
            'Différence en pourcentage: comparer la valeur initiale et finale',
            'Ajouter/soustraire %: appliquer la TVA, réductions, impôts',
            'Utilisés dans: rapports financiers, budgets',
            'Essentiel pour la comptabilité et les statistiques',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Maîtrisez ces formules et vous résoudrez 95% des problèmes de pourcentage dans votre vie quotidienne: du contrôle si une réduction est bonne, au calcul de votre salaire net avec impôts.',
    },
  ],
  ui: {
    labelTitle: 'Calculatrice de Pourcentages',
    labelCase1Title: 'Cas 1',
    labelCase1Question: 'Quel est X% de Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formule: (X / 100) × Y',
    labelCase2Title: 'Cas 2',
    labelCase2Question: 'Quel pourcentage est X de Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formule: (X / Y) × 100',
    labelCase3Title: 'Cas 3',
    labelCase3Question: 'Différence en pourcentage entre deux valeurs',
    labelCase3Placeholder1: 'Valeur 1',
    labelCase3Placeholder2: 'Valeur 2',
    labelCase3Formula: 'Formule: ((Valeur 2 - Valeur 1) / |Valeur 1|) × 100',
    labelCase4Title: 'Cas 4',
    labelCase4Question: 'Ajouter ou soustraire un pourcentage à une valeur',
    labelCase4Placeholder1: 'Valeur',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formule: Valeur ± (Valeur × (% / 100))',
    labelCase4AddLabel: 'Ajouter (Valeur + %)',
    labelCase4SubtractLabel: 'Soustraire (Valeur - %)',
    labelResult: 'Résultat',
    labelDifference: 'Différence',
    labelCopyTooltip: 'Copier le résultat',
    labelFormula: 'Formule',
    percentSymbol: '%',
  },
};
