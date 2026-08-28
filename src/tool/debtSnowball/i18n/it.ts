import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'metodo-palla-di-neve-calcolatore-debiti';
const title = 'Calcolatore Metodo Palla di Neve: Piano di Pagamento Debiti 2026';
const description = 'Calcola la tua data di libertà finanziaria con il metodo palla di neve di Dave Ramsey. Organizza i tuoi debiti e visualizza il tuo piano di pagamenti mensile.';

const faqData = [
  {
    question: 'Cos\'è il metodo della palla di neve?',
    answer: 'È una strategia di pagamento dei debiti che consiste nel pagare i debiti in ordine dal saldo più basso al più alto, indipendentemente dal tasso di interesse. Si concentra sulla vittoria psicologica di eliminare velocemente i piccoli debiti.',
  },
  {
    question: 'Perché non ordinare per tasso di interesse (Metodo Valanga)?',
    answer: 'Matematicamente, pagare prima l\'interesse più alto fa risparmiare più soldi. Tuttavia, molte persone abbandonano perché non vedono risultati immediati. La Palla di Neve dà priorità alla motivazione: vedere sparire un debito velocemente dà l\'energia per affrontare quelli grandi.',
  },
  {
    question: 'Devo avere dei risparmi prima di iniziare il piano?',
    answer: 'Si raccomanda di avere un piccolo "Fondo di Emergenza" (circa 1.000€) prima di attaccare i debiti. Questo evita di dover usare di nuovo la carta di credito in caso di imprevisti.',
  },
  {
    question: 'Quali debiti devo includere nel calcolatore?',
    answer: 'Tutti i debiti di consumo: carte di credito, prestiti personali, finanziamenti auto, fatture scadute. Il mutuo viene solitamente lasciato per una fase successiva.',
  },

  { question: "Cosa devo verificare prima di usare il risultato?", answer: "Controlla dati, unità, ipotesi e limiti; è un'indicazione, non una decisione ufficiale." },];

const howToData = [
  {
    name: 'Elenca i tuoi debiti',
    text: 'Segna tutti i tuoi debiti indicando il saldo residuo e il pagamento minimo mensile.',
  },
  {
    name: 'Definisci il tuo budget extra',
    text: 'Calcola quanto denaro aggiuntivo puoi destinare ogni mese oltre i pagamenti minimi.',
  },
  {
    name: 'Ordina e dai priorità',
    text: 'Il calcolatore ordinerà automaticamente dal saldo più basso al più alto. Paga il minimo su tutti tranne quello più piccolo.',
  },
  {
    name: 'Esegui la cascata',
    text: 'Quando estingui il debito più piccolo, prendi tutto il denaro che destinavi ad esso e aggiungilo al pagamento del debito successivo.',
  },
];

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

