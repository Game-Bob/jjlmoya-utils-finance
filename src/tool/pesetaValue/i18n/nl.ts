import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'peseta-naar-euro-omrekenen-waarde-2026';
const title = 'Peseta naar euro omrekenen: waarde in 2026';
const description = 'Zet Spaanse pesetas om naar euro met de vaste koers van 166,386 pesetas per euro en schat de koopkracht tot 2026 met de Spaanse CPI.';
const faq = [
  { question: 'Hoeveel euro is 1.000 pesetas?', answer: '1.000 pesetas is 6,01 euro volgens de vaste omrekenkoers. De calculator toont daarnaast een aparte schatting van de koopkracht in het gekozen jaar.' },
  { question: 'Hoeveel euro is een miljoen pesetas?', answer: 'Een miljoen pesetas is 6.010,12 euro volgens de vaste koers. De geschatte koopkracht in 2026 hangt af van het jaar waarin het bedrag werd gebruikt.' },
  { question: 'Hoe reken je pesetas om naar euro?', answer: 'Deel het bedrag in pesetas door 166,386. Zo is 100 pesetas 0,60 euro en 10.000 pesetas 60,10 euro.' },
  { question: 'Wat zouden oude pesetas in 2026 waard zijn?', answer: 'Er zijn twee antwoorden. De vaste omrekening geeft het wettelijke eurobedrag en het CPI-resultaat schat hoeveel euro in 2026 nodig is voor een vergelijkbare gemiddelde boodschappenmand.' },
  { question: 'Berekent deze tool de verzamelwaarde van een munt of biljet?', answer: 'Nee. De tool berekent valutaomrekening en gemiddelde koopkracht. Een zeldzame munt of een verzamelbiljet kan door staat, zeldzaamheid en vraag een andere marktwaarde hebben.' },
  { question: 'Welke jaren gebruikt de peseta calculator?', answer: 'Je kunt een oorsprongsjaar van 1980 tot 2026 kiezen. De referentie voor 2026 gebruikt de nieuwste gepubliceerde CPI-gegevens en is nog geen volledig jaargemiddelde.' },
  { question: 'Is de koopkrachtinschatting een exacte prijs?', answer: 'Nee. Het is een gemiddelde vergelijking op basis van de CPI, geen exacte prijs voor wonen, lonen, voedsel, energie of een specifieke aankoop.' },
];
const howTo = [
  { name: 'Voer het bedrag in pesetas in', text: 'Vul het bedrag van een bon, biljet, munt of historisch document in.' },
  { name: 'Kies het jaar', text: 'Kies eerst het decennium en daarna het jaar waarin het bedrag werd gebruikt.' },
  { name: 'Lees de vaste omrekening', text: 'Bekijk het nominale bedrag dat ontstaat door de pesetas door 166,386 te delen.' },
  { name: 'Vergelijk de koopkracht', text: 'Vergelijk de vaste omrekening met de schatting van de gemiddelde koopkracht in 2026.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: 'Historisch bedrag', labelAmountHint: 'Kies een startpunt', labelOriginYear: 'Oorsprongsjaar', labelOriginYearHint: 'Jaarlijks CPI-gemiddelde indien beschikbaar', labelReferenceYear: 'Referentie 2026 tot nu toe', labelNominalEuros: 'Vaste omrekening', labelTodayValue: 'Geschatte koopkracht', labelPurchasingPowerChange: 'Verandering van koopkracht', labelNominalDifference: 'Verschil met omrekening', labelConversionRate: 'Pesetas per euro', labelCpiMethod: 'CPI-multiplier', labelPreset100: '100 ptas', labelPreset1000: '1.000 ptas', labelPreset10000: '10.000 ptas', labelPreset100000: '100.000 ptas', labelPesetas: 'pesetas', labelEuro: 'euro', labelFrom: 'Van', labelTo: 'Tot', labelOpenYears: 'Oorsprongsjaren openen', labelCloseYears: 'Oorsprongsjaren sluiten', labelDecade: 'Kies een decennium', labelCoin: 'munt', labelBanknote: 'biljet', labelCashPieces: 'geldstukken', labelState: 'waardebeweging', labelStatePositive: 'gestegen', labelStateNeutral: 'onveranderd', labelStateNegative: 'gedaald', labelReset: 'Voorbeeld resetten', currencyLocale: 'nl-NL' },
  seo: [
    { type: 'title', text: 'Pesetas naar euro: twee antwoorden op één vraag', level: 2 },
    { type: 'paragraph', html: 'Heb je een oude prijs, loon, bon, munt of bankbiljet in Spaanse pesetas? Deze calculator geeft twee antwoorden. Eerst zie je de vaste omrekening naar euro. Daarna schat de tool wat het bedrag in 2026 aan gemiddelde koopkracht vertegenwoordigt volgens de Spaanse prijsontwikkeling.' },
    { type: 'title', text: 'Veelgebruikte omrekeningen van pesetas naar euro', level: 2 },
    { type: 'paragraph', html: 'De vaste koers is altijd 166,386 pesetas voor 1 euro. Het jaar verandert deze nominale omrekening niet.' },
    { type: 'table', headers: ['Oud bedrag', 'Vaste omrekening'], rows: [['1 peseta', '0,01 euro'], ['25 pesetas', '0,15 euro'], ['50 pesetas', '0,30 euro'], ['100 pesetas', '0,60 euro'], ['500 pesetas', '3,01 euro'], ['1.000 pesetas', '6,01 euro'], ['2.000 pesetas', '12,02 euro'], ['5.000 pesetas', '30,05 euro'], ['10.000 pesetas', '60,10 euro'], ['1 miljoen pesetas', '6.010,12 euro']] },
    { type: 'title', text: 'Wat waren pesetas waard in 2026?', level: 2 },
    { type: 'paragraph', html: 'De CPI-schatting beantwoordt een andere vraag dan de euro-omrekening. Ze schat hoeveel euro in 2026 nodig zou zijn voor een vergelijkbare gemiddelde boodschappenmand als in het gekozen oorsprongsjaar. De referentie voor 2026 gebruikt de nieuwste beschikbare gegevens tot nu toe en is geen afgerond jaargemiddelde.' },
    { type: 'table', headers: ['Resultaat', 'Betekenis'], rows: [['Vaste omrekening', 'Het exacte nominale eurobedrag volgens de officiële koers.'], ['CPI-gecorrigeerde waarde', 'Een schatting van vergelijkbare gemiddelde koopkracht in 2026.'], ['Verschil', 'De afstand tussen de vaste omrekening en de CPI-schatting.']] },
    { type: 'title', text: 'Zo bereken je een oud bedrag in pesetas', level: 2 },
    { type: 'list', items: ['Voer het bedrag van de bon, het biljet, de munt of het document in.', 'Kies het jaar waarin het bedrag werd gebruikt of ontvangen.', 'Gebruik de vaste omrekening voor een directe eurovergelijking.', 'Gebruik de CPI-waarde voor historische koopkrachtcontext.', 'Zie het verschil als uitleg van inflatie en niet als persoonlijke prijsvoorspelling.'] },
    { type: 'title', text: 'Munten en biljetten hebben niet automatisch deze verzamelwaarde', level: 2 },
    { type: 'paragraph', html: 'Deze tool berekent valuta en inflatie, geen numismatische taxatie. Een zeldzame munt of een oud biljet kan een andere marktwaarde hebben door jaar, staat, zeldzaamheid en vraag.' },
    { type: 'tip', title: 'Het jaar verandert de koopkracht, niet de wisselkoers', html: 'De officiële koers blijft 166,386 pesetas per euro. Alleen de CPI-vergelijking verandert met het oorsprongsjaar en beschrijft altijd een gemiddelde consumptiemand.' },
  ],
  faq, bibliography, howTo, schemas,
};
