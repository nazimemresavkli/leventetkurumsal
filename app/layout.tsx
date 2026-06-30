import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookTransition from "@/components/BookTransition";
import HideOnAdmin from "@/components/HideOnAdmin";
import LightboxProvider from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";
import { RESTAURANT, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Levent Et | Sakarya Serdivan Açık Büfe Kahvaltı ve Et Restoranı",
    template: "%s | Levent Et",
  },
  description:
    "Levent Et, Sakarya Serdivan Kazımpaşa'da açık büfe kahvaltı, közde mangal et çeşitleri ve döner sunan restorandır. Rezervasyon: 0544 272 11 44.",
  keywords: [
    "Levent Et", "Sakarya et restoranı", "Serdivan açık büfe kahvaltı",
    "Sakarya kahvaltı", "Serdivan mangal", "Sakarya döner", "Kazımpaşa restoran",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Levent Et",
    title: "Levent Et | Sakarya Serdivan Açık Büfe Kahvaltı ve Et Restoranı",
    description: "Sakarya Serdivan'da açık büfe kahvaltı, közde mangal et çeşitleri ve döner.",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image", site: "@levent_et" },
  robots: { index: true, follow: true },
};

const restaurantLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: RESTAURANT.name,
  description:
    "Levent Et, Sakarya Serdivan Kazımpaşa'da açık büfe kahvaltı, közde mangal et çeşitleri ve döner sunan bir restorandır.",
  url: SITE_URL,
  telephone: "+90 544 272 11 44",
  servesCuisine: ["Türk Mutfağı", "Et ve Mangal", "Açık Büfe Kahvaltı", "Döner"],
  priceRange: "₺₺",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kazımpaşa Mah. 18 Nisan Cad.",
    addressLocality: "Serdivan",
    addressRegion: "Sakarya",
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: RESTAURANT.coords.lat, longitude: RESTAURANT.coords.lng },
  hasMap: RESTAURANT.mapsLink,
  areaServed: ["Serdivan", "Sakarya", "Adapazarı"],
  sameAs: [RESTAURANT.instagramUrl],
  // NOT: saatler temsilîdir; gerçek saatlerle güncelleyin.
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "08:00", closes: "24:00",
  }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd) }}
        />
        <LightboxProvider>
          <HideOnAdmin><BookTransition /></HideOnAdmin>
          <ScrollReveal />
          <HideOnAdmin><Header /></HideOnAdmin>
          <main>{children}</main>
          <HideOnAdmin><Footer /></HideOnAdmin>
          <HideOnAdmin><WhatsAppButton /></HideOnAdmin>
        </LightboxProvider>
      </body>
    </html>
  );
}
