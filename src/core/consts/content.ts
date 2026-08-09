import type { StaticImageData } from "next/image";
import galerie1 from "assets/images/galerie-1.webp";
import galerie2 from "assets/images/galerie-2.webp";
import galerie3 from "assets/images/galerie-3.webp";
import galerie4 from "assets/images/galerie-4.webp";
import galerie5 from "assets/images/galerie-5.webp";
import galerie6 from "assets/images/galerie-6.webp";
import heroBild from "assets/images/hero-bild.webp";
import leistungCatering from "assets/images/leistung-catering.webp";
import leistungEventservice from "assets/images/leistung-eventservice.webp";
import leistungFeinkost from "assets/images/leistung-feinkost.webp";
import standortKoenigsbrunn from "assets/images/standort-koenigsbrunn.webp";
import standortLechhausen from "assets/images/standort-lechhausen.webp";
import standortNeusaess from "assets/images/standort-neusaess.webp";
import ueberUnsFoto from "assets/images/ueber-uns-foto.webp";

export type Bild = {
  src: StaticImageData;
  alt: string;
};

export type Standort = {
  name: string;
  adresse: [string, string];
  mapsUrl: string;
  mapsLabel: string;
  bild: Bild;
};

export const site = {
  url: "https://bucan-eventservice.de",
  title: "Bucan GmbH – Premium Catering & Eventservice in Günzburg",
  description:
    "Mediterrane Feinkost, Business Catering und Eventservice – 25 Jahre Erfahrung, alles aus einer Hand. Jetzt unverbindlich Ihr Event anfragen.",
  impressumTitle: "Impressum – Bucan GmbH",
  datenschutzTitle: "Datenschutzerklärung – Bucan GmbH",
  notFoundTitle: "Seite nicht gefunden – Bucan GmbH",
  ogImage: "/og-image.jpg",
} as const;

export const kontakt = {
  firma: "Bucan GmbH",
  telefonDisplay: "0174 7384427",
  telefonHref: "tel:+491747384427",
  telefonInternational: "+49 174 7384427",
  whatsappHref: "https://wa.me/491747384427",
  email: "info@bucan-eventservice.de",
  strasse: "Dillinger Straße 36",
  plz: "89312",
  stadt: "Günzburg",
  ort: "89312 Günzburg",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dillinger+Stra%C3%9Fe+36,+89312+G%C3%BCnzburg",
  instagramHref: "https://www.instagram.com/bucanevent",
  instagramLabel: "Instagram",
} as const;

export const marke = {
  wortmarke: "BUCAN",
  zusatz: "GmbH",
  claim: "Qualität. Frische. Leidenschaft.",
} as const;

