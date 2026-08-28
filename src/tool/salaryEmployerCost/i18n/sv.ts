import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "spanien-brutto-netto-lon-arbetsgivarkostnad-kalkylator";
const title = "Spanien Brutto Netto Lön & Arbetsgivarkostnad Kalkylator 2026";
const description = "Beräkna nettolön, IRPF-skatt, arbetaravgifter och den totala arbetsgivarkostnaden i Spanien enligt 2026 års regler.";

const faq = [
  {
    "question": "Hur mycket kostar en anställd ett företag i Spanien?",
    "answer": "Företaget betalar bruttolönen plus sina arbetsgivaravgifter till socialförsäkringen."
  },
  {
    "question": "Hur beräknar jag brutto till nettolön i Spanien?",
    "answer": "Dra av arbetarens socialförsäkringsavgifter och IRPF-skatt från årsbruttot."
  },
  {
    "question": "Ändras årslönen om man väljer 12 eller 14 utbetalningar?",
    "answer": "Nej. Kalkylatorn behåller samma bruttobelopp per år."
  },
  {
    "question": "Vilka socialförsäkringsavgifter ingår för 2026?",
    "answer": "Inkluderar sjukförsäkring, arbetslöshet, utbildning, MEI, FOGASA och arbetsskadeförsäkring."
  },
  {
    "question": "Vad händer över den maximala avgiftsgrundande basen?",
    "answer": "Över det månatliga taket för 2026 (5 101,20 €) tillämpas en progressiv mecenat-/solidaritetsavgift."
  },
  {
    "question": "Gäller denna kalkylator utanför Spanien?",
    "answer": "Nej. Den är begränsad till det spanska systemet 2026."
  },
  {
    "question": "Skickas löneuppgifter till någon server?",
    "answer": "Nej. Alla beräkningar görs lokalt i din webbläsare."
  }
];

