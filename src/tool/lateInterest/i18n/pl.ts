import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LateInterestUI } from '../ui';

const slug = 'kalkulator-odsetek-za-opoznienie-hiszpania';
const title = 'Kalkulator Odsetek za Opóźnienie i Ustawowych Hiszpania 2026';
const description =
  'Oblicz odsetki za opóźnienie podatkowe (Hacienda) i ustawowe za brak płatności w Hiszpanii. Symulator zaktualizowany na lata 2025 i 2026.';

const faqData = [
  {
    question: 'Co to są odsetki za opóźnienie?',
    answer:
      'Są to odsetki naliczane od kwoty, która nie została zapłacona w ustalonym terminie. Stosuje się je do pierwotnego długu i kumulują się do momentu dokonania pełnej płatności.',
  },
  {
    question: 'Jaka jest różnica między odsetkami prostymi a składanymi?',
    answer:
      'Odsetki proste oblicza się każdego dnia tylko od pierwotnego kapitału. Składane oblicza się od kapitału plus naliczone już odsetki, co powoduje szybszy wzrost zadłużenia.',
  },
  {
    question: 'Jak obliczyć odsetki dzienne?',
    answer:
      'Dzieli się roczną stawkę przez 365 dni i stosuje do pierwotnego kapitału. Na przykład: 10% rocznie = 0,0274% dziennie.',
  },
  {
    question: 'Jaką stawkę odsetek za opóźnienie powinienem zastosować?',
    answer:
      'Zależy to od lokalnych przepisów i warunków umowy. W Hiszpanii ustawa o zwalczaniu opóźnień w płatnościach określa stawki maksymalne. Skonsultuj się z doradcą prawnym w swojej konkretnej sprawie.',
  },
  {
    question: 'Czy mogę używać tego kalkulatora do długów sądowych?',
    answer:
      'To jest narzędzie informacyjne. W przypadku rzeczywistych długów sprawdź warunki umowne i lokalne przepisy. Skonsultuj się z prawnikiem, jeśli masz wątpliwości.',
  },
];

