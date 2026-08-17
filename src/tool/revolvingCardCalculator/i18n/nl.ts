import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolving-kredietkaart-calculator';
const title = 'Revolving Kredietkaart & Woeker Calculator';
const description = 'Bereken de aflostijd en rentekosten van uw revolving kredietkaart en controleer woekerrentes.';

const faqData = [{ question: 'Hoe werkt een revolving kredietkaart?', answer: 'Met een revolving kredietkaart kunt u flexibel aflossen.' },
  { question: "Wat moet ik controleren voordat ik het resultaat gebruik?", answer: "Controleer invoer, eenheden, aannames en beperkingen; het resultaat is een richtlijn, geen officiële beslissing." },
  { question: "Wat moet ik controleren voordat ik het resultaat gebruik?", answer: "Controleer invoer, eenheden, aannames en beperkingen; het resultaat is een richtlijn, geen officiële beslissing." },
  { question: "Wat moet ik controleren voordat ik het resultaat gebruik?", answer: "Controleer invoer, eenheden, aannames en beperkingen; het resultaat is een richtlijn, geen officiële beslissing." },];
const howToData = [{ name: 'Selecteer markt', text: 'Kies uw land of aangepaste limiet.' },
  { name: "Aannames controleren", text: "Controleer de invoer, eenheden en beperkingen voordat u het resultaat interpreteert." },
  { name: "Aannames controleren", text: "Controleer de invoer, eenheden en beperkingen voordat u het resultaat interpreteert." },
  { name: "Aannames controleren", text: "Controleer de invoer, eenheden en beperkingen voordat u het resultaat interpreteert." },];

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
  seo: [{ type: 'title', text: 'Hoe werkt een revolving kredietkaart?' }, { type: 'paragraph', html: 'Met een revolving kredietkaart kunt u flexibel aflossen.' },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },],
  ui: {
    title: 'Revolving Kredietkaart & Woeker Rekenmachine',
    balanceLabel: 'Openstaande Schuld',
    creditLimitLabel: 'Kredietlimiet',
    aprLabel: 'Jaarlijks Kostenpercentage (JKP / APR)',
    paymentTypeLabel: 'Betaalmethode',
    paymentTypeFixed: 'Vast Maandbedrag',
    paymentTypePercentage: 'Percentage van het Saldo',
    paymentValueLabel: 'Afloswaarde (Bedrag of %)',
    minPaymentValueLabel: 'Minimaal Maandbedrag',
    currencyLabel: 'Valuta',
    marketLabel: 'Regulatoire Markt / Land',
    marketES: 'Spanje (Banco de España)',
    marketUS: 'Verenigde Staten (CFPB)',
    marketUK: 'Verenigd Koninkrijk (FCA)',
    marketEU: 'Europese Unie (ECB)',
    marketJP: 'Japan (FSA)',
    marketKR: 'Zuid-Korea (FSC)',
    marketCN: 'China (PBOC)',
    marketBR: 'Brazilië (Banco Central)',
    marketMX: 'Mexico (Banco de México)',
    marketPL: 'Polen (KNF)',
    marketID: 'Indonesië (OJK)',
    marketTR: 'Turkije (BRSA)',
    marketRU: 'Rusland (Centrale Bank)',
    marketSE: 'Zweden (Finansinspektionen)',
    marketAU: 'Australië (ASIC)',
    marketCA: 'Canada (FCAC)',
    marketCustom: 'Aangepaste Limiet',
    customThresholdLabel: 'Aangepaste Woekerlimiet (JKP %)',

    resultsTitle: 'Aflossingsresultaten',
    totalInterestLabel: 'Totaal Betaalde Rente',
    totalPaidLabel: 'Totaal Terugbetaald',
    monthsToPayLabel: 'Aflostijd in Maanden',
    infiniteDebtWarning: 'Oneindige schuld! De maandbetaling dekt de maandelijkse rente niet.',
    payoffYearsLabel: 'Aflossingsschema',

    usuryTitle: 'Woeker & Conformiteitsanalyse',
    usurySafeStatus: 'Standaard (Laag Risico)',
    usuryWarningStatus: 'Hoge Rente (Gemiddeld Risico)',
    usuryUsuriousStatus: 'Mogelijk Woeker (Hoog Risico)',
    usuryReferenceLabel: 'Gemiddelde Markt-JKP',
    usuryThresholdLabel: 'Woeker Waarschuwingsgrens',

    tableTitle: 'Maandelijks Aflossingsschema',
    tableHeaderMonth: 'Maand',
    tableHeaderInitial: 'Beginsaldo',
    tableHeaderInterest: 'Rente',
    tableHeaderPrincipal: 'Aflossing',
    tableHeaderPayment: 'Betaling',
    tableHeaderFinal: 'Eindsaldo',

    copyTooltip: 'Rapport Kopiëren',
    copiedLabel: 'Rapport Gekopieerd!',
    currencySymbol: '€',
    percentSymbol: '%',
  },
};