export const nav = {
  ariaLabel: "Hauptnavigation",
  links: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Für wen", href: "#fuer-wen" },
    { label: "Feinkost", href: "#feinkost" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  cta: { label: "Event anfragen", href: "#kontakt" },
} as const;

export const hero = {
  script: "Mit Liebe zum Detail.",
  titel: ["Für besondere", "Momente."],
  text: "Premium Catering, mediterrane Feinkost und Eventservice in Günzburg – seit 25 Jahren.",
  ctaPrimary: { label: "Event anfragen", href: "#kontakt" },
  ctaTelefon: { label: kontakt.telefonDisplay, href: kontakt.telefonHref },
  bild: {
    src: heroBild,
    alt: "Festlich gedeckter Tisch im Kerzenschein mit Granatapfel und Keramikgeschirr",
  },
} as const;

export const werte = {
  titel: "Unsere Werte",
  punkte: [
    {
      icon: "erfahrung",
      titel: "25 Jahre Erfahrung",
      text: "Qualität, auf die Sie sich verlassen können.",
      delay: 0,
    },
    {
      icon: "liebe",
      titel: "Mit Liebe gemacht",
      text: "Jedes Detail, jede Zutat, jede Kreation.",
      delay: 100,
    },
    {
      icon: "team",
      titel: "Zuverlässig & professionell",
      text: "Ein eingespieltes Team für einen reibungslosen Ablauf.",
      delay: 200,
    },
    {
      icon: "hand",
      titel: "Alles aus einer Hand",
      text: "Von der Planung bis zum Service.",
      delay: 300,
    },
  ],
} as const;

export const leistungen = {
  eyebrow: "Leistungen",
  titel: "Was wir für Sie tun.",
  karten: [
    {
      titel: "Catering & Buffets",
      text: "Fingerfood, Buffets und Menüs – frisch zubereitet und liebevoll angerichtet, vom kleinen Empfang bis zum großen Event.",
      bild: {
        src: leistungCatering,
        alt: "Reich gedecktes Buffet mit Räucherlachs, Käseplatte, Caprese und frischem Obst",
      },
      delay: 0,
      link: null,
    },
    {
      titel: "Mediterrane Feinkost",
      text: "Antipasti und mediterrane Spezialitäten – unsere Leidenschaft schmeckt man in jeder Kreation.",
      bild: {
        src: leistungFeinkost,
        alt: "Antipasti-Teller mit Oliven, gefüllter Paprika, Salami, Parmesan, getrockneten Tomaten und Grissini",
      },
      delay: 110,
      link: { label: "Unsere Standorte →", href: "#feinkost" },
    },
    {
      titel: "Eventservice",
      text: "Planung, Dekoration, Personal und Service vor Ort. Wir kümmern uns um alles – Sie genießen den Moment.",
      bild: {
        src: leistungEventservice,
        alt: "Festlich eingedeckte Tafel mit Blumengestecken, Weingläsern und weißen Stuhlhussen",
      },
      delay: 220,
      link: null,
    },
  ],
} as const;

export const ueberUns = {
  eyebrow: "Über uns",
  titel: "Seit 25 Jahren eine Herzensangelegenheit.",
  text: "Was mit einer großen Liebe zur mediterranen Küche begann, ist heute unsere Berufung. Wir verwenden sorgfältig ausgewählte Zutaten und bringen unsere ganze Leidenschaft in jedes Gericht und jede Veranstaltung ein.",
  signatur: "Rukiye Bucan",
  rolle: "Geschäftsführung",
  bild: {
    src: ueberUnsFoto,
    alt: "Hand träufelt Olivenöl über eine mediterrane Vorspeisenplatte im Restaurant",
  },
} as const;

export const fuerWen = {
  eyebrow: "Für wen",
  titel: "Für jeden Anlass der richtige Partner.",
  karten: [
    {
      titel: "Firmen & Unternehmen",
      text: "Business Catering, Meetings, Jubiläen und Firmenfeiern.",
      delay: 0,
    },
    {
      titel: "Hotels & Gastronomie",
      text: "Buffets und Veranstaltungen in verlässlicher Zusammenarbeit.",
      delay: 90,
    },
    {
      titel: "Rathäuser & Behörden",
      text: "Empfänge, Sitzungen und offizielle Anlässe.",
      delay: 180,
    },
    {
      titel: "Hochzeiten & private Feiern",
      text: "Individuelle Konzepte für Ihren besonderen Tag.",
      delay: 270,
    },
  ],
} as const;

export const galerie = {
  eyebrow: "Galerie",
  titel: "Einblicke in unsere Arbeit",
  itemLabel: "Bild in Großansicht öffnen",
  lightbox: {
    label: "Galerie-Großansicht",
    schliessen: "Großansicht schließen",
    vorheriges: "Vorheriges Bild",
    naechstes: "Nächstes Bild",
  },
  bilder: [
    {
      src: galerie1,
      alt: "Feine Canapés mit Tomate, Olive und Erdbeeren auf weißen Platten",
    },
    {
      src: galerie2,
      alt: "Elegantes Dessertbuffet mit Schichtdesserts im Glas auf einer Etagere",
    },
    {
      src: galerie3,
      alt: "Festlich geschmückte Hochzeitstafel mit Blumengestecken und goldenen Stühlen",
    },
    {
      src: galerie4,
      alt: "Bunt angerichtete Snackplatte mit frischem Gemüse, Mais und Dips",
    },
    {
      src: galerie5,
      alt: "Fingerfood-Häppchen auf Porzellanlöffeln, angerichtet auf einem Holzbrett",
    },
    {
      src: galerie6,
      alt: "Olivenzweig mit grünen Oliven in Nahaufnahme",
    },
  ],
} as const;

export const zitat = {
  zeile1: "Qualität. Frische. Leidenschaft.",
  zeile2: "Alles aus einer Hand.",
} as const;

export const feinkost = {
  eyebrow: "Symirna Foods",
  titel: "Täglich frisch. An drei Standorten.",
  text: "Mediterrane Feinkost für jeden Tag: Bei Symirna Foods gibt es hausgemachte Pasten und Aufstriche, Antipasti, Oliven und Spezialitäten – frisch an der Theke, zum Probieren und zum Mitnehmen.",
  standorte: [
    {
      name: "Kaufland Neusäß",
      adresse: ["Daimlerstraße 18", "86356 Neusäß"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Daimlerstra%C3%9Fe+18%2C+86356+Neus%C3%A4%C3%9F",
      mapsLabel: "Route zu Kaufland Neusäß öffnen",
      bild: {
        src: standortNeusaess,
        alt: "Symirna-Feinkosttheke mit frischen Antipasti im Kaufland Neusäß",
      },
      delay: 0,
    },
    {
      name: "NEO Königsbrunn",
      adresse: ["Hunnenstraße 2", "86343 Königsbrunn"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Hunnenstra%C3%9Fe+2%2C+86343+K%C3%B6nigsbrunn",
      mapsLabel: "Route zu NEO Königsbrunn öffnen",
      bild: {
        src: standortKoenigsbrunn,
        alt: "Ladenfront von Symirna Foods mit Feinkosttheke im NEO Königsbrunn",
      },
      delay: 110,
    },
    {
      name: "Kaufland Augsburg-Lechhausen",
      adresse: ["Meraner Straße 6", "86165 Augsburg"],
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Meraner+Stra%C3%9Fe+6%2C+86165+Augsburg",
      mapsLabel: "Route zu Kaufland Augsburg-Lechhausen öffnen",
      bild: {
        src: standortLechhausen,
        alt: "Symirna-Feinkosttheke mit Salaten und Antipasti im Kaufland Augsburg-Lechhausen",
      },
      delay: 220,
    },
  ],
  routeLabel: "Route öffnen ↗",
} as const;

export const ablauf = {
  eyebrow: "Ablauf",
  titel: "So einfach geht's.",
  schritte: [
    {
      nummer: "1",
      titel: "Anfrage senden",
      text: "Erzählen Sie uns von Ihrem Anlass.",
      delay: 0,
    },
    {
      nummer: "2",
      titel: "Persönliche Beratung",
      text: "Wir erstellen Ihr individuelles Konzept.",
      delay: 110,
    },
    {
      nummer: "3",
      titel: "Unbeschwert feiern",
      text: "Wir kümmern uns um jedes Detail.",
      delay: 220,
    },
  ],
} as const;

export const kontaktSektion = {
  eyebrow: "Kontakt",
  titel: "Lassen Sie uns gemeinsam unvergessliche Momente schaffen.",
  formular: {
    titel: "Event anfragen",
    felder: {
      name: "Name *",
      email: "E-Mail *",
      telefon: "Telefon",
      datum: "Datum des Events",
      anlass: "Anlass",
      personen: "Personenzahl (ca.)",
      personenPlaceholder: "z. B. 80",
      nachricht: "Nachricht *",
    },
    anlassOptionen: [
      "Firmenfeier",
      "Hochzeit",
      "Empfang",
      "Private Feier",
      "Sonstiges",
    ],
    anlassPlaceholder: "Bitte wählen",
    datenschutzVor: "Ich habe die ",
    datenschutzLink: "Datenschutzerklärung",
    datenschutzNach:
      " gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu. *",
    absenden: "Anfrage senden",
    sendet: "Wird gesendet …",
    erfolg: {
      titel: "Vielen Dank für Ihre Anfrage.",
      text: "Wir melden uns persönlich bei Ihnen, um Ihr Event gemeinsam zu planen.",
    },
    fehlerServer:
      "Ihre Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut.",
    fehlerNetz:
      "Das Formular ist momentan nicht erreichbar. Sie erreichen uns direkt:",
  },
  direkt: {
    titel: "Direkt erreichen",
    telefonLabel: "Telefon",
    whatsappLabel: "Per WhatsApp anfragen",
    emailLabel: "E-Mail",
    adresseLabel: "Adresse",
    mapsLabel: "Route in Google Maps öffnen ↗",
  },
} as const;

export const footer = {
  copyrightName: "Bucan GmbH",
  links: [
    { label: "Impressum", href: "/impressum/" },
    { label: "Datenschutz", href: "/datenschutz/" },
  ],
} as const;

export const legal = {
  eyebrow: "Rechtliches",
  zurStartseite: "← Zur Startseite",
  copyright: "© 2026 Bucan GmbH, Günzburg",
} as const;

export const impressum = {
  titel: "Impressum",
  angabenTitel: "Angaben gemäß § 5 DDG",
  vertretung: "Vertreten durch die Geschäftsführerin: Rukiye Bucan",
  kontaktTitel: "Kontakt",
  registerTitel: "Registereintrag",
  registerGericht: "Registergericht: Amtsgericht Memmingen",
  registerNummer: "Registernummer: HRB 22414",
  verantwortlichTitel: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
  verantwortlichText: "Rukiye Bucan, Anschrift wie oben.",
  credit: "Konzept, Design & Umsetzung: webdiv",
  footerLinks: [
    { label: "Startseite", href: "/" },
    { label: "Datenschutz", href: "/datenschutz/" },
  ],
} as const;

export const datenschutz = {
  titel: "Datenschutzerklärung",
  intro:
    "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Erklärung informiert Sie darüber, welche Daten beim Besuch dieser Website und bei Anfragen verarbeitet werden.",
  verantwortlicheTitel: "1. Verantwortliche Stelle",
  abschnitte: [
    {
      titel: "2. Hosting & Server-Logfiles",
      text: "Diese Website wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, gehostet. Beim Aufruf der Website verarbeitet Strato automatisch technisch notwendige Server-Logfiles (u. a. IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene Seite, Browsertyp). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Die Logfiles werden nach kurzer Zeit gelöscht. Mit Strato besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.",
    },
    {
      titel: "3. Kontaktformular & Kontaktaufnahme",
      text: "Wenn Sie uns über das Anfrageformular, per Telefon, WhatsApp oder E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    },
    {
      titel: "4. Keine Cookies, kein Tracking",
      text: "Diese Website verwendet keine Cookies, keine Analyse-Tools und keine externen Einbindungen, die eine Einwilligung erfordern würden. Schriften werden lokal von unserem Server geladen.",
    },
    {
      titel: "5. Ihre Rechte",
      text: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 15–21 DSGVO). Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.",
    },
  ],
  stand: "Stand: August 2026",
  footerLinks: [
    { label: "Startseite", href: "/" },
    { label: "Impressum", href: "/impressum/" },
  ],
} as const;

export const notFound = {
  eyebrow: "Fehler 404",
  titel: "Seite nicht gefunden",
  text: "Die aufgerufene Seite existiert nicht oder wurde verschoben. Über die Startseite finden Sie alle Inhalte rund um Catering, Feinkost und Eventservice der Bucan GmbH.",
  linkLabel: "← Zur Startseite",
  footerLinks: [
    { label: "Startseite", href: "/" },
    { label: "Impressum", href: "/impressum/" },
    { label: "Datenschutz", href: "/datenschutz/" },
  ],
} as const;
