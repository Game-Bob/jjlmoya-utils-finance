import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IBANBICSwiftUI } from '../ui';

const slug = 'iban-bikku-suuifuto-henkanki';
const title = 'IBANからBIC/SWIFTへの変換および銀行検索';
const description = 'スペインのIBANからBIC/SWIFTコードを即座に取得。公式アルゴリズムに基づいた海外送金用銀行口座バリデーター。';

const faqData = [
  {
    question: 'BIC（またはSWIFT）コードとは何ですか？',
    answer: 'お客様の銀行を識別するための国際的なコードです。SEPA（欧州）圏外へ送金する際、送金先の金融機関を特定するために必要となります。',
  },
  {
    question: '自分の銀行のBICを確認するにはどうすればよいですか？',
    answer: 'オンラインバンキングで確認するか、当変換ツールをご利用ください。スペインの銀行の場合、IBANを入力するだけで、銀行コードを抽出して対応するBICを表示します。',
  },
  {
    question: 'ここにIBANを入力しても安全ですか？',
    answer: '完全に安全です。当ツールはブラウザ上でローカルにコードを検証します。銀行データを外部サーバーに保存したり送信したりすることはありません。',
  },
  {
    question: 'スペインのIBANが24文字なのはなぜですか？',
    answer: '国際標準規格に基づいています。最初の4文字が国コードとチェックディジットで、残りの20文字が従来の銀行口座番号（銀行・支店コードなど）です。',
  },
];

const howToData = [
  {
    name: 'IBANを確認する',
    text: '銀行カード、通帳、またはオンラインバンキングのプロフィール画面で確認できます。',
  },
  {
    name: '入力欄に入力する',
    text: 'コード全体を入力または貼り付けてください。読みやすいようにシステムが自動的にフォーマットします。',
  },
  {
    name: '変換ボタンを押す',
    text: 'システムがModulo 97アルゴリズムを使用して、チェックディジットが正しいか検証します。',
  },
  {
    name: '結果をコピーする',
    text: 'BIC/SWIFTコードと銀行名が表示されます。コピーしてそのままご利用いただけます。',
  },
];

const bibliographyData = [
  {
    name: 'ISO 13616: IBANの国際標準',
    url: 'https://www.iso.org/',
  },
  {
    name: 'SWIFT: グローバルBICレジストリ',
    url: 'https://www.theswiftcodes.com/',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<IBANBICSwiftUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '情報源とリファレンス',
  bibliography: bibliographyData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IBANからBIC/SWIFTへの変換：銀行コードについて知っておくべきこと',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '国際金融の複雑な世界では、<strong>IBAN</strong>と<strong>BIC</strong>（SWIFTとも呼ばれる）という2つの略称が送金業務において重要となります。',
    },
  ],
  ui: {
    labelTitle: 'IBANからBIC / SWIFTへの変換',
    labelDescription: 'スペインの銀行口座のBICコードを即座に算出します。',
    labelInputIBAN: 'IBANを入力',
    labelInputPlaceholder: 'ES00 0000 0000 0000 0000 0000',
    labelButtonConvert: 'BICコードを取得',
    labelBIC: 'BIC / SWIFTコード',
    labelCountry: '国 / フォーマット',
    labelBank: '金融機関名',
    labelError: '入力されたIBANが無効なようです。数字を確認してください。',
    labelCopyButton: 'コピー',
    labelCopied: 'コピー完了',
    labelBankNotIdentified: '金融機関を特定できません',
    labelBankOutsideSpain: 'スペイン国外の銀行（データ制限あり）',
    labelInvalidIBAN: '無効なIBAN',
    labelFormattingOK: 'フォーマットOK',
  },
};
