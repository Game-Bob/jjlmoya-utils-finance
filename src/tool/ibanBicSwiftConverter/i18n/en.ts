import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-to-bic-swift-converter';
const title = 'IBAN to BIC SWIFT Converter and Bank Code Finder';
const description = 'Get the BIC/SWIFT code from any Spanish IBAN instantly. Bank account validator with official algorithm and updated records for international transfers.';

const faqData = [
  {
    question: 'What is a BIC or SWIFT code?',
    answer: 'It is the international identifier of your bank. It is necessary so that money knows which institution it should be directed to when traveling outside the SEPA zone (Europe).',
  },
  {
    question: 'How do I know my bank\'s BIC code?',
    answer: 'You can check it in your online banking or use our converter. For Spanish banks, just entering the IBAN, we extract the entity code and give you the corresponding BIC.',
  },
  {
    question: 'Is it safe to enter my IBAN here?',
    answer: 'Completely. Our tool validates the code locally in your browser. We do not store or send your banking data to any external server.',
  },
  {
    question: 'Why does the Spanish IBAN have 24 characters?',
    answer: 'It is an international standard. The first 4 identify the country and checksum, and the other 20 are the old Client Account Code (Entity, Branch, Control and Account Number).',
  },
];

const howToData = [
  {
    name: 'Find your IBAN',
    text: 'You will find it on your bank card, savings booklet or your online banking profile.',
  },
  {
    name: 'Enter it in the validator',
    text: 'Type or paste the complete code. Our system will automatically format it for easier reading.',
  },
  {
    name: 'Press the conversion button',
    text: 'The system will validate that the control digits are correct using the Module 97 algorithm.',
  },
  {
    name: 'Copy the result',
    text: 'You will get the BIC/SWIFT code and bank name ready to copy and use.',
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
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData: 'References and Sources',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBAN to BIC/SWIFT Converter: Instant Lookup',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>BIC/SWIFT code</strong> is your bank\'s international identifier, essential for international transfers outside the SEPA zone. Our converter automatically extracts the correct code from your Spanish IBAN in seconds.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'IBAN (Account Number)',
          description: 'Unique international identifier for your bank account.',
          points: [
            'International standard format (ISO 13616)',
            '24 characters in Spain',
            'Includes country, checksum and account data',
            'Validatable using Module 97 algorithm',
          ],
        },
        {
          title: 'BIC/SWIFT (Bank Code)',
          description: 'Unique international identifier for your banking institution.',
          highlight: true,
          points: [
            '8 to 11 character code',
            'Required for international transfers',
            'Obtained from IBAN in Spanish banks',
            'Registered in the international SWIFT network',
          ],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'The Spanish IBAN follows the format <strong>ES</strong> (country code) + <strong>2 check digits</strong> + <strong>4 entity digits</strong> + <strong>4 branch digits</strong> + <strong>2 check digits</strong> + <strong>10 account number digits</strong>. Totaling 24 characters containing all your account information.',
    },
  ],
  ui: {
    labelTitle: 'IBAN to BIC / SWIFT Converter',
    labelDescription: 'Get the BIC code from any Spanish bank account instantly.',
    labelInputIBAN: 'Enter your IBAN',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'Get BIC Code',
    labelBIC: 'BIC / SWIFT Code',
    labelCountry: 'Country / Format',
    labelBank: 'Banking Institution',
    labelError: 'The IBAN entered does not appear to be valid. Check the digits.',
    labelCopyButton: 'Copy',
    labelCopied: 'Copied',
    labelBankNotIdentified: 'Entity not identified',
    labelBankOutsideSpain: 'Bank outside Spain (Limited data)',
    labelInvalidIBAN: 'Invalid IBAN',
    labelFormattingOK: 'Format OK',
  },
};
