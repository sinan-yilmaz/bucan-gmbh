import { leistungen } from "core/consts/content";
import { FadeInImage, Reveal } from "lib/primitives/components";

function LeistungenSection() {
  return (
    <section
      id="leistungen"
      style={{ padding: "clamp(48px,6vw,88px) clamp(20px,5vw,40px)" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "#6E552B",
            }}
          >
            {leistungen.eyebrow}
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-marcellus), serif",
              fontWeight: 400,
              fontSize: "clamp(30px,4vw,44px)",
              lineHeight: 1.15,
              color: "#0E2318",
              textWrap: "pretty",
            }}
          >
            {leistungen.titel}
          </h2>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 26,
          }}
        >
          {leistungen.karten.map((karte) => (
            <Reveal
              key={karte.titel}
              as="article"
              delay={karte.delay}
              className="card-hover"
              style={{
                background: "#FFFCF5",
                border: "1px solid #E7DEC9",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 230, overflow: "hidden" }}>
                <FadeInImage
                  src={karte.bild.src}
                  alt={karte.bild.alt}
                  style={{ filter: "sepia(.15) saturate(.85) brightness(.95)" }}
                />
              </div>
              <div style={{ padding: "30px 30px 36px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-marcellus), serif",
                    fontWeight: 400,
                    fontSize: 24,
                    color: "#0E2318",
                  }}
                >
                  {karte.titel}
                </h3>
                <div
                  style={{ width: 34, height: 1, background: "#C2A25E", margin: "14px 0 16px" }}
                  aria-hidden="true"
                />
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "#5C574B" }}>
                  {karte.text}
                </p>
                {karte.link ? (
                  <a
                    href={karte.link.href}
                    className="lnk-underline"
                    style={{
                      display: "inline-block",
                      marginTop: 16,
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: ".06em",
                      textDecoration: "none",
                      paddingBottom: 2,
                    }}
                  >
                    {karte.link.label}
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeistungenSection;
