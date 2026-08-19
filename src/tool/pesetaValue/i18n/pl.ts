import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'przelicznik-peset-na-euro-wartosc-2026';
const title = 'Przelicznik peset na euro: wartość w 2026 roku';
const description = 'Przelicz hiszpańskie pesety na euro po stałym kursie 166,386 peset za euro i oszacuj ich siłę nabywczą do 2026 roku za pomocą hiszpańskiego CPI.';
const faq = [
  { question: 'Ile euro to 1000 peset?', answer: '1000 peset to 6,01 euro według stałego kursu wymiany. Kalkulator pokazuje także osobne oszacowanie siły nabywczej tej kwoty w wybranym roku.' },
  { question: 'Ile euro to milion peset?', answer: 'Milion peset to 6010,12 euro według stałego kursu. Szacowana siła nabywcza w 2026 roku zależy od roku, w którym używano tej kwoty.' },
  { question: 'Jak przeliczyć pesety na euro?', answer: 'Podziel kwotę w pesetach przez 166,386. Na przykład 100 peset to 0,60 euro, a 10 000 peset to 60,10 euro.' },
  { question: 'Ile byłyby warte stare pesety w 2026 roku?', answer: 'Są dwie odpowiedzi. Stały kurs podaje oficjalną kwotę w euro, a wynik skorygowany o CPI szacuje kwotę euro w 2026 roku potrzebną do uzyskania podobnej średniej siły nabywczej.' },
  { question: 'Czy kalkulator wycenia kolekcjonerską monetę lub banknot?', answer: 'Nie. Kalkulator oblicza przeliczenie waluty i średnią siłę nabywczą. Rzadka moneta lub banknot może mieć inną wartość rynkową zależną od stanu, rzadkości i popytu.' },
  { question: 'Jakie lata obejmuje przelicznik peset?', answer: 'Możesz wybrać rok początkowy od 1980 do 2026. Odniesienie dla 2026 roku korzysta z najnowszych opublikowanych danych CPI i nie jest jeszcze pełną średnią roczną.' },
  { question: 'Czy oszacowanie siły nabywczej jest dokładną ceną?', answer: 'Nie. To średnie porównanie oparte na CPI, a nie dokładna cena mieszkania, płac, żywności, energii ani konkretnego zakupu.' },
];
const howTo = [
  { name: 'Wpisz kwotę w pesetach', text: 'Wpisz kwotę z rachunku, banknotu, monety lub dokumentu historycznego.' },
  { name: 'Wybierz rok', text: 'Wybierz dekadę, a następnie rok, w którym używano tej kwoty.' },
  { name: 'Sprawdź stałe przeliczenie', text: 'Odczytaj nominalną kwotę uzyskaną przez podzielenie peset przez 166,386.' },
  { name: 'Porównaj siłę nabywczą', text: 'Porównaj stałe przeliczenie z szacowaną średnią siłą nabywczą w 2026 roku.' },
];
const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' } as WithContext<SoftwareApplication>,
];
export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: { labelAmount: 'Kwota historyczna', labelAmountHint: 'Wybierz punkt początkowy', labelOriginYear: 'Rok początkowy', labelOriginYearHint: 'Średnia roczna CPI, jeśli dostępna', labelReferenceYear: 'Odniesienie 2026 do dziś', labelNominalEuros: 'Stałe przeliczenie', labelTodayValue: 'Szacowana siła nabywcza', labelPurchasingPowerChange: 'Zmiana siły nabywczej', labelNominalDifference: 'Różnica względem przeliczenia', labelConversionRate: 'Pesety za euro', labelCpiMethod: 'Mnożnik CPI', labelPreset100: '100 ptas', labelPreset1000: '1000 ptas', labelPreset10000: '10 000 ptas', labelPreset100000: '100 000 ptas', labelPesetas: 'peset', labelEuro: 'euro', labelFrom: 'Od', labelTo: 'Do', labelOpenYears: 'Otwórz lata początkowe', labelCloseYears: 'Zamknij lata początkowe', labelDecade: 'Wybierz dekadę', labelCoin: 'moneta', labelBanknote: 'banknot', labelCashPieces: 'pieniądze', labelState: 'zmiana wartości', labelStatePositive: 'wzrost', labelStateNeutral: 'bez zmian', labelStateNegative: 'spadek', labelReset: 'Resetuj przykład', currencyLocale: 'pl-PL' },
  seo: [
    { type: 'title', text: 'Pesety na euro: dwie odpowiedzi na jedno pytanie', level: 2 },
    { type: 'paragraph', html: 'Jeśli masz dawną cenę, pensję, rachunek, monetę lub banknot w hiszpańskich pesetach, ten przelicznik podaje dwie odpowiedzi. Najpierw pokazuje stałe przeliczenie na euro, a następnie szacuje, co ta kwota oznaczała pod względem siły nabywczej w 2026 roku według zmian cen w Hiszpanii.' },
    { type: 'title', text: 'Najczęstsze przeliczenia peset na euro', level: 2 },
    { type: 'paragraph', html: 'Stały kurs wynosi zawsze 166,386 peset za 1 euro. Rok nie zmienia tego nominalnego przeliczenia.' },
    { type: 'table', headers: ['Dawna kwota', 'Stałe przeliczenie'], rows: [['1 peseta', '0,01 euro'], ['25 peset', '0,15 euro'], ['50 peset', '0,30 euro'], ['100 peset', '0,60 euro'], ['500 peset', '3,01 euro'], ['1000 peset', '6,01 euro'], ['2000 peset', '12,02 euro'], ['5000 peset', '30,05 euro'], ['10 000 peset', '60,10 euro'], ['1 milion peset', '6010,12 euro']] },
    { type: 'title', text: 'Ile były warte pesety w 2026 roku?', level: 2 },
    { type: 'paragraph', html: 'Wynik skorygowany o CPI odpowiada na inne pytanie niż przeliczenie euro. Szacuje, ile euro w 2026 roku byłoby potrzebne do zakupu podobnego średniego koszyka dóbr i usług jak w roku początkowym wybranej kwoty. Odniesienie 2026 korzysta z najnowszych danych do dziś, a nie z zakończonej średniej rocznej.' },
    { type: 'table', headers: ['Wynik', 'Znaczenie'], rows: [['Stałe przeliczenie', 'Dokładna nominalna kwota euro według oficjalnego kursu.'], ['Wartość skorygowana o CPI', 'Szacowana równoważna średnia siła nabywcza w 2026 roku.'], ['Różnica', 'Odległość między stałym przeliczeniem a szacunkiem CPI.']] },
    { type: 'title', text: 'Jak obliczyć dawną kwotę w pesetach', level: 2 },
    { type: 'list', items: ['Wpisz kwotę z rachunku, banknotu, monety lub dokumentu.', 'Wybierz rok, w którym kwoty użyto lub ją otrzymano.', 'Użyj stałego przeliczenia do bezpośredniego porównania euro.', 'Użyj wartości CPI do zrozumienia historycznej siły nabywczej.', 'Traktuj różnicę jako kontekst inflacji, a nie osobistą prognozę ceny.'] },
    { type: 'title', text: 'Monety i banknoty nie mają automatycznie tej wartości kolekcjonerskiej', level: 2 },
    { type: 'paragraph', html: 'To narzędzie oblicza walutę i inflację, a nie wycenę numizmatyczną. Rzadka moneta lub dawny banknot może mieć inną wartość rynkową zależną od roku, stanu, rzadkości i popytu.' },
    { type: 'tip', title: 'Rok zmienia siłę nabywczą, a nie kurs', html: 'Oficjalny kurs nadal wynosi 166,386 peset za euro. Tylko porównanie CPI zmienia się wraz z rokiem początkowym i zawsze opisuje średni koszyk konsumpcyjny.' },
  ],
  faq, bibliography, howTo, schemas,
};
