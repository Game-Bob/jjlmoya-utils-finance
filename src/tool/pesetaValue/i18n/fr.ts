import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'convertisseur-pesetas-euros-valeur-2026';
const title = 'Convertisseur de pesetas en euros: valeur en 2026';
const description = 'Convertissez les anciennes pesetas espagnoles en euros au taux fixe de 166,386 pesetas par euro et estimez leur pouvoir d achat jusqu en 2026 avec l IPC espagnol.';

const faq = [
  { question: 'Combien valent 1 000 pesetas en euros?', answer: '1 000 pesetas valent 6,01 euros au taux de conversion fixe. Le calculateur affiche aussi une estimation séparée du pouvoir d achat de cette somme pour l année choisie.' },
  { question: 'Combien valent un million de pesetas en euros?', answer: 'Un million de pesetas valent 6 010,12 euros au taux fixe. Leur pouvoir d achat estimé en 2026 dépend de l année où la somme a été utilisée.' },
  { question: 'Comment convertir les pesetas en euros?', answer: 'Divisez la somme en pesetas par 166,386. Par exemple, 100 pesetas valent 0,60 euro et 10 000 pesetas valent 60,10 euros.' },
  { question: 'Que vaudraient les anciennes pesetas en 2026?', answer: 'Il existe deux réponses. La conversion fixe donne la somme légale en euros et le résultat corrigé par l IPC estime la somme nécessaire en 2026 pour une consommation moyenne comparable.' },
  { question: 'Le calculateur donne-t-il la valeur de collection d une pièce ou d un billet?', answer: 'Non. Il calcule la conversion monétaire et le pouvoir d achat moyen. Une pièce rare ou un billet de collection peut avoir une autre valeur selon son état, sa rareté et la demande.' },
  { question: 'Quelles années le convertisseur utilise-t-il?', answer: 'Vous pouvez choisir une année d origine de 1980 à 2026. La référence 2026 utilise les dernières données CPI publiées disponibles et ne constitue pas encore une moyenne annuelle complète.' },
  { question: 'L estimation du pouvoir d achat est-elle un prix exact?', answer: 'Non. Il s agit d une comparaison moyenne fondée sur le CPI, pas d un prix exact pour le logement, les salaires, l alimentation, l énergie ou un achat précis.' },
];

const howTo = [
  { name: 'Saisir le montant en pesetas', text: 'Entrez le montant figurant sur un reçu, un billet, une pièce ou un document historique.' },
  { name: 'Choisir l année', text: 'Sélectionnez la décennie puis l année où le montant a été utilisé.' },
  { name: 'Lire la conversion fixe', text: 'Consultez le montant nominal obtenu en divisant les pesetas par 166,386.' },
  { name: 'Comparer le pouvoir d achat', text: 'Comparez la conversion fixe avec l estimation du pouvoir d achat moyen en 2026.' },
];

const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' } as WithContext<SoftwareApplication>,
];

export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: {
    labelAmount: 'Montant historique', labelAmountHint: 'Choisir un point de départ', labelOriginYear: 'Année d origine', labelOriginYearHint: 'Moyenne annuelle de l IPC si disponible', labelReferenceYear: 'Référence 2026 à ce jour', labelNominalEuros: 'Conversion fixe', labelTodayValue: 'Pouvoir d achat estimé', labelPurchasingPowerChange: 'Évolution du pouvoir d achat', labelNominalDifference: 'Écart avec la conversion', labelConversionRate: 'Pesetas par euro', labelCpiMethod: 'Multiplicateur IPC', labelPreset100: '100 ptas', labelPreset1000: '1 000 ptas', labelPreset10000: '10 000 ptas', labelPreset100000: '100 000 ptas', labelPesetas: 'pesetas', labelEuro: 'euros', labelFrom: 'De', labelTo: 'À', labelOpenYears: 'Ouvrir les années d origine', labelCloseYears: 'Fermer les années d origine', labelDecade: 'Choisir une décennie', labelCoin: 'pièce', labelBanknote: 'billet', labelCashPieces: 'espèces', labelState: 'évolution de la valeur', labelStatePositive: 'en hausse', labelStateNeutral: 'stable', labelStateNegative: 'en baisse', labelReset: 'Réinitialiser l exemple', currencyLocale: 'fr-FR',
  },
  seo: [
    { type: 'title', text: 'Pesetas en euros: deux réponses selon votre question', level: 2 },
    { type: 'paragraph', html: 'Si vous avez un ancien prix, salaire, reçu, billet ou pièce en pesetas espagnoles, ce convertisseur donne deux réponses. Il affiche d abord la conversion fixe en euros, puis une estimation de ce que cette somme représente en pouvoir d achat en 2026 selon l évolution des prix en Espagne.' },
    { type: 'title', text: 'Conversions courantes des pesetas en euros', level: 2 },
    { type: 'paragraph', html: 'Le taux fixe est toujours de 166,386 pesetas pour 1 euro. L année ne modifie pas cette conversion nominale.' },
    { type: 'table', headers: ['Ancien montant', 'Conversion fixe'], rows: [['1 peseta', '0,01 euro'], ['25 pesetas', '0,15 euro'], ['50 pesetas', '0,30 euro'], ['100 pesetas', '0,60 euro'], ['500 pesetas', '3,01 euros'], ['1 000 pesetas', '6,01 euros'], ['2 000 pesetas', '12,02 euros'], ['5 000 pesetas', '30,05 euros'], ['10 000 pesetas', '60,10 euros'], ['1 million de pesetas', '6 010,12 euros']] },
    { type: 'title', text: 'Que valaient les pesetas en 2026?', level: 2 },
    { type: 'paragraph', html: 'Le résultat corrigé par l IPC répond à une question différente de la conversion en euros. Il estime combien d euros en 2026 permettraient d acheter un panier moyen comparable à celui acheté avec le montant choisi pendant son année d origine. La référence 2026 couvre les dernières données publiées à ce jour et non une moyenne annuelle terminée.' },
    { type: 'table', headers: ['Résultat', 'Signification'], rows: [['Conversion fixe', 'Le montant nominal exact en euros au taux officiel.'], ['Valeur corrigée par l IPC', 'Une estimation du pouvoir d achat moyen équivalent en 2026.'], ['Écart', 'La différence entre la conversion fixe et l estimation IPC.']] },
    { type: 'title', text: 'Comment calculer un ancien montant en pesetas', level: 2 },
    { type: 'list', items: ['Saisissez le montant du reçu, du billet, de la pièce ou du document.', 'Sélectionnez l année où le montant a été utilisé ou reçu.', 'Utilisez la conversion fixe pour obtenir l équivalence directe en euros.', 'Utilisez la valeur IPC pour comprendre le pouvoir d achat historique.', 'Lisez l écart comme un contexte d inflation, pas comme une prévision de prix personnelle.'] },
    { type: 'title', text: 'Les pièces et billets ne valent pas automatiquement ce prix de collection', level: 2 },
    { type: 'paragraph', html: 'Cet outil calcule la monnaie et l inflation, pas une expertise numismatique. Une pièce rare ou un billet ancien peut avoir une valeur de marché différente selon son année, son état, sa rareté et la demande.' },
    { type: 'tip', title: 'L année change le pouvoir d achat, pas le taux de change', html: 'Le taux officiel reste de 166,386 pesetas par euro. Seule la comparaison IPC change avec l année d origine et elle décrit toujours un panier moyen de consommation.' },
  ],
  faq, bibliography, howTo, schemas,
};
