import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'calcolatore-carte-revolving';
const title = 'Calcolatore Carte Revolving e Usura';
const description = 'Simula tempi e costi per estinguere il debito della tua carta revolving e verifica la soglia di usura.';

const faqData = [{ question: 'Cosa è una carta revolving?', answer: 'Permette di rateizzare i pagamenti con tassi di interesse.' }];
const howToData = [{ name: 'Seleziona mercato', text: 'Scegli il paese o soglia personalizzata.' }];

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
  seo: [{ type: 'title', text: 'Come funzionano le carte revolving' }, { type: 'paragraph', html: 'Le carte revolving consentono di rateizzare i pagamenti.' }],
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
