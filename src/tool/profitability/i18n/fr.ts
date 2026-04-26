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

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug: 'calculateur-rentabilite-investissement-roi-cagr',
  title: 'Calculateur de Rentabilité : ROI & CAGR',
  description: 'Analysez la performance de vos investissements. Calculez le ROI total et le CAGR pour comprendre vos gains réels.',
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
  faq: [
    {
      question: 'Qu\'est-ce qu\'un bon CAGR ?',
      answer: 'Cela dépend de l\'actif. Le S&P 500 tourne historiquement autour de 7-10% par an.',
    },
  ],
  bibliography: [
    {
      name: 'Définition du ROI - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo: [
    {
      name: 'Entrez votre capital initial',
      text: 'Saisissez le montant investi à l\'origine.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: 'Calculateur de Rentabilité',
      description: 'Calculez le ROI et le CAGR.',
    },
  ],
};
