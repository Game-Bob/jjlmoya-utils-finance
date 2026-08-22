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
    { type: 'paragraph', html: "Calcola stipendio netto, ritenuta IRPF, contributi dipendente e costo totale per l azienda in Spagna secondo le norme 2026." },
    { type: 'title', text: "Formula del costo aziendale in Spagna", level: 2 },
    { type: 'paragraph', html: "L azienda paga lo stipendio lordo più i propri contributi previdenziali." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Nucleo stipendio netto"], ['Employer Cost', "Costo totale azienda"]] },
    { type: 'title', text: "Aliquote di previdenza sociale spagnola per il 2026", level: 2 },
    { type: 'paragraph', html: "Include contingenti comuni, disoccupazione, formazione, MEI, FOGASA e infortuni sul lavoro." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Ufficio 1,50 %", '1.50%'], ["Commerciale / Vendite 2,00 %", '2.00%'], ["Edilizia 6,70 %", '6.70%']] },
    { type: 'title', text: "Massimali contributivi e stipendi elevati", level: 2 },
    { type: 'paragraph', html: "Il massimale mensile 2026 è di 5.101,20 €. Oltre si applica il contributo di solidarietà." },
    { type: 'title', text: "Differenza tra 12 e 14 mensilità", level: 2 },
    { type: 'paragraph', html: "No. Il calcolatore mantiene lo stesso lordo annuo e lo divide per 12 o 14." },
    { type: 'tip', title: "Piano dei pagamenti", html: "Seleziona 12 o 14 mensilità, tipo di contratto, IRPF e premio infortuni." },
    { type: 'title', text: "Limiti di questa stima retributiva spagnola", level: 2 },
    { type: 'paragraph', html: "Solo Spagna. Regime Generale 2026, tempo pieno e salario ordinario in denaro. I risultati sono stime." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