const howToData = [
  {
    name: 'Wybierz rodzaj obliczeń',
    text: 'Wybierz między odsetkami prostymi, składanymi lub miesięcznymi w zależności od Twojej sytuacji.',
  },
  {
    name: 'Wprowadź dane',
    text: 'Wprowadź kwotę pierwotną, stawkę odsetek i okres opóźnienia.',
  },
  {
    name: 'Otrzymaj wynik',
    text: 'Kalkulator pokazuje naliczone odsetki dzienne, łączną kwotę odsetek, kwotę końcową i stawkę efektywną.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<LateInterestUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i Odniesienia',
  bibliography: [
    {
      name: 'Hiszpańska Ustawa 3/2004 o Zwalczaniu Opóźnień w Płatnościach',
      url: 'https://www.boe.es/',
    },
    {
      name: 'Banco de España: Stopy Procentowe',
      url: 'https://www.bde.es/',
    },
    {
      name: 'Obliczanie Odsetek Składanych',
      url: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Odsetek za Opóźnienie i Ustawowych Hiszpania: Przewodnik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W złożonym systemie prawnym i podatkowym Hiszpanii czas upływający w przypadku długu nie jest darmowy. <strong>Odsetki za opóźnienie</strong> oraz <strong>ustawowe odsetki kapitałowe</strong> to mechanizmy wykorzystywane przez prawo do rekompensaty szkody spowodowanej zwłoką w wykonaniu zobowiązania pieniężnego. Niezależnie od tego, czy jest to dług wobec fiskusa (<strong>Hacienda</strong>), brak płatności między firmami czy roszczenie sądowe, zrozumienie sposobu naliczania tych odsetek jest kluczowe.',
    },
    {
      type: 'title',
      text: 'Czym są Ustawowe Odsetki Kapitałowe (Interés Legal del Dinero)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ustawowe odsetki to dopłata stosowana do długu, gdy strony nie uzgodniły konkretnych odsetek lub gdy określają to przepisy. Na lata <strong>2024, 2025 i 2026</strong> stopa ta została utrzymana na stabilnym poziomie <strong>3,25%</strong>. Wartość ta służy jako podstawa do wielu obliczeń prawnych.',
    },
    {
      type: 'title',
      text: 'Podatkowe Odsetki za Opóźnienie (Hacienda)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W przypadku długu wobec administracji publicznej, <strong>podatkowe odsetki za opóźnienie</strong> są wyższe od ustawowych, aby zniechęcić do opóźnień w płaceniu podatków. Na okres <strong>2024-2026</strong> ustalono je na poziomie <strong>4,0625%</strong>. Jest to dopłata, którą nałoży Hacienda w przypadku złożenia deklaracji po terminie.',
    },
    {
      type: 'tip',
      title: 'Charakter Odszkodowawczy, a nie Karny',
      html: '<p><strong>Kluczowy fakt:</strong> W przeciwieństwie do sankcji, odsetki za opóźnienie mają charakter odszkodowawczy, a nie karny. Fiskus nie „karze” Cię nimi, lecz pobiera opłatę za czas, w którym dysponowałeś pieniędzmi, które powinny znajdować się w kasie publicznej.</p>',
    },
    {
      type: 'title',
      text: 'Jak Obliczyć Odsetki Krok po Kroku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Obliczanie tych odsetek odbywa się według wzoru na odsetki proste, gdzie czas liczy się w dniach kalendarzowych: <strong>Odsetki = (Kwota Główna × Liczba Dni × Stopa Procentowa) / 36.500</strong>',
    },
    {
      type: 'list',
      items: [
        '<strong>Kwota Główna:</strong> Całkowita kwota pierwotnego długu.',
        '<strong>Liczba Dni:</strong> Liczba dni upływających od dnia następującego po terminie płatności do dnia dokonania faktycznej zapłaty.',
        '<strong>Stopa Procentowa:</strong> Stosowana stopa roczna (np. 3,25 lub 4,0625).',
        '<strong>36.500:</strong> Dzielnik przekształcający stopę roczną na dzienną (365 dni x 100).',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator',
      title: 'Przykład Praktyczny: Dług wobec Hacienda',
      html: '<p>Wyobraź sobie, że jesteś winien 5 000 € z tytułu deklaracji IRPF, której termin upłynął 180 dni temu:</p><ul><li>Stosowana stawka (Opóźnienie): 4,0625%</li><li>Obliczenie: (5 000 × 180 × 4,0625) / 36.500</li><li><strong>Naliczone odsetki:</strong> 100,17 €</li><li>Suma do zapłacenia: 5 100,17 €</li></ul>',
    },
    {
      type: 'title',
      text: 'Różnice w Zależności od Rodzaju Długu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Długi Cywilne:</strong> Między osobami prywatnymi stosuje się 3,25% (ustawowe).',
        '<strong>Długi Handlowe:</strong> Podlegają ustawie o zwalczaniu opóźnień w płatnościach, osiągając ok. 10,15% - 11,15% w latach 2025-2026.',
        '<strong>Długi wobec ZUS (Seguridad Social):</strong> Stosuje się 4,0625% plus dopłaty od 10% do 20%.',
        '<strong>Odsetki Procesowe:</strong> W przypadku wyroku sądowego, 5,25% od daty wydania wyroku.',
      ],
    },
    {
      type: 'title',
      text: 'Odsetki w Transakcjach Handlowych: Uwaga na 60 Dni!',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jeśli jesteś przedsiębiorcą lub firmą, hiszpańska ustawa 3/2004 ustala maksymalny termin płatności na 60 dni. Jeśli klient przekroczy ten termin, możesz automatycznie żądać odsetek za opóźnienie w transakcjach handlowych bez wezwania, a dodatkowo pobrać stałą kwotę 40 € za koszty windykacji.',
    },
  ],
  ui: {
    labelTitle: 'Kalkulator Odsetek za Opóźnienie',
    labelSimpleTitle: 'Proste',
    labelCompoundTitle: 'Składane',
    labelMonthlyTitle: 'Miesięczne',
    labelSimpleQuestion: 'Oblicz przy użyciu odsetek prostych',
    labelCompoundQuestion: 'Oblicz przy użyciu odsetek składanych',
    labelMonthlyQuestion: 'Oblicz z okresami miesięcznymi',
    labelPrincipal: 'Kwota Pierwotna',
    labelAnnualRate: 'Stopa Roczna',
    labelDays: 'Dni Zwłoki',
    labelMonths: 'Miesiące Zwłoki',
    labelMonthlyRate: 'Stopa Miesięczna',
    labelDailyInterest: 'Odsetki Dzienne',
    labelTotalInterest: 'Odsetki Łącznie',
    labelTotalAmount: 'Całkowita Kwota do Zapłaty',
    labelEffectiveRate: 'Stopa Efektywna',
    labelCopyTooltip: 'Kopiuj wynik',
    currencySymbol: '€',
    percentSymbol: '%',
    labelFormula: 'Zastosowany wzór',
    reportTitle: 'RAPORT OBLICZENIA ODSETEK',
    reportLabelPrincipal: 'Kwota główna',
    reportLabelType: 'Typ',
    reportLabelPeriod: 'Okres',
    reportLabelDays: 'Dni upływające',
    reportLabelInterest: 'NALICZONE ODSETKI',
    reportLabelTotal: 'SUMA DO ROZLICZENIA',
    reportDaysSuffix: 'dni',
    formulaDescription: 'Niniejsze obliczenia wykorzystują aktualnie obowiązujące stawki. Jeśli okres obejmuje poprzednie lata z innymi stawkami, rzeczywiste obliczenia powinny być podzielone na okresy.',
    currencyCode: 'EUR',
    currencyLocale: 'pl-PL',
  },
};
