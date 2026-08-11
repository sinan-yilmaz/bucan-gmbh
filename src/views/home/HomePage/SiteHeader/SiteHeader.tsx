"use client";

import { useEffect, useState } from "react";
import { kontakt, marke, nav } from "core/consts/content";

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menueOffen, setMenueOffen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menueOffen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenueOffen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleDesktop = () => {
      if (desktop.matches) setMenueOffen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [menueOffen]);

  const schliessen = () => setMenueOffen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: scrolled || menueOffen ? "#0E2318" : "transparent",
        boxShadow: scrolled && !menueOffen ? "0 8px 28px rgba(5,13,9,.35)" : "none",
        transition: "background .35s ease, box-shadow .35s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px clamp(20px,4vw,40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px 24px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#start"
          onClick={schliessen}
          style={{
            textDecoration: "none",
            color: "#FFFFFF",
            fontFamily: "var(--font-marcellus), serif",
            fontSize: 21,
            letterSpacing: ".16em",
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          {marke.wortmarke}
          <span
            style={{
              fontFamily: "var(--font-jost), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: ".3em",
              color: "#C2A25E",
              textTransform: "uppercase",
            }}
          >
            {marke.zusatz}
          </span>
        </a>
        <nav data-hd-nav aria-label={nav.ariaLabel}>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="lnk-nav"
              style={{ textDecoration: "none", fontSize: 15, letterSpacing: ".04em" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="btn-gold focus-cream"
            style={{
              textDecoration: "none",
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              padding: "11px 22px",
            }}
          >
            {nav.cta.label}
          </a>
        </nav>
        <button
          data-hd-burger
          data-offen={menueOffen ? "" : undefined}
          type="button"
          className="focus-cream"
          aria-expanded={menueOffen}
          aria-label={menueOffen ? nav.menueSchliessen : nav.menueOeffnen}
          onClick={() => setMenueOffen((offen) => !offen)}
        >
          <span />
          <span />
        </button>
      </div>
      <div data-hd-overlay data-offen={menueOffen ? "" : undefined}>
        <nav aria-label={nav.ariaLabel}>
          {nav.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="lnk-cream focus-cream"
              style={{ animationDelay: `${80 + index * 60}ms` }}
              onClick={schliessen}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div data-hd-unten>
          <a
            href={nav.cta.href}
            className="btn-gold focus-cream"
            onClick={schliessen}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              padding: "16px 22px",
            }}
          >
            {nav.cta.label}
          </a>
          <a
            href={kontakt.telefonHref}
            className="lnk-cream focus-cream"
            style={{ textDecoration: "none", fontSize: 16, letterSpacing: ".08em" }}
          >
            {kontakt.telefonDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
