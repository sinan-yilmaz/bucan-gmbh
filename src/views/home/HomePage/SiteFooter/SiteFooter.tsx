import Link from "next/link";
import { footer, kontakt, marke } from "core/consts/content";

function SiteFooter() {
  const jahr = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0E2318",
        padding: "clamp(52px,7vw,80px) clamp(20px,5vw,40px) 28px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div data-ft-top>
          <div>
            <p
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontFamily: "var(--font-marcellus), serif",
                fontSize: 22,
                letterSpacing: ".16em",
              }}
            >
              {marke.wortmarke}{" "}
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
            </p>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: ".24em",
                textTransform: "uppercase",
                color: "#C2A25E",
              }}
            >
              {marke.claim}
            </p>
          </div>
          <div style={{ fontSize: 14.5, lineHeight: 2, color: "#B9B29E", textAlign: "left" }}>
            <p style={{ margin: 0 }}>
              {kontakt.strasse} · {kontakt.ort}
            </p>
            <p style={{ margin: 0 }}>
              <a
                href={kontakt.telefonHref}
                className="lnk-cream"
                style={{ textDecoration: "none" }}
              >
                {kontakt.telefonDisplay}
              </a>{" "}
              ·{" "}
              <a
                href={`mailto:${kontakt.email}`}
                className="lnk-cream"
                style={{ textDecoration: "none" }}
              >
                {kontakt.email}
              </a>
            </p>
            <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B9B29E"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                <circle cx="12" cy="12" r="4.4" />
                <circle cx="17.6" cy="6.4" r="1.15" fill="#B9B29E" stroke="none" />
              </svg>
              <span style={{ fontSize: 14, letterSpacing: ".06em" }}>
                {kontakt.instagramLabel} {kontakt.instagramHinweis}
              </span>
            </p>
          </div>
        </div>
        <div data-ft-bar>
          <p style={{ margin: 0 }}>
            © {jahr} {footer.copyrightName}
          </p>
          <p style={{ margin: 0 }}>
            {footer.links.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? " · " : null}
                <Link href={link.href} className="lnk-sand">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
