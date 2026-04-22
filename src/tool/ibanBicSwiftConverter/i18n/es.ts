import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'conversor-iban-bic-swift';
const title = 'Conversor de IBAN a BIC SWIFT y Buscador de Bancos';
const description = 'Obtén el código BIC/SWIFT de cualquier IBAN español al instante. Validador de cuentas bancarias con algoritmo oficial y registros actualizados para transferencias.';

const faqData = [
  {
    question: '¿Qué es el código BIC o SWIFT?',
    answer: 'Es el identificador internacional de tu banco. Es necesario para que el dinero sepa a qué entidad debe dirigirse cuando viaja fuera de la zona SEPA (Europa).',
  },
  {
    question: '¿Cómo sé cuál es el BIC de mi banco?',
    answer: 'Puedes consultarlo en tu banca online o usar nuestro conversor. Para bancos españoles, solo introduciendo el IBAN, nosotros extraemos el código de entidad y te damos el BIC correspondiente.',
  },
  {
    question: '¿Es seguro introducir mi IBAN aquí?',
    answer: 'Totalmente. Nuestra herramienta valida el código de forma local en tu navegador. No guardamos ni enviamos tus datos bancarios a ningún servidor externo.',
  },
  {
    question: '¿Por qué el IBAN tiene 24 caracteres en España?',
    answer: 'Es una norma estándar. Los primeros 4 identifican el país y el control, y los otros 20 son el antiguo Código Cuenta Cliente (Entidad, Sucursal, Control y Número de Cuenta).',
  },
];

