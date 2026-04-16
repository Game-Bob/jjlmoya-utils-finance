import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InflationUI } from '../ui';

const slug = 'inflatie-spanje';
const title = 'Inflatiecalculator Spanje: Historische Geldwaarde';
const description =
  'Ontdek hoeveel uw peseta’s vandaag waard zouden zijn of hoeveel de kosten van levensonderhoud sinds 1980 zijn gestegen. Historische CPI-gegevens voor Spanje bijgewerkt tot 2026.';

const faqData = [
  {
    question: 'Wat is de CPI en hoe wordt deze berekend?',
    answer:
      'De Consumentenprijsindex (CPI) meet de prijsontwikkeling van een pakket goederen en diensten dat representatief is voor de Spaanse consumptie. Deze wordt berekend door de kosten van dit pakket in verschillende tijdsperioden te vergelijken.',
  },
  {
    question: 'Hoeveel waarde heeft het geld sinds 1980 verloren?',
    answer:
      '1.000 peseta’s uit 1980 staan in koopkracht gelijk aan ongeveer 60 € vandaag. Het geld heeft in deze 40+ jaar meer dan 90% van zijn waarde verloren door de gecumuleerde inflatie.',
  },
  {
    question: 'Waarom verliezen mijn spaartegoeden waarde als ik ze niet beweeg?',
    answer:
      'Als de inflatie 3% per jaar is en uw rekening 0% rente geeft, verliest u elk jaar 3% aan koopkracht. Om de reële waarde te behouden, moeten uw spaartegoeden minstens de inflatievoet opbrengen.',
  },
  {
    question: 'Wat was de periode met de hoogste inflatie in Spanje?',
    answer:
      'De jaren ’80 waren het meest inflatoir, met percentages van dubbele cijfers (tot 15%). Prijzen veranderden drastisch van maand tot maand. Sinds de euro (2002) is de inflatie beter beheersbaar, behalve in de periode 2021-2023.',
  },
  {
    question: 'Hoe beïnvloedt inflatie mijn spaargeld?',
    answer:
      'Inflatie werkt als een „stille belasting”. Als de inflatie 5% is en uw geld ligt onder het matras, kunt u aan het eind van het jaar 5% minder producten kopen. Het is essentieel om te beleggen om dit effect tegen te gaan.',
  },
];

