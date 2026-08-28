import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calcolatore-carte-revolving';
const title = 'Calcolatore Carte Revolving e Usura';
const description = 'Simula tempi e costi per estinguere il debito della tua carta revolving e verifica la soglia di usura.';

const faqData = [{ question: 'Cosa è una carta revolving?', answer: 'Permette di rateizzare i pagamenti con tassi di interesse.' },
  { question: "Cosa devo verificare prima di usare il risultato?", answer: "Controlla dati, unità, ipotesi e limiti; è un'indicazione, non una decisione ufficiale." },
  { question: "Cosa devo verificare prima di usare il risultato?", answer: "Controlla dati, unità, ipotesi e limiti; è un'indicazione, non una decisione ufficiale." },
  { question: "Cosa devo verificare prima di usare il risultato?", answer: "Controlla dati, unità, ipotesi e limiti; è un'indicazione, non una decisione ufficiale." },];
const howToData = [{ name: 'Seleziona mercato', text: 'Scegli il paese o soglia personalizzata.' },
  { name: "Verifica le ipotesi", text: "Controlla dati, unità e limiti del calcolatore prima di interpretare il risultato." },
  { name: "Verifica le ipotesi", text: "Controlla dati, unità e limiti del calcolatore prima di interpretare il risultato." },
  { name: "Verifica le ipotesi", text: "Controlla dati, unità e limiti del calcolatore prima di interpretare il risultato." },];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [] };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] };
const softwareSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'FinanceApplication', operatingSystem: 'All' };

