import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: 'Initiële Investering',
  labelFinalValue: 'Eindwaarde / Huidig Saldo',
  labelTimeSelection: 'Investeringsduur',
  labelYears: 'Jaar',
  labelMonths: 'Maanden',
  labelDays: 'Dagen',
  labelROI: 'Rendement op Investering (ROI)',
  labelCAGR: 'Geannualiseerde Groei (CAGR)',
  labelNetProfit: 'Nettowinst',
  labelLinearGrowth: 'Lineaire Groei (Geschat)',
  labelExponentialGrowth: 'Samengestelde Groei (CAGR)',
  labelPositiveResult: 'Winstgevende Investering',
  labelNegativeResult: 'Verliespositie',
  labelCopyResult: 'Resultaten Kopiëren',
  labelCopied: 'Gekopieerd!',
};

const slug = 'rendement-calculator-investering-roi-cagr';
const title = 'Rendement Calculator: ROI & CAGR';
const description = 'Analyseer je beleggingsprestaties. Bereken ROI en CAGR om je werkelijke winsten te begrijpen.';

const faq = [
  {
    question: 'Wat is een goede CAGR?',
    answer: 'Historisch gezien levert de S&P 500 ongeveer 7-10% per jaar op.',
  },
  {
    question: 'Waarom verschilt mijn CAGR van mijn totale ROI?',
    answer: 'ROI is het totale rendement ongeacht de tijd. CAGR is het jaarlijkse percentage.',
  },

  { question: "Wat moet ik controleren voordat ik het resultaat gebruik?", answer: "Controleer invoer, eenheden, aannames en beperkingen; het resultaat is een richtlijn, geen officiële beslissing." },];

const howTo = [
  {
    name: 'Voer je beginkapitaal in',
    text: 'Voer het bedrag in dat je oorspronkelijk hebt geïnvesteerd.',
  },
  {
    name: 'Voer de eindwaarde in',
    text: 'Voer de huidige marktwaarde in.',
  },
  {
    name: 'Stel de tijdsduur in',
    text: 'Geef aan hoe lang je de investering hebt aangehouden.',
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
      text: 'ROI vs. CAGR: Welke maatstaf is beter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong> geeft het totale groeipercentage aan, maar negeert de tijd. <strong>CAGR</strong> is nuttiger voor langetermijnanalyse omdat het het resultaat omzet in een samengesteld jaarlijks groeipercentage en beleggingen met verschillende looptijden vergelijkbaar maakt.',
    },
    {
      type: 'title',
      text: 'De rendementscalculator gebruiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vul het startkapitaal, de huidige waarde of verkoopprijs en de looptijd in dagen, maanden of jaren in. De tool berekent winst of verlies, totale ROI en geometrische jaarlijkse groei. Gebruik dezelfde tijdseenheid wanneer je beleggingen vergelijkt en controleer of kosten, stortingen, opnames en dividenden zijn meegenomen.',
    },
    {
      type: 'title',
      text: 'Totale ROI of geannualiseerd rendement?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ROI beantwoordt de vraag hoeveel je in totaal hebt gewonnen of verloren. CAGR laat zien welk constant samengesteld jaarpercentage dezelfde begin- en eindwaarde zou hebben opgeleverd. 20% in één jaar is daarom niet hetzelfde als 20% in vijf jaar. De grafiek maakt het verschil tussen lineaire en samengestelde groei zichtbaar.',
    },
    {
      type: 'paragraph',
      html: 'CAGR is een theoretisch gemiddelde en verbergt volatiliteit en het werkelijke prijsverloop. Controleer gegevens, eenheden, datums, afronding en aannames voordat je het resultaat gebruikt. Het is een hulpmiddel voor oriëntatie en vervangt geen persoonlijk financieel advies.',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'ROI Definitie - Investopedia',
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
