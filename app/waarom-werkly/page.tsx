import { permanentRedirect } from "next/navigation";

/** Het oude adres van deze pagina, van voor de naamswijziging. Bestaande links en bladwijzers komen vanzelf goed uit. */
export default function OldWhyPage() {
  permanentRedirect("/waarom-snelrond");
}
