import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'peseta-till-euro-omvandlare-varde-2026';
const title = 'Omvandlare från peseta till euro: värde 2026';
const description = 'Omvandla spanska pesetas till euro med den fasta kursen 166,386 pesetas per euro och uppskatta köpkraften fram till 2026 med Spaniens KPI.';
const faq = [
  { question: 'Hur många euro är 1 000 pesetas?', answer: '1 000 pesetas motsvarar 6,01 euro enligt den fasta omräkningskursen. Kalkylatorn visar också en separat uppskattning av beloppets köpkraft under det valda året.' },
  { question: 'Hur många euro är en miljon pesetas?', answer: 'En miljon pesetas motsvarar 6 010,12 euro enligt den fasta kursen. Den uppskattade köpkraften 2026 beror på vilket år beloppet användes.' },
  { question: 'Hur omvandlar man pesetas till euro?', answer: 'Dela beloppet i pesetas med 166,386. Till exempel är 100 pesetas 0,60 euro och 10 000 pesetas 60,10 euro.' },
  { question: 'Vad skulle gamla pesetas vara värda 2026?', answer: 'Det finns två svar. Den fasta omvandlingen ger det officiella eurobeloppet och KPI-resultatet uppskattar hur många euro 2026 som krävs för motsvarande genomsnittliga köpkraft.' },
  { question: 'Värderar kalkylatorn gamla samlarmynt eller sedlar?', answer: 'Nej. Den beräknar valutaomvandling och genomsnittlig köpkraft. Ett sällsynt mynt eller en samlarsedel kan ha ett annat marknadsvärde beroende på skick, sällsynthet och efterfrågan.' },
  { question: 'Vilka år använder pesetakalkylatorn?', answer: 'Du kan välja ursprungsår från 1980 till 2026. Referensen för 2026 använder de senaste publicerade KPI-uppgifterna och är ännu inget färdigt årsgenomsnitt.' },
  { question: 'Är uppskattningen av köpkraften ett exakt pris?', answer: 'Nej. Det är en genomsnittlig jämförelse baserad på KPI, inte ett exakt pris för boende, löner, mat, energi eller ett visst köp.' },
];
const howTo = [
  { name: 'Ange beloppet i pesetas', text: 'Skriv in beloppet från ett kvitto, en sedel, ett mynt eller ett historiskt dokument.' },
  { name: 'Välj år', text: 'Välj årtionde och sedan året då beloppet användes.' },
  { name: 'Läs den fasta omvandlingen', text: 'Se det nominella beloppet som fås genom att dela pesetas med 166,386.' },
  { name: 'Jämför köpkraften', text: 'Jämför den fasta omvandlingen med den uppskattade genomsnittliga köpkraften 2026.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: 'Historiskt belopp', labelAmountHint: 'Välj en startpunkt', labelOriginYear: 'Ursprungsår', labelOriginYearHint: 'Årligt KPI-genomsnitt när det finns', labelReferenceYear: 'Referens 2026 hittills', labelNominalEuros: 'Fast omvandling', labelTodayValue: 'Uppskattad köpkraft', labelPurchasingPowerChange: 'Förändring av köpkraft', labelNominalDifference: 'Skillnad från omvandling', labelConversionRate: 'Pesetas per euro', labelCpiMethod: 'KPI-multiplikator', labelPreset100: '100 ptas', labelPreset1000: '1 000 ptas', labelPreset10000: '10 000 ptas', labelPreset100000: '100 000 ptas', labelPesetas: 'pesetas', labelEuro: 'euro', labelFrom: 'Från', labelTo: 'Till', labelOpenYears: 'Öppna ursprungsår', labelCloseYears: 'Stäng ursprungsår', labelDecade: 'Välj årtionde', labelCoin: 'mynt', labelBanknote: 'sedel', labelCashPieces: 'pengar', labelState: 'värdeförändring', labelStatePositive: 'ökat', labelStateNeutral: 'oförändrat', labelStateNegative: 'minskat', labelReset: 'Återställ exempel', currencyLocale: 'sv-SE' },
  seo: [
    { type: 'title', text: 'Pesetas till euro: två svar på samma fråga', level: 2 },
    { type: 'paragraph', html: 'Om du har ett gammalt pris, en lön, ett kvitto, ett mynt eller en sedel i spanska pesetas ger den här omvandlaren två svar. Först visas den fasta omvandlingen till euro. Sedan uppskattas vad beloppet motsvarar i köpkraft 2026 enligt prisutvecklingen i Spanien.' },
    { type: 'title', text: 'Vanliga omvandlingar från pesetas till euro', level: 2 },
    { type: 'paragraph', html: 'Den fasta kursen är alltid 166,386 pesetas för 1 euro. Året ändrar inte den nominella omvandlingen.' },
    { type: 'table', headers: ['Gammalt belopp', 'Fast omvandling'], rows: [['1 peseta', '0,01 euro'], ['25 pesetas', '0,15 euro'], ['50 pesetas', '0,30 euro'], ['100 pesetas', '0,60 euro'], ['500 pesetas', '3,01 euro'], ['1 000 pesetas', '6,01 euro'], ['2 000 pesetas', '12,02 euro'], ['5 000 pesetas', '30,05 euro'], ['10 000 pesetas', '60,10 euro'], ['1 miljon pesetas', '6 010,12 euro']] },
    { type: 'title', text: 'Vad var pesetas värda 2026?', level: 2 },
    { type: 'paragraph', html: 'KPI-resultatet svarar på en annan fråga än euroomvandlingen. Det uppskattar hur många euro 2026 som behövs för en liknande genomsnittlig varukorg som den valda summan räckte till under ursprungsåret. Referensen för 2026 använder de senaste uppgifterna hittills och är inte ett avslutat årsgenomsnitt.' },
    { type: 'table', headers: ['Resultat', 'Betydelse'], rows: [['Fast omvandling', 'Det exakta nominella eurobeloppet enligt den officiella kursen.'], ['KPI-justerat värde', 'En uppskattning av motsvarande genomsnittliga köpkraft 2026.'], ['Skillnad', 'Avståndet mellan den fasta omvandlingen och KPI-uppskattningen.']] },
    { type: 'title', text: 'Så räknar du ett gammalt belopp i pesetas', level: 2 },
    { type: 'list', items: ['Ange beloppet från kvittot, sedeln, myntet eller dokumentet.', 'Välj året då beloppet användes eller togs emot.', 'Använd fast omvandling för en direkt jämförelse i euro.', 'Använd KPI-värdet för historisk köpkraftskontext.', 'Se skillnaden som inflationens förklaring och inte som en personlig prisprognos.'] },
    { type: 'title', text: 'Mynt och sedlar har inte automatiskt detta samlarvärde', level: 2 },
    { type: 'paragraph', html: 'Det här verktyget räknar valuta och inflation, inte numismatisk värdering. Ett sällsynt mynt eller en gammal sedel kan ha ett annat marknadsvärde beroende på år, skick, sällsynthet och efterfrågan.' },
    { type: 'tip', title: 'Året ändrar köpkraften, inte växelkursen', html: 'Den officiella kursen är fortfarande 166,386 pesetas per euro. Endast KPI-jämförelsen ändras med ursprungsåret och den beskriver alltid en genomsnittlig konsumtionskorg.' },
  ],
  faq, bibliography, howTo, schemas,
};
