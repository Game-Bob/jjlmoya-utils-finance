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
  seo: [
    { type: 'title', text: 'Hoe werkt een revolving kredietkaart?', level: 2 },
    { type: 'paragraph', html: 'Met een revolving kredietkaart betaalt u niet noodzakelijk het volledige saldo aan het einde van elke maand. U betaalt een vast bedrag of een percentage van het openstaande saldo, terwijl de resterende schuld rente blijft dragen. Daardoor kan een relatief kleine maandbetaling de looptijd sterk verlengen.' },
    { type: 'paragraph', html: 'Voer het huidige saldo, de jaarlijkse rente, de geplande maandbetaling en eventuele kosten in. De calculator zet de jaarlijkse rente om naar een maandelijkse rente en berekent vervolgens per periode de rente, de betaling en het nieuwe saldo. Het resultaat laat zien hoeveel u in totaal betaalt en hoeveel maanden aflossen kan duren.' },
    { type: 'title', text: 'Waarom een lage betaling duur kan worden', level: 2 },
    { type: 'paragraph', html: 'Een betaling die nauwelijks hoger is dan de rente vermindert de hoofdsom maar langzaam. Bij een betaling die lager is dan de maandelijkse rente kan de schuld zelfs groeien of oneindig blijven bestaan. De waarschuwing van de calculator betekent dat u de betaling of het gebruik van de kaart moet herzien.' },
    { type: 'paragraph', html: 'Nieuwe aankopen tijdens de aflossing veranderen de berekening onmiddellijk. Houd daarom consumptie, opnames en kosten apart van het bestaande saldo wanneer u een realistisch scenario maakt. Een aflossingsplan werkt alleen als er geen nieuwe schuld wordt toegevoegd of als die nieuwe schuld expliciet wordt meegerekend.' },
    { type: 'title', text: 'Rente, kosten en regelgeving controleren', level: 2 },
    { type: 'paragraph', html: 'Controleer of de rente in uw overeenkomst een JKP, nominale rente of effectieve rente is. Contracten kunnen daarnaast jaarlijkse kosten, transactiekosten, vertragingsrente of verzekeringen bevatten. Gebruik de juiste markt en vergelijk de uitkomst met uw maandafschrift; een model met één rentepercentage vervangt geen contractuele berekening.' },
    { type: 'paragraph', html: 'De woeker- of conformiteitsanalyse is een signaal voor nader onderzoek, geen juridisch oordeel. Drempels verschillen per land en kunnen veranderen. Bewaar de voorwaarden en de datum waarop u de berekening uitvoerde, en vraag bij twijfel advies aan een bevoegde consumentenorganisatie of financieel professional.' },
    { type: 'title', text: "Gebruik scenario's om sneller af te lossen", level: 2 },
    { type: 'paragraph', html: 'Vergelijk een hogere vaste betaling, een percentagebetaling en een scenario zonder nieuwe uitgaven. Kijk niet alleen naar het aantal maanden, maar ook naar de totale betaalde rente. Rond bedragen op dezelfde manier af als uw aanbieder en voer de berekening opnieuw uit wanneer saldo, rente of betaling wijzigt.' },
    { type: 'paragraph', html: 'De uitkomst is een schatting voor planning en scenariovergelijking. Controleer invoer, valuta, afronding, datums en jurisdictie. Belangrijke beslissingen moeten worden getoetst aan de actuele overeenkomst en het officiële aflossingsoverzicht van uw kaartuitgever. Als u de minimumbetaling niet meer kunt dragen, neem dan vroeg contact op met de kredietverstrekker en vermijd nieuwe opnames totdat u een haalbaar plan hebt.' },
    { type: 'title', text: 'Vaste betaling of percentage van het saldo?', level: 2 },
    { type: 'paragraph', html: 'Bij een vaste betaling blijft het geplande bedrag gelijk zolang de overeenkomst dat toestaat. Bij een percentage van het saldo daalt de betaling wanneer het saldo daalt; een absoluut minimumbedrag voorkomt dat de aflossing in de laatste maanden te traag wordt.' },
    { type: 'title', text: 'Wat staat er in de aflossingstabel?', level: 2 },
    { type: 'paragraph', html: 'De tabel verdeelt elke maandbetaling in rente en aflossing van de hoofdsom. Door die onderdelen naast het eindsaldo te bekijken, ziet u of uw betaling de schuld werkelijk verlaagt en hoeveel rente gedurende de hele looptijd wordt opgebouwd.' },
    { type: 'title', text: 'Een rentegrens is geen juridisch oordeel', level: 2 },
    { type: 'paragraph', html: 'De marktanalyse vergelijkt uw invoer met een referentiedrempel om vragen voor de kredietverstrekker te formuleren. De juridische beoordeling van een contract kan afhangen van het moment van afsluiten, de overeenkomst en nationale rechtspraak.' },
    { type: 'title', text: 'Wanneer opnieuw rekenen?', level: 2 },
    { type: 'paragraph', html: 'Maak een nieuwe berekening na een wijziging van saldo, rente, maandbedrag, kosten of betaalgedrag. Bewaar de datum, het afschrift en de gebruikte aannames, zodat u verschillen tussen prognose en werkelijkheid kunt verklaren.' },
  ],
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
