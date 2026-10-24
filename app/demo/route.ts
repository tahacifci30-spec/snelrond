import { redirect } from "next/navigation";
import { DEMO_SESSIONS, startSession } from "@/lib/auth";

/**
 * "Probeer de demo" op de website: zonder wachtwoord de app in, met de voorbeeldaanvragen. Met ?als=monteur ziet u
 * de app zoals monteur Sven hem ziet. Er wordt in de demo niets opgeslagen (zie app/actions.ts).
 */
export async function GET(request: Request) {
  const as = new URL(request.url).searchParams.get("als") === "monteur" ? "monteur" : "eigenaar";
  await startSession(DEMO_SESSIONS[as]);
  redirect(as === "monteur" ? "/technician" : "/dashboard");
}
