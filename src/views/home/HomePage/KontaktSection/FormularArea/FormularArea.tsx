"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import Link from "next/link";
import { kontakt, kontaktSektion } from "core/consts/content";

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: 7,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "#4A463C",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #D8CDB2",
  background: "#FFFFFF",
  color: "#2B2A26",
  fontSize: 15,
  borderRadius: 0,
};

const hinweisBoxStyle: CSSProperties = {
  border: "1px solid #C2A25E",
  background: "#FBF7EC",
  padding: "16px 20px",
  fontSize: 15,
  lineHeight: 1.6,
  color: "#5C574B",
};

type Status = "idle" | "sending" | "sent" | "error" | "offline";

function FormularArea() {
  const [status, setStatus] = useState<Status>("idle");
  const [fehlerText, setFehlerText] = useState("");
  const geladenUm = useRef(0);

  useEffect(() => {
    geladenUm.current = Date.now();
  }, []);

  const formular = kontaktSektion.formular;
  const sendet = status === "sending";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const daten = new FormData(event.currentTarget);
    daten.set(
      "dauer",
      String(geladenUm.current > 0 ? Date.now() - geladenUm.current : 0),
    );
    setStatus("sending");
    try {
      const antwort = await fetch("/kontakt.php", { method: "POST", body: daten });
      let json: { ok?: boolean; error?: string } | null = null;
      try {
        json = await antwort.json();
      } catch {
        json = null;
      }
      if (antwort.ok && json && json.ok === true) {
        setStatus("sent");
      } else if (json && typeof json.error === "string" && json.error) {
        setFehlerText(json.error);
        setStatus("error");
      } else if (!antwort.ok) {
        setFehlerText(formular.fehlerServer);
        setStatus("error");
      } else {
        // 2xx without a JSON body: endpoint not available (e.g. local dev)
        setStatus("offline");
      }
    } catch {
      setStatus("offline");
    }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-marcellus), serif",
            fontWeight: 400,
            fontSize: 26,
            color: "#0E2318",
          }}
        >
          {formular.titel}
        </h3>
      </div>
      {status === "sent" ? (
        <div
          style={{
            marginTop: 26,
            border: "1px solid #C2A25E",
            background: "#FBF7EC",
            padding: 32,
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-marcellus), serif",
              fontSize: 22,
              color: "#0E2318",
            }}
          >
            {formular.erfolg.titel}
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "#5C574B" }}>
            {formular.erfolg.text}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: 26,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 18,
          }}
        >
          <div>
            <label htmlFor="f-name" style={labelStyle}>
              {formular.felder.name}
            </label>
            <input
              id="f-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="f-email" style={labelStyle}>
              {formular.felder.email}
            </label>
            <input
              id="f-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="f-tel" style={labelStyle}>
              {formular.felder.telefon}
            </label>
            <input id="f-tel" name="telefon" type="tel" autoComplete="tel" style={inputStyle} />
          </div>
          <div>
            <label htmlFor="f-datum" style={labelStyle}>
              {formular.felder.datum}
            </label>
            <input
              id="f-datum"
              name="datum"
              type="date"
              style={{ ...inputStyle, padding: "11px 14px" }}
            />
          </div>
          <div>
            <label htmlFor="f-anlass" style={labelStyle}>
              {formular.felder.anlass}
            </label>
            <select
              id="f-anlass"
              name="anlass"
              style={{ ...inputStyle, padding: "12px 10px" }}
            >
              <option value="">{formular.anlassPlaceholder}</option>
              {formular.anlassOptionen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="f-personen" style={labelStyle}>
              {formular.felder.personen}
            </label>
            <input
              id="f-personen"
              name="personen"
              type="number"
              min={1}
              step={1}
              placeholder={formular.felder.personenPlaceholder}
              style={inputStyle}
            />
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <label htmlFor="f-nachricht" style={labelStyle}>
              {formular.felder.nachricht}
            </label>
            <textarea
              id="f-nachricht"
              name="nachricht"
              rows={4}
              required
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
          <div className="hp-field" aria-hidden="true">
            <label htmlFor="f-firma">Firma</label>
            <input
              id="f-firma"
              name="firma"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <p
            style={{
              gridColumn: "1/-1",
              margin: 0,
              fontSize: 13.5,
              lineHeight: 1.55,
              color: "#5C574B",
            }}
          >
            {formular.hinweisVor}
            <Link href="/datenschutz/" style={{ color: "#806429" }}>
              {formular.hinweisLink}
            </Link>
            {formular.hinweisNach}
          </p>
          {status === "error" ? (
            <div style={{ gridColumn: "1/-1", ...hinweisBoxStyle }} role="alert">
              {fehlerText}
            </div>
          ) : null}
          {status === "offline" ? (
            <div style={{ gridColumn: "1/-1", ...hinweisBoxStyle }} role="alert">
              {formular.fehlerNetz}{" "}
              <a href={kontakt.telefonHref} style={{ color: "#806429" }}>
                {kontakt.telefonDisplay}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${kontakt.email}`} style={{ color: "#806429" }}>
                {kontakt.email}
              </a>
            </div>
          ) : null}
          <div style={{ gridColumn: "1/-1" }}>
            <button
              type="submit"
              disabled={sendet}
              className="btn-gold"
              style={{
                border: "none",
                cursor: sendet ? "default" : "pointer",
                opacity: sendet ? 0.7 : 1,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                padding: "17px 36px",
              }}
            >
              {sendet ? formular.sendet : formular.absenden}
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default FormularArea;
