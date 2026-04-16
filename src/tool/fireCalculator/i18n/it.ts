import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FIRECalculatorUI } from '../ui';

const slug = 'calcolatore-regola-4-per-cento-fire';
const title = 'Calcolatore FIRE: Regola del 4% per la tua Libertà Finanziaria';
const description = 'Calcola il tuo numero magico per l’indipendenza finanziaria usando la regola del 4%. Pianifica il tuo pensionamento anticipato e visualizza il tuo percorso verso la libertà economica.';

const faqData = [
  {
    question: 'Cos’è la Regola del 4%?',
    answer: 'La Regola del 4% è una strategia di prelievo basata sullo Studio Trinity che indica che puoi prelevare il 4% del tuo patrimonio il primo anno di pensionamento, adeguandolo all’inflazione negli anni successivi, senza esaurire i fondi in 30 anni.',
  },
  {
    question: 'Cos’è FIRE?',
    answer: 'FIRE sta per Financial Independence, Retire Early (Indipendenza Finanziaria, Pensionamento Anticipato). È un movimento che mira a raggiungere la libertà economica attraverso una combinazione aggressiva di risparmio e investimento intelligente.',
  },
  {
    question: 'Qual è il mio numero magico?',
    answer: 'Il tuo numero magico è il patrimonio totale che devi accumulare per poter vivere di rendita senza lavorare. Si calcola dividendo le tue spese annuali per il tasso di prelievo sicuro (solitamente il 4%).',
  },
  {
    question: 'Che differenza c’è tra Lean, Barista e Fat FIRE?',
    answer: 'Lean FIRE significa vivere con spese minime (70% delle spese attuali), Barista FIRE significa lavorare part-time mentre le rendite coprono il resto (50% delle spese), e Fat FIRE significa avere uno stile di vita agiato (150% delle spese).',
  },
  {
    question: 'La Regola del 4% è realistica?',
    answer: 'La Regola del 4% ha una probabilità storica di successo del 95% in un portafoglio 50/50 azioni-obbligazioni per 30 anni. Tuttavia, non contempla il rischio di sequenza dei rendimenti e si basa principalmente sui dati del mercato statunitense.',
  },
];

const howToData = [
  {
    name: 'Calcola le tue spese mensili',
    text: 'Analizza quanto spendi realmente ogni mese, inclusi alloggio, cibo, servizi e intrattenimento.',
  },
  {
    name: 'Scegli il tuo tasso di prelievo sicuro',
    text: 'La Regola del 4% è lo standard, ma puoi regolare tra il 2,5% (più conservativo) e il 6% (più aggressivo) a seconda della tua tolleranza al rischio.',
  },
  {
    name: 'Inserisci il tuo patrimonio attuale',
    text: 'Somma il totale dei tuoi investimenti, risparmi e attività che generano reddito passivo.',
  },
  {
    name: 'Visualizza i tuoi progressi',
    text: 'Osserva il grafico di crescita e le tappe della libertà (Lean, Barista, Fat FIRE) per capire quando raggiungerai il tuo obiettivo.',
  },
];