const howToData = [
  {
    name: 'Bronjaar selecteren',
    text: 'Kies vanaf welke datum u de geldwaarde wilt berekenen (beschikbaar van 1980 tot 2026).',
  },
  {
    name: 'Bedrag invoeren',
    text: 'Voer het bedrag in peseta’s (voor oude data) of in euro’s in dat u wilt vergelijken.',
  },
  {
    name: 'Eindjaar kiezen',
    text: 'Bepaal tot welk moment u de ontwikkeling van de koopkracht wilt zien.',
  },
  {
    name: 'Reëel resultaat analyseren',
    text: 'Bekijk de koopkrachtovereenkomst en het percentage aan gecumuleerde inflatie in die periode.',
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

export const content: ToolLocaleContent<InflationUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over inflatie',
  faq: faqData,
  bibliographyTitle: 'Officiële bronnen en referenties',
  bibliography: [
    {
      name: 'INE: Consumentenprijsindex (Spanje)',
      url: 'https://www.ine.es/dyngs/INEsite/es/catalom.htm?cid=1254736116996',
    },
    {
      name: 'Banco de España: Inflatieanalyse',
      url: 'https://www.bde.es/',
    },
    {
      name: 'ECB: Monetair beleid en prijzen',
      url: 'https://www.ecb.europa.eu/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Historische Inflatiecalculator: Begrijp de Reële Waarde van uw Geld',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inflatie is de „stille belasting” die jaar na jaar aan uw spaargeld vreet. Weet u hoeveel uw geld sinds 1980 in waarde is gedaald? Hoeveel kost die koffie die u 20 jaar geleden voor 300 peseta’s kocht nu werkelijk?',
    },
    {
      type: 'title',
      text: 'Inflatie: De Stille Belasting op uw Vermogen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Inflatie</strong> is de aanhoudende en algemene stijging van de prijzen. Hoewel het een technisch verschijnsel lijkt, is de impact op de reële economie direct: het vermindert de hoeveelheid goederen die u met hetzelfde geld kunt kopen, waardoor het spaargeld van een heel leven verdampt als er geen beschermende maatregelen worden genomen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        {
          value: '15.6%',
          label: 'Historisch Record 1980',
          icon: 'mdi:trending-up',
        },
        {
          value: '8.4%',
          label: 'Prijspiek 2022',
          icon: 'mdi:alert',
        },
        {
          value: '2.0%',
          label: 'Stabiliteitsdoelstelling',
          icon: 'mdi:target',
        },
      ],
    },
    {
      type: 'title',
      text: 'Essentiële Financiële Termen',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'CPI',
          definition: 'Indicator die de prijsvariatie van een basispakket voor consumptie samenvat.',
        },
        {
          term: 'Koopkracht',
          definition: 'Reële koopcapaciteit van een valuta op een bepaald moment.',
        },
        {
          term: 'Deflatie',
          definition: 'Algemene daling van de prijzen die investeringen kan verlammen.',
        },
        {
          term: 'Stagflatie',
          definition: 'Scenario van hoge inflatie in combinatie met economische stagnatie.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Economische Mijlpalen en Vergelijking',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crisis van de jaren ’80',
          description: 'Periode gekenmerkt door inflatie met dubbele cijfers en grote instabiliteit op de arbeidsmarkt.',
          points: [
            'Extreem hoge rentetarieven',
            'Snel waardeverlies van de peseta',
            'Salarissen weggevaagd door de prijzen',
          ],
        },
        {
          title: 'Inflatie tijdens de Pandemie: 2021 tot 2023',
          description: 'Plotselinge stijging door energiekosten en problemen in de toeleveringsketen.',
          highlight: true,
          points: [
            'Directe impact op het dagelijkse boodschappenmandje',
            'Renteverhogingen door de ECB om consumptie te remmen',
            'Langzaam herstel van koopkracht',
          ],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Product of Indicator', 'Waarde in 1980 (Geschat)', 'Waarde in 2026 (Geprojecteerd)', 'Variatie'],
      rows: [
        ['Stokbrood', '0,15 € (25 pts)', '1,40 €', '833%'],
        ['Koffie in de horeca', '0,30 € (50 pts)', '1,65 €', '450%'],
        ['Bioscoopkaartje', '1,20 € (200 pts)', '9,80 €', '716%'],
        ['Maandelijks minimumloon', '154 € (25.615 pts)', '1.140 €', '640%'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:piggy-bank',
      title: 'Het Gevaar van Contant Geld',
      html: 'Geld onder het matras houden of op rekeningen-courant zonder rendement is een gegarandeerd verlies van kapitaal. Een gemiddelde inflatie van 3% halveert de waarde van uw spaargeld in minder dan 25 jaar.',
    },
    {
      type: 'title',
      text: 'Tips om uw Spaargeld te Beschermen',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Beleggingsstrategieën',
      items: [
        {
          pro: 'Reële Activa: Vastgoed stijgt vaak in waarde mee met de inflatie.',
          con: 'Lage liquiditeit en hoge instapkosten.',
        },
        {
          pro: 'Beurs en Fondsen: Rendementen die op lange termijn meestal de CPI overtreffen.',
          con: 'Volatiliteit en marktrisico op korte termijn.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Gezonde Financiële Gewoonten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Controleer periodiek uw uitgaven om verborgen stijgingen op te sporen.',
        'Diversifieer spaargeld over verschillende soorten activa.',
        'Overweeg staatsobligaties die gekoppeld zijn aan inflatie.',
        'Gebruik rekentools om aanbiedingen en salarissen in context te plaatsen.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Waarschuwing over negatieve samengestelde interest',
      html: 'Inflatie werkt als een omgekeerde samengestelde interest. Elk jaar wordt het verliespercentage toegepast op een waarde die al is gedaald, wat het verlies aan rijkdom versnelt als er niet wordt ingegrepen.',
    },
    {
      type: 'summary',
      title: 'Belangrijkste Conclusies',
      items: [
        'De CPI is slechts een gemiddelde; uw persoonlijke inflatie hangt af van uw gewoonten.',
        'Beleggen is niet optioneel als men de reële waarde van arbeid wil behouden.',
        'Inflatiecalculators zijn essentieel om langetermijncontracten te begrijpen.',
      ],
    },
    {
      type: 'message',
      title: 'Neem de Controle over uw Economie',
      html: 'Onze calculator gebruikt officiële INE-gegevens om u het meest nauwkeurige beeld te geven van het economische verleden en heden van Spanje.',
    },
  ],
  ui: {
    labelTitle: 'Inflatiecalculator Spanje',
    labelInitialAmount: 'Startbedrag',
    labelInitialYear: 'In het jaar',
    labelFinalAmount: 'Equivalent Vandaag',
    labelFinalYear: 'Jaar 2026',
    labelInflationRate: 'Gecumuleerde Inflatie',
    labelCalculatedOn: 'Berekening uitgevoerd met officiële INE-gegevens tot 2025 en geschatte projecties voor eind 2026.',
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyLocale: 'nl-NL',
    labelYearSelect: 'In het jaar',
    labelIn: 'In',
    labelEquivalentToday: 'staat vandaag gelijk aan',
    labelInflationAccumulated: 'Gecumuleerde Inflatie',
    labelYear: 'Jaar',
  },
};
