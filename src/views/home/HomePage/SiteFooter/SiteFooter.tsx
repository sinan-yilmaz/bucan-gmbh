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
            <p style={{ margin: "8px 0 0" }}>
              <a
                href={kontakt.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="lnk-cream"
                style={{
                  fontSize: 14,
                  letterSpacing: ".06em",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(194,162,94,.5)",
                  paddingBottom: 2,
                }}
              >
                {kontakt.instagramLabel}
              </a>
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
