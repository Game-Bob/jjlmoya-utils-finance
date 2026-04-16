import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RentIncreaseUI } from '../ui';

const slug = 'kalkylator-hyreshojning-spanien-ipc';
const title = 'Kalkylator Hyreshöjning Spanien IPC 3% Gräns';
const description = 'Beräkna din hyresuppdatering med IPC eller den lagstadgade gränsen på 3 % enligt den spanska bostadslagen.';

const faqData = [
  {
    question: 'Vad är den maximalt tillåtna hyreshöjningen 2024 och 2025?',
    answer: 'Enligt lag 12/2023 om rätten till bostad är den maximala årliga hyreshöjningen för permanentbostäder i Spanien lagstadgat begränsad till 3 % under 2024 och 2025.',
  },
  {
    question: 'Är det obligatoriskt att höja hyran varje år med IPC?',
    answer: 'Det är inte obligatoriskt enligt lag. För att hyran ska höjas måste hyresavtalet innehålla en uttrycklig klausul som nämner årlig uppdatering.',
  },
  {
    question: 'Hur långt i förväg måste hyresvärden meddela höjningen?',
    answer: 'Hyresvärden måste meddela höjningen skriftligen till hyresgästen minst en månad (30 dagar) i förväg.',
  },
  {
    question: 'Vad händer om IPC är högre än den lagstadgade gränsen på 3 %?',
    answer: 'Även om den faktiska IPC-siffran är högre får ägaren till en permanentbostad enligt lag inte kräva en höjning på mer än 3 % under 2024 och 2025.',
  },
];

const howToData = [
  {
    name: 'Ange din nuvarande hyra',
    text: 'Skriv in den månadsavgift du betalar för närvarande.',
  },
  {
    name: 'Välj beräkningsläge',
    text: 'Välj den lagstadgade gränsen på 3 % (rekommenderas) eller ange en manuell procentsats.',
  },
  {
    name: 'Se resultaten',
    text: 'Du får den nya beräknade hyran, månadsökningen och den årliga extrakostnaden direkt.',
  },
  {
    name: 'Kopiera sammanfattningen',
    text: 'Generera en snabb rapport att skicka till hyresvärden eller spara i dina anteckningar.',
  },
];

const bibliographyData = [
  {
    name: 'Lag 12/2023 om rätten till bostad (Spanien)',
    url: 'https://www.boe.es/',
  },
  {
    name: 'IPC-kalkylator från nationella statistikinstitutet (INE)',
    url: 'https://www.ine.es/',
  },
  {
    name: 'Lag om uthyrning av bostäder (LAU)',
    url: 'https://www.boe.es/',
  },
];

const seoData = [
  {
    type: 'title',
    text: 'Kalkylator Hyreshöjning 2026 Spanien 3% Gräns',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'I Spanien används <strong>konsumentprisindex (IPC)</strong> traditionellt för att justera hyrespriserna. Den nya bostadslagen har dock infört viktiga begränsningar.',
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

export const content: ToolLocaleContent<RentIncreaseUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Källor och referenser',
  ui: {
    labelTitle: 'Kalkylator för hyreshöjning',
    labelDescription: 'Justera din hyra säkert enligt IPC eller tillämpa den lagstadgade gränsen på 3 %.',
    labelCurrentRent: 'Nuvarande hyra',
    labelCurrentRentPlaceholder: 'T.ex. 800',
    labelIncrementType: 'Uppdateringsläge',
    labelLegalLimit: 'Bostadslagens gräns (3 %)',
    labelManualIncrement: 'Manuell höjning (%)',
    labelManualPercentagePlaceholder: 'T.ex. 2.5',
    labelNewRentEstimate: 'Ny beräknad hyra',
    labelMonthlyIncrease: 'Månadsökning',
    labelYearlyExtra: 'Årlig extrakostnad',
    labelLegalBadge: 'Begränsad till 3 % enligt Lag 12/2023',
    labelCopyButton: 'Kopiera till hyresvärden',
    labelCopySuccess: 'Kopierad!',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'sv-SE',
  },
  faq: faqData,
  howTo: howToData,
  bibliography: bibliographyData,
  seo: seoData,
  schemas: [faqSchema, howToSchema, appSchema],
};
