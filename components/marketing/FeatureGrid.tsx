/**
 * "Wat u krijgt": elk onderdeel met een klein stukje van hoe het er in Snelrond uitziet, in plaats van alleen een
 * icoon. Alle namen en bedragen zijn voorbeelden.
 */

function Tile({ title, text, dark = false, className = "", children }: { title: string; text: string; dark?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <li className={`flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] ${dark ? "bg-petrol text-white" : "border border-line bg-background"} ${className}`}>
      <div className="p-6 pb-0 sm:p-7 sm:pb-0">
        <h3 className="display-md text-2xl">{title}</h3>
        <p className={`mt-1 ${dark ? "text-teal-50/80" : "text-muted"}`}>{text}</p>
      </div>
      <div aria-hidden="true" className="mt-6 flex flex-1 items-end px-6 pb-6 sm:px-7 sm:pb-7">
        <div className="w-full">{children}</div>
      </div>
    </li>
  );
}

const tick = (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export function FeatureGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Klantformulier: een vraag en de prijsindicatie die de klant direct ziet */}
      <Tile title="Klantformulier" text="De klant beantwoordt een paar vragen en ziet direct een prijsindicatie." className="sm:col-span-2">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="rounded-2xl bg-surface p-4 shadow-sm ring-1 ring-line">
            <p className="text-sm font-semibold">Hoeveel ruimtes wilt u koelen?</p>
            <div className="mt-3 flex gap-2">
              {["1", "2", "3", "4+"].map((n) => (
                <span key={n} className={`grid h-10 min-w-12 place-items-center rounded-xl px-3 text-sm font-semibold ${n === "2" ? "bg-brand text-white" : "border border-line"}`}>
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-petrol px-5 py-4 text-white">
            <p className="text-sm text-teal-50/75">Prijsindicatie</p>
            <p className="display tabular mt-1 whitespace-nowrap text-3xl">€ 3.350 – € 3.800</p>
          </div>
        </div>
      </Tile>

      {/* Overzicht: wie er op u wacht */}
      <Tile title="Overzicht" text="Elke aanvraag met de volgende stap." dark>
        <div className="space-y-2">
          {[
            ["Fatima Smits", "Bellen", "bg-signal"],
            ["Joost de Wit", "Offerte nakijken", "bg-[#7cc2b8]"],
            ["Karin Bos", "Factuur sturen", "bg-white"],
          ].map(([name, step, dot]) => (
            <div key={name} className="flex items-center gap-3 rounded-xl bg-white/[0.07] px-3 py-2.5">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
              <span className="min-w-0 flex-1 truncate text-sm font-semibold">{name}</span>
              <span className="shrink-0 text-xs text-teal-50/75">{step}</span>
            </div>
          ))}
        </div>
      </Tile>

      {/* Agenda: een werkweek met bezoeken en installaties */}
      <Tile title="Agenda" text="Alle afspraken en vrije tijden op één plek.">
        <div className="grid grid-cols-5 gap-1.5">
          {[
            ["ma", [["bg-brand", "h-6"], ["bg-signal", "h-10"]]],
            ["di", [["bg-signal", "h-14"]]],
            ["wo", [["bg-brand", "h-6"], ["bg-brand", "h-6"]]],
            ["do", [["bg-petrol", "h-16"]]],
            ["vr", [["bg-brand", "h-6"]]],
          ].map(([day, blocks]) => (
            <div key={day as string} className="flex flex-col gap-1">
              <span className="text-center text-xs font-medium text-muted">{day as string}</span>
              <div className="flex h-24 flex-col gap-1 rounded-lg bg-surface p-1 ring-1 ring-line">
                {(blocks as string[][]).map(([color, h], k) => (
                  <span key={k} className={`block rounded-md ${color} ${h}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Tile>

      {/* Checklist voor de monteur */}
      <Tile title="Checklist voor de monteur" text="Foto's, serienummers en meerwerk vastleggen op de telefoon." className="!bg-[#fbf1d3] !border-[#f0dfa8]">
        <div className="space-y-2">
          {[
            ["Foto's van de binnenunit", true],
            ["Serienummer buitenunit", true],
            ["Meerwerk: 3 meter extra leiding", true],
            ["Handtekening klant", false],
          ].map(([label, done]) => (
            <div key={label as string} className="flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2.5 text-sm">
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${done ? "bg-brand text-white" : "border-2 border-slate-300 text-transparent"}`}>{tick}</span>
              <span className={done ? "" : "text-muted"}>{label as string}</span>
            </div>
          ))}
        </div>
      </Tile>

      {/* Offerte en factuur */}
      <Tile title="Offerte en factuur" text="Controleren, versturen, betaald.">
        <div className="relative rounded-2xl bg-surface p-4 shadow-sm ring-1 ring-line">
          <p className="text-sm font-semibold">Offerte 2026-0219</p>
          <div className="mt-3 space-y-1.5 text-sm text-muted">
            <p className="flex justify-between gap-2"><span>Airco 2 ruimtes</span><span className="tabular">€ 2.890</span></p>
            <p className="flex justify-between gap-2"><span>Extra leiding 3 m</span><span className="tabular">€ 135</span></p>
          </div>
          <p className="mt-3 flex justify-between gap-2 border-t border-line pt-3 font-semibold"><span>Totaal incl. btw</span><span className="tabular">€ 3.660</span></p>
          <span className="absolute -right-1 -top-2 inline-flex -rotate-6 items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
            {tick} Akkoord
          </span>
        </div>
      </Tile>

      {/* Omzet: per maand, de laatste maand uitgelicht */}
      <Tile title="Omzet" text="Per dag, week, maand en jaar. Je ziet ook wat er nog openstaat." dark className="sm:col-span-2 lg:col-span-3">
        <div className="flex items-end gap-6">
          <div className="shrink-0">
            <p className="text-sm text-teal-50/75">Deze maand</p>
            <p className="display tabular text-4xl sm:text-5xl">€ 89.780</p>
            <span className="mt-2 inline-block rounded-md bg-signal px-2 py-0.5 text-sm font-semibold text-petrol">+6%</span>
          </div>
          <div className="flex h-28 min-w-0 flex-1 items-end gap-1.5 sm:gap-2">
            {[62, 58, 66, 70, 64, 72, 68, 74, 78, 82, 86, 92].map((h, i, all) => (
              <span key={i} className={`block flex-1 rounded-t-md ${i === all.length - 1 ? "bg-signal" : "bg-white/20"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </Tile>
    </ul>
  );
}
