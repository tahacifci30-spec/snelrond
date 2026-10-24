/**
 * Pakketten van Snelrond zoals ze op de website staan. Bedragen zijn excl. btw.
 * Alleen wat nu werkt staat bij "includes"; wat nog komt staat bij "soon".
 */
export type Plan = {
  id: "start" | "team" | "bedrijf";
  name: string;
  audience: string;
  /** null = op aanvraag */
  monthly: string | null;
  setup: string | null;
  /** Prijs is een vanaf-prijs: het bedrag hangt af van wat er nodig is */
  from?: boolean;
  highlight?: boolean;
  /** Korte kop boven de lijst, bijvoorbeeld "Alles uit Start, plus:" */
  lead: string;
  includes: string[];
  /** Waarom dit pakket aantrekkelijk is voor de eigenaar */
  why: string[];
  setupIncludes: string;
  soon: string[];
};

export const PLANS: Plan[] = [
  {
    id: "start",
    name: "Start",
    audience: "Voor de zelfstandige installateur",
    monthly: "€99",
    setup: "€399",
    lead: "Dit zit erin:",
    includes: [
      "1 gebruiker (de eigenaar)",
      "Klantformulier met prijsindicatie op je eigen prijzen",
      "Vaste producten met prijs die bij het typen in de offerte opduiken",
      "Overzicht van alle aanvragen, met steeds de volgende stap",
      "Je krijgt een melding bij elke aanvraag, belt de klant en plant direct in",
      "Agenda met vrije tijden en een schatting van de reistijd tussen klanten",
      "Offerte met online akkoord, factuur als PDF en betalingsherinneringen",
      "Privacyverklaring en toestemming per aanvraag",
    ],
    why: [
      "Geen telefoontjes meer om gegevens na te vragen: de klant vult alles zelf in",
      "Je weet na één blik wat je vandaag moet doen",
    ],
    setupIncludes: "Wij richten je prijsregels, bedrijfsgegevens en klantformulier voor je in en leggen één keer uit hoe het werkt.",
    soon: ["Automatische e-mail naar klanten", "Koppeling met SnelStart en andere boekhoudprogramma’s"],
  },
  {
    id: "team",
    name: "Team",
    audience: "Voor bedrijven met monteurs",
    monthly: "€199",
    setup: "€899",
    highlight: true,
    lead: "Alles uit Start, plus:",
    includes: [
      "Tot 5 gebruikers: eigenaar, planner en monteurs",
      "Monteur-omgeving op de telefoon: checklist, foto's, serienummers en meerwerk",
      "Rooster per week: monteurs vragen zelf vrij aan en geven door wanneer ze kunnen werken",
      "Omzet per dag, week, maand en jaar",
      "Export van al je aanvragen naar Excel",
    ],
    why: [
      "Geen telefoontjes meer tussen kantoor en monteur: alles staat in het dossier",
      "Meerwerk komt direct op de factuur, dus niets wordt vergeten",
      "Je ziet elke maand wat het oplevert, en wat nog openstaat",
    ],
    setupIncludes: "Het inrichten, één keer uitleg voor je hele team en het overzetten van lopende aanvragen.",
    soon: ["Eigen logo en kleuren", "Koppeling met Google Agenda", "Koppeling met SnelStart en andere boekhoudprogramma’s"],
  },
  {
    id: "bedrijf",
    name: "Bedrijf",
    audience: "Voor groeiende bedrijven",
    monthly: "€349",
    // Opstart op maat: hangt af van het aantal teams, formulieren en koppelingen.
    setup: null,
    from: true,
    lead: "Alles uit Team, plus:",
    includes: [
      "Onbeperkt aantal gebruikers",
      "Een vaste contactpersoon die jouw proces kent",
      "Voorrang bij vragen en aanpassingen",
    ],
    why: [
      "Groeit mee: meerdere teams en diensten in één omgeving",
      "Afspraken op maat, zodat Snelrond past bij hoe jij werkt",
    ],
    setupIncludes: "Samen bepalen we wat je nodig hebt, inclusief eigen huisstijl.",
    soon: [],
  },
];

/** Dingen die we samen bespreken bij Bedrijf (nog geen vaste functies). */
export const BEDRIJF_CUSTOM = [
  "Meerdere formulieren, bijvoorbeeld per dienst of vestiging",
  "Eigen domein en huisstijl",
  "Koppelingen met je boekhouding",
];
