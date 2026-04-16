import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MortgageUI } from '../ui';

const slug = 'mutuo';
const title = 'Simulatore di Mutuo e Piano di Ammortamento alla Francese';
const description =
  'Calcola la tua rata mensile del mutuo, scopri quanto pagherai d’interessi e visualizza istantaneamente il tuo piano di ammortamento completo.';

const faqData = [
  {
    question: 'Cos’è il sistema di ammortamento francese?',
    answer:
      'È il sistema più utilizzato. La rata mensile rimane costante, ma all’inizio paghi quasi solo interessi e pochissimo capitale. Alla fine, avviene il contrario. Per questo estinguere anticipatamente il mutuo è più vantaggioso nei primi anni.',
  },
  {
    question: 'Tasso fisso o variabile nel 2026?',
    answer:
      'Tasso fisso: paghi di più ora ma dormi tranquillo per 30 anni. Tasso variabile: può essere più economico oggi, ma se i tassi salgono, la tua rata può schizzare e soffocare la tua economia. Dipende dalla tua avversione al rischio.',
  },
  {
    question: 'Quanto risparmio se estinguo 10.000€ anticipatamente?',
    answer:
      'Dipende dal momento. Se ammortizzi nel primo anno di un mutuo di 200.000€ al 3%, puoi risparmiare oltre 15.000€ di interessi. Se lo fai al 20° anno, risparmi a malapena 2.000€. Il tempismo è cruciale.',
  },
  {
    question: 'Quale percentuale del mio stipendio dovrei destinare al mutuo?',
    answer:
      'La raccomandazione generale è di non superare il 30-35% dei tuoi ingressi netti mensili (includendo altri debiti). Superare questa soglia aumenta significativamente il rischio di insolvenza in caso di imprevisti.',
  },
];

