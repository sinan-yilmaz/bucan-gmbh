import type { Metadata } from "next";
import { site } from "core/consts/content";
import DatenschutzPage from "views/datenschutz/DatenschutzPage";

export const metadata: Metadata = {
  title: site.datenschutzTitle,
  description: site.datenschutzDescription,
  alternates: { canonical: "/datenschutz/" },
};

export default function Page() {
  return <DatenschutzPage />;
}
