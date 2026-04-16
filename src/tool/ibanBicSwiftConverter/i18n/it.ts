import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'convertitore-iban-bic-swift';
const title = 'Convertitore da IBAN a BIC SWIFT e Ricerca Banche';
const description = 'Ottieni istantaneamente il codice BIC/SWIFT di qualsiasi IBAN spagnolo. Validatore di conti bancari con algoritmo ufficiale per trasferimenti.';

const faqData = [
  {
    question: 'Cos’è il codice BIC o SWIFT?',
    answer: 'È l’identificatore internazionale della tua banca. È necessario affinché il denaro sappia verso quale entità deve dirigersi quando viaggia fuori dalla zona SEPA (Europa).',
  },
  {
    question: 'Come faccio a sapere qual è il BIC della mia banca?',
    answer: 'Puoi consultarlo nel tuo online banking o usare il nostro convertitore. Per le banche spagnole, inserendo l’IBAN, estraiamo il codice dell’entità e ti forniamo il BIC corrispondente.',
  },
  {
    question: 'È sicuro inserire il mio IBAN qui?',
    answer: 'Assolutamente sì. Il nostro strumento convalida il codice localmente nel tuo browser. Non salviamo né inviamo i tuoi dati bancari a nessun server esterno.',
  },
  {
    question: 'Perché l’IBAN ha 24 caratteri in Spagna?',
    answer: 'È una norma standard. I primi 4 identificano il paese e il controllo, e gli altri 20 sono il vecchio numero di conto.',
  },
];

const howToData = [
  {
    name: 'Cerca il tuo IBAN',
    text: 'Lo troverai sulla tua carta, sul libretto di risparmio o nel profilo del tuo online banking.',
  },
  {
    name: 'Inseriscilo nel validatore',
    text: 'Scrivi o incolla il codice completo. Il nostro sistema lo formatterà automaticamente per facilitare la lettura.',
  },
  {
    name: 'Premi il pulsante di conversione',
    text: 'Il sistema convaliderà che le cifre di controllo siano corrette mediante l’algoritmo Modulo 97.',
  },
  {
    name: 'Copia il risultato',
    text: 'Otterrai il codice BIC/SWIFT e il nome dell’entità bancaria pronti da copiare e usare.',
  },
];

const bibliographyData = [
  {
    name: 'ISO 13616: Standard Internazionale dell’IBAN',
    url: 'https://www.iso.org/',
  },
  {
    name: 'SWIFT: Registro Globale dei BIC',
    url: 'https://www.theswiftcodes.com/',
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

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti e Riferimenti',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Convertitore da IBAN a BIC/SWIFT: Tutto quello che devi sapere sui tuoi codici bancari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nel complesso mondo della finanza internazionale, due acronimi dominano ogni operazione di trasferimento: <strong>IBAN</strong> e <strong>BIC</strong> (noto anche come SWIFT).',
    },
  ],
  ui: {
    labelTitle: 'Convertitore IBAN a BIC / SWIFT',
    labelDescription: 'Calcola istantaneamente il codice BIC di qualsiasi conto bancario spagnolo.',
    labelInputIBAN: 'Inserisci il tuo IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Ottieni Codice BIC',
    labelBIC: 'Codice BIC / SWIFT',
    labelCountry: 'Paese / Formato',
    labelBank: 'Entità Bancaria',
    labelError: 'L’IBAN inserito non sembra essere valido. Controlla le cifre.',
    labelCopyButton: 'Copia',
    labelCopied: 'Copiato',
    labelBankNotIdentified: 'Entità non identificata',
    labelBankOutsideSpain: 'Banca fuori dalla Spagna (Dati limitati)',
    labelInvalidIBAN: 'IBAN Non Valido',
    labelFormattingOK: 'Formato OK',
  },
};
