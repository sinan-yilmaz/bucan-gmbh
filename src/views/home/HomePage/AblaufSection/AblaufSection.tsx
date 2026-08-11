"use client";

import { useEffect, useRef } from "react";
import { ablauf } from "core/consts/content";

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

const ease = (a: number, b: number, p: number) => {
  const t = clamp01((p - a) / (b - a));
  return t * t * (3 - 2 * t);
};

function AblaufSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const apply = (werte: Record<string, string>) => {
      for (const [name, wert] of Object.entries(werte)) {
        section.style.setProperty(name, wert);
      }
    };

    const update = () => {
      const vh = window.innerHeight || 800;
      const rect = section.getBoundingClientRect();
      const start = vh * 0.9;
      const end = rect.height > vh * 0.75 ? vh * 0.85 - rect.height : vh * 0.38;
      const p = clamp01((start - rect.top) / Math.max(1, start - end));
      const line = ease(0.26, 0.96, p);
      apply({
        "--arrive": String(ease(0, 0.3, p)),
        "--line": String(line),
        "--o1": String(1 - ease(0, 0.17, line)),
        "--o2": String(1 - ease(0.48, 0.65, line)),
        "--o3": String(1 - ease(0.83, 1, line)),
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-ab
      style={{ padding: "clamp(64px,8vw,110px) clamp(20px,5vw,40px)" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
        <div data-ab-mask style={{ marginBottom: 12 }}>
          <p
            data-ab-rise
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "#6E552B",
            }}
          >
            {ablauf.eyebrow}
          </p>
        </div>
        <div data-ab-mask style={{ paddingBottom: 10 }}>
          <h2
            data-ab-rise
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
        </div>
        <div data-ab-steps>
          <span data-ab-thread aria-hidden="true" />
          <span data-ab-thread-draw aria-hidden="true" />
          <ol data-ab-grid style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {ablauf.schritte.map((schritt) => (
              <li key={schritt.nummer} data-ab-step>
                <span data-ab-badge aria-hidden="true">
                  <svg viewBox="0 0 82 82">
                    <circle
                      data-ab-ring
                      cx="41"
                      cy="41"
                      r="40"
                      pathLength={1}
                      transform="rotate(-90 41 41)"
                    />
                  </svg>
                  <span data-ab-num>{schritt.nummer}</span>
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
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default AblaufSection;
