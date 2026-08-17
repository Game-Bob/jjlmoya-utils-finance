import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calculatrice-carte-revolving';
const title = 'Calculateur Carte Revolving et Usure';
const description = 'Simulez la durée et le coût de remboursement de votre carte de crédit revolving. Évaluez le risque d usure.';

const faqData = [{ question: 'Qu est-ce qu une carte revolving ?', answer: 'Le crédit renouvelable permet d emprunter au fur et à mesure avec des mensualités adaptables.' },
  { question: "Que faut-il vérifier avant d'utiliser le résultat ?", answer: "Vérifiez les données, unités, hypothèses et limites ; il s'agit d'une indication, pas d'une décision officielle." },
  { question: "Que faut-il vérifier avant d'utiliser le résultat ?", answer: "Vérifiez les données, unités, hypothèses et limites ; il s'agit d'une indication, pas d'une décision officielle." },
  { question: "Que faut-il vérifier avant d'utiliser le résultat ?", answer: "Vérifiez les données, unités, hypothèses et limites ; il s'agit d'une indication, pas d'une décision officielle." },];
const howToData = [{ name: 'Choisir le marché', text: 'Sélectionnez le pays ou un seuil personnalisé.' },
  { name: "Vérifier les hypothèses", text: "Contrôlez les données, unités et limites du calculateur avant d'interpréter le résultat." },
  { name: "Vérifier les hypothèses", text: "Contrôlez les données, unités et limites du calculateur avant d'interpréter le résultat." },
  { name: "Vérifier les hypothèses", text: "Contrôlez les données, unités et limites du calculateur avant d'interpréter le résultat." },];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
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
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },
  { type: 'paragraph', html: "Interprétez le résultat avec les hypothèses affichées par le calculateur avant de l'utiliser." },
  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },
  { type: 'paragraph', html: "Interprétez le résultat avec les hypothèses affichées par le calculateur avant de l'utiliser." },
  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },
  { type: 'paragraph', html: "Interprétez le résultat avec les hypothèses affichées par le calculateur avant de l'utiliser." },
  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },
  { type: 'paragraph', html: "Interprétez le résultat avec les hypothèses affichées par le calculateur avant de l'utiliser." },
  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },
  { type: 'paragraph', html: "Interprétez le résultat avec les hypothèses affichées par le calculateur avant de l'utiliser." },
  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },
  { type: 'paragraph', html: "Interprétez le résultat avec les hypothèses affichées par le calculateur avant de l'utiliser." },
  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },],
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
