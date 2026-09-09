import type { BibliographyEntry } from "../../types";

export const bibliography: BibliographyEntry[] = [
  {
    name: "Banco de España: TAE de un préstamo o producto de financiación",
    url: "https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/relacionados/tiposinteres/guia-textual/latae/tae_prestamo.html",
  },
  {
    name: "Consumer Financial Protection Bureau: What is the difference between a loan interest rate and the APR?",
    url: "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/",
  },
];

export const bibliographyTraceability = [
  {
    country: "Spain",
    language: "Spanish",
    claim:
      "TAE includes the nominal rate, payment frequency, bank fees and some transaction expenses.",
    url: bibliography[0].url,
  },
  {
    country: "United States",
    language: "English",
    claim:
      "APR is a broader borrowing-cost measure than the interest rate because it includes additional fees.",
    url: bibliography[1].url,
  },
];
