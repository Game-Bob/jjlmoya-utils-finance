import type { ProfitabilityUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';

export const ui: ProfitabilityUI = {
  labelInitialInvestment: '初期投資額',
  labelFinalValue: '最終価値 / 現在の残高',
  labelTimeSelection: '投資期間',
  labelYears: '年',
  labelMonths: 'ヶ月',
  labelDays: '日',
  labelROI: '投資収益率 (ROI)',
  labelCAGR: '年平均成長率 (CAGR)',
  labelNetProfit: '純利益',
  labelLinearGrowth: '線形成長（推定）',
  labelExponentialGrowth: '複利成長 (CAGR)',
  labelPositiveResult: '利益の出ている投資',
  labelNegativeResult: '損失状態',
  labelCopyResult: '結果をコピー',
  labelCopied: 'コピーしました！',
};

const slug = 'profitability-calculator-roi-cagr';
const title = '投資収益性計算機：ROI & CAGR';
const description = '投資パフォーマンスを正確に分析します。ROIとCAGRを計算して、真の年換算収益を把握しましょう。';

const faq = [
  {
    question: '理想的なCAGRはどのくらいですか？',
    answer: '歴史的に、S&P 500の年平均リターンは約7〜10%です。',
  },
  {
    question: 'なぜCAGRはトータルROIと違うのですか？',
    answer: 'ROIは期間に関係のない合計収益率です。CAGRは年換算された成長率です。',
  },
];

const howTo = [
  {
    name: '初期資本を入力',
    text: '最初に投資した金額を入力してください。',
  },
  {
    name: '最終価値を入力',
    text: '現在の市場価値を入力してください。',
  },
  {
    name: '期間を設定',
    text: '投資を保有していた期間を指定してください。',
  },
];

export const content: ToolLocaleContent<ProfitabilityUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: 'title',
      text: 'ROI vs CAGR：どちらの指標が優れていますか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ROI</strong>は全体の収益率を示しますが、期間を考慮しません。<strong>CAGR</strong>は期間を「年換算」するため、長期分析に優れています。',
    },
  ],
  faq,
  bibliography: [
    {
      name: 'ROIの定義 - Investopedia',
      url: 'https://www.investopedia.com/terms/r/returnoninvestment.asp',
    },
  ],
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FinancialProduct',
      name: title,
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((h, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: h.name,
        text: h.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
};
