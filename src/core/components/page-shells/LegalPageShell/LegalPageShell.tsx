import type { ReactNode } from "react";
import Link from "next/link";
import { legal, marke } from "core/consts/content";

type LegalPageShellProps = {
  eyebrow: string;
  titel: string;
  footerLinks: readonly { label: string; href: string }[];
  children: ReactNode;
};

function LegalPageShell({
  eyebrow,
  titel,
  footerLinks,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <header style={{ background: "#0E2318" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "16px clamp(20px,4vw,40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
              fontFamily: "var(--font-marcellus), serif",
              fontSize: 21,
              letterSpacing: ".16em",
              display: "flex",
              alignItems: "baseline",
              gap: 10,
            }}
          >
            {marke.wortmarke}
            <span
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".3em",
                color: "#C2A25E",
                textTransform: "uppercase",
              }}
            >
              {marke.zusatz}
            </span>
          </Link>
          <Link
            href="/"
            className="lnk-cream"
            style={{ textDecoration: "none", fontSize: 14, letterSpacing: ".06em" }}
          >
            {legal.zurStartseite}
          </Link>
        </div>
      </header>
      <main
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding:
            "clamp(56px,8vw,96px) clamp(20px,5vw,40px) clamp(72px,9vw,110px)",
        }}
      >
        <p
          style={{
            margin: "0 0 12px",
            fontSize: 12.5,
            fontWeight: 600,
            letterSpacing: ".32em",
            textTransform: "uppercase",
            color: "#806429",
          }}
        >
          {eyebrow}
        </p>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-marcellus), serif",
            fontWeight: 400,
            fontSize: "clamp(34px,5vw,48px)",
            lineHeight: 1.15,
            color: "#0E2318",
          }}
        >
          {titel}
        </h1>
        {children}
      </main>
      <footer style={{ background: "#0E2318", padding: "28px clamp(20px,5vw,40px)" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 28px",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "#8F8974",
          }}
        >
          <p style={{ margin: 0 }}>{legal.copyright}</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="lnk-sand">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default LegalPageShell;
