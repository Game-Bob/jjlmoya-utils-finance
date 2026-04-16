import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CompoundInterestUI } from '../ui';

const slug = 'interesse-composto';
const title = 'Calcolatore di Interesse Composto: Visualizza la tua ricchezza futura';
const description =
  'Scopri come piccoli investimenti si trasformano in grandi fortune. Lo strumento definitivo per pianificare la tua libertà finanziaria e la tua pensione.';

const faqData = [
  {
    question: 'Cos’è l’interesse composto?',
    answer:
      'È l’interesse calcolato sul capitale iniziale e anche sugli interessi accumulati dei periodi precedenti. Ciò genera una crescita esponenziale dell’investimento nel tempo.',
  },
  {
    question: 'Qual è la differenza con l’interesse semplice?',
    answer:
      'Nell’interesse semplice, gli interessi sono calcolati solo sul capitale iniziale. Nel composto, gli interessi vengono reinvestiti, il che significa che „i tuoi interessi generano altri interessi”.',
  },
  {
    question: 'Cos’è la „Regola del 72”?',
    answer:
      'È una formula rapida per stimare quanto tempo impiegherà un investimento a raddoppiare: dividi 72 per il tasso di rendimento annuo. Ad esempio, all’8% annuo, raddoppierai i tuoi soldi in 9 anni.',
  },
  {
    question: 'Perché è importante iniziare a investire da giovani?',
    answer:
      'A causa dell’effetto esponenziale, il fattore più determinante non è la quantità di denaro risparmiata, ma il tempo. Iniziare qualche anno prima può portare a una ricchezza finale molto maggiore grazie alla capitalizzazione.',
  },
];

const howToData = [
  {
    name: 'Inserire il capitale iniziale',
    text: 'Scrivi la quantità di denaro con cui inizierai il tuo piano di investimento.',
  },
  {
    name: 'Definire i contributi periodici',
    text: 'Indica quanto denaro risparmierai e investirai ogni mese o ogni anno in aggiunta.',
  },
  {
    name: 'Stimare il rendimento annuo',
    text: 'Inserisci la percentuale di profitto annuo che prevedi di ottenere (es. 7% per l’S&P 500 storico).',
  },
  {
    name: 'Regolare l’orizzonte temporale',
    text: 'Scegli per quanti anni manterrai l’investimento per visualizzare la crescita esponenziale del tuo capitale.',
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

export const content: ToolLocaleContent<CompoundInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti e Riferimenti',
  bibliography: [
    {
      name: 'Investopedia: Compound Interest Definition',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
    {
      name: 'Investopedia: Rule of 72',
      url: 'https://www.investopedia.com/terms/r/ruleof72.asp',
    },
    {
      name: 'Khan Academy: Interest and Debt',
      url: 'https://it.khanacademy.org/economics-finance-domain/core-finance/interest-tutorial',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Magia dell’Interesse Composto: Costruisci la tua ricchezza in modo esponenziale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Albert Einstein lo definì l’„ottava meraviglia del mondo”. L’<strong>interesse composto</strong> è il meccanismo più potente per generare ricchezza a lungo termine. Non devi essere un esperto di finanza per approfittarne: serve solo tempo, pazienza e denaro investito.',
    },
    {
      type: 'title',
      text: 'Interesse Semplice vs Composto: La metafora della palla di neve',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Immagina di avere una palla di neve in cima a una collina. L’<strong>interesse semplice</strong> è come far rotolare quella palla e dover aggiungere neve manualmente ogni metro per farla crescere. L’<strong>interesse composto</strong> è invece come lasciare che la palla rotoli da sola: raccoglie neve autonomamente e, più diventa grande, più superficie ha per raccogliere <em>ancora più</em> neve a ogni giro.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Interesse Semplice',
          description: 'Gli interessi sono calcolati sempre sul capitale iniziale.',
          points: [
            'Formula: Capitale × Tasso × Tempo',
            'Crescita lineare e prevedibile',
            'Utilizzato in prestiti a breve termine',
            'Nessun reinvestimento dei profitti',
          ],
        },
        {
          title: 'Interesse Composto',
          description: 'Gli interessi si sommano al capitale e generano nuovi interessi.',
          highlight: true,
          points: [
            'Formula: Capitale × (1 + Tasso)^Tempo',
            'Crescita esponenziale accelerata',
            'Base di ogni investimento a lungo termine',
            'I tuoi profitti generano altri profitti',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Matematicamente, i tuoi profitti generano nuovi profitti. Nei primi anni sembra lento, ma superato il „punto di svolta”, la curva s’impenna verticalmente. È qui che si creano le vere fortune.',
    },
    {
      type: 'title',
      text: 'Perché il tempo è il tuo miglior alleato?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il fattore più determinante non è la quantità di denaro che investi, ma <strong>per quanti anni lo lasci crescere</strong>. Iniziare 10 anni prima può portare a una ricchezza finale 2 o 3 volte superiore, anche se investi meno denaro totale. Questo effetto esponenziale è il motivo per cui i giovani investitori hanno un vantaggio incomparabile.',
    },
    {
      type: 'tip',
      title: 'La Regola del 72',
      html: '<p>Dividi 72 per il tuo rendimento annuo per sapere quanti anni impiegherai a <strong>raddoppiare i tuoi soldi</strong>.</p><p><em>Esempio: All’8%, raddoppi ogni 9 anni (72/8 = 9).</em></p><p>Questa formula magica funziona per qualsiasi tasso di rendimento e ti aiuta a stimare rapidamente la crescita dei tuoi investimenti.</p>',
    },
    {
      type: 'tip',
      title: 'Consiglio 2026',
      html: '<p>L’inflazione rimane un fattore. Assicurati che il tuo rendimento netto superi almeno il 2-3% annuo per non perdere potere d’acquisto. Investi in asset che crescono più velocemente dell’inflazione.</p>',
    },
    {
      type: 'title',
      text: 'Frequenza di Capitalizzazione: È importante?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L’interesse può capitalizzarsi annualmente, semestralmente, trimestralmente, mensilmente o perfino quotidianamente. Più <strong>frequente è la capitalizzazione</strong>, maggiore sarà l’effetto composto. Un medesimo capitale con lo stesso tasso crescerà di più se l’interesse si compone mensilmente rispetto a una composizione annuale.',
    },
  ],
  ui: {
    labelTitle: 'Simulatore di Investimento',
    labelRealtime: 'Tempo reale',
    labelInitial: 'Capitale Iniziale',
    labelMonthly: 'Contributo Mensile',
    labelRate: 'Rend. Annuo',
    labelYears: 'Anni',
    labelMyMoney: 'I tuoi soldi',
    labelProfit: 'Profitto (Interessi)',
    labelTotal: 'Totale Accumulato',
    labelYear: 'Anno',
    labelPrincipal: 'I tuoi soldi (Capitale)',
    labelInterest: 'Interessi Generati',
    insightPrefix: '[TIP] Nell’anno ',
    insightSuffix:
      ', i tuoi interessi annui generati supereranno i tuoi contributi. Il denaro lavora già più di te!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'it-IT',
  },
};
