"use client";

import { useEffect, useRef, useState } from "react";
import { eventwelten } from "core/consts/content";
import { FadeInImage, Reveal } from "lib/primitives/components";
import WaveDivider from "../WaveDivider";
import LightboxArea from "./LightboxArea";

function EventweltenSection() {
  const spurRef = useRef<HTMLDivElement | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [stand, setStand] = useState({ anteil: 0.3, position: 0, anfang: true, ende: false });

  const anzahl = eventwelten.karten.length;
  const balken = Math.max(stand.anteil, 0.08);

  useEffect(() => {
    const spur = spurRef.current;
    if (!spur) return;
    const messen = () => {
      const max = spur.scrollWidth - spur.clientWidth;
      setStand({
        anteil: spur.scrollWidth > 0 ? spur.clientWidth / spur.scrollWidth : 1,
        position: max > 0 ? spur.scrollLeft / max : 0,
        anfang: spur.scrollLeft <= 4,
        ende: spur.scrollLeft >= max - 4,
      });
    };
    const frame = requestAnimationFrame(messen);
    spur.addEventListener("scroll", messen, { passive: true });
    window.addEventListener("resize", messen);
    return () => {
      cancelAnimationFrame(frame);
      spur.removeEventListener("scroll", messen);
      window.removeEventListener("resize", messen);
    };
  }, []);

  const handleClose = () => setLightboxIndex(-1);

  const handleStep = (richtung: number) => {
    if (anzahl < 2) return;
    setLightboxIndex((index) => (((index + richtung) % anzahl) + anzahl) % anzahl);
  };

  const blaettern = (richtung: number) => {
    const spur = spurRef.current;
    const karte = spur?.firstElementChild;
    if (!spur || !karte) return;
    const schritt = karte.getBoundingClientRect().width + 20;
    const sichtbar = Math.max(1, Math.floor((spur.clientWidth - 120) / schritt));
    const reduziert = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    spur.scrollBy({ left: richtung * schritt * sichtbar, behavior: reduziert ? "auto" : "smooth" });
  };

  return (
    <section
      id="eventwelten"
      style={{
        position: "relative",
        background: "#0E2318",
        padding: "clamp(64px,8vw,112px) 0 clamp(104px,12vw,156px)",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(70% 60% at 18% 0%,rgba(194,162,94,.13),rgba(194,162,94,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", padding: "0 clamp(20px,5vw,40px)" }}>
        <div data-ew-kopf>
          <Reveal style={{ maxWidth: 620 }}>
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".32em",
                textTransform: "uppercase",
                color: "#C2A25E",
              }}
            >
              {eventwelten.eyebrow}
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-marcellus), serif",
                fontWeight: 400,
                fontSize: "clamp(30px,4vw,44px)",
                lineHeight: 1.15,
                color: "#FFFFFF",
                textWrap: "balance",
              }}
            >
              {eventwelten.titel}
            </h2>
            <p
              style={{
                margin: "18px 0 0",
                maxWidth: "58ch",
                fontSize: 16.5,
                lineHeight: 1.7,
                color: "#CFC8B6",
              }}
            >
              {eventwelten.text}
            </p>
          </Reveal>
          <div data-ew-pfeile>
            <button
              type="button"
              data-ew-pfeil
              className="lb-btn focus-cream"
              aria-label={eventwelten.vorherige}
              disabled={stand.anfang}
              onClick={() => blaettern(-1)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12.5 3.5 L6 10 L12.5 16.5" />
              </svg>
            </button>
            <button
              type="button"
              data-ew-pfeil
              className="lb-btn focus-cream"
              aria-label={eventwelten.naechste}
              disabled={stand.ende}
              onClick={() => blaettern(1)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7.5 3.5 L14 10 L7.5 16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={spurRef}
        data-ew-spur
        role="region"
        aria-label={eventwelten.eyebrow}
        tabIndex={0}
        className="focus-cream"
      >
        {eventwelten.karten.map((karte, index) => (
          <button
            key={karte.titel}
            type="button"
            data-ew-karte
            aria-label={`${karte.titel}: ${eventwelten.itemLabel}`}
            className="zoom-hover focus-cream"
            onClick={() => setLightboxIndex(index)}
          >
            <FadeInImage
              src={karte.bild.src}
              alt={karte.bild.alt}
              style={{
                objectPosition: karte.position,
                filter: "sepia(.15) saturate(.85) brightness(.95)",
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 18,
                left: 20,
                zIndex: 2,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: ".24em",
                color: "#E3CF9F",
                textShadow: "0 1px 8px rgba(7,21,16,.6)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                padding: "72px 22px 22px",
                background: "linear-gradient(180deg,rgba(7,21,16,0),rgba(7,21,16,.9))",
                pointerEvents: "none",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontFamily: "var(--font-marcellus), serif",
                  fontWeight: 400,
                  fontSize: 22,
                  lineHeight: 1.25,
                  color: "#FFFFFF",
                }}
              >
                {karte.titel}
              </strong>
              <span
                style={{
                  display: "block",
                  marginTop: 6,
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "#D9D2C0",
                }}
              >
                {karte.zeile}
              </span>
            </span>
          </button>
        ))}
      </div>
      <div style={{ position: "relative", padding: "0 clamp(20px,5vw,40px)" }}>
        <div
          aria-hidden="true"
          style={{
            position: "relative",
            maxWidth: 1180,
            height: 1,
            margin: "40px auto 0",
            background: "rgba(194,162,94,.22)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -1,
              height: 3,
              width: `${balken * 100}%`,
              left: `${stand.position * (1 - balken) * 100}%`,
              background: "#C2A25E",
            }}
          />
        </div>
      </div>
      <WaveDivider
        absolute
        zIndex={3}
        d="M0,64 L0,36 C260,12 520,14 780,30 C1040,46 1240,42 1440,26 L1440,64 Z"
        line="M0,36 C260,12 520,14 780,30 C1040,46 1240,42 1440,26"
        fill="#FBF8F1"
      />
      {lightboxIndex >= 0 ? (
        <LightboxArea index={lightboxIndex} onClose={handleClose} onStep={handleStep} />
      ) : null}
    </section>
  );
}

export default EventweltenSection;
