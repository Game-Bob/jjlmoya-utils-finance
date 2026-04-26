import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'calcolo-interessi-mora-spagna';
const title = 'Calcolatore Interessi di Mora e Legali Spagna 2026';
const description =
  'Calcola gli interessi di mora tributari e legali per ritardati pagamenti in Spagna. Simulatore aggiornato per il 2025 e 2026.';

const faqData = [
  {
    question: 'Cosa sono gli interessi di mora?',
    answer:
      'È l’interesse applicato su una somma non pagata entro il termine stabilito. Si applica sul debito originale e si accumula fino al saldo completo.',
  },
  {
    question: 'Qual è la differenza tra interesse semplice e composto?',
    answer:
      'L’interesse semplice si calcola solo sul capitale originale ogni giorno. Quello composto si calcola sul capitale più gli interessi accumulati, generando una crescita più rapida del debito.',
  },
  {
    question: 'Come si calcola l’interesse giornaliero?',
    answer:
      'Si divide il tasso annuo per 365 giorni e si applica al capitale originale. Per esempio, 10% annuo = 0,0274% al giorno.',
  },
  {
    question: 'Quale tasso di interesse di mora devo applicare?',
    answer:
      'Dipende dalla legislazione locale e dai termini del contratto. In Spagna, la Legge sulla Morosità stabilisce tassi massimi. Consulta un consulente legale per il tuo caso specifico.',
  },
  {
    question: 'Posso usare questo calcolatore per debiti legali?',
    answer:
      'Questo è uno strumento informativo. Per debiti reali, verifica i termini contrattuali e la legislazione locale. Consulta un avvocato in caso di dubbi.',
  },
];

