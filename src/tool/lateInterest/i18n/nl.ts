import { bibliography } from '../bibliography'
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'berekening-wettelijke-rente-spanje';
const title = 'Calculator Wettelijke Rente en Verzuiminterest Spanje 2026';
const description =
  'Bereken fiscale verzuiminterest (belastingdienst) en wettelijke rente voor betalingsachterstanden in Spanje. Simulator bijgewerkt voor 2025 en 2026.';

const faqData = [
  {
    question: 'Wat is verzuiminterest?',
    answer:
      'Dit is de rente die in rekening wordt gebracht over een bedrag dat niet binnen de gestelde termijn is betaald. Het wordt toegepast op de oorspronkelijke schuld en loopt op tot de volledige betaling is verricht.',
  },
  {
    question: 'Wat is het verschil tussen enkelvoudige en samengestelde rente?',
    answer:
      'Enkelvoudige rente wordt elke dag alleen over het oorspronkelijke kapitaal berekend. Samengestelde rente wordt berekend over het kapitaal plus de opgebouwde rente, waardoor de schuld sneller groeit.',
  },
  {
    question: 'Hoe wordt de dagelijkse rente berekend?',
    answer:
      'Het jaarpercentage wordt gedeeld door 365 dagen and toegepast op het oorspronkelijke kapitaal. Bijvoorbeeld: 10% per jaar = 0,0274% per dag.',
  },
  {
    question: 'Welk rentepercentage voor verzuim moet ik toepassen?',
    answer:
      'Dit hangt af van de lokale wetgeving en de contractvoorwaarden. In Spanje stelt de Wet op de Betalingsachterstanden maximale tarieven vast. Raadpleeg een juridisch adviseur voor uw specifieke geval.',
  },
  {
    question: 'Kan ik deze calculator gebruiken voor juridische schulden?',
    answer:
      'Dit is een informatief hulpmiddel. Controleer voor werkelijke schulden de contractvoorwaarden en de lokale wetgeving. Raadpleeg bij twijfel een advocaat.',
  },
];

