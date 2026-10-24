"use client";

import { requestDemo } from "@/app/actions";
import { ActionForm } from "../ActionForm";
import { SubmitButton } from "../SubmitButton";
import { field } from "../ui";

/** Contact via de website: de bezoeker laat zijn gegevens achter en wij bellen binnen één werkdag terug. */
export function DemoForm() {
  return (
    <ActionForm action={requestDemo} className="min-w-0 space-y-4 rounded-2xl bg-white p-6 text-left text-slate-900">
      {({ state, pending }) =>
        state?.ok ? (
          <div role="status">
            <h3 className="text-lg font-semibold">Bedankt, wij bellen je.</h3>
            <p className="mt-2 text-sm text-slate-700">Binnen één werkdag nemen wij telefonisch contact met je op.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="d-name" className="mb-1.5 block text-sm font-medium">Naam</label>
                <input id="d-name" name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="d-company" className="mb-1.5 block text-sm font-medium">Bedrijf</label>
                <input id="d-company" name="company" required autoComplete="organization" className={field} />
              </div>
              <div>
                <label htmlFor="d-email" className="mb-1.5 block text-sm font-medium">Zakelijk e-mailadres</label>
                <input id="d-email" name="email" type="email" required autoComplete="email" spellCheck={false} className={field} />
              </div>
              <div>
                <label htmlFor="d-phone" className="mb-1.5 block text-sm font-medium">Telefoonnummer</label>
                <input id="d-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="d-plan" className="mb-1.5 block text-sm font-medium">Waar ben je in geïnteresseerd?</label>
              <select id="d-plan" name="plan" className={field} defaultValue="onbekend">
                <option value="start">Start</option>
                <option value="team">Team</option>
                <option value="bedrijf">Bedrijf</option>
                <option value="onbekend">Dat weet ik nog niet</option>
              </select>
            </div>

            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" name="consent" className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                Ik geef toestemming om contact met mij op te nemen over dit gesprek. Zie de{" "}
                <a href="/privacy" className="font-medium text-brand underline">privacyverklaring</a>.
              </span>
            </label>
            {state?.error && (
              <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">
                {state.error}
              </p>
            )}
            <SubmitButton pending={pending} pendingText="Versturen…" className="w-full">
              Verstuur, bel mij terug
            </SubmitButton>
          </>
        )
      }
    </ActionForm>
  );
}
