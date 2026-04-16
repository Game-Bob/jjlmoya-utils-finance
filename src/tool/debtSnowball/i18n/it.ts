import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DebtSnowballUI } from '../ui';

const slug = 'metodo-palla-di-neve-calcolatore-debiti';
const title = 'Calcolatore Metodo Palla di Neve: Piano di Pagamento Debiti 2026';
const description = 'Calcola la tua data di libertà finanziaria con il metodo palla di neve di Dave Ramsey. Organizza i tuoi debiti e visualizza il tuo piano di pagamenti mensile.';

const faqData = [
  {
    question: 'Cos’è il metodo della palla di neve?',
    answer: 'È una strategia di pagamento dei debiti che consiste nel pagare i debiti in ordine dal saldo più basso al più alto, indipendentemente dal tasso di interesse. Si concentra sulla vittoria psicologica di eliminare velocemente i piccoli debiti.',
  },
  {
    question: 'Perché non ordinare per tasso di interesse (Metodo Valanga)?',
    answer: 'Matematicamente, pagare prima l’interesse più alto fa risparmiare più soldi. Tuttavia, molte persone abbandonano perché non vedono risultati immediati. La Palla di Neve dà priorità alla motivazione: vedere sparire un debito velocemente dà l’energia per affrontare quelli grandi.',
  },
  {
    question: 'Devo avere dei risparmi prima di iniziare il piano?',
    answer: 'Si raccomanda di avere un piccolo "Fondo di Emergenza" (circa 1.000€) prima di attaccare i debiti. Questo evita di dover usare di nuovo la carta di credito in caso di imprevisti.',
  },
  {
    question: 'Quali debiti devo includere nel calcolatore?',
    answer: 'Tutti i debiti di consumo: carte di credito, prestiti personali, finanziamenti auto, fatture scadute. Il mutuo viene solitamente lasciato per una fase successiva.',
  },
];

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

const bibliographyData = [
  {
    name: 'Investopedia — Debt Snowball vs. Debt Avalanche',
    url: 'https://www.investopedia.com/',
  },
  {
    name: 'Harvard Business Review — Research on Debt Payoff Strategies',
    url: 'https://hbr.org/',
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
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Fonti',
  bibliography: bibliographyData,
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
  ],
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
