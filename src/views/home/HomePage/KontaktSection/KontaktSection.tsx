import { kontakt, kontaktSektion } from "core/consts/content";
import { Reveal } from "lib/primitives/components";
import FormularArea from "./FormularArea";

function KontaktSection() {
  return (
    <section
      id="kontakt"
      style={{
        padding: "clamp(56px,7vw,100px) clamp(20px,5vw,40px) clamp(72px,9vw,120px)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
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
            {kontaktSektion.eyebrow}
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-marcellus), serif",
              fontWeight: 400,
              fontSize: "clamp(30px,4vw,44px)",
              lineHeight: 1.2,
              color: "#0E2318",
              textWrap: "balance",
            }}
          >
            {kontaktSektion.titel}
          </h2>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 26,
            marginTop: 56,
            alignItems: "start",
          }}
        >
          <Reveal
            style={{
              background: "#FFFCF5",
              border: "1px solid #E7DEC9",
              padding: "clamp(26px,4vw,44px)",
            }}
          >
            <FormularArea />
          </Reveal>
          <Reveal
            delay={130}
            style={{
              background: "#0E2318",
              padding: "clamp(26px,4vw,44px)",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-marcellus), serif",
                  fontWeight: 400,
                  fontSize: 26,
                  color: "#F7F3EA",
                }}
              >
                {kontaktSektion.direkt.titel}
              </h3>
              <div
                style={{ width: 34, height: 1, background: "#C2A25E", marginTop: 16 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "#C2A25E",
                }}
              >
                {kontaktSektion.direkt.telefonLabel}
              </p>
              <a
                href={kontakt.telefonHref}
                className="lnk-white focus-gold"
                style={{
                  textDecoration: "none",
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: 26,
                }}
              >
                {kontakt.telefonDisplay}
              </a>
            </div>
            <div>
              <a
                href={kontakt.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold focus-gold"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  fontSize: 13.5,
                  fontWeight: 500,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  padding: "14px 26px",
                }}
              >
                {kontaktSektion.direkt.whatsappLabel}
              </a>
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "#C2A25E",
                }}
              >
                {kontaktSektion.direkt.emailLabel}
              </p>
              <a
                href={`mailto:${kontakt.email}`}
                className="lnk-cream focus-gold"
                style={{
                  fontSize: 16,
                  textDecorationColor: "rgba(194,162,94,.6)",
                }}
              >
                {kontakt.email}
              </a>
            </div>
            <div>
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: 11.5,
                  fontWeight: 600,
                  letterSpacing: ".28em",
                  textTransform: "uppercase",
                  color: "#C2A25E",
                }}
              >
                {kontaktSektion.direkt.adresseLabel}
              </p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#EDE7D8" }}>
                {kontakt.strasse}
                <br />
                {kontakt.ort}
              </p>
              <a
                href={kontakt.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lnk-gold focus-gold"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  fontSize: 14,
                  letterSpacing: ".04em",
                }}
              >
                {kontaktSektion.direkt.mapsLabel}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default KontaktSection;
