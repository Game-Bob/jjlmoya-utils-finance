import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
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

const bibliographyData = [
  {
    name: 'ISO 13616: Estándar Internacional del IBAN',
    url: 'https://www.iso.org/es/contents/data/standard/08/10/81090.html',
  },
  {
    name: 'SWIFT: Registro Global de BIC',
    url: 'https://www.theswiftcodes.com/es',
  },
  {
    name: 'Banco de España: Registro de Entidades',
    url: 'https://www.bde.es/webbe/es/estadisticas/otras-clasificaciones/clasificacion-entidades/listas-instituciones-financieras/listas-instituciones-financieras-monetarias-pais/lista-mfi-es.html',
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

const howToSchema: WithContext<HowToThing> = {
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
  faq: faqData,
  bibliographyTitle: 'Fuentes y Referencias',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Conversor de IBAN a BIC/SWIFT: Búsqueda Instantánea',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>código BIC/SWIFT</strong> es el identificador internacional de tu banco, esencial para transferencias internacionales fuera de la zona SEPA. Nuestro conversor te extrae automáticamente el código correcto desde tu IBAN español en segundos.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'IBAN (Número de Cuenta)',
          description: 'Identificador único de tu cuenta bancaria a nivel internacional.',
          points: [
            'Formato estándar internacional (ISO 13616)',
            '24 caracteres en España',
            'Incluye país, control y datos de la cuenta',
            'Validable mediante algoritmo Módulo 97',
          ],
        },
        {
          title: 'BIC/SWIFT (Código de Banco)',
          description: 'Identificador único de tu entidad bancaria a nivel internacional.',
          highlight: true,
          points: [
            'Código de 8 a 11 caracteres',
            'Necesario para transferencias internacionales',
            'Se obtiene del IBAN en bancos españoles',
            'Registrado en la red SWIFT internacional',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'El IBAN en España sigue el formato <strong>ES</strong> (código país) + <strong>2 dígitos de control</strong> + <strong>4 dígitos de entidad</strong> + <strong>4 dígitos de sucursal</strong> + <strong>2 dígitos de control</strong> + <strong>10 dígitos del número de cuenta</strong>. Totalizando 24 caracteres que contienen toda la información de tu cuenta.',
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