const howTo = [
  {
    "name": "Ange bruttolön",
    "text": "Välj års- eller månadsbelopp och ange bruttolönen."
  },
  {
    "name": "Ställ in spanska lönevillkor",
    "text": "Välj 12/14 utbetalningar, anställningsform, IRPF och arbetsskadeavgift."
  },
  {
    "name": "Granska lönestrukturen",
    "text": "Jämför nettolön, arbetaravdrag och arbetsgivaravgifter."
  },
  {
    "name": "Växla resultatperiod",
    "text": "Visa årstotaler eller genomsnitt per utbetalning."
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
  inLanguage: "sv",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Bruttolön signal",
    "labelGrossSalaryHint": "Lönebelopp",
    "labelAnnual": "Årlig",
    "labelMonthly": "Månadsvis",
    "labelPaySchedule": "Utbetalningsschema",
    "labelTwelvePayments": "12 utbetalningar",
    "labelFourteenPayments": "14 utbetalningar",
    "labelContract": "Kontraktstyp",
    "labelPermanent": "Tillsvidareanställning",
    "labelTemporary": "Tidsbegränsad anställning",
    "labelIrpfRate": "IRPF-skatteavdrag",
    "labelIrpfHint": "Använd skattesats från skatteverket, erbjudande eller lönespecifikation",
    "labelRiskRate": "Arbetsskadeförsäkring (AT & EP)",
    "labelRiskHint": "Arbetsgivaravgift för arbetsskador och yrkessjukdomar",
    "labelOfficePreset": "Kontor 1,50 %",
    "labelTradePreset": "Handel / Försäljning 2,00 %",
    "labelConstructionPreset": "Byggverksamhet 6,70 %",
    "labelNetCore": "Nettolön kärna",
    "labelEmployeeDeductions": "Arbetaravdrag",
    "labelDeductionsFormula": "IRPF plus arbetarens socialförsäkring",
    "labelEmployerHalo": "Arbetsgivaravgifter halo",
    "labelEmployerCost": "Total arbetsgivarkostnad",
    "labelAnnualView": "Årsvy",
    "labelPerPaymentView": "Genomsnitt per utbetalning",
    "labelGross": "Bruttolön",
    "labelIrpf": "IRPF-skatt",
    "labelEmployeeSocialSecurity": "Arbetarens socialförsäkring",
    "labelContributionBase": "Månatlig avgiftsgrundande bas",
    "labelCostMultiplier": "Kostnadsmultiplikator mot brutto",
    "labelWorkerKeeps": "Nettoandel av totalkostnad",
    "labelLeanGap": "Kompakt kostnadshalo",
    "labelTypicalGap": "Typisk kostnadshalo",
    "labelWideGap": "Utökad kostnadshalo",
    "labelModelScope": "Endast Spanien. Allmänna systemet 2026, heltid. Resultaten är uppskattningar.",
    "labelReset": "Återställ exempel",
    "labelInvalid": "Ange en giltig bruttolön och håll skattesatser inom tillåtna gränser.",
    "labelMinimumSalary": "Modellen startar från Spaniens minimilön 2026 (17 094 €/år).",
    "labelPrivacy": "Beräknas lokalt i din webbläsare"
},
  seo: [
    { type: 'title', text: "Från bruttolön till den verkliga företagskostnaden i Spanien", level: 2 },
    { type: 'paragraph', html: "Beräkna nettolön, IRPF-skatt, arbetaravgifter och den totala arbetsgivarkostnaden i Spanien enligt 2026 års regler." },
    { type: 'title', text: "Formeln för arbetsgivarkostnad i Spanien", level: 2 },
    { type: 'paragraph', html: "Företaget betalar bruttolönen plus sina arbetsgivaravgifter till socialförsäkringen. Bruttolönen är modellens utgångspunkt; därefter uppskattas arbetstagarens avgifter och IRPF för att få nettolönen. Till företagets kostnad läggs arbetsgivaravgifter, inklusive den valda arbetsskadeavgiften. Kontrollera om beloppet är årsvis eller månadsvis och om erbjudandet omfattar tolv eller fjorton utbetalningar. Extra utbetalningar ändrar genomsnittet per lönebesked men ska inte ändra den avtalade årsbruttolönen. Använd resultatet för att jämföra erbjudanden och planera budgeten, och kontrollera viktiga beslut mot ett aktuellt lönebesked." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Nettolön kärna"], ['Employer Cost', "Total arbetsgivarkostnad"]] },
    { type: 'title', text: "Spanska socialförsäkringsavgifter för 2026", level: 2 },
    { type: 'paragraph', html: "Inkluderar sjukförsäkring, arbetslöshet, utbildning, MEI, FOGASA och arbetsskadeförsäkring." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Kontor 1,50 %", '1.50%'], ["Handel / Försäljning 2,00 %", '2.00%'], ["Byggverksamhet 6,70 %", '6.70%']] },
    { type: 'title', text: "Avgiftstak och höga löner", level: 2 },
    { type: 'paragraph', html: "Över det månatliga taket för 2026 (5 101,20 €) tillämpas en progressiv mecenat-/solidaritetsavgift." },
    { type: 'title', text: "Skillnad mellan 12 och 14 utbetalningar", level: 2 },
    { type: 'paragraph', html: "Nej. Kalkylatorn behåller samma bruttobelopp per år." },
    { type: 'tip', title: "Utbetalningsschema", html: "Välj 12/14 utbetalningar, anställningsform, IRPF och arbetsskadeavgift." },
    { type: 'title', text: "Begränsningar i denna spanska löneuppskattning", level: 2 },
    { type: 'paragraph', html: "Endast Spanien. Allmänna systemet 2026, heltidsarbete och vanlig kontant lön. Resultaten är uppskattningar. Nettolön och arbetsgivarkostnad kan ändras av personliga förhållanden, skatteregion, förmåner, bonusar, anställningsform och uppdaterade regler. Håll IRPF, antal utbetalningar, avgiftsunderlag och arbetsskadeavgift konstanta när du jämför erbjudanden. Tolv eller fjorton utbetalningar ändrar inte årsbruttot, men ändrar genomsnittet per utbetalning. För höga löner kan avgiftstaket och solidaritetsavgiften påverka resultatet. Modellen omfattar inte deltidsarbete, egenföretagande, ovanliga bonusar eller framtida korrigeringar av lönebeskedet. Spara antagandena och kontrollera viktiga beslut mot ett aktuellt lönebesked eller en officiell beräkning. Räkna om när skatteår, avtal, avgifter eller personliga uppgifter ändras." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
