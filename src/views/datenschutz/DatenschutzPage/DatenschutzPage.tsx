import { LegalPageShell } from "core/components/page-shells";
import { datenschutz, kontakt, legal } from "core/consts/content";

const h2Style = {
  margin: "40px 0 0",
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

function DatenschutzPage() {
  return (
    <LegalPageShell
      eyebrow={legal.eyebrow}
      titel={datenschutz.titel}
      footerLinks={datenschutz.footerLinks}
    >
      <p style={{ ...pStyle, margin: "22px 0 0" }}>{datenschutz.intro}</p>
      <h2 style={{ ...h2Style, margin: "44px 0 0" }}>
        {datenschutz.verantwortlicheTitel}
      </h2>
      <p style={pStyle}>
        {kontakt.firma}
        <br />
        {kontakt.strasse}, {kontakt.ort}
        <br />
        Telefon: <a href={kontakt.telefonHref}>{kontakt.telefonDisplay}</a> · E-Mail:{" "}
        <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
      </p>
      {datenschutz.abschnitte.map((abschnitt) => (
        <div key={abschnitt.titel}>
          <h2 style={h2Style}>{abschnitt.titel}</h2>
          <p style={pStyle}>{abschnitt.text}</p>
        </div>
      ))}
      <p style={{ margin: "52px 0 0", fontSize: 13, color: "#8A8474" }}>
        {datenschutz.stand}
      </p>
    </LegalPageShell>
  );
}

export default DatenschutzPage;
