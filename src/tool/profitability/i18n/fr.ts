import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Investissement Initial',
  labelFinalValue: 'Valeur Finale / Solde Actuel',
  labelTimeSelection: 'Durée de l\'Investissement',
  labelYears: 'Ans',
  labelMonths: 'Mois',
  labelDays: 'Jours',
  labelROI: 'Retour sur Investissement (ROI)',
  labelCAGR: 'Croissance Annualisée (CAGR)',
  labelNetProfit: 'Bénéfice Net',
  labelLinearGrowth: 'Croissance Linéaire (Estimée)',
  labelExponentialGrowth: 'Croissance Composée (CAGR)',
  labelPositiveResult: 'Investissement Rentable',
  labelNegativeResult: 'Position Déficitaire',
  labelCopyResult: 'Copier les Résultats',
  labelCopied: 'Copié !',
};

const slug = 'calculateur-rentabilite-investissement-roi-cagr';
const title = 'Calculateur de Rentabilité : ROI & CAGR';
const description = 'Analysez la performance de vos investissements. Calculez le ROI total et le CAGR pour comprendre vos gains réels.';

const faq = [
  {
    question: 'Qu\'est-ce qu\'un bon CAGR ?',
    answer: 'Cela dépend de l\'actif. Le S&P 500 tourne historiquement autour de 7-10% par an.',
  },
  {
    question: 'Pourquoi mon CAGR est-il différent de mon ROI total ?',
    answer: 'Le ROI est le rendement total sans tenir compte du temps. Le CAGR est le taux annuel nécessaire pour atteindre ce rendement total.',
  },
];

const howTo = [
  {
    name: 'Entrez votre capital initial',
    text: 'Saisissez le montant investi à l\'origine.',
  },
  {
    name: 'Entrez la valeur finale',
    text: 'Saisissez la valeur actuelle du marché.',
  },
  {
    name: 'Réglez la durée',
    text: 'Indiquez la durée de détention de l\'investissement.',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR : Quelle métrique choisir ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>ROI</strong> indique le gain total en pourcentage, mais ignore le temps. Le <strong>CAGR</strong> est supérieur pour l\'analyse à long terme car il "annualise" vos rendements.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'Définition du ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
