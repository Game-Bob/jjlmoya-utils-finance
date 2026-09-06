export const validationEvidence = {
  reviewedAt: '2026-09-06',
  methodology:
    'The tool estimates a user-defined scenario as net sale value minus an entered acquisition basis, then applies the entered percentage only to a positive gain. It is a planning model, not a tax return or a jurisdiction-specific assessment.',
  sources: [
    {
      title: 'Agencia Tributaria: Reglas generales de cálculo',
      url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c11-ganancias-perdidas-patrimoniales/determinacion-importe-ganancias-perdidas-patrimon-generales/derivadas-transmisiones-onerosas-lucrativas/reglas-generales-calculo.html',
      role: 'Primary Spanish reference for acquisition and transmission value components.',
    },
    {
      title: 'IRS Publication 551: Basis of Assets',
      url: 'https://www.irs.gov/publications/p551',
      role: 'Primary reference for basis and sale gain/loss concepts.',
    },
  ],
  referenceCases: [
    {
      name: 'Gain scenario',
      input: { purchasePrice: 100000, acquisitionCosts: 5000, improvements: 10000, salePrice: 180000, sellingCosts: 6000, taxRate: 20 },
      expected: { acquisitionBasis: 115000, gainOrLoss: 59000, estimatedTax: 11800, netGainAfterTax: 47200 },
    },
    {
      name: 'Loss scenario',
      input: { purchasePrice: 100000, acquisitionCosts: 5000, improvements: 10000, salePrice: 90000, sellingCosts: 6000, taxRate: 20 },
      expected: { taxableGain: 0, estimatedTax: 0 },
    },
  ],
  limitations: [
    'The entered percentage is not looked up or validated against any country, year, asset type or taxpayer situation.',
    'The model does not include allowances, losses carried forward, depreciation, exemptions, inflation adjustments, separate improvements, or special regimes.',
    'Use the result to compare private scenarios and prepare questions; consult the relevant tax authority or a qualified adviser for a filing.',
  ],
} as const;
