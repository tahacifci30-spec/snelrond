import type { Metadata } from "next";
import { Logo } from "@/components/ui";
import { SNELROND } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe Snelrond en aangesloten installatiebedrijven omgaan met persoonsgegevens.",
};

const tel = SNELROND.phone.replace(/\s/g, "");

/**
 * Privacyverklaring van Snelrond. Twee situaties: wie via de website contact opneemt (dan is Snelrond verantwoordelijk),
 * en wie het klantformulier van een installatiebedrijf invult (dan is dat bedrijf verantwoordelijk en is Snelrond verwerker).
 */
export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12">
      <Logo />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight">Privacyverklaring</h1>
      <p className="mt-2 text-muted">Hoe Snelrond omgaat met uw gegevens.</p>

      <div className="mt-8 space-y-8 leading-relaxed [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mb-1.5 [&_h3]:mt-4 [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        <section>
          <h2>Wie zijn wij?</h2>
          <p>
            {SNELROND.name} maakt software voor installatiebedrijven. Vragen over uw gegevens? Mail naar{" "}
            <a className="text-brand-strong underline" href={`mailto:${SNELROND.email}`}>{SNELROND.email}</a> of bel{" "}
            <a className="text-brand-strong underline" href={`tel:${tel}`}>{SNELROND.phone}</a>.
          </p>
        </section>

        <section>
          <h2>Als u via onze website contact opneemt</h2>
          <p>Dan is {SNELROND.name} verantwoordelijk voor uw gegevens.</p>
          <h3>Welke gegevens</h3>
          <p>Uw naam, bedrijfsnaam, e-mailadres, telefoonnummer en het pakket waarin u geïnteresseerd bent.</p>
          <h3>Waarvoor</h3>
          <p>
            Om u terug te bellen en een gesprek over Snelrond met u te voeren. De grondslag is uw toestemming, die u geeft
            bij het versturen van het formulier. U kunt die altijd intrekken.
          </p>
          <h3>Hoe lang</h3>
          <p>Zolang dat nodig is voor het contact met u. Wordt u geen klant, dan verwijderen we uw gegevens daarna.</p>
          <h3>Demo</h3>
          <p>
            In de demo van de app kunt u alles bekijken met verzonnen voorbeeldgegevens. Wat u daar invult, wordt niet
            opgeslagen.
          </p>
        </section>

        <section>
          <h2>Als u het klantformulier van een installatiebedrijf invult</h2>
          <p>
            Installatiebedrijven gebruiken Snelrond om aanvragen van hun klanten te ontvangen en af te handelen. Doet u een
            aanvraag via hun klantformulier, dan is <strong>dat installatiebedrijf</strong> verantwoordelijk voor uw
            gegevens. {SNELROND.name} verwerkt ze alleen in opdracht van dat bedrijf (verwerker).
          </p>
          <h3>Welke gegevens</h3>
          <ul>
            <li>Uw antwoorden in het formulier (bijvoorbeeld ruimte, oppervlakte en woningtype) en het moment dat u de monteur wilt ontvangen.</li>
            <li>
              Naam, e-mailadres, telefoonnummer en adres. Uw postcode en huisnummer worden opgezocht bij PDOK, de gratis
              adresdienst van de Nederlandse overheid, om de straat en woonplaats automatisch in te vullen.
            </li>
            <li>Foto’s die u zelf toevoegt.</li>
            <li>Gegevens die de monteur bij een bezoek vastlegt, en de offerte en factuur die daaruit volgen.</li>
          </ul>
          <h3>Waarvoor</h3>
          <p>
            Om uw aanvraag te beoordelen, een prijsindicatie en offerte op te stellen, een bezoek en de installatie in te
            plannen, een factuur te sturen en contact met u op te nemen. De grondslag is uw toestemming bij het versturen van
            de aanvraag en daarna de uitvoering van de overeenkomst. De prijsindicatie wordt berekend met vaste prijsregels van
            het installatiebedrijf. Er worden geen besluiten uitsluitend door een geautomatiseerd proces genomen: een
            medewerker controleert elke offerte.
          </p>
          <h3>Hoe lang</h3>
          <p>Niet langer dan nodig voor deze doelen en voor wettelijke bewaartermijnen. Na afronding of afwijzing kunt u het installatiebedrijf vragen uw gegevens te verwijderen.</p>
          <h3>Vragen</h3>
          <p>
            Neem voor vragen over uw aanvraag contact op met het installatiebedrijf; hun gegevens staan in de bevestiging en
            op de offerte. Komt u er niet uit, mail dan naar{" "}
            <a className="text-brand-strong underline" href={`mailto:${SNELROND.email}`}>{SNELROND.email}</a>.
          </p>
        </section>

        <section>
          <h2>Diensten die wij gebruiken</h2>
          <p>
            Voor het draaien van Snelrond gebruiken we externe diensten: Netlify (hosting van de website en app), Supabase
            (opslag van gegevens), Resend (versturen van e-mail) en Zoho (onze mailbox). Zij verwerken gegevens alleen om die
            dienst te leveren.
          </p>
        </section>

        <section>
          <h2>Uw rechten</h2>
          <p>
            U kunt uw gegevens inzien, laten corrigeren of verwijderen, bezwaar maken en uw toestemming intrekken. Mail
            hiervoor naar <a className="text-brand-strong underline" href={`mailto:${SNELROND.email}`}>{SNELROND.email}</a>.
            Komt u er met ons niet uit, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We gebruiken alleen functionele opslag: een sessiecookie voor wie inlogt of de demo bekijkt, en tijdelijke
            browseropslag om een half ingevuld klantformulier te hervatten. Er worden geen tracking- of advertentiecookies
            gebruikt.
          </p>
        </section>
      </div>
    </main>
  );
}