export const content: ToolLocaleContent<DebtSnowballUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Debiti Metodo Palla di Neve: Guida 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vivere con i debiti è faticoso. Il <strong>metodo della palla di neve</strong> ha dimostrato di essere una delle strategie più efficaci per recuperare la libertà finanziaria.',
    },

  { type: 'paragraph', html: "Vivere con i debiti è faticoso. Il <strong>metodo della palla di neve</strong> ordina gli obblighi dal saldo più piccolo e trasforma il primo debito estinto in un risultato visibile." },
  { type: 'paragraph', html: "Inserisci nome, saldo corrente, pagamento minimo e tasso annuo di ogni debito. Il calcolatore ordina i conti dal saldo più basso al più alto e assegna il budget extra al primo." },
  { type: 'paragraph', html: "Quando un debito è estinto, la rata liberata si somma al budget extra e passa al conto successivo. In questo modo la somma destinata ai pagamenti cresce senza richiedere un nuovo reddito." },
  { type: 'paragraph', html: "Il piano mostra la data stimata della libertà finanziaria, gli interessi, il totale pagato e il saldo residuo di ogni fase. Puoi seguire il percorso senza affidarti a un solo numero finale." },
  { type: 'paragraph', html: "La <strong>palla di neve</strong> privilegia la motivazione e i risultati rapidi. Il metodo a valanga parte dal tasso più alto e spesso riduce maggiormente gli interessi: confrontali prima di scegliere." },
  { type: 'paragraph', html: "Entrambi i metodi richiedono il pagamento dei minimi e l'assenza di nuovi debiti. Conserva una piccola riserva per evitare che un imprevisto interrompa il piano." },
  { type: 'paragraph', html: "Il budget aggiuntivo deve essere una cifra sostenibile ogni mese. Un valore troppo ottimistico può produrre una data interessante sullo schermo, ma non essere praticabile nella vita reale." },
  { type: 'paragraph', html: "Se un debito viene indicato come infinito, il pagamento inserito non copre gli interessi mensili. Controlla saldo, tasso e rata e aumenta il pagamento solo entro i limiti del tuo budget." },
  { type: 'paragraph', html: "La simulazione usa i dati inseriti, interessi mensili e pagamenti periodici. Commissioni, nuovi acquisti, variazioni dei tassi e pagamenti straordinari possono modificare la durata reale." },
  { type: 'paragraph', html: "Una vittoria iniziale può aiutare la costanza, ma la palla di neve non minimizza sempre il costo totale. Se un debito costoso viene lasciato per ultimo, potresti pagare più interessi che con il metodo a valanga." },
  { type: 'paragraph', html: "Scarica il piano in CSV e aggiorna le rate quando cambiano reddito, tassi o pagamenti minimi. Un piano aggiornato è più utile di una vecchia data di estinzione." },
  { type: 'paragraph', html: "Il calcolo è uno strumento di pianificazione e non sostituisce una consulenza finanziaria, legale o sul debito. Se hai difficoltà, chiedi presto aiuto indipendente." },
  { type: 'paragraph', html: "Una buona priorità non elimina il debito da sola: servono pagamenti regolari, un budget realistico e la scelta di non aumentare i saldi. Il piano rende visibili queste ipotesi." },
  { type: 'paragraph', html: "Leggi interessi e totale pagato insieme alla data di libertà. Una durata più breve non è migliore se richiede una rata che non puoi sostenere." },
  { type: 'paragraph', html: "Usa il risultato per confrontare palla di neve e valanga; controlla saldi, tassi, minimi, arrotondamenti e periodo prima di decidere." },
  { type: 'paragraph', html: "Usa il risultato per pianificare e confrontare scenari; non sostituisce un calcolo ufficiale o una consulenza professionale." },
  { type: 'paragraph', html: "Interpreta il risultato insieme alle ipotesi mostrate dal calcolatore prima di utilizzarlo." },
  { type: 'paragraph', html: "Controlla dati, unità, arrotondamento, data e giurisdizione, perché ciascun elemento può cambiare la stima." },
  { type: 'paragraph', html: "Usa il risultato per verificare saldi, tassi, pagamenti minimi, arrotondamenti e periodo prima di una decisione." },],
  ui: {
    labelTitle: 'Libertà totale',
    labelDescription: 'Inizia il tuo percorso verso la libertà finanziaria con il metodo psicologicamente più efficace.',
    labelExtraBudget: 'BUDGET EXTRA MENSILE',
    labelExtraBudgetHelp: 'Denaro aggiuntivo oltre i pagamenti minimi.',
    labelSnowballMethod: 'PALLA DI NEVE',
    labelAvalancheMethod: 'VALANGA',
    labelAddNewDebt: 'AGGIUNGI NUOVO DEBITO',
    labelDebtName: 'Nome',
    labelDebtNamePlaceholder: 'Es: Visa',
    labelDebtBalance: 'QUANTO DEVI',
    labelDebtBalancePlaceholder: '0',
    labelMinPayment: 'PAGAMENTO MINIMO',
    labelInterestRate: 'TASSO DI INTERESSE',
    labelInterestHelp: 'ANNUALE',
    labelAddButton: 'AGGIUNGI AL PIANO',
    labelClearData: 'Cancella impostazioni',
    labelClearDataConfirm: 'Svuotare il piano?',
    labelDeleteDebt: 'Elimina',
    labelDebtInventory: 'Inventario Debiti',
    labelFreedomDate: 'DATA DI LIBERTÀ FINANZIARIA',
    labelActiveMethod: 'METODO',
    labelMonthsRemaining: 'MESI RIMANENTI',
    labelTotalInterest: 'INTERESSI TOTALI',
    labelTotalPaid: 'PAGAMENTO TOTALE FINALE',
    labelInterestSaved: 'INTERESSI RISPARMIATI',
    labelYourStrategy: 'La tua strategia passo dopo passo',
    labelStrategyHelp: 'Ogni passaggio mostra il tuo pagamento totale.',
    labelPriority: 'MASSIMA PRIORITÀ',
    labelStep: 'PASSO',
    labelAfterPaying: 'DOPO AVER ESTINTO IL PRECEDENTE',
    labelMonthlyPayment: 'Pagamento mensile',
    labelDetailedAmortization: 'Ammortamento Dettagliato',
    labelExportCSV: 'Esporta .CSV',
    labelDate: 'Data',
    labelStartingBalance: 'Saldo Iniziale',
    labelInterest: 'Interesse',
    labelAmortization: 'Ammortizzato',
    labelTotalMonth: 'Totale Mese',
    labelRemaining: 'Rimanente',
    labelFree: 'LIBERO',
    labelDebtInfinite: 'DEBITO INFINITO',
    labelInvalidInput: 'Indica saldo totale e pagamento minimo',
    labelEmptyStateTitle: 'Inizia il tuo piano',
    labelEmptyStateDescription: 'I tuoi debiti non sono per sempre. Aggiungi i tuoi debiti.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
  },
};