const howToData = [
  {
    name: 'Scegli il tipo di calcolo',
    text: 'Seleziona tra interesse semplice, composto o mensile a seconda della tua situazione.',
  },
  {
    name: 'Inserisci i dati',
    text: 'Inserisci l’importo originale, il tasso di interesse e il periodo di ritardo.',
  },
  {
    name: 'Ottieni il risultato',
    text: 'Il calcolatore mostra l’interesse giornaliero accumulato, il totale generato, l’importo finale e il tasso effettivo.',
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<LateInterestUI> = {
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
      text: 'Calcolatore Interessi di Mora e Legali: Guida Completa Spagnola',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nel complesso sistema legale e fiscale spagnolo, il passare del tempo di fronte a un debito non è gratuito. L’<strong>interesse di mora</strong> e l’<strong>interesse legale del denaro</strong> sono i meccanismi che la legge utilizza per compensare il pregiudizio causato dal ritardo nell’adempimento di un’obbligazione pecuniaria. Che si tratti di un debito con il fisco (<strong>Hacienda</strong>), un mancato pagamento tra imprese o una reclamazione giudiziaria, capire come maturano questi interessi è fondamentale.',
    },
    {
      type: 'title',
      text: 'Cos’è l’Interesse Legale del Denaro?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L’interesse legale del denaro è la maggiorazione applicata a un debito quando le parti non hanno concordato un interesse specifico o quando la legge lo determina. Per gli anni <strong>2024, 2025 e 2026</strong>, questo tasso è rimasto stabile al <strong>3,25%</strong>. Questa percentuale serve come base per molti calcoli legali.',
    },
    {
      type: 'title',
      text: 'L’Interesse di Mora Tributario (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando il debito è verso la Pubblica Amministrazione, l’<strong>interesse di mora tributario</strong> è superiore all’interesse legale per scoraggiare il ritardo nel pagamento delle imposte. Per il periodo <strong>2024-2026</strong>, è stato fissato al <strong>4,0625%</strong>. Questo è il sovrapprezzo che l’Hacienda ti applicherà se presenti una dichiarazione fuori termine.',
    },
    {
      type: 'tip',
      title: 'Carattere Indennitario, non Punitivo',
      html: '<p><strong>Dato chiave:</strong> A differenza delle sanzioni, gli interessi di mora hanno carattere indennitario, non punitivo. L’Hacienda non ti „castiga”, ma ti addebita il tempo in cui hai disposto di denaro che doveva essere nelle casse pubbliche.</p>',
    },
    {
      type: 'title',
      text: 'Come Calcolare gli Interessi Passo dopo Passo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il calcolo di questi interessi segue una formula di interesse semplice, dove il tempo si conta in giorni solari: <strong>Interessi = (Capitale × Giorni × Tasso di Interesse) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Capitale:</strong> L’importo totale del debito originale.',
        '<strong>Giorni:</strong> Il numero di giorni trascorsi dal giorno successivo alla scadenza al giorno del pagamento effettivo.',
        '<strong>Tasso di Interesse:</strong> La percentuale annua applicabile (Es: 3,25 o 4,0625).',
        '<strong>36.500:</strong> Il fattore divisore per convertire la percentuale annua in giornaliera (365 giorni x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Esempio Pratico: Debito con l’Hacienda',
      html: '<p>Immagina di dovere 5.000 € per una dichiarazione scaduta da 180 giorni:</p><ul><li>Interesse applicabile (Mora): 4,0625%</li><li>Calcolo: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Interessi risultanti:</strong> 100,17 €</li><li>Totale da pagare: 5.100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Differenze Secondo il Tipo di Debito',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Debiti Civili:</strong> Tra privati, si applica il 3,25% (legale).',
        '<strong>Debiti Mercantili:</strong> Si applica la Legge contro la Morosità, raggiungendo il 10,15% - 11,15% nel 2025-2026.',
        '<strong>Debiti con la Previdenza Sociale:</strong> Si applica il 4,0625% più sanzioni dal 10% al 20%.',
        '<strong>Interessi Processuali:</strong> In caso di sentenza giudiziaria, il 5,25% dalla data della sentenza.',
      ],
    },
    {
      type: 'title',
      text: 'Interessi nelle Operazioni Commerciali: Attenzione ai 60 Giorni!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Se sei un lavoratore autonomo o un’impresa, la legge spagnola 3/2004 stabilisce un termine massimo di pagamento di 60 giorni. Se il tuo cliente supera tale data, puoi esigere l’interesse di mora commerciale in modo automatico, senza solleciti, e addebitare una quota fissa di 40 € per i costi di recupero.',
    },
  ],
  ui: {
    labelTitle: 'Calcolatore Interessi di Mora',
    labelSimpleTitle: 'Semplice',
    labelCompoundTitle: 'Composto',
    labelMonthlyTitle: 'Mensile',
    labelSimpleQuestion: 'Calcola con interesse semplice',
    labelCompoundQuestion: 'Calcola con interesse composto',
    labelMonthlyQuestion: 'Calcola con periodi mensili',
    labelPrincipal: 'Importo Originale',
    labelAnnualRate: 'Tasso Annuo',
    labelDays: 'Giorni di Ritardo',
    labelMonths: 'Mesi di Ritardo',
    labelMonthlyRate: 'Tasso Mensile',
    labelDailyInterest: 'Interesse Giornaliero',
    labelTotalInterest: 'Interesse Totale',
    labelTotalAmount: 'Importo Totale',
    labelEffectiveRate: 'Tasso Effettivo',
    labelCopyTooltip: 'Copia risultato',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Formula applicata',
    reportTitle: 'REPORT CALCOLO INTERESSI',
    reportLabelPrincipal: 'Capitale',
    reportLabelType: 'Tipo',
    reportLabelPeriod: 'Periodo',
    reportLabelDays: 'Giorni trascorsi',
    reportLabelInterest: 'INTERESSI MATURATI',
    reportLabelTotal: 'TOTALE DA LIQUIDARE',
    reportDaysSuffix: 'giorni',
    formulaDescription: 'Questo calcolo utilizza i tassi vigenti. Se il periodo comprende anni precedenti con tassi diversi, il calcolo reale dovrebbe essere frazionato per periodi.',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
  },
};
