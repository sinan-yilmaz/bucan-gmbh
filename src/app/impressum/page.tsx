import type { Metadata } from "next";
import { site } from "core/consts/content";
import ImpressumPage from "views/impressum/ImpressumPage";

export const metadata: Metadata = {
  title: site.impressumTitle,
  alternates: { canonical: "/impressum/" },
};

export default function Page() {
  return <ImpressumPage />;
}
