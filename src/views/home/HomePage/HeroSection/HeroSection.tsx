import { hero } from "core/consts/content";
import { FadeInImage } from "lib/primitives/components";
import WaveDivider from "../WaveDivider";

function HeroSection() {
  return (
    <section
      id="start"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0E2318",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, animation: "bucanFade 1.1s ease both" }}>
        <FadeInImage
          src={hero.bild.src}
          alt={hero.bild.alt}
          eager
          style={{ filter: "sepia(.15) saturate(.85) brightness(.95)" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#071510",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(7,21,16,.35) 0%,rgba(7,21,16,0) 45%,rgba(7,21,16,.5) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "150px clamp(20px,5vw,40px) 100px",
          maxWidth: 900,
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-great-vibes), cursive",
            fontWeight: 400,
            fontSize: "clamp(30px,4.2vw,46px)",
            lineHeight: 1.2,
            color: "#C2A25E",
            animation: "bucanRise .9s ease .5s both",
          }}
        >
          {hero.script}
        </p>
        <h1
          style={{
            margin: "8px 0 0",
            fontFamily: "var(--font-marcellus), serif",
            fontWeight: 400,
            fontSize: "clamp(44px,7.6vw,104px)",
            lineHeight: 1.05,
            letterSpacing: ".015em",
            color: "#FFFFFF",
            animation: "bucanRise .9s ease .62s both",
          }}
        >
          {hero.titel[0]}
          <br />
          {hero.titel[1]}
        </h1>
        <div
          style={{
            width: 64,
            height: 1,
            background: "#C2A25E",
            margin: "28px auto 0",
            animation: "bucanFade 1s ease .74s both",
          }}
          aria-hidden="true"
        />
        <p
          style={{
            margin: "24px auto 0",
            maxWidth: 560,
            fontSize: "clamp(16px,2vw,20px)",
            lineHeight: 1.6,
            color: "#EDE7D8",
            animation: "bucanRise .9s ease .74s both",
          }}
        >
          {hero.text}
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 40,
            animation: "bucanRise .9s ease .86s both",
            pointerEvents: "auto",
          }}
        >
          <a
            href={hero.ctaPrimary.href}
            className="btn-gold focus-cream"
            style={{
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              padding: "17px 36px",
            }}
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaTelefon.href}
            className="btn-outline-cream focus-cream"
            style={{
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: ".16em",
              padding: "16px 30px",
            }}
          >
            {hero.ctaTelefon.label}
          </a>
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          bottom: 86,
          transform: "translateX(-50%)",
          zIndex: 3,
          width: 1,
          height: 38,
          background: "linear-gradient(180deg,rgba(194,162,94,0),#C2A25E)",
          animation:
            "bucanFade 1s ease 1.4s both, bucanHint 2.8s ease-in-out 2.4s infinite",
        }}
      />
      <WaveDivider
        absolute
        d="M0,64 L0,38 C240,14 480,10 760,26 C1020,41 1260,44 1440,30 L1440,64 Z"
        line="M0,38 C240,14 480,10 760,26 C1020,41 1260,44 1440,30"
        fill="#F7F3EA"
      />
    </section>
  );
}

export default HeroSection;
