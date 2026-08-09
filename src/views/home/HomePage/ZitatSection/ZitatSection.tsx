import { zitat } from "core/consts/content";
import { Reveal } from "lib/primitives/components";
import WaveDivider from "../WaveDivider";

function ZitatSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#0E2318",
        padding: "clamp(88px,12vw,150px) clamp(20px,5vw,40px)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(7,21,16,.74)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(58% 90% at 50% 45%,rgba(194,162,94,.12),rgba(194,162,94,0) 70%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <Reveal
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            background: "#C2A25E",
            transform: "rotate(45deg)",
          }}
          aria-hidden="true"
        />
        <p
          style={{
            margin: "24px 0 0",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: "clamp(30px,4.6vw,54px)",
            lineHeight: 1.2,
            letterSpacing: ".03em",
            color: "#C2A25E",
            textWrap: "balance",
          }}
        >
          {zitat.zeile1}
        </p>
        <p
          style={{
            margin: "18px 0 0",
            fontFamily: "var(--font-great-vibes), cursive",
            fontWeight: 400,
            fontSize: "clamp(26px,3vw,38px)",
            lineHeight: 1.2,
            color: "#C2A25E",
          }}
        >
          {zitat.zeile2}
        </p>
      </Reveal>
      <WaveDivider
        absolute
        zIndex={3}
        d="M0,64 L0,36 C260,12 520,14 780,30 C1040,46 1240,42 1440,26 L1440,64 Z"
        line="M0,36 C260,12 520,14 780,30 C1040,46 1240,42 1440,26"
        fill="#ECEEE0"
      />
    </section>
  );
}

export default ZitatSection;
