import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'convertisseur-iban-bic-swift';
const title = 'Convertisseur IBAN en BIC SWIFT et Moteur de Recherche Bancaire';
const description = 'Obtenez le code BIC/SWIFT de n\'importe quel IBAN espagnol instantanément. Validateur de compte bancaire avec algorithme officiel et registres à jour pour les virements internationaux.';

const faqData = [
  {
    question: 'Qu\'est-ce qu\'un code BIC ou SWIFT?',
    answer: 'C\'est l\'identifiant international de votre banque. C\'est nécessaire pour que l\'argent sache vers quelle institution il doit être dirigé lorsqu\'il circule en dehors de la zone SEPA (Europe).',
  },
  {
    question: 'Comment connaître le code BIC de ma banque?',
    answer: 'Vous pouvez le consulter dans votre banque en ligne ou utiliser notre convertisseur. Pour les banques espagnoles, en entrant simplement l\'IBAN, nous extrayons le code d\'entité et vous donnons le BIC correspondant.',
  },
  {
    question: 'Est-il sûr d\'entrer mon IBAN ici?',
    answer: 'Complètement. Notre outil valide le code localement dans votre navigateur. Nous ne stockons ni n\'envoyons vos données bancaires à aucun serveur externe.',
  },
  {
    question: 'Pourquoi l\'IBAN espagnol a-t-il 24 caractères?',
    answer: 'C\'est une norme internationale. Les 4 premiers identifient le pays et la somme de contrôle, et les 20 autres sont l\'ancien Code Compte Client (Entité, Succursale, Contrôle et Numéro de Compte).',
  },
];

const howToData = [
  {
    name: 'Trouvez votre IBAN',
    text: 'Vous le trouverez sur votre carte bancaire, votre livret d\'épargne ou votre profil de banque en ligne.',
  },
  {
    name: 'Entrez-le dans le validateur',
    text: 'Tapez ou collez le code complet. Notre système le formatera automatiquement pour une lecture plus facile.',
  },
  {
    name: 'Appuyez sur le bouton de conversion',
    text: 'Le système validera que les chiffres de contrôle sont corrects à l\'aide de l\'algorithme Modulo 97.',
  },
  {
    name: 'Copiez le résultat',
    text: 'Vous obtiendrez le code BIC/SWIFT et le nom de la banque prêts à être copiés et utilisés.',
  },
];

const bibliographyData = [
  {
    name: 'ISO 13616 : Norme IBAN Internationale',
    url: 'https://www.iso.org/contents/data/standard/08/10/81090.html',
  },
  {
    name: 'SWIFT : Registre Mondial des BIC',
    url: 'https://www.theswiftcodes.com/fr',
  },
  {
    name: 'Banque d\'Espagne : Registre des Entités',
    url: 'https://www.bde.es/webbe/fr/estadisticas/otras-clasificaciones/clasificacion-entidades/listas-instituciones-financieras/listas-instituciones-financieras-monetarias-pais/lista-mfi-es.html',
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

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Références et Sources',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Convertisseur IBAN en BIC/SWIFT : Recherche Instantanée',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>code BIC/SWIFT</strong> est l\'identifiant international de votre banque, essentiel pour les virements internationaux en dehors de la zone SEPA. Notre convertisseur extrait automatiquement le code correct de votre IBAN espagnol en quelques secondes.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'IBAN (Numéro de Compte)',
          description: 'Identifiant unique international de votre compte bancaire.',
          points: [
            'Format standard international (ISO 13616)',
            '24 caractères en Espagne',
            'Inclut le pays, la somme de contrôle et les données du compte',
            'Validable à l\'aide de l\'algorithme Modulo 97',
          ],
        },
        {
          title: 'BIC/SWIFT (Code Bancaire)',
          description: 'Identifiant unique international de votre institution bancaire.',
          highlight: true,
          points: [
            'Code de 8 à 11 caractères',
            'Nécessaire pour les virements internationaux',
            'Obtenu à partir de l\'IBAN dans les banques espagnoles',
            'Enregistré dans le réseau SWIFT international',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'L\'IBAN espagnol suit le format <strong>ES</strong> (code pays) + <strong>2 chiffres de contrôle</strong> + <strong>4 chiffres d\'entité</strong> + <strong>4 chiffres de succursale</strong> + <strong>2 chiffres de contrôle</strong> + <strong>10 chiffres du numéro de compte</strong>. Au total 24 caractères contenant toutes les informations de votre compte.',
    },
  ],
  ui: {
    labelTitle: 'Convertisseur IBAN en BIC / SWIFT',
    labelDescription: 'Obtenez le code BIC de n\'importe quel compte bancaire espagnol instantanément.',
    labelInputIBAN: 'Entrez votre IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Obtenir le Code BIC',
    labelBIC: 'Code BIC / SWIFT',
    labelCountry: 'Pays / Format',
    labelBank: 'Institution Bancaire',
    labelError: 'L\'IBAN entré ne semble pas valide. Vérifiez les chiffres.',
    labelCopyButton: 'Copier',
    labelCopied: 'Copié',
    labelBankNotIdentified: 'Entité non identifiée',
    labelBankOutsideSpain: 'Banque en dehors de l\'Espagne (Données limitées)',
    labelInvalidIBAN: 'IBAN Invalide',
    labelFormattingOK: 'Format OK',
  },
};
