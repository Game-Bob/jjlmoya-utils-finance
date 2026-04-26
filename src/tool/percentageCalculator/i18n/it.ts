import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PercentageCalculatorUI } from '../ui';

const slug = 'calcolatore-percentuali';
const title = 'Calcolatore di Percentuali 4 in 1: Sconti, Aumenti e Ribassi';
const description =
  'Calcola facilmente le percentuali online gratuitamente. 4 strumenti in 1 per estrarre l’X% di Y, differenza percentuale, aggiungere o sottrarre l’IVA, sconti e mance automatiche.';

const faqData = [
  {
    question: 'Come funziona il calcolatore?',
    answer:
      'Basta inserire i valori nelle caselle del caso d’uso corrispondente al tuo problema e il nostro calcolatore elaborerà la formula senza dover premere alcun pulsante di calcolo.',
  },
  {
    question: 'È valido per calcolare l’IVA o le tasse?',
    answer:
      'Sì, il blocco 4 („Aggiungere o sottrarre percentuale”) è progettato proprio per casi come l’applicazione di un’IVA al 22% su un prezzo base o il calcolo di una ritenuta d’acconto.',
  },
  {
    question: 'Gestisce numeri decimali e negativi?',
    answer:
      'Certamente. Puoi inserire numeri decimali (usando il punto) e funzionerà anche con valori negativi se devi analizzare bilanci contabili in perdita.',
  },
  {
    question: 'Posso copiare i risultati?',
    answer:
      'Sì, ogni blocco ha un pulsante nel riquadro del risultato che copia istantaneamente la cifra negli appunti del tuo dispositivo per poterla incollare in un’altra app o documento.',
  },
];

