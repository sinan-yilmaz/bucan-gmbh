import { ueberUns } from "core/consts/content";
import { FadeInImage, Reveal } from "lib/primitives/components";

function UeberUnsSection() {
  return (
    <section
      id="ueber-uns"
      style={{
        background: "#FBF8F1",
        padding: "clamp(56px,7vw,110px) clamp(20px,5vw,40px)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(36px,6vw,80px)",
          alignItems: "center",
        }}
      >
        <Reveal className="frame-inset">
          <div style={{ aspectRatio: "4/5" }}>
            <FadeInImage
              src={ueberUns.bild.src}
              alt={ueberUns.bild.alt}
              style={{ filter: "sepia(.15) saturate(.85) brightness(.95)" }}
            />
          </div>
        </Reveal>
        <Reveal delay={130}>
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
            {ueberUns.eyebrow}
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-marcellus), serif",
              fontWeight: 400,
              fontSize: "clamp(30px,4vw,42px)",
              lineHeight: 1.18,
              color: "#0E2318",
              textWrap: "pretty",
            }}
          >
            {ueberUns.titel}
          </h2>
          <p
            style={{
              margin: "22px 0 0",
              fontSize: 16.5,
              lineHeight: 1.75,
              color: "#4A463C",
              maxWidth: "46ch",
            }}
          >
            {ueberUns.text}
          </p>
          <p
            style={{
              margin: "36px 0 0",
              fontFamily: "var(--font-great-vibes), cursive",
              fontWeight: 400,
              fontSize: "clamp(36px,4vw,46px)",
              lineHeight: 1,
              color: "#806429",
            }}
          >
            {ueberUns.signatur}
          </p>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: ".26em",
              textTransform: "uppercase",
              color: "#8A8474",
            }}
          >
            {ueberUns.rolle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default UeberUnsSection;
