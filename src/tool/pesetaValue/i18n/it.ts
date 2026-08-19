import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'convertitore-peseta-euro-valore-2026';
const title = 'Convertitore da pesete a euro: valore nel 2026';
const description = 'Converti le vecchie pesete spagnole in euro al cambio fisso di 166,386 pesete per euro e stima il loro potere d acquisto fino al 2026 con l IPC spagnolo.';

const faq = [
  { question: 'Quanti euro sono 1.000 pesete?', answer: '1.000 pesete valgono 6,01 euro al tasso di conversione fisso. Il calcolatore mostra anche una stima separata del potere d acquisto della somma nell anno scelto.' },
  { question: 'Quanti euro sono un milione di pesete?', answer: 'Un milione di pesete vale 6.010,12 euro al cambio fisso. La stima del potere d acquisto nel 2026 dipende dall anno in cui la somma è stata utilizzata.' },
  { question: 'Come si convertono le pesete in euro?', answer: 'Dividi l importo in pesete per 166,386. Per esempio, 100 pesete sono 0,60 euro e 10.000 pesete sono 60,10 euro.' },
  { question: 'Quanto varrebbero oggi le vecchie pesete?', answer: 'Ci sono due risposte. La conversione fissa dà l importo legale in euro e il risultato corretto con l IPC stima quanti euro del 2026 servirebbero per un paniere medio simile.' },
  { question: 'Il calcolatore valuta una moneta o una banconota da collezione?', answer: 'No. Calcola la conversione monetaria e il potere d acquisto medio. Una moneta rara o una banconota da collezione può avere un valore diverso in base a condizioni, rarità e domanda.' },
  { question: 'Quali anni usa il convertitore di pesete?', answer: 'Puoi scegliere un anno di origine dal 1980 al 2026. Il riferimento 2026 usa gli ultimi dati CPI pubblicati disponibili e non è ancora una media annuale completa.' },
  { question: 'La stima del potere d acquisto è un prezzo esatto?', answer: 'No. È un confronto medio basato sull IPC, non un prezzo esatto per abitazioni, salari, alimenti, energia o un acquisto specifico.' },
];

const howTo = [
  { name: 'Inserisci l importo in pesete', text: 'Scrivi l importo indicato su una ricevuta, una banconota, una moneta o un documento storico.' },
  { name: 'Scegli l anno', text: 'Seleziona il decennio e poi l anno in cui l importo è stato utilizzato.' },
  { name: 'Leggi la conversione fissa', text: 'Controlla l importo nominale ottenuto dividendo le pesete per 166,386.' },
  { name: 'Confronta il potere d acquisto', text: 'Confronta la conversione fissa con la stima del potere d acquisto medio nel 2026.' },
];

const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' } as WithContext<SoftwareApplication>,
];

export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: {
    labelAmount: 'Importo storico', labelAmountHint: 'Scegli un punto di partenza', labelOriginYear: 'Anno di origine', labelOriginYearHint: 'Media annuale dell IPC quando disponibile', labelReferenceYear: 'Riferimento 2026 fino a oggi', labelNominalEuros: 'Conversione fissa', labelTodayValue: 'Potere d acquisto stimato', labelPurchasingPowerChange: 'Variazione del potere d acquisto', labelNominalDifference: 'Differenza dalla conversione', labelConversionRate: 'Pesete per euro', labelCpiMethod: 'Moltiplicatore IPC', labelPreset100: '100 ptas', labelPreset1000: '1.000 ptas', labelPreset10000: '10.000 ptas', labelPreset100000: '100.000 ptas', labelPesetas: 'pesete', labelEuro: 'euro', labelFrom: 'Da', labelTo: 'A', labelOpenYears: 'Apri gli anni di origine', labelCloseYears: 'Chiudi gli anni di origine', labelDecade: 'Scegli un decennio', labelCoin: 'moneta', labelBanknote: 'banconota', labelCashPieces: 'contanti', labelState: 'andamento del valore', labelStatePositive: 'in aumento', labelStateNeutral: 'invariato', labelStateNegative: 'in calo', labelReset: 'Reimposta esempio', currencyLocale: 'it-IT',
  },
  seo: [
    { type: 'title', text: 'Pesete in euro: due risposte alla stessa domanda', level: 2 },
    { type: 'paragraph', html: 'Se hai un vecchio prezzo, stipendio, scontrino, biglietto o moneta in pesete spagnole, questo convertitore offre due risposte. Prima mostra la conversione fissa in euro, poi stima cosa rappresenta quella somma nel potere d acquisto del 2026 secondo l andamento dei prezzi in Spagna.' },
    { type: 'title', text: 'Conversioni comuni da pesete a euro', level: 2 },
    { type: 'paragraph', html: 'Il cambio fisso è sempre di 166,386 pesete per 1 euro. L anno non modifica questa conversione nominale.' },
    { type: 'table', headers: ['Importo antico', 'Conversione fissa'], rows: [['1 peseta', '0,01 euro'], ['25 pesete', '0,15 euro'], ['50 pesete', '0,30 euro'], ['100 pesete', '0,60 euro'], ['500 pesete', '3,01 euro'], ['1.000 pesete', '6,01 euro'], ['2.000 pesete', '12,02 euro'], ['5.000 pesete', '30,05 euro'], ['10.000 pesete', '60,10 euro'], ['1 milione di pesete', '6.010,12 euro']] },
    { type: 'title', text: 'Quanto valevano le pesete nel 2026?', level: 2 },
    { type: 'paragraph', html: 'Il risultato corretto con l IPC risponde a una domanda diversa dalla conversione in euro. Stima quanti euro del 2026 servirebbero per acquistare un paniere medio simile a quello acquistabile con l importo scelto nell anno di origine. Il riferimento 2026 comprende gli ultimi dati pubblicati fino a oggi e non una media annuale conclusa.' },
    { type: 'table', headers: ['Risultato', 'Significato'], rows: [['Conversione fissa', 'L importo nominale esatto in euro al cambio ufficiale.'], ['Valore corretto con IPC', 'Una stima del potere d acquisto medio equivalente nel 2026.'], ['Differenza', 'La distanza tra la conversione fissa e la stima IPC.']] },
    { type: 'title', text: 'Come calcolare un vecchio importo in pesete', level: 2 },
    { type: 'list', items: ['Inserisci l importo del documento, della banconota, della moneta o della ricevuta.', 'Seleziona l anno in cui l importo è stato usato o ricevuto.', 'Usa la conversione fissa per l equivalenza diretta in euro.', 'Usa il valore IPC per capire il potere d acquisto storico.', 'Leggi la differenza come contesto dell inflazione, non come previsione del tuo prezzo personale.'] },
    { type: 'title', text: 'Monete e banconote non hanno automaticamente questo valore da collezione', level: 2 },
    { type: 'paragraph', html: 'Questo strumento calcola valuta e inflazione, non una valutazione numismatica. Una moneta rara o una banconota antica può avere un valore di mercato diverso in base ad anno, condizioni, rarità e domanda.' },
    { type: 'tip', title: 'L anno cambia il potere d acquisto, non il cambio', html: 'Il tasso ufficiale resta di 166,386 pesete per euro. Cambia solo il confronto IPC con l anno di origine e descrive sempre un paniere medio di consumo.' },
  ],
  faq, bibliography, howTo, schemas,
};
