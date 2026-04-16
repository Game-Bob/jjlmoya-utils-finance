import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'kalkylator-drojsmalsranta-spanien';
const title = 'Kalkylator för Dröjsmålsränta och Lagstadgad Ränta Spanien 2026';
const description =
  'Beräkna skattemässig dröjsmålsränta (Hacienda) och lagstadgad ränta för obetalda skulder i Spanien. Simulator uppdaterad för 2025 och 2026.';

const faqData = [
  {
    question: 'Vad är dröjsmålsränta?',
    answer:
      'Det är den ränta som tas ut på ett belopp som inte har betalats inom den fastställda tiden. Den tillämpas på den ursprungliga skulden och ackumuleras fram till full betalning.',
  },
  {
    question: 'Vad är skillnaden mellan enkel ränta och ränta-på-ränta?',
    answer:
      'Enkel ränta beräknas varje dag endast på det ursprungliga kapitalet. Ränta-på-ränta (sammansatt ränta) beräknas på kapitalet plus ackumulerad ränta, vilket leder till att skulden växer snabbare.',
  },
  {
    question: 'Hur beräknas dagsräntan?',
    answer:
      'Den årliga räntan delas med 365 dagar och tillämpas på det ursprungliga kapitalet. Till exempel: 10 % per år = 0,0274 % per dag.',
  },
  {
    question: 'Vilken dröjsmålsränta ska jag tillämpa?',
    answer:
      'Det beror på lokal lagstiftning och avtalsvillkor. I Spanien fastställer lagen om bekämpande av sena betalningar maximisatser. Konsultera en juridisk rådgivare för ditt specifika fall.',
  },
  {
    question: 'Kan jag använda denna kalkylator för juridiska skulder?',
    answer:
      'Detta är ett informationsverktyg. För reella skulder, kontrollera avtalsvillkoren och den lokala lagstiftningen. Konsultera en advokat om du är osäker.',
  },
];

