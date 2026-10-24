import Link from "next/link";
import { SNELROND } from "@/lib/company";
import { Logo, btn } from "../ui";
import { MobileMenu } from "./MobileMenu";

/** Kop van de website, gedeeld door de startpagina en "Over ons". */
export function SiteHeader() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Naar hoofdinhoud
      </a>
      <header className="material sticky top-0 z-30 border-b border-line/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-5 sm:px-6">
          <Logo />
          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-5 whitespace-nowrap text-[0.95rem] font-medium text-muted lg:flex xl:gap-7">
            <Link href="/#waarom" className="transition-colors hover:text-foreground">Waarom Snelrond</Link>
            <Link href="/#functies" className="transition-colors hover:text-foreground">Wat je krijgt</Link>
            <Link href="/#werkwijze" className="transition-colors hover:text-foreground">Hoe het werkt</Link>
            <Link href="/#prijzen" className="transition-colors hover:text-foreground">Prijzen</Link>
            <Link href="/overons" className="transition-colors hover:text-foreground">Over ons</Link>
          </nav>
          <div className="flex items-center gap-2">
            {/* Inloggen gaat later naar de app zelf (bijvoorbeeld app.snelrond.nl); de demo staat daar los van. */}
            {/* Zelfde letter als de menu-items, zodat de hele balk op één lijn staat. */}
            <Link href="/login" className="hidden min-h-11 items-center whitespace-nowrap px-3 text-[0.95rem] font-medium text-muted transition-colors hover:text-foreground sm:inline-flex">
              Inloggen
            </Link>
            <Link href="/#demo" className={`${btn.primary} whitespace-nowrap max-sm:hidden`}>Plan een gesprek</Link>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}

/** Voet van de website met de bedrijfsgegevens. */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 py-12 text-sm text-muted sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3">Van aanvraag tot factuur.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Contact</p>
          <p><a className="transition-colors hover:text-foreground" href={`mailto:${SNELROND.email}`}>{SNELROND.email}</a></p>
          {SNELROND.phone && <p><a className="transition-colors hover:text-foreground" href={`tel:${SNELROND.phone.replace(/\s/g, "")}`}>{SNELROND.phone}</a></p>}
          {SNELROND.address && <p>{SNELROND.address}</p>}
        </div>
        <div>
          <p className="font-semibold text-foreground">Bedrijfsgegevens</p>
          <p>{SNELROND.name}</p>
          {SNELROND.kvk && <p>KvK {SNELROND.kvk}</p>}
          {SNELROND.btw && <p>Btw {SNELROND.btw}</p>}
        </div>
        <div>
          <p className="font-semibold text-foreground">Meer</p>
          <p><Link className="transition-colors hover:text-foreground" href="/waarom-snelrond">Waarom Snelrond</Link></p>
          <p><Link className="transition-colors hover:text-foreground" href="/overons">Over ons</Link></p>
          <p><Link className="transition-colors hover:text-foreground" href="/privacy">Privacyverklaring</Link></p>
          <p><Link className="transition-colors hover:text-foreground" href="/login">Inloggen</Link></p>
          <p>© {new Date().getFullYear()} {SNELROND.name}</p>
        </div>
      </div>
    </footer>
  );
}
