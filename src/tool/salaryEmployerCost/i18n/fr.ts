import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { SalaryEmployerCostUI } from '../ui';

const slug = "calculateur-salaire-brut-net-cout-employeur-espagne";
const title = "Calculateur de Salaire Brut, Net et Coût Employeur en Espagne 2026";
const description = "Estimez le salaire net, la retenue IRPF, les cotisations salariales et le coût total de l employeur en Espagne selon les règles de 2026.";

const faq = [
  {
    "question": "Combien coûte un salarié à une entreprise en Espagne ?",
    "answer": "L entreprise paie le salaire brut plus ses cotisations patronales. Pour un poste de bureau en CDI à 30 000 € bruts, le coût employeur annuel est estimé à 39 645 €."
  },
  {
    "question": "Comment calculer le passage du brut au net en Espagne ?",
    "answer": "Partez du salaire brut annuel, soustrayez la Sécurité Sociale du salarié et le taux de retenue IRPF."
  },
  {
    "question": "Le choix de 12 ou 14 versements modifie-t-il le salaire annuel ?",
    "answer": "Non. Le calculateur conserve le même montant brut annuel et le divise par 12 ou 14."
  },
  {
    "question": "Quels taux de Sécurité Sociale 2026 sont inclus ?",
    "answer": "L estimation inclut les contingences communes, le chômage, la formation, le MEI et le FOGASA ainsi que le taux AT/MP."
  },
  {
    "question": "Que se passe-t-il au-delà de la base maximale de cotisation ?",
    "answer": "Les cotisations standard sont plafonnées à 5 101,20 € par mois en 2026, puis la cotisation de solidarité s applique."
  },
  {
    "question": "Cette calculatrice est-elle valable hors d Espagne ?",
    "answer": "Non. Elle est exclusivement limitée au Régime Général espagnol pour 2026."
  },
  {
    "question": "Les données salariales sont-elles envoyées à un serveur ?",
    "answer": "Non. Tous les calculs s exécutent localement dans votre navigateur."
  }
];

const howTo = [
  {
    "name": "Saisir le salaire brut",
    "text": "Choisissez l entrée annuelle ou mensuelle puis indiquez le salaire brut."
  },
  {
    "name": "Configurer les hypothèses de paie",
    "text": "Sélectionnez 12 ou 14 versements, le type de contrat, le taux d IRPF et la prime d accidents."
  },
  {
    "name": "Consulter l orbite salariale",
    "text": "Comparez le salaire net, les déductions salariales et le halo patronal."
  },
  {
    "name": "Changer la période de résultat",
    "text": "Passez des totaux annuels à la moyenne par versement."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: "fr",
};

export const content: ToolLocaleContent<SalaryEmployerCostUI> = {
  slug,
  title,
  description,
  ui: {
    "labelGrossSalary": "Signal de salaire brut",
    "labelGrossSalaryHint": "Montant du salaire",
    "labelAnnual": "Annuel",
    "labelMonthly": "Mensuel",
    "labelPaySchedule": "Calendrier de paiement",
    "labelTwelvePayments": "12 versements",
    "labelFourteenPayments": "14 versements",
    "labelContract": "Type de contrat",
    "labelPermanent": "CDI (Indéterminé)",
    "labelTemporary": "CDD (Temporaire)",
    "labelIrpfRate": "Retenue à la source IRPF",
    "labelIrpfHint": "Utilisez le taux de l Agence Tributaire, offre ou fiche de paie",
    "labelRiskRate": "Cotisation accidents du travail et maladies pro (AT/MP)",
    "labelRiskHint": "Taux employeur pour accidents du travail et maladies pro",
    "labelOfficePreset": "Bureau 1,50 %",
    "labelTradePreset": "Commercial / Ventes 2,00 %",
    "labelConstructionPreset": "BTP / Construction 6,70 %",
    "labelNetCore": "Noyau du salaire net",
    "labelEmployeeDeductions": "Déductions du salarié",
    "labelDeductionsFormula": "IRPF plus Sécurité Sociale du salarié",
    "labelEmployerHalo": "Halo de cotisation patronale",
    "labelEmployerCost": "Coût total pour l employeur",
    "labelAnnualView": "Vue annuelle",
    "labelPerPaymentView": "Moyenne par versement",
    "labelGross": "Salaire brut",
    "labelIrpf": "Retenue IRPF",
    "labelEmployeeSocialSecurity": "Sécurité Sociale du salarié",
    "labelContributionBase": "Base mensuelle de cotisation",
    "labelCostMultiplier": "Multiplicateur de coût par rapport au brut",
    "labelWorkerKeeps": "Part nette sur le coût total",
    "labelLeanGap": "Halo de coût ajusté",
    "labelTypicalGap": "Halo de coût classique",
    "labelWideGap": "Halo de coût élargi",
    "labelModelScope": "Espagne uniquement. Régime Général 2026, temps plein et salaire ordinaire en espèces. Les résultats sont des estimations.",
    "labelReset": "Réinitialiser l exemple",
    "labelInvalid": "Entrez un salaire annuel à temps plein valide et respectez les plages d IRPF et d accidents.",
    "labelMinimumSalary": "Le modèle démarre au salaire minimum interprofessionnel 2026 de 17 094 € par an.",
    "labelPrivacy": "Calculé localement dans votre navigateur"
},
  seo: [
    { type: 'title', text: "Du salaire brut au coût réel pour l entreprise en Espagne", level: 2 },
    { type: 'paragraph', html: "Estimez le salaire net, la retenue IRPF, les cotisations salariales et le coût total de l employeur en Espagne selon les règles de 2026." },
    { type: 'title', text: "La formule du coût employeur", level: 2 },
    { type: 'paragraph', html: "L entreprise paie le salaire brut plus ses cotisations patronales. Pour un poste de bureau en CDI à 30 000 € bruts, le coût employeur annuel est estimé à 39 645 €." },
    { type: 'table', headers: ['Layer', 'Details'], rows: [['Net', "Noyau du salaire net"], ['Employer Cost', "Coût total pour l employeur"]] },
    { type: 'title', text: "Taux de Sécurité Sociale espagnols inclus pour 2026", level: 2 },
    { type: 'paragraph', html: "L estimation inclut les contingences communes, le chômage, la formation, le MEI et le FOGASA ainsi que le taux AT/MP." },
    { type: 'table', headers: ['Preset', 'Rate'], rows: [["Bureau 1,50 %", '1.50%'], ["Commercial / Ventes 2,00 %", '2.00%'], ["BTP / Construction 6,70 %", '6.70%']] },
    { type: 'title', text: "Plafonds de cotisation et hauts salaires", level: 2 },
    { type: 'paragraph', html: "Les cotisations standard sont plafonnées à 5 101,20 € par mois en 2026, puis la cotisation de solidarité s applique." },
    { type: 'title', text: "Douze versements et quatorze versements", level: 2 },
    { type: 'paragraph', html: "Non. Le calculateur conserve le même montant brut annuel et le divise par 12 ou 14." },
    { type: 'tip', title: "Calendrier de paiement", html: "Sélectionnez 12 ou 14 versements, le type de contrat, le taux d IRPF et la prime d accidents." },
    { type: 'title', text: "Limites de cette estimation salariale espagnole", level: 2 },
    { type: 'paragraph', html: "Espagne uniquement. Régime Général 2026, temps plein et salaire ordinaire en espèces. Les résultats sont des estimations." },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
