"use client";

import { useEffect, useState } from "react";
import { marke, nav } from "core/consts/content";

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: scrolled ? "#0E2318" : "transparent",
        boxShadow: scrolled ? "0 8px 28px rgba(5,13,9,.35)" : "none",
        transition: "background .35s ease, box-shadow .35s ease",
      }}
    >
      <div
        style={{
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
        <nav
          aria-label={nav.ariaLabel}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,2.2vw,30px)",
            flexWrap: "wrap",
          }}
        >
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
      </div>
    </header>
  );
}

export default SiteHeader;
