import type { FAQPage, HowTo, SoftwareApplication, Thing, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { PesetaValueUI } from '../ui';

const slug = 'conversor-pesetas-euros-valor-actual';
const title = 'Conversor de pesetas a euros: valor actual en 2026';
const description = 'Convierte pesetas españolas a euros con el cambio oficial de 166,386 pesetas por euro y estima su poder adquisitivo hasta 2026 con el IPC español.';

const faq = [
  { question: '¿Cuántos euros son 1.000 pesetas?', answer: '1.000 pesetas equivalen a 6,01 euros con el cambio oficial fijo. La calculadora muestra además una estimación separada de lo que representaba ese importe en el año elegido.' },
  { question: '¿Cuántos euros son un millón de pesetas?', answer: 'Un millón de pesetas equivale a 6.010,12 euros con el cambio fijo. Su estimación de poder adquisitivo en 2026 depende del año en que se utilizó ese dinero.' },
  { question: '¿Cómo se convierten las pesetas a euros?', answer: 'Divide el importe en pesetas entre 166,386. Por ejemplo, 100 pesetas son 0,60 euros y 10.000 pesetas son 60,10 euros.' },
  { question: '¿Cuánto valdrían las pesetas antiguas en 2026?', answer: 'Hay dos respuestas. La conversión fija da el importe legal en euros y el resultado ajustado por IPC estima cuántos euros de 2026 tendrían un poder adquisitivo medio parecido.' },
  { question: '¿Calcula el valor de colección de una moneda o billete?', answer: 'No. Calcula conversión monetaria y poder adquisitivo medio. Una moneda rara o un billete de colección puede tener otro valor según su estado, rareza y demanda.' },
  { question: '¿Qué años utiliza el conversor de pesetas?', answer: 'Puedes elegir un año de origen entre 1980 y 2026. La referencia actual es 2026 hasta la fecha con los últimos datos publicados del IPC, no una media anual completa.' },
  { question: '¿Es exacto el valor estimado del poder adquisitivo?', answer: 'No. Es una comparación media basada en el IPC y no un precio exacto de la vivienda, los salarios, la comida, la energía o una compra concreta.' },
];

const howTo = [
  { name: 'Introduce el importe en pesetas', text: 'Escribe el importe de un recibo, billete, moneda o documento histórico.' },
  { name: 'Elige el año', text: 'Selecciona la década y después el año en que se utilizó ese importe.' },
  { name: 'Comprueba la conversión fija', text: 'Lee el importe nominal en euros obtenido al dividir entre 166,386.' },
  { name: 'Compara el poder adquisitivo', text: 'Compara la conversión fija con la estimación del poder adquisitivo medio en 2026.' },
];

const schemas: WithContext<Thing>[] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) } as WithContext<HowTo>,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'FinanceApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' } as WithContext<SoftwareApplication>,
];

export const content: ToolLocaleContent<PesetaValueUI> = {
  slug, title, description,
  ui: {
    labelAmount: 'Importe histórico', labelAmountHint: 'Elige un punto de partida', labelOriginYear: 'Año de origen', labelOriginYearHint: 'Media anual del IPC cuando está disponible', labelReferenceYear: 'Referencia 2026 hasta la fecha', labelNominalEuros: 'Conversión fija', labelTodayValue: 'Poder adquisitivo estimado', labelPurchasingPowerChange: 'Cambio del poder adquisitivo', labelNominalDifference: 'Diferencia frente a la conversión', labelConversionRate: 'Pesetas por euro', labelCpiMethod: 'Multiplicador del IPC', labelPreset100: '100 ptas', labelPreset1000: '1.000 ptas', labelPreset10000: '10.000 ptas', labelPreset100000: '100.000 ptas', labelPesetas: 'pesetas', labelEuro: 'euros', labelFrom: 'Desde', labelTo: 'Hasta', labelOpenYears: 'Abrir años de origen', labelCloseYears: 'Cerrar años de origen', labelDecade: 'Elige una década', labelCoin: 'moneda', labelBanknote: 'billete', labelCashPieces: 'piezas de dinero', labelState: 'evolución del valor', labelStatePositive: 'ha aumentado', labelStateNeutral: 'sin cambios', labelStateNegative: 'ha disminuido', labelReset: 'Restablecer ejemplo', currencyLocale: 'es-ES',
  },
  seo: [
    { type: 'title', text: 'Pesetas a euros: la respuesta depende de la pregunta', level: 2 },
    { type: 'paragraph', html: 'Si tienes un precio antiguo, un sueldo, un recibo, una moneda o un billete en pesetas españolas, este conversor ofrece dos respuestas. Primero muestra la conversión fija a euros y después estima qué representa ese importe en poder adquisitivo de 2026 según la evolución de los precios en España.' },
    { type: 'title', text: 'Conversiones habituales de pesetas a euros', level: 2 },
    { type: 'paragraph', html: 'El cambio fijo es siempre de 166,386 pesetas por 1 euro. El año no modifica esta conversión nominal.' },
    { type: 'table', headers: ['Importe antiguo', 'Conversión fija'], rows: [['1 peseta', '0,01 euros'], ['25 pesetas', '0,15 euros'], ['50 pesetas', '0,30 euros'], ['100 pesetas', '0,60 euros'], ['500 pesetas', '3,01 euros'], ['1.000 pesetas', '6,01 euros'], ['2.000 pesetas', '12,02 euros'], ['5.000 pesetas', '30,05 euros'], ['10.000 pesetas', '60,10 euros'], ['1 millón de pesetas', '6.010,12 euros']] },
    { type: 'title', text: '¿Cuánto valían las pesetas en 2026?', level: 2 },
    { type: 'paragraph', html: 'El resultado ajustado por IPC responde a una pregunta distinta de la conversión a euros. Estima cuántos euros de 2026 permitirían comprar una cesta media parecida a la que podía comprarse con el importe elegido en su año de origen. La referencia de 2026 es hasta la fecha con los últimos datos publicados y no una media anual completa.' },
    { type: 'table', headers: ['Resultado', 'Qué significa'], rows: [['Conversión fija', 'El importe nominal exacto en euros con el cambio oficial.'], ['Valor ajustado por IPC', 'Una estimación del poder adquisitivo medio equivalente en 2026.'], ['Diferencia', 'La distancia entre la conversión fija y la estimación del IPC.']] },
    { type: 'title', text: 'Cómo calcular un importe antiguo en pesetas', level: 2 },
    { type: 'list', items: ['Introduce el importe de la factura, billete, moneda o documento.', 'Selecciona el año en que se utilizó o recibió.', 'Usa la conversión fija para obtener la equivalencia directa en euros.', 'Usa el valor ajustado por IPC para entender el poder adquisitivo histórico.', 'Interpreta la diferencia como contexto de inflación, no como una previsión de precios personales.'] },
    { type: 'title', text: 'Las monedas y billetes no tienen automáticamente ese valor de colección', level: 2 },
    { type: 'paragraph', html: 'Esta herramienta calcula moneda e inflación, no tasaciones numismáticas. Una moneda rara o un billete antiguo puede tener un valor de mercado diferente según el año, el estado, la rareza y la demanda.' },
    { type: 'tip', title: 'El año cambia el poder adquisitivo, no el cambio fijo', html: 'La conversión oficial permanece en 166,386 pesetas por euro. Solo cambia la comparación del IPC con el año de origen y siempre describe una cesta media de consumo.' },
  ],
  faq, bibliography, howTo, schemas,
};
