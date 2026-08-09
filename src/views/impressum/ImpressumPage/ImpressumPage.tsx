import { LegalPageShell } from "core/components/page-shells";
import { impressum, kontakt, legal } from "core/consts/content";

const h2Style = {
  fontFamily: "var(--font-marcellus), serif",
  fontWeight: 400,
  fontSize: 21,
  color: "#0E2318",
} as const;

const pStyle = {
  margin: "12px 0 0",
  fontSize: 16,
  lineHeight: 1.75,
  color: "#4A463C",
} as const;

function ImpressumPage() {
  return (
    <LegalPageShell
      eyebrow={legal.eyebrow}
      titel={impressum.titel}
      footerLinks={impressum.footerLinks}
    >
      <h2 style={{ margin: "44px 0 0", ...h2Style }}>{impressum.angabenTitel}</h2>
      <p style={pStyle}>
        {kontakt.firma}
        <br />
        {kontakt.strasse}
        <br />
        {kontakt.ort}
      </p>
      <p style={{ ...pStyle, margin: "16px 0 0" }}>{impressum.vertretung}</p>
      <h2 style={{ margin: "40px 0 0", ...h2Style }}>{impressum.kontaktTitel}</h2>
      <p style={pStyle}>
        Telefon: <a href={kontakt.telefonHref}>{kontakt.telefonDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
      </p>
      <h2 style={{ margin: "40px 0 0", ...h2Style }}>{impressum.registerTitel}</h2>
      <p style={pStyle}>
        {impressum.registerGericht}
        <br />
        {impressum.registerNummer}
      </p>
      <h2 style={{ margin: "40px 0 0", ...h2Style }}>{impressum.verantwortlichTitel}</h2>
      <p style={pStyle}>{impressum.verantwortlichText}</p>
      <p style={{ margin: "52px 0 0", fontSize: 13, color: "#8A8474" }}>
        {impressum.credit}
      </p>
    </LegalPageShell>
  );
}

export default ImpressumPage;
