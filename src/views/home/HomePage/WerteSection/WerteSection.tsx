import type { ReactNode } from "react";
import { werte } from "core/consts/content";
import { Reveal } from "lib/primitives/components";

const icons: Record<string, ReactNode> = {
  erfahrung: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#C2A25E"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M15 41 C9.5 35 7.5 26 10.5 17" />
      <path d="M33 41 C38.5 35 40.5 26 37.5 17" />
      <path d="M10.8 33.5 L5 31" />
      <path d="M9.4 26.5 L3.8 25" />
      <path d="M9.6 20 L4.6 16.6" />
      <path d="M37.2 33.5 L43 31" />
      <path d="M38.6 26.5 L44.2 25" />
      <path d="M38.4 20 L43.4 16.6" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-marcellus), serif"
        fontSize="16"
        fill="#806429"
        stroke="none"
      >
        25
      </text>
    </svg>
  ),
  liebe: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#C2A25E"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 39.5 C14.5 32 8 25.6 8 18.8 C8 13.8 11.9 10 16.6 10 C19.9 10 22.7 11.9 24 14.8 C25.3 11.9 28.1 10 31.4 10 C36.1 10 40 13.8 40 18.8 C40 25.6 33.5 32 24 39.5 Z" />
    </svg>
  ),
  team: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#C2A25E"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="19" cy="16.5" r="5.5" />
      <path d="M8.5 37.5 C8.5 30 13 26.5 19 26.5 C25 26.5 29.5 30 29.5 37.5" />
      <path d="M30.5 11.6 C34 12.2 36.5 15.1 36.5 18.6 C36.5 20.5 35.8 22.2 34.6 23.5" />
      <path d="M33.5 27.4 C38 28.6 40.5 31.8 40.5 36.5" />
    </svg>
  ),
  hand: (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      fill="none"
      stroke="#C2A25E"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M9 32 C9 22.5 15.7 15.5 24 15.5 C32.3 15.5 39 22.5 39 32" />
      <path d="M6 32 L42 32" />
      <circle cx="24" cy="11" r="2.4" />
    </svg>
  ),
};

function WerteSection() {
  return (
    <section
      style={{
        background: "#F7F3EA",
        padding: "clamp(68px,9vw,116px) clamp(20px,5vw,40px) clamp(48px,6vw,80px)",
      }}
    >
      <h2 className="sr-only">{werte.titel}</h2>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "clamp(30px,4vw,44px)",
          textAlign: "center",
        }}
      >
        {werte.punkte.map((punkt) => (
          <Reveal key={punkt.titel} delay={punkt.delay}>
            {icons[punkt.icon]}
            <h3
              style={{
                margin: "16px 0 8px",
                fontFamily: "var(--font-marcellus), serif",
                fontWeight: 400,
                fontSize: 21,
                color: "#0E2318",
              }}
            >
              {punkt.titel}
            </h3>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#5C574B" }}>
              {punkt.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default WerteSection;
