import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { Logo } from "@/components/ui";
import { AUTH_CONFIGURED, getSession } from "@/lib/auth";

export const metadata: Metadata = { title: "Inloggen" };

export default async function LoginPage() {
  const session = await getSession();
  // Wie alleen de demo bekijkt, krijgt hier gewoon het inlogscherm voor de echte omgeving.
  if (session && !session.demo) redirect(session.role === "owner" ? "/dashboard" : "/technician");

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-12">
      <Logo />
      <h1 className="mt-8 text-2xl font-semibold tracking-tight">Inloggen</h1>
      <p className="mt-1 text-muted">Log in op uw Snelrond-omgeving.</p>
      {!AUTH_CONFIGURED && (
        <p role="alert" className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
          Inloggen staat uit: stel AUTH_SECRET en DEMO_PASSWORD in als omgevingsvariabelen en publiceer opnieuw.
        </p>
      )}
      <LoginForm />
      <p className="mt-6 text-sm text-muted">
        Nog geen account?{" "}
        {/* Gewone link: /demo start een demosessie en mag niet vooraf geladen worden. */}
        <a href="/demo" className="font-semibold text-brand-strong underline decoration-2 underline-offset-4">
          Probeer de demo
        </a>{" "}
        zonder in te loggen.
      </p>
    </main>
  );
}
