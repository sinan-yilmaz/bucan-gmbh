import Link from "next/link";
import { LegalPageShell } from "core/components/page-shells";
import { notFound } from "core/consts/content";

function NotFoundPage() {
  return (
    <LegalPageShell
      eyebrow={notFound.eyebrow}
      titel={notFound.titel}
      footerLinks={notFound.footerLinks}
    >
      <p style={{ margin: "22px 0 0", fontSize: 16, lineHeight: 1.75, color: "#4A463C" }}>
        {notFound.text}
      </p>
      <p style={{ margin: "36px 0 0" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "#C2A25E",
            color: "#0E2318",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            padding: "15px 30px",
          }}
        >
          {notFound.linkLabel}
        </Link>
      </p>
    </LegalPageShell>
  );
}

export default NotFoundPage;
