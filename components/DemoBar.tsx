"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * Balk bovenin de app tijdens de demo vanaf de website. Wisselen tussen eigenaar en monteur kan altijd; na een
 * wijziging die niet is opgeslagen (?demo=niet-opgeslagen, zie app/actions.ts) staat er een uitleg bij.
 * Wisselen gaat via een gewone link (geen Link): /demo zet een nieuwe demosessie en mag niet vooraf geladen worden.
 */
export function DemoBar({ role }: { role: "owner" | "technician" }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const notice = params.get("demo") === "niet-opgeslagen";
  // Sluiten haalt de melding uit het adres, zodat hij na verversen niet terugkomt.
  const close = () => {
    const rest = new URLSearchParams(params);
    rest.delete("demo");
    router.replace(rest.size ? `${pathname}?${rest}` : pathname, { scroll: false });
  };

  const tab = (on: boolean) =>
    `inline-flex min-h-9 items-center rounded-full px-3.5 text-sm font-semibold transition-colors duration-100 ${on ? "bg-white text-petrol" : "text-white/85 hover:text-white"}`;

  return (
    <div className="bg-petrol text-white print:hidden">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 sm:px-6 lg:px-10">
        <p className="min-w-0 flex-1 basis-56 text-sm">
          <span className="font-semibold">U bekijkt de demo.</span> <span className="text-white/80">Wat u wijzigt, wordt niet opgeslagen.</span>
        </p>
        <div role="group" aria-label="Bekijk de app als" className="flex rounded-full bg-white/10 p-1">
          <a href="/demo?als=eigenaar" aria-current={role === "owner" ? "page" : undefined} className={tab(role === "owner")}>
            Eigenaar
          </a>
          <a href="/demo?als=monteur" aria-current={role === "technician" ? "page" : undefined} className={tab(role === "technician")}>
            Monteur
          </a>
        </div>
        <Link href="/#demo" className="inline-flex min-h-9 items-center rounded-full bg-signal px-4 text-sm font-semibold text-petrol transition-[filter] duration-100 hover:brightness-105">
          Plan een gesprek
        </Link>
      </div>
      {notice && (
        <div role="status" className="flex items-start gap-3 border-t border-white/15 bg-petrol-soft px-4 py-2.5 text-sm sm:px-6 lg:px-10">
          <span aria-hidden="true" className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-signal text-xs font-bold text-petrol">i</span>
          <p className="flex-1">
            Dit is de demo: deze wijziging is niet opgeslagen. In uw eigen omgeving wordt alles direct bewaard.
          </p>
          <button type="button" onClick={close} className="-my-1 min-h-8 rounded-md px-2 font-semibold text-white/85 hover:text-white">
            Sluiten
          </button>
        </div>
      )}
    </div>
  );
}
