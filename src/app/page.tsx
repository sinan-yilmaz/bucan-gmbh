import type { Metadata } from 'next';
import { kontakt, site } from 'core/consts/content';
import HomePage from 'views/home/HomePage';

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    locale: 'de_DE',
    url: '/',
    images: [{ url: site.ogImage, width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.ogImage]
  }
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: kontakt.firma,
    url: `${site.url}/`
  },
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    name: kontakt.firma,
    url: `${site.url}/`,
    image: `${site.url}${site.ogImage}`,
    telephone: kontakt.telefonInternational,
    email: kontakt.email,
    servesCuisine: 'Mediterran',
    address: {
      '@type': 'PostalAddress',
      streetAddress: kontakt.strasse,
      postalCode: kontakt.plz,
      addressLocality: kontakt.stadt,
      addressCountry: 'DE'
    }
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