const bibliographyData = [
  {
    name: 'The Trinity Study: Portfolio Survivability',
    url: 'https://en.wikipedia.org/wiki/Trinity_study',
  },
  {
    name: 'Early Retirement Forum - 4% Rule Discussion',
    url: 'https://www.bogleheads.org/forum/',
  },
  {
    name: 'Shiller CAPE Index - Market Valuations',
    url: 'https://www.multpl.com/shiller-pe',
  },
  {
    name: 'Bogleheads - Guida all’Investimento',
    url: 'https://bogleheads.es/',
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

export const content: ToolLocaleContent<FIRECalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti su FIRE',
  faq: faqData,
  bibliographyTitle: 'Fonti e Riferimenti',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regola del 4%: Il Santo Graal del Pensionamento Anticipato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Scopri come calcolare il patrimonio necessario per vivere di rendita per sempre. La <strong>Regola del 4%</strong> è nata dallo Studio Trinity, condotto nel 1998 da tre professori di finanza. Hanno analizzato i dati storici dal 1926 per determinare quale percentuale potesse essere prelevata annualmente senza esaurire il portafoglio in 30 anni.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Successo Storico' },
        { value: '50/50', label: 'Mix Azioni/Obbligazioni' },
        { value: '30', label: 'Anni di Orizzonte' },
        { value: '4%', label: 'Prelievo Sicuro' },
      ],
    },
    {
      type: 'title',
      text: 'Cos’è il Movimento FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'FIRE è l’acronimo di Financial Independence, Retire Early (Indipendenza Finanziaria, Pensionamento Anticipato).',
        'Cerca la libertà di scegliere cosa fare del proprio tempo senza che il denaro sia un vincolo.',
        'Si basa sull’ottimizzazione del risparmio e sull’investimento intelligente.',
        'L’obiettivo è che i tuoi asset generino un flusso di cassa sufficiente a coprire le tue spese.',
      ],
    },
    {
      type: 'title',
      text: 'Tipi di Libertà Finanziaria',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lean FIRE',
          description: 'Stile di vita minimalista. Copre solo le spese di base per la sopravvivenza.',
          points: ['Risparmio estremo', 'Spese molto basse', 'Libertà frugale'],
        },
        {
          title: 'Barista FIRE',
          description: 'Situazione ibrida in cui i tuoi investimenti coprono la metà delle tue spese.',
          points: ['Lavoro per piacere', 'Copertura previdenziale', 'Minore stress'],
        },
        {
          title: 'Fat FIRE',
          description: 'Pensionamento con un budget generoso che permette lussi e viaggi.',
          points: ['Alto patrimonio', 'Nessuna restrizione', 'Eredità familiare'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come usare il nostro Calcolatore FIRE?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tracciamento Spese:</strong> Analizza le tue spese reali degli ultimi 12 mesi.',
        '<strong>Definizione SWR:</strong> Scegli il tuo tasso di prelievo sicuro in base al rischio.',
        '<strong>Patrimonio Attuale:</strong> Inserisci il valore dei tuoi investimenti attuali.',
        '<strong>Capacità di Risparmio:</strong> Proietta quanto tempo ti manca all’obiettivo.',
        '<strong>Visualizzazione Grafica:</strong> Analizza il grafico di crescita della tua ricchezza.',
      ],
    },
    {
      type: 'title',
      text: 'Analisi della Regola del 4%',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vantaggi',
          description: 'Perché la regola del 4% funziona',
          points: [
            'Semplicità matematica per una pianificazione rapida.',
            'Basata su dati storici di quasi un secolo.',
            'Adattabile a qualsiasi livello di spesa.',
          ],
        },
        {
          title: 'Limitazioni',
          description: 'Cosa non copre la regola del 4%',
          points: [
            'Non contempla il rischio di sequenza dei rendimenti.',
            'Basata principalmente sul mercato statunitense.',
            'Ignora cambiamenti drastici nella fiscalità locale.',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fattore Critico: L’Inflazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ricorda che 1.000€ oggi non compreranno la stessa cosa in futuro. È vitale usare rendimenti reali (al netto dell’inflazione) affinché le tue proiezioni mantengano il potere d’acquisto attuale. La Regola del 4% assume che tu adegui i tuoi prelievi annualmente all’inflazione.',
    },
  ],
  ui: {
    labelTitle: 'Calcolatore FIRE: Regola del 4%',
    labelDescription: 'Calcola il tuo numero magico per l’indipendenza finanziaria usando la regola del 4% e visualizza le tue tappe verso la libertà.',
    labelMonthlyExpenses: 'Spese Mensili',
    labelSWR: 'Tasso di Prelievo (SWR)',
    labelCurrentWorth: 'Patrimonio Attuale',
    labelMonthlySavings: 'Capacità di Risparmio Mensile',
    labelAnnualReturn: 'Rendimento Stimato (Netto)',
    labelFreedomMilestones: 'Tappe della Libertà',
    labelLeanFIRE: 'Lean FIRE (70% sopravvivenza)',
    labelBaristaFIRE: 'Barista FIRE (50% reddito)',
    labelFatFIRE: 'Fat FIRE (150% lusso)',
    labelMagicNumber: 'Il tuo Numero Magico per essere Libero',
    labelMagicNumberDesc: 'Capitale necessario per vivere di rendita',
    labelTimeRemaining: 'Tempo alla libertà finanziaria',
    labelTimeRemainingFormat: 'Ti mancano {years} anni e {months} mesi',
    labelAlreadyFI: 'Hai già raggiunto la libertà finanziaria!',
    labelUnachievable: 'Obiettivo irraggiungibile con questo risparmio',
    labelHiddenCostsChecklist: 'Checklist Spese Nascoste',
    labelHealth: 'Assicurazione Sanitaria (+200€)',
    labelTaxes: 'Tasse (+150€)',
    labelHome: 'Manutenzione Casa (+100€)',
    labelTravel: 'Viaggi e Svago (+300€)',
    labelEmergency: 'Fondo Emergenze (+100€)',
    labelSubscriptions: 'Abbonamenti (+50€)',
    labelAdded: 'Aggiunto:',
    labelSavePlan: 'Salva Piano',
    labelSWRTooltip: 'Safe Withdrawal Rate: Percentuale dei tuoi risparmi che puoi prelevare ogni anno senza esaurire i soldi.',
    labelReturnTooltip: 'Rendimento annuale del mercato (già al netto dell’inflazione). Lo standard storico è il 7%.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
  },
};
