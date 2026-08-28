import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calculatrice-carte-revolving';
const title = 'Calculateur Carte Revolving et Usure';
const description = 'Simulez la durée et le coût de remboursement de votre carte de crédit revolving. Évaluez le risque d usure.';

const faqData = [
  { question: 'Qu est-ce qu une carte revolving ?', answer: 'Le crédit renouvelable permet d emprunter au fur et à mesure avec des mensualités adaptables. Le solde restant est reporté et continue de produire des intérêts.' },
  { question: 'Pourquoi le remboursement peut-il durer si longtemps ?', answer: 'Lorsque la mensualité est presque égale aux intérêts du mois, seule une petite partie réduit le capital. Si elle est inférieure aux intérêts, la dette peut même augmenter.' },
  { question: 'Que signifie le contrôle de l usure ?', answer: 'Le contrôle compare le taux annuel effectif saisi avec le seuil du marché choisi. Il s agit d un repère de calcul et non d une qualification juridique définitive.' },
  { question: 'Que faut-il vérifier avant d utiliser le résultat ?', answer: 'Vérifiez le solde, le taux annuel effectif, la mensualité, les frais, le marché et les hypothèses. Le résultat est une indication et non une décision officielle.' },
];
const howToData = [
  { name: 'Choisir le marché', text: 'Sélectionnez l Espagne, les États-Unis, le Royaume-Uni ou un seuil personnalisé.' },
  { name: 'Saisir les données de la carte', text: 'Indiquez le solde restant, le plafond de crédit et le taux annuel effectif.' },
  { name: 'Définir le paiement', text: 'Comparez une mensualité fixe avec un pourcentage du solde et une mensualité minimale.' },
  { name: 'Lire le remboursement', text: 'Analysez les intérêts, la durée, le tableau d amortissement et le repère d usure.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: 'Comprendre le crédit revolving' }, { type: 'paragraph', html: 'Le crédit renouvelable ou revolving permet d emprunter avec des mensualités adaptables.' },
  { type: 'paragraph', html: "Une <strong>carte revolving</strong> permet de payer à crédit, mais un TAEG élevé peut transformer une dette flexible en engagement très long. Le solde restant est reporté sur la facture suivante et continue de produire des intérêts." },
  { type: 'paragraph', html: "Contrairement à un prêt dont la durée est prévue dès le départ, la durée dépend ici de la mensualité choisie. Une petite mensualité peut maintenir la dette pendant des années." },
  { type: 'paragraph', html: "Le TAEG est plus utile que la seule mensualité annoncée: vérifiez aussi les frais, assurances et conditions avant de comparer deux cartes." },
  { type: 'paragraph', html: "Quand le paiement est fixé en pourcentage du solde, son montant baisse souvent en même temps que la dette. La part qui rembourse le capital peut alors devenir de plus en plus faible." },
  { type: 'paragraph', html: "Les intérêts du mois sont servis en premier et seul le reste réduit le capital. Si la mensualité est inférieure aux intérêts, le solde augmente et le simulateur peut signaler une dette perpétuelle." },
  { type: 'paragraph', html: "Le tableau d amortissement sépare intérêts, capital et solde final pour montrer si votre paiement réduit réellement la dette." },
  { type: 'paragraph', html: "Choisissez l Espagne, les États-Unis, le Royaume-Uni ou un seuil personnalisé, puis saisissez le solde restant, le plafond de crédit et le TAEG." },
  { type: 'paragraph', html: "Comparez une mensualité fixe avec un pourcentage du solde. Dans ce second cas, le montant minimal absolu évite que la mensualité devienne trop faible lorsque le solde diminue." },
  { type: 'paragraph', html: "Lisez ensemble les intérêts totaux, le montant total remboursé et le nombre de mois. La mensualité la plus basse n est généralement pas la moins coûteuse." },
  { type: 'paragraph', html: "Le contrôle d usure compare le taux saisi avec le seuil du marché sélectionné. Il fournit un repère automatique et non une conclusion juridique définitive sur le contrat." },
  { type: 'paragraph', html: "En Espagne, l appréciation d une carte revolving peut dépendre de la comparaison avec le taux moyen en vigueur au moment de la signature. Les règles et plafonds diffèrent selon les pays." },
  { type: 'paragraph', html: "Un avertissement ne prouve pas à lui seul une infraction, et un résultat normal n exclut pas d autres clauses problématiques. Pour un contrat précis, demandez un avis local." },
  { type: 'paragraph', html: "La simulation utilise le solde, le TAEG et les paiements réguliers saisis. Elle suppose qu il n y a ni nouvel achat, ni frais de retard, ni changement de taux." },
  { type: 'paragraph', html: "Un relevé réel peut appliquer des intérêts quotidiens, des frais ou une répartition différente des paiements. Ces détails peuvent modifier la durée et le coût final." },
  { type: 'paragraph', html: "Utilisez le résultat pour préparer vos questions à la banque et comparer des scénarios ; il ne remplace ni le relevé, ni le contrat, ni une analyse professionnelle." },
  { type: 'paragraph', html: "Pour sortir de la spirale, une mensualité fixe nettement supérieure aux intérêts du mois est souvent plus facile à planifier qu un très faible pourcentage. Évitez d augmenter le solde pendant le remboursement." },
  { type: 'paragraph', html: "Avant de regrouper ou de changer de produit, comparez TAEG, frais, durée et montant total remboursé, pas seulement la mensualité. Une mensualité réduite peut coûter davantage au total." },
  { type: 'paragraph', html: "Actualisez le simulateur lorsque le solde, la mensualité ou le taux change et gardez le plan comme repère de progression." },],
  ui: {
    title: 'Simulateur Carte Revolving & Test d Usure',
    balanceLabel: 'Solde Restant Dû',
    creditLimitLabel: 'Plafond de Crédit',
    aprLabel: 'Taux d Intérêt (TAEG / APR)',
    paymentTypeLabel: 'Mode de Paiement',
    paymentTypeFixed: 'Mensualité Fixe',
    paymentTypePercentage: 'Pourcentage du Solde',
    paymentValueLabel: 'Valeur du Paiement (Montant ou %)',
    minPaymentValueLabel: 'Mensualité Minimale Exigée',
    currencyLabel: 'Devise',
    marketLabel: 'Marché Réglementaire / Pays',
    marketES: 'Espagne (Banco de España)',
    marketUS: 'États-Unis (CFPB)',
    marketUK: 'Royaume-Uni (FCA)',
    marketEU: 'Union Européenne (BCE)',
    marketJP: 'Japon (FSA)',
    marketKR: 'Corée du Sud (FSC)',
    marketCN: 'Chine (PBOC)',
    marketBR: 'Brésil (Banco Central)',
    marketMX: 'Mexique (Banco de México)',
    marketPL: 'Pologne (KNF)',
    marketID: 'Indonésie (OJK)',
    marketTR: 'Turquie (BRSA)',
    marketRU: 'Russie (Banque Centrale)',
    marketSE: 'Suède (Finansinspektionen)',
    marketAU: 'Australie (ASIC)',
    marketCA: 'Canada (FCAC)',
    marketCustom: 'Seuil Personnalisé',
    customThresholdLabel: 'Seuil d Usure Personnalisé (TAEG %)',

    resultsTitle: 'Résultats de la Simulation',
    totalInterestLabel: 'Total des Intérêts Payés',
    totalPaidLabel: 'Total Remboursé',
    monthsToPayLabel: 'Durée de Remboursement',
    infiniteDebtWarning: 'Dette infinie ! Les mensualités ne couvrent pas les intérêts.',
    payoffYearsLabel: 'Échéancier de Remboursement',

    usuryTitle: 'Analyse d Usure et Conformité',
    usurySafeStatus: 'Standard (Risque Faible)',
    usuryWarningStatus: 'Taux Élevé (Risque Moyen)',
    usuryUsuriousStatus: 'Potentiellement Usuraire (Risque Élevé)',
    usuryReferenceLabel: 'TAEG Moyen du Marché',
    usuryThresholdLabel: 'Seuil d Alerte d Usure',

    tableTitle: 'Tableau d Amortissement Mensuel',
    tableHeaderMonth: 'Mois',
    tableHeaderInitial: 'Solde Initial',
    tableHeaderInterest: 'Intérêts',
    tableHeaderPrincipal: 'Capital Amorti',
    tableHeaderPayment: 'Mensualité',
    tableHeaderFinal: 'Solde Final',

    copyTooltip: 'Copier le Rapport',
    copiedLabel: 'Rapport Copié !',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
