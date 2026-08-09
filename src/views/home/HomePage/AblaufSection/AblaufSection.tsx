import { ablauf } from "core/consts/content";
import { Reveal } from "lib/primitives/components";

function AblaufSection() {
  return (
    <section style={{ padding: "clamp(64px,8vw,110px) clamp(20px,5vw,40px)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
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
            {ablauf.eyebrow}
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-marcellus), serif",
              fontWeight: 400,
              fontSize: "clamp(30px,4vw,44px)",
              lineHeight: 1.15,
              color: "#0E2318",
            }}
          >
            {ablauf.titel}
          </h2>
        </Reveal>
        <ol
          style={{
            listStyle: "none",
            margin: "56px auto 0",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "clamp(30px,4vw,48px)",
            textAlign: "center",
          }}
        >
          {ablauf.schritte.map((schritt) => (
            <Reveal key={schritt.nummer} as="li" delay={schritt.delay}>
              <span
                style={{
                  display: "inline-flex",
                  width: 64,
                  height: 64,
                  border: "1px solid #C2A25E",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-marcellus), serif",
                  fontSize: 26,
                  color: "#806429",
                }}
                aria-hidden="true"
              >
                {schritt.nummer}
              </span>
              <h3
                style={{
                  margin: "18px 0 8px",
                  fontFamily: "var(--font-marcellus), serif",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "#0E2318",
                }}
              >
                {schritt.titel}
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#5C574B" }}>
                {schritt.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AblaufSection;
