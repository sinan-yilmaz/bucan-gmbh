import { feinkost } from "core/consts/content";
import { FadeInImage, Reveal } from "lib/primitives/components";

function FeinkostSection() {
  return (
    <section
      id="feinkost"
      style={{
        background: "#ECEEE0",
        padding: "clamp(60px,7vw,104px) clamp(20px,5vw,40px) clamp(64px,8vw,108px)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 52px" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "#5C6B4F",
            }}
          >
            {feinkost.eyebrow}
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
            {feinkost.titel}
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: "62ch",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "#4A463C",
            }}
          >
            {feinkost.text}
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 26,
          }}
        >
          {feinkost.standorte.map((standort) => (
            <Reveal
              key={standort.name}
              as="article"
              delay={standort.delay}
              className="card-hover"
              style={{
                background: "#FFFFFF",
                border: "1px solid #D9DDC8",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 220, overflow: "hidden" }}>
                <FadeInImage
                  src={standort.bild.src}
                  alt={standort.bild.alt}
                  style={{ filter: "sepia(.15) saturate(.85) brightness(.95)" }}
                />
              </div>
              <div style={{ padding: "26px 28px 30px" }}>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-marcellus), serif",
                    fontWeight: 400,
                    fontSize: 22,
                    color: "#0E2318",
                  }}
                >
                  {standort.name}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "#5C574B" }}>
                  {standort.adresse[0]}
                  <br />
                  {standort.adresse[1]}
                </p>
                <a
                  href={standort.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={standort.mapsLabel}
                  className="lnk-underline"
                  style={{
                    display: "inline-block",
                    marginTop: 14,
                    fontSize: 14,
                    letterSpacing: ".06em",
                    textDecoration: "none",
                    paddingBottom: 2,
                  }}
                >
                  {feinkost.routeLabel}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeinkostSection;
