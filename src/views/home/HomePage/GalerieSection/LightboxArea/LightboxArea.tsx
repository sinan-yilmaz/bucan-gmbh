"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent, TouchEvent } from "react";
import { galerie } from "core/consts/content";

type LightboxAreaProps = {
  index: number;
  onClose?: () => void;
  onStep?: (richtung: number) => void;
};

function LightboxArea({
  index,
  onClose = () => {},
  onStep = () => {},
}: LightboxAreaProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const touchX = useRef<number | null>(null);
  const mounted = useRef(false);

  const bilder = galerie.bilder;
  const anzahl = bilder.length;
  const bild = bilder[index];
  const navDisplay = anzahl > 1 ? "flex" : "none";

  useEffect(() => {
    const lastFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onStep(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        onStep(-1);
      } else if (event.key === "Tab") {
        const overlay = overlayRef.current;
        if (!overlay) return;
        const focusables = Array.from(overlay.querySelectorAll("button")).filter(
          (button) => button.offsetParent !== null,
        );
        if (!focusables.length) return;
        let next =
          focusables.indexOf(document.activeElement as HTMLButtonElement) +
          (event.shiftKey ? -1 : 1);
        if (next >= focusables.length) next = 0;
        if (next < 0) next = focusables.length - 1;
        event.preventDefault();
        focusables[next].focus();
      }
    };
    document.addEventListener("keydown", handleKey, true);
    return () => document.removeEventListener("keydown", handleKey, true);
  }, [onClose, onStep]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const overlay = overlayRef.current;
      if (!overlay || !overlay.animate) return;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      overlay.animate(
        { opacity: [0, 1] },
        { duration: reducedMotion ? 180 : 300, easing: "ease" },
      );
      const img = imgRef.current;
      if (img && !reducedMotion) {
        img.animate(
          { opacity: [0, 1], transform: ["scale(.955)", "scale(1)"] },
          { duration: 340, easing: "cubic-bezier(.2,.7,.25,1)" },
        );
      }
      const close = overlay.querySelector<HTMLButtonElement>("[data-lb-close]");
      if (close) close.focus();
    });
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      requestAnimationFrame(() => {
        const img = imgRef.current;
        if (img && img.animate) {
          img.animate({ opacity: [0, 1] }, { duration: 200, easing: "ease" });
        }
      });
    }
    if (anzahl < 2) return;
    [index - 1, index + 1].forEach((nachbar) => {
      const src = bilder[((nachbar % anzahl) + anzahl) % anzahl].src.src;
      const preload = new Image();
      preload.src = src;
    });
  }, [index, anzahl, bilder]);

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchX.current = event.touches[0] ? event.touches[0].clientX : null;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchX.current == null || !event.changedTouches[0]) return;
    const deltaX = event.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(deltaX) > 44) onStep(deltaX < 0 ? 1 : -1);
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={galerie.lightbox.label}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "rgba(9,22,15,.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- Großansicht in Originalgröße, bewusst ohne Lazy-Loading */}
      <img
        ref={imgRef}
        src={bild.src.src}
        alt={bild.alt}
        style={{
          maxWidth: "min(90vw,1360px)",
          maxHeight: "84vh",
          objectFit: "contain",
          display: "block",
          boxShadow: "0 40px 90px rgba(0,0,0,.55)",
        }}
      />
      <button
        type="button"
        data-lb-close
        onClick={onClose}
        aria-label={galerie.lightbox.schliessen}
        className="lb-btn focus-cream"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M2 2 L14 14" />
          <path d="M14 2 L2 14" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => onStep(-1)}
        aria-label={galerie.lightbox.vorheriges}
        className="lb-btn focus-cream"
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 52,
          height: 52,
          display: navDisplay,
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
        }}
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
        onClick={() => onStep(1)}
        aria-label={galerie.lightbox.naechstes}
        className="lb-btn focus-cream"
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 52,
          height: 52,
          display: navDisplay,
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          padding: 0,
        }}
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
      <p
        style={{
          position: "absolute",
          left: "50%",
          bottom: 22,
          transform: "translateX(-50%)",
          margin: 0,
          fontSize: 13,
          letterSpacing: ".24em",
          color: "#EDE7D8",
        }}
      >
        {index + 1} / {anzahl}
      </p>
    </div>
  );
}

export default LightboxArea;