const howToData = [
  {
    name: 'Välj typ av beräkning',
    text: 'Välj mellan enkel ränta, sammansatt ränta eller månatlig ränta beroende på din situation.',
  },
  {
    name: 'Ange uppgifter',
    text: 'Ange ursprungligt belopp, räntesats och dröjsmålsperiod.',
  },
  {
    name: 'Få resultatet',
    text: 'Kalkylatorn visar ackumulerad dagsränta, total upplupen ränta, slutbelopp och effektiv ränta.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor och referenser',
  bibliography: [
    {
      name: 'Spansk lag 3/2004 mot sena betalningar',
      url: 'https://www.boe.es/',
    },
    {
      name: 'Banco de España: Räntesatser',
      url: 'https://www.bde.es/',
    },
    {
      name: 'Beräkning av sammansatt ränta',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkylator för dröjsmålsränta och lagstadgad ränta: Komplett guide för Spanien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom Spaniens komplexa juridiska och skattemässiga system är tidsutdräkt vid en skuld inte gratis. <strong>Dröjsmålsränta</strong> och <strong>lagstadgad ränta</strong> är mekanismer som lagen använder för att kompensera för den skada som orsakas av försening i fullgörandet av en penningförpliktelse. Oavsett om det rör sig om en skuld till skattemyndigheten (<strong>Hacienda</strong>), en utebliven betalning mellan företag eller ett rättsligt krav, är det avgörande att förstå hur dessa räntor löper.',
    },
    {
      type: 'title',
      text: 'Vad är lagstadgad ränta (Interés Legal del Dinero)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lagstadgad ränta är det tillägg som tillämpas på en skuld när parterna inte har avtalat om en specifik ränta eller när lagen föreskriver det. För åren <strong>2024, 2025 och 2026</strong> har denna ränta hållits stabil på <strong>3,25 %</strong>. Denna procentsats tjänar som bas för många juridiska beräkningar.',
    },
    {
      type: 'title',
      text: 'Skattemässig dröjsmålsränta (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När skulden är till den offentliga förvaltningen är den <strong>skattemässiga dröjsmålsräntan</strong> högre än den lagstadgade räntan för att avskräcka från förseningar i skattebetalningar. För perioden <strong>2024–2026</strong> har den fastställts till <strong>4,0625 %</strong>. Detta är det tillägg som skattemyndigheten tar ut om du lämnar in en deklaration efter sista datum.',
    },
    {
      type: 'tip',
      title: 'Skadeståndskaraktär, inte straff',
      html: '<p><strong>Viktig information:</strong> Till skillnad från sanktioner har dröjsmålsränta karaktären av skadestånd, inte straff. Skattemyndigheten „straffar” dig inte, utan tar betalt för den tid du förfogat över pengar som borde ha funnits i statskassan.</p>',
    },
    {
      type: 'title',
      text: 'Hur man beräknar räntan steg för steg',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beräkningen av dessa räntor sker enligt formeln för enkel ränta, där tiden räknas i kalenderdagar: <strong>Ränta = (Kapital × Dagar × Räntesats) / 36 500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Kapital:</strong> Det totala beloppet för den ursprungliga skulden.',
        '<strong>Dagar:</strong> Antal dagar sedan dagen efter förfallodagen fram till dagen för den faktiska betalningen.',
        '<strong>Räntesats:</strong> Den tillämpliga årsräntan (t.ex. 3,25 eller 4,0625).',
        '<strong>36 500:</strong> Divisorn för att omvandla årsränta till dagsränta (365 dagar x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Praktiskt exempel: Skuld till skattemyndigheten',
      html: '<p>Tänk dig att du är skyldig 5 000 € från en inkomstdeklaration som förföll för 180 dagar sedan:</p><ul><li>Tillämplig ränta (Dröjsmål): 4,0625 %</li><li>Beräkning: (5 000 × 180 × 4,0625) / 36 500</li><li><strong>Upplupen ränta:</strong> 100,17 €</li><li>Totalt att betala: 5 100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Skillnader beroende på typ av skuld',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Civila skulder:</strong> Mellan privatpersoner tillämpas 3,25 % (lagstadgad ränta).',
        '<strong>Handelsskulder:</strong> Styrs av lagen mot sena betalningar och uppgår till ca 10,15 % - 11,15 % under 2025–2026.',
        '<strong>Socialförsäkringsskulder:</strong> Här tillämpas 4,0625 % plus avgifter på 10 % till 20 %.',
        '<strong>Rättegångsränta:</strong> Vid domstolsbeslut 5,25 % från och med datumet för domen.',
      ],
    },
    {
      type: 'title',
      text: 'Ränta vid handelstransaktioner: Se upp för 60 dagar!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om du är egenföretagare eller ett företag fastställer spansk lag 3/2004 en maximal betalningsfrist på 60 dagar. Om din kund överskrider det datumet kan du automatiskt kräva kommersiell dröjsmålsränta utan påminnelser, och dessutom ta ut ett fast belopp på 40 € för inkassokostnader.',
    },
  ],
  ui: {
    labelTitle: 'Kalkylator för dröjsmålsränta',
    labelSimpleTitle: 'Enkel',
    labelCompoundTitle: 'Sammansatt',
    labelMonthlyTitle: 'Månatlig',
    labelSimpleQuestion: 'Beräkna med enkel ränta',
    labelCompoundQuestion: 'Beräkna med sammansatt ränta',
    labelMonthlyQuestion: 'Beräkna med månatliga perioder',
    labelPrincipal: 'Ursprungligt belopp',
    labelAnnualRate: 'Årsränta',
    labelDays: 'Dagar försenad',
    labelMonths: 'Månader försenad',
    labelMonthlyRate: 'Månadsränta',
    labelDailyInterest: 'Dagsränta',
    labelTotalInterest: 'Total ränta',
    labelTotalAmount: 'Totalbelopp att betala',
    labelEffectiveRate: 'Effektiv ränta',
    labelCopyTooltip: 'Kopiera resultat',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Tillämpad formel',
    reportTitle: 'RAPPORT ÖVER RÄNTEBERÄKNING',
    reportLabelPrincipal: 'Kapital',
    reportLabelType: 'Typ',
    reportLabelPeriod: 'Period',
    reportLabelDays: 'Förflutna dagar',
    reportLabelInterest: 'UPPLUPEN RÄNTA',
    reportLabelTotal: 'TOTALT ATT BETALA',
    reportDaysSuffix: 'dagar',
    formulaDescription: 'Denna beräkning använder gällande räntesatser. Om perioden omfattar tidigare år med andra räntesatser bör den faktiska beräkningen delas upp per period.',
    currencyCode: 'EUR',
    currencyLocale: 'sv-SE',
  },
};
