import type { Metadata } from "next";
import { Great_Vibes, Jost, Marcellus } from "next/font/google";
import { site } from "core/consts/content";
import "assets/css/globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-marcellus",
});

const jost = Jost({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jost",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${marcellus.variable} ${jost.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
