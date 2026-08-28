import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'revolverkort-kalkylator';
const title = 'Revolverkort & Ockerränta Kalkylator';
const description = 'Beräkna återbetalningstid och räntekostnader för ditt revolverkort samt kontrollera ockergränser.';

const faqData = [{ question: 'Hur fungerar ett revolverkort?', answer: 'Med ett revolverkort kan du delbetala din skuld.' },
  { question: "Vad bör jag kontrollera innan resultatet används?", answer: "Kontrollera indata, enheter, antaganden och begränsningar; resultatet är vägledning, inte ett officiellt beslut." },
  { question: "Vad bör jag kontrollera innan resultatet används?", answer: "Kontrollera indata, enheter, antaganden och begränsningar; resultatet är vägledning, inte ett officiellt beslut." },
  { question: "Vad bör jag kontrollera innan resultatet används?", answer: "Kontrollera indata, enheter, antaganden och begränsningar; resultatet är vägledning, inte ett officiellt beslut." },];
const howToData = [{ name: 'Välj marknad', text: 'Välj land eller anpassad gräns.' },
  { name: "Kontrollera antaganden", text: "Kontrollera kalkylatorns indata, enheter och begränsningar innan du tolkar resultatet." },
  { name: "Kontrollera antaganden", text: "Kontrollera kalkylatorns indata, enheter och begränsningar innan du tolkar resultatet." },
  { name: "Kontrollera antaganden", text: "Kontrollera kalkylatorns indata, enheter och begränsningar innan du tolkar resultatet." },];

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
  seo: [{ type: 'title', text: 'Hur fungerar ett revolverkort?' }, { type: 'paragraph', html: 'Med ett revolverkort kan du delbetala din skuld.' },
  { type: 'paragraph', html: "Använd resultatet för planering och scenariejämförelser; det ersätter inte en officiell beräkning eller professionell rådgivning. Ett revolverkort låter dig betala bara en del av saldot, medan räntan fortsätter på den kvarvarande skulden. En låg betalning kan förlänga återbetalningen i många år och en betalning som inte täcker månadens ränta gör att skulden kanske inte minskar. Ange aktuellt saldo, effektiv årsränta, avgifter och planerad månadsbetalning och jämför alltid med avtalet och kontoutdraget. Nya köp, kontantuttag, förseningsavgifter eller ändrad ränta ändrar tidsplanen, så kör en ny simulering när villkoren ändras." },
  { type: 'paragraph', html: "Tolka resultatet tillsammans med kalkylatorns antaganden innan du använder det." },
  { type: 'paragraph', html: "Kontrollera indata, enheter, avrundning, datum och rättsområde eftersom varje del kan ändra uppskattningen." },
  { type: 'paragraph', html: "Använd resultatet för planering och scenariejämförelser; det ersätter inte en officiell beräkning eller professionell rådgivning." },
  { type: 'paragraph', html: "Tolka resultatet tillsammans med kalkylatorns antaganden innan du använder det." },
  { type: 'paragraph', html: "Kontrollera indata, enheter, avrundning, datum och rättsområde eftersom varje del kan ändra uppskattningen." },
  { type: 'paragraph', html: "Använd resultatet för planering och scenariejämförelser; det ersätter inte en officiell beräkning eller professionell rådgivning." },
  { type: 'paragraph', html: "Tolka resultatet tillsammans med kalkylatorns antaganden innan du använder det." },
  { type: 'paragraph', html: "Kontrollera indata, enheter, avrundning, datum och rättsområde eftersom varje del kan ändra uppskattningen." },
  { type: 'paragraph', html: "Använd resultatet för planering och scenariejämförelser; det ersätter inte en officiell beräkning eller professionell rådgivning." },
  { type: 'paragraph', html: "Tolka resultatet tillsammans med kalkylatorns antaganden innan du använder det." },
  { type: 'paragraph', html: "Kontrollera indata, enheter, avrundning, datum och rättsområde eftersom varje del kan ändra uppskattningen." },
  { type: 'paragraph', html: "Använd resultatet för planering och scenariejämförelser; det ersätter inte en officiell beräkning eller professionell rådgivning." },
  { type: 'paragraph', html: "Tolka resultatet tillsammans med kalkylatorns antaganden innan du använder det." },
  { type: 'paragraph', html: "Kontrollera indata, enheter, avrundning, datum och rättsområde eftersom varje del kan ändra uppskattningen." },
  { type: 'paragraph', html: "Använd resultatet för planering och scenariejämförelser; det ersätter inte en officiell beräkning eller professionell rådgivning." },
  { type: 'paragraph', html: "Tolka resultatet tillsammans med kalkylatorns antaganden innan du använder det." },
  { type: 'paragraph', html: "Kontrollera indata, enheter, avrundning, datum och rättsområde eftersom varje del kan ändra uppskattningen. Ett revolverkort betalar inte automatiskt hela saldot; ränta fortsätter att tas ut på den kvarvarande skulden och en låg månadsbetalning kan förlänga återbetalningen i många år. Ange aktuellt saldo, verklig årlig ränta, avgifter och den månadsbetalning du faktiskt kan göra. Om betalningen inte täcker månadens ränta minskar skulden kanske inte alls. Nya köp eller kontantuttag förändrar planen direkt, så jämför ett scenario utan ny användning med ett scenario där kommande transaktioner räknas med. Kontrollera alltid avtalet och kontoutdraget, eftersom kalkylatorn är ett planeringsstöd och inte ersätter långivarens officiella beräkning eller juridisk rådgivning." },],
  ui: {
    title: 'Revolverkort & Ocker Kalkylator',
    balanceLabel: 'Kvarvarande Skuld',
    creditLimitLabel: 'Kreditgräns',
    aprLabel: 'Effektiv Ränta (APR %)',
    paymentTypeLabel: 'Betalningsmetod',
    paymentTypeFixed: 'Fast Månadsbelopp',
    paymentTypePercentage: 'Procent av Saldot',
    paymentValueLabel: 'Betalningsvärde (Belopp eller %)',
    minPaymentValueLabel: 'Lägsta Tillåtna Betalning',
    currencyLabel: 'Valuta',
    marketLabel: 'Tillsynsmarknad / Land',
    marketES: 'Spanien (Banco de España)',
    marketUS: 'USA (CFPB)',
    marketUK: 'Storbritannien (FCA)',
    marketEU: 'Europeiska Unionen (ECB)',
    marketJP: 'Japan (FSA)',
    marketKR: 'Sydkorea (FSC)',
    marketCN: 'Kina (PBOC)',
    marketBR: 'Brasilien (Banco Central)',
    marketMX: 'Mexiko (Banco de México)',
    marketPL: 'Polen (KNF)',
    marketID: 'Indonesien (OJK)',
    marketTR: 'Turkiet (BRSA)',
    marketRU: 'Ryssland (Centralbanken)',
    marketSE: 'Sverige (Finansinspektionen)',
    marketAU: 'Australien (ASIC)',
    marketCA: 'Kanada (FCAC)',
    marketCustom: 'Anpassad Gräns',
    customThresholdLabel: 'Anpassad Ockergräns (APR %)',

    resultsTitle: 'Återbetalningsresultat',
    totalInterestLabel: 'Total Betald Ränta',
    totalPaidLabel: 'Total Återbetalning',
    monthsToPayLabel: 'Återbetalningstid (Månader)',
    infiniteDebtWarning: 'Oändlig skuld! Månadsbetalningen täcker inte månadens ränta.',
    payoffYearsLabel: 'Återbetalningsplan',

    usuryTitle: 'Analys av Ockerränta',
    usurySafeStatus: 'Normal Ränta (Låg Risk)',
    usuryWarningStatus: 'Hög Ränta (Medel Risk)',
    usuryUsuriousStatus: 'Möjlig Ockerränta (Hög Risk)',
    usuryReferenceLabel: 'Genomsnittlig Marknadsränta',
    usuryThresholdLabel: 'Varningsgräns för Ocker',

    tableTitle: 'Månadsvis Amorteringsplan',
    tableHeaderMonth: 'Månad',
    tableHeaderInitial: 'Ingående Skuld',
    tableHeaderInterest: 'Ränta',
    tableHeaderPrincipal: 'Amortering',
    tableHeaderPayment: 'Betalning',
    tableHeaderFinal: 'Utgående Skuld',

    copyTooltip: 'Kopiera Rapport',
    copiedLabel: 'Rapport Kopierad!',
    currencySymbol: 'kr',
    percentSymbol: '%',
  },
};
