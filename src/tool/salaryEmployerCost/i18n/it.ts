import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "calcolatore-stipendio-lordo-netto-costo-azienda-spagna";
const title = "Calcolatore Stipendio Lordo, Netto e Costo Azienda in Spagna 2026";
const description = "Calcola stipendio netto, ritenuta IRPF, contributi dipendente e costo totale per l azienda in Spagna secondo le norme 2026.";

const faq = [
  {
    "question": "Quanto costa un dipendente a un azienda in Spagna?",
    "answer": "L azienda paga lo stipendio lordo più i propri contributi previdenziali."
  },
  {
    "question": "Come si calcola lo stipendio dal lordo al netto in Spagna?",
    "answer": "Si parte dal lordo annuo, si detraggono i contributi del dipendente e la ritenuta IRPF."
  },
  {
    "question": "Scegliere 12 o 14 mensilità cambia lo stipendio annuo?",
    "answer": "No. Il calcolatore mantiene lo stesso lordo annuo e lo divide per 12 o 14."
  },
  {
    "question": "Quali aliquote della previdenza spagnola 2026 sono incluse?",
    "answer": "Include contingenti comuni, disoccupazione, formazione, MEI, FOGASA e infortuni sul lavoro."
  },
  {
    "question": "Cosa succede se lo stipendio supera il massimale contributivo?",
    "answer": "Il massimale mensile 2026 è di 5.101,20 €. Oltre si applica il contributo di solidarietà."
  },
  {
    "question": "Questo calcolatore è valido fuori dalla Spagna?",
    "answer": "No. È limitato al sistema spagnolo 2026."
  },
  {
    "question": "I dati sullo stipendio vengono inviati a un server?",
    "answer": "No. I calcoli avvengono nel browser."
  }
];

