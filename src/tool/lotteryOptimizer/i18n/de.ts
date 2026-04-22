import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LotteryOptimizerUI } from '../ui';

const slug = 'lotto-optimierer-wahrscheinlichkeitsrechner';
const title = 'Lotto Optimierer und Wahrscheinlichkeitsrechner';
const description = 'Analysieren Sie Ihre Chancen bei Weihnachtslotterie, EuroMillions und mehr. Berechnen Sie die optimale Anzahl an Losen und den Erwartungswert.';

const faqData = [
  {
    question: 'Was ist der Erwartungswert beim Lotto?',
    answer: 'Es ist der durchschnittliche Wert, den Sie pro gesetztem Euro erwarten können zu gewinnen. Bei fast allen Lotterien ist dieser negativ, was bedeutet, dass die Bank langfristig immer gewinnt.',
  },
  {
    question: 'Ist es besser, viele verschiedene Nummern oder viele Lose derselben Nummer zu spielen?',
    answer: 'Wenn Sie "etwas" gewinnen wollen, erhöht die Diversifizierung der Nummern Ihre Chancen auf kleinere Gewinne. Wenn Sie den Jackpot wollen, bietet ein einziges Los dieselbe Chance auf den Hauptpreis.',
  },
  {
    question: 'Lohnt sich die spanische Weihnachtslotterie wirklich?',
    answer: 'Rein mathematisch gesehen nein, da nur 70 % der Einnahmen ausgeschüttet werden. Dennoch ist die Chance auf den Hauptpreis (1 zu 100.000) viel höher als bei EuroMillions (1 zu 140 Millionen).',
  },
  {
    question: 'Kann ich meine Chancen durch Statistiken verbessern?',
    answer: 'Nein. Jede Ziehung ist ein unabhängiger Zufallsprozess. Frühere Ergebnisse haben keinen Einfluss auf zukünftige Ziehungen.',
  },
  {
    question: 'Was bedeutet "Schwierigkeit" in der Vergleichstabelle?',
    answer: 'Es ist ein Maß dafür, wie schwer es ist, den Hauptpreis zu gewinnen. Zugänglich (unter 200k), Schwierig (unter 20M), Extrem (über 20M).',
  },
];

const howToData = [
  {
    name: 'Lotterie auswählen',
    text: 'Wählen Sie zwischen Weihnachtslotterie, Primitiva, EuroMillions oder Bonoloto.',
  },
  {
    name: 'Einsatz festlegen',
    text: 'Geben Sie an, wie viele Lose oder Wetten Sie kaufen möchten.',
  },
  {
    name: 'Wahrscheinlichkeiten analysieren',
    text: 'Sehen Sie sich die realen Chancen auf den Hauptpreis im Vergleich zu kleineren Gewinnen an.',
  },
  {
    name: 'Risiko/Nutzen bewerten',
    text: 'Prüfen Sie den Erwartungswert, um zu verstehen, wie viel Geld Sie statistisch gesehen pro investiertem Euro "verschenken".',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Die Mathematik der Hoffnung',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Lotto zu spielen ist für viele der Kauf einer Illusion für ein paar Euro. Doch hinter den Kulissen steckt faszinierende Mathematik: die Statistik extremer Wahrscheinlichkeiten.',
  },
];

const gameTranslations = {
  gordo: {
    name: 'Weihnachtslotterie (El Gordo)',
    description: 'Die größte Preisausschüttung der Welt. Hohe Chance, etwas zu gewinnen.',
  },
  nino: {
    name: 'Dreikönigslotterie (El Niño)',
    description: 'Verdreifacht die Chancen auf einen Rückgewinn im Vergleich zu Weihnachten.',
  },
  euromillones: {
    name: 'EuroMillions',
    description: 'Astronomische Preise, fast unmögliche Wahrscheinlichkeiten.',
  },
  primitiva: {
    name: 'La Primitiva',
    description: 'Die älteste Lotterie Spaniens. Schwierig, aber günstig.',
  },
  bonoloto: {
    name: 'Bonoloto',
    description: 'Die preiswerteste. Ideal für tägliches Spielen mit kleinem Budget.',
  },
};

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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<LotteryOptimizerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen': 'Quellen und Referenzen',
  ui: {
    gameTranslations,
    labelTitle: 'Lotto Optimierer',
    labelDescription: 'Vergleichen Sie Ziehungen, berechnen Sie den Erwartungswert und spielen Sie mit Köpfchen.',
    labelSelectGame: 'Lotterie auswählen',
    labelConfigurePlay: 'Spiel konfigurieren',
    labelAdjustQuantity: 'Passen Sie die Anzahl der Lose an, um Ihre reale Wahrscheinlichkeit zu sehen.',
    labelTotalInvestment: 'Gesamtinvestition',
    labelTickets: 'Anzahl der Lose / Wetten',
    labelUnits: 'Stück',
    labelExposureAnalysis: 'Risikoanalyse',
    labelSelectLottery: 'Wählen Sie eine Lotterie für die Risikoanalyse.',
    labelOptimalCutoff: 'Vorgeschlagener Grenzwert',
    labelProbabilitySuccess: 'Erfolgswahrscheinlichkeit',
    labelExpectedValue: 'Erwartungswert (EV)',
    labelReturnTheoretical: 'Theoretische Rückzahlung pro Spiel.',
    labelSocialReturnIndex: 'Sozialer Rendite-Index',
    labelLow: 'Niedrig',
    labelMedium: 'Mittel',
    labelHigh: 'Hoch',
    labelComparison: 'Preisvergleich',
    labelLottery: 'Lotterie',
    labelCost: 'Kosten',
    labelTypicalPrize: 'Typischer Preis',
    labelDifficulty: 'Schwierigkeit',
    labelAccessible: 'Zugänglich',
    labelDifficult: 'Schwierig',
    labelExtreme: 'Extrem',
    labelNote: 'Hinweis: Preise für Weihnachten/El Niño gelten pro Zehntellos (20 €). EuroMillions etc. sind typische Jackpots.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'de-DE',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
