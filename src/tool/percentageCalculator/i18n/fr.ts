import { bibliography } from '../bibliography'
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
  faq: faqData,
  bibliography,
  
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculatrice de Pourcentages 4-en-1 : Maîtrisez les Calculs Rapides',
      level: 2,
    },
    {
      type: 'title',
      text: 'Pourquoi Vous Avez Besoin d\'une Calculatrice de Pourcentages Polyvalente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Calculer des pourcentages est l\'une des opérations mathématiques les plus courantes de notre vie quotidienne. Qu\'il s\'agisse de calculer la réduction lors des soldes, de déterminer le pourboire approprié au restaurant, de déterminer les marges bénéficiaires en affaires ou de comprendre les intérêts des prêts. Malgré le fait que ce sont des opérations de tous les jours, ce n\'est pas toujours facile de les faire mentalement ou de mémoriser la formule exacte.',
    },
    {
      type: 'paragraph',
      html: 'Notre calculatrice de pourcentages 4-en-1 regroupe les scénarios les plus courants que vous rencontrerez. Plus besoin de chercher sur Google "comment calculer 20 pour cent" ou "formule de pourcentage". Vous avez les quatre opérations essentielles au même endroit, interactif et avec des résultats instantanés.',
    },
    {
      type: 'title',
      text: 'Exploration des 4 Cas d\'Utilisation Les Plus Courants',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour vous faciliter la vie, nous avons séparé l\'outil en quatre blocs visuels clairs qui résolvent les problèmes du monde réel que vous rencontrez quotidiennement:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Combien Font X% de Y?',
      html: '<p><strong>Le cas classique.</strong> Parfait pour calculer les réductions ou les pourboires. Si vous voulez savoir ce que représente 15% de 100€, c\'est l\'outil qu\'il vous faut. La formule sous-jacente divise simplement le pourcentage par 100 et le multiplie par la valeur totale.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Quel Pourcentage Représente X de Y?',
      html: '<p><strong>Idéal pour les proportions.</strong> Si vous avez obtenu 45 points sur 60 à un examen, quel est votre pourcentage? Cette fonction divise la partie par le total et multiplie par 100, vous donnant le poids relatif exact.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Augmentation ou Diminution Percentuelle',
      html: '<p><strong>Parfait pour la finance et l\'analytique.</strong> De combien votre loyer a-t-il augmenté depuis l\'année dernière? Si vous payiez 800€ avant et 840€ maintenant, cette fonction vous indique une augmentation de 5%. Elle mesure la croissance ou le déclin entre deux chiffres.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Ajouter ou Soustraire un Pourcentage d\'une Valeur',
      html: '<p><strong>Très utile pour la TVA.</strong> Si vous avez un prix de base (par ex. 100€) et devez ajouter 20% de TVA, cette calculatrice vous donne directement les 120€ finaux sans étapes intermédiaires. De la même manière, cela fonctionne pour appliquer des réductions directement (par ex. soustraire 20%).</p>',
    },
    {
      type: 'title',
      text: 'Mythes Courants sur les Calculs de Pourcentages',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nous nous bloquons souvent en voyant de grands pourcentages ou des décimales, mais il y a des "astuces" mathématiques qui peuvent vous faciliter la vie. La plus célèbre est la <strong>réversibilité des pourcentages</strong>.',
    },
    {
      type: 'tip',
      title: 'L\'Astuce de Réversibilité',
      html: '<p>Saviez-vous que X% de Y est exactement égal à Y% de X? Par exemple, si on vous demande de calculer 18% de 50 de tête, cela semble compliqué. Mais inversez-le—50% de 18 est facile: c\'est 9! Cela fonctionne pour absolument tous les nombres et c\'est une astuce incroyable au quotidien.</p>',
    },
    {
      type: 'title',
      text: 'Pourquoi Nous Échouons aux Calculs de Croissance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'une des erreurs les plus courantes se produit au Cas 3: augmentation ou diminution percentuelle. Imaginez qu\'une action coûte 100€, baisse de 50%, puis augmente de 50% le lendemain. Votre intuition dit qu\'elle revient à 100€, mais c\'est faux.',
    },
    {
      type: 'paragraph',
      html: 'Si elle baisse de 50% depuis 100€, la nouvelle valeur est 50€. Si elle augmente alors de 50% à partir de ces 50€, le gain est la moitié de 50€ (ce qui est 25€). Donc le prix final est 75€. Cet exemple classique montre pourquoi les augmentations et diminutions de pourcentage ne sont pas symétriques, et pourquoi les calculatrices dynamiques comme celle-ci préviennent les erreurs financières graves.',
    },
    {
      type: 'title',
      text: 'Utilisation Professionnelle et Académique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Notre interface est sans distraction et conçue pour <strong>travailler rapidement</strong>. Épinglez-la en tant qu\'onglet de navigateur, basculez rapidement entre les champs, et utilisez le bouton de copie à côté des résultats pour transférer les chiffres exacts vers Excel ou Google Sheets sans risque d\'erreur de frappe.',
    },
    {
      type: 'list',
      items: [
        'Commerce électronique et magasins de détail: Calcul rapide des prix de vente au détail en appliquant les marges bénéficiaires et la TVA.',
        'Ressources humaines: Détermination des écarts salariaux, retenues fiscales et augmentations de salaire indexées sur l\'inflation.',
        'Enseignement supérieur: Enseignants courbes de notation ou étudiants STIM analysant la déviation expérimentale.',
        'Marketing numérique: Mesure du CTR (Taux de Clic), ROAS (Retour sur Dépenses Publicitaires), ou taux de conversion d\'e-commerce.',
      ],
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