const howToData = [
  {
    name: 'Kies het type berekening',
    text: 'Selecteer enkelvoudige rente, samengestelde rente of maandelijkse perioden, afhankelijk van uw situatie.',
  },
  {
    name: 'Voer de gegevens in',
    text: 'Voer het oorspronkelijke bedrag, het rentepercentage en de verzuimperiode in.',
  },
  {
    name: 'Ontvang het resultaat',
    text: 'De calculator toont de opgebouwde dagelijkse rente, de totale rente, het eindbedrag en het effectieve tarief.',
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
  inLanguage: 'nl',
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
      text: 'Calculator Wettelijke Rente en Verzuiminterest: Volledige Spaanse Gids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Binnen het complexe juridische en fiscale stelsel van Spanje is het verstrijken van de tijd bij een schuld niet gratis. De <strong>verzuiminterest</strong> en de <strong>wettelijke rente</strong> zijn de mechanismen die de wet gebruikt om de schade te compenseren die wordt veroorzaakt door vertraging bij het nakomen van een betalingsverplichting. Of het nu gaat om een schuld bij de belastingdienst (<strong>Hacienda</strong>), een betalingsachterstand tussen bedrijven of een gerechtelijke claim, het is essentieel om te begrijpen hoe deze rente wordt berekend.',
    },
    {
      type: 'title',
      text: 'Wat is de Wettelijke Rente?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De wettelijke rente is de toeslag die op een schuld wordt toegepast wanneer partijen geen specifieke rente zijn overeengekomen of wanneer de wet dit bepaalt. Voor de jaren <strong>2024, 2025 en 2026</strong> is dit tarief stabiel gebleven op <strong>3,25%</strong>. Dit percentage dient als basis voor veel juridische berekeningen.',
    },
    {
      type: 'title',
      text: 'De Fiscale Verzuiminterest (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer de schuld bij de overheid ligt, is de <strong>fiscale verzuiminterest</strong> hoger dan de wettelijke rente om vertraging bij de betaling van belastingen te ontmoedigen. Voor de periode <strong>2024-2026</strong> is deze vastgesteld op <strong>4,0625%</strong>. Dit is de toeslag die de Spaanse belastingdienst u in rekening brengt als u een aangifte te laat indient.',
    },
    {
      type: 'tip',
      title: 'Schadeloosstelling, geen Straf',
      html: '<p><strong>Belangrijk feit:</strong> In tegenstelling tot boetes hebben verzuiminteresten een schadeloosstellend karakter en zijn ze niet bestraffend. De belastingdienst „straft” u er niet mee, maar brengt kosten in rekening voor de tijd dat u over geld beschikte dat in de schatkist had moeten zitten.</p>',
    },
    {
      type: 'title',
      text: 'Hoe Bereken je de Rente Stap voor Stap',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De berekening van deze rente volgt een formule voor enkelvoudige rente, waarbij de tijd in kalenderdagen wordt geteld: <strong>Rente = (Hoofdsom × Dagen × Rentetarief) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Hoofdsom:</strong> Het totale bedrag van de oorspronkelijke schuld.',
        '<strong>Dagen:</strong> Het aantal dagen verstreken vanaf de dag na de vervaldatum tot de dag van de daadwerkelijke betaling.',
        '<strong>Rentetarief:</strong> Het toepasbare jaarlijkse percentage (bijv. 3,25 of 4,0625).',
        '<strong>36.500:</strong> De deler om het jaarpercentage om te zetten naar een dagpercentage (365 dagen x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Praktijkvoorbeeld: Schuld bij de Belastingdienst',
      html: '<p>Stelt u zich voor dat u € 5.000 verschuldigd bent voor een aangifte die 180 dagen geleden is verlopen:</p><ul><li>Toepasbare rente (Verzuim): 4,0625%</li><li>Berekening: (5.000 × 180 × 4,0625) / 36.500</li><li><strong>Resulterende rente:</strong> € 100,17</li><li>Totaal te betalen: € 5.100,17</li></ul>',
    },
    {
      type: 'title',
      text: 'Verschillen per Type Schuld',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Civiele Schulden:</strong> Tussen particulieren geldt 3,25% (wettelijke rente).',
        '<strong>Handelsschulden:</strong> Deze vallen onder de Wet tegen Betalingsachterstanden en bedragen 10,15% - 11,15% in 2025-2026.',
        '<strong>Schulden bij de Sociale Zekerheid:</strong> Hier geldt 4,0625% plus toeslagen van 10% tot 20%.',
        '<strong>Procesrente:</strong> In geval van een gerechtelijk vonnis geldt 5,25% vanaf de datum van het vonnis.',
      ],
    },
    {
      type: 'title',
      text: 'Rente bij Commerciële Transacties: Let op de 60 dagen!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als u zelfstandige of een bedrijf bent, stelt de Spaanse wet 3/2004 een maximale betalingstermijn van 60 dagen vast. Als uw klant die datum overschrijdt, kunt u automatisch commerciële verzuiminterest eisen zonder herinneringen, plus een vast bedrag van € 40 voor incassokosten.',
    },
  ],
  ui: {
    labelTitle: 'Verzuiminterest Calculator',
    labelSimpleTitle: 'Enkelvoudig',
    labelCompoundTitle: 'Samengesteld',
    labelMonthlyTitle: 'Maandelijks',
    labelSimpleQuestion: 'Bereken met enkelvoudige rente',
    labelCompoundQuestion: 'Bereken met samengestelde rente',
    labelMonthlyQuestion: 'Bereken met maandelijkse perioden',
    labelPrincipal: 'Oorspronkelijke Bedrag',
    labelAnnualRate: 'Jaarlijkse Rente',
    labelDays: 'Dagen Achterstand',
    labelMonths: 'Maanden Achterstand',
    labelMonthlyRate: 'Maandelijkse Rente',
    labelDailyInterest: 'Dagelijkse Rente',
    labelTotalInterest: 'Totale Rente',
    labelTotalAmount: 'Totaal Bedrag',
    labelEffectiveRate: 'Effectief Tarief',
    labelCopyTooltip: 'Resultaat kopiëren',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Toegepaste formule',
    reportTitle: 'RENTEBEREKENINGSRAPPORT',
    reportLabelPrincipal: 'Hoofdsom',
    reportLabelType: 'Type',
    reportLabelPeriod: 'Periode',
    reportLabelDays: 'Verstreken dagen',
    reportLabelInterest: 'OPGEBOUWDE RENTE',
    reportLabelTotal: 'TOTAAL AF TE RREKENEN',
    reportDaysSuffix: 'dagen',
    formulaDescription: 'Deze berekening maakt gebruik van de huidige tarieven. Indien de periode eerdere jaren beslaat met andere tarieven, dient de werkelijke berekening te worden gesplitst per periode.',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
  },
};
