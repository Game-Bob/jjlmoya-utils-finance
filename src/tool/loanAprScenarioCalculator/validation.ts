export const validation = {
  reviewedAt: "2026-09-08",
  methodology:
    "The tool models equal monthly payments, upfront fees, recurring fees and an optional final fee. It solves the monthly rate that equates the net cash received with the discounted payment stream and compounds that rate for an annual effective result.",
  sources: [
    "https://clientebancario.bde.es/pcb/es/menu-horizontal/podemosayudarte/simuladores/calculo_tae_prestamo_personal.html",
    "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/",
  ],
  referenceCases: [
    {
      case: "No fees at 6% nominal annual rate",
      expected: "Effective annual result is approximately 6%.",
    },
    {
      case: "Positive upfront fee",
      expected: "Effective annual result is higher than the nominal rate.",
    },
  ],
  limitations: [
    "This is a scenario estimate, not a lender disclosure or legal calculation.",
    "It assumes equal monthly payments, no grace period and fees entered by the user.",
    "It does not model variable rates, insurance exclusions, taxes, late charges or jurisdiction-specific APR rules.",
  ],
};
