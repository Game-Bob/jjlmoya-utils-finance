import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "spanje-bruto-netto-salaris-werkgeverskosten-calculator";
const title = "Spanje Bruto Netto Salaris & Werkgeverskosten Calculator 2026";
const description = "Bereken het nettosalaris, IRPF-inhouding, werknemersbijdragen en de totale werkgeverskosten in Spanje volgens de regels van 2026.";

const faq = [
  {
    "question": "Hoeveel kost een werknemer een bedrijf in Spanje?",
    "answer": "Het bedrijf betaalt het brutosalaris plus de werkgeversbijdragen Sociale Zekerheid."
  },
  {
    "question": "Hoe bereken ik bruto naar netto salaris in Spanje?",
    "answer": "Trek van het bruto jaarsalaris de werknemersbijdragen en IRPF-inhouding af."
  },
  {
    "question": "Verandert de keuze voor 12 of 14 betalingen het jaarsalaris?",
    "answer": "Nee. De calculator behoudt hetzelfde bruto jaarbedrag."
  },
  {
    "question": "Welke Sociale Zekerheid tarieven voor 2026 zijn inbegrepen?",
    "answer": "Omvat algemene ziektewet, werkloosheid, training, MEI, FOGASA en ongevallenpremie."
  },
  {
    "question": "Wat gebeurt er boven de maximale premiegrondslag?",
    "answer": "Boven de maximale maandgrondslag 2026 van € 5.101,20 geldt de solidariteitsheffing."
  },
  {
    "question": "Is deze calculator buiten Spanje geldig?",
    "answer": "Nee. Uitsluitend gericht op het Spaanse stelsel 2026."
  },
  {
    "question": "Worden salarisgegevens naar een server gestuurd?",
    "answer": "Nee. Berekeningen worden lokaal in uw browser uitgevoerd."
  }
];

const howTo = [
  {
    "name": "Voer brutosalaris in",
    "text": "Kies jaar- of maandinvoer en vul het bedrag in."
  },
  {
    "name": "Stel Spaanse loonveronderstellingen in",
    "text": "Kies 12/14 betalingen, type contract, IRPF en ongevallenpremie."
  },
  {
    "name": "Bekijk salarisverdeling",
    "text": "Vergelijk netto, werknemersinhoudingen en werkgeversbijdrage."
  },
  {
    "name": "Wissel weergaveperiode",
    "text": "Bekijk jaartotalen of gemiddelde per betaling."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: "nl",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Brutosalaris signaal",
    "labelGrossSalaryHint": "Salarisbedrag",
    "labelAnnual": "Jaarlijks",
    "labelMonthly": "Maandelijks",
    "labelPaySchedule": "Betalingsschema",
    "labelTwelvePayments": "12 betalingen",
    "labelFourteenPayments": "14 betalingen",
    "labelContract": "Type contract",
    "labelPermanent": "Vast contract",
    "labelTemporary": "Tijdelijk contract",
    "labelIrpfRate": "IRPF-inhouding (Inkomstenbelasting)",
    "labelIrpfHint": "Gebruik het tarief van de belastingdienst, aanbod of loonstrook",
    "labelRiskRate": "Premie arbeidsongevallen en beroepsziekten",
    "labelRiskHint": "Werkgeverstarief voor arbeidsongevallen",
    "labelOfficePreset": "Kantoor 1,50%",
    "labelTradePreset": "Commercieel / Verkoop 2,00%",
    "labelConstructionPreset": "Bouw 6,70%",
    "labelNetCore": "Nettosalaris kern",
    "labelEmployeeDeductions": "Inhoudingen werknemer",
    "labelDeductionsFormula": "IRPF plus werknemersbijdrage Sociale Zekerheid",
    "labelEmployerHalo": "Werkgeversbijdrage halo",
    "labelEmployerCost": "Totale werkgeverskosten",
    "labelAnnualView": "Jaarweergave",
    "labelPerPaymentView": "Gemiddelde per betaling",
    "labelGross": "Brutosalaris",
    "labelIrpf": "IRPF-inhouding",
    "labelEmployeeSocialSecurity": "Sociale Zekerheid werknemer",
    "labelContributionBase": "Maandelijkse premiegrondslag",
    "labelCostMultiplier": "Kostenvermenigvuldiger t.o.v. bruto",
    "labelWorkerKeeps": "Netto aandeel van totale kosten",
    "labelLeanGap": "Kompakte kostenhalo",
    "labelTypicalGap": "Typische kostenhalo",
    "labelWideGap": "Uitgebreide kostenhalo",
    "labelModelScope": "Alleen Spanje. Algemeen Stelsel 2026, voltijds dienstverband. Resultaten zijn schattingen.",
    "labelReset": "Voorbeeld resetten",
    "labelInvalid": "Voer een geldig voltijds jaarsalaris in en houd de tarieven binnen de grenzen.",
    "labelMinimumSalary": "Het model begint bij het voltijds minimumloon 2026 van € 17.094 per jaar.",
    "labelPrivacy": "Lokaal berekend in uw browser"
},
  seo: [
    { type: 'title', text: "Van brutosalaris naar de werkelijke bedrijfskosten in Spanje", level: 2 },
    { type: 'paragraph', html: "Bereken het nettosalaris, IRPF-inhouding, werknemersbijdragen en de totale werkgeverskosten in Spanje volgens de regels van 2026." },
    { type: 'title', text: "De formule voor werkgeverskosten in Spanje", level: 2 },
    { type: 'paragraph', html: "Het bedrijf betaalt het brutosalaris plus de werkgeversbijdragen Sociale Zekerheid." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Nettosalaris kern"], ['Employer Cost', "Totale werkgeverskosten"]] },
    { type: 'title', text: "Spaanse Sociale Zekerheidstarieven voor 2026", level: 2 },
    { type: 'paragraph', html: "Omvat algemene ziektewet, werkloosheid, training, MEI, FOGASA en ongevallenpremie." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Kantoor 1,50%", '1.50%'], ["Commercieel / Verkoop 2,00%", '2.00%'], ["Bouw 6,70%", '6.70%']] },
    { type: 'title', text: "Premieplafonds en hoge salarissen", level: 2 },
    { type: 'paragraph', html: "Boven de maximale maandgrondslag 2026 van € 5.101,20 geldt de solidariteitsheffing." },
    { type: 'title', text: "Verschil tussen 12 en 14 betalingen", level: 2 },
    { type: 'paragraph', html: "Nee. De calculator behoudt hetzelfde bruto jaarbedrag." },
    { type: 'tip', title: "Betalingsschema", html: "Kies 12/14 betalingen, type contract, IRPF en ongevallenpremie." },
    { type: 'title', text: "Beperkingen van deze Spaanse salarisschatting", level: 2 },
    { type: 'paragraph', html: "Alleen Spanje. Algemeen Stelsel 2026, voltijds dienstverband. Resultaten zijn schattingen." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