const howToData = [
  {
    name: 'Inserire l’importo del prestito',
    text: 'Scrivi la cifra totale che devi richiedere alla banca (sottraendo i tuoi risparmi versati come anticipo).',
  },
  {
    name: 'Regolare il tasso di interesse',
    text: 'Inserisci il TAN (Tasso Annuo Nominale) offerto dall’istituto. Puoi confrontare tra tasso fisso o variabile.',
  },
  {
    name: 'Scegliere la durata del rimborso',
    text: 'Definisci in quanti anni vuoi restituire il prestito. Aumentando gli anni, la rata diminuisce ma pagherai più interessi totali.',
  },
  {
    name: 'Analizzare il piano di ammortamento',
    text: 'Controlla mese per mese l’evoluzione del tuo debito e quanta parte della tua rata è destinata agli interessi rispetto al capitale.',
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

export const content: ToolLocaleContent<MortgageUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti e Riferimenti',
  bibliography: [
    {
      name: 'Banca d’Italia: Portale del Cliente Bancario',
      url: 'https://www.bancaditalia.it/pubblicazioni/guide-bi/index.html',
    },
    {
      name: 'Banca d’Italia: Informazioni sui mutui',
      url: 'https://www.bancaditalia.it/servizi-cittadino/servizi/esposti/guide/Guida_Mutuo_Ipotecario.pdf',
    },
    {
      name: 'Altroconsumo: Calcolatore mutuo e guida all’acquisto',
      url: 'https://www.altroconsumo.it/soldi/mutui',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Completa ai Mutui: Sistema Francese e Ammortamento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il mutuo è probabilmente il debito più grande che contrarrai nella tua vita. Capire come funziona il sistema di ammortamento alla francese è fondamentale per prendere decisioni intelligenti che possono farti risparmiare decine di migliaia di euro.',
    },
    {
      type: 'title',
      text: 'La „Trappola” del Sistema Francese: Capire la Composizione della tua Rata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In Italia, la maggior parte dei mutui utilizza il <strong>Sistema di Ammortamento Francese</strong>. La sua caratteristica principale è che la rata mensile rimane costante (se il tasso è fisso), ma la sua composizione cambia radicalmente nel tempo.',
    },
    {
      type: 'tip',
      title: 'Come si Evolverà la tua Rata',
      html: '<p><strong>All’inizio (Anni 1-10):</strong> Paghi quasi solo INTERESSI e restituisci pochissimo capitale. Su un mutuo di 250.000€ al 3%, il tuo primo pagamento potrebbe essere per l’80% composto da interessi.</p><p><strong>A metà (Anni 11-25):</strong> La proporzione si equilibra gradualmente.</p><p><strong>Alla fine (Anni 26-30):</strong> Paghi quasi tutto CAPITALE e pochissimi interessi.</p>',
    },
    {
      type: 'paragraph',
      html: 'Per questo motivo, se hai intenzione di <strong>estinguere il mutuo</strong> (anticipare somme), è molto più vantaggioso farlo nei primi anni del prestito. Estinguere 10.000€ nel primo anno può farti risparmiare oltre 15.000€ di interessi. Lo stesso anticipo al ventesimo anno ti fa risparmiare a malapena 2.000€.',
    },
    {
      type: 'title',
      text: 'Quanti Soldi Dovrei Destinare al Mutuo?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La Banca d’Italia raccomanda che il mutuo <strong>non superi il 30-35% del tuo reddito netto mensile</strong>. Se superi questa soglia, aumenti significativamente il rischio di default in caso di imprevisti (perdita del lavoro, malattie, ecc.).',
    },
    {
      type: 'title',
      text: 'Contesto 2026: Tasso Fisso vs Variabile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Con l’Euribor fluttuante, scegliere tra <strong>Tasso Fisso</strong> o <strong>Tasso Variabile</strong> è una decisione strategica che può costare migliaia di euro all’anno.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tasso Fisso',
          description: 'Paghi un po’ di più ora, ma dormi sereno sapendo che la tua rata non aumenterà mai.',
          points: [
            'Rata prevedibile per 30 anni',
            'Protezione contro il rialzo dei tassi',
            'Pace mentale in un’economia incerta',
            'Ideale per budget limitati',
          ],
        },
        {
          title: 'Tasso Variabile',
          description: 'Può essere più economico oggi, ma espone la tua economia alla volatilità.',
          highlight: true,
          points: [
            'Rata iniziale più bassa',
            'Rischio di rialzo dei tassi',
            'Possibile impatto grave sul budget',
            'Solo per chi tollera rischi elevati',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'La Decisione Fisso vs Variabile Dipende dal tuo Profilo',
      html: '<p><strong>Scegli il Tasso Fisso se:</strong> Il tuo budget è limitato, cerchi certezza e non tolleri sgradevoli sorprese mensili.</p><p><strong>Scegli il Tasso Variabile se:</strong> Hai un cuscinetto finanziario, credi che i tassi scenderanno o il tuo mutuo è di piccolo importo o a breve termine.</p>',
    },
  ],
  ui: {
    labelTitle: 'Calcolatore Mutuo',
    labelLoanAmount: 'Importo Prestito',
    labelInterestRate: 'Interesse (TAN)',
    labelYears: 'Durata (Anni)',
    labelMonthlyExtra: 'Aggiungi Risparmio Mensile',
    labelMonthlyPayment: 'Rata Mensile',
    labelMonthCount: 'mesi',
    labelSavingsCard: 'Il tuo Risparmio Potenziale',
    labelSavingsInterest: 'Interessi',
    labelSavingsTime: 'Tempo',
    labelTimelineComparison: 'Confronto Temporale',
    labelTimelineOriginal: 'Durata Originale',
    labelTimelineOptimized: 'Durata con Ammortamento',
    labelCostBreakdown: 'Dettaglio Costi Totali',
    labelBorrowed: 'Prestato',
    labelTotalBorrowed: 'Totale Prestato',
    labelTotalInterest: 'Totale Interessi',
    labelAmortizationTable: 'Piano di Ammortamento',
    labelTableHeader: 'Vedi tabella completa',
    labelViewAll: 'Vedi tutto',
    labelPaid: 'Mutuo Pagato',
    labelTableMonth: 'Mese',
    labelTableInterest: 'Interesse',
    labelTablePrincipal: 'Capitale',
    labelTableExtra: 'Extra',
    labelTableBalance: 'Residuo',
    labelMoreMonths: 'altri mesi',
    labelMonth: 'Mese',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
    monthPlural: 'mesi',
    yearPlural: 'anni',
  },
};