const howToData = [
  {
    name: 'Identifica il tuo problema matematico',
    text: 'Leggi i titoli dei 4 blocchi e scegli quello che coincide con ciò che vuoi sapere (Es. Quanto è il 20% di 50? -> Blocco 1).',
  },
  {
    name: 'Inserisci le cifre',
    text: 'Compila i campi „X” e „Y”. Non preoccuparti dell’ordine, la frase di ogni blocco ti guida visivamente.',
  },
  {
    name: 'Copia il risultato istantaneo',
    text: 'La cifra apparirà in tempo real in basso mentre scrivi. Premi l’icona di copia se desideri portarla altrove.',
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

export const content: ToolLocaleContent<PercentageCalculatorUI> = {
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
      text: 'Calcolatore di Percentuali 4 in 1: Domina i Calcoli Rapidi',
      level: 2,
    },
    {
      type: 'title',
      text: 'A cosa serve un calcolatore di percentuali multiplo?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Calcolare le percentuali è una delle operazioni matematiche più comuni nella nostra vita quotidiana. Dal calcolo dello sconto durante i saldi, alla conoscenza della mancia adeguata in un ristorante, fino alla determinazione del margine di profitto in un’azienda o dell’interesse di un prestito. Pur essendo operazioni quotidiane, non è sempre facile eseguirle a mente o ricordare la formula esatta.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro calcolatore di percentuali 4 in 1 raggruppa gli scenari più richiesti. Non hai più bisogno di cercare su Google „come calcolare il 20 per cento” o „formula per il calcolo della percentuale”. Hai le quattro operazioni essenziali in un unico posto, in modo interattivo e con risultati istantanei.',
    },
    {
      type: 'title',
      text: 'Analisi dei 4 casi d’uso più comuni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per semplificarti la vita, abbiamo separato lo strumento in quattro chiari blocchi visivi che risolvono i problemi reali che affrontiamo ogni giorno:',
    },
    {
      type: 'card',
      icon: 'mdi:percent',
      title: '1. Quanto è l’X% di Y?',
      html: '<p><strong>Il caso classico.</strong> Utile per calcolare sconti o mance. Se vuoi sapere quanto è il 15% di 120€, questo è lo strumento che fa per te. La formula sottostante divide semplicemente la percentuale per 100 e la moltiplica per il valore totale.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:division',
      title: '2. Che percentuale è X di Y?',
      html: '<p><strong>Ideale per le proporzioni.</strong> Se hai preso 45 punti in un esame da 60, che voto hai su 100? Questa funzione divide la parte per il totale e la moltiplica per cento, dandoti l’esatto peso relativo.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:chart-line-variant',
      title: '3. Aumento o Diminuzione Percentuale',
      html: '<p><strong>Perfetto per finanza e analisi.</strong> Di quanto è aumentato l’affitto rispetto all’anno scorso? Se prima pagavi 800€ e ora 840€, questa funzione ti dirà che hai subito un aumento del 5%. Misura la crescita o la decrescita tra due cifre.</p>',
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: '4. Aggiungere o Sottrarre percentuale a un valore',
      html: '<p><strong>Utilissimo per l’IVA.</strong> Se hai un prezzo base (es. 100€) e devi aggiungere il 22% di IVA, questo calcolatore ti darà direttamente i 122€ finali senza dover fare operazioni intermedie. Allo stesso modo, serve per applicare uno sconto diretto (es. sottrarre il 20%).</p>',
    },
    {
      type: 'title',
      text: 'Miti comuni sul calcolo delle percentuali',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spesso ci blocchiamo di fronte a percentuali grandi o decimali, ma ci sono alcuni „trucchi” matematici che possono semplificarti la vita. Il più famoso è la <strong>reversibilità delle percentuali</strong>.',
    },
    {
      type: 'tip',
      title: 'Il trucco della reversibilità',
      html: '<p>Sapevi che l’X% di Y è esattamente uguale all’Y% di X? Per esempio, se ti chiedono di calcolare il 18% di 50 a mente, può sembrare complicato. Ma se lo inverti, il 50% di 18 è molto facile: è 9! Questo vale per assolutamente qualsiasi numero ed è un incredibile salvavita nel quotidiano.</p>',
    },
    {
      type: 'title',
      text: 'Perché sbagliamo a calcolare le crescite',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uno degli errori più comuni si verifica nel caso 3: l’aumento o la diminuzione percentuale. Immaginiamo che un’azione in borsa costi 100€, scenda del 50% e il giorno dopo salga del 50%. L’intuizione ci dice che torna a valere 100€, ma è sbagliato.',
    },
    {
      type: 'paragraph',
      html: 'Se scende del 50% da 100€, il suo nuovo valore è 50€. Se da quei 50€ sale del 50%, l’incremento è la metà di 50 (25€). Pertanto, il prezzo finale sarebbe 75€. Questo è un esempio classico del perché i rialzi e i ribassi percentuali non sono asimmetrici e perché i calcolatori dinamici come questo prevengono gravi errori finanziari.',
    },
    {
      type: 'title',
      text: 'Uso professionale e accademico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La nostra interfaccia è priva di distrazioni e progettata per <strong>lavorare velocemente</strong>. Puoi tenerla in una scheda fissata del browser, passare rapidamente tra i vari campi e, grazie al pulsante di copia accanto al risultato, trasferire il dato esatto nel tuo Excel o Google Sheets senza rischio di errori di battitura.',
    },
    {
      type: 'list',
      items: [
        'Commercio web e negozi fisici: calcolo rapido del prezzo di vendita applicando margini commerciali e aggiungendo l’IVA.',
        'Gestione delle risorse umane: determinazione del divario salariale, ritenute fiscali e aumenti di stipendio basati sull’inflazione.',
        'Istruzione universitaria: professori che livellano i voti o studenti di rami scientifici che analizzano la deviazione dei loro esperimenti.',
        'Marketing digitale: misurazione del CTR (Click Through Rate), ROAS (Return on Ad Spend) o Conversion Rate nell’eCommerce.',
      ],
    },
  ],
  ui: {
    labelTitle: 'Calcolatore di Percentuali',
    labelCase1Title: 'Caso 1',
    labelCase1Question: 'Quanto è l’X% di Y?',
    labelCase1Placeholder1: 'X',
    labelCase1Placeholder2: 'Y',
    labelCase1Formula: 'Formula: (X / 100) × Y',
    labelCase2Title: 'Caso 2',
    labelCase2Question: 'Che percentuale è X di Y?',
    labelCase2Placeholder1: 'X',
    labelCase2Placeholder2: 'Y',
    labelCase2Formula: 'Formula: (X / Y) × 100',
    labelCase3Title: 'Caso 3',
    labelCase3Question: 'Differenza percentuale tra due valori',
    labelCase3Placeholder1: 'Valore 1',
    labelCase3Placeholder2: 'Valore 2',
    labelCase3Formula: 'Formula: ((Valore 2 - Valore 1) / |Valore 1|) × 100',
    labelCase4Title: 'Caso 4',
    labelCase4Question: 'Aggiungere o sottrarre percentuale a un valore',
    labelCase4Placeholder1: 'Valore',
    labelCase4Placeholder2: '%',
    labelCase4Formula: 'Formula: Valore ± (Valore × (% / 100))',
    labelCase4AddLabel: 'Somma (Valore + %)',
    labelCase4SubtractLabel: 'Sottrazione (Valore - %)',
    labelResult: 'Risultato',
    labelDifference: 'Differenza',
    labelCopyTooltip: 'Copia risultato',
    labelFormula: 'Formula',
    percentSymbol: '%',
  },
};