export const content: ToolLocaleContent<RevolvingCardCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, softwareSchema],
  seo: [{ type: 'title', text: 'Come funzionano le carte revolving' }, { type: 'paragraph', html: 'Le carte revolving consentono di rateizzare i pagamenti.' },
  { type: 'paragraph', html: "Una <strong>carta revolving</strong> permette di pagare a rate, ma un TAEG elevato può trasformare un debito flessibile in un impegno molto lungo. Il saldo residuo passa al periodo successivo e continua a produrre interessi." },
  { type: 'paragraph', html: "A differenza di un prestito con durata definita, la durata dipende dalla rata scelta. Una rata piccola può mantenere il debito per anni anche se sembra comoda." },
  { type: 'paragraph', html: "Il TAEG è più informativo della sola rata pubblicizzata: controlla anche costi, assicurazioni e condizioni prima di confrontare le carte." },
  { type: 'paragraph', html: "Quando il pagamento è una percentuale del saldo, anche l importo della rata tende a diminuire. Di conseguenza, la parte che riduce il capitale può diventare sempre più piccola." },
  { type: 'paragraph', html: "Gli interessi del mese vengono pagati per primi e solo il resto riduce il capitale. Se la rata è inferiore agli interessi, il saldo cresce e il simulatore può indicare una durata infinita." },
  { type: 'paragraph', html: "La tabella di ammortamento separa interessi, capitale e saldo finale per mostrare se i pagamenti stanno davvero riducendo il debito." },
  { type: 'paragraph', html: "Scegli Spagna, Stati Uniti, Regno Unito o una soglia personalizzata, poi inserisci saldo residuo, plafond e TAEG." },
  { type: 'paragraph', html: "Confronta una rata fissa con una percentuale del saldo. Nella seconda opzione, una rata minima assoluta evita che il pagamento diventi troppo piccolo quando il debito diminuisce." },
  { type: 'paragraph', html: "Leggi insieme interessi totali, importo complessivo rimborsato e mesi necessari. La rata più bassa non è di solito quella meno costosa." },
  { type: 'paragraph', html: "Il controllo antiusura confronta il tasso inserito con la soglia del mercato scelto. È un indicatore automatico e non una valutazione legale definitiva del contratto." },
  { type: 'paragraph', html: "In Spagna la valutazione può dipendere dal confronto con il tasso medio delle carte revolving in vigore quando il contratto è stato firmato. Negli altri paesi cambiano regole e limiti." },
  { type: 'paragraph', html: "Un avviso non dimostra da solo una violazione e uno stato normale non esclude altre clausole problematiche. Per un contratto concreto chiedi assistenza locale." },
  { type: 'paragraph', html: "La simulazione usa saldo, TAEG e pagamenti regolari inseriti e presume che non ci siano nuovi acquisti, commissioni di mora o variazioni del tasso." },
  { type: 'paragraph', html: "Un estratto conto reale può calcolare interessi giornalieri, applicare costi o distribuire i pagamenti in modo diverso. Questi dettagli possono cambiare durata e costo finale." },
  { type: 'paragraph', html: "Usa il risultato per preparare domande alla banca e confrontare scenari; non sostituisce estratto conto, contratto o verifica professionale." },
  { type: 'paragraph', html: "Per uscire dal ciclo, una rata fissa nettamente superiore agli interessi del mese è spesso più facile da pianificare di una percentuale molto bassa. Evita di aumentare il saldo durante il rimborso." },
  { type: 'paragraph', html: "Prima di consolidare o cambiare prodotto, confronta TAEG, costi, durata e importo totale rimborsato, non solo la rata mensile." },
  { type: 'paragraph', html: "Aggiorna il simulatore quando cambiano saldo, rata o tasso e conserva il piano come riferimento per seguire i progressi." },],
  ui: {
    title: 'Calcolatore Carta Revolving & Analisi Usura',
    balanceLabel: 'Debito Residuo',
    creditLimitLabel: 'Plafond di Credito',
    aprLabel: 'Tasso di Interesse (TAN / TAEG)',
    paymentTypeLabel: 'Modalità di Pagamento',
    paymentTypeFixed: 'Rata Fissa Mensile',
    paymentTypePercentage: 'Percentuale sul Saldo',
    paymentValueLabel: 'Valore Rata (Importo o %)',
    minPaymentValueLabel: 'Rata Minima Consentita',
    currencyLabel: 'Valuta',
    marketLabel: 'Mercato Regolatorio / Paese',
    marketES: 'Spagna (Banco de España)',
    marketUS: 'Stati Uniti (CFPB)',
    marketUK: 'Regno Unito (FCA)',
    marketEU: 'Unione Europea (BCE)',
    marketJP: 'Giappone (FSA)',
    marketKR: 'Corea del Sud (FSC)',
    marketCN: 'Cina (PBOC)',
    marketBR: 'Brasile (Banco Central)',
    marketMX: 'Messico (Banco de México)',
    marketPL: 'Polonia (KNF)',
    marketID: 'Indonesia (OJK)',
    marketTR: 'Turchia (BRSA)',
    marketRU: 'Russia (Banca Centrale)',
    marketSE: 'Svezia (Finansinspektionen)',
    marketAU: 'Australia (ASIC)',
    marketCA: 'Canada (FCAC)',
    marketCustom: 'Soglia Personalizzata',
    customThresholdLabel: 'Soglia Usura Personalizzata (TAEG %)',

    resultsTitle: 'Risultati Ammortamento',
    totalInterestLabel: 'Interessi Totali Pagati',
    totalPaidLabel: 'Totale Rimborsato',
    monthsToPayLabel: 'Tempo di Estinzione',
    infiniteDebtWarning: 'Debito infinito! La rata non copre gli interessi mensili.',
    payoffYearsLabel: 'Cronologia di Rientro',

    usuryTitle: 'Analisi Usura e Conformità',
    usurySafeStatus: 'Standard di Mercato (Rischio Basso)',
    usuryWarningStatus: 'Tasso Elevato (Rischio Medio)',
    usuryUsuriousStatus: 'Potenzialmente Usuraio (Rischio Alto)',
    usuryReferenceLabel: 'TAEG Medio di Mercato',
    usuryThresholdLabel: 'Soglia Allerta Usura',

    tableTitle: 'Piano di Ammortamento Mensile',
    tableHeaderMonth: 'Mese',
    tableHeaderInitial: 'Saldo Iniziale',
    tableHeaderInterest: 'Interessi',
    tableHeaderPrincipal: 'Capitale Rimborsato',
    tableHeaderPayment: 'Rata',
    tableHeaderFinal: 'Saldo Finale',

    copyTooltip: 'Copia Report negli Appunti',
    copiedLabel: 'Report Copiato!',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