const howToData = [
  {
    name: 'Busca tu IBAN',
    text: 'Lo encontrarás en tu tarjeta de coordenadas, libreta de ahorros o el perfil de tu banca online.',
  },
  {
    name: 'Introdúcelo en el validador',
    text: 'Escribe o pega el código completo. Nuestro sistema lo formateará automáticamente para facilitar la lectura.',
  },
  {
    name: 'Pulsa el botón de conversión',
    text: 'El sistema validará que los dígitos de control sean correctos mediante el algoritmo Módulo 97.',
  },
  {
    name: 'Copia el resultado',
    text: 'Obtendrás el código BIC/SWIFT y el nombre de la entidad bancaria listos para copiar y usar.',
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData: 'Fuentes y Referencias',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Conversor de IBAN a BIC/SWIFT: Todo lo que necesitas saber sobre tus códigos bancarios',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el complejo mundo de las finanzas internacionales, dos acrónimos dominan cualquier operación de transferencia: <strong>IBAN</strong> y <strong>BIC</strong> (también conocido como SWIFT). Aunque en la zona SEPA cada vez es menos frecuente que los bancos nos lo pidan para operaciones nacionales, sigue siendo una pieza fundamental para identificar de forma unívoca a la entidad receptora de los fondos.',
    },
    {
      type: 'paragraph',
      html: 'Entender cómo funcionan estos códigos no solo es una cuestión de curiosidad técnica, sino una medida de seguridad financiera esencial. Errar en un solo dígito de tu cuenta bancaria o proporcionar un BIC incorrecto puede derivar en transferencias retenidas, devoluciones con comisiones elevadas o, en el peor de los casos, el envío de capital a una cuenta equivocada en el extranjero.',
    },
    {
      type: 'title',
      text: '¿Qué es el código IBAN y cómo se estructura?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El IBAN (International Bank Account Number) es una norma internacional establecida por la ISO para identificar cuentas bancarias. Su objetivo es facilitar la automatización de los procesos de pago y reducir los errores en las transacciones transfronterizas. En España, el IBAN tiene una longitud fija de 24 caracteres.',
    },
    {
      type: 'list',
      items: [
        '<strong>Código de país (2 letras):</strong> Identifica el país donde reside la cuenta (ES para España).',
        '<strong>Dígitos de control (2 números):</strong> Un código de seguridad calculado para asegurar que el resto del IBAN ha sido introducido correctamente.',
        '<strong>Entidad (4 números):</strong> El código asignado por el Banco de España a la institución financiera específica.',
        '<strong>Sucursal (4 números):</strong> Indica la oficina bancaria donde se realizó la apertura de la cuenta.',
        '<strong>Dígitos de control (2 números):</strong> Validación interna de la cuenta clásica española.',
        '<strong>Número de cuenta (10 números):</strong> El identificador único personal de tu cuenta.',
      ],
    },
    {
      type: 'tip',
      title: 'El Algoritmo del Módulo 97',
      html: '<p>El algoritmo del IBAN utiliza una operación matemática conocida como Módulo 97. Este sistema es tan robusto que la probabilidad de que un error tipográfico pase desapercibido es prácticamente nula. Si al validar tu IBAN el resto de la división no es 1, el código es incorrecto.</p>',
    },
    {
      type: 'title',
      text: 'La Importancia del Sistema SWIFT y el Código BIC',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diferencia del IBAN, que señala la "dirección exacta" de tu dinero, el <strong>BIC</strong> (Bank Identifier Code) señala el "edificio": el banco en sí. SWIFT es la red de comunicación global segura que conecta a miles de bancos en todo el mundo. Proporcionar el BIC correcto asegura que el banco emisor sepa exactamente a qué ventanilla internacional debe llamar para entregar los fondos.',
    },
    {
      type: 'title',
      text: 'Seguridad: ¿Qué Riesgos Tiene Compartir el IBAN?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una duda muy recurrente es si proporcionar el IBAN a terceros para recibir cobros es seguro. La respuesta corta es sí. El IBAN por sí solo no permite a nadie entrar en tu cuenta o sacar dinero por la fuerza. Para que una empresa pueda retirar fondos, necesita una autorización firmada (Mandato SEPA) que puedes revocar en cualquier momento desde tu banca online.',
    },
    {
      type: 'title',
      text: 'Transferencias SEPA vs. Internacionales',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>SEPA:</strong> Comisiones nulas o reducidas, tiempo 24h, solo necesitas IBAN, mismo coste que nacional.',
        '<strong>Resto Mundo:</strong> Comisiones altas, tiempo 2-5 días, requiere IBAN + BIC, posibles cambios de divisa.',
      ],
    },
    {
      type: 'title',
      text: 'Principales Entidades Bancarias y sus BICs',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Banco Santander:</strong> BSCH ES MM XXX',
        '<strong>BBVA:</strong> BBVA ES MM XXX',
        '<strong>CaixaBank:</strong> CAIX ES BB XXX',
        '<strong>Banco Sabadell:</strong> BSAB ES BB XXX',
        '<strong>Bankinter:</strong> BKNM ES MM XXX',
        '<strong>Openbank:</strong> OPNB ES MM XXX',
      ],
    },
    {
      type: 'tip',
      title: 'Atención a los Gastos de Transferencia',
      html: '<p>Cuando realices una transferencia internacional, te preguntarán quién paga las comisiones: <strong>SHA</strong> (compartidos), <strong>OUR</strong> (tú pagas todos) o <strong>BEN</strong> (el beneficiario paga). Asegúrate de acordarlo previamente.</p>',
    },
  ],
  ui: {
    labelTitle: 'Conversor IBAN a BIC / SWIFT',
    labelDescription: 'Calcula el código BIC de cualquier cuenta bancaria española de forma instantánea.',
    labelInputIBAN: 'Introduce tu IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Obtener Código BIC',
    labelBIC: 'Código BIC / SWIFT',
    labelCountry: 'País / Formato',
    labelBank: 'Entidad Bancaria',
    labelError: 'El IBAN introducido no parece ser válido. Revisa los dígitos.',
    labelCopyButton: 'Copiar',
    labelCopied: 'Copiado',
    labelBankNotIdentified: 'Entidad no identificada',
    labelBankOutsideSpain: 'Banco fuera de España (Datos limitados)',
    labelInvalidIBAN: 'IBAN No Válido',
    labelFormattingOK: 'Formato OK',
  },
};
