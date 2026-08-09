import { fuerWen } from "core/consts/content";
import { Reveal } from "lib/primitives/components";

function FuerWenSection() {
  return (
    <section
      id="fuer-wen"
      style={{ padding: "clamp(48px,6vw,88px) clamp(20px,5vw,40px)" }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 48px" }}>
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
            {fuerWen.eyebrow}
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
            Für jeden Anlass der richtige&nbsp;Partner.
          </h2>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: 20,
          }}
        >
          {fuerWen.karten.map((karte) => (
            <Reveal
              key={karte.titel}
              delay={karte.delay}
              className="card-hover"
              style={{
                background: "#FFFCF5",
                border: "1px solid #E7DEC9",
                padding: "28px 28px 30px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-marcellus), serif",
                  fontWeight: 400,
                  fontSize: 20,
                  color: "#0E2318",
                }}
              >
                {karte.titel}
              </h3>
              <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "#5C574B" }}>
                {karte.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FuerWenSection;
