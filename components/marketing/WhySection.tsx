/** Waarom Snelrond: voor wie het is (op de startpagina) en de vergelijking met een CRM en offertesoftware (op /waarom-snelrond). */

import Link from "next/link";

/** Problemen die een installateur met een klein team herkent. Wie zich hierin herkent, is wie we zoeken. */
const problems = [
  "Je belt klanten terug om maten en foto's na te vragen",
  "Je weet niet precies welke klant nog op een offerte wacht",
  "Je afspraken staan verspreid over agenda, WhatsApp en briefjes",
  "Je loopt achter facturen aan die nog niet betaald zijn",
];

/** Nu tegenover met Snelrond: wat je kwijt bent, en wat je ervoor terugkrijgt. */
const now = ["Nabellen voor maten en foto's", "Offertes overtikken in Word", "Meerwerk vergeten op de factuur", "Avondenlang aan het werk"];
const withUs = ["De klant vult alles zelf in, met foto's", "Na het bezoek staat de offerte klaar", "Meerwerk staat vanzelf op de factuur", "De avond is weer van jou"];

const Cross = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <path d="M7 7l10 10M17 7 7 17" />
  </svg>
);
const Tick = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export function WhySection() {
  return (
    <section id="waarom" aria-labelledby="waarom-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        {/* 1. De belofte: voor wie dit is. Het grootste op de pagina na de kop bovenaan. */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 id="waarom-title" className="display text-[clamp(2.4rem,7.5vw,4.5rem)]">
              Voor de installateur die &rsquo;s&nbsp;avonds nog offertes zit te typen.
            </h2>
            <p className="mt-5 max-w-lg text-lg text-muted sm:text-xl">
              Overdag sta je bij de klant. Het kantoorwerk schuift door naar de avond. Daar is Snelrond voor gemaakt.
            </p>
          </div>

          {/* 2. Het herkenningsmoment: een eigen kop, de problemen, en de conclusie als uitspraak. */}
          <div className="lg:pt-2">
            <h3 className="display-md text-[clamp(1.6rem,3.5vw,2.1rem)]">Herken je dit?</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {problems.map((t) => (
                <li key={t} className="flex items-start gap-3.5 py-3.5 text-lg [&>span:last-child]:[text-wrap:balance]">
                  <span aria-hidden="true" className="mt-[0.7em] h-0.5 w-4 shrink-0 rounded-full bg-signal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="display-md mt-5 flex items-center gap-3 text-[clamp(1.4rem,3vw,1.75rem)] text-brand-strong">
              Dan is Snelrond voor jou.
              <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-signal text-petrol">
                <svg viewBox="0 0 24 24" className="h-4 w-4 rotate-90" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </p>
          </div>
        </div>

        {/* 3. Wat het oplevert: een eigen kop, dan nu tegenover met Snelrond. */}
        <div className="mt-20 lg:mt-28">
          <div className="max-w-2xl">
            <h3 className="display text-[clamp(2rem,5.5vw,3.25rem)]">Wat Snelrond van je overneemt</h3>
            <p className="mt-4 text-lg text-muted">
              Het kantoorwerk dat je nu &rsquo;s avonds doet, gebeurt met Snelrond tijdens de klus. De klant levert alles aan, jij controleert en verstuurt.
            </p>
          </div>

          <div className="relative mt-10 grid gap-3 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-5">
            <article aria-labelledby="nu-title" className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
              <h4 id="nu-title" className="display-md text-[1.75rem] text-muted">Nu</h4>
              <p className="mt-1 text-sm text-muted">Alles zelf doen, na je werkdag</p>
              <ul className="mt-5 space-y-3">
                {now.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-muted">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-500">
                      <Cross />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Pijl van nu naar Snelrond: op laptop ertussen, op de telefoon naar beneden. */}
            <span aria-hidden="true" className="relative z-10 mx-auto -my-7 grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-signal text-petrol md:absolute md:left-[42.5%] md:top-1/2 md:mx-0 md:my-0 md:-translate-x-1/2 md:-translate-y-1/2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>

            {/* De Snelrond-kaart is groter en donker: dit is waar het om draait. */}
            <article aria-labelledby="snelrond-title" className="rounded-3xl bg-petrol p-6 text-white shadow-xl shadow-petrol/20 sm:p-9 md:pl-12">
              <h4 id="snelrond-title" className="display text-[clamp(2rem,4vw,2.6rem)]">Met Snelrond</h4>
              <p className="mt-1 text-teal-50/75">Het meeste gaat vanzelf, jij houdt de regie</p>
              <ul className="mt-6 space-y-3.5 text-lg">
                {withUs.map((t, i) => (
                  <li key={t} className={`flex items-start gap-3 ${i === withUs.length - 1 ? "font-semibold text-signal" : ""}`}>
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-signal text-petrol">
                      <Tick />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 text-muted">
            Benieuwd wat het jou oplevert?{" "}
            <Link href="/waarom-snelrond" className="font-semibold text-brand-strong underline decoration-2 underline-offset-4">
              Vergelijk en reken het uit
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

const rows: [string, string, string, string][] = [
  ["Klant vult een gericht klantformulier in", "Ja, met prijsindicatie", "Zelf formulier bouwen", "Nee"],
  ["Onbekende gegevens blijven zichtbaar", "Ja, per veld", "Nee", "Nee"],
  ["Monteur-checklist op locatie", "Ja", "Maatwerk", "Soms"],
  ["Conceptofferte uit bezoekgegevens", "Ja", "Nee", "Handmatig"],
  ["Klant geeft online akkoord", "Ja", "Soms", "Ja"],
  ["Agenda met werkdagen per monteur", "Ja", "Soms", "Nee"],
  ["Factuur, betaling en omzet", "Ja", "Soms", "Soms"],
  ["Inrichten en uitleg", "Wij richten het in, één keer uitleg", "Zelf inrichten, training nodig", "Zelf inrichten"],
  ["Koppeling met boekhouding (SnelStart)", "Nog niet, komt eraan", "Soms", "Soms"],
];

/** De vergelijkingstabel. Wat nog niet kan, staat er eerlijk en zonder vinkje bij. */
export function Comparison() {
  return (
    <div id="vergelijking" className="scroll-mt-24">
      <h2 className="display-md text-3xl sm:text-4xl">Snelrond naast een CRM en offertesoftware</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Veel software begint bij de offerte. Snelrond begint eerder: bij de aanvraag die nog niet compleet is.
      </p>
        {/* Eén raster voor de hele tabel, zodat de kolommen in elke rij precies onder elkaar staan.
            Op een telefoon is de tabel breder dan het scherm: dan schuift alleen de tabel opzij, niet de pagina. */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
          <div className="overflow-x-auto overscroll-x-contain" role="region" aria-label="Vergelijking, schuif opzij voor alle kolommen" tabIndex={0}>
            <table className="w-full min-w-[30rem] table-fixed border-collapse text-left text-xs sm:text-sm">
              <colgroup>
                <col className="w-[31%]" />
                <col className="w-[25%]" />
                <col className="w-[22%]" />
                <col className="w-[22%]" />
              </colgroup>
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                  <td className="sticky left-0 z-10 bg-slate-50" />
                  <th scope="col" className="bg-brand px-3 py-3 font-semibold text-white">Snelrond</th>
                  <th scope="col" className="px-3 py-3 font-semibold">Algemeen CRM</th>
                  <th scope="col" className="px-3 py-3 font-semibold">Offerte-software</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, w, crm, off], i) => {
                  const stripe = i % 2 ? "bg-slate-50" : "bg-white";
                  return (
                    <tr key={label} className={`border-t border-line ${stripe}`}>
                      <th scope="row" className={`sticky left-0 z-10 px-3 py-3.5 align-middle font-medium sm:px-6 ${stripe}`}>
                        {label}
                      </th>
                      <td className={`bg-brand-soft px-3 py-3.5 align-middle ${w.startsWith("Nog niet") ? "font-medium text-slate-600" : "font-semibold text-brand-strong"}`}>
                        <span className="flex items-center gap-1.5">
                          {!w.startsWith("Nog niet") && (
                            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 12 5 5 9-10" />
                            </svg>
                          )}
                          {w}
                        </span>
                      </td>
                      {[crm, off].map((c, k) => (
                        <td key={k} className={`px-3 py-3.5 align-middle ${c === "Nee" ? "text-slate-400" : "text-muted"}`}>
                          {c === "Nee" ? "✕ Nee" : c}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      <p className="mt-2 text-xs text-muted sm:hidden">Schuif de tabel opzij voor alle kolommen.</p>
    </div>
  );
}
