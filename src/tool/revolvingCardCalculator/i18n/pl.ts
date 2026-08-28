import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RevolvingCardCalculatorUI } from '../ui';

const slug = 'kalkulator-kart-revolving';
const title = 'Kalkulator Kart Revolving i Lichwy';
const description = 'Symuluj czas i koszt spłaty karty kredytowej typu revolving oraz sprawdź limity lichwiarskie.';

const faqData = [{ question: 'Jak działają karty odnawialne?', answer: 'Karty odnawialne pozwalają na elastyczną spłatę długu.' },
  { question: "Co sprawdzić przed użyciem wyniku?", answer: "Sprawdź dane, jednostki, założenia i ograniczenia; wynik jest wskazówką, a nie decyzją urzędową." },
  { question: "Co sprawdzić przed użyciem wyniku?", answer: "Sprawdź dane, jednostki, założenia i ograniczenia; wynik jest wskazówką, a nie decyzją urzędową." },
  { question: "Co sprawdzić przed użyciem wyniku?", answer: "Sprawdź dane, jednostki, założenia i ograniczenia; wynik jest wskazówką, a nie decyzją urzędową." },];
const howToData = [{ name: 'Wybierz rynek', text: 'Wybierz kraj lub własny limit.' },
  { name: "Sprawdź założenia", text: "Przed interpretacją wyniku sprawdź dane, jednostki i ograniczenia kalkulatora." },
  { name: "Sprawdź założenia", text: "Przed interpretacją wyniku sprawdź dane, jednostki i ograniczenia kalkulatora." },
  { name: "Sprawdź założenia", text: "Przed interpretacją wyniku sprawdź dane, jednostki i ograniczenia kalkulatora." },];

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
  seo: [{ type: 'title', text: 'Jak działają karty odnawialne (revolving)?' }, { type: 'paragraph', html: 'Karty odnawialne pozwalają na elastyczną spłatę długu.' },
  { type: 'paragraph', html: "Używaj wyniku do planowania i porównywania scenariuszy; nie zastępuje obliczeń urzędowych ani porady specjalisty. Karta revolving pozwala płacić tylko część salda, dlatego odsetki naliczają się dalej od pozostałego zadłużenia. Niska rata może sprawić, że spłata potrwa wiele lat, a jeśli nie pokrywa miesięcznych odsetek, saldo może nie maleć. Wprowadź aktualny bilans, rzeczywistą stopę roczną, prowizje i kwotę planowanej spłaty, a następnie porównaj wynik z warunkami umowy i wyciągiem. Nowe zakupy, wypłaty gotówki, opłaty za opóźnienie i zmiana oprocentowania zmieniają harmonogram, więc po każdej istotnej zmianie wykonaj nowe obliczenie." },
  { type: 'paragraph', html: "Przed użyciem zinterpretuj wynik razem z założeniami pokazanymi przez kalkulator." },
  { type: 'paragraph', html: "Sprawdź dane, jednostki, zaokrąglenie, datę i jurysdykcję, ponieważ każdy element może zmienić szacunek." },
  { type: 'paragraph', html: "Używaj wyniku do planowania i porównywania scenariuszy; nie zastępuje obliczeń urzędowych ani porady specjalisty." },
  { type: 'paragraph', html: "Przed użyciem zinterpretuj wynik razem z założeniami pokazanymi przez kalkulator." },
  { type: 'paragraph', html: "Sprawdź dane, jednostki, zaokrąglenie, datę i jurysdykcję, ponieważ każdy element może zmienić szacunek." },
  { type: 'paragraph', html: "Używaj wyniku do planowania i porównywania scenariuszy; nie zastępuje obliczeń urzędowych ani porady specjalisty." },
  { type: 'paragraph', html: "Przed użyciem zinterpretuj wynik razem z założeniami pokazanymi przez kalkulator." },
  { type: 'paragraph', html: "Sprawdź dane, jednostki, zaokrąglenie, datę i jurysdykcję, ponieważ każdy element może zmienić szacunek." },
  { type: 'paragraph', html: "Używaj wyniku do planowania i porównywania scenariuszy; nie zastępuje obliczeń urzędowych ani porady specjalisty." },
  { type: 'paragraph', html: "Przed użyciem zinterpretuj wynik razem z założeniami pokazanymi przez kalkulator." },
  { type: 'paragraph', html: "Sprawdź dane, jednostki, zaokrąglenie, datę i jurysdykcję, ponieważ każdy element może zmienić szacunek." },
  { type: 'paragraph', html: "Używaj wyniku do planowania i porównywania scenariuszy; nie zastępuje obliczeń urzędowych ani porady specjalisty." },
  { type: 'paragraph', html: "Przed użyciem zinterpretuj wynik razem z założeniami pokazanymi przez kalkulator." },
  { type: 'paragraph', html: "Sprawdź dane, jednostki, zaokrąglenie, datę i jurysdykcję, ponieważ każdy element może zmienić szacunek." },
  { type: 'paragraph', html: "Używaj wyniku do planowania i porównywania scenariuszy; nie zastępuje obliczeń urzędowych ani porady specjalisty." },
  { type: 'paragraph', html: "Przed użyciem zinterpretuj wynik razem z założeniami pokazanymi przez kalkulator." },
  { type: 'paragraph', html: "Sprawdź dane, jednostki, zaokrąglenie, datę i jurysdykcję, ponieważ każdy element może zmienić szacunek. Karta revolving nie spłaca automatycznie całego salda: odsetki są naliczane od pozostałego zadłużenia, a niska rata może wydłużyć spłatę o wiele lat. Wprowadź aktualne saldo, rzeczywistą roczną stopę oprocentowania, opłaty i kwotę comiesięcznej spłaty. Jeżeli rata nie pokrywa miesięcznych odsetek, dług może nie maleć lub nawet rosnąć. Nowe zakupy i wypłaty gotówki zmieniają harmonogram, dlatego porównuj scenariusz bez dodatkowego użycia karty z planem, który uwzględnia nowe transakcje. Sprawdź umowę i wyciąg, ponieważ kalkulator jest narzędziem do planowania, a nie opinią prawną ani oficjalnym harmonogramem kredytodawcy." },],
  ui: {
    title: 'Kalkulator Kart Revolving i Test Lichwy',
    balanceLabel: 'Pozostałe Zadłużenie',
    creditLimitLabel: 'Limit Kredytowy',
    aprLabel: 'Oprocentowanie (RRSO / APR)',
    paymentTypeLabel: 'Forma Spłaty',
    paymentTypeFixed: 'Stała Rata Miesięczna',
    paymentTypePercentage: 'Procent od Salda',
    paymentValueLabel: 'Wartość Spłaty (Kwota lub %)',
    minPaymentValueLabel: 'Minimalna Wymagana Rata',
    currencyLabel: 'Waluta',
    marketLabel: 'Rynek Regulacyjny / Kraj',
    marketES: 'Hiszpania (Banco de España)',
    marketUS: 'Stany Zjednoczone (CFPB)',
    marketUK: 'Wielka Brytania (FCA)',
    marketEU: 'Unia Europejska (EBC)',
    marketJP: 'Japonia (FSA)',
    marketKR: 'Korea Południowa (FSC)',
    marketCN: 'Chiny (PBOC)',
    marketBR: 'Brazylia (Banco Central)',
    marketMX: 'Meksyk (Banco de México)',
    marketPL: 'Polska (KNF / Kodeks Cywilny)',
    marketID: 'Indonezja (OJK)',
    marketTR: 'Turcja (BRSA)',
    marketRU: 'Rosja (Bank Rosji)',
    marketSE: 'Szwecja (Finansinspektionen)',
    marketAU: 'Australia (ASIC)',
    marketCA: 'Kanada (FCAC)',
    marketCustom: 'Własny Limit',
    customThresholdLabel: 'Własny Limit Lichwy (RRSO %)',

    resultsTitle: 'Wyniki Spłaty',
    totalInterestLabel: 'Całkowite Zapłacone Odsetki',
    totalPaidLabel: 'Całkowita Kwota do Spłaty',
    monthsToPayLabel: 'Czas do Całkowitej Spłaty',
    infiniteDebtWarning: 'Nieskończony dług! Rata nie pokrywa miesięcznych odsetek.',
    payoffYearsLabel: 'Harmonogram Spłaty',

    usuryTitle: 'Analiza Lichwy i Zgodności',
    usurySafeStatus: 'Standard Rynkowy (Niskie Ryzyko)',
    usuryWarningStatus: 'Wysokie Oprocentowanie (Średnie Ryzyko)',
    usuryUsuriousStatus: 'Potencjalna Lichwa (Wysokie Ryzyko)',
    usuryReferenceLabel: 'Średnie RRSO Rynkowe',
    usuryThresholdLabel: 'Próg Ostrzeżenia przed Lichwą',

    tableTitle: 'Miesięczny Harmonogram Amortyzacji',
    tableHeaderMonth: 'Miesiąc',
    tableHeaderInitial: 'Saldo Początkowe',
    tableHeaderInterest: 'Odsetki',
    tableHeaderPrincipal: 'Spłacony Kapitał',
    tableHeaderPayment: 'Rata',
    tableHeaderFinal: 'Saldo Końcowe',

    copyTooltip: 'Kopiuj Raport do Schowka',
    copiedLabel: 'Raport Skopiowany!',
    currencySymbol: 'zł',
    percentSymbol: '%',
  },
};
