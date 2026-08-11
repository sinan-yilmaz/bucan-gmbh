import type { Metadata, Viewport } from "next";
import { Great_Vibes, Jost, Marcellus } from "next/font/google";
import { SkipLink } from "core/components/navigation";
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

export const viewport: Viewport = {
  themeColor: "#0E2318",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${marcellus.variable} ${jost.variable} ${greatVibes.variable}`}
    >
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
