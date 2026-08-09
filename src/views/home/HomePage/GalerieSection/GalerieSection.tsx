"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { galerie } from "core/consts/content";
import { FadeInImage, Reveal } from "lib/primitives/components";
import LightboxArea from "./LightboxArea";

function GalerieSection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const anzahl = galerie.bilder.length;

  const handleOpen = (index: number) => setLightboxIndex(index);

  const handleClose = () => setLightboxIndex(-1);

  const handleStep = (richtung: number) => {
    if (anzahl < 2) return;
    setLightboxIndex((index) => (((index + richtung) % anzahl) + anzahl) % anzahl);
  };

  const handleItemKeyDown = (event: KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen(index);
    }
  };

  return (
    <section
      style={{
        padding: "clamp(48px,6vw,88px) clamp(20px,5vw,40px) clamp(64px,8vw,110px)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "#6E552B",
            }}
          >
            {galerie.eyebrow}
          </p>
          <h2 className="sr-only">{galerie.titel}</h2>
          <div
            style={{ width: 34, height: 1, background: "#C2A25E", margin: "16px auto 0" }}
            aria-hidden="true"
          />
        </Reveal>
        <Reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(46%,300px),1fr))",
            gap: 16,
          }}
        >
          {galerie.bilder.map((bild, index) => (
            <div
              key={bild.alt}
              role="button"
              tabIndex={0}
              aria-label={galerie.itemLabel}
              className="zoom-hover"
              style={{ aspectRatio: "4/3", overflow: "hidden", cursor: "pointer" }}
              onClick={() => handleOpen(index)}
              onKeyDown={(event) => handleItemKeyDown(event, index)}
            >
              <FadeInImage
                src={bild.src}
                alt={bild.alt}
                style={{ filter: "sepia(.15) saturate(.85) brightness(.95)" }}
              />
            </div>
          ))}
        </Reveal>
      </div>
      {lightboxIndex >= 0 ? (
        <LightboxArea
          index={lightboxIndex}
          onClose={handleClose}
          onStep={handleStep}
        />
      ) : null}
    </section>
  );
}

export default GalerieSection;