const howTo = [
  {
    "name": "Inserisci lo stipendio lordo",
    "text": "Scegli la modalità annuale o mensile e inserisci il lordo."
  },
  {
    "name": "Imposta le condizioni spagnole",
    "text": "Seleziona 12 o 14 mensilità, tipo di contratto, IRPF e premio infortuni."
  },
  {
    "name": "Consulta le componenti stipendiali",
    "text": "Confronta netto, trattenute lavoratore e contributi d impresa."
  },
  {
    "name": "Cambia periodo del risultato",
    "text": "Visualizza i totali annuali o la media per mensilità."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: "it",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Segnale stipendio lordo",
    "labelGrossSalaryHint": "Importo dello stipendio",
    "labelAnnual": "Annuale",
    "labelMonthly": "Mensile",
    "labelPaySchedule": "Piano dei pagamenti",
    "labelTwelvePayments": "12 mensilità",
    "labelFourteenPayments": "14 mensilità",
    "labelContract": "Tipo di contratto",
    "labelPermanent": "A tempo indeterminato",
    "labelTemporary": "A tempo determinato",
    "labelIrpfRate": "Ritenuta IRPF",
    "labelIrpfHint": "Usa la percentuale dell Agenzia delle Entrate, offerta o busta paga",
    "labelRiskRate": "Premio infortuni sul lavoro (AT ed EP)",
    "labelRiskHint": "Tariffa infortuni sul lavoro a carico dell azienda",
    "labelOfficePreset": "Ufficio 1,50 %",
    "labelTradePreset": "Commerciale / Vendite 2,00 %",
    "labelConstructionPreset": "Edilizia 6,70 %",
    "labelNetCore": "Nucleo stipendio netto",
    "labelEmployeeDeductions": "Trattenute lavoratore",
    "labelDeductionsFormula": "IRPF più Previdenza Sociale lavoratore",
    "labelEmployerHalo": "Alone contributi aziendali",
    "labelEmployerCost": "Costo totale azienda",
    "labelAnnualView": "Vista annuale",
    "labelPerPaymentView": "Media per mensilità",
    "labelGross": "Stipendio lordo",
    "labelIrpf": "Ritenuta IRPF",
    "labelEmployeeSocialSecurity": "Previdenza Sociale dipendente",
    "labelContributionBase": "Base imponibile contributiva mensile",
    "labelCostMultiplier": "Moltiplicatore di costo rispetto al lordo",
    "labelWorkerKeeps": "Quota netta sul costo totale",
    "labelLeanGap": "Alone costo contenuto",
    "labelTypicalGap": "Alone costo standard",
    "labelWideGap": "Alone costo esteso",
    "labelModelScope": "Solo Spagna. Regime Generale 2026, tempo pieno e salario ordinario in denaro. I risultati sono stime.",
    "labelReset": "Ripristina esempio",
    "labelInvalid": "Inserisci uno stipendio annuo a tempo pieno valido e mantieni le aliquote nei limiti.",
    "labelMinimumSalary": "Il modello parte dal salario minimo spagnolo 2026 (17.094 €/anno).",
    "labelPrivacy": "Calcolato localmente nel tuo browser"
},
  seo: [
    { type: 'title', text: "Dal lordo al costo reale per l azienda in Spagna", level: 2 },
    { type: 'paragraph', html: "Un offerta di lavoro ha tre valori distinti: lo stipendio lordo previsto dal contratto, il netto che arriva al dipendente e il costo completo sostenuto dall azienda. Questo calcolatore spagnolo li mantiene insieme. Inserisci un importo lordo per stimare ritenuta IRPF, contributi del dipendente, contributi aziendali e costo totale secondo il Regime Generale 2026." },
    { type: 'title', text: "Formula del costo aziendale in Spagna", level: 2 },
    { type: 'paragraph', html: "Il costo totale dell azienda è lo stipendio lordo annuo più i contributi previdenziali a suo carico. Lo stipendio netto stimato è il lordo meno i contributi del dipendente e la percentuale IRPF inserita. Il campo IRPF resta separato perché la ritenuta effettiva dipende dalla situazione personale e familiare." },
    { type: 'table', headers: ['Livello', 'Calcolo'], rows: [['Stipendio netto', 'Lordo meno contributi del dipendente e IRPF'], ['Trattenute dipendente', 'Previdenza del dipendente più IRPF'], ['Contributi aziendali', 'Contributi dell azienda più premio infortuni'], ['Costo totale', 'Stipendio lordo più contributi aziendali']] },
    { type: 'title', text: "Aliquote di previdenza sociale spagnola per il 2026", level: 2 },
    { type: 'paragraph', html: "Per un contratto a tempo indeterminato, il modello include 4,70% a carico del dipendente e 23,60% a carico dell azienda per le contingenze comuni, 1,55% e 5,50% per la disoccupazione, 0,10% e 0,60% per la formazione e 0,15% e 0,75% per il meccanismo di equità intergenerazionale. Aggiunge lo 0,20% aziendale per FOGASA e il premio per infortuni e malattie professionali selezionato. I contratti temporanei hanno un aliquota diversa per la disoccupazione." },
    { type: 'table', headers: ['Profilo professionale', 'Premio aziendale'], rows: [["Ufficio", '1,50%'], ["Commerciale / Vendite", '2,00%'], ["Edilizia", '6,70%']] },
    { type: 'title', text: "Massimali contributivi e stipendi elevati", level: 2 },
    { type: 'paragraph', html: "La base contributiva ordinaria è limitata a 5.101,20 € al mese nel 2026. Sopra questa soglia il calcolatore aggiunge il contributo di solidarietà progressivo, invece di applicare la stessa aliquota standard all intero stipendio." },
    { type: 'title', text: "Differenza tra 12 e 14 mensilità", level: 2 },
    { type: 'paragraph', html: "La scelta non cambia il lordo annuo né il costo annuo dell azienda: cambia solo la media visualizzata per pagamento. In una busta paga reale con 14 mensilità, contributi e trattenute possono essere distribuiti diversamente tra paghe ordinarie e aggiuntive; la media serve soprattutto a confrontare offerte e budget." },
    { type: 'tip', title: "Confronta con le stesse ipotesi", html: "Mantieni costanti aliquota IRPF, tipo di contratto, calendario dei pagamenti e premio infortuni. In questo modo puoi isolare l effetto dello stipendio lordo e confrontare correttamente due offerte o budget di assunzione." },
    { type: 'title', text: "Limiti di questa stima retributiva spagnola", level: 2 },
    { type: 'paragraph', html: "Il calcolatore è limitato al lavoro a tempo pieno in Spagna, al Regime Generale 2026 e a uno stipendio ordinario in denaro. Non copre basi minime part-time, conguagli fiscali regionali, benefit in natura, bonus con trattamento speciale, riduzioni, rapporti di lavoro speciali, lavoro autonomo o regolarizzazioni della busta paga. I risultati sono stime e non costituiscono consulenza retributiva o fiscale." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
